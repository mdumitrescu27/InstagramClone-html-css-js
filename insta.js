// Dark mode function
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark");
}

//  random likes generator
let likesNumber = document.getElementsByClassName("likes");

for (let i = 0; i < likesNumber.length; i++) {
  likesNumber[i].innerHTML = Math.floor(Math.random() * 5000) + 1 + " likes";
}

//random profile pictures
const profileImg = document.getElementsByClassName("profile-img");

for (let i = 0; i < profileImg.length; i++) {
  let n = Math.floor(Math.random() * profileImg.length) + ".jpeg";
  profileImg[i].src = `profile-images/${n}`;
}

//open story
const storyClick = document.querySelectorAll(".checkbox");
const storyView = document.querySelector(".open-story");
const storyProfileImg = document.querySelector(".story-profile-img");

function openStory() {
  for (let i = 0; i < storyClick.length; i++) {
    if (storyClick[i].checked) {
      storyProfileImg.src = profileImg[i].src;
      storyView.style.visibility = "visible";
    }
  }
}

for (let i = 0; i < storyClick.length; i++) {
  storyClick[i].addEventListener("click", openStory);
}

//close story
const closeStoryBtn = document.querySelector(".close-story-button");

function closeStory() {
  storyView.style.visibility = "hidden";
  storyClick.forEach((element) => {
    element.checked = false;
  });
}

closeStoryBtn.addEventListener("click", closeStory);
