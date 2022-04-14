import mainElements from "./main-content";

const contactContent = (function() {
    
    const contactButtonAction = function() {
        const contactButton = document.querySelector('a#contact');
        contactButton.addEventListener('click', displayContactContent);
    }
    

    function displayContactContent() {
            while(mainElements.staticContainer.firstChild && mainElements.staticContainer.removeChild(mainElements.staticContainer.firstChild));
            mainElements.staticContainer.setAttribute('id', 'static-container-contact'); 
            const contactContainer = document.createElement('div');
            mainElements.staticContainer.append(contactContainer); 
            contactContainer.classList.add('main-text-container-contact');
            mainElements.staticContainer.removeAttribute('class');
            mainElements.staticContainer.classList.add('transition-same-static');
    }

    return { contactButtonAction }
})();

export default contactContent

