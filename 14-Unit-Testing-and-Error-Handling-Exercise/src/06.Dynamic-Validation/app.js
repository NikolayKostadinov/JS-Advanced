function validate() {
    const pattern = new RegExp(/^\S+@\S+\.\S+$/gm);
    const inputElement  = document.getElementById('email');
    inputElement.addEventListener('change', onChane);
    function onChane(ev){
        ev.target.classList.remove('error');
        if(!pattern.test(ev.target.value)){
            ev.target.classList.add('error');
        }
    }
}