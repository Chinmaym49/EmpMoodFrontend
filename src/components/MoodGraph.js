import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import styles from '../styles/MoodGraph.module.css';

// data passed is in the form -> data: {"ten":0, "nine":0, "eight":1, "seven":1, "six":1, "five":0, "four":0, "three":0, "two":0, "one": 0}

const MoodGraph = (data) => {
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
                    data: [data.data.ten, data.data.nine, data.data.eight, data.data.seven, data.data.six, data.data.five, data.data.four, data.data.three, data.data.two, data.data.one],
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