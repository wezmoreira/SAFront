export class UserModel {
    public id: string;
    public email: string;
    public username: string;
    public city: string;
    public state: string;
    public address: string;
    public cep: string;
    public number: string;
    public role: string;
    public password: string;
    public active: boolean;
  
    constructor() {
      this.id = '';
      this.email = '';
      this.username = '';
      this.city = '';
      this.state = '';
      this.address = '';
      this.cep = '';
      this.number = '';
      this.role = '';
      this.password = '';
      this.active = true;
    }
  }