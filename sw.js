/* م234: ملف تشغيل تطبيق «Masters Auto Service» على الموبايل والتابلت.
   مابيخزّنش أي نسخة من السيستم — كل فتحة بتجيب آخر نسخة من النت علطول (التحديثات زي ما هي).
   شغلته الوحيدة: لو النت فاصل وإنت بتفتح التطبيق، تطلع رسالة واضحة بدل صفحة خطأ المتصفح. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
const OFFLINE_HTML = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><title>Masters Auto Service</title>
<style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#000;color:#f4f4f2;font-family:Tahoma,Arial,sans-serif;text-align:center;padding:24px;box-sizing:border-box}
.c{max-width:340px}h1{font-size:20px;margin:14px 0 8px}p{color:#9a9a93;line-height:1.9;font-size:14px}
button{margin-top:14px;background:#F2D410;color:#111;border:0;border-radius:12px;padding:12px 26px;font-size:15px;font-weight:700}</style></head>
<body><div class="c"><div style="font-size:52px">📡</div><h1>مفيش اتصال بالإنترنت</h1>
<p>السيستم محتاج نت عشان يجيب آخر البيانات. اتأكد من الواي فاي أو الداتا وجرب تاني.</p>
<button onclick="location.reload()">🔄 جرب تاني</button></div></body></html>`;
self.addEventListener('fetch', (e) => {
  if (e.request.mode !== 'navigate') return;   // باقي الطلبات (القاعدة والصور) بتمشي عادي من غير ما نلمسها
  e.respondWith(fetch(e.request).catch(() => new Response(OFFLINE_HTML, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
