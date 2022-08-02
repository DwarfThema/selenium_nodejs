const selenium = require("selenium-webdriver");

const driver = new selenium.Builder()
  .forBrowser(selenium.Browser.CHROME)
  .build();

async function mySelenium() {
  try {
    await driver.get("https://polyhaven.com/models");

    driver
      .executeScript(
        `window.scrollTo({top: document.body.scrollHeight, behavior:"smooth"})`
      )
      .then(
        setTimeout(async () => {
          await driver
            .findElements(
              selenium.By.xpath(`//a[@class="GridItem_gridItem__0cuEz"]`)
            )
            .then(async function (productAnchor) {
              for (var i = 1; i < productAnchor.length; i++) {
                console.log(`숫자 : `, i);
                productAnchor[i].getAttribute(`href`).then(function (href) {
                  console.log(`자료 주소 : `, href);
                });

                const div = await productAnchor[i].findElement(
                  selenium.By.className("GridItem_thumb__M8icc")
                );

                const img = await div.findElement(selenium.By.css("img"));

                const src = await img.getAttribute(`src`);
                console.log(`이미지 주소 : `, src);

                const alt = await img.getAttribute(`alt`);
                console.log(`이름 : `, alt);
              }
            });
        }, 5000)
      );
  } catch (error) {
    console.log(error);
  } finally {
    /* 
    setTimeout(() => {
      driver.quit();
    }, 5); */
  }
}

mySelenium();
