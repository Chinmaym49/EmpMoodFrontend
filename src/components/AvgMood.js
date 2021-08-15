import React from 'react';
import styles from '../styles/AvgMood.module.css';
import img1 from "../smileys/1F60C.svg";
import img2 from "../smileys/1F60D.svg";
import img3 from "../smileys/1F61F.svg";
import img4 from "../smileys/1F62D.svg";
import img5 from "../smileys/1F600.svg";
import img6 from "../smileys/1F601.svg";
import img7 from "../smileys/1F604.svg";
import img8 from "../smileys/1F610.svg";
import img9 from "../smileys/1F630.svg";
import img10 from "../smileys/1F625.svg";
// data passed is in the form -> data: {"ten":0, "nine":0, "eight":1, "seven":1, "six":1, "five":0, "four":0, "three":0, "two":0, "one": 0}

const AvgMood = (moodData) => {
    const moods = moodData.data;
    const moodToNum = {"ten":10, "nine":9, "eight":8, "seven":7, "six":6, "five":5, "four":4, "three":3, "two":2, "one": 1};
    const avgMoodToImg = {1: img4,2: img9,3: img10, 4: img3, 5: img8, 6: img1, 7: img5, 8: img7, 9: img6, 10: img2};
    const TotalMoods = Object.values(moods).reduce((a, b) => a + b);
    const avg = (Object.keys(moods).map((rating) => {return moodToNum[rating]*moods[rating]}).reduce((a, b) => a + b))/TotalMoods;
    const img_src = avgMoodToImg[Math.floor(avg)];
    return (
        <div className={ styles.container } style={{paddingTop:"50px"}}>
            <h1>
                <center>
                    Mood of the Day<br/>
                    <img src={ img_src } alt="emoji corrosponding the average rating"/>
                </center>
            </h1>
        </div>
    )
}
export default AvgMood;