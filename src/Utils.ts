export const getUrl = (url: string) => (process.env.NODE_ENV === 'development' ? url : `/reactstein${url}`);
