import styled from "styled-components/native";

export const Container = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  padding: 15px 0;
`;

export const Option = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))`
  margin-top: 25px;
`;

export const Wrapper = styled.View``;

export const Options = styled.TouchableOpacity`
  background: #fff;
  height: 100px;
  width: 100px;
  border-radius: 8px;
  padding: 0px 10px;
  margin-left: 15px;
`;

export const Icon = styled.View`
  padding: 5px 1px;
`;

export const OptionTitle = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 13px;
  margin-left: 0px;
  margin-top: 15px;
`;

export const StoreContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 0px 10px;
  border-radius: 8px;
  background: #fff;
  margin-top: 15px;
  margin-left: 4%;
  width: 92%;
  height: 70px;
`;

export const IconStore = styled.View`
  padding: 2px 7px;
`;

export const StoreContent = styled.View``;

export const StoreTitle = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: bold;
`;

export const StoreDescription = styled.Text`
  color: #000;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0px 10px;
  border-radius: 8px;
  background: #fff;
  margin-top: 15px;
  margin-left: 4%;
  width: 92%;
  height: 70px;
`;

export const MapContent = styled.TouchableOpacity``
