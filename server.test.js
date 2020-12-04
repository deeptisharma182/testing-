const mocha = require('mocha')
const expect = require('chai').expect

const app = require('../UnitTesting/server')
let server;

describe('server', () =>{

before((done) => {
   server =  app.listen(2222, done)
})

    it('rates should be correct', (done) =>{
        request.get('http://localhost:2222/rate', (err,resp, body)=>{
        console.log(JSON.parse(body))
        expect(rates.fixed).to.equal(50)
        expect(rates.perKm).to.equal(10)
        
        done()
        })
    })

after(() =>{
    server.close()
})
})