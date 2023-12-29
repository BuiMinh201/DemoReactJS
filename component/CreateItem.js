import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CreateItem({ createItem }) {
    const newItemInput = useRef(null);

    const handleCreate = (e) => {
        e.preventDefault();

        const newItem = newItemInput.current.value.trim();

        if (!newItem) {
            toast.warn('Chưa nhập thông tin.');
            return;
        }

        createItem(newItem);
        newItemInput.current.value = '';
    };

    return (
        <div className="create-new">
            <form onSubmit={handleCreate}>
                <input type="text" placeholder="Nhập " ref={newItemInput} />
                <button type="submit" className="btn btn-success">Thêm</button>
            </form>
            <ToastContainer position="top-right" />
        </div>
    );
}
    export default CreateItem;