import React from 'react'
import './Task1.css'
import Header from './Header'
function Task1() {
    return (
        <div className='task1'>
            <Header/>
            <div class="artist-page">
                <div class="artist-header">
                    <img src="https://th.bing.com/th?id=OIP.ih91WrtjIG2sHnr-X20ZEgAAAA&w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Shawn Mendes" class="artist-image"/>
                        <div class="artist-info">
                            <p>Artist from your Library</p>
                            <h1>Arijit Singh</h1>
                            <button class="play-button">Play</button>
                            <div class="actions">
                                <button>&#9825;</button>
                                <button>...</button>
                            </div>
                        </div>
                </div>
                <table class="song-list">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Album</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Why</td>
                            <td>Arijit Singh</td>
                            <td>3:58</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>If I Can't Have You</td>
                            <td>Arijit Singh</td>
                            <td>3:11</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Life Of The Party</td>
                            <td>Arijit Singh</td>
                            <td>3:18</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Stitches</td>
                            <td>Arijit Singh</td>
                            <td>3:35</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Never Be Alone</td>
                            <td>Arijit Singh</td>
                            <td>3:27</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Task1