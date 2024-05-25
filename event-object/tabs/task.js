const tabCollection = Array.from(document.getElementsByClassName('tab'));
const tabContentCollection = Array.from(document.getElementsByClassName('tab__content'));

tabCollection.forEach(element => {
    element.addEventListener("click", () => {
        let elementIndex = tabCollection.indexOf(element);
        tabCollection.forEach(tab => tab.classList.remove('tab_active'));
        element.classList.add('tab_active');
        tabContentCollection.forEach(content => content.classList.remove('tab__content_active'));
        if (tabContentCollection[elementIndex]) {
        tabContentCollection[elementIndex].classList.add('tab__content_active');
        };
    });
});