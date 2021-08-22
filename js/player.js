class Player {
  constructor(ctx, gameW, gameH, keys, speed) {
    this.ctx = ctx;
    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.width = 100;
    this.height = 100;

    this.image = new Image();
    //this.image.src = "link a imagen"

    this.posX = this.gameWidth / 2 - this.width / 2;
    this.posY = this.gameHeight - 20 - this.height;

    this.velX = speed; //modificar respecto a las columnas (this.gameWidth/5)

    /* en set dimensions declarar la vel que es igual aal ancho de la pantalla /5, que es lo mismo que la width de las columnas
     */
    this.moveLimit = 0;
    this.keys = keys;

    this.bullets = [];

    this.setListeners();
  }

  draw() {
    // this.ctx.drawImage(this.posX, this.posY, this.width, this.height)
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);

    this.bullets.forEach((bullet) => bullet.draw());
    this.clearBullets();
  }

  setListeners() {
    document.onkeydown = (e) => {
      console.log(e);
      switch (e.key) {
        case this.keys.moveLeft:
          this.moveLeft();
          break;
        case this.keys.moveRight:
          this.moveRight();
          break;
        case this.keys.shoot:
          this.shoot();
          break;
      }
    };
  }

  moveLeft() {
    if (!(this.moveLimit <= -2)) {
      this.moveLimit--;
      this.posX -= this.velX;
    }
  }

  moveRight() {
    if (!(this.moveLimit >= 2)) {
      this.moveLimit++;
      this.posX += this.velX;
    }
  }

  shoot() {
    if (this.bullets.length < 1) {
      this.bullets.push(
        new Bullet(this.ctx, this.posX, this.height, this.gameHeight)
      );
    }

    console.log(this.bullets);
  }

  clearBullets() {
    this.bullets = this.bullets.filter(
      (bull) => bull.posY > 0 && bull.posY <= this.gameHeight
    );
  }
}
