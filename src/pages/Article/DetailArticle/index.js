
import React, { useEffect, useState } from 'react'

// import http from '@pages/common/utils/http'
import { useHistory } from "react-router-dom";

function DetailArticle(props) {
	console.log(props, 'props')
	const item = props.location.state;
	return (
		<div>
			<div>DetailArticle</div>
			<div>
				<h3>{item.title}</h3>
				<div>{item.description}</div>
				<div>{item.content}</div>
			</div>
		</div>
	);
}

export default DetailArticle;
