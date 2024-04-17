class particle extends VerletParticle2D{
    constructor(x,y){
      super(x,y)
      this.d=8
      physics.addParticle(this)
    }
  }