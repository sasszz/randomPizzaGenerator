//############################################################//
// Image Paths
//############################################################//
var images = {
    crusts: {
        'deep-dish': './assets/crusts/deep-dish.png',
        'thin': './assets/crusts/thin.png',
        'hand-tossed':'./assets/crusts/hand-tossed.png',
    },
    sauces: {
        'alfredo': './assets/sauces/alfredo.png',
        'arrabiata': './assets/sauces/arrabiata.png',
        'barbecue': './assets/sauces/barbecue.png',
        'marinara': './assets/sauces/marinara.png',
        'pesto': './assets/sauces/pesto.png',
    },
    cheeses: {
        'mozzarella' : './assets/cheeses/mozzarella.png',
        'cheddar': './assets/cheeses/cheddar.png',
        'ricotta': './assets/cheeses/ricotta.png',
        'havarti': './assets/cheeses/havarti.png',
        'colby': './assets/cheeses/colby.png',
        'smoked-gouda': './assets/cheeses/smoked-gouda.png',
        'pepper-jack': './assets/cheeses/pepper-jack.png',
        'parmesean': './assets/cheeses/parmesan.png',
        'meunster': './assets/cheeses/meunster.png',
        'sheep': './assets/cheeses/sheep.png',
        'goat': './assets/cheeses/goat.png',
        'camembert': './assets/cheeses/camembert.png',
        'reblochon': './assets/cheeses/reblochon.png',
    },
    meats: {
        'bacon' : './assets/meats/bacon.png',
        'beef' : './assets/meats/beef.png',
        'pepperoni' : './assets/meats/pepperoni.png',
    },
    otherToppings: {
        'artichoke-heart' : './assets/otherToppings/artichoke-heart.png',
        'basil' : './assets/otherToppings/basil.png',
        'bell-pepper' : './assets/otherToppings/bell-pepper.png',
        'fig' : './assets/otherToppings/fig.png',
        'hot-cheetos' : './assets/otherToppings/hot-cheetos.png',
        'jalapeno' : './assets/otherToppings/jalapeno.png',
        'mushroom' : './assets/otherToppings/mushroom.png',
        'olive' : './assets/otherToppings/olive.png',
        'onion' : './assets/otherToppings/onion.png',
        'pineapple' : './assets/otherToppings/pineapple.png',
        'roasted-garlic' : './assets/otherToppings/roasted-garlic.png',
        'sun-dried-tomato' : './assets/otherToppings/sun-dried-tomato.png',
    },
}

//############################################################//
// Pizza Arrays
//############################################################//
let crusts = ['hand tossed', 'thin', 'deep dish']
let sauces = ['marinara', 'alfredo', 'barbecue', 'pesto', 'arrabbiata']
let cheeses = ['mozzarella', 'cheddar', 'ricotta', 'havarti', 'colby', 'smoked gouda', 'pepper jack', 'parmesean', 'meunster', 'sheep', 'goat', 'camembert', 'reblochon']
let meats = ['pepperoni', 'beef', 'bacon']
let toppings = [' jalapeno', ' pineapple', ' roasted garlic', ' basil', ' olive', ' bell pepper', ' onion', ' mushroom', ' sun-dried tomato', ' fig', ' artichoke heart', ' Hot Cheetos™️']

//############################################################//
// Function to Generate Random Pizza
//############################################################//
function randomPizza() {
    randomCrust = crusts[Math.floor(Math.random()*crusts.length)];
    randomSauce = sauces[Math.floor(Math.random()*sauces.length)];
    randomCheese = cheeses[Math.floor(Math.random()*cheeses.length)];
    randomMeat = meats[Math.floor(Math.random()*meats.length)];
    randomToppings = [
        toppings[Math.floor(Math.random()*toppings.length) ], 
    toppings[Math.floor(Math.random()*toppings.length)], " and",
    toppings[Math.floor(Math.random()*toppings.length)]
];
    return `You have a ${randomCrust} crust pizza with ${randomSauce} sauce, ${randomCheese} cheese, and four toppings: ${randomMeat}, ${randomToppings}`;
}

//############################################################//
// Function Replaces Menu Body with Text
//############################################################//
function generate() {
    let targetText = document.getElementById('pizzaResult');
    let generatedPizza = randomPizza();
    targetText.innerText = generatedPizza;
    return generatedPizza;
}

var pizzaOne = generate();

//############################################################//
// Function Switches Images for Pizza
//############################################################//
function switchImage(element) {
    element.src = images;
}

//############################################################//