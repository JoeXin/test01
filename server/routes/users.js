const { User } = require('../schema/index')

const bcryptjs = require('bcryptjs');

const Result = require('../result/index')

const express = require('express');

const router = express.Router();



function UserLogin(req) {
	return new Promise(function (resolve, reject) {
		User.findOne({
			"userName": req.body.userName,
			"passWord": req.body.passWord
		}, function (error, res) {
			if (!error) {
				resolve(req.body)
			} else {
				reject()
			}
		});
	});
}


router.post('/login', (req, res, next) => {

	User.countDocuments({ userName: req.body.userName }, (err, count) => {
		if (err) {
			res.json(Result({
				msg: "登录失败",
				success: false,
				result: null
			}));
			return
		}
		if (count) {
			User.findOne({ "userName": req.body.userName }, { 'passWord': 1, "_id": 0 }, (err, docs) => {
				if (!err) {
					let userpassword = docs.passWord;
					const isPasswordValid = bcryptjs.compareSync(
						req.body.passWord,
						userpassword
					)
					if (isPasswordValid) {
						UserLogin(req).then(function (data) {
							let fileds='userName'
							User.find({ userName: req.body.userName },fileds , (e, r) => {
								console.log(r)
								let data = r.reduce((accu, cur, index) => (accu['user'] = cur, accu), {});
								res.json(Result({
									msg: "获取成功",
									success: true,
									result: data
								}));
								next()
							})

						}).catch((e) => {
							res.json(Result({
								msg: "获取失败",
								success: false,
								result: e
							}))

						})
					} else {
						res.json(Result({
							msg: "密码错误",
							success: false,
							result: null
						}))
						return;
					}
				}
				// res.json(Result({
				// 	msg: "获取用户失败",
				// 	success: false,
				// 	result: null
				// }))
				// return;
			})
		} else {
			res.json(Result({
				msg: "用户不存在",
				success: false,
				result: null
			}));
			return
		}
	})

});


router.post('/register', (req, res, next) => {
	User.countDocuments({ userName: req.body.userName }, (err, count) => {
		if (!err) {
			console.log(count, 'count')
			if (count == 0) {
				const users = new User(req.body)
				users.save(function (error, doc) {
					if (!error) {
						res.json(Result({
							msg: "注册成功",
							success: true,
							result: {
								userName: doc?.userName,
								userId: doc?.userId
							}
						}));
						return
					}
					res.json(Result({
						msg: "注册失败",
						success: false,
						result: null
					}))
					next();
				});
			} else {
				res.json(Result({
					msg: "该手机号已注册",
					success: false,
					result: null
				}))
			}
		}
	})

});




module.exports = router