declare namespace D_Hooks {
  type TapArg = string
  type TapName = string

  type TapType =
    | 'sync'
    | 'async'
    | 'promise'

  type TapOpts = {
    before?: string
    // 权重
    weights?: number
  }

  type BasicTap = TapOpts & {
    name: string
  }

  /**
   * 完整 tap
   */
  type FullTap = BasicTap & {
    cb: Function
    type: TapType
  }

  /**
   * 阻断器
   */
  type Interceptor = {}

  /**
   * 编译配置
   */
  type CompileOpts = {
    taps: FullTap[]
    interceptors?: Interceptor[]
    args: TapArg[]
    type: TapType
  }
}
