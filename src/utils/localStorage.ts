export const setItem = (key: string, value: object) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const getItem = <T>(key: string) => {
    if (typeof window !== 'undefined') {
        const value = localStorage.getItem(key);

        return JSON.parse(value!) as T;
    }
};
