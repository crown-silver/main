(window.webpackJsonp = window.webpackJsonp || []).push([
    [79], {
        781: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetBannerSettingsT6V1", (function() {
                return x
            }));
            n(12);
            var o = n(0),
                r = n(3),
                l = n(11),
                c = n(6),
                d = (n(17), n(14)),
                f = n(10),
                m = n.n(f),
                h = n(18),
                v = n(5),
                w = n(338),
                y = n(124);

            function T(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(c.a)(t);
                    if (e) {
                        var r = Object(c.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(l.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(r.a)(n, t);
                    var e = T(n);

                    function n() {
                        return Object(o.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.b),
                k = d.componentFactory.create({
                    props: {
                        widget: m.a.ofType().required,
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1)
                    },
                    computed: {
                        slidesCount: function() {
                            var t, e, n, o = this.settings.items;
                            if (Object(v.O)(o)) return 1;
                            var r = o[0];
                            Object(h.E)(r.promoTitle);
                            var l = null === (t = Object(v.jb)(null === (e = r.promoTitle.lczText) || void 0 === e ? void 0 : e.lczValue)) || void 0 === t ? void 0 : t.length,
                                c = null === (n = r.promoTitle) || void 0 === n ? void 0 : n.maxChars;
                            return Math.round(c / l + 1)
                        }
                    },
                    render: function(t) {
                        var e, n = this,
                            s = this.settings;
                        return t(y.gb, {
                            class: "banner banner-t6 banner-t6-v1",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid kmb-widget-container-fluid-frame"
                        }, [t("div", {
                            class: "kmb-widget-content-info kmb-text-center"
                        }, [s.items && t(y.S, {
                            attrs: {
                                nav: !1,
                                autoPlay: null === (e = s.isEnabledAutoPlay) || void 0 === e ? void 0 : e.isEnabled,
                                settings: {
                                    itemsToShow: this.slidesCount,
                                    infiniteScroll: !0,
                                    breakpoints: {
                                        0: {
                                            itemsToShow: this.slidesCount <= 3 ? 1 : this.slidesCount - 2
                                        },
                                        560: {
                                            itemsToShow: this.slidesCount - 1
                                        },
                                        992: {
                                            itemsToShow: this.slidesCount - 1
                                        },
                                        1260: {
                                            itemsToShow: this.slidesCount
                                        }
                                    }
                                }
                            },
                            class: "kmb-widget-xl-x-slider-row"
                        }, [s.items.map((function(e, o) {
                            return t(y.T, {
                                attrs: {
                                    index: o
                                },
                                key: o,
                                class: "kmb-widget-xl-x-col text-center py-16"
                            }, [t(y.cb, {
                                attrs: {
                                    widgetIndex: n.widgetIndex,
                                    value: n.settings.items[0].promoTitle,
                                    isEnabledDivider: !1
                                },
                                class: "kmb-widget-banner-slider-item-title kmb-widget-el-mb-0"
                            })])
                        }))])])])])
                    }
                });
            e.default = k
        }
    }
]);