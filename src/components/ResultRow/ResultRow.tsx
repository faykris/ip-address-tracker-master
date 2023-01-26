import React from 'react';
import './ResultRow.css';

interface ResultProps {
  IPAddress: string,
  location: string,
  timezone: string,
  isp: string  
}

const ResultRow: React.FC<ResultProps> = ({
    IPAddress, location, timezone, isp
  }) => {
  return (
	<div className='ResultRow'>
		<div className='row'>
      <div className='col'>
        <p>IP address</p>
        <h3 className='ellipsis'>{IPAddress}</h3>
      </div>
      <div className='col'>
        <p>Location</p>
        <h3>{location}</h3>
      </div>
      <div className='col'>
      <p>Timezone</p>
        <h3>{timezone}</h3>
      </div>
      <div className='col'>
        <p>Isp</p>
        <h3>{isp}</h3>
      </div>
		</div>
	</div>
  )
};

export default ResultRow;
