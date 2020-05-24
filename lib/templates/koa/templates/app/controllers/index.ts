import Koa from 'koa';
import Router from '@koa/router';
import Ping from './ping';

const registerRouter = (app: Koa): void => {
  const router = new Router();
  router.get('/ping', Ping.get).post('/ping', Ping.post);

  app.use(router.routes()).use(router.allowedMethods());
};

export default registerRouter;
