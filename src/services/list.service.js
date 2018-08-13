export const getListItems = (list = [], componentFn, listClass = "") => 
    list
        .map(item => `<li class="${listClass}">${componentFn(item)}</li>`)
        .join(',')
        .replace(/,/g, '');
