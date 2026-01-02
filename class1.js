function calculator(a,b,arthmeticfxn){
    const ans=arthmeticfxn(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
const value=calculator(4,5,sum);
console.log(value);
