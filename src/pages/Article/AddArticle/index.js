
import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Select, Upload ,message} from 'antd';
 import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

import http from '@/common/utils/http'

import './index.less'
import { useHistory } from "react-router-dom";
const { TextArea } = Input;
const { Option } = Select;

function AddArticle(props) {

	const [form] = Form.useForm();
	const [articleinfo, setArticleinfo] = useState({})
	const [fileList, setFileList] = useState([])

	const [categorylist, setCategorylist] = useState([])


	// setTimeout(() => {
	// 	if (props.location.state) {
	// 		setArticleinfo(props.location.state)
	// 		form.setFieldsValue({
	// 			title: articleinfo.title,
	// 			description: articleinfo.description,
	// 			content: articleinfo.content,
	// 			categoryid: articleinfo.categoryid,
	// 			categoryname: articleinfo.categoryname,
	// 			articlepic: '',
	// 			category: articleinfo.categoryname
	// 		})
	// 	}
	// })



	useEffect(() => {
		getCategoryList()
	}, [])

	const getCategoryList = () => {
		http.PostUrl('posts/getCategory').then((res) => {
			if (res.success) {
				let result = res.result;
				setCategorylist(result)
			}
		})
	}

	const AddBind = (e) => {
		form.validateFields().then((error, values) => {
			let flag = false
			for (let i in error) {
				if (!error[i]) {
					flag = true;
					message.warning(`请填写${i}`)
					return
				}
			}
			if (!flag) {
				let user=localStorage.getItem('user');
				let userinfo=JSON.parse(user);
 				http.PostUrl('posts/addArticles', {
					title: articleinfo.title,
					description: articleinfo.description,
					content: articleinfo.content,
					categoryid: articleinfo.categoryid,
					categoryname: articleinfo.categoryname,
					author_id:userinfo._id,
					  articlepic: fileList[0].thumbUrl
				}).then((data) => {
					if (data.success) {
						message.success(data.msg)
					} else {
						console.log(data.msg)
					}
				})
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
			if (item.name == value) {
				setArticleinfo({
					...articleinfo,
					categoryid: item._id,
					categoryname: value
				})
			}
		})
	}

	const normFile = (e) => {
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};

	return (
		<div style={{ marginLeft: '.2rem', marginRight: '.2rem', marginTop: '.15rem' }}>
			<div>
				新增文章
			</div>
			<Form
				form={form}
				className='AddArticle'
				name="addarticle"
				initialValues={{ remember: true }}
			>
				<Form.Item
					name="articlepic"
					label="缩略图"
					valuePropName="fileList"
					getValueFromEvent={normFile}
				>
					<Upload name="articlepic"
						accept="image/jpeg,image/png"
						fileList={fileList}
						maxCount={1}
						beforeUpload={() => false}
						onChange={({ file, fileList }) => {
							setFileList(fileList)
						}}
						onPreview={(e) => {
							console.log(e.thumbUrl)
						}}
						listType="picture-card"
					>
						<div style={{ width: '50px', height: '50px', borderRadius: '50px', border: '1px solid #ddd', lineHeight: '50px' }}>+</div>
					</Upload>
				</Form.Item>
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
								<Option key={item.id} value={item.name}>{item.name}</Option>
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
