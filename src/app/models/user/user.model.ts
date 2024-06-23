export class UserModel {
    public id: string;
    public email: string;
    public username: string;
    public city: string;
    public state: string;
    public address: string;
    public cep: string;
    public number: number;
    public role: string;
    public active: boolean;
  
    constructor() {
      this.id = '';
      this.email = '';
      this.username = '';
      this.city = '';
      this.state = '';
      this.address = '';
      this.cep = '';
      this.number = 0;
      this.role = '';
      this.active = true;
    }
  }