(window.webpackJsonp = window.webpackJsonp || []).push([
    [186], {
        1153: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetServicesSettingsT8V1", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = (n(17), n(14)),
                f = n(10),
                v = n.n(f),
                m = n(365),
                w = n(124);

            function k(t) {
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
            var y = function(t) {
                    Object(c.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(m.b),
                h = d.componentFactory.create({
                    props: {
                        widgetKey: v.a.ofAny().required,
                        settings: v.a.ofType().required,
                        isEnabledEditor: v.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.gb, {
                            class: "services services-t8 services-t8-v1 kmb-widget-bg",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid kmb-widget-container-fluid-frame"
                        }, [t("div", {
                            class: "kmb-widget-content-info services-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t("div", {
                            class: "kmb-widget-row items-center"
                        }, [t("div", {
                            class: "md-w-1-2 w-full kmb-widget-col"
                        }, [t(w.j, {
                            attrs: {
                                settings: s,
                                isEnabledDivider: !1,
                                isDescription: !1
                            },
                            class: "md-text-left text-center"
                        })]), t("div", {
                            class: "md-w-1-2 w-full kmb-widget-col mt-5"
                        }, [t("div", {
                            class: "kmb-widget-row justify-center"
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t("div", {
                                class: "lg-w-1-4 w-full kmb-widget-col kmb-widget-col-group"
                            }, [t(w.X, {
                                attrs: {
                                    value: e.serviceName
                                },
                                class: "kmb-widget-item-title kmb-service-name md-text-left text-center"
                            })])
                        }))])])])])])])])
                    }
                });
            e.default = h
        }
    }
]);