const conf ={
    appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwritePro: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteColl: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteDB: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteBuck: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf;