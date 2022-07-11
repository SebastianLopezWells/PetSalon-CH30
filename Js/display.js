function displayCardPets(){
    console.clear();
    let card = " ";
    //travel tha array of cards
    for(let i = 0; i < petSalon.pets.length; i++)
    {
        console.log(petSalon.pets[i].name);
        //create the cards (HTML)
        let pet=petSalon.pets[i];
        card += `<div class="pet">
                    <h4> ${pet.name}<h4>
                    <p>Age: ${pet.age}</p>
                    <p>Gender: ${pet.gender}</p>
                    <p>Breed: ${pet.breed}</p>
                    <p>Service: ${pet.service}</p>
                    <p>Owners: ${pet.ownerName}</p>
                    <p>Phone: ${pet.contactPhone}</p>
                </div>`;
                console.log(card);
    }
    //inject to the html
    document.getElementById('pet-cards').innerHTML = card;
}

function displayTables() {
    let table = "";
    for(let i = 0; i < petSalon.pets.length; i++)
    {
        let tablePet=petSalon.pets[i];
        //tablePet.id = i;
        table += ` 
                        <tr id="${tablePet.id}">
                            <th scope="row" >${tablePet.id}</th>
                            <td>${tablePet.name}</td>
                            <td>${tablePet.age}</td>
                            <td>${tablePet.gender}</td>
                            <td>${tablePet.breed}</td>
                            <td>${tablePet.service}</td>
                            <td>${tablePet.ownerName}</td>
                            <td>${tablePet.contactPhone}</td>
                            <td><button class="btn btn-danger" onClick="deletePet(${tablePet.id});"> Delete </button></td>
                        </tr>` 
    }
    document.getElementById('tbody').innerHTML = table;
}