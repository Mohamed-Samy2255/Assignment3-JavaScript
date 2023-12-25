
var siteNameInpute = document.getElementById("siteNameInpute");
var siteURLInpute = document.getElementById("siteURLInpute");
var form = document.getElementById("form");
var x = document.getElementById("x");
var submit = document.getElementById("submit")

BookmarkerList = [];


if( localStorage.getItem("Bookmarkers") !=null ){
    BookmarkerList = JSON.parse( localStorage.getItem("Bookmarkers") );
    displayData();
}


function addBookmarker(){
    if( validationName() && validationUrl() ){
        var Bookmarker = {
        name : siteNameInpute.value,
        webSite : siteURLInpute.value,
    };

    BookmarkerList.push(Bookmarker);

    localStorage.setItem("Bookmarkers" , JSON.stringify(BookmarkerList))

}
else{
        form.classList.remove("d-none")

}

clreaForm();

displayData();


console.log(BookmarkerList);
}




function clreaForm(){
    siteNameInpute.value = "";
    siteURLInpute.value = "";
}



function displayData(){

    var cartona = "";

    for( var i = 0; i < BookmarkerList.length; i++ ){
        cartona += `
       <tr>
       <td>${i}</td>
        <td>${BookmarkerList[i].name}</td>
        <td>
        <a>
        <button onclick = "visitItem(${i})" class="btn btn-warning btn-sm">
              <a href=" ${BookmarkerList[i].siteURLInpute}">
              visit
              </a>
        </button>
        </a>
        </td>
        <td>
        <button onclick ="deleteItem(${i})" class="btn btn-danger btn-sm">Delete</button>
        </td>
    </tr>`
    }
    
    document.getElementById("tableBody").innerHTML = cartona;


}

function visitItem(index){
    siteURLInpute.value;

}



function deleteItem(index){

    BookmarkerList.splice( index , 1 );
    displayData();
    console.log(BookmarkerList);
    localStorage.setItem("Bookmarkers" , JSON.stringify(BookmarkerList))


}

function cancel(){
    form.classList.add("d-none")
}

var nameMessage = document.getElementById("nameMessage");
var sitMessage = document.getElementById("sitMessage");

function validationName(){
    var text = siteNameInpute.value;
    var regexName = /^[A-Z][a-z]{3,10}$/;


    if( regexName.test( text ) ){
        siteNameInpute.classList.add("is-valid")
        siteNameInpute.classList.remove("is-invalid")
        nameMessage.classList.add("d-none");
        return true
    }
    else{
        siteNameInpute.classList.add("is-invalid")
        siteNameInpute.classList.remove("is-valid")
        nameMessage.classList.remove("d-none")
        return false
    }
}

function validationUrl(){
    var text = siteURLInpute.value;
    var regexUrl = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%.\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%\+.~#?&\/=]*)$/
    

    if( regexUrl.test( text ) ){
        siteURLInpute.classList.add("is-valid")
        siteURLInpute.classList.remove("is-invalid")
        sitMessage.classList.add("d-none")
        return true
    }
    else{
        siteNameInpute.classList.add("is-invalid")
        siteURLInpute.classList.remove("is-valid")
        sitMessage.classList.remove("d-none")
        return false
    }
}