import mainElements from "./main-content";

const images = {};

function importAll(r) {
  r.keys().forEach((key) => (images[key] = r(key)));
}

importAll(require.context('../src/components/menu-content', false, /\.jpg/));

const menuOptions = [['ANTIPASTI',"L'antipasto è un tipo di antipasto tipico della cucina italiana.\
                    Può includere dalle specialità più elaborate dello chef a semplici come olive, affettati, diversi frutti di mare, ecc.\
                    L'obiettivo dell'antipasto è stuzzicare l'appetito prima del pasto, senza saturare i sensi.", 
                    images['./antipasti.jpg'],], 
                    ['BAKED PASTA',"La nostra pasta al forno italiana con cinque ingredienti è una delle preferite dai nostri visitatori.\
                     Include strati di pasta a scelta, tre formaggi e salsa marinara.", images['./bakedpasta.jpg'], ], 
                    ['PESCE',"Il menu di Pesce è una miscela creativa di erbe e spezie, \ ingredienti freschi e frutti di mare locali che\
                     aggiungono un tocco contemporaneo agli elementi della fenomenale cucina italiana.", images['./pesce.jpg'], ], 
                    ['POLLO',"L'autentico pollo alla cacciatora è un classico italiano e non avrai mai un pasto fatto in casa più succulento di questa ricetta!.\
                     Amati da tutta la famiglia, gli aromi del Cacciatore riempiono di comfort e calore tutta la tua casa mentre si cuoce \
                     sui fornelli o in forno!",images['./pollo.jpg'], ], 
                    ['INSALATA',"L'insalata è spesso giudicata per non essere un piatto coerente, ma a Sale e Pepe non crediamo che sia così. Quando fai un'insalata,\
                     la cosa migliore è che puoi aggiungere quello che vuoi: tonno, mais, cipolla, quasi tutto. È per questo motivo che dalla cucina del ristorante vi \
                     incoraggiamo ad amare di più questo piatto.",images['./salad.jpg'], ], 
                    ['VITELLO',"Piatto piemontese di affettato di vitello freddo condito con una salsa cremosa simile alla maionese che è stata condita con il tonno.\
                     Viene servito freddo oa temperatura ambiente, solitamente d'estate, come piatto unico di un pasto italiano.",images['./vitelo.jpg'], ], 
]

const menuContent = (function() {

 class Food {
        constructor(name, description, image, dataNumber) {
            this.name = name;
            this.description = description;
            this.image = image; 
     
        }

        createMenuElements() {
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

            const nameContainer = document.createElement('div'); 
            nameContainer.classList.add('name-menu');

            const description = document.createElement('div');
            description.classList.add('description'); 

            img.setAttribute('src',this.image);
   

            description.textContent = this.description; 
            nameContainer.textContent = this.name;
     
            descriptionContainer.append(nameContainer, description);
            elementContainer.appendChild(descriptionContainer);
        }
    }


   

    const containerFoodElements = [];



    const menuButtonAction = function() { 
        const menuButton = document.querySelector('a#menu');
        menuButton.addEventListener('click', displayMenuContent);
    }

    function displayMenuContent() { 

        while(mainElements.staticContainer.firstChild && mainElements.staticContainer.removeChild(mainElements.staticContainer.firstChild));
        for(let i = 0; i < menuOptions.length; i++) {
   
        containerFoodElements[i] = new Food(...menuOptions[i]);
        containerFoodElements[i].createMenuElements();


        }   
        mainElements.staticContainer.setAttribute('id', 'static-container-grid');
        mainElements.staticContainer.removeAttribute('class');
        mainElements.staticContainer.classList.add('transition-different-static');

        
    }


    return { menuButtonAction }
})();

export default menuContent