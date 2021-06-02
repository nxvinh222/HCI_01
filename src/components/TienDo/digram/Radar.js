import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts';
export default class Radar extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'You',
                data: [80, 50, 30, 40, 100, 20],
            }, {
                name: 'Xếp hạng TB',
                data: [20, 30, 40, 80, 20, 80],
            }, {
                name: 'Xếp hạng Tốt',
                data: [44, 76, 78, 13, 43, 10],
            }],
            options: {
                chart: {
                    height: 500,
                    width : 550,
                    type: 'radar',
                    dropShadow: {
                        enabled: true,
                        blur: 2,
                        left: 2,
                        top: 2
                    }
                },
                stroke: {
                    width: 2
                },
                fill: {
                    opacity: 0.1
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    categories: ['Phan 1', 'Phan 2', 'Phan 3', 'Phan 4', 'Phan 5', 'Phan 6']
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
            </div>


        );
    }
}