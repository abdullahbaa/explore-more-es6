class person{
    constructor(name,age){
        this.name =name;
        this.age =age;

    }
    sleep(){
        console.log(`sleeping new ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}
const kodom =new person ('Kodom Ali',44);
console.log(kodom);
kodom.sleep();

// bhejal
const lazy = kodom.sleep;
lazy()