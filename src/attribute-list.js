export default class AttributeList {
  constructor({ prefix = '' } = {}) {
    this.prefix = prefix;
    this.items = [];
  }

  add(item) {
    if (!this.items.includes(item)) this.items.push(item);
    return `${this.prefix}${this.items.indexOf(item) + 1}`;
  }

  get length() {
    return this.items.length;
  }

  get map() {
    return this.items.reduce((output, item, index) => Object.assign(output, { [`${this.prefix}${index + 1}`]: item }), {});
  }
}
