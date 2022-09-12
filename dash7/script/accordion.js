(()=>{
    const accordion_toggle = (elem) => {
        elem.classList.toggle('rotate-90');
        document.querySelector(elem.dataset.body).classList.toggle('active')
        if (document.querySelector(elem.dataset.body).style.maxHeight == '0px' || document.querySelector(elem.dataset.body).style.maxHeight == 0) {
            document.querySelector(elem.dataset.body).style.maxHeight = document.querySelector(elem.dataset.body).scrollHeight + 'px';
        } else {
            document.querySelector(elem.dataset.body).style.maxHeight = 0;
        }
    }
    
    document.querySelectorAll('.accordion .dropdown-toggle').forEach(elem=>{
        elem.addEventListener('click', ()=>{
            if (document.querySelectorAll('.accordion .dropdown-toggle').length > 1) {
                document.querySelectorAll('.dropdown-toggle').forEach(el=>{
                    if (elem != el && el.classList.contains('rotate-90') && document.querySelector(el.dataset.body).classList.contains('active')) {
                        accordion_toggle(el);
                    }
                });
            }
            accordion_toggle(elem);          
        });
    });
})();