
const mongoose = require('mongoose');

// Schema定义数据的数据结构
var ProductSchema = mongoose.Schema({
	id: {
		type: String,
		default: ''
	},
	name: String,
	price: Number,
	url: String
});

var Product = mongoose.model('Product', ProductSchema);

var UserSchema = mongoose.Schema({
	userid: {
		type: String,
		default: ''
	},
	userName: String,
	passWord: String,
	age: Number,
	active: {
		type: Number,
		default: 1
	}
});

var User = mongoose.model('User', UserSchema, 'user');


var CategoriesSchema = mongoose.Schema({
	/**
	 * 名称
	 */
	name: String,

	/**
	 * 数量
	 */
	count: {
		type: Number,
		default: 0
	},
	active: {
		type: Number,
		default: 1
	}
});

var Category = mongoose.model('Category', CategoriesSchema, 'category');


var ArticlesSchema = mongoose.Schema({

	title: {
		type:String
	},
	description: {
		type: String,
		default: ''
	},
	content: {
		type: String,
		default: ''
	},
	
	addTime: { type: Date, default: Date.now },

	views: {
		type: Number,
		default: 0
	},
	categoryname: {
		type: String
	},
	categoryid: {
		type: Number 
	},
	/**
	 * 状态
	 * 0上架、1下架、2草稿
	 */
	articleStatus: {
		type: Number,
		default: 0
	},

	active: {
		type: Number,
		default: 1
	}
})

var Articles = mongoose.model('Articles', ArticlesSchema, 'articles');

module.exports = {
	Product,
	User,
	Category,
	Articles,
	// Story,
	// Author
}