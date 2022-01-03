class Rain{
    constructor(x,y){

        //create the constructor for Rain
        this.posX=x;
        this.posY=y;
        this.speedY=random(5,2);
        this.width=10;
        this.height=10;
        this.r=random(40,90);
        this.g=0;
        this.b=random(150,200);
        //declare an array for the rain trail
        this.trail = [];
    }

    render(){  
        //push and pop creates each raindrop individually
        push();
        translate(this.posX,this.posY);
        noStroke();
        fill(this.r,this.g,this.b);
        ellipse(0,0,this.width,this.height);
        pop();

        //the for loop is using trail.length to cut it off and keep it from going indefinitely
        for (var i = 0; i <this.trail.length; i++){
            var pos = this.trail[i];
            noStroke();
            fill(this.r, this.g, this.b);
            //the trail of the rain drops decreases as it gets pushed up the array and its number drops form 9 to 0
            ellipse(pos.x,pos.y,i,i);
        }

    }

    move(){
        //the spped of the droplets is controlled here
        this.posY += this.speedY;
        if(this.posX > 750){this.posX = 0, this.b = random(50,255), this.r = random(50,75)}
        if(this.posX < 0){this.posX = 750, this.b = random(50,255), this.r = random(50,75)}
        if(this.posY > 500){this.posY = 0, this.posX = random(0,750)}
        
        var v = createVector(this.posX, this.posY);
        this.trail.push(v);
        
        //this keeps the trail array capped at 10 in length and deletes the first item when it is more than 10
        if (this.trail.length > 10){
            this.trail.splice(0, 1);
        }


    }

    //this makes it so that the drops move with the mouse at the x axis about half of the speed
    mouseMoved(){
        this.posX += floor(movedX / 2);
    }

    //this sets a boundary box around the houses location and if a drop enters it it gets sent back to the top of the screen even if it enters the side of the house
    houseHit(){
        if(this.posX > 500 && this.posY > 300 && this.posX < 600 && this.posY < 500){this.posY = 0, this.posX = random(0,750)}
    }


}