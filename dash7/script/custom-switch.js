(()=>{
    document.querySelectorAll('.switchers').forEach(elem=>{
        elem.addEventListener('click', ()=>{
            if (elem.dataset.alert == 'true') {
                if (elem.dataset.state == 'true') {
                    alert('Switching Messenger sending method to notification');
                } else {
                    alert('Switching Messenger sending method to email');
                }
            }
            if (elem.dataset.state == 'true') {
                document.querySelector(elem.dataset.input).checked = true;
            } else {
                document.querySelector(elem.dataset.input).checked = false;
            }
        });
    });
    
    if (document.querySelector('.toggle-method')) {
        document.querySelector('.toggle-method').addEventListener('change', (e)=>{
            if (e.target.checked) {
                alert('Switching Messenger sending method to notification');
            } else { 
                alert('Switching Messenger sending method to email');
            }
        });
    }
})();