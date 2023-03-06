import { include } from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {getAllUsers,handleCreateNewUser} from '../../services/userService';
import  ModalUser  from './modalUser';
import './userManage.scss';
class UserManage extends Component {

    constructor(props){
            super(props);
            this.state = {
                arrUsers:[],
                isOpenModalUser: false
            }
    }
    async componentDidMount() {
      await this.getAllUserFromReact();
    }
    getAllUserFromReact=async () =>{
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
createNewUser = async(data)  =>{
    try {
        let response= await handleCreateNewUser(data);
        if(response &&response.errCode !==0){
            alert(response.message);
        }else{
            await this.getAllUserFromReact();
            alert("Create new user succeeded");
            this.setState({
                 isOpenModalUser:false
            })
           
        }
        console.log("response create user: ",response)
    } catch (e) {
        console.log("e")
    }

    console.log("check data from child", data)
}

    render() {
        console.log("check all user",this.state)
        let arrUsers= this.state.arrUsers;
        return (
            <div className="user-container ">
                <ModalUser
                        isOpen={this.state.isOpenModalUser}
                        closeModal={this.toggleModalUser}
                        createNewUser={this.createNewUser}
                />
                <div className="title text-center">
                    Hoc react JS
                </div>
                <div className="customers mt-3 mx-3">
                    <div className="mx-1">
                        <button className="btn btn-primary px-2 mb-2"
                        onClick={()=>this.handleAddNewUser()}>
                            <i className="fas fa-plus px-1 "></i>Add a new user</button>
                    </div>
                    <table id="customers">
                        <tbody>
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
                                            <button className='btn-edit' ><i className="fas fa-user-edit"></i></button>
                                            <button className='btn-delete'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
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
