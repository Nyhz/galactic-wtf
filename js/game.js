const Game = {

    canvas:undefined,
    ctx : undefined,
    width : undefined,
    height: undefined,
    FPS: 60,
    framesCounter: 0,

    background: undefined,
    player: undefined,
    // positiveBalls = [],
    // negativeBalls = [],

    keys: {
        moveLeft: 'ArrowLeft',
        moveRight: 'ArrowRight',
        shoot: 'Space'
    },

    init() {
        // console.log('hola');
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.setDimensions()

        this.start()

    },

    setDimensions() {
        this.width = window.innerWidth 
        this.height = window.innerHeight
        this.canvas.width = this.width
        this.canvas.height = this.height

        this.columnWidth = this.width/5
        this.column1Center = this.columnWidth/2
        this.column2Center = this.column1Center+(this.columnWidth*1)
        this.column3Center = this.column1Center+(this.columnWidth*2)
        this.column4Center = this.column1Center+(this.columnWidth*3)
        this.column5Center = this.column1Center+(this.columnWidth*4)
        
    },

    start () {

        this.reset ()

        this.interval = setInterval(() => {
            
        this.clear()
        this.drawAll()

        this.generatePositiveBalls()
        this.clearPositiveBalls()

        }, 100);
    },


    reset() {
    
        this.background = new Background(this.ctx, this.width, this.height)
        //bolitas

        this.column1 = new Column(this.ctx, 0, this.width, this.height)
        this.column2 = new Column(this.ctx, this.columnWidth, this.width, this.height)
        this.column3 = new Column(this.ctx, 2*this.columnWidth, this.width, this.height)
        this.column4 = new Column(this.ctx, 3*this.columnWidth, this.width, this.height)
        this.column5 = new Column(this.ctx, 4*this.columnWidth, this.width, this.height)
        this.player = new Player(this.ctx, this.width, this.height, this.keys, this.columnWidth)

        this.positiveBalls = []
        // this.negativeBalls = []
        
    },

    drawAll() {
    
    this.background.draw()
    this.column1.draw()
    this.column2.draw()
    this.column3.draw()
    this.column4.draw()
    this.column5.draw()
    this.player.draw()
    // this.positiveBalls.forEach(positive => positive.draw());
    // this.negativeBalls.forEach(negative => negative.draw());

    //dibujar bolitas this.bolitas?

    },

    clear(){

        this.ctx.clearRect(0, 0, this.width, this.height)

    },

    clearPositiveBalls(){
        this.positiveBalls = this.positiveBalls.filter(positive => positive.posY >= this.height)
    },

    generatePositiveBalls() {
        console.log("hola")
        this.positiveBalls.push(new PositiveBall(this.ctx, this.column3Center))
    }
}