// Get the modal elements
const modal = document.getElementById("myModal");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".modal .close");

// Open the modal
openBtn.onclick = function () {
    modal.style.display = "block";
};

// Close the modal
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Close modal when clicking outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
