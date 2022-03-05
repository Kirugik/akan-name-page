let submitBtn = document.getElementById("button");
let firstName = document.getElementById("firstName");


submitBtn.addEventListener ("click", (e) => {
    e.preventDefault();
    let dob = document.getElementById("dateOfBirth").value;
    console.log(dob); 

    let gender = document.forms['details'].gender.value;
    console.log(gender);

    let cc = parseInt(dob.slice(0, 2))
    let yy = parseInt(dob.slice(2, 4))
    let mm = parseInt(dob.slice(5, 7))
    let dd = parseInt(dob.slice(8, 10))

    var dayOfWeek = (((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd ) % 7;

    if (cc === 20) {
        dayOfWeek = Math.floor(dayOfWeek);
        console.log(dayOfWeek);
    }

    else if (cc === 19) {
        dayOfWeek = Math.floor(dayOfWeek - 1);
        console.log(dayOfWeek); 
    }

    else {

    }


    //Assigning Akan names
    var akanName = "";
    if (dayOfWeek === 1) {
        (gender === 'male') ? akanName = "Kwadwo": akanName = "Adwoa";
    }

    else if (dayOfWeek === 2) {
        (gender === 'male') ? akanName = "Kwabena": akanName = "Abenaa";
    }

    else if (dayOfWeek === 3) {
        (gender === 'male') ? akanName = "Kwaku": akanName = "Akua"; 
    }

    else if (dayOfWeek === 4) {
        (gender === 'male') ? akanName = "Yaw": akanName = "Yaa";
    }

    else if (dayOfWeek === 5) {
        (gender === 'male') ? akanName = "Kofi": akanName = "Afua";
    }

    else if (dayOfWeek === 6) {
        (gender === 'male') ? akanName = "Kwame": akanName = "Ama";
    }

    else if (dayOfWeek === 7) {
        (gender === 'male') ? akanName = "Kwasi": akanName = "Akosua";
    }

    else {
        akanName = "Sorry, we could not predict your AKan Name."
    }

    let display = document.getElementById("display");
    display.innerHTML =`<p>Your Akan name is: ${akanName}</p>`
});








