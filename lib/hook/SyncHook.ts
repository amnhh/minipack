import Hook from './Hook'
import HookCodeFactory from './HookCodeFactory'


class SyncHookCodeFactory extends HookCodeFactory {

  /**
   * 函数主题部分生成函数
   *
   * @override
   */
  content = (opts) => ''

}

const _factory = new SyncHookCodeFactory()

export default class SyncHook extends Hook {
  constructor(...args) {
    super(args)
  }

  /**
   * 创建执行函数的中间态
   * @param opts
   */
  compile = (opts: D_Hooks.CompileOpts): Function => {
    _factory.bindHook(this, opts)
    return _factory.create(opts)
  }
}
