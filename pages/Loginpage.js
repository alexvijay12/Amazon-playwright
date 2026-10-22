import { BasePage } from './BasePage';
export class LoginPage extends BasePage {


   constructor(page) {
       super(page);
       this.page = page;
       this.usernameInput = page.locator('#user-name');
       this.passwordInput = page.locator('#password');
       this.loginButton = page.locator('#login-button');
   }
   async login(username, password) {
         await this.usernameInput.fill(username);
         await this.passwordInput.fill(password);
         await this.loginButton.click();
}
constructor(page, loginvalue) {
super(page);
this.page = page;
this.loginpagevalue = loginvalue;
this.usernameInput = this.page.locator('#username');

}
async login(username, password) {
  // await this.usernameInput.fill(username);
  await this.usernameInput.fill(this.loginpagevalue);
    
}
}