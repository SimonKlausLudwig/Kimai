// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { Api } from './myApi'
// @ts-ignore
global.fetch = require('node-fetch')

export function getApi(url: string, user: string, token: string): Api<any> {
  return new Api({
    baseUrl: 'https://demo.kimai.org',
    baseApiParams: {
      headers: {
        'Content-Type': 'application/json',
        'X-AUTH-USER': 'anna_admin',
        'X-AUTH-TOKEN': 'Simon123'
      }
    }
  })
}
