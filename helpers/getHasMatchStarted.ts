export const getHasMatchStarted = (dateString: string) => {
    return new Date(dateString) <= new Date();
};