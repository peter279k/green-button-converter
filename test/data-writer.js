'use strict'

var file = require('fs')
var xmlParser = require('xml-parser')
var assert = require('assert')
var DataWriter = require('../lib/index').DataWriter
var options = {
  'interval_duration': 86400,
  'time_period_duration': 3600,
  'start_date': '2019-07-18 17:00:00',
  'interval_readings': [
    {date: '2019-07-18 17:00:00', mwh: 912},
  ],
  'power_of_ten_multiplier': 0,
  'uom': 72,
}

describe('data-writer', function() {
    describe('#validateOptions()', function() {
      it('can validate options without error', function(done) {
        let dataWriter = new DataWriter(options)
        assert.strictEqual(dataWriter.validateOptions(), true)

        done()
      });
    });
  });

describe('data-writer', function() {
  describe('#getPublishedDate', function() {
    it('can get current published date with ISO-8661-1988 format', function (done) {
      assert.strictEqual(typeof DataWriter.getPublishedDate() === 'string', true)

      done()
    })
  })
})

describe('data-writer', function() {
  describe('#getStartTimestamp', function() {
    it('can get current start timestamp', function (done) {
      let dataWriter = new DataWriter(options)
      assert.strictEqual(typeof dataWriter.getStartTimestamp() === 'number', true)

      done()
    })
  })
})

describe('data-writer', function() {
  describe('#getId', function() {
    it('can get UUIDv4 with entry id', function(done) {
      let test = new RegExp(/[\w+]{8}-[\w+]{4}-[\w+]{4}-[\w+]{4}-[\w+]{12}/)
      assert.strictEqual(test.test(DataWriter.getId()), true)

      done()
    })
  })
})

describe('data-writer', function() {
  describe('#output', function() {
    it('can get output Green button data with minified Atom XML', function(done) {
      let expectedXmlHead = '<?xml version="1.0" encoding="utf-8"?>'
      let expectedFeed = '<feed xmlns="http://www.w3.org/2005/Atom">'
      let dataWriter = new DataWriter(options)
      let result = dataWriter.output(true)

      assert.strictEqual(result.includes(expectedXmlHead), true)
      assert.strictEqual(result.includes(expectedFeed), true)

      done()
    })
  })
})

describe('data-writer', function() {
  describe('#output()', function() {
    it('can validate Green Button XML Data tree', function(done) {
      let xml = file.readFileSync(__dirname + '/./fixtures/test.xml', 'utf-8')
      let result = xmlParser(xml)

      assert.strictEqual(result.root.name, 'feed')
      assert.strictEqual(result.root.attributes.xmlns, 'http://www.w3.org/2005/Atom')
      assert.strictEqual(result.root.children.length, 8)

      assert.strictEqual(result.root.children[0].name, 'id')
      assert.strictEqual(result.root.children[0].content, 'urn:uuid:23AC4BEC-B3CD-41DC-B39B-2F8BCB4768EC')

      assert.strictEqual(result.root.children[1].name, 'title')
      assert.strictEqual(result.root.children[1].content, 'GreenButton User XXXX Feed')

      assert.strictEqual(result.root.children[2].name, 'updated')
      assert.strictEqual(result.root.children[2].content, '2012-10-24T00:00:00Z')

      assert.strictEqual(result.root.children[3].children[6].children[0].name, 'UsagePoint')
      assert.strictEqual(result.root.children[4].children[4].children[0].name, 'LocalTimeParameters')
      assert.strictEqual(result.root.children[5].children[6].children[0].name, 'MeterReading')
      assert.strictEqual(result.root.children[6].children[4].children[0].name, 'ReadingType')
      assert.strictEqual(result.root.children[7].children[4].children[0].name, 'IntervalBlock')

      done()
    })
  })
})
