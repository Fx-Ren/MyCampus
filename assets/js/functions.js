/*global jQuery */
/* Contents
// ------------------------------------------------>
	1.	LOADING SCREEN
	2.	BACKGROUND INSERT
	3.	NAV MODULE
	4.	MOBILE MENU
	5.	HEADER AFFIX
	6.	HEADER STATIC
	7.	COUNTER UP
	8.	COUNTDOWN DATE
	9.	AJAX MAILCHIMP
	10.	AJAX CAMPAIGN MONITOR 
	11.	OWL CAROUSEL
	12.	MAGNIFIC POPUP
	13.	MAGNIFIC POPUP VIDEO
	14.	ROUNDED SKILL
	15.	SWITCH GRID
	16.	BACK TO TOP
	17.	PORTFOLIO FLITER
	18.	FOLLOW INSTAGRAM
	19.	TWITTER FEED
	20.	SCROLL TO
	21.	PROGRESS BAR
	22.	NAV SPLIT
	23.	TYPED SCRIPT
	24.	FLICKR STREAM
	25.	WOW ANIMATED
*/
(function($) {
    "use strict";
    /* ------------------  LOADING SCREEN ------------------ */

    $(window).on("load", function() {
        $(".preloader").fadeOut(5000);
        $(".preloader").remove();
    });

    /* ------------------  Background INSERT ------------------ */

    var $bgSection = $(".bg-section");

    $bgSection.each(function() {
		var bgSrc = $(this).children("img").attr("src"),
        	bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-section");
        $(this).remove();
    });

    /* ------------------  NAV MODULE  ------------------ */
    var $moduleIcon = $(".module-icon"),
        $moduleCancel = $(".module-cancel"),
		$Module=  $(".module"),
		moduleActive = "module-active",
		moduleClass = ".module";
		
    $moduleIcon.on("click", function(e) {
        $(this).parent().siblings().removeClass(moduleActive); // Remove the class .active form any sibiling.
        $(this).parent(moduleClass).toggleClass(moduleActive); //Add the class .active to parent .module for this element.
        e.stopPropagation();
    });
    // If Click on [ Search-cancel ] Link
    $moduleCancel.on("click", function(e) {
       $Module.removeClass(moduleActive);
        e.stopPropagation();
    });

    // If Click on [ Document ] and this click outside [ hamburger panel ]
    $(document).on("click", function(e) {
        if ($(e.target).is(".hamburger-panel,.hamburger-panel .list-links,.hamburger-panel .list-links a,.hamburger-panel .social-share,.hamburger-panel .social-share a i,.hamburger-panel .social-share a,.hamburger-panel .copywright,.cart--control .btn,.cart-overview a.cancel,.cart-box") === false) {
            $Module.removeClass(moduleActive);
            e.stopPropagation();
        }
    });

    /* ------------------  MOBILE MENU ------------------ */

    var $dropToggle = $("ul.dropdown-menu [data-toggle=dropdown]"),
        $module = $(".module");
    $dropToggle.on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass("open");
        $(this).parent().toggleClass("open");
    });

    $module.on("click", function() {
        $(this).toggleClass("toggle-module");
    });
    $module.find("input.form-control", ".btn", ".module-cancel").click(function(e) {
        e.stopPropagation();
    });

    /* ------------------ HEADER AFFIX ------------------ */

    var $navAffix = $(".header-fixed .navbar-fixed-top");
    $navAffix.affix({
        offset: {
            top: 50
        }
    });

    /* ------------------  COUNTER UP ------------------ */

    $(".counting").counterUp({
        delay: 10,
        time: 1000
    });

    /* ------------------ COUNTDOWN DATE ------------------ */

    var newDate = new Date(2017, 10, 31),
        $countDown = $("#countdown");
	if ($countDown.length > 0){
		$countDown.countdown({
			until: newDate,
			format: "MMMM Do , h:mm:ss a"
		});
	}
    /* ------------------  AJAX MAILCHIMP ------------------ */

    $('.mailchimp').ajaxChimp({
        url: "http://wplly.us5.list-manage.com/subscribe/post?u=91b69df995c1c90e1de2f6497&id=aa0f2ab5fa", //Replace with your own mailchimp Campaigns URL.
        callback: chimpCallback

    });

    function chimpCallback(resp) {
        if (resp.result === 'success') {
            $('.subscribe-alert').html('<h5 class="alert alert-success">' + resp.msg + '</h5>').fadeIn(1000);
            //$('.subscribe-alert').delay(6000).fadeOut();

        } else if (resp.result === 'error') {
            $('.subscribe-alert').html('<h5 class="alert alert-danger">' + resp.msg + '</h5>').fadeIn(1000);
        }
    }

    /* ------------------  AJAX CAMPAIGN MONITOR  ------------------ */

    $('#campaignmonitor').submit(function(e) {
        e.preventDefault();
        $.getJSON(
            this.action + "?callback=?",
            $(this).serialize(),
            function(data) {
                if (data.Status === 400) {
                    alert("Error: " + data.Message);
                } else { // 200
                    alert("Success: " + data.Message);
                }
            });
    });

    /* ------------------ OWL CAROUSEL ------------------ */
    var $teamCarousel = $("#team-carousel"),
        $testimonialCarousel = $("#testimonial-carousel"),
        $testimonialCarousel2 = $("#testimonial-carousel2"),
        $testimonialCarousel3 = $("#testimonial-carousel3");

    $(".carousel").each(function() {
        var $Carousel = $(this);
        $Carousel.owlCarousel({
            loop: $Carousel.data('loop'),
            autoplay: $Carousel.data("autoplay"),
            margin: $Carousel.data('space'),
            nav: $Carousel.data('nav'),
            dots: $Carousel.data('dots'),
            dotsSpeed: $Carousel.data('speed'),
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: $Carousel.data('slide-res')
                },
                1000: {
                    items: $Carousel.data('slide'),
                }
            }
        });
    });

    $teamCarousel.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        dotsSpeed: 600,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    $testimonialCarousel.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        dotsSpeed: 600,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $testimonialCarousel2.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        dotsSpeed: 600,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $testimonialCarousel3.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        dotsSpeed: 600,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    /* ------------------ MAGNIFIC POPUP ------------------ */

    var $imgPopup = $(".img-popup");
    $imgPopup.magnificPopup({
        type: "image"
    });

    /* ------------------  MAGNIFIC POPUP VIDEO ------------------ */

    $('.popup-video,.popup-gmaps').magnificPopup({
        disableOn: 700,
        mainClass: 'mfp-fade',
        removalDelay: 0,
        preloader: false,
        fixedContentPos: false,
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });

    /* ------------------  ROUNDED SKILL ------------------ */
    $(window).on("scroll", function() {
        var skill = $('.skill'),
            scrollTop = $(window).scrollTop(),
            windowHeight = $(window).height(),
            roundedSkill = $('.rounded-skill');
        if (roundedSkill.length>0) {
            var wScroll = scrollTop + windowHeight,
                skillScroll = skill.offset().top + skill.outerHeight();
            if (wScroll > skillScroll) {
                roundedSkill.each(function() {
                    $(this).easyPieChart({
                        duration: 1000,
                        enabled: true,
                        scaleColor: false,
                        size: $(this).attr('data-size'),
                        trackColor: false,
                        lineCap: $(this).attr('data-line'),
                        lineWidth: $(this).attr('data-width'),
                        barColor: $(this).attr('data-color'),
                        animate: 5000,
                        onStep: function(from, to, percent) {
                            $(this.el).find('.prcent').text(Math.round(percent));
                        }
                    });
                });
            }
        }
    });
    /* ------------------  SWITCH GRID ------------------ */
	var $switchL = $('#switch-list'),
		$switchG = $('#switch-grid'),
		$productItem = $(".product-item"),
		productList = 'product-list';

    $switchL.on("click", function(event) {
        event.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass("active");
       $productItem.each(function() {
            $(this).addClass(productList);
        });

    });
    $switchG.on("click", function(event) {
        event.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass("active");
       $productItem.each(function() {
            $(this).removeClass(productList);
        });
    });

    /* ------------------  BACK TO TOP ------------------ */

    var backTop = $('#back-to-top');
    if (backTop.length) {
        var scrollTrigger = 200, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    backTop.addClass('show');
                } else {
                    backTop.removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        backTop.on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    /* ------------------ PORTFOLIO FLITER ------------------ */

    var $portfolioFilter = $(".portfolio-filter"),
        portfolioLength = $portfolioFilter.length,
        protfolioFinder = $portfolioFilter.find("a"),
        $portfolioAll = $("#portfolio-all");

    // init Isotope For Portfolio
    protfolioFinder.on("click", function(e) {
        e.preventDefault();
        $portfolioFilter.find("a.active-filter").removeClass("active-filter");
        $(this).addClass("active-filter");
    });
    if (portfolioLength > 0) {
        $portfolioAll.imagesLoaded().progress(function() {
            $portfolioAll.isotope({
                filter: "*",
                animationOptions: {
                    duration: 750,
                    itemSelector: ".portfolio-item",
                    easing: "linear",
                    queue: false,
                }
            });
        });
    }
    protfolioFinder.on("click", function(e) {
        e.preventDefault();
        var $selector = $(this).attr("data-filter");
        $portfolioAll.imagesLoaded().progress(function() {
            $portfolioAll.isotope({
                filter: $selector,
                animationOptions: {
                    duration: 750,
                    itemSelector: ".portfolio-item",
                    easing: "linear",
                    queue: false,
                }
            });
            return false;
        });
    });

    /* ------------------  FOLLOW INSTAGRAM ------------------ */

    var footerInsta = $('.instafeed').length;
    if (footerInsta > 0) {
        var userFeed = new Instafeed({
            get: 'user',
            userId: '3666232855',
            /*YOUR_USER_ID*/
            accessToken: '3666232855.1677ed0.76f7bea2e1f74c4995004f2c05922bb4',
            /*YOUR_ACCESS_TOKEN*/
            limit: 8,
            template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="insta-hover"><i class="fa fa-instagram"></i></div></a>',
            resolution: 'low_resolution',
        });
        userFeed.run();
    }

    /* ------------------  TWITTER FEED ------------------ */

    var twitterFeed = $('#twitter-feed'),
        twitterID = '721372281637888000'; // Your Twitter Widget Id Here
    if (twitterFeed.length > 0) {
        /* Get Last 2 Tweets */
        var twitterConfig = {
            "id": twitterID,
            "domId": 'twitter-feed',
            "maxTweets": 2,
            "showUser": false,
            "showTime": true,
            "showRetweet": false,
            "showInteraction": false,
            "enableLinks": true,
            "customCallback": handleTweets,
            "dateFunction": momentDateFormatter,
        };

        function handleTweets(tweets) {
            var x = tweets.length;
            var n = 0;
            var element = document.getElementById('twitter-feed');
            var html = '<ul class="list-unstyled mb-0">';
            while (n < x) {
                html += '<li>' + tweets[n] + '</li>';
                n++;
            }
            html += '</ul>';
            element.innerHTML = html;
        }

        function momentDateFormatter(date, dateString) {
            return moment(dateString).fromNow();
        }
        twitterFetcher.fetch(twitterConfig);
    }

    /* ------------------  SCROLL TO ------------------ */

    var aScroll = $('a[data-scroll="scrollTo"]');
    aScroll.on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    /* ------------------ PROGRESS BAR ------------------ */
		var $skill = $(".skills"),
			$pBar = $(".progress-bar");
    if ($skill.length > 0) {
        $(window).scroll(function() {
            var skillsTop = $skill.offset().top-200,
                skillsHight = $(this).outerHeight(),
                wScroll = $(window).scrollTop();
            if (wScroll > skillsTop - 1 && wScroll < skillsTop + skillsHight - 1) {
               $pBar.each(function() {
                    $(this).width($(this).attr('aria-valuenow') + '%');
                });
            }
        });
    }

    /* ------------------ NAV SPLIT ------------------ */
	var $bodySplit =$('.body-split');
    if ($bodySplit.length > 0) {
        $(window).on("scroll", function() {
            $('.section').each(function() {
                var sectionID = $(this).attr("id"),
                    sectionTop = $(this).offset().top - 100,
                    sectionHight = $(this).outerHeight(),
                    wScroll = $(window).scrollTop(),
                    $navHref = $("a[href='#" + sectionID + "']"),
                    $nav = $('.nav-split').find($navHref).parent();
                if (wScroll > sectionTop - 1 && wScroll < sectionTop + sectionHight - 1) {
                    $nav.addClass('active');
                    $nav.siblings().removeClass('active');
                }
            });
        });
    }

    /* ------------------ TYPED SCRIPT ------------------ */

    $(".typed-text").each(function() {
        var $string = $(this).data("typed-string") ? $(this).data("typed-string").split(",") : [];
        console.log($string);
        $(this).typed({
            strings: $string,
            typeSpeed: 0
        });
    });

    /* ------------------  FLICKR STREAM ------------------ */

    var flickrID = '52617155@N08'; // Your Flickr Account Id Here
    var $flikrDiv = $('#flickr-feed');
	if ($flikrDiv.length > 0){
		$flikrDiv.jflickrfeed({
			limit: 8,
			qstrings: {
				id: flickrID
			},
			itemTemplate: '<a class="flickr-item" href="{{image}}" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a>'
		}, function() {
			$('.flickr-item').magnificPopup({
				type: 'image',
				gallery: {
					enabled: true
				}
			});
		});
	}
}(jQuery));