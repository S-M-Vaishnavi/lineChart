// import React, { useState } from 'react';

// interface DropdownProps {
//     onParameterChange: (parameter: string, isChecked: boolean) => void;
//     onStatusChange: (parameter:string,status:'critical'|'warning'|'') =>void;
// }

// const Dropdown: React.FC<DropdownProps> = ({ onParameterChange }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const parameters = ['Oxygen', 'CO2', 'TVOC','Humidity'];

//     const handleCheckboxChange = (parameter: string, isChecked: boolean) => {
//         onParameterChange(parameter, isChecked);
//     };

//     return (
//         <div className="relative">
//             <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-500 text-white px-4 py-2 rounded">
//                 Select Parameters
//             </button>
//             {isOpen && (
//                 <div className="absolute mt-2 bg-white border rounded shadow-lg z-10">
//                     {parameters.map((param) => (
//                         <label key={param} className="block p-2 cursor-pointer">
//                             <input type="checkbox" onChange={(e) => handleCheckboxChange(param, e.target.checked)} className="mr-2"/>
//                             {param.charAt(0).toUpperCase() + param.slice(1)}
//                         </label>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dropdown;




// import React, { useState } from 'react';

// interface DropdownProps {
//     onParameterChange: (parameter: string, isChecked: boolean) => void;
//     onStatusChange: (parameter: string, status: 'critical' | 'warning' | '') => void;
// }

// const Dropdown: React.FC<DropdownProps> = ({ onParameterChange, onStatusChange }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const parameters = ['Oxygen', 'CO2', 'TVOC', 'Humidity'];

//     const handleCheckboxChange = (parameter: string, isChecked: boolean) => {
//         onParameterChange(parameter, isChecked);
//     };

//     const handleRadioChange = (parameter: string, status: 'critical' | 'warning') => {
//         onStatusChange(parameter, status);
//     };

//     return (
//         <div className="relative">
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//                 Select Parameters
//             </button>
//             {isOpen && (
//                 <div className="absolute mt-2 bg-white border rounded shadow-lg z-10">
//                     {parameters.map((param) => (
//                         <div key={param} className="p-2 cursor-pointer">
//                             <label className="block">
//                                 <input
//                                     type="checkbox"
//                                     onChange={(e) => handleCheckboxChange(param, e.target.checked)}
//                                     className="mr-2"
//                                 />
//                                 {param}
//                             </label>
//                             <div className="ml-4">
//                                 <label className="mr-4">
//                                     <input
//                                         type="radio"
//                                         name={`${param}-status`}
//                                         onChange={() => handleRadioChange(param, 'critical')}
//                                     />
//                                     Critical
//                                 </label>
//                                 <label>
//                                     <input
//                                         type="radio"
//                                         name={`${param}-status`}
//                                         onChange={() => handleRadioChange(param, 'warning')}
//                                     />
//                                     Warning
//                                 </label>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dropdown;



// import React, { useState } from 'react';

// type Parameter = 'Oxygen' | 'CO2' | 'TVOC' | 'Humidity';

// interface DropdownProps {
//     onParameterChange: (parameter: Parameter, isChecked: boolean) => void;
//     onStatusChange: (parameter: Parameter, status: 'critical' | 'warning' | '') => void;
// }

// const Dropdown: React.FC<DropdownProps> = ({ onParameterChange, onStatusChange }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const parameters: Parameter[] = ['Oxygen', 'CO2', 'TVOC', 'Humidity'];

//     const handleCheckboxChange = (parameter: Parameter, isChecked: boolean) => {
//         onParameterChange(parameter, isChecked);
//     };

//     const handleStatusChange = (parameter: Parameter, status: 'critical' | 'warning' | '') => {
//         onStatusChange(parameter, status);
//     };

//     return (
//         <div className="relative">
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//                 Select Parameters
//             </button>
//             {isOpen && (
//                 <div className="absolute mt-2 bg-white border rounded shadow-lg z-10">
//                     {parameters.map((param) => (
//                         <div key={param} className="block p-2">
//                             <label className="block cursor-pointer">
//                                 <input
//                                     type="checkbox"
//                                     onChange={(e) => handleCheckboxChange(param, e.target.checked)}
//                                     className="mr-2"
//                                 />
//                                 {param}
//                             </label>
//                             <div className="ml-4">
//                                 <label className="mr-4">
//                                     <input
//                                         type="radio"
//                                         name={`status-${param}`}
//                                         onChange={() => handleStatusChange(param, 'critical')}
//                                     />
//                                     Critical
//                                 </label>
//                                 <label>
//                                     <input
//                                         type="radio"
//                                         name={`status-${param}`}
//                                         onChange={() => handleStatusChange(param, 'warning')}
//                                     />
//                                     Warning
//                                 </label>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dropdown;





// import React, { useState } from 'react';

// interface DropdownProps {
//     onParameterChange: (parameter: string, isChecked: boolean) => void;
//     onStatusChange: (parameter: string, status: 'critical' | 'warning' | '') => void;
// }

// const Dropdown: React.FC<DropdownProps> = ({ onParameterChange, onStatusChange }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const parameters = ['Oxygen', 'CO2', 'TVOC', 'Humidity'];

//     const handleCheckboxChange = (parameter: string, isChecked: boolean) => {
//         onParameterChange(parameter, isChecked);
//     };

//     const handleStatusChange = (parameter: string, status: 'critical' | 'warning' | '') => {
//         onStatusChange(parameter, status);
//     };

//     return (
//         <div className="relative">
//             <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-500 text-white px-4 py-2 rounded">
//                 Select Parameters
//             </button>
//             {isOpen && (
//                 <div className="absolute mt-2 bg-white border rounded shadow-lg z-10">
//                     {parameters.map((param) => (
//                         <div key={param} className="p-2 border-b">
//                             <label className="block">
//                                 <input type="checkbox" onChange={(e) => handleCheckboxChange(param, e.target.checked)} className="mr-2"/>
//                                 {param.charAt(0).toUpperCase() + param.slice(1)}
//                             </label>
//                             <div className="ml-4">
//                                 <label className="block">
//                                     <input
//                                         type="checkbox"
//                                         onChange={(e) => handleStatusChange(param, e.target.checked ? 'critical' : '')}
//                                         className="mr-2"
//                                     />
//                                     Critical
//                                 </label>
//                                 <label className="block">
//                                     <input
//                                         type="checkbox"
//                                         onChange={(e) => handleStatusChange(param, e.target.checked ? 'warning' : '')}
//                                         className="mr-2"
//                                     />
//                                     Warning
//                                 </label>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dropdown;


//-----------------------------------------------------------------------------------------------------------------
// import React, { useState } from 'react';

// type Parameter = 'Oxygen' | 'CO2' | 'TVOC' | 'Humidity';

// interface DropdownProps {
//     onParameterChange: (parameter: Parameter, isChecked: boolean) => void;
//     onStatusChange: (parameter: Parameter, status: 'critical' | 'warning' | '') => void;
// }

// const Dropdown: React.FC<DropdownProps> = ({ onParameterChange, onStatusChange }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const parameters: Parameter[] = ['Oxygen', 'CO2', 'TVOC', 'Humidity'];
//     const [statuses, setStatuses] = useState<{ [key in Parameter]: 'critical' | 'warning' | '' }>({
//         Oxygen: '',
//         CO2: '',
//         TVOC: '',
//         Humidity: '',
//     });

//     const handleCheckboxChange = (parameter: Parameter, isChecked: boolean) => {
//         onParameterChange(parameter, isChecked);
//     };

//     const handleStatusChange = (parameter: Parameter, status: 'critical' | 'warning' | '') => {
//         onStatusChange(parameter, status);
//         setStatuses(prev => ({
//             ...prev,
//             [parameter]: status,
//         }));
//     };

//     return (
//         <div className="relative">
//             <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-500 text-white px-4 py-2 rounded">
//                 Select Parameters
//             </button>
//             {isOpen && (
//                 <div className="absolute mt-2 bg-white border rounded shadow-lg z-10">
//                     {parameters.map(param => (
//                         <div key={param} className="block p-2 cursor-pointer">
//                             <label className="block">
//                                 <input
//                                     type="checkbox"
//                                     onChange={(e) => handleCheckboxChange(param, e.target.checked)}
//                                     className="mr-2"
//                                 />
//                                 {param}
//                             </label>
//                             <div className="mt-2 flex space-x-4">
//                                 <input type="checkbox"   onClick={() => handleStatusChange(param, 'critical')}/>Critical
//                                 <input type="checkbox" onClick={() => handleStatusChange(param, 'warning')}/>   Warning
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dropdown;


//-------------------------------------------------------------------------------------------------
// import React, { useState } from 'react';

// type Parameter = 'Oxygen' | 'CO2' | 'TVOC' | 'Humidity';

// interface DropdownProps {
//     onParameterChange: (parameter: Parameter, isChecked: boolean) => void;
//     onStatusChange: (parameter: Parameter, status: 'critical' | 'warning' | '') => void;
// }

// const Dropdown: React.FC<DropdownProps> = ({ onParameterChange, onStatusChange }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const parameters: Parameter[] = ['Oxygen', 'CO2', 'TVOC', 'Humidity'];
//     const [statuses, setStatuses] = useState<{ [key in Parameter]: 'critical' | 'warning' | '' }>({
//         Oxygen: '',
//         CO2: '',
//         TVOC: '',
//         Humidity: '',
//     });
//     const [selectedParameter, setSelectedParameter] = useState<Parameter | null>(null);

//     const handleCheckboxChange = (parameter: Parameter, isChecked: boolean) => {
//         setSelectedParameter(isChecked ? parameter : null); // Only one parameter active at a time
//         onParameterChange(parameter, isChecked);
//     };

//     const handleStatusChange = (parameter: Parameter, status: 'critical' | 'warning' | '') => {
//         onStatusChange(parameter, status);
//         setStatuses(prev => ({
//             ...prev,
//             [parameter]: status,
//         }));
//     };

//     return (
//         <div className="relative">
//             <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-500 text-white px-4 py-2 rounded">
//                 Select Parameters
//             </button>
//             {isOpen && (
//                 <div className="absolute mt-2 bg-white border rounded shadow-lg z-10">
//                     {parameters.map(param => (
//                         <div key={param} className="block p-2 cursor-pointer">
//                             <label className="block">
//                                 <input
//                                     type="checkbox"
//                                     checked={selectedParameter === param}
//                                     onChange={(e) => handleCheckboxChange(param, e.target.checked)}
//                                     className="mr-2"
//                                 />
//                                 {param}
//                             </label>
//                             {selectedParameter === param && (
//                                 <div className="mt-2 flex space-x-4">
//                                     <label>
//                                         <input
//                                             type="checkbox"
//                                             checked={statuses[param] === 'critical'}
//                                             onChange={(e) => handleStatusChange(param, e.target.checked ? 'critical' : '')}
//                                         />
//                                         Critical
//                                     </label>
//                                     <label>
//                                         <input
//                                             type="checkbox"
//                                             checked={statuses[param] === 'warning'}
//                                             onChange={(e) => handleStatusChange(param, e.target.checked ? 'warning' : '')}
//                                         />
//                                         Warning
//                                     </label>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dropdown;

//-----------------------------------------------------------------------------------
// import React, { useState } from 'react';

// type Parameter = 'Oxygen' | 'CO2' | 'TVOC' | 'Humidity';

// interface DropdownProps {
//     onParameterChange: (parameter: Parameter, isChecked: boolean) => void;
//     onStatusChange: (parameter: Parameter, status: 'critical' | 'warning' | '') => void;
// }

// const Dropdown: React.FC<DropdownProps> = ({ onParameterChange, onStatusChange }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const parameters: Parameter[] = ['Oxygen', 'CO2', 'TVOC', 'Humidity'];
    
//     // Holds the status (critical, warning) of each parameter
//     const [statuses, setStatuses] = useState<{ [key in Parameter]: 'critical' | 'warning' | '' }>({
//         Oxygen: '',
//         CO2: '',
//         TVOC: '',
//         Humidity: '',
//     });
    
//     // Track the selected parameter to reset statuses when switching
//     const [selectedParameter, setSelectedParameter] = useState<Parameter | null>(null);

//     const handleCheckboxChange = (parameter: Parameter, isChecked: boolean) => {
//         if (isChecked) {
//             // Reset the statuses of the previously selected parameter when a new parameter is selected
//             if (selectedParameter) {
//                 setStatuses(prev => ({
//                     ...prev,
//                     [selectedParameter]: '', // Reset critical and warning status of the previous parameter
//                 }));
//                 onStatusChange(selectedParameter, ''); // Notify parent to remove critical and warning lines
//             }
//             setSelectedParameter(parameter);
//         } else {
//             setSelectedParameter(null);
//         }
//         onParameterChange(parameter, isChecked);
//     };

//     const handleStatusChange = (parameter: Parameter, status: 'critical' | 'warning' | '') => {
//         setStatuses(prev => ({
//             ...prev,
//             [parameter]: status, // Set the status (critical or warning) for the current parameter
//         }));
//         onStatusChange(parameter, status); // Notify parent component of the status change
//     };

//     return (
//         <div className="relative">
//             <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-500 text-white px-4 py-2 rounded">Select Parameters
//             </button>
//             {isOpen && (
//                 <div className="absolute mt-2 bg-white border rounded shadow-lg z-10">
//                     {parameters.map(param => (
//                         <div key={param} className="block p-2 cursor-pointer">
//                             <label className="block">
//                                 <input
//                                     type="checkbox"
//                                     checked={selectedParameter === param}
//                                     onChange={(e) => handleCheckboxChange(param, e.target.checked)}
//                                     className="mr-2"
//                                 />
//                                 {param}
//                             </label>
//                             {selectedParameter === param && (
//                                 <div className="mt-2 flex space-x-4">
//                                     <label>
//                                         <input
//                                             type="checkbox"
//                                             checked={statuses[param] === 'critical'}
//                                             onChange={(e) => handleStatusChange(param, e.target.checked ? 'critical' : '')}
//                                         />
//                                         Critical
//                                     </label>
//                                     <label>
//                                         <input
//                                             type="checkbox"
//                                             checked={statuses[param] === 'warning'}
//                                             onChange={(e) => handleStatusChange(param, e.target.checked ? 'warning' : '')}
//                                         />
//                                         Warning
//                                     </label>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dropdown;


// import React, { useState } from 'react';

// type Parameter = 'Oxygen' | 'CO2' | 'TVOC' | 'Humidity';

// interface DropdownProps {
//     onParameterChange: (parameter: Parameter, isChecked: boolean) => void;
//     onStatusChange: (parameter: Parameter, status: 'critical' | 'warning' | '') => void;
// }

// const Dropdown: React.FC<DropdownProps> = ({ onParameterChange, onStatusChange }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const parameters: Parameter[] = ['Oxygen', 'CO2', 'TVOC', 'Humidity'];

//     // Track the checked state of each parameter
//     const [selectedParameters, setSelectedParameters] = useState<{ [key in Parameter]: boolean }>({
//         Oxygen: false,
//         CO2: false,
//         TVOC: false,
//         Humidity: false,
//     });

//     // Track the statuses (critical, warning) for each parameter
//     const [statuses, setStatuses] = useState<{ [key in Parameter]: 'critical' | 'warning' | '' }>({
//         Oxygen: '',
//         CO2: '',
//         TVOC: '',
//         Humidity: '',
//     });

//     const handleCheckboxChange = (parameter: Parameter, isChecked: boolean) => {
//         setSelectedParameters(prev => ({
//             ...prev,
//             [parameter]: isChecked, // Update the checked state for the current parameter
//         }));
//         onParameterChange(parameter, isChecked); // Notify parent of parameter being checked/unchecked
//     };

//     const handleStatusChange = (parameter: Parameter, status: 'critical' | 'warning' | '') => {
//         setStatuses(prev => ({
//             ...prev,
//             [parameter]: status, // Update the status (critical or warning) for the current parameter
//         }));
//         onStatusChange(parameter, status); // Notify parent component of status change
//     };

//     return (
//         <div className="relative">
//             <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-500 text-white px-4 py-2 rounded">
//                 Select Parameters
//             </button>
//             {isOpen && (
//                 <div className="absolute mt-2 bg-white border rounded shadow-lg z-10">
//                     {parameters.map(param => (
//                         <div key={param} className="block p-2 cursor-pointer">
//                             <label className="block">
//                                 <input
//                                     type="checkbox"
//                                     checked={selectedParameters[param]} // Multiple parameters can now be checked
//                                     onChange={(e) => handleCheckboxChange(param, e.target.checked)}
//                                     className="mr-2"
//                                 />
//                                 {param}
//                             </label>
//                             {selectedParameters[param] && (
//                                 <div className="mt-2 flex space-x-4">
//                                     <label>
//                                         <input
//                                             type="checkbox"
//                                             checked={statuses[param] === 'critical'}
//                                             onChange={(e) => handleStatusChange(param, e.target.checked ? 'critical' : '')}
//                                         />
//                                         Critical
//                                     </label>
//                                     <label>
//                                         <input
//                                             type="checkbox"
//                                             checked={statuses[param] === 'warning'}
//                                             onChange={(e) => handleStatusChange(param, e.target.checked ? 'warning' : '')}
//                                         />
//                                         Warning
//                                     </label>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dropdown;

// import { useState, useMemo } from 'react';
// import Select, { ActionMeta, MultiValue, SingleValue } from 'react-select';

// // Define sensor type
// interface Sensor {
//   id: number;
//   sensorName: string;
//   Cmin?: number; // Optional to handle cases where critical min is not available
//   Cmax?: number; // Optional to handle cases where critical max is not available
//   Wmin?: number; // Optional to handle cases where warning min is not available
//   Wmax?: number; // Optional to handle cases where warning max is not available
//   Avg: number[];
// }

// // Define sensor options type
// interface SensorOption {
//   value: number;
//   label: string;
//   sensor: Sensor;
// }

// // Define limit options type
// interface LimitOption {
//   value: string;
//   label: string;
//   Wmin?: number; // Optional
//   Wmax?: number; // Optional
//   Cmin?: number; // Optional
//   Cmax?: number; // Optional
//   id: number;
// }

// const sensors: Sensor[] = [
//   { id: 1, sensorName: 'Oxygen', Cmin: 4, Cmax: 23, Wmin: 30, Wmax: 21, Avg: [2, 5, 9, 13, 17, 22, 28, 33, 39, 45] },
//   { id: 2, sensorName: 'CO2', Cmin: 9, Cmax: 16, Avg: [8, 14, 19, 25, 32, 38, 44, 51, 57, 63] },
//   { id: 3, sensorName: 'TVOC', Cmin: 20, Cmax: 13, Wmin: 28, Wmax: 20, Avg: [3, 7, 11, 15, 19, 25, 30, 36, 41, 47] },
//   { id: 4, sensorName: 'Humidity', Cmin: 5, Cmax: 29, Wmin: 33, Wmax: 16, Avg: [7, 12, 17, 24, 30, 35, 41, 47, 53, 60] },
// ];

// const DropDown: React.FC = () => {
//   const [selectedSensors, setSelectedSensors] = useState<MultiValue<SensorOption>>([]);
//   const [selectedLimit, setSelectedLimit] = useState<SingleValue<LimitOption> | null>(null);

//   // Memoize the sensor options
//   const sensorOptions = useMemo((): SensorOption[] =>
//     sensors.map((sensor) => ({
//       value: sensor.id,
//       label: sensor.sensorName,
//       sensor,
//     })),
//     []
//   );

//   const handleSensorChange = (selectedOptions: MultiValue<SensorOption>, _actionMeta: ActionMeta<SensorOption>) => {
//     setSelectedSensors(selectedOptions || []);
//   };

//   // Memoize the limit options based on selected sensors
//   const limitOptions = useMemo((): LimitOption[] =>
//     selectedSensors.flatMap(({ sensor }) => {
//       const options: LimitOption[] = [];
//       if (sensor.Wmin !== undefined && sensor.Wmax !== undefined) {
//         options.push({
//           value: sensor.sensorName,
//           label: `${sensor.sensorName} Warning`,
//           Wmin: sensor.Wmin,
//           Wmax: sensor.Wmax,
//           id: sensor.id,
//         });
//       }
//       if (sensor.Cmin !== undefined && sensor.Cmax !== undefined) {
//         options.push({
//           value: sensor.sensorName,
//           label: `${sensor.sensorName} Critical`,
//           Cmin: sensor.Cmin,
//           Cmax: sensor.Cmax,
//           id: sensor.id,
//         });
//       }
//       return options;
//     }),
//     [selectedSensors]
//   );

//   const handleLimitChange = (selectedOption: SingleValue<LimitOption>, _actionMeta: ActionMeta<LimitOption>) => {
//     setSelectedLimit(selectedOption || null);
//   };

//   console.log("Sensors:", selectedSensors);
//   console.log("Selected Limit Value to show:", selectedLimit);

//   return (
//     <div className="p-4">
//       <Select
//         options={sensorOptions}
//         isMulti
//         closeMenuOnSelect={false}
//         hideSelectedOptions={false}
//         onChange={handleSensorChange}
//         placeholder="Select Sensors"
//         className="mb-4"
//       />
//       <Select
//         options={limitOptions}
//         closeMenuOnSelect={false}
//         hideSelectedOptions={false}
//         onChange={handleLimitChange}
//         placeholder="Select Limits"
//         className="mb-4"
//       />
//     </div>
//   );
// };

// export default DropDown;

// import React, { useState } from 'react';
// import Select, { MultiValue, SingleValue } from 'react-select';

// type Parameter = 'Oxygen' | 'CO2' | 'TVOC' | 'Humidity';

// interface DropdownProps {
//     onParameterChange: (parameter: Parameter, isChecked: boolean) => void;
//     onStatusChange: (parameter: Parameter, status: 'critical' | 'warning' | '') => void;
// }

// // Define option type for react-select
// interface ParameterOption {
//     label: string;
//     value: Parameter;
// }

// const Dropdown: React.FC<DropdownProps> = ({ onParameterChange, onStatusChange }) => {
//     const [selectedParameters, setSelectedParameters] = useState<MultiValue<ParameterOption>>([]);
//     const [selectedStatusParameter, setSelectedStatusParameter] = useState<SingleValue<ParameterOption>>(null);

//     const [statuses, setStatuses] = useState<{ [key in Parameter]: 'critical' | 'warning' | '' }>({
//         Oxygen: '',
//         CO2: '',
//         TVOC: '',
//         Humidity: '',
//     });

//     const parameterOptions: ParameterOption[] = [
//         { label: 'Oxygen', value: 'Oxygen' },
//         { label: 'CO2', value: 'CO2' },
//         { label: 'TVOC', value: 'TVOC' },
//         { label: 'Humidity', value: 'Humidity' },
//     ];

//     // Handle parameter selection from the multi-select dropdown
//     const handleParameterChange = (selectedOptions: MultiValue<ParameterOption>) => {
//         setSelectedParameters(selectedOptions);

//         // Notify parent of parameter changes
//         selectedOptions.forEach(option => onParameterChange(option.value, true));
//     };

//     // Handle status change (Critical/Warning) for a specific parameter
//     const handleStatusChange = (status: 'critical' | 'warning' | '') => {
//         if (selectedStatusParameter) {
//             const parameter = selectedStatusParameter.value;
//             setStatuses(prev => ({
//                 ...prev,
//                 [parameter]: status,
//             }));

//             // Notify parent of the status change
//             onStatusChange(parameter, status);
//         }
//     };

//     return (
//         <div className="p-4">
//             {/* Multi-select dropdown for parameters */}
//             <Select
//                 isMulti
//                 options={parameterOptions}
//                 value={selectedParameters}
//                 onChange={handleParameterChange}
//                 placeholder="Select Parameters"
//                 className="mb-4"
//             />

//             {/* Dropdown to select a specific parameter for status change */}
//             {selectedParameters.length > 0 && (
//                 <Select
//                     options={selectedParameters}
//                     value={selectedStatusParameter}
//                     onChange={setSelectedStatusParameter}
//                     placeholder="Select Parameter to View Status"
//                     className="mb-4"
//                 />
//             )}

//             {/* If a parameter is selected, show the critical and warning checkboxes */}
//             {/* {selectedStatusParameter && (
//                 <div className="flex space-x-4">
//                     <label>
//                         <input
//                             type="checkbox"
//                             checked={statuses[selectedStatusParameter.value] === 'critical'}
//                             onChange={() => handleStatusChange(statuses[selectedStatusParameter.value] === 'critical' ? '' : 'critical')}
//                         />
//                         Critical
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             checked={statuses[selectedStatusParameter.value] === 'warning'}
//                             onChange={() => handleStatusChange(statuses[selectedStatusParameter.value] === 'warning' ? '' : 'warning')}
//                         />
//                         Warning
//                     </label>
//                 </div>
//             )} */}
//         </div>
//     );
// };

// export default Dropdown;
//------------------------------------------------------------------------------------------------------------------------------------------

import React, { useState } from 'react';
import Select, { MultiValue, SingleValue } from 'react-select';

type Parameter = 'Oxygen' | 'CO2' | 'TVOC' | 'Humidity';

interface DropdownProps {
    onParameterChange: (parameter: Parameter, isChecked: boolean) => void;
    onStatusChange: (parameter: Parameter, status: 'critical' | 'warning' | '') => void;
}

// Define option type for react-select
interface ParameterOption {
    label: string;
    value: Parameter;
}

const Dropdown: React.FC<DropdownProps> = ({ onParameterChange, onStatusChange }) => {
    const [selectedParameters, setSelectedParameters] = useState<MultiValue<ParameterOption>>([]);
    const [selectedStatusParameter, setSelectedStatusParameter] = useState<SingleValue<ParameterOption>>(null);

    const [statuses, setStatuses] = useState<{ [key in Parameter]: 'critical' | 'warning' | '' }>({
        Oxygen: '',
        CO2: '',
        TVOC: '',
        Humidity: '',
    });

    const parameterOptions: ParameterOption[] = [
        { label: 'Oxygen', value: 'Oxygen' },
        { label: 'CO2', value: 'CO2' },
        { label: 'TVOC', value: 'TVOC' },
        { label: 'Humidity', value: 'Humidity' },
    ];

    // Handle parameter selection from the multi-select dropdown
    const handleParameterChange = (selectedOptions: MultiValue<ParameterOption>) => {
        setSelectedParameters(selectedOptions);

        // Notify parent of parameter changes
        selectedOptions.forEach(option => onParameterChange(option.value, true));
    };

    // Handle status change (Critical/Warning) for a specific parameter
    const handleStatusChange = (status: 'critical' | 'warning' | '') => {
        if (selectedStatusParameter) {
            const parameter = selectedStatusParameter.value;
            setStatuses(prev => ({
                ...prev,
                [parameter]: status,
            }));

            // Notify parent of the status change
            onStatusChange(parameter, status);
        }
    };

    return (
        <div className="p-4">
            {/* Multi-select dropdown for parameters */}
            <Select
                isMulti
                options={parameterOptions}
                value={selectedParameters}
                onChange={handleParameterChange}
                placeholder="Select Parameters"
                className="mb-4"
            />

            {/* Dropdown to select a specific parameter for status change */}
            {selectedParameters.length > 0 && (
                <Select
                    options={selectedParameters}
                    value={selectedStatusParameter}
                    onChange={setSelectedStatusParameter}
                    placeholder="Select Parameter to View Status"
                    className="mb-4"
                />
            )}
        </div>
    );
};

export default Dropdown;
