import React from 'react'
import LoadingBar from 'react-redux-loading-bar'
 
export default class Header extends React.Component {
  render() {
    return (
      <header>
        <LoadingBar style={{backgroundColor: "#e7eaf3", height: "5px"}} />
      </header>
    )
  }
}