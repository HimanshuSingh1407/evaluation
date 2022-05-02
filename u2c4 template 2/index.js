// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit", matchDetails)

var matches = JSON.parse(localStorage.getItem("schedule")) || []

function matchDetails(){
    event.preventDefault();

    var details = {

        matchNum : masaiForm.matchNum.value,
        teamA : masaiForm.teamA.value,
        teamB : masaiForm.teamB.value,
        date : masaiForm.date.value,
        venue : masaiForm.venue.value,
    };
    matches.push(details);
    //console.log(matches)

    localStorage.setItem("schedule", JSON.stringify(matches));

    // masaiForm.matchNum.value = "";
    // masaiForm.teamA.value = "";
    // masaiForm.teamB.value = "";
    // masaiForm.date.value = "";
    // masaiForm.venue.value = "";
}