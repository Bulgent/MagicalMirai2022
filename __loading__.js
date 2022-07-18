// 起動画面編集用スクリプト

pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        // splash wrapper
        var wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        document.body.appendChild(wrapper);

        // splash
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        wrapper.appendChild(splash);
        splash.style.display = 'none';

        var logo = document.createElement('img');
        logo.src = 'data:image/png;base64,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';
        splash.appendChild(logo);
        logo.onload = function () {
            splash.style.display = 'block';
        };

        var container = document.createElement('div');
        container.id = 'progress-bar-container';
        splash.appendChild(container);

        var bar = document.createElement('div');
        bar.id = 'progress-bar';
        container.appendChild(bar);

    };

    var hideSplash = function () {
        var splash = document.getElementById('application-splash-wrapper');
        splash.parentElement.removeChild(splash);
    };

    var setProgress = function (value) {
        var bar = document.getElementById('progress-bar');
        if (bar) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = value * 100 + '%';
        }
    };

    var createCss = function () {
        var css = [
            'body {',
            '    background-color: #283538;',
            '}',
            '',
            '#application-splash-wrapper {',
            '    position: absolute;',
            '    top: 0;',
            '    left: 0;',
            '    height: 100%;',
            '    width: 100%;',
            '    background-color: #283538;',
            '}',
            '',
            '#application-splash {',
            '    position: absolute;',
            '    top: calc(50% - 28px);',
            '    width: 264px;',
            '    left: calc(50% - 132px);',
            '}',
            '',
            '#application-splash img {',
            '    width: 100%;',
            '}',
            '',
            '#progress-bar-container {',
            '    margin: 20px auto 0 auto;',
            '    height: 2px;',
            '    width: 100%;',
            '    background-color: #1d292c;',
            '}',
            '',
            '#progress-bar {',
            '    width: 0%;',
            '    height: 100%;',
            '    background-color: #f60;',
            '}',
            '',
            '@media (max-width: 480px) {',
            '    #application-splash {',
            '        width: 170px;',
            '        left: calc(50% - 85px);',
            '    }',
            '}'
        ].join('\n');

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
    };

    createCss();
    showSplash();

    app.on('preload:end', function () {
        app.off('preload:progress');
    });
    app.on('preload:progress', setProgress);
    app.on('start', hideSplash);
});