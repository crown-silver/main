(window.webpackJsonp = window.webpackJsonp || []).push([
    [78], {
        780: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetBannerSettingsT5V1", (function() {
                return k
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(14),
                f = n(10),
                v = n.n(f),
                y = n(2),
                h = n(337),
                m = n(124);

            function w(t) {
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
            var k = function(t) {
                    Object(c.a)(n, t);
                    var e = w(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(h.b),
                x = d.componentFactory.create({
                    props: {
                        widgetIndex: v.a.ofType().default(0),
                        settings: v.a.ofType().required,
                        isEnabledEditor: v.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, n, s = this.settings;
                        return t(m.gb, {
                            class: "banner banner-t5 banner-t5-v1 kmb-widget-bg",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t("div", {
                            class: "kmb-widget-content-info kmb-text-center"
                        }, [t(m.m, {
                            attrs: {
                                settings: s
                            }
                        }, [t("div", {
                            class: "flex flex-col justify-center"
                        }, [t(m.W, {
                            attrs: {
                                value: s.subtitle
                            }
                        }), t(m.cb, {
                            attrs: {
                                value: this.settings.title,
                                widgetIndex: this.widgetIndex,
                                isEnabledDivider: !1
                            },
                            class: "kmb-banner-title"
                        }), t(m.h, {
                            attrs: {
                                isEnabled: null === (e = this.settings.primaryButton) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(m.g, {
                            attrs: {
                                value: this.settings.primaryButton,
                                isEnabled: null === (n = this.settings.primaryButton) || void 0 === n ? void 0 : n.isEnabled,
                                elementType: y.Pd.Primary
                            }
                        })])])])])])])
                    }
                });
            e.default = x
        }
    }
]);