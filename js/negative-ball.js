class NegativeBall {
  constructor(ctx, column, velY) {
    this.ctx = ctx;
    // this.size = 35
    this.posY = 0;
    this.posX = column - 20;
    this.velY = velY;
    this.damage = 1;
    this.width = 40;
    this.height = 40;

    this.collided = false;
  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    this.move();
  }

  move() {
    this.posY += this.velY;
  }
}
