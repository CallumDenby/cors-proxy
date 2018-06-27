import { OutgoingMessage, IncomingMessage } from 'http';
import { IReq } from './server';
import fetch from 'node-fetch';
import * as cors from 'micro-cors';
import { parse } from 'url';
const qs = require('querystring');

const handler = async (req: IncomingMessage, res: OutgoingMessage) => {
  const { query, pathname } = parse(req.url || '', true);


  const querystring = Object.keys(query).length > 0 ? `?${qs.stringify(query)}` : ''

  const url = `${(req as IReq).proxyUrl}${pathname}${querystring}`
  console.log(`Fetching ${url}`)
  try {
    const response = await fetch(url);
    return await response.json();
  } catch(e) {
    return e;
  }

}

export default cors()(handler);
