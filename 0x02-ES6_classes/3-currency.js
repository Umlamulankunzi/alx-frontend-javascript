/**
 * Class named Currency.
 */
export default class Currency {
  /**
   * Creates new @see {@link Currency}.
   *
   * @param {String} code - currency code.
   * @param {Number} name - Name of currency.
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * Creates full string representation of Currency.
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
