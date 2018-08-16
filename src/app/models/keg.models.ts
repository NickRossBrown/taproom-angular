const _kegList = [];
export class Keg {
  constructor(public name: string, public brand: string, public price: string, public abv: string) {}

  static getKegList() { return _kegList; }

  static addKeg(keg: Keg) {
    _kegList.push(keg);
  }
}