let message= () =>`hello`;
console.log(message());
document.write(Math.PI);
document.write(Math.round(4.7));
var a=new Array(2);
for(var i=0;i<a.length;i++){
    a[i]=new Array(2);
} 
var h=0;
for(var i=0;i<2;i++){
    for(var j=0;j<2;j++){
        a[i][j]=h++;
    }
    

}
for(var i=0;i<2;i++){
    for(var j=0;j<2;j++){
        document.write(a[i][j]);
    }
    
document.write("<br>");
}
// let name=document.getElementById(name);
// let button=document.getElementById(btn);
// btn = (name) => document.write(`hello ${name}`)
// document.write(`${name}`);



const agf={
'p':["g","w"],
'h':["e","f"],
'j':["b"]
}
agf["l"]=["e","d"]
delete agf["j"]
console.log(agf);


// function blahfn(){
//     var blah="blah";
// }
// blahfn();
// console.log(blah);


function callback(){
    console.log("helo");
}
const setint=setTimeout(callback,0);