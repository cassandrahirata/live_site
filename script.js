const selectProject = document.querySelector(".prevProjects");
selectProject.addEventListener("change", (e) => {
    const display = document.querySelector(".projectDisplay");
    display.textContent = `${e.target.value}`;

})