const selenium = require("selenium-webdriver");

const driver = new selenium.Builder()
  .forBrowser(selenium.Browser.CHROME)
  .build();

async function mySelenium() {
  try {
    await driver.get("https://polyhaven.com/models");

    const region = driver.findElement(
      selenium.By.xpath(`//div[@class="GridItem_text__HzSp8"]/h3`)
    );

    const tag = await region.getTagName();
    console.log(tag);

    const text = await region.getText();
    console.log(text);
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      driver.quit();
    }, 5);
  }
}

mySelenium();
