import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./outstandingDoctor.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class outstandingDoctor extends Component {

       render() {
              let settings = {
                     dots: false,
                     infinite: true,
                     speed: 500,
                     slidesToShow: 4,
                     slidesToScroll: 1
              };

              return (
                     <div className="section-outstandingDoctor">
                            <div className="outstandingDoctor-container">
                                   <div className="outstandingDoctor-header">
                                          <span className="title-section">Bác sĩ nổi bật tuần qua</span>
                                          <button className="btn-section">Xem Thêm</button>
                                   </div>
                                   <div className="outstandingDoctor-body">
                                          <Slider {...settings} >
                                                 <div className="outstandingDoctor-customize">
                                                        <div className="bg-image" />
                                                        <div className='position'>
                                                               <div className="nameDoctor">Phó giáo sư tiến sĩ Bi Bảo</div>
                                                               <div className="specialize">Khám tổng quát</div>
                                                        </div>

                                                 </div>
                                                 <div className="outstandingDoctor-customize">
                                                        <div className="bg-image" />
                                                        <div className='position'>
                                                               <div className="nameDoctor">Phó giáo sư tiến sĩ Bi Bảo</div>
                                                               <div className="specialize">Khám tổng quát</div>
                                                        </div>
                                                 </div>
                                                 <div className="outstandingDoctor-customize">
                                                        <div className="bg-image" />
                                                        <div className='position'>
                                                               <div className="nameDoctor">Phó giáo sư tiến sĩ Bi Bảo</div>
                                                               <div className="specialize">Khám tổng quát</div>
                                                        </div>
                                                 </div>
                                                 <div className="outstandingDoctor-customize">
                                                        <div className="bg-image" />
                                                        <div className='position'>
                                                               <div className="nameDoctor">Phó giáo sư tiến sĩ Bi Bảo</div>
                                                               <div className="specialize">Khám tổng quát</div>
                                                        </div>
                                                 </div>
                                                 <div className="outstandingDoctor-customize">
                                                        <div className="bg-image" />
                                                        <div className='position'>
                                                               <div className="nameDoctor">Phó giáo sư tiến sĩ Bi Bảo</div>
                                                               <div className="specialize">Khám tổng quát</div>
                                                        </div>
                                                 </div>
                                                 <div className="outstandingDoctor-customize">
                                                        <div className="bg-image" />
                                                        <div className='position'>
                                                               <div className="nameDoctor">Phó giáo sư tiến sĩ Bi Bảo</div>
                                                               <div className="specialize">Khám tổng quát</div>
                                                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(outstandingDoctor);
