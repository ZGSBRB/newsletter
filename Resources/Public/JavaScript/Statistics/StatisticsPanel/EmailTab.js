"use strict";

Ext.ns("Ext.ux.TYPO3.Newsletter.Statistics.StatisticsPanel");

/**
 * @class Ext.ux.TYPO3.Newsletter.Statistics.StatisticsPanel.EmailTab
 * @namespace Ext.ux.TYPO3.Newsletter.Statistics.StatisticsPanel
 * @extends Ext.Container
 *
 * Class for statistic container
 *
 * $Id$
 */
Ext.ux.TYPO3.Newsletter.Statistics.StatisticsPanel.EmailTab = Ext.extend(Ext.Container, {

	initComponent: function() {
		var config = {
			layout:'fit',
			width: 'auto',
			layoutConfig: {
				columns: 1
			},
			items: [
				{
					xtype: 'Ext.ux.TYPO3.Newsletter.Statistics.StatisticsPanel.EmailTab.EmailGrid',
					ref: 'emailGrid'
				},
			]
		};
		Ext.apply(this, config);
		Ext.ux.TYPO3.Newsletter.Statistics.StatisticsPanel.EmailTab.superclass.initComponent.call(this);
	}
});

Ext.reg('Ext.ux.TYPO3.Newsletter.Statistics.StatisticsPanel.EmailTab', Ext.ux.TYPO3.Newsletter.Statistics.StatisticsPanel.EmailTab);