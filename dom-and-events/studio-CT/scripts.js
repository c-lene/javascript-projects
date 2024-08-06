
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
    const rocket = this.document.getElementById("rocket");
    
    let flightStatus = this.document.getElementById("flightStatus")
    let shuttleBackground = this.document.getElementById("shuttleBackground");
    let shuttleHeightMiles = this.document.getElementById("spaceShuttleHeight");
    
    // Variables used in MY ORIGINAL method for directional buttons
    let currentPosition = 0;
    let currentShuttleHeight = 0;


    // Variables used in Event Delegation method (Carrie's Method)
    let rocketPosX = 0;
    let rocketPosY = 0;
    let altitude = 0;


    
    // Commented out due to end up EDITING index.html <img>
    // rocket.style.left = "0";
    // rocket.style.position = "absolute";
    

    // When "Take off" button is clicked
    buttonTakeOff.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if(response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeightMiles.innerHTML = "10000";
            
            altitude = 10000;
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + "px";
        }
    });
    

    // When "Land" button is clicked
    buttonLanding.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        
        flightStatus.innerHTML = "The shuttle has landed.";
        
        resetRocket();


        // // Comment out if using resetRocket() 
        // shuttleBackground.style.backgroundColor = "green";
        // shuttleHeightMiles.innerHTML = "0";
        
        // // Comment out if using MY ORIGINAL code
        // altitude = 0;
        // rocketPosX = 0;
        // rocketPosY = 0;
        // rocket.style.marginLeft = rocketPosX + "px";
        // rocket.style.marginBottom = rocketPosY + "px";

    });


    // When "Abort Mission" button is clicked
    buttonMissionAbort.addEventListener("click", function() {
        let response = window.confirm("Confirm that you want to abort the mission.");

        if (response) {
            flightStatus.innerHTML = "Mission aborted.";

            resetRocket();
            
            // // Comment out if using resetRocket() 
            // shuttleBackground.style.backgroundColor = "green";
            // shuttleHeightMiles.innerHTML = "0";
            
            // // Comment out if using MY ORIGINAL code
            // altitude = 0;
            // rocketPosX = 0;
            // rocketPosY = 0;
            // rocket.style.marginLeft = rocketPosX + "px";
            // rocket.style.marginBottom = rocketPosY + "px";
            
        }
    });

    

    // Comment out the following if Using Event Delagation for Directional Buttons
    /*
    // When "Right" button is clicked
    buttonRight.addEventListener("click", function(event) {
        
        if (rocket.style.left === "") {
            rocket.style.left = 0;
        }

        currentPosition = parseInt(rocket.style.left);
        rocket.style.left = (currentPosition + 10) + "px";

        console.log(rocket.style.left);                                 // Used for testing output
    });


    // When "Left" button is clicked
    buttonLeft.addEventListener("click",function(event) {
        
        if (rocket.style.left === "") {
            rocket.style.left = 0;
        }

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
    }); */




    // Using Event Delegation for Directional Buttons (Carrie's Method)
    document.addEventListener("click", function(event) {
        // console.log(event.target.id);
        let bgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue("width"));
        console.log(`Background Width: ${bgWidth}`);

        if (event.target.id === "left" && rocketPosX > - (bgWidth / 2 - 40)) {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + "px";
        }

        if (event.target.id === "right" & rocketPosX < (bgWidth / 2 - 40)) {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + "px";
        }

        if (event.target.id === "up" && altitude < 250000) {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + "px";
            altitude += 10000;
            shuttleHeightMiles.innerHTML = altitude;
        }

        if (event.target.id === "down" && altitude > 0) {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + "px";
            altitude -= 10000;
            shuttleHeightMiles.innerHTML = altitude;
        }
    });


    // BONUS MISSION - OPTIONAL - Function RESETS Rocket properties
    function resetRocket() {
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeightMiles.innerHTML = "0";
        altitude = 0;
        rocketPosX = 0;
        rocketPosY = 0;
        rocket.style.marginLeft = rocketPosX + "px";
        rocket.style.marginBottom = rocketPosY + "px";    
    }

};

window.addEventListener("load", init);





