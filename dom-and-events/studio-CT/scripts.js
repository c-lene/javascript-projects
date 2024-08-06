
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
    

    buttonTakeOff.addEventListener("click", function(event) {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if(response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackgroundColor.style.backgroundColor = "blue";
            shuttleHeightMiles.innerHTML = "10,000";
        }
    });
    

    buttonLanding.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackgroundColor.style.backgroundColor = "green";
        shuttleHeightMiles.innerHTML = "0";

    });


    buttonMissionAbort.addEventListener("click", function(event) {
        let response = window.confirm("Confirm that you want to abort the mission.");

        if (response) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackgroundColor.style.backgroundColor = "green";
            shuttleHeightMiles.innerHTML = "0";
        }
    });

   



    buttonRight.addEventListener("click", function(event) {
        
        rocket.style.position = "absolute";
        let currentPosition = parseInt(rocket.style.left);
        
        rocket.style.left = currentPosition + 10;


        console.log(typeof rocket.style.position);

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

        console.log(rocket.style.left);
        console.log(typeof rocket.style.left);
        
        
        // rocket.setAttribute("right", rightPosition);

    });






};



window.addEventListener("load", init);





