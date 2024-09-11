// import React, { useState } from 'react';
// import LineChart from './components/LineChart';
// import Dropdown from './components/DropDown';

// type Parameter = 'Oxygen'|'CO2'|'TVOC'|'Humditiy';
// const App: React.FC = () => {
//     const [selectedParameters, setSelectedParameters] = useState<string[]>([]);
//     const [parameterStatus,setParameterStatus] = useState<{[key in Parameter]:'critical'|'warning'|''}>({
//         Oxygen:'',
//         CO2:'',
//         TVOC:'',
//         Humditiy:'',
//     })

//     const handleParameterChange = (parameter: string, isChecked: boolean) => {
//         setSelectedParameters((prev) =>
//             isChecked ? [...prev, parameter] : prev.filter((p) => p !== parameter)
//         );
//     };

//     const handleStatusChange = (parameter:Parameter,status:'critical'|'warning'|'')=>{
//         setParameterStatus((prev)=>({
//             ...prev,
//             [parameter]:status,
//         }))
//     }

//     return (
//         <div className="p-8">
//             <Dropdown onParameterChange={handleParameterChange} onStatusChange={handleStatusChange}/>
//             <div className="mt-8">
//                 <LineChart selectedParameters={selectedParameters} parameterStatus={parameterStatus}/>
//             </div>
//         </div>
//     );
// };

// export default App;



// import React, { useState } from 'react';
// import LineChart from './components/LineChart';
// import Dropdown from './components/DropDown';

// type Parameter = 'Oxygen' | 'CO2' | 'TVOC' | 'Humidity';

// const App: React.FC = () => {
//     const [selectedParameters, setSelectedParameters] = useState<Parameter[]>([]);
//     const [parameterStatus, setParameterStatus] = useState<{ [key in Parameter]: 'critical' | 'warning' | '' }>({
//         Oxygen: '',
//         CO2: '',
//         TVOC: '',
//         Humidity: '',
//     });

//     const handleParameterChange = (parameter: Parameter, isChecked: boolean) => {
//         setSelectedParameters((prev) =>
//             isChecked ? [...prev, parameter] : prev.filter((p) => p !== parameter)
//         );
//     };

//     const handleStatusChange = (parameter: Parameter, status: 'critical' | 'warning' | '') => {
//         setParameterStatus((prev) => ({
//             ...prev,
//             [parameter]: status,
//         }));
//     };

//     return (
//         <div className="p-8">
//             <Dropdown onParameterChange={handleParameterChange} onStatusChange={handleStatusChange} />
//             <div className="mt-8">
//                 <LineChart selectedParameters={selectedParameters} parameterStatus={parameterStatus} />
//             </div>
//         </div>
//     );
// };

// export default App;


import React, { useState } from 'react';
import LineChart from './components/LineChart';
import Dropdown from './components/DropDown';

// Define the Parameter type
type Parameter = 'Oxygen' | 'CO2' | 'TVOC' | 'Humidity';

const App: React.FC = () => {
    const [selectedParameters, setSelectedParameters] = useState<Parameter[]>([]);
    const [parameterStatus, setParameterStatus] = useState<{ [key in Parameter]: 'critical' | 'warning' | '' }>({
        Oxygen: '',
        CO2: '',
        TVOC: '',
        Humidity: '',
    });

    const handleParameterChange = (parameter: Parameter, isChecked: boolean) => {
        setSelectedParameters(prev =>
            isChecked ? [...prev, parameter] : prev.filter(p => p !== parameter)
        );
    };

    const handleStatusChange = (parameter: Parameter, status: 'critical' | 'warning' | '') => {
        setParameterStatus(prev => ({
            ...prev,
            [parameter]: status,
        }));
    };

    return (
        <div className="p-8">
            <Dropdown onParameterChange={handleParameterChange} onStatusChange={handleStatusChange} />
            <div className="mt-8">
                <LineChart selectedParameters={selectedParameters} parameterStatus={parameterStatus} />
            </div>
        </div>
    );
};

export default App;
