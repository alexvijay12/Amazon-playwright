const { Given, When, Then } = require('@cucumber/cucumber');

const AmazonPage = require('../pages/AmazonPage');


Given('I open Amazon', async function () {

    this.amazonPage = new AmazonPage(this.page);

    await this.amazonPage.openAmazon();

});


When('I search for {string}', async function (productName) {

    await this.amazonPage.searchProduct(productName);

});


When('I select the first product', async function () {

    await this.amazonPage.selectFirstProduct();

});


When('I add the product to cart', async function () {

    await this.amazonPage.addToCart();

});


When('I go to the cart', async function () {

    await this.amazonPage.goToCart();

});


Then('I should see the cart page', async function () {

    await this.amazonPage.verifyCartPage();

});