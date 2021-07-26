import { AbstractMethodAvoidCallException } from './utils/error'

/**
 * Hook 基类
 */
export default class Hook {
  /**
   * 参数列表
   */
  _args: D_Hooks.TapArg[] = []

  /**
   * 名字
   */
  _name: D_Hooks.TapName

  /**
   * 回调集合
   */
  _taps: D_Hooks.FullTap[]

  /**
   * 构造器
   * @param args
   * @param name
   */
  constructor (args: D_Hooks.TapArg[], name?: D_Hooks.TapName) {
    this._args = args
    this._name = name
    this._taps = []
  }

  /**
   * 创建调用语句
   *
   * 子类实现
   */
  _createCall(type: D_Hooks.TapType) {
    const { _taps: taps, _args: args } = this
    return this.compile({
      // interceptors: [],
      taps,
      args,
      type,
    })
  }

  /**
   * 生成调用中间态
   *
   * 子类实现
   */
  compile(opts: D_Hooks.CompileOpts): Function {
    // TODO 暂时 mock 实现
    return (...args) => {}
  }

  /**
   * 同步调用
   *
   * 子类实现
   */
  call(...args: any[]) {
    const _call = this._createCall('sync')
    return _call(...args)
  }

  /**
   * 异步调用
   *
   * 子类实现
   */
  callAsync(...args: any[]) {
    const _call = this._createCall('async')
    return _call(...args)
  }

  /**
   * Promise 方式异步调用
   *
   * 子类实现
   */
  callPromise(...args: any[]) {
    const _call = this._createCall('promise')
    return _call(...args)
  }
}
