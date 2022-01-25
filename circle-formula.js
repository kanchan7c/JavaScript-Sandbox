const radius = [3,5,7,8];

function area(radius){
    return Math.PI * radius * radius;
}

function circumference(radius){
    return 2 * Math.PI * radius;
}

function diameter(radius){
    return radius / 2;
}

function calculate(radius, logic) {
 
    const output = [];
    for(i = 0; i < radius.length; i++) {
       output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, diameter));
