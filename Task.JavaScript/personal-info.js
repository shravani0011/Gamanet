 
let saveBtn = document.querySelector("#personal-info-save");  
let cancelBtn = document.querySelector("#personal-info-cancel"); 

let fisrtName = document.getElementById('personal-input-firstname-id');   
let lastName = document.getElementById('personal-input-lastname-id');   
let email = document.getElementById('personal-email-input');  
    fisrtName.value = "John"; 
    lastName.value = "Brown";   
    email.value = "john.brown@gmail.com";  
    
    // Events for inputs
    fisrtName.addEventListener('input', fname);   
    lastName.addEventListener('input', lname);   


function fname(e){  
    if((fisrtName.value = e.target.value) || fisrtName.value===""){ 
        saveBtn.className = "btn btn-primary btn-save";
        cancelBtn.className = "btn btn-primary btn-cancel";
        console.log(btn);
    } 
    else {
        saveBtn.className = "btn btn-primary btn-save disabled";
        cancelBtn.className = "btn btn-primary btn-cancel disabled";
    }
} 

function lname(event){  
    if((lastName.value = event.target.value) || lastName.value===""){ 
        saveBtn.className = "btn btn-primary btn-save";
        cancelBtn.className = "btn btn-primary btn-cancel";
        console.log(btn);
    } 
    else {
        saveBtn.className = "btn btn-primary btn-save disabled";
        cancelBtn.className = "btn btn-primary btn-cancel disabled";
    }
}

// Events for Buttons   
cancelBtn.addEventListener('click',cancel);  
saveBtn.addEventListener('click',save);

function cancel(c){
    if(cancelBtn.className = "btn btn-primary btn-cancel"){
        fisrtName.value = "John"; 
        lastName.value = "Brown";    
        document.getElementById('new-profile-photo').src = "assets/img/avatar-placeholder.png";
        saveBtn.className = "btn btn-primary btn-save disabled";
        cancelBtn.className = "btn btn-primary btn-cancel disabled";
    }
} 

function save(e){
    if(saveBtn.className = "btn btn-primary btn-save"){   
       alert("Personal Details Updated"); 
       saveBtn.className = "btn btn-primary btn-save disabled";
       cancelBtn.className = "btn btn-primary btn-cancel disabled";
    }
} 


// Image upload  
const image_input = document.getElementById('add-user-photo'); 

image_input.addEventListener("change", function(event){
    const reader = new FileReader();   
    saveBtn.className = "btn btn-primary btn-save";
    cancelBtn.className = "btn btn-primary btn-cancel";
    reader.addEventListener("load", () =>{ 
        document.getElementById('new-profile-photo').src = URL.createObjectURL(event.target.files[0]);   
        document.getElementById('profile-name-header').src = URL.createObjectURL(event.target.files[0]);   
    }) 
    reader.readAsDataURL(this.files[0]);
})

// Remove icon event 
let Remove = document.getElementById('clear-user-photo');   
Remove.addEventListener('click',function(clear){ 
    if((cancelBtn.className = "btn btn-primary btn-cancel") && (saveBtn.className = "btn btn-primary btn-save")){
    document.getElementById('new-profile-photo').src = "assets/img/avatar-placeholder.png"; 
}
})
