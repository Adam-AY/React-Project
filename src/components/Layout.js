import React from "react";
import Paragraph from "./Paragraph";
import Calculation from "../logic/calculation";

/** @namespace React.Component */
export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '',
            value: ''
        };

        /*  ------@DONE-------  */
        this.handleSubmit = this.handleSubmit.bind(this);
        /* ------------------- */
    }

    handleChange(event) {
        this.setState({ value: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();

        let calculation = new Calculation(this.state.value);

        let result = null;

        /*  ------@DONE-------  */
        result = calculation.calculate();
        /* ------------------- */

        let content = 'Wrong input!';

        if (result !== false) {

            /*  ------@DONE-------  */

           let pattern = new RegExp(/([\/\+\-\*])/)

            let sign = this.state.value[this.state.value.match(pattern).index]

            let value = this.state.value.replace(sign, " "+sign+" ")

            this.setState({ content: value + " = "+ result})

            /* ------------------- */
        }

        /*  ------@DONE-------  */
        else{

            this.setState({ content:  content})
        }
        /* ------------------- */
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h1 className="col-md-8 col-md-offset-2 text-center">Devskiller React calculator</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <form className="col-md-6 col-md-offset-3 text-center" onSubmit={this.handleSubmit}>
                            <input type="text" className="form-control col-md-9" placeholder="expression..."  /*  @DONE  */ value={this.state.value}  onChange={this.handleChange.bind(this)} /*  @DONE  */ />
                            <input className="btn btn-success" type="submit" value="Submit"/>
                        </form>
                    </div>

                    <Paragraph  /*  @DONE  */ content={this.state.content} /*  @DONE  *//>
                </div>
            </div>
        )
    }
}
