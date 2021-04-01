
import {MongoClient} from 'mongodb'

const url = "mongodb://root:rootpassword@127.0.0.1:27017/mydb1?authSource=admin"
const DATABASE_NAME = "adoringTrialFan"

export const getConnection = async () => {
    const client = await MongoClient.connect(url)
    const dbo = client.db(DATABASE_NAME);
    return Promise.resolve(dbo)
}