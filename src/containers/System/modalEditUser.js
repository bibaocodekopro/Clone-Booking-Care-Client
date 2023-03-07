import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import lodash from 'lodash';
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",


    };
  }

  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;

    this.setState({
      ...copyState,
    });
  };

  componentDidMount() {
    let user = this.props.currentUser;
    if (user && !lodash.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: 'harcode',
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        phoneNumber: user.phoneNumber,

      })
    }
  }

  toggle = () => {
    this.props.closeModal();
  };

  checkValidInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phoneNumber",

    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing input parameter : " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleSaveUser = () => {
    let isValid = this.checkValidInput();
    if (isValid === true) {
      //call api edit user
      this.props.editUser(this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        size="md"
        centered
      >
        <ModalHeader toggle={() => this.toggle()}>edit  user</ModalHeader>
        <ModalBody>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(event) => this.handleOnChangeInput(event, "email")}
                disabled />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={(event) => this.handleOnChangeInput(event, "password")}
                disabled />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="inputEmail">First Name</label>
              <input type="text"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={(event) => this.handleOnChangeInput(event, "firstName")} />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Last Name</label>
              <input type="text"
                className="form-control"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={(event) => this.handleOnChangeInput(event, "lastName")} />
            </div>
          </div>
          <div className="form-group ">
            <label htmlFor="inputAddress">Address</label>
            <input type="text"
              className="form-control"
              name="address"
              placeholder="1234 Main St"
              value={this.state.address}
              onChange={(event) => this.handleOnChangeInput(event, "address")} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="inputCity">Phone Number</label>
              <input type="text"
                className="form-control"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={(event) => this.handleOnChangeInput(event, "phoneNumber")} />
            </div>

          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.handleSaveUser()}>
            Save Changes
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
