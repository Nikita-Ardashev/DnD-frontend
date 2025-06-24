import { Scene } from '@/components/scene';
import React from 'react';
export default function Constructor() {
	return (
		<div>
			<Scene>
				<mesh>
					<boxGeometry args={[1, 1, 1]} />
					<meshBasicMaterial color={'blue'} />
				</mesh>
			</Scene>
		</div>
	);
}
