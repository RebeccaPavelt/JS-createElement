console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const articleContainer = document.createElement("article");
articleContainer.classList.add("post");
document.body.append(articleContainer);

const pText = document.createElement("p");
pText.classList.add("post__content");
pText.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
articleContainer.appendChild(pText);

const footer = document.createElement("footer");
footer.classList.add("post__footer");
articleContainer.appendChild(footer);

const span = document.createElement("span");
span.classList.add("post__username");
span.innerText = "@username";
footer.appendChild(span);

const likeBtn = document.createElement("button");
likeBtn.innerText = "♥ Like";
likeBtn.classList.add("post__button");
footer.appendChild(likeBtn);

likeBtn.addEventListener("click", handleLikeButtonClick);
