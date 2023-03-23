import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { LANGUAGES } from "../../utils";
import { changeLanguageApp } from "../../store/actions";

class HomeHeader extends Component {
       changeLanguage = (language) => {
              this.props.changeLanguageAppRedux(language);
              //fire redux event: actions
       };

       render() {
              let language = this.props.language;
              return (
                     <React.Fragment>
                            <div className="home-header-container">
                                   <div className="home-header-content">
                                          <div className="left-content">
                                                 <i className="fas fa-bars"></i>
                                                 <div className="header-logo"></div>
                                          </div>

                                          <div className="center-content">
                                                 <div className="child-content">
                                                        <div>
                                                               <b>
                                                                      <FormattedMessage id="homeHeader.specialty" />
                                                               </b>
                                                        </div>
                                                        <div className="subs-title">
                                                               <FormattedMessage id="homeHeader.searchDoctor" />{" "}
                                                        </div>
                                                 </div>
                                                 <div className="child-content">
                                                        <div>
                                                               <b>
                                                                      <FormattedMessage id="homeHeader.healthFacilities" />
                                                               </b>
                                                        </div>
                                                        <div className="subs-title">
                                                               <FormattedMessage id="homeHeader.ChooseHospitalClinic" />
                                                        </div>
                                                 </div>
                                                 <div className="child-content">
                                                        <div>
                                                               <b>
                                                                      <FormattedMessage id="homeHeader.doctor" />
                                                               </b>
                                                        </div>
                                                        <div className="subs-title">
                                                               <FormattedMessage id="homeHeader.selectDoctor" />
                                                        </div>
                                                 </div>
                                                 <div className="child-content">
                                                        <div>
                                                               <b>
                                                                      <FormattedMessage id="homeHeader.fee" />
                                                               </b>
                                                        </div>
                                                        <div className="subs-title">
                                                               <FormattedMessage id="homeHeader.checkHealth" />
                                                        </div>
                                                 </div>
                                          </div>

                                          <div className="right-content">
                                                 <div className="support">
                                                        <i className="fas fa-question-circle"></i>
                                                        <i>
                                                               <FormattedMessage id="homeHeader.support" />
                                                        </i>
                                                 </div>
                                                 <div
                                                        className={
                                                               language === LANGUAGES.VI
                                                                      ? "language-vi active"
                                                                      : "language-vi"
                                                        }
                                                 >
                                                        <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                                                               VN
                                                        </span>
                                                 </div>
                                                 <div
                                                        className={
                                                               language === LANGUAGES.EN
                                                                      ? "language-en active"
                                                                      : "language-en"
                                                        }
                                                 >
                                                        <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                                                               EN
                                                        </span>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            <div className="home-header-banner">
                                   <div className="content-up">
                                          <div className="title1">
                                                 <FormattedMessage id="banner.medicalBackground" />
                                          </div>
                                          <div className="title2">
                                                 <FormattedMessage id="banner.comprehensiveHealthCare" />
                                          </div>
                                          <div className="search">
                                                 <i className="fas fa-search"></i>
                                                 <input
                                                        type="text"
                                                        className=""
                                                        placeholder="Tìm chuyên khoa khám bệnh"
                                                 ></input>
                                          </div>
                                   </div>

                                   <div className="content-down">
                                          <div className="options">
                                                 <div className="option-child">
                                                        <div className="icon-child">
                                                               <i className="far fa-hospital"></i>
                                                        </div>
                                                        <div className="text-child">
                                                               <FormattedMessage id="chooseList.specialistExam" />
                                                        </div>
                                                 </div>
                                                 <div className="option-child">
                                                        <div className="icon-child">
                                                               <i className="fas fa-mobile-alt"></i>
                                                        </div>
                                                        <div className="text-child">
                                                               <FormattedMessage id="chooseList.remoteMedicalExamination" />
                                                        </div>
                                                 </div>
                                                 <div className="option-child">
                                                        <div className="icon-child">
                                                               <i className="fas fa-procedures"></i>
                                                        </div>
                                                        <div className="text-child">
                                                               <FormattedMessage id="chooseList.generalMedicalExamination" />
                                                        </div>
                                                 </div>
                                                 <div className="option-child">
                                                        <div className="icon-child">
                                                               <i className="fas fa-flask"></i>
                                                        </div>
                                                        <div className="text-child">
                                                               <FormattedMessage id="chooseList.medicalTest" />
                                                        </div>
                                                 </div>
                                                 <div className="option-child">
                                                        <div className="icon-child">
                                                               <i className="fas fa-heart"></i>
                                                        </div>
                                                        <div className="text-child">
                                                               <FormattedMessage id="chooseList.mentalExamination" />
                                                        </div>
                                                 </div>
                                                 <div className="option-child">
                                                        <div className="icon-child">
                                                               <i className="fas fa-user-astronaut"></i>
                                                        </div>
                                                        <div className="text-child">
                                                               <FormattedMessage id="chooseList.dentalExamination" />
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </React.Fragment>

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
              changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
       };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
