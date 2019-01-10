const vue = new Vue({
    el: '#app',
    data: {
        intentos: 0,
        prev_value: null, 
        puntos: 0,
        images: [
            {id: 1, value: 1, link: 'https://cdn0.iconfinder.com/data/icons/flatty-balls/633/05_FlatBallIcons_Football-512.png', state: false},
            {id: 2, value: 2,link: 'https://cdn0.iconfinder.com/data/icons/flatty-balls/633/04_FlatBallIcons_Basketball-512.png', state: false},
            {id: 3, value: 3, link: 'https://cdn0.iconfinder.com/data/icons/flatty-balls/633/02_FlatBallIcons_Soccer-512.png', state: false},
            {id: 4, value: 4, link: 'https://cdn0.iconfinder.com/data/icons/flatty-balls/633/08_FlatBallIcons_Volley-512.png', state: false},
            {id: 5, value: 5, link: 'https://cdn0.iconfinder.com/data/icons/flatty-balls/633/03_FlatBallIcons_Baseball-512.png', state: false},
            {id: 6, value: 6, link: 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/write-circle-green-512.png', state: false},
            {id: 7, value: 7, link: 'https://cdn4.iconfinder.com/data/icons/office-20/128/OFFice-68-512.png', state: false},
            {id: 8, value: 8, link: 'https://cdn4.iconfinder.com/data/icons/flatron-set-2/512/storage-512.png', state: false},
            {id: 9, value: 9, link: 'https://cdn0.iconfinder.com/data/icons/web-development-2/512/clipboard_report_form_checklist_business_plan_sheet_file_note_pad_paper_page_document_planning_check_list_survey_questionnaire_flat_design_icon-512.png', state: false},
            {id: 10,value: 10,  link: 'https://cdn2.iconfinder.com/data/icons/colored-simple-circle-volume-01/128/circle-flat-general-54569d12b-512.png', state: false},
            {id: 11, value: 1, link: 'https://cdn0.iconfinder.com/data/icons/flatty-balls/633/05_FlatBallIcons_Football-512.png', state: false},
            {id: 12, value: 2,link: 'https://cdn0.iconfinder.com/data/icons/flatty-balls/633/04_FlatBallIcons_Basketball-512.png', state: false},
            {id: 13, value: 3, link: 'https://cdn0.iconfinder.com/data/icons/flatty-balls/633/02_FlatBallIcons_Soccer-512.png', state: false},
            {id: 14, value: 4, link: 'https://cdn0.iconfinder.com/data/icons/flatty-balls/633/08_FlatBallIcons_Volley-512.png', state: false},
            {id: 15, value: 5, link: 'https://cdn0.iconfinder.com/data/icons/flatty-balls/633/03_FlatBallIcons_Baseball-512.png', state: false},
            {id: 16, value: 6, link: 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/write-circle-green-512.png', state: false},
            {id: 17, value: 7, link: 'https://cdn4.iconfinder.com/data/icons/office-20/128/OFFice-68-512.png', state: false},
            {id: 18, value: 8, link: 'https://cdn4.iconfinder.com/data/icons/flatron-set-2/512/storage-512.png', state: false},
            {id: 19, value: 9, link: 'https://cdn0.iconfinder.com/data/icons/web-development-2/512/clipboard_report_form_checklist_business_plan_sheet_file_note_pad_paper_page_document_planning_check_list_survey_questionnaire_flat_design_icon-512.png', state: false},
            {id: 20, value: 10, link: 'https://cdn2.iconfinder.com/data/icons/colored-simple-circle-volume-01/128/circle-flat-general-54569d12b-512.png', state: false}
        ],
        game: []
    },
    methods: {
        initGame: function(){
            var arr = this.images;
            while (this.game.length < 20) {
                var random = Math.round(Math.random() * ((arr.length - 1) - 0) + 0);
                if(this.game.includes(arr[random])) {
                    continue;
                } else {
                    this.game.push(arr[random]);
                }
            }
        },
        girarCarta: function (id, value) {
            this.images[id - 1].state = true;

            if(this.prev_value == null) {
                this.prev_value = [id, value];
            } else {
                this.intentos += 1;
                if(value == this.prev_value[1]) {
                    this.puntos += 1;
                    this.prev_value = null;
                }else{
                    setTimeout(() => {
                        this.images[id - 1].state = false;
                        this.images[this.prev_value[0] - 1].state = false;
                        this.prev_value = null;
                    }, 500);
                }
            }
            if(this.puntos == 10){
                alert("Felicidades has ganado")
            }
        },
        reiniciar: function() {
            this.intentos = 0;
            this.prev_value = null;
            this.puntos = 0;
            this.images.state = false;
            for(image in this.images){
                this.images[image].state = false;
            }
        }
    },
    mounted() {
        this.initGame();
    },
})