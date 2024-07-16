(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{817:function(t,a,e){"use strict";e.r(a);var i=e(8),l=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dados-exportados"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dados-exportados"}},[t._v("#")]),t._v(" Dados Exportados")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Dados pela ordem númerica ou pelo objetivo da ação")]),t._v(" "),a("p",[t._v("Nos dados exportados mostramos tanto o objetivo quanto a ordem numérica da ação. Por exemplo, data_unique.1 pode ser igual a data_unique.training quando a primeira etapa da campanha for do tipo treinamento.")])]),t._v(" "),a("p",[t._v("Ao exportar os dados da plataforma via relatórios ou integrando a API, os dados serão exportados de acordo com as definições a seguir. "),a("a",{attrs:{href:"../companies/api"}},[t._v("API")])]),t._v(" "),a("p",[t._v("Nossa API está documentada em: "),a("a",{attrs:{href:"http://apidocs.phishx.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Documentação da API"),a("OutboundLink")],1)]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Quer um novo relatório pronto e customizado?")]),t._v(" "),a("p",[t._v("Converse com o time de Customer Success. "),a("a",{attrs:{href:"mailto:cs@phishx.io"}},[t._v("Customer Success")])])]),t._v(" "),a("h2",{attrs:{id:"sobre-as-acoes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sobre-as-acoes"}},[t._v("#")]),t._v(" Sobre as ações")]),t._v(" "),a("p",[t._v("Cada nova etapa (ou ação) atingida pelo usuário é registrada.\nNa plataforma não existe uma ordem única, as ações são de acordo com as definidas em sua campanha.\nPor definições de governança e conformidade apenas quando o usuário de fato interagir com a campanha, clicando em botões, ou enviando informações, por exemplo é que ele muda de ação.")]),t._v(" "),a("p",[t._v("Para consultar o detalhamento das principais ações: "),a("a",{attrs:{href:"actions"}},[t._v("Ações")])]),t._v(" "),a("h2",{attrs:{id:"total-vs-unico"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#total-vs-unico"}},[t._v("#")]),t._v(" Total vs. Único")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Tipo")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descrição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Total")]),t._v(" "),a("br"),t._v(" "),a("small",[t._v("(data.X)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Bom para saber quantas vezes uma pessoa fez aquela ação. Cálculo Total. Ideal para analisar listas de distribuição ou múltiplos acessos por contato.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Único")]),t._v(" "),a("br"),t._v(" "),a("small",[t._v("(data_unique.X )")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Bom para saber se a pessoa fez ou não a ação. Cálculo Único. Ideal para somar o quantidade de pessoas. É o padrão da plataforma.")])])])]),t._v(" "),a("h2",{attrs:{id:"ordem-das-principais-acoes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ordem-das-principais-acoes"}},[t._v("#")]),t._v(" Ordem das Principais Ações")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Ações")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Totais")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Únicos")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Envio")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.sent")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.sent")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Abertura")]),t._v(" "),a("br"),t._v(" "),a("small",[t._v("(Tradicional)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.open_mail")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.open_mail")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Clique")]),t._v(" "),a("br"),t._v(" "),a("small",[t._v("(Conversão ou Atividade Principal)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Interação")]),t._v(" "),a("br"),t._v(" "),a("small",[t._v("(Abertura ou Clique)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.open_mail "),a("br"),t._v(" data.1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.open_mail "),a("br"),t._v(" data_unique.1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Segunda Atividade")]),t._v(" "),a("br"),t._v(" "),a("small",[t._v("(Finalizou a Atividade Principal)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Demais Atividades")]),t._v(" "),a("br"),t._v(" "),a("small",[t._v("(...)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.X")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.X")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Terminou todas as Atividades")]),t._v(" "),a("br"),t._v(" "),a("small",[t._v("(e foi redirecionado para o site padrão)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.last")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.last")])])])]),t._v(" "),a("h2",{attrs:{id:"principais-metricas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principais-metricas"}},[t._v("#")]),t._v(" Principais Métricas")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Métrica")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descrição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Interações")]),t._v(" "),a("br"),t._v(" "),a("small",[t._v("(Aberturas / Envios)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Métrica secundária para mensurar a taxa de interesse / leitura do público-alvo pelo tema.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Conversões")]),t._v(" "),a("br"),t._v(" "),a("small",[t._v("(Cliques / Aberturas)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Métrica principal para mensurar a taxa de conversão / clique do público-alvo pelo tema.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Finalizações")]),t._v(" "),a("br"),t._v(" "),a("small",[t._v("(Finalizados / Etapa Principal)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Métrica opcional para mensurar a taxa de finalizações da atividade principal pelo público-alvo. A atividade principal pode ser diferente a cada campanha. Exemplos: Terminar o Treinanmento, Responder o Questionário, Aceitar a Política, etc.")])])])]),t._v(" "),a("h2",{attrs:{id:"principais-objetivos-das-acoes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principais-objetivos-das-acoes"}},[t._v("#")]),t._v(" Principais Objetivos das Ações")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Objetivos")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Totais")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Únicos")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Treinamento")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.training")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.training")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Encerramento")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.closure")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.closure")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Simulação Web")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.web_simulation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.web_simulation")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Questionário")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.quiz")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.quiz")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Documentação")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.documentation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.documentation")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Política")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.policy")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.policy")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Redirecionamento")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.redirection")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.redirection")])])])]),t._v(" "),a("h2",{attrs:{id:"principais-exemplos-de-modelos-de-campanhas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principais-exemplos-de-modelos-de-campanhas"}},[t._v("#")]),t._v(" Principais Exemplos de Modelos de Campanhas")]),t._v(" "),a("h3",{attrs:{id:"mensagem-abertura-redirecionamento"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mensagem-abertura-redirecionamento"}},[t._v("#")]),t._v(" Mensagem -> Abertura -> Redirecionamento")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Início")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Fim")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Totais")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Únicos")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Envio")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.sent")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.sent")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Abertura")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Envio")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.interaction")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.interaction")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Redirecionamento")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.1 "),a("br"),t._v(" data.redirection")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.1 "),a("br"),t._v(" data_unique.redirection")])])])]),t._v(" "),a("h3",{attrs:{id:"mensagem-abertura-treinamento-opiniao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mensagem-abertura-treinamento-opiniao"}},[t._v("#")]),t._v(" Mensagem -> Abertura -> Treinamento -> Opinião")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Início")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Fim")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Totais")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Únicos")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Envio")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.sent")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.sent")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Abertura")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Envio")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.interaction")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.interaction")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Treinamento")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Abertura")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.1 "),a("br"),t._v(" data.training")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.1 "),a("br"),t._v(" data_unique.training")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Opinião")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Treinamento")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.2 "),a("br"),t._v(" data.closure")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.2 "),a("br"),t._v(" data_unique.closure")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Última")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Opinião")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.last")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.last")])])])]),t._v(" "),a("h3",{attrs:{id:"mensagem-abertura-simulacao-web-treinamento-opiniao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mensagem-abertura-simulacao-web-treinamento-opiniao"}},[t._v("#")]),t._v(" Mensagem -> Abertura -> Simulação Web -> Treinamento -> Opinião")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Início")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Fim")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Totais")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Únicos")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Envio")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.sent")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.sent")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Abertura")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Envio")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.interaction")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.interaction")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Simulação Web")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Abertura")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.1 "),a("br"),t._v(" data.web_simulation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.1 "),a("br"),t._v(" data_unique.web_simulation")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Treinamento")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Simulação Web")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.2 "),a("br"),t._v(" data.training")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.2 "),a("br"),t._v(" data_unique.training")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Opinião")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Treinamento")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.3 "),a("br"),t._v(" data.closure")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.3 "),a("br"),t._v(" data_unique.closure")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("b",[t._v("Última")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Opinião")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data.last")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("data_unique.last")])])])])])}),[],!1,null,null,null);a.default=l.exports}}]);