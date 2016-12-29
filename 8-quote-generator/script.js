var quotesCollection = [
  {about: 'On changing the world', quote: 'I want to see good financial returns, but also to me there’s the extra psychic return of having my creativity and technological vision bear fruit and change the world in a positive way.'},
  {about: 'On knowledge:', quote: 'If you don’t understand the details of your business you are going to fail.'},
  {about: 'On uncertainty:', quote: 'If you decide that you’re going to do only the things you know are going to work, you’re going to leave a lot of opportunity on the table.'},
  {about: 'On value creation vs advertising:', quote: 'The balance of power is shifting toward consumers and away from companies… The right way to respond to this if you are a company is to put the vast majority of your energy, attention and dollars into building a great product or service and put a smaller amount into shouting about it, marketing it.'},
  {about: 'On fact-based decision-making:', quote: 'The great thing about fact-based decisions is that they overrule the hierarchy.'},
  {about: 'On culture:', quote: 'Part of company culture is path-dependent – it’s the lessons you learn along the way.'},
  {about: 'About history:', quote: 'The killer app that got the world ready for appliances was the light bulb. So the light bulb is what wired the world. And they weren’t thinking about appliances when they wired the world. They were really thinking about – they weren’t putting electricity into the home. They were putting lighting into the home.'},
  {about: 'On inverting questions:', quote: "The common question that gets asked in business is, ‘why?’ That’s a good question, but an equally valid question is, ‘why not?'"},
  {about: 'On banks:', quote: 'The one thing that offends me the most is when I walk by a bank and see ads trying to convince people to take out second mortgages on their home so they can go on vacation. That’s approaching evil.'},
  {about: 'On being misunderstood:', quote: 'I believe you have to be willing to be misunderstood if you’re going to innovate.'}
]

function generateQuote () {
  var randomNumber = Math.floor(Math.random() * quotesCollection.length)
  $('.about').text(quotesCollection[randomNumber].about)
  $('.display').text(quotesCollection[randomNumber].quote)
}
