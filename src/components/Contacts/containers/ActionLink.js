import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { setSearchFilter } from '../actions'

const ActionLinkBtn = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#/"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

ActionLinkBtn.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setSearchFilter(ownProps.filter))
    }
  }
}

const ActionLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionLinkBtn)

export default ActionLink

