import { Command, flags } from '@oclif/command';
import server from './server';

class CorsCli extends Command {
  static description = 'describe the command here'

  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    port: flags.string({ char: 'p', description: 'port to bind' }),
  }

  static args = [{
    name: 'url',
    required: true,
    description: 'url to forward traffic'
  }]

  async run() {
    const { args, flags } = this.parse(CorsCli)
    const { port = '3000' } = flags;

    server(port, args.url);
  }
}

export = CorsCli;
