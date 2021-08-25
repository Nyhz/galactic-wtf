class NegativeBall {
  constructor(ctx, column, velY) {
    this.ctx = ctx;
    // this.size = 35
    this.posY = 0;
    this.posX = column - 125;
    this.velY = velY;
    this.width = 250;
    this.height = 250;

    this.reachedBottom = false;
    this.collided = false;
    this.frequency3 = false;
    this.frequency5 = false;
    this.frequency7 = false;
    this.frequency9 = false;

    this.eventMoved = false;

    this.meteorite = new Image();
    this.meteorite.src = "/img/meteorite.png";
  }

  draw() {
    this.ctx.drawImage(
      this.meteorite,
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
