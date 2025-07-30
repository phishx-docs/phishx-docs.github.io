---
layout: TableLayout-3-33_33_34
title: Comunicações
tags:
  - Requisitos
---

# Comunicações

::: tip Dica
Todos os servidores Web da PhishX usam certificados SSL.
:::

## Campanhas (**Mensagens**)

<br>

| ORIGEM               | DESTINO                  |     SERVIÇO     |
| :------------------- | :----------------------- | :-------------: |
| PROVEDORES DA PHISHX | USUÁRIOS                 |        -        |
| USUÁRIOS             | SERVIDORES WEB DA PHISHX | 443/TCP (HTTPS) |

## Portal Administrativo (**PhishX**)

<br>

| ORIGEM                   | DESTINO                  |     SERVIÇO     |
| :----------------------- | :----------------------- | :-------------: |
| USUÁRIOS ADMINISTRATIVOS | SERVIDORES WEB DA PHISHX | 443/TCP (HTTPS) |

## Portal dos Usuários (**My PhishX**)

<br>

| ORIGEM   | DESTINO                  |     SERVIÇO     |
| :------- | :----------------------- | :-------------: |
| USUÁRIOS | SERVIDORES WEB DA PHISHX | 443/TCP (HTTPS) |
