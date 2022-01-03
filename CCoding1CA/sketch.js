//declare all variables
let rains = [];
let houses = [];
let params = {

    bgColor: [0, 0, 0]

}


//setup the screen and fill the arrays
function setup() {
    createCanvas(750, 500);
    for(let i = 0; i<100; i++){
        rains.push(new Rain(random(0, 750), random(0, 500)));
    }
    for(let i = 0; i<1; i++){
        houses.push(new House(500, 300));
    }
    //create the gui menu
    gui = createGui('My Settings');
	gui.addObject(params);
    gui.addGlobals('bgColor');
}

//draw the items on screen
function draw(){
    background(params.bgColor);
    for(let i = 0; i<rains.length; i++) {
        //call functions from Rain.js
        rains[i].move();
        rains[i].render();
        rains[i].mouseMoved();
        rains[i].houseHit();
    }
    for(let i = 0; i<houses.length; i++) {
        //call functions from House.js
        houses[i].render();
    }



}


