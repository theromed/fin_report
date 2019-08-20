import React, {Component} from 'react';


import ReportList from '../report-list/index';
import AddButton from '../add-button/index';

import './app.css'

export default class App extends Component {

    maxId = 1;

    state = {
        reportData: [
            this.createReportItem('Название коэффициента', true, 5.55),
            this.createReportItem('Другое коэффициента', false, 2.66),
            this.createReportItem('Сложное коэффициента', true, 0.55),
        ],

    };

    createReportItem(name, goal, value) {
        return {
            name,
            goal,
            value,
            id: this.maxId++
        }
    };

    deleteItem = (id) => {
        this.setState(({reportData}) => {
            const idx = reportData.findIndex((el) => el.id === id);

            const newArray = [...reportData.slice(0, idx), ...reportData.slice(idx + 1)];

            return {
                reportData: newArray
            }
        })
    };


    render() {
        const {reportData} = this.state;

        const dataLine = reportData;

        return (
            <div className='report-app'>

                <ReportList report={dataLine}
                          onDeleted={this.deleteItem}
                          />
                <AddButton />
            </div>
        )

    };
}

