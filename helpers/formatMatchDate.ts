import { format, isSameDay } from "date-fns";

export const formatMatchDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();

    if (isSameDay(date, now)) {
        return format(date, 'HH:mm');
    }
    return format(date, 'dd.MM.yyyy HH:mm');
};