let rules = document.querySelector('#rules');
let span = document.getElementsByClassName("close")[0];
let modal = document.getElementById("modal");

rules.addEventListener('click', () =>{
    modal.style.display = "block"; 
})

span.addEventListener("click", () => {
    modal.style.display = "none";
  });

  
