const selectThemColors = document.querySelector("#themcolor");
selectThemColors.addEventListener("change",()=>
document.body.className = selectThemColors.value
)