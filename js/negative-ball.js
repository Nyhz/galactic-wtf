class NegativeBall {
  constructor(ctx, column, velY) {
    this.ctx = ctx;
    // this.size = 35
    this.posY = 0;
    this.posX = column - 20;
    this.velY = velY;
    this.damage = 1;
  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.posX, this.posY, 40, 40);
    this.move();
  }

  move() {
    this.posY += this.velY;
  }
}
