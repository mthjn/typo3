
### Adding a new template in bootstrap package  
+ Add your template in `bootstrap_package/Configuration/PageTS/Mod/WebLayout/BackendLayouts`
+ make a nickname for it in `bootstrap_package/Resources/Private/Language/Backend.xml`
+ ??? Insert new layout into `bootstrap_package/Classes/Hooks/Options/BackendLayoutDataProvider.php`
  
  
```
'default_2_V_columns' => array(
'title' => 'LLL:EXT:bootstrap_package/Resources/Private/Language/Backend.xlf:backend_layout.default_2_V_columns',
'config' => '
backend_layout {
colCount = 6
rowCount = 2
rows {
1 {
columns {
1 {
name = LLL:EXT:cms/locallang_ttc.xlf:colPos.I.0
colPos = 1
colspan = 2
}
2 {
name = LLL:EXT:cms/locallang_ttc.xlf:colPos.I.1
colPos = 0
colspan = 4
}
}
}
2 {
columns {
1 {
name = LLL:EXT:bootstrap_package/Resources/Private/Language/Backend.xlf:backend_layout.column.footer1
colPos = 10
colspan = 2
}
2 {
name = LLL:EXT:bootstrap_package/Resources/Private/Language/Backend.xlf:backend_layout.column.footer2
colPos = 11
colspan = 2
}
3 {
name = LLL:EXT:bootstrap_package/Resources/Private/Language/Backend.xlf:backend_layout.column.footer3
colPos = 12
colspan = 2
}
}
}
}
}
',
'icon' => 'EXT:bootstrap_package/Resources/Public/Images/BackendLayouts/default_2_V_columns.gif'
),
```
  
   
### Src
+ [TYPO3 forum](https://forum.typo3.org/index.php/t/203479/)
