import React, { useState } from "react";
import { Switch } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

import {
  Wrapper,
  Container,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  Actions,
  Action,
  EyeButton,
  ActionLabel,
  Info,
  UseBalance,
  UseBalanceTitle,
  PaymentMethod,
  PaymentMethodTitle,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  CardBody,
  AddButton,
  AddLabel,
  UseTicketButton,
  UseTicketLabel,
  UseTicketContainer,
} from "./styles";

import creditCard from "../../images/credit-card.png";

export default function WalletScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function hanldeToggleVisibility() {
    setIsVisible((prevstate) => !prevstate);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevstate) => !prevstate);
  }

  return (
    <Wrapper>
      <Container>
        <Header
          colors={useBalance ? ["#52E78C", "#1AB563"] : ["#D3D3D3", "#868686"]}
        >
          <HeaderContainer>
            <Title>Saldo Picpay</Title>
            <BalanceContainer>
              <Value>
                R$ <Bold>{isVisible ? "122,500.23" : "----"}</Bold>
              </Value>
              <EyeButton onPress={hanldeToggleVisibility}>
                <Feather
                  name={isVisible ? "eye" : "eye-off"}
                  size={28}
                  color="#fff"
                />
              </EyeButton>
            </BalanceContainer>
            <Info>Seu saldo está redendo 100% do CDI</Info>
            <Actions>
              <Action>
                <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                <ActionLabel>Adicionar</ActionLabel>
              </Action>
              <Action>
                <FontAwesome name="bank" size={20} color="#fff" />
                <ActionLabel>Retirar</ActionLabel>
              </Action>
            </Actions>
          </HeaderContainer>
        </Header>
        <UseBalance>
          <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
          <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
        </UseBalance>
        <PaymentMethod>
          <PaymentMethodTitle>Formas de pagamentos</PaymentMethodTitle>
        </PaymentMethod>
        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>
              <CardInfo>
                Cadastre seu cartão de crédito para fazer pagamentos mesmo
                quando não estive saldo no seu PipPay
              </CardInfo>
            </CardDetails>
            <Img source={creditCard} resizeMode="contain" />
          </CardBody>
          <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0DB060" />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddButton>
        </Card>
        <UseTicketContainer>
          <UseTicketButton>
            <MaterialCommunityIcons
              name="ticket-outline"
              size={20}
              color="#0DB060"
            />
            <UseTicketLabel>Usar código promocional</UseTicketLabel>
          </UseTicketButton>
        </UseTicketContainer>
      </Container>
    </Wrapper>
  );
}
