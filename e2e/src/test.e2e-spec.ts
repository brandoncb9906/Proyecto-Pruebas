import { browser, by, element } from 'protractor';

describe('Login', function () {
    beforeEach(async function () {
        await browser.waitForAngularEnabled(false);
        await browser.get("https://www.bgeneral.fi.cr/calculadora-hipoteca/");
    });

    afterEach(function () {
        browser.restart();
    });

    
    // Comprobar el valor de "cuota mensual", se envian los valores 170000 y 25 para valor de propiedad y años de financiamiento respectivamente, 
    // valor de cuota mensual debe ser USD 1,005.00
    it('Valor cuota mensual correcto', async function () {
        browser.sleep(500);
        element(by.name('valor')).sendKeys('170000');
        element(by.name('anio')).sendKeys('25');
        element(by.className("fusion-button")).click().then(function () {
            browser.sleep(600);
            expect(element(by.xpath('//*[@id="post-15015"]/div/div/div[1]/div[1]/div/div[2]/div[5]/span[2]')).getText()).toEqual("USD 1,005.00");
        });
    });

    // Comprobar el valor de "abono minimo", se envian los valores 200000 y 25 para valor de propiedad y años de financiamiento respectivamente, 
    // valor de abono mínimo debe ser 40000
    it('Valor abono mímino correcto', async function () {
        browser.sleep(500);
        element(by.name('valor')).sendKeys('200000');
        element(by.name('anio')).sendKeys('25');
        element(by.className("fusion-button")).click().then(function () {
            browser.sleep(600);
            console.log(element)
            expect(element(by.xpath('//*[@id="post-15015"]/div/div/div[1]/div[1]/div/div[1]/form/div[3]/div/input')).getAttribute('value')
            ).toEqual("40000");
        });
    });

    // Comprobar que al ingresar un valor de la propiedad menor a 170000 no se ejecuta ningun proceso
    it('Monto de valor de la propiedad menor a 170000', async function () {
        browser.sleep(500);
        element(by.name('valor')).sendKeys('169999');
        element(by.name('anio')).sendKeys('25');
        element(by.className("fusion-button")).click().then(function () {
            browser.sleep(600);
            expect(element(by.xpath('/html/body/div[1]/main/div/section/div/div/div/div/div[1]/form/div[1]/div/input')).getText()).toBeLessThan(170000);
        });
    });

    // Comprobar el valor de "Total a financear", se envian los valores 185000 y 25 para valor de propiedad y años de financiamiento respectivamente, 
    // Total a financear debe ser USD 148,000.00
    it('Total a financear correcto', async function () {
        browser.sleep(500);
        element(by.name('valor')).sendKeys('185000');
        element(by.name('anio')).sendKeys('25');
        element(by.className("fusion-button")).click().then(function () {
            browser.sleep(600);
            expect(element(by.xpath('//*[@id="post-15015"]/div/div/div[1]/div[1]/div/div[2]/div[1]/span[2]')).getText()).toEqual("USD 148,000.00");
        });
    });

});