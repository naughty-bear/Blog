import {Navigate} from 'react-router-dom'

import Css from '../pages/Css/index'
import JavaScript from '../pages/JavaScript/index'
import Html from '../pages/Html/index'
import React from '../pages/React/index'
import Vue from '../pages/Vue/index'
import Dailyrecord from '../pages/DailyRecord/index'


const routerArr = [
    {
        path:'/css',
        element:<Css/>
    },
    {
        path:'/html',
        element:<Html/>
    },
    {
        path:'/javascript',
        element:<JavaScript/>
    },
    {
        path:'/vue',
        element:<Vue/>
    },
    {
        path:'/react',
        element:<React/>
    },
    {
        path:'/dailyecord',
        element:<Dailyrecord/>
    },
    
    {
        path:'/',
        element:<Navigate to='/html'/>
    }
]

export default routerArr