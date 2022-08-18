(()=>{
    document.addEventListener('click', (e)=>{
        if (e.target.closest('.main') && document.body.clientWidth <= 768) {
            if (document.querySelector('.sidebar').classList.contains('active')) {
                document.querySelector('.sidebar').classList.toggle('active');
            }
        }

        if (e.target.closest('.tool-tab-btn')) {
            document.querySelectorAll('.tool-tab').forEach(s=>{
                if (s==e.target.closest('.tool-tab-btn').nextElementSibling) {
                    if (!s.classList.contains('active')) {
                        s.classList.toggle('active')
                    }
                } else {
                    if (s.classList.contains('active')){
                        s.classList.toggle('active')
                    }
                }
            })
        } 

        else if (e.target.closest('#btn')) {
            document.querySelector('.sidebar').classList.toggle('active')
        }

        else if (e.target.closest('.bx-search')) {
            if (!document.querySelector('.sidebar').classList.contains('active')) {
                document.querySelector('.sidebar').classList.toggle('active')
            }
        }

        else if (e.target.closest('.navigation .cta')) {
            document.querySelectorAll('.sub-dropdown').forEach(s=>{
                if (s==e.target.closest('.navigation .cta').querySelector('.sub-dropdown')) {
                    s.classList.add('active')
                } else {
                    s.classList.remove('active')
                }
            });
        } 
        
        if (!e.target.closest('.navigation .cta')){
            document.querySelectorAll('.sub-dropdown').forEach(s=>{
                s.classList.remove('active')
            });
        }
        
        if (!e.target.closest('.tool-tab-btn') && !e.target.closest('.tool-tab')) {
            document.querySelectorAll('.tool-tab').forEach(s=>{
                if (s.classList.contains('active')) {
                    s.classList.toggle('active')
                }
            })
        }
    }, true)
})();