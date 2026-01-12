//callback function
function sum(a,b){
    return a+b;
}
function calculator(a,b,callback){
    return callback(a,b);
  
}
const ans=calculator(2,3,sum);
console.log(ans);


//callback hell
function getData(dataId,getNextdata){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextdata){
            getNextdata();
        }
    },2000);

}
getData(1, ()=>{
    getData(2, ()=>{
        getData(3);
    });
});