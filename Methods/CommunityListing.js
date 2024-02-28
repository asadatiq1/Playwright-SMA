const { expect } = require("@playwright/test");

exports.communityListing = class communityListing {
  constructor(page) {
    this.page = page;
  }

  async verifyCommunintyScreen() {
    const header = this.page.locator(
      '//*[@id="root"]/div/div[2]/div[2]/div/div[2]/div/div/div[2]/div[1]/h3'
    );
    const actualText = await header.innerText();
    expect(actualText).toEqual(expect.stringContaining("Communities"));
  }
};
