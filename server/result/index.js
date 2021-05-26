function Result({result,success, msg, code = 0}) {
	return {
		result,
		success,
		msg,
		code,
	}
}

module.exports = Result;