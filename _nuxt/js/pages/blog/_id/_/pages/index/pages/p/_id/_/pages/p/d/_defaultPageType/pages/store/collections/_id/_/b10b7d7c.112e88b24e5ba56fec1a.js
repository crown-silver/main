(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        575: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return F
            })), n.d(t, "e", (function() {
                return K
            })), n.d(t, "j", (function() {
                return H
            })), n.d(t, "h", (function() {
                return J
            })), n.d(t, "k", (function() {
                return $
            })), n.d(t, "f", (function() {
                return Q
            })), n.d(t, "i", (function() {
                return X
            })), n.d(t, "g", (function() {
                return _
            })), n.d(t, "a", (function() {
                return ee
            })), n.d(t, "b", (function() {
                return te
            })), n.d(t, "c", (function() {
                return ne
            }));
            n(12);
            var c, r, l, o, h, d, w, f, O, j, m, y, V, v, z, C, E, T = n(7),
                S = n(0),
                A = n(4),
                x = n(3),
                k = n(11),
                R = n(6),
                M = (n(15), n(8)),
                I = n(1),
                P = n(5),
                B = n(2);

            function N(e) {
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
                    var n, c = Object(R.a)(e);
                    if (t) {
                        var r = Object(R.a)(this).constructor;
                        n = Reflect.construct(c, arguments, r)
                    } else n = c.apply(this, arguments);
                    return Object(k.a)(this, n)
                }
            }
            var L = {};
            Object(P.x)(B.Ec).forEach((function(e) {
                L[e] = new B.db({
                    isEnabled: !0
                })
            }));
            var D = {};
            Object(P.x)(B.Rc).forEach((function(e) {
                D[e] = new B.db({
                    isEnabled: !0
                })
            }));
            var F = function(e) {
                    Object(x.a)(n, e);
                    var t = N(n);

                    function n(e) {
                        var c;
                        return Object(S.a)(this, n), (c = t.call(this, e)).widgetCategory = "ProductSettings", c.widgetType = M.J.ProductSettingsT1, c.imageGallery = new B.yc({
                            type: B.Ec.ImageGallery,
                            groupType: B.zc.Slider,
                            layoutType: B.Ac.Vertical,
                            variationType: B.Cc.V1,
                            settings: new B.Bc({
                                isEnabledImageZoom: !1
                            })
                        }), c.widgetBackgroundColor = null, c.widgetTextColor = null, c.widgets = [new B.xc({
                            key: Object(P.ob)(),
                            name: "Product/Widget/General",
                            type: B.Ec.General,
                            settings: new H,
                            isEnabled: !0,
                            isHiddenOnMobile: !1
                        }), new B.xc({
                            key: Object(P.ob)(),
                            name: "Product/Widget/Actions/v1",
                            type: B.Ec.Actions,
                            settings: new J,
                            isEnabled: !0,
                            isHiddenOnMobile: !1
                        })], c.enabledSettings = L, Object.assign(Object(A.a)(c), e), c
                    }
                    return n
                }(B.Dc),
                K = function(e) {
                    Object(x.a)(n, e);
                    var t = N(n);

                    function n(e) {
                        var c;
                        return Object(S.a)(this, n), (c = t.call(this, e)).widgetVariation = c.constructor.name, Object.assign(Object(A.a)(c), e), c
                    }
                    return n
                }(F),
                G = {};
            Object(P.x)(M.o).forEach((function(e) {
                G[e] = new B.db({
                    isEnabled: !0
                })
            }));
            var H = function e(t) {
                    Object(S.a)(this, e), this.elementShowSettings = G, Object.assign(this, t)
                },
                W = {};
            Object(P.x)(M.j).forEach((function(e) {
                W[e] = new B.db({
                    isEnabled: !0
                })
            }));
            var J = function e(t) {
                    Object(S.a)(this, e), this.variationType = M.k.V1, this.elementShowSettings = W, this.buyNowButton = new I.p({
                        lczText: new I.M({
                            lczValue: "Buy now"
                        }),
                        urlType: B.Td.ExternalLink,
                        externalLink: "/store/checkout",
                        elementType: B.Pd.StorePrimary
                    }), this.addToCartButton = new I.p({
                        lczText: new I.M({
                            lczValue: "Add to cart"
                        }),
                        elementType: B.Pd.StoreSecondary
                    }), this.askFormSettings = new _, this.shareActions = D, Object.assign(this, t)
                },
                U = function(e) {
                    Object(x.a)(n, e);
                    var t = N(n);

                    function n(e) {
                        var c;
                        return Object(S.a)(this, n), (c = t.call(this, e)).icon = M.u.Shipping, c.uploadedIcon = new I.K, c.description = new I.z, Object.assign(Object(A.a)(c), e), c
                    }
                    return n
                }(I.i),
                Z = {};
            Object(P.x)(M.q).forEach((function(e) {
                Z[e] = new B.db({
                    isEnabled: !0
                })
            }));
            var $ = function e(t) {
                    Object(S.a)(this, e), this.icon = M.r.Flame, this.uploadedIcon = new I.K, this.timerType = M.D.AllUsers, this.description = new I.z({
                        lczText: new I.M({
                            lczValue: "Sale title"
                        })
                    }), this.iconResize = {
                        width: 20,
                        height: 24
                    }, this.finishDate = new I.y, this.variationType = M.s.V1, this.elementShowSettings = Z, Object.assign(this, t)
                },
                Q = function e(t) {
                    Object(S.a)(this, e), this.variationType = M.v.V1, this.subtitle = new I.rb({
                        lczText: new I.M({
                            lczValue: "Shipping & Return"
                        })
                    }), this.iconResize = {
                        width: 32,
                        height: 32
                    }, this.elementShowSettings = Object(T.a)({}, M.t.Subtitle, new B.db({
                        isEnabled: !0
                    })), this.shippingAndReturnItems = [new U({
                        icon: M.u.Shipping,
                        uploadedIcon: new I.K,
                        description: new I.z({
                            lczText: new I.M({
                                lczValue: "<b>Estimated Delivery</b>: Apr 26 - Apr 30"
                            })
                        })
                    }), new U({
                        icon: M.u.Free,
                        uploadedIcon: new I.K,
                        description: new I.z({
                            lczText: new I.M({
                                lczValue: "<b>Free Shipping & Returns</b>: On all orders over $75"
                            })
                        })
                    }), new U({
                        icon: M.u.Eye,
                        uploadedIcon: new I.K,
                        description: new I.z({
                            lczText: new I.M({
                                lczValue: "<b>Other want this</b>: 87 people have this in the cards right now"
                            })
                        })
                    })], Object.assign(this, t)
                },
                X = function e(t) {
                    Object(S.a)(this, e), this.variationType = M.n.V1, this.subtitle = new I.rb({
                        lczText: new I.M({
                            lczValue: "Guaranteed safe checkout"
                        })
                    }), this.elementShowSettings = Object(T.a)({}, M.m.Subtitle, new B.db({
                        isEnabled: !0
                    })), this.garantedSafeCheckout = [new I.K({
                        imageUrl: "product-img-pack/checkout/Visa.png"
                    }), new I.K({
                        imageUrl: "product-img-pack/checkout/Mastercard.png"
                    }), new I.K({
                        imageUrl: "product-img-pack/checkout/PayPal.png"
                    })], Object.assign(this, t)
                },
                Y = function e(t) {
                    Object(S.a)(this, e), this.tabs = new I.m, this.variationType = M.l.V1, Object.assign(this, t)
                },
                _ = function e(t) {
                    Object(S.a)(this, e), this.fields = [new I.D({
                        lczText: new I.M({
                            lczValue: "First name"
                        }),
                        type: B.ib.Input,
                        isEnabled: !0
                    }), new I.D({
                        lczText: new I.M({
                            lczValue: "Last name"
                        }),
                        type: B.ib.Input,
                        isEnabled: !0
                    }), new I.D({
                        lczText: new I.M({
                            lczValue: "Email address"
                        }),
                        type: B.ib.Input,
                        isEnabled: !0,
                        isMandatory: !0,
                        validationRule: B.jb.Email
                    }), new I.D({
                        lczText: new I.M({
                            lczValue: "Phone"
                        }),
                        type: B.ib.Input,
                        isEnabled: !0,
                        validationRule: B.jb.NumbersOnly
                    }), new I.D({
                        lczText: new I.M({
                            lczValue: "Notes"
                        }),
                        type: B.ib.TextArea,
                        isEnabled: !0
                    })], this.button = new I.p({
                        lczText: new I.M({
                            lczValue: "submit"
                        }),
                        elementType: B.Pd.StorePrimary
                    }), Object.assign(this, t)
                },
                ee = (B.Ec.Promotion, M.s.V1, new $({
                    variationType: M.s.V1
                }), B.Ec.Variations, M.w.V1, new function e(t) {
                    Object(S.a)(this, e), this.variationType = M.w.V1, Object.assign(this, t)
                }({
                    variationType: M.w.V1
                }), B.Ec.ShippingAndReturn, M.v.V1, new Q({
                    variationType: M.v.V1
                }), B.Ec.GarantedSafeCheckout, M.n.V1, new X({
                    variationType: M.n.V1
                }), B.Ec.AdditionalInformation, M.l.V1, new Y({
                    variationType: M.l.V1
                }), B.Ec.AdditionalInformation, M.l.V2, new Y({
                    variationType: M.l.V2
                }), B.Ec.AdditionalInformation, M.l.V3, new Y({
                    variationType: M.l.V3
                }), c = {}, Object(T.a)(c, B.Ac.Vertical, "kmb-product-gallery-vertical-variation"), Object(T.a)(c, B.Ac.Square, "kmb-product-gallery-square-variation"), Object(T.a)(c, B.Ac.Horizontal, "kmb-product-gallery-horizontal-variation"), Object(T.a)(c, B.Ac.Combo, "kmb-product-gallery-combo-variation"), c),
                te = (d = {}, Object(T.a)(d, B.Ac.Vertical, (r = {}, Object(T.a)(r, B.Cc.V1, 1), Object(T.a)(r, B.Cc.V2, 4), Object(T.a)(r, B.Cc.V3, 2), r)), Object(T.a)(d, B.Ac.Square, (l = {}, Object(T.a)(l, B.Cc.V1, 1), Object(T.a)(l, B.Cc.V2, 4), l)), Object(T.a)(d, B.Ac.Horizontal, (o = {}, Object(T.a)(o, B.Cc.V1, 1), Object(T.a)(o, B.Cc.V2, 2), o)), Object(T.a)(d, B.Ac.Combo, (h = {}, Object(T.a)(h, B.Cc.V1, 3), Object(T.a)(h, B.Cc.V2, 3), Object(T.a)(h, B.Cc.V3, 3), h)), d),
                ne = (E = {}, Object(T.a)(E, B.zc.Slider, (j = {}, Object(T.a)(j, B.Ac.Vertical, (w = {}, Object(T.a)(w, B.Cc.V1, {
                    size: {
                        width: 540,
                        height: 695
                    }
                }), Object(T.a)(w, B.Cc.V2, {
                    size: {
                        width: 540,
                        height: 762
                    }
                }), Object(T.a)(w, B.Cc.V3, {
                    size: {
                        width: 423,
                        height: 608
                    }
                }), Object(T.a)(w, B.Cc.V4, {
                    size: {
                        width: 540,
                        height: 762
                    }
                }), w)), Object(T.a)(j, B.Ac.Square, (f = {}, Object(T.a)(f, B.Cc.V1, {
                    size: {
                        width: 540,
                        height: 540
                    }
                }), Object(T.a)(f, B.Cc.V2, {
                    size: {
                        width: 540,
                        height: 540
                    }
                }), Object(T.a)(f, B.Cc.V3, {
                    size: {
                        width: 436,
                        height: 436
                    }
                }), Object(T.a)(f, B.Cc.V4, {
                    size: {
                        width: 540,
                        height: 540
                    }
                }), f)), Object(T.a)(j, B.Ac.Horizontal, (O = {}, Object(T.a)(O, B.Cc.V1, {
                    size: {
                        width: 540,
                        height: 380
                    }
                }), Object(T.a)(O, B.Cc.V2, {
                    size: {
                        width: 540,
                        height: 380
                    }
                }), Object(T.a)(O, B.Cc.V3, {
                    size: {
                        width: 424,
                        height: 305
                    }
                }), Object(T.a)(O, B.Cc.V4, {
                    size: {
                        width: 540,
                        height: 423
                    }
                }), O)), j)), Object(T.a)(E, B.zc.FixedImages, (z = {}, Object(T.a)(z, B.Ac.Vertical, (m = {}, Object(T.a)(m, B.Cc.V1, {
                    classNames: "w-full",
                    size: {
                        width: 540,
                        height: 754
                    }
                }), Object(T.a)(m, B.Cc.V2, {
                    classNames: "md-w-1-2 w-full",
                    size: {
                        width: 262,
                        height: 340
                    }
                }), Object(T.a)(m, B.Cc.V3, {
                    classNames: "md-w-1-2 w-full",
                    size: {
                        width: 262,
                        height: 520
                    }
                }), m)), Object(T.a)(z, B.Ac.Square, (y = {}, Object(T.a)(y, B.Cc.V1, {
                    classNames: "w-full",
                    size: {
                        width: 540,
                        height: 540
                    }
                }), Object(T.a)(y, B.Cc.V2, {
                    classNames: "md-w-1-2 w-full",
                    size: {
                        width: 262,
                        height: 262
                    }
                }), y)), Object(T.a)(z, B.Ac.Horizontal, (V = {}, Object(T.a)(V, B.Cc.V1, {
                    classNames: "w-full",
                    size: {
                        width: 540,
                        height: 400
                    }
                }), Object(T.a)(V, B.Cc.V2, {
                    classNames: "w-full",
                    size: {
                        width: 540,
                        height: 340
                    }
                }), V)), Object(T.a)(z, B.Ac.Combo, (v = {}, Object(T.a)(v, B.Cc.V1, {
                    classNames: ["w-full", "md-w-1-2 w-full", "md-w-1-2 w-full"],
                    sizes: [{
                        width: 540,
                        height: 340
                    }, {
                        width: 262,
                        height: 262
                    }, {
                        width: 262,
                        height: 262
                    }]
                }), Object(T.a)(v, B.Cc.V2, {
                    classNames: ["md-w-1-2 w-full", "md-w-1-2 w-full", "w-full"],
                    sizes: [{
                        width: 262,
                        height: 400
                    }, {
                        width: 262,
                        height: 400
                    }, {
                        width: 540,
                        height: 340
                    }]
                }), Object(T.a)(v, B.Cc.V3, {
                    classNames: ["md-w-1-2 w-full", "md-w-1-2 w-full", "md-w-1-2 w-full"],
                    sizes: [{
                        width: 261,
                        height: 540
                    }, {
                        width: 262,
                        height: 262
                    }, {
                        width: 262,
                        height: 262
                    }]
                }), v)), z)), Object(T.a)(E, B.zc.GalleryOnScroll, (C = {}, Object(T.a)(C, B.Ac.Vertical, Object(T.a)({}, B.Cc.V1, {
                    classNames: ["w-full", "md-w-1-2 w-full", "md-w-1-2 w-full"],
                    sizes: [{
                        width: 540,
                        height: 764
                    }, {
                        width: 262,
                        height: 340
                    }, {
                        width: 262,
                        height: 340
                    }]
                })), Object(T.a)(C, B.Ac.Square, Object(T.a)({}, B.Cc.V1, {
                    classNames: ["w-full", "md-w-1-2 w-full", "md-w-1-2 w-full"],
                    sizes: [{
                        width: 540,
                        height: 540
                    }, {
                        width: 262,
                        height: 262
                    }, {
                        width: 262,
                        height: 262
                    }]
                })), Object(T.a)(C, B.Ac.Combo, Object(T.a)({}, B.Cc.V1, {
                    classNames: ["md-w-1-3 w-full", "md-w-2-3 w-full", "md-w-2-3 w-full", "md-w-1-3 w-full"],
                    sizes: [{
                        width: 174,
                        height: 340
                    }, {
                        width: 350,
                        height: 340
                    }, {
                        width: 350,
                        height: 340
                    }, {
                        width: 174,
                        height: 340
                    }]
                })), C)), E)
        },
        584: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return m
            })), n.d(t, "a", (function() {
                return v
            }));
            n(12);
            var c = n(0),
                r = n(4),
                l = n(3),
                o = n(11),
                h = n(6),
                d = (n(15), n(8)),
                w = n(5),
                f = n(1),
                O = n(2);

            function j(e) {
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
                    var n, c = Object(h.a)(e);
                    if (t) {
                        var r = Object(h.a)(this).constructor;
                        n = Reflect.construct(c, arguments, r)
                    } else n = c.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var m = function(e) {
                    Object(l.a)(n, e);
                    var t = j(n);

                    function n(e) {
                        var l;
                        return Object(c.a)(this, n), (l = t.call(this, e)).widgetVariation = l.constructor.name, Object.assign(Object(r.a)(l), e), l
                    }
                    return n
                }(function(e) {
                    Object(l.a)(n, e);
                    var t = j(n);

                    function n(e) {
                        var l;
                        return Object(c.a)(this, n), (l = t.call(this, e)).widgetCategory = "CollectionWidgetSettings", l.widgetType = d.J.CollectionWidgetSettingsT1, l.widgetTopPadding = 0, l.widgetBottomPadding = 0, Object.assign(Object(r.a)(l), e), l
                    }
                    return n
                }(O.E)),
                y = {},
                V = {};
            Object(w.x)(O.D).forEach((function(e) {
                y[e] = new O.db({
                    isEnabled: !0
                })
            })), Object(w.x)(O.z).forEach((function(e) {
                V[e] = new O.db({
                    isEnabled: !0
                })
            }));
            var v = function(e) {
                Object(l.a)(n, e);
                var t = j(n);

                function n(e) {
                    var l;
                    return Object(c.a)(this, n), (l = t.call(this, e)).structureType = O.C.Simple, l.topFilterEnabledSettings = y, l.productElementShowSettings = V, l.sidebarWidgets = [new O.A({
                        key: Object(w.ob)(),
                        type: O.B.Collections,
                        isEnabled: !0,
                        labelOverride: new f.M({
                            lczValue: "Collections"
                        }),
                        contentListItems: []
                    }), new O.A({
                        key: Object(w.ob)(),
                        type: O.B.Tags,
                        isEnabled: !0,
                        labelOverride: new f.M({
                            lczValue: "Tags"
                        }),
                        contentListItems: []
                    }), new O.A({
                        key: Object(w.ob)(),
                        type: O.B.Price,
                        isEnabled: !0,
                        labelOverride: new f.M({
                            lczValue: "Price range"
                        }),
                        contentListItems: []
                    }), new O.A({
                        key: Object(w.ob)(),
                        type: O.B.Filters,
                        isEnabled: !0,
                        labelOverride: new f.M({
                            lczValue: "Filters"
                        }),
                        contentListItems: []
                    }), new O.A({
                        key: Object(w.ob)(),
                        type: O.B.Rating,
                        isEnabled: !0,
                        labelOverride: new f.M({
                            lczValue: "Rating"
                        }),
                        contentListItems: []
                    }), new O.A({
                        key: Object(w.ob)(),
                        type: O.B.Subscribe,
                        isEnabled: !0,
                        labelOverride: new f.M({
                            lczValue: "Subscribe to our newsletter"
                        }),
                        subscribe: new O.Tc({
                            description: new f.z({
                                lczText: new f.M({
                                    lczValue: "Do you want to know all the news? Subscribe our newsletter to get weekly updates."
                                })
                            }),
                            formSettings: new f.bb
                        })
                    })], l.filterWidgets = [new O.x({
                        key: Object(w.ob)(),
                        type: O.y.Tags,
                        isEnabled: !1,
                        labelOverride: new f.M({
                            lczValue: "Tags"
                        }),
                        contentListItems: []
                    }), new O.x({
                        key: Object(w.ob)(),
                        type: O.y.Price,
                        isEnabled: !1,
                        labelOverride: new f.M({
                            lczValue: "Price"
                        }),
                        contentListItems: []
                    }), new O.x({
                        key: Object(w.ob)(),
                        type: O.y.Rating,
                        isEnabled: !1,
                        labelOverride: new f.M({
                            lczValue: "Rating"
                        }),
                        contentListItems: []
                    }), new O.x({
                        key: Object(w.ob)(),
                        type: O.y.Filters,
                        isEnabled: !0,
                        labelOverride: new f.M({
                            lczValue: "Filters"
                        }),
                        contentListItems: []
                    })], l.productItemButtonLabel = "Add to cart", l.styleSettings = new O.nc, Object.assign(Object(r.a)(l), e), l
                }
                return n
            }(O.E)
        },
        596: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            })), n.d(t, "b", (function() {
                return y
            })), n.d(t, "c", (function() {
                return V
            }));
            n(12);
            var c = n(0),
                r = n(4),
                l = n(3),
                o = n(11),
                h = n(6),
                d = (n(15), n(8)),
                w = n(1);
            n(5), n(2);

            function f(e) {
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
                    var n, c = Object(h.a)(e);
                    if (t) {
                        var r = Object(h.a)(this).constructor;
                        n = Reflect.construct(c, arguments, r)
                    } else n = c.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }

            function O(e) {
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
                    var n, c = Object(h.a)(e);
                    if (t) {
                        var r = Object(h.a)(this).constructor;
                        n = Reflect.construct(c, arguments, r)
                    } else n = c.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var j = function(e) {
                    Object(l.a)(n, e);
                    var t = O(n);

                    function n(e) {
                        var l;
                        return Object(c.a)(this, n), (l = t.call(this, e)).widgetType = d.J.ProductBundleSettingsT1, l.title = new w.qb({
                            lczText: new w.M({
                                lczValue: "Related products"
                            })
                        }), l.bundleId = null, l.isEnabledProductVariations = new w.e, l.button = new w.s, l.imageResize = {
                            width: 217,
                            height: 309
                        }, l.itemsCount = 4, Object.assign(Object(r.a)(l), e), l
                    }
                    return n
                }(function(e) {
                    Object(l.a)(n, e);
                    var t = f(n);

                    function n(e) {
                        var l;
                        return Object(c.a)(this, n), (l = t.call(this, e)).widgetCategory = "ProductBundleSettings", Object.assign(Object(r.a)(l), e), l
                    }
                    return n
                }(w.a)),
                m = function(e) {
                    Object(l.a)(n, e);
                    var t = O(n);

                    function n(e) {
                        var l;
                        return Object(c.a)(this, n), (l = t.call(this, e)).widgetVariation = l.constructor.name, l.itemsCount = 4, Object.assign(Object(r.a)(l), e), l
                    }
                    return n
                }(j),
                y = function(e) {
                    Object(l.a)(n, e);
                    var t = O(n);

                    function n(e) {
                        var l;
                        return Object(c.a)(this, n), (l = t.call(this, e)).widgetVariation = l.constructor.name, l.itemsCount = 3, Object.assign(Object(r.a)(l), e), l
                    }
                    return n
                }(j),
                V = function(e) {
                    Object(l.a)(n, e);
                    var t = O(n);

                    function n(e) {
                        var l;
                        return Object(c.a)(this, n), (l = t.call(this, e)).widgetVariation = l.constructor.name, l.itemsCount = 2, l.imageResize = {
                            width: 317,
                            height: 309
                        }, Object.assign(Object(r.a)(l), e), l
                    }
                    return n
                }(j)
        }
    }
]);