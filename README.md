## ❄️ Introduction
This application has been developed with TypeScript, React, tested with Cypress, built and deployed with Webpack. The application contains a sidebar with styled components and animations, available via GitHub Pages. 
You can build and run it with Webpack on your own too. Follow these commands:
```shell
npm install #Install the dependencies
npm run build #Build the project: production mode
npm run dev #Run the project: developer mode
```
You can test the application with Cypress. Make sure that the server is running before launching Cypress. Type following commands:
```shell
npx cypress open
#Or you can use another command
npm run test
```
Also the project has been developed using ESLint, which you can run with the command:
```shell
npm run lint
```
## 🎯 Testing
The application has been tested with Cypress. Source code is within the corresponding folder.
### 🌕 Light theme tests
The application has been set to a light theme before running tests.

https://github.com/user-attachments/assets/b2ac9f5a-0047-4ae8-aaf0-bf78578fba1f

### 🌑 Dark theme tests
The application has been set to a dark theme before running tests.

https://github.com/user-attachments/assets/eeda28cc-1c13-4ed4-8d93-a69ae77a9a7c

### 🔨 Overall tests
The rest of the application has been tested too.

https://github.com/user-attachments/assets/9092156c-e48f-4b04-9d98-c2045262f640

## 💥 Deployment
The application has been deployed with Webpack. The following commands build and deploy the project:
```shell
npm run build
npm run deploy
```
It's available via GitHub Pages: https://sleeplessglory.github.io/makves/
