import { browser, by, element } from 'protractor';

describe('Login', function () {
    beforeEach(async function () {
        await browser.waitForAngularEnabled(false);
        await browser.get("https://qa.timtravel.app/#!/login");
        browser.sleep(500);
        // Realiza el login con usuario y contrasenna
        element(by.name('username')).sendKeys('qa2020');
        element(by.name('password')).sendKeys('Qa2020$18');
        element(by.xpath('//*[@id="content"]/div/div[2]/div/div/div/div/ui-view/login-component/div/div[2]/div[1]/form/div[3]/button')).click()
        browser.sleep(1000);
    });

    afterEach(function () {
        browser.restart();
    });
/*
    it('Caso de prueba #6', async function () {
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

    it('Caso de prueba #7', async function () {
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

    it('Caso de prueba #8', async function () {
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

    it('Caso de prueba #9', async function () {
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
    
    it('Caso de prueba #10', async function () {
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

    it('Caso de prueba #11', async function () {
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

    it('Caso de prueba #12', async function () {
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

    it('Caso de prueba #13', async function () {
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

    it('Caso de prueba #14', async function () {
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

    it('Caso de prueba #15', async function () {
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

    it('Caso de prueba #16', async function () {
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

    it('Caso de prueba #17', async function () {
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
    
    it('Caso de prueba #18', async function () {
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

    it('Caso de prueba #19', async function () {
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

    it('Caso de prueba #20', async function () {
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

    it('Caso de prueba #21', async function () {
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

    it('Caso de prueba #22', async function () {
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

    it('Caso de prueba #23', async function () {
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

    it('Caso de prueba #24', async function () {
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

    it('Caso de prueba #25', async function () {
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

    it('Caso de prueba #26', async function () {
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

    it('Caso de prueba #27', async function () {
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

    it('Caso de prueba #28', async function () {
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

    it('Caso de prueba #29', async function () {
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

    it('Caso de prueba #30', async function () {
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

    it('Caso de prueba #31', async function () {
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

    it('Caso de prueba #32', async function () {
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

});

