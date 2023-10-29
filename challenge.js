// Good Luck! You got this 💪🏾
// Write your code here.
function calculator(num1,num2,operator){
    if(operator=== "+"){
        console.log( num1 +num2)
    }else if(operator=== "-"){
        console.log( num1 -num2)
    }else if(operator==="*"){
        console.log( num1 * num2)
    }else if (operator==="/"){
        console.log( num1 / num2)
    }else{
        console.log( "invalid operator")
    }

}
calculator(5,3,"+");
calculator(5,3,"-");
calculator(5,3, "*");
calculator(5,3,"/");
calculator (2,0,"?");
