console.clear();
const bodyDOM = document.querySelector("body");
console.log(bodyDOM);

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newPost = document.createElement("article");
newPost.classList.add("post");
const newParagraph = document.createElement("p");
newParagraph.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newParagraph.classList.add("post__content");
const footerPost = document.createElement("footer");
footerPost.classList.add("post__footer");
const userName = document.createElement("span");
userName.classList.add("post__username");
userName.textContent = "@username2";
const newLikeButton = document.createElement("button");
newLikeButton.type = "button";
newLikeButton.classList.add("post__button");
newLikeButton.setAttribute("data-js", "like-button2");
newLikeButton.textContent = "♥ Like";

bodyDOM.append(newPost);
newPost.append(newParagraph);
newPost.append(footerPost);
footerPost.append(userName);
footerPost.append(newLikeButton);

newLikeButton.addEventListener("click", handleLikeButtonClick);
