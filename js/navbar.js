let navbar = document.getElementById('navbar')

window.addEventListener('scroll', function(){
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        navbar.style.background = "#080808";
    } else {
        navbar.style.background = "none";
    }
})