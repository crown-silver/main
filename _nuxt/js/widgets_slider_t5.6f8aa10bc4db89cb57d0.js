(window.webpackJsonp = window.webpackJsonp || []).push([
    [193], {
        1183: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "WidgetSliderSettingsT5V1", (function() {
                return h
            }));
            n(12);
            var r = n(0),
                d = n(3),
                o = n(11),
                c = n(6),
                l = (n(17), n(14)),
                m = n(10),
                f = n.n(m),
                y = n(367),
                w = n(124),
                k = n(570);

            function v(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(c.a)(e);
                    if (t) {
                        var d = Object(c.a)(this).constructor;
                        n = Reflect.construct(r, arguments, d)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var h = function(e) {
                    Object(d.a)(n, e);
                    var t = v(n);

                    function n() {
                        return Object(r.a)(this, n), t.apply(this, arguments)
                    }
                    return n
                }(y.b),
                T = l.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().required,
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(e) {
                        var t = this,
                            s = this.settings;
                        return e(w.gb, {
                            class: "slider slider-t5 slider-t5-v1",
                            attrs: {
                                settings: this.settings
                            }
                        }, [e("div", {
                            class: "kmb-widget-container-fluid"
                        }, [e("div", {
                            class: "kmb-widget-content-info kmb-widget-slider-content"
                        }, [e("div", {
                            class: "kmb-widget-content"
                        }, [s.images && e(w.S, {
                            attrs: {
                                settings: {
                                    itemsToShow: 1
                                },
                                navigationType: s.sliderNavigationType,
                                indicatorsType: this.sliderIndicatorsType,
                                nav: !0,
                                indicators: !0
                            },
                            class: "kmb-slider-inside-navigation kmb-widget-slider-inside-space-row kmb-slider-inside-navigation-opacity-circle"
                        }, [s.images.map((function(n, r) {
                            return e(w.T, {
                                attrs: {
                                    index: r
                                },
                                key: n.key || r
                            }, [e(w.c, {
                                attrs: {
                                    image: n,
                                    imageResize: s.imageResize,
                                    imageIndex: r,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-full-bg-item kmb-widget-item-content kmb-widget-hidden-bg-image kmb-widget-bg-image-with-overlay w-full"
                            }, [e("div", {
                                class: "kmb-widget-overlay"
                            }, [e("div", {
                                class: "kmb-widget-overlay-content flex items-center justify-around"
                            }, [e("div", {
                                class: "items-center py-24 lg-w-4-5 md-w-1-2 w-2-3"
                            }, [e("div", {
                                class: "kmb-xl-widget-container"
                            }, [e(k.a, {
                                attrs: {
                                    widgetIndex: t.widgetIndex,
                                    blockType: "clear",
                                    item: s
                                },
                                class: "kmb-widget-info-left"
                            })])])])])])])
                        }))])])])])])
                    }
                });
            t.default = T
        },
        570: function(e, t, n) {
            "use strict";
            var r = n(14),
                d = n(10),
                o = n.n(d),
                c = n(13),
                l = n.n(c),
                m = n(2),
                f = n(124),
                y = r.componentFactory.create({
                    name: "BlockItem",
                    props: {
                        item: o.a.ofAny().required,
                        widgetIndex: o.a.ofType().required,
                        theme: o.a.ofType().optional,
                        blockType: o.a.ofType().default("right"),
                        isEnabledButtons: o.a.ofType().default(!0),
                        isEnabledDivider: o.a.ofType().default(!1),
                        isEnabledSecondaryButton: o.a.ofType().default(!0)
                    },
                    methods: {
                        renderContent: function(e, t) {
                            return e("div", {
                                class: l()(t)
                            }, [e(f.m, {
                                attrs: {
                                    settings: this.item
                                }
                            }, [e(f.cb, {
                                attrs: {
                                    widgetIndex: this.widgetIndex,
                                    value: this.item.title,
                                    isEnabledDivider: this.isEnabledDivider
                                },
                                class: "kmb-slider-title"
                            }), e(f.p, {
                                attrs: {
                                    value: this.item.description
                                },
                                class: "kmb-slider-description"
                            }), e(f.h, {
                                class: "kmb-widget-btn-group-center flex justify-center"
                            }, [e(f.g, {
                                attrs: {
                                    value: this.item.primaryButton,
                                    elementType: m.Pd.Primary
                                },
                                class: "kmb-widget-primary-btn"
                            }), this.isEnabledSecondaryButton && e(f.g, {
                                attrs: {
                                    value: this.item.secondaryButton,
                                    elementType: m.Pd.Secondary,
                                    classNames: "kmb-widget-secondary-btn"
                                }
                            })])])])
                        }
                    },
                    render: function(e) {
                        return "right" === this.blockType ? e("div", {
                            class: "kmb-widget-slider-right-title-main-block z-10"
                        }, [e("div", {
                            class: "container"
                        }, [this.renderContent(e, "kmb-slide-content-box lg-w-1-2 md-w-3-5 w-3-4 px-8 lg-py-24 py-16 shadow-md")])]) : "left" === this.blockType ? e("div", {
                            class: "kmb-widget-slider-left-title-main-block z-10"
                        }, [e("div", {
                            class: "container"
                        }, [this.renderContent(e, "kmb-slide-content-box lg-w-1-2 md-w-3-5 w-4-5 px-8 lg-py-24 py-16 shadow-md")])]) : "center" === this.blockType ? e("div", {
                            class: "kmb-widget-slider-center-title-main-block relative z-10"
                        }, [e("div", {
                            class: "container mx-auto"
                        }, [this.renderContent(e, "kmb-slide-content-box mx-auto md-p-16 p-12")])]) : "clear" === this.blockType ? e("div", {
                            class: "w-full kmb-slide-content kmb-text-center z-10"
                        }, [e("div", {
                            class: "kmb-widget-default-info"
                        }, [this.renderContent(e, "kmb-widget-titles-info")])]) : void 0
                    }
                });
            t.a = y
        }
    }
]);