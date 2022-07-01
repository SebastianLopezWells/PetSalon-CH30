///Object 
let petSalon = {
    //Atributes
    name:"The Fashion Pet",
    address: "The Guardian #235",
    hours:{
        open:"9:00 am",
        close:"6:00 pm",
    },
    pets:[
        {
            name:"Scooby",
            age:12,
            breed:"Poodle",
            gender:"Female",
            service:"grooming",
            ownerName:"shaggy",
            contactPhone:"6648204622"
        },
        {
            name:"Scrappy",
            age:2,
            breed:"Poodle",
            gender:"Male",
            service:"Vaccine",
            ownerName:"shaggy",
            contactPhone:"6648204622"
        },
        {
            name:"Mj",
            age:15,
            breed:"Chihuahua",
            gender:"Female",
            service:"Nails cut",
            ownerName:"Ernesto Villanueva",
            contactPhone:"6643621255"
        }
    ],
    owner:"Lopez-Wells Sebastian"
}

function displayInfo()
{
    document.getElementById("infor").innerHTML = `Welcome to the ${petSalon.name} family. It is available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}`;
}
console.log(petSalon.hours.close);
console.log(petSalon.pets[0]);

for(let i=0; i<petSalon.pets.length; i++)
    {
        document.getElementById("pets-list").innerHTML += `<li> ${petSalon.pets[i].name}</li>`
    }

//displayAlert where we use the alert to display how many pets we have registered.
function displayAlert()
{
    alert(`This is how many pets we have registered so far. ${petSalon.pets.length} pets`);
}


//calling the function displayInfo();
displayInfo();

