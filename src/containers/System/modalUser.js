import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ProductManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      gender: "",
      roleId: "",
    };
  }
  handleOnChangeInput = (event, id) => {
    // this.state[id]= event.target.value;
    //   this.setState({
    //      ...this.setState
    //   },()=>{
    //       console.log("event value: ",this.state);
    //   });
    // bad code

    let copyState = { ...this.state };
    copyState[id] = event.target.value;

    this.setState({
      ...copyState
    })
    //good code
  }
  componentDidMount() { }

  toggle = () => {
    this.props.closeModal();
  }

  checkValidInput = () => {
    let isValid=true;
    let arrInput = ['email', 'password','firstName', 'lastName','address','phoneNumber','gender','roleId'];
    for(let i=0;i< arrInput.length;i++){
      if(!this.state[arrInput[i]]){
        isValid = false;
        alert("Missing input parameter : "+ arrInput[i]);
        break;
      }
    }
    return isValid;
  }

  handleCreateNewUser = () => {
    let isValid=this.checkValidInput();
    if(isValid===true) {
      this.props.createNewUser(this.state);
    }
  }
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        size="md"
        centered
      >
        <ModalHeader toggle={() => this.toggle()}>Create new user</ModalHeader>
        <ModalBody>
          <div className="form-row">
            <div className="form-group">
              <label for="inputEmail">Email</label>
              <input type="email" 
              className="form-control" 
              name="email" 
              placeholder="Email" 
              value={this.state.email} 
              onChange={(event) => this.handleOnChangeInput(event, "email")} />
            </div>
            <div className="form-group">
              <label for="inputPassword">Password</label>
              <input type="password" 
              className="form-control" 
              name="password" 
              placeholder="Password" 
              value={this.state.password} 
              onChange={(event) => this.handleOnChangeInput(event, "password")} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label for="inputEmail">First Name</label>
              <input type="text" 
              className="form-control"
               name="firstName" 
               placeholder="First Name" 
               value={this.state.firstName} 
               onChange={(event) => this.handleOnChangeInput(event, "firstName")} />
            </div>
            <div className="form-group">
              <label for="inputPassword">Last Name</label>
              <input type="text" 
              className="form-control"
               name="lastName" 
               placeholder="Last Name" 
               value={this.state.lastName} 
               onChange={(event) => this.handleOnChangeInput(event, "lastName")} />
            </div>
          </div>
          <div className="form-group ">
            <label for="inputAddress">Address</label>
            <input type="text" 
            className="form-control" 
            name="address"
             placeholder="1234 Main St" 
             value={this.state.address} 
             onChange={(event) => this.handleOnChangeInput(event, "address")} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label for="inputCity">Phone Number</label>
              <input type="text" 
              className="form-control" 
              name="phoneNumber" 
              value={this.state.phoneNumber} 
              onChange={(event) => this.handleOnChangeInput(event, "phoneNumber")} />
            </div>
            <div className="form-group col-md-6">
              <label for="inputState">Sex</label>
              <select id="inputState" 
              className="form-control" 
              name="gender" 
              value={this.state.gender} 
              onChange={(event) => this.handleOnChangeInput(event, "gender")}>
                <option ></option>
                <option value="1" >Female</option>
                <option value="0">Male</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label for="inputState">Role</label>
              <select id="inputState" 
              className="form-control" 
              name="roleId" 
              value={this.state.roleId} 
              onChange={(event) => this.handleOnChangeInput(event, "roleId")}>
                <option ></option>
                <option value="1">Admin</option>
                <option value="2">Doctor</option>
                <option value="3" >Patient</option>
              </select>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.handleCreateNewUser()}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={() => this.toggle()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
