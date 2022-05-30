import React from 'react';
import classes from './Chart.module.css';

export default function Chart(props) {
	const { mode, data, color } = props;
	const barWidth = data.length > 0 ? 100 / data.length : 20;
	let svgHeight = Math.max(...data) > 350 ? Math.max(...data) + 50 : 350;
	let svgWidth = data.length * barWidth > 500 ? data.length * barWidth + 50 : 300;
	if (mode === 'bars' || mode === undefined) {
		return (
			<div>
				<div style={{ maxWidth: '100%' }}>
					<svg height={svgHeight} width={'100%'} className={classes.svg}>
						{data.map((element, i) => {
							return (
								<rect
									x={`${barWidth}%` * i}
									y={svgHeight - element}
									height={element}
									width={`${barWidth}%`}
									fill={color}
								/>
							);
						})}
					</svg>
				</div>
			</div>
		);
	} else if (mode === 'line') {
	}
}
