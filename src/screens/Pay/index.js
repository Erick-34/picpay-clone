import React from "react";
import {
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  SimpleLineIcons,
} from "@expo/vector-icons";

import {
  Container,
  Wrapper,
  Header,
  HeaderTitle,
  Option,
  Options,
  OptionTitle,
  Icon,
  StoreContainer,
  StoreContent,
  IconStore,
  StoreTitle,
  StoreDescription,
  LocationContainer,
  MapContent,
} from "./styles";

export default function PayScreen() {
  return (
    <Container>
      <Wrapper>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={25}
            color="#10c86e"
          />
          <HeaderTitle>Transações</HeaderTitle>
        </Header>
        <Option>
          <Options>
            <Icon>
              <AntDesign name="user" size={25} color="#10c86e" />
            </Icon>
            <OptionTitle>Pagar pessoas</OptionTitle>
          </Options>
          <Options>
            <Icon>
              <AntDesign name="barcode" size={25} color="#10c86e" />
            </Icon>
            <OptionTitle>Pagar boletos</OptionTitle>
          </Options>
          <Options>
            <Icon>
              <AntDesign name="creditcard" size={25} color="#10c86e" />
            </Icon>
            <OptionTitle>Pague nas maquininhas</OptionTitle>
          </Options>
          <Options>
            <Icon>
              <AntDesign name="message1" size={25} color="#10c86e" />
            </Icon>
            <OptionTitle>Fazer cobranças</OptionTitle>
          </Options>
          <Options>
            <Icon>
              <Feather name="smartphone" size={25} color="#10c86e" />
            </Icon>
            <OptionTitle>Pagar pessoas</OptionTitle>
          </Options>
        </Option>
        <StoreContainer>
          <IconStore>
            <SimpleLineIcons name="bag" size={25} color="#10c86e" />
          </IconStore>
          <StoreContent>
            <StoreTitle>Store</StoreTitle>
            <StoreDescription>
              Compre oque quiser sem sair de casa
            </StoreDescription>
          </StoreContent>
        </StoreContainer>
        <MapContent>
          <LocationContainer>
            <IconStore>
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={25}
                color="#10c86e"
              />
            </IconStore>
            <StoreContent>
              <StoreTitle>Locais próximos</StoreTitle>
              <StoreDescription>
                Confira estabelecimetos perto de você
              </StoreDescription>
            </StoreContent>
          </LocationContainer>
        </MapContent>
      </Wrapper>
    </Container>
  );
}
