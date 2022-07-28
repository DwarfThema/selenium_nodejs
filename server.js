const selenium = require("selenium-webdriver");

const driver = new selenium.Builder()
  .forBrowser(selenium.Browser.CHROME)
  .build();

async function mySelenium() {
  try {
    await driver.get("https://polyhaven.com/models");

    const region = await driver.findElement(
      selenium.By.xpath(`//div[@class="GridItem_thumb__M8icc"]/img`)
    );

    const tag = await region.getTagName();
    console.log(tag);

    const src = await region.getAttribute("src");
    console.log(src);

    const alt = await region.getAttribute("alt");
    console.log(alt);
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      driver.quit();
    }, 5);
  }
}

mySelenium();
