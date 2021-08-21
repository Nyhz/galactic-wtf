class Background {

    constructor (ctx, w, h /*,imageSource*/ ){
        this.ctx = ctx
        this.width = w
        this.height = h
        this.image = new Image()
       // this.image.src = imageSource
        this.posX = 0
        this.posY = 0
    }

    draw() {

        //this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(0,0,this.width, this.height)


    }
}