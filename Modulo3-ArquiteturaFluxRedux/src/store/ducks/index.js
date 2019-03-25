import { combineReducers } from "redux";
import favorites from "../ducks/favorites";

//Responsável por retornar todos os reducers
export default combineReducers({
	favorites
});
