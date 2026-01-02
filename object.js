//array of an object 
const allusers=[
    {
        firstname:"Saroj Neupane",
        gender:"male"
    },
    {
        firstname:"Samir Neupane",
        gender:"male"
    },
    {
        firstname:"priyanka",
        gender:"female"
    }
]
for(let i=0; i<allusers.length;i++){
    if(allusers[i]["gender"]=="male"){
        console.log(allusers[i]["firstname"]);
        
    }
}