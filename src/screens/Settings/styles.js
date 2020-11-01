import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Wrapper = styled.ScrollView``;

export const Profile = styled.View`
  background: rgba(255, 255, 255, 0.5);
  height: 250px;
  justify-content: center;
  align-items: center;
`;

export const InfoProfile = styled.View`
  text-align: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 19px;
  font-weight: bold;
  margin-top: 10px;
  padding: 0px 35px;
`;

export const Subtitle = styled.Text`
  color: #fff;
  font-size: 19px;
  padding: 0px 12px;
  font-weight: 100;
`;

export const TouchButton = styled.TouchableOpacity``;

export const ButtonProfile = styled.Text`
  color: #52e78c;
  font-weight: bold;
  margin-top: 2px;
  padding: 0px 55px;
`;

export const MenuTitle = styled.Text`
  color: #52e78c;
  padding: 10px;
`;

export const Options = styled.View``;

export const Option = styled.TouchableOpacity`
  height: 50px;
  justify-content: center;
  padding: 10px;
  margin-bottom: 5px;
`;

export const TitleOption = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const SubtitleOption = styled.Text`
  color: rgba(255, 255, 255, 0.7);
`;

export const Dividir = styled.View`
  height: 1px;
  width: 100%;
  margin-top: 1px;
  background: #7a7880;
`;
