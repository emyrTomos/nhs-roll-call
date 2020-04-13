# nhs-roll-call
## An app to help hospitals rota

Pull and npm install - there is a postinstall script which will browserify, there is also a gruntfile so if you amend and run grunt the default task will rebuild the javascript. 

## Viewing ##
The entry point to viewing the app is index.html

## Editing
*The main file is index.js
*The classes are in js/classes - just stubs at the moment
*The components are in js/components - there is a boilerplate BaseComponent if all you want to do is feed in a render component; otherwise if you want to add hooks or special methods you can extend it. 

## Browsing
The path as it stands comes fully logged in with a dummy user - you can view the rota for your shifts, go back and declare yourself unfit for various days. 
