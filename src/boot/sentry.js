import * as Sentry from "@sentry/vue";
import {Integrations} from "@sentry/tracing";

import {boot} from 'quasar/wrappers'
import router from 'src/router'

export default boot(() => {
    Sentry.init({
        dsn: "-",
        integrations: [
            new Integrations.BrowserTracing({
                routingInstrumentation: Sentry.vueRouterInstrumentation(router),
                tracingOrigins: [/*"localhost",*/ "-.ru", /^\//],
            }),
        ],
        tracesSampleRate: 1.0,
    });
})
