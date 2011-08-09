"use strict";

Ext.ns("Ext.ux.TYPO3.Newsletter.Module");

/**
 * @class Ext.ux.TYPO3.Newsletter.Module.Application
 * @namespace Ext.ux.TYPO3.Newsletter.Module
 * @extends Ext.util.Observable
 *
 * The main entry point which controls the lifecycle of the application.
 *
 * This is the main event handler of the application.
 *
 * @singleton
 *
 * $Id$
 */

Ext.ux.TYPO3.Newsletter.Module.Application = Ext.apply(new Ext.util.Observable(), {

	/**
	 * Main bootstrap. This is called by Ext.onReady.
	 *
	 * This method is called automatically.
	 */
	bootstrap: function() {
		Ext.QuickTips.init();

		this.initStore();
		this.initGui();
	},
	
	/**
	 * Init menus and content area
	 */
	initGui: function() {
		
		new Ext.Viewport({
			layout: 'fit',
			renderTo: Ext.getBody(),
			items: [{
				id: 'main-tabs',
				xtype: 'tabpanel',
				activeTab: 0,
				items: [{
					xtype: 'Ext.ux.TYPO3.Newsletter.Planner.Planner',
					iconCls: 't3-newsletter-button-planner',
					api: {
						load: Ext.ux.TYPO3.Newsletter.Remote.NewsletterController.listPlannedAction,
						submit: Ext.ux.TYPO3.Newsletter.Remote.NewsletterController.createAction
					}

				}, {
					xtype: 'Ext.ux.TYPO3.Newsletter.Statistics.Statistics',
					iconCls: 't3-newsletter-button-statistics'
				}]
			}]
		});
	},

	/**
	 * Init ExtDirect stores
	 */
	initStore: function() {
		Ext.ux.TYPO3.Newsletter.Store.Newsletter.initialize();
		Ext.ux.TYPO3.Newsletter.Store.SelectedNewsletter.initialize();
		Ext.ux.TYPO3.Newsletter.Store.PlannedNewsletter.initialize();
		Ext.ux.TYPO3.Newsletter.Store.Email.initialize();
		Ext.ux.TYPO3.Newsletter.Store.Link.initialize();
		Ext.ux.TYPO3.Newsletter.Store.BounceAccount.initialize();
		Ext.ux.TYPO3.Newsletter.Store.RecipientList.initialize();
		
		// pie chart depends on SelectedNewsletter store so it must be initialized after it
		Ext.ux.TYPO3.Newsletter.Store.OverviewPieChart = Ext.ux.TYPO3.Newsletter.Store.initOverviewPieChart();
	},

	/**
	 * Register Event Debugging
	 *
	 * @access private
	 * @return void
	 */
	_registerEventDebugging: function() {
		Ext.util.Observable.capture(
			this,
			function(e) {
				if (window.console && window.console.log) {
					console.log(e, arguments);
				}
			}
			);
	}
});