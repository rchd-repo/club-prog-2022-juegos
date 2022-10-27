const tilesN = 4;
const divsx = 25;
const divsy = 3;
let s;
const graphics = [];
const types = ['circle', 'square'];
const pos = [[0, 0],[1, 0],[0, 1],[1, 1]];
const col1 = 255;
const col2 = 230;
let cnv;

function setup() {
  const w = document.body.clientWidth;
  s = floor(w / divsx);
  const h = s * divsy;
  cnv = createCanvas(w, h).hide();
  drawTiles();
}

function drawTiles() {
  background(col1);
  for (let i = 0; i < tilesN; i++) {
    graphics[i] = createGraphics(s, s);
    graphics[i].stroke(col2);
    graphics[i].strokeWeight(10*width/1000);
    graphics[i].rectMode(CENTER);
    const r = ceil(random(2));
    const tempos = shuffleArray(pos);
    const type = random(types);
    

    for (let j = 0; j < r; j++) {
      p = tempos.pop();
      if (type === 'circle') {
        graphics[i].ellipse(p[0] * s, p[1] * s, s);
      } else if (type === 'square') {        
        graphics[i].rect(p[0] * s, p[1] * s, s, s);
      }
    }    
  }

  for (let x = 0; x < divsx; x++) {
    for (let y = 0; y < divsy; y++) {
      const img = random(graphics);
      image(img, x * s, y * s);
    }
  }
  
  const url = cnv.elt.toDataURL();
  select(".header-img-c").style('background-image', `url("${url}")`);
}

function shuffleArray(arr) {
  return [...arr].sort(() => 0.5 - Math.random());
}

function windowResized() {
  const w = document.body.clientWidth;
  s = floor(w / divsx);
  const h = s * divsy;
  resizeCanvas(w, h);
  drawTiles();
}