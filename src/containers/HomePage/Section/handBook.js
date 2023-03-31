import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./handBook.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class handBook extends Component {

       render() {
              let settings = {
                     dots: false,
                     infinite: true,
                     speed: 500,
                     slidesToShow: 2,
                     slidesToScroll: 1
              };

              return (
                     <div className="section-handBook">
                            <div className="handBook-container">
                                   <div className="handBook-header">
                                          <span className="title-section">Cẩm nang</span>
                                          <button className="btn-section">Xem tất cả</button>
                                   </div>
                                   <div className="handBook-body">
                                          <Slider {...settings} >
                                                 <div className="handBook-customize">
                                                        <div className="bg-image" />
                                                        <h6> Cơ xương khớp 1</h6>
                                                 </div>
                                                 <div className="handBook-customize">
                                                        <div className="bg-image" />
                                                        <h6>Cơ xương khớp 2</h6>
                                                 </div>
                                                 <div className="handBook-customize">
                                                        <div className="bg-image" />
                                                        <h6>Cơ xương khớp 3</h6>
                                                 </div>
                                                 <div className="handBook-customize">
                                                        <div className="bg-image" />
                                                        <h6>Cơ xương khớp 4</h6>
                                                 </div>
                                                 <div className="handBook-customize">
                                                        <div className="bg-image" />
                                                        <h6>Cơ xương khớp 5</h6>
                                                 </div>
                                                 <div className="handBook-customize">
                                                        <div className="bg-image" />
                                                        <h6>Cơ xương khớp 6</h6>
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

export default connect(mapStateToProps, mapDispatchToProps)(handBook);
