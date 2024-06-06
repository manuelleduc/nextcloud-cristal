/*import Vue from 'vue'
import App from './App.vue'
Vue.mixin({ methods: { t, n } })

const View = Vue.extend(App)
new View().$mount('#cristal')*/

import {CristalAppLoader} from '@xwiki/cristal-lib'
import {ComponentInit as BrowserComponentInit} from '@xwiki/cristal-browser-default'

// import "@xwiki/cristal-dsshoelace"

debugger;
CristalAppLoader.init([
        "skin",
        "dsvuetify",
        "dsfr",
        "dsshoelace",
        "macros",
        "storage",
        "extension-menubuttons",
        "sharedworker",
    ],
    async () => {
        return {
            "XWikiSL": {
                "name": "apps/cristal/",
                "configType": "XWiki",
                "serverRendering": false,
                "offline": false,
                "baseURL": "https://cristal.demo.xwiki.com/xwiki",
                "baseRestURL": "/rest/cristal/page?media=json",
                "homePage": "Main.WebHome",
                "designSystem": "shoelace"
            }
        }
    },
    true,
    false,
    'XWikiSL',
    (container) => {
        // eslint-disable-next-line no-new
        new BrowserComponentInit(container)
    },
)
