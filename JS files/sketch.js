var physics,particleA,particleB,particleC,particleD,particleE,particleF,spring1,spring2,spring3,spring4,spring5,spring6,spring7,spring8,spring9
var particles=[]
var springs=[]
var {VerletPhysics2D,VerletParticle2D,VerletSpring2D}=toxi.physics2d
var{GravityBehavior}=toxi.physics2d.behaviors
var{Vec2D,Rect}=toxi.geom
function setup() {
  createCanvas(600, 600);
  physics=new VerletPhysics2D()
  particles.push(new particle(160,40))
  particles.push(new particle(240,40))
  particles.push(new particle(210,80))
  particles.push(new particle(240,120))
  particles.push(new particle(160,120))
  particles.push(new particle(190,80))
  particles.push(new particle(180,40))
  particles.push(new particle(220,40))
  particles.push(new particle(180,20))
  particles.push(new particle(220,20))
  particles.push(new particle(220,50))
  particles.push(new particle(180,50))
  springs.push(new spring(particles[0],particles[1],0.1))
  springs.push(new spring(particles[5],particles[3],0.1))
  springs.push(new spring(particles[2],particles[4],0.1))
  springs.push(new spring(particles[0],particles[2],0.1))
  springs.push(new spring(particles[0],particles[3],0.1))
  springs.push(new spring(particles[3],particles[4],0.1))
  springs.push(new spring(particles[4],particles[5],0.1))
  springs.push(new spring(particles[5],particles[2],0.1))
  springs.push(new spring(particles[5],particles[1],0.1))
  springs.push(new spring(particles[4],particles[1],0.1))
  springs.push(new spring(particles[2],particles[3],0.1))
  springs.push(new spring(particles[0],particles[6],0.5))
  springs.push(new spring(particles[0],particles[8],0.5))
  springs.push(new spring(particles[9],particles[6],0.5))
  springs.push(new spring(particles[8],particles[6],0.5))  
  springs.push(new spring(particles[9],particles[7],0.5))
  springs.push(new spring(particles[8],particles[7],0.5))
  springs.push(new spring(particles[1],particles[7],0.5))
  springs.push(new spring(particles[1],particles[9],0.5))
  springs.push(new spring(particles[8],particles[9],0.5))
  springs.push(new spring(particles[8],particles[3],0.5))
  springs.push(new spring(particles[8],particles[2],0.5))
  springs.push(new spring(particles[4],particles[9],0.5))
  springs.push(new spring(particles[5],particles[9],0.5))
  springs.push(new spring(particles[10],particles[8],0.5))
  springs.push(new spring(particles[10],particles[9],0.5))
  springs.push(new spring(particles[11],particles[9],0.5))
  springs.push(new spring(particles[11],particles[8],0.5))
  springs.push(new spring(particles[1],particles[3],0.5))
  springs.push(new spring(particles[0],particles[4],0.5))
  physics.setWorldBounds(new Rect(0,0,width,height))
  physics.addBehavior(new GravityBehavior(new Vec2D(0,0.5)))
  particles[8].setWeight(0.5)
  particles[9].setWeight(0.5)
  particles[10].setWeight(0.5)
  particles[11].setWeight(0.5)
}

function draw() {
  if(key=='c'){
    particles[8].setWeight(-1)
    keym='c'
  }
  else if(key!='c'){
    particles[8].setWeight(0.5)
    keym='g'
  }
  if(key!='p'){
    physics.update()
  }
  background(220);
  fill(0,0,255)
  stroke(0)
  beginShape()
  var i=0
  for(var particl of particles){
    if(i<6){
      vertex(particl.x,particl.y)
    }
    i++
  }
  endShape(CLOSE)
  if(mouseIsPressed){
    particles[0].lock()
    particles[0].x=mouseX;
    particles[0].y=mouseY
    particles[0].unlock()
  }
  fill('purple')
  circle(particles[8].x,particles[8].y,10)
  line(particles[8].x,particles[8].y,particles[6].x,particles[6].y)
  circle(particles[9].x,particles[9].y,10)
  line(particles[9].x,particles[9].y,particles[7].x,particles[7].y)
  fill('yellow')
  circle(particles[10].x,particles[10].y,10)
  circle(particles[11].x,particles[11].y,10)
  fill('black')
  circle(particles[10].x,particles[10].y,5)
  circle(particles[11].x,particles[11].y,5)
}