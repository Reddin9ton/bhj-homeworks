const rotatorCase = Array.from(document.getElementsByClassName('rotator__case'));
function rotator() {

    }
    for (let i = 0; i <= rotatorCase.length; i++) {
        setInterval( () => {
        rotatorCase.forEach(el => el.classList.remove('rotator__case_active'));
        rotatorCase[i].classList.add('rotator__case_active');
    }, 1000 * (i + 1))
    };
