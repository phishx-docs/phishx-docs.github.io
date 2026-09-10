---
title: Webhook
tags:
  - Integrações
  - API
  - Auditoria
  - Webhook
---

# Webhook

## Configurações

1. Acessar a plataforma **PhishX**.

No menu lateral, acessar: **Configurações** e **Perfil da Empresa**.

No menu interno, acessar: **Segurança**.

Expandir **Webhook**.

![Webhook](https://cdn.phishx.io/phishx-docs/images/webhook_001.png)

Habilitar em **Habilitado**.

Definir um **segredo** em **Segredo**.

**OBS**: opcionalmente você poderá validar a integridade dos dados ao receber os eventos.

Em **URL**, definir o endereço de sua estrutura que vai receber os eventos via **POST**.

Habilitar **todas as auditorias** ou selecionar algumas.

| Tópico               | Descrição                                                                                                                                               |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Auditoria - API      | Captura chamadas realizadas contra as APIs da plataforma, mapeando endpoints consumidos, chaves utilizadas e status das requisições.                    |
| Auditoria - Acessos  | Registra tentativas e concessões de acesso a recursos, áreas restritas e funcionalidades dentro da plataforma.                                          |
| Auditoria - Mudanças | Rastreia o ciclo de vida e modificações em entidades críticas (criação, edição e exclusão de dados), contendo o antes e o depois das alterações.        |
| Auditoria - Login    | Monitora eventos de autenticação de usuários, registrando tentativas de login com sucesso ou falha, métodos utilizados (MFA/SSO) e contexto de conexão. |
| Auditoria - Logout   | Notifica o encerramento de sessões ativas por iniciativa do usuário, expiração por inatividade ou revogação administrativa.                             |
| Auditoria - Erro     | Notifica falhas de processamento, erros de execução ou exceções operacionais para triagem rápida e proativa de anomalias.                               |

Clicar em **Atualizar**.

**OBS**: recomendamos ter a estrutura para receber os eventos já configurada.

## Exemplo de Eventos

### Cabeçalho

```json
[
 {"content-type", "application/json"},
 {"user-agent", "PhishX-Webhook-Dispatcher/1.0"},
 {"x-signature",
  "1b179ec6986d4c7e1a65de1c7d6b2fcb47597c3db218a01b20bd07fb1fc32305"},
 {"x-signature-timestamp", "1788994560"}
]
```

### Dados

```json
{
 "data" => [
   {
     "data" => {
       "action" => "index",
       "ip" => nil,
       "path" => "/live/pt/results/dashboards",
       "session_id" => nil,
       "status" => "success",
       "subtype" => "live_view",
       "url" => "http://phishx.phishx.io/live/pt/results/dashboards",
       "user_agent" => nil,
       "user_email" => "pedro.vieira@phishx.io",
       "user_subdomain" => "phishx"
     },
     "id" => 1454687,
     "inserted_at" => "2026-09-09T22:55:46.000000",
     "status" => "success",
     "type" => "access"
   },
    {
     "data" => {
       "ip" => "177.117.240.167",
       "path" => "/live/en/auth/google/callback",
       "session_id" => "A761FBF51851E4DA410CB85727880F05",
       "status" => "success",
       "subtype" => "external",
       "url" => "https://auth.phishx.io/live/en/auth/google/callback",
       "user_agent" => "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36 Edg/152.0.0.0",
       "user_email" => "pedro.vieira@phishx.io",
       "user_subdomain" => "phishx"
     },
     "id" => 1454685,
     "inserted_at" => "2026-09-09T22:55:45.000000",
     "status" => "success",
     "type" => "login"
   }
 ]
}
```

### Verificação Opcional

Você pode opcionalmente verificar a integridade dos dados validando os **dados** com as informações **x-signature** e **x-signature-timestamp**.

Caso tenha interesse, nosso time de **Customer Success** pode apoiar.
