/*
Name: Kavya Panchal
File: style.css
Date: 31 July 2026
Lab 4 Part 2 for INFT1206 - Web Development Fundamentals
*/
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Image file names
const imageFilenames = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg"
];

// Alt text for each image
const altText = {
  "pic1.jpg": "Closeup of a blue human eye",
  "pic2.jpg": "Rock that looks like a wave",
  "pic3.jpg": "Purple and white flowers",
  "pic4.jpg": "Ancient Egyptian wall painting",
  "pic5.jpg": "Large butterfly on a leaf"
};

// Loop through images
for (const filename of imageFilenames) {

  const newImage = document.createElement("img");

  newImage.setAttribute(
    "src",
    `https://mdn.github.io/shared-assets/images/examples/learn/gallery/${filename}`
  );

  newImage.setAttribute("alt", altText[filename]);

  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", () => {
    displayedImage.src = newImage.src;
    displayedImage.alt = newImage.alt;
  });
}

// Darken/Lighten button
btn.addEventListener("click", () => {

  if (btn.className === "dark") {

    btn.className = "light";
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";

  } else {

    btn.className = "dark";
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }

});