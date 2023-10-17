
import React from 'react';
import 'leaflet/dist/leaflet.css'
import style from '../../styles/Home.module.css'
import geometriaBairros from '../../jsons/geometrias_bairros.json'

import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet'

const mapOptions = {
	center: [-23.2225, -45.9157],
	zoom: 14,
};
// console.log(geometriaBairros)
    
const position = [-23.20827026939924,-45.908432084467613];

const onEachBairro = (bairro, layer) => {
	const { id, name, setor, zona } = bairro.properties;

	layer.bindPopup(`ID: ${id}</br>Nome: ${name}</br>Setor: ${setor}</br>Zona: ${zona}`);

	layer.options.color = {
		'1': '#2E93fA',
		'2': '#66DA00',
		'3': '#546E7A',
		'4': '#E91E63',
	}[id];

	layer.on({
		click: (event) => {
			console.log('event', event);
		},
		mouseover: (event) => {
			console.log('event', event);
		},
	});
};

export default function Map() {
    return (
       <>
		<MapContainer className={style.map} center={mapOptions.center} zoom={mapOptions.zoom}>
			<TileLayer
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<GeoJSON data={geometriaBairros.features} onEachFeature={onEachBairro}></GeoJSON>
		</MapContainer>
    	</>
    )
}