const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/test-site-image-bremen.jpg") {
    myImage.setAttribute("src", "images/test-site-image-mainz.jpg");
  } else {
    myImage.setAttribute("src", "images/test-site-image-bremen.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Warum Werder der geileste Verein auf Erden ist, ${myName}`;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Warum Werder der geileste Verein auf Erden ist, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  
   