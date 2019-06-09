import Global from "@common-functions";

export default class User {
  constructor() {
    this.id = Global.getId();
    this.email = "";
    this.firstName = "";
    this.lastName = "";
    this.phone = "";
    this.schoolName = "";
    this.zipCode = "";
    this.districtName = "";
    this.inIndia = true;
    this.signature = ""; 
    this.departments = [];
    this.isPremium = false;
    this.subscriptionReceipt = {};
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
