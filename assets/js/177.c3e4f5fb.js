(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{464:function(t,e,a){"use strict";a.r(e);var i=a(8),l=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"exported-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exported-data"}},[t._v("#")]),t._v(" Exported Data")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Data in numerical order or by action objective")]),t._v(" "),e("p",[t._v("In the exported data we show both the objective and the numerical order of the action. For example, data_unique.1 can be equal to data_unique.training when the first stage of the campaign is of type training.")])]),t._v(" "),e("p",[t._v("When exporting data from the platform via reports or by integrating the API, the data will be exported according to the following definitions. "),e("a",{attrs:{href:"../companies/api"}},[t._v("API")])]),t._v(" "),e("p",[t._v("Our API is documented at: "),e("a",{attrs:{href:"http://apidocs.phishx.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("API Documentation"),e("OutboundLink")],1)]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Want a new customized report?")]),t._v(" "),e("p",[t._v("Talk to the Customer Success team. "),e("a",{attrs:{href:"mailto:cs@phishx.io"}},[t._v("Customer Success")])])]),t._v(" "),e("h2",{attrs:{id:"about-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#about-actions"}},[t._v("#")]),t._v(" About Actions")]),t._v(" "),e("p",[t._v("Each new step (or action) reached by the user is logged.\nThere is no single order on the platform, the actions are according to those defined in your campaign.\nBy definitions of governance and compliance, only when the user actually interacts with the campaign, clicking on buttons, or sending information, for example, does he change his action.")]),t._v(" "),e("p",[t._v("To consult the details of the main actions: "),e("a",{attrs:{href:"actions"}},[t._v("Actions")])]),t._v(" "),e("h2",{attrs:{id:"total-vs-unique"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#total-vs-unique"}},[t._v("#")]),t._v(" Total vs. Unique")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Total")]),t._v(" "),e("br"),t._v(" "),e("small",[t._v("(data.X)")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Good for knowing how many times a person has done that action. Total Calculation. Ideal for analyzing distribution lists or multiple accesses per contact.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Unique")]),t._v(" "),e("br"),t._v(" "),e("small",[t._v("(data_unique.X )")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Good to know if the person did the action or not. Single Calculation. Ideal to add the amount of people. It is the default for the platform.")])])])]),t._v(" "),e("h2",{attrs:{id:"order-of-major-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order-of-major-actions"}},[t._v("#")]),t._v(" Order of Major Actions")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Actions")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Totals")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Unique")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Sent")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.sent")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.sent")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Opened")]),t._v(" "),e("br"),t._v(" "),e("small",[t._v("(Traditional)")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.open_mail")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.open_mail")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Clicked")]),t._v(" "),e("br"),t._v(" "),e("small",[t._v("(Conversion or Main Activity)")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Interaction")]),t._v(" "),e("br"),t._v(" "),e("small",[t._v("(Opened or Clicked)")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.open_mail "),e("br"),t._v(" data.1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.open_mail "),e("br"),t._v(" data_unique.1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Second Activity")]),t._v(" "),e("br"),t._v(" "),e("small",[t._v("(Finished Main Activity)")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Other Activities")]),t._v(" "),e("br"),t._v(" "),e("small",[t._v("(...)")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.X")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.X")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Finished all Activities")]),t._v(" "),e("br"),t._v(" "),e("small",[t._v("(and redirected to default site)")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.last")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.last")])])])]),t._v(" "),e("h2",{attrs:{id:"key-metrics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key-metrics"}},[t._v("#")]),t._v(" Key Metrics")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Métrica")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Descrição")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Interactions")]),t._v(" "),e("br"),t._v(" "),e("small",[t._v("(Opened / Sent)")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Secondary metric to measure the interest / reading rate of the target audience for the topic.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Conversions")]),t._v(" "),e("br"),t._v(" "),e("small",[t._v("(Clicked / Opened)")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Main metric to measure the conversion / click rate of the target audience by the theme.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Finishes")]),t._v(" "),e("br"),t._v(" "),e("small",[t._v("(Finished / Main Activity)")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Optional metric to measure the rate of completion of the main activity by the target audience. The main activity may be different for each campaign. Examples: Finish Training, Answer the Questionnaire, Accept the Policy, etc.")])])])]),t._v(" "),e("h2",{attrs:{id:"main-objectives-of-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#main-objectives-of-actions"}},[t._v("#")]),t._v(" Main Objectives of Actions")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Objectives")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Totals")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Unique")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Training")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.training")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.training")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Closure")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.closure")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.closure")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Web Simulation")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.web_simulation")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.web_simulation")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Quiz")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.quiz")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.quiz")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Documentation")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.documentation")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.documentation")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Policy")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.policy")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.policy")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Redirection")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.redirection")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.redirection")])])])]),t._v(" "),e("h2",{attrs:{id:"top-examples-of-campaign-templates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#top-examples-of-campaign-templates"}},[t._v("#")]),t._v(" Top Examples of Campaign Templates")]),t._v(" "),e("h3",{attrs:{id:"message-opening-redirection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#message-opening-redirection"}},[t._v("#")]),t._v(" Message -> Opening -> Redirection")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Beginning")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("End")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Totals")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Unique")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Sent")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.sent")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.sent")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Opened")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Sent")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.interaction")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.interaction")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Redirection")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Abertura")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.1 "),e("br"),t._v(" data.redirection")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.1 "),e("br"),t._v(" data_unique.redirection")])])])]),t._v(" "),e("h3",{attrs:{id:"message-opening-training-opinion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#message-opening-training-opinion"}},[t._v("#")]),t._v(" Message -> Opening -> Training -> Opinion")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Beginning")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("End")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Totals")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Unique")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Sent")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.sent")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.sent")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Opened")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Sent")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.interaction")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.interaction")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Training")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Opened")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.1 "),e("br"),t._v(" data.training")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.1 "),e("br"),t._v(" data_unique.training")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Opinion")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Training")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.2 "),e("br"),t._v(" data.closure")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.2 "),e("br"),t._v(" data_unique.closure")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Last")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Opinion")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.last")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.last")])])])]),t._v(" "),e("h3",{attrs:{id:"message-opening-web-simulation-training-opinion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#message-opening-web-simulation-training-opinion"}},[t._v("#")]),t._v(" Message -> Opening -> Web Simulation -> Training -> Opinion")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Beginning")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("End")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Totals")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Unique")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Sent")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.sent")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.sent")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Opened")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Sent")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.interaction")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.interaction")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Web Simulation")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Opened")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.1 "),e("br"),t._v(" data.web_simulation")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.1 "),e("br"),t._v(" data_unique.web_simulation")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Training")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Web Simulation")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.2 "),e("br"),t._v(" data.training")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.2 "),e("br"),t._v(" data_unique.training")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Opinion")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Training")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.3 "),e("br"),t._v(" data.closure")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.3 "),e("br"),t._v(" data_unique.closure")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("b",[t._v("Last")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Opinion")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data.last")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.last")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);