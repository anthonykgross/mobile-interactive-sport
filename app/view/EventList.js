Ext.define("Kctus.view.EventList", {
    extend: "Ext.dataview.List",
    alias: "widget.eventlist",
    requires: ['Ext.plugin.ListPaging'],
    config: {
        
        plugins: [{
            xclass: 'Ext.plugin.ListPaging',
            autoPaging: true
        }],
        loadingText: "",
        emptyText: '<p>Aucune donnée retournée.</p>',
        onItemDisclosure: true,
        itemTpl: 
            '<div class="listevent">{titre}</div>'
    }
    
});