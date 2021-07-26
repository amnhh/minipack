import { AbstractMethodAvoidCallException } from './utils/error'
import I_Lib_Hook from './interface/Hook.inf'

/**
 * Hook 基类
 */
export default class Hook implements I_Lib_Hook{
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
   * 回调集合
   */
  _x: Function[]

  /**
   * 构造器
   * @param args
   * @param name
   */
  constructor (args: D_Hooks.TapArg[], name?: D_Hooks.TapName) {
    this._args = args
    this._name = name
    this._taps = []
    this._x = []
  }

  /**
   * 创建调用语句
   *
   */
  _createCall = (type: D_Hooks.TapType) => this.compile({
    taps: this._taps,
    args: this._args,
    type,
  })

  /**
   * 生成调用中间态
   *
   * TODO 暂时 mock 实现
   *
   */
  compile = (opts: D_Hooks.CompileOpts): Function => (...args) => {}

  /**
   * 同步调用
   */
  call = (...args: any[]) => this._createCall('sync')(...args)

  /**
   * 异步调用
   *
   */
  callAsync = (...args: any[]) => this._createCall('async')(...args)

  /**
   * Promise 方式异步调用
   *
   * 子类实现
   */
  callPromise = (...args: any[]) => this._createCall('promise')(...args)
}
