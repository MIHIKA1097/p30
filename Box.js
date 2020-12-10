class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility = 225;
    }
  display(){
    if(this.body.speed){
      super.display();
    }
    else{
      World.remove(world,this.body)
      push()
      this.visibility=this.visibility-5
      tint(225,this.visibility)
      pop()
    }
  }
  }
  