import React from "react";

import {
  Title,
  Container,
  Wrapper,
  Header,
  NotificationContent,
  Message,
  MessageTime,
  Divider,
} from "./styles";

import { messages } from "../../services/notifications";

export default function NotifiScreen() {
  return (
    <Container>
      <Header>
        <Title>Notificações</Title>
      </Header>
      <Wrapper>
        {messages.map((msg) => (
          <>
            <NotificationContent key={msg.key}>
              <Message>{msg.msg}</Message>
              <MessageTime>{msg.timastamp}</MessageTime>
            </NotificationContent>
            <Divider />
          </>
        ))}
      </Wrapper>
    </Container>
  );
}
