let submitBtn = document.getElementById("button");


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
    console.log(dayOfWeek)
});








