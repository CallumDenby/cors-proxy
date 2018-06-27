import {IncomingMessage} from 'http'
import * as cors from 'micro-cors'
import fetch from 'node-fetch'
import {stringify} from 'querystring'
import {parse} from 'url'

import {IReq} from './server'

const handler = async (req: IncomingMessage) => {
  const {query, pathname} = parse(req.url || '', true)

  const querystring = Object.keys(query).length > 0 ? `?${stringify(query)}` : ''

  const url = `${(req as IReq).proxyUrl}${pathname}${querystring}`
  try {
    console.log(`Fetching ${url}`) // tslint:disable-line
    const response = await fetch(url)
    return await response.json()
  } catch (e) {
    return e
  }

}

export default cors()(handler)
