// 2020, 8/09, pm 8:30-9:00
// resolver & its schema (self_defined data type)

// 連結 MongoDB 後，資料庫處理回傳的所有（任何）資料都塞在一個稱為 collection 集合的物件中。
// 而非從傳統的 php 的本地陣列（關聯式陣列）。

// 每當使用 query 或是 mutation 等資料操作，都要加入到 schema 裡面。

// schema.js 塞入自定義型別包含 Query 型別和 Mutation 型別
type Query {

    //...
}

type Mutataion {

    //...

}

// Resovers.js 塞入 讀和寫的 db 操作的雙物件

Query:{

    // 資料操作的方法包含傳入值和回傳型別
    // 因為整體是物件包覆，所以方法與方法之間要用,逗號分開，如同 json
    // 內部方法請詳 Mongo DB 內建函數
    totalDance: (parent, args, {db}) => 
        // db = 資料庫實例 和 {db} = context 共用變數，詳見 context.js 內的定義。
        db.collection("北區高中熱舞大賽").estimateDocumentCount(),

    allDance: (parent, args, {db}) =>
        db.collection("北區高中熱舞大賽").find().toArray(),

    totalDancer: (parent, args, {db}) => 
        db.collection("參賽學校組別名稱").estimateDocumentCount(),

    allDancer: (parent, args, {db}) =>
        db.collection("參賽學校組別名稱").find().toArray()
}

Mutation:{

    //...

}

// Query.js
// Mutaion.js
