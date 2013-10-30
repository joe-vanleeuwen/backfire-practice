Model = Backbone.Model.extend({})

Collection = Backbone.Firebase.Collection.extend({
	model: Model,

	initialize: function(model, options) {
		this.options = options;
	}
})

View = Backbone.View.extend({

	className: 'view',

	initialize: function() {
		$('.hero-unit').append(this.$el)

		var that = this;
		this.listenTo(this.model, 'change:cssPosition', function() {
			that.render();
		})

		this.render();
	},

	render: function() {
		this.$el.css(this.model.get('cssPosition'));
	}
})

Router = Backbone.Router.extend({

	routes: {
		'game/:id': 'collection',
	},

	collection: function(id) {
		console.log('makin collection')
		var firebase = 'https://testprojectfortiy.firebaseio.com/game/' + id;
		this.collection = new Collection([], {firebase: firebase})
	}
})

router = new Router();

Backbone.history.start()


var myRef = new Firebase('https://testprojectfortiy.firebaseio.com/')
var childRef = myRef.child('game')

var ref;
childRef.once('child_added', function(dataSnapshot) {
	console.log(dataSnapshot)
	var name = dataSnapshot.bc.path.m[1]
	console.log(name)
	router.navigate("game/" + name, {trigger: true});
})


childRef.push({game: Math.floor(Math.random()* 1000000)})




