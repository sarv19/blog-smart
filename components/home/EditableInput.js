import { Check, Pencil, X } from "lucide-react";
import React, { useState } from "react";

const EditableInput = ({ initialValue = "", onSave }) => {
    const [value, setValue] = useState(initialValue);
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(initialValue);

    const handleEdit = () => {
        setTempValue(value);
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setTempValue(value);
    };

    const handleSave = () => {
        setValue(tempValue);
        setIsEditing(false);
        if (onSave) {
            onSave(tempValue);
        }
    };

    return (
        <div className="flex items-center space-x-2">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleSave}
                        className="flex items-center px-2 py-1 text-white bg-green-500 rounded hover:bg-green-600"
                    >
                        <Check />
                    </button>
                    <button
                        onClick={handleCancel}
                        className="flex items-center px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                    >
                        <X />
                    </button>
                </>
            ) : (
                <>
                    <span className="px-2 py-1 border rounded">{value}</span>
                    <button
                        onClick={handleEdit}
                        className="flex items-center px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                        <Pencil />
                    </button>
                </>
            )}
        </div>
    );
};

export default EditableInput;
