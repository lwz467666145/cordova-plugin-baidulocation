此 plugin 修改自 https://github.com/aruis/cordova-plugin-baidumaplocation

# cordova-plugin-baidulocation
Baidu Map Location

# Install
cordova plugin add https://github.com/lwz467666145/cordova-plugin-baidulocation.git --variable ANDROID_KEY="<API_KEY_ANDROID>" --variable IOS_KEY="<API_KEY_IOS>"

# Use

### getLocation 获取当前定位
```javascript
navigator.baidulocation.getLocation((function (result) {
    // 定位成功回调方法
    // result - 定位信息对象
}, function (error) {
    // 定位失败回调方法
    // error - 定位失败错误对象
});
```
