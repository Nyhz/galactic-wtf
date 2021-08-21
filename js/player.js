class Player {

    constructor(ctx, gameW, gameH, keys) {
        this.ctx = ctx
        this.gameWidth = gameW
        this.gameHeight = gameH

        this.width = 100
        this.height = 100

        this.image = new Image()
        //this.image.src = "link a imagen"

        this.posX = this.gameWidth / 2 - this.width / 2
        this.posY = (this.gameHeight-20) - this.height

        this.velX = 200 //modificar respecto a las columnas (this.gameWidth/5)

        this.keys = keys

        this.bullets = []

        // this.setListeners()
    }

    draw() {

       // this.ctx.drawImage(this.posX, this.posY, this.width, this.height)
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)

    }
}