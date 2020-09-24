import React from 'react';
import dataabsensi from '../api/dataabsensi';

class Absensi extends React.Component {
	state = ({dataabsensi: [] });

	async componentDidMount() {

		const response = await dataabsensi.get('/api/');
		
		this.setState({absen: response.data.result});
		// console.log(response);
	}

	render() {
		return (
			<div className="ui segment">
				<table className="ui celled table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Masuk</th>
							<th>Izin</th>
							<th>Cuti</th>
						</tr>
					</thead>
					<tbody>
						{this.state.dataabsensi.map(item => (
						<tr key={item._id}>
							<td>{item.name}</td>
							<td>{item.masuk}</td>
							<td>{item.izin}</td>
							<td>{item.cuti}</td>
						</tr>
						))}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Absensi;