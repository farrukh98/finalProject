import React from "react";
import { Dashboard } from "./style";
import icon1 from "..//..//assest/icon/icon3.jpg";
import icon2 from "..//..//assest/icon/icon4.jpg";
import icon3 from "..//..//assest/icon/icon2.jpg";
import icon4 from "..//..//assest/icon/icon1.jpg";
import iconMenu from "..//..//assest/icon/menu.jpg";
import Chart from "react-apexcharts";

function DashBoard() {
  const series1 = [
    {
      name: "yellow",
      data: [20, 40, 60, 80, 100, 120, 140],
    },
  ];
  const series2 = [
    {
      name: "green",
      data: [20, 30, 16, 50, 70, 5, 80],
    },
  ];
  const option3 = {
    labels: ["desktop", "mobile", "tablet"],
    title: {
      text: "Visit Customer",
      style: {
        fotnSize: "20px",
        color: "gray",
      },
    },
    style: {
      margin: "10px 20px",
    },
    colors: ["#4049FE", "#34DEFF", "#FFBF40"],
    theme: {
      mode: "light",
    },
    legend: {
      position: "right",
      style: {
        margin: "100px 0",
      },
    },
    total: {
      enabled: true,
    },
    dataLabels: {
      enabled: false,
    },
  };
  const option2 = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "string",
      category: ["Sun", "Mon", "Tue", 40, 50, 60, 70],
    },
    title: {
      text: "Analytics",
      style: {
        fotnSize: 30,
      },
    },
    toolbar: {
      style: {
        display: "none",
      },
    },
  };
  const option1 = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "number",
      category: [10, 20, 30, 40, 50, 60, 70],
    },
    title: {
      text: "Sales overview",
      style: {
        fotnSize: 30,
      },
    },
    toolbar: {
      style: {
        display: "none",
      },
    },
  };

  return (
    <>
      <Dashboard>
        <h1>Dashboard</h1>
        <div className="wrapper">
          <div className="mini-card">
            <div className="card-image">
              <div className="img1">
                <img src={icon1} />
              </div>
              <img src={iconMenu} className="img2" />
            </div>

            <p className="price-card">$12,255,000</p>
            <div className="card-total">
              <p className="title-card">Today Sales</p>
              <div className="bb">
                {/* <img src="" alt="ss" /> */}
                <p>+35%</p>
              </div>
            </div>
          </div>
          <div className="mini-card">
            <div className="card-image">
              <div className="img1">
                <img src={icon2} />
              </div>
              <img src={iconMenu} className="img2" />
            </div>

            <p className="price-card">$4555,00</p>
            <div className="card-total">
              <p className="title-card">Today Expenses</p>
              <div className="bb">
                {/* <img src="https://img.icons8.com/ios-glyphs/30/000000/long-arrow-right.png" /> */}
                <p className="p">+10%</p>
              </div>
            </div>
          </div>
          <div className="mini-card">
            <div className="card-image">
              <div className="img1">
                <img src={icon3} />
              </div>
              <img src={iconMenu} className="img2" />
            </div>

            <p className="price-card">$9855</p>
            <div className="card-total">
              <p className="title-card">Today Visitors</p>
              <div className="bb">
                {/* <img src="" alt="ss" /> */}
                <p>+15%</p>
              </div>
            </div>
          </div>
          <div className="mini-card">
            <div className="card-image">
              <div className="img1">
                <img src={icon4} />
              </div>
              <img src={iconMenu} className="img2" />
            </div>

            <p className="price-card">$5000</p>
            <div className="card-total">
              <p className="title-card">Today Orders</p>
              <div className="bb">
                {/* <img src="" alt="ss" /> */}
                <p>+17%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-2">
          <Chart
            style={{ margin: "auto", backgroundColor: "white", padding:"20px 5px" }}
            options={option1}
            series={series1}
            type="bar"
            width={550}
            height="320"
          />
          <Chart
            style={{ margin: "0px 30px auto", backgroundColor:"white", padding:"20px 5px" }}
            options={option2}
            series={series2}
            type="area"
            width={436}
            height="320"
            title="Analtics"
          />
        </div>
        <div className="wrapper-3">
          <div className="card-wrapper">
            <table>
              <p className="title">Recent Orders</p>
              <tr>
                <th>Order ID</th>
                <th>Product Name</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>83448380</td>
                <td>Nike Air Max</td>
                <td>31/03/2021</td>
                <td>$250.00</td>
                <td>complete</td>
              </tr>
              <tr>
                <td>83418380</td>
                <td>Headphones</td>
                <td>31/03/2021</td>
                <td>$250.00</td>
                <td>pending</td>
              </tr>
              <tr>
                <td>83448349</td>
                <td>Iphone air</td>
                <td>31/03/2021</td>
                <td>$250.00</td>
                <td>canceled</td>
              </tr>
            </table>
          </div>
          <Chart
            type="donut"
            width="400"
            series={[50, 20, 20]}
            options={option3}
            style={{
              margin: "30px 0px 0px 0px",
              height: "333px",
              backgroundColor: "white",
            }}
          ></Chart>
        </div>
      </Dashboard>
    </>
  );
}

export default DashBoard;
