// 2020, 8/09, pm 8:00 - 8:30 (30 min)
// create a global ver called context to share info in Cloud or DB server.

// 連接資料庫，需要將連結加入到 context
// (1) npm install mongodb (db server) == DB_HOST = mongodb://localhost:27017/<db_name> = 資料庫伺服器服務://ip:port/資料庫名稱
// (1) if use mLab, the DB_HOST will be mongodb://<dbuser>:<dbpwd>@5555.mlab.com:5555/<db_name>
// (2) await db server is in connection, then we will got env_path (called DB_HOST) in system.
// (3) let app to read DB_HOST in .env file under root.
// (4) modify config file for Apollo Server (api runner as web server)
// (5) to define a context, let this global variable to record/read/has the DB_HOST.

const { MongoClient } = require('mongodb')
require('dotenv').config()

// async func is suitable in step (1)~(5)

const start = async () => {

    const app = express()
    // Nodejs.process
    // read out the DB_HOST value in .env under app root
    const Mongo_DB = process.env.DB_HOST

                   // await = async + promise
    const client = await MongoClient.connect(

        Mongo_DB, // the DB_HOST val
        { useNewUrlParser: true }

    )

    const db = client.db() // 資料庫實例

    const context = { db } // 物件化的資料庫實例，方便寫入與存取訊息等資料操作

    const server = new ApolloServer({typeDefs, resolver, context}) // 參數一是 web server 的設定物件. 參數二類似游標, 參數三共用變數方便存取資料庫

    server.applyMiddleware({app})// web server 與 exress app 確定在同一路徑上

    // nodejs api 路由與導向處理的端點
    app.get('/playGQL', expressPlayground({endpoint:'/graphql'}))

    app.listen({port: 4000}, ()=>{

        //console.log("connect to api server called apollo-gql-server at http://localhost:$port${server.graphqPath}")

    })

}

// call this async func
start()
