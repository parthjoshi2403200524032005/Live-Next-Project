import styled from "styled-components";
import { Flex, FlexCol, FlexFullWidth } from "../../styles/CommonStyles";

export const DoctorCardWrapper = styled(FlexCol)`
  justify-content: center;
  .videoHomePageTitle {
    font-size: 15px;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .doctorImage {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .doctorName {
    font-size: 17px;
    margin: 0;
  }
  .doctorSpecilization,
  .doctorExperience,
  .location {
    font-size: 14px;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color:#717171;
  }
`;

export const BookAppointmentShare = styled(FlexFullWidth)`
  background-color: #133682;
  justify-content: center;
  padding: 10px 10px;
  border-radius:10px;
`;

export const BookAppointment = styled(Flex)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size:15px;
  letter-spacing:2px;
`;

export const VideoShareWrapper = styled(FlexFullWidth)`
  position: relative;
  .plyr {
    width: 100%;
    border-radius:22px;
  }
  .shareIcon {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ff4757;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 6px;
    margin: 0;
    cursor: pointer;
  }
`;

export const HMCard = styled.div`
  box-shadow: #d6d6d6 1px 3px 2px 0px;
  border: 1px solid rgb(241, 241, 241);
  border-radius: 12px;
  overflow: hidden;
  padding:20px;
`;
