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
  _taps: D_Hooks.FullTap[]

  _x: Function[]


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
