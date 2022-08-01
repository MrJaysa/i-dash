(()=>{
    // hover class to selected list items
    let list = document.querySelectorAll('.navigation li');
    function activelink() {
        list.forEach(item => {
            item.classList.remove("hovered");
        });
        this.classList.add("hovered");
    }
    list.forEach(item => item.addEventListener('mouseover', activelink));
    // Menu top
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.addEventListener('click', function(){
        navigation.classList.toggle('active')
        main.classList.toggle('active')
    })
})();

// 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