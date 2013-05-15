Ext.define("Kctus.view.EventListContainer", {
    requires:['Ext.Toolbar'],
    extend: "Ext.Container",
    alias: "widget.eventlistcontainer",

    config: {
        layout: {
            type: 'fit'
        }
    },
    
    initialize: function () {

        this.callParent(arguments);

        var eventList = {
            xtype: "eventlist",
            id:"eventlist_panel",
            store: Ext.getStore("EventStore"),
            disableSelection:true,
            listeners: {
                itemtap: {
                    fn: this.videoGoTo, 
                    scope: this  
                }
            }
        };
        
        this.add([eventList]);
    },

    videoGoTo: function (list, record, target, index, evt, options) {
        this.fireEvent("videoGoTo", record);
    }
});