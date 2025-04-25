
const db=require('../db/knex')
const _=require('lodash')

const getDataByCustomFilter = (
    tableName,
    fields,
    filter,
    search,
    inFilter,
    notFilter,
    orFilter,
    sortBy,
  ) => {
    const query = db.select(...fields).from(tableName);
  
    _.forOwn(filter, (value, key) => {
      query.where(key, value);
    });
  
    _.forOwn(inFilter, (value, key) => {
      query.whereIn(key, value);
    });
  
    _.forOwn(notFilter, (value, key) => {
      query.whereNot(key, value);
    });
  
    _.forOwn(orFilter, (value, key) => {
      query.orWhere(key, value);
    });
  
    _.forOwn(sortBy, (value, key) => {
      query.orderBy(key, value);
    });
  
    if (search) {
      query.where('name', 'like', `%${search}%`);
    }
  
    return query;
  };

  module.exports=  {getDataByCustomFilter}
  
  