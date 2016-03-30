import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ShipIt from "../components/shipit";
import ShipItActions from "../actions/shipit";

function mapStateToProps( state ) {
  return {};
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( ShipItActions, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( ShipIt );
