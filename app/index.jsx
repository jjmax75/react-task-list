import React from 'react';
import ReactDOM from 'react-dom';

var styles = {
  tasksStyle: {
    margin: '50px auto',
    width: '240px',
    background: 'white',
    border: '1px solid #cdd3d7',
    borderRadius: '4px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
  },

  tasksHeader: {
    position: 'relative',
    lineHeight: '24px',
    padding: '7px 15px',
    color: '#5d6b6c',
    textShadow: '0 1px rgba(255, 255, 255, 0.7)',
    background: '#f0f1f2',
    borderBottom: '1px solid #d1d1d1',
    borderRadius: '3px 3px 0 0',
    backgroundImage: 'linear-gradient(to bottom, #f5f7fd, #e6eaec)',
    boxShadow: 'inset 0 1px rgba(255, 255, 255, 0.5), 0 1px rgba(0, 0, 0, 0.03)'
  },

  tasksTitle: {
    lineHeight: 'inherit',
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'inherit'
  },

  tasksListItem: {
    display: 'block',
    lineHeight: '24px',
    padding: '12px 15px',
    cursor: 'pointer',
    userSelect: 'none'
  },

  tasksListCb: {
      display: 'none'
  },

  tasksListMark: {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
    marginRight: '12px',
    width: '20px',
    height: '20px',
    border: '2px solid #c4cbd2',
    borderRadius: '12px'
  },

  tasksListMarkBefore: {
    content: '',
    display: 'none',
    position: 'absolute',
    top: '50%',
    left: '50%',
    margin: '-5px 0 0 -6px',
    height: '4px',
    width: '8px',
    border: 'solid #39ca74',
    borderWidth: '0 0 4px 4px',
    transform: 'rotate(-45deg)'
  },

  tasksListDesc: {
    fontWeight: 'bold',
    color: '#8a9a9b'
  }

};

var TaskRow = React.createClass({
  render: function() {
    return (
      <label style={styles.tasksListItem}>
        <input type="checkbox" name={this.props.key} style={styles.tasksListCb} checked />
        <span style={styles.tasksListMarkBefore}></span>
        <span style={styles.tasksListMark}></span>
        <span style={styles.tasksListDesc}>{this.props.task.title}</span>
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
        <fieldset>
          {rows}
        </fieldset>
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
      <div>
        <fieldset>
          {rows}
        </fieldset>
      </div>
    );
  }
});

var TaskList = React.createClass({
  render: function() {
    return (
      <section style={styles.tasksStyle}>
        <header style={styles.tasksHeader}>
          <h1 style={styles.tasksTitle}>ToDos</h1>
        </header>
        <LiveTasks tasks={this.props.tasks} /> {/* TODO - Divs with just task rows conditional */}
        <AddTask />
        <CompletedTasks tasks={this.props.tasks} /> {/* TODO - Divs with just task rows conditional */}
      </section>
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
