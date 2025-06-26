'use client';

import { Vector3 } from '@react-three/fiber';
import React, { useState } from 'react';
import { DoubleSide } from 'three';

interface ICustomGridCell {
	size?: number;
	position: Vector3;
}

export default function CustomGridCell({ position, size = 1 }: ICustomGridCell) {
	const [isHovered, setHovered] = useState(false);
	const handlerPointerOver = () => {
		setHovered(true);
		console.log(position);
	};
	const handlerPointerOut = () => {
		setHovered(false);
	};
	return (
		<mesh
			position={position}
			onPointerOver={handlerPointerOver}
			onPointerOut={handlerPointerOut}
		>
			<planeGeometry args={[size, size]} />
			<meshBasicMaterial
				color={isHovered ? 'red' : 'gray'}
				wireframe
				side={DoubleSide}
				transparent
				opacity={0.5}
			/>
		</mesh>
	);
}
