import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from "./Section/Specialty";
import Facilities from "./Section/healthFacilities";
import Doctor from "./Section/outstandingDoctor";
import HandBook from "./Section/handBook";
class HomePage extends Component {

       render() {


              return (
                     <div>
                            <HomeHeader />
                            <Specialty />
                            <Facilities />
                            <Doctor />
                            <HandBook />
                            <div style={{ height: '300px' }}></div>
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
