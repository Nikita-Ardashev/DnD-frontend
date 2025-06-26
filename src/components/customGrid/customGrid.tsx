import { ThreeElements, Vector3 } from '@react-three/fiber';
import React from 'react';
import { Euler } from 'three';
import CustomGridCell from './customGridCell';

type TGroupProps = ThreeElements['group'];

interface ICustomProps extends TGroupProps {
	isVertical?: boolean;
	side?: 'center' | 'left' | 'right';
}

const COUNT = 10;
const cell = (COUNT / 2) * 10;
const generatePosCell: Vector3[] = [];

for (let i = -cell; i < cell; i++) {
	const step = Math.floor(i / COUNT);

	generatePosCell.push([i % COUNT, step, 0]);
}

export default function CustomGrid({ isVertical = false, ...groupProps }: ICustomProps) {
	const rotation: Euler = new Euler(isVertical ? Math.PI / 2 : -Math.PI / 2, 0, 0);

	const lines = generatePosCell.map((pos, i) => {
		return <CustomGridCell key={i} position={pos} />;
	});

	return (
		<group rotation={rotation} {...groupProps}>
			{lines}
		</group>
	);
}
