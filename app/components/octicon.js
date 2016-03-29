import React from "react";

class Octicon extends React.Component {

  render() {
    return <span className={ `octicon octicon-${ this.props.name }` }></span>;
  }

}

Octicon.propTypes = {};

Octicon.defaultProps = {};

export default Octicon;
