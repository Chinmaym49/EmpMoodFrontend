import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import styles from '../styles/MoodGraph.module.css';

const MoodGraph = ({employees}) => {

    let data=[0,0,0,0,0,0,0,0,0,0];
    employees.forEach((employee)=>(data[employee.mood-1])++);
    data.reverse();

    const barChart = (
        <HorizontalBar 
            data = {{
                labels: ['10','9','8', '7', '6', '5', '4', '3', '2', '1'],
                datasets: [{
                    label: 'Ratings',
                    backgroundColor: [
                        'rgba(0, 232, 0, 1',
                        'rgba(104, 255, 0, 1)',
                        'rgba(148, 232, 100, 1)',
                        'rgba(221, 232, 0, 1)',
                        'rgba(232, 196, 0, 1)',
                        'rgba(232, 147, 0, 1)',
                        'rgba(232, 104, 0, 1)',
                        'rgba(232, 75, 0, 1)',
                        'rgba(232, 36, 0, 1)',
                        'rgba(232, 0, 0, 1)',
                    ],
                    data: data
                }]
            }}
            options = {{
                legend: {display: false},
                title: {display: true, text: `Current Mood Ratings`},
                scales: {
                    xAxes: [{
                      ticks: {
                        beginAtZero: true,
                        max: 10
                      }
                      
                    }]
                  }
            }}
        />
    )

    return (
        <div className={ styles.container } >
            { barChart }
        </div>

    )
}
export default MoodGraph;