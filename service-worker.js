const CACHE = 'shield-v4';

self.addEventListener('install', e => {
  // 立即接管，不缓存任何内容
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // 清除所有旧缓存
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// 全部走网络，缓存只做兜底
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
