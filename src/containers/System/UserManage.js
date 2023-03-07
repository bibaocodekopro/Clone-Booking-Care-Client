import { include } from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers, handleCreateNewUser, deleteUserServices, editUserDataServices } from '../../services/userService';
import ModalUser from './modalUser';
import ModalEditUser from './ModalEditUser';
import './userManage.scss';
import { emitter } from "../../utils/emitter"
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            userEdit: [],
            isOpenEditUser: false,

        }
    }
    async componentDidMount() {
        await this.getAllUserFromReact();
        //   await this.getOneUserFromReact();
    }
    getAllUserFromReact = async () => {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }
    handleEditUser = (user) => {
        this.setState({
            isOpenEditUser: true,
            userEdit: user
        })
    }

    toggleModalUser = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,

        })
    }
    toggleModalEditUser = () => {
        this.setState({
            isOpenEditUser: !this.state.isOpenEditUser,
        })
    }
    createNewUser = async (data) => {
        try {
            let response = await handleCreateNewUser(data);
            if (response && response.errCode !== 0) {
                alert(response.message);
            } else {
                await this.getAllUserFromReact();
                alert("Create new user succeeded");
                this.setState({
                    isOpenModalUser: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA');
            }
        } catch (e) {
            console.log(e)
        }

        console.log("check data from child", data)
    }
    // getOneUserFromReact = async(id)=>{
    //     let response = await editUserServices(id);
    //     if (response && response.errCode===0){
    //         this.setState({
    //             editUser :response.oneUser
    //         })
    //     }
    // }
    handleDeleteUser = async (id) => {
        console.log("delete User: ", id)
        try {
            let response = await deleteUserServices(id);
            if (response && response.errCode === 0) {
                await this.getAllUserFromReact();
                alert("delete successfully");

            } else {
                alert(response.errMessage);
            }
        } catch (e) {
            console.log(e)
        }
    }

    doEditUser = async (user) => {
        try {
            let response = await (editUserDataServices(user));
            if (response && response.errCode === 0) {
                await this.getAllUserFromReact();
                this.setState({
                    isOpenEditUser: !this.state.isOpenEditUser,
                })
                alert("Update information successfully")
            } else {
                this.setState({
                    isOpenEditUser: !this.state.isOpenEditUser,
                })
                alert(response.errMessage)
            }
        } catch (e) {
            console.log(e)
        }

    }

    render() {
        console.log("Check all data: ", this.state)
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container ">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    closeModal={this.toggleModalUser}
                    createNewUser={this.createNewUser}
                />
                {
                    this.state.isOpenEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenEditUser}
                        closeModal={this.toggleModalEditUser}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser}
                    />
                }
                <div className="title text-center">
                    Hoc react JS
                </div>
                <div className="customers mt-3 mx-3">
                    <div className="mx-1">
                        <button className="btn btn-primary px-2 mb-2"
                            onClick={() => this.handleAddNewUser()}>
                            <i className="fas fa-plus px-1 "></i>Add a new user</button>
                    </div>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrUsers && arrUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit' onClick={() => this.handleEditUser(item)} ><i className="fas fa-user-edit"></i></button>
                                            <button className='btn-delete' onClick={() => this.handleDeleteUser(item.id)} ><i className="fas fa-trash-alt"></i></button>
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
