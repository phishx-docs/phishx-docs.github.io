const { description } = require('../../package')

function config_base_locales(extra) {
  var config = {
    lang: extra.lang,
    description: extra.description,
    title: extra.title
  }
  return config
}
function config_locales(locale, extra) {
  var dir_guide = 'guide'
  var dir_terms = 'terms'
  var dir_requirements = 'requirements'
  var dir_google_gsuite = 'google-gsuite'
  var dir_microsoft_365 = 'microsoft-365'
  var dir_microsoft_outlook = 'microsoft-outlook'
  var dir_slack = 'slack'
  var dir_azure_ad = 'azure-ad'
  var dir_assistant = 'assistant'
  var dir_google = 'google'
  var dir_microsoft = 'microsoft'
  var dir_integrations = 'integrations'
  var dir_content = 'content'
  var dir_people = 'people'
  var dir_people_lists = 'lists'
  var dir_users = 'users'
  var dir_teams = 'teams'
  var dir_companies = 'companies'
  var dir_security = 'security'
  var dir_customization = 'customization'
  var dir_settings = 'settings'
  var dir_templates = 'templates'
  var dir_wizards = 'wizards'
  var dir_campaigns = 'campaigns'
  var dir_schedules = 'schedules'
  var dir_messages = 'messages'
  var dir_results = 'results'
  var dir_dashboards = 'dashboards'
  var dir_events = 'events'
  var dir_reports = 'reports'
  var dir_ui = 'ui'
  var config = {
    description: extra.description,
    searchPlaceholder: extra.searchPlaceholder,
    title: extra.title,
    tagline: null,
    selectText: extra.lang_selectText,
    label: extra.lang_label,
    ariaLabel: extra.lang_selectText,
    lastUpdated: extra.lastUpdated,
    // serviceWorker: {
    //   updatePopup: {
    //     message: extra.serviceWorker_message,
    //     buttonText: extra.serviceWorker_buttonText
    //   }
    // },
    nav: [
      {
        text: extra.guide,
        link: `/${locale}/${dir_guide}/`
      },
      {
        text: extra.terms,
        link: `/${locale}/${dir_terms}/`
      },
      {
        text: extra.content,
        link: `/${locale}/${dir_content}/`
      },
    ],
    sidebar: [
      `/${locale}/${dir_guide}/`,
      {
        title: extra.terms,
        collapsable: true,
        sidebarDepth: 0,
        children: [
          `/${locale}/${dir_terms}/`,
          `/${locale}/${dir_terms}/contract`,
          `/${locale}/${dir_terms}/ethics`,
          `/${locale}/${dir_terms}/privacy`,
        ]
      },
      {
        title: extra.requirements,
        collapsable: true,
        sidebarDepth: 0,
        children: [
          {
            title: extra.global,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_requirements}/`,
              `/${locale}/${dir_guide}/${dir_requirements}/domains`,
              `/${locale}/${dir_guide}/${dir_requirements}/ips`,
              `/${locale}/${dir_guide}/${dir_requirements}/communications`,
              `/${locale}/${dir_guide}/${dir_requirements}/certificates`,
            ]
          },
          {
            title: extra.google_gsuite,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_google_gsuite}/`,
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_google_gsuite}/image_url`,
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_google_gsuite}/e-mail_whitelist`,
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_google_gsuite}/spam`,
            ]
          },
          {
            title: extra.microsoft_365,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_microsoft_365}/`,
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_microsoft_365}/connectors`,
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_microsoft_365}/spam_filter`,
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_microsoft_365}/connection_filter`,
            ]
          },
          {
            title: extra.microsoft_outlook,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_microsoft_outlook}/`,
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_microsoft_outlook}/personal`,
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_microsoft_outlook}/list`,
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_microsoft_outlook}/registry`,
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_microsoft_outlook}/powershell`,
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_microsoft_outlook}/gpo`,
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_microsoft_outlook}/eop`,
            ]
          },
        ]
      },
      {
        title: extra.ui,
        collapsable: true,
        sidebarDepth: 0,
        children: [
          `/${locale}/${dir_guide}/${dir_ui}/`,
          `/${locale}/${dir_guide}/${dir_ui}/filters`,
          `/${locale}/${dir_guide}/${dir_ui}/search`,
          `/${locale}/${dir_guide}/${dir_ui}/languages`,
          `/${locale}/${dir_guide}/${dir_ui}/companies`,
          `/${locale}/${dir_guide}/${dir_ui}/logout`,
        ]
      },
      {
        title: extra.results,
        collapsable: true,
        sidebarDepth: 0,
        children: [
          `/${locale}/${dir_guide}/${dir_results}/`,
          {
            title: extra.dashboards,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/charts`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/filters`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/change_kpis`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/export`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/drilldown`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/change_group`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/main`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/realtime`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/groups`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/answers`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/events`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/devices`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/locations`,
              // `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/security`,
              // `/${locale}/${dir_guide}/${dir_results}/${dir_dashboards}/others`,
            ]
          },
          {
            title: extra.events,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_results}/${dir_events}/`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_events}/actions`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_events}/sent`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_events}/delivered`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_events}/reported`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_events}/devices`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_events}/locations`,
            ]
          },
          {
            title: extra.reports,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_results}/${dir_reports}/`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_reports}/types`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_reports}/formats`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_reports}/global`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_reports}/company`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_reports}/storage`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_reports}/results`,
            ]
          },
          {
            title: extra.settings,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_results}/${dir_settings}/`,
              `/${locale}/${dir_guide}/${dir_results}/${dir_settings}/edit_settings`,
            ]
          },
          `/${locale}/${dir_guide}/${dir_results}/actions`,
          `/${locale}/${dir_guide}/${dir_results}/data`,
          `/${locale}/${dir_guide}/${dir_results}/faq`,
        ]
      },
      {
        title: extra.campaigns,
        collapsable: true,
        sidebarDepth: 0,
        children: [
          `/${locale}/${dir_guide}/${dir_campaigns}/`,
          {
            title: extra.campaigns,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_campaigns}/${dir_campaigns}/`,
              {
                title: extra.create_campaign,
                collapsable: true,
                sidebarDepth: 0,
                children: [
                  `/${locale}/${dir_guide}/${dir_campaigns}/${dir_campaigns}/create_campaign`,
                  `/${locale}/${dir_guide}/${dir_campaigns}/${dir_campaigns}/settings`,
                  `/${locale}/${dir_guide}/${dir_campaigns}/${dir_campaigns}/schedule`,
                  `/${locale}/${dir_guide}/${dir_campaigns}/${dir_campaigns}/replays`,
                  `/${locale}/${dir_guide}/${dir_campaigns}/${dir_campaigns}/people`,
                  `/${locale}/${dir_guide}/${dir_campaigns}/${dir_campaigns}/actions`,
                  `/${locale}/${dir_guide}/${dir_campaigns}/${dir_campaigns}/editor`,
                  `/${locale}/${dir_guide}/${dir_campaigns}/${dir_campaigns}/confirmation`,
                ]
              },
              `/${locale}/${dir_guide}/${dir_campaigns}/${dir_campaigns}/view`,
              `/${locale}/${dir_guide}/${dir_campaigns}/${dir_campaigns}/auth`,
            ]
          },
          {
            title: extra.schedules,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_campaigns}/${dir_schedules}/`,
              `/${locale}/${dir_guide}/${dir_campaigns}/${dir_schedules}/edit_schedule`,
            ]
          },
          {
            title: extra.messages,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_campaigns}/${dir_messages}/`,
              `/${locale}/${dir_guide}/${dir_campaigns}/${dir_messages}/edit_message`,
            ]
          },
          `/${locale}/${dir_guide}/${dir_campaigns}/suggestions`,
          `/${locale}/${dir_guide}/${dir_campaigns}/approvals`,
        ]
      },
      {
        title: extra.templates,
        collapsable: true,
        sidebarDepth: 0,
        children: [
          `/${locale}/${dir_guide}/${dir_templates}/`,
          `/${locale}/${dir_guide}/${dir_templates}/actions`,
          `/${locale}/${dir_guide}/${dir_templates}/libraries`,
          `/${locale}/${dir_guide}/${dir_templates}/editors`,
          `/${locale}/${dir_guide}/${dir_templates}/objectives`,
          `/${locale}/${dir_guide}/${dir_templates}/create_template`,
          `/${locale}/${dir_guide}/${dir_templates}/storage`,
          `/${locale}/${dir_guide}/${dir_templates}/approvals`,
          {
            title: extra.wizards,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_templates}/${dir_wizards}/`,
              `/${locale}/${dir_guide}/${dir_templates}/${dir_wizards}/redirection`,
              `/${locale}/${dir_guide}/${dir_templates}/${dir_wizards}/documents`,
              `/${locale}/${dir_guide}/${dir_templates}/${dir_wizards}/videos`,
              `/${locale}/${dir_guide}/${dir_templates}/${dir_wizards}/login`,
            ]
          },
        ]
      },
      {
        title: extra.people,
        collapsable: true,
        sidebarDepth: 0,
        children: [
          `/${locale}/${dir_guide}/${dir_people}/`,
          {
            title: extra.people_lists,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_people}/${dir_people_lists}/`,
              `/${locale}/${dir_guide}/${dir_people}/${dir_people_lists}/import_list`,
              `/${locale}/${dir_guide}/${dir_people}/${dir_people_lists}/import_directory`,
              `/${locale}/${dir_guide}/${dir_people}/${dir_people_lists}/add_contacts`,
              `/${locale}/${dir_guide}/${dir_people}/${dir_people_lists}/random`,
              `/${locale}/${dir_guide}/${dir_people}/${dir_people_lists}/export`,
              `/${locale}/${dir_guide}/${dir_people}/${dir_people_lists}/change_fields`,
              `/${locale}/${dir_guide}/${dir_people}/${dir_people_lists}/delete`,
            ]
          },
          `/${locale}/${dir_guide}/${dir_people}/storage/`,
          `/${locale}/${dir_guide}/${dir_people}/contacts/`,
          `/${locale}/${dir_guide}/${dir_people}/dynamic/`,
          `/${locale}/${dir_guide}/${dir_people}/smart/`,
          `/${locale}/${dir_guide}/${dir_people}/results/`,
          `/${locale}/${dir_guide}/${dir_people}/exclusions/`,
        ]
      },
      {
        title: extra.users,
        collapsable: true,
        sidebarDepth: 0,
        children: [
          `/${locale}/${dir_guide}/${dir_users}/`,
          `/${locale}/${dir_guide}/${dir_users}/first_access`,
          `/${locale}/${dir_guide}/${dir_users}/login`,
          `/${locale}/${dir_guide}/${dir_users}/profile`,
          `/${locale}/${dir_guide}/${dir_users}/authentication`,
          `/${locale}/${dir_guide}/${dir_users}/authorization`,
          `/${locale}/${dir_guide}/${dir_users}/reset_password`,
          `/${locale}/${dir_guide}/${dir_users}/unlock_account`,
          `/${locale}/${dir_guide}/${dir_users}/create_user`,
          `/${locale}/${dir_guide}/${dir_users}/send_password`,
        ]
      },
      {
        title: extra.companies,
        collapsable: true,
        sidebarDepth: 0,
        children: [
          `/${locale}/${dir_guide}/${dir_companies}/`,
          {
            title: extra.profile,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_companies}/profile`,
              {
                title: extra.settings,
                collapsable: true,
                sidebarDepth: 0,
                children: [
                `/${locale}/${dir_guide}/${dir_companies}/${dir_settings}/campaign_approval`,
                `/${locale}/${dir_guide}/${dir_companies}/${dir_settings}/template_approval`,
                `/${locale}/${dir_guide}/${dir_companies}/${dir_settings}/domains`,
                `/${locale}/${dir_guide}/${dir_companies}/${dir_settings}/validation_e-mails`,
                `/${locale}/${dir_guide}/${dir_companies}/${dir_settings}/labels`,
                ],
              },
              {
                title: extra.customization,
                collapsable: true,
                sidebarDepth: 0,
                children: [
                  `/${locale}/${dir_guide}/${dir_companies}/${dir_customization}/e-mails`,
                  `/${locale}/${dir_guide}/${dir_companies}/${dir_customization}/branding`,
                ],
              },
              {
                title: extra.security,
                collapsable: true,
                sidebarDepth: 0,
                children: [
                  `/${locale}/${dir_guide}/${dir_companies}/${dir_security}/providers`,
                  `/${locale}/${dir_guide}/${dir_companies}/${dir_security}/authentication`,
                  `/${locale}/${dir_guide}/${dir_companies}/${dir_security}/adfs`,
                  `/${locale}/${dir_guide}/${dir_companies}/${dir_security}/azure_ad`,
                  `/${locale}/${dir_guide}/${dir_companies}/${dir_security}/hours`,
                  `/${locale}/${dir_guide}/${dir_companies}/${dir_security}/portal_auth`,
                  `/${locale}/${dir_guide}/${dir_companies}/${dir_security}/passwords`,
                  `/${locale}/${dir_guide}/${dir_companies}/${dir_security}/networks`,
                ],
              },
            ]
          },
          `/${locale}/${dir_guide}/${dir_companies}/create_company`,
          `/${locale}/${dir_guide}/${dir_companies}/api`,
          `/${locale}/${dir_guide}/${dir_companies}/companies`,
          `/${locale}/${dir_guide}/${dir_companies}/subscriptions`,
          `/${locale}/${dir_guide}/${dir_companies}/tokens`,
          `/${locale}/${dir_guide}/${dir_companies}/audit`,
        ]
      },
      {
        title: extra.intregrations,
        collapsable: true,
        sidebarDepth: 0,
        children: [
          {
            title: extra.azure_ad,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_integrations}/${dir_azure_ad}/`,
              `/${locale}/${dir_guide}/${dir_integrations}/${dir_azure_ad}/application_registration`,
              `/${locale}/${dir_guide}/${dir_integrations}/${dir_azure_ad}/enterprise_applications`,
              `/${locale}/${dir_guide}/${dir_integrations}/${dir_azure_ad}/phishx`,
              `/${locale}/${dir_guide}/${dir_integrations}/${dir_azure_ad}/communications`,
            ]
          },
          {
            title: extra.slack,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_integrations}/${dir_slack}/`,
              `/${locale}/${dir_guide}/${dir_integrations}/${dir_slack}/connect`,
              `/${locale}/${dir_guide}/${dir_integrations}/${dir_slack}/import`,
              `/${locale}/${dir_guide}/${dir_integrations}/${dir_slack}/channels`,
              `/${locale}/${dir_guide}/${dir_integrations}/${dir_slack}/users`,
              `/${locale}/${dir_guide}/${dir_integrations}/${dir_slack}/message`,
              `/${locale}/${dir_guide}/${dir_integrations}/${dir_slack}/lists`,
            ]
          },
          {
            title: extra.assistant,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              {
                title: extra.microsoft,
                collapsable: true,
                sidebarDepth: 0,
                children: [
                  `/${locale}/${dir_guide}/${dir_integrations}/${dir_assistant}/${dir_microsoft}/`,
                  `/${locale}/${dir_guide}/${dir_integrations}/${dir_assistant}/${dir_microsoft}/requirements`,
                  `/${locale}/${dir_guide}/${dir_integrations}/${dir_assistant}/${dir_microsoft}/single`,
                  `/${locale}/${dir_guide}/${dir_integrations}/${dir_assistant}/${dir_microsoft}/global`,
                  `/${locale}/${dir_guide}/${dir_integrations}/${dir_assistant}/${dir_microsoft}/user`,
                ]
              },
              {
                title: extra.google,
                collapsable: true,
                sidebarDepth: 0,
                children: [
                  `/${locale}/${dir_guide}/${dir_integrations}/${dir_assistant}/${dir_google}/`,
                  `/${locale}/${dir_guide}/${dir_integrations}/${dir_assistant}/${dir_google}/requirements`,
                  `/${locale}/${dir_guide}/${dir_integrations}/${dir_assistant}/${dir_google}/single`,
                  `/${locale}/${dir_guide}/${dir_integrations}/${dir_assistant}/${dir_google}/global`,
                  `/${locale}/${dir_guide}/${dir_integrations}/${dir_assistant}/${dir_google}/user`,
                ]
              },
            ]
          },
        ]
      },
      {
        title: extra.content,
        collapsable: true,
        sidebarDepth: 0,
        children: [
          `/${locale}/${dir_content}/`,
          `/${locale}/${dir_content}/quiz`,
          `/${locale}/${dir_content}/third-party`,
        ]
      },
    ],
  }
  return config
}
var config_locales_en = config_locales('en', {
  lang_selectText: 'Languages',
  lang_label: 'English',
  guide: 'Guide',
  terms: 'Terms',
  lastUpdated: 'Last Updated',
  requirements: 'Requirements',
  global: 'General',
  intregrations: 'Intregrations',
  google_gsuite: 'Google G Suite',
  google: 'Google',
  microsoft: 'Microsoft',
  assistant: 'Assistant',
  microsoft_365: 'Microsoft 365',
  microsoft_outlook: 'Microsoft Outlook',
  azure_ad: 'Azure AD',
  slack: 'Slack',
  content: 'Content',
  serviceWorker_message: 'New content is available.',
  serviceWorker_buttonText: 'Refresh',
  ui: 'User Interface',
  people: 'People',
  people_lists: 'Lists',
  users: 'Users',
  teams: 'Teams',
  companies: 'Companies',
  security: 'Security',
  customization: 'Customization',
  settings: 'Settings',
  profile: 'Profile',
  wizards: 'Wizards',
  templates: 'Templates',
  campaigns: 'Campaigns',
  create_campaign: 'Create Campaign',
  schedules: 'Schedules',
  messages: 'Messages',
  suggestions: 'Suggestions',
  results: 'Results',
  dashboards: 'Dashboards',
  events: 'Events',
  reports: 'Reports',
  settings: 'Settings',
  searchPlaceholder: 'Search...'
})
var config_locales_es = config_locales('es', {
  lang_selectText: 'Idiomas',
  lang_label: 'Español',
  guide: 'Guía',
  terms: 'Condiciones',
  lastUpdated: 'Última Actualización',
  requirements: 'Requisitos',
  global: 'General',
  intregrations: 'Intregraciones',
  google: 'Google',
  google_gsuite: 'Google G Suite',
  microsoft: 'Microsoft',
  assistant: 'Assistant',
  microsoft_365: 'Microsoft 365',
  microsoft_outlook: 'Microsoft Outlook',
  azure_ad: 'Azure AD',
  slack: 'Slack',
  content: 'Contenido',
  serviceWorker_message: 'Hay contenido nuevo disponible.',
  serviceWorker_buttonText: 'Actualizar',
  ui: 'Interfaz de Usuario',
  people: 'Gente',
  people_lists: 'Listas',
  users: 'Usuarios',
  teams: 'Equipos',
  companies: 'Empresas',
  security: 'Seguridad',
  customization: 'Personalización',
  settings: 'Configuración',
  profile: 'Perfil',
  wizards: 'Asistentes',
  templates: 'Plantillas',
  campaigns: 'Campañas',
  create_campaign: 'Crear Campaña',
  schedules: 'Programación',
  messages: 'Mensajes',
  suggestions: 'Sugerencias',
  results: 'Resultados',
  dashboards: 'Dashboards',
  events: 'Eventos',
  reports: 'Reports',
  settings: 'Configuración',
  searchPlaceholder: 'Buscar...'
})
var config_locales_pt = config_locales('pt', {
  lang_selectText: 'Idiomas',
  lang_label: 'Português',
  guide: 'Guia',
  terms: 'Termos',
  lastUpdated: 'Última Atualização',
  requirements: 'Requisitos',
  global: 'Gerais',
  intregrations: 'Integrações',
  google: 'Google',
  google_gsuite: 'Google G Suite',
  microsoft: 'Microsoft',
  assistant: 'Assistant',
  microsoft_365: 'Microsoft 365',
  microsoft_outlook: 'Microsoft Outlook',
  azure_ad: 'Azure AD',
  slack: 'Slack',
  content: 'Conteúdo',
  serviceWorker_message: 'Novo conteúdo disponível.',
  serviceWorker_buttonText: 'Atualizar',
  ui: 'Interface do Usuário',
  people: 'Pessoas',
  people_lists: 'Listas',
  users: 'Usuários',
  teams: 'Times',
  companies: 'Empresas',
  security: 'Segurança',
  customization: 'Customizações',
  settings: 'Configurações',
  profile: 'Perfil',
  wizards: 'Assistentes',
  templates: 'Modelos',
  campaigns: 'Campanhas',
  create_campaign: 'Criar Campanha',
  schedules: 'Agendamentos',
  messages: 'Mensagens',
  suggestions: 'Sugestões',
  results: 'Resultados',
  dashboards: 'Painéis',
  events: 'Eventos',
  reports: 'Relatórios',
  settings: 'Configurações',
  searchPlaceholder: 'Procurar...'
})
var config_base_locales_en = config_base_locales({
  lang: 'English',
  description: 'PhishX - Documentation',
  title: 'Documentation'
})
var config_base_locales_es = config_base_locales({
  lang: 'Español',
  description: 'PhishX - Documentación',
  title: 'Documentación'
})
var config_base_locales_pt = config_base_locales({
  lang: 'Português',
  description: 'Documentação da PhishX',
  title: 'Documentação'
})

module.exports = {
  markdown: {
    lineNumbers: false
  },
  title: 'PhishX',
  description: description,
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://cdn.phishx.io/app/icons/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://cdn.phishx.io/app/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://cdn.phishx.io/app/icons/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: 'https://cdn.phishx.io/app/icons/manifest.json' }],
    ['link', { rel: 'mask-icon', color: '#FFFFFF', href: 'https://cdn.phishx.io/app/icons/safari-pinned-tab.svg' }],
    ['link', { rel: 'shortcut icon', href: 'https://cdn.phishx.io/app/icons/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#008060' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-config', content: 'https://cdn.phishx.io/app/icons/browserconfig.xml' }],
    ['meta', { name: 'msapplication-config', content: 'https://cdn.phishx.io/app/icons/browserconfig.xml' }],
    //['link', { rel: 'stylesheet', href: 'https://cdn.phishx.io/assets/fontawesome/css/fontawesome-all.min.css' }],
  ],
  // base: '/',
  smoothScroll: true,
  locales: {
    '/': config_base_locales_en,
    '/es/': config_base_locales_es,
    '/pt/': config_base_locales_pt
  },
  theme: 'vuepress-theme-succinct',
  globalUIComponents: [
    'ThemeManager'
  ],
  themeConfig: {
    repo: '',
    algolia: {
      apiKey: '158795655be346db4f358da20bc6aef9',
      indexName: 'phishx'
    },
    activeHeaderLinks: true,
    editLinks: false,
    displayAllHeaders: true,
    docsDir: '',
    editLinkText: '',
    logo: 'https://cdn.phishx.io/phishx-docs/images/phishx_logo_gray.webp',
    locales: {
      '/': config_locales_en,
      '/es/': config_locales_es,
      '/pt/': config_locales_pt
    },
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    'vuepress-plugin-smooth-scroll',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          var locale
          switch (lang) {
            case ("English"):
              locale = "en-US"
              break
            case ("Español"):
              locale = "es-ES"
              break
            case ("Português"):
              locale = "pt-BR"
              break
            default:
              locale = "en-US"
              break
          }
          moment.locale(locale)
          return moment(timestamp).fromNow()
        }
      }
    ],
    [
      'vuepress-plugin-code-copy',
      true
    ]
  ]
}
