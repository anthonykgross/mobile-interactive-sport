Ext.define("InteractiveSport.view.EventListContainer", {
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

        var videoList = {
            xtype: "eventlist",
            id:"eventlist_panel",
            store: Ext.getStore("EventStore"),
            disableSelection:true,
            listeners: {
                itemtap: {
                    fn: this.tapVideoItem, 
                    scope: this  
                }
            }
        };
        
        this.add([videoList]);
    },

    tapVideoItem: function (list, record, target, index, evt, options) {
        console.log('Event item tapped');
    }
});