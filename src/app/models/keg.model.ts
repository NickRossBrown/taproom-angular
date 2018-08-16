export class Keg {
  public qty: number = 2;

  constructor(public name: string, public brand: string, public price: number, public abv: number) {}

  static kegList: Keg[] = [
    new Keg("Joe IPA", "10 Barrel", 5, 7.4),
    new Keg("Red Bull IPA", "Red Bull", 6, 5.4)
  ];

  static addKeg(keg: Keg) {
    Keg.kegList.push(keg);
  }

  static deleteKeg(keg: Keg) {
    const kegPosition: number = Keg.kegList.indexOf(keg);
    Keg.kegList.splice(kegPosition, 1);
  }

  sellPint() {
    this.qty--;
  }
}
