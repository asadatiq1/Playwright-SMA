import { test, beforeEach } from "@playwright/test";
import { communityListing } from "../Methods/CommunityListing";

let comulis;

beforeEach(async ({ page }) => {
  await page.goto("https://sma-fe.aa-qa.global-drum.com/login");
  await page.waitForTimeout(10000);
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Login With Google" }).click();
  const page1 = await page1Promise;
  await page.waitForTimeout(7000);
  await page1.getByLabel("Email or phone").fill("Enter your email address");
  await page1.getByLabel("Email or phone").press("Enter");
  await page.waitForTimeout(7000);
  await page1.getByLabel("Enter your password").fill("Enter your password");
  await page1.getByLabel("Enter your password").press("Enter");
  await page.waitForTimeout(15000);
  comulis = new communityListing(page);
});

test("Verify user is successfully login", async ({ page }) => {
  await comulis.verifyCommunintyScreen();
});
