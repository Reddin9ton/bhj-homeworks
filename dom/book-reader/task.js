function textSizeModify() {
    const fontSize = Array.from(document.getElementsByClassName('font-size'));
    const bookElement = document.getElementById('book');
    fontSize.forEach(elem => {
        elem.addEventListener("click", (event) => {
            event.preventDefault();
            fontSize.forEach(el => el.classList.remove('font-size_active'));
            elem.classList.add('font-size_active');
            const attributeChek = elem.getAttribute('data-size');
            if (attributeChek === 'small') {
                bookElement.classList.add('book_fs-small');  
            } else if(attributeChek === 'big') {
                bookElement.classList.remove('book_fs-small');
                bookElement.classList.add('book_fs-big');  
            } else {
                bookElement.classList.remove('book_fs-small');
                bookElement.classList.remove('book_fs-big'); 
            }
            })
        })
    }; 

textSizeModify();

function textColorAndBackgroundModify() {
    const colorElements = Array.from(document.getElementsByClassName('color'));
    const bookElement = document.getElementById('book');
    
    colorElements.forEach(elem => {
        const textColor = elem.getAttribute('data-text-color');
        const bgColor = elem.getAttribute('data-bg-color');
        
        elem.addEventListener("click", (event) => {
            event.preventDefault();
            colorElements.forEach(el => el.classList.remove('color_active'));
            elem.classList.add('color_active');
            if (textColor) {
                bookElement.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
                if (textColor === 'gray') {
                    bookElement.classList.add('book_color-gray');
                } else if (textColor === 'whitesmoke') {
                    bookElement.classList.add('book_color-whitesmoke');
                } else if (textColor === 'black') {
                    bookElement.classList.add('book_color-black');
                }
            }

            if (bgColor) {
                bookElement.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
                if (bgColor === 'black') {
                    bookElement.classList.add('book_bg-black');
                } else if (bgColor === 'gray') {
                    bookElement.classList.add('book_bg-gray');
                } else if (bgColor === 'white') {
                    bookElement.classList.add('book_bg-white');
                }
            }
        });
    });
}

textColorAndBackgroundModify();