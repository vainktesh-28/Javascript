let obj ={id: 1136879, Name: "Vainktesh", Password: 456789}
obj.salary = 45000;
console.log(obj);
delete obj.id;
console.log(obj);

// Creating object through new keyword

let obj1 = new Object();

obj1.id = 102;
obj1.Name = "Vishal";
obj1.password = 789;
console.log(obj1);

// Creating object through function constructor

function obj2 (i, n, s){
    this.id = i;
    this.name = n;
    this.salary = s;
}

const e =  new obj2(104, "venky", 52000)
console.log(e);