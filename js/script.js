myCanvas.height = 600;
myCanvas.width = 600;

const ctx = myCanvas.getContext("2d");

const p1 = new Point(350, 250);
const p2 = new Point(450, 100);
const p3 = new Point(120, 300);
const p4 = new Point(300, 500);
const p5 = new Point(50, 250);

const s1 = new Segment(p1, p2);
const s2 = new Segment(p3, p4);
const s3 = new Segment(p2, p5);
const s4 = new Segment(p4, p1);
const s5 = new Segment(p5, p3);

function addRandomPoint() {
  graph.tryAddPoint(
    new Point(Math.random() * myCanvas.width, Math.random() * myCanvas.height)
  );
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  graph.draw(ctx);
}

function addRandomSegment() {
  let index1 = Math.floor(Math.random() * graph.points.length);
  let index2 = Math.floor(Math.random() * graph.points.length);
  graph.tryAddSegment(new Segment(graph.points[index1], graph.points[index2]));
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  graph.draw(ctx);
}

const graph = new Graph([p1, p2, p3, p4, p5], [s1, s2, s3, s4, s5]);
graph.draw(ctx);
