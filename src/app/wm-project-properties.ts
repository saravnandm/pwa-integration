import { setWmProjectProperties } from '@wm/core';

const properties = {
    "copyrightMsg": "Copyright (c) 2021-2022 wavemaker.com All Rights Reserved.\n This software is the confidential and proprietary information of wavemaker.com You shall not disclose such Confidential Information and shall use it only in accordance\n with the terms of the source code license agreement you entered into with wavemaker.com",
    "dateFormat": "",
    "homePage": "Main",
    "studioProjectUpgradeVersion": "107.04",
    "timeFormat": "",
    "packagePrefix": "com.tutorial",
    "platformType": "WEB",
    "deviceTypes": "",
    "version": "1.0",
    "type": "APPLICATION",
    "defaultLanguage": "en",
    "preferBrowserLang": "true",
    "icon": "media.png",
    "projectShellName": "WM_DEFAULT",
    "displayName": "Tutorial",
    "activeTheme": "material-2.0",
    "description": "Tutorial Application"
}

setWmProjectProperties(properties);

export default () => {};
