import { useEffect, useState } from 'react';

const useLocalStorage = <T>(key: string) => {
    const [state, setState] = useState<T | null>(null);
    const [isReady, setReady] = useState(false);

    const setItem = (value: T) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(value));
            setState(value);
        }
    };

    useEffect(function getItem() {
        if (typeof window !== 'undefined') {
            const value = localStorage.getItem(key);

            if (value) {
                setState(JSON.parse(value));
            }
            setReady(true);
        }
    }, []);

    return { state, setItem, isReady };
};

export default useLocalStorage;
