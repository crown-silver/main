(window.webpackJsonp = window.webpackJsonp || []).push([
    [81], {
        783: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetBannerSettingsT8V1", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                f = (n(17), n(14)),
                d = n(10),
                h = n.n(d),
                m = n(13),
                v = n.n(m),
                y = n(315),
                w = n(124),
                k = n(18),
                j = n(5),
                O = n(2);

            function R(t) {
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
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(c.a)(n, t);
                    var e = R(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(y.b),
                B = f.componentFactory.create({
                    props: {
                        settings: h.a.ofType().required,
                        isEnabledEditor: h.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.gb, {
                            class: "banner banner-t8 banner-t8-v1 kmb-widget-bg",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t("div", {
                            class: "kmb-widget-content-info kmb-text-center py-10"
                        }, [t("div", {
                            class: "kmb-widget-row items-center md-justify-between justify-center"
                        }, [t("div", {
                            class: "md-w-1-2 kmb-widget-col text-left kmb-md-widget-col-group"
                        }, [t(w.X, {
                            attrs: {
                                value: s.title
                            }
                        })]), t("div", {
                            class: "md-w-1-2 kmb-widget-col text-right"
                        }, [t("ul", {
                            class: "kmb-blog-post-share-actions-list kmb-md-widget-row justify-end"
                        }, [!Object(j.O)(this.settings.shareActions) && (null === (e = this.settings.shareActions) || void 0 === e ? void 0 : e.map((function(e) {
                            return t("li", {
                                class: v()("kmb-md-widget-col")
                            }, [t("a", {
                                attrs: {
                                    href: e.url || "#",
                                    title: Object(j.C)(O.Zc[e.type])
                                },
                                class: "kmb-share-icon-wrap",
                                ref: "noreferrer"
                            }, [t("i", {
                                class: v()(Object(k.n)(e.type))
                            })])])
                        })))])])])])])])
                    }
                });
            e.default = B
        },
        784: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetBannerSettingsT8V2", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                f = (n(17), n(14)),
                d = n(10),
                h = n.n(d),
                m = n(13),
                v = n.n(m),
                y = n(315),
                w = n(124),
                k = n(18),
                j = n(5),
                O = n(2);

            function R(t) {
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
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(c.a)(n, t);
                    var e = R(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(y.c),
                B = f.componentFactory.create({
                    props: {
                        settings: h.a.ofType().required,
                        isEnabledEditor: h.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.gb, {
                            class: "banner banner-t8 banner-t8-v2",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t("div", {
                            class: "kmb-widget-content-info"
                        }, [t("div", {
                            class: "text-center kmb-widget-col-group"
                        }, [t(w.X, {
                            attrs: {
                                value: s.title
                            }
                        })]), t("div", {
                            class: "text-center"
                        }, [t("ul", {
                            class: "kmb-blog-post-share-actions-list kmb-md-widget-row justify-center"
                        }, [!Object(j.O)(this.settings.shareActions) && (null === (e = this.settings.shareActions) || void 0 === e ? void 0 : e.map((function(e) {
                            return t("li", {
                                class: v()("kmb-md-widget-col")
                            }, [t("a", {
                                attrs: {
                                    href: e.url || "#",
                                    title: Object(j.C)(O.Zc[e.type])
                                },
                                class: "kmb-share-icon-wrap",
                                ref: "noreferrer"
                            }, [t("i", {
                                class: v()(Object(k.n)(e.type))
                            })])])
                        })))])])])])])
                    }
                });
            e.default = B
        }
    }
]);