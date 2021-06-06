import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts';
export default class Radar extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'You',
                data: [50, 50, 30, 40, 20, 10],
            }, {
                name: 'Xếp hạng TB',
                data: [50, 50, 50, 50, 50, 50],
            }, {
                name: 'Xếp hạng Tốt',
                data: [ 90, 90, 90, 90, 90, 90],
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
                    categories: ['Phần 1', 'Phần 2', 'Phần 3', 'Phầnn 4', 'Phần 5', 'Phần 6']
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