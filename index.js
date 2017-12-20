var rect = require('./rectangle');

function solveRect(l,b) {void
    console.log("Solving for rectangle for l = " +l +" and b = " +b);
    
    rect(l,b, (err, rectangle) =>
{
    if(err)
    {
        console.log("ERROR : ",err.message);
    }
    else{
        console.log("The area of the rectangle with dimensions l : "+l+" and "+b+" is : ",
        rectangle.area() );
        console.log("The perimeter of the rectangle with dimensions l : "+l+" and "+b+" is : ",
        rectangle.perimeter() );
    }
});
console.log("This statement is after the call to rect()");

}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-2,3);