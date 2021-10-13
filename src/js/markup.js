
const markup = (function() {
    function elementBuilder(element, classList, text) {
        const elem = document.createElement(element);
        
        if (classList) {
            if (typeof classList === 'object') {
                for (const className of classList) {
                    elem.classList.add(className);
                }
            }
            if (typeof classList === 'string') {
                elem.classList.add(classList);
            }
        }

        if (text) {
            elem.textContent = text;
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