import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
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
import './loader.js';
import axios from 'axios';
const $ = window.$;

class MoodForm extends Component {
    constructor() {
        super()

        this.imgStyle={border: "2px dashed silver", borderRadius: "10px", cursor: "pointer"};
        this.server_url="https://grads-coding-challenge-group-7.uc.r.appspot.com/user";

        this.state = {
            mail: "",
            hashtag: "DB",
            reason: "No special reason",
            mood: 0
        }
    }

    enterHashtag=(e)=> {
        let h=e.target.value;
        if(h.length===0)
            this.setState({hashtag:"DB"},()=>(console.log(this.state.hashtag)));
        else {
            if(h.charAt(0)==="#")
                h=h.substring(1);
            if(h.length===0)
                this.setState({hashtag:"DB"},()=>(console.log(this.state.hashtag)));
            else
                this.setState({hashtag:h},()=>(console.log(this.state.hashtag)));
        }
    }

    enterMail=(e)=> {
        this.setState({mail:e.target.value});
    }

    enterReason=(e)=> {
        let r=e.target.value;
        if(r.length===0)
            this.setState({reason:"No special reason"});
        else 
            this.setState({reason:r});
    }

    submitForm=async(e)=> {
        e.preventDefault();
        document.getElementById("submitbutton").hidden=true;
        document.getElementById("loadingbutton").hidden=false;
        document.getElementById("warnalert").hidden=true;
        document.getElementById("erralert").hidden=true;
        document.getElementById("succalert").hidden=true;
        
        if(this.state.mood===0)
            document.getElementById("warnalert").hidden=false;
        else {
            const data={email:this.state.mail,mood:this.state.mood,hashTag:this.state.hashtag,justification:this.state.reason};
            await axios.post(this.server_url,data)
            .then((resp) => {
                document.getElementById("succalert").hidden=false;
                console.log(resp);
            })
            .catch((err)=> {
                document.getElementById("erralert").hidden=false;
                console.log(err);
            });
        }
        document.getElementById("submitbutton").hidden=false;
        document.getElementById("loadingbutton").hidden=true;
    }

    selectThis=(id)=> {
        this.setState({mood:parseInt(id)},()=> {
            id=parseInt(id);
            document.getElementById(`img${id}`).style.border="3px dashed #0d6efd";
            for(let i=1;i<=10;i++)
                if(i!==id)
                    document.getElementById(`img${i}`).style.border="2px dashed silver";
        }); 
    }

    componentDidMount() {
        if(!window.matchMedia("(pointer: coarse)").matches)
        {
            $(document).ready(function(){
                $('[data-toggle="tooltip"]').tooltip();   
            });  
        }
    }

    render() {
        return (
            <Fragment>
                <NavBar active={"form"}/>
                <div id="warnalert" className="alert alert-warning alert-dismissible fade show" role="alert" hidden="hidden">
                    Please select a Mood Rating! 
                </div>
                <div id="erralert" className="alert alert-danger alert-dismissible fade show" role="alert" hidden="hidden">
                    An error occured! 
                </div>
                <div id="succalert" className="alert alert-success alert-dismissible fade show" role="alert" hidden="hidden">
                    Done! Check what mood others are in! 
                </div>
                <div className='container-fluid'>
                    <br/>
                    <h3>Fill Out the Form</h3>
                    <div className=" d-flex p-2 bd-highlight mb-3">
                        <form onSubmit={this.submitForm} className=" form-control ">
                            <p className="text-monospace font-weight-bolder" >Enter you mail:<br /></p>
                            <input name="Email" type="email" className="form-control" placeholder="e.g. abc-pqr@xyz.com" onChange={this.enterMail} required="required"/><br />
                            <p className="text-monospace font-weight-bolder">Enter a relevant hashtag:<br /></p>
                            <input name="Hashtags" className="form-control" placeholder="e.g. #CEO-Meet" onChange={this.enterHashtag}/><br />
                            <p className="text-monospace font-weight-bolder">Select a Mood Rating:<br /></p>
                            
                            <div id="emojis" className="container-fluid row justify-content-center" style={{marginLeft:"0px"}}>
                                <div className="row col-md-6 p-2">
                                    <div className="col px-0 ms-2 me-2" onClick={()=>(this.selectThis(1))}>
                                        <img alt="1" style={this.imgStyle} id="img1" className="img-fluid w-100" src={img4} data-toggle="tooltip" data-placement="top" title="&nbsp;1/10&nbsp;"/>
                                        {window.matchMedia("(pointer: coarse)").matches && <p style={{textAlign: 'center'}}>1/10</p>}
                                    </div>
                                    <div className="col px-0 me-2" onClick={()=>(this.selectThis(2))}>
                                        <img alt="2" style={this.imgStyle} id="img2" className="img-fluid w-100" src={img9} data-toggle="tooltip" data-placement="top" title="&nbsp;2/10&nbsp;"/>
                                        {window.matchMedia("(pointer: coarse)").matches && <p style={{textAlign: 'center'}}>2/10</p>}
                                    </div>

                                    <div className="col px-0 me-2" onClick={()=>(this.selectThis(3))}>
                                        <img alt="3" style={this.imgStyle} id="img3" className="img-fluid w-100" src={img10} data-toggle="tooltip" data-placement="top" title="&nbsp;3/10&nbsp;"/>
                                        {window.matchMedia("(pointer: coarse)").matches && <p style={{textAlign: 'center'}}>3/10</p>}
                                    </div>
                                    <div className="col px-0 me-2" onClick={()=>(this.selectThis(4))}>
                                        <img alt="4" style={this.imgStyle} id="img4" className="img-fluid w-100" src={img3} data-toggle="tooltip" data-placement="top" title="&nbsp;4/10&nbsp;"/>
                                        {window.matchMedia("(pointer: coarse)").matches && <p style={{textAlign: 'center'}}>4/10</p>}
                                    </div>
                                    <div className="col px-0 me-2" onClick={()=>(this.selectThis(5))}>
                                        <img alt="5" style={this.imgStyle} id="img5" className="img-fluid w-100" src={img8} data-toggle="tooltip" data-placement="top" title="&nbsp;5/10&nbsp;"/>
                                        {window.matchMedia("(pointer: coarse)").matches && <p style={{textAlign: 'center'}}>5/10</p>}
                                    </div>
                                </div>

                                <div className="row col-md-6 p-2">
                                    <div className="col px-0 ms-2 me-2" onClick={()=>(this.selectThis(6))}>
                                        <img alt="6" style={this.imgStyle} id="img6" className="img-fluid  w-100" src={img1} data-toggle="tooltip" data-placement="top" title="&nbsp;6/10&nbsp;"/>
                                        {window.matchMedia("(pointer: coarse)").matches && <p style={{textAlign: 'center'}}>6/10</p>}
                                    </div>
                                    <div className="col px-0 me-2" onClick={()=>(this.selectThis(7))}>
                                        <img alt="7" style={this.imgStyle} id="img7" className="img-fluid w-100" src={img5} data-toggle="tooltip" data-placement="top" title="&nbsp;7/10&nbsp;"/>
                                        {window.matchMedia("(pointer: coarse)").matches && <p style={{textAlign: 'center'}}>7/10</p>}
                                    </div>

                                    <div className="col px-0 me-2" onClick={()=>(this.selectThis(8))}>
                                        <img alt="8" style={this.imgStyle} id="img8" className="img-fluid w-100" src={img7} data-toggle="tooltip" data-placement="top" title="&nbsp;8/10&nbsp;"/>
                                        {window.matchMedia("(pointer: coarse)").matches && <p style={{textAlign: 'center'}}>8/10</p>}
                                    </div>
                                    <div className="col px-0 me-2" onClick={()=>(this.selectThis(9))}>
                                        <img alt="9" style={this.imgStyle} id="img9" className="img-fluid w-100" src={img6} data-toggle="tooltip" data-placement="top" title="&nbsp;9/10&nbsp;"/>
                                        {window.matchMedia("(pointer: coarse)").matches && <p style={{textAlign: 'center'}}>9/10</p>}
                                    </div>
                                    <div className="col px-0 me-2" onClick={()=>(this.selectThis(10))}>
                                        <img alt="10" style={this.imgStyle} id="img10" className="img-fluid w-100" src={img2} data-toggle="tooltip" data-placement="top" title="&nbsp;10/10&nbsp;"/>
                                        {window.matchMedia("(pointer: coarse)").matches && <p style={{textAlign: 'center'}}>10/10</p>}
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <p className="text-monospace font-weight-bolder">Enter your reason:<br /></p>
                            <input name="Hashtags" className="form-control" placeholder="e.g. This event was mind-boggling!" onChange={this.enterReason}/>
                            <br/>
                            <center>
                                <button id="submitbutton" className="btn btn-primary" type="submit">Submit</button>
                                <button id="loadingbutton" className="btn btn-primary" type="submit" disabled="disabled" hidden="hidden">
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    &nbsp;&nbsp;Loading...
                                </button>    
                            </center>
                            <br/>
                        </form>
                    </div >

                </div >
            </Fragment>
        )
    }
}

export default MoodForm;