import React from 'react'
import DashAppBar from './DashAppBar'
import DashboardContent from './dashboardContent'
import CssBaseline from '@material-ui/core/CssBaseline';
import { dashboardStyles } from './dashboardStyles';


const AdminDashboard = () => {
    const classes = dashboardStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <DashAppBar />
            <DashboardContent />
        </div>
    )
}

export default AdminDashboard
