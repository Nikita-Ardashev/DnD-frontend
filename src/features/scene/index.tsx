'use client';

import React, { memo, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {
	CameraControls,
	GizmoHelper,
	GizmoViewport,
	PivotControls,
} from '@react-three/drei';
import styles from './scene.module.sass';
import { CustomGrid } from '../customGrid';
import { GLTFModel } from '../GLTFModel';
import { StoreScene, StoreSceneHistory } from '@/stores/scene/scene.store';
import { observer } from 'mobx-react-lite';
import { handlerCTRL, handlerCTRLShift } from '@/utils/handlerKeys';

export const Scene = memo(
	observer(function Scene() {
		const control = StoreScene.isControl;
		const meshes = StoreScene.meshes;

		const handlerKey = (e: KeyboardEvent) => {
			handlerCTRL({
				e,
				key: 'z',
				handler: () => {
					StoreSceneHistory.undo();
				},
			});
			handlerCTRLShift({
				e,
				key: 'z',
				handler: () => {
					StoreSceneHistory.redo();
				},
			});
		};

		useEffect(() => {
			window.onkeyup = handlerKey;
		}, []);

		const meshesRender = meshes.map((m) => {
			const scale = m.scale?.getArray;
			return <GLTFModel src={m.fileURL} key={m.id} scale={scale} />;
		});

		return (
			<div className={styles.scene}>
				<Canvas style={{ width: '100%', height: '100%' }}>
					<PivotControls autoTransform={false}>
						{meshesRender}
						<CustomGrid isViewGrid={true} />

						<CameraControls
							azimuthAngle={1}
							polarAngle={1}
							distance={20}
							maxDistance={40}
							minDistance={2}
							enabled={control}
						/>
					</PivotControls>
					<GizmoHelper alignment="bottom-right" margin={[100, 100]}>
						<GizmoViewport labelColor="white" axisHeadScale={1} disabled />
					</GizmoHelper>
					<ambientLight intensity={0.5} />
					<directionalLight position={[5, 10, 7.5]} intensity={1} castShadow />
				</Canvas>
			</div>
		);
	}),
);
