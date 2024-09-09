// import React, { Fragment, useState, useRef } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import exporting from 'highcharts/modules/exporting';

// exporting(Highcharts);

// const SampleComponent: React.FC<{ modal2: boolean, HandleClose: () => void }> = ({ modal2, HandleClose }) => {
//     const [LastTime, setLastTime] = useState("7 Days");
//     const [Interval, setInterval] = useState("Daily");
//     const [showCalendar, setShowCalendar] = useState(false);
//     const [customDate, setCustomDate] = useState<string | null>(null);
//     const [showGraph, setShowGraph] = useState(true);
//     const [chartSeries, setChartSeries] = useState([
//         {
//             name: 'Temperature',
//             data: [22, 24, 19, 23, 26, 27, 25],
//         },
//         {
//             name: 'Humidity',
//             data: [65, 60, 70, 68, 66, 65, 63],
//         },
//     ]);
//     const chartRef = useRef<HighchartsReact.RefObject>(null);

//     const Labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//     const handleCustomDate = (date: string) => {
//         setCustomDate(date);
//     };

//     const HandleLastTime = (time: string) => {
//         setLastTime(time);
//     };

//     const HandleInterval = (interval: string) => {
//         setInterval(interval);
//         updateChartSeries(interval);
//     };

//     const updateChartSeries = (interval: string) => {
//         // Define data based on the interval
//         let updatedSeries = [];

//         if (interval === "Hourly") {
//             updatedSeries = [
//                 {
//                     name: 'Temperature',
//                     data: [22, 24, 19, 23, 26, 27, 25] // Sample hourly data
//                 },
//                 {
//                     name: 'Humidity',
//                     data: [65, 60, 70, 68, 66, 65, 63] // Sample hourly data
//                 }
//             ];
//         } else if (interval === "Daily") {
//             updatedSeries = [
//                 {
//                     name: 'Temperature',
//                     data: [22, 24, 19, 23, 26, 27, 25] // Sample daily data
//                 },
//                 {
//                     name: 'Humidity',
//                     data: [65, 60, 70, 68, 66, 65, 63] // Sample daily data
//                 }
//             ];
//         } else if (interval === "Weekly") {
//             updatedSeries = [
//                 {
//                     name: 'Temperature',
//                     data: [21, 23, 25, 27, 29, 28, 26] // Sample weekly data
//                 },
//                 {
//                     name: 'Humidity',
//                     data: [66, 64, 62, 60, 58, 59, 60] // Sample weekly data
//                 }
//             ];
//         }

//         setChartSeries(updatedSeries);
//     };

//     return (
//         <Transition appear show={modal2} as={Fragment}>
//             <Dialog as="div" open={modal2} onClose={HandleClose}>
//                 <Transition.Child
//                     as={Fragment}
//                     enter="ease-out duration-300"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="ease-in duration-200"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                 >
//                     <div className="fixed inset-0" />
//                 </Transition.Child>
//                 <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
//                     <div className="flex min-h-screen items-center justify-center px-4">
//                         <Transition.Child
//                             as={Fragment}
//                             enter="ease-out duration-300"
//                             enterFrom="opacity-0 scale-95"
//                             enterTo="opacity-100 scale-100"
//                             leave="ease-in duration-200"
//                             leaveFrom="opacity-100 scale-100"
//                             leaveTo="opacity-0 scale-95"
//                         >
//                             <Dialog.Panel as="div" className="panel my-8 w-full max-w-full overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
//                                 <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
//                                     <h5 className="text-lg font-bold dark:text-white">Trends of Sensors</h5>
//                                     <button type="button" className="text-white-dark dark:text-white hover:text-dark" onClick={HandleClose}>
//                                         X {/* Replace this with your IconX component */}
//                                     </button>
//                                 </div>
//                                 <div className="p-5">
//                                     <div className="flex flex-col items-center">
//                                         <form className="flex items-center gap-8">
//                                             <div>
//                                                 <label htmlFor="sensorTag" className="dark:text-white">Sensor Tag</label>
//                                                 <div className="form-input text-white-dark w-[150px] dark:text-white text-lg">Sample Sensor</div>
//                                             </div>
//                                             <div>
//                                                 <label htmlFor="last" className="dark:text-white">Last</label>
//                                                 <div className="dropdown">
//                                                     <button className="w-[160px] form-select dark:text-white text-lg" onClick={() => setShowCalendar(!showCalendar)}>
//                                                         {LastTime}
//                                                     </button>
//                                                     <ul className='w-[160px]'>
//                                                         {["7 Days", "30 Days", "Custom Date"].map((last, index) => (
//                                                             <li key={index} onClick={() => {
//                                                                 setShowCalendar(last === "Custom Date");
//                                                                 HandleLastTime(last);
//                                                             }}>
//                                                                 <button type="button" className="dark:text-white">{last}</button>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                             {showCalendar && <div>
//                                                 <label htmlFor="customDate" className="dark:text-white">Custom Date</label>
//                                                 <input
//                                                     type="date"
//                                                     className="form-input w-[220px] dark:text-white text-lg"
//                                                     onChange={(e) => handleCustomDate(e.target.value)}
//                                                 />
//                                             </div>}
//                                             <div>
//                                                 <label htmlFor="groupingInterval" className="dark:text-white">Grouping Interval</label>
//                                                 <div className="dropdown">
//                                                     <button className="w-[150px] form-select dark:text-white text-lg">
//                                                         {Interval}
//                                                     </button>
//                                                     <ul className='w-[150px]'>
//                                                         {["Hourly", "Daily", "Weekly"].map((interval, index) => (
//                                                             <li key={index} onClick={() => HandleInterval(interval)}>
//                                                                 <button type="button" className="dark:text-white">{interval}</button>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                     {showGraph ? <div>
//                                         <HighchartsReact
//                                             highcharts={Highcharts}
//                                             options={{
//                                                 accessibility: {
//                                                     enabled: false
//                                                 },
//                                                 chart: {
//                                                     type: 'line',
//                                                     height: '400px',
//                                                     backgroundColor: 'white',
//                                                     zoomType: 'x'
//                                                 },
//                                                 credits: {
//                                                     enabled: false
//                                                 },
//                                                 title: {
//                                                     text: 'Sensor Trends'
//                                                 },
//                                                 xAxis: {
//                                                     categories: Labels,
//                                                     labels: {
//                                                         style: {
//                                                             color: 'black'
//                                                         }
//                                                     }
//                                                 },
//                                                 yAxis: {
//                                                     title: {
//                                                         text: 'Values',
//                                                         style: {
//                                                             color: 'black'
//                                                         }
//                                                     },
//                                                     labels: {
//                                                         format: '{value}',
//                                                         style: {
//                                                             color: 'black'
//                                                         }
//                                                     },
//                                                 },
//                                                 tooltip: {
//                                                     crosshairs: true,
//                                                     shared: true
//                                                 },
//                                                 plotOptions: {
//                                                     line: {
//                                                         marker: {
//                                                             enabled: false,
//                                                         },
//                                                         lineWidth: 2,
//                                                     },
//                                                 },
//                                                 series: chartSeries
//                                             }}
//                                             ref={chartRef}
//                                         />
//                                     </div> : <div className='flex h-[400px] justify-center items-center dark:text-white'>
//                                         <b>No Data available</b>
//                                     </div>}
//                                     <div className="mt-8 flex items-center justify-end">
//                                         <button type="button" className="btn btn-primary">
//                                             Download
//                                         </button>
//                                         <button type="button" className="btn btn-outline-danger ltr:ml-4 rtl:mr-4" onClick={HandleClose}>
//                                             Close
//                                         </button>
//                                     </div>
//                                 </div>
//                             </Dialog.Panel>
//                         </Transition.Child>
//                     </div>
//                 </div>
//             </Dialog>
//         </Transition>
//     );
// };

// export default SampleComponent;
