'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface IScene {
	children?: React.ReactNode;
	isControl?: boolean;
}

export function Scene({ children, isControl = true }: IScene) {
	const { innerWidth, innerHeight } = window;
	return (
		<div>
			<Canvas style={{ width: innerWidth, height: innerHeight, background: 'black' }}>
				{children}
				{isControl && <OrbitControls />}
			</Canvas>
		</div>
	);
}
