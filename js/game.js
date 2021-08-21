const Game = {

    canvas:undefined,
    ctx : undefined,
    width : undefined,
    height: undefined,
    FPS: 60,
    framesCounter: 0,

    background: undefined,
    player: undefined,
    // ballsPositive = [],
    // ballsNegative = [],

    keys: {
        moveLeft: 'ArrowLeft',
        moveRight: 'ArrowRight',
        shoot: 'Space'
    },

    init () {
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.setDimensions()
        this.background = new Background(this.ctx, this.width, this.height)
        this.background.draw()
        this.player = new Player(this.ctx, this.width, this.height, this.keys)
        this.player.draw()
        //this.start()
    },

    setDimensions() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.canvas.width = this.width
        this.canvas.height = this.height
    }

    //start () {}


}