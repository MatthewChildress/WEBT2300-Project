export const navSticky = () => {
    const navBar = document.getElementById('navBar');
    const stick = navBar.offsetTop;


    window.pageYOffset >= stick ? navBar.classList.add('sticky') : navBar.classList.remove('sticky');
}