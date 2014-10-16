var Router = Backbone.Router.extend({
  routes: {
    "": "recommendModel",
    "myModel": "myModel",
    "allModel": "allModel",
    "recommendModel": "recommendModel",
    "allModel/:classify": "specilifyModel"
  },
  myModel: function(){
    models.url="data/list2.json";
    models.fetch({reset:true});
  },
  allModel: function(){
    models.url="data/list3.json";
    models.fetch({reset:true});
  },
  recommendModel: function(){
    models.url="data/list.php";
    models.fetch({reset:true});
  },
  specilifyModel: function(classify){

  },
  fourofour: function(error){

  }
})
var route = new Router();
Backbone.history.start();
