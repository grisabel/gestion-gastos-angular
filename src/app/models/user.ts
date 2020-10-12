export class User {
  constructor(
    private name: string,
    private surname: string,
    private email: string,
    private password: string,
    private password2: string,
    public token: string
  ){}
   
    
  }