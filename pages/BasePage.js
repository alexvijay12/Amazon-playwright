export class BasePage {
  constructor(page) {
    this.bacevalue=basevalue;
  }

  async enterText(locator, value) {
    await this.basevalue.locator(element).waitfor({ state: 'visible' });
    await this.basevalue.locator(element).fill(value);
    
  }
  async clickElement(element) {
    await this.basevalue.locator(element).waitfor({ state: 'visible' });
    await this.basevalue.locator(element).click();
  }

}