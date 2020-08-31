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
  var dir_azure_ad = 'azure-ad'
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
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_google_gsuite}/email_whitelist`,
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
                `/${locale}/${dir_guide}/${dir_companies}/${dir_settings}/validation_emails`,
                `/${locale}/${dir_guide}/${dir_companies}/${dir_settings}/labels`,
                ],
              },
              {
                title: extra.customization,
                collapsable: true,
                sidebarDepth: 0,
                children: [
                  `/${locale}/${dir_guide}/${dir_companies}/${dir_customization}/emails`,
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
        ]
      },
      {
        title: extra.content,
        collapsable: true,
        sidebarDepth: 0,
        children: [
          `/${locale}/${dir_content}/`,
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
  microsoft_365: 'Microsoft 365',
  azure_ad: 'Azure AD',
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
  searchPlaceholder: 'Search...'
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
  google_gsuite: 'Google G Suite',
  microsoft_365: 'Microsoft 365',
  azure_ad: 'Azure AD',
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
  searchPlaceholder: 'Procurar...'
})
var config_base_locales_en = config_base_locales({
  lang: 'English',
  description: 'PhishX - Documentation',
  title: 'Documentation'
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
