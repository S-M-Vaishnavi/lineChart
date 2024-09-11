// import React from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// interface LineChartProps {
//     selectedParameters: string[];
// }

// const LineChart: React.FC<LineChartProps> = ({ selectedParameters }) => {
//     const options: Highcharts.Options = {
//         chart: {
//             type: 'spline',
//         },
//         xAxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//             crosshair: true,
//         },
//         yAxis: [
//             {
//                 title: {
//                     text: 'Oxygen (%)',
//                 },
//                 opposite: false,
//                 visible: selectedParameters.includes('Oxygen'),
//                 crosshair: true,
//             },
//             {
//                 title: {
//                     text: 'CO2 (ppm)',
//                 },
//                 opposite: true,
//                 visible: selectedParameters.includes('CO2'),
//                 crosshair: true,
//             },
//             {
//                 title: {
//                     text: 'TVOC (ppb)',
//                 },
//                 opposite: false,
//                 visible: selectedParameters.includes('TVOC'),
//                 gridLineWidth: 0,
//                 crosshair: true,
//             },
//             {
//                 title: {
//                     text: 'Humidity (%)',
//                 },
//                 opposite: true,
//                 visible: selectedParameters.includes('Humidity'),
//                 gridLineWidth: 0,
//                 crosshair: true,
//             },
//         ],
//         tooltip: {
//             shared: true,
//             formatter: function () {
//                 const points = this.points as Highcharts.TooltipFormatterContextObject[];
//                 let tooltipHtml = `<b>${this.x}</b><br>`;

//                 points.forEach(point => {
//                     tooltipHtml += `<span style="color:${point.color}">\u25CF</span> ${point.series.name}: <b>${point.y}</b><br>`;
//                 });

//                 return tooltipHtml;
//             },
//         },
//         plotOptions: {
//             series: {
//                 marker: {
//                     enabled: true,
//                 },
//                 states: {
//                     hover: {
//                         enabled: true,
//                         lineWidthPlus: 0,
//                         halo: {
//                             size: 10,
//                             opacity: 0.5,
//                         },
//                     },
//                 },
//             },
//         },
//         series: [
//             {
//                 type: 'spline',
//                 name: 'Oxygen',
//                 data: [21, 20, 19, 21, 20, 22, 21, 20, 19, 18, 20, 21],
//                 visible: selectedParameters.includes('Oxygen'),
//                 color: 'rgba(75, 192, 192, 1)',
//                 yAxis: 0,
//             },
//             {
//                 type: 'spline',
//                 name: 'CO2',
//                 data: [400, 420, 430, 410, 440, 450, 430, 420, 410, 400, 410, 430],
//                 visible: selectedParameters.includes('CO2'),
//                 color: 'rgba(255, 99, 132, 1)',
//                 yAxis: 1,
//             },
//             {
//                 type: 'spline',
//                 name: 'TVOC',
//                 data: [300, 320, 310, 315, 330, 335, 320, 315, 310, 305, 315, 325],
//                 visible: selectedParameters.includes('TVOC'),
//                 color: 'rgba(54, 162, 235, 1)',
//                 yAxis: 2,
//             },
//             {
//                 type: 'spline',
//                 name: 'Humidity',
//                 data: [50, 55, 53, 58, 52, 54, 55, 57, 56, 52, 51, 53],
//                 visible: selectedParameters.includes('Humidity'),
//                 color: 'rgba(255, 206, 86, 1)',
//                 yAxis: 3,
//             },
//         ],
//         fdits: {
//             enabled: false,
//         },
//     };

//     return <HighchartsReact highcharts={Highcharts} options={options} />;
// };

// export default LineChart;


//working code as of now expected

// import React from 'react';
// import Highcharts, { SeriesOptionsType } from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// // Define the allowed parameters
// type Parameter = 'Oxygen' | 'CO2' | 'TVOC' | 'Humidity';

// interface LineChartProps {
//     selectedParameters: Parameter[];
//     parameterStatus: { [key in Parameter]: 'critical' | 'warning' | '' };
// }

// const LineChart: React.FC<LineChartProps> = ({ selectedParameters, parameterStatus }) => {
//     // Critical and warning values for each parameter
//     const criticalValues: Record<Parameter, number[]> = {
//         Oxygen: [18, 19, 18, 20, 19, 21, 20, 19, 20, 18, 19, 20],
//         CO2: [500, 510, 505, 515, 520, 530, 525, 510, 515, 500, 505, 510],
//         TVOC: [350, 360, 355, 365, 370, 380, 375, 360, 365, 350, 355, 360],
//         Humidity: [40, 42, 41, 44, 43, 45, 42, 41, 40, 43, 42, 44],
//     };

//     const warningValues: Record<Parameter, number[]> = {
//         Oxygen: [20, 19, 20, 21, 20, 22, 21, 22, 21, 20, 21, 20],
//         CO2: [450, 460, 455, 470, 480, 490, 485, 470, 475, 460, 455, 470],
//         TVOC: [320, 330, 325, 335, 340, 350, 345, 330, 335, 320, 325, 330],
//         Humidity: [60, 65, 63, 67, 62, 64, 66, 68, 65, 63, 62, 60],
//     };

//     const options: Highcharts.Options = {
//         chart: {
//             type: 'spline',
//         },
//         xAxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//             crosshair: true,
//         },
//         yAxis: [
//             {
//                 title: {
//                     text: 'Oxygen (%)',
//                 },
//                 opposite: false,
//                 visible: selectedParameters.includes('Oxygen'),
//                 crosshair: true,
//             },
//             {
//                 title: {
//                     text: 'CO2 (ppm)',
//                 },
//                 opposite: true,
//                 visible: selectedParameters.includes('CO2'),
//                 crosshair: true,
//             },
//             {
//                 title: {
//                     text: 'TVOC (ppb)',
//                 },
//                 opposite: false,
//                 visible: selectedParameters.includes('TVOC'),
//                 gridLineWidth: 0,
//                 crosshair: true,
//             },
//             {
//                 title: {
//                     text: 'Humidity (%)',
//                 },
//                 opposite: true,
//                 visible: selectedParameters.includes('Humidity'),
//                 gridLineWidth: 0,
//                 crosshair: true,
//             },
//         ],
//         series: [
//             {
//                 type: 'spline',
//                 name: 'Oxygen',
//                 data: [21, 20, 19, 21, 20, 22, 21, 20, 19, 18, 20, 21],
//                 visible: selectedParameters.includes('Oxygen'),
//                 color: 'rgba(75, 192, 192, 1)',
//                 yAxis: 0,
//             },
//             {
//                 type: 'spline',
//                 name: 'CO2',
//                 data: [400, 420, 430, 410, 440, 450, 430, 420, 410, 400, 410, 430],
//                 visible: selectedParameters.includes('CO2'),
//                 color: 'rgba(255, 99, 132, 1)',
//                 yAxis: 1,
//             },
//             {
//                 type: 'spline',
//                 name: 'TVOC',
//                 data: [300, 320, 310, 315, 330, 335, 320, 315, 310, 305, 315, 325],
//                 visible: selectedParameters.includes('TVOC'),
//                 color: 'rgba(54, 162, 235, 1)',
//                 yAxis: 2,
//             },
//             {
//                 type: 'spline',
//                 name: 'Humidity',
//                 data: [50, 55, 53, 58, 52, 54, 55, 57, 56, 52, 51, 53],
//                 visible: selectedParameters.includes('Humidity'),
//                 color: 'rgba(255, 206, 86, 1)',
//                 yAxis: 3,
//             },
//             ...selectedParameters.map((param) => ({
//                 type: 'spline' as const, // Correct type
//                 name: `${param} Critical`,
//                 data: criticalValues[param], // Accessing values safely
//                 color: 'red',
//                 visible: parameterStatus[param] === 'critical',
//                 yAxis: param === 'Oxygen' ? 0 : param === 'CO2' ? 1 : param === 'TVOC' ? 2 : 3,
//             })),
//             ...selectedParameters.map((param) => ({
//                 type: 'spline' as const, // Correct type
//                 name: `${param} Warning`,
//                 data: warningValues[param], // Accessing values safely
//                 color: 'yellow',
//                 visible: parameterStatus[param] === 'warning',
//                 yAxis: param === 'Oxygen' ? 0 : param === 'CO2' ? 1 : param === 'TVOC' ? 2 : 3,
//             })),
//         ] as SeriesOptionsType[],
//     };

//     return <HighchartsReact highcharts={Highcharts} options={options} />;
// };

// export default LineChart;



// import React from 'react';
// import Highcharts, { SeriesOptionsType } from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// // Define the allowed parameters
// type Parameter = 'Oxygen' | 'CO2' | 'TVOC' | 'Humidity';

// interface LineChartProps {
//     selectedParameters: Parameter[];
//     parameterStatus: { [key in Parameter]: 'critical' | 'warning' | '' };
// }

// const LineChart: React.FC<LineChartProps> = ({ selectedParameters, parameterStatus }) => {
//     // Critical and warning values for each parameter
//     const criticalValues: Record<Parameter, number> = {
//         Oxygen: 10,
//         CO2: 500,
//         TVOC: 350,
//         Humidity: 40,
//     };

//     const warningValues: Record<Parameter, number> = {
//         Oxygen: 50,
//         CO2: 450,
//         TVOC: 320,
//         Humidity: 60,
//     };

//     // Axis titles map
//     const axisTitles: Record<number, string> = {
//         0: 'Oxygen (%)',
//         1: 'CO2 (ppm)',
//         2: 'TVOC (ppb)',
//         3: 'Humidity (%)',
//     };

//     const options: Highcharts.Options = {
//         chart: {
//             type: 'spline',
//         },
//         xAxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//             crosshair: true,
//         },
//         yAxis: [
//             {
//                 title: {
//                     text: 'Oxygen (%)',
//                 },
//                 opposite: false,
//                 visible: selectedParameters.includes('Oxygen'),
//                 crosshair: true,
//             },
//             {
//                 title: {
//                     text: 'CO2 (ppm)',
//                 },
//                 opposite: true,
//                 visible: selectedParameters.includes('CO2'),
//                 crosshair: true,
//             },
//             {
//                 title: {
//                     text: 'TVOC (ppb)',
//                 },
//                 opposite: false,
//                 visible: selectedParameters.includes('TVOC'),
//                 gridLineWidth: 0,
//                 crosshair: true,
//             },
//             {
//                 title: {
//                     text: 'Humidity (%)',
//                 },
//                 opposite: true,
//                 visible: selectedParameters.includes('Humidity'),
//                 gridLineWidth: 0,
//                 crosshair: true,
//             },
//         ],
//         tooltip: {
//             formatter: function () {
//                 const points = this.points as Highcharts.TooltipFormatterContextObject[];
//                 const tooltipText = points.map(point => 
//                     `<b>${point.series.name}</b>: ${point.y} ${axisTitles[point.series.yAxis?.index ?? 0]}`
//                 ).join('<br>');

//                 return `<b>${this.x}</b><br>${tooltipText}`;
//             },
//             shared: true,
//         },
//         series: [
//             {
//                 type: 'spline',
//                 name: 'Oxygen',
//                 data: [21, 20, 19, 21, 20, 22, 21, 20, 19, 18, 20, 21],
//                 visible: selectedParameters.includes('Oxygen'),
//                 color: 'rgba(75, 192, 192, 1)',
//                 yAxis: 0,
//             },
//             {
//                 type: 'spline',
//                 name: 'CO2',
//                 data: [400, 420, 430, 410, 440, 450, 430, 420, 410, 400, 410, 430],
//                 visible: selectedParameters.includes('CO2'),
//                 color: 'rgba(255, 99, 132, 1)',
//                 yAxis: 1,
//             },
//             {
//                 type: 'spline',
//                 name: 'TVOC',
//                 data: [300, 320, 310, 315, 330, 335, 320, 315, 310, 305, 315, 325],
//                 visible: selectedParameters.includes('TVOC'),
//                 color: 'rgba(54, 162, 235, 1)',
//                 yAxis: 2,
//             },
//             {
//                 type: 'spline',
//                 name: 'Humidity',
//                 data: [50, 55, 53, 58, 52, 54, 55, 57, 56, 52, 51, 53],
//                 visible: selectedParameters.includes('Humidity'),
//                 color: 'rgba(255, 206, 86, 1)',
//                 yAxis: 3,
//             },
//             ...selectedParameters.map((param) => ({
//                 type: 'spline' as const,
//                 name: `${param} Critical`,
//                 data: criticalValues[param],
//                 color: 'red',
//                 visible: parameterStatus[param] === 'critical',
//                 yAxis: param === 'Oxygen' ? 0 : param === 'CO2' ? 1 : param === 'TVOC' ? 2 : 3,
//                 marker: {
//                     enabled: parameterStatus[param] === 'critical',
//                     fillColor: 'red',
//                     lineWidth: 2,
//                     lineColor: 'black',
//                 },
//             })),
//             ...selectedParameters.map((param) => ({
//                 type: 'spline' as const,
//                 name: `${param} Warning`,
//                 data: warningValues[param],
//                 color: 'yellow',
//                 visible: parameterStatus[param] === 'warning',
//                 yAxis: param === 'Oxygen' ? 0 : param === 'CO2' ? 1 : param === 'TVOC' ? 2 : 3,
//                 marker: {
//                     enabled: parameterStatus[param] === 'warning',
//                     fillColor: 'yellow',
//                     lineWidth: 2,
//                     lineColor: 'black',
//                 },
//             })),
//         ] as SeriesOptionsType[],
//     };

//     return <HighchartsReact highcharts={Highcharts} options={options} />;
// };

// export default LineChart;

//------------------------------------------------------------------------------------------------------------
// import React from 'react';
// import Highcharts, { SeriesOptionsType } from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';


// type Parameter = 'Oxygen' | 'CO2' | 'TVOC' | 'Humidity';

// interface LineChartProps {
//     selectedParameters: Parameter[];
//     parameterStatus: { [key in Parameter]: 'critical' | 'warning' | '' };
// }

// const LineChart: React.FC<LineChartProps> = ({ selectedParameters, parameterStatus }) => {
//     const criticalValues: Record<Parameter, number> = {
//         Oxygen: 10,
//         CO2: 500,
//         TVOC: 350,
//         Humidity: 40,
//     };

//     const warningValues: Record<Parameter, number> = {
//         Oxygen: 50,
//         CO2: 450,
//         TVOC: 320,
//         Humidity: 60,
//     };

//     // Axis titles map
//     const axisTitles: Record<number, string> = {
//         0: 'Oxygen (%)',
//         1: 'CO2 (ppm)',
//         2: 'TVOC (ppb)',
//         3: 'Humidity (%)',
//     };

//     const options: Highcharts.Options = {
//         chart: {
//             type: 'spline',
//         },
//         xAxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//             crosshair: true,
//         },
//         yAxis: [
//             {
//                 title: {
//                     text: 'Oxygen (%)',
//                 },
//                 opposite: false,
//                 visible: selectedParameters.includes('Oxygen'),
//                 crosshair: true,
//             },
//             {
//                 title: {
//                     text: 'CO2 (ppm)',
//                 },
//                 opposite: true,
//                 visible: selectedParameters.includes('CO2'),
//                 crosshair: true,
//             },
//             {
//                 title: {
//                     text: 'TVOC (ppb)',
//                 },
//                 opposite: false,
//                 visible: selectedParameters.includes('TVOC'),
//                 gridLineWidth: 0,
//                 crosshair: true,
//             },
//             {
//                 title: {
//                     text: 'Humidity (%)',
//                 },
//                 opposite: true,
//                 visible: selectedParameters.includes('Humidity'),
//                 gridLineWidth: 0,
//                 crosshair: true,
//             },
//         ],
//         tooltip: {
//             formatter: function () {
//                 const points = this.points as Highcharts.TooltipFormatterContextObject[];
//                 const tooltipText = points.map(point => 
//                     `<b>${point.series.name}</b>: ${point.y} ${axisTitles[point.series.yAxis?.index ?? 0]}`
//                 ).join('<br>');

//                 return `<b>${this.x}</b><br>${tooltipText}`;
//             },
//             shared: true,
//         },
//         series: [
//             {
//                 type: 'spline',
//                 name: 'Oxygen',
//                 data: [21, 20, 19, 21, 20, 22, 21, 20, 19, 18, 20, 21],
//                 visible: selectedParameters.includes('Oxygen'),
//                 color: 'rgba(75, 192, 192, 1)',
//                 yAxis: 0,
//             },
//             {
//                 type: 'spline',
//                 name: 'CO2',
//                 data: [400, 420, 430, 410, 440, 450, 430, 420, 410, 400, 410, 430],
//                 visible: selectedParameters.includes('CO2'),
//                 color: 'rgba(255, 99, 132, 1)',
//                 yAxis: 1,
//             },
//             {
//                 type: 'spline',
//                 name: 'TVOC',
//                 data: [300, 320, 310, 315, 330, 335, 320, 315, 310, 305, 315, 325],
//                 visible: selectedParameters.includes('TVOC'),
//                 color: 'rgba(54, 162, 235, 1)',
//                 yAxis: 2,
//             },
//             {
//                 type: 'spline',
//                 name: 'Humidity',
//                 data: [50, 55, 53, 58, 52, 54, 55, 57, 56, 52, 51, 53],
//                 visible: selectedParameters.includes('Humidity'),
//                 color: 'rgba(255, 206, 86, 1)',
//                 yAxis: 3,
//             },
//             ...selectedParameters.map((param) => ({
//                 type: 'spline' as const,
//                 // name: `${param} Critical`,
//                 data: Array(12).fill(criticalValues[param]),
//                 color: 'red',
//                 visible: parameterStatus[param] === 'critical',
//                 // yAxis: param === 'Oxygen' ? 0 : param === 'CO2' ? 1 : param === 'TVOC' ? 2 : 3,
//                 marker: {
//                     enabled: parameterStatus[param] === 'critical',
//                     fillColor: 'red',
//                     lineWidth: 2,
//                     // lineColor: 'black',
//                 },
//             })),
//             ...selectedParameters.map((param) => ({
//                 type: 'spline' as const,
//                 name: `${param} Warning`,
//                 data: Array(12).fill(warningValues[param]),
//                 color: 'yellow',
//                 visible: parameterStatus[param] === 'warning',
//                 yAxis: param === 'Oxygen' ? 0 : param === 'CO2' ? 1 : param === 'TVOC' ? 2 : 3,
//                 marker: {
//                     enabled: parameterStatus[param] === 'warning',
//                     fillColor: 'yellow',
//                     lineWidth: 2,
//                     // lineColor: 'black',
//                 },
//             })),
//         ] as SeriesOptionsType[],
//     };

//     return <HighchartsReact highcharts={Highcharts} options={options} />;
// };

// export default LineChart;


// import React from 'react';
// import Highcharts, { SeriesOptionsType } from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// // Define the allowed parameters
// type Parameter = 'Oxygen' | 'CO2' | 'TVOC' | 'Humidity';

// interface LineChartProps {
//     selectedParameters: Parameter[];
//     parameterStatus: { [key in Parameter]: 'critical' | 'warning' | '' };
// }

// const LineChart: React.FC<LineChartProps> = ({ selectedParameters, parameterStatus }) => {
//     // Critical and warning values for each parameter
//     const criticalValues: Record<Parameter, number> = {
//         Oxygen: 24,
//         CO2: 3600,
//         TVOC: 350,
//         Humidity: 90,
//     };

//     const warningValues: Record<Parameter, number> = {
//         Oxygen: 50,
//         CO2: 2000,
//         TVOC: 320,
//         Humidity: 95,
//     };

//     // Axis titles map
//     const axisTitles: Record<number, string> = {
//         0: 'Oxygen (%)',
//         1: 'CO2 (ppm)',
//         2: 'TVOC (ppb)',
//         3: 'Humidity (%)',
//     };

//     const options: Highcharts.Options = {
//         chart: {
//             type: 'spline',
//         },
//         xAxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//             crosshair: true,
//         },
//         yAxis: [
//             {
//                 title: {
//                     text: 'Oxygen (%)',
//                 },
//                 opposite: false,
//                 visible: selectedParameters.includes('Oxygen'),
//                 crosshair: true,
//             },
//             {
//                 title: {
//                     text: 'CO2 (ppm)',
//                 },
//                 opposite: true,
//                 visible: selectedParameters.includes('CO2'),
//                 crosshair: true,
//             },
//             {
//                 title: {
//                     text: 'TVOC (ppb)',
//                 },
//                 opposite: false,
//                 visible: selectedParameters.includes('TVOC'),
//                 gridLineWidth: 0,
//                 crosshair: true,
//             },
//             {
//                 title: {
//                     text: 'Humidity (%)',
//                 },
//                 opposite: true,
//                 visible: selectedParameters.includes('Humidity'),
//                 gridLineWidth: 0,
//                 crosshair: true,
//             },
//         ],
//         tooltip: {
//             formatter: function () {
//                 const points = this.points as Highcharts.TooltipFormatterContextObject[];
//                 const tooltipText = points.map(point => 
//                     `<b>${point.series.name}</b>: ${point.y} ${axisTitles[point.series.yAxis?.index ?? 0]}`
//                 ).join('<br>');

//                 return `<b>${this.x}</b><br>${tooltipText}`;
//             },
//             shared: true,
//         },
//         series: [
//             {
//                 type: 'spline',
//                 name: 'Oxygen',
//                 data: [14,16,18,20,22,24,26],
//                 visible: selectedParameters.includes('Oxygen'),
//                 color: 'rgba(75, 192, 192, 1)',
//                 yAxis: 0,
//             },
//             {
//                 type: 'spline',
//                 name: 'CO2',
//                 data: [500,1000,1500,2000,2500],
//                 visible: selectedParameters.includes('CO2'),
//                 color: 'rgba(255, 99, 132, 1)',
//                 yAxis: 1,
//             },
//             {
//                 type: 'spline',
//                 name: 'TVOC',
//                 data: [1000,2000,3000,4000],
//                 visible: selectedParameters.includes('TVOC'),
//                 color: 'rgba(54, 162, 235, 1)',
//                 yAxis: 2,
//             },
//             {
//                 type: 'spline',
//                 name: 'Humidity',
//                 data: [25,50,75,100],
//                 visible: selectedParameters.includes('Humidity'),
//                 color: 'rgba(255, 206, 86, 1)',
//                 yAxis: 3,
//             },
//             ...selectedParameters.map((param) => ({
//                 type: 'spline' as const,
//                 name: `${param} Critical`,
//                 data: Array(12).fill(criticalValues[param]),  // Create a flat line using the critical value
//                 color: 'red',
//                 visible: parameterStatus[param] === 'critical',
//                 yAxis: param === 'Oxygen' ? 0 : param === 'CO2' ? 1 : param === 'TVOC' ? 2 : 3,
//                 marker: {
//                     enabled: parameterStatus[param] === 'critical',
//                     fillColor: 'red',
//                     lineWidth: 2,
//                     lineColor: 'black',
//                 },
//             })),
//             ...selectedParameters.map((param) => ({
//                 type: 'spline' as const,
//                 name: `${param} Warning`,
//                 data: Array(12).fill(warningValues[param]),  // Create a flat line using the warning value
//                 color: 'yellow',
//                 visible: parameterStatus[param] === 'warning',
//                 yAxis: param === 'Oxygen' ? 0 : param === 'CO2' ? 1 : param === 'TVOC' ? 2 : 3,
//                 marker: {
//                     enabled: parameterStatus[param] === 'warning',
//                     fillColor: 'yellow',
//                     lineWidth: 2,
//                     lineColor: 'black',
//                 },
//             })),
//         ] as SeriesOptionsType[],
//     };

//     return <HighchartsReact highcharts={Highcharts} options={options} />;
// };

// export default LineChart;


import React from 'react';
import Highcharts, { SeriesOptionsType } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

type Parameter = 'Oxygen' | 'CO2' | 'TVOC' | 'Humidity';

interface LineChartProps {
    selectedParameters: Parameter[];
    parameterStatus: { [key in Parameter]: 'critical' | 'warning' | '' };
}

const LineChart: React.FC<LineChartProps> = ({ selectedParameters, parameterStatus }) => {
    const criticalValues: Record<Parameter, number> = {
        Oxygen: 24,
        CO2: 3600,
        TVOC: 350,
        Humidity: 90,
    };

    const warningValues: Record<Parameter, number> = {
        Oxygen: 50,
        CO2: 2000,
        TVOC: 320,
        Humidity: 95,
    };

    const axisTitles: Record<number, string> = {
        0: 'Oxygen (%)',
        1: 'CO2 (ppm)',
        2: 'TVOC (ppb)',
        3: 'Humidity (%)',
    };

    const options: Highcharts.Options = {
        chart: {
            type: 'spline',
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            crosshair: true,
        },
        yAxis: [
            {
                title: {
                    text: 'Oxygen (%)',
                },
                opposite: false,
                visible: selectedParameters.includes('Oxygen'),
                crosshair: true,
            },
            {
                title: {
                    text: 'CO2 (ppm)',
                },
                opposite: true,
                visible: selectedParameters.includes('CO2'),
                crosshair: true,
            },
            {
                title: {
                    text: 'TVOC (ppb)',
                },
                opposite: false,
                visible: selectedParameters.includes('TVOC'),
                gridLineWidth: 0,
                crosshair: true,
            },
            {
                title: {
                    text: 'Humidity (%)',
                },
                opposite: true,
                visible: selectedParameters.includes('Humidity'),
                gridLineWidth: 0,
                crosshair: true,
            },
        ],
        tooltip: {
            formatter: function () {
                const points = this.points as Highcharts.TooltipFormatterContextObject[];
                const tooltipText = points.map(point => 
                    `<b>${point.series.name}</b>: ${point.y} ${axisTitles[point.series.yAxis?.index ?? 0]}`
                ).join('<br>');

                return `<b>${this.x}</b><br>${tooltipText}`;
            },
            shared: true,
        },
        series: [
            {
                type: 'spline',
                name: 'Oxygen',
                data: [14, 16, 18, 20, 22, 24, 26],
                visible: selectedParameters.includes('Oxygen'),
                color: 'rgba(75, 192, 192, 1)',
                yAxis: 0,
            },
            {
                type: 'spline',
                name: 'CO2',
                data: [500, 1000, 1500, 2000, 2500],
                visible: selectedParameters.includes('CO2'),
                color: 'rgba(255, 99, 132, 1)',
                yAxis: 1,
            },
            {
                type: 'spline',
                name: 'TVOC',
                data: [1000, 2000, 3000, 4000],
                visible: selectedParameters.includes('TVOC'),
                color: 'rgba(54, 162, 235, 1)',
                yAxis: 2,
            },
            {
                type: 'spline',
                name: 'Humidity',
                data: [25, 50, 75, 100],
                visible: selectedParameters.includes('Humidity'),
                color: 'rgba(255, 206, 86, 1)',
                yAxis: 3,
            },
            ...selectedParameters.map((param) => ({
                type: 'spline' as const,
                name: `${param} Critical`,
                data: Array(7).fill(criticalValues[param]),
                color: 'red',
                visible: parameterStatus[param] === 'critical',
                yAxis: param === 'Oxygen' ? 0 : param === 'CO2' ? 1 : param === 'TVOC' ? 2 : 3,
                marker: {
                    enabled: parameterStatus[param] === 'critical',
                    fillColor: 'red',
                    lineWidth: 2,
                },
                showInLegend: false,
            })),
            ...selectedParameters.map((param) => ({
                type: 'spline' as const,
                name: `${param} Warning`,
                data: Array(7).fill(warningValues[param]),
                color: 'yellow',
                visible: parameterStatus[param] === 'warning',
                yAxis: param === 'Oxygen' ? 0 : param === 'CO2' ? 1 : param === 'TVOC' ? 2 : 3,
                marker: {
                    enabled: parameterStatus[param] === 'warning',
                    fillColor: 'yellow',
                    lineWidth: 2,
                },
                showInLegend: false,
            })),
        ] as SeriesOptionsType[],
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart;

