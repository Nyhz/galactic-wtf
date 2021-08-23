class Bullet {
  constructor(ctx, playerX, playerH, gameH) {
    this.ctx = ctx;
    this.posX = playerX;
    this.posY = gameH - playerH - 100;
    this.width = 40;
    this.height = 40;
    this.speedY = 75;
    this.radius = 12;

    this.collidedPlayer = false;
    this.collidedNegative = false;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.posX + 30, this.posY, this.width, this.height);
    this.ctx.fill();
    this.ctx.closePath();
    this.move();
  }
  move() {
    this.posY -= this.speedY;
    if (this.posY < 100) {
      this.speedY *= -1;
    }
  }
}
