var View = Backbone.View.extend({
  tagName:'li',
  events: {
    'click .icon_fav': 'fav'
  },
  template: _.template($('#model-list').html()),
  initialize: function(){
    this.listenTo(this.model,'change',this.render);
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  fav: function(){
    this.model.save({fav:!this.model.get('fav')});
  }
})
