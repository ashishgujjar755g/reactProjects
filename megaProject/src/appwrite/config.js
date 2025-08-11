import { Client, ID, Storage, Databases, Query } from "appwrite";
import conf from "../conf/conf";

//making class for good practicing and experienced code it makes re-usable code
export class Service {
  client = new Client(); //here we create new object for accessing Client because it is store in class from in appwrite

  database; //same as upper

  bucket; //same as upper
  constructor() {
    //jab bhi service object create hoga constructor call hoga

    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.database = new Databases(this.client); //here we make object same as client but here we are making databases using upper client

    this.bucket = new Storage(this.client); //same as upper
  }

  //make service for createPost
  async createPost({ title, slug, content, featureImage, status, userId }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featureImage, status, userId }
      );
    } catch (error) {
      console.log("AppWrite Service :: createPost :: ", error);
    }
  }

  //make service for updatePost and here slug is used as a unique key
  async updatePost(slug, { title, content, featureImage, status }) {
    try {
      return await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featureImage, status }
      );
    } catch (error) {
      console.log("AppWrite Service :: updatePost :: ", error);
    }
  }

  //make service for deletePost and slug is key
  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("AppWrite Service :: deletePost :: ", error);
      return false;
    }
  }

  //make service to find or get the post
  async getPost(slug) {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("AppWrite Service :: getPost ::", error);
      return false;
    }
  }

  //make service for find or get the selected posts
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("AppWrite Service :: getPosts ::", error);
    }
  }

  //file upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("AppWrite Service :: uploadFile ::", error);
      return false;
    }
  }

  //file delete service
  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("AppWrite Service :: deleteFile ::", error);
      return false;
    }
  }

  //make service for getFilePreview
  getFilePreview(fileId) {
   
  return `${conf.appwriteUrl}/storage/buckets/${conf.appwriteBucketId}/files/${fileId}/view?project=${conf.appwriteProjectId}`}
}

  


const service = new Service(); //this object or instace is crated for Service class and we will use the class methods using dot operator
export default service; //exporting the object so that we can use it in other files