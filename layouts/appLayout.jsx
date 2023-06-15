
import React from "react"
import { Outlet } from 'react-router-dom'

function appLayout() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default appLayout