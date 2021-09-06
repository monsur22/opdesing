import React from 'react'
import Firstsection from './Firstsection'
import Secondsection from './Secondsection'
import Thirdsection from './Thirdsection'
import Forthsection from './Forthsection'
import Fifthsection from './Fifthsection'
// import Firstsection from './firstsection/Firstsection'
import "./home.css";

const Home = () => {
    return (
        <div>
            <Firstsection/>
            <Secondsection/>
            <Thirdsection/>
            <Forthsection/>
            <Fifthsection/>
        </div>
    )
}

export default Home
