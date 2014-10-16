var Views = Backbone.View.extend({
  el:'.model',
  template: _.template($('#status').html()),
  initialize: function(){
    // 初始化界面
    this.listenTo(models, 'reset', this.renderAll);
    // 监听模型中所有的改变
    this.listenTo(models, 'all', this.render);
    // 从服务器上获取数据
    models.fetch({reset:true});
  },
  render: function(){
    var favCount = models.favCount().length;
    // 为什么下面会输出三次呢（哪几个地方实现了渲染操作呢）
    // console.log(favCount);
    this.$('.personal_info_detail').html(this.template({
      favCount: favCount
    }))

  },
  renderAll: function(){
    // console.log(models);
    // 遍历集合
    this.$('#model_list').html("");
    models.each(function(model){
      var view = new View({model: model});
      this.$('#model_list').append(view.render().el);
    })
  },

})
var appView = new Views;
