// const APIrequest = new XMLHttpRequest();

// let name;

// APIrequest.onreadystatechange = function () {

//     console.log(APIrequest.readyState);

//     if (APIrequest.readyState === 4) {
//         const data = JSON.parse(APIrequest.responseText);
//         let name = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
//         let gender = data.results[0].gender
//         let email = data.results[0].email
//         let contact = data.results[0].cell
//         let photo_url = data.results[0].picture.large


//         document.querySelector('.info').innerHTML = `<p><span class="label">👤 Name:</span>${name} </p> <p><span class="label">🚻 Gender:</span>${gender}</p><p><span class="label">📧 Email:</span> ${email}</p><p><span class="label">📱 Contact:</span> +91 ${contact}</p>`

//         document.querySelector(".photo").setAttribute('src',photo_url)
//     }

// }

// APIrequest.open("GET", myAPI_URL);

// APIrequest.send();







// NEW WAY MODERN JAVASCRIPT -------------------------









const myAPI_URL = "https://randomuser.me/api/";

datacalling();







async function datacalling(){
    const response = await fetch(myAPI_URL);
    const data = await response.json();

   
    
    injectValues(data.results[0]);


}
function injectValues(user) {

    document.querySelector(".info").innerHTML = `
        <p><span class="label">👤 Name:</span>
        ${user.name.title} ${user.name.first} ${user.name.last}</p>

        <p><span class="label">🚻 Gender:</span>
        ${user.gender}</p>

        <p><span class="label">📧 Email:</span>
        ${user.email}</p>

        <p><span class="label">📱 Contact:</span>
        ${user.cell}</p>
    `;

    document.querySelector(".photo").src = user.picture.large;
}




