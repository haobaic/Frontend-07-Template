function match(selector, element) {
    const selectorParser = selector.split(' ').reverse();
    for (let selector of selectorParser) {
        const reg = new RegExp(/(\.\w+)|(^\#\w+)|(\w+)/g)
        let results = reg.exec(selector);
        while (results) {
            if (results[1]) {
                if (!element.classList.contains(results[0].slice(1))) {
                    return false;
                }
            } else if (results[2]) {
                if (element.id !== results[2].slice(1)) {
                    return false;
                }
            } else if (results[3]) {
                if (element.tagName !== results[3].toUpperCase()) {
                    return false;
                }
            }
            results = reg.exec(selector);
        }
        element = element.parentNode;
    }
    return true;
}