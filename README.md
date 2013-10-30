backfire-practice
=================
Just attempting a simple dynamic changes to the collection firebase url using an id returned from a one-time dataRef response. Goal was to create collections with unique firebase url's and it seems to work. Just practice.

### options.firebase
	
	if (options && options.firebase) {
      this.firebase = options.firebase;
    }
    
In backfire.js, a collection instance can be passed an options object with the property firebase. If BackFire finds `options.firebase`, the collection's `firebase` property will be set to `options.firebase`.
