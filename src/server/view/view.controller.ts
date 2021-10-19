import { Controller, Get, Logger, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ViewService } from './view.service';

@Controller('/')
export class ViewController {
  private readonly logger = new Logger(ViewController.name);
  constructor(private readonly viewService: ViewService) {}

  @Get('*')
  handleNext(@Req() req: Request, @Res() res: Response) {
    this.logger.log('Handling request for ' + req.url);
    const handle = this.viewService.getNextServer().getRequestHandler();
    handle(req, res);
  }
}
