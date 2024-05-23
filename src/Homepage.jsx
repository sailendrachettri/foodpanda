import React from 'react'
import Landingpage from './components/Landingpage'
import Subsection1 from './components/Subsection1'
import Subsection2 from './components/Subsection2'
import Subsection3 from './components/Subsection3'
import Subsection4 from './components/Subsection4'

const Homepage = () => {
    return (
        <>
            <div className="container my-4 p-4 rounded-5 shadow">
                <Landingpage />
                <Subsection1 />
                <Subsection2 />
                <Subsection3 />
                <Subsection4 />
            </div>
        </>
    )
}

export default Homepage