import React from 'react';
type EventName = string;
type EventData = any;
type EventCallback = (data: EventData) => void;
export declare const PubSubProvider: React.FC<React.PropsWithChildren>;
export declare const usePubSub: () => {
    subscribe: (eventName: EventName, callback: EventCallback) => () => void;
    publish: (eventName: EventName, data: EventData) => void;
};
export {};
