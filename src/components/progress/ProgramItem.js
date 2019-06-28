import React, { Component } from 'react';
import './ProgramItem.css';

import closeIcon from '../../img/close-tool.png'
import axios from "axios";

class ProgramItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            toolUrl : '',
            toolIdx : 0,
            login : this.props.login,
            finalCheck : this.props.finalCheck,
            projectIdx : this.props.projectIdx
        }
    }

    componentDidMount() {
        this.setState({
            finalCheck : this.props.finalCheck
        })
    }

    componentWillReceiveProps(nextProps){
        //console.log(JSON.stringify(nextProps.defaultGisu))
        this.setState({
            finalCheck : nextProps.finalCheck
        })
        //
    }

    // handleDeleteUrl = (data) => {
    //     const dataState = this.state.toolIdx
    //     this.setState({
    //         toolIdx : data
    //     })
    //
    //     const apiUrl = 'https://yappian.com/api/project/'+ this.state.projectIdx+'/url/'+dataState;
    //
    //     axios.delete(apiUrl)
    //         .then(res => {
    //                 this.props.handleGetUrl();
    //             }
    //         )
    //         .catch(error => {console.log(error)});
    // }

    handleDeleteUrl = (data) => {
        const { projectIdx } = this.state;
        const apiUrl = `https://yappian.com/api/project/` + projectIdx + `/url/`+data;

        axios.delete(apiUrl)
            .then(res => {
                    this.props.handleGetUrl();
                }
            )
            .catch(error => {console.log(error)});

    }


    handleToolUrlClick = (data) => {
        window.location = data
    }


    render(){
        return (
            (
                this.props.toolList.map((tool, index) => (
                    <div className="programItemWrapper" key={index}>
                        {this.state.login === true && this.state.finalCheck === 'N' ? (
                            <div className="closeIconWrapper" onClick={() => this.handleDeleteUrl(tool.idx)}>
                                <img className="closeIconStyled" src={closeIcon}/>
                            </div>
                        ) : ''}
                        <div className={
                            this.state.login === true && this.state.finalCheck === 'N' ?
                                'centerAligned'
                                :
                                'centerAligned toCenterTitle'
                                }
                             onClick={() => this.handleToolUrlClick(tool.contents)}>
                            {tool.title}
                        </div>
                    </div>
                ))
            )
        );
    }
}


export default ProgramItem;