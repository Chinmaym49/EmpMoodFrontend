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


const Emp=({employee})=> {

    const cardStyle={
        textAlign: "center",
        maxWidth:"400px", 
        boxShadow: "5px 10px 18px #888888",
        marginTop: "15px",
        marginBottom: "15px"      
    };
    
    const cardHeaderStyle={
        maxWidth:"400px",
    };
    
    const imgStyle={
        width: "50px",
        height: "50px"
    };
    
    const imgs=[0,img4,img9,img10,img3,img8,img1,img5,img7,img6,img2];

    return(
        <center>
            <li className="list-group-item">
                <div className="card"  style={cardStyle}>
                    <div className="card-header" style={cardHeaderStyle}>{employee.email}</div>
                    <div className="card-body">
                        <h5 className="card-title">
                            Mood Rating: {employee.mood}
                            <img alt="emoji" src={imgs[employee.mood]} style={imgStyle}></img>
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">{employee.justification}</h6>
                        <p className="card-text text-primary"><b>#{employee.hashTag}</b></p>
                    </div>
                </div>
            </li>
        </center>
    );
}

export default Emp;