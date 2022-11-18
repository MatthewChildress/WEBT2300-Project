const scrollBtn = document.getElementById('scrollBtn');

export const showScrollButton = () => {
    (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) ? scrollBtn.style.display = 'block' : scrollBtn.style.display = 'none';

}

export const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}