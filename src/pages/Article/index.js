
import React, { useEffect, useState } from 'react'

import http from '../../common/utils/http'
import { useHistory } from "react-router-dom";

function Article() {
	let history = useHistory();

	const [articleData, setArticleData] = useState([])

	useEffect(() => {
		getArticle()
	}, [])

	const getArticle = () => {
		http.PostUrl('posts/getArticlesByPages', {
			pageIndex: 1,
			pageSize: 10
		}).then((data) => {
			if (data.success) {
				let result = data.result;
				setArticleData(result.data)
			} else {
				console.log(data.msg)
			}
		})
	}

	const viewArticleItem=(item)=>{
		 history.push({pathname:'/articledetail',state:item})
	}

	return (
		<div>
			<div>Article</div>
			<div>
				{articleData.map((item, key) => (
					<div key={key} onClick={()=>viewArticleItem(item)}>
						<span>{item.title}</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default Article;
