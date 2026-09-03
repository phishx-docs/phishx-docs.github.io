---
layout: TableLayout-2-25_75
title: Exemplo e Ações
tags:
  - Resultados
  - Painéis
  - Indicadores
  - Relatórios
  - Eventos
  - Exportar
  - API
---

# Exemplo e Ações

## Relatório report_simple_1

### Exemplo de Reposta

O conjunto de campos pode mudar de acordo com os parâmetros da chamada a API.

| Campo                      | Descrição                      |
| :------------------------- | :----------------------------- |
| action                     | Ação traduzida.                |
| action_group               | Ação fixa.                     |
| campaign_category          | Categoria da Campanha.         |
| campaign_date              | Dia da Campanha.               |
| campaign_date_year         | Ano da Campanha.               |
| campaign_date_year_month   | Ano e Mês da Campanha.         |
| campaign_date_year_quarter | Ano e Trimestre da Campanha.   |
| campaign_id                | ID da Campanha.                |
| campaign_objective         | Objetivo da Campanha.          |
| date (America/Sao_Paulo)   | Data com fuso horário da ação. |
| domain                     | Domínio do contato.            |
| email                      | E-mail do contato.             |
| qty                        | Quantidade de ações.           |
| subdomain                  | Subdomínio da organização.     |
| user                       | Demais atributos do contato.   |

```json
[
  {
    "action": "mensagem aberta",
    "action_group": "message_opened",
    "campaign_category": "official",
    "campaign_date": "2025-06-02",
    "campaign_date_year": "2025",
    "campaign_date_year_month": "2025-06",
    "campaign_date_year_quarter": "2025-Q2",
    "campaign_id": 7425,
    "campaign_name": "Teste Google",
    "campaign_objective": "simulation",
    "date (America/Sao_Paulo)": "2025-06-04 09:27:03",
    "domain": "vieira.net",
    "email": "pedro@vieira.net",
    "qty": 1,
    "subdomain": "phishx",
    "user": {
      "domain": "vieira.net",
      "subdomain": "phishx"
    }
  }
]
```

### Ações (action_group)

As ações não realizadas são virtuais e temporárias, até o presente momento não foram realizadas.
Algumas ações podem ser opcionais ou serem atribuídas ao mesmo momento. Exemplo: Se não houve a abertura antes do clique, tanto o clique quanto a abertura são representados no mesmo momento.

| Ação                        | Descrição                  |
| :-------------------------- | :------------------------- |
| message_delivered           | Mensagem entregue.         |
| message_opened              | Mensagem aberta.           |
| message_clicked             | Mensagem clicada.          |
| message_websimulation_start | Página de dados acessada.  |
| message_websimulation       | Dados capturados.          |
| message_training_start      | Treinamento iniciado.      |
| message_training            | Treinamento encerrado.     |
| message_reported            | Mensagem reportada.        |
| message_replied             | Mensagem respondida.       |
| no_message_opened           | Mensagem não aberta.       |
| no_message_clicked          | Mensagem não clicada.      |
| no_message_websimulation    | Dados não capturados.      |
| no_message_training         | Treinamento não encerrado. |
| no_message_reported         | Mensagem não reportada.    |
| no_message_replied          | Mensagem não respondida.   |

## Relatório report_details_1

### Exemplo de Reposta

O conjunto de campos pode mudar de acordo com os parâmetros da chamada a API.

| Campo                    | Descrição                      |
| :----------------------- | :----------------------------- |
| action                   | Ação original.                 |
| action_group             | Grupo da Ação.                 |
| campaign_id              | ID da Campanha.                |
| campaign_name            | Nome da Campanha.              |
| campaign_category        | Categoria da Campanha.         |
| campaign_objective       | Objetivo da Campanha.          |
| date (America/Sao_Paulo) | Data com fuso horário da ação. |
| ip                       | IP do acesso.                  |
| isp                      | Provedor do acesso.            |
| email                    | E-mail do contato.             |
| ua                       | User-agend do acesso.          |
| user                     | Demais atributos do contato.   |

```json
[
  {
    "action": "sent",
    "action_group": "sent",
    "campaign_category": "official",
    "campaign_id": 8439,
    "campaign_name": "Teste 20260810",
    "campaign_objective": "simulation",
    "campaign_type": "email",
    "date (America/Sao_Paulo)": "2026-08-10 17:45:15.000000",
    "ip": null,
    "isp": null,
    "email": "pedro.vieira@phishx.io",
    "ua": null
  },
  {
    "action": "1",
    "action_group": "training",
    "campaign_category": "official",
    "campaign_id": 8439,
    "campaign_name": "Teste 20260810",
    "campaign_objective": "simulation",
    "campaign_type": "email",
    "date (America/Sao_Paulo)": "2026-08-10 17:46:18.000000",
    "ip": "152.245.91.71",
    "isp": "Vivo",
    "email": "pedro.vieira@phishx.io",
    "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36 Edg/151.0.0.0"
  }
]
```

### Ações (action_group)

As ações não realizadas são virtuais e temporárias, até o presente momento não foram realizadas.
Algumas ações podem ser opcionais ou serem atribuídas ao mesmo momento. Exemplo: Se não houve a abertura antes do clique, tanto o clique quanto a abertura são representados no mesmo momento.

| Ação                           | Descrição                                                                                                                                                                                                                                                               |
| :----------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sent (Envio)                   | Quando a plataforma de fato enviou a mensagem. Aparecerá apenas nos módulos de Eventos, Relatórios e API.                                                                                                                                                               |
| open_mail (Abertura)           | Quando a pessoa carrega o conteúdo externo das mensagens, em especial as imagens. Pode ser automático ou manual de acordo com as configurações de cada dispositivo e aplicativo.                                                                                        |
| open_attachment (Anexo)        | Quando a pessoa abre o anexo em campanhas especiais que enviam um arquivo em anexo com a mensagem.                                                                                                                                                                      |
| 1 (Clique)                     | Quando a pessoa clica em algum link da mensagem.                                                                                                                                                                                                                        |
| training (Treinamento)         | Quando a pessoa atingir a etapa de Treinamento de acordo com a configuração da campanha. Para todos os efeitos, ela visualizou e leu o modelo, sem necessariamente ir para a próxima etapa.                                                                             |
| closure (Encerramento)         | Quando a pessoa atingir a etapa de Encerramento de acordo com a configuração da campanha. Para todos os efeitos, ela visualizou e leu o modelo, sem necessariamente ir para a próxima etapa.                                                                            |
| quiz (Questionário)            | Quando a pessoa atingir a etapa de Questionário de acordo com a configuração da campanha. Para todos os efeitos, ela visualizou e leu o modelo, sem necessariamente ir para a próxima etapa.                                                                            |
| websimulation (Simulação Web)  | Quando a pessoa atingir a etapa de Simulação Web de acordo com a configuração da campanha. Para todos os efeitos, ela visualizou e leu o modelo, sem necessariamente ir para a próxima etapa.                                                                           |
| documentation (Documento)      | Quando a pessoa atingir a etapa de Documentos de acordo com a configuração da campanha. Para todos os efeitos, ela visualizou e leu o modelo, sem necessariamente ir para a próxima etapa.                                                                              |
| redirection (Redirecionamento) | Quando a pessoa for redirecionada para outro destino de acordo com a configuração da campanha.                                                                                                                                                                          |
| other (Outros)                 | Quando a pessoa atingir a etapa Outros de acordo com a configuração da campanha. Para todos os efeitos, ela visualizou e leu o modelo, sem necessariamente ir para a próxima etapa.                                                                                     |
| data (Dados)                   | Quando a pessoa envia alguma informação, como uma nota, comentário, questionário ou quando dá o aceite formal em um documento. Esta ação é sempre vinculada a uma outra etapa, por exemplo etapa 2 (Encerramento). Nesse exemplo será registrado como Dados da Etapa 2. |
| last (Última)                  | Quando a pessoa dá o último aceite na última ação. Esta é uma ação dinâmica e automática que registra o "término" de todas as ações. No seu caso, quando a pessoa clicou em "Concluir" ou deu sua opinião no encerramento.                                              |
| report (Relatório)             | Quando a pessoa utiliza nossos aplicativos disponíveis nas plataformas Google e Microsoft para relatar uma mensagem suspeita, encaminhando a mesma para análise do seu time. Não aplicável para o seu caso.                                                             |
