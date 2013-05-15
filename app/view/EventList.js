Ext.define("InteractiveSport.view.EventList", {
    extend: "Ext.dataview.List",
    alias: "widget.eventlist",
    requires: ['Ext.plugin.ListPaging','Ext.plugin.PullRefresh'],
    config: {
        
        plugins: [
        {
            xclass: 'Ext.plugin.ListPaging',
            autoPaging: true,
            loadMoreText: 'Chargement...',
            noMoreRecordsText: ''
        },
        {
            xclass: 'Ext.plugin.PullRefresh',
            pullRefreshText: 'Tirez pour raffraichir',
            releaseRefreshText: 'Chargement...',
            loadingText: 'Chargement...',
            pullTpl: [
            '<div class="x-list-pullrefresh">',
            '<div class="x-list-pullrefresh-arrow"></div>',
            '<div class="x-loading-spinner">',
            '<span class="x-loading-top"></span>',
            '<span class="x-loading-right"></span>',
            '<span class="x-loading-bottom"></span>',
            '<span class="x-loading-left"></span>',
            '</div>',
            '<div class="x-list-pullrefresh-wrap">',
            '<h3 class="x-list-pullrefresh-message">{message}</h3>',
            '<div class="x-list-pullrefresh-updated">Mise à jour : <span>le {lastUpdated:date("d/m/Y à H:i")}</span></div>',
            '</div>',
            '</div>'
            ].join('')
        }
        ],
        loadingText: "",
        emptyText: '<p class="no_video_txt">Aucune vidéo ne correspond à votre recherche.</p>',
        onItemDisclosure: true,
        itemTpl: '<div class="list_items">'+
            '<i class="list_items_play_icon"></i>'+
            '<p class="item_title">{text}</p>'+
            '<span class="langs_list">'+
                '<tpl for="langsdispo"><i>{.}</i></tpl>'+
            '</span>'+
            '</div>'
    }
    
});