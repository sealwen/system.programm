import 'bootstrap/dist/css/bootstrap.css';

function Table(props) {
	return (<table className="table table-striped table-dark">
	<thead>
		<tr>
			<th>Наименование</th>
			<th>Начала</th>
			<th>Ресурс</th>
			<th>Приоритет</th>
		</tr>
	</thead>
	<tbody>
		{props.values.map(
			(item, ind) => {
				return (<tr>
					<td><input className="form-control" value={item.Наименование} readOnly /></td>
					<td><input className="form-control" value={item.Начала} onChange={(e) => props.changing(e, ind, 'begin')} /></td>
					<td><input className="form-control" value={item.Ресурс} onChange={(e) => props.changing(e, ind, 'resource')} /></td>
					<td><input className="form-control" value={item.Приоритет} onChange={(e) => props.changing(e, ind, 'priority')} /></td>
				</tr>
				)}
		)}
	</tbody>
	</table>
	);
}

export default Table;