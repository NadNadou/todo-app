import React, { Component } from 'react';
import './Focus.css';
import TodoList from '../components/TodoList';
import Program from '../components/Program';

class Focus extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hStart: 0,
            minStart: 0,
            hEnd: 0,
            minEnd: 0,
            hTotal: 0,
            inputTraining:'test',// nom du programme à apprendre
            focusTarget: 0,//objectif de concentration
            hFocus: 0, //conversion de 25 min en heure (produit en croix),

            hours:[
                {id: 0,label:'00'},
                {id: 1,label:'01'},
                {id: 2,label:'02'},
                {id: 3,label:'03'},
                {id: 4,label:'04'},
                {id: 5,label:'05'},
                {id: 6,label:'06'},
                {id: 7,label:'07'},
                {id: 8,label:'08'},
                {id: 9,label:'09'},
                {id: 10,label:'10'},
                {id: 11,label:'11'},
                {id: 12,label:'12'},
                {id: 13,label:'13'},
                {id: 14,label:'14'},
                {id: 15,label:'15'},
                {id: 16,label:'16'},
                {id: 17,label:'17'},
                {id: 18,label:'18'},
                {id: 19,label:'19'},
                {id: 20,label:'20'},
                {id: 21,label:'21'},
                {id: 22,label:'22'},
                {id: 23,label:'23'},
                ],
            mins:[
                {id: 0,label:'00'},
                {id: 1,label:'05'},
                {id: 2,label:'10'},
                {id: 3,label:'15'},
                {id: 4,label:'20'},
                {id: 5,label:'25'},
                {id: 6,label:'30'},
                {id: 7,label:'35'},
                {id: 8,label:'40'},
                {id: 9,label:'45'},
                {id: 10,label:'50'},
                {id: 11,label:'55'},
                ],
        };
        this.onChangeLearning = this.onChangeLearning.bind(this);
        this.changeHourStart = this.changeHourStart.bind(this);
        this.changeMinStart = this.changeMinStart.bind(this);
        this.changeHourEnd = this.changeHourEnd.bind(this);
        this.changeMinEnd = this.changeMinEnd.bind(this);
        this.focusTime = this.focusTime.bind(this);
        this.changeFocus = this.changeFocus.bind(this);
    }

    onChangeLearning(e){
        e.preventDefault();
        this.state = {
            inputTraining:e.target.value,
        }
    }

    changeHourStart(e) {
        this.setState({
            hStart: e.target.value
        })
    }

    changeHourEnd(e) {
        this.setState({
            hEnd: e.target.value
        })
    }

    changeMinStart(e) {
        this.setState({
            minStart: e.target.value
        })
    }

    changeMinEnd(e) {
        this.setState({
            minEnd: e.target.value
        })
    }
 
    changeFocus(e) {
        e.preventDefault();
        this.setState({
            focusTarget: e.target.value,
            hFocus: e.target.value/60
        });
    }

    focusTime(e) {
        e.preventDefault();

        this.setState({
            hTotal:
                [Math.trunc(
                    ((this.state.hEnd - this.state.hStart) + (this.state.minEnd - this.state.minStart) / 60) / this.state.hFocus
                )]// faire en sorte de convertir les minutes en heures donc de retirer le "60" de la formule  
        });

    }

    render() {
        var inputFields = [];
        for (var i = 0; i < this.state.hTotal; i++) {
            inputFields.push(
                <ul key={i}>
                    <input 
                        key={i} 
                        placeholder={this.state.inputTraining}
                        className="list-group"
                     />
                </ul>
            )
        }

        //liste déroulante heures
        const hoursList =this.state.hours.map((hour,i)=>{
        return(
            <option key={hour.id} value={hour.label}>{hour.label} </option>
        )}
        );

        //liste déroulante minutess
        const minsList =this.state.mins.map((min,i)=>{
        return(
            <option key={min.id} value={min.label}>{min.label} </option>
        )}
        );

        return (
            <div>

                <div className="card" >
                    <div className="card-body">
                        <h1 className="card-title text-center">Learning Program</h1>
                        <h6 className="card-subtitle mb-2 text-muted text-center">Goal : schedule work</h6>

                        <form className="form-group row">

                            <label className="col-sm-2 col-form-label">What do you want to learn ?</label>
                            
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    placeholder="Thing to learn"
                                    onChange={this.onChangeLearning}
                                    className="form-control nb-2"
                                />
                            </div>

                            <label className="col-sm-2 col-form-label">Availibity ?</label>
                            
                            <div class="col-sm-10">
                                <label className="col-sm-2 col-form-label">Start :</label>
                                <select onChange={this.changeHourStart}> {hoursList} </select>
                                h
                                <select onChange={this.changeMinStart} > {minsList} </select>


                                <label className="col-sm-2 col-form-label">End :</label>
                                <select onChange={this.changeHourEnd}> {hoursList} </select>
                                h
                                <select onChange={this.changeMinEnd} > {minsList} </select>

                            </div>

                            <label className="col-sm-2 col-form-label">Focus time ?</label>

                            <div class="col-sm-10">
                                <input type="number" placeholder="focus" onChange={this.changeFocus}></input> 
                            </div>
                            <div class="col-sm-10 text-center button-content">
                                <button onClick={this.focusTime} className="btn btn-primary" >Focus ME</button>
                            </div>
                            
                        </form>

                        <div>{inputFields}</div>
        
                    </div>
                </div>

                {/* <div>Périodes de concentration :
                    {this.state.hTotal} périodes de concentration de {this.state.focusTarget} minutes.
        
                </div> */}
            

            </div>

        );
    }
}

export default Focus;