import styled from "styled-components/native";

export const Container = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled.View`
  background: #fff;
  justify-content: center;
  height: 50px;
  width: 100%;
  position: absolute;
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;
`;

export const Wrapper = styled.ScrollView`
  margin-top: 14%;
`;

export const NotificationContent = styled.View`
  padding: 15px;
  height: 120px;
  width: 100%;
`;

export const Message = styled.Text`
  color: #7a7880;
  text-transform: uppercase;
  font-size: 13px;
`;

export const MessageTime = styled.Text`
  color: #56535c;
  margin-top: 9%;
  font-size: 10px;
`;

export const Divider = styled.View`
  height: 1px;
  width: 91%;
  margin-top:1px;
  margin-left: 4%;
  background: #7a7880;
`;
