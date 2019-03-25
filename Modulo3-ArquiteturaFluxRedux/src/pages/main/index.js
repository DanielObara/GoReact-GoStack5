import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as FavoriteActions } from "../../store/ducks/favorites";

class Main extends Component {
	state = {
		repositoryInput: ""
	};

	_handleSubmit(e) {
		e.preventDefault();
		this.props.addFavoriteRequest(this.state.repositoryInput);
		this.setState({ repositoryInput: "" });
	}

	render() {
		const { removeFavorite, favorites } = this.props;
		console.log("TCL: Main -> render -> loading", favorites.loading);
		return (
			<Fragment>
				<form onSubmit={e => this._handleSubmit(e)}>
					<input
						type="text"
						value={this.state.repositoryInput}
						onChange={e => this.setState({ repositoryInput: e.target.value })}
					/>
					<button type="submit">Favoritar</button>

					{favorites.loading && <span>Carregando....</span>}
					{!!favorites.error && (
						<span style={{ color: "#f00" }}>{favorites.error}</span>
					)}
				</form>

				<ul>
					{favorites.data.map(favorite => (
						<li key={favorite.id}>
							<p>
								<strong>{favorite.name}</strong>({favorite.description})
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
	bindActionCreators(FavoriteActions, dispatch);

const mapStateToProps = state => ({
	favorites: state.favorites
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);
