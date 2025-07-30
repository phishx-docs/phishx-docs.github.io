---
title: Application registration
tags:
  # - Intregrations
  - Microsoft
  - Azure
  - AD
---

# Application registration

## TL;DR

1. Create a new Application Registration. [Application Registration](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps)

2. Copy your **tenant**, **client id** and **client secret**.

## Settings

1. Access **Application Registration**.

   [Application Registration](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps)

   ![Application Registration](https://cdn.phishx.io/phishx-docs/images/azure_ad_03.webp)

2. Click **New Registration**.

3. In **Register an application**:

   In **Name** fill with **PhishX**.

   In **Supported account types** select **Accounts in this organizational directory only (... only - Single tenant)**.

   In **Redirect URI (optional)** fill with your **PhishX URL**: **https://my_subdomain.phishx.io/azuread**.

   Click **Register**.

   ![New Registration](https://cdn.phishx.io/phishx-docs/images/azure_ad_04.webp)

4. Edit your **PhishX Application**.

   ![PhishX Application](https://cdn.phishx.io/phishx-docs/images/azure_ad_05.webp)

5. In **Overview**:

   Copy your **Application (client) ID**.

   Copy your **Directory (tenant) ID**.

   ![Overview](https://cdn.phishx.io/phishx-docs/images/azure_ad_06.webp)

6. In **Branding**:

   In **Name** fill with **PhishX**.

   In **Home page URL** fill with **https://www.phishx.io/**.

   In **Terms of service URL** fill with **https://terms.phishx.io/**.

   In **Privacy Statement URL** fill with **https://terms.phishx.io/**.

   Click **Save**.

   ![Branding](https://cdn.phishx.io/phishx-docs/images/azure_ad_07.webp)

7. In **Authentication**:

   In **Logout URL** fill with your **PhishX URL**: **https://my_subdomain.phishx.io/azuread**.

   In **Implicit grant** select **ID tokens**.

   Click **Save**.

   ![Authentication](https://cdn.phishx.io/phishx-docs/images/azure_ad_08.webp)

8. In **Certificates & Secrets**:

   Click **New client secret**.

   ![Certificates & Secrets](https://cdn.phishx.io/phishx-docs/images/azure_ad_09.webp)

   In **Description** fill with **PhishX**.

   In **Expires** select **In 1 year**.

   Click **Add**.

   ![Certificates & Secrets](https://cdn.phishx.io/phishx-docs/images/azure_ad_10.webp)

   Copy your **Client Secret**.

   ![Certificates & Secrets](https://cdn.phishx.io/phishx-docs/images/azure_ad_11.webp)

9. In **Token Configuration**:

   Click **Add optional claim**.

   ![Token Configuration](https://cdn.phishx.io/phishx-docs/images/azure_ad_12.webp)

   In **Token type** select **ID**.

   In **Claim** select **e-mail**, **given_name**, **family_name**, **sid** and **upn**.

   Click **Add**.

   ![Token Configuration](https://cdn.phishx.io/phishx-docs/images/azure_ad_13.webp)
