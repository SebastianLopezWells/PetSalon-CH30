///Object 
let petSalon = {
    //Atributes
    name:"The Fashion Pet",
    address: "The Guardian #235",
    hours:{
        open:"9:00 am",
        close:"6:00 pm",
    },
    pets:[],
    owner:"Lopez-Wells Sebastian"
}

//constructor
let c=0;
function Pet(name, age, gender,breed, service, ownerName, contactPhone){
    //atributes = parameters 
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownerName = ownerName;
    this.contactPhone = contactPhone;
    this.id = c++;
}

//functions
function displayInfo()
{
    document.getElementById("infor").innerHTML = `Welcome to the ${petSalon.name} family. It is available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}`;
}
/*
function displayConsole()
{
    console.clear();
    for(let i=0; i<petSalon.pets.length; i++)
    {
        console.log(petSalon.pets[i].name);
    }

}*/

//displayAlert where we use the alert to display how many pets we have registered.
function displayAlert()
{
    alert(`This is how many pets we have registered so far. ${petSalon.pets.length} pets`);
}

function displayNumberPets(){
    document.getElementById("pets-number").innerHTML = `The number of pets we are displaying are: ${petSalon.pets.length}`
}


function clearInputs(){
     //get info from the inputs
    document.getElementById("txtPetName").value="";
    document.getElementById("txtPetAge").value="";
    document.getElementById("txtPetGender").value="";
    document.getElementById("txtPetBreed").value="";
    document.getElementById("txtPetService").value=document.getElementById("op1").value;
    document.getElementById("txtPetOName").value="";
    document.getElementById("txtPetContact").value="";
}

function isValid(aPet){
    let valid=true;
    if(aPet.name=="" || aPet.age=="" || aPet.gender=="" || aPet.breed==""||aPet.ownerName=="" || aPet.contactPhone==""){//is not empty?
        valid=false;
        console.log("valid = false");
    }
    return valid;
}

    
function register(){
    //get info from the inputs
    let petName=document.getElementById("txtPetName").value;
    let petAge=document.getElementById("txtPetAge").value;
    let petGender=document.getElementById("txtPetGender").value;
    let petBreed=document.getElementById("txtPetBreed").value;
    let petService=document.getElementById("txtPetService").value;
    let petOwnerName=document.getElementById("txtPetOName").value;
    let petContact=document.getElementById("txtPetContact").value;
    //create a obj
    let newPet = new Pet(petName, petAge, petGender, petBreed, petService, petOwnerName, petContact);
    if(isValid(newPet))
    {
        //push obj
        petSalon.pets.push(newPet);
        displayInfo();
        //displayConsole();
        displayNumberPets();
        clearInputs();
        //displayCardPets();
        displayTables();
    }
    else{
        alert("Please enter the information again");
    }
}

function deletePet(petID){
    //remove the pet from the table
    document.getElementById(petID).remove();
    //declared a local variable
    let petIndex;
    //travel the array 
    for(let i=0; i<petSalon.length; i++){
        //storting the value of the array on a variable
        let pet = petSalon.pets[i]; 

        //if to know if the petId is correct or not
        if(pet.id == petID){
            petIndex = i;
        }
    }
    //Splice to remove the pet from the array
    petSalon.pets.splice(petIndex, 1);
    
    displayNumberPets();
}

//have displayed the information in the document as a LIST
for(let i=0; i<petSalon.pets.length; i++)
    {
        document.getElementById("pets-list").innerHTML += `<li> ${petSalon.pets[i].name}</li>`
    }

function search(){    
    console.log("Searching...");
    let searchTo = document.getElementById("txtSearch").value;
    
    for (let i = 0; i < petSalon.pets.length; i++) 
    {
        
        let pet = petSalon.pets[i];
        if(searchTo.toLowerCase() == pet.name.toLowerCase()){
            document.getElementById(pet.id).classList.add("selected");console.log("Searching"+ searchTo);
        }else{
            document.getElementById(pet.id).classList.remove("selected");
        }
    } 
}
function init(){
    //creating objects
        let scooby = new Pet("Scooby", 12, "Male", "Stray Dog","Cutting Nails", "Sebastian", "664-820-4622");
        let scrappy = new Pet("Scrappy", 6, "Male", "Stray Dog","Bathing", "Sebastian", "664-820-46222");
        let peabody = new Pet("Peabody", 12, "Male","Stray Dog", "Cutting Nails", "Sherman", "664-820-46223");

        petSalon.pets.push(scooby,scrappy,peabody);
    //main function
        //calling the functions
        displayInfo();
        //displayConsole();
        displayNumberPets();
        //displayCardPets();
        displayTables();
    //hook events

}

window.onload = init;