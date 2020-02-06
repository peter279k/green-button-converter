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
  <title>GreenButton User Feed</title>
  <updated>2019-07-22T16:38:13Z</updated>

  <entry>
    <id>urn:uuid:CB6E2EA6-745B-431D-86F2-5A5E616C9661</id>
    <link href="DataCustodian/espi/1_1/resource/Subscription/5/UsagePoint" rel="up"/>
    <link href="DataCustodian/espi/1_1/resource/Subscription/5/UsagePoint/1" rel="self"/>
    <link href="UsagePoint/01/MeterReading" rel="related"/>
    <link href="DataCustodian/espi/1_1/resource/Subscription/5/UsagePoint/1/ElectricPowerUsageSummary" rel="related"/>
    <link href="LocalTimeParameters/01" rel="related"/>
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
    <link rel="self" href="UsagePoint/01/MeterReading/01"/>
    <link rel="up" href="UsagePoint/01/MeterReading"/>
    <link rel="related" href="UsagePoint/01/MeterReading/01/IntervalBlock"/>
    <link rel="related" href="ReadingType/07"/>
    <title>Hourly Electricity Consumption</title>
    <content>
      <MeterReading xmlns="http://naesb.org/espi"/>
    </content>
    <published>2019-07-22T16:38:13Z</published>
    <updated>2019-07-22T16:38:13Z</updated>
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
    <published>2019-07-22T16:38:13Z</published>
    <updated>2019-07-22T16:38:13Z</updated>
  </entry>

  <entry>
    <id>urn:uuid:FE317A0A-F7F5-4307-B158-28A34276E862</id>
    <link rel="self" href="UsagePoint/01/MeterReading/01/IntervalBlock/024"/>
    <link rel="up" href="UsagePoint/01/MeterReading/01/IntervalBlock"/>
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
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563444000</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563447600</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563451200</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563454800</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563458400</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563462000</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563465600</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563469200</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563472800</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563476400</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563480000</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563483600</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563487200</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563490800</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563494400</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563498000</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563501600</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563505200</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563508800</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563512400</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563516000</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563519600</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
		<IntervalReading>
          <timePeriod>
            <duration>3600</duration>
            <start>1563523200</start>
          </timePeriod>
          <value>912</value>
        </IntervalReading>
      </IntervalBlock>
    </content>
    <published>2019-07-22T16:38:13Z</published>
    <updated>2019-07-22T16:38:13Z</updated>
  </entry>
 <entry>
      <id>urn:uuid:FE317A0A-F7F5-4307-B158-28A34276E862</id>
	  <link href="DataCustodian/espi/1_1/resource/Subscription/5/UsagePoint/1/ElectricPowerUsageSummary" rel="up"/>
      <link href="DataCustodian/espi/1_1/resource/Subscription/5/UsagePoint/1/ElectricPowerUsageSummary/1" rel="self"/>
      <link rel="related" href="UsagePoint/01"/>
      <title>Usage Summary</title>
      <content>
            <UsageSummary xmlns="http://naesb.org/espi">
                  <billingPeriod>
                        <duration>2419200</duration>
                        <start>1391230800</start>
                  </billingPeriod>
                  <billLastPeriod>6752000</billLastPeriod>
                  <billToDate>4807000</billToDate>
                  <costAdditionalLastPeriod>0</costAdditionalLastPeriod>
                  <currency>840</currency>
                  <overallConsumptionLastPeriod>
                        <powerOfTenMultiplier>0</powerOfTenMultiplier>
                        <uom>72</uom>
                        <value>625716</value>
                  </overallConsumptionLastPeriod>
                  <currentBillingPeriodOverAllConsumption>
                        <powerOfTenMultiplier>0</powerOfTenMultiplier>
                        <timeStamp>1395374400</timeStamp>
                        <uom>72</uom>
                        <value>447993</value>
                  </currentBillingPeriodOverAllConsumption>
                  <qualityOfReading>14</qualityOfReading>
                  <statusTimeStamp>1395374400</statusTimeStamp>
            </UsageSummary>
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
