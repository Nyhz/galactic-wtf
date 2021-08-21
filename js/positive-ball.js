class PositiveBall {
  constructor(ctx, column) {
    this.ctx = ctx;
    // this.size = 35
    this.posY = 0;
    this.posX = column - 20;
    this.velY = 10;
    this.points = 100;
  }

  draw() {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.posX, this.posY, 40, 40);
    this.move();
  }

  move() {
    this.posY += this.velY;
  }
}

// METER BONUS - BOLAS CON EFECTOS POSITIVOS
