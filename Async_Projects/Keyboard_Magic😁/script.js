let key 
let KEycode
let code

function inject(key,KEycode,code){
    document.querySelector('#key').innerHTML = `<td>${key === ' ' ? 'space':key}</td>`;
    document.querySelector('#KEycode').innerHTML = `<td">${KEycode}</td>`;
    document.querySelector('#code').innerHTML = `<td">${code}</td>`;

}

window.addEventListener('keydown',(e)=>{
    key = e.key;
    KEycode = e.keyCode;
    code = e.code;
console.log("key pressed");
console.log(key);
console.log(KEycode);
console.log(code);

    inject(key,KEycode,code);

})

