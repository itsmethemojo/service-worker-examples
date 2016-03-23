self.addEventListener('fetch', function (event) {
    var url = event.request.url;
    var timestamp = Math.floor(Date.now() / 1000);

    event.respondWith(
            caches.match(event.request)
            .then(function (response) {
                if (response) {
                    var expiration = response.headers.get("service-worker-cache-expiration");
                    if (
                            !expiration
                            || expiration > timestamp
                            ) {
                        console.log(timestamp + " cache: " + expiration + " " + url);
                        return response;
                    }
                }

                var fetchRequest = event.request.clone();
                return fetch(fetchRequest).then(
                        function (response) {
                            console.log(timestamp + " load: " + expiration + " " + url);
                            // Check if we received a valid response
                            if (!response || response.status !== 200 || response.type !== 'basic') {
                                return response;
                            }

                            var responseToCache = response.clone();

                            caches.open("testCache1")
                                    .then(function (cache) {
                                        cache.put(event.request, responseToCache);
                                    });
                            return response;
                        }
                );
            })
            );
});