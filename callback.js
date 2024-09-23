// Higher order functions. Functions that keep another functions in their argument 

function h (x, fn){   
    // h ==> higher order function
    // fn ==> callback function

    console.log(x*x);
    fn(); 
}

h(10, function fn(){
    console.log("This is a callback function")
});