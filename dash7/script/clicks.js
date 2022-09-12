(()=>{
    document.addEventListener('click', (e)=>{
        if (e.target.closest('.main') && document.body.clientWidth <= 768 && !e.target.closest('.toggle-btn') && !e.target.closest('.navigation .cta')) {
            if (document.querySelector('.sidebar').classList.contains('active')) {
                document.querySelector('.sidebar').classList.toggle('active');
            }
        } else if (e.target.closest('.toggle-btn')) {
            document.querySelector('.sidebar').classList.toggle('active')
        } else if (e.target.closest('.navigation .cta')) {
            document.querySelectorAll('.sub-dropdown').forEach(s=>{
                if (s==e.target.closest('.navigation .cta').querySelector('.sub-dropdown')) {s.classList.add('active')
                } else {s.classList.remove('active')}
            });
            if (document.querySelector('.sidebar').classList.contains('active') && document.body.clientWidth <= 768) {
                document.querySelector('.sidebar').classList.remove('active');
            }
        }
        
        if (!e.target.closest('.navigation .cta')){
            document.querySelectorAll('.sub-dropdown').forEach(s=>{s.classList.remove('active')});
        }
    }, true)
})();