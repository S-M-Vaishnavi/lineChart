import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface LineChartProps {
    selectedParameters: string[];
}

const LineChart: React.FC<LineChartProps> = ({ selectedParameters }) => {
    const options: Highcharts.Options = {
        chart: {
            type: 'spline',
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true,
        },
        yAxis: [
            {
                title: {
                    text: 'Temperature (°C)',
                },
                opposite: false,
                visible: selectedParameters.includes('temperature'),
                crosshair: true,
            },
            {
                title: {
                    text: 'Humidity (%)',
                },
                opposite: true,
                visible: selectedParameters.includes('humidity'),
                crosshair: true,
            },
            {
                title: {
                    text: 'Oxygen (%)',
                },
                opposite: false,
                visible: selectedParameters.includes('oxygen'),
                gridLineWidth: 0,
                crosshair: true,
            },
            {
                title: {
                    text: 'Pressure (hPa)',
                },
                opposite: true,
                visible: selectedParameters.includes('pressure'),
                gridLineWidth: 0,
                crosshair: true,
            },
        ],
        tooltip: {
            shared: true,
            formatter: function () {
                const points = this.points as Highcharts.TooltipFormatterContextObject[];
                let tooltipHtml = `<b>${this.x}</b><br>`;

                points.forEach(point => {
                    tooltipHtml += `<span style="color:${point.color}">\u25CF</span> ${point.series.name}: <b>${point.y}</b><br>`;
                });

                return tooltipHtml;
            },
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: true, // Ensure markers are enabled
                },
                states: {
                    hover: {
                        enabled: true,
                        lineWidthPlus: 0, // Avoid extra width on hover
                        halo: {
                            size: 10,
                            opacity: 0.5,
                        },
                    },
                },
            },
        },
        series: [
            {
                type: 'spline',
                name: 'Temperature',
                data: [30, 25, 27, 22, 26, 28, 31, 29, 27, 24, 22, 25],
                visible: selectedParameters.includes('temperature'),
                color: 'rgba(255, 99, 132, 1)',
                yAxis: 0,
            },
            {
                type: 'spline',
                name: 'Humidity',
                data: [70, 60, 65, 55, 60, 70, 72, 65, 60, 55, 50, 68],
                visible: selectedParameters.includes('humidity'),
                color: 'rgba(54, 162, 235, 1)',
                yAxis: 1,
            },
            {
                type: 'spline',
                name: 'Oxygen',
                data: [21, 20, 19, 21, 20, 22, 21, 20, 19, 18, 20, 21],
                visible: selectedParameters.includes('oxygen'),
                color: 'rgba(75, 192, 192, 1)',
                yAxis: 2,
            },
            {
                type: 'spline',
                name: 'Pressure',
                data: [1013, 1010, 1007, 1012, 1011, 1010, 1012, 1013, 1014, 1010, 1009, 1011],
                visible: selectedParameters.includes('pressure'),
                color: 'rgba(255, 206, 86, 1)',
                yAxis: 3,
            },
        ],
        credits: {
            enabled: false,
        },
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart;
