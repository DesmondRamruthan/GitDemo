/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var canyon_x;
var canyon_y;
var canyon_width;
var collectable;
var collectablePos_x;
var collectablePos_y;
var collectable_size;



var mountain;
var mountainPos_x;
var mountainPos_y;
var cloudPos_x;



function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = 375;
    
    canyon_x = (270);
    canyon_y = (400);
    canyon_width = (100)
    
    collectablePos_x = (100);
    collectablePos_y = (100);
    collectable_size = (50);
    
    mountainPos_x = (600);
    mountainPos_y = (425);
    
    cloudPos_x = (150);
    
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); 
    
       
    //draw some green ground
    fill(0,155,0);
	rect(0, 400, 1024, 200);
    
    //collectable coin)
    noStroke();
    fill(0);
    ellipse(collectablePos_x, collectablePos_y, collectable_size +30, collectable_size +30);
    fill(100);
    ellipse(collectablePos_x, collectablePos_y, collectable_size + 10, collectable_size + 10);
    fill(200);
    ellipse(collectablePos_x, collectablePos_y, collectable_size - 10, collectable_size -10);
    fill(155, 0, 155);
    ellipse(collectablePos_x, collectablePos_y, collectable_size - 30, collectable_size - 30);
    
    
    
     //canyon
    fill(135,206,235);
    rect(canyon_x, canyon_y, canyon_width, 200);
    fill(64,224,208);
    rect(canyon_x, canyon_y, canyon_width, 50)
    
    
    //draw the game character 
    fill(200, 0, 0);
    ellipse(gameChar_x, gameChar_y - 50, 35);
    
    fill(0, 155, 0);
    rect(gameChar_x -13, gameChar_y - 35,  26, 30);
    
    fill(0);
    rect(gameChar_x - 10, gameChar_y - 5, 10, 10);
    rect(gameChar_x, gameChar_y - 5, 10, 10);
    
    
    //draw tree
    fill(120, 100, 40);
    rect(treePos_x, treePos_y, 60, 150);
    
    
    //draw the mountain
    fill(155);
    triangle(mountainPos_x, mountainPos_y, mountainPos_x + 100, mountainPos_y - 400, mountainPos_x + 300, mountainPos_y);
    fill(255,228,181);
    triangle(mountainPos_x + 200, mountainPos_y, mountainPos_x + 300, mountainPos_y - 350, mountainPos_x + 390, mountainPos_y);
    fill(255,239,213);
    triangle(mountainPos_x - 50, mountainPos_y, mountainPos_x, mountainPos_y - 300, mountainPos_x + 300, mountainPos_y);
    
    
    //cloud
    fill(255, 255, 255);
    ellipse(cloudPos_x + 100, 150, 80, 80);
    ellipse(cloudPos_x + 60, 150, 60, 60);
    ellipse(cloudPos_x + 140, 150, 60, 60);
    
    //branches
    fill(0, 155, 0);
    //triangle(850, 332, 930, 500, 300, 332);
    triangle(treePos_x - 50, treePos_y + 50, treePos_x + 30, treePos_y - 50, treePos_x + 100, treePos_y +50);
    
    triangle(treePos_x - 50, treePos_y, treePos_x + 30, treePos_y - 100, treePos_x + 100, treePos_y);
}

function mousePressed()
{

gameChar_x = mouseX;
gameChar_y = mouseY;
    
}
