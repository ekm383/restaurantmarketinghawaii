import React, { Component } from "react"
import { Line } from "react-chartjs-2"
import styled from "styled-components"

export default class Chart extends Component {
  state = {
    rmhData: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "RMH Revenue Trend",
          data: [
            500,
            1000,
            1500,
            2000,
            2500,
            3000,
            3500,
            4000,
            4500,
            5000,
            5500,
            6000,
          ],
          borderColor: "#5cb2d2",
          fill: false,
        },
        {
          label: "Competition Revenue Trend",
          data: [
            -5800,
            -5300,
            -4800,
            -4300,
            -3800,
            -3300,
            -2800,
            -2300,
            -1800,
            -1300,
            -800,
            -300,
          ],
          borderColor: "#E86D61",
          fill: false,
        },
      ],
    },
  }
  render() {
    return (
      <ChartWrapper>
        <Line
          data={this.state.rmhData}
          options={{
            title: { display: true, text: "Profit over Time" },
            legend: { display: true, position: "top" },
          }}
        />
        <div className="container">
          <div className="box">
            <h4 style={{ color: "var(--mainBlue)" }}>
              Restaurant Marketing HI Breakdown
            </h4>
            <p style={{ fontSize: "0.7rem", lineHeight: "1.2rem" }}>
              Based on $500 monthly ad budget spend, average 2% conversion rate
              and take 20% takeout order fee. You should be seeing an{" "}
              <em>estimated ROI of $1,500 per month</em> if you grossed
              $10k/month on takeout.
              <p>
                <strong>Profits should start in 1-3 months.</strong>
              </p>
            </p>
          </div>
          <div className="box">
            <h4 style={{ color: "#E86D61" }}>Traditional Agency Breakdown</h4>
            <p style={{ fontSize: "0.7rem", lineHeight: "1.2rem" }}>
              Based on $500 monthly ad budget spend plus website build ($4,000),
              Content Creation ($1,000/month), Social Media Management
              ($800/month) and an average 2% conversion rate, ou should be
              seeing an <em>estimated ROI of $500 per month</em> if you grossed
              $10k/month on takeout.
              <p>
                <strong>Profits should start in 14+ months.</strong>
              </p>
            </p>
          </div>
        </div>
      </ChartWrapper>
    )
  }
}

const ChartWrapper = styled.div`
  flex-basis: 90%;
  margin: 0px auto;
  .container {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .box {
    flex-basis: 47%;
  }
  em {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    flex-basis: 90%;
    .container {
      width: 80%;
    }
    .box {
      flex-basis: 100%;
      margin-top: 20px;
    }
  }
`
