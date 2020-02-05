'use strict'

var file = require('fs')
var xmlParser = require('xml-parser')
var assert = require('assert')
var CustomerDataWriter = require('../lib/index').CustomerDataWriter
var options = {
    'account_id': 'Peter',
    'meter_form_number': 'TD17234599',
    'end_device_serial_number': '99123456',
  }

describe('customer-data-writer', function() {
  describe('#getPublishedDate()', function() {
    it('can generate published date', function(done) {
      assert.strictEqual(typeof(CustomerDataWriter.getPublishedDate()) === 'string', true)

      done()
    });
  });
});

describe('customer-data-writer', function() {
  describe('#getId', function() {
    it('can get UUIDv4 with entry id', function(done) {
      let test = new RegExp(/[\w+]{8}-[\w+]{4}-[\w+]{4}-[\w+]{4}-[\w+]{12}/)
      assert.strictEqual(test.test(CustomerDataWriter.getId()), true)

      done()
    })
  })
})

describe('customer-data-writer', function() {
  describe('#output', function() {
    it('can get output Green button customer data with minified Atom XML', function(done) {
      let expectedXmlHead = '<?xml version="1.0" encoding="utf-8"?>'
      let expectedFeed = '<feed xmlns="http://www.w3.org/2005/Atom" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'
      let customerDataWriter = new CustomerDataWriter(options)
      let result = customerDataWriter.output(true)

      assert.strictEqual(result.includes(expectedXmlHead), true)
      assert.strictEqual(result.includes(expectedFeed), true)

      done()
    })
  })
})

describe('customer-data-writer', function() {
  describe('#output()', function() {
    it('can validate Green Button XML Customer Data tree', function(done) {
      let xml = file.readFileSync(__dirname + '/./fixtures/retail_customer_data.xml', 'utf-8')
      let result = xmlParser(xml)

      assert.strictEqual(result.root.name, 'feed')
      assert.strictEqual(result.root.attributes.xmlns, 'http://www.w3.org/2005/Atom')
      assert.strictEqual(result.root.children.length, 8)

      assert.strictEqual(result.root.children[0].name, 'id')
      assert.strictEqual(result.root.children[0].content, '489C14BF-4426-11E6-A453-5463F700E189')

      assert.strictEqual(result.root.children[1].name, 'link')

      assert.strictEqual(result.root.children[2].name, 'title')
      assert.strictEqual(result.root.children[2].content, 'Green Button Customer Feed')

      assert.strictEqual(result.root.children[3].name, 'updated')
      assert.strictEqual(result.root.children[3].content, '2016-07-07T02:36:29')

      assert.strictEqual(result.root.children[4].children[5].children[0].name, 'CustomerAccount')
      assert.strictEqual(result.root.children[5].children[4].children[0].name, 'CustomerAgreement')
      assert.strictEqual(result.root.children[6].children[5].children[0].name, 'Meter')
      assert.strictEqual(result.root.children[7].children[4].children[0].name, 'EndDevice')

      done()
    })
  })
})
