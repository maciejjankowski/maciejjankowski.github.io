void setup() {
  size(800, 800);
  background(255);
  noLoop();
}

void draw() {
  translate(width/2, height/2);
  stroke(0, 204);
  fill(255, 204);
  drawHexagonalTree(0, 0, 100, 6, 3);
}

void drawHexagonalTree(float x, float y, float size, int sides, int depth) {
  if (depth <= 0) return;
  
  // Draw current hexagon
  pushMatrix();
  translate(x, y);
  drawHexagon(size);
  popMatrix();
  
  // Calculate points for child hexagons
  float angle = TWO_PI / sides;
  float distance = size * 1.5;
  
  // Draw branches recursively
  for (int i = 0; i < sides; i++) {
    float newX = x + cos(angle * i) * distance;
    float newY = y + sin(angle * i) * distance;
    drawHexagonalTree(newX, newY, size * 0.6, sides, depth - 1);
  }
}

void drawHexagon(float size) {
  beginShape();
  for (int i = 0; i < 6; i++) {
    float angle = TWO_PI / 6 * i;
    vertex(cos(angle) * size, sin(angle) * size);
  }
  endShape(CLOSE);
}

void drawCircularTree(float x, float y, float size, int branches, int depth) {
  if (depth <= 0) return;
  
  // Draw current circle
  pushMatrix();
  translate(x, y);
  ellipse(0, 0, size*2, size*2);
  popMatrix();
  
  // Calculate points for child circles
  float angle = TWO_PI / branches;
  float distance = size * 1.5;
  
  // Draw branches recursively
  for (int i = 0; i < branches; i++) {
    float newX = x + cos(angle * i) * distance;
    float newY = y + sin(angle * i) * distance;
    drawCircularTree(newX, newY, size * 0.6, branches, depth - 1);
  }
}