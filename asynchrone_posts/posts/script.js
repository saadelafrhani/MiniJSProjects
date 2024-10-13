$(function () {
  const postList = document.querySelector(".post-list");
  const postDetail = document.querySelector(".post-detail");
  const postComments = document.querySelector(".post-comments");

  postDetail.style.display = "none";
  postComments.style.display = "none";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        const div = document.createElement("div");
        div.style.borderBottom = "1px solid #c2b5b5";
        div.style.marginBottom = "1px";
        div.style.padding = "5px";
        div.textContent = post.title;
        div.style.cursor = "pointer";
        div.onclick = () => displayPostDetail(post);
        postList.appendChild(div);
      });
    });

  function displayPostDetail(post) {
    postDetail.innerHTML = `<h1>${post.title}</h1><p>${post.body}</p><button onclick="loadComments(${post.id})">Load Comments</button>`;
    postDetail.style.display = "block";
  }

  window.loadComments = function (postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((comments) => {
        postComments.innerHTML = "";
        comments.forEach((comment) => {
          const commentDiv = document.createElement("div");
          commentDiv.innerHTML = `<p><strong>${comment.name}</strong>: ${comment.body}</p>`;
          postComments.appendChild(commentDiv);
        });
      })
      .finally(() => {
        postComments.style.display = "block";
      });
  };
});
