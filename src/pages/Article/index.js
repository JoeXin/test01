
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import './index.less'
import http from '@/common/utils/http'



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

	const viewArticleItem = (item) => {
		history.push({ pathname: '/articledetail', state: item })
	}

	const addAritcleItem = () => {
		history.push({ pathname: '/addarticle' })
	}
	function renderTime(date) {
		var dateee = new Date(date).toJSON();
		return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
	  }
	return (
		<div>
			<div>Article</div>
			<div className='information-content'>
				{articleData.map((item, key) => (
					<a className='information-item' key={key}>
						<div className='information-wrapper'>
							<a>
								<img src={'https://img.36krcdn.com/20210525/v2_680011278a04459a91c55ba9af3df9d7_img_png'} alt="" />
							</a>
							<div className='information-itemcontent'>
								<div className='information-title'> {item.title}</div>
								<div>
									{item.description}
								</div>
								<div className='information-other'>
									<div>
										{item.categoryname}
									</div>
									<div>
										{renderTime(item.addTime)}
									</div>
								</div>
							</div>
						</div>
						<div>
							<div style={{ cursor: 'pointer' }} onClick={() => viewArticleItem(item)}>
								查看
							</div>
							<div style={{ cursor: 'pointer' }} onClick={() => addAritcleItem(item)}>
								编辑
						</div>
						</div>
					</a>
				))}
			</div>
			<div style={{ marginTop: '10px' }}>
				<button className='Btn' style={{ cursor: 'pointer' }} onClick={addAritcleItem}>新增Article</button>
			</div>
		</div>
	);
}

export default Article;
