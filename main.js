const user= {
    name:"saroj",
    age:22,
    address:{   
        housenumber:"11",
        street:1,
    }
}
// console.log(user["address"]["housenumber"]);
const address= user["address"];
const housenumber=user["housenumber"];
console.log(address);


