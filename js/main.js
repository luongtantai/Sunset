function sliderHero() {
  //Khởi tạo Slider
  var slider = document.querySelector(".hero__slide-heading");
  if (document.contains(slider) == true) {
    var flktySlider = new Flickity(slider, {
      // options
      cellAlign: "left",
      contain: true,
      draggable: ">1",
      prevNextButtons: false,
      wrapAround: true,
      pageDots: false,
      autoPlay: 6000,
      pauseAutoPlayOnHover: false,
      fade: true,
      imagesLoaded: true,
      selectedAttraction: 0.005, //Lực hút
      // friction: 0.28, //Ma sát

      on: {
        ready: function () {
          let text = document.querySelectorAll(".hero__slide-heading .item .text");
          text[0].classList.add("active");
        },
        change: function (index) {
          let text = document.querySelectorAll(".hero__slide-heading .item .text");
          text[index].classList.add("active");
          if (index == 0) {
            text[text.length - 1].classList.remove("active");
          } else {
            text[index - 1].classList.remove("active");
          }
        },
      },
    });
  }

  //Controls

  let btnPrev = document.querySelector(".hero__slide-button .prev_bg .prev");
  let btnNext = document.querySelector(".hero__slide-button .next_bg .next");
  if (
    document.contains(btnPrev) == true &&
    document.contains(btnNext) == true
  ) {
    btnPrev.addEventListener("click", function () {
      flktySlider.previous(true);
    });
    btnNext.addEventListener("click", function () {
      flktySlider.next(true);
    });
  }
}
function showBacktotop(){
    let backtotop = document.querySelector('.backtotop');
    // let backtotopPoint = document.querySelector('.--backtotop-point');
    // let heightHeroText = document.querySelector('.hero .text');
    let calcHeigth = document.body.offsetHeight - window.innerHeight;
    window.addEventListener("scroll", function(){
        let percentval = Math.round(Math.floor(window.scrollY) / (document.body.offsetHeight - window.innerHeight)* 100);
        backtotop.style.background = `conic-gradient(#B68C2D ${percentval}%, rgba(255, 255, 255,0) ${percentval}%)`;
    });
    // if(typeof backtotopPoint != "undefined" && backtotopPoint != null){
        window.addEventListener('scroll', function(){
        if(window.scrollY > 450){
            backtotop.classList.add("active");
        }
        else{
            backtotop.classList.remove("active");
        }
    })
    // }

};
function clickBacktotop(){
    let backtotop = document.querySelector('.backtotop');
    backtotop.addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
};
function slider__logo(){
    let sliderLogo = document.querySelector('.sliderthumnail__photo .sliderthumnail__photo-img');
    if(typeof sliderLogo != 'undefined' && sliderLogo != null){
        let flktySliderLogo = new Flickity( sliderLogo, {
        // options
        cellAlign: 'left',
        contain: true,
        draggable: '>1',
        prevNextButton: false,
        wrapAround: true,
        autoPlay: true,
        pageDots: false,
        });
    }
    
};
function slideText(){
    let slider = document.querySelector('.carousel-inner');
    if (typeof slider != "undefined" && slider != null){
        var flktySlider = new Flickity( slider, {
        // options
        cellAlign: 'left',
        contain: true,
        draggable: '>1',
        prevNextButton: false,
        wrapAround: true,
        autoPlay: 3000,
        pageDots: false,
    });
    let btnprev = document.querySelector('.prewto');
        btnnext = document.querySelector('.nextto');

        btnprev.addEventListener('click', function(){
            flktySlider.previous(true);
        });
         btnnext.addEventListener('click', function(){
            flktySlider.next(true);
        });
    }
    
}; 
function handelVideo(){
    let video = document.querySelector('.video__bg-play');
    let pupupVideo = document.querySelector('.pupupvideo');
    let closeVideo = document.querySelector('.pupupvideo .pupupvideo__inner-close');
    let iframevideo = document.querySelector('.pupupvideo .pupupvideo__inner .pupupvideo__inner-ifream iframe');
        if( typeof video != 'undefined' && video != null){
            video.addEventListener('click', function(){
        pupupVideo.classList.add('active');
        iframevideo.setAttribute('src', 'https://www.youtube.com/embed/9Ln2LOWS2zk?autoplay=1');
        }); 

        function closeVideoPlay(){
            closeVideo.addEventListener('click', function(){
                pupupVideo.classList.remove('active');
                iframevideo.setAttribute('src', '');
            });
        };
        closeVideoPlay();
        }

};
function handelVideodeevent(){
    let video = document.querySelector('.bottom__cover .otherservices__wrap .thumnail__card .thumnail__card-item .video .play');
    let pupupVideo = document.querySelector('.pupupvideo');
    let closeVideo = document.querySelector('.pupupvideo .pupupvideo__inner-close');
    let iframevideo = document.querySelector('.pupupvideo .pupupvideo__inner .pupupvideo__inner-ifream iframe');
        if( typeof video != 'undefined' && video != null){
            video.addEventListener('click', function(){
        pupupVideo.classList.add('active');
        iframevideo.setAttribute('src', 'https://www.youtube.com/embed/Rqx0jfQu4ME?autoplay=1');
        }); 

        function closeVideoPlay(){
            closeVideo.addEventListener('click', function(){
                pupupVideo.classList.remove('active');
                iframevideo.setAttribute('src', '');
            });
        };
        closeVideoPlay();
        }

};
function bestserviceSlide(){
    var slider = document.querySelector('.bestservice .bestservice__slider');
    if (typeof slider != "undefined" && slider != null){
        var flktySlider = new Flickity( slider, {
        // options
        cellAlign: 'center',
        contain: true,
        draggable: '>1',
        prevNextButton: false,
        wrapAround: true,
        autoPlay: 3000,
        });

        let dots = document.querySelector('.bestservice .bestservice__dot');
        let dotsFlkty = document.querySelector(".bestservice .flickity-page-dots");
        dots.appendChild(dotsFlkty);
    }
};
function countertUp(){
        let counterNumber = document.querySelectorAll(".thumnail__number-numberall");
        function element(item){
                let yourfeelingel = document.querySelector(".yourfeeling");
                if(typeof yourfeelingel != "undefined" && yourfeelingel != null){
                    let yourfeeling = yourfeelingel.offsetTop - document.querySelector(".header").offsetHeight - 200;
                    let numberItem = item.querySelector(".thumnail__number-numberall .numberyellow");
                    let to = parseInt(numberItem.innerHTML);
                    let count = 0;
                    let time = 200;
                    let step = to / time;
                    window.addEventListener("scroll", function(){
                        if(window.scrollY > yourfeeling){
                            let counting = setInterval(function(){
                                count += Math.round(step);
                                if(count > to){
                                    clearInterval(counting);
                                    numberItem.innerHTML = to;
                                }
                                else{
                                    numberItem.innerHTML = count
                                }
                            },1);
                        }
                    })  
                }
        };
        counterNumber.forEach(function(item){
            element(item);
        })
};
function countertUpService(){
        let counterNumber = document.querySelectorAll(".thumnail__number-numberall");
        function element(item){
                let numbersubtraction = document.querySelector(".numbersubtraction");
                if(typeof numbersubtraction != "undefined" && numbersubtraction != null){
                    let numbersubtractionel = numbersubtraction.offsetTop - (screen.height) * 0.5 + (numbersubtraction.offsetHeight) * 0.5;
                    let numberItem = item.querySelector(".thumnail__number-numberall .numberyellow");
                    let to = parseInt(numberItem.innerHTML);
                    let count = 0;
                    let time = 100;
                    let step = to / time;
                    window.addEventListener("scroll", function(){
                        if(window.scrollY > numbersubtractionel){
                            let counting = setInterval(function(){
                                count += Math.round(step);
                                if(count > to){
                                    clearInterval(counting);
                                    numberItem.innerHTML = to;
                                }
                                else{
                                    numberItem.innerHTML = count
                                }
                            },1);
                        }
                    })  
                }
        };
        counterNumber.forEach(function(item){
            element(item);
        })
};
function handelTabNew(){
    let newLists = document.querySelectorAll('.library .library__menu li .new__list');
    let libraryItem = document.querySelectorAll('.library .library__item');
    newLists.forEach(function(item){
        item.addEventListener('click', function(){
            newLists.forEach(function(item){
                item.classList.remove("active")
            });
            this.classList.add("active");
            libraryItem.forEach(function(el){
                el.classList.remove("active")
            });
            let id = this.dataset.tab;
            let b = document.querySelector('.new__list-' + id).classList.add("active");
        })
    })
};
function menumobile(){
    let acc = document.querySelectorAll(".menumobile__nav .menumobile__nav-cover .img");
        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                     panel.style.maxHeight = panel.scrollHeight + "px";
                } 
        });
        }
}
function iconMenuMobile(){
    let menumobile = document.querySelector(".menumobile");
    let menuMobileNavcurr = document.querySelector(".header .container-fluid .icon-mobile");
    menuMobileNavcurr.addEventListener('click', function(e){
        menumobile.classList.toggle("active");
        menuMobileNavcurr.classList.add("active");
         menuMobileNav.classList.toggle("active");
        iconMenuMobile.classList.toggle("active");
        document.body.style.overflow = "hidden";
    })

    let menuMobileNav = document.querySelector(".menumobile__nav");
    let iconMenuMobile = document.querySelector(".menumobile__nav .icon-mobile");
    iconMenuMobile.addEventListener("click", function(e){
        menumobile.classList.toggle("active");
        menuMobileNavcurr.classList.remove("active");
        menuMobileNav.classList.toggle("active");
        iconMenuMobile.classList.toggle("active");
        document.body.style.overflow = "initial";
    });
    let hideOpacity = document.querySelector(".menumobile .hide_opacity")
    hideOpacity.addEventListener("click", function(e){
        menumobile.classList.remove("active");
        menuMobileNavcurr.classList.remove("active");
        menuMobileNav.classList.remove("active");
        iconMenuMobile.classList.remove("active");
        document.body.style.overflow = "initial";
    })
    window.addEventListener("resize", function(){
        let wwindow = window.innerWidth;
        if(wwindow > 1300){
            menumobile.classList.remove("active");
            menuMobileNav.classList.remove("active");
            iconMenuMobile.classList.remove("active");
            menuMobileNavcurr.classList.remove("active")
        }
    });
    let accodian = document.querySelectorAll(".menumobile__nav-cover .accodian");
}
function dateNew(){
    let today = new Date();
    let todaynew = today.getDate();
    let month = (today.getMonth() + 1);
    if(todaynew < 10){
        todaynew = todaynew.toString().padStart(2, 0);
    }else{
        todaynew = todaynew;
    }
    if(month < 10){
        month = month.toString().padStart(2, 0);
    }else{
        month = month;
    }
    let date = today.getFullYear()+"-"+ month +'-'+ todaynew;
    let formdate = document.querySelector(".thumnail__form-make .form .date");
    if(typeof formdate != undefined && formdate != null){
        formdate.setAttribute('value', date);
    }
}
function ggmap(){
    let ggmap = document.querySelector(".ggmap__iframe iframe");
    if(typeof ggmap != undefined && ggmap != null){
        ggmap.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7839.0913857560745!2d106.64396559145806!3d10.769453609058452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e95921ae817%3A0xb30031eb354aed9c!2zcGjGsOG7nW5nIDE0LCBRdeG6rW4gMTEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1678994828378!5m2!1svi!2s")
    }
}
// Fancybox.bind('[data-fancybox="gallery"]', {
//   hideScrollbar: false,
// });
Fancybox.bind("[data-fancybox='images']", {
    Infinity: true,
    Keyboard:{
        Escpe: 'close',
        Delete: "close",
        Backspace: 'close',
        PageUp: 'next',
        PageDown: 'prev',
        ArrowRight: 'next',
        ArrowLeft: 'prev'
    },
    l10n:{
        CLOSE: "Close"
    }
    
});
Fancybox.bind("[data-fancybox='images2']", {
    Infinity: true,
    Keyboard:{
        Escpe: 'close',
        Delete: "close",
        Backspace: 'close',
        PageUp: 'next',
        PageDown: 'prev',
        ArrowRight: 'next',
        ArrowLeft: 'prev'
    },
    l10n:{
        CLOSE: "Close"
    }
    
});
Fancybox.bind("[data-fancybox='images3']", {
    Infinity: true,
    Keyboard:{
        Escpe: 'close',
        Delete: "close",
        Backspace: 'close',
        PageUp: 'next',
        PageDown: 'prev',
        ArrowRight: 'next',
        ArrowLeft: 'prev'
    },
    l10n:{
        CLOSE: "Close"
    }
    
});
Fancybox.bind("[data-fancybox='images4']", {
    Infinity: true,
    Keyboard:{
        Escpe: 'close',
        Delete: "close",
        Backspace: 'close',
        PageUp: 'next',
        PageDown: 'prev',
        ArrowRight: 'next',
        ArrowLeft: 'prev'
    },
    l10n:{
        CLOSE: "Close"
    }
    
});
Fancybox.bind("[data-fancybox='images5']", {
    Infinity: true,
    Keyboard:{
        Escpe: 'close',
        Delete: "close",
        Backspace: 'close',
        PageUp: 'next',
        PageDown: 'prev',
        ArrowRight: 'next',
        ArrowLeft: 'prev'
    },
    l10n:{
        CLOSE: "Close"
    }
    
});
window.addEventListener('load', function(){
    let load = this.document.querySelector(".load_mask");
    load.classList.add("active");
    showBacktotop();
    clickBacktotop();
    sliderHero();
    slider__logo();
    slideText();
    handelVideo();
    handelVideodeevent();
    bestserviceSlide();
    countertUp();
    handelTabNew();
    countertUpService();
    menumobile();
    iconMenuMobile();
    dateNew(); 
    ggmap();
});