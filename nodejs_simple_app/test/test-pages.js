// var expect  = require('chai').expect;
var request = require('request');
const chai = require("chai");
const chaiHttp = require('chai-http');

// import { app } from '../index.js'


chai.use(chaiHttp);
const { expect } = chai
const app = require('../app')

describe("Server!", () => {
  it("welcomes user to the api", done => {
    chai
      .request('http://localhost:8080')
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.message).to.equal("Hello World");
        done();
      });
  });

it('Main page content', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(body).to.equal('{"status":"success","message":"Hello World"}');
        done();
    });
});


it('Prometheus page content', function(done) {
    request('http://localhost:8080/metrics' , function(error, response, body) {
        //expect(body).startswith('# HELP');
        expect(body).to.match(/# HELP.*/);
        //expect(body).to.be.a('string').and.match(new RegExp('^' + escapeRegExp('# HELP'), 'i'))
        done();
    });
});


});
