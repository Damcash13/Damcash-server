
// ai/engine.js — IA dames avec prises obligatoires + prises multiples

function clone(b){ return b.map(r=>r.slice()); }
function inB(r,c){ return r>=0&&r<8&&c>=0&&c<8; }
function side(p){ return p>0?"white":p<0?"black":null; }
function opp(s){ return s==="white"?"black":"white"; }
function king(p){ return Math.abs(p)===2; }

const DIR = { white: 1, black: -1 };

function dirs(p){
  const f = side(p)==="white"?DIR.white:DIR.black;
  const d=[[f,-1],[f,1]];
  if(king(p)) d.push([-f,-1],[-f,1]);
  return d;
}

function promote(p,r){
  if(p===1 && r===7) return 2;
  if(p===-1 && r===0) return -2;
  return p;
}

// 🔹 Génère toutes les captures possibles depuis une case
function capturesFrom(board,r,c){
  const p = board[r][c];
  const s = side(p);
  let results = [];

  for(const [dr,dc] of dirs(p)){
    const mr=r+dr, mc=c+dc;
    const lr=r+2*dr, lc=c+2*dc;
    if(
      inB(lr,lc) &&
      board[mr][mc] &&
      side(board[mr][mc])===opp(s) &&
      board[lr][lc]===0
    ){
      const b2 = clone(board);
      b2[r][c]=0;
      b2[mr][mc]=0;
      const np = promote(p,lr);
      b2[lr][lc]=np;

      const next = capturesFrom(b2,lr,lc);
      if(next.length){
        next.forEach(n=>{
          results.push({
            from:[r,c],
            to:n.to,
            captures:[[mr,mc], ...n.captures]
          });
        });
      } else {
        results.push({
          from:[r,c],
          to:[lr,lc],
          captures:[[mr,mc]]
        });
      }
    }
  }
  return results;
}

// 🔹 Tous les coups légaux
function legalMoves(board,turn){
  let captures=[];
  let simples=[];

  for(let r=0;r<8;r++)for(let c=0;c<8;c++){
    const p=board[r][c];
    if(!p || side(p)!==turn) continue;

    const caps = capturesFrom(board,r,c);
    captures.push(...caps);

    for(const [dr,dc] of dirs(p)){
      const nr=r+dr,nc=c+dc;
      if(inB(nr,nc) && board[nr][nc]===0){
        simples.push({from:[r,c],to:[nr,nc],captures:[]});
      }
    }
  }

  // 👉 prises obligatoires
  if(captures.length){
    const max = Math.max(...captures.map(c=>c.captures.length));
    return captures.filter(c=>c.captures.length===max);
  }

  return simples;
}

export function computeBestMove(board, turn){
  const moves = legalMoves(board,turn==="black"?"black":"white");
  return moves.length ? moves[0] : null;
}

