import titleImg from './components/title/saleepepe-title.png'
import menuContent from './menu-content';
import contactContent from './contact-content';

const mainWelcome = [["Your culinary experience begins as you step foot inside our old stone farmhouse. A perfectly rustic setting, for a thoughtful, local and robust culinary adventure."],
["Our space is divided into private dining rooms, proving a quaint and cozy setting for dining or celebrating together."],
["Each menu we offer is brimming with local taste experiences that are sure to delight. "],
["As we explore local flavours, we update our menus to highlight the freshest ingredients."],
["Explore our menus often to experience the most from our kitchen."]];

const navElements = [['home','HOME', '#home'], ['menu', 'MENU', '#menu'], ['contact', 'CONTACT', '#contact']]; 

const mainElements =  (function() {
            const contentDiv = document.getElementById('content');
            const header = document.createElement('header')
            const imgHeader = document.createElement('img');


            const navContainer = document.createElement('div');
            const navBar = document.createElement('nav');
            const navUl = document.createElement('ul');

            let NavElementosContenedor = [];


            const staticContainer = document.createElement('div');
            const mainContainer = document.createElement('div');


            const mainParagraphs = [];

            const footer = document.createElement('footer');
            const anchorGitHub = document.createElement('a');

            class ButtonNavBar {
                constructor(id, content, attribute) {
                    this.id = id;
                    this.content = content;
                    this.attribute = attribute;
                }

                createButtonNavBar() {
                    const navItem = document.createElement('li');
                    navItem.setAttribute('class', 'navItem');
                    navUl.append(navItem); 

                    const anchorItem = document.createElement('a');
                    anchorItem.setAttribute('id', this.id);
                    anchorItem.textContent = this.content;
                    anchorItem.setAttribute('href', this.attribute); 
                    navItem.append(anchorItem);

                }
            }


            const skeletonContent = function() {
            
            header.setAttribute('class', 'title');
            imgHeader.setAttribute('class', 'title-image'); 
            imgHeader.setAttribute('src', titleImg);
            imgHeader.setAttribute('alt', 'Logo Sale e Pepe')
            header.append(imgHeader);
            
            navContainer.setAttribute('id', 'navigation-bar-container');
            
            navContainer.append(navBar);
            navBar.append(navUl);



           for(let i = 0; i < navElements.length; i++){
                NavElementosContenedor[i] = new ButtonNavBar(...navElements[i]);
                NavElementosContenedor[i].createButtonNavBar(); 
            }


            staticContainer.setAttribute('id', 'static-container');
            mainContainer.setAttribute('class', 'main-text-container')
            
            for(let i = 0; i < mainWelcome.length; i++) {
                mainParagraphs[i] = document.createElement('p');
                mainParagraphs[i].textContent = mainWelcome[i];
                mainContainer.append(mainParagraphs[i]);
            }
            
            staticContainer.appendChild(mainContainer);


            
            anchorGitHub.setAttribute('href','https://github.com/lucasmblanco');
            anchorGitHub.textContent = 'GITHUB'; 
            footer.setAttribute('id', 'static-footer');
            footer.appendChild(anchorGitHub);
            
            contentDiv.append(header, navContainer, staticContainer);
            document.body.append(footer); 
            
            menuContent.menuButtonAction(); 
            contactContent.contactButtonAction(); 

            const homeButton = document.querySelector('a#home');
            homeButton.addEventListener('click', displayHomeContent) 
            function displayHomeContent() {
                if(staticContainer.id !== 'static-container')
                while(staticContainer.firstChild && staticContainer.removeChild(staticContainer.firstChild));
                staticContainer.setAttribute('id', 'static-container'); 
                staticContainer.append(mainElements.mainContainer);
                mainElements.staticContainer.removeAttribute('class');
                staticContainer.classList.add('transition-same-static');
            }

    }
    return { skeletonContent, staticContainer, mainContainer}
}
   
)(); 

export default mainElements 