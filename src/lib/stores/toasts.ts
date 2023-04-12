import { writable } from 'svelte/store';
import uniqid from 'uniqid';

type toastMessage = {
	type: 'info' | 'success' | 'warning' | 'error';
	id: string;
	message: string;
};

function createToastStore() {
	const { subscribe, update } = writable<toastMessage[]>([]);

	function addToast({
		type,
		id,
		message,
		timeout = 3000
	}: {
		type: toastMessage['type'];
		id: string;
		message: string;
		timeout?: number;
	}) {
		update((toasts) => [{ type, message, id }, ...toasts]);
		if (timeout) {
			setTimeout(() => {
				removeToast(id);
			}, timeout);
		}
	}

	function removeToast(id: string) {
		update((toasts) => toasts.filter((t) => t.id !== id));
	}
	return {
		subscribe,
		info: (message: string, timeout?: number) =>
			addToast({ type: 'info', message, timeout, id: uniqid() }),
		warning: (message: string, timeout?: number) =>
			addToast({ type: 'warning', message, timeout, id: uniqid() }),
		error: (message: string, timeout?: number) =>
			addToast({ type: 'error', message, timeout, id: uniqid() }),
		success: (message: string, timeout?: number) =>
			addToast({ type: 'success', message, timeout, id: uniqid() }),
		remove: (id: string) => removeToast(id)
	};
}

export default createToastStore();
