class Ball {
    constructor (ctx, columnCenter) {
        this.ctx = ctx
        // this.size = 35
        this.posY = 0
        this.posX = columnCenter
        this.velY = 1

    }

    draw() {
        this.ctx.arc(150, 150, 35, 0, Math.PI *2)
        this.move();
    }

    move() {
        this.posY += this.velY
    }
}

class PositiveBall extends Ball {

    constructor (ctx, columnCenter) {
        super(ctx, columnCenter, posY, posX, velY);
        this.points = 100
    }
    //bonus: meter los bonus de algunas PositiveBalls
}

class NegativeBall extends Ball {

    constructor (ctx, columnCenter) {
        super(ctx, columnCenter, posY, posX, velY);
        this.damage = 1
    }
}
