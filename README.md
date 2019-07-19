# Green Button Data Converter

[![Build Status](https://travis-ci.org/peter279k/green-button-converter.svg?branch=master)](https://travis-ci.org/peter279k/green-button-converter)

## Usage
To generate a Green button data format, you can use following code snippets:

```JS
var DataWriter = require('green-button-data-converter').DataWriter
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
let dataWriter = new DataWriter(options)

console.log(dataWriter.output())
```

It will have following result:

```XML
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <entry>
        <id>urn:uuid:5F418672-E558-4DC0-95A1-666D066D99AE</id>
        <title/>
        <content>
            <UsagePoint xmlns="http://naesb.org/espi">
                <ServiceCategory>
                    <kind>0</kind>
                </ServiceCategory>
            </UsagePoint>
        </content>
        <content>
            <ReadingType xmlns="http://naesb.org/espi">
                <accumulationBehaviour>4</accumulationBehaviour>
                <commodity>1</commodity>
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
        <content>
            <IntervalBLock xmlns="http://naesb.org/espi">
                <interval>
                    <duration>86400</duration>
                    <start>1563440400</start>
                </interval>
                <IntervalReading>
                    <timePeriod>
                        <duration>3600</duration>
                        <start>2019-07-18 17:00:00</start>
                    </timePeriod>
                    <value>912</value>
                </IntervalReading>
            </IntervalBLock>
        </content>
        <published>2019-07-19T13:25:14+08:00</published>
        <updated>2019-07-19T13:25:14+08:00</updated>
    </entry>
</feed>
```
