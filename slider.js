/*!
 * Splide.js
 * Version  : 2.4.20
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */!function () {
  "use strict";

  var t = {
    d: function (n, e) {
      for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && !Object.prototype.hasOwnProperty.call(n, i)) {
        Object.defineProperty(n, i, {
          enumerable: true,
          get: e[i]
        });
      }
    },
    o: function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    },
    r: function (t) {
      if ("undefined" != typeof Symbol && Symbol.toStringTag) {
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(t, "__esModule", {
        value: true
      });
    }
  };
  var n = {};
  t.r(n);
  t.d(n, {
    CREATED: function () {
      return 1;
    },
    DESTROYED: function () {
      return 5;
    },
    IDLE: function () {
      return 3;
    },
    MOUNTED: function () {
      return 2;
    },
    MOVING: function () {
      return 4;
    }
  });
  function e() {
    return (e = Object.assign || function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var e = arguments[n];
        for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
          t[i] = e[i];
        }
      }
      return t;
    }).apply(this, arguments);
  }
  var i = Object.keys;
  function o(t, n) {
    i(t).some(function (e, i) {
      return n(t[e], e, i);
    });
  }
  function r(t) {
    return i(t).map(function (n) {
      return t[n];
    });
  }
  function a(t, n) {
    var i = e({}, t);
    o(n, function (t, n) {
      if ("object" == typeof t) {
        if (!("object" == typeof i[n])) {
          i[n] = {};
        }
        i[n] = a(i[n], t);
      } else {
        i[n] = t;
      }
    });
    return i;
  }
  function d(t, n) {
    var e = 0;
    return t.replace(/%s/g, function () {
      return (Array.isArray(n) ? n : [n])[e++];
    });
  }
  function f(t) {
    var n = typeof t;
    return "number" === n && t > 0 ? parseFloat(t) + "px" : "string" === n ? t : "";
  }
  function h(t, n) {
    if ("string" == typeof n) {
      var e = m("div", {});
      E(e, {
        position: "absolute",
        width: n
      });
      w(t, e);
      n = e.clientWidth;
      b(e);
    }
    return +n || 0;
  }
  function v(t, n) {
    return t ? r(t.children).filter(function (t) {
      return !!t && t.classList.contains(n.split(" ")[0]) || t.tagName === n;
    }) : [];
  }
  function m(t, n) {
    var e = document.createElement(t);
    o(n, function (t, n) {
      return C(e, n, t);
    });
    return e;
  }
  function y(t) {
    var n = m("div", {});
    n.innerHTML = t;
    return n.firstChild;
  }
  function b(t) {
    (Array.isArray(t) ? t : [t]).forEach(function (t) {
      if (t) {
        var n = t.parentElement;
        if (n) {
          n.removeChild(t);
        }
      }
    });
  }
  function w(t, n) {
    if (t) {
      t.appendChild(n);
    }
  }
  function x(t, n) {
    if (t && n) {
      var e = n.parentElement;
      if (e) {
        e.insertBefore(t, n);
      }
    }
  }
  function E(t, n) {
    if (t) {
      o(n, function (n, e) {
        if (null !== n) {
          t.style[e] = n;
        }
      });
    }
  }
  function _(t, n, e) {
    if (t) {
      (Array.isArray(n) ? n : [n]).forEach(function (n) {
        if (n) {
          t.classList[e ? "remove" : "add"](n);
        }
      });
    }
  }
  function k(t, n) {
    _(t, n, false);
  }
  function S(t, n) {
    _(t, n, true);
  }
  function C(t, n, e) {
    if (t) {
      t.setAttribute(n, e);
    }
  }
  function I(t, n) {
    (Array.isArray(n) ? n : [n]).forEach(function (n) {
      (Array.isArray(t) ? t : [t]).forEach(function (t) {
        return t && t.removeAttribute(n);
      });
    });
  }
  var L = function (t, n) {
    var e;
    var i;
    return {
      mount: function () {
        e = n.Elements.list;
        t.on("transitionend", function (t) {
          if (t.target === e && i) {
            i();
          }
        }, e);
      },
      start: function (o, r, s, a, u) {
        var c = t.options;
        var d = n.Controller.edgeIndex;
        var f = c.speed;
        i = u;
        if (t.is("slide") && (0 === s && r >= d || s >= d && 0 === r)) {
          f = c.rewindSpeed || f;
        }
        E(e, {
          transition: "transform " + f + "ms " + c.easing,
          transform: "translate(" + a.x + "px," + a.y + "px)"
        });
      }
    };
  };
  var W = function (t, n) {
    function e(e) {
      var i = t.options;
      E(n.Elements.slides[e], {
        transition: "opacity " + i.speed + "ms " + i.easing
      });
    }
    return {
      mount: function () {
        e(t.index);
      },
      start: function (t, i, o, r, s) {
        var a = n.Elements.track;
        E(a, {
          height: f(a.clientHeight)
        });
        e(i);
        setTimeout(function () {
          s();
          E(a, {
            height: ""
          });
        });
      }
    };
  };
  function H(t) {
    console.error("[SPLIDE] " + t);
  }
  function j(t, n) {
    if (!t) {
      throw new Error(n);
    }
  }
  var D = {
    active: "is-active",
    visible: "is-visible",
    loading: "is-loading"
  };
  var N = {
    type: "slide",
    rewind: false,
    speed: 400,
    rewindSpeed: 0,
    waitForTransition: true,
    width: 0,
    height: 0,
    fixedWidth: 0,
    fixedHeight: 0,
    heightRatio: 0,
    autoWidth: false,
    autoHeight: false,
    perPage: 1,
    perMove: 0,
    clones: 0,
    start: 0,
    focus: false,
    gap: 0,
    padding: 0,
    arrows: true,
    arrowPath: "",
    pagination: true,
    autoplay: false,
    interval: 5e3,
    pauseOnHover: true,
    pauseOnFocus: true,
    resetProgress: true,
    lazyLoad: false,
    preloadPages: 1,
    easing: "cubic-bezier(.42,.65,.27,.99)",
    keyboard: "global",
    drag: true,
    dragAngleThreshold: 30,
    swipeDistanceThreshold: 150,
    flickVelocityThreshold: .6,
    flickPower: 600,
    flickMaxPages: 1,
    direction: "ltr",
    cover: false,
    accessibility: true,
    slideFocus: true,
    isNavigation: false,
    trimSpace: true,
    updateOnMove: false,
    throttle: 100,
    destroy: false,
    breakpoints: false,
    classes: {
      root: "splide",
      slider: "splide__slider",
      track: "splide__track",
      list: "splide__list",
      slide: "splide__slide",
      container: "splide__slide__container",
      arrows: "splide__arrows",
      arrow: "splide__arrow",
      prev: "splide__arrow--prev",
      next: "splide__arrow--next",
      pagination: "splide__pagination",
      page: "splide__pagination__page",
      clone: "splide__slide--clone",
      progress: "splide__progress",
      bar: "splide__progress__bar",
      autoplay: "splide__autoplay",
      play: "splide__play",
      pause: "splide__pause",
      spinner: "splide__spinner",
      sr: "splide__sr"
    },
    i18n: {
      prev: "Previous slide",
      next: "Next slide",
      first: "Go to first slide",
      last: "Go to last slide",
      slideX: "Go to slide %s",
      pageX: "Go to page %s",
      play: "Start autoplay",
      pause: "Pause autoplay"
    }
  };
  function V(t, n) {
    for (var e = 0; e < n.length; e++) {
      var i = n[e];
      i.enumerable = i.enumerable || false;
      i.configurable = true;
      if ("value" in i) {
        i.writable = true;
      }
      Object.defineProperty(t, i.key, i);
    }
  }
  var U = function () {
    function t(t, e, i) {
      var o;
      if (undefined === e) {
        e = {};
      }
      if (undefined === i) {
        i = {};
      }
      this.root = t instanceof Element ? t : document.querySelector(t);
      j(this.root, "An invalid element/selector was given.");
      this.Components = null;
      this.Event = function () {
        var t = [];
        function n(t) {
          if (t.elm) {
            t.elm.removeEventListener(t.event, t.handler, t.options);
          }
        }
        return {
          on: function (n, e, i, o) {
            if (undefined === i) {
              i = null;
            }
            if (undefined === o) {
              o = {};
            }
            n.split(" ").forEach(function (n) {
              if (i) {
                i.addEventListener(n, e, o);
              }
              t.push({
                event: n,
                handler: e,
                elm: i,
                options: o
              });
            });
          },
          off: function (e, i) {
            if (undefined === i) {
              i = null;
            }
            e.split(" ").forEach(function (e) {
              t = t.filter(function (t) {
                return !t || t.event !== e || t.elm !== i || (n(t), false);
              });
            });
          },
          emit: function (n) {
            var e = arguments.length;
            var i = new Array(e > 1 ? e - 1 : 0);
            for (var o = 1; o < e; o++) {
              i[o - 1] = arguments[o];
            }
            t.forEach(function (t) {
              if (!(t.elm || t.event.split(".")[0] !== n)) {
                t.handler.apply(t, i);
              }
            });
          },
          destroy: function () {
            t.forEach(n);
            t = [];
          }
        };
      }();
      o = 1;
      this.State = {
        set: function (t) {
          o = t;
        },
        is: function (t) {
          return t === o;
        }
      };
      this.STATES = n;
      this._o = a(N, e);
      this._i = 0;
      this._c = i;
      this._e = {};
      this._t = null;
    }
    var i;
    var s;
    var u = t.prototype;
    u.mount = function (t, n) {
      var e = this;
      if (undefined === t) {
        t = this._e;
      }
      if (undefined === n) {
        n = this._t;
      }
      this.State.set(1);
      this._e = t;
      this._t = n;
      this.Components = function (t, n, e) {
        var i = {};
        o(n, function (n, e) {
          i[e] = n(t, i, e.toLowerCase());
        });
        if (!e) {
          e = t.is("fade") ? W : L;
        }
        i.Transition = e(t, i);
        return i;
      }(this, a(this._c, t), n);
      try {
        o(this.Components, function (t, n) {
          var i = t.required;
          if (undefined === i || i) {
            if (t.mount) {
              t.mount();
            }
          } else {
            delete e.Components[n];
          }
        });
      } catch (t) {
        return void H(t.message);
      }
      var i = this.State;
      i.set(2);
      o(this.Components, function (t) {
        if (t.mounted) {
          t.mounted();
        }
      });
      this.emit("mounted");
      i.set(3);
      this.emit("ready");
      E(this.root, {
        visibility: "visible"
      });
      this.on("move drag", function () {
        return i.set(4);
      }).on("moved dragged", function () {
        return i.set(3);
      });
      return this;
    };
    u.sync = function (t) {
      this.sibling = t;
      return this;
    };
    u.on = function (t, n, e, i) {
      if (undefined === e) {
        e = null;
      }
      if (undefined === i) {
        i = {};
      }
      this.Event.on(t, n, e, i);
      return this;
    };
    u.off = function (t, n) {
      if (undefined === n) {
        n = null;
      }
      this.Event.off(t, n);
      return this;
    };
    u.emit = function (t) {
      var n;
      var e = arguments.length;
      var i = new Array(e > 1 ? e - 1 : 0);
      for (var o = 1; o < e; o++) {
        i[o - 1] = arguments[o];
      }
      (n = this.Event).emit.apply(n, [t].concat(i));
      return this;
    };
    u.go = function (t, n) {
      if (undefined === n) {
        n = this.options.waitForTransition;
      }
      if (this.State.is(3) || this.State.is(4) && !n) {
        this.Components.Controller.go(t, false);
      }
      return this;
    };
    u.is = function (t) {
      return t === this._o.type;
    };
    u.add = function (t, n) {
      if (undefined === n) {
        n = -1;
      }
      this.Components.Elements.add(t, n, this.refresh.bind(this));
      return this;
    };
    u.remove = function (t) {
      this.Components.Elements.remove(t);
      this.refresh();
      return this;
    };
    u.refresh = function () {
      this.emit("refresh:before").emit("refresh").emit("resize");
      return this;
    };
    u.destroy = function (t) {
      var n = this;
      if (undefined === t) {
        t = true;
      }
      if (!this.State.is(1)) {
        r(this.Components).reverse().forEach(function (n) {
          if (n.destroy) {
            n.destroy(t);
          }
        });
        this.emit("destroy", t);
        this.Event.destroy();
        this.State.set(5);
        return this;
      }
      this.on("ready", function () {
        return n.destroy(t);
      });
    };
    if (i = [{
      key: "index",
      get: function () {
        return this._i;
      },
      set: function (t) {
        this._i = parseInt(t);
      }
    }, {
      key: "length",
      get: function () {
        return this.Components.Elements.length;
      }
    }, {
      key: "options",
      get: function () {
        return this._o;
      },
      set: function (t) {
        var n = this.State.is(1);
        if (!n) {
          this.emit("update");
        }
        this._o = a(this._o, t);
        if (!n) {
          this.emit("updated", this._o);
        }
      }
    }, {
      key: "classes",
      get: function () {
        return this._o.classes;
      }
    }, {
      key: "i18n",
      get: function () {
        return this._o.i18n;
      }
    }]) {
      V(t.prototype, i);
    }
    if (s) {
      V(t, s);
    }
    return t;
  }();
  var Y = function (t) {
    var n = t.root ? t.root.getAttribute("data-splide") : "";
    if (n) {
      try {
        t.options = JSON.parse(n);
      } catch (t) {
        H(t.message);
      }
    }
    return {
      mount: function () {
        if (t.State.is(1)) {
          t.index = t.options.start;
        }
      }
    };
  };
  var Z = function (t, n) {
    var e = t.root;
    var i = t.classes;
    var s = [];
    if (!e.id) {
      window.splide = window.splide || {};
      var a = window.splide.uid || 0;
      window.splide.uid = ++a;
      e.id = "splide" + (a < 10 ? "0" + a : a);
    }
    var u = {
      mount: function () {
        var n = this;
        this.init();
        t.on("refresh", function () {
          n.destroy();
          n.init();
        }).on("updated", function () {
          S(e, c());
          k(e, c());
        });
      },
      destroy: function () {
        s.forEach(function (t) {
          t.destroy();
        });
        s = [];
        S(e, c());
      },
      init: function () {
        var t = this;
        !function () {
          u.slider = v(e, i.slider)[0];
          u.track = e ? e.querySelector(("." + i.track).split(" ")[0]) : null;
          u.list = v(u.track, i.list)[0];
          j(u.track && u.list, "Track or list was not found.");
          u.slides = v(u.list, i.slide);
          var t = v(e, i.arrows)[0] || v(u.slider, i.arrows)[0];
          u.arrows = {
            prev: t ? t.querySelector(("." + i.prev).split(" ")[0]) : null,
            next: t ? t.querySelector(("." + i.next).split(" ")[0]) : null
          };
          var n = v(e, i.autoplay)[0] || v(u.slider, i.autoplay)[0];
          u.bar = v(e, i.progress)[0] || v(u.slider, i.progress)[0] ? (v(e, i.progress)[0] || v(u.slider, i.progress)[0]).querySelector(("." + i.bar).split(" ")[0]) : null;
          u.play = n ? n.querySelector(("." + i.play).split(" ")[0]) : null;
          u.pause = n ? n.querySelector(("." + i.pause).split(" ")[0]) : null;
          u.track.id = u.track.id || e.id + "-track";
          u.list.id = u.list.id || e.id + "-list";
        }();
        k(e, c());
        this.slides.forEach(function (n, e) {
          t.register(n, e, -1);
        });
      },
      register: function (n, e, i) {
        var o = function (t, n, e, i) {
          var o = t.options.updateOnMove;
          var s = "ready.slide updated.slide resized.slide moved.slide" + (o ? " move.slide" : "");
          var a = {
            slide: i,
            index: n,
            realIndex: e,
            container: v(i, t.classes.container)[0],
            isClone: e > -1,
            mount: function () {
              var r = this;
              if (!this.isClone) {
                i.id = t.root.id + "-slide" + (n + 1 < 10 ? "0" + (n + 1) : n + 1);
              }
              t.on(s, function () {
                return r.update();
              }).on("update.slide", c).on("click", function () {
                return t.emit("click", r);
              }, i);
              if (o) {
                t.on("move.slide", function (t) {
                  if (t === e) {
                    u(true, false);
                  }
                });
              }
              E(i, {
                display: ""
              });
              this.styles = (i ? i.getAttribute("style") : "") || "";
            },
            destroy: function () {
              t.off(s).off("update.slide").off("click", i);
              S(i, r(D));
              c();
              I(this.container, "style");
            },
            update: function () {
              u(this.isActive(), false);
              u(this.isVisible(), true);
            },
            isActive: function () {
              return t.index === n;
            },
            isVisible: function () {
              var n = this.isActive();
              if (t.is("fade") || n) {
                return n;
              }
              var e = Math.ceil;
              var o = t.Components.Elements.track.getBoundingClientRect();
              var r = i.getBoundingClientRect();
              return t.options.direction === "ttb" ? o.top <= r.top && r.bottom <= e(o.bottom) : o.left <= r.left && r.right <= e(o.right);
            },
            isWithin: function (e, i) {
              var o = Math.abs(e - n);
              if (!(t.is("slide") || this.isClone)) {
                o = Math.min(o, t.length - o);
              }
              return o < i;
            }
          };
          function u(n, e) {
            var o = e ? "visible" : "active";
            var r = D[o];
            if (n) {
              k(i, r);
              t.emit("" + o, a);
            } else if (!!i && i.classList.contains(r)) {
              S(i, r);
              t.emit(e ? "hidden" : "inactive", a);
            }
          }
          function c() {
            C(i, "style", a.styles);
          }
          return a;
        }(t, e, i, n);
        o.mount();
        s.push(o);
      },
      getSlide: function (t) {
        return s.filter(function (n) {
          return n.index === t;
        })[0];
      },
      getSlides: function (t) {
        return t ? s : s.filter(function (t) {
          return !t.isClone;
        });
      },
      getSlidesByPage: function (e) {
        var i = n.Controller.toIndex(e);
        var o = t.options;
        var r = false !== o.focus ? 1 : o.perPage;
        return s.filter(function (t) {
          var n = t.index;
          return i <= n && n < i + r;
        });
      },
      add: function (t, n, e) {
        if ("string" == typeof t) {
          t = y(t);
        }
        if (t instanceof Element) {
          var i = this.slides[n];
          E(t, {
            display: "none"
          });
          if (i) {
            x(t, i);
            this.slides.splice(n, 0, t);
          } else {
            w(this.list, t);
            this.slides.push(t);
          }
          (function (t, n) {
            var e = t.querySelectorAll("img");
            var i = e.length;
            if (i) {
              var r = 0;
              o(e, function (t) {
                t.onload = t.onerror = function () {
                  if (++r === i) {
                    n();
                  }
                };
              });
            } else {
              n();
            }
          })(t, function () {
            if (e) {
              e(t);
            }
          });
        }
      },
      remove: function (t) {
        b(this.slides.splice(t, 1)[0]);
      },
      each: function (t) {
        s.forEach(t);
      },
      get length() {
        return this.slides.length;
      },
      get total() {
        return s.length;
      }
    };
    function c() {
      var n = i.root;
      var e = t.options;
      return [n + "--" + e.type, n + "--" + e.direction, e.drag ? n + "--draggable" : "", e.isNavigation ? n + "--nav" : "", "is-active"];
    }
    return u;
  };
  var $ = Math.floor;
  var tt = function (t, n) {
    var e;
    var i;
    var o = {
      mount: function () {
        e = t.options;
        i = t.is("loop");
        t.on("move", function (n) {
          t.index = n;
        }).on("updated refresh", function (n) {
          e = n || e;
          t.index = Math.min(Math.max(t.index, 0 > o.edgeIndex ? o.edgeIndex : 0), 0 > o.edgeIndex ? 0 : o.edgeIndex);
        });
      },
      go: function (t, e) {
        var i = this.trim(this.parse(t));
        n.Track.go(i, this.rewind(i), e);
      },
      parse: function (n) {
        var i = t.index;
        var r = String(n).match(/([+\-<>]+)(\d+)?/);
        var s = r ? r[1] : "";
        var a = r ? parseInt(r[2]) : 0;
        switch (s) {
          case "+":
            i += a || 1;
            break;
          case "-":
            i -= a || 1;
            break;
          case ">":
          case "<":
            i = function (t, n, i) {
              if (t > -1) {
                return o.toIndex(t);
              }
              var r = e.perMove;
              var s = i ? -1 : 1;
              if (r) {
                return n + r * s;
              }
              return o.toIndex(o.toPage(n) + s);
            }(a, i, "<" === s);
            break;
          default:
            i = parseInt(n);
        }
        return i;
      },
      toIndex: function (n) {
        if (false !== e.focus) {
          return n;
        }
        var i = t.length;
        var o = e.perPage;
        var s = n * o;
        if (i - o <= (s -= (this.pageLength * o - i) * $(s / i)) && s < i) {
          s = i - o;
        }
        return s;
      },
      toPage: function (n) {
        if (false !== e.focus) {
          return n;
        }
        var i = t.length;
        var o = e.perPage;
        return $(i - o <= n && n < i ? (i - 1) / o : n / o);
      },
      trim: function (t) {
        if (!i) {
          t = e.rewind ? this.rewind(t) : Math.min(Math.max(t, 0 > this.edgeIndex ? this.edgeIndex : 0), 0 > this.edgeIndex ? 0 : this.edgeIndex);
        }
        return t;
      },
      rewind: function (t) {
        var n = this.edgeIndex;
        if (i) {
          for (; t > n;) {
            t -= n + 1;
          }
          for (; t < 0;) {
            t += n + 1;
          }
        } else if (t > n) {
          t = 0;
        } else if (t < 0) {
          t = n;
        }
        return t;
      },
      isRtl: function () {
        return e.direction === "rtl";
      },
      get pageLength() {
        var n = t.length;
        return false !== e.focus ? n : Math.ceil(n / e.perPage);
      },
      get edgeIndex() {
        var n = t.length;
        return n ? false !== e.focus || e.isNavigation || i ? n - 1 : n - e.perPage : 0;
      },
      get prevIndex() {
        var n = t.index - 1;
        if (i || e.rewind) {
          n = this.rewind(n);
        }
        return n > -1 ? n : -1;
      },
      get nextIndex() {
        var n = t.index + 1;
        if (i || e.rewind) {
          n = this.rewind(n);
        }
        return t.index < n && n <= this.edgeIndex || 0 === n ? n : -1;
      }
    };
    return o;
  };
  var nt = Math.abs;
  var et = function (t, n) {
    var e;
    var i;
    var o;
    var r = t.options.direction === "ttb";
    var s = t.is("fade");
    var a = t.options.direction === "rtl";
    var u = false;
    var d = a ? 1 : -1;
    var f = {
      sign: d,
      mount: function () {
        i = n.Elements;
        e = n.Layout;
        o = i.list;
      },
      mounted: function () {
        var n = this;
        if (!s) {
          this.jump(0);
          t.on("mounted resize updated", function () {
            n.jump(t.index);
          });
        }
      },
      go: function (e, i, o) {
        var r = !t.options.trimSpace || t.is("loop") ? f.toPosition(e) : Math.min(Math.max(f.toPosition(e), d * (e.totalSize() - e.size - e.gap) > 0 ? 0 : d * (e.totalSize() - e.size - e.gap)), d * (e.totalSize() - e.size - e.gap) > 0 ? d * (e.totalSize() - e.size - e.gap) : 0);
        var a = t.index;
        if (!(t.State.is(4) && u)) {
          u = e !== i;
          if (!o) {
            t.emit("move", i, a, e);
          }
          if (Math.abs(r - this.position) >= 1 || s) {
            n.Transition.start(e, i, a, this.toCoord(r), function () {
              l(e, i, a, o);
            });
          } else if (e !== a && "move" === t.options.trimSpace) {
            n.Controller.go(e + e - a, o);
          } else {
            l(e, i, a, o);
          }
        }
      },
      jump: function (t) {
        this.translate(!t.options.trimSpace || t.is("loop") ? f.toPosition(t) : Math.min(Math.max(f.toPosition(t), d * (e.totalSize() - e.size - e.gap) > 0 ? 0 : d * (e.totalSize() - e.size - e.gap)), d * (e.totalSize() - e.size - e.gap) > 0 ? d * (e.totalSize() - e.size - e.gap) : 0));
      },
      translate: function (t) {
        E(o, {
          transform: "translate" + (r ? "Y" : "X") + "(" + t + "px)"
        });
      },
      cancel: function () {
        if (t.is("loop")) {
          this.shift();
        } else {
          this.translate(this.position);
        }
        E(o, {
          transition: ""
        });
      },
      shift: function () {
        var n = nt(this.position);
        var e = nt(this.toPosition(0));
        var i = nt(this.toPosition(t.length));
        var o = i - e;
        if (n < e) {
          n += o;
        } else if (n > i) {
          n -= o;
        }
        this.translate(d * n);
      },
      trim: function (n) {
        return !t.options.trimSpace || t.is("loop") ? n : Math.min(Math.max(n, d * (e.totalSize() - e.size - e.gap) > 0 ? 0 : d * (e.totalSize() - e.size - e.gap)), d * (e.totalSize() - e.size - e.gap) > 0 ? d * (e.totalSize() - e.size - e.gap) : 0);
      },
      toIndex: function (t) {
        var n = this;
        var e = 0;
        var o = Infinity;
        i.getSlides(true).forEach(function (i) {
          var r = i.index;
          var s = nt(n.toPosition(r) - t);
          if (s < o) {
            o = s;
            e = r;
          }
        });
        return e;
      },
      toCoord: function (t) {
        return {
          x: r ? 0 : t,
          y: r ? t : 0
        };
      },
      toPosition: function (t) {
        var n = e.totalSize(t) - e.slideSize(t) - e.gap;
        return d * (n + this.offset(t));
      },
      offset: function (n) {
        var i = t.options.focus;
        var o = e.slideSize(n);
        return "center" === i ? -(e.size - o) / 2 : -(parseInt(i) || 0) * (o + e.gap);
      },
      get position() {
        var t = r ? "top" : a ? "right" : "left";
        return o.getBoundingClientRect()[t] - (i.track.getBoundingClientRect()[t] - e.padding[t] * d);
      }
    };
    function l(n, e, i, r) {
      E(o, {
        transition: ""
      });
      u = false;
      if (!s) {
        f.jump(e);
      }
      if (!r) {
        t.emit("moved", e, i, n);
      }
    }
    return f;
  };
  var it = function (t, n) {
    var e = [];
    var i = 0;
    var o = n.Elements;
    var r = {
      mount: function () {
        var n = this;
        if (t.is("loop")) {
          s();
          t.on("refresh:before", function () {
            n.destroy();
          }).on("refresh", s).on("resize", function () {
            if (i !== a()) {
              n.destroy();
              t.refresh();
            }
          });
        }
      },
      destroy: function () {
        b(e);
        e = [];
      },
      get clones() {
        return e;
      },
      get length() {
        return e.length;
      }
    };
    function s() {
      r.destroy();
      (function (t) {
        var n = o.length;
        var i = o.register;
        if (n) {
          for (var r = o.slides; r.length < t;) {
            r = r.concat(r);
          }
          r.slice(0, t).forEach(function (t, r) {
            var s = u(t);
            w(o.list, s);
            e.push(s);
            i(s, r + n, r % n);
          });
          r.slice(-t).forEach(function (o, s) {
            var a = u(o);
            x(a, r[0]);
            e.push(a);
            i(a, s - t, (n + s - t % n) % n);
          });
        }
      })(i = a());
    }
    function a() {
      var n = t.options;
      if (n.clones) {
        return n.clones;
      }
      var e = n.autoWidth || n.autoHeight ? o.length : n.perPage;
      var i = n.direction === "ttb" ? "Height" : "Width";
      var r = h(t.root, n["fixed" + i]);
      if (r) {
        e = Math.ceil(o.track["client" + i] / r);
      }
      return e * (n.drag ? n.flickMaxPages + 1 : 1);
    }
    function u(n) {
      var e = n.cloneNode(true);
      k(e, t.classes.clone);
      I(e, "id");
      return e;
    }
    return r;
  };
  function ot(t, n) {
    var e;
    return function () {
      if (!e) {
        e = setTimeout(function () {
          t();
          e = null;
        }, n);
      }
    };
  }
  var rt = function (t, n) {
    var e;
    var o;
    var r = n.Elements;
    var s = t.options.direction === "ttb";
    e = {
      mount: function () {
        t.on("resize load", ot(function () {
          t.emit("resize");
        }, t.options.throttle), window).on("resize", c).on("updated refresh", u);
        u();
        this.totalSize = s ? this.totalHeight : this.totalWidth;
        this.slideSize = s ? this.slideHeight : this.slideWidth;
      },
      destroy: function () {
        I([r.list, r.track], "style");
      },
      get size() {
        return s ? this.height : this.width;
      }
    };
    o = s ? function (t, n) {
      var e;
      var i;
      var o = n.Elements;
      var r = t.root;
      return {
        margin: "marginBottom",
        init: function () {
          this.resize();
        },
        resize: function () {
          i = t.options;
          e = o.track;
          this.gap = h(r, i.gap);
          var n = i.padding;
          var s = h(r, n.top || n);
          var a = h(r, n.bottom || n);
          this.padding = {
            top: s,
            bottom: a
          };
          E(e, {
            paddingTop: f(s),
            paddingBottom: f(a)
          });
        },
        totalHeight: function (n) {
          if (undefined === n) {
            n = t.length - 1;
          }
          var e = o.getSlide(n);
          return e ? e.slide.getBoundingClientRect().bottom - o.list.getBoundingClientRect().top + this.gap : 0;
        },
        slideWidth: function () {
          return h(r, i.fixedWidth || this.width);
        },
        slideHeight: function (t) {
          if (i.autoHeight) {
            var n = o.getSlide(t);
            return n ? n.slide.offsetHeight : 0;
          }
          var e = i.fixedHeight || (this.height + this.gap) / i.perPage - this.gap;
          return h(r, e);
        },
        get width() {
          return e.clientWidth;
        },
        get height() {
          var t = i.height || this.width * i.heightRatio;
          j(t, "\"height\" or \"heightRatio\" is missing.");
          return h(r, t) - this.padding.top - this.padding.bottom;
        }
      };
    }(t, n) : function (t, n) {
      var e;
      var i = n.Elements;
      var o = t.root;
      var r = t.options;
      return {
        margin: "margin" + (r.direction === "rtl" ? "Left" : "Right"),
        height: 0,
        init: function () {
          this.resize();
        },
        resize: function () {
          r = t.options;
          e = i.track;
          this.gap = h(o, r.gap);
          var n = r.padding;
          var s = h(o, n.left || n);
          var a = h(o, n.right || n);
          this.padding = {
            left: s,
            right: a
          };
          E(e, {
            paddingLeft: f(s),
            paddingRight: f(a)
          });
        },
        totalWidth: function (n) {
          if (undefined === n) {
            n = t.length - 1;
          }
          var e = i.getSlide(n);
          var o = 0;
          if (e) {
            var s = e.slide.getBoundingClientRect();
            var a = i.list.getBoundingClientRect();
            o = r.direction === "rtl" ? a.right - s.left : s.right - a.left;
            o += this.gap;
          }
          return o;
        },
        slideWidth: function (t) {
          if (r.autoWidth) {
            var n = i.getSlide(t);
            return n ? n.slide.offsetWidth : 0;
          }
          var e = r.fixedWidth || (this.width + this.gap) / r.perPage - this.gap;
          return h(o, e);
        },
        slideHeight: function () {
          var t = r.height || r.fixedHeight || this.width * r.heightRatio;
          return h(o, t);
        },
        get width() {
          return e.clientWidth - this.padding.left - this.padding.right;
        }
      };
    }(t, n);
    i(o).forEach(function (t) {
      if (!e[t]) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
      }
    });
    function u() {
      e.init();
      E(t.root, {
        maxWidth: f(t.options.width)
      });
      r.each(function (t) {
        t.slide.style[e.margin] = f(e.gap);
      });
      c();
    }
    function c() {
      var n = t.options;
      e.resize();
      E(r.track, {
        height: f(e.height)
      });
      var e = n.autoHeight ? null : f(e.slideHeight());
      r.each(function (t) {
        E(t.container, {
          height: e
        });
        E(t.slide, {
          width: n.autoWidth ? null : f(e.slideWidth(t.index)),
          height: t.container ? null : e
        });
      });
      t.emit("resized");
    }
    return e;
  };
  var st = Math.abs;
  var at = function (t, n) {
    var e;
    var i;
    var r;
    var s;
    var a = n.Track;
    var u = n.Controller;
    var d = t.options.direction === "ttb";
    var f = d ? "y" : "x";
    var l = {
      disabled: false,
      mount: function () {
        var e = this;
        var i = n.Elements;
        var r = i.track;
        t.on("touchstart mousedown", h, r).on("touchmove mousemove", g, r, {
          passive: false
        }).on("touchend touchcancel mouseleave mouseup dragend", v, r).on("mounted refresh", function () {
          o(i.list.querySelectorAll("img, a"), function (n) {
            t.off("dragstart", n).on("dragstart", function (t) {
              t.preventDefault();
            }, n, {
              passive: false
            });
          });
        }).on("mounted updated", function () {
          e.disabled = !t.options.drag;
        });
      }
    };
    function h(t) {
      if (!(false || s)) {
        p(t);
      }
    }
    function p(t) {
      e = a.toCoord(a.position);
      i = m(t, {});
      r = i;
    }
    function g(n) {
      if (i) {
        r = m(n, i);
        if (s) {
          if (n.cancelable) {
            n.preventDefault();
          }
          if (!t.is("fade")) {
            var o = e[f] + r.offset[f];
            a.translate(function (n) {
              if (t.is("slide")) {
                var e = a.sign;
                var i = e * a.trim(a.toPosition(0));
                var o = e * a.trim(a.toPosition(u.edgeIndex));
                if ((n *= e) < i) {
                  n = i - 7 * Math.log(i - n);
                } else if (n > o) {
                  n = o + 7 * Math.log(n - o);
                }
                n *= e;
              }
              return n;
            }(o));
          }
        } else if (function (n) {
          var e = n.offset;
          if (t.State.is(4) && t.options.waitForTransition) {
            return false;
          }
          var i = 180 * Math.atan(st(e.y) / st(e.x)) / Math.PI;
          if (d) {
            i = 90 - i;
          }
          return i < t.options.dragAngleThreshold;
        }(r)) {
          t.emit("drag", i);
          s = true;
          a.cancel();
          p(n);
        }
      }
    }
    function v() {
      i = null;
      if (s) {
        t.emit("dragged", r);
        (function (e) {
          var i = e.velocity[f];
          var o = st(i);
          if (o > 0) {
            var r = t.options;
            var s = t.index;
            var d = i < 0 ? -1 : 1;
            var l = s;
            if (!t.is("fade")) {
              var h = a.position;
              if (o > r.flickVelocityThreshold && st(e.offset[f]) < r.swipeDistanceThreshold) {
                h += d * Math.min(o * r.flickPower, n.Layout.size * (r.flickMaxPages || 1));
              }
              l = a.toIndex(h);
            }
            if (l === s && o > .1) {
              l = s + d * a.sign;
            }
            if (t.is("slide")) {
              l = Math.min(Math.max(l, 0 > u.edgeIndex ? u.edgeIndex : 0), 0 > u.edgeIndex ? 0 : u.edgeIndex);
            }
            u.go(l, r.isNavigation);
          }
        })(r);
        s = false;
      }
    }
    function m(t, n) {
      var e = t.timeStamp;
      var i = t.touches;
      var o = i ? i[0] : t;
      var r = o.clientX;
      var s = o.clientY;
      var a = n.to || {};
      var u = a.x;
      var c = undefined === u ? r : u;
      var d = a.y;
      var f = {
        x: r - c,
        y: s - (undefined === d ? s : d)
      };
      var l = e - (n.time || 0);
      return {
        to: {
          x: r,
          y: s
        },
        offset: f,
        time: e,
        velocity: {
          x: f.x / l,
          y: f.y / l
        }
      };
    }
    return l;
  };
  var ut = function (t, n) {
    var e = false;
    function i(t) {
      if (e) {
        t.preventDefault();
        t.stopPropagation();
        t.stopImmediatePropagation();
      }
    }
    return {
      required: t.options.drag,
      mount: function () {
        t.on("click", i, n.Elements.track, {
          capture: true
        }).on("drag", function () {
          e = true;
        }).on("dragged", function () {
          setTimeout(function () {
            e = false;
          });
        });
      }
    };
  };
  var lt = function (t, n, e) {
    var i;
    var o;
    var r;
    var s = t.classes;
    var a = t.root;
    var u = n.Elements;
    function c() {
      var r = n.Controller;
      var s = r.prevIndex;
      var a = r.nextIndex;
      var u = t.length > t.options.perPage || t.is("loop");
      i.disabled = s < 0 || !u;
      o.disabled = a < 0 || !u;
      t.emit(e + ":updated", i, o, s, a);
    }
    return {
      required: t.options.arrows,
      mount: function () {
        i = u.arrows.prev;
        o = u.arrows.next;
        if (!(i && o || !t.options.arrows)) {
          i = y("<button class=\"" + s.arrow + " " + s.prev + "\" type=\"button\"><svg xmlns=\"http://www.w3.org/2000/svg\"\tviewBox=\"0 0 40 40\"\twidth=\"40\"\theight=\"40\"><path d=\"" + (t.options.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + "\" />");
          o = y("<button class=\"" + s.arrow + " " + s.next + "\" type=\"button\"><svg xmlns=\"http://www.w3.org/2000/svg\"\tviewBox=\"0 0 40 40\"\twidth=\"40\"\theight=\"40\"><path d=\"" + (t.options.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + "\" />");
          r = true;
          (function () {
            var n = m("div", {
              class: s.arrows
            });
            w(n, i);
            w(n, o);
            var e = u.slider;
            var r = "slider" === t.options.arrows && e ? e : a;
            x(n, r.firstElementChild);
          })();
        }
        if (i && o) {
          t.on("click", function () {
            t.go("<");
          }, i).on("click", function () {
            t.go(">");
          }, o).on("mounted move updated refresh", c);
        }
        this.arrows = {
          prev: i,
          next: o
        };
      },
      mounted: function () {
        t.emit(e + ":mounted", i, o);
      },
      destroy: function () {
        I([i, o], "disabled");
        if (r) {
          b(i.parentElement);
        }
      }
    };
  };
  var gt = function (t, n, e) {
    var i = {};
    var o = n.Elements;
    var r = {
      mount: function () {
        var n = t.options.pagination;
        if (n) {
          i = function () {
            var n = t.options;
            var e = t.classes;
            var i = m("ul", {
              class: e.pagination
            });
            var r = o.getSlides(false).filter(function (t) {
              return false !== n.focus || t.index % n.perPage == 0;
            }).map(function (n, r) {
              var s = m("li", {});
              var a = m("button", {
                class: e.page,
                type: "button"
              });
              w(s, a);
              w(i, s);
              t.on("click", function () {
                t.go(">" + r);
              }, a);
              return {
                li: s,
                button: a,
                page: r,
                Slides: o.getSlidesByPage(r)
              };
            });
            return {
              list: i,
              items: r
            };
          }();
          var e = o.slider;
          w("slider" === n && e ? e : t.root, i.list);
          t.on("move.page", s);
        }
        t.off("updated.page refresh.page").on("updated.page refresh.page", function () {
          r.destroy();
          if (t.options.pagination) {
            r.mount();
            r.mounted();
          }
        });
      },
      mounted: function () {
        if (t.options.pagination) {
          var n = t.index;
          t.emit(e + ":mounted", i, this.getItem(n));
          s(n, -1);
        }
      },
      destroy: function () {
        b(i.list);
        if (i.items) {
          i.items.forEach(function (n) {
            t.off("click", n.button);
          });
        }
        t.off("move.page");
        i = {};
      },
      getItem: function (t) {
        return i.items[n.Controller.toPage(t)];
      },
      get data() {
        return i;
      }
    };
    function s(n, o) {
      var s = i.items[n.Controller.toPage(o)];
      var a = i.items[n.Controller.toPage(n)];
      if (s) {
        S(s.button, "is-active");
      }
      if (a) {
        k(a.button, "is-active");
      }
      t.emit(e + ":updated", i, s, a);
    }
    return r;
  };
  var _t = {
    ltr: {
      ArrowLeft: "<",
      ArrowRight: ">",
      Left: "<",
      Right: ">"
    },
    rtl: {
      ArrowLeft: ">",
      ArrowRight: "<",
      Left: ">",
      Right: "<"
    },
    ttb: {
      ArrowUp: "<",
      ArrowDown: ">",
      Up: "<",
      Down: ">"
    }
  };
  var kt = function (t, n) {
    var e = t.i18n;
    var i = n.Elements;
    var o = ["aria-hidden", "tabindex", "aria-controls", "aria-label", "aria-current", "role"];
    function r(n, e) {
      C(n, "aria-hidden", !e);
      if (t.options.slideFocus) {
        C(n, "tabindex", e ? 0 : -1);
      }
    }
    function s(t, n) {
      var e = i.track.id;
      C(t, "aria-controls", e);
      C(n, "aria-controls", e);
    }
    function a(n, i, o, r) {
      var s = t.index;
      var a = o > -1 && s < o ? e.last : e.prev;
      var u = r > -1 && s > r ? e.first : e.next;
      C(n, "aria-label", a);
      C(i, "aria-label", u);
    }
    function u(n, i) {
      if (i) {
        C(i.button, "aria-current", true);
      }
      n.items.forEach(function (n) {
        var i = t.options;
        var o = d(false === i.focus && i.perPage > 1 ? e.pageX : e.slideX, n.page + 1);
        var r = n.button;
        var s = n.Slides.map(function (t) {
          return t.slide.id;
        });
        C(r, "aria-controls", s.join(" "));
        C(r, "aria-label", o);
      });
    }
    function c(t, n, e) {
      if (n) {
        I(n.button, "aria-current");
      }
      if (e) {
        C(e.button, "aria-current", true);
      }
    }
    function f(t) {
      i.each(function (n) {
        var i = n.slide;
        var o = n.realIndex;
        if (!("BUTTON" === i.tagName)) {
          C(i, "role", "button");
        }
        var r = o > -1 ? o : n.index;
        var s = d(e.slideX, r + 1);
        var a = t.Components.Elements.getSlide(r);
        C(i, "aria-label", s);
        if (a) {
          C(i, "aria-controls", a.slide.id);
        }
      });
    }
    function l(t, n) {
      var e = t.slide;
      if (n) {
        C(e, "aria-current", true);
      } else {
        I(e, "aria-current");
      }
    }
    return {
      required: t.options.accessibility,
      mount: function () {
        t.on("visible", function (t) {
          r(t.slide, true);
        }).on("hidden", function (t) {
          r(t.slide, false);
        }).on("arrows:mounted", s).on("arrows:updated", a).on("pagination:mounted", u).on("pagination:updated", c).on("refresh", function () {
          I(n.Clones.clones, o);
        });
        if (t.options.isNavigation) {
          t.on("navigation:mounted navigation:updated", f).on("active", function (t) {
            l(t, true);
          }).on("inactive", function (t) {
            l(t, false);
          });
        }
        ["play", "pause"].forEach(function (t) {
          var n = i[t];
          if (n) {
            if (!("BUTTON" === n.tagName)) {
              C(n, "role", "button");
            }
            C(n, "aria-controls", i.track.id);
            C(n, "aria-label", e[t]);
          }
        });
      },
      destroy: function () {
        var t = n.Arrows;
        var e = t ? t.arrows : {};
        I(i.slides.concat([e.prev, e.next, i.play, i.pause]), o);
      }
    };
  };
  var Ct = [" ", "Enter", "Spacebar"];
  var zt = {
    Options: Y,
    Breakpoints: function (t) {
      var n;
      var e;
      var i = t.options.breakpoints;
      var o = ot(s, 50);
      var r = [];
      function s() {
        var o;
        var s = (o = r.filter(function (t) {
          return t.mql.matches;
        })[0]) ? o.point : -1;
        if (s !== e) {
          e = s;
          var a = t.State;
          var u = i[s] || n;
          var c = u.destroy;
          if (c) {
            t.options = n;
            t.destroy("completely" === c);
          } else {
            if (a.is(5)) {
              t.mount();
            }
            t.options = u;
          }
        }
      }
      return {
        required: i && matchMedia,
        mount: function () {
          r = Object.keys(i).sort(function (t, n) {
            return +t - +n;
          }).map(function (t) {
            return {
              point: t,
              mql: matchMedia("(max-width:" + t + "px)")
            };
          });
          this.destroy(true);
          addEventListener("resize", o);
          n = t.options;
          s();
        },
        destroy: function (t) {
          if (t) {
            removeEventListener("resize", o);
          }
        }
      };
    },
    Controller: tt,
    Elements: Z,
    Track: et,
    Clones: it,
    Layout: rt,
    Drag: at,
    Click: ut,
    Autoplay: function (t, n, e) {
      var i;
      var o = [];
      var r = n.Elements;
      var s = {
        required: t.options.autoplay,
        mount: function () {
          var n = t.options;
          if (r.slides.length > n.perPage) {
            i = function (t, n, e) {
              var i;
              var o;
              var r;
              var s = window.requestAnimationFrame;
              var a = true;
              var u = function u(c) {
                if (!a) {
                  if (!i) {
                    i = c;
                    if (r && r < 1) {
                      i -= r * n;
                    }
                  }
                  r = (o = c - i) / n;
                  if (o >= n) {
                    i = 0;
                    r = 1;
                    t();
                  }
                  if (e) {
                    e(r);
                  }
                  s(u);
                }
              };
              return {
                pause: function () {
                  a = true;
                  i = 0;
                },
                play: function (t) {
                  i = 0;
                  if (t) {
                    r = 0;
                  }
                  if (a) {
                    a = false;
                    s(u);
                  }
                }
              };
            }(function () {
              t.go(">");
            }, n.interval, function (n) {
              t.emit(e + ":playing", n);
              if (r.bar) {
                E(r.bar, {
                  width: 100 * n + "%"
                });
              }
            });
            (function () {
              var n = t.options;
              var e = t.sibling;
              var i = [t.root, e ? e.root : null];
              if (n.pauseOnHover) {
                a(i, "mouseleave", 1, true);
                a(i, "mouseenter", 1, false);
              }
              if (n.pauseOnFocus) {
                a(i, "focusout", 2, true);
                a(i, "focusin", 2, false);
              }
              if (r.play) {
                t.on("click", function () {
                  s.play(2);
                  s.play(3);
                }, r.play);
              }
              if (r.pause) {
                a([r.pause], "click", 3, false);
              }
              t.on("move refresh", function () {
                s.play();
              }).on("destroy", function () {
                s.pause();
              });
            })();
            this.play();
          }
        },
        play: function (n) {
          if (undefined === n) {
            n = 0;
          }
          if (!(o = o.filter(function (t) {
            return t !== n;
          })).length) {
            t.emit(e + ":play");
            i.play(t.options.resetProgress);
          }
        },
        pause: function (n) {
          if (undefined === n) {
            n = 0;
          }
          i.pause();
          if (-1 === o.indexOf(n)) {
            o.push(n);
          }
          if (1 === o.length) {
            t.emit(e + ":pause");
          }
        }
      };
      function a(n, e, i, o) {
        n.forEach(function (n) {
          t.on(e, function () {
            s[o ? "play" : "pause"](i);
          }, n);
        });
      }
      return s;
    },
    Cover: function (t, n) {
      function e(t) {
        n.Elements.each(function (n) {
          var e = v(n.slide, "IMG")[0] || v(n.container, "IMG")[0];
          if (e && e.src) {
            i(e, t);
          }
        });
      }
      function i(t, n) {
        E(t.parentElement, {
          background: n ? "" : "center/cover no-repeat url(\"" + t.src + "\")"
        });
        E(t, {
          display: n ? "" : "none"
        });
      }
      return {
        required: t.options.cover,
        mount: function () {
          t.on("lazyload:loaded", function (t) {
            i(t, false);
          });
          t.on("mounted updated refresh", function () {
            return e(false);
          });
        },
        destroy: function () {
          e(true);
        }
      };
    },
    Arrows: lt,
    Pagination: gt,
    LazyLoad: function (t, n, e) {
      var i;
      var r;
      var s = t.options;
      var a = "sequential" === s.lazyLoad;
      function u() {
        r = [];
        i = 0;
      }
      function c(n) {
        n = isNaN(n) ? t.index : n;
        if (!(r = r.filter(function (t) {
          return !t.Slide.isWithin(n, s.perPage * (s.preloadPages + 1)) || (d(t.img, t.Slide), false);
        }))[0]) {
          t.off("moved." + e);
        }
      }
      function d(n, e) {
        k(e.slide, "is-loading");
        var i = m("span", {
          class: t.classes.spinner
        });
        w(n.parentElement, i);
        n.onload = function () {
          l(n, i, e, false);
        };
        n.onerror = function () {
          l(n, i, e, true);
        };
        C(n, "srcset", (n ? n.getAttribute("data-splide-lazy-srcset") : "") || "");
        C(n, "src", (n ? n.getAttribute("data-splide-lazy") : "") || "");
      }
      function f() {
        if (i < r.length) {
          var t = r[i];
          d(t.img, t.Slide);
        }
        i++;
      }
      function l(n, i, o, r) {
        S(o.slide, "is-loading");
        if (!r) {
          b(i);
          E(n, {
            display: ""
          });
          t.emit(e + ":loaded", n).emit("resize");
        }
        if (a) {
          f();
        }
      }
      return {
        required: s.lazyLoad,
        mount: function () {
          t.on("mounted refresh", function () {
            u();
            n.Elements.each(function (t) {
              o(t.slide.querySelectorAll("[data-splide-lazy], [data-splide-lazy-srcset]"), function (n) {
                if (!(n.src || n.srcset)) {
                  r.push({
                    img: n,
                    Slide: t
                  });
                  E(n, {
                    display: "none"
                  });
                }
              });
            });
            if (a) {
              f();
            }
          });
          if (!a) {
            t.on("mounted refresh moved." + e, c);
          }
        },
        destroy: u
      };
    },
    Keyboard: function (t) {
      var n;
      return {
        mount: function () {
          t.on("mounted updated", function () {
            var e = t.options;
            var i = t.root;
            var o = _t[e.direction];
            var r = e.keyboard;
            if (n) {
              t.off("keydown", n);
              I(i, "tabindex");
            }
            if (r) {
              if ("focused" === r) {
                n = i;
                C(i, "tabindex", 0);
              } else {
                n = document;
              }
              t.on("keydown", function (n) {
                if (o[n.key]) {
                  t.go(o[n.key]);
                }
              }, n);
            }
          });
        }
      };
    },
    Sync: function (t) {
      var n = t.sibling;
      var e = n && n.options.isNavigation;
      function i() {
        t.on("move.sync", function (t, e, i) {
          n.off("move.sync").go(n.is("loop") ? i : t, false);
          o();
        });
      }
      function o() {
        n.on("move.sync", function (n, e, o) {
          t.off("move.sync").go(t.is("loop") ? o : n, false);
          i();
        });
      }
      function r() {
        n.Components.Elements.each(function (n) {
          var e = n.slide;
          var i = n.index;
          t.off("mouseup touchend", e).on("mouseup touchend", function (t) {
            if (!(t.button && 0 !== t.button)) {
              s(i);
            }
          }, e);
          t.off("keyup", e).on("keyup", function (t) {
            if (Ct.indexOf(t.key) > -1) {
              t.preventDefault();
              s(i);
            }
          }, e, {
            passive: false
          });
        });
      }
      function s(e) {
        if (t.State.is(3)) {
          n.go(e);
        }
      }
      return {
        required: !!n,
        mount: function () {
          i();
          o();
          if (e) {
            r();
            t.on("refresh", function () {
              setTimeout(function () {
                r();
                n.emit("navigation:updated", t);
              });
            });
          }
        },
        mounted: function () {
          if (e) {
            n.emit("navigation:mounted", t);
          }
        }
      };
    },
    A11y: kt
  };
  var It = function (t) {
    function i(n, e) {
      return t.call(this, n, e, zt) || this;
    }
    i.prototype = Object.create(t.prototype);
    i.prototype.constructor = i;
    i.__proto__ = t;
    return i;
  }(U);
  window.Splide = It;
}();
