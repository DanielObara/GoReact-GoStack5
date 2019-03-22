import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as FavoritesActions from "../../store/actions/favorites";

const Main = ({ favorites, addFavorite, removeFavorite }) => {
	function _handleSubmit(e) {
		e.preventDefault();
		addFavorite();
	}
	return (
		<Fragment>
			{/* <form onSubmit={this._handleSubmit()}> */}
			<input type="text" />
			<button onClick={e => _handleSubmit(e)} type="submit">
				Favoritar
			</button>
			{/* </form> */}

			<ul>
				{favorites.map(favorite => (
					<li key={favorite.id}>
						<p>
							<strong>{favorite.title}</strong>({favorite.description})
						</p>
						<a href={favorite.url}>Acessar</a>
						<button onClick={() => removeFavorite(favorite.id)}>Excluir</button>
					</li>
				))}
			</ul>
		</Fragment>
	);
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(FavoritesActions, dispatch);

const mapStateToProps = state => ({
	favorites: state.favorites
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);
