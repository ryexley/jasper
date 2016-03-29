import React from "react";
import styles from "./repository-list-item.css";
import Octicon from "./octicon";

class RepositoryListItem extends React.Component {

  constructor() {
    super();
  }

  // ========================================================================
  // Invoked once, both on the client and server, immediately before the initial rendering occurs.
  // If you call setState within this method, render() will see the updated state and will be executed
  // only once despite the state change.
  componentWillMount() {}

  // ========================================================================
  // Invoked once, only on the client (not on the server), immediately after the initial rendering
  // occurs. At this point in the lifecycle, you can access any refs to your children (e.g., to access
  // the underlying DOM representation). The componentDidMount() method of child components is invoked
  // before that of parent components.

  // If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval,
  // or send AJAX requests, perform those operations in this method.
  componentDidMount() {}

  // ========================================================================
  // Invoked when a component is receiving new props. This method is not called for the initial render.

  // Use this as an opportunity to react to a prop transition before render() is called by updating the
  // state using this.setState(). The old props can be accessed via this.props. Calling this.setState()
  // within this function will not trigger an additional render.
  componentWillReceiveProps() {}

  // ========================================================================
  // Invoked before rendering when new props or state are being received. This method is not called for
  // the initial render or when forceUpdate is used.

  // Use this as an opportunity to return false when you're certain that the transition to the new props
  // and state will not require a component update.
  shouldComponentUpdate() {}

  // ========================================================================
  // Invoked immediately before rendering when new props or state are being received. This method is not
  // called for the initial render.

  // Use this as an opportunity to perform preparation before an update occurs.
  componentWillUpdate() {}

  // ========================================================================
  // Invoked immediately after the component's updates are flushed to the DOM.
  // This method is not called for the initial render.

  // Use this as an opportunity to operate on the DOM when the component has been updated.
  componentDidUpdate() {}

  // ========================================================================
  // Invoked immediately before a component is unmounted from the DOM.

  // Perform any necessary cleanup in this method, such as invalidating timers or
  // cleaning up any DOM elements that were created in componentDidMount.
  componentWillUnmount() {}

  render() {
    const repo = this.props.repository;

    return (
      <div className={ styles.RepositoryListItem }>
        <span>{ repo.name }</span>
        <ul className={ styles.actionButtons }>
          <li>
            <a href="#" className={ styles.actionButton } title="Ship it (tag and release)">
              <Octicon name="squirrel" />
            </a>
          </li>
          <li>
            <a href="#" className={ styles.actionButton } title="Tags and Releases">
              <Octicon name="tag" />
            </a>
          </li>
          <li>
            <a href="#" className={ styles.actionButton } title="Pull Requests">
              <Octicon name="git-pull-request" />
            </a>
          </li>
          <li>
            <a href="#" className={ styles.actionButton } title="Branches">
              <Octicon name="git-branch" />
            </a>
          </li>
        </ul>
      </div>
    );
  }

}

RepositoryListItem.propTypes = {};

RepositoryListItem.defaultProps = {};

export default RepositoryListItem;
