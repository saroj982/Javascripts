function users(obj){
    console.log("original object:\n\n",obj);
    let hello=Object.keys(obj);
    console.log("after use of keys\n\n",hello);
    
    let ans=Object.values(obj);
    console.log("use of objectvalues\n\n",ans);

    let entries=Object.entries(obj);
    console.log("after entries use:\n\n",entries);
    
    let hasprop=obj.hasOwnProperty("property");
    console.log("sfter",hasprop);

    let newobj=Object.assign({},obj,{newproperty:"newvalue"});
    console.log("after object assign:",newobj);
 
}
const user={
    name:"saroj",
    address:"panchkhal",
    age:22
}
users(user);