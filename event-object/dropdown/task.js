const ulCollection = Array.from(document.getElementsByClassName("dropdown__list"));
const JsElem = Array.from(document.getElementsByClassName("dropdown__value"));
const link = Array.from(document.getElementsByClassName("dropdown__link"));
const dropDownContext = Array.from(document.getElementsByClassName('dropdown__value'));

function hidder() {
    ulCollection.forEach(ul => {
        ul.classList.toggle('dropdown__list_active');

    });
};

JsElem.forEach(element => {

    element.addEventListener("click", () => {
        this.hidder();

    })

});

link.forEach(linkElement => {
    linkElement.addEventListener('click', (event) => {
        event.preventDefault();
        dropDownContext.forEach(dropElement => {
            dropElement.textContent =linkElement.textContent;
            this.hidder();
        });
    })
});