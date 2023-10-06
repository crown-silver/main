/*! For license information please see ../../../../../../../../../../../../../../../../../LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        565: function(t, e, o) {
            "use strict";
            o.d(e, "a", (function() {
                return r.default
            }));
            var r = o(19);

            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }

            function l(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t
            }

            function c(t) {
                return function(t) {
                    if (Array.isArray(t)) {
                        for (var i = 0, e = new Array(t.length); i < t.length; i++) e[i] = t[i];
                        return e
                    }
                }(t) || function(t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function d() {
                return "undefined" != typeof Reflect && Reflect.defineMetadata && Reflect.getOwnMetadataKeys
            }

            function m(t, e) {
                h(t, e), Object.getOwnPropertyNames(e.prototype).forEach((function(o) {
                    h(t.prototype, e.prototype, o)
                })), Object.getOwnPropertyNames(e).forEach((function(o) {
                    h(t, e, o)
                }))
            }

            function h(t, e, o) {
                (o ? Reflect.getOwnMetadataKeys(e, o) : Reflect.getOwnMetadataKeys(e)).forEach((function(r) {
                    var n = o ? Reflect.getOwnMetadata(r, e, o) : Reflect.getOwnMetadata(r, e);
                    o ? Reflect.defineMetadata(r, n, t, o) : Reflect.defineMetadata(r, n, t)
                }))
            }
            var f = {
                __proto__: []
            }
            instanceof Array;

            function w(t, e) {
                var o = e.prototype._init;
                e.prototype._init = function() {
                    var e = this,
                        o = Object.getOwnPropertyNames(t);
                    if (t.$options.props)
                        for (var r in t.$options.props) t.hasOwnProperty(r) || o.push(r);
                    o.forEach((function(o) {
                        Object.defineProperty(e, o, {
                            get: function() {
                                return t[o]
                            },
                            set: function(e) {
                                t[o] = e
                            },
                            configurable: !0
                        })
                    }))
                };
                var data = new e;
                e.prototype._init = o;
                var r = {};
                return Object.keys(data).forEach((function(t) {
                    void 0 !== data[t] && (r[t] = data[t])
                })), r
            }
            var y = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured", "serverPrefetch"];

            function k(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e.name = e.name || t._componentTag || t.name;
                var o = t.prototype;
                Object.getOwnPropertyNames(o).forEach((function(t) {
                    if ("constructor" !== t)
                        if (y.indexOf(t) > -1) e[t] = o[t];
                        else {
                            var r = Object.getOwnPropertyDescriptor(o, t);
                            void 0 !== r.value ? "function" == typeof r.value ? (e.methods || (e.methods = {}))[t] = r.value : (e.mixins || (e.mixins = [])).push({
                                data: function() {
                                    return l({}, t, r.value)
                                }
                            }) : (r.get || r.set) && ((e.computed || (e.computed = {}))[t] = {
                                get: r.get,
                                set: r.set
                            })
                        }
                })), (e.mixins || (e.mixins = [])).push({
                    data: function() {
                        return w(this, t)
                    }
                });
                var n = t.__decorators__;
                n && (n.forEach((function(t) {
                    return t(e)
                })), delete t.__decorators__);
                var c = Object.getPrototypeOf(t.prototype),
                    h = c instanceof r.default ? c.constructor : r.default,
                    f = h.extend(e);
                return O(f, t, h), d() && m(f, t), f
            }
            var v = {
                prototype: !0,
                arguments: !0,
                callee: !0,
                caller: !0
            };

            function O(t, e, o) {
                Object.getOwnPropertyNames(e).forEach((function(r) {
                    if (!v[r]) {
                        var l = Object.getOwnPropertyDescriptor(t, r);
                        if (!l || l.configurable) {
                            var c, d, m = Object.getOwnPropertyDescriptor(e, r);
                            if (!f) {
                                if ("cid" === r) return;
                                var h = Object.getOwnPropertyDescriptor(o, r);
                                if (c = m.value, d = n(c), null != c && ("object" === d || "function" === d) && h && h.value === m.value) return
                            }
                            0, Object.defineProperty(t, r, m)
                        }
                    }
                }))
            }

            function j(t) {
                return "function" == typeof t ? k(t) : function(e) {
                    return k(e, t)
                }
            }
            j.registerHooks = function(t) {
                y.push.apply(y, c(t))
            };
            "undefined" != typeof Reflect && Reflect.getMetadata
        },
        568: function(t, e, o) {
            "use strict";
            o.d(e, "b", (function() {
                return n
            })), o.d(e, "c", (function() {
                return l
            })), o.d(e, "a", (function() {
                return c
            }));
            var r = o(5),
                n = [Object(r.cb)("id"), Object(r.cb)("name"), Object(r.cb)("nameHtml"), Object(r.cb)("slug"), Object(r.cb)("coverImage"), Object(r.cb)("publishStatus"), Object(r.cb)("publishDate"), Object(r.cb)("expectedReadMinutes"), Object(r.cb)("shortDescription"), Object(r.cb)("button"), Object(r.cb)("likedCount"), Object(r.cb)("viewedCount"), Object(r.cb)("siteId"), Object(r.cb)("pageTemplateType")],
                l = [Object(r.cb)("id"), Object(r.cb)("name"), Object(r.cb)("nameHtml"), Object(r.cb)("slug"), Object(r.cb)("label"), Object(r.cb)("mainImage"), Object(r.cb)("rollOverPictureImage"), Object(r.cb)("isEnabledRollOverPicture"), Object(r.cb)("inventoryStockType"), Object(r.cb)("isAutomaticallyTrackInventory"), Object(r.cb)("availableQuantity"), Object(r.cb)("rating"), Object(r.cb)("isUsePrice"), Object(r.cb)("isUseSalePrice"), Object(r.cb)("isEnabledSku"), Object(r.cb)("isEnabledOptionGroups"), Object(r.cb)("optionGroups"), Object(r.cb)("activeInventorySku"), Object(r.cb)("defaultInventorySku"), Object(r.cb)("defaultInventorySkuId"), Object(r.cb)("skus"), Object(r.cb)("publishStatus"), Object(r.cb)("publishDate"), Object(r.cb)("siteId"), Object(r.cb)("pageTemplateType")],
                c = [Object(r.cb)("id"), Object(r.cb)("name"), Object(r.cb)("slug"), Object(r.cb)("image"), Object(r.cb)("pageTemplateType"), Object(r.cb)("siteId")]
        },
        587: function(t, e, o) {
            "use strict";
            o(26), o(28), o(30), o(31);
            var r = o(7),
                n = o(16),
                l = (o(23), o(17), o(33), o(14)),
                c = o(10),
                d = o.n(c),
                m = o(13),
                h = o.n(m),
                f = o(75),
                w = o(18),
                y = o(568),
                k = o(21),
                v = o(5),
                O = o(2),
                j = o(124),
                S = o(612),
                T = o(589);

            function P(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, o)
                }
                return e
            }

            function x(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? P(Object(source), !0).forEach((function(e) {
                        Object(r.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : P(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var I = function() {
                    return o.e(55).then(o.bind(null, 625))
                },
                C = l.componentFactory.mixin(k.F).create({
                    name: "WebSiteBlogCategoryTemplate",
                    props: {
                        page: d.a.ofType().required,
                        authorId: d.a.ofType().optional,
                        archiveDate: d.a.ofType().optional,
                        postIds: d.a.ofType().default((function() {
                            return []
                        })),
                        isSubTemplate: d.a.ofType().default(!1)
                    },
                    created: function() {
                        Object(v.Q)(this.currentPage.styleSettings) && (this.currentPage.styleSettings = new O.nc)
                    },
                    fetch: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.fetchSliderPosts();
                                    case 2:
                                        return e.next = 4, t.fetchPosts();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    computed: {
                        filter: function() {
                            var filter = new f.a({
                                queryParameters: new O.Hb(x(x(x(x({
                                    siteId: this.siteId,
                                    includeOnlyPublished: !0,
                                    includeAuthor: !0,
                                    includeMainCategoryDetails: !0
                                }, this.authorId && new O.Hb({
                                    authorId: this.authorId
                                })), this.archiveDate && new O.Hb({
                                    archiveDate: this.archiveDate
                                })), this.isSubTemplate && new O.Hb({
                                    ids: this.postIds.length ? this.postIds : [0]
                                })), {}, {
                                    fields: y.b.join(",")
                                })),
                                include: "total",
                                orderBy: this.orderBy[this.page.sortType] || "-id",
                                take: this.take || 10,
                                skip: 0
                            });
                            return Object(v.gb)(filter, this.$route.query)
                        }
                    },
                    methods: {
                        fetchPosts: function(filter, t) {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function o() {
                                var r, n, l, c, d, m, h, f;
                                return regeneratorRuntime.wrap((function(o) {
                                    for (;;) switch (o.prev = o.next) {
                                        case 0:
                                            return o.prev = 0, e.isLoading = !0, r = filter || e.filter, n = r.include, l = r.orderBy, c = r.take, d = r.skip, m = new O.Hb(x(x({}, e.filter.queryParameters), {}, {
                                                include: n,
                                                orderBy: l,
                                                take: c,
                                                skip: d
                                            })), o.next = 6, e.$api.get(new O.Hb(m));
                                        case 6:
                                            h = o.sent, e.queryResponse = h, o.next = 13;
                                            break;
                                        case 10:
                                            o.prev = 10, o.t0 = o.catch(0), console.log(o.t0);
                                        case 13:
                                            return o.prev = 13, e.isLoading = !1, t && (f = e.$el.querySelector("#kmb-paginated-data")) && f.scrollIntoView({
                                                behavior: "smooth"
                                            }), o.finish(13);
                                        case 17:
                                        case "end":
                                            return o.stop()
                                    }
                                }), o, null, [
                                    [0, 10, 13, 17]
                                ])
                            })))()
                        },
                        fetchSliderPosts: function() {
                            var t = this;
                            return Object(n.a)(regeneratorRuntime.mark((function e() {
                                var o, r;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, !t.blogCategoryTemplateUiSettings.hasSlider || Object(v.O)(t.page.sliderPostIds)) {
                                                e.next = 8;
                                                break
                                            }
                                            return o = t.page.sliderPostIds, t.isLoading = !0, e.next = 6, t.$api.get(new O.Hb({
                                                siteId: t.siteId,
                                                ids: o,
                                                includeOnlyPublished: !0,
                                                includeAuthor: !0,
                                                includeMainCategoryDetails: !0,
                                                take: 12,
                                                fields: y.b.join(",")
                                            }));
                                        case 6:
                                            r = e.sent, t.sliderPosts = Object(v.bb)(r.results || [], o, Object(v.cb)("id"));
                                        case 8:
                                            e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), console.log(e.t0);
                                        case 13:
                                            return e.prev = 13, t.isLoading = !1, e.finish(13);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 10, 13, 16]
                                ])
                            })))()
                        },
                        renderPostListSlider: function(t) {
                            var e = this;
                            if (this.blogCategoryTemplateUiSettings.hasSlider || Object(v.O)(this.page.sliderPostIds)) return this.isLoading ? t("div", {
                                class: "w-full kmb-site-loading-wrapper text-center"
                            }, [t(j.B, {
                                class: "kmb-simple-loading kmb-blue-loading",
                                attrs: {
                                    isLoading: this.isLoading
                                }
                            })]) : Object(v.O)(this.sliderPosts) ? void 0 : t(j.S, {
                                attrs: {
                                    settings: {
                                        itemsToShow: 1
                                    },
                                    indicators: !0,
                                    nav: !0
                                },
                                class: "kmb-blog-category-template-slider"
                            }, [this.sliderPosts.map((function(o, r) {
                                return t(j.T, {
                                    attrs: {
                                        index: r,
                                        "data-post-id": o.id
                                    },
                                    key: o.id
                                }, [t(j.c, {
                                    attrs: {
                                        image: o.coverImage,
                                        imageResize: e.blogCategoryTemplateUiSettings.imageResizeDifferentFirstItem
                                    }
                                }, [t("div", {
                                    class: "kmb-blog-category-template-overlay"
                                }, [t(S.a, {
                                    attrs: {
                                        index: r,
                                        post: o,
                                        settings: e.blogCategoryTemplateUiSettings,
                                        itemShowSettings: e.sliderPostIemShowSettins,
                                        isEnabledSideBar: e.isEnabedlSidebar,
                                        bgImage: e.blogCategoryTemplateUiSettings.bgImage
                                    }
                                })])])])
                            }))])
                        },
                        renderPostList: function(t) {
                            var e = this;
                            return this.isLoading ? t("div", {
                                class: "w-full kmb-site-loading-wrapper text-center"
                            }, [t(j.B, {
                                class: "kmb-simple-loading kmb-blue-loading",
                                attrs: {
                                    isLoading: this.isLoading
                                }
                            })]) : Object(v.O)(this.posts) ? t("div", {
                                class: "kmb-site-not-found-message"
                            }, [this.$t("messages.postsNotFound")]) : this.blogCategoryTemplateUiSettings ? t("div", {
                                class: "kmb-widget-row kmb-site-blog-post-row"
                            }, [this.posts.map((function(o, r) {
                                return t(S.a, {
                                    key: o.id,
                                    attrs: {
                                        index: r,
                                        post: o,
                                        settings: e.blogCategoryTemplateUiSettings,
                                        itemShowSettings: e.blogPostIemShowSettins,
                                        isEnabledSideBar: e.isEnabedlSidebar
                                    }
                                })
                            }))]) : void 0
                        }
                    },
                    render: function(t) {
                        var e = this;
                        if (!Object(v.Q)(this.page)) return t(T.a, {
                            attrs: {
                                settings: this.currentPage.styleSettings
                            },
                            class: "kmb-blog-template-nuxt-content"
                        }, [t("div", {
                            class: h()("kmb-blog-category-template-content", Object(w.i)(this.page), this.structureTypestructureType, this.structureTypeVariationTypeClassName, this.sidebarTypeClassName, {
                                "kmb-site-blog-category-template-structure-sidebar-enabled": this.isEnabedlSidebar
                            }),
                            attrs: {
                                id: "kmb-paginated-data"
                            }
                        }, [this.renderPostListSlider(t), t("div", {
                            class: "kmb-site-blog-category-main-contnent kmd-site-default-page-spaces"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t("div", {
                            class: h()("kmb-widget-row")
                        }, [this.isEnabedlSidebar && t("div", {
                            class: h()("kmb-site-blog-post-list-sidebar-col lg-w-1-4 w-full kmb-widget-col", {
                                "order-last": this.sidebarType === O.r.Right
                            })
                        }, [t(I, {
                            props: {
                                widgets: this.page.sidebarWidgets
                            }
                        })]), t("div", {
                            class: h()("kmb-site-blog-post-list-content w-full kmb-widget-col", {
                                "lg-w-3-4": this.isEnabedlSidebar
                            })
                        }, [t("div", {
                            class: "kmb-site-blog-post-content"
                        }, [this.renderPostList(t), t(j.I, {
                            attrs: {
                                query: this.filter,
                                queryResponse: this.queryResponse
                            },
                            on: {
                                paginate: function() {
                                    return e.fetchPosts(null, !0)
                                }
                            },
                            class: "kmb-pagination-list-center"
                        })])])])])])])]);
                        console.warn("Page or theme is unavailable!")
                    }
                });
            e.a = C
        },
        589: function(t, e, o) {
            "use strict";
            var r = o(14),
                n = o(10),
                l = o.n(n),
                c = o(13),
                d = o.n(c),
                m = o(8),
                h = r.componentFactory.create({
                    name: "PageWrap",
                    props: {
                        pageStyleType: l.a.ofType().default(m.i.Store),
                        settings: l.a.ofType().optional
                    },
                    computed: {
                        currentSite: function() {
                            return this.$store.getters.getSite
                        },
                        defaultPageColor: function() {
                            var t, e = null === (t = this.currentSite) || void 0 === t ? void 0 : t.styles,
                                o = e.blogBodyBg,
                                r = e.blogBodyColor,
                                n = e.storeBodyBg,
                                l = e.storeBodyColor;
                            return this.pageStyleType == m.i.Blog ? {
                                bg: o,
                                color: r
                            } : {
                                bg: n,
                                color: l
                            }
                        }
                    },
                    render: function(t) {
                        var e, o, r, n, l, c;
                        return t("div", {
                            class: d()("kmb-page-wrap"),
                            style: {
                                backgroundColor: (null === (e = this.settings) || void 0 === e ? void 0 : e.backgroundColor) || (null === (o = this.defaultPageColor) || void 0 === o ? void 0 : o.bg),
                                color: (null === (r = this.settings) || void 0 === r ? void 0 : r.textColor) || (null === (n = this.defaultPageColor) || void 0 === n ? void 0 : n.color),
                                borderColor: (null === (l = this.settings) || void 0 === l ? void 0 : l.textColor) || (null === (c = this.defaultPageColor) || void 0 === c ? void 0 : c.color)
                            }
                        }, [this.$scopedSlots.default && this.$scopedSlots.default({})])
                    }
                });
            e.a = h
        },
        590: function(t, e, o) {
            "use strict";
            o.d(e, "a", (function() {
                return r.a
            })), o.d(e, "b", (function() {
                return w
            })), o.d(e, "c", (function() {
                return v
            }));
            var r = o(171),
                n = (o(17), o(14)),
                l = o(10),
                c = o.n(l),
                d = o(13),
                m = o.n(d),
                h = o(8),
                f = o(5),
                w = n.componentFactoryOf().create({
                    name: "PageGridLayoutButtonGroup",
                    props: {
                        gridViewLayoutType: c.a.ofType().default(h.g.Two),
                        widgetSettings: c.a.ofType().required,
                        isEnabledSidebar: c.a.ofType().default(!1)
                    },
                    computed: {
                        items: function() {
                            return Object(f.x)(h.g).map((function(g) {
                                return g
                            }))
                        },
                        gridColor: function() {
                            return Object(f.Q)(this.widgetSettings.styleSettings) ? null : {
                                background: this.widgetSettings.styleSettings.textColor
                            }
                        }
                    },
                    methods: {
                        onGrid: function(t) {
                            try {
                                Object(f.fb)(this, "grid_display", t), this.$emit("change", t)
                            } catch (t) {
                                console.log(t)
                            }
                        }
                    },
                    render: function(t) {
                        var e = this;
                        return t("div", {
                            class: "kmb-page-grid-layout"
                        }, [t("div", {
                            class: "kmb-page-grid-layout-btn-group"
                        }, [this.items.map((function(o) {
                            return t("button", {
                                class: m()("kmb-page-grid-layout-btn", {
                                    "kmb-page-active-grid-layout-btn": e.gridViewLayoutType == o
                                }),
                                attrs: {
                                    "data-type": o
                                },
                                on: {
                                    click: function() {
                                        return e.onGrid(o)
                                    }
                                }
                            }, [Array.apply(null, Array(o == h.g.One ? 3 : o * o)).map((function(o) {
                                return t("i", {
                                    class: "kmb-page-grid-layout-btn-icon",
                                    style: e.gridColor
                                })
                            }))])
                        }))])])
                    }
                }),
                y = o(2),
                k = o(124),
                v = n.componentFactoryOf().create({
                    name: "SidebarSubscribeForm",
                    props: {
                        widget: c.a.ofType().required
                    },
                    render: function(t) {
                        var e, o, r, n, l = (null === (e = this.widget) || void 0 === e ? void 0 : e.subscribe) || new y.Tc;
                        return t("div", {
                            class: "kmb-page-sidebar-subscribe-form-widget-content"
                        }, [t(k.r, {
                            attrs: {
                                value: null === (o = this.widget.labelOverride) || void 0 === o ? void 0 : o.lczValue,
                                tag: "h4"
                            },
                            class: "kmb-page-sidebar-widget-title kmb-page-sidebar-subscribe-form-widget-title kmb-widget-title-h4 kmb-widget-el-group"
                        }), t(k.r, {
                            attrs: {
                                value: null === (r = l.description) || void 0 === r || null === (n = r.lczText) || void 0 === n ? void 0 : n.lczValue,
                                tag: "div",
                                maxChars: 1e3
                            },
                            class: "kmb-live-edit-rich-text kmb-site-widget-component kmb-page-sidebar-subscribe-form-widget-description kmb-widget-text-body2 kmb-widget-el-group"
                        }), t(k.C, {
                            attrs: {
                                form: l.formSettings,
                                formGroupClassNames: "kmb-page-sidebar-subscribe-form-widget-group"
                            },
                            class: "kmb-page-sidebar-subscribe-form-widget"
                        })])
                    }
                })
        },
        612: function(t, e, o) {
            "use strict";
            o.d(e, "a", (function() {
                return k
            })), o.d(e, "b", (function() {
                return S
            }));
            o(15);
            var r = o(14),
                n = o(10),
                l = o.n(n),
                c = o(13),
                d = o.n(c),
                m = o(5),
                h = o(18),
                f = o(1),
                w = o(2),
                y = o(124),
                k = r.componentFactory.create({
                    name: "PostItem",
                    props: {
                        post: l.a.ofType().required,
                        index: l.a.ofType().required,
                        settings: l.a.ofType().required,
                        itemShowSettings: l.a.ofType().required,
                        bgImage: l.a.ofType().default(!1),
                        isEnabledSideBar: l.a.ofType().default(!1)
                    },
                    computed: {
                        imageResize: function() {
                            return this.settings.differentFirstImage && 0 == this.index ? this.isEnabledSideBar ? this.settings.imageResizeDifferentFirstItemWithSideBar : this.settings.imageResizeDifferentFirstItem : this.isEnabledSideBar ? this.settings.imageResizeWithSideBar : this.settings.imageResize
                        },
                        columnSize: function() {
                            return this.settings.differentFirstImage && 0 == this.index ? this.settings.columnSizeDifferentFirstItem : this.isEnabledSideBar ? this.settings.columnSizeWithSideBar : this.settings.columnSize
                        },
                        postUrl: function() {
                            var t = this.post,
                                e = t.id,
                                o = t.slug,
                                r = Object(h.s)(this, {
                                    id: e,
                                    slug: o
                                }, w.oc.Blog, this.$config.isEditor);
                            return this.localePath(r)
                        },
                        isEnabledReadingTime: function() {
                            return (this.settings.showReadTime || (this.settings.differentFirstImage || this.settings.bgImage) && 0 == this.index) && this.isEnabledElement(w.n.ReadingTime) && !!this.post.expectedReadMinutes
                        }
                    },
                    methods: {
                        isEnabledElement: function(t) {
                            var e;
                            return !this.itemShowSettings || this.itemShowSettings[t] && (null === (e = this.itemShowSettings[t]) || void 0 === e ? void 0 : e.isEnabled)
                        }
                    },
                    render: function(t) {
                        var e, o, r;
                        return t("div", {
                            class: d()("kmb-site-blog-post-item kmb-widget-col", this.columnSize),
                            attrs: {
                                "data-post-id": this.post.id
                            }
                        }, [!this.bgImage && !this.settings.hideImage && t("nuxt-link", {
                            attrs: {
                                to: this.postUrl
                            },
                            class: "kmb-site-blog-post-item-image block"
                        }, [this.settings.imageTitle && t("div", {
                            class: "kmb-site-blog-post-item-image-title"
                        }, [t(y.r, {
                            attrs: {
                                value: this.post.nameHtml,
                                tag: "h4",
                                maxChars: 1e3,
                                title: this.post.name,
                                "data-title": this.post.name
                            },
                            class: "kmb-widget-blog-post-name kmb-widget-title-h4 kmb-widget-default-style-text"
                        })]), t(y.y, {
                            attrs: {
                                value: this.post.coverImage,
                                resize: this.imageResize
                            },
                            class: "kmb-widget-col-group"
                        })]), t("div", {
                            class: "kmb-widget-titles-info kmb-widget-no-divider"
                        }, [this.post.mainCategory && (null === (e = this.post.mainCategory) || void 0 === e ? void 0 : e.name) && this.isEnabledElement(w.n.Category) && t("div", {
                            class: "kmb-widget-el-group kmb-widget-blog-post-item-main-category",
                            attrs: {
                                "data-main-category-id": this.post.mainCategory.id
                            }
                        }, [t("p", {
                            class: "kmb-widget-blog-post-item-main-category-name kmb-widget-post-text-overline1"
                        }, [this.post.mainCategory.name])]), t("nuxt-link", {
                            attrs: {
                                to: this.postUrl
                            },
                            class: "kmb-site-post-item-link kmb-site-post-item-name-link"
                        }, [t(y.r, {
                            attrs: {
                                value: this.post.nameHtml,
                                tag: "h4",
                                maxChars: 1e3,
                                title: this.post.name,
                                "data-title": this.post.name
                            },
                            class: "kmb-widget-blog-post-name kmb-widget-title-h4 kmb-widget-default-style-text kmb-widget-el-group"
                        })]), t("div", {
                            class: "kmb-widget-blog-info-item justify-between items-center"
                        }, [t("div", {
                            class: d()("w-full kmb-widget-col", {
                                "md-w-2-3 ": this.settings.showReadTime || (this.settings.differentFirstImage || this.settings.bgImage) && 0 == this.index
                            })
                        }, [t("div", {
                            class: "kmb-site-blog-post-item-info"
                        }, [this.post.publishDate && this.isEnabledElement(w.n.Date) && t("div", {
                            class: "kmb-widget-blog-post-item-publish-date-col flex-1"
                        }, [t("div", {
                            class: "kmb-widget-el-group"
                        }, [t("p", {
                            class: "kmb-widget-blog-post-item-publish-date kmb-widget-blog-post-date"
                        }, [Object(m.s)(this.post.publishDate, "DD.MM.YYYY")])])]), this.post.author && this.isEnabledElement(w.n.AuthorName) && t("div", {
                            class: "kmb-widget-blog-post-item-author-col"
                        }, [t("div", {
                            class: "kmb-widget-el-group"
                        }, [t("p", {
                            class: "kmb-widget-blog-author-name"
                        }, [this.post.author.firstName, " ", this.post.author.lastName])])])])]), this.isEnabledReadingTime && t("div", {
                            class: "md-w-1-3 w-full kmb-widget-col"
                        }, [t("div", {
                            class: "kmb-widget-el-group text-right"
                        }, [t("p", {
                            class: "kmb-widget-blog-post-item-time-to-read kmb-widget-blog-post-read-minutes"
                        }, [this.post.expectedReadMinutes, " ", this.$t("labels.minRead"), " "])])])]), (!this.settings.hideDescirptionAndButton || this.settings.differentFirstImage && 0 == this.index) && t("div", {
                            class: "kmb-site-blog-post-item-info-description"
                        }, [this.post.shortDescription && this.isEnabledElement(w.n.PostSummary) && t("div", {
                            class: "kmb-blog-post-item-short-description kmb-widget-text-body3 kmb-widget-el-group",
                            domProps: {
                                innerHTML: this.post.shortDescription
                            }
                        }), t("div", {
                            class: "kmb-site-blog-post-item-bottom-info"
                        }, [t("div", {
                            class: "kmb-widget-row justify-between"
                        }, [t("div", {
                            class: "kmb-widget-col kmb-widget-el-group"
                        }, [t(y.g, {
                            attrs: {
                                value: new f.p({
                                    lczText: new f.M({
                                        lczValue: (null === (o = this.post.button) || void 0 === o || null === (r = o.lczText) || void 0 === r ? void 0 : r.lczValue) || this.$t("buttons.readMore")
                                    }),
                                    page: new f.r({
                                        id: this.post.id,
                                        slug: this.post.slug || null,
                                        linkType: w.oc.Blog
                                    })
                                })
                            },
                            class: "kmb-widget-btn-link kmb-blog-post-read-more-btn"
                        })]), this.isEnabledElement(w.n.LikesAndViews) && t("div", {
                            class: "kmb-widget-col kmb-widget-el-group kmb-blog-post-likes-and-views-col"
                        }, [t("div", {
                            class: "kmb-widget-row justify-end"
                        }, [t("div", {
                            class: "kmb-widget-col kmb-blog-post-likes-col cursor-pointer"
                        }, [t(y.J, {
                            attrs: {
                                post: this.post,
                                isEnabled: !0
                            }
                        })]), t("div", {
                            class: "kmb-widget-col kmb-blog-post-views-col"
                        }, [t("span", {
                            class: "kmb-blog-post-views kmb-widget-text-body2"
                        }, [t("i", {
                            class: "kmb-site-icon-show mr-1"
                        }), this.post.viewedCount || 0])])])])])])])])])
                    }
                }),
                v = o(20),
                O = (o(35), o(17), o(62), o(211)),
                j = o(590),
                S = r.componentFactoryOf().create({
                    name: "SidebarWidget",
                    props: {
                        widget: l.a.ofType().required,
                        activeKey: l.a.ofType().default(0),
                        isEnabledEditor: l.a.ofType().default(!1)
                    },
                    computed: {
                        widgetItems: function() {
                            return Object(O.b)(this.widget).list || []
                        },
                        widgetTypeClassName: function() {
                            return "kmb-blog-sidebar-widget-type-".concat(this.widget.type)
                        }
                    },
                    methods: {
                        getListItemUrl: function(t, e) {
                            var o = "/blog";
                            if (e == w.q.TopPosts || e == w.q.RecentPosts) {
                                var r = t,
                                    n = r.id,
                                    l = r.slug,
                                    c = r.pageTemplateType;
                                o = Object(h.s)(this, {
                                    id: n,
                                    slug: l
                                }, c || w.oc.Blog, this.$config.isEditor)
                            } else {
                                var d = Object(h.w)(w.oc.Blog),
                                    f = Object(m.C)(w.q[e]).toLowerCase().replace(" ", "-"),
                                    y = e == w.q.Archives ? t : t.slug || t.id;
                                o = "".concat(d, "/").concat(f, "/").concat(y)
                            }
                            return o
                        },
                        renderListItem: function(t, e) {
                            if (!Object(m.Q)(e)) {
                                var o = this.widget.type || w.q.Categories,
                                    r = this.getListItemUrl(e, o);
                                if (o == w.q.TopPosts) {
                                    var n = e;
                                    return t("li", {
                                        class: "kmb-page-sidebar-widget-content-list-item kmb-blog-sidebar-widget-content-list-item kmb-blog-sidebar-widget-content-list-post-item",
                                        key: n.id
                                    }, [t("nuxt-link", {
                                        attrs: {
                                            to: this.localePath(r)
                                        },
                                        class: "kmb-blog-sidebar-widget-content-list-post-item-link block"
                                    }, [t("span", {
                                        class: "kmb-md-widget-row kmb-flex-nowrap"
                                    }, [t("span", {
                                        class: "kmb-md-widget-col kmb-blog-sidebar-post-thumbnail-col"
                                    }, [t("div", {
                                        class: "kmb-page-sidebar-item-thumbnail kmb-blog-sidebar-post-thumbnail"
                                    }, [t(y.y, {
                                        attrs: {
                                            value: n.coverImage,
                                            resize: {
                                                width: 90,
                                                height: 90
                                            }
                                        }
                                    })])]), t("span", {
                                        class: "kmb-md-widget-col"
                                    }, [n.mainCategory && t("span", {
                                        class: "kmb-blog-sidebar-post-main-category-name"
                                    }, [n.mainCategory.name]), t("h3", {
                                        attrs: {
                                            title: n.name
                                        },
                                        class: "kmb-blog-sidebar-post-name",
                                        domProps: {
                                            innerHTML: Object(m.nb)(n.name || Object(m.jb)(n.nameHtml), 50)
                                        }
                                    })])])])])
                                }
                                return o != w.q.Archives ? t("li", {
                                    class: "kmb-page-sidebar-widget-content-list-item kmb-blog-sidebar-widget-content-list-item",
                                    key: e.id
                                }, [t("nuxt-link", {
                                    class: "kmb-blog-sidebar-widget-content-list-post-item-link kmb-blog-sidebar-widget-content-list-post-item-label",
                                    attrs: {
                                        to: r
                                    },
                                    domProps: {
                                        innerHTML: e.name ? e.name : "".concat(e.firstName, " ").concat(e.lastName)
                                    }
                                })]) : e ? t("li", {
                                    class: "kmb-page-sidebar-widget-content-list-item kmb-blog-sidebar-widget-content-list-item"
                                }, [t("nuxt-link", {
                                    class: "kmb-blog-sidebar-widget-content-list-post-item-link kmb-blog-sidebar-widget-content-list-post-item-label",
                                    attrs: {
                                        to: r
                                    }
                                }, [Object(m.s)(e, "MMMM YYYY")])]) : void 0
                            }
                        },
                        renderWidgetContent: function(t) {
                            var e = this;
                            if (this.widget.type == w.q.Subscribe) return t(j.c, {
                                attrs: {
                                    widget: this.widget
                                }
                            });
                            if (this.widget.type == w.q.AboutUs) return t("div", {
                                class: "kmb-blog-sidebar-about-us-widget-content"
                            }, [t("div", {
                                class: "kmb-blog-sidebar-about-us-widget-inner-content"
                            }, [t("div", {
                                class: "kmb-md-widget-row"
                            }, [t("div", {
                                class: "kmb-md-widget-col kmb-blog-sidebar-about-us-widget-image-col"
                            }, [t(y.y, {
                                attrs: {
                                    value: this.widget.aboutUs.image,
                                    resize: {
                                        width: 80,
                                        height: 80
                                    }
                                },
                                class: "kmb-widget-image-no-filter kmb-blog-sidebar-about-us-widget-image kmb-widget-el-group"
                            })])]), t("div", {
                                class: "kmb-md-widget-row"
                            }, [t("div", {
                                class: "kmb-md-widget-col"
                            }, [t(y.e, {
                                attrs: {
                                    value: this.widget.aboutUs.title,
                                    tag: "h4"
                                },
                                class: "kmb-site-widget-component kmb-blog-sidebar-about-us-widget-title kmb-widget-title-h4 kmb-widget-el-group"
                            })])]), t(y.e, {
                                attrs: {
                                    value: this.widget.aboutUs.description
                                },
                                class: "kmb-site-widget-component kmb-blog-sidebar-about-us-widget-description kmb-widget-el-group kmb-site-secondary-font"
                            }), !Object(m.Q)(this.widget.aboutUs.socialNetworks) && t("ul", {
                                class: "kmb-blog-sidebar-about-us-widget-social-network-list"
                            }, [Object.entries(this.widget.aboutUs.socialNetworks).map((function(e) {
                                var o = Object(v.a)(e, 2),
                                    r = o[0],
                                    n = o[1],
                                    l = w.Zc[r];
                                if (l) return t("li", [t("a", {
                                    attrs: {
                                        href: n || "/#",
                                        target: "_blank",
                                        title: Object(m.C)(l)
                                    },
                                    ref: "noreferrer"
                                }, [t("i", {
                                    class: d()(Object(h.n)(+r))
                                })])])
                            }))])])]);
                            var o, r = this.widget.key || this.widget.type;
                            return t(y.a, {
                                attrs: {
                                    activeKey: this.activeKey
                                },
                                on: {
                                    change: function() {
                                        return e.$emit("setActiveKey", r)
                                    }
                                }
                            }, [t(y.b, {
                                key: r,
                                attrs: {
                                    "data-item-key": r,
                                    "data-item-type": this.widget.type
                                },
                                class: "kmb-page-sidebar-widget-accordion-item kmb-blog-sidebar-widget-accordion-item"
                            }, [t("template", {
                                slot: "header"
                            }, [t(y.r, {
                                attrs: {
                                    value: null === (o = this.widget.labelOverride) || void 0 === o ? void 0 : o.lczValue,
                                    tag: "h3"
                                },
                                class: "kmb-widget-title-h3 kmb-blog-sidebar-widget-title"
                            })]), t("ul", {
                                class: "kmb-page-sidebar-widget-content-list kmb-blog-sidebar-widget-content-list"
                            }, [this.widgetItems && this.widgetItems.map((function(o) {
                                return e.renderListItem(t, o)
                            }))])])])
                        }
                    },
                    render: function(t) {
                        return t("div", {
                            class: d()("kmb-page-sidebar-widget kmb-blog-sidebar-widget", this.widgetTypeClassName),
                            attrs: {
                                "data-widget-type": this.widget.type
                            }
                        }, [this.renderWidgetContent(t)])
                    }
                })
        }
    }
]);