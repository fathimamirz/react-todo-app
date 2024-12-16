import React from 'react';
import enhance from '../hoc/wrapInputBox';

function InputBox(props) {
    const { value, handleChange, handleKeyUp, handlePriorityChange, priority, handleDueDateChange, dueDate, handleAddTask } = props;

    // Handle priority change
    const handlePrioritySelect = (event) => {
        handlePriorityChange(event.target.value);
    };

    // Handle due date change
    const handleDueDateSelect = (event) => {
        handleDueDateChange(event.target.value);
    };

    // Handle button click to add task
    const handleAddButtonClick = () => {
        handleAddTask(); // Call parent function to add task
    };
    

    return (
        <div>
            <input 
                autoFocus
                type="text"
                className="form-control add-todo"
                value={value}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                placeholder="Add New Task"
            />
            <select
                className="form-control priority-select"
                value={priority}
                onChange={handlePrioritySelect}
            >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <input
                type="date"
                className="form-control due-date-select"
                value={dueDate}
                onChange={handleDueDateSelect}
                placeholder="Due Date"
            />
            <button 
                className="btn btn-primary add-task-btn"
                onClick={handleAddButtonClick}
            >
                Add
            </button>
        </div>
    );
}

export default enhance(InputBox);
