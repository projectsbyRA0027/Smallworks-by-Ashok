window.addEventListener('scroll',()=>{
    const footer = document.querySelector('footer')
    const scrollY = window.scrollY;

    if(scrollY > 500){
        footer.classList.add('show');
    }else{
        footer.classList.remove('show');
    }
});