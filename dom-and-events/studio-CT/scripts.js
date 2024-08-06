
// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const buttonTakeOff = this.document.getElementById("takeoff");
    const buttonLanding = this.document.getElementById("landing");
    const buttonMissionAbort = this.document.getElementById("missionAbort");
    
    const buttonUp = this.document.getElementById("up");
    const buttonDown = this.document.getElementById("down");
    const buttonRight = this.document.getElementById("right");
    const buttonLeft = this.document.getElementById("left");
    const rocket = this.document.getElementById("rocket"), left = 0;
    
    let flightStatus = this.document.getElementById("flightStatus")
    let shuttleBackgroundColor = this.document.getElementById("shuttleBackground");
    let shuttleHeightMiles = this.document.getElementById("spaceShuttleHeight");
    let currentPosition = 0;
    let currentShuttleHeight = 0;
    
    rocket.style.left = "0";
    rocket.style.position = "absolute";
    

    // When "Take off" button is clicked
    buttonTakeOff.addEventListener("click", function(event) {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if(response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackgroundColor.style.backgroundColor = "blue";
            shuttleHeightMiles.innerHTML = "10,000";
        }
    });
    

    // When "Land" button is clicked
    buttonLanding.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackgroundColor.style.backgroundColor = "green";
        shuttleHeightMiles.innerHTML = "0";


    });


    // When "Abort Mission" button is clicked
    buttonMissionAbort.addEventListener("click", function(event) {
        let response = window.confirm("Confirm that you want to abort the mission.");

        if (response) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackgroundColor.style.backgroundColor = "green";
            shuttleHeightMiles.innerHTML = "0";
        }
    });


    // When "Right" button is clicked
    buttonRight.addEventListener("click", function(event) {
        
        currentPosition = parseInt(rocket.style.left);
        rocket.style.left = (currentPosition + 10) + "px";

        console.log(rocket.style.left);                                 // Used for testing output
    });


    // When "Left" button is clicked
    buttonLeft.addEventListener("click",function(event) {
        
        currentPosition = parseInt(rocket.style.left);

        if (currentPosition > 0) {
            rocket.style.left = (currentPosition - 10) + "px";
        } else {
            console.log("Unable to move LEFT. Try again!");
        }
    
        console.log(rocket.style.left);
    });


    // When "Up" button is clicked
    buttonUp.addEventListener("click", function(event) {

        currentShuttleHeight = parseInt(shuttleHeightMiles.innerHTML);
        shuttleHeightMiles.innerHTML = currentShuttleHeight + 10000;
         
    });


    // When "Down" button is clicked
    buttonDown.addEventListener("click", function(event) {
        currentShuttleHeight = parseInt(shuttleHeightMiles.innerHTML);
        
        if (currentShuttleHeight > 10) {
            shuttleHeightMiles.innerHTML = currentShuttleHeight - 10000;
        } else {
            console.log("Unable to move DOWN, Try again!");
        }
    });
};



window.addEventListener("load", init);





