import Koa from 'koa';
import Singleton from './daos';
import koaBody from 'koa-body';
import registerRouter from './controllers';

const createKoaApp = (config: config.RootObject) => {
  const app = new Koa();

  // 初始化数据库连接
  Singleton.initInstance(config);

  // body 中间件
  app.use(koaBody());

  // 注册路由
  registerRouter(app);

  return app;
};

export default createKoaApp;
