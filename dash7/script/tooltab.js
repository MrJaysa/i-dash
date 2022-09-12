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
        }
        
        if (!e.target.closest('.tool-tab-btn') && !e.target.closest('.tool-tab')) {
            document.querySelectorAll('.tool-tab').forEach(s=>{
                if (s.classList.contains('active')) {s.classList.toggle('active')}
            })
        }
    }, true)
})();