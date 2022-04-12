import titleImg from './components/title/saleepepe-title.png'

const mainWelcome = [["Your culinary experience begins as you step foot inside our old stone farmhouse. A perfectly rustic setting, for a thoughtful, local and robust culinary adventure."],
["Our space is divided into private dining rooms, proving a quaint and cozy setting for dining or celebrating together."],
["Each menu we offer is brimming with local taste experiences that are sure to delight. "],
["As we explore local flavours, we update our menus to highlight the freshest ingredients."],
["Explore our menus often to experience the most from our kitchen."]];

const mainElements =  (function() {
    const skeletonContent = function() {
        const contentDiv = document.getElementById('content');
        const header = document.createElement('header')
        const imgHeader = document.createElement('img');

        header.setAttribute('class', 'title');
        imgHeader.setAttribute('class', 'title-image'); 
        imgHeader.setAttribute('src', titleImg);
        imgHeader.setAttribute('alt', 'Logo Sale e Pepe')
        header.append(imgHeader);
        

        const navContainer = document.createElement('div');
        navContainer.setAttribute('id', 'navigation-bar-container');
        const navBar = document.createElement('nav');
        const navUl = document.createElement('ul');
        navContainer.append(navBar);
        navBar.append(navUl);

        let navElementsContainer = [];
        let navAnchorContainer = [];

        for(let i = 0; i < 3; i++) {
                navElementsContainer[i] = document.createElement('li');
                navElementsContainer[i].setAttribute('class', 'navItem')
                navUl.append(navElementsContainer[i]);
            }

        for(let i = 0; i < navElementsContainer.length; i++){
            navAnchorContainer[i] = document.createElement('a');
            navElementsContainer[i].appendChild(navAnchorContainer[i]);
        }
        
        navElementsContainer[0].setAttribute('id', 'home');
        navElementsContainer[1].setAttribute('id', 'menu');  
        navElementsContainer[2].setAttribute('id', 'contact');

        navAnchorContainer[0].textContent = 'HOME';
        navAnchorContainer[1].textContent = 'MENU';
        navAnchorContainer[2].textContent = 'CONTACT';


        navAnchorContainer.map(item => item.setAttribute('href', '')); 

        const staticContainer = document.createElement('div');
        staticContainer.setAttribute('id', 'static-container');

        const mainContainer = document.createElement('div');
        mainContainer.setAttribute('class', 'main-text-container')
        const mainParagraphs = [];
        
        for(let i = 0; i < mainWelcome.length; i++) {
            mainParagraphs[i] = document.createElement('p');
            mainParagraphs[i].textContent = mainWelcome[i];
            mainContainer.append(mainParagraphs[i]);
        }
        
        staticContainer.appendChild(mainContainer);


        const footer = document.createElement('footer');
        const anchorGitHub = document.createElement('a');
        anchorGitHub.setAttribute('href','https://github.com/lucasmblanco');
        anchorGitHub.textContent = 'GITHUB'; 
        footer.setAttribute('id', 'static-footer');
        footer.appendChild(anchorGitHub);
        
        contentDiv.append(header, navContainer, staticContainer);
        document.body.append(footer); 
        
        
    }
    return { skeletonContent }
}
   
)(); 

export default mainElements 