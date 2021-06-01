import { FullTap, TapType } from '../../types/tapable'
import { AbstractMethodAvoidCallException } from './errors/methods'

/**
 * Hook 基类
 */
export default class Hook {
  /**
   * 参数列表
   */
  _args: string[] = []

  /**
   * 名字
   */
  name: string = ''

  /**
   * 回调集合
   */
  taps: FullTap[] = []

  /**
   * 阻断器 -- 暂不实现
   */
  // interceptors

  /**
   * 构造器
   * @param args
   * @param name
   */
  constructor (args: string[], name: string = '') {
    this._args = args
    this.name = name
  }

  /**
   * 创建调用语句
   *
   * 子类实现
   */
  _createCall(type: TapType) {
    const { taps, _args: args } = this
    this.compile({
      taps,
      args,
      type
    })
  }

  /**
   * 生成调用中间态
   *
   * 子类实现
   */
  compile(args: any) {
    throw new AbstractMethodAvoidCallException('Need to be override by sub class.')
  }

  /**
   * 同步调用
   *
   * 子类实现
   */
  call() {
    throw new AbstractMethodAvoidCallException('Need to be override by sub class.')
  }

  /**
   * 异步调用
   *
   * 子类实现
   */
  callAsync() {
    throw new AbstractMethodAvoidCallException('Need to be override by sub class.')
  }

  /**
   * Promise 方式异步调用
   *
   * 子类实现
   */
  callPromise() {
    throw new AbstractMethodAvoidCallException('Need to be override by sub class.')
  }
}
