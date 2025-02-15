import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwritePro);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDB,
        conf.appwriteColl,
        ID.unique(),
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async updatePost(docId, { title, content, featuredImage, status }) {
    try {
      this.databases.updateDocument(conf.appwriteDB, conf.appwriteColl, docId, {
        title,
        content,
        featuredImage,
        status,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async deletePost(docId) {
    try {
      this.databases.deleteDocument(conf.appwriteDB, conf.appwriteColl, docId);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getPost(docId) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDB,
        conf.appwriteColl,
        docId
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDB,
        conf.appwriteColl,
        queries
        //[
        //     Query.equal("status", "active")
        //]
      );
    } catch (error) {
      console.log(error);
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(conf.appwriteBuck, ID.unique(), file);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBuck, fileId);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  FilePreview = (fileId) => {
    if (!fileId) {
        console.error("Invalid file ID for preview");
        return ""; // Return empty string to avoid errors
    }
    try {
        const url = this.bucket.getFilePreview(conf.appwriteBuck, fileId);
        // console.log("Generated Preview URL:", url);
        return url;
    } catch (error) {
        console.error("Error generating preview:", error);
        return "";
    }
};

}

const service= new Service();
export default service;
