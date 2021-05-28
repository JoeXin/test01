const { Articles, Category } = require('../schema/index')

const Result = require('../result/index')


const express = require('express');

const router = express.Router();


/**
 * 新增文章
 */
router.post('/addArticles', (req, res, next) => {
	var item = req.body;
 	const articles = new Articles(item);
	articles.save(function (error, doc) {
		if (!error) {
			res.json(Result({
				msg: "新增成功",
				success: true,
				result: doc
			}));
			return
		}
		res.json(Result({
			msg: "新增失败",
			success: false,
			result: null
		}))
		next();
	});
})

/**
 * 更新文章
 */
router.post('/updateArticles', (req, res, next) => {
	var item = req.body;
	Articles.update({ _id: item._id }, item, function (error, doc) {
		if (!error) {
			res.json(Result({
				msg: "修改成功",
				success: true,
				result: doc
			}));
			return
		}
		res.json(Result({
			msg: "修改失败",
			success: false,
			result: null
		}))
		next();
	});
})

/**
 * 更新文章ID
 */
router.post('/updateArticlesById', (req, res, next) => {
	var item = req.body;  
	Articles.findByIdAndUpdate({ _id: item._id }, item, function (error, doc) {
		if (!error) {
			res.json(Result({
				msg: "修改成功",
				success: true,
				result: doc
			}));
			return
		}
		res.json(Result({
			msg: "修改失败",
			success: false,
			result: null
		}))
		next();
	});
})

/**
 * 删除文章(ID)
 */
router.post('/deleteArticlesById', (req, res, next) => {
	var item = req.body;
	console.log(item._id)
	Articles.findOneAndUpdate({ _id: item._id }, { $set: { active: 0 } }, { upsert: false }, function (error, doc) {
		if (!error) {
			res.json(Result({
				msg: "删除成功",
				success: true,
				result: doc
			}));
			return
		}
		res.json(Result({
			msg: "删除失败",
			success: false,
			result: null
		}))
		next();
	});
})

/**
 * 移除文章
 */
router.post('/removeArticlesById', (req, res, next) => {
	var item = req.body;
	Articles.findByIdAndRemove({ _id: item._id }, item, function (error, doc) {
		if (!error) {
			res.json(Result({
				msg: "删除成功",
				success: true,
				result: doc
			}));
			return
		}
		res.json(Result({
			msg: "删除失败",
			success: false,
			result: null
		}))
		next();
	});
})

/**
 * 搜索文章
 */
router.post('/searchArticlesByTitle', (req, res, next) => {
	var item = req.body;
	let where = { title: { $gte: item.title }, active: 1 }
	let fields = item;
	Articles.find(where,  function (error, doc) {
		if (!error) {
			console.log(doc)
			res.json(Result({
				msg: "搜索成功",
				success: true,
				result: doc
			}));
			return
		}
		res.json(Result({
			msg: "搜索失败",
			success: false,
			result: null
		}))
		next();
	});
})

/**
 * 查询文章Id
 */
router.post('/searchArticlesById', (req, res, next) => {
	var item = req.body;
	let id =item._id;
	Articles.findById(id,  function (error, doc) {
		if (!error) {
			res.json(Result({
				msg: "查询成功",
				success: true,
				result: doc
			}));
			return
		}
		res.json(Result({
			msg: "查询失败",
			success: false,
			result: null
		}))
		next();
	});
})


/**
 * 文章列表分页
 */
router.post('/getArticlesByPages', (req, res, next) => {
	var item = req.body;

	Articles.countDocuments({ active: 1 }, (err, count) => {
		Articles.find({ active: 1 }).sort({ _id: -1 }).skip((item.pageIndex - 1) * item.pageSize).limit(Number(item.pageSize)).exec(function (err, doc) {
			if (!err) {
				let pages = Math.floor((count + Number(item.pageSize) - 1) / item.pageSize)
				res.json(Result({
					msg: " 成功",
					success: true,
					result: {
						data: doc,
						count: count,
						totalpages: pages
					}
				}));
				return
			}
			res.json(Result({
				msg: " 失败",
				success: false,
				result: null
			}))
			next();
		});
	})

})


/**
 * 获取所有文章列表
 */
 router.post('/getArticles', (req, res, next) => {
	Articles.find({ active: 1 }, function (error, doc) {
		if (!error) {
			res.json(Result({
				msg: "获取成功",
				success: true,
				result: doc
			}));
			return
		}
		res.json(Result({
			msg: "获取失败",
			success: false,
			result: null
		}))
		next();
	});
})
// router.post('/uploadArticlePic', (req, res, next) => {
// 	console.log(req.body)
// })

/**
 * 获取文章分类
 */
router.post('/getCategory', (req, res, next) => {
	Category.find({}, function (error, doc) {
		if (!error) {
			res.json(Result({
				msg: "获取成功",
				success: true,
				result: doc
			}));
			return
		}
		res.json(Result({
			msg: "获取失败",
			success: false,
			result: null
		}))
		next();
	});
})

/**
 * 保存文章分类
 */
router.post('/saveCategory', (req, res, next) => {
	var item = req.body;
	const category = new Category(item);
	category.save(function (error, doc) {
		if (!error) {
			res.json(Result({
				msg: "新增成功",
				success: true,
				result: doc
			}));
			return
		}
		res.json(Result({
			msg: "新增失败",
			success: false,
			result: null
		}))
		next();
	});
})

module.exports = router