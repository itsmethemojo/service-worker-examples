# some service-worker examples

## 1) minimal-network-traffic

the idea is that the browser only calls new data from the network when absolutely necessary
a custom header is used to store an "invalidation" timestamp that can be checked against the cached timestamp

even better you can easily change the cachetime serverside
even worse you can never activate caching on a once not activated resource under the same url
