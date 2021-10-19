import { Injectable } from '@nestjs/common';

@Injectable()
export class ViewService2 {

  someFunc(): string {
    console.log('oi')
    return 'hello'
  }

}
