const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  counter: 0,
  score: 0,
  currentLevel: 1,
  speedMultiplier: 0,
  negBaseBallSpeed: 5,
  posBaseBallSpeed: 5,

  background: undefined,
  player: undefined,
  positiveBalls: [],
  negativeBalls: [],

  keys: {
    moveLeft: "a",
    moveRight: "d",
    shoot: "w",
  },

  init() {
    // console.log('hola');
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.setDimensions();

    this.start();
  },

  setDimensions() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.columnWidth = this.width / 5;
    this.column1Center = this.columnWidth / 2;
    this.column2Center = this.column1Center + this.columnWidth * 1;
    this.column3Center = this.column1Center + this.columnWidth * 2;
    this.column4Center = this.column1Center + this.columnWidth * 3;
    this.column5Center = this.column1Center + this.columnWidth * 4;
  },

  start() {
    this.reset();

    this.interval = setInterval(() => {
      this.clear();
      this.drawAll();

      this.generatePositiveBalls();
      this.clearPositiveBalls();

      this.generateNegativeBalls();
      this.clearNegativeBalls();

      this.addScore();
      this.drawScore();

      this.defineLevels();
      this.printCurrentLevel();

      this.counter++;
    }, 25);
  },

  reset() {
    this.background = new Background(this.ctx, this.width, this.height);
    //bolitas

    this.column1 = new Column(this.ctx, 0, this.width, this.height);
    this.column2 = new Column(
      this.ctx,
      this.columnWidth,
      this.width,
      this.height
    );
    this.column3 = new Column(
      this.ctx,
      2 * this.columnWidth,
      this.width,
      this.height
    );
    this.column4 = new Column(
      this.ctx,
      3 * this.columnWidth,
      this.width,
      this.height
    );
    this.column5 = new Column(
      this.ctx,
      4 * this.columnWidth,
      this.width,
      this.height
    );
    this.player = new Player(
      this.ctx,
      this.width,
      this.height,
      this.keys,
      this.columnWidth
    );

    this.positiveBalls = [];
    this.negativeBalls = [];

    this.counter = 0;
  },

  drawAll() {
    //ARREGLAR
    this.background.draw();
    this.column1.draw();
    this.column2.draw();
    this.column3.draw();
    this.column4.draw();
    this.column5.draw();

    this.positiveBalls.forEach((positive) => positive.draw());
    this.negativeBalls.forEach((negative) => negative.draw());

    this.player.draw();

    //dibujar bolitas this.bolitas?
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  clearPositiveBalls() {
    this.positiveBalls = this.positiveBalls.filter(
      (positive) => positive.posY <= this.height
    );
  },

  clearNegativeBalls() {
    this.negativeBalls = this.negativeBalls.filter(
      (negative) => negative.posY <= this.height
    );
  },

  pickRandomColumn() {
    let randomNum = Math.floor(Math.random() * 5);

    switch (randomNum) {
      case 0:
        return this.column1Center;
        break;

      case 1:
        return this.column2Center;
        break;

      case 2:
        return this.column3Center;
        break;

      case 3:
        return this.column4Center;
        break;

      case 4:
        return this.column5Center;
        break;
    }
  },

  // Para aumentar el ritmo de generacion añadir una condicion para pasar de nivel
  // cuantos mas puntos tenga el counter.
  generatePositiveBalls() {
    if (this.counter % 80 === 0) {
      this.positiveBalls.push(
        new PositiveBall(
          this.ctx,
          this.pickRandomColumn(),
          this.posBaseBallSpeed + this.speedMultiplier
        )
      );
    }
  },

  generateNegativeBalls() {
    if (this.counter % 50 === 0) {
      this.negativeBalls.push(
        new NegativeBall(
          this.ctx,
          this.pickRandomColumn(),
          this.negBaseBallSpeed + this.speedMultiplier
        )
      );
    }
  },

  drawScore() {
    this.ctx.font = "48px serif";
    this.ctx.fillStyle = "blue";
    this.ctx.strokeText(`Score: ${this.score}`, 75, 100);
  },

  addScore() {
    this.score = Math.floor(this.counter / 5);
  },

  // INTENTAR HACER UN SWITCH CASE?????????
  defineLevels() {
    if (this.score > 100 && this.score < 250) {
      this.speedMultiplier = 5;
      this.currentLevel = 2;
    } else if (this.score > 250 && this.score < 400) {
      this.speedMultiplier = 7;
      this.currentLevel = 3;
    } else if (this.score > 400 && this.score < 750) {
      this.speedMultiplier = 10;
      this.currentLevel = 4;
    }
  },

  // COLOCAR EL SCORE DE MEJOR MANERA
  printLevel(currentLvl) {
    this.ctx.font = "48px serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      `Current Level: ${currentLvl}`,
      this.width / 2 - 145,
      120
    );
  },

  //INTENTAR HACER UN SWITCH CASE??????
  printCurrentLevel() {
    if (this.score < 100) {
      this.printLevel(this.currentLevel);
    } else if (this.score > 100) {
      this.printLevel(this.currentLevel);
    } else if (this.score > 250) {
      this.printLevel(this.currentLevel);
    } else if (this.score > 400) {
      this.printLevel(this.currentLevel);
    }
  },
};
