const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const nav = document.querySelector(".nav");

menuOpen.addEventListener("click", menuTog);
menuClose.addEventListener("click", menuTog);

function menuTog(e) {
  nav.classList.toggle("active");
}



const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');


sendBtn.addEventListener("click", sendMsg)

  function sendMsg(){
    let content = messageIn.value
    //console.log(content);
    if(content === ''){
      alert('Please enter Valid value')
    }
    else {
      messageOut.innerHTML = `Message sent!`;
      messageIn.value = '';
    }
   
  }


  gsap.from(".hero-content", {
    duration: 1,
    x: "-100%",
    ease: "bounce",
    delay: 0.5,
  });




