import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
class healthFacilities extends Component {

       render() {
              return (
                     <div className="section-share section-specialty">
                            <div className="section-container">
                                   <div className="section-header">
                                          <span className="title-section">Chuyên khoa phổ biến</span>
                                          <button className="btn-section">Xem Thêm</button>
                                   </div>
                                   <div className="section-body">
                                          <Slider {...this.props.settings} >
                                                 <div className="section-customize">
                                                        <div className="bg-image section-healthFacilities" />
                                                        <h6> Cơ sở Thu Cúc 1</h6>
                                                 </div>
                                                 <div className="section-customize">
                                                        <div className="bg-image section-healthFacilities" />
                                                        <h6>Cơ sở Thu Cúc 2</h6>
                                                 </div>
                                                 <div className="section-customize">
                                                        <div className="bg-image section-healthFacilities" />
                                                        <h6>Cơ sở Thu Cúc 3</h6>
                                                 </div>
                                                 <div className="section-customize">
                                                        <div className="bg-image section-healthFacilities" />
                                                        <h6>Cơ sở Thu Cúc 4</h6>
                                                 </div>
                                                 <div className="section-customize">
                                                        <div className="bg-image section-healthFacilities" />
                                                        <h6>Cơ sở Thu Cúc 5</h6>
                                                 </div>
                                                 <div className="section-customize">
                                                        <div className="bg-image section-healthFacilities" />
                                                        <h6>Cơ sở Thu Cúc 6</h6>
                                                 </div>
                                          </Slider>
                                   </div>

                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(healthFacilities);
