import React from 'react';
import './PatientAssessment.css';

const SideBar = () => {
    return (
        <>
            <div className="sidebar">
                <h2>Sub-Topics</h2>
                <ul>
                    <li><a href="/">Introduction</a></li>
                    <li><a href="/primary-assessment">Primary Assessment</a></li>
                    <li><a href="/secondary-assessment">Secondary Assessment</a></li>
                    <li><a href="/vital-signs">Vital Signs</a></li>
                    <li><a href="/patient-history">Patient History</a></li>
                    <li><a href="/documentation">Documentation</a></li>
                </ul>
            </div>

        </>
    );
}

export default SideBar;