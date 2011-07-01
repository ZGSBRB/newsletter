Ext.namespace('Ext.ux.TYPO3.Newsletter.RecipientList'); 
/**
 * A Store for the recipientList model using ExtDirect to communicate with the
 * server side extbase framework.
 */
Ext.ux.TYPO3.Newsletter.Store.RecipientList = function() {
	
	recipientListStore = null;
	
	var initialize = function() {
		if (recipientListStore == null) {
			recipientListStore = new Ext.data.DirectStore({
				storeId: 'Tx_Newsletter_Domain_Model_RecipientList',
				reader: new Ext.data.JsonReader({
					totalProperty:'total',
					successProperty:'success',
					idProperty:'__identity',
					root:'data',
					fields:[
					    {name: '__identity', type: 'int'},
						{name: 'title', type: 'string'},
						{name: 'plainOnly', type: 'boolean'},
						{name: 'lang', type: 'string'},
						{name: 'type', type: 'string'},
					    {name: 'fullName', convert: function(v, recipientList) { return String.format('{0} ({1})', recipientList.title, recipientList.type); }}
					]
				}),
				writer: new Ext.data.JsonWriter({
					encode:false,
					writeAllFields:false
				}),
				api: {
					read: Ext.ux.TYPO3.Newsletter.Remote.RecipientListController.listAction,
					update: Ext.ux.TYPO3.Newsletter.Remote.RecipientListController.updateAction,
					destroy: Ext.ux.TYPO3.Newsletter.Remote.RecipientListController.destroyAction,
					create: Ext.ux.TYPO3.Newsletter.Remote.RecipientListController.createAction
				},
				paramOrder: {
					read: [],
					update: ['data'],
					create: ['data'],
					destroy: ['data']
				},
				autoLoad: true
				
			});
		}
	}
	/**
	 * Public API of this singleton.
	 */
	return {
		initialize: initialize
	}
}();
