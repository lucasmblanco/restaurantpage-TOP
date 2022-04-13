import mainElements from "./main-content";



const menuContent = (function() {


    const containerFoodElements = [];

    const test = function() { 
        mainElements.navAnchorContainer[1].addEventListener('click', displayMenuContent);
    }

    function displayMenuContent() { 
        mainElements.staticContainer.textContent = ''; 
        for(let i = 0; i < menuOptions.length; i++) {
            containerFoodElements[i] = new Food(menuOptions[i].description, menuOptions[i].reference);
            containerFoodElements[i].createMenuElements();
        }

        
    }

   
    
        /*
        const testeando = new Food('hola', 'chau'); 
        testeando.createMenuElements(); 
        console.log(testeando);
        const testeando2 = new Food('hola', 'chau'); 
        testeando2.createMenuElements(); 
        console.log(testeando2);
        const testeando3 = new Food('hola', 'chau'); 
        testeando3.createMenuElements(); 
        console.log(testeando3);
        const testeando4 = new Food('hola', 'chau'); 
        testeando4.createMenuElements(); 
        console.log(testeando4);
        const testeando5 = new Food('hola', 'chau'); 
        testeando5.createMenuElements(); 
        console.log(testeando5);
        const testeando6 = new Food('hola', 'chau'); 
        testeando6.createMenuElements(); 
        console.log(testeando6);
        */
    
/* menu options Object 
    const menuOptions = {
       option1: {
            description: 'hola',
            reference: 'chao',
        },
        option2: {
            description: 'hola2',
            reference: 'chao2',
        },
        option3: {
            description: 'hola3',
            reference: 'chao3',
        },
        option4: {
            description: 'hola4',
            reference: 'chao4',
        },
        option5: {
            description: 'hola5',
            reference: 'chao5',
        },
        option6: {
            description: 'hola6',
            reference: 'chao6',
        }
    }
*/


/*
    function createMenuElements() {
        for(let i = 0; i < 6; i++) {
            elementContainer[i] = document.createElement('div'); 
            mainElements.staticContainer.append(elementContainer[i]);
            elementContainer[i].classList.add('elements-container');
            mainElements.staticContainer.setAttribute('id', 'static-container-grid'); 
            //console.log('DIV');
            for(let j = 0; j < 1; j++) {
                imgContainer[i] = document.createElement('div');
                elementContainer[i].append(imgContainer[i]);
                imgContainer[i].classList.add('img-container');
                //console.log('element1');
                for(let k = 0; k < 1; k++){
                    img[i] = document.createElement('img');
                    imgContainer[i].append(img[i]);
                    img[i].classList.add('food-picture');
                    //console.log('element1.5');
                }
                descriptionContainer[i] = document.createElement('div'); 
                elementContainer[i].append(descriptionContainer[i]); 
                descriptionContainer[i].classList.add('description-container'); 
                //console.log('element2')
            }
        }
    }
*/


    let menuOptions = [
         {
            description: 'hola',
            reference: 'chao',
        },
         {
            description: 'hola2',
            reference: 'chao2',
        },
         {
            description: 'hola3',
            reference: 'chao3',
        },
       {
            description: 'hola4',
            reference: 'chao4',
        },
        {
            description: 'hola5',
            reference: 'chao5',
        },
        {
            description: 'hola6',
            reference: 'chao6',
        }
    ]

    

    class Food {
        constructor(description, image) {
            this.description = description;
            this.image = image; 
        }

        createMenuElements() {
            mainElements.staticContainer.setAttribute('id', 'static-container-grid');
            const elementContainer = document.createElement('div');
            elementContainer.classList.add('elements-container');
            mainElements.staticContainer.appendChild(elementContainer);

            const imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container')
            elementContainer.appendChild(imgContainer);

            const img = document.createElement('img');
            img.classList.add('food-picture');
            imgContainer.appendChild(img);

            const descriptionContainer = document.createElement('div');
            descriptionContainer.classList.add('description-container'); 

            img.setAttribute('href', this.image);
            descriptionContainer.textContent = this.description; 
            elementContainer.appendChild(descriptionContainer);
         }
    }

    return { test }
})();

export default menuContent