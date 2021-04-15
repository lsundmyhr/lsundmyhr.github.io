var length = data.length;

// you work goes here
// -----------------------

data.forEach(ball => {
    create(ball.x, ball.y, ball.color)   
});

// for (let index = 0; index < data.length; index++) {
//     const ball = data[index];
    
//     create(ball.x, ball.y, ball.color) 
// }

// var counter = 0;
// while (counter < length) {
//     const ball = data[counter];
    
//     create(ball.x, ball.y, ball.color) 

//     counter = counter + 1;   
// }