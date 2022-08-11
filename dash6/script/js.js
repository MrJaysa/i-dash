(
    ()=>{
        btn.addEventListener('click', ()=> {
            document.querySelector('.sidebar').classList.toggle('active')
        })
        document.querySelector('.bx-search').addEventListener('click', ()=>{
            document.querySelector('.sidebar').classList.toggle('active')
        })
    }
)();