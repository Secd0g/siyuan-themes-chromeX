
window.theme = {};
/**
 * 获取主题模式
 * @return {string} light 或 dark
 */
window.theme.themeMode = (() => {
    switch (window.siyuan.config.appearance.mode) {
        case 0:
            return 'light';
        case 1:
            return 'dark';
        default:
            return null;
    }
})();

window.theme.ID_COLOR_STYLE = 'theme-color-style';
window.theme.ID_CUSTOM_STYLE = 'custom-color-style';
/**
 * 更换主题模式
 * @params {string} lightStyle 浅色主题配置文件路径
 * @params {string} darkStyle 深色主题配置文件路径
 */
window.theme.changeThemeMode = function (
    lightStyle,
    darkStyle,
) {
    let href_color = null;
    switch (window.theme.themeMode) {
        case 'light':
            href_color = lightStyle;
            break;
        case 'dark':
        default:
            href_color = darkStyle;
            break;
    }
    window.theme.updateStyle(window.theme.ID_COLOR_STYLE, href_color);
}
/**
 * 加载样式文件
 * @params {string} href 样式地址
 * @params {string} id 样式 ID
 */
window.theme.loadStyle = function (href, id = null) {
    let style = document.createElement('link');
    if (id) style.id = id;
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = href;
    document.head.appendChild(style);
}
/**
 * 更新样式文件
 * @params {string} id 样式文件 ID
 * @params {string} href 样式文件地址
 */
window.theme.updateStyle = function (id, href) {
    let style = document.getElementById(id);
    if (style) {
        style.setAttribute('href', href);
    }
    else {
        window.theme.loadStyle(href, id);
    }
}
/* 根据当前主题模式加载样式配置文件 */
window.theme.changeThemeMode(
    `/appearance/themes/chromeX/theme-light.css`,
    `/appearance/themes/chromeX/theme-dark.css`,
);