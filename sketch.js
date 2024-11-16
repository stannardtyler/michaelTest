let table;
let orbs = [];

function preload() {
  table = loadTable("global_inflation_data.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadData();
}

function draw() {
  // rect(10, 20, 30 ,40);
  // put drawing code here
  background(220);

  for (let i = 0; i < orbs.length; i++) {
    orbs[i].show();
  }
}

function keyPressed() {
  orbs.length = 0;
  loadData();
}

function loadData() {
  for (let r = 0; r < table.getRowCount(); r++) {
    let name = table.getString(r, "country_name");
    let data2024 = table.getString(r, "2024");

    let x = random(width);
    let y = random(height);
    // let size = 20;

    let db = new DataBall(x, y, data2024 * 3, name);
    orbs.push(db);
  }
}

class DataBall {
  constructor(tempX, tempY, tempS, tempN) {
    this.x = tempX;
    this.y = tempY;
    this.size = tempS;
    this.name = tempN;
  }

  show() {
    stroke(255);
    noFill();
    strokeWeight(4);
    circle(this.x, this.y, this.size);
    textAlign(CENTER);
    fill(0);
    strokeWeight(1);
    text(this.name, this.x, this.y);
    //text(this.size, this.x, this.y + 10);
  }
}
