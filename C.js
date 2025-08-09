let a;
let b;
let result;
document.getElementById('add').onclick=function(){
a=Number(document.getElementById('first').value)
b=Number(document.getElementById('second').value)
result=a+b;
console.log(result)
document.getElementById('resu').value=result
}

document.getElementById('sub').onclick=function(){
a=Number(document.getElementById('first').value)
b=Number(document.getElementById('second').value)
result=a-b;
console.log(a-b)
document.getElementById('resu').value=result
}

document.getElementById('mul').onclick=function(){
a=Number(document.getElementById('first').value)
b=Number(document.getElementById('second').value)
result=a*b;
console.log(result)
document.getElementById('resu').value=result
}

document.getElementById('div').onclick=function(){
a=Number(document.getElementById('first').value)
b=Number(document.getElementById('second').value)
result=b=0 ? null :a/b;
console.log(result)
document.getElementById('resu').value=result
}
