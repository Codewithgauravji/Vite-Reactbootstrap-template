import React from 'react'
import './Task3.css'
import Header from './Header'
function Task3() {
    return (
        <>
            <Header/>
        <div className='task3'>
            <div class="container">
                <form class="booking-form">
                    {/* <!-- Radio Buttons --> */}
                    <div class="trip-type">
                        <label>
                            <input type="radio" name="trip" value="roundtrip" checked />
                                Roundtrip
                        </label>
                        <label>
                            <input type="radio" name="trip" value="one-way"/>
                                One way
                        </label>
                        <label>
                            <input type="radio" name="trip" value="multi-city"/>
                                Multi-City
                        </label>
                    </div>

                    {/* <!-- Input Fields --> */}
                    <div class="form-group">
                        <div>
                            <label>Flying From</label>
                            <input type="text" placeholder="City or Airport"/>
                        </div>
                        <div>
                            <label>Flying To</label>
                            <input type="text" placeholder="City or Airport"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <label>Departing</label>
                            <input type="date"/>
                        </div>
                        <div>
                            <label>Returning</label>
                            <input type="date"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <label>Adults (18+)</label>
                            <select>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div>
                            <label>Children (0-17)</label>
                            <select>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div>
                            <label>Travel Class</label>
                            <select>
                                <option value="economy">Economy</option>
                                <option value="business">Business</option>
                                <option value="first-class">First Class</option>
                            </select>
                        </div>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <button type="submit" class="submit-btn">Shown Flights</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Task3