/*Problem solve:  A fun game which consists of certain number of questions , through the prompt input comparitvely we should validate the specified choice is the correct answer or not.   */




function Question(question,answer,correctans){
    this.Question = question;
    this.answer = answer;
    this.correct = correctans;
}

Question.prototype.displayans=function(){
    console.log(this.Question);
    for(var i=0;i<this.answer.length;i++){
        console.log(i+':'+this.answer[i]);
    }
}

Question.prototype.checkans=
    function(ans){
    if(ans === this.correct){
        console.log("Correct answer..");
    }
    else{
        console.log("Wrong answer . Please try again..")
    }
}

var q1= new Question ('Is this the Javascript Course ?', ['Yes','No'] ,0);
var q2= new Question (
    'Who is the author for the course ?',['Jonas','Michael','Mike'] , 1);
var q3= new Question ('How many challenges solved till date ?',['one','two','many'],2);

var questions=[q1,q2,q3];
var num= Math.floor(Math.random()*3);
questions[num].displayans();
var p=parseInt(prompt('Please select the correct answer..'));
questions[num].checkans(p);
