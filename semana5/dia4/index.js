const contenedorBarChart=document
.querySelector("#bar-chart")
.getContext("2d")

const barchart=new Chart(contenedorBarChart,{
    type: "bar",
    data: {
        labels:[
                "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado",
            "Domingo",
                   
            
        ],
        datasets:[{
            label: "Numero De Usuarios por dia",
            data:[20,40,50,60,10,30,20,],
            borderWidth: 4,
            borderColor: "#31a",
            backgroundColor:[
                "#1ba",
                "#f01",
                "#ba1",
                "#dac",
                "#dac",
                "#dac",
                "#dac",
            ],     
        },
            
        ],
    },
});

const containerDoughnutChart = document
.querySelector("#doughnut-chart")
.getContext("2d");

const dataForChart ={
    labels: ["Computadoras","Celulares","Refrigeradoras","Parlantes"],
    datasets: [
        {
            label:"PRODUCTOS ELECTRONICOS",
            data:[120,350,600,250],
            borderWidth: 2,
            borderColor: "#31a",
            backgroundColor:[
                "#1ba",
                "#f01",
                "#ba1",
                "#dac",
                
                ],
        },
    ],
};

const config={
     type:"doughnut",
    data: dataForChart,
    

}

const donutChart =new Chart(containerDoughnutChart,config
    )

const containerlineChart=document
.querySelector("#line-chart")
.getContext("2d");

const configline={
    type:"line",
    data: dataForChart

}

const lineChart=new Chart(containerlineChart,configline)

const containerBubbleChart=document
.querySelector("#bubble-chart")
.getContext("2d");

dataForChart.datasets[0].data=[
    {
        x:20,
        y:30,
        r:15,
    },
    {
        x:40,
        y:10,
        r:10,
    },
];


const configBubble={
    type:"bubble",
    data: dataForChart

};

const bubbleChart=new Chart(containerBubbleChart,configBubble);

const containerPolarChart = document.querySelector("#polar-chart").getContext("2d");

dataForChart.datasets[0].data=[300,249,321,278];

const configPolar = {
    type:"polarArea",
    data: dataForChart,
}
const polarChart=new Chart(containerPolarChart,configPolar)

const containerRadarChart = document.querySelector("#radar-chart").getContext("2d");

const configRadar = {
    type:"radar",
    data: dataForChart,
}
const radarChart=new Chart(containerRadarChart,configRadar)

const containerScatterChart = document.querySelector("#scatter-chart").getContext("2d");

dataForChart.datasets[0].data =[
     {
         x:-10,
         y:0,
     },
     {
        x:0,
        y:10,
    },
    {
        x:10,
        y:5,
    },
    {
        x:0.5,
        y:5.5,
    },
]

const configScatter = {
    type:"scatter",
    data: dataForChart,
}
const scatterrChart=new Chart(containerScatterChart,configScatter)