import { AbstractMethodAvoidCallException } from '../../share/error'
import I_Lib_Hook from './interface/Hook.inf'
import { isEmptyStr, isNull, isString } from '../../share/type'

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
  _cbs: D_Hooks.FullTap[]

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
    this._cbs = []
    this._x = []
  }

  /**
   * 创建调用语句
   *
   */
  _createCall = (type: D_Hooks.TapType) => this.compile({
    taps: this._cbs,
    args: this._args,
    type,
  })

  /**
   * 生成调用中间态
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

  /**
   * 添加异步 tap
   * @param options
   * @param cb
   */
  tapAsync = (options: D_Hooks.FullTapOpts, cb: Function): void => this._tap('promise', options, cb)

  /**
   * 添加 promise 类 tap
   * @param options
   * @param cb
   */
  tapPromise = (options: D_Hooks.FullTapOpts, cb: Function): void => this._tap('promise', options, cb)

  /**
   * 添加同步 tap
   * @param options
   * @param cb
   */
  tap = (options: D_Hooks.FullTapOpts, cb: Function) => this._tap('sync', options, cb)

  /**
   * tap 包装函数
   * @param type
   * @param options
   * @param cb
   */
  _tap = (type: D_Hooks.TapType, options: D_Hooks.FullTapOpts, cb: Function): void => {
    if (isEmptyStr(options)) throw new Error('Missing name for tap')
    if (isNull(options)) throw new Error('Invalid tap options')
    if (isString(options)) options = { name: <string>options }

    const item: D_Hooks.FullTap = {
      type,
      cb,
      ...<D_Hooks.TapOpts>options
    }

    this._insert(item)
  }

  /**
   * tap 插入函数
   * @param item
   */
  _insert(item: D_Hooks.FullTap) {
    // TODO before, weights, interceptors 待实现
    this._cbs.push(item)
  }
}
