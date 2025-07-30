---
layout: TableLayout-3-33_33_34
title: Communications
tags:
  - Requirements
---

# Communications

::: tip Tip
All PhishX Web Servers uses SSL Certificates.
:::

## Campaigns (**Messages**)

<br>

| SOURCE           | DESTINATION        |     SERVICE     |
| :--------------- | :----------------- | :-------------: |
| PHISHX PROVIDERS | USERS              |        -        |
| USERS            | PHISHX WEB SERVERS | 443/TCP (HTTPS) |

## Administration Portal (**PhishX**)

<br>

| SOURCE      | DESTINATION        |     SERVICE     |
| :---------- | :----------------- | :-------------: |
| ADMIN USERS | PHISHX WEB SERVERS | 443/TCP (HTTPS) |

## Users Portal (**My PhishX**)

<br>

| SOURCE | DESTINATION        |     SERVICE     |
| :----- | :----------------- | :-------------: |
| USERS  | PHISHX WEB SERVERS | 443/TCP (HTTPS) |
