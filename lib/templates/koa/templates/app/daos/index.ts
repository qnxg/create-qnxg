import {Sequelize} from 'sequelize';

class Singleton {
  static instance: Sequelize | null = null;

  //静态方法
  static getInstance(): Sequelize {
    if (!this.instance) {
      throw new Error('instance must be inited');
    }
    return this.instance;
  }

  static initInstance({dbURL}: config.RootObject): void {
    this.instance = new Sequelize(dbURL, {
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    });
  }
}

export default Singleton;
