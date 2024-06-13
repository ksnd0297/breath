import { format } from 'date-fns';

/**
 *
 * @param date
 * @returns date "yyyy-MM-dd"
 */
export const formatDateWithoutTime = (date: Date | string | number) => {
    return format(date, 'yyyy-MM-dd');
};

export function formatSecondToTime(seconds: number) {
    const days = Math.floor(seconds / 86400); // 1일 = 86400초
    const hours = Math.floor((seconds % 86400) / 3600); // 1시간 = 3600초
    const minutes = Math.floor((seconds % 3600) / 60); // 1분 = 60초
    const secs = seconds % 60;

    return `${days}일 ${hours}시간 ${minutes}분 ${secs}초`;
}
