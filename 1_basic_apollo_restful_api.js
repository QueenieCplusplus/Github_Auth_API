// 2020, 8/09, pm 7:30 - 8:00 (30 min)
// what role context plays in GQL
// contex is Global variable
// apply to auth, db config, cache, DB Cursor 資料庫游標或稱解析函數 Resolvers(query, mutation)
 

// {Resolver} 
// some developer call the api + db in Resolvers, in this way, 
// computer r/w memory in local 本機記憶體, this is not good to do scale up.
// plz use fixed DB Server || Mongo DB (Cloud etc.)

// {context}
// some developer call the api + db in context (global var) 雲端或某特定資料庫伺服器中的共用變數, to hence on the scale up.
// it is able to use Apollo Data Source :
// Ref Doc:
// https://www.apollographql.com/docs/apollo-server/data/data-sources/

const { RESTDataSource } = require('apollo-datasource-rest');

class DanceAPI extends RESTDataSource {

    constructor() {

      super();
      this.baseURL = 'https://dance-api.katesreact2020.com.tw/';

    }
  
    async getDance(id) {
      return this.get(`dance/${id}`);
    }
  
    async getMostViewedDance(limit = 3) {

      const data = await this.get('dance', {
        per_page: limit,
        order_by: 'most_viewed',
      });

      return data.results;
    }

  }