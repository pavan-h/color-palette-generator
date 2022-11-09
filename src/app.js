const btn = document.querySelector(".btn"),
      color = document.querySelectorAll(".color"),
      hexCode = document.querySelectorAll(".hex"),
      body = document.querySelector("body");

  const arr = [];    
    
    window.onload = generateColor;
    window.addEventListener("keypress", (e) => {
        if(e.code === "Enter"){
            generateColor();
        }
    });
    
     btn.addEventListener("click", generateColor);

    

      function generateColor() {
        for(let i=0; i < color.length ; i++) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);

        color[i].style.background = "#" + randomColor;

        color[i].classList.add('fade-in');
        setTimeout(() => color[i].classList.remove('fade-in'), 400);

        hexCode[i].innerHTML = randomColor;
        
       
      }         
    }
      generateColor();



      console.log(hexCode)