interface IHandler {
	e: KeyboardEvent;
	key: string;
	handler: () => void;
}

export const handlerCTRLShift = (props: IHandler) => {
	if (
		props.e.key.toLowerCase() === props.key.toLowerCase() &&
		props.e.ctrlKey &&
		props.e.shiftKey
	) {
		props.handler();
	}
};

export const handlerCTRL = (props: IHandler) => {
	if (
		props.e.key.toLowerCase() === props.key.toLowerCase() &&
		props.e.ctrlKey &&
		!props.e.shiftKey
	) {
		props.handler();
	}
};
