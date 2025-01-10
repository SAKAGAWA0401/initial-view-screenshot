const puppeteer = require('puppeteer');

const siteName = process.argv[2]; // 2番目の引数を siteName として取得

if (!siteName) {
  console.error('エラー: サイト名を引数として指定してください。');
  process.exit(1); // 引数がない場合はエラー終了
}

(async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage();

    // sloperiver.comサイトでCookieバナーを非表示にするのに利用
    // await page.addStyleTag({ content: `.cky-consent-container { display: none !important; }` });
    
    // URLを指定（https:// + ドメイン）
    const url = `https://${siteName}`;
    await page.goto(url, { waitUntil: 'networkidle0' });
  
    // ビューポートのサイズを指定
    await page.setViewport({ width: 1280, height: 720 });

    // スクリーンショットを撮影
    const filePath = `screenshot-${siteName}-1280x720.png`;
    // const filePath = `output/screenshot-${siteName}-1280x720.png`;
    await page.screenshot({ path: filePath });

    console.log(`スクリーンショットが保存されました: ${filePath}`);
    await browser.close();
})();
