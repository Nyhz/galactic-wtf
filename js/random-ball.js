class RandomBall {
  constructor(ctx, column, velY) {
    this.ctx = ctx;
    // this.size = 35
    this.posY = 0;
    this.posX = column - 75;
    this.velY = velY * 2;
    this.points = 100;
    this.width = 150;
    this.height = 150;
    this.collided = false;
  }

  draw() {
    this.ctx.fillStyle = "yellow";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    this.move();
  }

  move() {
    this.posY += this.velY;
  }
}
