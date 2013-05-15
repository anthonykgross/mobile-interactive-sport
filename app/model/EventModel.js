Ext.define("Kctus.model.EventModel", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'itemid',
        fields: [
            { name: 'itemid', type: 'int' },
            { name: 'titre', type: 'string' },
            { name: 'start', type: 'int' },
            { name: 'end', type: 'int' },
            { name: 'has_tag', type: 'boolean' }
        ]
    }
});