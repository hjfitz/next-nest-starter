import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import next from 'next';
import * as path from 'path';
import { NextServer } from 'next/dist/server/next';

@Injectable()
export class ViewService implements OnModuleInit {
  private server: NextServer;
  private readonly logger = new Logger(ViewService.name);
  private readonly nextRoot = path.join(process.cwd(), 'src/client');

  onModuleInit(): Promise<void> {
    this.logger.log('initialising server with root dir: ' + this.nextRoot);
    this.server = next({ dev: true, dir: this.nextRoot });
    return this.server.prepare();
  }

  getNextServer(): NextServer {
    return this.server;
  }
}
