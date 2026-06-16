/*console.log("A")
console.log("B")
console.log("C")
const promise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
   // const success=true;
    //if(success){
        console.log("hello")
    },2000)
    setTimeout(()=>{
      console.log("done")
    },3000)
    //else{
        console.log("D")
    //}

})
promise.then(res=>{console.log(res)}).catch(err=>{console.log(err)})
*/
console.log("1")
console.log("2")
console.log("hi")


function example(){
    console.log("hello");
}
const example1=()=>{
    const a=1;
    const  b=2;
    console.log(a+b);
}
setTimeout(example(),3000)//3 sec
setTimeout(example1(),450)//450 millisec

