module.exports = {
    default: {
        require: [
            'step-definitions/**/*.js',
            'support/**/*.js'
        ],
        paths: [
            'features/**/*.feature'
        ],
        format: [
            'progress',
            'html:playwright-report/cucumber-report.html'
        ]
    }
};