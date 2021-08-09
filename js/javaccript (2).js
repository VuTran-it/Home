const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');
const tabActive = $(".tab-item.active");
const paneMobiles = $$('.pane-mobile');
const paneMobile1 = $('.pane-mobile1');
const paneMobile2 = $('.pane-mobile2');
const paneMobile3 = $('.pane-mobile3');

const contentMobile = $('.content-mobile');
const appMobile = {
    imgs1: [
        {
            img1: '../img/2019/1.jpg',
            img2: '../img/2019/2.jpg',
        },
        {
            img1: '../img/2019/3.jpg',
            img2: '../img/2019/4.jpg',
        },
        {
            img1: '../img/2019/5.jpg',
            img2: '../img/2019/6.jpg',
        },
        {
            img1: '../img/2019/7.jpg',
            img2: '../img/2019/8.jpg',
        },
        {
            img1: '../img/2019/9.jpg',
            img2: '../img/2019/10.jpg',
        },
        {
            img1: '../img/2019/11.jpg',
            img2: '../img/2019/12.jpg',
        },
        {
            img1: '../img/2019/13.jpg',
            img2: '../img/2019/14.jpg',
        },
        {
            img1: '../img/2019/15.jpg',
            img2: '../img/2019/16.jpg',
        },
        {
            img1: '../img/2019/17.jpg',
            img2: '../img/2019/18.jpg',
        },
        {
            img1: '../img/2019/19.jpg',
            img2: '../img/2019/20.jpg',
        },
        {
            img1: '../img/2019/21.jpg',
            img2: '../img/2019/22.jpg',
        },
        {
            img1: '../img/2019/23.jpg',
            img2: '../img/2019/24.jpg',
        },
        {
            img1: '../img/2019/25.jpg',
            img2: '../img/2019/26.jpg',
        },
        {
            img1: '../img/2019/27.jpg',
            img2: '../img/2019/28.jpg',
        },
        {
            img1: '../img/2019/29.jpg',
            img2: '../img/2019/30.jpg',
        },
    ],
    imgs2: [
        {
            img1: '../img/2020/1.jpg',
            img2: '../img/2020/2.jpg',
        },
        {
            img1: '../img/2020/3.jpg',
            img2: '../img/2020/4.jpg',
        },
        {
            img1: '../img/2020/5.jpg',
            img2: '../img/2020/6.jpg',
        },
        {
            img1: '../img/2020/7.jpg',
            img2: '../img/2020/8.jpg',
        },
        {
            img1: '../img/2020/9.jpg',
            img2: '../img/2020/10.jpg',
        },
        {
            img1: '../img/2020/11.jpg',
            img2: '../img/2020/12.jpg',
        },
        {
            img1: '../img/2020/13.jpg',
            img2: '../img/2020/14.jpg',
        },
        {
            img1: '../img/2020/15.jpg',
            img2: '../img/2020/16.jpg',
        },
        {
            img1: '../img/2020/17.jpg',
            img2: '../img/2020/18.jpg',
        },
        {
            img1: '../img/2020/19.jpg',
            img2: '../img/2020/20.jpg',
        },
        {
            img1: '../img/2020/21.jpg',
            img2: '../img/2020/22.jpg',
        },
        {
            img1: '../img/2020/23.jpg',
            img2: '../img/2020/24.jpg',
        },
        {
            img1: '../img/2020/25.jpg',
            img2: '../img/2020/26.jpg',
        },
        {
            img1: '../img/2020/27.jpg',
            img2: '../img/2020/28.jpg',
        },
        {
            img1: '../img/2020/29.jpg',
            img2: '../img/2020/30.jpg',
        },
        {
            img1: '../img/2020/31.jpg',
            img2: '../img/2020/32.jpg',
        },
        {
            img1: '../img/2020/33.jpg',
            img2: '../img/2020/34.jpg',
        },
        {
            img1: '../img/2020/35.jpg',
            img2: '../img/2020/36.jpg',
        },
        {
            img1: '../img/2020/37.jpg',
            img2: '../img/2020/38.jpg',
        },
        {
            img1: '../img/2020/39.jpg',
            img2: '../img/2020/40.jpg',
        },
        {
            img1: '../img/2020/41.jpg',
            img2: '../img/2020/42.jpg',
        },
        {
            img1: '../img/2020/43.jpg',
            img2: '../img/2020/44.jpg',
        },
        {
            img1: '../img/2020/45.jpg',
            img2: '../img/2020/46.jpg',
        },
        {
            img1: '../img/2020/47.jpg',
            img2: '../img/2020/48.jpg',
        },
        {
            img1: '../img/2020/49.jpg',
            img2: '../img/2020/50.jpg',
        },
        {
            img1: '../img/2020/51.jpg',
            img2: '../img/2020/52.jpg',
        },
        {
            img1: '../img/2020/53.jpg',
            img2: '../img/2020/54.jpg',
        },
        {
            img1: '../img/2020/55.jpg',
            img2: '../img/2020/56.jpg',
        },
        {
            img1: '../img/2020/57.jpg',
            img2: '../img/2020/58.jpg',
        },
        {
            img1: '../img/2020/59.jpg',
            img2: '../img/2020/60.jpg',
        },
    ],
    imgs3: [
        {
            img1: '../img/2021/1.jpg',
            img2: '../img/2021/2.jpg',
        },
        {
            img1: '../img/2021/3.jpg',
            img2: '../img/2021/4.jpg',
        },
        {
            img1: '../img/2021/5.jpg',
            img2: '../img/2021/6.jpg',
        },
        {
            img1: '../img/2021/7.jpg',
            img2: '../img/2021/8.jpg',
        },
        {
            img1: '../img/2021/9.jpg',
            img2: '../img/2021/10.jpg',
        },
        {
            img1: '../img/2021/11.jpg',
            img2: '../img/2021/12.jpg',
        },
        {
            img1: '../img/2021/13.jpg',
            img2: '../img/2021/14.jpg',
        },
        {
            img1: '../img/2021/15.jpg',
            img2: '../img/2021/16.jpg',
        },
        {
            img1: '../img/2021/17.jpg',
            img2: '../img/2021/18.jpg',
        },
        {
            img1: '../img/2021/19.jpg',
            img2: '../img/2021/20.jpg',
        },
        {
            img1: '../img/2021/21.jpg',
            img2: '../img/2021/22.jpg',
        },
        {
            img1: '../img/2021/23.jpg',
            img2: '../img/2021/24.jpg',
        },
        {
            img1: '../img/2021/25.jpg',
            img2: '../img/2021/26.jpg',
        },
        {
            img1: '../img/2021/27.jpg',
            img2: '../img/2021/28.jpg',
        },
        {
            img1: '../img/2021/29.jpg',
            img2: '../img/2021/30.jpg',
        },
    ],
    
    render: function () {
        const htmls1 = this.imgs1.map((img, index) => {
            return `
                    <div class="sliderImg-mobile">
                        <img src="${img.img1}" alt="">
                        <img src="${img.img2}" alt="">
                    </div>
                `;
        })
        paneMobile1.innerHTML = htmls1.join('');

        const htmls2 = this.imgs2.map((img, index) => {
            return `
                    <div class="sliderImg-mobile">
                        <img src="${img.img1}" alt="">
                        <img src="${img.img2}" alt="">
                    </div>
                `;
        })
        paneMobile2.innerHTML = htmls2.join('');

        const htmls3 = this.imgs3.map((img, index) => {
            return `
                    <div class="sliderImg-mobile">
                        <img src="${img.img1}" alt="">
                        <img src="${img.img2}" alt="">
                    </div>
                `;
        })
        paneMobile3.innerHTML = htmls3.join('');
    },
    
    start: function () {
        this.render();
    }
}
tabs.forEach((tab, index) => {
    const pane = panes[index];
    const paneMobile = paneMobiles[index]; 
    tab.onclick = function () {
        if(window.screen.width < 768)
        {   
            appMobile.start();
            content2019();
            content2020();
            content2021();
        }
        $(".tab-item.active").classList.remove('active');
        $(".tab-pane.active").classList.remove('active');
        $(".pane-mobile.active").classList.remove('active');

        this.classList.add('active');
        pane.classList.add('active');
        paneMobile.classList.add('active');
    };
});

const btnLeft1 = $('.btnLeft1');
const btnRight1 = $('.btnRight1');
const btnLeft2 = $('.btnLeft2');
const btnRight2 = $('.btnRight2');
const btnLeft3 = $('.btnLeft3');
const btnRight3 = $('.btnRight3');
const contentPane1 = $('.content-pane1');
const contentPane2 = $('.content-pane2');
const contentPane3 = $('.content-pane3');

const app = {
    currenIndex1: 0,
    currenIndex2: 0,
    currenIndex3: 0,
    imgs1: [
        {
            img1: '../img/2019/2.jpg',
            img2: '../img/2019/2.jpg',
            img3: '../img/2019/3.jpg',
            img4: '../img/2019/4.jpg',
            img5: '../img/2019/5.jpg',
            img6: '../img/2019/6.jpg',
        },
        {
            img1: '../img/2019/7.jpg',
            img2: '../img/2019/8.jpg',
            img3: '../img/2019/9.jpg',
            img4: '../img/2019/10.jpg',
            img5: '../img/2019/11.jpg',
            img6: '../img/2019/12.jpg',
        },
        {
            img1: '../img/2019/13.jpg',
            img2: '../img/2019/14.jpg',
            img3: '../img/2019/15.jpg',
            img4: '../img/2019/16.jpg',
            img5: '../img/2019/17.jpg',
            img6: '../img/2019/18.jpg',
        },
        {
            img1: '../img/2019/19.jpg',
            img2: '../img/2019/20.jpg',
            img3: '../img/2019/21.jpg',
            img4: '../img/2019/22.jpg',
            img5: '../img/2019/23.jpg',
            img6: '../img/2019/24.jpg',
        },
        {
            img1: '../img/2019/25.jpg',
            img2: '../img/2019/26.jpg',
            img3: '../img/2019/27.jpg',
            img4: '../img/2019/28.jpg',
            img5: '../img/2019/29.jpg',
            img6: '../img/2019/30.jpg',
        },
    ],
    imgs2: [
        {
            img1: '../img/2020/1.jpg',
            img2: '../img/2020/2.jpg',
            img3: '../img/2020/3.jpg',
            img4: '../img/2020/4.jpg',
            img5: '../img/2020/5.jpg',
            img6: '../img/2020/6.jpg',
        },
        {
            img1: '../img/2020/7.jpg',
            img2: '../img/2020/8.jpg',
            img3: '../img/2020/9.jpg',
            img4: '../img/2020/10.jpg',
            img5: '../img/2020/11.jpg',
            img6: '../img/2020/12.jpg',
        },
        {
            img1: '../img/2020/13.jpg',
            img2: '../img/2020/14.jpg',
            img3: '../img/2020/15.jpg',
            img4: '../img/2020/16.jpg',
            img5: '../img/2020/17.jpg',
            img6: '../img/2020/18.jpg',
        },
        {
            img1: '../img/2020/19.jpg',
            img2: '../img/2020/20.jpg',
            img3: '../img/2020/21.jpg',
            img4: '../img/2020/22.jpg',
            img5: '../img/2020/23.jpg',
            img6: '../img/2020/24.jpg',
        },
        {
            img1: '../img/2020/25.jpg',
            img2: '../img/2020/26.jpg',
            img3: '../img/2020/27.jpg',
            img4: '../img/2020/28.jpg',
            img5: '../img/2020/29.jpg',
            img6: '../img/2020/30.jpg',
        },
        {
            img1: '../img/2020/31.jpg',
            img2: '../img/2020/32.jpg',
            img3: '../img/2020/33.jpg',
            img4: '../img/2020/34.jpg',
            img5: '../img/2020/35.jpg',
            img6: '../img/2020/36.jpg',
        },
        {
            img1: '../img/2020/37.jpg',
            img2: '../img/2020/38.jpg',
            img3: '../img/2020/39.jpg',
            img4: '../img/2020/40.jpg',
            img5: '../img/2020/41.jpg',
            img6: '../img/2020/42.jpg',
        },
        {
            img1: '../img/2020/43.jpg',
            img2: '../img/2020/44.jpg',
            img3: '../img/2020/45.jpg',
            img4: '../img/2020/46.jpg',
            img5: '../img/2020/47.jpg',
            img6: '../img/2020/48.jpg',
        },
        {
            img1: '../img/2020/49.jpg',
            img2: '../img/2020/50.jpg',
            img3: '../img/2020/51.jpg',
            img4: '../img/2020/52.jpg',
            img5: '../img/2020/53.jpg',
            img6: '../img/2020/54.jpg',
        },
        {
            img1: '../img/2020/55.jpg',
            img2: '../img/2020/56.jpg',
            img3: '../img/2020/57.jpg',
            img4: '../img/2020/58.jpg',
            img5: '../img/2020/59.jpg',
            img6: '../img/2020/60.jpg',
        },
    ],
    imgs3: [
        {
            img1: '../img/2021/1.jpg',
            img2: '../img/2021/2.jpg',
            img3: '../img/2021/3.jpg',
            img4: '../img/2021/4.jpg',
            img5: '../img/2021/5.jpg',
            img6: '../img/2021/6.jpg',
        },
        {
            img1: '../img/2021/7.jpg',
            img2: '../img/2021/8.jpg',
            img3: '../img/2021/9.jpg',
            img4: '../img/2021/10.jpg',
            img5: '../img/2021/11.jpg',
            img6: '../img/2021/12.jpg',
        },
        {
            img1: '../img/2021/13.jpg',
            img2: '../img/2021/14.jpg',
            img3: '../img/2021/15.jpg',
            img4: '../img/2021/16.jpg',
            img5: '../img/2021/17.jpg',
            img6: '../img/2021/18.jpg',
        },
        {
            img1: '../img/2021/19.jpg',
            img2: '../img/2021/20.jpg',
            img3: '../img/2021/21.jpg',
            img4: '../img/2021/22.jpg',
            img5: '../img/2021/23.jpg',
            img6: '../img/2021/24.jpg',
        },
        {
            img1: '../img/2021/25.jpg',
            img2: '../img/2021/26.jpg',
            img3: '../img/2021/27.jpg',
            img4: '../img/2021/28.jpg',
            img5: '../img/2021/29.jpg',
            img6: '../img/2021/30.jpg',
        },
    ],
    render: function () {
        const htmls1 = this.imgs1.map((img, index) => {
            return `
                            <div class="sliderImg ${index === this.currenIndex1 ? 'show' : ''}">
                                <img src="${img.img1}" alt="">
                                <img src="${img.img2}" alt="">
                                <img src="${img.img3}" alt="">
                                <img src="${img.img4}" alt="">
                                <img src="${img.img5}" alt="">
                                <img src="${img.img6}" alt="">
                            </div>
                        `;
        })
        contentPane1.innerHTML = htmls1.join('');

        const htmls2 = this.imgs2.map((img, index) => {
            return `
                            <div class="sliderImg ${index === this.currenIndex2 ? 'show' : ''}">
                                <img src="${img.img1}" alt="">
                                <img src="${img.img2}" alt="">
                                <img src="${img.img3}" alt="">
                                <img src="${img.img4}" alt="">
                                <img src="${img.img5}" alt="">
                                <img src="${img.img6}" alt="">
                            </div>
                        `;
        })
        contentPane2.innerHTML = htmls2.join('');

        const htmls3 = this.imgs3.map((img, index) => {
            return `
                            <div class="sliderImg ${index === this.currenIndex3 ? 'show' : ''}">
                                <img src="${img.img1}" alt="">
                                <img src="${img.img2}" alt="">
                                <img src="${img.img3}" alt="">
                                <img src="${img.img4}" alt="">
                                <img src="${img.img5}" alt="">
                                <img src="${img.img6}" alt="">
                            </div>
                        `;
        })
        contentPane3.innerHTML = htmls3.join('');
    },
    handleEvents: function () {
        const _this = this
        btnRight1.onclick = function () {
            _this.rightImg();
            _this.render();
        }
        btnLeft1.onclick = function () {
            _this.leftImg();
            _this.render();
        }


        btnRight2.onclick = function () {
            _this.rightImg();
            _this.render();
        }
        btnLeft2.onclick = function () {
            _this.leftImg();
            _this.render();
        }

        btnRight3.onclick = function () {
            _this.rightImg();
            _this.render();
        }
        btnLeft3.onclick = function () {
            _this.leftImg();
            _this.render();
        }
    },

    rightImg: function () {
        this.currenIndex1++
        if (this.currenIndex1 >= this.imgs1.length) {
            this.currenIndex1 = 0
        }
        this.currenIndex2++
        if (this.currenIndex2 >= this.imgs2.length) {
            this.currenIndex2 = 0
        }
        this.currenIndex3++
        if (this.currenIndex3 >= this.imgs3.length) {
            this.currenIndex3 = 0
        }
    },
    leftImg: function () {
        this.currenIndex1--
        if (this.currenIndex1 < 0) {
            this.currenIndex1 = this.imgs1.length - 1
        }
        this.currenIndex2--
        if (this.currenIndex2 < 0) {
            this.currenIndex2 = this.imgs2.length - 1
        }
        this.currenIndex3--
        if (this.currenIndex3 < 0) {
            this.currenIndex3 = this.imgs3.length - 1
        }
    },

    start: function () {

        this.handleEvents();

        this.render();
    }
}

app.start()

function content2019(){
    $(".content-pane1").innerHTML = "2019";
}

function content2020(){
    $(".content-pane2").innerHTML = "2020";
}

function content2021(){
    $(".content-pane3").innerHTML = "2021";
}



