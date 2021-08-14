import React from 'react';
import styles from '../styles/AvgMood.module.css';

const AvgMood = (moodData) => {
    const moods = moodData.data;
    const moodToNum = {"ten":10, "nine":9, "eight":8, "seven":7, "six":6, "five":5, "four":4, "three":3, "two":2, "one": 1};
    const avgMoodToImg = {1: "",2: "",3: "", 4: "", 5: "", 6: "", 7: "https://openmoji.org/data/color/svg/1F61B.svg", 8: "https://openmoji.org/data/color/svg/1F929.svg", 9: "", 10: ""}
    const TotalMoods = Object.values(moods).reduce((a, b) => a + b);
    const avg = (Object.keys(moods).map((rating) => {return moodToNum[rating]*moods[rating]}).reduce((a, b) => a + b))/TotalMoods;
    const img_src = avgMoodToImg[Math.floor(avg)];
    return (
        <div className={ styles.container } >
            <h1>Mood of the Day - </h1>
            <img src={ img_src } alt="emoji corrosponding the average rating"/>
        </div>
    )
}
export default AvgMood;