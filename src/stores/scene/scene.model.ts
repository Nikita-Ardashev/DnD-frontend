import { t } from 'mobx-state-tree';

export const ModelScene = t
	.model({
		isViewGrid: t.optional(t.boolean, true),
		isEditable: t.optional(t.boolean, true),
		isControl: t.optional(t.boolean, true),
		groups: t.array(t.string),
		meshes: t.array(t.string),
	})
	.views((self) => ({
		get getIsControl() {
			return self.isControl;
		},
		get get() {
			return self;
		},
	}))
	.actions((self) => ({
		setIsControl(state: boolean) {
			self.isControl = state;
		},
	}));
