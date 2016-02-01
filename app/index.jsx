import React from 'react';
import ReactDOM from 'react-dom';

var TaskRow = React.createClass({
  render: function() {
    return (
      <label class="tasks-list-item">
        <input type="checkbox" name={this.props.key} class="task-list-cb" />
        <span class="tasks-list-mark"></span>
        <span class="tasks-list-desc">{this.props.task.title}</span>
      </label>
    );
  }
});

var CompletedTasks = React.createClass({
  render: function() {
    var rows = [];
    this.props.tasks.forEach(function(task) {
      if (task.done) {
        rows.push(<TaskRow task={task} key={task.title} />);
      }
    });
    return (
      <div>
        {rows}
      </div>
    );
  }
});

var AddTask = React.createClass({
  render: function() {
    return (
      <input type="text" placeholder="+ add a task..."></input>
    );
  }
});

var LiveTasks = React.createClass({
  render: function() {
    var rows = [];
    this.props.tasks.forEach(function(task) {
      if (!task.done) {
        rows.push(<TaskRow task={task} key={task.title} />);
      }
    });
    return (
      <fieldset class="live-tasks tasks-list">
        {rows}
      </fieldset>
    );
  }
});

var TaskList = React.createClass({
  render: function() {
    return (
      <div>
        <LiveTasks tasks={this.props.tasks} /> {/* TODO - Divs with just task rows conditional */}
        <AddTask />
        <CompletedTasks tasks={this.props.tasks} /> {/* TODO - Divs with just task rows conditional */}
      </div>
    );
  }
});

var TASKS = [
  {title: 'washing', done: false},
  {title: 'walk dog', done: true},
  {title: 'shopping', done: false},
  {title: 'eating', done: false},
  {title: 'brush teeth', done: true},
  {title: 'shave', done: true}
];

ReactDOM.render(
  <TaskList tasks={TASKS} />,
  document.getElementById('app')
);
