(()=>{
    document.addEventListener('click', (e)=>{
        if (e.target.closest('.modal-toggle')) {
            document.querySelector(e.target.dataset.target).classList.toggle('show');
        } else if (e.target.closest('.modal')) {
            if (eval(e.target.closest('.modal').dataset.dismissible)) {
                e.target.closest('.modal').classList.remove('show');
            }
        }
    }, true);
})();