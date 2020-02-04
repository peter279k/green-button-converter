'use strict'

const xmlBuilder = require('xmlbuilder')
const uuid4 = require('uuid/v4')
const moment = require('moment')

class CustomerDataWriter {
  constructor (options) {
    this.accountName = String(options['account_id'])
    this.meterNumber = String(options['meter_form_number'])
    this.electricId = String(options['end_device_serial_number'])
  }

  static getPublishedDate() {
    return moment().format('YYYY-MM-DD[T]HH:mm:ss[Z]')
  }

  static getId() {
    return uuid4().toUpperCase()
  }

  output(format = false) {
    let publishedDate = CustomerDataWriter.getPublishedDate()
    let xmlEspiNs = {xmlns: 'http://naesb.org/espi/customer'}

    let greenButtonData = xmlBuilder.create('feed', {encoding: 'utf-8'})
            .att('xmlns', 'http://www.w3.org/2005/Atom')
            .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
            .ele('id', {}, 'urn:uuid:' + CustomerDataWriter.getId()).up()
            .ele('link', {rel: 'self', href: 'DataCustodian/espi/1_1/resource/RetailCustomer/1161'}).up()
            .ele('title', {}, 'Green Button Customer Feed').up()
            .ele('updated', {}, publishedDate).up()
            .ele('entry')
            .ele('id', {}, CustomerDataWriter.getId()).up()
            .ele('link', {rel: 'self', href: 'DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111'}).up()
            .ele('link', {rel: 'up', href: 'DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount'}).up()
            .ele('link', {rel: 'related', href: 'DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111/CustomerAgreement'}).up()
            .ele('title', {}, 'CustomerAccount information').up()
            .ele('content')
            .ele('CustomerAccount', xmlEspiNs)
              .ele('accountId', {}, this.accountName)
                .up().up().up()
            .ele('published', {}, publishedDate).up()
            .ele('updated', {}, publishedDate).up().up()
            .ele('entry')
            .ele('id', {}, CustomerDataWriter.getId()).up()
            .ele('link', {rel: 'self', href: 'DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111'}).up()
            .ele('link', {rel: 'up', href: 'DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount'}).up()
            .ele('title', {}, 'CustomerAgreement information').up()
            .ele('content')
            .ele('CustomerAgreement', xmlEspiNs)
              .ele('agreementId', {}, this.accountName)
                .up().up().up()
            .ele('published', {}, publishedDate).up()
            .ele('updated', {}, publishedDate).up().up()
            .ele('entry')
            .ele('id', {}, CustomerDataWriter.getId()).up()
            .ele('link', {rel: 'self', href: 'DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111/CustomerAgreement/NB6WRU/Meter/14106263'}).up()
            .ele('link', {rel: 'up', href: 'DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111/CustomerAgreement/NB6WRU/Meter'}).up()
            .ele('link', {rel: 'related', href: 'DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111/CustomerAgreement/NB6WRU/Meter/14106263/EndDevice'}).up()
            .ele('title', {}, 'Meter form information').up()
            .ele('content')
            .ele('Meter', xmlEspiNs)
              .ele('formNumber', {}, this.meterNumber)
                .up().up().up()
            .ele('published', {}, publishedDate).up()
            .ele('updated', {}, publishedDate).up().up()
            .ele('entry')
            .ele('id', {}, CustomerDataWriter.getId()).up()
            .ele('link', {rel: 'self', href: 'DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111'}).up()
            .ele('link', {rel: 'up', href: 'DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount'}).up()
            .ele('title', {}, 'CustomerAgreement information').up()
            .ele('content')
            .ele('CustomerAgreement', xmlEspiNs)
              .ele('agreementId', {}, this.accountName)
                .up().up().up()
            .ele('published', {}, publishedDate).up()
            .ele('updated', {}, publishedDate).up().up()
            .ele('entry')
            .ele('id', {}, CustomerDataWriter.getId()).up()
            .ele('link', {rel: 'self', href: 'DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111/CustomerAgreement/NB6WRU/Meter/14106263/EndDevice/14106263'}).up()
            .ele('link', {rel: 'up', href: 'DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111/CustomerAgreement/NB6WRU/Meter/14106263/EndDevice'}).up()
            .ele('title', {}, 'EndDevice information').up()
            .ele('content')
            .ele('EndDevice', xmlEspiNs)
              .ele('serialNumber', {}, this.electricId)
                .up().up().up()
            .ele('published', {}, publishedDate).up()
            .ele('updated', {}, publishedDate).up().up()

    if (false === format) {
      return greenButtonData.end()
    }

    return greenButtonData.end({pretty: true})
  }
}

module.exports = CustomerDataWriter
