
const ctx = document.getElementById('myChart')
let chart ;
let newData = {
    labels : [],
    datasets : [{
        label:'value',
        data :[],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
    }]
}


let config = {
    type : 'line',
    data: newData,
   
    options:{
        scales:{
            x:{
                type:'linear',
                position:'bottom',
                title:{
                    display: true,
                     text: 'Time',
                },
            },
            y:{
                beginAtZero:true,
                title:{
                    display:true,
                    text:'value'
                },
            },
        },
    }
}

let newChart = new Chart(ctx,config);
function addData(){
    let newData = Math.random()*100;
    newChart.data.labels.push(newChart.data.labels.length);
    console.log(newChart.data.labels.length);
    newChart.data.datasets[0].data.push(newData);
    newChart.update(); 
}

setInterval(() => {
    addData()
}, 1000);