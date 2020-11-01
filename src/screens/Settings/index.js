import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import {
  Container,
  Wrapper,
  Profile,
  InfoProfile,
  Title,
  Subtitle,
  TouchButton,
  ButtonProfile,
  MenuTitle,
  Options,
  Option,
  TitleOption,
  SubtitleOption,
  Dividir,
} from "./styles";

import { menus } from "../../services/menuOptions";

const btnContent = "Ver meu perfil >";

export default function SettingsScreen() {
  return (
    <Container>
      <Wrapper>
        <Profile>
          <FontAwesome name="user-circle" size={90} color="#fff" />
          <InfoProfile>
            <Title>@eerick_oliveira</Title>
            <Subtitle>Erick Henrique Oliveira</Subtitle>
            <TouchButton>
              <ButtonProfile>{btnContent}</ButtonProfile>
            </TouchButton>
          </InfoProfile>
        </Profile>
        <MenuTitle>Minha conta</MenuTitle>
        <Options>
          {menus.map((menu) => (
            <>
              <Option key={menu.key}>
                <TitleOption>{menu.title}</TitleOption>
                <SubtitleOption>{menu.data}</SubtitleOption>
              </Option>
              <Dividir />
            </>
          ))}
        </Options>
      </Wrapper>
    </Container>
  );
}
