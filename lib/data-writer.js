'use strict'

const xmlBuilder = require('xmlbuilder')
const uuidv4 = require('uuid/v4')
const moment = require('moment')

class DataWriter {
  constructor (options) {
    this.intervalDuration = options['interval_duration']
    this.timePeriodDuration = options['time_period_duration']
    this.startDate = options['start_date']
    this.intervalReadings = options['interval_readings']
  }

  validateOptions() {
    if (!this.intervalDuration) {
      throw new Error('The interval_duration option is missed')
    }

    if (!this.timePeriodDuration) {
      throw new Error('The time_period_duration option is missed')
    }

    if (!this.startDate) {
      throw new Error('The start_date option is missed')
    }

    if (!this.intervalReadings) {
      throw new Error('The interval_readings option is missed')
    }

    this.validateDuration()
    this.validateInterval()
    this.validateStartDate()

    return true
  }

  validateDuration() {
    let acceptedDurations = [86400]
    let duration = parseInt(this.intervalDuration)

    if (isNaN(duration)) {
      throw new Error('The duration value is invalid')
    }

    if (false === acceptedDurations.includes(duration)) {
      throw new Error('The duration is not accepted')
    }

    return true
  }

  validateInterval() {
    let acceptedIntervals = [3600]
    let intervalStart = parseInt(this.timePeriodDuration)

    if (isNaN(intervalStart)) {
      throw new Error('The interval value is invalid')
    }

    if (false === acceptedIntervals.includes(intervalStart)) {
      throw new Error('The internval is not accepted')
    }

    return true
  }

  validateStartDate() {
    let startDate = this.startDate
    let dateRe = new RegExp(/[\d+]{4}-[\d+]{2}-[\d+]{2} [\d+]{2}:[\d+]{2}:[\d+]{2}/i)

    if (false === dateRe.test(startDate)) {
      throw new Error('The start date format is invalid')
    }

    if (false === moment(startDate).isValid()) {
      throw new Error('The start date is invalid')
    }

    return true
  }

  static getPublishedDate() {
    return moment().format('YYYY-MM-DDTHH:mm:ssZ')
  }

  getStartTimestamp() {
    return moment(this.startDate).unix()
  }

  static getId() {
    return uuidv4().toUpperCase()
  }

  output(format = false) {
    this.validateOptions()

    let greenButtonData = xmlBuilder.create('feed', {encoding: 'utf-8'})
            .att('xmlns', 'http://www.w3.org/2005/Atom')
            .ele('entry')
            .ele('id', {}, 'urn:uuid:' + DataWriter.getId()).up()
            .ele('title').up()
            .ele('content')
              .ele('IntervalBLock', {xmlns: 'http://naesb.org/espi'})
                .ele('interval')
                  .ele('duration', {}, this.intervalDuration).up()
                  .ele('start', {}, this.getStartTimestamp()).up()
                .up()

    for (let intervalKey in this.intervalReadings) {
      greenButtonData.ele('IntervalReading')
        .ele('timePeriod')
          .ele('duration', {}, this.timePeriodDuration).up()
          .ele('start', {}, this.intervalReadings[intervalKey]['date']).up()
          .up()
        .ele('value', {}, this.intervalReadings[intervalKey]['mwh'])
    }

    if (false === format) {
      return greenButtonData.end()
    }

    return greenButtonData.end({pretty: true})
  }
}

module.exports = DataWriter
