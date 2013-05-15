Ext.define("InteractiveSport.model.EventModel", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'text', type: 'string' }
        ]
    }
});