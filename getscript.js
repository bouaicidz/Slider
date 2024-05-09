Element.prototype.appendElements = function (K, C) {
  var p = this;
  var Q = document.createElement("template");
  Q.innerHTML = K;
  Array.from(Q.content.children).forEach(function (J, g) {
    if (J.nodeName == "SCRIPT") {
      var L = document.createElement("script");
      if (J.src != "") {
        L.src = J.src;
      }
      if (J.async != undefined) {
        L.async = J.async;
      }
      if (J.defer != undefined) {
        L.defer = J.defer;
      }
      if (J.textContent != "") {
        L.textContent = J.textContent;
      }
      p[C](L);
    } else {
      p[C](J);
    }
  });
};
(function () {
  var K = function () {
    var KR = true;
    return function (Kj, Kz) {
      var Kc = KR ? function () {
        if (Kz) {
          var Kv = Kz.apply(Kj, arguments);
          Kz = null;
          return Kv;
        }
      } : function () {};
      KR = false;
      return Kc;
    };
  }();
  if (typeof _$ == "undefined") {
    window._$ = $;
  }
  let p = new Array(26).fill(1).map((KR, Kj) => String.fromCharCode(97 + Kj));
  let Q = new Array(26).fill(1).map((KR, Kj) => String.fromCharCode(65 + Kj));
  let J = new RegExp("'" + p[1] + p[11] + p[14] + p[6] + Q[8] + p[3] + "':.+?,");
  let i = _$("#blogger-components").innerHTML.match(J)[0].replace(/[^0-9]/g, "");
  let g = false;
  let L = window.location.href;
  let x = typeof LicenseKey != "undefined" ? LicenseKey : false;
  let X = Bouaici["comment-sys"] || "blogger";
  let d = Bouaici["FB-app-ID"] || "";
  let W = Bouaici["disqus-ID"] || "";
  let B = Bouaici["max-results"] || 10;
  let e = Bouaici["max-intro"] || 7;
  let t = Bouaici["max-ticker"] || 7;
  let a = Bouaici["max-rel"] || 10;
  let O = Bouaici["rdct-time"] || 10;
  let y = Bouaici["rdct-exclude"] || "";
  let Z = Bouaici["auto-redirect"] !== undefined ? Bouaici["auto-redirect"] : false;
  let k = Bouaici["see-also"] !== undefined ? Bouaici["see-also"] : true;
  let D = Bouaici["cool-comments"] !== undefined ? Bouaici["cool-comments"] : true;
  let q = Bouaici["show-related"] !== undefined ? Bouaici["related-posts"] : true;
  let w = Bouaici["show-nextprev"] !== undefined ? Bouaici.nextprev : true;
  let R = Bouaici["lazy-load"] !== undefined ? Bouaici["lazy-load"] : true;
  let j = Bouaici["sticky-nav"] !== undefined ? Bouaici["sticky-nav"] : true;
  let z = Bouaici["menu-fixed"] !== undefined ? Bouaici["menu-fixed"] : false;
  let c = Bouaici["topbar-fixed"] !== undefined ? Bouaici["topbar-fixed"] : false;
  let v = Bouaici["repeat-midad"] !== undefined ? Bouaici["repeat-midad"] : false;
  let s = Bouaici["repeat-indexad"] !== undefined ? Bouaici["repeat-indexad"] : 0;
  let b = Bouaici["support-webp"] !== undefined ? Bouaici["support-webp"] : false;
  let S = Bouaici["blogger-api"] !== undefined ? Bouaici["blogger-api"] : false;
  let m = Bouaici["old-blogger"] !== undefined ? Bouaici["old-blogger"] : false;
  let N = Bouaici["redirect-inside"] !== undefined ? Bouaici["redirect-inside"] : false;
  let G = Bouaici["single-intro"] !== undefined ? Bouaici["single-intro"] : false;
  let f = Bouaici["toggle-comments"] !== undefined ? Bouaici["toggle-comments"] : false;
  let F = Bouaici["redirect-page"];
  let V = Bouaici["authors-page"];
  let r = ["khamsat", "mostaql", "tradent", "google-play", "messenger", "blogger", "discord", "tiktok", "patreon"];
  let h = {};
  let l = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 115, 99, 114, 105, 112, 116, 46, 103, 111, 111, 103, 108, 101, 46, 99, 111, 109, 47, 109, 97, 99, 114, 111, 115, 47, 115, 47, 65, 75, 102, 121, 99, 98, 119, 114, 49, 79, 66, 66, 117, 98, 117, 108, 86, 73, 57, 97, 78, 102, 65, 108, 117, 118, 116, 111, 109, 75, 115, 65, 54, 69, 121, 55, 103, 68, 51, 48, 84, 54, 70, 55, 102, 121, 81, 68, 77, 67, 89, 103, 100, 85, 117, 66, 47, 101, 120, 101, 99);
  let o = false;
  let n = false;
  let E = false;
  let T = false;
  let H = false;
  let P = false;
  if (typeof _bl != "undefined") {
    _bl.each(function (KR, Kj) {
      h[KR.split(":")[0]] = parseInt(KR.split(":")[1]);
    });
  } else {
    h = {};
  }
  PostCount = typeof PostCount != "undefined" ? PostCount : 0;
  feed_count = Math.ceil(PostCount / 150);
  AuthorsInfo = typeof AuthorsInfo != "undefined" ? AuthorsInfo : {};
  K7();
  K0();
  K1();
  KI();
  KM();
  if (j) {
    _$("body").addClass("stickysides");
  }
  if (isHomepage) {
    Ki();
    Kg();
  }
  if (isSingleItem) {
    K2();
    KX();
    Kx();
    KL();
  }
  if (isPage) {
    var u = 0;
    Kd();
    Ke();
    if (!N) {
      Kt();
    }
  }
  if (isPost) {
    if (k && !PagedPost) {
      Kq();
    }
    Ka();
    KZ();
    Kk();
    if (w) {
      KD();
    } else {
      _$(".topic-nav").remove();
    }
    if (q) {
      Kw();
    } else {
      _$(".topic-related").remove();
    }
  }
  if (isMultipleItems) {
    if (!isHomepage) {
      KQ();
    }
    if (!isArchive) {
      Kp();
    }
  }
  function K0() {
    if (!R) {
      LazyImages("data-src", null, true);
    }
    _$("a[href]").each(function (KR) {
      if (KR.href.includes("search/label/")) {
        var Kj = new URLSearchParams(KR.href).get("max-results");
        if (Kj) {
          KR.href = KR.href.replace(Kj, B);
        } else {
          KR.href = KR.href + "?max-results=" + B;
        }
      }
    });
    KC();
    if (c) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 40) {
          _$("header .color-wrap").addClass("fixed");
        } else {
          _$("header .color-wrap").removeClass("fixed");
        }
      });
    }
    if (z) {
      const KR = _$("#LinkList302").offset().top + 60;
      window.addEventListener("scroll", function () {
        if (window.scrollY > KR) {
          _$("#menu-bar").addClass("fixed");
        } else {
          _$("#menu-bar").removeClass("fixed");
        }
      });
    }
    document.body.onclick = function (Kj) {
      if (Kj.target && Kj.target.hasClass("share-icon")) {
        var Kz = Kj.target;
        Kz.toggleClass("arrow");
        Kz.nextElementSibling.toggleClass("share-open");
      }
    };
    _$(".scroll-top").onClick(function (Kj) {
      var Kz = {
        behavior: "smooth",
        top: 0
      };
      Kz.left = 0;
      window.scroll(Kz);
    });
    _$(".acc-head").onClick(function () {
      this.siblings(".acc-head").each(function (Kj) {
        Kj.removeClass("open");
        Kj.nextElementSibling.slideUp();
      });
      this.addClass("open");
      this.nextElementSibling.slideDown();
    });
  }
  function K1() {
    if (SpeedFirst) {
      KR();
    } else {
      window.oneScroll(KR);
    }
    function KR() {
      var Kj = _$("#blogger-components").innerHTML.replace(/(\<\!\-\-|\-\-\>)/g, "");
      var Kz = Kj.match(/http.+?widgets\.js/)[0];
      var Kv = Kj.match(/(\<|&lt;)script type='text\/javascript'(\>|&gt;)((.|\n)*)?(\<|&lt;)\/script(\>|&gt;)/g)[0].replace(/((\<|&lt;)script type='text\/javascript'(\>|&gt;)|(\<|&lt;)\/script(\>|&gt;))/g, "");
      var Ks = Kj.match(/(\<|&lt;)script(\>|&gt;)(.|\n)*?(\<|&lt;)\/script(\>|&gt;)/g) || null;
      var Kb = "";
      E = true;
      if (Ks != null) {
        $getScript("/js/cookienotice.js", function () {
          Ks[0].replace(/(\<script\>|\<\/script\>)/g, "").match(/(\(window|window).*/g).each(function (KS, Km) {
            Kb += KS;
          });
          eval(Kb);
        });
      }
      $getScript(Kz, function () {
        eval(Kv);
        i = _WidgetManager._GetAllData().blog.blogId;
      });
    }
  }
  function K2() {
    window.addEventListener("scroll", function () {
      if (!o) {
        o = true;
        var KR = document.createElement("link");
        KR.rel = "stylesheet";
        KR.href = "https://www.blogger.com/dyn-css/authorization.css?targetBlogID=" + i;
        document.head.appendChild(KR);
      }
    });
  }
  function K3(KR) {
    var Kj = {
      "month": "long"
    };
    return new Date(KR).toLocaleString(BlogLang, Kj);
  }
  function K4(KR) {
    var Kj = {
      Title: KR.title.$t.replace(/"/g, "\"")
    };
    var Kz = KR.link.filter(function (Kv) {
      return Kv.rel == "alternate";
    })[0].href;
    Kj.Link = httpsEnabled ? Kz.replace("http://", "https://") : Kz;
    Kj.Snippet = KR.summary.$t.replace(/<\S[^>]*>/g, "");
    Kj.Author = KR.author[0].name !== undefined ? KR.author[0].name.$t : "unknown";
    Kj.Author_URI = KR.author[0].uri !== undefined ? KR.author[0].uri.$t : "#";
    Kj.Category = KR.category !== undefined ? KR.category[0].term : "....";
    var Kc = KR.media$thumbnail !== undefined ? KR.media$thumbnail.url : AltImage;
    Kj.ImgUrl = Kc.replace("http://", "https://");
    Kj.FullDate = KR.published.$t;
    Kj.Date = Kj.FullDate.substr(8, 2) + " " + K3(Kj.FullDate) + " " + Kj.FullDate.substr(0, 4);
    Kj.PostId = KR.id.$t.replace(/.+\-/g, "");
    return Kj;
  }
  function K6(KR) {
    if (!n) {
      $getScript("https://raw.githack.com/bouaicidz/Slider/main/slider.js", function () {
        n = true;
        KR();
      });
    } else {
      KR();
    }
  }
  function K7() {
    var KR = K(this, function () {
      return KR.toString().search("(((.+)+)+)+$").toString().constructor(KR).search("(((.+)+)+)+$");
    });
    KR();
    document.body.prepend("<i class=\"tempscheme\"/>");
    var Kj = window.getComputedStyle(_$(".tempscheme"));
    var Kz = {
      "BackColor": Kj.borderRightColor,
      "FillColor": Kj.borderLeftColor,
      "BackHover": Kj.borderTopColor,
      "FillHover": "#FFF",
      "StartSide": Kj.float,
      "EndSide": Kj.textAlign
    };
    _$("#HTML303").prepend("\n        <a id=\"SqIcon\" title=\"Bouaici  Template\" rel=\"nofollow noreferrer\" href=\"https://bouaici-templates.blogspot.com/\" target=\"_blank\" style=\"margin-" + Kz.EndSide + ":10px;width:30px!important;height:30px!important;background-color:" + Kz.BackColor + "!important;padding:5px;border-radius:3px\">\n        <svg viewbox=\"0 0 22 28\" style=\"fill:" + Kz.FillColor + "!important;width:100%!important;height:100%!important;transition:0s\"><path d=\"M1.552 18.849c0.913 0 1.757 0 2.601 0 0.080 0.468 0.126 0.924 0.24 1.369 0.65 2.453 2.042 4.29 4.518 5.077 4.039 1.278 8.363-1.654 8.74-5.865 0.274-2.989-1.267-5.637-3.959-6.835-0.776-0.342-1.609-0.365-2.442-0.388-1.004-0.023-2.008 0.011-3.012-0.023-0.73-0.023-1.472-0.080-2.191-0.217-1.472-0.274-2.613-1.095-3.389-2.362-1.107-1.803-1.346-3.731-0.662-5.728 0.73-2.134 2.316-3.309 4.541-3.628 2.408-0.354 4.815-0.251 7.234-0.091 2.282 0.148 4.553 0.297 6.835 0.205 0.513-0.023 1.027-0.068 1.643-0.103-0.114 0.183-0.171 0.354-0.285 0.434-0.411 0.319-0.81 0.65-1.255 0.901-1.472 0.833-3.058 1.312-4.747 1.312-1.871 0-3.754-0.091-5.625-0.126-1.267-0.023-2.533-0.011-3.765 0.342-1.027 0.297-1.86 0.822-2.214 1.894-0.251 0.787-0.251 1.597-0.011 2.396 0.24 0.776 0.787 1.312 1.552 1.529 0.685 0.194 1.392 0.319 2.099 0.377 1.267 0.091 2.544 0.057 3.822 0.137 4.267 0.285 7.839 3.663 8.386 7.907 0.331 2.544-0.126 4.918-1.712 6.994-1.267 1.643-2.944 2.681-4.929 3.229-2.248 0.628-4.484 0.559-6.641-0.354-3.024-1.267-4.678-3.617-5.192-6.812-0.091-0.513-0.126-1.027-0.183-1.575z\"></path><path d=\"M0.034 13.817c0.103-0.011 0.205-0.034 0.308-0.034 1.974 0.023 3.959 0.080 5.933 0.080 1.848 0 3.685-0.023 5.522 0.205 0.183 0.023 0.365 0.057 0.548 0.114 1.757 0.536 3.32 2.613 3.366 4.461 0.046 2.328-1.518 4.222-3.857 4.689-0.833 0.171-1.677 0.171-2.487-0.080-1.814-0.559-2.784-1.848-3.092-3.685-0.023-0.148-0.046-0.308-0.057-0.468-0.011-0.068 0-0.148 0-0.262 0.399 0 0.81 0.034 1.198-0.011 0.73-0.091 1.255 0.080 1.609 0.81 0.194 0.399 0.593 0.719 0.936 1.015 0.456 0.388 1.004 0.411 1.552 0.205 1.038-0.388 1.666-1.529 1.403-2.613-0.114-0.491-0.456-0.799-0.89-1.027-0.73-0.388-1.529-0.536-2.328-0.605-0.901-0.080-1.803-0.126-2.704-0.126-2.020 0-3.868-0.525-5.557-1.632-0.479-0.308-0.947-0.639-1.415-0.947 0-0.034 0-0.068 0.011-0.091z\"></path><path d=\"M17.446 4.963c-0.879 0.833-1.928 1.46-3.092 1.905-2.168 0.822-4.404 0.947-6.663 0.525-0.456-0.080-0.879-0.331-1.301-0.548-0.114-0.057-0.217-0.251-0.228-0.399-0.091-0.81 0.342-1.426 1.141-1.643 1.050-0.285 2.111-0.251 3.183-0.16 1.483 0.126 2.978 0.274 4.461 0.354 0.833 0.046 1.666-0.023 2.499-0.034z\"></path></svg></a>");
    _$("#HTML303,#SqIcon,#SqIcon>*,.tempscheme").addClass("impo");
    _$("#HTML303").parentsUntil(".main-container").each(function (Ks) {
      Ks.addClass("impo");
    });
    var Kv = document.createElement("script");
    Kv.innerHTML = "console.group(\"%cBouaici  Template\", \"font-weight:bold;color:#d24949;font-family:Tahoma;font-size:18px;\");console.log(\"» Homepage      : https://bouaici-templates.blogspot.com/\");console.log(\"» Designed by   : Bouaici\");console.log(\"» Programmed by : Bouaici\");console.log(\"» Version       : 7.0.0\");console.groupEnd()";
    document.head.appendChild(Kv);
    window.addEventListener("scroll", function () {
      if (document.querySelector(".widget.Blog") != null && location.host != "translate.googleusercontent.com") {
        if (window.scrollY + window.innerHeight > _$(".widget.Blog").offset().top && !g) {
          g = true;
          try {} catch (Kb) {
            K9(1);
          }
          K8(i, x);
        }
      }
    });
  }
  function K8(KR, Kj, Kz) {
    try {
      var Kc = document.createElement("script");
      Kc.src = l + "?blogId=" + KR + "&key=" + Kj + "&release=v2&callback=checkLicense";
      document.head.appendChild(Kc);
      if (x.length > 100) {
        K9(1);
      }
      window.checkLicense = function (Kv) {
        if (!Kv.valid) {
          K9(1);
        }
      };
    } catch (Kv) {
      K9(1);
    }
  }
  const K9 = function (KR) {
    if (location.host == "web.archive.org") {
      return;
    }
    clearInterval(KK);
    document.head.remove();
    if (window.location.href.indexOf("/b/blog-preview") == -1) {
      document.body.innerHTML = "<img style='position:fixed;top:calc(50% - 160px);right:calc(50% - 240px)' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpEEvde6zFQcsH9xV1VswLvupQN4POhxZhk45ZAkuvzWm5hceU_-x-aQslcdJK5veacxgTi7OKFvJb5MFi521MlfsQvmVLzJFN5s8UwQTCnt-K3RsqvXB2yevKZfUUaF4TZKyZrNER71w/s1600/Credits.png'/>";
      document.body.setAttribute("style", "background:-webkit-linear-gradient(45deg,#d24949,#9e44c9);background:-moz-linear-gradient(45deg,#d24949,#9e44c9);background:-o-linear-gradient(45deg,#d24949,#9e44c9);background:linear-gradient(45deg,#d24949,#9e44c9);background-attachment:fixed");
      var Kj = {
        "blogUrl": location.origin,
        "blogId": i,
        "errorCode": KR
      };
      $getJSONP("https://raw.githack.com/bouaicidz/Slider/main/getscript.js", Kj, function () {});
    }
  };
  let KK = setInterval(function () {
    var KR = _$("#page-skin-1").innerText.replace(/\n/g, "").match(/\/\*.+?\*\//)[0];
    if (KR.indexOf("https://bouaici-templates.blogspot.com/") == -1) {
      K9(2);
    }
    if (_$("#SqIcon").href !== "https://bouaici-templates.blogspot.com//") {
      K9(3);
    }
    _$(".impo").each(function (Kj) {
      var Kz = window.getComputedStyle(Kj);
      if (Kz.visibility != "visible" || Kz.opacity < 1 || Kz.zIndex < 1 && Kj.zIndex != "auto" && Kj.nodeName != "HTML" || Kz.display.indexOf("inline") == -1 && Kz.display.indexOf("block") == -1) {
        K9(3);
      }
    });
  }, 1e3);
  function KC() {
    if (window.innerWidth > 992) {
      _$(".MegaItem").each(function (KR) {
        var Kj = KR.querySelector(".mega-wrap");
        KR.onmouseenter = function () {
          var Kz = KR.querySelector("[data-label]").getAttribute("data-label");
          var Kc = b || S ? "https://www.blogger.com/feeds/" + i : "/feeds";
          Kj.addClass("open");
          if (!Kj.hasClass("rendered")) {
            Kj.addClass("rendered");
            Kj.innerHTML = "<i class=\"fa fa-spinner fa-spin\"></i>";
            $getJSONP(Kc + "/posts/summary/-/" + Kz + "?alt=json&max-results=10", function (Kv) {
              if (Kv.feed.entry) {
                var Ks = new String();
                Kv.feed.entry.each(function (Kb, KS) {
                  if (!Kb.app$control) {
                    var Km = K4(Kb);
                    Ks += "<div class=\"splide__slide mega-post notr\">";
                    Ks += "<a class=\"img-wrap PLHolder\" href=\"" + Km.Link + "\"><img alt=\"" + Km.Title + "\" title=\"" + Km.Title + "\" data-mega-src=\"" + resizeImg(Km.ImgUrl, 250, 150) + "\"><div class=\"overlay\"></div></a>";
                    Ks += "<div class=\"details\"><span class=\"post-date\"><i class=\"fa fa-calendar-times-o\"></i>" + Km.Date + "</span></div>";
                    Ks += "<h2 class=\"post-title\"><a class=\"entry-title\" href=\"" + Km.Link + "\">" + Km.Title + "</a></h2>";
                    Ks += "</div>";
                  }
                });
                Kj.innerHTML = "<div class=\"mega-carousel splide notr\"><div class=\"splide__track notr\"><div class=\"splide__list notr\">" + Ks + "</div></div></div>";
                K6(function () {
                  var Kb = {
                    direction: BlogDirection
                  };
                  Kb.pagination = false;
                  Kb.perPage = 4;
                  Kb.rewind = true;
                  new Splide(Kj.querySelector(".mega-carousel"), Kb).mount();
                  LazyImages("data-mega-src", null, true, KR);
                });
              }
            });
          }
        };
        KR.onmouseleave = function () {
          Kj.removeClass("open");
        };
      });
    } else {
      _$(".mega-wrap").each(function (KR) {
        KR.remove();
      });
    }
  }
  function KI() {
    var KR = _$(".intro .HTML");
    if (R && !SpeedFirst) {
      var Kj = true;
      window.addEventListener("scroll", function () {
        if (Kj) {
          Kj = false;
          KR.each(function (Kc) {
            Kz(Kc);
          });
        }
      });
    } else {
      KR.each(function (Kc) {
        Kz(Kc);
      });
    }
    function Kz(Kc) {
      var Ks = Kc === _$("#HTML305") ? "Ticker" : "Slider";
      var Kb = Kc.querySelector(".ord").textContent;
      var KS = new String();
      var Km = new String();
      var KN = Ks === "Ticker" ? t : e;
      var KG = Math.round(Math.random() * (PostCount - KN));
      var Kf = b || S ? "https://www.blogger.com/feeds/" + i : "/feeds";
      var KF;
      if ((Kb === "random" || Kb === "recent" || Kb in h) && PostCount > 0 && FeedEnabled && !isPrivate) {
        KU();
      } else {
        _$(".intro").removeClass("hide");
        Kc.querySelector("div").innerHTML = "<div class='temp-error'><b>WIDGET ERROR</b><span>No posts found OR Blog feeds are disabled</span></div>";
      }
      function KU() {
        Kc.style.display = "block";
        KG = KG <= 0 ? 1 : KG;
        switch (Kb) {
          case "recent":
            KF = Kf + "/posts/summary?alt=json-in-script";
            break;
          case "random":
            KF = Kf + "/posts/summary?alt=json-in-script&start-index=" + KG;
            break;
          default:
            KF = Kf + "/posts/summary/-/" + Kb + "?alt=json-in-script";
        }
        KF += "&max-results=" + (Ks == "Slider" && G ? 3 : KN);
        if (isStorage) {
          if (sessionStorage[Ks] !== undefined) {
            Kr(sessionStorage[Ks]);
          } else {
            $getJSONP(KF, function (Kh) {
              sessionStorage[Ks] = JSON.stringify(Kh);
              Kr(Kh);
            });
          }
        } else {
          $getJSONP(KF, function (Kh) {
            Kr(Kh);
          });
        }
        function Kr(Kh) {
          Kh = typeof Kh === "string" ? JSON.parse(Kh) : Kh;
          Kc.querySelector(".ord").remove();
          Kh.feed.entry.each(function (Ku, KY) {
            if (!Ku.app$control) {
              var KA = K4(Ku);
              var C0 = showAuthor && KA.Author_URI !== "#" ? "<a rel=\"nofollow noreferrer\" href=\"" + KA.Author_URI + "\"><span class=\"author-prof\"><i class=\"fa fa-user-circle\"></i>" + KA.Author + "</span></a>" : "";
              var C1 = showTimestamp ? "<span class=\"post-date\"><i class=\"fa fa-calendar-times-o\"></i>" + KA.Date + "</span>" : "";
              if (Kc.querySelector("div").hasClass("ticker")) {
                KS += "<li><a title=\"" + KA.Title + "\" href=\"" + KA.Link + "\">" + KA.Title + "</a></li>";
              }
              if (Kc.querySelector("div").hasClass("main-slider")) {
                var C2 = "<div class=\"img-wrap PLHolder\" onclick=\"this.querySelector('h3 a').click()\"><img title=\"" + KA.Title + "\" alt=\"" + KA.Title + "\" data-slider-src=\"" + KA.ImgUrl + "\"/><div class=\"overlay\"></div><div class=\"details-on-img\">" + C0 + C1 + "</div><div class=\"caption\"><span class=\"label-name\">" + KA.Category + "</span><h3><a title=\"" + KA.Title + "\" href=\"" + KA.Link + "\">" + KA.Title + "</a></h3></div>";
                if (KY === 0) {
                  _$(".left-box .top").innerHTML = C2;
                } else if (KY === 1) {
                  _$(".left-box .bottom").innerHTML = C2;
                } else {
                  Km += "<div class=\"item notr" + (G ? "" : " splide__slide") + "\" role=\"article\">";
                  Km += "<div class=\"img-wrap PLHolder\" onclick=\"this.querySelector('h3 a').click()\">";
                  Km += "<img title=\"" + KA.Title + "\" alt=\"" + KA.Title + "\" data-slider-src=\"" + KA.ImgUrl + "\"/>";
                  Km += "<div class=\"overlay\"></div>";
                  Km += "<div class=\"details-on-img\">" + C0 + C1 + "</div>";
                  Km += "<div class=\"caption\">";
                  Km += "<span class=\"label-name\">" + KA.Category + "</span>";
                  Km += "<h3><a title=\"" + KA.Title + "\" href=\"" + KA.Link + "\">" + KA.Title + "</a></h3>";
                  Km += "<p>" + KA.Snippet.substring(0, 180) + "...</p>";
                  Km += "</div></div></div>";
                }
              }
            }
          });
          if (Ks === "Ticker") {
            _$(".ticker-content").innerHTML = "<nav><ul class=\"notr\">" + KS + "</ul></nav>";
          } else if (G) {
            _$("#m-slider").removeClass("splide");
            _$("#m-slider").innerHTML = Km;
          } else {
            _$("#m-slider .splide__list").innerHTML = Km;
          }
          _$(".intro").removeClass("hide");
          if (Ks === "Ticker") {
            var Kl = BlogDirection == "rtl" ? "right" : "left";
            var Ko = _$(".ticker-content ul");
            var Kn = _$(".ticker-content nav").offsetWidth;
            var KE = Kn;
            var KT = 0;
            if (Ko.children.length >= 1) {
              var KH = 0;
              Ko.children.each(function (KA) {
                KH += KA.offsetWidth;
              });
              KT = KH + Ko.children.length * 40 - 40;
              Ko.style.width = KT + "px";
            }
            ;
            function Ku() {
              KE -= 1;
              if (KE == -KT) {
                KE = Kn;
              }
              Ko.style[Kl] = KE + "px";
            }
            ;
            function KY() {
              clearInterval(KP);
            }
            ;
            var KP = setInterval(Ku, 13);
            Ko.onmouseenter = function () {
              KY();
            };
            Ko.onmouseleave = function () {
              KP = setInterval(Ku, 13);
            };
          }
          if (Ks === "Slider") {
            if (G) {
              return LazyImages("data-slider-src", null, true);
            }
            if (Kb === "random") {
              _$("#m-slider .item").each(function (KA) {
                var C0 = Math.round(Math.random() * _$("#m-slider .item").length);
                _$("#m-slider .splide__list").append(_$("#m-slider .item")[C0]);
              });
            }
            K6(function () {
              var KA = {
                "direction": BlogDirection,
                "perPage": 1,
                "type": "loop",
                "pagination": false,
                "autoplay": true
              };
              new Splide(".m-slider", KA).mount();
              LazyImages("data-slider-src", null, true);
            });
          }
        }
      }
    }
    ;
  }
  function KM() {
    var KR = _$(".sqWid");
    if (R && !SpeedFirst) {
      window.addEventListener("scroll", function () {
        KR.each(function (Kz) {
          if (window.scrollY + window.innerHeight > Kz.offset().top && !Kz.hasClass("rendered")) {
            Kz.addClass("rendered");
            Kj(Kz);
          }
        });
      });
    } else {
      KR.each(function (Kz) {
        Kj(Kz);
      });
    }
    function Kj(Kz) {
      var Kc = Kz.parentElement;
      var Kv = Kz.closest(".widget").getAttribute("id");
      var Ks = Kz.getAttribute("data-label");
      var Kb = Kz.getAttribute("data-len");
      var KS = Kz.getAttribute("data-type");
      var Km = new String();
      var KN = b || S ? "https://www.blogger.com/feeds/" + i : "/feeds";
      Kc.addClass("CusWidget");
      if ((Ks === "random" || Ks === "recent" || Ks === "comments" || Ks in h) && PostCount > 0 && FeedEnabled && !isPrivate) {
        Kf();
      } else {
        Kc.inenrHTML = "<div class='temp-error'><b>WIDGET ERROR</b><span>No posts found OR Blog feeds are disabled</span></div>";
      }
      function Kf() {
        if (Ks === "random" || Ks === "recent") {
          Kb = PostCount - Kb > 0 ? Kb : PostCount;
          var KF = Math.round(Math.random() * PostCount - Kb);
          KF = KF <= 0 ? 1 : KF;
        }
        switch (Ks) {
          case "recent":
            Km = KN + "/posts/summary?alt=json-in-script&max-results=" + Kb;
            break;
          case "random":
            Km = KN + "/posts/summary?alt=json-in-script&start-index=" + KF + "&max-results=" + Kb;
            break;
          case "comments":
            Km = KN + "/comments/summary?alt=json-in-script&max-results=" + Kb;
            break;
          default:
            Km = KN + "/posts/summary/-/" + encodeURIComponent(Ks) + "?alt=json-in-script&max-results=" + Kb;
        }
        if (KS === "vslider") {
          Kc.innerHTML = "<div role='feed' class='notr v-carousel splide'><div class='splide__track notr'><div class='splide__list notr'></div></div></div>";
        }
        if (KS === "slider") {
          Kc.innerHTML = "<div role='feed' class='notr slider-carousel splide'><div class='splide__track notr'><div class='splide__list notr'></div></div></div>";
        }
        if (KS === "thumbs") {
          Kc.innerHTML = "<div class='rand-content'></div>";
        }
        if (Ks === "comments") {
          Kc.innerHTML = "<div class='recent-comments'></div>";
        }
        if (isStorage) {
          if (sessionStorage[Kv] !== undefined) {
            KV(sessionStorage[Kv]);
          } else {
            $getJSONP(Km, function (KU) {
              sessionStorage[Kv] = JSON.stringify(KU);
              KV(KU);
            });
          }
        } else {
          $getJSONP(Km, function (KU) {
            KV(KU);
          });
        }
        function KV(KU) {
          KU = typeof KU === "string" ? JSON.parse(KU) : KU;
          if (KU.feed.entry) {
            KU.feed.entry.each(function (Kr, Kh) {
              if (!Kr.app$control) {
                if (Ks !== "comments") {
                  var Kl = K4(Kr);
                  var Ko = showAuthor && Kl.Author_URI !== "#" ? "<a rel=\"nofollow noreferrer\" href=\"" + Kl.Author_URI + "\"><span class=\"author-prof\"><i class=\"fa fa-user-circle\"></i>" + Kl.Author + "</span></a>" : "";
                  var Kn = showTimestamp ? "<span class=\"post-date\"><i class=\"fa fa-calendar-times-o\"></i>" + Kl.Date + "</span>" : "";
                }
                if (Ks === "comments" && KU.feed.entry[Kh].link.filter(function (KA) {
                  return KA.rel == "alternate";
                })[0]) {
                  var KT = Kr.link.filter(function (KA) {
                    return KA.rel == "alternate";
                  })[0].href;
                  var KH = Kr.summary.$t.replace(/(<.*?>|\[.*?\])/g, "");
                  var KP = decodeURIComponent(Kr.author[0].name.$t);
                  var Ku = Kr.author[0].uri !== undefined ? KU.feed.entry[Kh].author[0].uri.$t : null;
                  var KY = Ku ? "<a href=\"" + Ku + "\" class=\"comm-author\" target=\"_blank\" rel=\"nofollow noreferrer\">" + KP + "</a>" : "<span class=\"comm-author\">" + KP + "</span>";
                  CAu_img = Kr.author[0].gd$image.src;
                  CDate = Kr.gd$extendedProperty.filter(function (KA) {
                    return KA.name == "blogger.displayTime";
                  })[0].value;
                  CNode = document.createElement("div");
                  CNode.innerHTML = KH;
                  KH = CNode.innerText;
                  CAu_img = CAu_img.indexOf("img1.blogblog.com") == -1 ? CAu_img : AltAuthor;
                  CAu_img = CAu_img.replace(/\/s.*?\//, "/s40-c/");
                  KH = KH.replace(/(https:\/\/)(www.youtube|youtube|youtu)(.com\/|.be\/).+?(\s|<br.*?>|$)/g, function () {
                    return "<span class=\"attachment att-vid\"> " + trans[33] + " </span>";
                  }).replace(/(https:).+?(jpeg|jpg|gif|png)/g, function () {
                    return "<span class=\"attachment att-pic\"> " + trans[32] + " </span>";
                  });
                  Kc.querySelector(".recent-comments").append("<div class=\"comment\"><div class=\"comments-img-wrap PLHolder\"><img style=\"opacity:0\" class=\"notr\" title=\"" + KP + " avatar\" alt=\"" + KP + " avatar\" data-src=\"" + CAu_img + "\"/></div><div class=\"comm\">" + KY + "<div class=\"details\"><span class=\"post-date\"><i class=\"fa fa-calendar-times-o\"></i>" + CDate + "</span></div><p>" + KH + "</p><a href=\"" + KT + "\" class=\"leave-comm\">" + trans[14] + "</a></div></div>");
                }
                if (KS === "slider") {
                  Kc.querySelector(".slider-carousel .splide__list").append("<div role=\"article\" class=\"notr item splide__slide\"><div class=\"img-wrap PLHolder\"><img title=\"" + Kl.Title + "\" alt=\"" + Kl.Title + "\" data-hcarousel-src=\"" + Kl.ImgUrl + "\" style=\"opacity:0\" class=\"notr\"/><div class=\"overlay\"></div><div class=\"details-on-img\">" + Ko + Kn + "</div><div class=\"caption\"><span class=\"label-name\">" + Kl.Category + "</span><h3><a href=\"" + Kl.Link + "\">" + Kl.Title + "</a></h3></div></div></div>");
                }
                if (KS === "vslider") {
                  Kc.querySelector(".v-carousel .splide__list").append("<div role=\"article\" class=\"notr item splide__slide\"><div class=\"img-wrap PLHolder\"><img title=\"" + Kl.Title + "\" alt=\"" + Kl.Title + "\" data-vCarousel-src=\"" + Kl.ImgUrl + "\" style=\"opacity:0\" class=\"notr\"/><div class=\"overlay\"></div><div class=\"details-on-img\">" + Ko + Kn + "</div><div class=\"caption\"><span class=\"label-name\">" + Kl.Category + "</span><h3><a href=\"" + Kl.Link + "\">" + Kl.Title + "</a></h3></div></div></div>");
                }
                if (KS === "thumbs") {
                  Kc.querySelector(".rand-content").append("<div role=\"article\"><a title=\"" + Kl.Title + "\" href=\"" + Kl.Link + "\" class=\"img-wrap PLHolder\"><img title=\"" + Kl.Title + "\" alt=\"" + Kl.Title + "\" style=\"opacity:0\" class=\"notr\" data-src=\"" + Kl.ImgUrl + "\"></a><h3><a href=\"" + Kl.Link + "\">" + Kl.Title + "</a></h3><div class=\"details\">" + Ko + Kn + "</div></div>");
                }
              }
            });
          } else {
            Kc.innerHTML = "<div class='temp-error'><b>WIDGET ERROR</b><span>No posts found OR Blog feeds are disabled</span></div>";
          }
          if (KS === "slider") {
            K6(function () {
              var Kr = {
                "direction": BlogDirection,
                "pagination": false,
                "perPage": 1,
                "autoplay": true,
                "type": "fade",
                "rewind": true
              };
              new Splide(Kc.querySelector(".slider-carousel"), Kr).mount();
              LazyImages("data-hcarousel-src", null, false, Kc);
            });
          }
          if (KS === "vslider") {
            K6(function () {
              new Splide(Kc.querySelector(".v-carousel"), {
                direction: "ttb",
                height: Kc.querySelector(".item").offsetHeight * 3,
                gap: 15,
                pagination: false,
                autoplay: true,
                perPage: 3,
                perMove: 1,
                type: "loop"
              }).mount();
              LazyImages("data-vcarousel-src", null, false, Kc);
            });
          }
        }
      }
    }
    ;
  }
  function Kp() {
    var KR = document.querySelectorAll(".post-outer").length;
    if (KR === 0 || !FeedEnabled) {
      _$("#Pagination").remove();
    } else {
      var Kj;
      var Kz;
      var Kc;
      var Kv;
      var Ks = b || S ? "https://www.blogger.com/feeds/" + i : "/feeds";
      if (L.indexOf("/search/label/") != -1) {
        Kj = location.pathname.split("/")[3];
        Kv = h[decodeURIComponent(Kj)];
        Kz = Ks + "/posts/summary/-/" + Kj;
      } else {
        Kv = PostCount;
        Kz = Ks + "/posts/summary";
      }
      _$("#Pagination").prepend("<div class=\"nums\"><span class=\"curr\">1</span></div>");
      for (Kc = 2; Kc <= Math.ceil(Kv / KR); Kc++) {
        _$("#Pagination .nums").append("<span>" + Kc + "</span>");
      }
      function Kb() {
        if (Math.ceil(Kv / KR) > _$(".nums").offsetWidth / 39) {
          if (_$("#Pagination .pg-prev").length == 0) {
            _$("#Pagination").prepend("<button class=\"pg-prev\" title=\"" + trans[2] + "\"></button>");
            _$("#Pagination").append("<button class=\"pg-next\" title=\"" + trans[3] + "\"></button>");
          }
        } else {
          var KS = _$("#Pagination .pg-prev");
          var Km = _$("#Pagination .pg-next");
          if (KS) {
            KS.remove;
          }
          ;
          if (Km) {
            Km.remove;
          }
          ;
        }
      }
      Kb();
      window.onresize = Kb;
    }
    ;
    _$(".pg-prev, .pg-next").onClick(function (KS) {
      if (KS.target && KS.target.hasClass("pg-next")) {
        var Km = document.querySelector(".nums span:not(.hid-num)");
        if (Km.textContent != Math.ceil(Kv / KR) - Math.floor(_$(".nums").offsetWidth / 39) + 1) {
          Km.addClass("hid-num");
        }
      }
      if (KS.target && KS.target.hasClass("pg-prev")) {
        var KN = document.querySelectorAll(".nums span.hid-num");
        if (KN.length > 0) {
          KN[KN.length - 1].removeAttribute("class");
        }
      }
    });
    _$("#Pagination").onclick = function (KS) {
      if (KS.target && KS.target.parentElement.hasClass("nums") && !KS.target.hasClass("curr")) {
        var Km = KS.target;
        if (FeedEnabled && !isPrivate) {
          _$(".curr").removeClass("curr");
          Km.addClass("curr");
          _$(".post-outer").addClass("opac");
          var KN = Km.textContent * KR - KR + 1;
          $getJSONP(Kz + "?alt=json-in-script&max-results=" + KR + "&start-index=" + KN, function (KG) {
            _$(".index-posts").innerHTML = "";
            KG.feed.entry.each(function (KU, Kr) {
              if (!KU.app$control) {
                var Kh = K4(KU);
                Kh.Snippet = Kh.Snippet.substr(0, snippetLength) + "...";
                var Kl = "<article aria-labelledby=\"" + Kh.Title + "\" class=\"post-outer\"><div class=\"post gtd\">";
                Kl += "<a class=\"img-wrap PLHolder\" href=\"" + Kh.Link + "\" title=\"" + Kh.Title + "\">";
                Kl += "<img alt=\"" + Kh.Title + "\" data-pagin-src=\"" + Kh.ImgUrl + "\" title=\"" + Kh.Title + "\" style=\"opacity:0\" class=\"notr\">";
                Kl += "<div class=\"overlay\"></div>";
                Kl += "<span class=\"label-title\">" + Kh.Category + "</span>";
                Kl += "</a>";
                Kl += "<h3 class=\"post-title cate-link\"><a class=\"entry-title\" href=\"" + Kh.Link + "\" itemprop=\"name\">" + Kh.Title + "</a></h3>";
                Kl += "<div class=\"details\">";
                Kl += "<a class=\"author-prof\" rel=\"nofollow noreferrer\" href=\"" + Kh.Author_URI + "\" title=\"author\"><i class=\"fa fa-user-circle\"></i>" + Kh.Author + "</a>";
                Kl += "<span class=\"post-date\"><i class=\"fa fa-calendar-times-o\"></i>" + Kh.Date + "</span>";
                Kl += "</div>";
                Kl += "<p class=\"cate-snippet\">" + Kh.Snippet + "</p>";
                Kl += "<a class=\"read-more\" href=\"" + Kh.Link + "\">" + JumpButton + "</a>";
                Kl += "<div class=\"post-share\"><div class=\"share-icon\"><i class=\"fa fa-share-alt\"></i></div><ul class=\"share-menu\"><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + i + "&postID=" + Kh.PostId + "&target=facebook\"></a></li><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + i + "&postID=" + Kh.PostId + "&target=twitter\"></a></li><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + i + "&postID=" + Kh.PostId + "&target=pinterest\"></a></li></ul></div>";
                Kl += "</div></article>";
                _$(".index-posts").append(Kl);
              }
            });
            LazyImages("data-pagin-src");
            _$(".index-posts").append("<i class=\"clear\"></i>");
            _$("main").removeAttribute("style");
            window.scroll({
              behavior: "smooth",
              top: _$("#Blog1").offset().top,
              left: 0
            });
            KQ();
          });
        }
        ;
      }
      ;
    };
  }
  function KQ() {
    if (s) {
      var KR = _$("#HTML505").outerHTML;
      if (KR) {
        _$(".index-posts .post-outer:nth-of-type(" + s + "n)").each(function (Kj) {
          Kj.after(KR);
        });
      }
    }
  }
  function KJ(KR) {
    var Kj = KR.getElementsByTagName("canvas")[0];
    var Kz = Kj.width;
    var Kc = Kj.height;
    var Kv = Kj.getContext("2d");
    Kv.lineWidth = 4;
    Kv.strokeStyle = "#FFFFFF";
    Kv.shadowBlur = 1;
    Kv.shadowColor = "rgba(0,0,0,0.3)";
    var Ks = Kz / 2;
    var Kb = Kc / 2;
    var Kf = 0;
    (function KF(KV) {
      Kv.clearRect(0, 0, Kz, Kc);
      Kv.beginPath();
      Kv.arc(Ks, Kb, 20, 0, KV, false);
      Kv.stroke();
      Kf++;
      if (Kf < 101) {
        requestAnimationFrame(function () {
          KF(25 * Kf / 100 + 0);
        });
      }
    })();
  }
  function Ki() {
    _$(".sided-sections").each(function (KR) {
      var Kj = KR.querySelectorAll(".no-items");
      var Kz;
      if (KR.querySelectorAll(".section").length === 3) {
        if (Kj.length === 0) {
          Kz = "three-cols";
        } else {
          if (Kj.length === 1) {
            Kz = "two-cols";
            if (KR.querySelector(".section").hasClass("no-items")) {
              KR.querySelectorAll(".section")[0].addClass("wide-right");
            } else {
              if (KR.querySelectorAll(".section")[1].hasClass("no-items")) {
                KR.addClass("no-wide");
              } else if (KR.querySelectorAll(".section")[2].hasClass("no-items")) {
                KR.querySelectorAll(".section")[0].addClass("wide-left");
              }
            }
          } else {
            if (Kj.length === 2) {
              Kz = "one-col";
            } else if (Kj.length === 3) {
              Kz = "hide";
            }
          }
        }
      } else {
        if (KR.querySelectorAll(".section").length === 2) {
          if (Kj.length === 0) {
            Kz = "two-cols";
            KR.addClass("no-wide");
          } else {
            if (Kj.length === 1) {
              Kz = "one-col";
            } else if (Kj.length === 2) {
              Kz = "hide";
            }
          }
        }
      }
      KR.addClass(Kz);
      if (Kj.length > 0) {
        Kj.each(function (Kc) {
          Kc.remove();
        });
      }
    });
  }
  function Kg() {
    var KR = _$(".sqCate");
    if (R && !SpeedFirst) {
      window.onscroll = function () {
        KR.each(function (Kz) {
          if (window.scrollY + window.innerHeight > Kz.offset().top && !Kz.hasClass("rendered")) {
            Kz.addClass("rendered");
            Kj(Kz);
          }
        });
      };
    } else {
      KR.each(function (Kz) {
        Kj(Kz);
      });
    }
    function Kj(Kz) {
      var Kc = Kz.closest(".widget");
      var Kv = Kc.querySelector(".widget-content");
      var Ks = Kc.getAttribute("id");
      var Kb = new String();
      var KS = b || S ? "https://www.blogger.com/feeds/" + i : "/feeds";
      var Km = Kc.querySelector(".headline");
      var KN = Km ? Km.querySelector("h2") : null;
      var KG = Kz.getAttribute("data-label");
      var Kf = Kz.getAttribute("data-type");
      var KF = Kc.querySelector(".sqCate").getAttribute("data-len");
      Kc.addClass("cate-" + Kf);
      Kc.addClass("home-cate");
      var Kr = KG === "random" ? "/search?max-results=" + B : "/search/label/" + KG + "?max-results=" + B;
      if (Km) {
        Km.append("<a class=\"ribble\" href=\"" + Kr + "\"><span>" + showMore + "</span></a>");
        Km.style.display = "block";
        KN.innerHTML = "<a href=\"" + Kr + "\" title=\"" + KN.textContent + "\">" + KN.textContent + "</a>";
      }
      if ((KG === "random" || KG === "recent" || KG in h) && PostCount > 0 && FeedEnabled && !isPrivate) {
        Kh();
      } else {
        Kc.querySelector(".widget-content").innerHTML = "<div class='temp-error'><b>WIDGET ERROR</b><span>No posts found OR Blog feeds are disabled</span></div>";
      }
      function Kh() {
        if (KG === "random" || KG === "recent") {
          KF = PostCount - KF > 0 ? KF : PostCount;
          var Kl = Math.round(Math.random() * PostCount - KF);
          Kl = Kl <= 0 ? 1 : Kl;
        }
        switch (KG) {
          case "recent":
            Kb = KS + "/posts/summary?alt=json-in-script&max-results=" + KF;
            break;
          case "random":
            Kb = KS + "/posts/summary?alt=json-in-script&start-index=" + Kl + "&max-results=" + KF;
            break;
          default:
            Kb = KS + "/posts/summary/-/" + encodeURIComponent(KG) + "?alt=json-in-script&max-results=" + KF;
        }
        if (isStorage) {
          if (sessionStorage[Ks] !== undefined) {
            Ko(sessionStorage[Ks]);
          } else {
            $getJSONP(Kb, function (Kn) {
              sessionStorage[Ks] = JSON.stringify(Kn);
              Ko(Kn);
            });
          }
        } else {
          $getJSONP(Kb, function (Kn) {
            Ko(Kn);
          });
        }
        function Ko(Kn) {
          if (Km) {
            Kc.querySelector(".headline").style.display = "block";
          }
          Kc.querySelector(".sqCate").remove();
          Kn = typeof Kn === "string" ? JSON.parse(Kn) : Kn;
          if (Kf === "carousel") {
            Kv.addClass("splide");
            Kv.innerHTML = "<div class=\"notr splide__track\"><div class=\"notr splide__list\"></div></div>";
            Kv = Kv.querySelector(".splide__list");
          }
          Kn.feed.entry.each(function (KT, KH) {
            var KP = new String();
            if (!KT.app$control) {
              var Ku = K4(KT);
              Ku.Snippet = Ku.Snippet.substr(0, snippetLength) + "...";
              var KY = showAuthor && Ku.Author_URI !== "#" ? "<b rel=\"nofollow noreferrer\" href=\"" + Ku.Author_URI + "\"><span class=\"author-prof\"><i class=\"fa fa-user-circle\"></i>" + Ku.Author + "</span></b>" : "";
              var KA = showTimestamp ? "<span class=\"post-date\"><i class=\"fa fa-calendar-times-o\"></i>" + Ku.Date + "</span>" : "";
              switch (Kf) {
                case "slideshow":
                  KP += "<div class=\"Item notr " + (KH == 0 ? "is-active" : "") + "\" role=\"article\">";
                  KP += "<a title=\"" + Ku.Title + "\"  href=\"" + Ku.Link + "\" class=\"img-wrap PLHolder notr splide__slide\">";
                  KP += "<img class=\"notr\" title=\"" + Ku.Title + "\" alt=\"" + Ku.Title + "\" style=\"opacity:0\" data-slideshow-src=\"" + Ku.ImgUrl + "\"/>";
                  KP += "<div class=\"overlay\"></div><div class=\"details-on-img\">" + KY + KA + "</div>";
                  KP += KG === "random" || KG === "recent" ? "<span class=\"label-name\">" + Ku.Category + "</span>" : "";
                  KP += "</a>";
                  KP += "<h3 class=\"cate-link\"><a href=\"" + Ku.Link + "\">" + Ku.Title + "</a></h3>";
                  KP += "</div>";
                  break;
                case "carousel":
                  KP += "<div class=\"Item notr" + (Kf == "carousel" ? " splide__slide" : "") + "\" role=\"article\">";
                  KP += "<a title=\"" + Ku.Title + "\"  href=\"" + Ku.Link + "\" class=\"img-wrap PLHolder\">";
                  KP += "<img class=\"notr\" title=\"" + Ku.Title + "\" alt=\"" + Ku.Title + "\" style=\"opacity:0\" data-carousel-src=\"" + Ku.ImgUrl + "\"/>";
                  KP += Kf === "carousel" ? "<div class=\"overlay\"></div>" : "";
                  KP += KG === "random" || KG === "recent" ? "<span class=\"label-name\">" + Ku.Category + "</span>" : "";
                  KP += "</a>";
                  KP += "<h3 class=\"cate-link\"><a href=\"" + Ku.Link + "\">" + Ku.Title + "</a></h3>";
                  KP += "<div class=\"details\">" + KY + KA + "</div>";
                  KP += "</div>";
                  break;
                case "sided":
                  KP += "<div class=\"Item notr\" role=\"article\">";
                  KP += "<a title=\"" + Ku.Title + "\"  href=\"" + Ku.Link + "\" class=\"img-wrap PLHolder\">";
                  KP += "<img class=\"notr\" title=\"" + Ku.Title + "\" alt=\"" + Ku.Title + "\" style=\"opacity:0\" data-src=\"" + Ku.ImgUrl + "\"/>";
                  if (KH == 0) {
                    KP += "<div class=\"overlay\"></div><div class=\"details-on-img\">" + KY + KA + "</div>";
                  }
                  KP += KG === "random" || KG === "recent" ? "<span class=\"label-name\">" + Ku.Category + "</span>" : "";
                  KP += "</a>";
                  KP += "<h3 class=\"cate-link\"><a href=\"" + Ku.Link + "\">" + Ku.Title + "</a></h3>";
                  if (KH == 0) {
                    KP += "<p class=\"cate-snippet\">" + Ku.Snippet + "</p>";
                    KP += "<a class=\"read-more\" href=\"" + Ku.Link + "\">" + JumpButton + "</a>";
                    KP += "<div class=\"post-share\"><div class=\"share-icon\"><i class=\"fa fa-share-alt\"></i></div><ul class=\"share-menu\"><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + i + "&postID=" + Ku.PostId + "&target=facebook\"></a></li><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + i + "&postID=" + Ku.PostId + "&target=twitter\"></a></li><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + i + "&postID=" + Ku.PostId + "&target=pinterest\"></a></li></ul></div>";
                  } else {
                    KP += "<div class=\"details\">" + KY + KA + "</div>";
                  }
                  KP += "</div>";
                  break;
                case "cover":
                  KP += "<div class=\"Item notr\" role=\"article\">";
                  KP += "<a title=\"" + Ku.Title + "\"  href=\"" + Ku.Link + "\" class=\"img-wrap PLHolder\">";
                  KP += "<img class=\"notr\" title=\"" + Ku.Title + "\" alt=\"" + Ku.Title + "\" style=\"opacity:0\" data-src=\"" + Ku.ImgUrl + "\"/>";
                  if (KH == 0) {
                    KP += "<div class=\"overlay\"></div><div class=\"details-on-img\">" + KY + KA + "</div>";
                  }
                  KP += KG === "random" || KG === "recent" ? "<span class=\"label-name\">" + Ku.Category + "</span>" : "";
                  KP += "</a>";
                  KP += "<h3 class=\"cate-link\"><a href=\"" + Ku.Link + "\">" + Ku.Title + "</a></h3>";
                  if (KH == 0) {
                    KP += "<p class=\"cate-snippet\">" + Ku.Snippet + "</p>";
                    KP += "<a class=\"read-more\" href=\"" + Ku.Link + "\">" + JumpButton + "</a>";
                    KP += "<div class=\"post-share\"><div class=\"share-icon\"><i class=\"fa fa-share-alt\"></i></div><ul class=\"share-menu\"><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + i + "&postID=" + Ku.PostId + "&target=facebook\"></a></li><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + i + "&postID=" + Ku.PostId + "&target=twitter\"></a></li><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + i + "&postID=" + Ku.PostId + "&target=pinterest\"></a></li></ul></div>";
                  } else {
                    KP += "<div class=\"details\">" + KY + KA + "</div>";
                  }
                  KP += "</div>";
                  break;
                case "video":
                  KP += "<div class=\"Item notr\" role=\"article\">";
                  KP += "<a title=\"" + Ku.Title + "\"  href=\"" + Ku.Link + "\" class=\"img-wrap PLHolder\">";
                  KP += "<img class=\"notr\" title=\"" + Ku.Title + "\" alt=\"" + Ku.Title + "\" style=\"opacity:0\" data-src=\"" + Ku.ImgUrl + "\"/>";
                  KP += KG === "random" || KG === "recent" ? "<span class=\"label-name\">" + Ku.Category + "</span>" : "";
                  KP += "<div class=\"overlay\"></div><canvas id=\"bar\" width=\"50\" height=\"50\"></canvas><i class=\"fa fa-play\"></i>";
                  KP += "</a>";
                  KP += "<h3 class=\"cate-link\"><a href=\"" + Ku.Link + "\">" + Ku.Title + "</a></h3>";
                  KP += "<div class=\"details\">" + KY + KA + "</div>";
                  KP += "</div>";
                  break;
              }
              Kv.append(KP);
              Kv.setAttribute("role", "feed");
            }
          });
          if (KG === "random" && Kf !== "sided" && Kf !== "cover") {
            var KE = Kc.querySelectorAll(".Item");
            if (KE.length > 3) {
              KE.each(function (KT) {
                var KH = Math.round(Math.random() * KE.length);
                KH = KH != -1 && KH != KE.length ? KH : 0;
                var KP = Kc.querySelectorAll(".Item")[KH];
                Kv.append(KP);
              });
            }
          }
          if (Kf == "sided" || Kf == "cover") {
            LazyImages("data-src", null);
          }
          if (Kf === "slideshow") {
            Kv.prepend("<div class=\"slideshow-thumbs\"></div>");
            Kv.prepend("<div class=\"slideshow-thumbnail notr splide\"><div class=\"notr splide__track\"><div class=\"notr splide__list\"></div></div><div class=\"s-progress notr\"></div><div class=\"splide__autoplay hide\"><button class=\"splide__play\"></button><button class=\"splide__pause\"></button></div></div>");
            Kv.querySelectorAll(".Item").each(function (KT) {
              Kv.querySelector(".splide__list").append(KT.querySelector(".img-wrap"));
              Kv.querySelector(".slideshow-thumbs").append(KT);
            });
            K6(function () {
              var KT = Kv.querySelector(".s-progress");
              var KH = {
                "type": "fade",
                "rewind": true,
                "direction": BlogDirection,
                "perPage": 1,
                "arrows": false,
                "autoplay": true,
                "pagination": false,
                "resetProgress": false
              };
              var KP = new Splide(Kv.querySelector(".slideshow-thumbnail"), KH).mount();
              KP.on("autoplay:playing", function (Ku) {
                if (!KP.State.is(KP.STATES.MOVING)) {
                  KT.style.width = Ku * 100 + "%";
                }
              });
              KP.on("move", function (Ku) {
                Kv.querySelectorAll(".Item").each(function (KY, KA) {
                  if (KA == Ku) {
                    KY.addClass("is-active");
                  } else {
                    KY.removeClass("is-active");
                  }
                });
              });
              Kv.querySelectorAll(".Item").each(function (Ku, KY) {
                Ku.onclick = function (KA) {
                  var C0 = [...this.parentElement.children].indexOf(this);
                  KP.go(C0);
                };
                Ku.onmouseenter = function () {
                  Kv.querySelector(".splide__pause").dispatchEvent(new Event("click"));
                };
                Ku.onmouseleave = function () {
                  Kv.querySelector(".splide__play").dispatchEvent(new Event("click"));
                };
              });
              LazyImages("data-slideshow-src", null);
            });
          }
          if (Kf === "carousel") {
            K6(function () {
              var KT = Kc.closest(".cate").hasClass("one-col");
              var KH = {
                perPage: 3
              };
              var KP = {
                perPage: 2
              };
              var Ku = {
                perPage: 1
              };
              var KY = {
                "1100": KH,
                "860": KP,
                "640": Ku
              };
              var KA = {
                "type": "loop",
                "direction": BlogDirection,
                "perPage": KT ? 4 : 1,
                "perMove": 1,
                "autoplay": true,
                "breakpoints": KT ? KY : {}
              };
              new Splide(Kv.closest(".splide"), KA).on("mounted", function () {
                LazyImages("data-carousel-src", null, false, Kv);
              }).mount();
            });
          }
          if (Kf === "slideshow" || Kf === "cover" || Kf === "video") {
            if ((Kc.closest(".cate").hasClass("two-cols") || Kc.closest(".cate").hasClass("three-cols")) && !Kc.parentElement.hasClass("wide-right") && !Kc.parentElement.hasClass("wide-left")) {
              Kv.addClass("tight-width");
            } else {
              Kv.addClass("free-width");
            }
          }
          if (Kc.querySelectorAll(".Item b").length > 0) {
            Kc.querySelectorAll(".Item b").each(function (KT) {
              KT.before("<a rel=\"nofollow noreferrer\" href=\"" + KT.getAttribute("href") + "\">" + KT.innerHTML + "</a>");
              KT.remove();
            });
          }
          if (Kf == "video") {
            Kc.querySelectorAll(".Item").each(function (KT) {
              KT.onmouseenter = function (KH) {
                KJ(KH.target);
              };
            });
          }
        }
      }
    }
  }
  function KL() {
    AllowNew = typeof AllowNew != "undefined" ? AllowNew : false;
    var KR = _$("#item-comments");
    if (AllowComments) {
      var Kj = false;
      if (f) {
        var Kz = {
          "display": "none"
        };
        KR.css(Kz);
        var Kc = document.createElement("button");
        Kc.classList.add("toggle-comments");
        Kc.innerText = trans[40];
        Kc.onclick = Kv;
        KR.before(Kc);
      } else {
        window.addEventListener("scroll", function () {
          if (window.scrollY > KR.offset().top - 500 || !R) {
            Kv();
          }
        });
      }
    } else {
      KR.remove();
    }
    function Kv() {
      if (f) {
        if (KR.offsetParent) {
          KR.slideUp();
        } else {
          KR.slideDown();
        }
      }
      if (Kj) {
        return;
      }
      Kj = true;
      var Ks = X.split("-");
      Ks.each(function (Km) {
        if (Km === "blogger") {
          _$(".comments-bar").append("<button onclick='cTab(this)' role='tab' tabindex='0' data-bar='blogger'>" + trans[16] + " Blogger</button>");
          _$(".comments-tabs").append("<div class='notr blogger-tab' role='tabpanel'></div>");
          _$(".blogger-tab").append(_$("div.comments#comments"));
        }
        if (Km === "facebook") {
          _$(".comments-bar").append("<button onclick='cTab(this)' role='tab' data-bar='facebook'>" + trans[16] + " Facebook</button>");
          _$(".comments-tabs").append("<div role=\"tabpanel\" class=\"notr facebook-tab\"><div class=\"fb-comments\" data-href=\"" + CanUrl + "\" data-width=\"100%\" data-numposts=\"5\"></div></div>");
        }
        if (Km === "disqus") {
          _$(".comments-bar").append("<button onclick='cTab(this)' role='tab' data-bar='disqus'>" + trans[16] + " Disqus</button>");
          _$(".comments-tabs").append("<div role=\"tabpanel\" class=\"notr disqus-tab\"><div id=\"disqus_thread\"></div></div>");
        }
      });
      if (X.indexOf("blogger") == -1) {
        _$("#comments.comments").remove();
      }
      document.querySelectorAll(".comments-bar button")[0].dispatchEvent(new Event("click"));
      if (AllowNew) {
        _$("#item-comments").onclick = function (Km) {
          if (Km.target && Km.target.hasClass("comment-reply")) {
            var KN = Km.target;
            var KG = KN.getAttribute("data-comment-id");
            KN.closest(".comment").append(_$("#comment-editor"));
            _$("#comment-editor").src = _$("#comment-editor").src + "&parentID=" + KG;
          }
        };
      } else {
        _$(".comment-reply").each(function (Km) {
          Km.remove();
        });
      }
      function Kb(Km) {
        Km.innerHTML = Km.innerHTML.replace(/(https:).+?(jpeg|jpg|gif|png|\s)/g, function (KN) {
          return KN.match(/(https:).+?(jpeg|jpg|gif|png)/) ? "<img title=\"comment photo\" alt=\"comment photo\" src=\"" + KN + "\"/>" : KN;
        });
        Km.innerHTML = Km.innerHTML.replace(/(https:\/\/)(www.youtube|youtube|youtu)(.com\/|.be\/).+?(\s|<br.*?>|$)/g, function (KN) {
          if (KN.indexOf("watch?v") !== -1) {
            KN = KN.replace("watch?v=", "embed/");
          }
          if (KN.indexOf("youtu.be") !== -1) {
            KN = "https://www.youtube.com/embed/" + KN.split("be/")[1];
          }
          if (KN.indexOf("&amp;") !== -1) {
            KN = KN.replace("&amp;", "?");
          }
          return "<iframe title=\"youtube video\" src=\"" + KN + "\"></iframe>";
        });
      }
      function KS(Km) {
        console.clear();
        if (Km.length < 200) {
          _$("#loadmore").remove();
        }
        Km.forEach(function (KN, KG) {
          var Kf = new DOMParser().parseFromString(_$(".comments-list > ul > li.comment:last-of-type").outerHTML, "text/html").querySelector("li");
          var KF = Kf.querySelector(".comment-replies ul");
          var KV = Kf.querySelector(".avatar-image-container img");
          if (KF) {
            KF.innerHTML = "";
          }
          var KU = KN.authorPhoto ? KN.authorPhoto.thumbUrl : KN.authorAvatarSrc.indexOf("blank") != -1 ? AltAuthor : KN.authorAvatarSrc;
          KU = KN.inReplyTo ? resizeImg(KU, 40, 40) : resizeImg(KU, 72, 72);
          Kf.setAttribute("id", KN.anchorName);
          Kf.querySelector(".user a").setAttribute("href", KN.authorUrl);
          Kf.querySelector(".user a").textContent = KN.author;
          KV.setAttribute("src", KU);
          KV.setAttribute("alt", KN.author + "'s avatar");
          KV.setAttribute("title", KN.author + "'s avatar");
          Kf.querySelector(".com-date").setAttribute("data-date", KN.timestampAbs);
          Kf.querySelector(".com-date").textContent = KN.timestamp;
          Kf.querySelector(".comment-content").innerHTML = KN.body;
          if (D) {
            Kb(Kf.querySelector(".comment-content"));
          }
          Kf.querySelector(".comment-reply").setAttribute("data-comment-id", KN.id);
          Kf.querySelector(".blog-admin").setAttribute("class", "blog-admin " + KN.commentAuthorClass);
          Kf.querySelector(".blog-admin").querySelector("a").setAttribute("href", KN.deleteUrl);
          if (KN.inReplyTo) {
            Kf.querySelector(".comment-reply").parentElement.remove();
            let Kr = _$("#c" + KN.inReplyTo + " .comment-replies ul");
            if (Kr.length) {
              Kr = Kr[0];
            }
            if (Kr.found()) {
              Kr.append(Kf.innerHTML);
            }
          } else if (!_$("#" + KN.anchorName).found()) {
            _$(".comments-list > ul").append(Kf.outerHTML);
          }
        });
      }
      _$(".comments-show button").onClick(function () {
        var Km = this;
        var KG = _$(".comment-replies");
        Km.siblings().each(function (Kf) {
          Kf.removeClass("active");
        });
        Km.addClass("active");
        if (Km.hasClass("comments-only")) {
          KG.each(function (Kf) {
            Kf.slideUp();
          });
        } else {
          KG.each(function (Kf) {
            Kf.slideDown();
          });
        }
      });
      if (AllowNew) {
        _$(".go-respond").addEventListener("click", function () {
          if (_$("#comment-editor").src.indexOf("parentID") !== -1) {
            _$("#comment-editor").src = _$("#comment-editor").src.replace(/\&parent.*/, "");
            _$("#comments-respond").append(_$("#comment-editor"));
          }
        });
      }
      _$(".noimg").each(function (Km) {
        Km.after("<img title=\"user avatar\" alt=\"user avatar\" data-src=\"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiurdk3yOa6ejzSj6V_Az6QnHZ6Yjyadzs5gGXgcMIHVH562zRba02tKfl-uoFioQRY7lbSw3ODQ7mYq0_tu1wt8zSvn2NApgwSpeIpwdQ8kd5kWIvn46gnlos3IgDrlgKRwXBN6dWiWxo/s72-c-e90-rw/Unknown.png\">");
        Km.remove();
      });
      if (D) {
        _$(".comment-content").each(function (Km) {
          Kb(Km);
        });
      }
      _$("#loadmore").onClick(function () {
        _WidgetManager._HandleControllerResult = function (Km, KN, KG) {
          KS(KG.comments);
        };
        $getScript(location.pathname + "?action=getComments&widgetId=Blog1&widgetType=Blog&responseType=js&postId=" + itemId + "&publishedMin=" + _$(".com-date")[_$(".com-date").length - 1].getAttribute("data-date") + "&xssi_token=" + window.__wavt, function () {});
      });
    }
    window.cTab = function (Ks) {
      var Kb = Ks.getAttribute("data-bar");
      Ks.siblings().each(function (KG) {
        KG.removeClass("active");
      });
      Ks.addClass("active");
      _$(".comments-tabs").children.each(function (KG) {
        KG.slideUp(500, function () {
          _$("." + Kb + "-tab").slideDown(500);
        });
      });
      _$(".avatar-image-container img").each(function (KG) {
        if (KG.src.indexOf("blogger_logo_round") != -1) {
          KG.src = KG.src.replace(/\/img\/.+?\//, "/img/");
        }
      });
      if (Kb == "blogger" && !T) {
        T = true;
        if (AllowNew) {
          _$("#comment-editor").src = _$("#comment-editor").getAttribute("data-src");
          var KS = _$("#comments-respond noscript").textContent.match(/('|")http.*?\/\/.*?(\'|\")/);
          KS = KS[0].replace(/('|")/g, "");
          $getScript(KS, function (KG) {
            BLOG_CMT_createIframe("https://www.blogger.com/rpc_relay.html");
            _$("#comments-respond").append(_$("#comment-editor"));
          });
        }
      }
      if (Kb == "facebook" && !H) {
        var Km;
        switch (BlogLang) {
          case "ar":
            Km = "ar_AR";
            break;
          case "es":
            Km = "es_LA";
            break;
          case "en":
            Km = "en_US";
            break;
          default:
            Km = BlogLang.indexOf("_") != -1 ? BlogLang : BlogLang.toLowerCase() + "_" + BlogLang.toUpperCase();
        }
        $getScript("//connect.facebook.net/" + Km + "/sdk.js", function () {
          H = true;
          var KG = {
            appId: d
          };
          KG.version = "v3.3";
          FB.init(KG);
          FB.XFBML.parse();
        });
      }
      if (Kb == "disqus") {
        if (P) {
          var KN = {
            "reload": true
          };
          DISQUS.reset(KN);
        } else {
          $getScript("//" + W + ".disqus.com/embed.js", function () {
            P = true;
          });
        }
      }
    };
  }
  function Kx() {
    _$(".separator a:not([href*=\"bp.blogspot.com\"]):not([href*=\"googleusercontent\"])").each(function (KR) {
      KR.onclick = function (Kj) {
        if (KR.getAttribute("target") == "_blank") {
          window.open(KR.href);
        } else {
          location.href = KR.href;
        }
      };
    });
    if (V && isPost) {
      _$(".topic-author").append("<a class=\"author-profile\" title=\"" + AuthorName + " profile\" href=\"" + V + "?name=" + encodeURI(AuthorName) + "\">" + trans[19] + "</a>");
    }
    if (F) {
      _$(".post-body a[href]:not([href^=\"https://twitter.com/\"])").each(function (KR) {
        var Kj = KR.href;
        var Kz = y ? y.split(",").filter(function (Ks) {
          return Kj.indexOf(Ks) != -1;
        }) : [];
        var Kc = new URL(Kj);
        var Kv = new URL(location);
        if (Kc.hostname != Kv.hostname && !Kc.hostname.includes("bp.blogspot.com") && !Kc.hostname.includes("googleusercontent.com") && Kz.length == 0 && !KR.closest(".premium")) {
          if (N) {
            KR.removeAttribute("href");
            KR.onclick = function (Ks) {
              Kt(Kj);
            };
          } else {
            KR.setAttribute("href", F + "?link=" + encodeURIComponent(Kj));
          }
        }
      });
    }
    _$(".post-body a").each(function (KR) {
      if (!KR.closest("blockquote") && !KR.closest("#redirect-page") && !KR.closest(".separator") && !KR.hasClass("pr-but") && !KR.hasClass("sq-button")) {
        KR.addClass("d-link");
      }
    });
  }
  function KX() {
    _$(".edit-post").each(function (KF) {
      var KV = m ? "https://www.blogger.com/blogger.g?blogID=" + i + "#editor/target=" + (isPost ? "post" : "page") + ";" + (isPost ? "postID" : "pageID") + "=" + itemId : "https://blogger.com/blog/" + (isPost ? "post" : "page") + "/edit/" + i + "/" + itemId;
      KF.append("<a href='" + KV + "' rel='nofollow noreferrer' target='_blank' title='Edit'>تعديل</a>");
    });
    var KR = _$(".post-contact-form");
    if (KR.found()) {
      KR.after(_$("#ContactForm93"));
    }
    _$("pre.sq-code").each(function (KF) {
      var KV = KF.innerHTML.indexOf("\n") != -1 ? KF.innerHTML.split("\n") : KF.innerHTML.split("<br>");
      var KU = new String();
      var Kr = new String();
      var Kh;
      for (Kh = 0; Kh < KV.length; Kh++) {
        if (Kh !== KV.length && KV[Kh] !== "") {
          KU += "<span>" + (Kh + 1) + "</span>";
        }
        Kr += "<code>" + KV[Kh] + "</code>";
      }
      KF.innerHTML = "<div class=\"code-sn\">" + KU + "</div><pre class=\"sq-source\">" + Kr + "</div>";
    });
    var Kj;
    if (L.indexOf("?") !== -1 && L.split("&") !== -1 && localStorage.getItem("lock-" + itemId) === "true") {
      var Kz = L.split("?")[1].split("&");
      var Kc = Kz.filter(function (KF) {
        return KF.split("=")[0] === "id";
      })[0];
      var Kv = Kz.filter(function (KF) {
        return KF.split("=")[0] === "referrer";
      })[0];
      var Ks = Kv !== undefined ? Kv.split("=")[1] : undefined;
      var Kb = Kc !== undefined ? Kc.split("=")[1] : undefined;
      var KS = document.referrer;
      if (Kb == itemId && (Ks == "facebook" || Ks == "twitter") && (KS.indexOf("facebook.com") !== -1 || KS.indexOf("t.co") !== -1)) {
        localStorage.setItem("lock-" + itemId, "false");
        Kj = "false";
      } else {
        localStorage.setItem("lock-" + itemId, "true");
        Kj = "true";
      }
    } else if (localStorage.getItem("lock-" + itemId) === "false") {
      Kj = "false";
    } else {
      localStorage.setItem("lock-" + itemId, "true");
      Kj = "true";
    }
    var Km = _$(".premium");
    if (Km.found()) {
      if (Kj === "true") {
        _$(".post-body .premium").each(function (KF) {
          var KV;
          var KU = "https://www.facebook.com/sharer.php?u=" + encodeURIComponent(CanUrl + "?id=" + itemId + "&referrer=facebook");
          var Kr = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(CanUrl + "?id=" + itemId + "&referrer=twitter");
          KV = "<h6 class=\"prm-title\">" + trans[17] + "</h6>";
          KV += "<span class=\"prem-desc\">" + trans[18] + "</span>";
          KV += "<a title=\"share to Facebook\" target=\"blank\" href=\"" + KU + "\" class=\"pr-but pr-but-facebook\">Facebook</a>";
          KV += "<a title=\"tweet\" target=\"blank\" href=\"" + Kr + "\" class=\"pr-but pr-but-twitter\">Twitter</a>";
          KF.style.display = "block";
          KF.innerHTML = KV;
        });
      } else if (Kj === "false") {
        _$(".premium").removeClass("premium");
      }
    }
    var KN = Array.from(_$(".post-body *")).concat(_$(".post-body")).map(KF => Array.from(KF.childNodes)).flat();
    var KG = KN.filter(KF => KF.nodeType === 8 && KF.textContent.startsWith("video") && KF.textContent.includes("iframe"));
    KG.forEach(function (KF) {
      var KV = KF.previousElementSibling || KF.parentNode;
      window.addEventListener("scroll", KU);
      function KU() {
        if (window.scrollY >= KV.offset().top - 500) {
          Kf(KF);
          window.removeEventListener("scroll", KU);
        }
      }
    });
    function Kf(KF) {
      var KV = document.createElement("div");
      KV.addClass("video-wrapper");
      KV.innerHTML = KF.textContent.replace("video", "").trim();
      KF.after(KV);
      KF.remove();
    }
  }
  function Kd() {
    if (_$("#authors-page").found()) {
      var KR = new URLSearchParams(location.search);
      if (KR.get("name")) {
        window.Aup_Posts_Content = new String();
        window.Aup_Name = decodeURI(KR.get("name")).replace(/\+/g, " ");
        window.Aup_Info = AuthorsInfo.filter(function (Kz) {
          return Kz.name == Aup_Name;
        })[0];
        if (!window.Aup_Info) {
          return;
        }
        window.Aup_avatar = Aup_Info.avatar || AltAuthor;
        Aup_avatar = resizeImg(Aup_avatar, 160, 160, "-cc");
        var Kj;
        document.title = Aup_Name;
        _$(".post-body").innerHTML = "<div class=\"aup-wrapper\"><div class=\"aup-head\"><div class=\"aup-photo\" style=\"background-image:url(" + Aup_avatar + ")\"></div></div><h1 class=\"aup-name\">" + Aup_Name + "</h1><span class=\"aup-title\"></span><p class=\"aup-about\"><p><div class=\"aup-social social\"></div><div class=\"aup-posts\" role=\"feed\"></div>";
        if (Aup_Info) {
          if (Aup_Info.about) {
            _$(".aup-about").innerHTML = Aup_Info.about;
          }
          if (Aup_Info.rank) {
            _$(".aup-title").innerHTML = "<b>" + Aup_Info.rank + "</b>";
          }
          if (Object.keys(Aup_Info.links).length > 0) {
            for (site in Aup_Info.links) {
              if (r.indexOf(site) != -1) {
                Kj = "<a class=\"fa fa-" + site + "\" href=\"" + Aup_Info.links[site] + "\"><svg><use href=\"#ic-" + site + "\"/></svg></a>";
              } else {
                Kj = "<a class=\"fa fa-" + site + "\" href=\"" + Aup_Info.links[site] + "\"></a>";
              }
              _$(".aup-social").append(Kj);
            }
          }
        }
        if (FeedEnabled && !isPrivate) {
          KW();
        }
      } else if (FeedEnabled && !isPrivate) {
        KB();
      }
    }
  }
  function KW() {
    if (u === feed_count) {
      var KR = _$(".timeline-month");
      _$(".timeline-item").each(function (Kz) {
        var Kc = KR.filter(function (Kv) {
          return Kv.getAttribute("data-month") == Kz.getAttribute("data-month");
        })[0];
        Kc.append(Kz);
      });
      KR.each(function (Kz, Kc) {
        if (Kz.querySelector(".timeline-item")) {
          Kz.querySelectorAll(".timeline-month-name,.timeline-point").each(function (Kv) {
            Kv.removeClass("hide");
          });
        } else {
          Kz.remove();
        }
      });
    } else {
      var Kj = b || S ? "https://www.blogger.com/feeds/" + i : "/feeds";
      $getJSONP(Kj + "/posts/summary?alt=json-in-script&max-results=150&start-index=" + (u * 150 + 1), function (Kz) {
        Kz.feed.entry.each(function (Kc, Kv) {
          if (!Kc.app$control) {
            var Ks = K4(Kc);
            if (Ks.Author === Aup_Name) {
              Aup_Posts_Content += "<div class=\"timeline-month\" data-month=\"" + K3(Ks.FullDate) + " " + Ks.FullDate.substr(0, 4) + "\">";
              Aup_Posts_Content += "<b class=\"timeline-point hide\"></b>";
              Aup_Posts_Content += "<div class=\"timeline-month-name hide\"><span>" + K3(Ks.FullDate) + " " + Ks.FullDate.substr(0, 4) + "</span></div>";
              Aup_Posts_Content += "<div class=\"timeline-item\" role=\"article\" data-month=\"" + K3(Ks.FullDate) + " " + Ks.FullDate.substr(0, 4) + "\">";
              Aup_Posts_Content += "<span class=\"timeline-date\">";
              Aup_Posts_Content += "<b>" + Ks.FullDate.substr(8, 2) + "</b>";
              Aup_Posts_Content += "<i>" + K3(Ks.FullDate) + " " + Ks.FullDate.substr(0, 4) + "</i>";
              Aup_Posts_Content += "</span>";
              Aup_Posts_Content += "<b class=\"timeline-point\"></b>";
              Aup_Posts_Content += "<div class=\"timeline-post\">";
              Aup_Posts_Content += "<img class=\"timeline-thumb\" src=\"" + resizeImg(Ks.ImgUrl, 72, 72, "-cc") + "\"/>";
              Aup_Posts_Content += "<a class=\"timeline-title\" href=\"" + Ks.Link + "\" title=\"" + Ks.Title + "\">" + Ks.Title + "</a>";
              Aup_Posts_Content += "</div>";
              Aup_Posts_Content += "</div>";
              Aup_Posts_Content += "</div>";
            }
          }
        });
        _$(".aup-posts").append(Aup_Posts_Content);
        Aup_Posts_Content = "";
        u += 1;
        KW();
      });
    }
  }
  function KB() {
    if (u === feed_count) {
      _$(".post-body").innerHTML = "<div class=\"blog-authors\"></div>";
      AuthorsInfo.each(function (KR, Kj) {
        var Kz = new String();
        var Kc = KR.avatar || AltAuthor;
        var Kv;
        var Ks = location.pathname + "?name=" + KR.name;
        Kz += "<div class=\"blog-author-card\" data-blog-author=\"" + KR.name + "\">";
        Kz += "<b class=\"blog-author-name\">" + KR.name + "</b>";
        Kz += "<span class=\"blog-author-avatar\" style=\"background-image:url(" + resizeImg(Kc, 120, 120, "-cc") + ")\"></span>";
        Kz += KR.rank ? "<b class=\"blog-author-rank\">" + KR.rank + "</b>" : "";
        Kz += "<div class=\"blog-author-social\"></div>";
        Kz += "<b class=\"blog-author-count\">" + KR.count + " " + trans[15] + "</b>";
        Kz += "<a href=\"" + Ks + "\" class=\"blog-author-link\">" + trans[19] + "</a>";
        Kz += "</div>";
        _$(".blog-authors").append(Kz);
        if (KR.links) {
          for (site in KR.links) {
            if (r.indexOf(site) != -1) {
              Kv = "<a class=\"fa fa-" + site + "\" href=\"" + KR.links[site] + "\"><svg><use href=\"#ic-" + site + "\"/></svg></a>";
            } else {
              Kv = "<a class=\"fa fa-" + site + "\" href=\"" + KR.links[site] + "\"></a>";
            }
            _$("[data-blog-author=\"" + KR.name + "\"] .blog-author-social").append(Kv);
          }
        }
      });
    } else {
      $getJSON("/feeds/posts/summary?alt=json&max-results=150&start-index=" + (u * 150 + 1), function (KR) {
        KR.feed.entry.each(function (Kj, Kz) {
          var Kc = AuthorsInfo.filter(function (Ks) {
            return Ks.name === Kj.author[0].name.$t.toString();
          })[0];
          if (Kc) {
            Kc.count += 1;
          } else {
            var Kv = {
              "name": Kj.author[0].name.$t,
              "avatar": Kj.author[0].gd$image ? Kj.author[0].gd$image.src : AltAuthor,
              "count": 1,
              "provided": false
            };
            AuthorsInfo.push(Kv);
          }
        });
        u += 1;
        KB();
      });
    }
  }
  function Ke() {
    if (_$("#archive-page").found()) {
      Object.keys(h).each(function (Kj, Kz) {
        var Kc = h[Kj];
        var Kv = Math.ceil(Kc / 150);
        var Ks = decodeURI(Kj);
        _$(".post-body").append("<div class=\"arp-label\" id=\"l-" + Kz + "\"><div class=\"arp-label-name\"><b>" + Ks + "</b><span class=\"arp-label-count\">" + Kc + " <u>" + trans[15] + "</u></span></div></div>");
        if (FeedEnabled && !isPrivate) {
          KR(Kz, 0, Ks, Kv);
        }
      });
      function KR(Kj, Kz, Kc, Kv) {
        var Ks = b || S ? "https://www.blogger.com/feeds/" + i : "/feeds";
        $getJSONP(Ks + "/posts/summary/-/" + encodeURIComponent(Kc) + "?alt=json-in-script&max-results=150&start-index=" + (Kz * 150 + 1), function (Kb) {
          Kb.feed.entry.each(function (KS) {
            if (!KS.app$control) {
              var Km = K4(KS);
              var KN = new String();
              KN += "<div class=\"arp-item\">";
              KN += "<img class=\"arp-thumb\" src=\"" + resizeImg(Km.ImgUrl, 72, 72) + "\"/>";
              KN += "<span class=\"arp-date\">" + Km.Date + "</span>";
              if (KS.category[1] !== undefined) {
                KN += "<span class=\"arp-cate\">" + KS.category.filter(function (KG) {
                  return KG.term != Kc;
                })[0].term + "</span>";
              }
              KN += "<a class=\"arp-link\" href=\"" + Km.Link + "\">" + Km.Title + "</a>";
              KN += "</div>";
              _$("#l-" + Kj).append(KN);
            }
          });
          Kz = Kz + 1;
          if (Kz != Kv) {
            KR(Kj, Kz, Kc, Kv);
          }
        });
      }
    }
  }
  function Kt(KR) {
    var Kj;
    if (N) {
      _$("body").append("<div class=\"redirect-modal notr\"><div class=\"modal-overlay\">" + _$(".Loading").innerHTML + "<div class=\"modal-content notr\"><div class=\"modal-head\"><div class=\"modal-title\"></div><span class=\"modal-close fa fa-times\"></i></div><div class=\"modal-body\"></div></div></div></div>");
      _$(".redirect-modal").fadeIn();
      _$("body").setAttribute("data-overflow", false);
      $load(F, function (Kb) {
        var KS = new DOMParser().parseFromString(Kb, "text/html");
        _$(".modal-body").innerHTML = KS.querySelector(".post-body").innerHTML;
        _$(".modal-title").textContent = KS.querySelector(".entry-title").textContent;
        Kv(KR);
        KS.querySelectorAll(".post-body ins").each(function () {
          (adsbygoogle = window.adsbygoogle || []).push({});
        });
      });
    } else {
      if (_$("#redirect-page").found()) {
        var Kz = new URLSearchParams(location.search);
        KR = Kz.get("link") ? decodeURIComponent(Kz.get("link")) : sessionStorage.link;
        Kz["delete"]("link");
        var Kc = Kz.toString() ? "?" + Kz.toString() : "";
        if (KR != "undefined") {
          sessionStorage.link = KR;
          history.replaceState("", "", location.origin + location.pathname + Kc);
          Kv(KR);
        }
      }
    }
    document.body.onclick = function (Kb) {
      if (Kb.target && Kb.target.hasClass("modal-close")) {
        Ks();
      }
    };
    function Kv(Kb) {
      var KS = new String();
      var Km = O;
      KS += "<div class=\"cLoaderWrap\">";
      KS += "<svg id=\"cLoaderSVG\" width=\"120\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\">";
      KS += "<circle class=\"cPath\" r=\"70\" cy=\"100\" cx=\"100\"/>";
      KS += "<circle class=\"cLoader\" r=\"70\" cy=\"100\" cx=\"100\"/>";
      KS += "</svg>";
      KS += "<b class=\"cCount\">" + O + "</b>";
      KS += "</div>";
      KS += "<div class=\"cButton\">";
      KS += "<a target=\"_blank\" class=\"cLink disabled sq-button xl\" rel=\"nofollow noreferrer\">" + trans[24] + "</a>";
      KS += "</div>";
      document.querySelector("#redirect-page").innerHTML = KS;
      var KN = parseInt(getComputedStyle(_$(".cLoader")).strokeDasharray);
      Kj = setInterval(KG, 1e3);
      function KG() {
        if (Km == 0) {
          _$("#cLoaderSVG").after("<i class=\"fa fa-check cLoaded zoom\"></i>");
          _$(".cLoader").addClass("done");
          _$(".cLink").removeClass("disabled");
          _$(".cLink").textContent = trans[25];
          clearInterval(Kj);
          if (Kb) {
            _$(".cLink").setAttribute("href", Kb);
            if (Z) {
              location.assign(Kb);
            }
          }
        } else {
          _$(".cCount").addClass("zoom");
          setTimeout(function () {
            _$(".cCount").removeClass("zoom");
          }, 800);
          _$(".cCount").textContent = Km < 10 ? "0" + Km : Km;
          Km--;
          _$(".cLoader").style["stroke-dashoffset"] = KN - (O - Km) * (KN / O);
        }
      }
      window.onblur = function () {
        clearInterval(Kj);
      };
      window.onfocus = function () {
        Kj = Km != 0 ? setInterval(KG, 1e3) : undefined;
      };
    }
    function Ks() {
      clearInterval(Kj);
      _$(".redirect-modal").fadeOut(400, function (Kb) {
        Kb.remove();
        _$("body").setAttribute("data-overflow", true);
      });
    }
  }
  function Ka() {
    var KR = AuthorsInfo.filter(function (KU) {
      return KU.name === AuthorName;
    })[0];
    var Kj = KR ? KR.provided : false;
    var Kz = KR && Kj ? KR : AuthorsInfo;
    var Kc = Ky();
    var Kv = Kz["top-ad"] ? Kz["top-ad"] : AuthorsInfo["top-ad"] ? AuthorsInfo["top-ad"] : null;
    var Ks = Kz["mid-ad"] ? Kz["mid-ad"] : AuthorsInfo["mid-ad"] ? AuthorsInfo["mid-ad"] : null;
    var Kb = Kz["bot-ad"] ? Kz["bot-ad"] : AuthorsInfo["bot-ad"] ? AuthorsInfo["bot-ad"] : null;
    var KS = Kz["str-ad"] ? Kz["str-ad"] : AuthorsInfo["str-ad"] ? AuthorsInfo["str-ad"] : null;
    var Km = Kz["pgn-ad"] ? Kz["pgn-ad"] : AuthorsInfo["pgn-ad"] ? AuthorsInfo["pgn-ad"] : null;
    var KN = Kz["rlt-ad"] ? Kz["rlt-ad"] : AuthorsInfo["rlt-ad"] ? AuthorsInfo["rlt-ad"] : null;
    var KG = Kz["cmt-ad"] ? Kz["cmt-ad"] : AuthorsInfo["cmt-ad"] ? AuthorsInfo["cmt-ad"] : null;
    var Kf = Kz["end-ad"] ? Kz["end-ad"] : AuthorsInfo["end-ad"] ? AuthorsInfo["end-ad"] : null;
    var KF = Kz["spc-ad"] ? Kz["spc-ad"] : AuthorsInfo["spc-ad"] ? AuthorsInfo["spc-ad"] : null;
    (function KU() {
      if (KF) {
        var Kr = Array.from($(".post-body *")).find(Kl => Kl.innerText == "$$");
        if (Kr) {
          Kr.outerHTML = "<div class=\"spc-ad\"></div>";
          _$(".spc-ad").each(function (Kl) {
            Kl.appendElements(KF, "append");
          });
        }
      }
      if (PagedPost && Km) {
        _$(".post-pages").after("<div class=\"article-ad pgn-ad\"></div>");
        _$(".pgn-ad").appendElements(Km, "append");
      }
      if (KS) {
        _$(".str-ad").appendElements(KS, "append");
      }
      if (Kv) {
        _$(".top-ad").appendElements(Kv, "append");
      }
      if (Kb) {
        _$(".bot-ad").appendElements(Kb, "append");
      }
      if (KN) {
        _$(".rlt-ad").appendElements(KN, "append");
      }
      if (KG) {
        _$(".cmt-ad").appendElements(KG, "append");
      }
      if (Kf) {
        _$(".end-ad").appendElements(Kf, "append");
      }
      if (v && !PagedPost) {
        var Kh = _$(".post-body").querySelectorAll("h2,h3,h4,h5,h6");
        if (Kh.length > 0 && Ks) {
          Kh.each(function (Kl) {
            Kl.appendElements("<div class=\"Middle-Ad\">" + Ks + "</div>", "before");
          });
        } else {
          if (Ks) {
            Kc.appendElements("<div class=\"Middle-Ad\">" + Ks + "</div>", "after");
          }
        }
      } else {
        if (PagedPost) {} else {
          if (Ks) {
            Kc.appendElements("<div class=\"Middle-Ad\">" + Ks + "</div>", "after");
          }
        }
      }
      setTimeout(function () {
        _$("ins.adsbygoogle:empty").each(function (Kl) {
          (adsbygoogle = window.adsbygoogle || []).push({});
        });
      }, 1e3);
    })();
    if (KR && Kj) {
      var KV;
      _$(".topic-author .clear-left").after(KR.rank ? "<b class='author-rank'>" + KR.rank + "</b>" : "");
      _$(".topic-author .author-about").innerHTML = KR.about ? KR.about : "";
      Object.keys(KR.links).each(function (Kr) {
        if (r.indexOf(Kr) != -1) {
          KV = "<a target=\"_blank\" title=\"" + Kr + "\" class=\"fa fa-" + Kr + "\" href=\"" + KR.links[Kr] + "\"><svg><use href=\"#ic-" + Kr + "\"></a></svg></a>";
        } else {
          KV = "<a target=\"_blank\" title=\"" + Kr + "\" class=\"fa fa-" + Kr + "\" href=\"" + KR.links[Kr] + "\"></a>";
        }
        _$(".topic-author .social").append(KV);
      });
      _$(".topic-author").style.display = "block";
    }
  }
  function KO(KR, Kj) {
    Kj = Kj - 10;
    if (KR.offsetWidth < Kj) {
      return KO(KR.parentElement, Kj);
    } else {
      var Kz = document.createElement("div");
      var Kc = {
        "width": "100%"
      };
      Kz.css(Kc);
      KR.after(Kz);
      return Kz.offsetWidth < Kj ? KO(KR.parentElement, Kj) : (Kz.remove(), KR);
    }
  }
  function Ky() {
    let KR = _$(".post-body");
    let Kj = KR.offsetWidth;
    let Kz;
    let Kc;
    KR.querySelectorAll("pre *,ins *,iframe *, blockquote:not(.twitter-tweet) *,ul *,ol *,.separator *,br,table, table *,.ContactForm, .ContactForm *,.premium, .premium *,h2,h3,h4,h5,h2 *, h3 *, h4 *, h5 *, .Middle-Ad, .Middle-Ad *").each(function (Kv) {
      Kv.addClass("ns");
    });
    Kz = KR.querySelectorAll("*:not(.ns)");
    Kc = Kz[Math.floor(Kz.length / 2)];
    Kc = KO(Kc, Kj);
    return Kc;
  }
  function KZ() {
    _$(".post-body blockquote:not(.twitter-tweet)").each(function (KR) {
      var Kj = "<div class=\"quote-share\">";
      Kj += "<a target=\"_blank\" title=\"share to Facebook\" rel=\"nofollow noreferrer\" href=\"https://www.facebook.com/sharer/sharer.php?v=4&u=" + L + "&quote=" + KR.textContent + "\" class=\"quote-fb\"><i class=\"fa fa-facebook\"></i></a>";
      if (KR.textContent.length + 23 > 280) {
        var Kz = KR.textContent.length + 23 - 280;
        var Kc = KR.textContent.substr(0, KR.textContent.length - Kz - 5) + "...";
      } else {
        Kc = KR.textContent;
      }
      Kj += "<a target=\"_blank\" title=\"tweet\" rel=\"nofollow noreferrer\" href=\"https://twitter.com/intent/tweet?url=" + L + "&text=" + Kc + " :\" class=\"quote-tw\"><i class=\"fa fa-twitter\"></i></a>";
      KR.append(Kj);
    });
  }
  function Kk() {
    _$(".zooming i").onClick(function (KR) {
      var Kj = KR.target;
      var Kz = _$(".post-body, .post-body *:not(br)");
      Kz.each(function (Kc) {
        var Kv = parseInt(Kc.css("fontSize"));
        if (Kj.hasClass("fa-plus")) {
          Kc.style.fontSize = Kv + 2 + "px";
        } else if (Kj.hasClass("fa-minus")) {
          Kc.style.fontSize = Kv - 2 + "px";
        }
      });
    });
  }
  function KD() {
    navExcuted = false;
    window.addEventListener("scroll", function () {
      if (window.scrollY + window.innerHeight > _$(".topic-nav").offset().top && !navExcuted || !R && !navExcuted) {
        navExcuted = true;
        _$(".next,.prev").each(function (KR) {
          var Kj = KR.href;
          var Kz = KR.hasClass("prev") ? trans[21] : trans[20];
          $load(Kj, function (Kc) {
            Kc = new DOMParser().parseFromString(Kc, "text/html");
            var Kv = Kc.querySelector("meta[name='postPoster']").getAttribute("content");
            Kv = Kv !== "" ? Kv : AltImage;
            Kv = resizeImg(Kv, Math.ceil(KR.offsetWidth - 20), 160);
            KR.append("<span class=\"next-txt\">" + Kz + "</span>");
            KR.append("<b>" + Kc.querySelector("meta[name='postTitle']").getAttribute("content") + "</b>");
            KR.append("<div class=\"topic-img\"><img src=\"" + Kv + "\"></div>");
          });
        });
      }
    });
  }
  function Kq() {
    var KR = false;
    window.addEventListener("scroll", function () {
      if (window.scrollY + window.innerHeight > _$(".post-outer").offset().top && !KR || !R && !KR) {
        KR = true;
        let Kz = Array.from(document.querySelectorAll(".categ a:nth-of-type(n+2)"), function (KN, KG) {
          return KN.textContent;
        });
        let Kc = [itemId];
        let Kv = Array.from(_$(".post-body *")).find(KN => KN.innerText == "<->");
        let Ks = Kv ? Kv : k == "end" ? _$(".post-body") : Ky();
        let Kb = 0;
        let KS;
        Ks.after("<div class=\"see-also\"><strong>" + trans[36] + "</strong><ul></ul></div>");
        if (Kv) {
          Kv.remove();
        }
        if (Kz.length == 1) {
          KS = "/feeds/posts/summary/-/" + Kz[0] + "?alt=json&max-results=6";
        } else {
          if (Kz.length > 1) {
            var Kj = Kz.filter(function (KN) {
              return KN.indexOf(" ") == -1;
            });
            if (Kj) {
              KS = "/feeds/posts/summary/?category=" + Kj.join(",") + "&alt=json&max-results=6";
            } else {
              KS = "/feeds/posts/summary/-/" + Kz[0] + "?alt=json&max-results=6";
            }
          } else {
            Kb = 10;
            KS = "/feeds/posts/summary/?alt=json&max-results=6";
          }
        }
        Km(KS);
        function Km(KN) {
          Kb++;
          $getJSON(KN, function (KG) {
            if (KG.feed.entry != undefined) {
              KG.feed.entry.each(function (KF, KV) {
                var KU = K4(KF);
                if (Kc.indexOf(KU.PostId) == -1) {
                  _$(".see-also ul").append("<li><a href=\"" + KU.Link + "\" title=\"" + KU.Title + "\">" + KU.Title + "</a></li>");
                  Kc.push(KU.PostId);
                }
              });
              var Kf = document.querySelectorAll(".see-also li");
              if (Kf.length < 5 && PostCount > 5 && Kb < 2 && Kz.length > 1) {
                Kz = Kz.filter(function (KF) {
                  return KF.indexOf(" ") == -1;
                }).join("|label:");
                Km("/feeds/posts/summary/?q=label:" + Kz + "&alt=json&max-results=6");
              }
            }
          });
        }
      }
    });
  }
  function Kw() {
    relExcuted = false;
    window.onscroll = function () {
      if (window.scrollY + window.innerHeight > _$(".topic-related").offset().top && !relExcuted || !R && !relExcuted) {
        relExcuted = true;
        var KR;
        var Kj;
        var Kz;
        var Kc = [itemId];
        var Kv = b || S ? "https://www.blogger.com/feeds/" + i : "/feeds";
        var Kb = Array.from(document.querySelectorAll(".categ a:nth-of-type(n+2)"), KF => KF.textContent);
        var KS = 0;
        var Km;
        if (FeedEnabled && !isPrivate) {
          if (Kb.length == 1) {
            Kj = Kv + "/posts/summary/-/" + Kb[0] + "?alt=json-in-script&max-results=" + a;
          } else {
            if (Kb.length > 1) {
              var KN = Kb.filter(function (KF) {
                return KF.indexOf(" ") == -1;
              }).join("|label:");
              if (KN) {
                Kj = Kv + "/posts/summary/?q=label:" + KN + "&alt=json-in-script&max-results=" + a;
              } else {
                Kj = Kv + "/posts/summary/-/" + Kb[0] + "?alt=json-in-script&max-results=" + a;
              }
            } else {
              Kj = Kv + "/posts/summary/?alt=json-in-script&max-results=" + a;
            }
          }
          $getJSONP(Kj, function (KF) {
            KG(KF);
            Kf();
            if (KF.feed.entry.length < a + 1) {
              KS = a + 1 - KF.feed.entry.length;
              Kz = Kv + "/posts/summary?alt=json-in-script&max-results=" + KS;
              $getJSONP(Kz, function (KV) {
                KG(KV);
                Kf();
              });
            }
          });
        }
        function KG(KF) {
          for (KR = 0; KR < KF.feed.entry.length; KR = KR + 1) {
            if (!KF.feed.entry[KR].app$control) {
              var KV = K4(KF.feed.entry[KR]);
              if (Kc.indexOf(KV.PostId) == -1) {
                Kc.push(KV.PostId);
                var KU = showAuthor && KV.Author_URI !== "#" ? "<a rel=\"nofollow noreferrer\" href=\"" + KV.Author_URI + "\"><span class=\"author-prof\"><i class=\"fa fa-user-circle\"></i>" + KV.Author + "</span></a>" : "";
                var Kr = showTimestamp ? "<span class=\"post-date\"><i class=\"fa fa-calendar-times-o\"></i>" + KV.Date + "</span>" : "";
                var Kh = "<div class=\"Item notr splide__slide\"><div class=\"item-wrap\"><a title=\"" + KV.Title + "\" href=\"" + KV.Link + "\" class=\"img-wrap PLHolder\"><img style=\"opacity:0\" class=\"rel-img notr\" data-rel-src=\"" + KV.ImgUrl + "\" title=\"" + KV.Title + "\" alt=\"" + KV.Title + "\"/><div class=\"overlay\"></div><span class=\"label-title\">" + KV.Category + "</span></a><div class=\"details\">" + KU + Kr + "</div><h3><a title=\"" + KV.Title + "\" href=\"" + KV.Link + "\">" + KV.Title + "</a></h3></div></div>";
                if (_$(".related-carousel").hasClass("flickity-enabled")) {
                  Km.add(Kh);
                } else {
                  _$(".related-carousel .splide__list").append(Kh);
                }
              }
            }
          }
        }
        function Kf() {
          K6(function () {
            var KF = {
              perPage: 2
            };
            var KV = {
              perPage: 3
            };
            var KU = {
              perPage: 2
            };
            var Kr = {
              perPage: 1
            };
            var Kh = {
              "1160": KF
            };
            Kh["992"] = KV;
            Kh["802"] = KU;
            Kh["640"] = Kr;
            var Kl = {
              "direction": BlogDirection,
              "pagination": false,
              "rewind": true,
              "perMove": 1,
              "perPage": 3,
              "breakpoints": Kh
            };
            Km = new Splide(".related-carousel", Kl).mount();
            LazyImages("data-rel-src", null, true);
          });
        }
      }
    };
  }
  if (!i) {
    K9(1);
  }
})();
