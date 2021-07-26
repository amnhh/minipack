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

declare namespace D_Hook_Factory {
  type callTemplateOpts = {
    /**
     * 出错时的函数片段
     */
    onError?: (...err: any[]) => string

    /**
     * 对于返回值的函数片段
     */
    onResult?: (...result: any[]) => string

    /**
     * 结束的函数片段
     */
    onDone?: (...args: any[]) => string

    /**
     * 是否返回 result
     */
    resultReturns?: boolean

    /**
     * 是否重复抛出错误 => 区分于 onError
     */
    rethrowIfPossible?: boolean
  }
}
