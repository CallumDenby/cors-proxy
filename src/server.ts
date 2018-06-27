import micro from 'micro';
import handler from './handler';
import { IncomingMessage } from 'http';

export interface IReq extends IncomingMessage {
  proxyUrl: string;
}

export default (port: string, url: string) => {
  const server = micro(async (req, res) => {
    (req as IReq).proxyUrl = url;
    return await handler(req, res);
  })

  server.listen(port, () => {
    console.info(`Serving proxy server on :${port}`)
  });
}
