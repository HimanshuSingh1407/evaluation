// write js code here corresponding to matches.html
var matches = JSON.parse(localStorage.getItem("schedule"))
displayData(matches);

function displayData(matches){

    matches.forEach(function(ele){

        var tr = document.createElement("tr")
    
        var td1 = document.createElement("td")
        td1.innerText = ele.matchNum;
    
        var td2 = document.createElement("td")
        td2.innerText = ele.teamA;
    
        var td3 = document.createElement("td")
        td3.innerText = ele.teamB;
    
        var td4 = document.createElement("td")
        td4.innerText = ele.date;
    
        var td5 = document.createElement("td")
        td5.innerText = ele.venue;
    
        var td6 = document.createElement("td")
        td6.innerText = "Add to Favourites";
        td6.style.color = "green"
        td6.style.cursor = "pointer"
        td6.addEventListener("click", function(){
            favouriteFunction(ele);
        });    
        
        tr.append(td1, td2, td3, td4, td5, td6)
        document.querySelector("tbody").append(tr)
    })  
}

 var favouriteList = JSON.parse(localStorage.getItem("favourites")) || []

 function favouriteFunction(ele){
    //console.log(ele)

    var list = favouriteList.filter(function(el){
        return el.matchNum == ele.matchNum;
    })
    if(list.length==0)
    {
        favouriteList.push(ele);
        alert("Added Successfully")
        localStorage.setItem("favourites", JSON.stringify(favouriteList));
    }
    else{
        alert("Already added");
    }
 }


document.querySelector("#filterVenue").addEventListener("change", filteredVenue)
function filteredVenue(){
    var selected = document.querySelector("#filterVenue").value;
    //console.log(selected)
    var fList = matches.filter(function(ele){
        //console.log(ele.venue)
       return ele.venue == selected;
    })
    //console.log(fList)
    displayData(fList);
}
