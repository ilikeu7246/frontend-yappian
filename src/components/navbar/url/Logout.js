import React, { Component } from 'react'

import './index.css'
import otherIcon from "../../../img/invalid-name@3x.png";
import user from "../../../img/user-icon-gray@3x.png";
import MemberInfo from "../../popup/MemberInfo";
import OtherPopup from "../../popup/OtherPopup"



class Logout extends Component {
    constructor(props){
        super(props)

        this.state = {
            memberInfoPopup : false,
            otherPopup : false,
            redirect : this.props.redirect,
            projectIdx : this.props.projectIdx,
            finalCheck : this.props.finalCheck,
            login: this.props.login,
            joinMember : this.props.joinMember
        }

    }

    componentDidMount() {
        this.setState({
            joinMember : this.props.joinMember,
            finalCheck : this.props.finalCheck,
            redirect : this.props.redirect
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            joinMember : nextProps.joinMember,
            finalCheck : nextProps.finalCheck,
            redirect : nextProps.redirect
        })
        //
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }



    openMemberInfoPopup = () => {
        this.setState({
            memberInfoPopup : true
        })
    }

    closeMemberInfoPopup = () => {
        this.setState({
            memberInfoPopup : false
        })
    }

    openOtherPopup = () => {
        this.setState({
            otherPopup : true
        })
    }

    closeOtherPopup = () => {
        this.setState({
            otherPopup : false
        })
    }

    redirectToUrl = () => {
        this.props.redirectToUrl()
    }


    render(){

        return(

            <div className="right">

                {
                    this.state.finalCheck === 'N'? (
                        <div>
                            <img src={otherIcon} className="otherIcon" onClick={this.openOtherPopup}/>
                            <OtherPopup
                                openOtherPopup={this.openOtherPopup}
                                closeOtherPopup={this.closeOtherPopup}
                                otherPopup={this.state.otherPopup}
                                projectIdx={this.state.projectIdx}
                                redirectToUrl={this.redirectToUrl}
                                login={this.state.login}
                                joinMember={this.props.joinMember}
                            />
                        </div>

                    ) : ''
                }

                <div>
                    <img src={user} className="userIcon" onClick={this.openMemberInfoPopup}/>
                    <MemberInfo login={this.props.login}
                                openMemberInfoPopup={this.openMemberInfoPopup}
                                closeMemberInfoPopup={this.closeMemberInfoPopup}
                                memberInfoPopup={this.state.memberInfoPopup} />
                </div>

            </div>
        );
    }
}

export default Logout;