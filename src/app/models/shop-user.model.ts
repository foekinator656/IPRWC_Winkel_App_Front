import { ShopUserRole } from "./shop-user-role.enum";


export class ShopUser {
  public shopUserId: number;
  public shopUserEmail: string;
  public shopUserRole: ShopUserRole;
  public password: string;
  public yearOfBirth: number;
  public monthOfBirth: number;
  public dayOfBirth: number;
  private firstName: string;
  private middleName: string;
  private lastNam: string;
  private street: string;
  private houseNr: string;
  private postalCode: string;
  private city: string;


  constructor(shopUserId: number, shopUserEmail: string, shopUserRole: ShopUserRole, password: string, yearOfBirth: number, monthOfBirth: number, dayOfBirth: number, firstName: string, middleName: string, lastNam: string, street: string, houseNr: string, postalCode: string, city: string) {
    this.shopUserId = shopUserId;
    this.shopUserEmail = shopUserEmail;
    this.shopUserRole = shopUserRole;
    this.password = password;
    this.yearOfBirth = yearOfBirth;
    this.monthOfBirth = monthOfBirth;
    this.dayOfBirth = dayOfBirth;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastNam = lastNam;
    this.street = street;
    this.houseNr = houseNr;
    this.postalCode = postalCode;
    this.city = city;
  }
}
