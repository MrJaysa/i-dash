(()=>{
    document.querySelectorAll('.switchers').forEach(elem=>{
        elem.addEventListener('click', ()=>{
            if (elem.dataset.loc == 'next') {
                elem.nextElementSibling.querySelector('input').checked = eval(elem.dataset.action)
            } else {
                elem.previousElementSibling.querySelector('input').checked = eval(elem.dataset.action)
            }
        })
    })
})();