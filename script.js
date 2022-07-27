//############################################################//
// Image Paths
//############################################################//
const images = {
    crusts: {
        'deep dish': './assets/crusts/deep-dish.png',
        'thin': './assets/crusts/thin.png',
        'hand tossed':'./assets/crusts/hand-tossed.png',
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
        'smoked gouda': './assets/cheeses/smoked-gouda.png',
        'pepper jack': './assets/cheeses/pepper-jack.png',
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
    toppings: {
        'artichoke heart' : './assets/otherToppings/artichoke-heart.png',
        'basil' : './assets/otherToppings/basil.png',
        'bell pepper' : './assets/otherToppings/bell-pepper.png',
        'fig' : './assets/otherToppings/fig.png',
        'Hot Cheetos' : './assets/otherToppings/hot-cheetos.png',
        'jalapeno' : './assets/otherToppings/jalapeno.png',
        'mushroom' : './assets/otherToppings/mushroom.png',
        'olive' : './assets/otherToppings/olive.png',
        'onion' : './assets/otherToppings/onion.png',
        'pineapple' : './assets/otherToppings/pineapple.png',
        'roasted garlic' : './assets/otherToppings/roasted-garlic.png',
        'sun-dried tomato' : './assets/otherToppings/sun-dried-tomato.png',
    },
}

//############################################################//
// Pizza Arrays
//############################################################//
const crusts = ['hand tossed', 'thin', 'deep dish']
const sauces = ['marinara', 'alfredo', 'barbecue', 'pesto', 'arrabiata']
const cheeses = ['mozzarella', 'cheddar', 'ricotta', 'havarti', 'colby', 'smoked gouda', 'pepper jack', 'parmesean', 'meunster', 'sheep', 'goat', 'camembert', 'reblochon']
const meats = ['pepperoni', 'beef', 'bacon']
const toppings = ['jalapeno', 'pineapple', 'roasted garlic', 'basil', 'olive', 'bell pepper', 'onion', 'mushroom', 'sun-dried tomato', 'fig', 'artichoke heart', 'Hot Cheetos']

//############################################################//
// Function to Generate Random Pizza
//############################################################//
function randomPizza() {
    var arr = [...toppings];

    const randomCrust = crusts[Math.floor(Math.random()*crusts.length)];
    document.getElementById('crust').src = images.crusts[randomCrust];

    const randomSauce = sauces[Math.floor(Math.random()*sauces.length)];
    document.getElementById('sauce').src = images.sauces[randomSauce];

    const randomCheese = cheeses[Math.floor(Math.random()*cheeses.length)];
    document.getElementById('cheese').src = images.cheeses[randomCheese];

    const randomMeat = meats[Math.floor(Math.random()*meats.length)];
    document.getElementById('meat').src = images.meats[randomMeat];

    let index = Math.floor(Math.random()*arr.length);
    randomTopping1 = arr[index];
    arr.splice(index,1);
    document.getElementById('topping1').src = images.toppings[randomTopping1];

    index = Math.floor(Math.random()*arr.length);
    randomTopping2 = arr[index];
    arr.splice(index,1);
    document.getElementById('topping2').src = images.toppings[randomTopping2];

    index = Math.floor(Math.random()*arr.length);
    randomTopping3 = arr[index];
    arr.splice(index,1);    
    document.getElementById('topping3').src = images.toppings[randomTopping3];

    randomToppings = `${randomTopping1}, ${randomTopping2} and ${randomTopping3}.`;

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
//############################################################//