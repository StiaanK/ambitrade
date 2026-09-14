// If bulma gets hidden and show class this may break

const hiddenElements= document.querySelectorAll(('.hidden'))

const hiddenFadeElements = document.querySelectorAll('.hidden-fade')

const observerFade = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-fade')
        }
        else {
            entry.target.classList.remove('show-fade')
        }
    });
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    });
})

hiddenElements.forEach((el)=> observer.observe(el));
hiddenFadeElements.forEach((el)=> observerFade.observe(el));