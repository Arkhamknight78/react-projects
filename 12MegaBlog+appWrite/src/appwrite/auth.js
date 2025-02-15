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
    // const randomString = Math.random().toString(36).substring(2, 15);
      try {
         const userId = ID.unique();
        console.log("Generated User ID:", userId);
        const userAcc= await this.account.create(userId, email, password, name);
        // await this.account.create(userId, email, password, username);
  
        if (userAcc) {
          // return userAcc;
        console.log("User signed up successfully");
        return this.login({ email, password });

        } else return null;
      } catch (error) {
        console.log(error);
        
      }
    }

    async login({ email, password }) {
      try {
        return await this.account.createEmailPasswordSession(email, password);

      } catch (error) {
        console.log(error);
        return null;
        
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
        try{ //promise to delete all sessions
            return await this.account.deleteSessions();
        }catch(error){
            console.log(`appwrite error: ${error}`);
        }
    }
};
const authService = new AuthService();

export default authService;
