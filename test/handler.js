'use strict';

// tests for createKey
// Generated by serverless-mocha-plugin

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let createKey = mochaPlugin.getWrapper('createKey', '/handler.js', 'createKey');
let getKey = mochaPlugin.getWrapper('getKey', '/handler.js', 'getKey');

describe('handlers', () => {
  let keyId;

  describe('createKey', () => {
    it('should create key document', async () => {
      const response = await createKey.run({});
      keyId = JSON.parse(response.body).id;
      expect(keyId).to.not.be.empty;
      expect(response.statusCode).to.equal(200);
    });
  });

  describe('getKey', () => {
    it('should read key document', async () => {
      const response = await getKey.run({
        queryStringParameters: {
          id: keyId
        }
      });
      const fetchedId = JSON.parse(response.body).id;
      expect(fetchedId).to.equal(keyId);
    });
  });
});
