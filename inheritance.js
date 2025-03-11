class vehicle {
    constructor(name,price,brand){
        this.name =name;
        this.price =price;
        this.brand= brand;

    }
    move(){
        console.log('gari chole na chole na re');
    }
   
}
class Bus extends vehicle{
    constructor(name,price,seat,ticketPrice){
        super(name,price) //super method er kaj hosse uporer used instructor guluke niye ashe.
        this.seat =seat;
        this.ticketPrice=ticketPrice;
    }
    move(){
        console.log('Bus chole na chole na re');
    }
}

class Track extends vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load=load;
    }
    move(){
        console.log('Truck chole na chole na re');
    }

}