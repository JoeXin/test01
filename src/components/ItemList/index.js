function ItemList(props) {
	function clickDelete(index) {
		props.deleteItem(index)
	}
	const ItemList = props.items.map((item, index) => (
		<li key={index}>
			{item.title}
			<button onClick={() => { clickDelete(index) }}>完成</button>
		</li>
	))
	return ItemList
}

export default ItemList