import React from 'react'
import tiffSVG from "../transilvania-international-film-festival-tiff-logo-vector.svg";
import { tiffRoles } from '../components/tiffRoles';
import { useNavigate } from 'react-router-dom';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartPage = () => {

    const roles = tiffRoles;
    const roleCounts = {};
    const navigate = useNavigate();

    roles.forEach((role) => {
        roleCounts[role.type] = (roleCounts[role.type] || 0) + 1;
});

    const labels = [];
    const dataPoints = [];

    for (const [key, value] of Object.entries(roleCounts)) {
        labels.push(key);
        dataPoints.push(value);
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Roles with same type",
                backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
                data: dataPoints,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
    };

    const handleClick = () => {
        console.log("Go back to HomePage!");
        navigate("/"); // Navigate to HomePage
      };
    

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-r from-cyan-200 to-blue-500 flex justify-center items-center flex-col">
                <div className="relative">
                    <button className="absolute bottom-20 left-20 bg-blue-500 bg-opacity-70 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
                        onClick={() => handleClick()}
                    >
                        HomePage
                    </button>
                </div>
                {/* TIFF Festival logo */}
                <img src={tiffSVG} alt="TIFF Festival Logo" className="w-screen h-20" />

                <h1 className="text-center text-4xl font-bold mb-8">
                    <span className="box-decoration-slice bg-gradient-to-r from-indigo-700 to-pink-500 text-white px-10 py-0">
                        Chart<br />Page
                    </span>
                </h1>

                <div style={
                {
                padding: "20px",
                width: "100%"
                }
            }>
                <Pie data={data} options={options}/>
            </div>
            </div>
        </div>
    );
}
