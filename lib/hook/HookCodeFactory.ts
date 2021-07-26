export default class HookCodeFactory {
  _x: D_Hooks.FullTap[]

  constructor() {
  }

  /**
   * 创建中间态立即执行函数
   */
  create(): Function {
    // TODO 暂时 mock 实现
    return (...args: any[]) => {}
  }

  /**
   * 绑定 options
   */
  bindOpts(): void {}

  /**
   * 重置 options
   */
  resetOpts(): void {}

  /**
   * 绑定 options 的 taps 到
   * @param instance
   * @param options
   */
  bindHook(instance, options): void {

  }
}
