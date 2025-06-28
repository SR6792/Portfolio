const toggleBtn=document.querySelector(".togglebtn");
toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent= document.body.classList.contains("dark-mode")?'🌙':'🌞';
});