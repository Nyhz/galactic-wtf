class Bullet {
  constructor(ctx, playerX, playerH, gameH) {
    this.ctx = ctx;
    this.posX = playerX;
    this.posY = gameH - playerH;
    this.width = 10;
    this.height = 10;
    this.speedY = 50;
    this.radius = 12;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.arc(this.posX + 50, this.posY, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
    this.move();
  }
  move() {
    this.posY -= this.speedY;
    if (this.posY < 20) {
      this.speedY *= -1;
    }
  }
}
