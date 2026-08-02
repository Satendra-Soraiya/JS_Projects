function changeBodyColor(color){
    const pagebody = document.querySelector("body");
    pagebody.style = `background-color:${color}`
}

const buttons = document.querySelectorAll(".box")

buttons.forEach((button)=>{
    // button.addEventListener('click', function (){
    //     if(button.id == 'r'){
    //         changeBodyColor("red")
    //     }
    //     else if(button.id == 'g'){
    //         changeBodyColor("green")
    //     }
    //     else if(button.id == 'b'){
    //         changeBodyColor("blue")
    //     }
    //     else if(button.id == 'y'){
    //         changeBodyColor("yellow")
    //     }
    //     else{
    //     }  
    // })


    button.addEventListener('click',function(e){
        if (e.target.name == 'red') {
            changeBodyColor(e.target.name)
        }
        else if(e.target.name == 'green'){
            changeBodyColor(e.target.name)
        }        
        else if(e.target.name == 'blue'){
            changeBodyColor(e.target.name)
        }        
        else if(e.target.name == 'yellow'){
            changeBodyColor(e.target.name)
        }  
           
    })

    
})
