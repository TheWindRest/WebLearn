var app = new Vue({
    el: '#app',
    data: {
        projects: [
            {
                name: "1.BorderButton",
                video: "https://www.bilibili.com/bangumi/play/ep317925?spm_id_from=333.851.b_62696c695f7265706f72745f616e696d65.52"
            },
            {
                name: "2.Card",
                video: "https://www.bilibili.com/bangumi/play/ep317925?spm_id_from=333.851.b_62696c695f7265706f72745f616e696d65.52"
            },
            {
                name: "3.Email",
                video: "https://www.bilibili.com/bangumi/play/ep317925?spm_id_from=333.851.b_62696c695f7265706f72745f616e696d65.52"
            },
            {
                name: "4.Clock",
                video: "https://www.bilibili.com/bangumi/play/ep317925?spm_id_from=333.851.b_62696c695f7265706f72745f616e696d65.52"
            },
            {
                name: "5.DouYin",
                video: "https://www.bilibili.com/bangumi/play/ep317925?spm_id_from=333.851.b_62696c695f7265706f72745f616e696d65.52"
            },
            {
                name: "6.JianZhi",
                video: "https://www.bilibili.com/bangumi/play/ep317925?spm_id_from=333.851.b_62696c695f7265706f72745f616e696d65.52"
            },
            {
                name: "7.LineFont",
                video: "https://www.bilibili.com/bangumi/play/ep317925?spm_id_from=333.851.b_62696c695f7265706f72745f616e696d65.52"
            },
        ]
    },
    methods: {
        getImagePath(pathName) {
            return 'https://raw.githubusercontent.com/TheWindRest/WebLearn/master/CSSLearn/' + pathName + '/image/profile.png';
        },
        getPagePath(pathName)
        {
            return "https://thewindrest.github.io/WebLearn/CSSLearn/"+ pathName + '/index.html';
        }
    }
})