Ext.define("Kctus.controller.EventController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            eventListContainer:"eventlistcontainer"
        },
        control: {
            eventListContainer:{
                videoGoTo: "videoGoTo"
            }
        }
    },

    videoGoTo: function(i){
        var eventStore = Ext.getStore('EventStore');
        if(this.socket !== undefined){
            this.socket.emit('videoGoTo', {key: this.key, to: eventStore.getAt(i).get('start')});
        }
    },
            
    launch: function(){

    },
    
    init: function(){
        queryString = Ext.Object.fromQueryString(window.location.search.substring(1));
        this.key    = queryString.key;
        this.socket = undefined;
        
        if(this.key !== undefined){
            this.socket = io.connect(serverio);
            this.socket.on('connect', this.socket.emit('initPad', {key: this.key}));
        }
        else{
            Ext.Msg.alert('Information', 'No valid key. Scan QrCode from <a href="'+urlClient+'">'+urlClient+'</a>');
        }
    }
    
});