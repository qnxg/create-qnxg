import Koa from 'koa';
import Warp from '../utils/warp';

class Ping {
  static get(ctx: Koa.Context): void {
    ctx.body = Warp.successWarp('get ping');
  }

  static post(ctx: Koa.Context): void {
    ctx.body = Warp.successWarp('post ping');
  }
}

export default Ping;
