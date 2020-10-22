import React from 'react'
import { InfoSection } from '../../components'
import { homeObjFour, homeObjOne, homeObjOTwo, homeObjThree } from './Data'

const HomePage = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjOTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default HomePage
