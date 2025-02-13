import { MongoClient, Db, ServerApiVersion } from 'mongodb';

const dbName = 'ecommerce-nextjs';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDb() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb }
    }

    // if (!process.env.MONGODB_USER || !process.env.MONGODB_PASSWORD) {
    //     throw new Error('Please add your MongoDB Atlas Username and Password to .env.local')
    // }

    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.sc9j8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    console.log(uri);
    
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });


    await client.connect();
    
    cachedClient = client;
    cachedDb = client.db(dbName);

    return { client, db: client.db(dbName) }
}