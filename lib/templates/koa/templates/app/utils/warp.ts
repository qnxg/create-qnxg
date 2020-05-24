import errors from './errors';

class Warp {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static successWarp(data: any) {
    return {
      code: 0,
      msg: 'success',
      data: data,
    };
  }

  static failWarp(code: number, msg = '') {
    let temp: string;
    if (msg === '') {
      temp = errors[code];
    } else {
      temp = msg;
    }

    return {
      code: code,
      msg: temp,
      data: null,
    };
  }
}

export default Warp;
