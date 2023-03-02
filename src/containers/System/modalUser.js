import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ProductManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  toggle = () => {
    this.props.closeModal();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"abcClassName"}
        size="lg"
        centered
      >
        <ModalHeader toggle={() => this.toggle()}>Create new user</ModalHeader>
        <ModalBody>
                <div className="container">
                      <div className="row">
                              <div className="col-6 form-group">
                                      <label type="text">Email</label>
                                      <input></input>
                              </div>
                                 <div className="col-6 form-group">
                                      <label type="text">password</label>
                                      <input></input>
                                      
                              </div>
                      </div>
                </div>
         
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.toggle()}>
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
