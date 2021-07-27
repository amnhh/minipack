import SyncHook from '../SyncHook'

describe('SyncHook', function() {
  it('should throw without a valid name', () => {
    const hook = new SyncHook()
    expect(() => hook.tap("", () => {})).toThrow(
      new Error("Missing name for tap")
    );
    expect(() => hook.tap(" ", () => {})).toThrow(
      new Error("Missing name for tap")
    );
  })
})
