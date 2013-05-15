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
        this.socket.emit('videoGoTo', {key: key, to: eventStore.getById(i).get('start')});
    },
            
    launch: function(){

    },
    
    init: function(){
        console.log('VIDEO CONTROLLER INIT');
        console.log(key);
        this.socket = io.connect(serverio);
        socket      = this.socket;
        this.socket.on('connect', function() {
               socket.emit('initPad', {key: key});
        });
    }
    
});