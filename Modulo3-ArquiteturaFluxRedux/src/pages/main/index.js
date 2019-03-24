import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as FavoritesActions from "../../store/actions/favorites";

class Main extends Component {
	state = {
		repositoryInput: ""
	};

	_handleSubmit(e) {
		e.preventDefault();
		this.props.addFavorite();
	}
	render() {
		const { favorites, removeFavorite } = this.props;
		return (
			<Fragment>
				<form onSubmit={e => this._handleSubmit(e)}>
					<input
						type="text"
						value={this.state.repositoryInput}
						onChange={e => this.setState({ repositoryInput: e.target.value })}
					/>
					<button type="submit">Favoritar</button>
				</form>

				<ul>
					{favorites.map(favorite => (
						<li key={favorite.id}>
							<p>
								<strong>{favorite.title}</strong>({favorite.description})
							</p>
							<a href={favorite.url}>Acessar</a>
							<button onClick={() => removeFavorite(favorite.id)}>
								Excluir
							</button>
						</li>
					))}
				</ul>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators(FavoritesActions, dispatch);

const mapStateToProps = state => ({
	favorites: state.favorites
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);
