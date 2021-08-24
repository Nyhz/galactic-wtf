class PositiveBall {
  constructor(ctx, column, velY) {
    this.ctx = ctx;
    // this.size = 35
    this.posY = 0;
    this.posX = column - 75;
    this.velY = velY * 1.5;
    this.points = 100;
    this.width = 150;
    this.height = 150;
    this.collided = false;

    this.coinImg = new Image();
    this.coinImg.src = "/img/coin.png";
  }

  draw() {
    this.ctx.drawImage(
      this.coinImg,
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

// METER BONUS - BOLAS CON EFECTOS POSITIVOS
