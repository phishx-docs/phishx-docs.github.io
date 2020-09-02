---
title: Communications
tags:
  - Requirements
---
<style lang="stylus">
  tr td:nth-child(1), tr th:nth-child(1)
    width: 30%
  tr td:nth-child(2), tr th:nth-child(2)
    width: 30%
  tr td:nth-child(3), tr th:nth-child(3)
    width: 40%
</style>
# Communications

::: tip TIP
All PhishX Web Servers uses SSL Certificates.
:::

## Campaigns (**Messages**)
<br>

| SOURCE | DESTINATION | SERVICE |
| :--- | :--- | :---: |
| PHISHX PROVIDERS | USERS | - |
| USERS | PHISHX WEB SERVERS | 443/TCP (HTTPS) |

## Administration Portal (**PhishX**)
<br>

| SOURCE | DESTINATION | SERVICE |
| :--- | :--- | :---: |
| ADMIN USERS | PHISHX WEB SERVERS | 443/TCP (HTTPS) |

## Users Portal (**My PhishX**)
<br>

| SOURCE | DESTINATION | SERVICE |
| :--- | :--- | :---: |
| USERS | PHISHX WEB SERVERS | 443/TCP (HTTPS) |
