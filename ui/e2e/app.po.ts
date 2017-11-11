import { browser, by, element } from 'protractor'

export class PetstorePage {
  navigateTo() {
    return browser.get('/')
  }

  getHeading() {
    return element(by.css('app-root .title')).getText()
  }
}
