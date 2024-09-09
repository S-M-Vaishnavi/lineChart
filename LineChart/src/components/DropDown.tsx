import React, { useState } from 'react';

interface DropdownProps {
    onParameterChange: (parameter: string, isChecked: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onParameterChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const parameters = ['temperature', 'humidity', 'oxygen','pressure'];

    const handleCheckboxChange = (parameter: string, isChecked: boolean) => {
        onParameterChange(parameter, isChecked);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Select Parameters
            </button>
            {isOpen && (
                <div className="absolute mt-2 bg-white border rounded shadow-lg z-10">
                    {parameters.map((param) => (
                        <label key={param} className="block p-2 cursor-pointer">
                            <input
                                type="checkbox"
                                onChange={(e) => handleCheckboxChange(param, e.target.checked)}
                                className="mr-2"
                            />
                            {param.charAt(0).toUpperCase() + param.slice(1)}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;

