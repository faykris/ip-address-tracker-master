import React, {useEffect, useState} from 'react';
import './SearchField.css';
import ResultRow from '../ResultRow/ResultRow';
import NoResult from '../NoResult/NoResult';
import { useSelector, useDispatch } from 'react-redux';
import { RootState }  from '../../redux/store';
import { AddIP } from '../../redux/actions';
import arrow from '../../images/icon-arrow.svg';
import axios from 'axios';


const SearchField = () => {

  const state = useSelector((state: RootState) => state)
  const dispatch = useDispatch();

	const [IP, setIP] = useState<string>(state.ip);
  const [IPAddress, setIPAddress] = useState<string>(state.ip);
  const [location, setLocation] = useState<string>(state.location);
  const [timezone, setTimezone] = useState<string>(state.timezone);
  const [isp, setIsp] = useState<string>(state.isp);
  const [err, serErr] = useState<boolean>(false);

  useEffect(() => {
    
    // Check if an IP, otherwise could be a Domain
    const searchP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
      .test(IPAddress) ? 'ipAddress' : 'domain';

    // The API key is limited to 333 request per each free account
    axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&${searchP}=${IPAddress}`)
      .then((response: { data: any }) => {
        const data = response.data
        const loc = data.location

        setIPAddress(data.ip)
        setLocation(loc.city)
        setTimezone(loc.timezone)
        setIsp(data.isp)
        serErr(false)

        dispatch(AddIP({
          ip: data.ip,
          location: loc.city,
          timezone: loc.timezone,
          isp: data.isp,
          lat: loc.lat,
          lng: loc.lng
        }))

      })
      .catch((error: any) => {
        console.log(error)
        serErr(true)
      })
      // eslint-disable-next-line
  }, [IPAddress] );

  const handleChange = (event: any) => {
    setIP(event.target.value);
  };

  const handleButton = () => {
    if (IP !== '') setIPAddress(IP) 
  }

  return (
    <>
      <div className='SearchField'>
        <input 
          className='searchIP' 
          type="text" 
          name="searchIP" 
          id="searchIP"  
          placeholder='Search for any IP address or domain'
          onChange={handleChange}
        />
        <button className='searchBtn' onClick={handleButton}>
          <img src={arrow} alt="Arrow Icon" />
        </button>
      </div>
      {!err ?
      <ResultRow
        IPAddress={IPAddress}
        location={location}
        timezone={`UTC${timezone}`}
        isp={isp}
      /> : <NoResult />
      }
    </>
  )
};

export default SearchField;