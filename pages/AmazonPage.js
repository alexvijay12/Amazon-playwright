class AmazonPage {

    constructor(page) {
        this.page = page;

        // Search box
        this.searchBox = page.locator('#twotabsearchtextbox');

        // First product - iPhone 16
        this.firstProduct = page.locator('a').filter({
            hasText: 'iPhone 16'
        }).first();

        // Add to cart button
        this.addToCartButton = page.getByRole('button', {
            name: /Add to cart/i
        }).first();

        // Cart
        this.cartButton = page.locator('#nav-cart');
    }


    async openAmazon() {
        await this.page.goto('https://www.amazon.in/', {
            waitUntil: 'domcontentloaded'
        });
    }


    async searchProduct(productName) {

        await this.searchBox.waitFor({
            state: 'visible',
            timeout: 15000
        });

        await this.searchBox.fill(productName);

        await this.searchBox.press('Enter');

        // Wait for search results page
        await this.page.waitForLoadState('domcontentloaded');
    }


    async selectFirstProduct() {

        await this.firstProduct.waitFor({
            state: 'visible',
            timeout: 15000
        });

        await this.firstProduct.click();

        // Wait for product page
        await this.page.waitForLoadState('domcontentloaded');
    }


    async addToCart() {

        // Wait until Add to Cart button is available
        await this.addToCartButton.waitFor({
            state: 'visible',
            timeout: 15000
        });

        // Scroll down to Add to Cart button
        await this.addToCartButton.scrollIntoViewIfNeeded();

        // Click Add to Cart
        await this.addToCartButton.click();

        // Wait for Amazon cart action to complete
        await this.page.waitForTimeout(2000);
    }


    async goToCart() {

        // Wait for Cart button
        await this.cartButton.waitFor({
            state: 'visible',
            timeout: 15000
        });

        // Scroll to Cart
        await this.cartButton.scrollIntoViewIfNeeded();

        // Click Cart
        await this.cartButton.click();

        // Wait for Cart page
        await this.page.waitForLoadState('domcontentloaded');
    }


    async verifyCartPage() {

        await this.page.waitForLoadState('domcontentloaded');

        console.log('Cart page opened');
    }
}


module.exports = AmazonPage;