(
    ()=>{
        // hover class to selected list items
        document.querySelectorAll('.navigation li').forEach(elem => elem.addEventListener('mouseover', ()=>{
            document.querySelectorAll('.navigation li').forEach(item => {
                if (item === elem) {
                    elem.classList.add("hovered");
                } else {
                    item.classList.remove("hovered");
                }
            });
        }));
        // Menu top
        document.querySelectorAll('.toggle').forEach(elem => {
            elem.addEventListener('click', function(){
                document.querySelector('.navigation').classList.toggle('active');
                document.querySelector('.main').classList.toggle('active');
            });
        });
    }
)();

// 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