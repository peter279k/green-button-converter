'use strict'

const xmlBuilder = require('xmlbuilder')
const uuid4 = require('uuid/v4')
const moment = require('moment')

class DataWriter {
  constructor (options) {
    this.intervalDuration = options['interval_duration']
    this.timePeriodDuration = options['time_period_duration']
    this.startDate = options['start_date']
    this.intervalReadings = options['interval_readings']
    this.powerOfTenMultiplier = options['power_of_ten_multiplier']
    this.uom = options['uom']
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

    if (!this.powerOfTenMultiplier && 0 !== this.powerOfTenMultiplier) {
      throw new Error('The power of ten multiplier option is missed')
    }

    if (!this.uom) {
      throw new Error('The UOM option is missed')
    }

    this.validateDuration()
    this.validateInterval()
    this.validateStartDate()
    this.validatePowerOfTenMultiplier()
    this.validateUom()

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
      throw new Error('The interval is not accepted')
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

  validatePowerOfTenMultiplier() {
    if (this.validatePowerOfTenMultiplier < 0) {
      throw new Error('The power of ten multiplier option is invalid')
    }

    return true
  }

  validateUom() {
    if (this.uom < 0) {
      throw new Error('The UOM option is invalid')
    }

    return true
  }

  static getPublishedDate() {
    return moment().format('YYYY-MM-DD[T]HH:mm:ss[Z]')
  }

  getStartTimestamp() {
    return moment(this.startDate).unix()
  }

  static getId() {
    return uuid4().toUpperCase()
  }

  static getElectricId() {
    return '123456';
  }

  output(format = false) {
    this.validateOptions()

    let publishedDate = DataWriter.getPublishedDate()
    let xmlEspiNs = {xmlns: 'http://naesb.org/espi'}
    let greenButtonData = xmlBuilder.create('feed', {encoding: 'utf-8'})
            .att('xmlns', 'http://www.w3.org/2005/Atom')
            .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
            .ele('id', {}, 'urn:uuid:' + DataWriter.getId()).up()
            .ele('title', {}, 'GreenButton User ' + DataWriter.getElectricId() + ' Feed').up()
            .ele('updated', {}, publishedDate).up()
            .ele('entry')
            .ele('id', {}, 'urn:uuid:' + DataWriter.getId()).up()
            .ele('link', {rel: 'self', href: 'RetailCustomer/9b6c7063/UsagePoint/01'}).up()
            .ele('link', {rel: 'up', href: 'RetailCustomer/9b6c7063/UsagePoint'}).up()
            .ele('link', {rel: 'related', href: 'RetailCustomer/9b6c7063/UsagePoint/01/MeterReading'}).up()
            .ele('link', {rel: 'related', href: 'LocalTimeParameters/01'}).up()
            .ele('title', {}, 'Single Family').up()
            .ele('content')
            .ele('UsagePoint', xmlEspiNs)
              .ele('ServiceCategory')
                .ele('kind', {}, 0).up().up().up().up()
            .ele('published', {}, publishedDate).up()
            .ele('updated', {}, publishedDate).up().up()
            .ele('entry')
            .ele('id', {}, 'urn:uuid:' + DataWriter.getId()).up()
            .ele('link', {rel: 'self', href: 'LocalTimeParameters/01'}).up()
            .ele('link', {rel: 'up', href: 'LocalTimeParameters'}).up()
            .ele('title', {}, 'DST For Taiwan').up()
            .ele('content')
            .ele('LocalTimeParameters', {xmlns: 'http://naesb.org/espi'})
            .ele('dstEndRule', {}, 'B40E2000').up()
            .ele('dstOffset', {}, '3600').up()
            .ele('dstStartRule', {}, '360E2000').up()
            .ele('tzOffset', {}, '-18000').up().up().up()
            .ele('published', {}, publishedDate).up()
            .ele('updated', {}, publishedDate).up().up()
            .ele('entry')
            .ele('id', {}, 'urn:uuid:' + DataWriter.getId()).up()
            .ele('link', {rel: 'self', href: 'RetailCustomer/9b6c7063/UsagePoint/01/MeterReading/01'}).up()
            .ele('link', {rel: 'up', href: 'RetailCustomer/9b6c7063/UsagePoint/01/MeterReading'}).up()
            .ele('link', {rel: 'related', href: 'RetailCustomer/9b6c7063/UsagePoint/01/MeterReading/01/IntervalBlock'}).up()
            .ele('link', {rel: 'related', href: 'ReadingType/07'}).up()
            .ele('title', {}, 'Hourly Electricity Consumption').up()
            .ele('content')
              .ele('MeterReading', {xmlns: 'http://naesb.org/espi'}).up().up()
            .ele('published', {}, publishedDate).up()
            .ele('updated', {}, publishedDate).up().up()
            .ele('entry')
            .ele('id', {}, 'urn:uuid:' + DataWriter.getId()).up()
            .ele('link', {rel: 'self', href: 'ReadingType/07'}).up()
            .ele('link', {rel: 'up', href: 'ReadingType'}).up()
            .ele('title', {}, 'Energy Delivered (Wh)').up()
            .ele('content')
              .ele('ReadingType', xmlEspiNs)
                .ele('accumulationBehaviour', {}, 4).up()
                .ele('commodity', {}, 1).up()
                .ele('dataQualifier', {}, 12).up()
                .ele('flowDirection', {}, 1).up()
                .ele('intervalLength', {}, this.timePeriodDuration).up()
                .ele('kind', {}, 12).up()
                .ele('phase', {}, 769).up()
                .ele('powerOfTenMultiplier', {}, this.powerOfTenMultiplier).up()
                .ele('timeAttribute', {}, 0).up()
                .ele('uom', {}, this.uom).up().up().up()
                .ele('published', {}, publishedDate).up()
                .ele('updated', {}, publishedDate).up().up()
            .ele('entry')
            .ele('id', {}, 'urn:uuid:' + DataWriter.getId()).up()
            .ele('link', {rel: 'self', href: 'RetailCustomer/9b6c7063/UsagePoint/01/MeterReading/01/IntervalBlock/0173'}).up()
            .ele('link', {rel: 'up', href: 'RetailCustomer/9b6c7063/UsagePoint/01/MeterReading/01/IntervalBlock'}).up()
            .ele('title', {}).up()
            .ele('content')
              .ele('IntervalBlock', xmlEspiNs)
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
    greenButtonData = greenButtonData.up().up()

    greenButtonData.ele('published', {}, publishedDate)
    greenButtonData.ele('updated', {}, publishedDate)

    if (false === format) {
      return greenButtonData.end()
    }

    return greenButtonData.end({pretty: true})
  }
}

module.exports = DataWriter
