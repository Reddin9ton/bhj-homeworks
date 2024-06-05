const reveal = Array.from(document.getElementsByClassName('reveal'));
    reveal.forEach(el => {
        const {top, bottom} = el.getBoundingClientRect();
        if (bottom > 0) {
            el.classList.add('reveal_active');
        } else if (top < window.innerHeight) {
            el.classList.add('reveal_active');
        }
    });
