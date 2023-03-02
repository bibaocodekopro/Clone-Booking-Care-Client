import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './userManage.scss';
import {getAllUsers} from '../../services/userService';
import  ModalUser  from './modalUser';
class UserManage extends Component {

    constructor(props){
            super(props);
            this.state = {
                arrUsers:[],
                isOpenModalUser: false
            }
    }
    async componentDidMount() {
        let response= await getAllUsers('ALL');
        if(response && response.errCode===0){
            this.setState({
                arrUsers: response.users
            }) 
        }   
    }
handleAddNewUser = ()=>{
    this.setState({
        isOpenModalUser:true
    })
}
toggleModalUser = ()=>{
       this.setState({
        isOpenModalUser:!this.state.isOpenModalUser,
       })
}

    render() {
        console.log('check user',this.state);
        let arrUsers= this.state.arrUsers;
        return (
            <div className="user-container ">
                <ModalUser
                        isOpen={this.state.isOpenModalUser}
                        closeModal={this.toggleModalUser} 
                />
                <div className="title text-center">
                    Hoc react JS
                </div>
                <div className="customers mt-3 mx-3">
                    <div className="mx-1">
                        <button className="btn btn-primary px-2"
                        onClick={()=>this.handleAddNewUser()}>
                            <i class="fas fa-plus px-1"></i>Add a new user</button>
                    </div>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                        {arrUsers && arrUsers.map((item,index)=>{
                            return (
                                <tr>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                            <button className='btn-edit' ><i class="fas fa-user-edit"></i></button>
                                            <button className='btn-delete'><i class="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                 
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
