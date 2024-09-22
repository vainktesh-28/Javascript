function fun (...values){
    // ...values represents rest parameters . It allows us to pass infinte parameter
    console.log(values);
}

fun(10, 20, 30, 40, 50);