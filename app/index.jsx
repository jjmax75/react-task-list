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

  taskListDescOpen: {
    fontWeight: 'bold',
    color: '#34bf6e'
  },

  taskListDescDone: {
    fontWeight: 'bold',
    color: '#8a9a9b',
    textDecoration: 'line-through'
  }

};

var TaskRow = React.createClass({
  getInitialState: function() {
    var initial = this.props.task.done ? true : false;
    return {open: initial};
  },
  handleChange: function(e) {
    this.setState({open: !this.state.open});
  },
  render: function() {
    var style = this.state.open ? styles.taskListDescDone : styles.taskListDescOpen;
    return (
      <label style={styles.tasksListItem}>
        <input type="checkbox" name={this.props.key} checked={this.state.open} onChange={this.handleChange} />
        <span style={style}>{this.props.task.title}</span>
      </label>
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

var Tasks = React.createClass({
  render: function() {

    var rows = [];
    this.props.tasks.forEach(function(task) {
      var row = <TaskRow task={task} key={task.title} />;
      if (task.done) {
        rows.push(row);
      } else {
        rows.unshift(row);
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
        <AddTask />
        <Tasks tasks={this.props.tasks} />
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
