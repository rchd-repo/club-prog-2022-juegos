const paths = [
  './assets/CA90.gif',
  './assets/CA126.gif',
  './assets/CA182.gif'
]

function setup() {
  noCanvas();
  let interval;
  let count = 0;
  interval = setInterval(()=> {
    const sel = paths[count];
    const header = select(".header-img-c");
    header.style("background-image", `url(${sel})`);
    count++;
    count = count >= paths.length ? 0 : count;
  }, 2840)
}