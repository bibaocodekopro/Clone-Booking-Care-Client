import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {

       render() {

              return (
                     <div className="section-share section-about">
                            <div className="section-about-header">
                                   <span>Truyền thông nói gì về BookingCare</span>
                            </div>
                            <div className="section-about-content">
                                   <div className="content-left">
                                          <iframe width="100%" height="400px" src="https://www.youtube.com/embed/FyDQljKtWnI"
                                                 title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                                                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                 allowfullscreen></iframe>
                                   </div>
                                   <div className="content-right">
                                          <p>Đây là một dự án nhằm mục đích học về ReactJS và NodeJS. Mọi việc làm trong trang web này được làm lại từ trang web bookingcare.vn nhằm mục đích học tập.</p>
                                          <p>  Mọi thông tin cần liên lạc vui lòng gửi qua :</p>
                                          <p>Email:quocbao2116@gmail.com </p>

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

export default connect(mapStateToProps, mapDispatchToProps)(About);
