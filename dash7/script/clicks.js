(()=>{
    document.addEventListener('click', (e)=>{
        if (e.target.closest('.tool-tab-btn')) {
            document.querySelectorAll('.tool-tab').forEach(s=>{
                if (s==e.target.closest('.tool-tab-btn').nextElementSibling) {
                    if (!s.classList.contains('active')) {s.classList.toggle('active')}
                } else {
                    if (s.classList.contains('active')){s.classList.toggle('active')}
                }
            })
        } else if (e.target.closest('.main') && document.body.clientWidth <= 768 && !e.target.closest('.toggle-btn') && !e.target.closest('.navigation .cta')) {
            if (document.querySelector('.sidebar').classList.contains('active')) {
                document.querySelector('.sidebar').classList.toggle('active');
            }
        } else if (e.target.closest('.toggle-btn')) {
            document.querySelector('.sidebar').classList.toggle('active')
        } else if (e.target.closest('.bx-search')) {
            if (!document.querySelector('.sidebar').classList.contains('active')) {
                document.querySelector('.sidebar').classList.toggle('active')
            }
        } 
        else if (e.target.closest('.navigation .cta')) {
            document.querySelectorAll('.sub-dropdown').forEach(s=>{
                if (s==e.target.closest('.navigation .cta').querySelector('.sub-dropdown')) {s.classList.add('active')
                } else {s.classList.remove('active')}
            });
            if (document.querySelector('.sidebar').classList.contains('active') && document.body.clientWidth <= 768) {
                document.querySelector('.sidebar').classList.remove('active');
            }
        } else if (e.target.closest('.modal-toggle')) {
            document.querySelector(e.target.dataset.target).classList.toggle('show')
        } else if (e.target.closest('.modal')) {
            if (eval(e.target.closest('.modal').dataset.dismissible)) {
                e.target.classList.remove('show');
            }
        }
        
        if (!e.target.closest('.navigation .cta')){
            document.querySelectorAll('.sub-dropdown').forEach(s=>{s.classList.remove('active')});
        }
        
        if (!e.target.closest('.tool-tab-btn') && !e.target.closest('.tool-tab')) {
            document.querySelectorAll('.tool-tab').forEach(s=>{
                if (s.classList.contains('active')) {s.classList.toggle('active')}
            })
        }
    }, true)
})();