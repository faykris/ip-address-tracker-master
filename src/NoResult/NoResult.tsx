import React from 'react'
import './NoResult.css'

function NoResult() {
  return (
	<div className='NoResult'>
		<div className='row'>
			<h1>No result found</h1>
      <h3>Check the IP address or domain and try again</h3>
      <h4>If it really exists and the error persists, please contact the administrator</h4>
		</div>
	</div>
  )
}

export default NoResult
