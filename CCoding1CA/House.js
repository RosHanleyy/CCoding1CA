class House{

    //create the constructor for House
    constructor(x,y){
        this.posX = x;
        this.posY = y;
        this.width = 100;
        this.height = 200;

    }

    //create the method that makes and colors House
    render(){
        fill(200);
        rect(this.posX, this.posY, this.width, this.height);
        fill(255, 255, 0);
        stroke(0);
        rect(this.posX + 12, this.posY + 20, 30, 50)
        rect(this.posX + 58, this.posY + 20, 30, 50)
        fill(150, 75, 0);
        rect(this.posX + 30, this.posY + 120, 40, 80);
    }

}