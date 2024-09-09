// src/App.tsx
// import React, { useState } from 'react';
// import LineChart from './components/LineChart';
// import Dropdown from './components/DropDown';
// const App: React.FC = () => {
//     const [selectedParameters, setSelectedParameters] = useState<string[]>([]);

//     const handleParameterChange = (parameter: string, isChecked: boolean) => {
//         setSelectedParameters((prev) =>
//             isChecked ? [...prev, parameter] : prev.filter((p) => p !== parameter)
//         );
//     };

//     return (
//         <div className="p-8">
//             <Dropdown onParameterChange={handleParameterChange} />
//             <div className="mt-8">
//                 <LineChart selectedParameters={selectedParameters} />
//             </div>
//         </div>
//     );
// };

// export default App;

import React, { useState } from 'react';
import LineChart from './components/LineChart';
import Dropdown from './components/DropDown'
const App: React.FC = () => {
    const [selectedParameters, setSelectedParameters] = useState<string[]>([]);

    const handleParameterChange = (parameter: string, isChecked: boolean) => {
        setSelectedParameters((prev) =>
            isChecked ? [...prev, parameter] : prev.filter((p) => p !== parameter)
        );
    };

    return (
        <div className="p-8">
            <Dropdown onParameterChange={handleParameterChange} />
            <div className="mt-8">
                <LineChart selectedParameters={selectedParameters} />
            </div>
        </div>
    );
};

export default App;




