var rect = {
    perimeter : (x,y) => (2*(x+y)),
    area : (x,y) => (x*y)
};

function solveRect(l,b) {void
    console.log("Solving for rectangle for l = " +l +" and b = " +b);

    if(l<=0 || b<=0){
        console.log("Rectangle dimensions should be greater than 0 : l = "+l +" and b = "+b);
    }
    else{
        console.log("Area of rectangle is "+ rect.area(l,b));
        console.log("Perimeter of rectangle is "+ rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-2,3);