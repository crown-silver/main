(window.webpackJsonp = window.webpackJsonp || []).push([
    [212], {
        1195: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetSmartBannerSettingsT8V1", (function() {
                return h
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(14),
                f = n(10),
                m = n.n(f),
                w = n(372),
                v = n(124);

            function y(t) {
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
            var h = function(t) {
                    Object(c.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.b),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.gb, {
                            class: "smart-banner smart-banner-t8 smart-banner-t8-v1",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [t("div", {
                            class: "kmb-smart-banner-content md-py-10 py-5"
                        }, [t("div", {
                            class: "kmb-widget-row items-center justify-center"
                        }, [t("div", {
                            class: "kmb-widget-col md-w-1-2-2 w-full"
                        }, [t("div", {
                            class: "kmb-sm-widget-container"
                        }, [t(v.R, {
                            attrs: {
                                value: s.subtitle
                            },
                            class: "kmb-smart-banner-title kmb-widget-title-no-divider text-center"
                        }), t(v.n, {
                            attrs: {
                                value: s.finishDate
                            },
                            class: "kmb-smart-banner-countdown-revert kmb-live-editor-widget-field-wrap-content-full-width flex md-mb-0 mb-3"
                        })])]), t("div", {
                            class: "kmb-widget-col md-w-1-2-1 w-full"
                        }, [t(v.y, {
                            attrs: {
                                value: s.image,
                                imageIndex: 0,
                                resize: s.imageResize,
                                widgetVariation: s.widgetVariation
                            }
                        })])])])])])
                    }
                });
            e.default = k
        }
    }
]);