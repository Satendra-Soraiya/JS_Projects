function calculateBMI(w,h){ 
    let heightInMeters = h / 100; 
    let bmi = w / (heightInMeters * heightInMeters);
    
    return Math.round(bmi * 100) / 100;
}
function calculateCategory(bmi){
    let category = "";
    if (bmi < 18.5)
    category = "Underweight";
else if (bmi < 25)
    category = "Normal";
else if (bmi < 30)
    category = "Overweight";
else
    category = "Obese";
return category;
}

const form = document.querySelector(".form")
form.addEventListener('submit', function (e){
event.preventDefault();


const  w= document.querySelector("#weight").value
const  h= document.querySelector("#height").value


if((w ==="") || (h==="")){
    document.querySelector(".result").innerText = "please enter both values";
    return;
    
}
if (w <= 0 || h <= 0) {
    document.querySelector(".result").innerText = "Only positive values supported"
    return;
}

const bmi = calculateBMI(w,h);
const category = calculateCategory(bmi);
const result = `Your BMI is: [${bmi}] \n Category:${category}`;
document.querySelector(".result").innerText = result;


showphoto(category);

})

function showphoto(category){
    const frame = document.querySelector(".photo")

    if(category == "Underweight"){
        frame.setAttribute('src','skinny.jpg')
    }
    if(category == "Normal"){
        frame.setAttribute('src','normal.jpg')
    }
    if(category == "Overweight"){
        frame.setAttribute('src','fat.jpg')
    }
    if(category == "Obese"){
        frame.setAttribute('src','obese.jpg')
    }
}