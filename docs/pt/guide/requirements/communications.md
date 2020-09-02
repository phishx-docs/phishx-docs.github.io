---
title: Comunicações
tags:
  - Requisitos
---
<style lang="stylus">
  tr td:nth-child(1), tr th:nth-child(1)
    width: 30%
  tr td:nth-child(2), tr th:nth-child(2)
    width: 30%
  tr td:nth-child(3), tr th:nth-child(3)
    width: 40%
</style>
# Comunicações

::: tip DICA
Todos os servidores Web da PhishX usam certificados SSL.
:::

## Campanhas (**Mensagens**)
<br>

| ORIGEM | DESTINO | SERVIÇO |
| :--- | :--- | :---: |
| PROVEDORES DA PHISHX | USUÁRIOS | - |
| USUÁRIOS | SERVIDORES WEB DA PHISHX | 443/TCP (HTTPS) |

## Portal Administrativo (**PhishX**)
<br>

| ORIGEM | DESTINO | SERVIÇO |
| :--- | :--- | :---: |
| USUÁRIOS ADMINISTRATIVOS | SERVIDORES WEB DA PHISHX | 443/TCP (HTTPS) |

## Portal dos Usuários (**My PhishX**)
<br>

| ORIGEM | DESTINO | SERVIÇO |
| :--- | :--- | :---: |
| USUÁRIOS | SERVIDORES WEB DA PHISHX | 443/TCP (HTTPS) |
