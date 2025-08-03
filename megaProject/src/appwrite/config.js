import { Client , ID ,Storage ,Databases ,Query } from "appwrite";
import conf from '../conf/conf'

export class Service {

      client = new Client ();
      database;
      bucket;
      constructor() {
          this.client
              .setEndpoint(conf.appwriteUrl)
              .setProject(conf.appwriteProjectId);

          this.database = new Databases(this.client);
          this.bucket = new Storage(this.client);    
      }
      async createPost ({title,slug,content,featureImage,status,userId}){

            try {
                  return await this.database.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{title,content,featureImage,status,userId})
            } catch (error) {
                  console.log("AppWrite Service :: createPost :: ",error);
                  
            }
      }

      async updatePost (slug,{title,content,featureImage,status}){
            try {
                  return await this.database.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{title,content,featureImage,status})
            } catch (error) {
                  console.log("AppWrite Service :: updatePost :: ",error);
                  
            }
      }

      async deletePost (slug) {
            try {
                   await this.database.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
                   return true
            } catch (error) {
                  console.log("AppWrite Service :: deltePost :: ",error);
                  return false
                  
            }
      }

      async getPost(slug){
            try {
                  return await this.database.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
            } catch (error) {
                  console.log("AppWrite Service :: getPost ::",error);
                  return false
                  
            }
      }
      async getPosts(queries = [Query.equal("status","active")]){
            try {
                  return await this.database.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries)
            } catch (error) {
                  console.log("AppWrite Service :: getPosts ::",error);
                  
            }
      }
        //file upload service
      async uploadFile(file) {
            try {
                  return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
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

      getFilePreview(fileId) {
            return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
      }

}

const service = new Service();