class spring extends VerletSpring2D{
    constructor(a,b,s){
      var l=dist(a.x,a.y,b.x,b.y)
      super(a,b,l,s)
      physics.addSpring(this)
    }
    show(){
      stroke(1)
      line(this.a.x,this.a.y,this.b.x,this.b.y)
    }
  }