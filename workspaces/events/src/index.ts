import { EventEmitter } from "events";

/*
 * ein ziemlich sinnfreies Teil, aber sollte reichen um beide Seiten
 * eines EventEmitters zu testen.
 */
export const simpleListener = (dispatcher: EventEmitter, key: string, callback: () => void) => {
	dispatcher.on(key, callback);
};