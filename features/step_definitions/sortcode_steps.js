
const assert = require('assert');
const { After, Given, When,Then } = require('cucumber');
const {Builder, By, Key, until} = require('selenium-webdriver');
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const webdriver = require('selenium-webdriver');
        let driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();

Given('I input {string}', {timeout: 2 * 5000}, async function  (sortcode) {
            driver.get('https://www.sortcodes.co.uk/');
            driver.findElement({name: "sortcode"}).sendKeys(sortcode);

 });
        
 When('I enter {string}', {timeout: 5 * 5000}, function (accountnumber) {
    driver.findElement({name: "account"}).sendKeys(accountnumber);
    driver.findElement({className: "trd-btn trd-btn-alt"}).click();
});

Then('response_status returns {string}', async function (response_status) {

    await driver.sleep(1000);
 //   let output = driver.findElement({xpath: "//*[@id='form']/div"}).getText();
//    assert.equal(output, response_status,output +" is matching " + response_status);
 //   console.log(output);
    });

After(function() {
    driver.quit();
});
