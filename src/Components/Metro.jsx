import React from 'react'
import './Metro.css'
import Dropdown from 'react-bootstrap/Dropdown';
// import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Header from './Header';
function Metro() {
    return (
        <div>
            <Header />
            <div className='main'>
                <div className="contaner">
                    <header>
                        <img src="https://yometro.com/images/yometro-logo.png" alt="" style={{ height: "50px" }} />
                        <img src="https://yometro.com/images/icons/etoh-new.png" alt="" />
                        <img src="https://yometro.com/images/icons/nearby-new.png" alt="" />
                        <img src="https://yometro.com/images/icons/menu4.png" alt="" />
                    </header>
                    <div className="img">
                        <img src="https://images.unsplash.com/photo-1541794579211-7234081ab466?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWV0cm8lMjBzdGF0aW9ufGVufDB8fDB8fHww" alt="" />
                        <h2>Select Stations To Find Lucknow Route</h2>
                        <img src="https://yometro.com/images/metro/lucknow-metro-logo.png" alt="" className='img2' />
                        <Dropdown className='drop1'>
                            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: "250px", height: "50px" }}>
                                Transport Nagar, Lucknow
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Alambagh, Lucknow</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Badhshah Nagar, Lucknow</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Bhoothnath Market, Lucknow</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Charbagh, Lucknow</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Hazratganj, Lucknow</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Singar Nagar, Lucknow</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Sachivalaya, Lucknow</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Munshipulia, Lucknow</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='drop2'>
                            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: "250px", height: "50px" }}>
                                Hazratganj, Lucknow
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Alambagh, Lucknow</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Badhshah Nagar, Lucknow</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Bhoothnath Market, Lucknow</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Charbagh, Lucknow</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Hazratganj, Lucknow</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Singar Nagar, Lucknow</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Sachivalaya, Lucknow</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Munshipulia, Lucknow</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {/* <FaMagnifyingGlass className='icon'/> */}
                        <IoSearch className='icon' />
                    </div>
                    <h1 className='head'>Lucknow Metro Network</h1>
                    <h4><b>Operator:</b> Uttar Pradesh Metro Rail Corporation (UPMRC)</h4>
                </div>
            </div>
        </div>
    )
}

export default Metro