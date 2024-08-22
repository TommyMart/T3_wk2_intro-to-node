
try {
    let someBrokenNumber = 10 / "ban";
    if (Number.isNaN(someBrokenNumber)){
        
        throw new Error("New error: not a number!"); // error, similar to return
        throw "Not a number, whoops!"; // error, only throws first error
    }
    console.log(someBrokenNumber)

} catch (error) {
    console.log("Tried to divide by zero");
    console.log(error);
}