import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";

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
                     <div className="section-share section-handBook">
                            <div className="handBook-container">
                                   <div className="handBook-header">
                                          <span className="title-section">Cẩm nang</span>
                                          <button className="btn-section">Xem tất cả</button>
                                   </div>
                                   <div className="handBook-body">
                                          <Slider {...settings} >
                                                 <div className="handBook-customize">
                                                        <div className="bg-image" />
                                                        <div className="title-bg">
                                                               <h6> Cắt trĩ bao nhiêu tiền tại Hà Nội? Phẫu thuật cắt trĩ có được bảo hiểm không?</h6>
                                                        </div>
                                                 </div>

                                                 <div className="handBook-customize">
                                                        <div className="bg-image" />
                                                        <div className="title-bg">
                                                               <h6> Chi phí khám, tư vấn, điều trị bệnh trầm cảm</h6>
                                                        </div>
                                                 </div>

                                                 <div className="handBook-customize">
                                                        <div className="bg-image" />
                                                        <div className="title-bg">
                                                               <h6> Bệnh trầm cảm: dấu hiệu, nguyên nhân và cách điều trị</h6>
                                                        </div>
                                                 </div>

                                                 <div className="handBook-customize">
                                                        <div className="bg-image" />
                                                        <div className="title-bg">
                                                               <h6> Da bị dị ứng thời tiết: Nguyên nhân? Dấu hiệu? Đi khám ở đâu tốt</h6>
                                                        </div>
                                                 </div>
                                                 <div className="handBook-customize">
                                                        <div className="bg-image" />
                                                        <div className="title-bg">
                                                               <h6> Da bị dị ứng thời tiết: Nguyên nhân? Dấu hiệu? Đi khám ở đâu tốt</h6>
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

export default connect(mapStateToProps, mapDispatchToProps)(handBook);
