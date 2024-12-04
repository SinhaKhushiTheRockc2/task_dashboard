import { Line,Bar, Pie } from "react-chartjs-2";
import { defaults } from "chart.js/auto";
import style from "./Hero.module.css";
import taskData from "../../data/taskData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.heroContainer}>
        <div className={`${style.dataCard} ${style.lineCard}`}>
        <Line
          data={{
            labels: taskData.map((data) => data.label),
            datasets: [
              {
                label: "Tasks",
                data: taskData.map((data) => data.value),
                backgroundColor: "#FF3030",
                borderColor: "#01487e",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Task Progress",
              },
            },
          }}
        />
        </div>
        <div className={`${style.dataCard} ${style.pieCard}`}>
        <Pie height={50} width={50} data={{
            labels: taskData.map((data) => data.label),
            datasets: [
              {
                label: "Tasks",
                data: taskData.map((data) => data.value),
                backgroundColor: [
                  "#0000FF",
                  "rgba(250, 192, 19, 0.8)",
                  "#008000",
                  "#FF0000"
                ],
                borderColor: [
                  "#0000FF",
                  "rgba(250, 192, 19, 0.8)",
                  "#008000",
                  "#FF0000"
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Task Status",
              },
            },
          }}/>
        </div>
        <div className={`${style.dataCard} ${style.barCard}`}>
        <Bar height={50} width={50} data={{
            labels: taskData.map((data) => data.label),
            datasets: [
              {
                label: "Tasks",
                data: taskData.map((data) => data.value),
                backgroundColor: [
                  "#0000FF",
                  "rgba(250, 192, 19, 0.8)",
                  "#008000",
                  "#FF0000"
                ],
                borderColor: [
                  "#0000FF",
                  "rgba(250, 192, 19, 0.8)",
                  "#008000",
                  "#FF0000"
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Task Status",
              },
            },
          }}/>
        </div>
      </div>
    </section>
  )
}

export default Hero
