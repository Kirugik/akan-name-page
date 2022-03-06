let submitBtn = document.getElementById("button");
let firstName = document.getElementById("firstName");


submitBtn.addEventListener ("click", (e) => {
    e.preventDefault();
    let dob = document.getElementById("dateOfBirth").value;
    console.log(dob); 

    let gender = document.forms['details'].gender.value;
    console.log(gender);


    let mm = parseInt(dob.slice(5, 7))
    let dd = parseInt(dob.slice(8, 10))

    if (mm <= 12 && dd <= 31) {
        let dateBirth = new Date (dob);
        let exactDay = dateBirth.getDay();


            //Assigning Akan names
    var akanName = "";
    if (exactDay === 0) {
        (gender === 'male') ? akanName = "Kwasi": akanName = "Akosua";
    }

    else if (exactDay === 1) {
        (gender === 'male') ? akanName = "Kwadwo": akanName = "Adwoa";
    }

    else if (exactDay === 2) {
        (gender === 'male') ? akanName = "Kwabena": akanName = "Abenaa"; 
    }

    else if (exactDay === 3) {
        (gender === 'male') ? akanName = "Kwaku": akanName = "Akua";
    }

    else if (exactDay === 4) {
        (gender === 'male') ? akanName = "Yaw": akanName = "Yaa"; 
    }

    else if (exactDay === 5) {
        (gender === 'male') ? akanName = "Kofi": akanName = "Afua";
    }

    else if (exactDay === 6) {
        (gender === 'male') ? akanName = "Kwame": akanName = "Ama";
    }

    else {
        akanName = "Sorry, we could not predict your AKan Name."
    }

    let display = document.getElementById("display");
    display.innerHTML =`<p>Your Akan name is: ${akanName}</p>`

    }

    else {
        alert('Invalid month or date');
    } 
});