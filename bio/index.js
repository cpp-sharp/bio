function toggleSocialRow() {
    var x = document.getElementById("cryptoOptions");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleSocialRow() {
var donateSection = document.querySelector(".donate-section");
if (donateSection.classList.contains("show-donate-section")) {
donateSection.classList.remove("show-donate-section");
donateSection.style.backdropFilter = "none"; 
donateSection.style.backgroundColor = "rgba(255, 255, 255, 1)";
} else {
donateSection.classList.add("show-donate-section");
donateSection.style.backdropFilter = "blur(5px)"; 
donateSection.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
}
}

function closeSocialRow() {
var donateSection = document.querySelector(".donate-section");
donateSection.classList.remove("show-donate-section");
donateSection.style.backdropFilter = "none";
donateSection.style.backgroundColor = "rgba(255, 255, 255, 1)";
}
