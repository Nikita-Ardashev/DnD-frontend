import { SnapshotIn, t } from 'mobx-state-tree';

export const MSTXYZ = t
	.model({
		x: t.number,
		y: t.number,
		z: t.number,
	})
	.views((self) => ({
		get get() {
			return self;
		},
		get getArray() {
			return Array.from(Object.values(self)) as [number, number, number];
		},
	}))
	.actions((self) => ({
		set(values: Partial<SnapshotIn<typeof self>>) {
			Object.assign(self, values);
		},
	}));

export const ModelMesh = t
	.model({
		id: t.identifier,
		name: t.string,
		type: t.string,
		creator: t.maybeNull(t.identifier),
		crated_date: t.Date,
		file: t.string,
		scale: MSTXYZ,
		position: MSTXYZ,
		rotation: MSTXYZ,
	})
	.views((self) => ({
		get get() {
			return self;
		},
	}))
	.actions((self) => ({
		set(values: Partial<SnapshotIn<typeof self>>) {
			Object.assign(self, values);
		},
	}));

export const ModelGroupMesh = t
	.model({
		id: t.identifier,
		name: t.string,
		type: t.string,
		meshes: t.array(t.string),
	})
	.views((self) => ({
		get get() {
			return self;
		},
	}))
	.actions((self) => ({
		set(values: Partial<SnapshotIn<typeof self>>) {
			Object.assign(self, values);
		},
		addMesh(id: string) {
			self.meshes.push(id);
		},
		removeMesh(id: string) {
			self.meshes.remove(id);
		},
	}));
