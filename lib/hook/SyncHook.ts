import Hook from './Hook'
import HookCodeFactory from './HookCodeFactory'

const _factory = new HookCodeFactory()

export default class SyncHook extends Hook {
  constructor(...args) {
    super(args)
  }

  compile(opts: D_Hooks.CompileOpts): Function {
    return _factory.create()
  }
}
