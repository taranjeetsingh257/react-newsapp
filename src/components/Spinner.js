import React, { Component } from 'react'
// import loading from '../loading.gif'

export default class Spinner extends Component {
  render() {
    return (
        <div className="text-center">
            <div className="spinner-border" role="status">
                {/* <span class="sr-only">Loading...</span> */}
            </div>
        </div>
    )
  }
}
