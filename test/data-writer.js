'use strict'

var assert = require('assert')
var greenButtonData = require('../lib/index')

describe('data-writer', function() {
    describe('#validateOptions()', function() {
      it('can validate options without error', function(done) {
        let options = {
            'interval_duration': 86400,
            'time_period_duration': 3600,
            'start_date': '2019-07-18 17:00:00',
            'interval_readings': [
              {date: '2019-07-18 17:00:00', mwh: 912},
            ],
        }

        let dataWriter = new greenButtonData.DataWriter(options)
        assert.strictEqual(dataWriter.validateOptions(), true)

        done()
      });
    });
  });

describe('data-writer', function() {
  describe('#getPublishedDate', function() {
    it('can get curent published date with ISO-8661-1988 format', function (done) {
      assert.strictEqual(typeof greenButtonData.DataWriter.getPublishedDate() === 'string', true)

      done()
    })
  })
})

describe('data-writer', function() {
  describe('#getStartTimestamp', function() {
    it('can get curent start timestamp', function (done) {
      let options = {
        'interval_duration': 86400,
        'time_period_duration': 3600,
        'start_date': '2019-07-18 17:00:00',
        'interval_readings': [
          {date: '2019-07-18 17:00:00', mwh: 912},
        ],
      }

      let dataWriter = new greenButtonData.DataWriter(options)
      assert.strictEqual(typeof dataWriter.getStartTimestamp() === 'number', true)

      done()
    })
  })
})

describe('data-writer', function() {
  describe('#getId', function() {
    it('can get UUIDv4 with entry id', function(done) {
      let test = new RegExp(/[\w+]{8}-[\w+]{4}-[\w+]{4}-[\w+]{4}-[\w+]{12}/)
      assert.strictEqual(test.test(greenButtonData.DataWriter.getId()), true)

      done()
    })
  })
})

describe('data-writer', function() {
  describe('#output', function() {
    it('can get output Green button data with minified Atom XML', function(done) {
      let options = {
        'interval_duration': 86400,
        'time_period_duration': 3600,
        'start_date': '2019-07-18 00:00:00',
        'interval_readings': [
          {date: '2019-07-18 17:00:00', mwh: 912},
          {date: '2019-07-18 18:00:00', mwh: 900},
        ],
      }

      let expectedXmlHead = '<?xml version="1.0" encoding="utf-8"?>'
      let expectedFeed = '<feed xmlns="http://www.w3.org/2005/Atom">'
      let dataWriter = new greenButtonData.DataWriter(options)

      assert.strictEqual(dataWriter.output().includes(expectedXmlHead), true)
      assert.strictEqual(dataWriter.output().includes(expectedFeed), true)

      done()
    })
  })
})
