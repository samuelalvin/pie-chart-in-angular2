import { browser, element, by } from 'protractor';

describe('Pie Chart E2E Tests', function () {

  let expectedMsg = 'Pie Chart with dynamic data';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
