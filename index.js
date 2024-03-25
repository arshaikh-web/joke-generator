fetch("https://v2.jokeapi.dev/joke/Any")
  .then((res) => res.json())
  .then((data) => {
    let btn = document.querySelector("#gen");
    let main = document.querySelector(".box");
    btn.addEventListener("click", () => {
        location.reload()
    
    });
    if(data.setup != undefined && data.delivery != undefined){
    let jtml = `<p>${data.setup}</p><p class="hide">${data.delivery}</p><button id="sbtn">punchline</button>`;
    main.innerHTML = jtml;
    }
    else{
        let jtml = `<p>hahahah</p><p>what so funny</p>`;
    main.innerHTML = jtml;
    }
    let show = document.querySelector("#sbtn");
    let punch = document.querySelector(".hide");  
    show.addEventListener("click", function(){
        punch.style.display = "flex"
    })
  })
  .catch((error) => console.error("Error:", error));
