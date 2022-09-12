(()=>{
    document.addEventListener('click', (e)=>{
        if (document.body.clientWidth <= 768) {
            if (e.target.closest('.message .bx-menu.side')) {
                document.querySelector('.mbox').classList.toggle('active')
            } else if (e.target.closest('.message .bx-x.side')){
                document.querySelector('.mbox').classList.toggle('active')
            } else if (e.target.closest('.message-box')) {
                if (document.querySelector('.mbox').classList.contains('active')) {
                    document.querySelector('.mbox').classList.toggle('active')
                }
            }
        }
    }, true)
})();

// 961606@@==jsa