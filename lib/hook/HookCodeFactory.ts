import I_Lib_Hook from './interface/Hook.inf'
import { batchStrWithEnter } from './utils/entry'

export default class HookCodeFactory {
  _opts: D_Hooks.CompileOpts
  _args: D_Hooks.TapArg[]

  constructor() {
    this.resetOpts()
  }

  /**
   * 创建中间态立即执行函数
   */
  create = (opts: D_Hooks.CompileOpts): Function => {
    this.bindOpts(opts)

    let fn

    switch(this._opts.type) {
      case 'sync':
        fn = this._createSyncFn()
        break;
      case 'async':
        fn = this._createAsyncFn()
        break;
      case 'promise':
        fn = this._createPromiseFn()
        break;
    }

    return fn
  }

  /**
   * 绑定 options
   */
  bindOpts = (opts: D_Hooks.CompileOpts): void => {
    this._opts = opts
    this._args = [...opts.args]
  }

  /**
   * 重置 options
   */
  resetOpts = (): void => {
    this._opts = null
    this._args = []
  }

  /**
   * 函数主体函数
   *
   * 子类实现
   */
  content = (opts: D_Hook_Factory.callTemplateOpts): string => ''

  /**
   * 绑定 options 的 taps 到
   * @param instance
   * @param opts
   */
  bindHook = (instance: I_Lib_Hook, opts: D_Hooks.CompileOpts): void => {
    instance._x = opts.taps.map(({ cb }) => cb)
  }

  /**
   * 函数片段的头部
   */
  _getHeader = (): string => ''

  /**
   * 是否需要考虑 this
   */
  _needContext = (): boolean => false

  /**
   * 创建同步回调函数
   */
  _createSyncFn = (): Function => new Function(
    this._getArgs(),
    batchStrWithEnter([
      this._getHeader(),
      this.content({})
    ])
  )

  /**
   * 创建异步回调函数
   */
  _createAsyncFn = (): Function => new Function(
    this._getArgs(),
    batchStrWithEnter([
      this._getHeader(),
      this.content({})
    ])
  )

  /**
   * 创建 promise 化回调函数
   */
  _createPromiseFn = (): Function => new Function(
    this._getArgs(),
    batchStrWithEnter([
      this._getHeader(),
      this.content({})
    ])
  )


  /**
   * taps 调用代码片段生成器
   */
  _callTap = (): string => ''
  _callTapsSeries = (): string => ''
  _callTapsLooping = (): string => ''
  _callTapsParallel = (): string => ''

  /**
   * args 功能函数
   */
  _getArgs = () => this._args.join(',')
}
