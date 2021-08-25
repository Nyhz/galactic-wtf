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

    this.image = new Image();
    this.image.src = "/img/asteroids.png";

    this.image.frames = 4;
    this.image.framesIndex = 0;

    this.asteroidHit = new Audio();
    this.asteroidHit.src = "/sounds/asteroidhit.mp3";
  }

  draw(framesCounter) {
    this.turn(framesCounter);
    // this.ctx.drawImage(
    //   this.meteorite,
    //   this.posX,
    //   this.posY,
    //   this.width,
    //   this.height
    // );
    this.move();
  }

  move() {
    this.posY += this.velY;
  }

  turn(framesCounter) {
    this.ctx.drawImage(
      this.image,
      this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
      0,
      Math.floor(this.image.width / this.image.frames),
      this.image.height,
      this.posX,
      this.posY,
      this.width,
      this.height
    );

    this.animateSprite(framesCounter);
  }

  animateSprite(framesCounter) {
    if (framesCounter % 4 === 0) {
      this.image.framesIndex++;
    }

    if (this.image.framesIndex >= this.image.frames) {
      this.image.framesIndex = 0;
    }
  }
}
