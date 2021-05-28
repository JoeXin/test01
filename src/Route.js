import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Todolist from '@pages/Todolist';
import Index from '@pages/Index';
import Login from '@pages/Login';

import Register from '@pages/Register';
import Article from '@pages/Article';
import DetailArticle from '@pages/Article/DetailArticle';
import AddArticle from '@pages/Article/AddArticle';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/todolist" component={Todolist} />
			<Route exact path="/article" component={Article} />
			<Route exact path="/articledetail" component={DetailArticle} />
			<Route exact path="/addarticle" component={AddArticle} />
			<Route exact path="/editarticle" component={AddArticle} />
			<Redirect exact to="/" />
		</Switch>
	</BrowserRouter>
);

export default Routes