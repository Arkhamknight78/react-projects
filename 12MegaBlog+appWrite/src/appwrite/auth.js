import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwritePro);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name}) {
    
      try {
        const userAcc = await this.account.create(
          ID.unique,
          email,
          password,
          name
          
        );
  
        if (userAcc) {
        //   return userAcc;
        return this.login({ email, password });

        } else return null;
      } catch (error) {
        console.log(error);
        
      }
    }

    async login({ email, password }) {
      try {
        const session = await this.client.account.createEmailSession(email, password);
    
        if (session) {
          return session;
        } else return null;
      } catch (error) {
        console.log(error);
        
      }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();

        } catch (error) {
            console.log(`appwrite error: ${error}`);   
        }
        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSessions();
        }catch(error){
            console.log(`appwrite error: ${error}`);
        }
    }
};
const authService = new AuthService();

export default authService;
