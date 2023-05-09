Step 1: npm i
Step 2: cd ios && pod install && cd ..
Step 3: download and use ngrok to public localhost
Step 4: copy ngrok https url in step above & paste to api laravel env APP_URL
Step 5: paste ngrok https url above to ./src/config/api.js -> const API (remember '/api' tail)
Step 6: npx react-native run-ios or npx react-native run-android
