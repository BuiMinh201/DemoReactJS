import React, { useState } from 'react';

function ToDoListItem({ name, completed, deleteItem, saveItem, toggleComplete }) {
    const [editing, setEditing] = useState(false);
    const [newItemName, setNewItemName] = useState(name);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleCancelClick = () => {
        setEditing(false);
        setNewItemName(name);
    };

    const handleSaveClick = (e) => {
        e.preventDefault();

        const newItem = newItemName.trim();

        if (!newItem) {
            alert('Please enter a task name.');
            return;
        }

        saveItem(name, newItem);
        setEditing(false);
    };

    const handleInputChange = (e) => {
        setNewItemName(e.target.value);
    };

    const handleDeleteClick = () => {
        deleteItem(name);
    };

    const handleToggleComplete = () => {
        toggleComplete(name);
    };

    const renderName = () => {
        const itemStyle = {
            textDecoration: completed ? 'line-through' : 'none',
            cursor: 'pointer',
        };

        if (editing) {
            return (
                <form onSubmit={handleSaveClick}>
                    <input type="text" value={newItemName} onChange={handleInputChange} />
                </form>
            );
        }

        return (
            <span style={itemStyle} onClick={handleToggleComplete}>
                {name}
            </span>

        );
    };

    const renderButtons = () => {
        if (editing) {
            return (
                <span>
                    <button onClick={handleSaveClick} className='btn btn-primary'>Lưu</button>
                    <button onClick={handleCancelClick} className="btn btn-secondary">Thoát</button>
                </span>
            );
        }

        return (
            <div>
                <span>
                    <button onClick={handleEditClick} className="btn btn-info">Sửa</button>
                    <button onClick={handleDeleteClick} className="btn btn-danger">Xóa</button>
                </span>
            </div>
        );
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div>{renderName()}</div>
                    <div>{renderButtons()}</div>
                </div>
            </div>
        </div>
    );
}

export default ToDoListItem;
