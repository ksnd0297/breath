import { format } from "date-fns";

/**
 *
 * @param date
 * @returns date "yyyy-MM-dd"
 */
export const formatDateWithoutTime = (date: Date | string | number) => {
    return format(date, "yyyy-MM-dd");
};
