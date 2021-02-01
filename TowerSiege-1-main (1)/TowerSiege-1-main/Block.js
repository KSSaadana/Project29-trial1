class Block extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,width,height,angle);
    this.image = loadImage("Sprites/polygon.png");
    Matter.Body.setAngle(this.body, angle);
  }
}