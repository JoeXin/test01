function Result({result,success, msg, code = 0}) {
	return {
		result:result,
		success: success,
		msg: msg,
		code: code
	}
}

module.exports = Result;