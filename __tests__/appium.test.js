import wd from 'wd';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;

const config = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: '/Users/damjan/Desktop/challenge/challenge/android/app/build/outputs/apk/debug/app-debug.apk',
};

const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(5000);
});

test('Collect reward', async () => {
    expect(await driver.hasElementByAccessibilityId('collectable_rewards')).toBe(
        true,
        );
    expect(await driver.hasElementByAccessibilityId('collected_rewards')).toBe(
        true,
        );
    const element = await driver.elementByAccessibilityId('collect-button-bd6629f9-92fc-46ab-9f84-f21d784c81b7');
    await element.click();
    expect(await driver.hasElementByAccessibilityId('collected-reward-bd6629f9-92fc-46ab-9f84-f21d784c81b7')).toBe(
        true,
    );
});
