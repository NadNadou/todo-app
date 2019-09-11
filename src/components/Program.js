import React, { Component } from 'react';
import { bindExpression } from '@babel/types';

//programme permettant de calculer le temps nécessaire à l'apprentissage d'une notion


class Program extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputTraining:'',
            hNumber:0,
            focusUnit:0
            };
            this.onChangeLearning=this.onChangeLearning.bind(this);
            this.onChangeHours=this.onChangeHours.bind(this);
            this.programCalculate=this.programCalculate.bind(this);
    }

    onChangeLearning(e){
        e.preventDefault();
        this.state = {
            inputTraining:e.target.value,
        }
    }

    onChangeHours(e){
        e.preventDefault();
        this.state = {
            hNumber:e.target.value,
        }
    }

    programCalculate(e){
        e.preventDefault();
        this.state = {
            focusUnit:e.target.value,
        }

    }
    render() {
        
        return (
            <div>
              
                <h1 align="center">Learn Program</h1>
                <form className="form-hor">
                    <input
                        type="text"
                        placeholder="Thing to learn"
                        onChange={this.onChangeLearning}
                        className="form-control nb-2"
                    />

                    <input
                        type="number"
                        placeholder="hours dedicated"
                        onChange={this.onChangeHours}
                        className="form-control nb-2"
                    />
                    <button
                        onClick={this.programCalculate}
                        className="btn btn-primary"
                    >
                        calculate
                    </button>
                </form>
            
            </div>
        );
    }
}

export default Program;