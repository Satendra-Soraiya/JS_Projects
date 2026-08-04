const myAPI_URL = "https://randomuser.me/api/";

const APIrequest = new XMLHttpRequest();

let name;

APIrequest.onreadystatechange = function () {

    console.log(APIrequest.readyState);

    if (APIrequest.readyState === 4) {
        const data = JSON.parse(APIrequest.responseText);
        let name = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
        let gender = data.results[0].gender
        let email = data.results[0].email
        let contact = data.results[0].cell
        let photo_url = data.results[0].picture.large


        document.querySelector('.info').innerHTML = `<p><span class="label">👤 Name:</span>${name} </p> <p><span class="label">🚻 Gender:</span>${gender}</p><p><span class="label">📧 Email:</span> ${email}</p><p><span class="label">📱 Contact:</span> +91 ${contact}</p>`

        document.querySelector(".photo").setAttribute('src',photo_url)
    }

}

APIrequest.open("GET", myAPI_URL);

APIrequest.send();