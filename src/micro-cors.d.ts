declare module 'micro-cors' {
  import { IncomingMessage, OutgoingMessage } from "http";

  namespace cors {
    export function handler(req: IncomingMessage, res: OutgoingMessage, ...rest: any[]): typeof handler | Promise<any> | void;

    export interface CorsOptions {
      maxAge?: string;
      origin?: string;
      allowHeaders?: string[];
      allowMethods?: string[];
      exposeHeaders?: string[];
    }
  }

  function cors(options?: cors.CorsOptions): (handle: typeof cors.handler) => typeof cors.handler;

  export = cors;
}
