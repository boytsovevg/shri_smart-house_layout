export const getListItems = (list = [], componentFn) => 
    list
        .map(item => `<li class="stats__device">${componentFn(item)}</li>`)
        .join(',')
        .replace(/,/g, '');
