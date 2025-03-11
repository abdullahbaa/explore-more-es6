const products =[
    {id:1, name:'lenovo',price:65000},
    {id:2, name:'dell',price:45000},
    {id:3, name:'hp',price:40000},
    {id:4, name:'mac',price:150000},
]

// similar
// has some properties,method
class product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo =new product('le le lenovo')
console.log(lenovo);
lenovo.speak('Ommah kita kos!')


// Ex-2
class Teacher {
    constructor(name,subject){
        this.name =name;
        this.subject =subject;
    }
    lecture(){
        console.log('sir is teaching math');
    }
}
const tapan = new Teacher ('Topn sir','physics');
console.log(tapan);

const rashid = new Teacher ('Rashid','English');
console.log(rashid);