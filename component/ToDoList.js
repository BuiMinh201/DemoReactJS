import React from 'react';
import ToDoListItem from './ToDoItem';

function ToDoList({ toDoItems, deleteItem, saveItem, toggleComplete }) {
    const renderItems = () => {
        return toDoItems.map((item, index) => (
            <ToDoListItem
                key={index}
                name={item.name}
                completed={item.completed}
                deleteItem={deleteItem}
                saveItem={saveItem}
                toggleComplete={toggleComplete}
            />
        ));
    };

    return <div className="items-list">{renderItems()}</div>;
}

export default ToDoList;
