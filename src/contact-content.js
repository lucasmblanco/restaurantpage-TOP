import mainElements from "./main-content";
import img from "./components/contact-content/map-saleepepe.png";
import phoneIcon from "./components/contact-content/phone-icon.png"; 

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

            const  directionContainer = document.createElement('div');
            directionContainer.classList.add('direction-container');
            contactContainer.appendChild(directionContainer);
            const telephoneContainer = document.createElement('div');
            telephoneContainer.classList.add('telephone-container');
            contactContainer.appendChild(telephoneContainer); 

            const mapContainer = document.createElement('div');
            mapContainer.classList.add('map-container');
            directionContainer.appendChild(mapContainer);

            const mapImage = document.createElement('img');
            mapImage.setAttribute('src', img);
            mapContainer.appendChild(mapImage);

            const adressContainer = document.createElement('div');
            adressContainer.classList.add('adress-container'); 
            adressContainer.textContent = 'Via Marghera, 4484, 00185 Roma RM, Italia';
            directionContainer.appendChild(adressContainer);

            const iconContainer = document.createElement('div');
            iconContainer.classList.add('icon-container');
            
            const icon = document.createElement('img');
            icon.setAttribute('src', phoneIcon);
            iconContainer.appendChild(icon); 

            telephoneContainer.appendChild(iconContainer);
            const phoneNumber = document.createElement('div');
            phoneNumber.classList.add('phone-number'); 
            phoneNumber.textContent = '0352 2163052'; 
            telephoneContainer.appendChild(phoneNumber); 

            const divsAnimation = document.querySelectorAll('div.main-text-container-contact div');
            divsAnimation.forEach(div => div.classList.add('animation-item'));
    }

    return { contactButtonAction }
})();

export default contactContent

