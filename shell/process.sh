#!/bin/bash  
unzip typo3_src-7.2.0.zip
ln -s typo3_src-7.2.0 typo3_src
ln -s typo3_src/index.php index.php
ln -s typo3_src/typo3 typo3
cp typo3_src/_.htaccess ./
cp typo3_src/composer.json ./
touch FIRST_INSTALL
