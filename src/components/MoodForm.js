import React, { Component } from 'react';
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
export default class MoodForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mail: props.mail,
            hashtag: props.hashtag
        }
    }

    addmailtomain = (usermail) => {
        if (!usermail) {
            alert('Enter Valid Value')
        } else if (this.state.mail.indexOf(usermail) > -1) {
            alert('Entered mail Already exists')
        }
        this.setState((prevState) => {
            return {
                usermail: prevState.mail.concat(usermail)
            }
        })
    }
    // addmail = (e) => {
    //     e.preventDefault();
    //     const usermail = e.target.elements.email.value;
    //     this.addmailtomain(usermail);
    //     e.target.elements.email.value = "";
    // }
    addhash = (hashes) => {
        if (!hashes) {
            alert('Enter Valid Value')
        } else if (this.state.hashtag.indexOf(hashes) > -1) {
            alert('Entered mail Already exists')
        }
        this.setState((prevState) => {
            return {
                usermail: prevState.hashtag.concat(hashes)
            }
        })
    }

    render() {

        return (
            <div class='container bg-light text-dark'>

                <h3>Fill Out the Form:</h3>
                <div class=" d-flex p-2 bd-highlight mb-3">
                    <form onSubmit={this.addmail} class=" form-control ">
                        <p class="text-white text-monospace font-weight-bolder" >Enter you mail:<br /></p>
                        <input name="Email" class="form-control text-white" placeholder="Email" value="email" /><br />
                        <p class="text-monospace font-weight-bolder text-white ">Enter relevant hashtags:<br /></p>

                        <input name="Hashtags" class="form-control text-white" placeholder="Hashtags" value={this.state.hashtag} /><br />
                        <div id="emojis" class="container-fluid  row justify-content-center ">
                            <div class="row col-md-6 p-2">
                                <div class="col px-0">
                                    <label for="1"><img class="img-fluid  w-100 "
                                        src={img4} />1</label>
                                    <input type="radio" id="1" />

                                </div>

                                <div class="col px-0">
                                    <label for="2"><img class="img-fluid w-100"
                                        src={img10} />2</label>
                                    <input type="radio" id="2" />
                                </div>

                                <div class="col px-0">
                                    <label for="3"> <img class="img-fluid w-100  "
                                        src={img9} />3</label>
                                    <input type="radio" name="emoji" id="3" /></div>

                                <div class="col px-0">
                                    <label for="4"><img class="img-fluid w-100 "
                                        src={img3} />4</label>
                                    <input type="radio" name="emoji" id="4" /></div>

                                <div class="col px-0">
                                    <label for="5"><img class="img-fluid w-100 "
                                        src={img8} />5</label>
                                    <input type="radio" name="emoji" id="5" /></div>
                            </div>


                            <div class="row col-md-6 p-2">
                                <div class="col px-0">
                                    <label for="6"><img class="img-fluid w-100 "
                                        src={img1} />6</label>
                                    <input type="radio" name="emoji" id="6" /></div>

                                <div class="col px-0">
                                    <label for="7"><img class="img-fluid w-100 "
                                        src={img7} />7</label>
                                    <input type="radio" name="emoji" id="7" /></div>

                                <div class="col px-0">
                                    <label for="8"> <img class="img-fluid w-100 "
                                        src={img5} />8</label>
                                    <input type="radio" name="emoji" id="8" /></div>

                                <div class="col px-0">
                                    <label for="9"><img class="img-fluid w-100 "
                                        src={img6} />9</label>
                                    <input type="radio" name="emoji" id="9" /></div>

                                <div class="col px-0">
                                    <label for="10"><img class="img-fluid w-100 "
                                        src={img2} />10</label>
                                    <input type="radio" name="emoji" id="10" /></div>

                            </div>
                        </div>

                        <button type="submit" class="btn btn-light mb-2">Submit</button>
                    </form>
                </div >

            </div >
        )
    }
}
MoodForm.defaultProps = {
    mail: [],
    hashtag: []
}