
import React, { useState } from 'react'

import ItemForm from '@components/ItemForm'

import ItemList from '@components/ItemList'

import { useHistory } from "react-router-dom";


function Todolist() {

	let history = useHistory();


	const [itemId, setItemId] = useState(4)

	const [items, setItems] = useState([
		{
			id: 1,
			title: '吃饭',
		},
		{
			id: 2,
			title: '睡觉',
		},
		{
			id: 3,
			title: '打豆豆',
		},
	])

	function deleteItem(index) {
		items.splice(index, 1)
		setItems([...items])
	}

	function addNewItem(data) {
		let obj = {
			id: itemId,
			title: data,
		}

		items.push(obj)
		setItemId(itemId + 1)
		setItems(items)
	}
	
	return (
		<div>
			<div>todolist</div>
			<div>
				<ItemForm addNewItem={addNewItem}></ItemForm>
				<ItemList deleteItem={deleteItem} items={items}></ItemList>
			</div>
			<button onClick={()=>{
				history.push('/article')
			}}>文章列表</button>
		</div>
	);
}

export default Todolist;
