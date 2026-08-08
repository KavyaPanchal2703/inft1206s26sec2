// ===============================
// SEARCH
// ===============================

const searchForm = document.getElementById("searchForm");

const searchInput = document.getElementById("search");


searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const searchText = searchInput.value.trim();


    if (searchText === "") {

        searchInput.focus();

        return;
    }


    alert("You searched for: " + searchText);

});



// ===============================
// SHOW / HIDE COMMENTS
// ===============================

const commentButton =
    document.getElementById("commentButton");

const commentBox =
    document.getElementById("commentBox");


commentButton.addEventListener("click", function () {

    const currentlyHidden =
        commentBox.hidden;


    commentBox.hidden =
        !currentlyHidden;


    if (currentlyHidden) {

        commentButton.textContent =
            "Hide comments";

        commentButton.setAttribute(
            "aria-expanded",
            "true"
        );

    } else {

        commentButton.textContent =
            "Show comments";

        commentButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }

});



// ===============================
// ADD COMMENTS
// ===============================

const commentForm =
    document.getElementById("commentForm");

const commentList =
    document.getElementById("commentList");


commentForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();


    const comment =
        document.getElementById("comment").value.trim();


    if (name === "" || comment === "") {

        return;

    }


    const newComment =
        document.createElement("li");


    newComment.textContent =
        name + ": " + comment;


    commentList.appendChild(newComment);


    commentForm.reset();

});