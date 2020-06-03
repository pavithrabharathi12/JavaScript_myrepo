var john={
    name:'John',
    yearofbirth:1990,
    job:'teacher'
};

var Person=function(name,yearofbirth,job){
    this.name=name;
    this.yearofbirth=yearofbirth;
    this.job=job;
}


Person.prototype.calculateAge= function(){
    console.log(2020-this.yearofbirth);
}


var john=new Person('John',1990,'teacher');
var jane=new Person('Jane',1995,'designer');
var tony=new Person('John',1989,'engineer');


john.calculateAge();
jane.calculateAge();
tony.calculateAge();