
const markup = (function() {
    function elementBuilder(element, classList) {
        const elem = document.createElement(element);
        if (typeof classList === 'object') {
            for (const className of classList) {
                elem.classList.add(className);
            }
        }
        if (typeof classList === 'string') {
            elem.classList.add(classList);
        }
        return elem;
    }
    
    function appendChildren(elements, container) {
        for (const singleElement of elements) {
            container.appendChild(singleElement);
        }
    }

    return {
        elementBuilder,
        appendChildren
    }
})();

export { markup };