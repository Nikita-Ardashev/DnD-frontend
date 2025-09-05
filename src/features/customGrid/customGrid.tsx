import { ThreeElements, Vector3 } from '@react-three/fiber';
import React from 'react';
import { BoxGeometry, Euler } from 'three';
import { CustomGridCell } from './customGridCell';
type TGroupProps = Omit<ThreeElements['group'], 'children'>;
type TMeshProps = ThreeElements['mesh'];
interface ICustomProps extends TGroupProps {
	isViewGrid?: boolean;
	mesh?: TMeshProps & { geometry: BoxGeometry };
}

const generateGridLines = (width: number = 4, depth: number = 4) => {
	const lines: Vector3[] = new Array(width * depth);
	lines.fill([0, 0, 0]);
	let j = 0;
	for (let i = 0; i < lines.length; i++) {
		if (i % width === 0) j++;
		lines[i] = [i % width, j, 0];
	}
	return lines;
};
const { position, rotation }: { rotation: Euler; position: Vector3 } = {
	position: [1, 1, 1],
	rotation: new Euler(-Math.PI / 2, 0, 0),
};

export function CustomGrid({ isViewGrid = true, ...groupProps }: ICustomProps) {
	const geometry = groupProps.mesh?.geometry.parameters;
	const lines = generateGridLines(geometry?.width, geometry?.height).map((pos, i) => (
		<CustomGridCell key={i} position={pos} />
	));
	return (
		<group position={position} rotation={rotation} {...groupProps}>
			<mesh {...groupProps.mesh} />
			<group
				position={[
					-(geometry?.width ?? 0) / 2 + 0.5,
					-(geometry?.height ?? 0) / 2 - 0.5,
					0,
				]}
			>
				{isViewGrid && lines}
			</group>
		</group>
	);
}
