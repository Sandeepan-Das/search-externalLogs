
export default (table = [],action) => {   
    switch (action.type) {
        case 'TABLE_DATA':
            return action.payload;
        default:
            return table;
    }
}