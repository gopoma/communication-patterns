const doSOAPRequest = require("./soap");


doSOAPRequest(
    "https://www.w3schools.com/xml/tempconvert.asmx",
    `<CelsiusToFahrenheit xmlns="https://www.w3schools.com/xml/">
        <Celsius>20</Celsius>
    </CelsiusToFahrenheit>`
).then(console.log)
.catch(console.log);
