---
layout: TableLayout-2-25_75
title: Exported Data
tags:
  - Results
  - Panels
  - Indicators
  - Reports
  - Events
  - Export
---
# Exported Data

::: tip Data in numerical order or by action objective
In the exported data we show both the objective and the numerical order of the action. For example, data_unique.1 can be equal to data_unique.training when the first stage of the campaign is of type training.
:::

When exporting data from the platform via reports or by integrating the API, the data will be exported according to the following definitions. [API](../companies/api)

Our API is documented at: [API Documentation](http://apidocs.phishx.io)

::: details Want a new customized report?
Talk to the Customer Success team. [Customer Success](mailto:cs@phishx.io)
:::


## About Actions

Each new step (or action) reached by the user is logged.
There is no single order on the platform, the actions are according to those defined in your campaign.
By definitions of governance and compliance, only when the user actually interacts with the campaign, clicking on buttons, or sending information, for example, does he change his action.

To consult the details of the main actions: [Actions](actions)


## Total vs. Unique

| Type | Description |
| :--- | :--- |
| <b>Total</b> <br> <small>(data.X)</small> | Good for knowing how many times a person has done that action. Total Calculation. Ideal for analyzing distribution lists or multiple accesses per contact. |
| <b>Unique</b> <br> <small>(data_unique.X )</small> | Good to know if the person did the action or not. Single Calculation. Ideal to add the amount of people. It is the default for the platform. |


## Order of Major Actions

| Actions | Totals | Unique |
| :--- | :--- | :--- |
| <b>Sent</b> | data.sent | data_unique.sent |
| <b>Opened</b> <br> <small>(Traditional)</small> | data.open_mail | data_unique.open_mail |
| <b>Clicked</b> <br> <small>(Conversion or Main Activity)</small> | data.1 | data_unique.1 |
| <b>Interaction</b> <br> <small>(Opened or Clicked)</small> | data.open_mail <br> data.1 | data_unique.open_mail <br> data_unique.1 |
| <b>Second Activity</b> <br> <small>(Finished Main Activity)</small> | data.2 | data_unique.2 |
| <b>Other Activities</b> <br> <small>(...)</small> | data.X | data_unique.X |
| <b>Finished all Activities</b> <br> <small>(and redirected to default site)</small>| data.last | data_unique.last |


## Key Metrics

| Métrica | Descrição |
| :--- | :--- |
| <b>Interactions</b> <br> <small>(Opened / Sent)</small> | Secondary metric to measure the interest / reading rate of the target audience for the topic. |
| <b>Conversions</b> <br> <small>(Clicked / Opened)</small> | Main metric to measure the conversion / click rate of the target audience by the theme. |
| <b>Finishes</b> <br> <small>(Finished / Main Activity)</small> | Optional metric to measure the rate of completion of the main activity by the target audience. The main activity may be different for each campaign. Examples: Finish Training, Answer the Questionnaire, Accept the Policy, etc. |


## Main Objectives of Actions

| Objectives | Totals | Unique |
| :--- | :--- | :--- |
| <b>Training</b> | data.training | data_unique.training |
| <b>Closure</b> | data.closure | data_unique.closure |
| <b>Web Simulation</b> | data.web_simulation | data_unique.web_simulation |
| <b>Quiz</b> | data.quiz | data_unique.quiz |
| <b>Documentation</b> | data.documentation | data_unique.documentation |
| <b>Policy</b> | data.policy | data_unique.policy |
| <b>Redirection</b> | data.redirection | data_unique.redirection |


## Top Examples of Campaign Templates

### Message -> Opening -> Redirection

| Beginning | End | Totals | Unique |
| :--- | :--- | :--- | :--- |
| <b>Sent</b> |  | data.sent | data_unique.sent |
| <b>Opened</b> | Sent | data.interaction | data_unique.interaction |
| <b>Redirection</b> | Abertura | data.1 <br> data.redirection | data_unique.1 <br> data_unique.redirection |


### Message -> Opening -> Training -> Opinion

| Beginning | End | Totals | Unique |
| :--- | :--- | :--- | :--- |
| <b>Sent</b> |  | data.sent | data_unique.sent |
| <b>Opened</b> | Sent | data.interaction | data_unique.interaction |
| <b>Training</b> | Opened | data.1 <br> data.training | data_unique.1 <br> data_unique.training |
| <b>Opinion</b> | Training | data.2 <br> data.closure | data_unique.2 <br> data_unique.closure |
| <b>Last</b> | Opinion | data.last | data_unique.last |


### Message -> Opening -> Web Simulation -> Training -> Opinion

| Beginning | End | Totals | Unique |
| :--- | :--- | :--- | :--- |
| <b>Sent</b> |  | data.sent | data_unique.sent |
| <b>Opened</b> | Sent | data.interaction | data_unique.interaction |
| <b>Web Simulation</b> | Opened | data.1 <br> data.web_simulation | data_unique.1 <br> data_unique.web_simulation |
| <b>Training</b> | Web Simulation| data.2 <br> data.training | data_unique.2 <br> data_unique.training |
| <b>Opinion</b> | Training | data.3 <br> data.closure | data_unique.3 <br> data_unique.closure |
| <b>Last</b> | Opinion | data.last | data_unique.last |

