function checkCreds(){
    console.log("checkCreds() started");
    var firstNa = document.getElementById("fname").value;
    var lastNa = document.getElementById("lname").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstNa + " " + lastNa;
    
    console.log("Full nmae is" + fullName);

    if(fullName.length > 20 || fullName.length < 2){
        document.getElementById("loginStatus").innerHTML = 
            "Invalid full name!!! try a new one";
    }else if(badgeNumb > 999 || badgeNumb < 0){
        document.getElementById("loginStatus").innerHTML = 
            "Invalid badge number!!! Enter the correct number";
    } else{
        alert("Welcome " + fullName);
        location.replace("UATspacepage.html");
    } 
}