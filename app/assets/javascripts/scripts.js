var Task = Backbone.Model.extend({
  urlRoot: "/tasks"
});

var Tasks = Backbone.Collection.extend({
  model: Task,
  url: "/tasks"
});

var TaskView = Backbone.View.extend({
  template: _.template($("#task-template").html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

var TasksView = Backbone.View.extend({
  el: $("#task-form"),

  events: {
    "click button": "createTask"
  },

  initialize: function() {
    this.collection.fetch();
  },

  render: function() {
    this.collection.each(this.addTask, this);
  },

  addTask: function(task) {
    var taskView = new TaskView({model: task});
    $(".tasks").append(taskView.render().el);
  },

  createTask: function() {
    var taskInput = this.$(".task-input").val();
    var task = new Task({name: taskInput});
    task.save();
    this.addTask(task);
  }
});

var tasks = new Tasks();
var tasksView = new TasksView({collection: tasks});
