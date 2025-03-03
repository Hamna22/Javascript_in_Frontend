//no data-please enter a value -blue
//>=18 -eligible -green
//<18 -not eligible -red
//

function AgeCheck(){
    if (Age.value) {
        if (Age.value>=18) {
            result.innerHTMl ="eligible"
            result.style.color="green"
            
        } else if(Age.value<18) {
            result.innerHtml =" not eligible"
            result.style.color="red"

            
        }
        else{
            result.innerHtml =" invalid input"
            result.style.color="orange"

        }

        
    } else {
           result.innerHTMl =" please enter a value"
            result.style.color="blue"
        
    }

}