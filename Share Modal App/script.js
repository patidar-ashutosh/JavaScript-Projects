const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Modal open function
const openModal = () => {
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};

// follow and unfollow
const followElement = document.getElementById('follow');
const unfollowElement = document.getElementById('unfollow');

function follow(){
    followElement.style.display = 'block';
    unfollowElement.style.display = 'none';
}

function unfollow(){
    followElement.style.display = 'none';
    unfollowElement.style.display = 'block';
}