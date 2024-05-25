const ulCollection = Array.from(document.getElementsByClassName("dropdown__list"));
const jsElem = Array.from(document.getElementsByClassName("dropdown__value"));
const link = Array.from(document.getElementsByClassName("dropdown__link"));
const dropDownContext = Array.from(document.getElementsByClassName('dropdown__value'));

function hidder() {
    ulCollection.forEach(ul => {
        ul.classList.add('dropdown__list_active');

    });
};

jsElem.forEach(element => {

    element.addEventListener("click", () => {
        hidder();

    })

});

link.forEach(linkElement => {
    linkElement.addEventListener('click', (event) => {
        event.preventDefault();
        dropDownContext.forEach(dropElement => {
            dropElement.textContent =linkElement.textContent;
            hidder();
        });
    })
});