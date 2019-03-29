const cacheFiles =   [
         './',
         './index.html',
         './restaurant.html',
         './css/styles.css',
         './data/restaurants.json',
         './js/dbhelper.js',
         './js/main.js',
         './js/restaurant_info.js',
         './js/serviceWorker.js',
         './img/1.jpg',
         './img/2.jpg',
         './img/3.jpg',
         './img/4.jpg',
         './img/5.jpg',
         './img/6.jpg',
         './img/7.jpg',
         './img/8.jpg',
         './img/9.jpg',
         './img/10.jpg'
];

let staticCacheName = "restaurant_v4";

self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open(staticCacheName).then(function(cache) {
        return cache.addAll(cacheFiles);
      })
    );
});

self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys()
		.then(function(cacheNames) {
			  return Promise.all(
          cacheNames.map(function(cache) {
            if (cache!==staticCacheName) {
              console.log("deleted");
              return caches.delete(cache);
            }
          })
        )
		})
	)
})

self.addEventListener('fetch',function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      //if its already in caches
      console.log("feng");
      if (response) {
        return response;
      }
      else {
        return fetch(e.request)
        // .then(function(response) {
        //   const responseClone = response.clone();
        //   caches.open('v1').then(function(cache) {
        //     cache.put(e.request, responseClone);
        //   })
        //   return response;
        // })
      }
    })
  )
});
