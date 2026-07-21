---
lastUpdated: false
---

# AI Policy

## 1. Overview and Commitment

PhishX adopts a **Security & Privacy by Design** approach in the development and deployment of Generative Artificial Intelligence (GenAI) features within its SaaS platform.

This policy establishes guidelines for governance, data protection, usage limitations, and transparency regarding how AI is utilized across the platform, ensuring the integrity of customer organization data and strict adherence to global security and compliance standards.

## 2. Third-Party AI Providers and Models

PhishX integrates with established and audited global AI providers via secure APIs, specifically:

- **OpenAI:** Advanced models from the GPT series (e.g., GPT-5) and Whisper for natural language processing, transcription, and generation.

- **Microsoft / Azure OpenAI Services:** Enterprise-hosted models operating under contractual guarantees for governance and data isolation.

## 3. Explicit Compliance with Third-Party API Policies

### Google Limited Use Requirements

In full compliance with the **Google API Services User Data Policy** (including the _Limited Use_ requirements for third-party AI services), PhishX publicly attests to the following commitment:

> **Data Compliance Statement:**
> _"The use and transfer of raw or derived user data received from Google Workspace APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements."_

## 4. Organizational Data Protection and Non-Training Guarantees

PhishX guarantees strict data isolation and protection against unauthorized use for all data processed by AI features:

1. **No Model Training:** No raw data, institutional context, personal data, campaign results, simulations, or metadata originating from customer organizations is ever used to train, re-train, or fine-tune public or private AI models provided by third parties (OpenAI, Microsoft, or others).

2. **No Reuse for Third-Party Inference:** Data supplied in AI requests is processed transiently and exclusively to fulfill the immediate request, never shared across or accessible to other clients.

3. **Encrypted and Transient Transmission:** All API calls to AI providers are encrypted in transit (TLS) and handled without persistent data retention by partner providers.

## 5. Prompt Architecture and Risk Mitigation

To protect the platform and its users against known AI vulnerabilities (such as _Prompt Injection_, _Data Poisoning_, _Jailbreak_, and _Exfiltration_), PhishX implements:

- **Closed and Controlled Prompts:** End-users and administrators do not have access to open-ended chat interfaces. All prompts are hardcoded into the backend, pre-defined, and restricted strictly to the operational scope of the specific feature.

- **Input and Output Sanitization:** All submitted content and generated responses are filtered and sanitized to ensure only the necessary content is returned, preventing system prompt leakage or unwanted data exposure.

- **Secure Credential Management:** Access keys (API Keys) for AI providers are stored in encrypted secret vaults within the PhishX infrastructure under strict Role-Based Access Control (RBAC), and are never exposed to the client or browser.

## 6. Client Control and Optional Usage

- **Optional Activation:** The use of any Generative AI functionality within the PhishX platform is **entirely optional**.

- **Global Disabling:** Customer organizations maintain full autonomy to disable all AI features across their tenant via platform governance settings.

## 7. Authorized AI Use Cases

Generative AI within PhishX is restricted to workflow optimization and educational content creation:

- **Content Creation & Enrichment:** Automated generation of awareness quizzes based on specific topics or external reference materials (e.g., public blog posts or PDFs).

- **Accessibility & Localization:** Translation of training modules, automatic video subtitling, and message localization across multiple languages.

- **Textual Optimization:** Spell-checking, text summarization, and campaign topic suggestions.

## 8. Change Management, Roadmap, and Transparency

PhishX maintains an ongoing process for update management and communication regarding AI capabilities:

- **Advance Notifications:** Updates introducing new features or changes to AI capabilities are communicated in advance through release notes and official announcements.

- **Risk Assessment:** Any structural or integration change involving AI undergoes a prior privacy and security impact assessment.

## 9. Contact and Privacy Governance

For questions, requests, or further information regarding AI governance and data privacy at PhishX, please contact our Data Protection Officer (DPO) through the official platform support channels.
