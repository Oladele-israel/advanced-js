let display = document.querySelector('.quote');
let btn = document.querySelector(' button')
let para = document.querySelector('.quote')
const quotes = [ 
  
  "A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be ― Abraham Maslow ",

"Insane means fewer cameras― Ally Carter, Only the Good Spy Young",

"Josh said evenly, I've seen men made of mud, I guess I can accept spying rats. Do they talk? he wondered aloud Don't be ridiculous, Flamel snapped, They're rats josh really didn't think it was a ridiculous suggestion― Michael Scott, The Alchemyst",

"Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you- Princess Diana ",

"I don't believe that if you do good, good things will happen. Everything is completely accidental and random. Sometimes bad things happen to very good people and sometimes good things happen to bad people. But at least if you try to do good things, then you're spending your time doing something worthwhile- Helen Mirren",

"Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination- Sushant Singh Rajput"
]

function generateQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];
  return randomQuote;
}

function displayQuote(){
  display.textContent = generateQuote();
  para.textContent = display.textContent;

}

btn.addEventListener('click', displayQuote);

