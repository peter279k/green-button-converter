# Green Button Data Converter

[![Build Status](https://travis-ci.org/peter279k/green-button-converter.svg?branch=master)](https://travis-ci.org/peter279k/green-button-converter)

## Usage
To generate a Green button user electric data format, you can use following code snippets:

```JS
var DataWriter = require('green-button-data-converter').DataWriter
var options = {
  'interval_duration': 86400,
  'time_period_duration': 3600,
  'start_date': '2019-07-18 17:00:00',
  'interval_readings': [
    {date: '1563440400', mwh: 912},
  ],
  'power_of_ten_multiplier': 0,
  'uom': 72,
}

var dataWriter = new DataWriter(options)
console.log(dataWriter.output(true))
```

It will have following result:

```XML
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <id>urn:uuid:23AC4BEC-B3CD-41DC-B39B-2F8BCB4768EC</id>
  <title>GreenButton User XXXX Feed</title>
  <updated>2012-10-24T00:00:00Z</updated>

  <entry>
    <id>urn:uuid:CB6E2EA6-745B-431D-86F2-5A5E616C9661</id>
    <link rel="self" href="RetailCustomer/9b6c7063/UsagePoint/01"/>
    <link rel="up" href="RetailCustomer/9b6c7063/UsagePoint"/>
    <link rel="related" href="RetailCustomer/9b6c7063/UsagePoint/01/MeterReading"/>
    <link rel="related" href="LocalTimeParameters/01"/>
    <title>Single family</title>
    <content>
      <UsagePoint xmlns="http://naesb.org/espi">
        <ServiceCategory>
          <kind>0</kind>
        </ServiceCategory>
      </UsagePoint>
    </content>
    <published>2019-07-22T16:38:13Z</published>
    <updated>2019-07-22T16:38:13Z</updated>
  </entry>

  <entry>
    <id>urn:uuid:FE317A0A-F7F5-4307-B158-28A34276E862</id>
    <link rel="self" href="LocalTimeParameters/01"/>
    <link rel="up" href="LocalTimeParameters"/>
    <title>DST For Taiwan</title>
    <content>
      <LocalTimeParameters xmlns="http://naesb.org/espi">
        <dstEndRule>B40E2000</dstEndRule>
        <dstOffset>3600</dstOffset>
        <dstStartRule>360E2000</dstStartRule>
        <tzOffset>-18000</tzOffset>
      </LocalTimeParameters>
    </content>
    <published>2019-07-22T16:38:13Z</published>
    <updated>2019-07-22T16:38:13Z</updated>
  </entry>

  <entry>
    <id>urn:uuid:9BCDAB06-6690-46A3-9253-A451AF4077D8</id>
    <link rel="self" href="RetailCustomer/9b6c7063/UsagePoint/01/MeterReading/01"/>
    <link rel="up" href="RetailCustomer/9b6c7063/UsagePoint/01/MeterReading"/>
    <link rel="related" href="RetailCustomer/9b6c7063/UsagePoint/01/MeterReading/01/IntervalBlock"/>
    <link rel="related" href="ReadingType/07"/>
    <title>Hourly Electricity Consumption</title>
    <content>
      <MeterReading xmlns="http://naesb.org/espi"/>
    </content>
    <published>2012-10-24T00:00:00Z</published>
    <updated>2012-10-24T00:00:00Z</updated>
  </entry>

  <entry>
    <id>urn:uuid:BEB04FF1-6294-4916-95AC-5597070C95D4</id>
    <link rel="self" href="ReadingType/07"/>
    <link rel="up" href="ReadingType"/>
    <title>Energy Delivered (Wh)</title>
    <content>
      <ReadingType xmlns="http://naesb.org/espi">
        <accumulationBehaviour>4</accumulationBehaviour>
        <commodity>1</commodity>
        <currency>840</currency>
        <dataQualifier>12</dataQualifier>
        <flowDirection>1</flowDirection>
        <intervalLength>3600</intervalLength>
        <kind>12</kind>
        <phase>769</phase>
        <powerOfTenMultiplier>0</powerOfTenMultiplier>
        <timeAttribute>0</timeAttribute>
        <uom>72</uom>
      </ReadingType>
    </content>
    <published>2012-10-24T00:00:00Z</published>
    <updated>2012-10-24T00:00:00Z</updated>
  </entry>

  <entry>
    <id>urn:uuid:FE317A0A-F7F5-4307-B158-28A34276E862</id>
    <link rel="self" href="RetailCustomer/9b6c7063/UsagePoint/01/MeterReading/01/IntervalBlock/0173"/>
    <link rel="up" href="RetailCustomer/9b6c7063/UsagePoint/01/MeterReading/01/IntervalBlock"/>
    <title/>
    <content>
      <IntervalBlock xmlns="http://naesb.org/espi">
        <interval>
          <duration>86400</duration>
          <start>1563440400</start>
        </interval>
        <IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563440400</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
      </IntervalBlock>
    </content>
    <published>2019-07-22T16:38:13Z</published>
    <updated>2019-07-22T16:38:13Z</updated>
  </entry>
</feed>
```

To generate Green Button customer Data, you can use following code snippets:

```JS
var CustomerDataWriter = require('green-button-data-converter').CustomerDataWriter
var options = {
  'account_id': 'Peter',
  'meter_form_number': 'TD17234599',
  'end_device_serial_number': '99123456',
}

var dataWriter = new CustomerDataWriter(options)
console.log(dataWriter.output(true))
```

It will have following result:

```XML
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <id>489C14BF-4426-11E6-A453-5463F700E189</id>
  <link rel="self" href="DataCustodian/espi/1_1/resource/RetailCustomer/1161"/>
  <title>Green Button Customer Feed</title>
  <updated>2016-07-07T02:36:29</updated>
  <entry>
    <id>489D013A-4426-11E6-A454-5463F7007B38</id>
    <link rel="self" href="DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111"/>
    <link rel="up" href="DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount"/>
    <link rel="related" href="DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111/CustomerAgreement"/>
    <title>CustomerAccount information</title>
    <content>
      <CustomerAccount xmlns="http://naesb.org/espi/customer">
        <accountId>Peter</accountId>
      </CustomerAccount>
    </content>
    <updated>2016-07-07T02:36:29</updated>
    <published>2016-07-07T02:36:29</published>
  </entry>
  <entry>
    <id>489F8482-4426-11E6-A455-5463F70029FB</id>
    <link rel="self" href="DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111/CustomerAgreement/NB6WRU"/>
    <link rel="up" href="DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111/CustomerAgreement"/>
    <title>CustomerAgreement information</title>
    <content>
      <CustomerAgreement xmlns="http://naesb.org/espi/customer">
        <agreementId>Peter</agreementId>
      </CustomerAgreement>
    </content>
    <updated>2016-07-07T02:36:29</updated>
    <published>2016-07-07T02:36:29</published>
  </entry>
  <entry>
    <id>48A16DBA-4426-11E6-A45A-5463F700E024</id>
    <link rel="self" href="DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111/CustomerAgreement/NB6WRU/Meter/14106263"/>
    <link rel="up" href="DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111/CustomerAgreement/NB6WRU/Meter"/>
    <link rel="related" href="DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111/CustomerAgreement/NB6WRU/Meter/14106263/EndDevice"/>
    <title>Meter form information</title>
    <content>
      <Meter xmlns="http://naesb.org/espi/customer">
        <formNumber>TD17234599</formNumber>
      </Meter>
    </content>
    <updated>2016-07-07T02:36:30</updated>
    <published>2016-07-07T02:36:30</published>
  </entry>
  <entry>
    <id>CB6E2EA6-745B-431D-86F2-5A5E616C9661</id>
    <link rel="self" href="DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111/CustomerAgreement/NB6WRU/Meter/14106263/EndDevice/14106263"/>
    <link rel="up" href="DataCustodian/espi/1_1/resource/RetailCustomer/VJEWP31BE/Customer/1/CustomerAccount/1111111/CustomerAgreement/NB6WRU/Meter/EndDevice"/>
    <title>EndDevice information</title>
    <content>
      <EndDevice xmlns="http://naesb.org/espi/customer">
        <serialNumber>99123456</serialNumber>
      </EndDevice>
    </content>
    <updated>2016-07-07T02:36:30</updated>
    <published>2016-07-07T02:36:30</published>
  </entry>
</feed>
```

# References
- http://green-button.github.io/build/
- https://www.programmableweb.com/newshow-to-leverage-green-button-initiative-data-energy-consumption-apps/how-to/2015/08/17?page=2
