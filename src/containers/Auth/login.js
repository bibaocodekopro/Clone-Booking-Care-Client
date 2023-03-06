import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./login.scss";
import { FormattedMessage } from "react-intl";
import { handleLoginApi } from '../../services/userService';
import { Form } from "reactstrap";
import { isError } from "util";
import { userLoginSuccess } from "../../store/actions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isShowPassword: false,
            errMessage: ''
        };
    }
    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })

        try {
            let data= await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errorCode !== 0){
                this.setState({errMessage: data.message}) 
            }
            if(data && data.errCode ===0){
               this.props.userLoginSuccess(data.user) 
                console.log("login success")
            }
        } catch (error) {
          if (error.response){
            if(error.response.data){
                this.setState({
                    errMessage: error.response.data.message
                })
            }
          }
          console.log('bibao : ',error.response)
        }
    }

    render() {
        return (

            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 login-text">Login</div>
                        <div className="col-12 form-group login-input">
                            <div className="col-12" style={{color:'red',fontWeight: 'bold',textAlign:'center'}}>
                            {this.state.errMessage}
                        </div>
                            <label>Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="enter your username"
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="enter your password"
                                value={this.state.password}
                                onChange={(event) => this.handleOnChangePassword(event)}
                            />
                        </div>
                        <div className="col-12">
                            <button className="btn-login" onClick={() => this.handleLogin()}>Login</button>
                        </div>
                         
                        <div className="col-12 forgot-password">
                            <span>Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <span>Or login with: </span>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (path) => dispatch(push(path)),
        
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
