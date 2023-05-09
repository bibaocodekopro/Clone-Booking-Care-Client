import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from "./Section/Specialty";
import Facilities from "./Section/healthFacilities";
import Doctor from "./Section/outstandingDoctor";
import HandBook from "./Section/handBook";
import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HomePage extends Component {

       render() {
              let settings = {
                     dots: false,
                     infinite: true,
                     speed: 500,
                     slidesToShow: 4,
                     slidesToScroll: 1
              };

              return (
                     <div>
                            <HomeHeader />
                            <Specialty
                                   settings={settings}
                            />
                            <Facilities
                                   settings={settings}
                            />
                            <Doctor
                                   settings={settings}
                            />
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
