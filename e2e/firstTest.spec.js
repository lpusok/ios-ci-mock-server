describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should connect to localhost server', async () => {
    await expect(element(by.text('PASS'))).toBeVisible();
  });

});