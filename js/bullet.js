class Bullet {
  constructor(ctx, playerX, playerH, gameH) {
    this.ctx = ctx;
    this.posX = playerX + 80;
    this.posY = gameH - playerH - 100;
    this.width = 40;
    this.height = 150;
    this.speedY = 75;
    this.radius = 12;

    this.collidedPlayer = false;
    this.collidedNegative = false;

    this.laser = new Image();
    this.laser.src = "img/pixellaser.png";
  }

  draw() {
    this.ctx.drawImage(
      this.laser,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.move();
  }
  move() {
    this.posY -= this.speedY;
    if (this.posY < 100) {
      this.speedY *= -1;
    }
  }
}
