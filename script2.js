var years=[1990,1992,1989,2012,1995];
function arraycalculator(arr,fun){
    var arrres=[];
    for(var i=0;i<arr.length;i++){
        arrres.push(fun(arr[i]));
    }
    return arrres;
}
function calculateage(element){
    return 2020-element;
}

function isfit(ele){
    var bmi=1000;
    if(bmi<ele && bmi<= ele){
        return 'Is Fit';
    }
    else{
        return 'Is Not Fit';
    }
}

var ages=arraycalculator(years,calculateage);
console.log(ages);

var fitness= arraycalculator(years,isfit);
console.log(fitness);
