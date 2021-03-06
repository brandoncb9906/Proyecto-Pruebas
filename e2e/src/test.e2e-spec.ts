import { browser, by, element } from 'protractor';
var fs = require('fs');

describe('Login', function () {
    // Before each test case the program start session in the page.
    beforeEach(async function () {
        await browser.waitForAngularEnabled(false);
        await browser.get("https://qa.timtravel.app/#!/login");
        browser.sleep(500);

        // Login with user and password.
        element(by.name('username')).sendKeys('qa2020');
        element(by.name('password')).sendKeys('Qa2020$18');
        element(by.xpath('//*[@id="content"]/div/div[2]/div/div/div/div/ui-view/login-component/div/div[2]/div[1]/form/div[3]/button')).click()
        browser.sleep(2000);
        // Click on purchases
        element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
        browser.sleep(1000);
        // Click on Purchases Report
        element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
        browser.sleep(1000);
    });

    // After each test case the program restar the browser.
    afterEach(function () {
        // browser.restart();
    });

    // ? Here are all test cases for BlackBox Technique

    /********** Test Case # 1 *********** */
    /*
    it('Validar create report caso#1', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('TODAY'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 1
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
            element(by.xpath('//*[@id="ui-select-choices-row-1-0"]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 2
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/div/ul/li/ul/li/div')).click();
            browser.sleep(1000);
            // Selecciona Set Minimum Amount
            //element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click();
            //element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
            browser.sleep(1000);
            // Selecciona Breakdown by product or service item
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('Hotels');
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
    });
    */

    /********** Test Case # 2 *********** */
    /*
    it('Validar create report caso#2', async function () {
        browser.sleep(2000);
        // Entra a Purchases
        element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
        browser.sleep(1000);2
        // Entra a Purchases Report
        element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
        browser.sleep(1000);
        // Envia el dato a Provider
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
        browser.sleep(1000);
        // Selecciona Date
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
        browser.sleep(1000);
        // Fecha NO SIRVE AUN
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
        var fecha = element(by.linkText('TODAY'))
        fecha.className = 'active'
        //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
        // Selecciona Document Type
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
        element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
        browser.sleep(1000);
        // Selecciona Currency
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
        element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
        browser.sleep(1000);
        // Selecciona purchase Condition
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
        element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
        browser.sleep(1000);
        // Selecciona Order By
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
        element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
        browser.sleep(1000);
        // Selecciona Group By # 1
        element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
        element(by.xpath('//*[@id="ui-select-choices-row-1-0"]/div')).click();
        browser.sleep(1000);
        // Selecciona Group By # 2
        element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click();
        element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/div/ul/li/ul/li/div')).click();
        browser.sleep(1000);
        // Selecciona Breakdown by product or service item
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click();
        // Descarga el documento
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
        browser.sleep(10000);
    });

    /********** Test Case # 3 *********** */
    /*
        it('Validar create report caso#3', async function () {
            browser.sleep(3000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1500);2
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('TODAY'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 1
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
            element(by.xpath('//*[@id="ui-select-choices-row-1-0"]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 2
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/div/ul/li/ul/li/div')).click();
            browser.sleep(1000);
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
    */

    /********** Test Case # 4 *********** */
    /*
        it('Validar create report caso#4', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);2
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('YESTERDAY'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            browser.sleep(1000);
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 1
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 2
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/div/ul/li/ul/li/div')).click();
            browser.sleep(1000);
            // Selecciona Set Minimum Amount
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
            browser.sleep(1000);
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
    */

    /********** Test Case # 5 *********** */
    /*
        it('Validar create report caso#5', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);2
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('YESTERDAY'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            browser.sleep(1000);
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 1
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 2
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/div/ul/li/ul/li/div')).click();
            browser.sleep(1000);
            // Selecciona Set Minimum Amount
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
            browser.sleep(1000);
            // Selecciona Breakdown by product or service item
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click();
            browser.sleep(1000);
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
    */

    /********** Test Case # 6 *********** */
    /*
        it('Validar create report caso#6', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);2
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('YESTERDAY'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            browser.sleep(1000);
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 1
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 2
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/div/ul/li/ul/li/div')).click();
            browser.sleep(1000);
            // Selecciona Set Minimum Amount
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
            browser.sleep(1000);
            // Selecciona Breakdown by product or service item
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('55');
            browser.sleep(1000);
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
    
        it('Validar create report caso#7', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('THIS_WEEK'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Document Type
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[3]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[3]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 1
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/div/ul/li/ul/li[3]/div')).click();
            browser.sleep(1000);
             // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
    */

   /*
        it('Validar create report caso#8', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('THIS_WEEK'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Document Type
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[3]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[3]/div')).click();
            browser.sleep(1000);
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
    */
    
    /*
        it('Validar create report caso#9', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('THIS_WEEK'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Document Type
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[3]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[3]/div')).click();
            browser.sleep(1000);
            // Selecciona Breakdown by product or service item
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('55');
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
    */
    
    /*
        it('Validar create report caso#10', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('LAST_WEEK'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Set Minimum Amount
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('Hola');
            browser.sleep(1000);
            // Selecciona Breakdown by product or service item
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('Hotels');
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
    */

    /*
        it('Validar create report caso#11', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('LAST_WEEK'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Set Minimum Amount
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('Hola');
            browser.sleep(1000);
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
    */
    
    /*
        it('Validar create report caso#12', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('LAST_WEEK'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div/span')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Set Minimum Amount
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('Hola');
            browser.sleep(1000);
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
        */

        /*
        it('Validar create report caso#13', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('THIS_MONTH'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 1
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 2
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/div/ul/li/ul/li/div')).click();
            browser.sleep(1000);
            // Selecciona Breakdown by product or service item
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('Hotels');
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
        */

        /*
        it('Validar create report caso#14', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('THIS_MONTH'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 1
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 2
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/div/ul/li/ul/li/div')).click();
            browser.sleep(1000);
            // Selecciona Breakdown by product or service item
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click();
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
        */

        /*
        it('Validar create report caso#15', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('THIS_MONTH'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 1
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 2
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/div/ul/li/ul/li/div')).click();
            browser.sleep(1000);
           // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
        */

        /*
        it('Validar create report caso#16', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('LAST_MONTH'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[3]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 1
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 2
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/div/ul/li/ul/li/div')).click();
            browser.sleep(1000);
            // Selecciona Set Minimum Amount
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
            browser.sleep(1000);
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
        */

        /*
        it('Validar create report caso#17', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('LAST_MONTH'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[3]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 1
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 2
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/div/ul/li/ul/li/div')).click();
            browser.sleep(1000);
            // Selecciona Set Minimum Amount
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
            browser.sleep(1000);
            // Selecciona Breakdown by product or service item
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click();
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
        */

        /*
        it('Validar create report caso#18', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('LAST_MONTH'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[3]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 1
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 2
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/div/ul/li/ul/li/div')).click();
            browser.sleep(1000);
            // Selecciona Set Minimum Amount
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
            browser.sleep(1000);
            // Selecciona Breakdown by product or service item
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('55');
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
        */
        
        /*
        it('Validar create report caso#19', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('CUSTOM_RANGE: May 31, 2020 - June 25, 2020'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[3]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
        */
        
        /*
        it('Validar create report caso#20', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('CUSTOM_RANGE: May 31, 2020 - June 25, 2020'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
        */
       
        /*
        it('Validar create report caso#21', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('CUSTOM_RANGE: May 31, 2020 - June 25, 2020'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[3]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Breakdown by product or service item
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('55');
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
        */

       /*
        it('Validar create report caso#22', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Set Minimum Amount
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('Hola');
            browser.sleep(1000);
            // Selecciona Breakdown by product or service item
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('Hotels');
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
        */

        /*
        it('Validar create report caso#23', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Set Minimum Amount
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('Hola');
            browser.sleep(1000);
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
        */

        /*
        it('Validar create report caso#24', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Envia el dato a Provider
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[1]/div/div/div/input')).sendKeys('Carlos (2648495233)');
            browser.sleep(1000);
            // Selecciona Document Type
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[1]/div/span')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona purchase Condition
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Set Minimum Amount
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('Hola');
            browser.sleep(1000);
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
        */

        /*    
        it('Validar create report caso#25', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('TODAY'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            browser.sleep(2000);
            // Selecciona Document Type
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[3]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 1
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 2
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/div/ul/li/ul/li/div')).click();
            browser.sleep(1000);
            // Selecciona Breakdown by product or service item
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click();
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('Hotels');
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
        */

        /*   
        it('Validar create report caso#26', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('TODAY'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            browser.sleep(2000);
            // Selecciona Document Type
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[3]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 1
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 2
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/div/ul/li/ul/li/div')).click();
            browser.sleep(1000);
            // Selecciona Breakdown by product or service item
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click();
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });
        */
        
        /*
        it('Validar create report caso#27', async function () {
            browser.sleep(2000);
            // Entra a Purchases
            element(by.xpath('//*[@id="nav"]/li[7]/a')).click()
            browser.sleep(1000);
            // Entra a Purchases Report
            element(by.xpath('//*[@id="nav"]/li[7]/ul/li[6]/a')).click()
            browser.sleep(1000);
            // Selecciona Date
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            browser.sleep(1000);
            // Fecha NO SIRVE AUN
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[2]/div/button')).click();
            var fecha = element(by.linkText('TODAY'))
            fecha.className = 'active'
            //element(by.className('shortcuts')).element(by.tagName('ul')). element(by.tagName('li')).get(1).click();
            browser.sleep(2000);
            // Selecciona Document Type
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Currency
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/div/ul/li/ul/li[2]/div')).click();
            browser.sleep(1000);
            // Selecciona Order By
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/div/ul/li/ul/li[3]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 1
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/div/ul/li/ul/li[1]/div')).click();
            browser.sleep(1000);
            // Selecciona Group By # 2
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click();
            element(by.xpath('/html/body/div[2]/div[2]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/div/ul/li/ul/li/div')).click();
            browser.sleep(1000);
            // Descarga el documento
            element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[1]/button')).click();
            browser.sleep(10000);
        });*/
        
    /*
    it('Validar create report caso#28', async function () {
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-0"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-0"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-0"]/div')).click()
        
        //? Order by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[3]/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-0-0"]/div')).click()

        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-1"]/div')).click()
        browser.sleep(800)
        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-2-0"]/div')).click()
        // Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
        browser.sleep(1000)
        
        // Breakdown by product or service item:
        // NA

        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

    /*
    it('Validar create report caso#29', async function () {

        // Choose document type:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-0"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-0"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-0"]/div')).click()
        
        //? Order by:
         // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-1"]/div')).click()
        browser.sleep(800)
        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-2-0"]/div')).click()
        // Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
        browser.sleep(1000)

        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-0"]/div')).click()
        browser.sleep(800)
        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-2-0"]/div')).click()
        // Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
        browser.sleep(1000)

        // Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('55');
        browser.sleep(1000)

        
        // Breakdown by product or service item:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click()

        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

   /*
    it('Validar create report caso#30', async function () {
        // Provider
        // NA

        //TODO: get date
        // Date

        // Choose document type:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-0"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-0"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-0"]/div')).click()

        //? Order by:
        // NA

        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-1"]/div')).click()
        browser.sleep(800)
        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-2-0"]/div')).click()
        // Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
        browser.sleep(1000)

        // Breakdown by product or service item:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click()
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('55');

        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click()
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('55');
        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

    /*
    it('Validar create report caso#31', async function () {
        // Provider
        // NA

        //TODO: get date
        // Date

        // Choose document type:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-2"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-1"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-1"]/div')).click()

        //? Order by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-2"]/div')).click()

        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-1"]/div')).click()
        browser.sleep(800)
        // Group by:

        // Set minimun amount:


        // Breakdown by product or service item:
        // NA

        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

    /*
    it('Validar create report caso#32', async function () {
        // Provider
        // NA

        //TODO: get date
        // Date

        // Choose document type:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-2"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-1"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-1"]/div')).click()

        //? Order by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-0-1"]/div')).click()

        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-2"]/div')).click()
        browser.sleep(800)
        // Group by:



        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

    /*
    it('Validar create report caso#33', async function () {
        // Provider
        // NA

        //TODO: get date
        // Date

        // Choose document type:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-2"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-1"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-1"]/div')).click()

        //? Order by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-0-1"]/div')).click()

        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-2"]/div')).click()
        browser.sleep(800)
        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('55');


        // Breakdown by product or service item:
        // NA

        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

    /*
    it('Validar create report caso#34', async function () {
        // Provider
        // NA
        // Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
        browser.sleep(1000)
        //TODO: get date
        // Date

        // Choose document type:
        // NA

        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-0"]/div')).click()
        // Purchase condition:


        //? Order by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-0-1"]/div')).click()

        // Group by:

        // Group by:

        // Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
        browser.sleep(1000)

        // Breakdown by product or service item:
        // NA

        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

    /*
    it('Validar create report caso#35', async function () {
        // Provider
        // NA

        //TODO: get date
        // Date// Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
        browser.sleep(1000)

        // Choose document type:
        // NA

        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-0"]/div')).click()
        // Purchase condition:


        //? Order by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-0-1"]/div')).click()

        // Group by:

        // Group by:

        // Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
        browser.sleep(1000)

        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('Hola');

        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

    /*
    it('Validar create report caso#36', async function () {
        // Provider
        // NA

        //TODO: get date
        // Date

        // Choose document type:
        // NA

        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-0"]/div')).click()
        // Purchase condition:


        //? Order by:

        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-1"]/div')).click()
        browser.sleep(800)
        // Group by:

        // Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
        browser.sleep(1000)

        // Breakdown by product or service item:
        // NA

        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

    /*
    it('Validar create report caso#37', async function () {
        // Provider
        // NA

        //TODO: get date
        // Date

        // Choose document type:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-1"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-1"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-0"]/div')).click()

        //? Order by:
        // NA

        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-0"]/div')).click()
        browser.sleep(800)
        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-2-0"]/div')).click()


        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('Hola');

        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

    /*
    it('Validar create report caso#38', async function () {
        // Provider
        // NA

        //TODO: get date
        // Date

        // Choose document type:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-1"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-1"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-0"]/div')).click()

        //? Order by:
        // NA

        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-0"]/div')).click()
        browser.sleep(800)
        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-2-0"]/div')).click()


        // Breakdown by product or service item:
        // NA

        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */


    /*
    it('Validar create report caso#39', async function () {
        // Provider
        // NA

        //TODO: get date
        // Date

        // Choose document type:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-1"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-1"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-0"]/div')).click()

        //? Order by:
        // NA

        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-0"]/div')).click()
        browser.sleep(800)
        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-2-0"]/div')).click()


        // Breakdown by product or service item:
        // NA

        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

    /*
    it('Validar create report caso#40', async function () {
        // Provider
        // NA

        //TODO: get date
        // Date

        // Choose document type:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-0"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-0"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-1"]/div')).click()

        //? Order by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-0-1"]/div')).click()


        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-1"]/div')).click()
        browser.sleep(800)
        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-2-0"]/div')).click()
        // Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
        browser.sleep(1000)

        // Breakdown by product or service item:
        // NA

        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

    /*
    it('Validar create report caso#41', async function () {
        // Provider
        // NA

        //TODO: get date
        // Date

        // Choose document type:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-0"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-0"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-1"]/div')).click()

        //? Order by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-0-1"]/div')).click()

        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-1"]/div')).click()
        browser.sleep(800)
        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-2-0"]/div')).click()
        // Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
        browser.sleep(1000)

        // Breakdown by product or service item:
        // NA

        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })*/

    /*
    it('Validar create report caso#42', async function () {
        // Provider
        // NA

        //TODO: get date
        // Date

        // Choose document type:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-0"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-0"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-1"]/div')).click()

        //? Order by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-0-1"]/div')).click()

        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-1"]/div')).click()
        browser.sleep(800)
        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-2-0"]/div')).click()
        // Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
        browser.sleep(1000)

        // Breakdown by product or service item:
        // NA
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('55');
        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })*/

    /*
    it('Validar create report caso#43', async function () {
        // Provider
        // NA

        //TODO: get date
        // Date

        // Choose document type:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-2"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-1"]/div')).click()
        // Purchase condition:


        //? Order by:
        // NA

        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-2"]/div')).click()
        browser.sleep(800)
        // Group by:


        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    }) */
    
    /*
    it('Validar create report caso#44', async function () {


        // Choose document type:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-2"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-1"]/div')).click()
        // Purchase condition:


        //? Order by:
        // NA

        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-2"]/div')).click()
        browser.sleep(800)
        // Group by:

        // Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
        browser.sleep(1000)

        // Breakdown by product or service item:
        // NA

        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

    /*
    it('Validar create report caso#45', async function () {

        // Choose document type:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-2"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-1"]/div')).click()
        // Purchase condition:


        //? Order by:
        // NA

        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-2"]/div')).click()
        browser.sleep(800)


        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

    /*
    it('Validar create report caso#46', async function () {

        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-0"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-0"]/div')).click()

        //? Order by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-1"]/div')).click()

        // Group by:

        browser.sleep(800)
        // Group by:

        // Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
        browser.sleep(1000)

        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('Hola');

        // Download the file.
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

   /*
    it('Validar create report caso#47', async function () {

        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-0"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-0"]/div')).click()

        //? Order by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-1"]/div')).click()


        // Set minimun amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[3]/div/input')).sendKeys('5000');
        browser.sleep(1000)

        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

    /*
    it('Validar create report caso#48', async function () {

        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-0"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-0"]/div')).click()

        //? Order by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-1"]/div')).click()
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()
        browser.sleep(1000)
    })
    */

    /*
    it('Validar create report caso#49', async function () {

        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[1]/div/div[3]/div/div/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-3-1"]/div')).click()
        // Choose currency:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[1]/div/div/div/div/div/a/span[2]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-5-1"]/div')).click()
        // Purchase condition:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[2]/div/div[2]/div/div/div/div/div[1]/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-4-1"]/div')).click()

        //? Order by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-0-1"]/div')).click()


        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[1]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-1-0"]/div')).click()
        browser.sleep(800)
        // Group by:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[2]/div/div/a/span[1]')).click()
        element(by.xpath('//*[@id="ui-select-choices-row-2-0"]/div')).click()

        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/label[2]/div')).click()
        // Add an amount:
        element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[3]/div/div[4]/div/div/input')).sendKeys('Hola');

        // Download the file.
        expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/purchase-report-ctrl/purchase-report/form/div/div[4]/div/div[2]/button')).click()).not.toThrow()
        browser.sleep(1000)
    })*/
    
});

