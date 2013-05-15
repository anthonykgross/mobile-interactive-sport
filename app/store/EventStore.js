Ext.define("Kctus.store.EventStore", {
    extend: "Ext.data.Store",
    config: {
        autoLoad: true,
        listeners:{
            beforeload: function(){
                Ext.Viewport.setMasked({
                    xtype: 'loadmask',
                    message: 'Veuillez patienter...'
                });
                Ext.Viewport.setMasked(true);
            },
            load: function(){
                Ext.Viewport.setMasked(false);
            }
        },
        model: "Kctus.model.EventModel", 
        pageSize: 12,
        proxy: {
            type: 'ajax',
            url: 'demo.json',
            extraParams: {
                conditions: ''
            },
            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }
});