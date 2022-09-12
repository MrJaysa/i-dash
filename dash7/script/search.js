(()=>{
    document.querySelectorAll('.bx-search').forEach(elem=>{
        elem.addEventListener('click', ()=>{
            if (!document.querySelector('.sidebar').classList.contains('active')) {
                document.querySelector('.sidebar').classList.toggle('active');
            }
        });
    });
})();