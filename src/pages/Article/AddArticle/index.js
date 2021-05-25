
import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Select } from 'antd';

import http from '@/common/utils/http'
import { useHistory } from "react-router-dom";
const { TextArea } = Input;
const { Option } = Select;

function AddArticle() {
	const [articleinfo, setArticleinfo] = useState({})

	let categorylist = [
		{
			title: '爱范儿',
			id: 1
		}, {
			title: '有牛财经',
			id: 2
		}, {
			title: '互联网那些事',
			id: 3
		}
	];

	const AddBind = (e) => {
		console.log(articleinfo)
		http.PostUrl('posts/addArticles', {
			title: articleinfo.title,
			description: articleinfo.description,
			content: articleinfo.content,
			categoryid: articleinfo.categoryid,
			categoryname: articleinfo.categoryname,
		}).then((data) => {
			if (data.success) {
			} else {
				console.log(data.msg)
			}
		})
	}
	const DetailChange = (name, e) => {
		console.log(e)
		setArticleinfo({
			...articleinfo,
			[name]: e.target.value
		})
	}

	const handleChange = (value) => {
		categorylist.map((item) => {
			if (item.title == value) {
				setArticleinfo({
					...articleinfo,
					categoryid: item.id,
					categoryname: value
				})
			}
		})
	}
	return (
		<div style={{ marginLeft: '.2rem', marginRight: '.2rem', marginTop: '.15rem' }}>
			<div>
				新增文章
			</div>
			<Form
				className='AddArticle'
				name="addarticle"
				initialValues={{ remember: true }}

			>
				<Form.Item
					label="标题"
					name="title"
					rules={[{ message: '请输入标题!' }]}
				>
					<Input value={articleinfo.title} onChange={(e) => DetailChange('title', e)} />
				</Form.Item>

				<Form.Item
					label="描述"
					name="description"
					rules={[{ message: '请输入描述!' }]}
				>
					<Input value={articleinfo.description} onChange={(e) => DetailChange('description', e)} />
				</Form.Item>
				<Form.Item
					label="内容"
					name="content"
					rules={[{ message: '请输入内容!' }]}
				>
					<TextArea value={articleinfo.content} onChange={(e) => DetailChange('content', e)} />
				</Form.Item>

				<Form.Item
					label="类别"
					name="category"
					rules={[{ message: '请选择类别!' }]}
				>
					<Select allowClear onChange={handleChange}>
						{
							categorylist.map((item, key) =>
								<Option key={item.id} value={item.title}>{item.title}</Option>
							)
						}
					</Select>
				</Form.Item>
				<Form.Item  >
					<Button type="primary" onClick={AddBind}  >
						保存
        			</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default AddArticle;
