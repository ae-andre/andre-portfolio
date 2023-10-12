var aboutLink = document.getElementById("about-link")
var contactLink = document.getElementById("contact-link")
var projectLink = document.getElementById("project-link")

var aboutMain = document.getElementById("about")
var contactMain = document.getElementById("contact")
var projectMain = document.getElementById("project")

aboutLink.addEventListener("click", function () {
    aboutMain.style.display = "block";
    contactMain.style.display = "none";
    projectLink.style.display = "none"
})

contactLink.addEventListener("click", function () {
    aboutMain.style.display = "none";
    contactMain.style.display = "block";
    projectLink.style.display = "none"
})

projectLink.addEventListener("click", function () {
    aboutMain.style.display = "none";
    contactMain.style.display = "none";
    projectLink.style.display = "block"
})