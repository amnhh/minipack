export class AbstractMethodAvoidCallException extends Error {
  constructor (msg: string) {
    super(`[Abstract Method Call]: ${msg}`);
  }
}
