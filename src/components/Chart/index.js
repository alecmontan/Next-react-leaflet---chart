import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import style from '../../styles/Home.module.css'
import bairrosPopulacao from '../../jsons/populacao_bairros.json';


ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
  );


  
const chartData={
       
       labels: [...new Set(bairrosPopulacao.map((item) => item.ano))],
       datasets: [

		{
			label: '1 - Jd. Colinas',
			data: bairrosPopulacao
				.filter((item) => item.id_geometria === 1)
				.map((item) => Number(item.populacao)),
			backgroundColor: '#2E93fA',
			borderWidth: 1,
			
		},
		{
			label: '2 - Jd. das Industrias',
			data: bairrosPopulacao
				.filter((item) => item.id_geometria === 2)
				.map((item) => Number(item.populacao)),
			backgroundColor: '#66DA00',
			borderWidth: 1,
		},
		{
			label: '3 - Jd. Alvorada',
			data: bairrosPopulacao
				.filter((item) => item.id_geometria === 3)
				.map((item) => Number(item.populacao)),
			backgroundColor: '#546E7A',
			borderWidth: 1,
		},
		{
			label: '4 - Pq. Res. Aquarius',
			data: bairrosPopulacao
				.filter((item) => item.id_geometria === 4)
				.map((item) => Number(item.populacao)),
			backgroundColor: '#E91E63',
			borderWidth: 1,
		},
	],
}

const chartOptions={
	responsive: true,
	legend: {
		display: false,
	},
	type:'bar'
}
export default () =>  ({
 displayName: `Evolução Populacional`,
 render() {
       return (
       <div className={style.chart}>
              <h2>Evolução Populacional</h2>
              <Bar
              data={chartData}
			  width={null}
        	  height={null}
              options={chartOptions}
              />
       </div>         
        );
    }
});