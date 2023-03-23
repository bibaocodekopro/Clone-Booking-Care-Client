import React, { Component } from "react";
import { connect } from "react-redux";
import "./healthFacilities.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class healthFacilities extends Component {

       render() {
              return (
                     <div>asdasdasd</div>
              );
       }
}

const mapStateToProps = (state) => {
       return {
              isLoggedIn: state.user.isLoggedIn,
              language: state.app.language,
       };
};

const mapDispatchToProps = (dispatch) => {
       return {

       };
};

export default connect(mapStateToProps, mapDispatchToProps)(healthFacilities);
