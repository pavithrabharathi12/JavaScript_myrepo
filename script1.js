var age=10;
var obj={
    name:'jones',
    city:'chennai'
};
function change(a,b){
    a=30;
    b.city='Bangalore';
}
change(age,obj)
console.log(age);
console.log(obj.city);