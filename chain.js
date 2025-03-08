// data access

const data  =[{id:1, name:'abdullah;',address:'kochu khet'}];
// console.log(data[0].name);

const products ={
    count : 5000,
    data : [
        {id:2,name: 'RAihan', designation: 'Junior Developer'},
        {id:2,name: 'Abdullah', designation: 'Senior Developer'},
    ]
}
// Second product price
// console.log(products.data[1].designation);

// Chain Operation
const user ={
    id:444,
    name: 'Abdullah',
    address :{
        street:{
            first:'54/1 shahjadpur',
            second:'Gulshan-2',
            third: 'Dhaka'
        },
        city: 'Dhaka'
    }
}
console.log(user.address.street.second);
console.log(user.address.street?.second); 
//Ekhane question mark ta use kora hoyeche karon jodi same operation hoy but street e kono data na thake tokhon jeno eta error na dekhay tai er pore ekta question mark use kora labe. 