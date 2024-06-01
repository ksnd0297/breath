export enum SELECT_OPTION_ENUM {
    'HOURLY' = 'hourly',
    'DAILY'= 'daily',
    'WEEKLY' = 'weekly',
    'MONTHLY' = 'monthly',
    'YEARLY' = 'yearly',
}

export const SELECT_OPTION = [
    {value: SELECT_OPTION_ENUM.HOURLY, label: "시급"},
    {value: SELECT_OPTION_ENUM.DAILY, label: "일급"},
    {value:SELECT_OPTION_ENUM.WEEKLY, label: "주급"},
    {value: SELECT_OPTION_ENUM.MONTHLY, label: "월급"},
    {value: SELECT_OPTION_ENUM.YEARLY, label: "연봉"},
];

export const SELECT_HOUR_TO_SEC : Record<SELECT_OPTION_ENUM, number> = {
    [SELECT_OPTION_ENUM.HOURLY] : 3600,
    [SELECT_OPTION_ENUM.DAILY]:86400,
    [SELECT_OPTION_ENUM.WEEKLY]:604800,
    [SELECT_OPTION_ENUM.MONTHLY]:2.628e+6,
    [SELECT_OPTION_ENUM.YEARLY]:3.154e7,
}