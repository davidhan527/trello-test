//////////// TASKS

var Task = Backbone.Model.extend({
  urlRoot: "/tasks"
});

var Tasks = Backbone.Collection.extend({
  model: Task,
  url: "/tasks"
});

var TaskView = Backbone.View.extend({
  className: 'task',
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
    var taskEl = taskView.render().$el;

    taskEl.draggable({snap: ".column-task", snapMode: "inner"});
    $(".tasks").append(taskEl);
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

//////////////////  COLUMNS

var Column = Backbone.Model.extend({
  urlRoot: "/columns"
});

var Columns = Backbone.Collection.extend({
  url: "/columns",
  model: Column
});

var ColumnView = Backbone.View.extend({
  className: 'column-task',
  template: _.template($("#column-template").html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var ColumnsView = Backbone.View.extend({
  el: $("#column-form"),

  events: {
    "click button" : "createColumn"
  },

  initialize: function() {
    this.collection.fetch();
  },

  render: function() {
    this.collection.each(this.addColumn, this);
    return this;
  },

  addColumn: function(column) {
    var columnView = new ColumnView({model: column});
    var columnEl = columnView.render().$el;
    columnEl.droppable({
      accept: ".task",
      drop: function (event, ui) {
        debugger;
        console.log("event", event);
        console.log("ui", ui);
      }
      });
    $(".tasks").append(columnEl);

  },

  createColumn: function() {
    var columnInput = this.$(".column-input").val();
    var column = new Column({name: columnInput});
    column.save();
    this.addColumn(column);
  }

});

var columns = new Columns();
var columnsView = new ColumnsView({collection: columns});
