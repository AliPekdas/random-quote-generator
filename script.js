let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let button = document.querySelector("#new-quote");

const quotes = [{
    quote: "The hardest thing in the world to understand is the income tax.",
    person: "Albert Einstein"
}, {
    quote: "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",
    person: "Albert Einstein"
}, {
    quote: "A stitch in time would have confused Einstein.",
    person: "Albert Einstein"
}, {
    quote: "Science is the only true guide in life.",
    person: "Mustafa Kemal Atatürk"
}, {
    quote: "The one who loves his country the most does his duty best.",
    person: "Mustafa Kemal Atatürk"
}, {
    quote: "Peace at home is peace in the country.",
    person: "Mustafa Kemal Atatürk"
}];

button.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
})