const { By, selenium } = require("selenium-webdriver");

const driver = new selenium.Builder()
  .forBrowser(selenium.Browser.CHROME)
  .build();

(async function mySelenium() {
  try {
    await driver.get("https://polyhaven.com/models");
    const region = await driver.findElement(
      By.xpath(`//div[@class="GridItem_text__HzSp8"]/h3`)
    );
    console.log(region);
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      driver.quit();
    }, 5);
  }
})();

/* const selenium = require("selenium-webdriver");

const driver = new selenium.Builder()
  .forBrowser(selenium.Browser.CHROME)
  .build();

(async function mySelenium() {
  try {
    await driver.get("https://www.naver.com/");
    const region = await driver.findElement(
      web.By.xpath(`//span[@class="_1syGnXOL _3VkgqBXB"]/span`).getAttribute(
        "innerHTML"
      )
    );
    console.log(region);
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      driver.quit();
    }, 5);
  }
})(); */
