import React, { Component } from 'react';
import { connect } from 'react-redux';
import todosOperations from '../../redux/todos/todos-operations';
import styles from './TodoEditor.module.css';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.message !== '') {
      this.props.onSubmit(this.state.message);
      this.props.onSave();
      this.setState({ message: '' });
      return;
    }

    alert('Заполни текст заметки.');
  };

  render() {
    return (
      <form className={styles.editor} onSubmit={this.handleSubmit}>
        <textarea
          className={styles.textarea}
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className={styles.button}>
          Сохранить
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(todosOperations.addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
