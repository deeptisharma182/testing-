const mocha = require('mocha')
const chai = require('chai')

const fareUtils = require('../fareutils')

const expect = chai.expect
//expect is a function

describe('fareUtils', function(){

    it('expect fare to be 50 for 0km, 0min', () => {
        let fare = fareUtils.calcFare(0,0)
        expect(fare).to.equal(50)
    })
    
    it('expect fare to be 100 for 0km, 0min', () => {
        let fare = fareUtils.calcFare(10,0)
        expect(fare).to.equal(100)
    })

    it('expect fare to be 56 for 2km, 18min', () => {
        let fare = fareUtils.calcFare(2,18)
        expect(fare).to.equal(56)
    })
})

//mocha sidebar
//npm run tests
//CODE COVERAGE
//npm install nyc
/* IN package.JSON make the following changes
"scripts": {
    "test": "mocha",
    "start": "node server.js",
    "cover": "nyc mocha"
  },*/
//npm run cover


/* Or 
"scripts": {
    "test": "mocha",
    "start": "node server.js",
    "cover": "nyc --reporter=html mocha"
    //here we are using an html reporter
},*/
//npm run cover


/* Or (we can use html and text reporter both )
test": "mocha",
    "start": "node server.js",
    "cover": "nyc --reporter=html --reporter=text mocha"
    //here we are using an html and text reporter both
    //Here we get a coverage folder in addition 
},*/
//npm run cover
//IN coverage folder open index.html
//there  click on fare.utils-> it reveals which lines have run and which haven't



//Coverage Gutters
/*"scripts": {
    "test": "mocha",
    "start": "node server.js",
    "cover": "nyc --reporter=html --reporter=text --reporter=lcov mocha"
    
    //lcov reporter is machine readable coverage so that our id can read the coverage data
    

  },*/