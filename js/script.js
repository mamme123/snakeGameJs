/ To be able to draw on our browser, we need to first have all the necessary methods to assist with out drawing. 

// The way we do that is, we use the getContext() method on our canvas. This method returns an object which has lots of drawing methods in it. 

// We use the returned object to do our drawing. Since we are planning to draw a two dimentional game, we pass "2d" as an argument to the getContext() method.

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

// Take a look at the returned object on your console 
console.log(ctx);

// To be able to control the movement of our snake in a controlled way, we are going to create a grid like system on our canvas. The snake then will follow the square grid on our canvas 

// Lets divide our canvas into 10 by 10 small squares  
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

// Now we need an array to save the bodies of our snake 
let score = 0; 
let snake = [];

// Just to give us a start we can initiate the initial head of the snake at (0,0) coordinate 

// Notice that the first element of our snake contains an object identifying the x and y coordinate of the initial piece of the snake 
snake[0]= {
  x : (Math.floor(Math.random() *
    columns)) * scale,
  y : (Math.floor(Math.random() *
    rows)) * scale
};
// console.log(snake);
let food = {
  x : (Math.floor(Math.random() *
    columns)) * scale, 
  y : (Math.floor(Math.random() *
    rows)) * scale
}
