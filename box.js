class Box {
    constructor(x, y, width, height,color){
      this.body = Bodies.rectangle(x,y,width,height);
      this.height = height;
      this.width = width;
      this.color = color;
      World.add(world, this.body)
    }  
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x, pos.y, this.width, this.height);
    }
};
  