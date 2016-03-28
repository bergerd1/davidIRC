# davidIRC
IRC bot that runs on Modulus.io

Install Modulus CLI
$ npm install modulus -g

Sign up on Modulus
$ modulus signup

Go to local project path
$ cd IRCbot
$ modulus project create

Select node.js runtime
Choose 192MB servo

$ modulus deploy

Add env vars in 'administration' panel of project dashboard, or add env vars from command line.
$ modulus env set CHANNEL #testingBot
$ modulus env set BOTNAME DavidTheRobot

Restart modulus application
$ modulus project restart

see: https://help.modulus.io/customer/en_us/portal/articles/1701180-using-environments-variables
see: https://help.modulus.io/customer/en_us/portal/articles/1702084-environment-variable-commands
https://help.modulus.io/customer/en_us/portal/articles/1702081-project-commands
