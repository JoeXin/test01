import React from 'react'
class ItemForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		if (!this.state.value) {
			return
		}
		this.props.addNewItem(this.state.value)
		this.setState({ value: '' })
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					事项:
					<input type="text" onChange={this.handleChange} value={this.state.value} />
				</label>
				<input type="submit" value='提交' />
			</form>
		)
	}
}

export default ItemForm