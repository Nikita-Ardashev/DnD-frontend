import { ThreeElements, Vector3 } from '@react-three/fiber';
import React, { useMemo } from 'react';
import { Euler } from 'three';
import CustomGridCell from './customGridCell';

type TGroupProps = ThreeElements['group'];

interface ICustomProps extends TGroupProps {
	isVertical?: boolean;
	side?: 'center' | 'left' | 'right';
}

const COUNT = 10;
const cell = COUNT * 10;

const generateGridLinesDown = () => {
	const lines: Vector3[] = [];

	for (let i = 1; i < cell; i++) {
		const step = Math.floor(i / COUNT);
		lines.push([i % COUNT, step, 0]);
	}
	return lines;
};

// const generateGridLinesLeft = () => {
// 	const lines: Vector3[] = [];

// 	for (let i = 1; i < cell; i++) {
// 		const step = Math.floor(i / COUNT);
// 		lines.push([i % COUNT, step, 0]);
// 	}
// 	return lines;
// };

export default function CustomGrid({ isVertical = false, ...groupProps }: ICustomProps) {
	const rotation: Euler = new Euler(isVertical ? Math.PI / 2 : -Math.PI / 2, 0, 0);

	const lines = useMemo(() => {
		return generateGridLinesDown().map((pos, i) => (
			<CustomGridCell key={i} position={pos} />
		));
	}, []);

	return (
		<group rotation={rotation} {...groupProps}>
			{lines}
		</group>
	);
}
