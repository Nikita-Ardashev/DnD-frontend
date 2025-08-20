'use client';

import { useEffect, useState } from 'react';
import { Group } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function GLTFModel({ url }: { url: string }) {
	const [model, setModel] = useState<Group | null>(null);

	useEffect(() => {
		const loader = new GLTFLoader();
		loader.load(
			url,
			(gltf) => {
				setModel(gltf.scene);
			},
			undefined,
			(error) => {
				console.error('Error loading GLTF model:', error);
			},
		);
	}, [url]);

	return model ? <primitive object={model} /> : null;
}
