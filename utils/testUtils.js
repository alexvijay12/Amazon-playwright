/**
 * Closes the Flipkart login popup if it appears.
 * Flipkart shows this popup almost every time the homepage loads,
 * so nearly every test needs this before doing anything else.
 */
async function closeLoginPopupIfVisible(page) {
  const closeBtn = page.locator('button._2doB4z');
  try {
    if (await closeBtn.isVisible({ timeout: 4000 })) {
      await closeBtn.click();
    }
  } catch (error) {
    // Popup did not appear — nothing to close, safe to continue
  }
}

module.exports = { closeLoginPopupIfVisible };
