// getelementbyid
const pageHeader = document.getElementById("page-header");
const mainHeading = document.getElementById("main-heading");
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const btnPrimary = document.getElementById("btn");
const para4 = document.getElementById("para4");
const redCard = document.getElementById("red");
const blueCard = document.getElementById("blue");
const yellowCard = document.getElementById("yellow");
const greenCard = document.getElementById("green");
const blackCard = document.getElementById("black");

// Modifying elements
mainHeading.textContent = "New DOM Layout";
pageHeader.classList.replace("bg-dark", "bg-success");
para1.textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";
para2.textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";
btnPrimary.addEventListener("click", () => {
    para4.textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
});
redCard.classList.replace("bg-white", "bg-danger");
blueCard.classList.replace("bg-white", "bg-primary");
yellowCard.classList.replace("bg-white", "bg-warning");
greenCard.classList.replace("bg-white", "bg-success");
blackCard.classList.replace("bg-white", "bg-dark");