const { User } = require('../schema/index')
const Result = require('../result/index')

const express = require('express');

const router = express.Router();

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
			User.findOne({
				"userName": req.body.userName,
				"passWord": req.body.passWord
			}, function (error, doc) {
				if (!error) {
					res.json(Result({
						msg: "获取成功",
						success: true,
						result: {
							userName: doc?.userName,
							userId: doc?.userId
						}
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
		} else {
			res.json(Result({
				msg: "用户不存在",
				success: true,
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