const quoteDisplay = document.querySelector('#quote')
const button = document.querySelector('button')
const show = document.querySelector('.quoteShow')

//Challenge: Write a function that will display a random Inspirational Quote
//from the quotes array, when the button is pressed.
const quotes = [
    'Do something today that your future self will thankyou for',
    'Dont worry, be happy!',
    'Your limitation is only your imagination'
]

function showQuote() {
    //your code
    let randomNumber = Math.floor(Math.random() * quotes.length)
    let randomQuote = quotes[randomNumber]
    quoteDisplay.innerHTML = randomQuote
    show.style.display = "block"
}

button.addEventListener('click', showQuote)
//button.addEventListener('hover',function(){
//     button.style.boxShadow="1px 1px 1px white"
// })
