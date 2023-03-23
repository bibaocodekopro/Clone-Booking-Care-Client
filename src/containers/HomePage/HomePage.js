import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from "./Section/Specialty";
import healthFacilities from "./Section/healthFacilities";
class HomePage extends Component {

       render() {


              return (
                     <div>
                            <HomeHeader />
                            <Specialty />
                            <healthFacilities />
                     </div>
              );
       }

}

const mapStateToProps = state => {
       return {
              isLoggedIn: state.user.isLoggedIn
       };
};

const mapDispatchToProps = dispatch => {
       return {
       };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
