function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    
    }
    const x = document.getElementById('hamburgerBtn')
    x.onclik = toggleMenu;


    function toggleMenu() {
        document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
      }
    const x = document.getElementById("hamburgerBtn")
    x.onclick = toggleMenu;


    const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
