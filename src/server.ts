import {IncomingMessage} from 'http'
import micro from 'micro'

import handler from './handler'

export interface IReq extends IncomingMessage {
  proxyUrl: string
}

export default (port: string, url: string) => {
  const server = micro(async (req, res) => {
    (req as IReq).proxyUrl = url
    return handler(req, res)
  })

  server.listen(port, () => {
    console.info(`Serving proxy server on :${port}`) // tslint:disable-line
  })
}
