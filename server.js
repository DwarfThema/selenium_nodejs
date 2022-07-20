const selenium = require("selenium-webdriver");

const driver = new selenium.Builder()
  .forBrowser(selenium.Browser.CHROME)
  .build();

(async function mySelenium() {
  try {
    await driver.get("https://polyhaven.com/models");
    const region = await driver
      .findElement(selenium.By.css("div[class='GridItem_text__HzSp8']"))
      .getText();
    console.log(region);
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      driver.quit();
    }, 3);
  }
})();
