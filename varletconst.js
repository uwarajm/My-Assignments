var genderType = "FEMALE";
function printGender(){
    let color = "BROWN";
    var age = 20;
    if(genderType.startsWith("FEMALE")){
        
        {
            var age = 30;
            let color = "PINK";
            console.log("Inside if block color is:",color);

        }
        console.log("Outside of if block Age is:",age);
        console.log("Outside of if block color is:",color);
    }
        else
        {
            var age = 35;
            let color ="RED"
            console.log("Inside else block color is:",color);
            console.log("Inside else block Age is:",age);

        }
        console.log("Outside else block Age is:",age);

    }
//printGender()
console.log("Otside of the function:",genderType)
printGender()