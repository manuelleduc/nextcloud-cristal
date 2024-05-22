/*import Vue from 'vue'
import App from './App.vue'
Vue.mixin({ methods: { t, n } })

const View = Vue.extend(App)
new View().$mount('#cristal')*/

import { CristalAppLoader } from '@cristal/lib'
import { ComponentInit as BrowserComponentInit } from '@cristal/browser-default'

console.log('INIT INIT')


CristalAppLoader.init(  [
		"skin",
		"dsvuetify",
		"dsfr",
		"dsshoelace",
		"macros",
		"storage",
		"extension-menubuttons",
		"sharedworker",
	],
	'/config.json',
	true,
	false,
	'NextCloud',
	(container) => {
		// eslint-disable-next-line no-new
		new BrowserComponentInit(container)
	},
)
