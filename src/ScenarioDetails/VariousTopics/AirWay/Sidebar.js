// SideBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Module Outcomes</h2>
            <div className="module-item">
                <ol>
                    <li>Understand Anatomy of the Airway.</li>
                    <li>Identify the different airway manipulation techniques.</li>
                    <li>Have a clear Understanding of both Basic and Advanced airway Adjuncts.</li>
                    <li>Understand the various types of drugs used for patients with Airway emergencies.</li>
                    <li>Be able to Manage Airways of different population groups.</li>
                </ol>
            </div>
            <h2>Sub-Topics</h2>
            <ul>
                <li><Link to="/introduction-to-airway-management">Introduction to Airway Management</Link></li>
                <li><Link to="/basic-airway-techniques">Basic Airway Techniques and Adjuncts</Link></li>
                <li><Link to="/advanced-airway-techniques">Advanced Airway Techniques and Adjuncts</Link></li>
                <li><Link to="/airway-management-in-special-populations">Airway Management in Special Populations</Link></li>
                <li><Link to="/pharmacology-related-to-airway-management">Pharmacology Related to Airway Management</Link></li>
                <li><Link to="/complications-of-airway-management">Complications of Airway Management</Link></li>
                <li><Link to="/assessment-and-monitoring-tools">Assessment and Monitoring Tools</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
