---
lastUpdated: false
---

# Política de IA

## 1. Visão Geral e Compromisso

A PhishX adota uma abordagem de **Segurança e Privacidade desde o Projeto** (_Security & Privacy by Design_) no desenvolvimento e na disponibilização de recursos de Inteligência Artificial Generativa (IAGEN) em sua plataforma SaaS.

Esta política estabelece as diretrizes de governança, proteção de dados, limitações de uso e transparência sobre como a IA é utilizada na plataforma, garantindo a integridade dos dados das organizações clientes e o cumprimento rigoroso dos padrões globais de segurança e conformidade.

## 2. Provedores de IA de Terceiros e Modelos

A PhishX integra-se a provedores globais de IA consolidados e auditados por meio de APIs seguras, especificamente:

- **OpenAI:** Modelos avançados da série GPT (por exemplo, GPT-5) e Whisper para processamento, transcrição e geração de linguagem natural.

- **Microsoft / Azure OpenAI Services:** Modelos hospedados em ambiente corporativo que operam sob garantias contratuais de governança e isolamento de dados.

## 3. Conformidade Explícita com Políticas de APIs de Terceiros

### Requisitos de Uso Limitado do Google (_Google Limited Use_)

Em total conformidade com a **Google API Services User Data Policy** (incluindo os requisitos de _Limited Use_ para serviços de IA de terceiros), a PhishX atesta publicamente o seguinte compromisso:

> **Declaração de Conformidade de Dados:**
> _"The use and transfer of raw or derived user data received from Google Workspace APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements."_

## 4. Proteção de Dados Organizacionais e Garantias de Não Treinamento

A PhishX garante um rigoroso isolamento de dados e proteção contra uso não autorizado para todos os dados processados por recursos de IA:

1. **Sem Treinamento de Modelos:** Nenhum dado bruto, contexto institucional, dado pessoal, resultado de campanhas, simulação ou metadado proveniente das organizações clientes é utilizado para treinar, re-treinar ou realizar _fine-tuning_ de modelos de IA públicos ou privados fornecidos por terceiros (OpenAI, Microsoft ou outros).

2. **Sem Reutilização para Inferência de Terceiros:** Os dados fornecidos em requisições de IA são processados de forma efêmera e exclusiva para responder à solicitação imediata, nunca sendo compartilhados ou acessíveis por outros clientes.

3. **Transmissão Criptografada e Efêmera:** Todas as chamadas de API para os provedores de IA são criptografadas em trânsito (TLS) e tratadas sem retenção persistente de dados por parte dos provedores parceiros.

## 5. Arquitetura de Prompts e Mitigação de Riscos

Para proteger a plataforma e seus usuários contra vulnerabilidades conhecidas em soluções de IA (como _Prompt Injection_, _Data Poisoning_, _Jailbreak_ e _Exfiltration_), a PhishX implementa:

- **Prompts Cerrados e Controlados:** Usuários finais e administradores não possuem acesso a interfaces de chat aberto. Todos os _prompts_ são codificados no _backend_, predefinidos e restritos estritamente ao escopo operacional do recurso específico.

- **Sanitização de Entradas e Saídas:** Todo o conteúdo enviado e as respostas geradas são filtrados e sanitizados para garantir que apenas o conteúdo necessário seja retornado, prevenindo o vazamento de instruções do sistema (_system prompts_) ou a exposição indesejada de dados.

- **Gerenciamento Seguro de Credenciais:** Chaves de acesso (API Keys) para os provedores de IA são armazenadas em cofres de segredos criptografados na infraestrutura da PhishX sob rigoroso Controle de Acesso Baseado em Funções (RBAC), e nunca são expostas ao cliente ou ao navegador.

## 6. Controle do Cliente e Uso Opcional

- **Ativação Opcional:** O uso de qualquer funcionalidade de IA Generativa na plataforma PhishX é **totalmente opcional**.

- **Desativação Global:** As organizações clientes mantêm total autonomia para desativar todos os recursos de IA em seu ambiente (_tenant_) por meio das configurações de governança da plataforma.

## 7. Casos de Uso Autorizados de IA

A IA Generativa na PhishX é restrita à otimização de fluxos de trabalho e à criação de conteúdo educativo:

- **Criação e Enriquecimento de Conteúdo:** Geração automatizada de questionários de conscientização com base em tópicos específicos ou materiais de referência externos (por exemplo, postagens públicas em blogs ou arquivos PDF).

- **Acessibilidade e Localização:** Tradução de módulos de treinamento, legendagem automática de vídeos e localização de mensagens em múltiplos idiomas.

- **Otimização Textual:** Correção ortográfica, sumarização de textos e sugestões de temas para campanhas.

## 8. Gestão de Mudanças, Roadmap e Transparência

A PhishX mantém um processo contínuo para a gestão de atualizações e comunicação sobre capacidades de IA:

- **Notificações Antecipadas:** Atualizações que introduzam novos recursos ou alterações nas capacidades de IA são comunicadas com antecedência por meio de notas de lançamento (_release notes_) e comunicados oficiais.

- **Avaliação de Riscos:** Qualquer alteração estrutural ou de integração que envolva IA passa por uma avaliação prévia de impacto na privacidade e segurança.

## 9. Contato e Governança de Privacidade

Para dúvidas, solicitações ou informações adicionais sobre a governança de IA e privacidade de dados na PhishX, entre em contato com nosso Encarregado de Proteção de Dados (DPO) através dos canais oficiais de suporte da plataforma.
