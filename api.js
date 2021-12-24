
var link = "https://www.themealdb.com/api/json/v1/1/categories.php";

var typed = document.getElementById("category");

typed.addEventListener('keyup',(e)=>{
    if(e.keyCode === 13) process()
})



function process(){
    var typed = document.getElementById("category").value;
    var url =`https://www.themealdb.com/api/json/v1/1/filter.php?c=${typed}`;
    
    fetch (url)
    .then (res => res.json() )
    .then (data => showData (data) );

  

    document.getElementById("category").value ="";
    if(document.getElementById("defaultDiv").innerHTML != "")document.getElementById("defaultDiv").innerHTML = "";
    else if(document.getElementById("searchDiv").innerHTML != "") document.getElementById("searchDiv").innerHTML = "";
    // else if((document.getElementById("searchDiv").innerHTML = "") &&(document.getElementById("defaultDiv").innerHTML = ""))document.getElementById("no-meal-found").innerHTML = "No meal found";
    else if (data==null)document.getElementById("no-meal-found").innerText = "No meal found";
    
}



function showData(data){
    // console.log(data.meals);
    var content = document.getElementById("searchDiv");

    for (var i=0; i<data.meals.length; i++){

        var newDiv = document.createElement ("div");
        newDiv.classList.add("col-sm-4")
        newDiv.innerHTML = 
        
        `
        <div class="card my-2 mx-2">
        <img src="${data.meals[i].strMealThumb}" class="card-img-thumbnail" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.meals[i].strMeal.slice(0,28)}</h5>
        </div>
            <a href="#" class="btn btn-dark">Go somewhere</a>
        </div> 
        `

    ;

        content.appendChild(newDiv); 

    }


}

function callAPI(){
    fetch (link)
    .then (res => res.json() )
    .then (data => showDefault (data) );

}

callAPI();

function showDefault(data){

    var content = document.getElementById("defaultDiv");

    for (var i=0; i<data.categories.length; i++){

        var newDiv = document.createElement ("div");
        newDiv.classList.add("col-sm-4")
        newDiv.innerHTML = 

        `
        <div class="card my-2 mx-2">
        <img src="${data.categories[i].strCategoryThumb}" class="card-img-thumbnail" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.categories[i].strCategory}</h5>
                <p class="card-text"> ${data.categories[i].strCategoryDescription.slice(0,150)}</p>
        </div>
            <a href="#" class="btn btn-dark">Go somewhere</a>
        </div>
        `


  
    ;

    content.appendChild(newDiv); 

}
}