//A 0-val való osztás mindig problémás. Amint végre akarod hajtani, a program futása azonnal véget ér. 
//Készíts egy hibakezelési eljárást, ami a 0-val való osztást jelezni tudja anélkül, hogy a program futása véget érne.
//Használd a try-catch módszert a feladat megoldásához

function divide(a,b) {
    if(b===0){
        console.log("Nullával való osztás nem engedélyezett")
        return "Error"
    }
    try{
        return(a/b)
    } catch (err) {
        console.log(err)
    }
}

console.log(divide(5,0))
console.log(divide(12,7))
console.log(divide(555,9))
console.log(divide(100,0))

