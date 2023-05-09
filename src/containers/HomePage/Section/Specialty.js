import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
class Specialty extends Component {

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
                                                        <div className="bg-image section-specialty" />
                                                        <h6> Cơ xương khớp 1</h6>
                                                 </div>
                                                 <div className="section-customize">
                                                        <div className="bg-image section-specialty" />
                                                        <h6>Cơ xương khớp 2</h6>
                                                 </div>
                                                 <div className="section-customize">
                                                        <div className="bg-image section-specialty" />
                                                        <h6>Cơ xương khớp 3</h6>
                                                 </div>
                                                 <div className="section-customize">
                                                        <div className="bg-image section-specialty" />
                                                        <h6>Cơ xương khớp 4</h6>
                                                 </div>
                                                 <div className="section-customize">
                                                        <div className="bg-image section-specialty" />
                                                        <h6>Cơ xương khớp 5</h6>
                                                 </div>
                                                 <div className="section-customize">
                                                        <div className="bg-image section-specialty" />
                                                        <h6>Cơ xương khớp 6</h6>
                                                 </div>
                                          </Slider>
                                   </div>

                            </div>
                     </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
