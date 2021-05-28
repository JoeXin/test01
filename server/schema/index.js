
const mongoose = require('mongoose');

const bcryptjs = require('bcryptjs');

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
	passWord: {
		type: String,
		set(val) {
			return bcryptjs.hashSync(val, 10)
		}
	},
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
	author_id: {
		type: mongoose.Types.ObjectId,
		ref: "user"
	},
	title: {
		type: String
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
	articlepic: {
		type: String
	},
	categoryname: {
		type: String
	},
	categoryid: {
		type: mongoose.Types.ObjectId,
		ref: "Category"
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
}, {
	// collection: 'example', // 这里是为了避免新建的表会带上 s 后缀
	versionKey: false // 不需要 __v 字段，默认是加上的
})

var Articles = mongoose.model('Articles', ArticlesSchema, 'articles');

/**
 * 用户收货地址
 */
var UserAddresssSchema = mongoose.Schema({
	user_id: {
		type: mongoose.Types.ObjectId,
		ref: "user"
	},
	concat: String,
	mobile: String,
	provinceid: String,
	provincename: String,
	cityid: String,
	cityname: String,
	address: String,
	postcode: String,
	active:{
		type: Number,
		default:1
	}
});

var UserAddresss = mongoose.model('UserAddresss', UserAddresssSchema, 'useraddress');


module.exports = {
	Product,
	User,
	UserAddresss,
	Category,
	Articles,
	// Story,
	// Author
}