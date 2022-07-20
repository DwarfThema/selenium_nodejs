const selenium = require("selenium-webdriver");

const driver = new selenium.Builder()
  .forBrowser(selenium.Browser.CHROME)
  .build();

(async function mySelenium() {
  try {
    await driver.get("https://polyhaven.com/models");
    const region = await driver
      .findElement(
        selenium.By.xpath(`//div[@class='GridItem_text__HzSp8']/h3/text()`)
      )
      .getText();
    console.log(region.h3.text);
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      driver.quit();
    }, 3);
  }
})();
