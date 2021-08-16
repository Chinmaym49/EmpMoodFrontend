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

const AvgMood = ({employees}) => {
    
    let data=[0,0,0,0,0,0,0,0,0,0];
    employees.forEach((employee)=>(data[employee.mood-1])++);
    const avgMoodToImg = {1: img4, 2: img9, 3: img10, 4: img3, 5: img8, 6: img1, 7: img5, 8: img7, 9: img6, 10: img2};
    let avg=0,sum=0;
    data.forEach((x,i)=>{
        avg+=(x*(i+1));
        sum+=x;
    });
    avg/=sum;
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