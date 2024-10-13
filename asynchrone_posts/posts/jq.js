$(function () {
  const postList = $(".post-list");
  const postDetail = $(".post-detail").hide().css({ width: "0%" });
  const postComments = $(".post-comments").hide().css({ width: "0%" });

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        $("<div></div>", {
          text: post.title,
          css: {
            borderBottom: "1px solid #c2b5b5",
            marginBottom: "1px",
            padding: "5px",
            cursor: "pointer",
          },
          click: () => displayPostDetail(post),
        }).appendTo(postList);
      });
    });

  function displayPostDetail(post) {
    postDetail.html(`
      <h1>${post.title}</h1>
      <p>${post.body}</p>
      <button id="load-comments">Load Comments</button>
    `).show().animate({ width: "100%" }, 1000);

    $("#load-comments").on("click", () => loadComments(post.id));
  }

  function loadComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((comments) => {
        postComments.empty();
        comments.forEach((comment) => {
          $("<div></div>", {
            html: `<p><strong>${comment.name}</strong>: ${comment.body}</p>`,
          }).appendTo(postComments);
        });
      })
      .finally(() => {
        postComments.show().animate({ width: "100%" }, 1000);
      });
  }
});
