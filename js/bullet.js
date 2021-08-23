class Bullet {
  constructor(ctx, playerX, playerH, gameH) {
    this.ctx = ctx;
    this.posX = playerX;
    this.posY = gameH - playerH;
    this.width = 20;
    this.height = 20;
    this.speedY = 75;
    this.radius = 12;

    this.collidedPlayer = false;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.posX + 40, this.posY, this.width, this.height);
    this.ctx.fill();
    this.ctx.closePath();
    this.move();
  }
  move() {
    this.posY -= this.speedY;
    if (this.posY < 0) {
      this.speedY *= -1;
    }
  }
}
