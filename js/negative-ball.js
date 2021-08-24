class NegativeBall {
  constructor(ctx, column, velY) {
    this.ctx = ctx;
    // this.size = 35
    this.posY = 0;
    this.posX = column - 75;
    this.velY = velY;
    this.width = 150;
    this.height = 150;

    this.reachedBottom = false;
    this.collided = false;
    this.frequency3 = false;
    this.frequency5 = false;
    this.frequency7 = false;
    this.frequency9 = false;
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
