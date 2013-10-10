

// Variable Declarations for Fizz Buzz
var i = 0;
var fizzResult = 0;
var buzzResult = 0;

// For loop for Fizz Buzz
for(i=1; i<=200; i++) 
{
    fizzResult = (i % 3); 
    buzzResult = (i % 5);
    
    if (fizzResult === 0 && buzzResult === 0) {document.write("FizzBuzz!!! <br>")}

        else if (fizzResult === 0) {document.write("Fizz! <br>")}
            
            else if (buzzResult === 0) {document.write("Buzz! <br>")}
            
                else (document.write(i + "<br>"))
    
}

