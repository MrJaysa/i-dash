// bx-check-circle
// bx-circle
(()=>{
    document.querySelector('.message.grid').addEventListener('click', (e)=>{
        if (e.target.closest('.recipient')) {
            if (e.target.closest('.recipient i')) {
                e.target.closest('.recipient i').dataset.check == '1' ? remove_user(e.target.closest('.recipient i')) : add_user(e.target.closest('.recipient i'));
                
                if (e.target.closest('.recipient i').classList.contains('bx-circle')) {
                   e.target.closest('.recipient i').classList.remove('bx-circle');
                   e.target.closest('.recipient i').classList.add('bx-check-circle');
                } else {
                    e.target.closest('.recipient i').classList.remove('bx-check-circle');
                    e.target.closest('.recipient i').classList.add('bx-circle');
                }
            }
        } else if (e.target.closest('.chips .bx-x')) {
            let elem = document.querySelector(`.recipient i[data-email="${e.target.closest('.chips .bx-x').dataset.email}"]`);
            remove_user(elem);
            elem.classList.remove('bx-check-circle');
            elem.classList.add('bx-circle');
        }

    }, true);

    const remove_user = (e) => {
        e.dataset.check = 0;
        document.querySelector(`.m-users .chips[data-email="${e.dataset.email}"]`).remove()
        let childnodes = document.querySelector('.m-users').childElementCount;
        if (childnodes <= 1) {
            document.querySelector('.m-users .no-user').classList.remove('d-none')
        }
    }
    
    const add_user = (e) => {
        e.dataset.check = 1;
        let childnodes = document.querySelector('.m-users').childElementCount;
        if (childnodes <= 1) {
            document.querySelector('.m-users .no-user').classList.add('d-none')
        }

        document.querySelector('.m-users').insertAdjacentHTML(
            'beforeend', `
            <div data-email='${e.dataset.email}' class="chips shadow br-25">
                <input checked type="checkbox" name="user" value="${e.dataset.email}" id="user-${childnodes}">
                <div class="flex align-items-center">
                    <label for="user-1" class="font-2">${e.dataset.uname}</label>
                    <i data-email='${e.dataset.email}' class="bx bx-x pointer font-4"></i>
                </div>
            </div>
        `);
    }
})();

// 961606@@==jsa