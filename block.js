class Block{
    constructor(x,y){
        var options={
            isStatic: false
        }
        this.body=Matter.Bodies.rectangle(x,y,25,35,options)
        World.add(world,this.body)
        this.Visiblity = 255;
        
    }

    display(){
        if(this.body.speed < 3){
            rectMode(CENTER)
            rect(this.body.position.x,this.body.position.y,25,35)  
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5
             pop();
    }
}

    score(){
        if(this.Visiblity<0 && this.Visiblity>-105){
            score=score++;
        }
    }
}


