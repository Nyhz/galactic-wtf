class RandomBall {
  constructor(ctx, column, velY) {
    this.ctx = ctx;
    // this.size = 35
    this.posY = 0;
    this.posX = column - 75;
    this.velY = velY * 1.5;
    this.points = 100;
    this.width = 200;
    this.height = 200;
    this.collided = false;

    this.healthImg = new Image();
    this.healthImg.src = "/img/1up.png";
  }

  draw() {
    this.ctx.drawImage(
      this.healthImg,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.move();
  }

  move() {
    this.posY += this.velY;
  }
}