'use strict';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

//議程資料集
export const dbRuleAgendas = new Mongo.Collection('ruleAgendas');
export default dbRuleAgendas;

//schema
const schema = new SimpleSchema({
  //議程標題
  title: {
    type: String,
    min: 1,
    max: 100
  },
  //議程描述
  description: {
    type: String,
    min: 10,
    max: 3000
  },
  //議程討論url
  discussionUrl: {
    type: String,
    max: 1000,
    regEx: SimpleSchema.RegEx.Url
  },
  //提案人userId
  proposer: {
    type: String
  },
  //議程建立時間
  createdAt: {
    type: Date
  },
  //議程長度(小時)
  duration: {
    type: SimpleSchema.Integer,
    defaultValue: 72
  },
  //議題列表
  issues: {
    type: Array
  },
  'issues.$': {
    type: String
  },
  //已投票使用者userId
  votes: {
    type: Array,
    defaultValue: []
  },
  'votes.$': {
    type: String
  }
});
dbRuleAgendas.attachSchema(schema);

