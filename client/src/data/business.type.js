export const types = [
    {
        value: "cafe",
        label: "Кафе",
    },
    {
        value: "mini-market",
        label: "Міні-маркет",
    },
    {
        value: "bread-market",
        label: "Хлібобулочний магазин",
    }
];
export const getLabel = (type) => {
    const index = types.findIndex(({value}) =>  value === type);
    if (index !== -1) {
        return types[index].label;
    }
    return undefined;
};
