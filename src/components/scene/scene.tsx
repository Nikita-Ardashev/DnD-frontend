'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import styles from './scene.module.sass';
import CustomGrid from '../customGrid/customGrid';
interface IScene {
	children?: React.ReactNode;
	isControl?: boolean;
}

export function Scene({ children, isControl = true }: IScene) {
	return (
		<div className={styles.scene}>
			<Canvas style={{ width: '100%', height: '100%', background: 'black' }}>
				{children}
				<CustomGrid />
				{/* <CustomGrid isVertical side="left" />
				<CustomGrid isVertical side="right" /> */}
				{isControl && (
					<CameraControls
						azimuthAngle={-0.8}
						polarAngle={0.5}
						distance={8}
						maxDistance={20}
						minDistance={2}
					/>
				)}
			</Canvas>
		</div>
	);
}
