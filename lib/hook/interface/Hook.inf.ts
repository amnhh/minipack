export default interface I_Lib_Hook {
  /**
   * 参数列表
   */
  _args: D_Hooks.TapArg[]

  /**
   * 名字
   */
  _name: D_Hooks.TapName

  /**
   * 回调集合
   */
  _cbs: D_Hooks.FullTap[]

  _x: Function[]

  /**
   * 回调添加语句
   */
  tap(options: D_Hooks.FullTapOpts, cb: Function): void
  tapAsync(options: D_Hooks.TapOpts, cb: Function): void
  tapPromise(options: D_Hooks.TapOpts, cb: Function): void

  /**
   * 将 _tap 添加到 _taps 的语句
   * @param type
   * @param options
   * @param cb
   */
  _tap(type: D_Hooks.TapType, options: D_Hooks.TapOpts, cb: Function): void

  /**
   * 创建调用语句
   *
   */
  _createCall(type: D_Hooks.TapType): Function

  /**
   * 生成调用中间态
   *
   */
  compile(opts: D_Hooks.CompileOpts): Function

  /**
   * 同步调用
   *
   */
  call(...args: any[]): any

  /**
   * 异步调用
   *
   */
  callAsync(...args: any[]): any

  /**
   * Promise 方式异步调用
   *
   * 子类实现
   */
  callPromise(...args: any[]): any
}
