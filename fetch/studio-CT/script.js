//TODO: Add Your Code Below
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        console.log(response);

        //Access the JSON in the response
        const jsonPromise = response.json();
        jsonPromise.then(function(json) {
            
            // Checking that the JSON is pulled correctly
            console.log(json);                                              
            
            // Implementing the json into the HTML
            const container = document.getElementById("container");
            
            // Using a For Loop to iterated through each object in the array in json
            let activeAstronauts = 0

            for (let i = 0; i < json.length; i++) {

                if (json[i].active) {
                    activeAstronauts += 1;
                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li class="active">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                    </div>
                `
                } else {
                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li>Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                    </div>
                `
                }
            }

            container.innerHTML += `
            <p>
                Total Number of Astronauts: ${json.length} <br>
                <span class="active">Total ACTIVE Astronauts: ${activeAstronauts}</span>
            </p>
            `
        });
    });     
});