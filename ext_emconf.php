<?php

/*********************************************************************
* Extension configuration file for ext "newsletter".
*
* Generated by ext 09-01-2014 13:45 UTC
*
* https://github.com/t3elmar/Ext
*********************************************************************/

$EM_CONF[$_EXTKEY] = array (
  'title' => 'Newsletter',
  'description' => 'Send any pages as Newsletter and provide statistics on opened emails and clicked links.',
  'category' => 'module',
  'author' => 'Ecodev',
  'author_email' => 'contact@ecodev.ch',
  'author_company' => 'Ecodev',
  'shy' => '',
  'conflicts' => '',
  'priority' => '',
  'module' => 'cli,web',
  'state' => 'stable',
  'internal' => '',
  'uploadfolder' => 1,
  'createDirs' => '',
  'modify_tables' => '',
  'clearCacheOnLoad' => '',
  'lockType' => '',
  'version' => '2.1.1',
  'constraints' => 
  array (
    'depends' => 
    array (
      'cms' => '',
      'extbase' => '',
      'fluid' => '',
      'php' => '5.3.7-0.0.0',
      'typo3' => '6.0.0-6.1.99',
      'scheduler' => '1.1.0',
    ),
    'conflicts' => 
    array (
    ),
    'suggests' => 
    array (
    ),
  ),
  'comment' => 'Speed optimisation and bugfixes',
  'user' => 'acrivelli',
);

?>