function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.

    button.addEventListener("click", function(event) {
        paragraph.innerHTML = "Houston, we have liftoff!";
        // console.log(paragraph);
    });

    missionAbort.addEventListener("mouseover", function(event) {
        missionAbort.style.backgroundColor = "red";
        console.log("Click to ABORT MISSION!");

    });

    missionAbort.addEventListener("mouseout", function(event) {
        missionAbort.style.backgroundColor = "";
    });

    missionAbort.addEventListener("click", function(event) {
        let response = window.confirm("Are you sure you want to abort the mission?");

        if (response) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
        } else {
            paragraph.innerHTML = "Mission is NOT aborted! Space shuttle en route!";
        }
    });
        
}

window.addEventListener("load", init);
