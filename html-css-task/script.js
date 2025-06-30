console.log("Ankit Tiwari");
  const hamburger = document.getElementById('hamburger');
  console.log(hamburger);
  const navMenu = document.getElementById('nav-menu');
   console.log(hamburger);

  hamburger.addEventListener('click', () => {
    console.log('Ankit');
    navMenu.classList.toggle('active');
  });


  