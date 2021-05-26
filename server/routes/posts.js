const { Articles,Category } = require('../schema/index')

const Result = require('../result/index')


const express = require('express');

const router = express.Router();

router.post('/getArticles', (req, res, next) => {
	Articles.find({}, function (error, doc) {
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
		console.log(error)
		res.json(Result({
			msg: "新增失败",
			success: false,
			result: null
		}))
		next();
	});
})

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

router.post('/deleteArticlesByID', (req, res, next) => {
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

router.post('/searchArticlesByTitle', (req, res, next) => {

	var item = req.body;
	let regexp = new RegExp(item.title, 'i')

	Articles.find({ title: { $gte: item.title } }, item, function (error, doc) {
		if (!error) {
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

router.post('/getArticlesByPages', (req, res, next) => {
	var item = req.body;
	Articles.countDocuments({}, (err, count) => {
		Articles.find().sort({ _id: -1 }).skip((item.pageIndex - 1) * item.pageSize).limit(Number(item.pageSize)).exec(function (err, doc) {
			if (!err) {
				res.json(Result({
					msg: " 成功",
					success: true,
					result: {
						data: doc,
						count: count,
						totalpages: Math.floor((count - 1) / (Number(item.pageSize) + 1))
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

router.post('/uploadArticlePic',(req,res,next)=>{
	console.log(req.body)
})


router.post('/getCategory',(req,res,next)=>{
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


router.post('/saveCategory',(req,res,next)=>{
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