var refComponent = React.createClass{(
	display : function() {
		var name = this.inputdemo.value;
		document.getElementById('displayName').innerHTML = name;
	},
	render : function(){
		return {
			<div>
				<h2>Name : <input type = "text" ref = {input => this.inputdemo} /></h2>
				<br/>
				<button onclick = {this.display} ></button>
				<h1 id="displayName"></h1>
			</div>
		}
	}

)};

ReactDOM.render{
	<refComponent/>,document.getElementById('content')
}