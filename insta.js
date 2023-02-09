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
const bodyContainer = document.getElementsByClassName("body-container");

function openStory() {
  for (let i = 0; i < storyClick.length; i++) {
    if (storyClick[i].checked) {
      storyProfileImg.src = profileImg[i].src;
      storyView.style.visibility = "visible";
      document.body.classList.add("stop-scrolling");
    }
  }
  playNext();
}

for (let i = 0; i < storyClick.length; i++) {
  storyClick[i].addEventListener("click", openStory);
}

//close story
const closeStoryBtn = document.querySelector(".close-story-button");

function closeStory() {
  storyView.style.visibility = "hidden";
  document.body.classList.remove("stop-scrolling");
  storyClick.forEach((element) => {
    element.checked = false;
  });
}

closeStoryBtn.addEventListener("click", closeStory);

// PROGRESS-BAR TEST
const progressContainer = document.querySelector(".progress-container");
const progress = Array.from(document.querySelectorAll(".progress"));
const status = document.querySelector(".status");

function playNext(e) {
  const current = e && e.target;
  let next;
  console.log(progress[0]);

  if (current) {
    const currentIndex = progress.indexOf(current);
    if (currentIndex < progress.length) {
      next = progress[currentIndex + 1];
    }
    // current.classList.remove("active");
    // current.classList.add("passed");
  }

  if (!next) {
    progress.map((el) => {
      // el.classList.remove("active");
      // el.classList.remove("passed");
    });
    next = progress[0];
  }
  next.classList.add("active");
}

const clickHandler = (e) => {
  const index = Math.floor(
    e.offsetX / (progressContainer.clientWidth / progress.length)
  );
  status.innerText = "Clicked " + index;
};

progress.map((el) => el.addEventListener("animationend", playNext, false));
progressContainer.addEventListener("click", clickHandler, false);

console.log(document.body.style.overflow);
