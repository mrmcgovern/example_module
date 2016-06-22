"bundle";
System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/news', ['npm:babel-runtime@5.8.24/helpers/class-call-check', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/content/en'], function (_export) {
    var _classCallCheck, CONTENT, News;

    return {
        setters: [function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsContentEn) {
            CONTENT = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsContentEn.CONTENT;
        }],
        execute: function () {
            'use strict';

            News = function News() {
                _classCallCheck(this, News);

                this.newsheader = CONTENT.news;
            };

            _export('News', News);
        }
    };
});

System.register('COMPANY-github:Voya/deep-ui-COMPANY-section-nav@develop/COMPANY-section-nav-template', [], function (_export) {
    'use strict';

    _export('COMPANYSectionNavTemplate', COMPANYSectionNavTemplate);

    function COMPANYSectionNavTemplate(el) {
        return el.items.length > 0 ? template(el) : '';
    }

    function template(el) {
        return '\n    <nav class="COMPANY-section-nav__section-nav COMPANY-section-nav__section-nav_horizontal fade in" data-orientation="horizontal" data-lock-offset-adjustment="0" role="menu" aria-labelledby="">\n        <ul>\n            ' + items(el) + '\n        </ul>\n    </nav>\n    ';
    }

    function items(el) {
        var activeSection = el.activeSection || el.items[0].section;

        return el.items.reduce(function (out, itemData) {
            return out += '\n            <li><a href="' + itemData.section + '" class="' + active(itemData, activeSection) + '"><span class="COMPANY-section-nav__section-label">' + itemData.text + ' </span><span class="COMPANY-section-nav__section-arrow"></span></a></li>\n        ';
        }, '');
    }

    function active(itemData, activeSection) {
        return itemData.section === activeSection ? 'active' : '';
    }
    return {
        setters: [],
        execute: function () {}
    };
});

System.register('COMPANY-github:Voya/deep-ui-COMPANY-section-nav@develop/COMPANY-section-nav', ['npm:babel-runtime@5.8.24/helpers/get', 'npm:babel-runtime@5.8.24/helpers/inherits', 'npm:babel-runtime@5.8.24/helpers/define-decorated-property-descriptor', 'npm:babel-runtime@5.8.24/helpers/create-decorated-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'COMPANY-github:Voya/deep-ui-COMPANY-component-utils@3.3.2', 'COMPANY-github:Voya/deep-ui-COMPANY-component-utils@3.3.2/decorators/property-decorators', 'COMPANY-github:Voya/deep-ui-COMPANY-section-nav@develop/COMPANY-section-nav-template', 'npm:dom-delegate@2.0.3'], function (_export) {
	var _get, _inherits, _defineDecoratedPropertyDescriptor, _createDecoratedClass, _classCallCheck, NativeHTMLElement, property, COMPANYSectionNavTemplate, delegate, VoyaSectionNav;

	return {
		setters: [function (_npmBabelRuntime5824HelpersGet) {
			_get = _npmBabelRuntime5824HelpersGet['default'];
		}, function (_npmBabelRuntime5824HelpersInherits) {
			_inherits = _npmBabelRuntime5824HelpersInherits['default'];
		}, function (_npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor) {
			_defineDecoratedPropertyDescriptor = _npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor['default'];
		}, function (_npmBabelRuntime5824HelpersCreateDecoratedClass) {
			_createDecoratedClass = _npmBabelRuntime5824HelpersCreateDecoratedClass['default'];
		}, function (_npmBabelRuntime5824HelpersClassCallCheck) {
			_classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
		}, function (_COMPANYGithubVoyaDeepUiVoyaComponentUtils332) {
			NativeHTMLElement = _COMPANYGithubVoyaDeepUiVoyaComponentUtils332.NativeHTMLElement;
		}, function (_COMPANYGithubVoyaDeepUiVoyaComponentUtils332DecoratorsPropertyDecorators) {
			property = _COMPANYGithubVoyaDeepUiVoyaComponentUtils332DecoratorsPropertyDecorators.property;
		}, function (_COMPANYGithubVoyaDeepUiVoyaSectionNavDevelopVoyaSectionNavTemplate) {
			COMPANYSectionNavTemplate = _COMPANYGithubVoyaDeepUiVoyaSectionNavDevelopVoyaSectionNavTemplate.COMPANYSectionNavTemplate;
		}, function (_npmDomDelegate203) {
			delegate = _npmDomDelegate203['default'];
		}],
		execute: function () {
			'use strict';

			VoyaSectionNav = (function (_NativeHTMLElement) {
				var _instanceInitializers = {};

				_inherits(VoyaSectionNav, _NativeHTMLElement);

				function VoyaSectionNav() {
					_classCallCheck(this, VoyaSectionNav);

					_get(Object.getPrototypeOf(VoyaSectionNav.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'sectionAttribute', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'activeSection', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);
				}

				_createDecoratedClass(VoyaSectionNav, [{
					key: 'createdCallback',
					value: function createdCallback() {
						if (typeof this.items === 'string') {
							this.items = JSON.parse(this.items);
						}
					}
				}, {
					key: 'attachedCallback',
					value: function attachedCallback() {
						this.render();
						this.addEventListeners();
						this.checkScroll();
					}
				}, {
					key: 'render',
					value: function render() {
						this.innerHTML = COMPANYSectionNavTemplate(this);
						this._hasRendered = true;
					}
				}, {
					key: 'addEventListeners',
					value: function addEventListeners() {
						var self = this;
						var navtop = $('.COMPANY-section-nav__section-nav').offset().top;
						var initcall = true;

						$(window).on('scroll', function () {
							self.checkScroll(navtop);
						});

						delegate(this).on('click', 'li a', function (e) {
							e.preventDefault();
							var section = $(this).attr("href");
							self.goToSection(section, initcall);
							initcall = false;
						});
					}
				}, {
					key: 'checkScroll',
					value: function checkScroll(navtop) {
						var scrollTop = $(window).scrollTop();
						var parentTop = $(".COMPANY-section-nav__section-nav").offset().top;
						var $sectionNavDiv = $('.COMPANY-section-nav__section-nav');
						parentTop = parentTop + $sectionNavDiv.outerHeight();
						var currentActiveSection = this.activeSection;
						var newActiveSection;

						if (scrollTop > navtop && !$sectionNavDiv.hasClass('fixedpos')) {
							//console.log('scrollTop > navtop', scrollTop, navtop);
							$sectionNavDiv.addClass('fixedpos');
						} else if (scrollTop < navtop && $sectionNavDiv.hasClass('fixedpos')) {
							//console.log('scrollTop < navtop', scrollTop, navtop);
							$sectionNavDiv.removeClass('fixedpos');
						}

						for (var i = 0; i < this.items.length; i++) {
							var section = this.items[i].section;
							var $section = $('[data-section-nav=' + section + ']');
							var sectionOffset = $section.offset();
							if (sectionOffset) {
								// 	if (i===1) {
								// 	console.log('parentTop: '+parentTop);
								// 	console.log('sectionOffset.top: '+sectionOffset.top);
								// 	console.log('$section.hasClass(hide): '+$section.hasClass('hide'));
								// 	console.log('$section.css(display): '+$section.css('display'));
								// }
								if (parentTop > sectionOffset.top && (!$section.hasClass('hide') && $section.css('display') != 'none')) {
									newActiveSection = this.items[i].section;
								}
							}
						}

						if (currentActiveSection !== newActiveSection && newActiveSection) {
							this.activeSection = newActiveSection;
							$('.COMPANY-section-nav__section-nav li a').removeClass("active");
							$('li a[href=' + newActiveSection + ']').addClass("active");
						}
					}
				}, {
					key: 'goToSection',
					value: function goToSection(section, initcall) {
						var topoffset = 0;
						this.showSection(section);
						if (initcall) topoffset = $(".COMPANY-section-nav__section-nav").outerHeight();

						$("html, body").animate({
							scrollTop: $('[data-section-nav=' + section + ']').offset().top - topoffset - 50
						}, 500);
					}
				}, {
					key: 'showSection',
					value: function showSection(activeItem) {
						this.querySelector('li a[href=' + activeItem + ']').parentNode.classList.remove('hide');
						$('[data-section-nav=' + activeItem + ']').show();
					}
				}, {
					key: 'hideSection',
					value: function hideSection(inactiveItem) {
						this.querySelector('li a[href=' + inactiveItem + ']').parentNode.classList.add('hide');
						$('[data-section-nav=' + inactiveItem + ']').hide();
					}
				}, {
					key: 'propertyChangedCallback',
					value: function propertyChangedCallback(prop, oldValue, newValue) {
						if (prop === 'items' && typeof newValue === 'string') {
							this.items = JSON.parse(newValue);
						}

						if (this._hasRendered) {
							this.render();
						}
					}
				}, {
					key: 'sectionAttribute',
					decorators: [property],
					initializer: function initializer() {
						return 'data-section-nav';
					},
					enumerable: true
				}, {
					key: 'activeSection',
					decorators: [property],
					initializer: function initializer() {
						return '';
					},
					enumerable: true
				}, {
					key: 'items',
					decorators: [property],
					initializer: function initializer() {
						return [];
					},
					enumerable: true
				}], null, _instanceInitializers);

				return VoyaSectionNav;
			})(NativeHTMLElement);

			document.registerElement('COMPANY-section-nav', VoyaSectionNav);
		}
	};
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/stock-symbol-details.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n\n    <require from=\"./overview/overview\"></require>\n    <require from=\"./insights/insights\"></require>\n    <require from=\"./news/news\"></require>\n\n    <require from=\"./common/custom-attributes/sec-type\"></require>\n\n    <require from=\"../lib/components/page-timestamp/page-timestamp\"></require>\n    <require from=\"../lib/components/disclosure/disclosure\"></require>\n    <require from=\"../lib/components/COMPANY-lightbox/COMPANY-lightbox\"></require>\n\n    <require from=\"../lib/custom-attributes/max-width\"></require>\n    <require from=\"../lib/custom-attributes/heading\"></require>\n    <require from=\"../lib/custom-attributes/type\"></require>\n    <require from=\"../lib/custom-attributes/body-html\"></require>\n    <require from=\"../lib/custom-attributes/endpoint\"></require>\n\n    <div class=\"dd2c-page\">\n        <div class=\"dd2c-page__content-wrapper stock-symbol-details__header\">\n            <div class=\"stock-symbol-details__header_key-attributes\">\n                <COMPANY-search-symbol-result case=\"hero\"></COMPANY-search-symbol-result>\n            </div>\n            <div class=\"stock-symbol-details__header_page-timestamp\">\n                <page-timestamp></page-timestamp>\n            </div>\n        </div>\n\n        <div if.bind=\"secType.etf || secType.mutualFund\" class=\"dd2c-page__content-wrapper stock-symbol-details__section\">\n            <COMPANY-section-nav\n                section-attribute=\"data-section-nav\"\n                items='[{\n                    \"text\" : \"Overview\",\n                    \"section\" : \"overview\"\n                }, {\n                    \"text\" : \"Insights\",\n                    \"section\" : \"insights\"\n                }]'>\n            </COMPANY-section-nav>\n        </div>\n\n        <div if.bind=\"secType.stock\" class=\"dd2c-page__content-wrapper stock-symbol-details__section-nav\">\n            <COMPANY-section-nav\n                    section-attribute=\"data-section-nav\"\n                    items='[{\n                    \"text\" : \"Overview\",\n                    \"section\" : \"overview\"\n                }, {\n                    \"text\" : \"Insights\",\n                    \"section\" : \"insights\"\n                },\n                {\n                    \"text\" : \"News\",\n                    \"section\" : \"news\"\n                }]'>\n            </COMPANY-section-nav>\n        </div>\n\n        <div id=\"overview\" class=\"stock-symbol-details__overview\" data-section-nav=\"overview\">\n            <overview></overview>\n        </div>\n\n        <div id=\"insights\" class=\"stock-symbol-details__insights\" data-section-nav=\"insights\">\n            <insights sec-type=${mainSymbolDetails.secType}></insights>\n        </div>\n\n        <div id=\"news\" if.bind=\"secType.stock\" class=\"stock-symbol-details__news\" data-section-nav=\"news\">\n            <news></news>\n        </div>\n\n        <div class=\"dd2c-page__content-wrapper stock-symbol-details__disclosure\">\n            <disclosure sec-type=${mainSymbolDetails.secType}></disclosure>\n        </div>\n\n        <div class=\"stock-symbol-details__lightbox\">\n            <COMPANY-lightbox\n                heading=\"\"\n                max-width=\"400px\"\n                type=\"sign-up-success\"\n                endpoint=\"${vm.signUpLightboxURL}\">\n            </COMPANY-lightbox>\n        </div>\n    </div>\n</template>\n";
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/overview/overview.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n    <require from=\"../common/interactive-chart/interactive-chart\"></require>\n    <require from=\"../common/security-profile/security-profile\"></require>\n    <require from=\"../common/industry-peers/industry-peers\"></require>\n\n    <div class=\"dd2c-page__content-wrapper\">\n        <div class=\"overview__interactive-chart dd2c-page__content-2 dd2c-page__content-2__resist-collapse\">\n            <section class=\"dd2c-page__section\">\n                <interactive-chart></interactive-chart>\n            </section>\n        </div>\n\n        <div class=\"overview__security-profile dd2c-page__content-2\">\n            <section class=\"dd2c-page__section dd2c-page__background\">\n                <security-profile></security-profile>\n            </section>\n        </div>\n\n        <div class=\"dd2c-page__content-1 dd2c-page__content-align-right \">\n            <section class=\"dd2c-page__section dd2c-page__background overview__industry-peers \">\n                <industry-peers></industry-peers>\n            </section>\n        </div>\n    </div>\n\n</template>\n";
});

_removeDefine();
})();
System.register("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/overview/overview", ["npm:babel-runtime@5.8.24/helpers/class-call-check"], function (_export) {
    var _classCallCheck, Overview;

    return {
        setters: [function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck["default"];
        }],
        execute: function () {
            "use strict";

            Overview = function Overview() {
                _classCallCheck(this, Overview);
            };

            _export("Overview", Overview);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/insights/insights.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n    <require from=\"../common/ten-k-growth-chart/ten-k-growth-chart\"></require>\n    <require from=\"./morningstar-insights/morningstar-insights\"></require>\n\n            <div if.bind=\"secTypeObj.stock\" class=\"insights__morningstar-insights\">\n                <morningstar-insights></morningstar-insights>\n            </div>\n\n            <div class=\"insights__ten-k-growth-chart\">\n                <ten-k-growth-chart></ten-k-growth-chart>\n            </div>\n\n</template>";
});

_removeDefine();
})();
System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/insights/insights', ['npm:babel-runtime@5.8.24/helpers/define-decorated-property-descriptor', 'npm:babel-runtime@5.8.24/helpers/create-decorated-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'COMPANY-github:Voya/deep-ui-COMPANY-component-utils@3.3.2/decorators/property-decorators'], function (_export) {
    var _defineDecoratedPropertyDescriptor, _createDecoratedClass, _classCallCheck, property, Insights;

    return {
        setters: [function (_npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor) {
            _defineDecoratedPropertyDescriptor = _npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor['default'];
        }, function (_npmBabelRuntime5824HelpersCreateDecoratedClass) {
            _createDecoratedClass = _npmBabelRuntime5824HelpersCreateDecoratedClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_COMPANYGithubVoyaDeepUiVoyaComponentUtils332DecoratorsPropertyDecorators) {
            property = _COMPANYGithubVoyaDeepUiVoyaComponentUtils332DecoratorsPropertyDecorators.property;
        }],
        execute: function () {
            'use strict';

            Insights = (function () {
                var _instanceInitializers = {};

                function Insights() {
                    _classCallCheck(this, Insights);

                    _defineDecoratedPropertyDescriptor(this, 'secType', _instanceInitializers);
                }

                _createDecoratedClass(Insights, [{
                    key: 'setSecTypeObj',
                    value: function setSecTypeObj(secType) {
                        this.secTypeObj = {
                            stock: secType === 'ST',
                            etf: secType === 'ETF',
                            mutualFund: secType === 'MF'
                        };
                    }
                }, {
                    key: 'propertyChangedCallback',
                    value: function propertyChangedCallback(prop, oldValue, newValue) {
                        if (prop === 'secType') {
                            this.setSecTypeObj(newValue);
                        }
                    }
                }, {
                    key: 'secType',
                    decorators: [property],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                return Insights;
            })();

            _export('Insights', Insights);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/insights/morningstar-insights/morningstar-insights.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n\n    <require from=\"../../../lib/custom-attributes/endpoint\"></require>\n    <!-- <require from=\"../../../lib/components/COMPANY-tooltip-carousel/COMPANY-tooltip-carousel\"></require> -->\n    <require from=\"../../../lib/components/COMPANY-tooltip-definitions/COMPANY-tooltip-definitions\"></require>\n\n    <COMPANY-tooltip-definitions\n        endpoint=${vm.tooltipUrl}\n        tt-target-selector=\".COMPANY-morningstar-insights .dd2c-page__tool-tip\"\n        tt-min-width=\"400px\"\n        tt-max-width=\"500px\"\n        tt-position=\"right\"\n        tt-bounding-selector=\"body\"\n    >\n    </COMPANY-tooltip-definitions>\n\n    <div class=\"COMPANY-morningstar-insights dd2c-page__content-3\">\n        <h3 class=\"dd2c-page__heading\">${content.insights} <span class=\"dd2c-page__tool-tip\"></span></h3>\n    </div>\n\n    <div class=\"dd2c-page__content-wrapper\" data-equalizer=\"vmi\">\n\n        <div class=\"dd2c-page__content-1\" data-equalizer-watch=\"vmi\">\n            <section class=\"dd2c-page__section dd2c-page__top-border dd2c-page__background COMPANY-morningstar-insights__opinions\">\n                <div class=\"dd2c-page__section-heading\">${content.opinions}</div>\n                <div class=\"COMPANY-morningstar-insights__provided\">${content.provided}</div>\n                <dl class=\"COMPANY-morningstar-insights__analyist-opinion\">\n                    <dt>${content.buy}</dt>\n                    <dd class=\"COMPANY-morningstar-insights__analyist-opinion-buy\"></dd>\n                    <dt>${content.sell}</dt>\n                    <dd class=\"COMPANY-morningstar-insights__analyist-opinion-sell\"></dd>\n                    <dt>${content.hold}</dt>\n                    <dd class=\"COMPANY-morningstar-insights__analyist-opinion-hold\"></dd>\n                </dl>\n            </section>\n\n            <section class=\"dd2c-page__section dd2c-page__background COMPANY-morningstar-insights__valuation\">\n                <div class=\"dd2c-page__section-heading\">\n                    ${content.msValuation} <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n                </div>\n                <ul>\n                    <li>\n                        ${content.assessment}<br />\n                        <span class=\"${\n                            vm.msInsights.valuation.assessment !== '--'\n                            ?\n                                vm.msInsights.valuation.assessment.indexOf('Under') ? 'text__color-positive' : 'text__color-negative'\n                            :\n                                ''\n                            }\">\n                            ${vm.msInsights.valuation.assessment}\n                        </span>\n                    </li>\n                    <li>\n                        ${content.fairValue}<br />\n                        <span class=\"text__color-black\">\n                            ${ vm.msInsights.valuation.fairValue !== '--' ? '$' : '' }${vm.msInsights.valuation.fairValue}\n                        </span>\n                    </li>\n                </ul>\n                <div class=\"${vm.isLoggedIn && vm.msInsights.valuation.isDataAvailable ? 'hidden' : 'COMPANY-morningstar-insights__to-see'}\">\n                    ${content.toSee}\n                    <a class=\"text__color-primary\" href=\"${vm.loginUrl}\">${content.login}</a>\n                    ${content.or}\n                    <a class=\"text__color-primary\" href=\"${vm.signUpUrl}\">${content.signUp}</a>\n                </div>\n            </section>\n        </div>\n\n        <div class=\"dd2c-page__content-2 dd2c-page__content-align-right \" data-equalizer-watch=\"vmi\">\n            <section class=\"dd2c-page__section dd2c-page__top-border dd2c-page__top-border-small-secondary dd2c-page__background\" >\n                <div class=\"dd2c-page__section-heading\">${content.msTake} <i class=\"fa fa-lock\" aria-hidden=\"true\"></i></div>\n                <article class=\"COMPANY-morningstar-insights__article\">\n                    ${vm.msInsights.analystTake.expertCommentary.Profile ? vm.msInsights.analystTake.expertCommentary.Profile : ''}\n                    ${!vm.isLoggedIn && vm.msInsights.analystTake.expertCommentary.Profile ? '&#8230;' : ''}\n                    <span\n                        class=\"COMPANY-morningstar-insights__read-more text__color-primary ${vm.isLoggedIn ? '' : 'hidden'}\"\n                        click.delegate=\"getInsightsDetail()\"\n                    >\n                        Read more &#8250;\n                    </span>\n                </article>\n                <div class=\"${vm.isLoggedIn && vm.msInsights.analystTake.isDataAvailable ? 'hidden' : 'COMPANY-morningstar-insights__to-see'}\">\n                    ${content.toContinue}\n                    <a class=\"text__color-primary\" href=\"${vm.loginUrl}\">${content.login}</a>\n                    ${content.or}\n                    <a class=\"text__color-primary\" href=\"${vm.signUpUrl}\">${content.signUp}</a>\n                </div>\n            </section>\n        </div>\n    </div>\n\n</template>";
});

_removeDefine();
})();
System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/insights/content/en', [], function (_export) {
    'use strict';

    var CONTENT;
    return {
        setters: [],
        execute: function () {
            CONTENT = {
                // -------------------------------
                // NOTES
                // * Use CSS for all caps
                // -------------------------------
                assessment: 'Assessment',
                buy: 'Buy',
                disclaimer: "* These insights and analyses are provided by Morningstar and are independent from Voya's own assessments and/or opinions",
                fairValue: 'Fair Value',
                hold: 'Hold',
                insights: 'Insights from Morningstar*',
                login: 'Login',
                msTake: "Morningstar's Take",
                msValuation: 'Morningstar Valuation',
                opinions: 'Analyst Opinions',
                or: 'or',
                provided: 'Provided by Morningstar',
                sell: 'Sell',
                signUp: 'Sign up',
                toContinue: 'To continue reading, please',
                toSee: 'To see these values'
            };

            _export('CONTENT', CONTENT);
        }
    };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/services/authentication-services', ['npm:whatwg-fetch@0.11.1', 'COMPANY-github:Voya/dd2c-ui@master/lib/services-cache', 'COMPANY-github:Voya/dd2c-ui@master/lib/services/service-overrides', 'COMPANY-github:Voya/dd2c-ui@master/lib/services/base-url'], function (_export) {
    /* globals Request, Headers */

    'use strict';

    // if BASE_URLs are needed, use /lib/services/base-url
    var getFromCache, addToCache, existsInCache, ServiceOverrides, BASE_URL, serviceOverrides, MY_VOYA_BASE, PING_SESSION_URL, SSO_LOGIN_URL, SSO_SIGNUP_URL;

    _export('getSignUpUrl', getSignUpUrl);

    _export('getLoginUrl', getLoginUrl);

    _export('pingSession', pingSession);

    function getSignUpUrl(target, hash) {
        target = addReplaceHash(target, hash);
        target = target + '&lightbox=signUpSuccess';

        return SSO_SIGNUP_URL + '?page=profile&appid=COMPANY.com&target=' + encodeURIComponent(target);
    }

    function getLoginUrl(target, hash) {
        target = addReplaceHash(target, hash);

        return SSO_LOGIN_URL + '?appid=COMPANY.com&target=' + encodeURIComponent(target);
    }

    function addReplaceHash(target, hash) {

        target = target.toString();

        if (target.indexOf('#') > -1) {
            target = target.substr(0, target.indexOf('#'));
        }

        return target + '#' + hash;
    }

    function pingSession() {

        var cacheId = PING_SESSION_URL;

        cacheId = serviceOverrides.overrideIfEnabled(cacheId);

        if (existsInCache(cacheId)) {
            return getFromCache(cacheId);
        }
        // var pingSessionRequest = new Request(cacheId, {
        //     method: 'GET',
        //     headers: new Headers({
        //         'X-Requested-By' : 'myCOMPANY'//,
        //         // 'userglobalid': '2bf0df3f-dd84-d009-e053-d22aac0a983a'
        //     }),
        //     // mode: 'no-cors',
        //     credentials: 'include'
        // });

        return fetch(cacheId, {
            method: 'GET',
            headers: new Headers({
                'X-Requested-By': 'myCOMPANY' //,
                // 'userglobalid': '2bf0df3f-dd84-d009-e053-d22aac0a983a'
            }),
            // mode: 'no-cors',
            credentials: 'include'
        })
        // .then(checkStatus)
        // .then(parseJSON)
        .then(function (data) {

            return data.json();
        })['catch'](function (err) {
            // console.log('err')
            return err;
        });
    }

    return {
        setters: [function (_npmWhatwgFetch0111) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesCache) {
            getFromCache = _COMPANYGithubVoyaDd2cUiMasterLibServicesCache.getFromCache;
            addToCache = _COMPANYGithubVoyaDd2cUiMasterLibServicesCache.addToCache;
            existsInCache = _COMPANYGithubVoyaDd2cUiMasterLibServicesCache.existsInCache;
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesServiceOverrides) {
            ServiceOverrides = _COMPANYGithubVoyaDd2cUiMasterLibServicesServiceOverrides['default'];
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesBaseUrl) {
            BASE_URL = _COMPANYGithubVoyaDd2cUiMasterLibServicesBaseUrl.BASE_URL;
        }],
        execute: function () {
            serviceOverrides = new ServiceOverrides();
            MY_VOYA_BASE = BASE_URL.myVoya;
            PING_SESSION_URL = MY_VOYA_BASE + 'COMPANYsso/ws/ers/public/pingSession';
            SSO_LOGIN_URL = MY_VOYA_BASE + 'COMPANYsso/logon';
            SSO_SIGNUP_URL = MY_VOYA_BASE + 'COMPANYsso/logon';
        }
    };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/insights/morningstar-insights/morningstar-insights', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:aurelia-framework@1.0.0-beta.1.2.2', 'npm:aurelia-event-aggregator@1.0.0-beta.1.2.0', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/insights/content/en', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/services', 'COMPANY-github:Voya/dd2c-ui@master/lib/services/authentication-services'], function (_export) {
    var _createClass, _classCallCheck, bindable, inject, BindingEngine, EventAggregator, CONTENT, sessionToken, publicInsights, secureInsights, TOOLTIP_ST_INSIGHTS, pingSession, getSignUpUrl, getLoginUrl, isLoggedIn, MorningstarInsights;

    return {
        setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
            _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_npmAureliaFramework100Beta122) {
            bindable = _npmAureliaFramework100Beta122.bindable;
            inject = _npmAureliaFramework100Beta122.inject;
            BindingEngine = _npmAureliaFramework100Beta122.BindingEngine;
        }, function (_npmAureliaEventAggregator100Beta120) {
            EventAggregator = _npmAureliaEventAggregator100Beta120.EventAggregator;
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsInsightsContentEn) {
            CONTENT = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsInsightsContentEn.CONTENT;
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices) {
            sessionToken = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.sessionToken;
            publicInsights = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.publicInsights;
            secureInsights = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.secureInsights;
            TOOLTIP_ST_INSIGHTS = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.TOOLTIP_ST_INSIGHTS;
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesAuthenticationServices) {
            pingSession = _COMPANYGithubVoyaDd2cUiMasterLibServicesAuthenticationServices.pingSession;
            getSignUpUrl = _COMPANYGithubVoyaDd2cUiMasterLibServicesAuthenticationServices.getSignUpUrl;
            getLoginUrl = _COMPANYGithubVoyaDd2cUiMasterLibServicesAuthenticationServices.getLoginUrl;
        }],
        execute: function () {
            'use strict';

            isLoggedIn = false;

            MorningstarInsights = (function () {
                function MorningstarInsights(EventAggregator) {
                    _classCallCheck(this, _MorningstarInsights);

                    this.ea = EventAggregator;

                    this.symbolValue = this.getSymbolFromQueryString();
                    this.getPing(this.symbolValue);

                    this.content = CONTENT;

                    this.vm = {};
                    this.vm.tooltipUrl = TOOLTIP_ST_INSIGHTS; // NOTE: this is only shown for STOCKS
                    this.vm.msInsights = [];
                    this.vm.isLoggedIn = false;
                    this.vm.loginUrl = getLoginUrl(document.location, 'insights');
                    this.vm.signUpUrl = getSignUpUrl(document.location, 'insights');
                }

                _createClass(MorningstarInsights, [{
                    key: 'getPing',
                    value: function getPing(symbolString) {
                        var _this = this;

                        this.getPublicInsights(symbolString);

                        // // Call the ping session to determine if the user is logged in
                        pingSession().then(function (data) {

                            // if user is logged in change to true
                            _this.vm.isLoggedIn = false;

                            // not logged in: {status: 'No session'}
                            // logged in: {status: 'OK'}
                            if (data.status === 'OK') {
                                _this.vm.isLoggedIn = true;
                                // console.log('SECURE --------------------------------------------')
                                _this.getSecureInsights(symbolString);
                            } else {
                                _this.vm.isLoggedIn = false;
                            }

                            // console.log('then', this.isLoggedIn, this, data)
                        }, function (err) {
                            _this.vm.isLoggedIn = false;
                            // console.log(arguments, err, arguments[0]);
                        }).then(function (data) {
                            // console.log('then', this.isLoggedIn, this, data)
                            // this.getInsights(symbolString);
                        });
                    }
                }, {
                    key: 'getQueryString',
                    value: function getQueryString(field, url) {
                        var href = url ? url : window.location.href;
                        var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
                        var string = reg.exec(href);

                        return string ? string[1] : null;
                    }
                }, {
                    key: 'getSymbolFromQueryString',
                    value: function getSymbolFromQueryString() {
                        return this.getQueryString('symbol') || '';
                    }
                }, {
                    key: 'getSecureInsights',
                    value: function getSecureInsights() {
                        var _this2 = this;

                        var buy = 'buy';
                        var sell = 'sell';
                        var hold = 'hold';

                        secureInsights(this.symbolValue).then(function (details) {
                            // console.log('secure insights', details);

                            _this2.setMSInsights(details);

                            if (details.analystOpinion) {
                                _this2.calculateAnalystRatings(buy, details.analystOpinion.buy);
                                _this2.calculateAnalystRatings(sell, details.analystOpinion.sell);
                                _this2.calculateAnalystRatings(hold, details.analystOpinion.hold);
                            }
                        });
                    }
                }, {
                    key: 'getPublicInsights',
                    value: function getPublicInsights() {
                        var _this3 = this;

                        var buy = 'buy';
                        var sell = 'sell';
                        var hold = 'hold';

                        publicInsights(this.symbolValue).then(function (details) {
                            // console.log('public insights', details);

                            _this3.setMSInsights(details);

                            if (details.analystOpinion) {
                                _this3.calculateAnalystRatings(buy, details.analystOpinion.buy);
                                _this3.calculateAnalystRatings(sell, details.analystOpinion.sell);
                                _this3.calculateAnalystRatings(hold, details.analystOpinion.hold);
                            }
                        });
                    }
                }, {
                    key: 'getInsightsDetail',
                    value: function getInsightsDetail() {
                        var _this4 = this;

                        // console.log('this.vm.msInsights.analystTake.expertCommentary',
                        // this.vm.msInsights.analystTake.expertCommentary)

                        // hard coded keys that match the property values
                        // sets order
                        var commentarySectionKeys = ['Summary', 'Profile', 'Financial Health', 'Management', 'Risk', 'Valuation'];

                        var contentBySection = commentarySectionKeys.map(function (sectionKey) {
                            if (_this4.vm.msInsights.analystTake.expertCommentary[sectionKey]) {
                                var sectionContent = _this4.vm.msInsights.analystTake.expertCommentary[sectionKey];
                                // ensure that section has real content -- arbitrary length check
                                return sectionContent.length > 2 ? '<h4>' + sectionKey + '</h4>' + '<p>' + sectionContent + '</p>' : '';
                            } else {
                                return '';
                            }
                        });

                        var insightsModalObj = {
                            title: 'Morningstar\'s Take',
                            // publicationTime: '',
                            // author: '',
                            content: contentBySection.join('')
                        };

                        // source: ''
                        this.ea.publish('modalContent', insightsModalObj);
                    }
                }, {
                    key: 'calculateAnalystRatings',
                    value: function calculateAnalystRatings(recomendation, rating) {
                        recomendation = '.COMPANY-morningstar-insights__analyist-opinion-' + recomendation;
                        var el = document.querySelector(recomendation);

                        if (rating !== '0') {
                            for (var j = rating; j > 0; j--) {
                                el.innerHTML += '<i class="fa fa-circle"></i>';
                            }
                        } else {
                            el.innerHTML += '<span>&nbsp;-</span>';
                        }
                    }
                }, {
                    key: 'setMSInsights',
                    value: function setMSInsights(details) {
                        this.vm.msInsights = details;
                    }
                }]);

                var _MorningstarInsights = MorningstarInsights;
                MorningstarInsights = inject(EventAggregator)(MorningstarInsights) || MorningstarInsights;
                return MorningstarInsights;
            })();

            _export('MorningstarInsights', MorningstarInsights);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/news.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "    <template>\n\t<require from=\"./headlines/headlines\"></require>\n\t<require from=\"./press-releases/press-releases\"></require>\n\t<require from=\"./twitter/twitter\"></require>\n    <require from=\"../../lib/components/modal/modal\"></require>\n\n\t<!--COMPANY symbol news-->\n\n    <h3 class=\"dd2c-page__heading dd2c-page_content-3\">${newsheader}</h3>\n\n    <div class=\"dd2c-page__content-wrapper\">\n        <div class=\"dd2c-page__content-2\">\n    \t   <headlines></headlines>\n        </div>\n        <div class=\"dd2c-page__content-1\">\n    \t   <press-releases></press-releases>\n    \t</div>\n    </div>\n    <twitter></twitter>\n\n    <modal></modal>\n</template>\n";
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/twitter/twitter.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n\t<!--COMPANY symbol twitter-->\n</template>\n";
});

_removeDefine();
})();
System.register("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/twitter/twitter", ["npm:babel-runtime@5.8.24/helpers/class-call-check"], function (_export) {
    var _classCallCheck, Twitter;

    return {
        setters: [function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck["default"];
        }],
        execute: function () {
            "use strict";

            Twitter = function Twitter() {
                _classCallCheck(this, Twitter);
            };

            _export("Twitter", Twitter);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/headlines/headlines.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n    <section class=\"dd2c-page__section dd2c-page__top-border dd2c-page__background COMPANY-market-news__headlines-wrapper\">\n        <ul class=\"COMPANY-market-news__articles\">\n            <li class=\"dd2c-page__section-heading\">${headerHeadlines}</li>\n            <li class=\"COMPANY-market-news__articles-item\" click.delegate=\"getArticleDetail(headline.resourceId, headline.authors) & debounce\" repeat.for=\"headline of headlines\">\n                <h3   class=\"COMPANY-market-news__headline\" >${headline.title}</h3>\n                <span class=\"COMPANY-market-news__source\"   >${headline.source} -</span>\n                <span class=\"COMPANY-market-news__timestamp\">${headline.publicationTime}</span>\n            </li>\n        </ul>\n    </section>\n</template>";
});

_removeDefine();
})();
System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/headlines/headlines', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/content/en', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/services', 'COMPANY-github:Voya/deep-ui-COMPANY-aurelia@1.1.0', 'npm:aurelia-framework@1.0.0-beta.1.2.2', 'npm:aurelia-event-aggregator@1.0.0-beta.1.2.0'], function (_export) {
    var _createClass, _classCallCheck, CONTENT, sessionToken, symbolDetails, newsHeadlines, newsArticle, enhance, LogManager, inject, EventAggregator, Headlines;

    return {
        setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
            _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsContentEn) {
            CONTENT = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsContentEn.CONTENT;
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices) {
            sessionToken = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.sessionToken;
            symbolDetails = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.symbolDetails;
            newsHeadlines = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.newsHeadlines;
            newsArticle = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.newsArticle;
        }, function (_COMPANYGithubVoyaDeepUiVoyaAurelia110) {
            enhance = _COMPANYGithubVoyaDeepUiVoyaAurelia110.enhance;
            LogManager = _COMPANYGithubVoyaDeepUiVoyaAurelia110.LogManager;
        }, function (_npmAureliaFramework100Beta122) {
            inject = _npmAureliaFramework100Beta122.inject;
        }, function (_npmAureliaEventAggregator100Beta120) {
            EventAggregator = _npmAureliaEventAggregator100Beta120.EventAggregator;
        }],
        execute: function () {
            'use strict';

            Headlines = (function () {
                function Headlines(EventAggregator) {
                    _classCallCheck(this, _Headlines);

                    this.ea = EventAggregator;
                    this.headlines = [];
                    this.symbolValue = this.getSymbolFromQueryString();
                    this.headerHeadlines = CONTENT.headlines;
                    this.getArticles();
                }

                _createClass(Headlines, [{
                    key: 'getSymbolFromQueryString',
                    value: function getSymbolFromQueryString() {
                        var getQueryString = function getQueryString(field, url) {
                            var href = url ? url : window.location.href;
                            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
                            var string = reg.exec(href);

                            return string ? string[1] : null;
                        };

                        return getQueryString('symbol') || '';
                    }
                }, {
                    key: 'getArticles',
                    value: function getArticles() {
                        var _this = this;

                        newsHeadlines(this.symbolValue).then(function (details) {
                            _this.setData(details);
                        });
                    }
                }, {
                    key: 'getArticleDetail',
                    value: function getArticleDetail(resourceId, authors) {
                        var _this2 = this;

                        newsArticle(resourceId).then(function (articleDetails) {
                            // publish modal content for event aggregator
                            articleDetails.author = authors;
                            _this2.ea.publish('modalContent', articleDetails);
                        });
                    }
                }, {
                    key: 'setData',
                    value: function setData(details) {
                        this.headlines = details;
                    }
                }]);

                var _Headlines = Headlines;
                Headlines = inject(EventAggregator)(Headlines) || Headlines;
                return Headlines;
            })();

            _export('Headlines', Headlines);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/press-releases/press-releases.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n\t<section class=\"dd2c-page__section dd2c-page__top-border dd2c-page__background COMPANY-market-news_press-release-wrapper\">\n        <ul class=\"COMPANY-market-news__press-releases\">\n            <li class=\"dd2c-page__section-heading\">${headerPressReleases}</li>\n            <li class=\"COMPANY-market-news__press-releases-item\" click.delegate=\"getArticleDetail(pr.resourceId) & debounce\" repeat.for=\"pr of pr\">\n                <h3   class=\"COMPANY-market-news__pr-headline\" >${pr.title}</h3>\n                <span class=\"COMPANY-market-news__pr-source\"   >${pr.source} -</span>\n                <span class=\"COMPANY-market-news__pr-timestamp\">${pr.publicationTime}</span>\n            </li>\n        </ul>\n    </section>\n</template>\n";
});

_removeDefine();
})();
System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/press-releases/press-releases', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/content/en', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/services', 'COMPANY-github:Voya/deep-ui-COMPANY-aurelia@1.1.0', 'npm:aurelia-framework@1.0.0-beta.1.2.2', 'npm:aurelia-event-aggregator@1.0.0-beta.1.2.0'], function (_export) {
    var _createClass, _classCallCheck, CONTENT, sessionToken, symbolDetails, pressReleases, pressReleaseDetails, enhance, LogManager, inject, EventAggregator, PressReleases;

    return {
        setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
            _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsContentEn) {
            CONTENT = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsContentEn.CONTENT;
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices) {
            sessionToken = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.sessionToken;
            symbolDetails = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.symbolDetails;
            pressReleases = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.pressReleases;
            pressReleaseDetails = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.pressReleaseDetails;
        }, function (_COMPANYGithubVoyaDeepUiVoyaAurelia110) {
            enhance = _COMPANYGithubVoyaDeepUiVoyaAurelia110.enhance;
            LogManager = _COMPANYGithubVoyaDeepUiVoyaAurelia110.LogManager;
        }, function (_npmAureliaFramework100Beta122) {
            inject = _npmAureliaFramework100Beta122.inject;
        }, function (_npmAureliaEventAggregator100Beta120) {
            EventAggregator = _npmAureliaEventAggregator100Beta120.EventAggregator;
        }],
        execute: function () {
            'use strict';

            PressReleases = (function () {
                function PressReleases(EventAggregator) {
                    _classCallCheck(this, _PressReleases);

                    this.ea = EventAggregator;
                    this.pressReleases = [];
                    this.symbolValue = this.getSymbolFromQueryString();
                    this.headerPressReleases = CONTENT.pressreleases;
                    this.getReleases();
                }

                _createClass(PressReleases, [{
                    key: 'getSymbolFromQueryString',
                    value: function getSymbolFromQueryString() {
                        var getQueryString = function getQueryString(field, url) {
                            var href = url ? url : window.location.href;
                            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
                            var string = reg.exec(href);

                            return string ? string[1] : null;
                        };

                        return getQueryString('symbol') || '';
                    }
                }, {
                    key: 'getReleases',
                    value: function getReleases() {
                        var self = this;

                        pressReleases(this.symbolValue).then(function (details) {
                            self.setData(details);
                        });
                    }
                }, {
                    key: 'getArticleDetail',
                    value: function getArticleDetail(resourceId) {
                        var self = this;

                        pressReleaseDetails(resourceId).then(function (pressReleaseDetails) {
                            // publish modal content for event aggregator
                            self.ea.publish('modalContent', pressReleaseDetails);
                        });
                    }
                }, {
                    key: 'setData',
                    value: function setData(details) {
                        this.pr = details;
                    }
                }]);

                var _PressReleases = PressReleases;
                PressReleases = inject(EventAggregator)(PressReleases) || PressReleases;
                return PressReleases;
            })();

            _export('PressReleases', PressReleases);
        }
    };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/endpoint', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check'], function (_export) {
  var _createClass, _classCallCheck, EndpointCustomAttribute;

  return {
    setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
      _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
    }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
      _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
    }],
    execute: function () {
      'use strict';

      EndpointCustomAttribute = (function () {
        _createClass(EndpointCustomAttribute, null, [{
          key: 'inject',
          value: [Element],
          enumerable: true
        }]);

        function EndpointCustomAttribute(element) {
          _classCallCheck(this, EndpointCustomAttribute);

          this.element = element;
        }

        _createClass(EndpointCustomAttribute, [{
          key: 'valueChanged',
          value: function valueChanged(newValue, oldValue) {

            var selectorName = 'endpoint',
                selectorPropName = 'endpoint';

            // TODO: there should be a more aurelia-esque to do this
            if (newValue !== oldValue && this.element.au.controller && this.element.au.controller.viewModel) {

              this.element.au.controller.viewModel[selectorPropName] = newValue;
            } else if (newValue !== oldValue) {

              this.element.setAttribute(selectorName, newValue);
              // console.log(selectorName + ' changed: ', this.element, this.element.getAttribute(selectorName));
            }
          }
        }]);

        return EndpointCustomAttribute;
      })();

      _export('EndpointCustomAttribute', EndpointCustomAttribute);
    }
  };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/target-selector', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check'], function (_export) {
  var _createClass, _classCallCheck, TargetSelectorCustomAttribute;

  return {
    setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
      _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
    }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
      _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
    }],
    execute: function () {
      'use strict';

      TargetSelectorCustomAttribute = (function () {
        _createClass(TargetSelectorCustomAttribute, null, [{
          key: 'inject',
          value: [Element],
          enumerable: true
        }]);

        function TargetSelectorCustomAttribute(element) {
          _classCallCheck(this, TargetSelectorCustomAttribute);

          this.element = element;
        }

        _createClass(TargetSelectorCustomAttribute, [{
          key: 'valueChanged',
          value: function valueChanged(newValue, oldValue) {

            var selectorName = 'target-selector',
                selectorPropName = 'targetSelector';

            // TODO: there should be a more aurelia-esque to do this
            if (newValue !== oldValue && this.element.au.controller && this.element.au.controller.viewModel) {

              this.element.au.controller.viewModel[selectorPropName] = newValue;
            } else if (newValue !== oldValue) {

              this.element.setAttribute(selectorName, newValue);
              // console.log(selectorName + ' changed: ', this.element, this.element.getAttribute(selectorName));
            }
          }
        }]);

        return TargetSelectorCustomAttribute;
      })();

      _export('TargetSelectorCustomAttribute', TargetSelectorCustomAttribute);
    }
  };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/bounding-selector', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check'], function (_export) {
  var _createClass, _classCallCheck, BoundingSelectorCustomAttribute;

  return {
    setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
      _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
    }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
      _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
    }],
    execute: function () {
      'use strict';

      BoundingSelectorCustomAttribute = (function () {
        _createClass(BoundingSelectorCustomAttribute, null, [{
          key: 'inject',
          value: [Element],
          enumerable: true
        }]);

        function BoundingSelectorCustomAttribute(element) {
          _classCallCheck(this, BoundingSelectorCustomAttribute);

          this.element = element;
        }

        _createClass(BoundingSelectorCustomAttribute, [{
          key: 'valueChanged',
          value: function valueChanged(newValue, oldValue) {

            var selectorName = 'bounding-selector',
                selectorPropName = 'boundingSelector';

            // TODO: there should be a more aurelia-esque to do this
            if (newValue !== oldValue && this.element.au.controller && this.element.au.controller.viewModel) {

              this.element.au.controller.viewModel[selectorPropName] = newValue;
            } else if (newValue !== oldValue) {

              this.element.setAttribute(selectorName, newValue);
              // console.log(selectorName + ' changed: ', this.element, this.element.getAttribute(selectorName));
            }
          }
        }]);

        return BoundingSelectorCustomAttribute;
      })();

      _export('BoundingSelectorCustomAttribute', BoundingSelectorCustomAttribute);
    }
  };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/min-width', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check'], function (_export) {
  var _createClass, _classCallCheck, MinWidthCustomAttribute;

  return {
    setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
      _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
    }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
      _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
    }],
    execute: function () {
      'use strict';

      MinWidthCustomAttribute = (function () {
        _createClass(MinWidthCustomAttribute, null, [{
          key: 'inject',
          value: [Element],
          enumerable: true
        }]);

        function MinWidthCustomAttribute(element) {
          _classCallCheck(this, MinWidthCustomAttribute);

          this.element = element;
        }

        _createClass(MinWidthCustomAttribute, [{
          key: 'valueChanged',
          value: function valueChanged(newValue, oldValue) {

            var selectorName = 'min-width',
                selectorPropName = 'minWidth';

            // TODO: there should be a more aurelia-esque to do this
            if (newValue !== oldValue && this.element.au.controller && this.element.au.controller.viewModel) {

              this.element.au.controller.viewModel[selectorPropName] = newValue;
            } else if (newValue !== oldValue) {

              this.element.setAttribute(selectorName, newValue);
              // console.log(selectorName + ' changed: ', this.element, this.element.getAttribute(selectorName));
            }
          }
        }]);

        return MinWidthCustomAttribute;
      })();

      _export('MinWidthCustomAttribute', MinWidthCustomAttribute);
    }
  };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/max-width', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check'], function (_export) {
  var _createClass, _classCallCheck, MaxWidthCustomAttribute;

  return {
    setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
      _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
    }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
      _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
    }],
    execute: function () {
      'use strict';

      MaxWidthCustomAttribute = (function () {
        _createClass(MaxWidthCustomAttribute, null, [{
          key: 'inject',
          value: [Element],
          enumerable: true
        }]);

        function MaxWidthCustomAttribute(element) {
          _classCallCheck(this, MaxWidthCustomAttribute);

          this.element = element;
        }

        _createClass(MaxWidthCustomAttribute, [{
          key: 'valueChanged',
          value: function valueChanged(newValue, oldValue) {

            var selectorName = 'max-width',
                selectorPropName = 'maxWidth';

            // TODO: there should be a more aurelia-esque to do this
            if (newValue !== oldValue && this.element.au.controller && this.element.au.controller.viewModel) {

              this.element.au.controller.viewModel[selectorPropName] = newValue;
            } else if (newValue !== oldValue) {

              this.element.setAttribute(selectorName, newValue);
              // console.log(selectorName + ' changed: ', this.element, this.element.getAttribute(selectorName));
            }
          }
        }]);

        return MaxWidthCustomAttribute;
      })();

      _export('MaxWidthCustomAttribute', MaxWidthCustomAttribute);
    }
  };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/position', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check'], function (_export) {
  var _createClass, _classCallCheck, PositionCustomAttribute;

  return {
    setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
      _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
    }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
      _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
    }],
    execute: function () {
      'use strict';

      PositionCustomAttribute = (function () {
        _createClass(PositionCustomAttribute, null, [{
          key: 'inject',
          value: [Element],
          enumerable: true
        }]);

        function PositionCustomAttribute(element) {
          _classCallCheck(this, PositionCustomAttribute);

          this.element = element;
        }

        _createClass(PositionCustomAttribute, [{
          key: 'valueChanged',
          value: function valueChanged(newValue, oldValue) {

            var selectorName = 'position',
                selectorPropName = 'position';

            // TODO: there should be a more aurelia-esque to do this
            if (newValue !== oldValue && this.element.au.controller && this.element.au.controller.viewModel) {

              this.element.au.controller.viewModel[selectorPropName] = newValue;
            } else if (newValue !== oldValue) {

              this.element.setAttribute(selectorName, newValue);
              // console.log(selectorName + ' changed: ', this.element, this.element.getAttribute(selectorName));
            }
          }
        }]);

        return PositionCustomAttribute;
      })();

      _export('PositionCustomAttribute', PositionCustomAttribute);
    }
  };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/heading', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check'], function (_export) {
    var _createClass, _classCallCheck, HeadingCustomAttribute;

    return {
        setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
            _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }],
        execute: function () {
            'use strict';

            HeadingCustomAttribute = (function () {
                _createClass(HeadingCustomAttribute, null, [{
                    key: 'inject',
                    value: [Element],
                    enumerable: true
                }]);

                function HeadingCustomAttribute(element) {
                    _classCallCheck(this, HeadingCustomAttribute);

                    this.element = element;
                }

                _createClass(HeadingCustomAttribute, [{
                    key: 'valueChanged',
                    value: function valueChanged(newValue, oldValue) {

                        var selectorName = 'heading',
                            selectorPropName = 'heading';

                        // TODO: there should be a more aurelia-esque to do this
                        if (newValue !== oldValue && this.element.au.controller && this.element.au.controller.viewModel) {

                            this.element.au.controller.viewModel[selectorPropName] = newValue;
                        } else if (newValue !== oldValue) {

                            this.element.setAttribute(selectorName, newValue);
                            // console.log(selectorName + ' changed: ', this.element, this.element.getAttribute(selectorName));
                        }
                    }
                }]);

                return HeadingCustomAttribute;
            })();

            _export('HeadingCustomAttribute', HeadingCustomAttribute);
        }
    };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/type', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check'], function (_export) {
    var _createClass, _classCallCheck, TypeCustomAttribute;

    return {
        setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
            _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }],
        execute: function () {
            'use strict';

            TypeCustomAttribute = (function () {
                _createClass(TypeCustomAttribute, null, [{
                    key: 'inject',
                    value: [Element],
                    enumerable: true
                }]);

                function TypeCustomAttribute(element) {
                    _classCallCheck(this, TypeCustomAttribute);

                    this.element = element;
                }

                _createClass(TypeCustomAttribute, [{
                    key: 'valueChanged',
                    value: function valueChanged(newValue, oldValue) {

                        var selectorName = 'type',
                            selectorPropName = 'type';

                        // TODO: there should be a more aurelia-esque to do this
                        if (newValue !== oldValue && this.element.au.controller && this.element.au.controller.viewModel) {

                            this.element.au.controller.viewModel[selectorPropName] = newValue;
                        } else if (newValue !== oldValue) {

                            this.element.setAttribute(selectorName, newValue);
                            // console.log(selectorName + ' changed: ', this.element, this.element.getAttribute(selectorName));
                        }
                    }
                }]);

                return TypeCustomAttribute;
            })();

            _export('TypeCustomAttribute', TypeCustomAttribute);
        }
    };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/body-html', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check'], function (_export) {
    var _createClass, _classCallCheck, BodyHtmlCustomAttribute;

    return {
        setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
            _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }],
        execute: function () {
            'use strict';

            BodyHtmlCustomAttribute = (function () {
                _createClass(BodyHtmlCustomAttribute, null, [{
                    key: 'inject',
                    value: [Element],
                    enumerable: true
                }]);

                function BodyHtmlCustomAttribute(element) {
                    _classCallCheck(this, BodyHtmlCustomAttribute);

                    this.element = element;
                }

                _createClass(BodyHtmlCustomAttribute, [{
                    key: 'valueChanged',
                    value: function valueChanged(newValue, oldValue) {

                        var selectorName = 'body-html',
                            selectorPropName = 'bodyHtml';

                        // TODO: there should be a more aurelia-esque to do this
                        if (newValue !== oldValue && this.element.au.controller && this.element.au.controller.viewModel) {

                            this.element.au.controller.viewModel[selectorPropName] = newValue;
                        } else if (newValue !== oldValue) {

                            this.element.setAttribute(selectorName, newValue);
                            // console.log(selectorName + ' changed: ', this.element, this.element.getAttribute(selectorName));
                        }
                    }
                }]);

                return BodyHtmlCustomAttribute;
            })();

            _export('BodyHtmlCustomAttribute', BodyHtmlCustomAttribute);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/lib/components/modal/modal.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n    <div id=\"COMPANY-market-news__modal\" class=\"COMPANY-market-news__modal \" >\n        <div class=\"COMPANY-market-news__modal-inner\">\n            <div class=\"COMPANY-market-news__modal-inner-header\">\n                <div class=\"COMPANY-market-news__modal-inner-header-close\" click.delegate=\"closeModal()\">X</div>\n            </div>\n            <div class=\"COMPANY-market-news__modal-content\">\n                <h3 class=\"COMPANY-market-news__modal-content-title\">${modal.title}</h3>\n                <div class=\"COMPANY-market-news__modal-content-meta\">\n                    <span class=\"COMPANY-market-news__modal-content-meta-publication-time\">${modal.publicationTime}</span>\n                    <span class=\"COMPANY-market-news__modal-content-meta-author\" if.bind=\"modal.author\">By ${modal.author}</span>\n                </div>\n                <article class=\"COMPANY-market-news__modal-content-body\" innerhtml.bind=\"modal.content\"></article>\n                <footer class=\"COMPANY-market-news__modal-content-footer\">\n                    <span class=\"COMPANY-market-news__modal-content-footer-source\">${modal.source}</span>\n                    <span class=\"COMPANY-market-news__modal-content-footer-publication-time\">${modal.publicationTime}</span>\n                    <span class=\"COMPANY-market-news__modal-content-footer-author\">${newsContent.copyright} ${modal.source}</span>\n                </footer>\n            </div>\n        </div>\n    </div>\n</template>";
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("npm:aurelia-event-aggregator@1.0.0-beta.1.2.0/aurelia-event-aggregator", ["exports", "npm:aurelia-logging@1.0.0-beta.2.0.1"], function(exports, _aureliaLogging) {
  'use strict';
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.EventAggregator = undefined;
  exports.includeEventsIn = includeEventsIn;
  exports.configure = configure;
  var LogManager = _interopRequireWildcard(_aureliaLogging);
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key))
            newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var logger = LogManager.getLogger('event-aggregator');
  var Handler = function() {
    function Handler(messageType, callback) {
      _classCallCheck(this, Handler);
      this.messageType = messageType;
      this.callback = callback;
    }
    Handler.prototype.handle = function handle(message) {
      if (message instanceof this.messageType) {
        this.callback.call(null, message);
      }
    };
    return Handler;
  }();
  var EventAggregator = exports.EventAggregator = function() {
    function EventAggregator() {
      _classCallCheck(this, EventAggregator);
      this.eventLookup = {};
      this.messageHandlers = [];
    }
    EventAggregator.prototype.publish = function publish(event, data) {
      var subscribers = void 0;
      var i = void 0;
      if (!event) {
        throw new Error('Event was invalid.');
      }
      if (typeof event === 'string') {
        subscribers = this.eventLookup[event];
        if (subscribers) {
          subscribers = subscribers.slice();
          i = subscribers.length;
          try {
            while (i--) {
              subscribers[i](data, event);
            }
          } catch (e) {
            logger.error(e);
          }
        }
      } else {
        subscribers = this.messageHandlers.slice();
        i = subscribers.length;
        try {
          while (i--) {
            subscribers[i].handle(event);
          }
        } catch (e) {
          logger.error(e);
        }
      }
    };
    EventAggregator.prototype.subscribe = function subscribe(event, callback) {
      var handler = void 0;
      var subscribers = void 0;
      if (!event) {
        throw new Error('Event channel/type was invalid.');
      }
      if (typeof event === 'string') {
        handler = callback;
        subscribers = this.eventLookup[event] || (this.eventLookup[event] = []);
      } else {
        handler = new Handler(event, callback);
        subscribers = this.messageHandlers;
      }
      subscribers.push(handler);
      return {dispose: function dispose() {
          var idx = subscribers.indexOf(handler);
          if (idx !== -1) {
            subscribers.splice(idx, 1);
          }
        }};
    };
    EventAggregator.prototype.subscribeOnce = function subscribeOnce(event, callback) {
      var sub = this.subscribe(event, function(a, b) {
        sub.dispose();
        return callback(a, b);
      });
      return sub;
    };
    return EventAggregator;
  }();
  function includeEventsIn(obj) {
    var ea = new EventAggregator();
    obj.subscribeOnce = function(event, callback) {
      return ea.subscribeOnce(event, callback);
    };
    obj.subscribe = function(event, callback) {
      return ea.subscribe(event, callback);
    };
    obj.publish = function(event, data) {
      ea.publish(event, data);
    };
    return ea;
  }
  function configure(config) {
    config.instance(EventAggregator, includeEventsIn(config.aurelia));
  }
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("npm:aurelia-event-aggregator@1.0.0-beta.1.2.0", ["npm:aurelia-event-aggregator@1.0.0-beta.1.2.0/aurelia-event-aggregator"], function(main) {
  return main;
});

_removeDefine();
})();
System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/content/en', [], function (_export) {
    'use strict';

    var CONTENT;
    return {
        setters: [],
        execute: function () {
            CONTENT = {
                // -------------------------------
                // NOTES
                // * Use CSS for all caps
                // -------------------------------
                copyright: "Copyright",
                news: 'News',
                headlines: 'Headlines',
                pressreleases: 'Press Releases'
            };

            _export('CONTENT', CONTENT);
        }
    };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/components/modal/modal', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:aurelia-framework@1.0.0-beta.1.2.2', 'npm:aurelia-event-aggregator@1.0.0-beta.1.2.0', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/content/en'], function (_export) {
    var _createClass, _classCallCheck, inject, EventAggregator, CONTENT, modal;

    return {
        setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
            _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_npmAureliaFramework100Beta122) {
            inject = _npmAureliaFramework100Beta122.inject;
        }, function (_npmAureliaEventAggregator100Beta120) {
            EventAggregator = _npmAureliaEventAggregator100Beta120.EventAggregator;
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsContentEn) {
            CONTENT = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsContentEn.CONTENT;
        }],
        execute: function () {
            'use strict';

            modal = (function () {
                function modal(EventAggregator) {
                    _classCallCheck(this, _modal);

                    this.modal = [];
                    // must accept a param to right justify modal content
                    this.newsContent = CONTENT;
                    this.ea = EventAggregator;
                }

                _createClass(modal, [{
                    key: 'attached',
                    value: function attached() {
                        var _this = this;

                        this.subscriber = this.ea.subscribe('modalContent', function (response) {
                            _this.setArticleDetail(response);
                        });
                    }
                }, {
                    key: 'detached',
                    value: function detached() {
                        this.subscriber.dispose();
                    }
                }, {
                    key: 'setArticleDetail',
                    value: function setArticleDetail(content) {

                        // fix background
                        //document.querySelector('body').classList.add('body-fixed-pos');

                        var modal = document.getElementById('COMPANY-market-news__modal');
                        this.modal = content;
                        modal.className += 'active';
                    }
                }, {
                    key: 'closeModal',
                    value: function closeModal() {
                        // unfix background
                        //document.querySelector('body').classList.remove('body-fixed-pos');

                        var modal = document.getElementById('COMPANY-market-news__modal');
                        var modalContent = document.getElementById('COMPANY-market-news__modal-content');
                        modal.className = '';
                        modal.className = 'COMPANY-market-news__modal ';
                    }
                }, {
                    key: 'setData',
                    value: function setData(details) {
                        this.modal = details;
                    }
                }]);

                var _modal = modal;
                modal = inject(EventAggregator)(modal) || modal;
                return modal;
            })();

            _export('modal', modal);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/lib/components/tooltip-contents/tooltip-contents.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n\n    <div class=\"COMPANY-slick-centered-carousel\">\n        <div class=\"i-tooltip-contents__carousel\">\n            <div class=\"tooltip-contents__slide\" repeat.for=\"slide of vm.slides\">\n                <h5 class=\"text__color-highlight\">${slide.title}</h5>\n                <p>${slide.body}</p>\n            </div>\n        </div>\n        <div class=\"slider-nav-container tooltip-contents__carousel-nav-container i-tooltip-contents__carousel-nav-container\">\n            <div class=\"slider-nav i-tooltip-contents__carousel-nav\"></div>\n        </div>\n    </div>\n</template>";
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
;
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define("npm:moment@2.11.1/moment", [], factory) : global.moment = factory();
}(this, function() {
  'use strict';
  var hookCallback;
  function utils_hooks__hooks() {
    return hookCallback.apply(null, arguments);
  }
  function setHookCallback(callback) {
    hookCallback = callback;
  }
  function isArray(input) {
    return Object.prototype.toString.call(input) === '[object Array]';
  }
  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  }
  function map(arr, fn) {
    var res = [],
        i;
    for (i = 0; i < arr.length; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }
  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }
    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }
    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }
    return a;
  }
  function create_utc__createUTC(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
  }
  function defaultParsingFlags() {
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false
    };
  }
  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }
  function valid__isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m);
      m._isValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated;
      if (m._strict) {
        m._isValid = m._isValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
      }
    }
    return m._isValid;
  }
  function valid__createInvalid(flags) {
    var m = create_utc__createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }
    return m;
  }
  function isUndefined(input) {
    return input === void 0;
  }
  var momentProperties = utils_hooks__hooks.momentProperties = [];
  function copyConfig(to, from) {
    var i,
        prop,
        val;
    if (!isUndefined(from._isAMomentObject)) {
      to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
      to._i = from._i;
    }
    if (!isUndefined(from._f)) {
      to._f = from._f;
    }
    if (!isUndefined(from._l)) {
      to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
      to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
      to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
      to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
      to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
      to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
      to._locale = from._locale;
    }
    if (momentProperties.length > 0) {
      for (i in momentProperties) {
        prop = momentProperties[i];
        val = from[prop];
        if (!isUndefined(val)) {
          to[prop] = val;
        }
      }
    }
    return to;
  }
  var updateInProgress = false;
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (updateInProgress === false) {
      updateInProgress = true;
      utils_hooks__hooks.updateOffset(this);
      updateInProgress = false;
    }
  }
  function isMoment(obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
  }
  function absFloor(number) {
    if (number < 0) {
      return Math.ceil(number);
    } else {
      return Math.floor(number);
    }
  }
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }
    return value;
  }
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
      if ((dontConvert && array1[i] !== array2[i]) || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }
  function Locale() {}
  var locales = {};
  var globalLocale;
  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
  }
  function chooseLocale(names) {
    var i = 0,
        j,
        next,
        locale,
        split;
    while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;
      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join('-'));
        if (locale) {
          return locale;
        }
        if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
          break;
        }
        j--;
      }
      i++;
    }
    return null;
  }
  function loadLocale(name) {
    var oldLocale = null;
    if (!locales[name] && (typeof module !== 'undefined') && module && module.exports) {
      try {
        oldLocale = globalLocale._abbr;
        require('./locale/' + name);
        locale_locales__getSetGlobalLocale(oldLocale);
      } catch (e) {}
    }
    return locales[name];
  }
  function locale_locales__getSetGlobalLocale(key, values) {
    var data;
    if (key) {
      if (isUndefined(values)) {
        data = locale_locales__getLocale(key);
      } else {
        data = defineLocale(key, values);
      }
      if (data) {
        globalLocale = data;
      }
    }
    return globalLocale._abbr;
  }
  function defineLocale(name, values) {
    if (values !== null) {
      values.abbr = name;
      locales[name] = locales[name] || new Locale();
      locales[name].set(values);
      locale_locales__getSetGlobalLocale(name);
      return locales[name];
    } else {
      delete locales[name];
      return null;
    }
  }
  function locale_locales__getLocale(key) {
    var locale;
    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }
    if (!key) {
      return globalLocale;
    }
    if (!isArray(key)) {
      locale = loadLocale(key);
      if (locale) {
        return locale;
      }
      key = [key];
    }
    return chooseLocale(key);
  }
  var aliases = {};
  function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
  }
  function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;
    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }
    return normalizedInput;
  }
  function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  }
  function makeGetSet(unit, keepTime) {
    return function(value) {
      if (value != null) {
        get_set__set(this, unit, value);
        utils_hooks__hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get_set__get(this, unit);
      }
    };
  }
  function get_set__get(mom, unit) {
    return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
  }
  function get_set__set(mom, unit, value) {
    if (mom.isValid()) {
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
  }
  function getSet(units, value) {
    var unit;
    if (typeof units === 'object') {
      for (unit in units) {
        this.set(unit, units[unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }
  function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }
  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  var formatFunctions = {};
  var formatTokenFunctions = {};
  function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
      func = function() {
        return this[callback]();
      };
    }
    if (token) {
      formatTokenFunctions[token] = func;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function() {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal) {
      formatTokenFunctions[ordinal] = function() {
        return this.localeData().ordinal(func.apply(this, arguments), token);
      };
    }
  }
  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
  }
  function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
        i,
        length;
    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }
    return function(mom) {
      var output = '';
      for (i = 0; i < length; i++) {
        output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
      }
      return output;
    };
  }
  function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }
    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](m);
  }
  function expandFormat(format, locale) {
    var i = 5;
    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }
    return format;
  }
  var match1 = /\d/;
  var match2 = /\d\d/;
  var match3 = /\d{3}/;
  var match4 = /\d{4}/;
  var match6 = /[+-]?\d{6}/;
  var match1to2 = /\d\d?/;
  var match3to4 = /\d\d\d\d?/;
  var match5to6 = /\d\d\d\d\d\d?/;
  var match1to3 = /\d{1,3}/;
  var match1to4 = /\d{1,4}/;
  var match1to6 = /[+-]?\d{1,6}/;
  var matchUnsigned = /\d+/;
  var matchSigned = /[+-]?\d+/;
  var matchOffset = /Z|[+-]\d\d:?\d\d/gi;
  var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
  var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
  var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
  var regexes = {};
  function addRegexToken(token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) {
      return (isStrict && strictRegex) ? strictRegex : regex;
    };
  }
  function getParseRegexForToken(token, config) {
    if (!hasOwnProp(regexes, token)) {
      return new RegExp(unescapeFormat(token));
    }
    return regexes[token](config._strict, config._locale);
  }
  function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    }));
  }
  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  var tokens = {};
  function addParseToken(token, callback) {
    var i,
        func = callback;
    if (typeof token === 'string') {
      token = [token];
    }
    if (typeof callback === 'number') {
      func = function(input, array) {
        array[callback] = toInt(input);
      };
    }
    for (i = 0; i < token.length; i++) {
      tokens[token[i]] = func;
    }
  }
  function addWeekParseToken(token, callback) {
    addParseToken(token, function(input, array, config, token) {
      config._w = config._w || {};
      callback(input, config._w, config, token);
    });
  }
  function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
      tokens[token](input, config._a, config, token);
    }
  }
  var YEAR = 0;
  var MONTH = 1;
  var DATE = 2;
  var HOUR = 3;
  var MINUTE = 4;
  var SECOND = 5;
  var MILLISECOND = 6;
  var WEEK = 7;
  var WEEKDAY = 8;
  function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  }
  addFormatToken('M', ['MM', 2], 'Mo', function() {
    return this.month() + 1;
  });
  addFormatToken('MMM', 0, 0, function(format) {
    return this.localeData().monthsShort(this, format);
  });
  addFormatToken('MMMM', 0, 0, function(format) {
    return this.localeData().months(this, format);
  });
  addUnitAlias('month', 'M');
  addRegexToken('M', match1to2);
  addRegexToken('MM', match1to2, match2);
  addRegexToken('MMM', function(isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
  });
  addRegexToken('MMMM', function(isStrict, locale) {
    return locale.monthsRegex(isStrict);
  });
  addParseToken(['M', 'MM'], function(input, array) {
    array[MONTH] = toInt(input) - 1;
  });
  addParseToken(['MMM', 'MMMM'], function(input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });
  var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
  function localeMonths(m, format) {
    return isArray(this._months) ? this._months[m.month()] : this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }
  var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
  function localeMonthsShort(m, format) {
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }
  function localeMonthsParse(monthName, format, strict) {
    var i,
        mom,
        regex;
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    for (i = 0; i < 12; i++) {
      mom = create_utc__createUTC([2000, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
        this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
      }
      if (!strict && !this._monthsParse[i]) {
        regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }
  function setMonth(mom, value) {
    var dayOfMonth;
    if (!mom.isValid()) {
      return mom;
    }
    if (typeof value === 'string') {
      value = mom.localeData().monthsParse(value);
      if (typeof value !== 'number') {
        return mom;
      }
    }
    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
  }
  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      utils_hooks__hooks.updateOffset(this, true);
      return this;
    } else {
      return get_set__get(this, 'Month');
    }
  }
  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }
  var defaultMonthsShortRegex = matchWord;
  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }
  var defaultMonthsRegex = matchWord;
  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }
  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom;
    for (i = 0; i < 12; i++) {
      mom = create_utc__createUTC([2000, i]);
      shortPieces.push(this.monthsShort(mom, ''));
      longPieces.push(this.months(mom, ''));
      mixedPieces.push(this.months(mom, ''));
      mixedPieces.push(this.monthsShort(mom, ''));
    }
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }
    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')$', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')$', 'i');
  }
  function checkOverflow(m) {
    var overflow;
    var a = m._a;
    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }
      getParsingFlags(m).overflow = overflow;
    }
    return m;
  }
  function warn(msg) {
    if (utils_hooks__hooks.suppressDeprecationWarnings === false && (typeof console !== 'undefined') && console.warn) {
      console.warn('Deprecation warning: ' + msg);
    }
  }
  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function() {
      if (firstTime) {
        warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  var deprecations = {};
  function deprecateSimple(name, msg) {
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }
  utils_hooks__hooks.suppressDeprecationWarnings = false;
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
  var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
  var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
  var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]];
  var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
  var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
  function configFromISO(config) {
    var i,
        l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat;
    if (match) {
      getParsingFlags(config).iso = true;
      for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            timeFormat = (match[2] || ' ') + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = 'Z';
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }
    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
      utils_hooks__hooks.createFromInputFallback(config);
    }
  }
  utils_hooks__hooks.createFromInputFallback = deprecate('moment construction falls back to js Date. This is ' + 'discouraged and will be removed in upcoming major ' + 'release. Please refer to ' + 'https://github.com/moment/moment/issues/1407 for more info.', function(config) {
    config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
  });
  function createDate(y, m, d, h, M, s, ms) {
    var date = new Date(y, m, d, h, M, s, ms);
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
      date.setFullYear(y);
    }
    return date;
  }
  function createUTCDate(y) {
    var date = new Date(Date.UTC.apply(null, arguments));
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }
    return date;
  }
  addFormatToken('Y', 0, 0, function() {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
  });
  addFormatToken(0, ['YY', 2], 0, function() {
    return this.year() % 100;
  });
  addFormatToken(0, ['YYYY', 4], 0, 'year');
  addFormatToken(0, ['YYYYY', 5], 0, 'year');
  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
  addUnitAlias('year', 'y');
  addRegexToken('Y', matchSigned);
  addRegexToken('YY', match1to2, match2);
  addRegexToken('YYYY', match1to4, match4);
  addRegexToken('YYYYY', match1to6, match6);
  addRegexToken('YYYYYY', match1to6, match6);
  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  addParseToken('YYYY', function(input, array) {
    array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken('YY', function(input, array) {
    array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
  });
  addParseToken('Y', function(input, array) {
    array[YEAR] = parseInt(input, 10);
  });
  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  utils_hooks__hooks.parseTwoDigitYear = function(input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  };
  var getSetYear = makeGetSet('FullYear', false);
  function getIsLeapYear() {
    return isLeapYear(this.year());
  }
  function firstWeekOffset(year, dow, doy) {
    var fwd = 7 + dow - doy,
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  }
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;
    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }
    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }
  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;
    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }
    return {
      week: resWeek,
      year: resYear
    };
  }
  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }
  function currentDateArray(config) {
    var nowValue = new Date(utils_hooks__hooks.now());
    if (config._useUTC) {
      return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }
  function configFromArray(config) {
    var i,
        date,
        input = [],
        currentDate,
        yearToUse;
    if (config._d) {
      return;
    }
    currentDate = currentDateArray(config);
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }
    if (config._dayOfYear) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
      if (config._dayOfYear > daysInYear(yearToUse)) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }
      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }
    for (; i < 7; i++) {
      config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }
    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
      config._a[HOUR] = 24;
    }
  }
  function dayOfYearFromWeekInfo(config) {
    var w,
        weekYear,
        week,
        weekday,
        dow,
        doy,
        temp,
        weekdayOverflow;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;
      weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
      week = defaults(w.w, 1);
      if (w.d != null) {
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }
  utils_hooks__hooks.ISO_8601 = function() {};
  function configFromStringAndFormat(config) {
    if (config._f === utils_hooks__hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;
    var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;
    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      }
      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token);
        }
        addTimeToArrayFromToken(token, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token);
      }
    }
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }
    if (getParsingFlags(config).bigHour === true && config._a[HOUR] <= 12 && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = undefined;
    }
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
    configFromArray(config);
    checkOverflow(config);
  }
  function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;
    if (meridiem == null) {
      return hour;
    }
    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      isPm = locale.isPM(meridiem);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      return hour;
    }
  }
  function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,
        scoreToBeat,
        i,
        currentScore;
    if (config._f.length === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }
    for (i = 0; i < config._f.length; i++) {
      currentScore = 0;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);
      if (!valid__isValid(tempConfig)) {
        continue;
      }
      currentScore += getParsingFlags(tempConfig).charsLeftOver;
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;
      if (scoreToBeat == null || currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }
    extend(config, bestMoment || tempConfig);
  }
  function configFromObject(config) {
    if (config._d) {
      return;
    }
    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function(obj) {
      return obj && parseInt(obj, 10);
    });
    configFromArray(config);
  }
  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      res.add(1, 'd');
      res._nextDay = undefined;
    }
    return res;
  }
  function prepareConfig(config) {
    var input = config._i,
        format = config._f;
    config._locale = config._locale || locale_locales__getLocale(config._l);
    if (input === null || (format === undefined && input === '')) {
      return valid__createInvalid({nullInput: true});
    }
    if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
    }
    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isArray(format)) {
      configFromStringAndArray(config);
    } else if (format) {
      configFromStringAndFormat(config);
    } else if (isDate(input)) {
      config._d = input;
    } else {
      configFromInput(config);
    }
    if (!valid__isValid(config)) {
      config._d = null;
    }
    return config;
  }
  function configFromInput(config) {
    var input = config._i;
    if (input === undefined) {
      config._d = new Date(utils_hooks__hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(+input);
    } else if (typeof input === 'string') {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function(obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (typeof(input) === 'object') {
      configFromObject(config);
    } else if (typeof(input) === 'number') {
      config._d = new Date(input);
    } else {
      utils_hooks__hooks.createFromInputFallback(config);
    }
  }
  function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};
    if (typeof(locale) === 'boolean') {
      strict = locale;
      locale = undefined;
    }
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;
    return createFromConfig(c);
  }
  function local__createLocal(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
  }
  var prototypeMin = deprecate('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548', function() {
    var other = local__createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other < this ? this : other;
    } else {
      return valid__createInvalid();
    }
  });
  var prototypeMax = deprecate('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548', function() {
    var other = local__createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other > this ? this : other;
    } else {
      return valid__createInvalid();
    }
  });
  function pickBy(fn, moments) {
    var res,
        i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return local__createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }
  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isBefore', args);
  }
  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isAfter', args);
  }
  var now = function() {
    return Date.now ? Date.now() : +(new Date());
  };
  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;
    this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 36e5;
    this._days = +days + weeks * 7;
    this._months = +months + quarters * 3 + years * 12;
    this._data = {};
    this._locale = locale_locales__getLocale();
    this._bubble();
  }
  function isDuration(obj) {
    return obj instanceof Duration;
  }
  function offset(token, separator) {
    addFormatToken(token, 0, 0, function() {
      var offset = this.utcOffset();
      var sign = '+';
      if (offset < 0) {
        offset = -offset;
        sign = '-';
      }
      return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
  }
  offset('Z', ':');
  offset('ZZ', '');
  addRegexToken('Z', matchShortOffset);
  addRegexToken('ZZ', matchShortOffset);
  addParseToken(['Z', 'ZZ'], function(input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });
  var chunkOffset = /([\+\-]|\d\d)/gi;
  function offsetFromString(matcher, string) {
    var matches = ((string || '').match(matcher) || []);
    var chunk = matches[matches.length - 1] || [];
    var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);
    return parts[0] === '+' ? minutes : -minutes;
  }
  function cloneWithOffset(input, model) {
    var res,
        diff;
    if (model._isUTC) {
      res = model.clone();
      diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
      res._d.setTime(+res._d + diff);
      utils_hooks__hooks.updateOffset(res, false);
      return res;
    } else {
      return local__createLocal(input).local();
    }
  }
  function getDateOffset(m) {
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
  }
  utils_hooks__hooks.updateOffset = function() {};
  function getSetOffset(input, keepLocalTime) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === 'string') {
        input = offsetFromString(matchShortOffset, input);
      } else if (Math.abs(input) < 16) {
        input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, 'm');
      }
      if (offset !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          utils_hooks__hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset : getDateOffset(this);
    }
  }
  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== 'string') {
        input = -input;
      }
      this.utcOffset(input, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }
  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }
  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;
      if (keepLocalTime) {
        this.subtract(getDateOffset(this), 'm');
      }
    }
    return this;
  }
  function setOffsetToParsedOffset() {
    if (this._tzm) {
      this.utcOffset(this._tzm);
    } else if (typeof this._i === 'string') {
      this.utcOffset(offsetFromString(matchOffset, this._i));
    }
    return this;
  }
  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? local__createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }
  function isDaylightSavingTime() {
    return (this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset());
  }
  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }
    var c = {};
    copyConfig(c, this);
    c = prepareConfig(c);
    if (c._a) {
      var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }
    return this._isDSTShifted;
  }
  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }
  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }
  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }
  var aspNetRegex = /(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;
  var isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
  function create__createDuration(input, key) {
    var duration = input,
        match = null,
        sign,
        ret,
        diffRes;
    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (typeof input === 'number') {
      duration = {};
      if (key) {
        duration[key] = input;
      } else {
        duration.milliseconds = input;
      }
    } else if (!!(match = aspNetRegex.exec(input))) {
      sign = (match[1] === '-') ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign,
        h: toInt(match[HOUR]) * sign,
        m: toInt(match[MINUTE]) * sign,
        s: toInt(match[SECOND]) * sign,
        ms: toInt(match[MILLISECOND]) * sign
      };
    } else if (!!(match = isoRegex.exec(input))) {
      sign = (match[1] === '-') ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign),
        M: parseIso(match[3], sign),
        d: parseIso(match[4], sign),
        h: parseIso(match[5], sign),
        m: parseIso(match[6], sign),
        s: parseIso(match[7], sign),
        w: parseIso(match[8], sign)
      };
    } else if (duration == null) {
      duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
      diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }
    ret = new Duration(duration);
    if (isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
    }
    return ret;
  }
  create__createDuration.fn = Duration.prototype;
  function parseIso(inp, sign) {
    var res = inp && parseFloat(inp.replace(',', '.'));
    return (isNaN(res) ? 0 : res) * sign;
  }
  function positiveMomentsDifference(base, other) {
    var res = {
      milliseconds: 0,
      months: 0
    };
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
    }
    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return {
        milliseconds: 0,
        months: 0
      };
    }
    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }
  function createAdder(direction, name) {
    return function(val, period) {
      var dur,
          tmp;
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
        tmp = val;
        val = period;
        period = tmp;
      }
      val = typeof val === 'string' ? +val : val;
      dur = create__createDuration(val, period);
      add_subtract__addSubtract(this, dur, direction);
      return this;
    };
  }
  function add_subtract__addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = duration._days,
        months = duration._months;
    if (!mom.isValid()) {
      return;
    }
    updateOffset = updateOffset == null ? true : updateOffset;
    if (milliseconds) {
      mom._d.setTime(+mom._d + milliseconds * isAdding);
    }
    if (days) {
      get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
    }
    if (months) {
      setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
      utils_hooks__hooks.updateOffset(mom, days || months);
    }
  }
  var add_subtract__add = createAdder(1, 'add');
  var add_subtract__subtract = createAdder(-1, 'subtract');
  function moment_calendar__calendar(time, formats) {
    var now = time || local__createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        diff = this.diff(sod, 'days', true),
        format = diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);
    return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
  }
  function clone() {
    return new Moment(this);
  }
  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : local__createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
      return +this > +localInput;
    } else {
      return +localInput < +this.clone().startOf(units);
    }
  }
  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : local__createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
      return +this < +localInput;
    } else {
      return +this.clone().endOf(units) < +localInput;
    }
  }
  function isBetween(from, to, units) {
    return this.isAfter(from, units) && this.isBefore(to, units);
  }
  function isSame(input, units) {
    var localInput = isMoment(input) ? input : local__createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
      return +this === +localInput;
    } else {
      inputMs = +localInput;
      return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
    }
  }
  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }
  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }
  function diff(input, units, asFloat) {
    var that,
        zoneDelta,
        delta,
        output;
    if (!this.isValid()) {
      return NaN;
    }
    that = cloneWithOffset(input, this);
    if (!that.isValid()) {
      return NaN;
    }
    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units = normalizeUnits(units);
    if (units === 'year' || units === 'month' || units === 'quarter') {
      output = monthDiff(this, that);
      if (units === 'quarter') {
        output = output / 3;
      } else if (units === 'year') {
        output = output / 12;
      }
    } else {
      delta = this - that;
      output = units === 'second' ? delta / 1e3 : units === 'minute' ? delta / 6e4 : units === 'hour' ? delta / 36e5 : units === 'day' ? (delta - zoneDelta) / 864e5 : units === 'week' ? (delta - zoneDelta) / 6048e5 : delta;
    }
    return asFloat ? output : absFloor(output);
  }
  function monthDiff(a, b) {
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2,
        adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
      adjust = (b - anchor) / (anchor2 - anchor);
    }
    return -(wholeMonthDiff + adjust);
  }
  utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  }
  function moment_format__toISOString() {
    var m = this.clone().utc();
    if (0 < m.year() && m.year() <= 9999) {
      if (isFunction(Date.prototype.toISOString)) {
        return this.toDate().toISOString();
      } else {
        return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
      }
    } else {
      return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
  }
  function format(inputString) {
    var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
    return this.localeData().postformat(output);
  }
  function from(time, withoutSuffix) {
    if (this.isValid() && ((isMoment(time) && time.isValid()) || local__createLocal(time).isValid())) {
      return create__createDuration({
        to: this,
        from: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function fromNow(withoutSuffix) {
    return this.from(local__createLocal(), withoutSuffix);
  }
  function to(time, withoutSuffix) {
    if (this.isValid() && ((isMoment(time) && time.isValid()) || local__createLocal(time).isValid())) {
      return create__createDuration({
        from: this,
        to: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function toNow(withoutSuffix) {
    return this.to(local__createLocal(), withoutSuffix);
  }
  function locale(key) {
    var newLocaleData;
    if (key === undefined) {
      return this._locale._abbr;
    } else {
      newLocaleData = locale_locales__getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }
  var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function(key) {
    if (key === undefined) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  });
  function localeData() {
    return this._locale;
  }
  function startOf(units) {
    units = normalizeUnits(units);
    switch (units) {
      case 'year':
        this.month(0);
      case 'quarter':
      case 'month':
        this.date(1);
      case 'week':
      case 'isoWeek':
      case 'day':
        this.hours(0);
      case 'hour':
        this.minutes(0);
      case 'minute':
        this.seconds(0);
      case 'second':
        this.milliseconds(0);
    }
    if (units === 'week') {
      this.weekday(0);
    }
    if (units === 'isoWeek') {
      this.isoWeekday(1);
    }
    if (units === 'quarter') {
      this.month(Math.floor(this.month() / 3) * 3);
    }
    return this;
  }
  function endOf(units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
      return this;
    }
    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
  }
  function to_type__valueOf() {
    return +this._d - ((this._offset || 0) * 60000);
  }
  function unix() {
    return Math.floor(+this / 1000);
  }
  function toDate() {
    return this._offset ? new Date(+this) : this._d;
  }
  function toArray() {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
  }
  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }
  function toJSON() {
    return this.isValid() ? this.toISOString() : 'null';
  }
  function moment_valid__isValid() {
    return valid__isValid(this);
  }
  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }
  function invalidAt() {
    return getParsingFlags(this).overflow;
  }
  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  addFormatToken(0, ['gg', 2], 0, function() {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ['GG', 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function addWeekYearFormatToken(token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
  }
  addWeekYearFormatToken('gggg', 'weekYear');
  addWeekYearFormatToken('ggggg', 'weekYear');
  addWeekYearFormatToken('GGGG', 'isoWeekYear');
  addWeekYearFormatToken('GGGGG', 'isoWeekYear');
  addUnitAlias('weekYear', 'gg');
  addUnitAlias('isoWeekYear', 'GG');
  addRegexToken('G', matchSigned);
  addRegexToken('g', matchSigned);
  addRegexToken('GG', match1to2, match2);
  addRegexToken('gg', match1to2, match2);
  addRegexToken('GGGG', match1to4, match4);
  addRegexToken('gggg', match1to4, match4);
  addRegexToken('GGGGG', match1to6, match6);
  addRegexToken('ggggg', match1to6, match6);
  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function(input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
  });
  addWeekParseToken(['gg', 'GG'], function(input, week, config, token) {
    week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
  });
  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }
  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }
  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }
  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week > weeksTarget) {
        week = weeksTarget;
      }
      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }
  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  }
  addFormatToken('Q', 0, 'Qo', 'quarter');
  addUnitAlias('quarter', 'Q');
  addRegexToken('Q', match1);
  addParseToken('Q', function(input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });
  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }
  addFormatToken('w', ['ww', 2], 'wo', 'week');
  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
  addUnitAlias('week', 'w');
  addUnitAlias('isoWeek', 'W');
  addRegexToken('w', match1to2);
  addRegexToken('ww', match1to2, match2);
  addRegexToken('W', match1to2);
  addRegexToken('WW', match1to2, match2);
  addWeekParseToken(['w', 'ww', 'W', 'WW'], function(input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
  });
  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }
  var defaultLocaleWeek = {
    dow: 0,
    doy: 6
  };
  function localeFirstDayOfWeek() {
    return this._week.dow;
  }
  function localeFirstDayOfYear() {
    return this._week.doy;
  }
  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
  }
  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
  }
  addFormatToken('D', ['DD', 2], 'Do', 'date');
  addUnitAlias('date', 'D');
  addRegexToken('D', match1to2);
  addRegexToken('DD', match1to2, match2);
  addRegexToken('Do', function(isStrict, locale) {
    return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
  });
  addParseToken(['D', 'DD'], DATE);
  addParseToken('Do', function(input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
  });
  var getSetDayOfMonth = makeGetSet('Date', true);
  addFormatToken('d', 0, 'do', 'day');
  addFormatToken('dd', 0, 0, function(format) {
    return this.localeData().weekdaysMin(this, format);
  });
  addFormatToken('ddd', 0, 0, function(format) {
    return this.localeData().weekdaysShort(this, format);
  });
  addFormatToken('dddd', 0, 0, function(format) {
    return this.localeData().weekdays(this, format);
  });
  addFormatToken('e', 0, 0, 'weekday');
  addFormatToken('E', 0, 0, 'isoWeekday');
  addUnitAlias('day', 'd');
  addUnitAlias('weekday', 'e');
  addUnitAlias('isoWeekday', 'E');
  addRegexToken('d', match1to2);
  addRegexToken('e', match1to2);
  addRegexToken('E', match1to2);
  addRegexToken('dd', matchWord);
  addRegexToken('ddd', matchWord);
  addRegexToken('dddd', matchWord);
  addWeekParseToken(['dd', 'ddd', 'dddd'], function(input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });
  addWeekParseToken(['d', 'e', 'E'], function(input, week, config, token) {
    week[token] = toInt(input);
  });
  function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
      return input;
    }
    if (!isNaN(input)) {
      return parseInt(input, 10);
    }
    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
      return input;
    }
    return null;
  }
  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
  function localeWeekdays(m, format) {
    return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
  }
  var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
  function localeWeekdaysShort(m) {
    return this._weekdaysShort[m.day()];
  }
  var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
  function localeWeekdaysMin(m) {
    return this._weekdaysMin[m.day()];
  }
  function localeWeekdaysParse(weekdayName, format, strict) {
    var i,
        mom,
        regex;
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    for (i = 0; i < 7; i++) {
      mom = local__createLocal([2000, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
        this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
        this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
      }
      if (!this._weekdaysParse[i]) {
        regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }
  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, 'd');
    } else {
      return day;
    }
  }
  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
  }
  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
  }
  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
  addUnitAlias('dayOfYear', 'DDD');
  addRegexToken('DDD', match1to3);
  addRegexToken('DDDD', match3);
  addParseToken(['DDD', 'DDDD'], function(input, array, config) {
    config._dayOfYear = toInt(input);
  });
  function getSetDayOfYear(input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
  }
  function hFormat() {
    return this.hours() % 12 || 12;
  }
  addFormatToken('H', ['HH', 2], 0, 'hour');
  addFormatToken('h', ['hh', 2], 0, hFormat);
  addFormatToken('hmm', 0, 0, function() {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken('hmmss', 0, 0, function() {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken('Hmm', 0, 0, function() {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken('Hmmss', 0, 0, function() {
    return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  function meridiem(token, lowercase) {
    addFormatToken(token, 0, 0, function() {
      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
  }
  meridiem('a', true);
  meridiem('A', false);
  addUnitAlias('hour', 'h');
  function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }
  addRegexToken('a', matchMeridiem);
  addRegexToken('A', matchMeridiem);
  addRegexToken('H', match1to2);
  addRegexToken('h', match1to2);
  addRegexToken('HH', match1to2, match2);
  addRegexToken('hh', match1to2, match2);
  addRegexToken('hmm', match3to4);
  addRegexToken('hmmss', match5to6);
  addRegexToken('Hmm', match3to4);
  addRegexToken('Hmmss', match5to6);
  addParseToken(['H', 'HH'], HOUR);
  addParseToken(['a', 'A'], function(input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(['h', 'hh'], function(input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmm', function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmmss', function(input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('Hmm', function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken('Hmmss', function(input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  });
  function localeIsPM(input) {
    return ((input + '').toLowerCase().charAt(0) === 'p');
  }
  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
  function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? 'pm' : 'PM';
    } else {
      return isLower ? 'am' : 'AM';
    }
  }
  var getSetHour = makeGetSet('Hours', true);
  addFormatToken('m', ['mm', 2], 0, 'minute');
  addUnitAlias('minute', 'm');
  addRegexToken('m', match1to2);
  addRegexToken('mm', match1to2, match2);
  addParseToken(['m', 'mm'], MINUTE);
  var getSetMinute = makeGetSet('Minutes', false);
  addFormatToken('s', ['ss', 2], 0, 'second');
  addUnitAlias('second', 's');
  addRegexToken('s', match1to2);
  addRegexToken('ss', match1to2, match2);
  addParseToken(['s', 'ss'], SECOND);
  var getSetSecond = makeGetSet('Seconds', false);
  addFormatToken('S', 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ['SS', 2], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  addFormatToken(0, ['SSSS', 4], 0, function() {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ['SSSSS', 5], 0, function() {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ['SSSSSS', 6], 0, function() {
    return this.millisecond() * 1000;
  });
  addFormatToken(0, ['SSSSSSS', 7], 0, function() {
    return this.millisecond() * 10000;
  });
  addFormatToken(0, ['SSSSSSSS', 8], 0, function() {
    return this.millisecond() * 100000;
  });
  addFormatToken(0, ['SSSSSSSSS', 9], 0, function() {
    return this.millisecond() * 1000000;
  });
  addUnitAlias('millisecond', 'ms');
  addRegexToken('S', match1to3, match1);
  addRegexToken('SS', match1to3, match2);
  addRegexToken('SSS', match1to3, match3);
  var token;
  for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
  }
  function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
  }
  for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
  }
  var getSetMillisecond = makeGetSet('Milliseconds', false);
  addFormatToken('z', 0, 0, 'zoneAbbr');
  addFormatToken('zz', 0, 0, 'zoneName');
  function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
  }
  function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
  }
  var momentPrototype__proto = Moment.prototype;
  momentPrototype__proto.add = add_subtract__add;
  momentPrototype__proto.calendar = moment_calendar__calendar;
  momentPrototype__proto.clone = clone;
  momentPrototype__proto.diff = diff;
  momentPrototype__proto.endOf = endOf;
  momentPrototype__proto.format = format;
  momentPrototype__proto.from = from;
  momentPrototype__proto.fromNow = fromNow;
  momentPrototype__proto.to = to;
  momentPrototype__proto.toNow = toNow;
  momentPrototype__proto.get = getSet;
  momentPrototype__proto.invalidAt = invalidAt;
  momentPrototype__proto.isAfter = isAfter;
  momentPrototype__proto.isBefore = isBefore;
  momentPrototype__proto.isBetween = isBetween;
  momentPrototype__proto.isSame = isSame;
  momentPrototype__proto.isSameOrAfter = isSameOrAfter;
  momentPrototype__proto.isSameOrBefore = isSameOrBefore;
  momentPrototype__proto.isValid = moment_valid__isValid;
  momentPrototype__proto.lang = lang;
  momentPrototype__proto.locale = locale;
  momentPrototype__proto.localeData = localeData;
  momentPrototype__proto.max = prototypeMax;
  momentPrototype__proto.min = prototypeMin;
  momentPrototype__proto.parsingFlags = parsingFlags;
  momentPrototype__proto.set = getSet;
  momentPrototype__proto.startOf = startOf;
  momentPrototype__proto.subtract = add_subtract__subtract;
  momentPrototype__proto.toArray = toArray;
  momentPrototype__proto.toObject = toObject;
  momentPrototype__proto.toDate = toDate;
  momentPrototype__proto.toISOString = moment_format__toISOString;
  momentPrototype__proto.toJSON = toJSON;
  momentPrototype__proto.toString = toString;
  momentPrototype__proto.unix = unix;
  momentPrototype__proto.valueOf = to_type__valueOf;
  momentPrototype__proto.creationData = creationData;
  momentPrototype__proto.year = getSetYear;
  momentPrototype__proto.isLeapYear = getIsLeapYear;
  momentPrototype__proto.weekYear = getSetWeekYear;
  momentPrototype__proto.isoWeekYear = getSetISOWeekYear;
  momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;
  momentPrototype__proto.month = getSetMonth;
  momentPrototype__proto.daysInMonth = getDaysInMonth;
  momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek;
  momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek;
  momentPrototype__proto.weeksInYear = getWeeksInYear;
  momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;
  momentPrototype__proto.date = getSetDayOfMonth;
  momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek;
  momentPrototype__proto.weekday = getSetLocaleDayOfWeek;
  momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
  momentPrototype__proto.dayOfYear = getSetDayOfYear;
  momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;
  momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;
  momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;
  momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;
  momentPrototype__proto.utcOffset = getSetOffset;
  momentPrototype__proto.utc = setOffsetToUTC;
  momentPrototype__proto.local = setOffsetToLocal;
  momentPrototype__proto.parseZone = setOffsetToParsedOffset;
  momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
  momentPrototype__proto.isDST = isDaylightSavingTime;
  momentPrototype__proto.isDSTShifted = isDaylightSavingTimeShifted;
  momentPrototype__proto.isLocal = isLocal;
  momentPrototype__proto.isUtcOffset = isUtcOffset;
  momentPrototype__proto.isUtc = isUtc;
  momentPrototype__proto.isUTC = isUtc;
  momentPrototype__proto.zoneAbbr = getZoneAbbr;
  momentPrototype__proto.zoneName = getZoneName;
  momentPrototype__proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
  momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
  momentPrototype__proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
  momentPrototype__proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);
  var momentPrototype = momentPrototype__proto;
  function moment__createUnix(input) {
    return local__createLocal(input * 1000);
  }
  function moment__createInZone() {
    return local__createLocal.apply(null, arguments).parseZone();
  }
  var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
  };
  function locale_calendar__calendar(key, mom, now) {
    var output = this._calendar[key];
    return isFunction(output) ? output.call(mom, now) : output;
  }
  var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
  };
  function longDateFormat(key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format || !formatUpper) {
      return format;
    }
    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function(val) {
      return val.slice(1);
    });
    return this._longDateFormat[key];
  }
  var defaultInvalidDate = 'Invalid date';
  function invalidDate() {
    return this._invalidDate;
  }
  var defaultOrdinal = '%d';
  var defaultOrdinalParse = /\d{1,2}/;
  function ordinal(number) {
    return this._ordinal.replace('%d', number);
  }
  function preParsePostFormat(string) {
    return string;
  }
  var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  };
  function relative__relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  }
  function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }
  function locale_set__set(config) {
    var prop,
        i;
    for (i in config) {
      prop = config[i];
      if (isFunction(prop)) {
        this[i] = prop;
      } else {
        this['_' + i] = prop;
      }
    }
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
  }
  var prototype__proto = Locale.prototype;
  prototype__proto._calendar = defaultCalendar;
  prototype__proto.calendar = locale_calendar__calendar;
  prototype__proto._longDateFormat = defaultLongDateFormat;
  prototype__proto.longDateFormat = longDateFormat;
  prototype__proto._invalidDate = defaultInvalidDate;
  prototype__proto.invalidDate = invalidDate;
  prototype__proto._ordinal = defaultOrdinal;
  prototype__proto.ordinal = ordinal;
  prototype__proto._ordinalParse = defaultOrdinalParse;
  prototype__proto.preparse = preParsePostFormat;
  prototype__proto.postformat = preParsePostFormat;
  prototype__proto._relativeTime = defaultRelativeTime;
  prototype__proto.relativeTime = relative__relativeTime;
  prototype__proto.pastFuture = pastFuture;
  prototype__proto.set = locale_set__set;
  prototype__proto.months = localeMonths;
  prototype__proto._months = defaultLocaleMonths;
  prototype__proto.monthsShort = localeMonthsShort;
  prototype__proto._monthsShort = defaultLocaleMonthsShort;
  prototype__proto.monthsParse = localeMonthsParse;
  prototype__proto._monthsRegex = defaultMonthsRegex;
  prototype__proto.monthsRegex = monthsRegex;
  prototype__proto._monthsShortRegex = defaultMonthsShortRegex;
  prototype__proto.monthsShortRegex = monthsShortRegex;
  prototype__proto.week = localeWeek;
  prototype__proto._week = defaultLocaleWeek;
  prototype__proto.firstDayOfYear = localeFirstDayOfYear;
  prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;
  prototype__proto.weekdays = localeWeekdays;
  prototype__proto._weekdays = defaultLocaleWeekdays;
  prototype__proto.weekdaysMin = localeWeekdaysMin;
  prototype__proto._weekdaysMin = defaultLocaleWeekdaysMin;
  prototype__proto.weekdaysShort = localeWeekdaysShort;
  prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
  prototype__proto.weekdaysParse = localeWeekdaysParse;
  prototype__proto.isPM = localeIsPM;
  prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
  prototype__proto.meridiem = localeMeridiem;
  function lists__get(format, index, field, setter) {
    var locale = locale_locales__getLocale();
    var utc = create_utc__createUTC().set(setter, index);
    return locale[field](utc, format);
  }
  function list(format, index, field, count, setter) {
    if (typeof format === 'number') {
      index = format;
      format = undefined;
    }
    format = format || '';
    if (index != null) {
      return lists__get(format, index, field, setter);
    }
    var i;
    var out = [];
    for (i = 0; i < count; i++) {
      out[i] = lists__get(format, i, field, setter);
    }
    return out;
  }
  function lists__listMonths(format, index) {
    return list(format, index, 'months', 12, 'month');
  }
  function lists__listMonthsShort(format, index) {
    return list(format, index, 'monthsShort', 12, 'month');
  }
  function lists__listWeekdays(format, index) {
    return list(format, index, 'weekdays', 7, 'day');
  }
  function lists__listWeekdaysShort(format, index) {
    return list(format, index, 'weekdaysShort', 7, 'day');
  }
  function lists__listWeekdaysMin(format, index) {
    return list(format, index, 'weekdaysMin', 7, 'day');
  }
  locale_locales__getSetGlobalLocale('en', {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(number) {
      var b = number % 10,
          output = (toInt(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
      return number + output;
    }
  });
  utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
  utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
  var mathAbs = Math.abs;
  function duration_abs__abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }
  function duration_add_subtract__addSubtract(duration, input, value, direction) {
    var other = create__createDuration(input, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  }
  function duration_add_subtract__add(input, value) {
    return duration_add_subtract__addSubtract(this, input, value, 1);
  }
  function duration_add_subtract__subtract(input, value) {
    return duration_add_subtract__addSubtract(this, input, value, -1);
  }
  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }
  function bubble() {
    var milliseconds = this._milliseconds;
    var days = this._days;
    var months = this._months;
    var data = this._data;
    var seconds,
        minutes,
        hours,
        years,
        monthsFromDays;
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) || (milliseconds <= 0 && days <= 0 && months <= 0))) {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
      days = 0;
      months = 0;
    }
    data.milliseconds = milliseconds % 1000;
    seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24);
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));
    years = absFloor(months / 12);
    months %= 12;
    data.days = days;
    data.months = months;
    data.years = years;
    return this;
  }
  function daysToMonths(days) {
    return days * 4800 / 146097;
  }
  function monthsToDays(months) {
    return months * 146097 / 4800;
  }
  function as(units) {
    var days;
    var months;
    var milliseconds = this._milliseconds;
    units = normalizeUnits(units);
    if (units === 'month' || units === 'year') {
      days = this._days + milliseconds / 864e5;
      months = this._months + daysToMonths(days);
      return units === 'month' ? months : months / 12;
    } else {
      days = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case 'week':
          return days / 7 + milliseconds / 6048e5;
        case 'day':
          return days + milliseconds / 864e5;
        case 'hour':
          return days * 24 + milliseconds / 36e5;
        case 'minute':
          return days * 1440 + milliseconds / 6e4;
        case 'second':
          return days * 86400 + milliseconds / 1000;
        case 'millisecond':
          return Math.floor(days * 864e5) + milliseconds;
        default:
          throw new Error('Unknown unit ' + units);
      }
    }
  }
  function duration_as__valueOf() {
    return (this._milliseconds + this._days * 864e5 + (this._months % 12) * 2592e6 + toInt(this._months / 12) * 31536e6);
  }
  function makeAs(alias) {
    return function() {
      return this.as(alias);
    };
  }
  var asMilliseconds = makeAs('ms');
  var asSeconds = makeAs('s');
  var asMinutes = makeAs('m');
  var asHours = makeAs('h');
  var asDays = makeAs('d');
  var asWeeks = makeAs('w');
  var asMonths = makeAs('M');
  var asYears = makeAs('y');
  function duration_get__get(units) {
    units = normalizeUnits(units);
    return this[units + 's']();
  }
  function makeGetter(name) {
    return function() {
      return this._data[name];
    };
  }
  var milliseconds = makeGetter('milliseconds');
  var seconds = makeGetter('seconds');
  var minutes = makeGetter('minutes');
  var hours = makeGetter('hours');
  var days = makeGetter('days');
  var months = makeGetter('months');
  var years = makeGetter('years');
  function weeks() {
    return absFloor(this.days() / 7);
  }
  var round = Math.round;
  var thresholds = {
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    M: 11
  };
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }
  function duration_humanize__relativeTime(posNegDuration, withoutSuffix, locale) {
    var duration = create__createDuration(posNegDuration).abs();
    var seconds = round(duration.as('s'));
    var minutes = round(duration.as('m'));
    var hours = round(duration.as('h'));
    var days = round(duration.as('d'));
    var months = round(duration.as('M'));
    var years = round(duration.as('y'));
    var a = seconds < thresholds.s && ['s', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
  }
  function duration_humanize__getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
      return false;
    }
    if (limit === undefined) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    return true;
  }
  function humanize(withSuffix) {
    var locale = this.localeData();
    var output = duration_humanize__relativeTime(this, !withSuffix, locale);
    if (withSuffix) {
      output = locale.pastFuture(+this, output);
    }
    return locale.postformat(output);
  }
  var iso_string__abs = Math.abs;
  function iso_string__toISOString() {
    var seconds = iso_string__abs(this._milliseconds) / 1000;
    var days = iso_string__abs(this._days);
    var months = iso_string__abs(this._months);
    var minutes,
        hours,
        years;
    minutes = absFloor(seconds / 60);
    hours = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;
    years = absFloor(months / 12);
    months %= 12;
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();
    if (!total) {
      return 'P0D';
    }
    return (total < 0 ? '-' : '') + 'P' + (Y ? Y + 'Y' : '') + (M ? M + 'M' : '') + (D ? D + 'D' : '') + ((h || m || s) ? 'T' : '') + (h ? h + 'H' : '') + (m ? m + 'M' : '') + (s ? s + 'S' : '');
  }
  var duration_prototype__proto = Duration.prototype;
  duration_prototype__proto.abs = duration_abs__abs;
  duration_prototype__proto.add = duration_add_subtract__add;
  duration_prototype__proto.subtract = duration_add_subtract__subtract;
  duration_prototype__proto.as = as;
  duration_prototype__proto.asMilliseconds = asMilliseconds;
  duration_prototype__proto.asSeconds = asSeconds;
  duration_prototype__proto.asMinutes = asMinutes;
  duration_prototype__proto.asHours = asHours;
  duration_prototype__proto.asDays = asDays;
  duration_prototype__proto.asWeeks = asWeeks;
  duration_prototype__proto.asMonths = asMonths;
  duration_prototype__proto.asYears = asYears;
  duration_prototype__proto.valueOf = duration_as__valueOf;
  duration_prototype__proto._bubble = bubble;
  duration_prototype__proto.get = duration_get__get;
  duration_prototype__proto.milliseconds = milliseconds;
  duration_prototype__proto.seconds = seconds;
  duration_prototype__proto.minutes = minutes;
  duration_prototype__proto.hours = hours;
  duration_prototype__proto.days = days;
  duration_prototype__proto.weeks = weeks;
  duration_prototype__proto.months = months;
  duration_prototype__proto.years = years;
  duration_prototype__proto.humanize = humanize;
  duration_prototype__proto.toISOString = iso_string__toISOString;
  duration_prototype__proto.toString = iso_string__toISOString;
  duration_prototype__proto.toJSON = iso_string__toISOString;
  duration_prototype__proto.locale = locale;
  duration_prototype__proto.localeData = localeData;
  duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
  duration_prototype__proto.lang = lang;
  addFormatToken('X', 0, 0, 'unix');
  addFormatToken('x', 0, 0, 'valueOf');
  addRegexToken('x', matchSigned);
  addRegexToken('X', matchTimestamp);
  addParseToken('X', function(input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
  });
  addParseToken('x', function(input, array, config) {
    config._d = new Date(toInt(input));
  });
  utils_hooks__hooks.version = '2.11.1';
  setHookCallback(local__createLocal);
  utils_hooks__hooks.fn = momentPrototype;
  utils_hooks__hooks.min = min;
  utils_hooks__hooks.max = max;
  utils_hooks__hooks.now = now;
  utils_hooks__hooks.utc = create_utc__createUTC;
  utils_hooks__hooks.unix = moment__createUnix;
  utils_hooks__hooks.months = lists__listMonths;
  utils_hooks__hooks.isDate = isDate;
  utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale;
  utils_hooks__hooks.invalid = valid__createInvalid;
  utils_hooks__hooks.duration = create__createDuration;
  utils_hooks__hooks.isMoment = isMoment;
  utils_hooks__hooks.weekdays = lists__listWeekdays;
  utils_hooks__hooks.parseZone = moment__createInZone;
  utils_hooks__hooks.localeData = locale_locales__getLocale;
  utils_hooks__hooks.isDuration = isDuration;
  utils_hooks__hooks.monthsShort = lists__listMonthsShort;
  utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin;
  utils_hooks__hooks.defineLocale = defineLocale;
  utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort;
  utils_hooks__hooks.normalizeUnits = normalizeUnits;
  utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
  utils_hooks__hooks.prototype = momentPrototype;
  var _moment = utils_hooks__hooks;
  return _moment;
}));

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("npm:moment@2.11.1", ["npm:moment@2.11.1/moment"], function(main) {
  return main;
});

_removeDefine();
})();
System.registerDynamic("npm:moment-timezone@0.5.4/builds/moment-timezone-with-data", ["npm:moment@2.11.1"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  (function(root, factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
      define(['moment'], factory);
    } else if (typeof module === 'object' && module.exports) {
      module.exports = factory($__require('npm:moment@2.11.1'));
    } else {
      factory(root.moment);
    }
  }(this, function(moment) {
    "use strict";
    if (moment.tz !== undefined) {
      logError('Moment Timezone ' + moment.tz.version + ' was already loaded ' + (moment.tz.dataVersion ? 'with data from ' : 'without any data') + moment.tz.dataVersion);
      return moment;
    }
    var VERSION = "0.5.4",
        zones = {},
        links = {},
        names = {},
        guesses = {},
        cachedGuess,
        momentVersion = moment.version.split('.'),
        major = +momentVersion[0],
        minor = +momentVersion[1];
    if (major < 2 || (major === 2 && minor < 6)) {
      logError('Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js ' + moment.version + '. See momentjs.com');
    }
    function charCodeToInt(charCode) {
      if (charCode > 96) {
        return charCode - 87;
      } else if (charCode > 64) {
        return charCode - 29;
      }
      return charCode - 48;
    }
    function unpackBase60(string) {
      var i = 0,
          parts = string.split('.'),
          whole = parts[0],
          fractional = parts[1] || '',
          multiplier = 1,
          num,
          out = 0,
          sign = 1;
      if (string.charCodeAt(0) === 45) {
        i = 1;
        sign = -1;
      }
      for (i; i < whole.length; i++) {
        num = charCodeToInt(whole.charCodeAt(i));
        out = 60 * out + num;
      }
      for (i = 0; i < fractional.length; i++) {
        multiplier = multiplier / 60;
        num = charCodeToInt(fractional.charCodeAt(i));
        out += num * multiplier;
      }
      return out * sign;
    }
    function arrayToInt(array) {
      for (var i = 0; i < array.length; i++) {
        array[i] = unpackBase60(array[i]);
      }
    }
    function intToUntil(array, length) {
      for (var i = 0; i < length; i++) {
        array[i] = Math.round((array[i - 1] || 0) + (array[i] * 60000));
      }
      array[length - 1] = Infinity;
    }
    function mapIndices(source, indices) {
      var out = [],
          i;
      for (i = 0; i < indices.length; i++) {
        out[i] = source[indices[i]];
      }
      return out;
    }
    function unpack(string) {
      var data = string.split('|'),
          offsets = data[2].split(' '),
          indices = data[3].split(''),
          untils = data[4].split(' ');
      arrayToInt(offsets);
      arrayToInt(indices);
      arrayToInt(untils);
      intToUntil(untils, indices.length);
      return {
        name: data[0],
        abbrs: mapIndices(data[1].split(' '), indices),
        offsets: mapIndices(offsets, indices),
        untils: untils,
        population: data[5] | 0
      };
    }
    function Zone(packedString) {
      if (packedString) {
        this._set(unpack(packedString));
      }
    }
    Zone.prototype = {
      _set: function(unpacked) {
        this.name = unpacked.name;
        this.abbrs = unpacked.abbrs;
        this.untils = unpacked.untils;
        this.offsets = unpacked.offsets;
        this.population = unpacked.population;
      },
      _index: function(timestamp) {
        var target = +timestamp,
            untils = this.untils,
            i;
        for (i = 0; i < untils.length; i++) {
          if (target < untils[i]) {
            return i;
          }
        }
      },
      parse: function(timestamp) {
        var target = +timestamp,
            offsets = this.offsets,
            untils = this.untils,
            max = untils.length - 1,
            offset,
            offsetNext,
            offsetPrev,
            i;
        for (i = 0; i < max; i++) {
          offset = offsets[i];
          offsetNext = offsets[i + 1];
          offsetPrev = offsets[i ? i - 1 : i];
          if (offset < offsetNext && tz.moveAmbiguousForward) {
            offset = offsetNext;
          } else if (offset > offsetPrev && tz.moveInvalidForward) {
            offset = offsetPrev;
          }
          if (target < untils[i] - (offset * 60000)) {
            return offsets[i];
          }
        }
        return offsets[max];
      },
      abbr: function(mom) {
        return this.abbrs[this._index(mom)];
      },
      offset: function(mom) {
        return this.offsets[this._index(mom)];
      }
    };
    function OffsetAt(at) {
      var timeString = at.toTimeString();
      var abbr = timeString.match(/\([a-z ]+\)/i);
      if (abbr && abbr[0]) {
        abbr = abbr[0].match(/[A-Z]/g);
        abbr = abbr ? abbr.join('') : undefined;
      } else {
        abbr = timeString.match(/[A-Z]{3,5}/g);
        abbr = abbr ? abbr[0] : undefined;
      }
      if (abbr === 'GMT') {
        abbr = undefined;
      }
      this.at = +at;
      this.abbr = abbr;
      this.offset = at.getTimezoneOffset();
    }
    function ZoneScore(zone) {
      this.zone = zone;
      this.offsetScore = 0;
      this.abbrScore = 0;
    }
    ZoneScore.prototype.scoreOffsetAt = function(offsetAt) {
      this.offsetScore += Math.abs(this.zone.offset(offsetAt.at) - offsetAt.offset);
      if (this.zone.abbr(offsetAt.at).replace(/[^A-Z]/g, '') !== offsetAt.abbr) {
        this.abbrScore++;
      }
    };
    function findChange(low, high) {
      var mid,
          diff;
      while ((diff = ((high.at - low.at) / 12e4 | 0) * 6e4)) {
        mid = new OffsetAt(new Date(low.at + diff));
        if (mid.offset === low.offset) {
          low = mid;
        } else {
          high = mid;
        }
      }
      return low;
    }
    function userOffsets() {
      var startYear = new Date().getFullYear() - 2,
          last = new OffsetAt(new Date(startYear, 0, 1)),
          offsets = [last],
          change,
          next,
          i;
      for (i = 1; i < 48; i++) {
        next = new OffsetAt(new Date(startYear, i, 1));
        if (next.offset !== last.offset) {
          change = findChange(last, next);
          offsets.push(change);
          offsets.push(new OffsetAt(new Date(change.at + 6e4)));
        }
        last = next;
      }
      for (i = 0; i < 4; i++) {
        offsets.push(new OffsetAt(new Date(startYear + i, 0, 1)));
        offsets.push(new OffsetAt(new Date(startYear + i, 6, 1)));
      }
      return offsets;
    }
    function sortZoneScores(a, b) {
      if (a.offsetScore !== b.offsetScore) {
        return a.offsetScore - b.offsetScore;
      }
      if (a.abbrScore !== b.abbrScore) {
        return a.abbrScore - b.abbrScore;
      }
      return b.zone.population - a.zone.population;
    }
    function addToGuesses(name, offsets) {
      var i,
          offset;
      arrayToInt(offsets);
      for (i = 0; i < offsets.length; i++) {
        offset = offsets[i];
        guesses[offset] = guesses[offset] || {};
        guesses[offset][name] = true;
      }
    }
    function guessesForUserOffsets(offsets) {
      var offsetsLength = offsets.length,
          filteredGuesses = {},
          out = [],
          i,
          j,
          guessesOffset;
      for (i = 0; i < offsetsLength; i++) {
        guessesOffset = guesses[offsets[i].offset] || {};
        for (j in guessesOffset) {
          if (guessesOffset.hasOwnProperty(j)) {
            filteredGuesses[j] = true;
          }
        }
      }
      for (i in filteredGuesses) {
        if (filteredGuesses.hasOwnProperty(i)) {
          out.push(names[i]);
        }
      }
      return out;
    }
    function rebuildGuess() {
      try {
        var intlName = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (intlName) {
          var name = names[normalizeName(intlName)];
          if (name) {
            return name;
          }
          logError("Moment Timezone found " + intlName + " from the Intl api, but did not have that data loaded.");
        }
      } catch (e) {}
      var offsets = userOffsets(),
          offsetsLength = offsets.length,
          guesses = guessesForUserOffsets(offsets),
          zoneScores = [],
          zoneScore,
          i,
          j;
      for (i = 0; i < guesses.length; i++) {
        zoneScore = new ZoneScore(getZone(guesses[i]), offsetsLength);
        for (j = 0; j < offsetsLength; j++) {
          zoneScore.scoreOffsetAt(offsets[j]);
        }
        zoneScores.push(zoneScore);
      }
      zoneScores.sort(sortZoneScores);
      return zoneScores.length > 0 ? zoneScores[0].zone.name : undefined;
    }
    function guess(ignoreCache) {
      if (!cachedGuess || ignoreCache) {
        cachedGuess = rebuildGuess();
      }
      return cachedGuess;
    }
    function normalizeName(name) {
      return (name || '').toLowerCase().replace(/\//g, '_');
    }
    function addZone(packed) {
      var i,
          name,
          split,
          normalized;
      if (typeof packed === "string") {
        packed = [packed];
      }
      for (i = 0; i < packed.length; i++) {
        split = packed[i].split('|');
        name = split[0];
        normalized = normalizeName(name);
        zones[normalized] = packed[i];
        names[normalized] = name;
        if (split[5]) {
          addToGuesses(normalized, split[2].split(' '));
        }
      }
    }
    function getZone(name, caller) {
      name = normalizeName(name);
      var zone = zones[name];
      var link;
      if (zone instanceof Zone) {
        return zone;
      }
      if (typeof zone === 'string') {
        zone = new Zone(zone);
        zones[name] = zone;
        return zone;
      }
      if (links[name] && caller !== getZone && (link = getZone(links[name], getZone))) {
        zone = zones[name] = new Zone();
        zone._set(link);
        zone.name = names[name];
        return zone;
      }
      return null;
    }
    function getNames() {
      var i,
          out = [];
      for (i in names) {
        if (names.hasOwnProperty(i) && (zones[i] || zones[links[i]]) && names[i]) {
          out.push(names[i]);
        }
      }
      return out.sort();
    }
    function addLink(aliases) {
      var i,
          alias,
          normal0,
          normal1;
      if (typeof aliases === "string") {
        aliases = [aliases];
      }
      for (i = 0; i < aliases.length; i++) {
        alias = aliases[i].split('|');
        normal0 = normalizeName(alias[0]);
        normal1 = normalizeName(alias[1]);
        links[normal0] = normal1;
        names[normal0] = alias[0];
        links[normal1] = normal0;
        names[normal1] = alias[1];
      }
    }
    function loadData(data) {
      addZone(data.zones);
      addLink(data.links);
      tz.dataVersion = data.version;
    }
    function zoneExists(name) {
      if (!zoneExists.didShowError) {
        zoneExists.didShowError = true;
        logError("moment.tz.zoneExists('" + name + "') has been deprecated in favor of !moment.tz.zone('" + name + "')");
      }
      return !!getZone(name);
    }
    function needsOffset(m) {
      return !!(m._a && (m._tzm === undefined));
    }
    function logError(message) {
      if (typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error(message);
      }
    }
    function tz(input) {
      var args = Array.prototype.slice.call(arguments, 0, -1),
          name = arguments[arguments.length - 1],
          zone = getZone(name),
          out = moment.utc.apply(null, args);
      if (zone && !moment.isMoment(input) && needsOffset(out)) {
        out.add(zone.parse(out), 'minutes');
      }
      out.tz(name);
      return out;
    }
    tz.version = VERSION;
    tz.dataVersion = '';
    tz._zones = zones;
    tz._links = links;
    tz._names = names;
    tz.add = addZone;
    tz.link = addLink;
    tz.load = loadData;
    tz.zone = getZone;
    tz.zoneExists = zoneExists;
    tz.guess = guess;
    tz.names = getNames;
    tz.Zone = Zone;
    tz.unpack = unpack;
    tz.unpackBase60 = unpackBase60;
    tz.needsOffset = needsOffset;
    tz.moveInvalidForward = true;
    tz.moveAmbiguousForward = false;
    var fn = moment.fn;
    moment.tz = tz;
    moment.defaultZone = null;
    moment.updateOffset = function(mom, keepTime) {
      var zone = moment.defaultZone,
          offset;
      if (mom._z === undefined) {
        if (zone && needsOffset(mom) && !mom._isUTC) {
          mom._d = moment.utc(mom._a)._d;
          mom.utc().add(zone.parse(mom), 'minutes');
        }
        mom._z = zone;
      }
      if (mom._z) {
        offset = mom._z.offset(mom);
        if (Math.abs(offset) < 16) {
          offset = offset / 60;
        }
        if (mom.utcOffset !== undefined) {
          mom.utcOffset(-offset, keepTime);
        } else {
          mom.zone(offset, keepTime);
        }
      }
    };
    fn.tz = function(name) {
      if (name) {
        this._z = getZone(name);
        if (this._z) {
          moment.updateOffset(this);
        } else {
          logError("Moment Timezone has no data for " + name + ". See http://momentjs.com/timezone/docs/#/data-loading/.");
        }
        return this;
      }
      if (this._z) {
        return this._z.name;
      }
    };
    function abbrWrap(old) {
      return function() {
        if (this._z) {
          return this._z.abbr(this);
        }
        return old.call(this);
      };
    }
    function resetZoneWrap(old) {
      return function() {
        this._z = null;
        return old.apply(this, arguments);
      };
    }
    fn.zoneName = abbrWrap(fn.zoneName);
    fn.zoneAbbr = abbrWrap(fn.zoneAbbr);
    fn.utc = resetZoneWrap(fn.utc);
    moment.tz.setDefault = function(name) {
      if (major < 2 || (major === 2 && minor < 9)) {
        logError('Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js ' + moment.version + '.');
      }
      moment.defaultZone = name ? getZone(name) : null;
      return moment;
    };
    var momentProperties = moment.momentProperties;
    if (Object.prototype.toString.call(momentProperties) === '[object Array]') {
      momentProperties.push('_z');
      momentProperties.push('_a');
    } else if (momentProperties) {
      momentProperties._z = null;
    }
    loadData({
      "version": "2016d",
      "zones": ["Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5", "Africa/Accra|LMT GMT GHST|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5", "Africa/Nairobi|LMT EAT BEAT BEAUT|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5", "Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5", "Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6", "Africa/Bissau|LMT WAT GMT|12.k 10 0|012|-2ldWV.E 2xonV.E|39e4", "Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5", "Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6", "Africa/Casablanca|LMT WET WEST CET|u.k 0 -10 -10|0121212121212121213121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|32e5", "Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18o0 3I00 17c0 1fA0 1a00 1io0 1a00 1y7p0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3", "Africa/El_Aaiun|LMT WAT WET WEST|Q.M 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|20e4", "Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5", "Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|01212121212121212121212121212121213|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0|51e5", "Africa/Monrovia|MMT LRT GMT|H.8 I.u 0|012|-23Lzg.Q 29s01.m|11e5", "Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5", "Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5", "Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5", "Africa/Windhoek|SWAT SAST SAST CAT WAT WAST|-1u -20 -30 -20 -10 -20|012134545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2GJdu 1Ajdu 1cL0 1SqL0 9NA0 11D0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0|32e4", "America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326", "America/Anchorage|CAT CAWT CAPT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4", "America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3", "America/Araguaina|LMT BRT BRST|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4", "America/Argentina/Buenos_Aires|CMT ART ARST ART ARST|4g.M 40 30 30 20|0121212121212121212121212121212121212121213434343434343234343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 j3c0 uL0 1qN0 WL0", "America/Argentina/Catamarca|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343454343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0", "America/Argentina/Cordoba|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343454343234343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 j3c0 uL0 1qN0 WL0", "America/Argentina/Jujuy|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|01212121212121212121212121212121212121212134343456543432343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 g0p0 10M0 j3c0 uL0", "America/Argentina/La_Rioja|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434534343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0", "America/Argentina/Mendoza|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|0121212121212121212121212121212121212121213434345656543235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 g0p0 10M0 agM0 Op0 7TX0 uL0", "America/Argentina/Rio_Gallegos|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343434343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0", "America/Argentina/Salta|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434543432343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 j3c0 uL0", "America/Argentina/San_Juan|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434534343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 g0p0 10M0 ak00 m10 8lb0 uL0", "America/Argentina/San_Luis|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|01212121212121212121212121212121212121212134343456536353465653|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 kin0 10M0 ak00 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0", "America/Argentina/Tucuman|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|012121212121212121212121212121212121212121343434345434323534343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 ako0 4N0 8BX0 uL0 1qN0 WL0", "America/Argentina/Ushuaia|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343434343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 ajA0 8p0 8zb0 uL0", "America/Curacao|LMT ANT AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4", "America/Asuncion|AMT PYT PYT PYST|3O.E 40 30 30|012131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5", "America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2", "America/Bahia|LMT BRT BRST|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5", "America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3", "America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4", "America/Belem|LMT BRT BRST|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5", "America/Belize|LMT CST CHDT CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3", "America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2", "America/Boa_Vista|LMT AMT AMST|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2", "America/Bogota|BMT COT COST|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5", "America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4", "America/Cambridge_Bay|zzz MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2", "America/Campo_Grande|LMT AMT AMST|3C.s 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|77e4", "America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4", "America/Caracas|CMT VET VET|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5", "America/Cayenne|LMT GFT GFT|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3", "America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5", "America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5", "America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4", "America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5", "America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2", "America/Cuiaba|LMT AMT AMST|3I.k 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|54e4", "America/Danmarkshavn|LMT WGT WGST GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8", "America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|13e2", "America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3", "America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5", "America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|01234252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 Jy10 SL0 dnB0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5", "America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|01212121212121341212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 LFB0 1cL0 3Cp0 1cL0 66N0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5", "America/Eirunepe|LMT ACT ACST AMT|4D.s 50 40 40|0121212121212121212121212121212131|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3", "America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5", "America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOP0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5", "America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2", "America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Fortaleza|LMT BRT BRST|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5", "America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3", "America/Godthab|LMT WGT WGST|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3", "America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2", "America/Grand_Turk|KMT EST EDT AST|57.b 50 40 40|0121212121212121212121212121212121212121212121212121212121212121212121212123|-2l1uQ.N 2HHBQ.N 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2", "America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5", "America/Guayaquil|QMT ECT|5e 50|01|-1yVSK|27e5", "America/Guyana|LMT GBGT GYT GYT GYT|3Q.E 3J 3J 30 40|01234|-2dvU7.k 24JzQ.k mlc0 Bxbf|80e4", "America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4", "America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5", "America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4", "America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Inuvik|zzz PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2", "America/Iqaluit|zzz EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2", "America/Jamaica|KMT EST EDT|57.b 50 40|0121212121212121212121|-2l1uQ.N 2uM1Q.N 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4", "America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3", "America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 Bb0 10N0 2bB0 8in0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/La_Paz|CMT BOST BOT|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5", "America/Lima|LMT PET PEST|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6", "America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp0 1Vb0 3dB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6", "America/Maceio|LMT BRT BRST|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4", "America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5", "America/Manaus|LMT AMT AMST|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5", "America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4", "America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4", "America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4", "America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2", "America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5", "America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|0120303030303030303030303030303030454545454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2", "America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6", "America/Miquelon|LMT AST PMST PMDT|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2", "America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3", "America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5", "America/Montevideo|MMT UYT UYHST UYST UYT UYHST|3I.I 3u 30 20 30 2u|012121212121212121212121213434343434345454543453434343434343434343434343434343434343434|-20UIf.g 8jzJ.g 1cLu 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1qMu WLu 1qMu 11zu 1o0u 11zu NAu 11bu 2iMu zWu Dq10 19X0 pd0 jz0 cm10 19X0 1fB0 1on0 11d0 1oL0 1nB0 1fzu 1aou 1fzu 1aou 1fzu 3nAu Jb0 3MN0 1SLu 4jzu 2PB0 Lb0 3Dd0 1pb0 ixd0 An0 1MN0 An0 1wp0 On0 1wp0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5", "America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5", "America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4", "America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6", "America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2", "America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2", "America/Noronha|LMT FNT FNST|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2", "America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3", "America/Pangnirtung|zzz AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2", "America/Paramaribo|LMT PMT PMT NEGT SRT SRT|3E.E 3E.Q 3E.A 3u 3u 30|012345|-2nDUj.k Wqo0.c qanX.I 1dmLN.o lzc0|24e4", "America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5", "America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5", "America/Rio_Branco|LMT ACT ACST AMT|4v.c 50 40 40|01212121212121212121212121212131|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4", "America/Porto_Velho|LMT AMT AMST|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4", "America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5", "America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842", "America/Rankin_Inlet|zzz CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2", "America/Recife|LMT BRT BRST|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5", "America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4", "America/Resolute|zzz CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229", "America/Santarem|LMT AMT AMST BRT|3C.M 40 30 30|0121212121212121212121212121213|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4", "America/Santiago|SMT CLT CLT CLST CLST|4G.K 50 40 40 30|010203131313131212421242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5", "America/Santo_Domingo|SDMT EST EDT EHDT AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5", "America/Sao_Paulo|LMT BRT BRST|36.s 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|20e6", "America/Scoresbysund|LMT CGT CGST EGST EGT|1r.Q 20 10 0 10|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452", "America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2", "America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4", "America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3", "America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5", "America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656", "America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4", "America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5", "America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3", "America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4", "America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642", "America/Yellowknife|zzz MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3", "Antarctica/Casey|zzz AWST CAST|0 -80 -b0|012121|-2q00 1DjS0 T90 40P0 KL0|10", "Antarctica/Davis|zzz DAVT DAVT|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70", "Antarctica/DumontDUrville|zzz PMT DDUT|0 -a0 -a0|0102|-U0o0 cfq0 bFm0|80", "Antarctica/Macquarie|AEST AEDT zzz MIST|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1", "Antarctica/Mawson|zzz MAWT MAWT|0 -60 -50|012|-CEo0 2fyk0|60", "Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5", "Antarctica/Palmer|zzz ARST ART ART ARST CLT CLST|0 30 40 30 20 40 30|0121212121234356565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|40", "Antarctica/Rothera|zzz ROTT|0 30|01|gOo0|130", "Antarctica/Syowa|zzz SYOT|0 -30|01|-vs00|20", "Antarctica/Troll|zzz UTC CEST|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40", "Antarctica/Vostok|zzz VOST|0 -60|01|-tjA0|25", "Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4", "Asia/Riyadh|LMT AST|-36.Q -30|01|-TvD6.Q|57e5", "Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5", "Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5", "Asia/Anadyr|LMT ANAT ANAT ANAST ANAST ANAST ANAT|-bN.U -c0 -d0 -e0 -d0 -c0 -b0|01232414141414141414141561414141414141414141414141414141414141561|-1PcbN.U eUnN.U 23CL0 1db0 1cN0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0|13e3", "Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4", "Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4", "Asia/Ashgabat|LMT ASHT ASHT ASHST ASHST TMT TMT|-3R.w -40 -50 -60 -50 -40 -50|012323232323232323232324156|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 ba0 xC0|41e4", "Asia/Baghdad|BMT AST ADT|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5", "Asia/Qatar|LMT GST AST|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4", "Asia/Baku|LMT BAKT BAKT BAKST BAKST AZST AZT AZT AZST|-3j.o -30 -40 -50 -40 -40 -30 -40 -50|01232323232323232323232456578787878787878787878787878787878787878787|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 10K0 c30 1cM0 1cI0 8wu0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5", "Asia/Bangkok|BMT ICT|-6G.4 -70|01|-218SG.4|15e6", "Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0", "Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5", "Asia/Bishkek|LMT FRUT FRUT FRUST FRUST KGT KGST KGT|-4W.o -50 -60 -70 -60 -50 -60 -60|01232323232323232323232456565656565656565656565656567|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 11c0 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 T8u|87e4", "Asia/Brunei|LMT BNT BNT|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4", "Asia/Kolkata|HMT BURT IST IST|-5R.k -6u -5u -6u|01232|-18LFR.k 1unn.k HB0 7zX0|15e6", "Asia/Chita|LMT YAKT YAKT YAKST YAKST YAKT IRKT|-7x.Q -80 -90 -a0 -90 -a0 -80|0123232323232323232323241232323232323232323232323232323232323232562|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4", "Asia/Choibalsan|LMT ULAT ULAT CHOST CHOT CHOT CHOST|-7C -70 -80 -a0 -90 -80 -90|0123434343434343434343434343434343434343434343456565656565656565656565656565656565656565656565|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|38e3", "Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6", "Asia/Colombo|MMT IST IHST IST LKT LKT|-5j.w -5u -60 -6u -6u -60|01231451|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5", "Asia/Dhaka|HMT BURT IST DACT BDT BDST|-5R.k -6u -5u -60 -60 -70|01213454|-18LFR.k 1unn.k HB0 m6n0 LqMu 1x6n0 1i00|16e6", "Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5", "Asia/Dili|LMT TLT JST TLT WITA|-8m.k -80 -90 -90 -80|012343|-2le8m.k 1dnXm.k 8HA0 1ew00 Xld0|19e4", "Asia/Dubai|LMT GST|-3F.c -40|01|-21JfF.c|39e5", "Asia/Dushanbe|LMT DUST DUST DUSST DUSST TJT|-4z.c -50 -60 -70 -60 -50|0123232323232323232323245|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 14N0|76e4", "Asia/Gaza|EET EET EEST IST IDT|-20 -30 -30 -20 -30|010101010102020202020202020202023434343434343434343434343430202020202020202020202020202020202020202020202020202020202020202020202020202020202020|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1ny0 1220 1qm0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1qm0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1qm0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1qm0 1220 1ny0 1220 1ny0 1220 1ny0|18e5", "Asia/Hebron|EET EET EEST IST IDT|-20 -30 -30 -20 -30|01010101010202020202020202020202343434343434343434343434343020202020202020202020202020202020202020202020202020202020202020202020202020202020202020|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1ny0 1220 1qm0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1qm0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1qm0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1ny0 1220 1qm0 1220 1ny0 1220 1ny0 1220 1ny0|25e4", "Asia/Ho_Chi_Minh|LMT PLMT ICT IDT JST|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5", "Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5", "Asia/Hovd|LMT HOVT HOVT HOVST|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|81e3", "Asia/Irkutsk|IMT IRKT IRKT IRKST IRKST IRKT|-6V.5 -70 -80 -90 -80 -90|012323232323232323232324123232323232323232323232323232323232323252|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4", "Europe/Istanbul|IMT EET EEST TRST TRT|-1U.U -20 -30 -40 -30|012121212121212121212121212121212121212121212121212121234343434342121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSp0 CL0 mN0 1Vz0 1gN0 1pz0 5Rd0 1fz0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1jB0 18L0 1ip0 17z0 qdd0 xX0 3S10 Tz0 dA10 11z0 1o10 11z0 1qN0 11z0 1ze0 11B0 WM0 1qO0 WI0 1nX0 1rB0 10L0 11B0 1in0 17d0 1in0 2pX0 19E0 1fU0 16Q0 1iI0 16Q0 1iI0 1Vd0 pb0 3Kp0 14o0 1df0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e6", "Asia/Jakarta|BMT JAVT WIB JST WIB WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6", "Asia/Jayapura|LMT WIT ACST|-9m.M -90 -9u|0121|-1uu9m.M sMMm.M L4nu|26e4", "Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4", "Asia/Kabul|AFT AFT|-40 -4u|01|-10Qs0|46e5", "Asia/Kamchatka|LMT PETT PETT PETST PETST|-ay.A -b0 -c0 -d0 -c0|01232323232323232323232412323232323232323232323232323232323232412|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0|18e4", "Asia/Karachi|LMT IST IST KART PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6", "Asia/Urumqi|LMT XJT|-5O.k -60|01|-1GgtO.k|32e5", "Asia/Kathmandu|LMT IST NPT|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5", "Asia/Khandyga|LMT YAKT YAKT YAKST YAKST VLAT VLAST VLAT YAKT|-92.d -80 -90 -a0 -90 -a0 -b0 -b0 -a0|01232323232323232323232412323232323232323232323232565656565656565782|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2", "Asia/Krasnoyarsk|LMT KRAT KRAT KRAST KRAST KRAT|-6b.q -60 -70 -80 -70 -80|012323232323232323232324123232323232323232323232323232323232323252|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5", "Asia/Kuala_Lumpur|SMT MALT MALST MALT MALT JST MYT|-6T.p -70 -7k -7k -7u -90 -80|01234546|-2Bg6T.p 17anT.p 7hXE dM00 17bO 8Fyu 1so1u|71e5", "Asia/Kuching|LMT BORT BORT BORTST JST MYT|-7l.k -7u -80 -8k -90 -80|01232323232323232425|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0 1so10|13e4", "Asia/Macau|LMT MOT MOST CST|-7y.k -80 -90 -80|0121212121212121212121212121212121212121213|-2le7y.k 1XO34.k 1wn0 Rd0 1wn0 R9u 1wqu U10 1tz0 TVu 1tz0 17gu 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cOu 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cL0 KEp0|57e4", "Asia/Magadan|LMT MAGT MAGT MAGST MAGST MAGT|-a3.c -a0 -b0 -c0 -b0 -c0|0123232323232323232323241232323232323232323232323232323232323232512|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3", "Asia/Makassar|LMT MMT WITA JST|-7V.A -7V.A -80 -90|01232|-21JjV.A vfc0 myLV.A 8ML0|15e5", "Asia/Manila|PHT PHST JST|-80 -90 -90|010201010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6", "Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4", "Asia/Novokuznetsk|LMT KRAT KRAT KRAST KRAST NOVST NOVT NOVT|-5M.M -60 -70 -80 -70 -70 -60 -70|012323232323232323232324123232323232323232323232323232323232325672|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0 8Hz0|55e4", "Asia/Novosibirsk|LMT NOVT NOVT NOVST NOVST|-5v.E -60 -70 -80 -70|0123232323232323232323241232341414141414141414141414141414141414121|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|15e5", "Asia/Omsk|LMT OMST OMST OMSST OMSST OMST|-4R.u -50 -60 -70 -60 -70|012323232323232323232324123232323232323232323232323232323232323252|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5", "Asia/Oral|LMT +04 +05 +06|-3p.o -40 -50 -60|01232323232323232121212121212121212121212121212|-1Pc3p.o eUnp.o 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4", "Asia/Pontianak|LMT PMT WIB JST WIB WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4", "Asia/Pyongyang|LMT KST JCST JST KST|-8n -8u -90 -90 -90|012341|-2um8n 97XR 12FXu jdA0 2Onc0|29e5", "Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|0123232323232323232323232323232323232323232323|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|73e4", "Asia/Rangoon|RMT BURT JST MMT|-6o.E -6u -90 -6u|0123|-21Jio.E SmnS.E 7j9u|48e5", "Asia/Sakhalin|LMT JCST JST SAKT SAKST SAKST SAKT|-9u.M -90 -90 -b0 -c0 -b0 -a0|01234343434343434343434356343434343435656565656565656565656565656363|-2AGVu.M 1iaMu.M je00 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o10 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4", "Asia/Samarkand|LMT SAMT SAMT SAMST TAST UZST UZT|-4r.R -40 -50 -60 -60 -60 -50|01234323232323232323232356|-1Pc4r.R eUor.R 23CL0 1db0 1cM0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 11x0 bf0|36e4", "Asia/Seoul|LMT KST JCST JST KST KDT KDT|-8r.Q -8u -90 -90 -90 -9u -a0|01234151515151515146464|-2um8r.Q 97XV.Q 12FXu jjA0 kKo0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6", "Asia/Singapore|SMT MALT MALST MALT MALT JST SGT SGT|-6T.p -70 -7k -7k -7u -90 -7u -80|012345467|-2Bg6T.p 17anT.p 7hXE dM00 17bO 8Fyu Mspu DTA0|56e5", "Asia/Srednekolymsk|LMT MAGT MAGT MAGST MAGST MAGT SRET|-ae.Q -a0 -b0 -c0 -b0 -c0 -b0|012323232323232323232324123232323232323232323232323232323232323256|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2", "Asia/Taipei|JWST JST CST CDT|-80 -90 -80 -90|01232323232323232323232323232323232323232|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5", "Asia/Tashkent|LMT TAST TAST TASST TASST UZST UZT|-4B.b -50 -60 -70 -60 -60 -50|01232323232323232323232456|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 11y0 bf0|23e5", "Asia/Tbilisi|TBMT TBIT TBIT TBIST TBIST GEST GET GET GEST|-2X.b -30 -40 -50 -40 -40 -30 -40 -50|0123232323232323232323245656565787878787878787878567|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 3y0 19f0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cM0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5", "Asia/Tehran|LMT TMT IRST IRST IRDT IRDT|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6", "Asia/Thimphu|LMT IST BTT|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3", "Asia/Tokyo|JCST JST JDT|-90 -90 -a0|0121212121|-1iw90 pKq0 QL0 1lB0 13X0 1zB0 NX0 1zB0 NX0|38e6", "Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5", "Asia/Ulaanbaatar|LMT ULAT ULAT ULAST|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|12e5", "Asia/Ust-Nera|LMT YAKT YAKT MAGST MAGT MAGST MAGT MAGT VLAT VLAT|-9w.S -80 -90 -c0 -b0 -b0 -a0 -c0 -b0 -a0|0123434343434343434343456434343434343434343434343434343434343434789|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2", "Asia/Vladivostok|LMT VLAT VLAT VLAST VLAST VLAT|-8L.v -90 -a0 -b0 -a0 -b0|012323232323232323232324123232323232323232323232323232323232323252|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4", "Asia/Yakutsk|LMT YAKT YAKT YAKST YAKST YAKT|-8C.W -80 -90 -a0 -90 -a0|012323232323232323232324123232323232323232323232323232323232323252|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4", "Asia/Yekaterinburg|LMT PMT SVET SVET SVEST SVEST YEKT YEKST YEKT|-42.x -3J.5 -40 -50 -60 -50 -50 -60 -60|0123434343434343434343435267676767676767676767676767676767676767686|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5", "Asia/Yerevan|LMT YERT YERT YERST YERST AMST AMT AMT AMST|-2W -30 -40 -50 -40 -40 -30 -40 -50|0123232323232323232323245656565657878787878787878787878787878787|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1am0 2r0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fb0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5", "Atlantic/Azores|HMT AZOT AZOST AZOMT AZOT AZOST WET|1S.w 20 10 0 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545456545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldW5.s aPX5.s Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4", "Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3", "Atlantic/Canary|LMT CANT WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Atlantic/Cape_Verde|LMT CVT CVST CVT|1y.4 20 10 10|01213|-2xomp.U 1qOMp.U 7zX0 1djf0|50e4", "Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3", "Atlantic/Madeira|FMT MADT MADST MADMT WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldWQ.o aPWQ.o Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4", "Atlantic/Reykjavik|LMT IST ISST GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4", "Atlantic/South_Georgia|GST|20|0||30", "Atlantic/Stanley|SMT FKT FKST FKT FKST|3P.o 40 30 30 20|0121212121212134343212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 U10 1qM0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2", "Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5", "Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5", "Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5", "Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3", "Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746", "Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4", "Australia/Eucla|ACWST ACWDT|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368", "Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4", "Australia/Lord_Howe|AEST LHST LHDT LHDT|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347", "Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10", "Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5", "Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5", "CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Pacific/Easter|EMT EAST EASST EAST EASST|7h.s 70 60 60 50|0121212121212121212121212121234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|30e2", "EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "EST|EST|50|0|", "EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g5X0 14p0 1wn0 17d0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Etc/GMT+0|GMT|0|0|", "Etc/GMT+1|GMT+1|10|0|", "Etc/GMT+10|GMT+10|a0|0|", "Etc/GMT+11|GMT+11|b0|0|", "Etc/GMT+12|GMT+12|c0|0|", "Etc/GMT+2|GMT+2|20|0|", "Etc/GMT+3|GMT+3|30|0|", "Etc/GMT+4|GMT+4|40|0|", "Etc/GMT+5|GMT+5|50|0|", "Etc/GMT+6|GMT+6|60|0|", "Etc/GMT+7|GMT+7|70|0|", "Etc/GMT+8|GMT+8|80|0|", "Etc/GMT+9|GMT+9|90|0|", "Etc/GMT-1|GMT-1|-10|0|", "Etc/GMT-10|GMT-10|-a0|0|", "Etc/GMT-11|GMT-11|-b0|0|", "Etc/GMT-12|GMT-12|-c0|0|", "Etc/GMT-13|GMT-13|-d0|0|", "Etc/GMT-14|GMT-14|-e0|0|", "Etc/GMT-2|GMT-2|-20|0|", "Etc/GMT-3|GMT-3|-30|0|", "Etc/GMT-4|GMT-4|-40|0|", "Etc/GMT-5|GMT-5|-50|0|", "Etc/GMT-6|GMT-6|-60|0|", "Etc/GMT-7|GMT-7|-70|0|", "Etc/GMT-8|GMT-8|-80|0|", "Etc/GMT-9|GMT-9|-90|0|", "Etc/UCT|UCT|0|0|", "Etc/UTC|UTC|0|0|", "Europe/Amsterdam|AMT NST NEST NET CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5", "Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3", "Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0", "Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5", "Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6", "Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5", "Europe/Prague|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 16M0 1lc0 1tA0 17A0 11c0 1io0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5", "Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5", "Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5", "Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5", "Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4", "Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4", "Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3", "Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Kaliningrad|CET CEST CET CEST MSK MSD EEST EET FET|-10 -20 -20 -30 -30 -40 -30 -20 -30|0101010101010232454545454545454546767676767676767676767676767676767676767676787|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 Am0 Lb0 1en0 op0 1pNz0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4", "Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5", "Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WNi.M qHai.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4", "Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ldXn.f aPWn.f Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5", "Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|01010101010101010101010121212121234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-28dd0 11A0 1go0 19A0 1co0 1dA0 b1A0 18o0 3I00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 iyo0 Rc0 18o0 1hc0 1io0 1a00 14o0 5aL0 MM0 1vc0 17A0 1i00 1bc0 1eo0 17d0 1in0 17A0 6hA0 10N0 XIL0 1a10 1in0 17d0 19X0 1cN0 1fz0 1a10 1fX0 1cp0 1cO0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5", "Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2as10 M00 1cM0 1cM0 14o0 1o00 WM0 1qM0 17c0 1cM0 M3A0 5M20 WM0 1fA0 1cM0 1cM0 1cM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 Lz0 1C10 Lz0 1EN0 Lz0 1C10 Lz0 1zd0 Oo0 1C00 On0 1cp0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4", "Europe/Minsk|MMT EET MSK CEST CET MSD EEST FET|-1O -20 -30 -20 -10 -40 -30 -30|012343432525252525252525252616161616161616161616161616161616161616172|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cK0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hy0|19e5", "Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3", "Europe/Moscow|MMT MMT MST MDST MSD MSK MSM EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c20 imv.j 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6", "Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6", "Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4", "Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2as10 M00 1cM0 1cM0 14o0 1o00 WM0 1qM0 17c0 1cM0 M3A0 5M20 WM0 1fA0 1cM0 16K0 1iO0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 Lz0 1C10 Lz0 1EN0 Lz0 1C10 Lz0 1zd0 Oo0 1C00 On0 1C10 Lz0 1zd0 On0 1C10 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5", "Europe/Samara|LMT SAMT SAMT KUYT KUYST MSD MSK EEST SAMST SAMST|-3k.k -30 -40 -40 -50 -40 -30 -30 -50 -40|012343434343434343435656712828282828282828282828282828282828282912|-22WNk.k qHak.k bcn0 1Qqo0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cN0 8o0 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0|12e5", "Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4", "Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5", "Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4", "Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4", "Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WNd.A qHad.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0", "Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4", "Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1a00 1cM0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5", "Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Europe/Volgograd|LMT TSAT STAT STAT VOLT VOLST VOLST VOLT MSD MSK MSK|-2V.E -30 -30 -40 -40 -50 -40 -30 -40 -30 -40|0123454545454545454676767489898989898989898989898989898989898989a9|-21IqV.E cLXV.E cEM0 1gqn0 Lco0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1fA0 1cM0 2pz0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5", "Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5", "Europe/Zaporozhye|CUT EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4", "HST|HST|a0|0|", "Indian/Chagos|LMT IOT IOT|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2", "Indian/Christmas|CXT|-70|0||21e2", "Indian/Cocos|CCT|-6u|0||596", "Indian/Kerguelen|zzz TFT|0 -50|01|-MG00|130", "Indian/Mahe|LMT SCT|-3F.M -40|01|-2yO3F.M|79e3", "Indian/Maldives|MMT MVT|-4S -50|01|-olgS|35e4", "Indian/Mauritius|LMT MUT MUST|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4", "Indian/Reunion|LMT RET|-3F.Q -40|01|-2mDDF.Q|84e4", "Pacific/Kwajalein|MHT KWAT MHT|-b0 c0 -c0|012|-AX0 W9X0|14e3", "MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "MST|MST|70|0|", "MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Pacific/Chatham|CHAST CHAST CHADT|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600", "PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Pacific/Apia|LMT WSST SST SDT WSDT WSST|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3", "Pacific/Bougainville|PGT JST BST|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4", "Pacific/Chuuk|CHUT|-a0|0||49e3", "Pacific/Efate|LMT VUT VUST|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3", "Pacific/Enderbury|PHOT PHOT PHOT|c0 b0 -d0|012|nIc0 B8n0|1", "Pacific/Fakaofo|TKT TKT|b0 -d0|01|1Gfn0|483", "Pacific/Fiji|LMT FJT FJST|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0|88e4", "Pacific/Funafuti|TVT|-c0|0||45e2", "Pacific/Galapagos|LMT ECT GALT|5W.o 50 60|012|-1yVS1.A 2dTz1.A|25e3", "Pacific/Gambier|LMT GAMT|8X.M 90|01|-2jof0.c|125", "Pacific/Guadalcanal|LMT SBT|-aD.M -b0|01|-2joyD.M|11e4", "Pacific/Guam|GST ChST|-a0 -a0|01|1fpq0|17e4", "Pacific/Honolulu|HST HDT HST|au 9u a0|010102|-1thLu 8x0 lef0 8Pz0 46p0|37e4", "Pacific/Kiritimati|LINT LINT LINT|aE a0 -e0|012|nIaE B8nk|51e2", "Pacific/Kosrae|KOST KOST|-b0 -c0|010|-AX0 1bdz0|66e2", "Pacific/Majuro|MHT MHT|-b0 -c0|01|-AX0|28e3", "Pacific/Marquesas|LMT MART|9i 9u|01|-2joeG|86e2", "Pacific/Pago_Pago|LMT NST BST SST|bm.M b0 b0 b0|0123|-2nDMB.c 2gVzB.c EyM0|37e2", "Pacific/Nauru|LMT NRT JST NRT|-b7.E -bu -90 -c0|01213|-1Xdn7.E PvzB.E 5RCu 1ouJu|10e3", "Pacific/Niue|NUT NUT NUT|bk bu b0|012|-KfME 17y0a|12e2", "Pacific/Norfolk|NMT NFT NFST NFT|-bc -bu -cu -b0|01213|-Kgbc W01G On0 1COp0|25e4", "Pacific/Noumea|LMT NCT NCST|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3", "Pacific/Palau|PWT|-90|0||21e3", "Pacific/Pitcairn|PNT PST|8u 80|01|18Vku|56", "Pacific/Pohnpei|PONT|-b0|0||34e3", "Pacific/Port_Moresby|PGT|-a0|0||25e4", "Pacific/Rarotonga|CKT CKHST CKT|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3", "Pacific/Tahiti|LMT TAHT|9W.g a0|01|-2joe1.I|18e4", "Pacific/Tarawa|GILT|-c0|0||29e3", "Pacific/Tongatapu|TOT TOT TOST|-ck -d0 -e0|01212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0|75e3", "Pacific/Wake|WAKT|-c0|0||16e3", "Pacific/Wallis|WFT|-c0|0||94", "WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00"],
      "links": ["Africa/Abidjan|Africa/Bamako", "Africa/Abidjan|Africa/Banjul", "Africa/Abidjan|Africa/Conakry", "Africa/Abidjan|Africa/Dakar", "Africa/Abidjan|Africa/Freetown", "Africa/Abidjan|Africa/Lome", "Africa/Abidjan|Africa/Nouakchott", "Africa/Abidjan|Africa/Ouagadougou", "Africa/Abidjan|Africa/Sao_Tome", "Africa/Abidjan|Africa/Timbuktu", "Africa/Abidjan|Atlantic/St_Helena", "Africa/Cairo|Egypt", "Africa/Johannesburg|Africa/Maseru", "Africa/Johannesburg|Africa/Mbabane", "Africa/Khartoum|Africa/Juba", "Africa/Lagos|Africa/Bangui", "Africa/Lagos|Africa/Brazzaville", "Africa/Lagos|Africa/Douala", "Africa/Lagos|Africa/Kinshasa", "Africa/Lagos|Africa/Libreville", "Africa/Lagos|Africa/Luanda", "Africa/Lagos|Africa/Malabo", "Africa/Lagos|Africa/Niamey", "Africa/Lagos|Africa/Porto-Novo", "Africa/Maputo|Africa/Blantyre", "Africa/Maputo|Africa/Bujumbura", "Africa/Maputo|Africa/Gaborone", "Africa/Maputo|Africa/Harare", "Africa/Maputo|Africa/Kigali", "Africa/Maputo|Africa/Lubumbashi", "Africa/Maputo|Africa/Lusaka", "Africa/Nairobi|Africa/Addis_Ababa", "Africa/Nairobi|Africa/Asmara", "Africa/Nairobi|Africa/Asmera", "Africa/Nairobi|Africa/Dar_es_Salaam", "Africa/Nairobi|Africa/Djibouti", "Africa/Nairobi|Africa/Kampala", "Africa/Nairobi|Africa/Mogadishu", "Africa/Nairobi|Indian/Antananarivo", "Africa/Nairobi|Indian/Comoro", "Africa/Nairobi|Indian/Mayotte", "Africa/Tripoli|Libya", "America/Adak|America/Atka", "America/Adak|US/Aleutian", "America/Anchorage|US/Alaska", "America/Argentina/Buenos_Aires|America/Buenos_Aires", "America/Argentina/Catamarca|America/Argentina/ComodRivadavia", "America/Argentina/Catamarca|America/Catamarca", "America/Argentina/Cordoba|America/Cordoba", "America/Argentina/Cordoba|America/Rosario", "America/Argentina/Jujuy|America/Jujuy", "America/Argentina/Mendoza|America/Mendoza", "America/Atikokan|America/Coral_Harbour", "America/Chicago|US/Central", "America/Curacao|America/Aruba", "America/Curacao|America/Kralendijk", "America/Curacao|America/Lower_Princes", "America/Denver|America/Shiprock", "America/Denver|Navajo", "America/Denver|US/Mountain", "America/Detroit|US/Michigan", "America/Edmonton|Canada/Mountain", "America/Fort_Wayne|America/Indiana/Indianapolis", "America/Fort_Wayne|America/Indianapolis", "America/Fort_Wayne|US/East-Indiana", "America/Halifax|Canada/Atlantic", "America/Havana|Cuba", "America/Indiana/Knox|America/Knox_IN", "America/Indiana/Knox|US/Indiana-Starke", "America/Jamaica|Jamaica", "America/Kentucky/Louisville|America/Louisville", "America/Los_Angeles|US/Pacific", "America/Los_Angeles|US/Pacific-New", "America/Manaus|Brazil/West", "America/Mazatlan|Mexico/BajaSur", "America/Mexico_City|Mexico/General", "America/New_York|US/Eastern", "America/Noronha|Brazil/DeNoronha", "America/Panama|America/Cayman", "America/Phoenix|US/Arizona", "America/Port_of_Spain|America/Anguilla", "America/Port_of_Spain|America/Antigua", "America/Port_of_Spain|America/Dominica", "America/Port_of_Spain|America/Grenada", "America/Port_of_Spain|America/Guadeloupe", "America/Port_of_Spain|America/Marigot", "America/Port_of_Spain|America/Montserrat", "America/Port_of_Spain|America/St_Barthelemy", "America/Port_of_Spain|America/St_Kitts", "America/Port_of_Spain|America/St_Lucia", "America/Port_of_Spain|America/St_Thomas", "America/Port_of_Spain|America/St_Vincent", "America/Port_of_Spain|America/Tortola", "America/Port_of_Spain|America/Virgin", "America/Regina|Canada/East-Saskatchewan", "America/Regina|Canada/Saskatchewan", "America/Rio_Branco|America/Porto_Acre", "America/Rio_Branco|Brazil/Acre", "America/Santiago|Chile/Continental", "America/Sao_Paulo|Brazil/East", "America/St_Johns|Canada/Newfoundland", "America/Tijuana|America/Ensenada", "America/Tijuana|America/Santa_Isabel", "America/Tijuana|Mexico/BajaNorte", "America/Toronto|America/Montreal", "America/Toronto|Canada/Eastern", "America/Vancouver|Canada/Pacific", "America/Whitehorse|Canada/Yukon", "America/Winnipeg|Canada/Central", "Asia/Ashgabat|Asia/Ashkhabad", "Asia/Bangkok|Asia/Phnom_Penh", "Asia/Bangkok|Asia/Vientiane", "Asia/Dhaka|Asia/Dacca", "Asia/Dubai|Asia/Muscat", "Asia/Ho_Chi_Minh|Asia/Saigon", "Asia/Hong_Kong|Hongkong", "Asia/Jerusalem|Asia/Tel_Aviv", "Asia/Jerusalem|Israel", "Asia/Kathmandu|Asia/Katmandu", "Asia/Kolkata|Asia/Calcutta", "Asia/Macau|Asia/Macao", "Asia/Makassar|Asia/Ujung_Pandang", "Asia/Nicosia|Europe/Nicosia", "Asia/Qatar|Asia/Bahrain", "Asia/Riyadh|Asia/Aden", "Asia/Riyadh|Asia/Kuwait", "Asia/Seoul|ROK", "Asia/Shanghai|Asia/Chongqing", "Asia/Shanghai|Asia/Chungking", "Asia/Shanghai|Asia/Harbin", "Asia/Shanghai|PRC", "Asia/Singapore|Singapore", "Asia/Taipei|ROC", "Asia/Tehran|Iran", "Asia/Thimphu|Asia/Thimbu", "Asia/Tokyo|Japan", "Asia/Ulaanbaatar|Asia/Ulan_Bator", "Asia/Urumqi|Asia/Kashgar", "Atlantic/Faroe|Atlantic/Faeroe", "Atlantic/Reykjavik|Iceland", "Australia/Adelaide|Australia/South", "Australia/Brisbane|Australia/Queensland", "Australia/Broken_Hill|Australia/Yancowinna", "Australia/Darwin|Australia/North", "Australia/Hobart|Australia/Tasmania", "Australia/Lord_Howe|Australia/LHI", "Australia/Melbourne|Australia/Victoria", "Australia/Perth|Australia/West", "Australia/Sydney|Australia/ACT", "Australia/Sydney|Australia/Canberra", "Australia/Sydney|Australia/NSW", "Etc/GMT+0|Etc/GMT", "Etc/GMT+0|Etc/GMT-0", "Etc/GMT+0|Etc/GMT0", "Etc/GMT+0|Etc/Greenwich", "Etc/GMT+0|GMT", "Etc/GMT+0|GMT+0", "Etc/GMT+0|GMT-0", "Etc/GMT+0|GMT0", "Etc/GMT+0|Greenwich", "Etc/UCT|UCT", "Etc/UTC|Etc/Universal", "Etc/UTC|Etc/Zulu", "Etc/UTC|UTC", "Etc/UTC|Universal", "Etc/UTC|Zulu", "Europe/Belgrade|Europe/Ljubljana", "Europe/Belgrade|Europe/Podgorica", "Europe/Belgrade|Europe/Sarajevo", "Europe/Belgrade|Europe/Skopje", "Europe/Belgrade|Europe/Zagreb", "Europe/Chisinau|Europe/Tiraspol", "Europe/Dublin|Eire", "Europe/Helsinki|Europe/Mariehamn", "Europe/Istanbul|Asia/Istanbul", "Europe/Istanbul|Turkey", "Europe/Lisbon|Portugal", "Europe/London|Europe/Belfast", "Europe/London|Europe/Guernsey", "Europe/London|Europe/Isle_of_Man", "Europe/London|Europe/Jersey", "Europe/London|GB", "Europe/London|GB-Eire", "Europe/Moscow|W-SU", "Europe/Oslo|Arctic/Longyearbyen", "Europe/Oslo|Atlantic/Jan_Mayen", "Europe/Prague|Europe/Bratislava", "Europe/Rome|Europe/San_Marino", "Europe/Rome|Europe/Vatican", "Europe/Warsaw|Poland", "Europe/Zurich|Europe/Busingen", "Europe/Zurich|Europe/Vaduz", "Pacific/Auckland|Antarctica/McMurdo", "Pacific/Auckland|Antarctica/South_Pole", "Pacific/Auckland|NZ", "Pacific/Chatham|NZ-CHAT", "Pacific/Chuuk|Pacific/Truk", "Pacific/Chuuk|Pacific/Yap", "Pacific/Easter|Chile/EasterIsland", "Pacific/Guam|Pacific/Saipan", "Pacific/Honolulu|Pacific/Johnston", "Pacific/Honolulu|US/Hawaii", "Pacific/Kwajalein|Kwajalein", "Pacific/Pago_Pago|Pacific/Midway", "Pacific/Pago_Pago|Pacific/Samoa", "Pacific/Pago_Pago|US/Samoa", "Pacific/Pohnpei|Pacific/Ponape"]
    });
    return moment;
  }));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:moment-timezone@0.5.4", ["npm:moment-timezone@0.5.4/builds/moment-timezone-with-data"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('npm:moment-timezone@0.5.4/builds/moment-timezone-with-data');
  global.define = __define;
  return module.exports;
});

System.register("COMPANY-github:Voya/dd2c-ui@master/lib/components/page-timestamp/content/en", [], function (_export) {
    "use strict";

    var PAGE_TIMESTAMP_CONTENT;
    return {
        setters: [],
        execute: function () {
            PAGE_TIMESTAMP_CONTENT = {
                // -------------------------------
                // NOTES
                // * Use CSS for all caps
                // -------------------------------
                timestampCurrentDate: "Current as of",
                timestampQuotesString: "Quotes are delayed at least 15 minutes."
            };

            _export("PAGE_TIMESTAMP_CONTENT", PAGE_TIMESTAMP_CONTENT);
        }
    };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/components/page-timestamp/page-timestamp', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:moment-timezone@0.5.4', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/page-timestamp/content/en'], function (_export) {
    var _createClass, _classCallCheck, moment, PAGE_TIMESTAMP_CONTENT, PageTimestamp;

    return {
        setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
            _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_npmMomentTimezone054) {
            moment = _npmMomentTimezone054['default'];
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsPageTimestampContentEn) {
            PAGE_TIMESTAMP_CONTENT = _COMPANYGithubVoyaDd2cUiMasterLibComponentsPageTimestampContentEn.PAGE_TIMESTAMP_CONTENT;
        }],
        execute: function () {
            'use strict';

            PageTimestamp = (function () {
                function PageTimestamp() {
                    _classCallCheck(this, PageTimestamp);

                    this.timestampQuotesString = '';
                    this.timestampCurrentDate = '';
                    this.timestampDate = '';
                }

                _createClass(PageTimestamp, [{
                    key: 'attached',
                    value: function attached() {
                        this.timestampQuotesString = PAGE_TIMESTAMP_CONTENT.timestampQuotesString;
                        this.timestampCurrentDate = PAGE_TIMESTAMP_CONTENT.timestampCurrentDate;
                        this.setTimestampDate();
                    }
                }, {
                    key: 'setTimestampDate',
                    value: function setTimestampDate() {
                        moment.tz.setDefault("America/New_York");
                        this.timestampDate = moment().format("ddd MMM D, YYYY, hh:mm A z");
                    }
                }]);

                return PageTimestamp;
            })();

            _export('PageTimestamp', PageTimestamp);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/lib/components/page-timestamp/page-timestamp.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n    <div class=\"page-timestamp__timestamp-container\">\n        <span class=\"page-timestamp__timestamp-date\">${timestampCurrentDate} ${timestampDate}</span>\n        <span class=\"page-timestamp__timestamp-string\">${timestampQuotesString}</span>\n    </div>\n</template>";
});

_removeDefine();
})();
System.register('COMPANY-github:Voya/dd2c-ui@master/lib/components/disclosure/services', ['npm:whatwg-fetch@0.11.1', 'COMPANY-github:Voya/dd2c-ui@master/lib/services-cache', 'COMPANY-github:Voya/dd2c-ui@master/lib/services/base-url', 'COMPANY-github:Voya/dd2c-ui@master/lib/services/service-overrides'], function (_export) {

    // if BASE_URLs are needed, use /lib/services/base-url
    'use strict';

    var getFromCache, addToCache, existsInCache, BASE_URL, ServiceOverrides, serviceOverrides, MY_VOYA_BASE, SYMBOL_DETAILS_URL, DISCLOSURE_URL;

    _export('symbolDetails', symbolDetails);

    _export('disclosureService', disclosureService);

    function symbolDetails(symbolString) {
        var cacheId = SYMBOL_DETAILS_URL.replace(/\{id\}/g, symbolString);

        cacheId = serviceOverrides.overrideIfEnabled(cacheId);

        if (existsInCache(cacheId)) {
            return getFromCache(cacheId);
        }

        return fetch(cacheId, {
            headers: new Headers({ 'X-Requested-By': 'myCOMPANY' })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
    }

    function disclosureService(secType) {
        var cacheId = DISCLOSURE_URL.replace(/\{SecurityType\}/g, secType);

        cacheId = serviceOverrides.overrideIfEnabled(cacheId);

        if (existsInCache(cacheId)) {
            return getFromCache(cacheId);
        }

        return fetch(cacheId, {
            headers: new Headers({ 'X-Requested-By': 'myCOMPANY' })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
    }

    return {
        setters: [function (_npmWhatwgFetch0111) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesCache) {
            getFromCache = _COMPANYGithubVoyaDd2cUiMasterLibServicesCache.getFromCache;
            addToCache = _COMPANYGithubVoyaDd2cUiMasterLibServicesCache.addToCache;
            existsInCache = _COMPANYGithubVoyaDd2cUiMasterLibServicesCache.existsInCache;
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesBaseUrl) {
            BASE_URL = _COMPANYGithubVoyaDd2cUiMasterLibServicesBaseUrl.BASE_URL;
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesServiceOverrides) {
            ServiceOverrides = _COMPANYGithubVoyaDd2cUiMasterLibServicesServiceOverrides['default'];
        }],
        execute: function () {
            serviceOverrides = new ServiceOverrides();
            MY_VOYA_BASE = BASE_URL.myVoya;
            SYMBOL_DETAILS_URL = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/symbol/{id}/data';
            DISCLOSURE_URL = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/content/{SecurityType}/disclosure';
        }
    };
});

System.register("COMPANY-github:Voya/dd2c-ui@master/lib/components/disclosure/content/en", [], function (_export) {
  "use strict";

  var DISCLOSURE_CONTENT;
  return {
    setters: [],
    execute: function () {
      DISCLOSURE_CONTENT = {
        // -------------------------------
        // NOTES
        // * Use CSS for all caps
        // ------------------------------- 
        moreInfo: "More Info",
        showLess: "Show Less"
      };

      _export("DISCLOSURE_CONTENT", DISCLOSURE_CONTENT);
    }
  };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/components/disclosure/disclosure', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/disclosure/services', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/disclosure/content/en'], function (_export) {
    var _createClass, _classCallCheck, symbolDetails, disclosureService, DISCLOSURE_CONTENT, Disclosure;

    return {
        setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
            _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsDisclosureServices) {
            symbolDetails = _COMPANYGithubVoyaDd2cUiMasterLibComponentsDisclosureServices.symbolDetails;
            disclosureService = _COMPANYGithubVoyaDd2cUiMasterLibComponentsDisclosureServices.disclosureService;
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsDisclosureContentEn) {
            DISCLOSURE_CONTENT = _COMPANYGithubVoyaDd2cUiMasterLibComponentsDisclosureContentEn.DISCLOSURE_CONTENT;
        }],
        execute: function () {
            'use strict';

            Disclosure = (function () {
                function Disclosure() {
                    _classCallCheck(this, Disclosure);

                    this.symbolValue = '';
                    this.secType = '';
                    this.disclosureTitle = '';
                    this.disclosureBody = '';
                    this.disclosureMoreInfo = '';
                    this.isMoreInfo = false;
                    this.content = DISCLOSURE_CONTENT;
                }

                _createClass(Disclosure, [{
                    key: 'attached',
                    value: function attached() {
                        this.symbolValue = this.getSymbolFromQueryString();
                        this.getSecType(this.symbolValue);
                    }
                }, {
                    key: 'getSymbolFromQueryString',
                    value: function getSymbolFromQueryString() {
                        var getQueryString = function getQueryString(field, url) {
                            var href = url ? url : window.location.href;
                            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
                            var string = reg.exec(href);

                            return string ? string[1] : null;
                        };

                        return getQueryString('symbol') || '';
                    }
                }, {
                    key: 'getSecType',
                    value: function getSecType(symbolString) {
                        var _this = this;

                        symbolDetails(symbolString).then(function (details) {
                            _this.secType = details[0].secType;
                            _this.getDisclosureData(_this.secType);
                        });
                    }
                }, {
                    key: 'getDisclosureData',
                    value: function getDisclosureData(securityType) {
                        var _this2 = this;

                        disclosureService(securityType).then(function (details) {
                            _this2.setDisclosureData(details.Disclosure);
                        });
                    }
                }, {
                    key: 'setDisclosureData',
                    value: function setDisclosureData(disclosureDetails) {
                        this.disclosureTitle = disclosureDetails.title;
                        this.disclosureBody = disclosureDetails.body;
                        this.disclosureMoreInfo = disclosureDetails.moreInfo;
                    }
                }, {
                    key: 'showMoreInfo',
                    value: function showMoreInfo() {
                        this.isMoreInfo = true;
                    }
                }, {
                    key: 'showLessInfo',
                    value: function showLessInfo() {
                        this.isMoreInfo = false;
                    }
                }]);

                return Disclosure;
            })();

            _export('Disclosure', Disclosure);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/lib/components/disclosure/disclosure.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n    <div if.bind=\"secType\">\n        <div class=\"disclosure__title\">${disclosureTitle}</div>\n        <div class=\"disclosure__body\" innerhtml.bind=\"disclosureBody\"></div>\n        <a class=\"disclosure__more-info_link\" if.bind=\"!isMoreInfo\" click.delegate=\"showMoreInfo()\">${content.moreInfo}</a>\n        <div class=\"disclosure__more-info_content\" if.bind=\"isMoreInfo\" innerhtml.bind=\"disclosureMoreInfo\"></div>\n        <a class=\"disclosure__show-less_link\" if.bind=\"isMoreInfo\" click.delegate=\"showLessInfo()\">${content.showLess}</a>\n    </div>\n</template>";
});

_removeDefine();
})();
System.register("COMPANY-github:Voya/dd2c-ui@master/lib/components/COMPANY-lightbox/stub/sign-up-success-stub", [], function (_export) {
    "use strict";

    var SIGN_UP_SUCCESS_STUB;
    return {
        setters: [],
        execute: function () {
            SIGN_UP_SUCCESS_STUB = {
                content: {
                    salutation: "Welcome test test!",
                    message: "You now have access to premium content from Morningstar",
                    buttonLabel: "OK"
                }
            };

            _export("SIGN_UP_SUCCESS_STUB", SIGN_UP_SUCCESS_STUB);
        }
    };
});

System.register('COMPANY-github:Voya/deep-ui-COMPANY-modal@1.0.0-beta1/COMPANY-modal-template', [], function (_export) {
    'use strict';

    _export('COMPANYModalTemplate', COMPANYModalTemplate);

    function closeIcon(el) {
        return '\n        <span class="COMPANY-modal__close-icon fa fa-times primary-color"></span>\n    ';
    }

    function heading(el) {
        return '\n    \t<div class="COMPANY-modal__heading primary-color">\n    \t\t' + el.headingText + '\n    \t</div>\n    ';
    }

    function body(el) {
        return '\n    \t<div class="COMPANY-modal__body">\n    \t\t' + el.bodyHtml + '\n    \t</div>\n    ';
    }

    function COMPANYModalTemplate(el) {
        var styleString = '';
        if (el.maxWidth) {
            styleString = ' style="max-width:' + el.maxWidth + ';"';
        }
        return '\n        <div class="COMPANY-modal-outer-container" tabindex="-1">\n            <div class="COMPANY-modal-inner-container">\n                <div class="COMPANY-modal"' + styleString + '>\n                    ' + closeIcon(el) + '\n                    ' + heading(el) + '\n                    ' + body(el) + '\n                </div>\n            </div>\n        </div>';
    }

    return {
        setters: [],
        execute: function () {}
    };
});

System.register('COMPANY-github:Voya/deep-ui-COMPANY-modal@1.0.0-beta1/COMPANY-modal', ['npm:babel-runtime@5.8.24/helpers/get', 'npm:babel-runtime@5.8.24/helpers/inherits', 'npm:babel-runtime@5.8.24/helpers/define-decorated-property-descriptor', 'npm:babel-runtime@5.8.24/helpers/create-decorated-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:babel-runtime@5.8.24/core-js/array/from', 'COMPANY-github:Voya/deep-ui-COMPANY-component-utils@3.3.2', 'COMPANY-github:Voya/deep-ui-COMPANY-component-utils@3.3.2/decorators/property-decorators', 'npm:dom-delegate@2.0.3', 'COMPANY-github:Voya/deep-ui-COMPANY-modal@1.0.0-beta1/COMPANY-modal-template'], function (_export) {
	var _get, _inherits, _defineDecoratedPropertyDescriptor, _createDecoratedClass, _classCallCheck, _Array$from, NativeHTMLElement, property, delegate, COMPANYModalTemplate, VoyaModal;

	return {
		setters: [function (_npmBabelRuntime5824HelpersGet) {
			_get = _npmBabelRuntime5824HelpersGet['default'];
		}, function (_npmBabelRuntime5824HelpersInherits) {
			_inherits = _npmBabelRuntime5824HelpersInherits['default'];
		}, function (_npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor) {
			_defineDecoratedPropertyDescriptor = _npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor['default'];
		}, function (_npmBabelRuntime5824HelpersCreateDecoratedClass) {
			_createDecoratedClass = _npmBabelRuntime5824HelpersCreateDecoratedClass['default'];
		}, function (_npmBabelRuntime5824HelpersClassCallCheck) {
			_classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
		}, function (_npmBabelRuntime5824CoreJsArrayFrom) {
			_Array$from = _npmBabelRuntime5824CoreJsArrayFrom['default'];
		}, function (_COMPANYGithubVoyaDeepUiVoyaComponentUtils332) {
			NativeHTMLElement = _COMPANYGithubVoyaDeepUiVoyaComponentUtils332.NativeHTMLElement;
		}, function (_COMPANYGithubVoyaDeepUiVoyaComponentUtils332DecoratorsPropertyDecorators) {
			property = _COMPANYGithubVoyaDeepUiVoyaComponentUtils332DecoratorsPropertyDecorators.property;
		}, function (_npmDomDelegate203) {
			delegate = _npmDomDelegate203['default'];
		}, function (_COMPANYGithubVoyaDeepUiVoyaModal100Beta1VoyaModalTemplate) {
			COMPANYModalTemplate = _COMPANYGithubVoyaDeepUiVoyaModal100Beta1VoyaModalTemplate.COMPANYModalTemplate;
		}],
		execute: function () {
			'use strict';

			document.body.addEventListener('click', function () {
				_Array$from(document.querySelectorAll('COMPANY-modal')).forEach(function (modalEl) {
					modalEl.open = false;
				});
			});

			VoyaModal = (function (_NativeHTMLElement) {
				var _instanceInitializers = {};

				_inherits(VoyaModal, _NativeHTMLElement);

				function VoyaModal() {
					_classCallCheck(this, VoyaModal);

					_get(Object.getPrototypeOf(VoyaModal.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'open', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'headingText', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'closeIcon', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'bodyHtml', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'maxWidth', _instanceInitializers);
				}

				_createDecoratedClass(VoyaModal, [{
					key: 'createdCallback',
					value: function createdCallback() {
						this.addEventListeners();
					}
				}, {
					key: 'attachedCallback',
					value: function attachedCallback() {
						this.bodyHtml = this.bodyHtml || this.innerHTML;
						this.render();
					}
				}, {
					key: 'render',

					//end COMPANYModal getters and setters :: next line registers our eventBus

					value: function render() {
						if (this.open) {
							this.classList.add('COMPANY-modal--open');
						} else {
							this.classList.remove('COMPANY-modal--open');
						}

						this.innerHTML = COMPANYModalTemplate(this);
						this.manageBackdrop();
						this._hasRendered = true;
					}
				}, {
					key: 'manageBackdrop',
					value: function manageBackdrop() {
						var backdropEl = document.querySelector('.COMPANY-modal-backdrop');
						var anOpenModal = document.querySelector('COMPANY-modal.COMPANY-modal--open');

						if (backdropEl && !anOpenModal) {
							backdropEl.remove();
						} else if (anOpenModal && !backdropEl) {
							backdropEl = document.createElement('div');
							backdropEl.classList.add('COMPANY-modal-backdrop');
							document.body.appendChild(backdropEl);
						}
					}
				}, {
					key: 'addEventListeners',
					value: function addEventListeners() {
						var self = this;
						delegate(this).on('click', '.COMPANY-modal__close-icon', function () {
							self.open = false;
						});
					}
				}, {
					key: 'propertyChangedCallback',
					value: function propertyChangedCallback(prop, oldValue, newValue) {
						if (this._hasRendered) {
							this.render();
						}
					}
				}, {
					key: 'open',
					decorators: [property({ type: 'boolean' })],
					initializer: function initializer() {
						return false;
					},
					enumerable: true
				}, {
					key: 'headingText',
					decorators: [property],
					initializer: function initializer() {
						return '';
					},
					enumerable: true
				}, {
					key: 'closeIcon',
					decorators: [property],
					initializer: function initializer() {
						return '';
					},
					enumerable: true
				}, {
					key: 'bodyHtml',
					decorators: [property],
					initializer: function initializer() {
						return '';
					},
					enumerable: true
				}, {
					key: 'maxWidth',
					decorators: [property],
					initializer: function initializer() {
						return '';
					},
					enumerable: true
				}], null, _instanceInitializers);

				return VoyaModal;
			})(NativeHTMLElement);

			document.registerElement('COMPANY-modal', VoyaModal);
		}
	};
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/components/COMPANY-lightbox/COMPANY-lightbox', ['npm:babel-runtime@5.8.24/helpers/define-decorated-property-descriptor', 'npm:babel-runtime@5.8.24/helpers/create-decorated-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:aurelia-framework@1.0.0-beta.1.2.2', 'COMPANY-github:Voya/deep-ui-COMPANY-component-utils@3.3.2/decorators/property-decorators', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/COMPANY-lightbox/stub/sign-up-success-stub', 'COMPANY-github:Voya/deep-ui-COMPANY-modal@1.0.0-beta1/COMPANY-modal', 'COMPANY-github:Voya/deep-ui-COMPANY-button@5.0.1/COMPANY-button', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/services'], function (_export) {
    var _defineDecoratedPropertyDescriptor, _createDecoratedClass, _classCallCheck, inject, customElement, property, SIGN_UP_SUCCESS_STUB, signUpLightbox, VOYA_MODAL_COMPONENT, VOYA_MODAL_CLOSE, VOYA_MODAL_SIGN_UP_BUTTON, VoyaLightbox;

    return {
        setters: [function (_npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor) {
            _defineDecoratedPropertyDescriptor = _npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor['default'];
        }, function (_npmBabelRuntime5824HelpersCreateDecoratedClass) {
            _createDecoratedClass = _npmBabelRuntime5824HelpersCreateDecoratedClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_npmAureliaFramework100Beta122) {
            inject = _npmAureliaFramework100Beta122.inject;
            customElement = _npmAureliaFramework100Beta122.customElement;
        }, function (_COMPANYGithubVoyaDeepUiVoyaComponentUtils332DecoratorsPropertyDecorators) {
            property = _COMPANYGithubVoyaDeepUiVoyaComponentUtils332DecoratorsPropertyDecorators.property;
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsVoyaLightboxStubSignUpSuccessStub) {
            SIGN_UP_SUCCESS_STUB = _COMPANYGithubVoyaDd2cUiMasterLibComponentsVoyaLightboxStubSignUpSuccessStub.SIGN_UP_SUCCESS_STUB;
        }, function (_COMPANYGithubVoyaDeepUiVoyaModal100Beta1VoyaModal) {}, function (_COMPANYGithubVoyaDeepUiVoyaButton501VoyaButton) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices) {
            signUpLightbox = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.signUpLightbox;
        }],
        execute: function () {
            'use strict';

            VOYA_MODAL_COMPONENT = 'COMPANY-modal';
            VOYA_MODAL_CLOSE = '.COMPANY-modal__close-icon';
            VOYA_MODAL_SIGN_UP_BUTTON = '.COMPANY-lightbox__sign-up-modal_button';

            VoyaLightbox = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(VoyaLightbox, [{
                    key: 'heading',
                    decorators: [property],
                    initializer: function initializer() {
                        return '';
                    },
                    enumerable: true
                }, {
                    key: 'maxWidth',
                    decorators: [property],
                    initializer: function initializer() {
                        return '';
                    },
                    enumerable: true
                }, {
                    key: 'type',
                    decorators: [property],
                    initializer: function initializer() {
                        return '';
                    },
                    enumerable: true
                }, {
                    key: 'bodyHtml',
                    decorators: [property],
                    initializer: function initializer() {
                        return '';
                    },
                    enumerable: true
                }, {
                    key: 'endpoint',
                    decorators: [property],
                    initializer: function initializer() {
                        return '';
                    },
                    enumerable: true
                }], null, _instanceInitializers);

                function VoyaLightbox(element) {
                    _classCallCheck(this, _VoyaLightbox);

                    _defineDecoratedPropertyDescriptor(this, 'heading', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'maxWidth', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'bodyHtml', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'endpoint', _instanceInitializers);

                    this.element = element;
                    this.vm = {};
                    this.vm.content = {};
                    this.signUpStatus = '';
                    this.signUpModalTemplate;
                    this.vm.stub = SIGN_UP_SUCCESS_STUB;
                }

                _createDecoratedClass(VoyaLightbox, [{
                    key: 'attached',
                    value: function attached() {
                        if (this.type === 'sign-up-success') {
                            this.checkSignUpStatus();
                        }

                        //this.setStubModalData();
                    }
                }, {
                    key: 'checkSignUpStatus',
                    value: function checkSignUpStatus() {
                        this.signUpStatus = this.getStatusFromQueryString();

                        if (this.signUpStatus === 'signUpSuccess') {
                            //this.openModal();
                            this.getModalData();
                        }
                    }
                }, {
                    key: 'getStatusFromQueryString',
                    value: function getStatusFromQueryString() {
                        var getQueryString = function getQueryString(field, url) {
                            var href = url ? url : window.location.href;
                            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
                            var string = reg.exec(href);

                            return string ? string[1] : null;
                        };

                        return getQueryString('lightbox') || '';
                    }
                }, {
                    key: 'setStubModalData',
                    value: function setStubModalData() {
                        this.vm.content.salutation = this.vm.stub.content.salutation;
                        this.vm.content.message = this.vm.stub.content.message;
                        this.vm.content.buttonLabel = this.vm.stub.content.buttonLabel;

                        this.signUpModalTemplate = this.setSignUpModalTemplate(this);
                    }
                }, {
                    key: 'getModalData',
                    value: function getModalData() {
                        var _this = this;

                        signUpLightbox().then(function (details) {
                            _this.setModalData(details.content);
                        });
                    }
                }, {
                    key: 'setModalData',
                    value: function setModalData(content) {
                        this.vm.content.salutation = content.salutation;
                        this.vm.content.message = content.message;
                        this.vm.content.buttonLabel = content.buttonLabel;

                        this.signUpModalTemplate = this.setSignUpModalTemplate(this);
                        this.openModal();
                    }
                }, {
                    key: 'setSignUpModalTemplate',
                    value: function setSignUpModalTemplate(el) {
                        return '\n            <div class="COMPANY-lightbox__sign-up-modal_content">\n                <div class="COMPANY-lightbox__sign-up-modal_salutation">' + el.vm.content.salutation + '</div>\n                <div class="COMPANY-lightbox__sign-up-modal_message">' + el.vm.content.message + '</div>\n            </div>\n            <div class="COMPANY-lightbox__sign-up-modal_button">\n                <COMPANY-button\n                    text="' + el.vm.content.buttonLabel + '">\n                </COMPANY-button>\n            </div>\n        ';
                    }
                }, {
                    key: 'openModal',
                    value: function openModal() {
                        this.vm.modalComponent = this.element.querySelector(VOYA_MODAL_COMPONENT);
                        /*this.vm.modalOkButton = this.element.querySelector(VOYA_MODAL_SIGN_UP_BUTTON);
                        this.vm.modalClose = this.element.querySelector(VOYA_MODAL_CLOSE);*/

                        this.vm.modalComponent.setAttribute("open", true);

                        this.onCloseModal();
                    }
                }, {
                    key: 'onCloseModal',
                    value: function onCloseModal() {
                        var originalURL = window.location.href;

                        var alteredURL = this.removeQueryStringParam("lightbox", originalURL);
                        window.history.pushState({ path: alteredURL }, '', alteredURL);
                    }
                }, {
                    key: 'removeQueryStringParam',
                    value: function removeQueryStringParam(key, sourceURL) {
                        var rtn = sourceURL.split("?")[0],
                            param = undefined,
                            params_arr = [],
                            queryString = sourceURL.indexOf("?") !== -1 ? sourceURL.split("?")[1] : "";
                        if (queryString !== "") {
                            params_arr = queryString.split("&");
                            for (var i = params_arr.length - 1; i >= 0; i -= 1) {
                                param = params_arr[i].split("=")[0];
                                if (param === key) {
                                    params_arr.splice(i, 1);
                                }
                            }
                            rtn = rtn + "?" + params_arr.join("&");
                        }
                        return rtn;
                    }
                }], null, _instanceInitializers);

                var _VoyaLightbox = VoyaLightbox;
                VoyaLightbox = inject(Element)(VoyaLightbox) || VoyaLightbox;
                return VoyaLightbox;
            })();

            _export('VoyaLightbox', VoyaLightbox);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/lib/components/COMPANY-lightbox/COMPANY-lightbox.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n    <require from=\"COMPANY-modal/COMPANY-modal\"></require>\n    <require from=\"COMPANY-button/COMPANY-button\"></require>\n\n    <COMPANY-modal\n        max-width=\"${maxWidth}\"\n        heading-text=\"${heading}\"\n        open=false\n        close-icon\n        body-html=\"${signUpModalTemplate}\">\n    </COMPANY-modal>\n</template>";
});

_removeDefine();
})();
System.register('COMPANY-github:Voya/dd2c-ui@master/lib/components/tooltip-definitions-content/tooltip-definitions-content', ['npm:babel-runtime@5.8.24/helpers/define-decorated-property-descriptor', 'npm:babel-runtime@5.8.24/helpers/create-decorated-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:aurelia-framework@1.0.0-beta.1.2.2', 'COMPANY-github:Voya/deep-ui-COMPANY-component-utils@3.3.2/decorators/property-decorators', 'COMPANY-github:Voya/dd2c-ui@master/lib/services/generic-service'], function (_export) {
    var _defineDecoratedPropertyDescriptor, _createDecoratedClass, _classCallCheck, bindable, inject, BindingEngine, property, _fetchData, TooltipDefinitionsContent;

    return {
        setters: [function (_npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor) {
            _defineDecoratedPropertyDescriptor = _npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor['default'];
        }, function (_npmBabelRuntime5824HelpersCreateDecoratedClass) {
            _createDecoratedClass = _npmBabelRuntime5824HelpersCreateDecoratedClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_npmAureliaFramework100Beta122) {
            bindable = _npmAureliaFramework100Beta122.bindable;
            inject = _npmAureliaFramework100Beta122.inject;
            BindingEngine = _npmAureliaFramework100Beta122.BindingEngine;
        }, function (_COMPANYGithubVoyaDeepUiVoyaComponentUtils332DecoratorsPropertyDecorators) {
            property = _COMPANYGithubVoyaDeepUiVoyaComponentUtils332DecoratorsPropertyDecorators.property;
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesGenericService) {
            _fetchData = _COMPANYGithubVoyaDd2cUiMasterLibServicesGenericService.fetchData;
        }],
        execute: function () {
            /* globals $ */

            // import { CONTENT } from './content/en';

            /*const CAROUSEL_SELECTOR = '.i-tooltip-contents__carousel';
            const CAROUSEL_NAV_SELECTOR = '.i-tooltip-contents__carousel-nav';*/

            // HACK TO TRIGGER TOOLTIPS TO SHOW UP //////////////////
            /*
            var evObj = document.createEvent( 'Events' );
            evObj.initEvent( 'mouseover', true, false );
            $0.dispatchEvent( evObj );
            */

            'use strict';

            //import 'slick-carousel';

            // Inject the instance of this element

            TooltipDefinitionsContent = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(TooltipDefinitionsContent, [{
                    key: 'endpoint',
                    decorators: [property],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function TooltipDefinitionsContent(element) {
                    _classCallCheck(this, _TooltipDefinitionsContent);

                    _defineDecoratedPropertyDescriptor(this, 'endpoint', _instanceInitializers);

                    this.element = element;
                    this.endpoint = '';

                    this.vm = {
                        contents: []
                    };

                    this.fetchData();
                }

                _createDecoratedClass(TooltipDefinitionsContent, [{
                    key: 'attached',
                    value: function attached() {}

                    /*this.element.activateTooltipContents = this.activateSlick.bind(this);
                    this.element.deactivateTooltipContents = this.deactivateSlick.bind(this);*/

                    /*activateSlick() {
                         // console.log('activate slick',  $('.' + this.uniqueId), $(this.element).find(CAROUSEL_NAV_SELECTOR).first() )
                         // requires jQuery because of Slick
                        let el = $( this.element ).find( CAROUSEL_SELECTOR );
                        if ( el.length && el.slick ) {
                                el.slick({
                                speed: 500,
                                infinite: true,
                                dots: true,
                                prevArrow: '<span class="slick-prev"></span>',
                                nextArrow: '<span class="slick-next"></span>',
                                appendArrows:$(this.element).find(CAROUSEL_NAV_SELECTOR).first(),
                                appendDots: $(this.element).find(CAROUSEL_NAV_SELECTOR).first()
                            });
                        }
                    }
                     deactivateSlick() {
                        // requires jQuery because of Slick
                        let el = $( this.element ).find( CAROUSEL_SELECTOR );
                        if ( el !== undefined && el.length && el.slick ) {
                            // console.log('disable success')
                            el.slick('unslick');
                        }
                    }*/

                }, {
                    key: 'fetchData',
                    value: function fetchData() {
                        var _this = this;

                        // start STUB DATA ///////////////////////////////////////////////////////////////
                        // if (this.vm === undefined ) {
                        //     this.vm = {};
                        // }
                        // this.vm.slides = [{title: "a", body: "apple"}, {title: "b", body: "babel"}];
                        // end STUB DATA ///////////////////////////////////////////////////////////////

                        if (this.endpoint && this.endpoint.length && this.endpoint.indexOf('tooltipUrl') === -1) {
                            _fetchData(this.endpoint).then(function (data) {
                                // this.vm.slides = [{title: "a", body: "apple"}, {title: "b", body: "babel"}];
                                _this.vm.contents = data.tooltip;
                            });
                        }
                    }
                }, {
                    key: 'setEndpoint',
                    value: function setEndpoint(endpoint) {
                        // console.log('set endpoint', endpoint + '++')
                        if (endpoint !== this.endpoint) {
                            this.endpoint = endpoint;
                        }
                    }
                }, {
                    key: 'propertyChangedCallback',
                    value: function propertyChangedCallback(prop, oldValue, newValue) {
                        if (prop === 'endpoint' && oldValue !== newValue) {
                            this.setEndpoint(newValue);
                            this.fetchData();
                        }
                    }
                }], null, _instanceInitializers);

                var _TooltipDefinitionsContent = TooltipDefinitionsContent;
                TooltipDefinitionsContent = inject(Element)(TooltipDefinitionsContent) || TooltipDefinitionsContent;
                return TooltipDefinitionsContent;
            })();

            _export('TooltipDefinitionsContent', TooltipDefinitionsContent);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/lib/components/tooltip-definitions-content/tooltip-definitions-content.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n    <div class=\"tooltip-definitions-content__section\" repeat.for=\"content of vm.contents\">\n        <h5 class=\"text__color-highlight\">${content.title}</h5>\n        <p>${content.body}</p>\n    </div>\n</template>";
});

_removeDefine();
})();
System.register('COMPANY-github:Voya/dd2c-ui@master/lib/components/tooltip-contents/tooltip-contents', ['npm:babel-runtime@5.8.24/helpers/define-decorated-property-descriptor', 'npm:babel-runtime@5.8.24/helpers/create-decorated-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:aurelia-framework@1.0.0-beta.1.2.2', 'COMPANY-github:Voya/deep-ui-COMPANY-component-utils@3.3.2/decorators/property-decorators', 'npm:slick-carousel@1.6.0', 'COMPANY-github:Voya/dd2c-ui@master/lib/services/generic-service'], function (_export) {
    var _defineDecoratedPropertyDescriptor, _createDecoratedClass, _classCallCheck, bindable, inject, BindingEngine, property, _fetchData, CAROUSEL_SELECTOR, CAROUSEL_NAV_SELECTOR, TooltipContents;

    return {
        setters: [function (_npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor) {
            _defineDecoratedPropertyDescriptor = _npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor['default'];
        }, function (_npmBabelRuntime5824HelpersCreateDecoratedClass) {
            _createDecoratedClass = _npmBabelRuntime5824HelpersCreateDecoratedClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_npmAureliaFramework100Beta122) {
            bindable = _npmAureliaFramework100Beta122.bindable;
            inject = _npmAureliaFramework100Beta122.inject;
            BindingEngine = _npmAureliaFramework100Beta122.BindingEngine;
        }, function (_COMPANYGithubVoyaDeepUiVoyaComponentUtils332DecoratorsPropertyDecorators) {
            property = _COMPANYGithubVoyaDeepUiVoyaComponentUtils332DecoratorsPropertyDecorators.property;
        }, function (_npmSlickCarousel160) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesGenericService) {
            _fetchData = _COMPANYGithubVoyaDd2cUiMasterLibServicesGenericService.fetchData;
        }],
        execute: function () {
            /* globals $ */

            // import { CONTENT } from './content/en';

            'use strict';

            CAROUSEL_SELECTOR = '.i-tooltip-contents__carousel';
            CAROUSEL_NAV_SELECTOR = '.i-tooltip-contents__carousel-nav';

            // HACK TO TRIGGER TOOLTIPS TO SHOW UP //////////////////
            //
            // var evObj = document.createEvent( 'Events' );
            // evObj.initEvent( 'mouseover', true, false );
            // $0.dispatchEvent( evObj );

            // Inject the instance of this element

            TooltipContents = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(TooltipContents, [{
                    key: 'endpoint',
                    decorators: [property],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function TooltipContents(element) {
                    _classCallCheck(this, _TooltipContents);

                    _defineDecoratedPropertyDescriptor(this, 'endpoint', _instanceInitializers);

                    this.element = element;
                    this.endpoint = '';

                    this.vm = {
                        slides: []
                    };

                    this.fetchData();
                }

                _createDecoratedClass(TooltipContents, [{
                    key: 'attached',
                    value: function attached() {

                        this.element.activateTooltipContents = this.activateSlick.bind(this);
                        this.element.deactivateTooltipContents = this.deactivateSlick.bind(this);
                    }
                }, {
                    key: 'activateSlick',
                    value: function activateSlick() {

                        // console.log('activate slick',  $('.' + this.uniqueId), $(this.element).find(CAROUSEL_NAV_SELECTOR).first() )

                        // requires jQuery because of Slick
                        var el = $(this.element).find(CAROUSEL_SELECTOR);
                        if (el.length && el.slick) {
                            el.slick({
                                speed: 500,
                                infinite: true,
                                dots: true,
                                prevArrow: '<span class="slick-prev"></span>',
                                nextArrow: '<span class="slick-next"></span>',
                                appendArrows: $(this.element).find(CAROUSEL_NAV_SELECTOR).first(),
                                appendDots: $(this.element).find(CAROUSEL_NAV_SELECTOR).first()
                            });
                        }
                    }
                }, {
                    key: 'deactivateSlick',
                    value: function deactivateSlick() {
                        // requires jQuery because of Slick
                        var el = $(this.element).find(CAROUSEL_SELECTOR);
                        if (el !== undefined && el.length && el.slick) {
                            // console.log('disable success')
                            el.slick('unslick');
                        }
                    }
                }, {
                    key: 'fetchData',
                    value: function fetchData() {
                        var _this = this;

                        // start STUB DATA ///////////////////////////////////////////////////////////////
                        // if (this.vm === undefined ) {
                        //     this.vm = {};
                        // }
                        // this.vm.slides = [{title: "a", body: "apple"}, {title: "b", body: "babel"}];
                        // end STUB DATA ///////////////////////////////////////////////////////////////

                        if (this.endpoint && this.endpoint.length && this.endpoint.indexOf('tooltipUrl') === -1) {
                            _fetchData(this.endpoint).then(function (data) {
                                // this.vm.slides = [{title: "a", body: "apple"}, {title: "b", body: "babel"}];
                                _this.vm.slides = data.tooltip;
                            });
                        }
                    }
                }, {
                    key: 'setEndpoint',
                    value: function setEndpoint(endpoint) {
                        // console.log('set endpoint', endpoint + '++')
                        if (endpoint !== this.endpoint) {
                            this.endpoint = endpoint;
                        }
                    }
                }, {
                    key: 'propertyChangedCallback',
                    value: function propertyChangedCallback(prop, oldValue, newValue) {
                        if (prop === 'endpoint' && oldValue !== newValue) {
                            this.setEndpoint(newValue);
                            this.fetchData();
                        }
                    }
                }], null, _instanceInitializers);

                var _TooltipContents = TooltipContents;
                TooltipContents = inject(Element)(TooltipContents) || TooltipContents;
                return TooltipContents;
            })();

            _export('TooltipContents', TooltipContents);
        }
    };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/components/COMPANY-tooltip-definitions/COMPANY-tooltip-definitions', ['npm:babel-runtime@5.8.24/helpers/define-decorated-property-descriptor', 'npm:babel-runtime@5.8.24/helpers/create-decorated-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:aurelia-framework@1.0.0-beta.1.2.2', 'COMPANY-github:Voya/deep-ui-COMPANY-component-utils@3.3.2/decorators/property-decorators', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/tooltip-contents/tooltip-contents'], function (_export) {
    var _defineDecoratedPropertyDescriptor, _createDecoratedClass, _classCallCheck, bindable, inject, BindingEngine, property, TooltipContents, VoyaTooltipDefinitions;

    return {
        setters: [function (_npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor) {
            _defineDecoratedPropertyDescriptor = _npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor['default'];
        }, function (_npmBabelRuntime5824HelpersCreateDecoratedClass) {
            _createDecoratedClass = _npmBabelRuntime5824HelpersCreateDecoratedClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_npmAureliaFramework100Beta122) {
            bindable = _npmAureliaFramework100Beta122.bindable;
            inject = _npmAureliaFramework100Beta122.inject;
            BindingEngine = _npmAureliaFramework100Beta122.BindingEngine;
        }, function (_COMPANYGithubVoyaDeepUiVoyaComponentUtils332DecoratorsPropertyDecorators) {
            property = _COMPANYGithubVoyaDeepUiVoyaComponentUtils332DecoratorsPropertyDecorators.property;
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsTooltipContentsTooltipContents) {
            TooltipContents = _COMPANYGithubVoyaDd2cUiMasterLibComponentsTooltipContentsTooltipContents.TooltipContents;
        }],
        execute: function () {

            // HACK TO TRIGGER TOOLTIPS TO ACTIVATE (Chrome) //////////////////
            /*
             * Debugging tips
             * Right click on the tooltip and choose Inspect
             * Paste the code below
             */
            // var evObj = document.createEvent( 'Events' );
            // evObj.initEvent( 'mouseover', true, false );
            // $0.dispatchEvent( evObj );

            'use strict';

            // Inject the instance of this element

            VoyaTooltipDefinitions = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(VoyaTooltipDefinitions, [{
                    key: 'endpoint',
                    decorators: [property],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function VoyaTooltipDefinitions(element) {
                    _classCallCheck(this, _VoyaTooltipDefinitions);

                    _defineDecoratedPropertyDescriptor(this, 'endpoint', _instanceInitializers);

                    this.element = element;

                    this.vm = {};
                }

                _createDecoratedClass(VoyaTooltipDefinitions, [{
                    key: 'created',
                    value: function created() {
                        this.vm.endpoint = this.element.getAttribute('endpoint');
                        this.vm.ttTargetSelector = this.element.getAttribute('tt-target-selector');
                        this.vm.ttMinWidth = this.element.getAttribute('tt-min-width');
                        this.vm.ttMaxWidth = this.element.getAttribute('tt-max-width');
                        this.vm.ttBoundingSelector = this.element.getAttribute('tt-bounding-selector');
                        this.vm.ttPosition = this.element.getAttribute('tt-position');
                    }
                }, {
                    key: 'attached',
                    value: function attached() {}
                    /*this.element.querySelector('COMPANY-tooltip')
                         .setAttribute('target-selector', this.element.getAttribute('tt-target-selector'));*/

                    /*activateTooltipContents() {
                         this.tooltipcontents.activateTooltipContents();
                    }
                     deactivateTooltipContents() {
                         this.tooltipcontents.deactivateTooltipContents();
                    }*/

                }, {
                    key: 'setEndpoint',
                    value: function setEndpoint(endpoint) {
                        if (endpoint !== this.vm.endpoint) {
                            this.vm.endpoint = endpoint;
                            //console.log('this.vm', this.vm);
                        }
                    }
                }, {
                    key: 'propertyChangedCallback',
                    value: function propertyChangedCallback(prop, oldValue, newValue) {
                        // console.log('prop change detected', prop, oldValue, newValue)
                        if (prop === 'endpoint' && oldValue !== newValue) {
                            this.setEndpoint(newValue);
                        }
                    }
                }], null, _instanceInitializers);

                var _VoyaTooltipDefinitions = VoyaTooltipDefinitions;
                VoyaTooltipDefinitions = inject(Element)(VoyaTooltipDefinitions) || VoyaTooltipDefinitions;
                return VoyaTooltipDefinitions;
            })();

            _export('VoyaTooltipDefinitions', VoyaTooltipDefinitions);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/lib/components/COMPANY-tooltip-definitions/COMPANY-tooltip-definitions.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n    <require from=\"../../custom-attributes/endpoint\"></require>\n    <require from=\"../tooltip-definitions-content/tooltip-definitions-content\"></require>\n    <require from=\"COMPANY-tooltip\"></require>\n\n    <COMPANY-tooltip\n        min-width=${vm.ttMinWidth}\n        max-width=${vm.ttMaxWidth}\n        position=${vm.ttPosition}\n        bounding-selector=${vm.ttBoundingSelector}\n        target-selector=${vm.ttTargetSelector}\n    >\n        <!--open.trigger=\"activateTooltipContents()\"\n        close.trigger=\"deactivateTooltipContents()\"\n      >-->\n      <tooltip-definitions-content\n        endpoint=${vm.endpoint}>\n      </tooltip-definitions-content>\n    </COMPANY-tooltip>\n\n</template>";
});

_removeDefine();
})();
System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/value-converters/index', ['COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/value-converters/dollars-billion-format', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/value-converters/percent-format'], function (_export) {
  'use strict';

  return {
    setters: [function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonValueConvertersDollarsBillionFormat) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonValueConvertersPercentFormat) {}],
    execute: function () {}
  };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/value-converters/dollars-billion-format', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:numeral@1.5.3'], function (_export) {
  var _createClass, _classCallCheck, numeral, DollarsBillionFormatValueConverter;

  return {
    setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
      _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
    }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
      _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
    }, function (_npmNumeral153) {
      numeral = _npmNumeral153['default'];
    }],
    execute: function () {
      'use strict';

      DollarsBillionFormatValueConverter = (function () {
        function DollarsBillionFormatValueConverter() {
          _classCallCheck(this, DollarsBillionFormatValueConverter);
        }

        _createClass(DollarsBillionFormatValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return numeral(value).format('($ 0.00 a)');
          }
        }]);

        return DollarsBillionFormatValueConverter;
      })();

      _export('DollarsBillionFormatValueConverter', DollarsBillionFormatValueConverter);
    }
  };
});

System.registerDynamic("npm:numeral@1.5.3/numeral", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  (function() {
    var numeral,
        VERSION = '1.5.3',
        languages = {},
        currentLanguage = 'en',
        zeroFormat = null,
        defaultFormat = '0,0',
        hasModule = (typeof module !== 'undefined' && module.exports);
    function Numeral(number) {
      this._value = number;
    }
    function toFixed(value, precision, roundingFunction, optionals) {
      var power = Math.pow(10, precision),
          optionalsRegExp,
          output;
      output = (roundingFunction(value * power) / power).toFixed(precision);
      if (optionals) {
        optionalsRegExp = new RegExp('0{1,' + optionals + '}$');
        output = output.replace(optionalsRegExp, '');
      }
      return output;
    }
    function formatNumeral(n, format, roundingFunction) {
      var output;
      if (format.indexOf('$') > -1) {
        output = formatCurrency(n, format, roundingFunction);
      } else if (format.indexOf('%') > -1) {
        output = formatPercentage(n, format, roundingFunction);
      } else if (format.indexOf(':') > -1) {
        output = formatTime(n, format);
      } else {
        output = formatNumber(n._value, format, roundingFunction);
      }
      return output;
    }
    function unformatNumeral(n, string) {
      var stringOriginal = string,
          thousandRegExp,
          millionRegExp,
          billionRegExp,
          trillionRegExp,
          suffixes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          bytesMultiplier = false,
          power;
      if (string.indexOf(':') > -1) {
        n._value = unformatTime(string);
      } else {
        if (string === zeroFormat) {
          n._value = 0;
        } else {
          if (languages[currentLanguage].delimiters.decimal !== '.') {
            string = string.replace(/\./g, '').replace(languages[currentLanguage].delimiters.decimal, '.');
          }
          thousandRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.thousand + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
          millionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.million + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
          billionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.billion + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
          trillionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.trillion + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
          for (power = 0; power <= suffixes.length; power++) {
            bytesMultiplier = (string.indexOf(suffixes[power]) > -1) ? Math.pow(1024, power + 1) : false;
            if (bytesMultiplier) {
              break;
            }
          }
          n._value = ((bytesMultiplier) ? bytesMultiplier : 1) * ((stringOriginal.match(thousandRegExp)) ? Math.pow(10, 3) : 1) * ((stringOriginal.match(millionRegExp)) ? Math.pow(10, 6) : 1) * ((stringOriginal.match(billionRegExp)) ? Math.pow(10, 9) : 1) * ((stringOriginal.match(trillionRegExp)) ? Math.pow(10, 12) : 1) * ((string.indexOf('%') > -1) ? 0.01 : 1) * (((string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2) ? 1 : -1) * Number(string.replace(/[^0-9\.]+/g, ''));
          n._value = (bytesMultiplier) ? Math.ceil(n._value) : n._value;
        }
      }
      return n._value;
    }
    function formatCurrency(n, format, roundingFunction) {
      var symbolIndex = format.indexOf('$'),
          openParenIndex = format.indexOf('('),
          minusSignIndex = format.indexOf('-'),
          space = '',
          spliceIndex,
          output;
      if (format.indexOf(' $') > -1) {
        space = ' ';
        format = format.replace(' $', '');
      } else if (format.indexOf('$ ') > -1) {
        space = ' ';
        format = format.replace('$ ', '');
      } else {
        format = format.replace('$', '');
      }
      output = formatNumber(n._value, format, roundingFunction);
      if (symbolIndex <= 1) {
        if (output.indexOf('(') > -1 || output.indexOf('-') > -1) {
          output = output.split('');
          spliceIndex = 1;
          if (symbolIndex < openParenIndex || symbolIndex < minusSignIndex) {
            spliceIndex = 0;
          }
          output.splice(spliceIndex, 0, languages[currentLanguage].currency.symbol + space);
          output = output.join('');
        } else {
          output = languages[currentLanguage].currency.symbol + space + output;
        }
      } else {
        if (output.indexOf(')') > -1) {
          output = output.split('');
          output.splice(-1, 0, space + languages[currentLanguage].currency.symbol);
          output = output.join('');
        } else {
          output = output + space + languages[currentLanguage].currency.symbol;
        }
      }
      return output;
    }
    function formatPercentage(n, format, roundingFunction) {
      var space = '',
          output,
          value = n._value * 100;
      if (format.indexOf(' %') > -1) {
        space = ' ';
        format = format.replace(' %', '');
      } else {
        format = format.replace('%', '');
      }
      output = formatNumber(value, format, roundingFunction);
      if (output.indexOf(')') > -1) {
        output = output.split('');
        output.splice(-1, 0, space + '%');
        output = output.join('');
      } else {
        output = output + space + '%';
      }
      return output;
    }
    function formatTime(n) {
      var hours = Math.floor(n._value / 60 / 60),
          minutes = Math.floor((n._value - (hours * 60 * 60)) / 60),
          seconds = Math.round(n._value - (hours * 60 * 60) - (minutes * 60));
      return hours + ':' + ((minutes < 10) ? '0' + minutes : minutes) + ':' + ((seconds < 10) ? '0' + seconds : seconds);
    }
    function unformatTime(string) {
      var timeArray = string.split(':'),
          seconds = 0;
      if (timeArray.length === 3) {
        seconds = seconds + (Number(timeArray[0]) * 60 * 60);
        seconds = seconds + (Number(timeArray[1]) * 60);
        seconds = seconds + Number(timeArray[2]);
      } else if (timeArray.length === 2) {
        seconds = seconds + (Number(timeArray[0]) * 60);
        seconds = seconds + Number(timeArray[1]);
      }
      return Number(seconds);
    }
    function formatNumber(value, format, roundingFunction) {
      var negP = false,
          signed = false,
          optDec = false,
          abbr = '',
          abbrK = false,
          abbrM = false,
          abbrB = false,
          abbrT = false,
          abbrForce = false,
          bytes = '',
          ord = '',
          abs = Math.abs(value),
          suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          min,
          max,
          power,
          w,
          precision,
          thousands,
          d = '',
          neg = false;
      if (value === 0 && zeroFormat !== null) {
        return zeroFormat;
      } else {
        if (format.indexOf('(') > -1) {
          negP = true;
          format = format.slice(1, -1);
        } else if (format.indexOf('+') > -1) {
          signed = true;
          format = format.replace(/\+/g, '');
        }
        if (format.indexOf('a') > -1) {
          abbrK = format.indexOf('aK') >= 0;
          abbrM = format.indexOf('aM') >= 0;
          abbrB = format.indexOf('aB') >= 0;
          abbrT = format.indexOf('aT') >= 0;
          abbrForce = abbrK || abbrM || abbrB || abbrT;
          if (format.indexOf(' a') > -1) {
            abbr = ' ';
            format = format.replace(' a', '');
          } else {
            format = format.replace('a', '');
          }
          if (abs >= Math.pow(10, 12) && !abbrForce || abbrT) {
            abbr = abbr + languages[currentLanguage].abbreviations.trillion;
            value = value / Math.pow(10, 12);
          } else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9) && !abbrForce || abbrB) {
            abbr = abbr + languages[currentLanguage].abbreviations.billion;
            value = value / Math.pow(10, 9);
          } else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6) && !abbrForce || abbrM) {
            abbr = abbr + languages[currentLanguage].abbreviations.million;
            value = value / Math.pow(10, 6);
          } else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3) && !abbrForce || abbrK) {
            abbr = abbr + languages[currentLanguage].abbreviations.thousand;
            value = value / Math.pow(10, 3);
          }
        }
        if (format.indexOf('b') > -1) {
          if (format.indexOf(' b') > -1) {
            bytes = ' ';
            format = format.replace(' b', '');
          } else {
            format = format.replace('b', '');
          }
          for (power = 0; power <= suffixes.length; power++) {
            min = Math.pow(1024, power);
            max = Math.pow(1024, power + 1);
            if (value >= min && value < max) {
              bytes = bytes + suffixes[power];
              if (min > 0) {
                value = value / min;
              }
              break;
            }
          }
        }
        if (format.indexOf('o') > -1) {
          if (format.indexOf(' o') > -1) {
            ord = ' ';
            format = format.replace(' o', '');
          } else {
            format = format.replace('o', '');
          }
          ord = ord + languages[currentLanguage].ordinal(value);
        }
        if (format.indexOf('[.]') > -1) {
          optDec = true;
          format = format.replace('[.]', '.');
        }
        w = value.toString().split('.')[0];
        precision = format.split('.')[1];
        thousands = format.indexOf(',');
        if (precision) {
          if (precision.indexOf('[') > -1) {
            precision = precision.replace(']', '');
            precision = precision.split('[');
            d = toFixed(value, (precision[0].length + precision[1].length), roundingFunction, precision[1].length);
          } else {
            d = toFixed(value, precision.length, roundingFunction);
          }
          w = d.split('.')[0];
          if (d.split('.')[1].length) {
            d = languages[currentLanguage].delimiters.decimal + d.split('.')[1];
          } else {
            d = '';
          }
          if (optDec && Number(d.slice(1)) === 0) {
            d = '';
          }
        } else {
          w = toFixed(value, null, roundingFunction);
        }
        if (w.indexOf('-') > -1) {
          w = w.slice(1);
          neg = true;
        }
        if (thousands > -1) {
          w = w.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + languages[currentLanguage].delimiters.thousands);
        }
        if (format.indexOf('.') === 0) {
          w = '';
        }
        return ((negP && neg) ? '(' : '') + ((!negP && neg) ? '-' : '') + ((!neg && signed) ? '+' : '') + w + d + ((ord) ? ord : '') + ((abbr) ? abbr : '') + ((bytes) ? bytes : '') + ((negP && neg) ? ')' : '');
      }
    }
    numeral = function(input) {
      if (numeral.isNumeral(input)) {
        input = input.value();
      } else if (input === 0 || typeof input === 'undefined') {
        input = 0;
      } else if (!Number(input)) {
        input = numeral.fn.unformat(input);
      }
      return new Numeral(Number(input));
    };
    numeral.version = VERSION;
    numeral.isNumeral = function(obj) {
      return obj instanceof Numeral;
    };
    numeral.language = function(key, values) {
      if (!key) {
        return currentLanguage;
      }
      if (key && !values) {
        if (!languages[key]) {
          throw new Error('Unknown language : ' + key);
        }
        currentLanguage = key;
      }
      if (values || !languages[key]) {
        loadLanguage(key, values);
      }
      return numeral;
    };
    numeral.languageData = function(key) {
      if (!key) {
        return languages[currentLanguage];
      }
      if (!languages[key]) {
        throw new Error('Unknown language : ' + key);
      }
      return languages[key];
    };
    numeral.language('en', {
      delimiters: {
        thousands: ',',
        decimal: '.'
      },
      abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
      },
      ordinal: function(number) {
        var b = number % 10;
        return (~~(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
      },
      currency: {symbol: '$'}
    });
    numeral.zeroFormat = function(format) {
      zeroFormat = typeof(format) === 'string' ? format : null;
    };
    numeral.defaultFormat = function(format) {
      defaultFormat = typeof(format) === 'string' ? format : '0.0';
    };
    function loadLanguage(key, values) {
      languages[key] = values;
    }
    if ('function' !== typeof Array.prototype.reduce) {
      Array.prototype.reduce = function(callback, opt_initialValue) {
        'use strict';
        if (null === this || 'undefined' === typeof this) {
          throw new TypeError('Array.prototype.reduce called on null or undefined');
        }
        if ('function' !== typeof callback) {
          throw new TypeError(callback + ' is not a function');
        }
        var index,
            value,
            length = this.length >>> 0,
            isValueSet = false;
        if (1 < arguments.length) {
          value = opt_initialValue;
          isValueSet = true;
        }
        for (index = 0; length > index; ++index) {
          if (this.hasOwnProperty(index)) {
            if (isValueSet) {
              value = callback(value, this[index], index, this);
            } else {
              value = this[index];
              isValueSet = true;
            }
          }
        }
        if (!isValueSet) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
        return value;
      };
    }
    function multiplier(x) {
      var parts = x.toString().split('.');
      if (parts.length < 2) {
        return 1;
      }
      return Math.pow(10, parts[1].length);
    }
    function correctionFactor() {
      var args = Array.prototype.slice.call(arguments);
      return args.reduce(function(prev, next) {
        var mp = multiplier(prev),
            mn = multiplier(next);
        return mp > mn ? mp : mn;
      }, -Infinity);
    }
    numeral.fn = Numeral.prototype = {
      clone: function() {
        return numeral(this);
      },
      format: function(inputString, roundingFunction) {
        return formatNumeral(this, inputString ? inputString : defaultFormat, (roundingFunction !== undefined) ? roundingFunction : Math.round);
      },
      unformat: function(inputString) {
        if (Object.prototype.toString.call(inputString) === '[object Number]') {
          return inputString;
        }
        return unformatNumeral(this, inputString ? inputString : defaultFormat);
      },
      value: function() {
        return this._value;
      },
      valueOf: function() {
        return this._value;
      },
      set: function(value) {
        this._value = Number(value);
        return this;
      },
      add: function(value) {
        var corrFactor = correctionFactor.call(null, this._value, value);
        function cback(accum, curr, currI, O) {
          return accum + corrFactor * curr;
        }
        this._value = [this._value, value].reduce(cback, 0) / corrFactor;
        return this;
      },
      subtract: function(value) {
        var corrFactor = correctionFactor.call(null, this._value, value);
        function cback(accum, curr, currI, O) {
          return accum - corrFactor * curr;
        }
        this._value = [value].reduce(cback, this._value * corrFactor) / corrFactor;
        return this;
      },
      multiply: function(value) {
        function cback(accum, curr, currI, O) {
          var corrFactor = correctionFactor(accum, curr);
          return (accum * corrFactor) * (curr * corrFactor) / (corrFactor * corrFactor);
        }
        this._value = [this._value, value].reduce(cback, 1);
        return this;
      },
      divide: function(value) {
        function cback(accum, curr, currI, O) {
          var corrFactor = correctionFactor(accum, curr);
          return (accum * corrFactor) / (curr * corrFactor);
        }
        this._value = [this._value, value].reduce(cback);
        return this;
      },
      difference: function(value) {
        return Math.abs(numeral(this._value).subtract(value).value());
      }
    };
    if (hasModule) {
      module.exports = numeral;
    }
    if (typeof ender === 'undefined') {
      this['numeral'] = numeral;
    }
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return numeral;
      });
    }
  }).call(this);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:numeral@1.5.3", ["npm:numeral@1.5.3/numeral"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('npm:numeral@1.5.3/numeral');
  global.define = __define;
  return module.exports;
});

System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/value-converters/percent-format', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:numeral@1.5.3'], function (_export) {
  var _createClass, _classCallCheck, numeral, PercentFormatValueConverter;

  return {
    setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
      _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
    }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
      _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
    }, function (_npmNumeral153) {
      numeral = _npmNumeral153['default'];
    }],
    execute: function () {
      'use strict';

      PercentFormatValueConverter = (function () {
        function PercentFormatValueConverter() {
          _classCallCheck(this, PercentFormatValueConverter);
        }

        _createClass(PercentFormatValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return numeral(value).format('(0.00%)');
          }
        }]);

        return PercentFormatValueConverter;
      })();

      _export('PercentFormatValueConverter', PercentFormatValueConverter);
    }
  };
});

System.register("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/custom-attributes/sec-type", ["npm:babel-runtime@5.8.24/helpers/create-class", "npm:babel-runtime@5.8.24/helpers/class-call-check"], function (_export) {
  var _createClass, _classCallCheck, SecTypeCustomAttribute;

  return {
    setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
      _createClass = _npmBabelRuntime5824HelpersCreateClass["default"];
    }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
      _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck["default"];
    }],
    execute: function () {
      /*import {inject, customAttribute} from 'aurelia-framework';
      
      @customAttribute('sec-type')
      @inject(Element)
      
      export class SecType {
        constructor(element) {
          this.element = element;
        }
      
        valueChanged(newValue){
          this.element.setAttribute('sec-type', newValue);
        }
      }
      */
      "use strict";

      SecTypeCustomAttribute = (function () {
        _createClass(SecTypeCustomAttribute, null, [{
          key: "inject",
          value: [Element],
          enumerable: true
        }]);

        function SecTypeCustomAttribute(element) {
          _classCallCheck(this, SecTypeCustomAttribute);

          this.element = element;
        }

        _createClass(SecTypeCustomAttribute, [{
          key: "valueChanged",
          value: function valueChanged(newValue, oldValue) {

            // this.element.secType = newValue;

            // TODO: there should be a more aurelia-esque to do this
            if (this.element.au.controller && this.element.au.controller.viewModel) {
              this.element.au.controller.viewModel.secType = newValue;
            }
          }
        }]);

        return SecTypeCustomAttribute;
      })();

      _export("SecTypeCustomAttribute", SecTypeCustomAttribute);
    }
  };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/ten-k-growth-chart/ten-k-growth-chart.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n\n    <require from=\"../../../lib/custom-attributes/endpoint\"></require>\n    <!-- <require from=\"../../../lib/components/COMPANY-tooltip-carousel/COMPANY-tooltip-carousel\"></require> -->\n    <require from=\"../../../lib/components/COMPANY-tooltip-definitions/COMPANY-tooltip-definitions\"></require>\n\n    <COMPANY-tooltip-definitions\n        endpoint=${vm.tooltipUrl}\n        tt-target-selector=\".ten-k-growth-chart__heading .dd2c-page__tool-tip\"\n        tt-min-width=\"400px\"\n        tt-max-width=\"500px\"\n        tt-position=\"top\"\n        tt-bounding-selector=\"body\"\n    >\n    </COMPANY-tooltip-definitions>\n\n    <div class=\"ten-k-growth-chart__heading dd2c-page__content-3\">\n        <h3 class=\"dd2c-page__heading\">${title} <span class=\"dd2c-page__tool-tip\"></span></h3>\n    </div>\n    <div class=\"ten-k-growth-chart__image dd2c-page__content-wrapper\">\n        <img if.bind=\"vm.isDataAvailable\" id=\"10k-growth-chart\" src=\"${tenKGrowthChartURL}\" />\n        <div if.bind=\"!vm.isDataAvailable\" class=\"ten-k-growth-chart__not-available dd2c-page__background\">${vm.content.notAvailable}</div>\n    </div>\n</template>";
});

_removeDefine();
})();
System.register('COMPANY-github:Voya/dd2c-ui@master/lib/services/generic-service', ['npm:whatwg-fetch@0.11.1', 'COMPANY-github:Voya/dd2c-ui@master/lib/services-cache', 'COMPANY-github:Voya/dd2c-ui@master/lib/services/service-overrides'], function (_export) {
    /* globals Request, Headers */

    'use strict';

    var getFromCache, addToCache, existsInCache, ServiceOverrides, serviceOverrides;

    _export('fetchData', fetchData);

    // function checkStatus(response) {
    //   if (response.status >= 200 && response.status < 300) {
    //     return response;
    //   } else {
    //     var error = new Error(response.statusText);
    //     error.response = response;
    //     throw error;
    //   }
    // }

    // function parseJSON(response) {
    //   return response.json();
    // }

    // export function sessionToken() {
    //     return fetch(SESSION_TOKEN_URL, {
    //         headers: new Headers({'X-Requested-By' : 'myCOMPANY'});
    //     }).then(response => { return response.json()})
    //         .then(data => {
    //             return data;
    //         });
    // }

    // TODO: add functionality for a second parameter that does a find/replace in the endpoint

    function fetchData(endpoint) {
        var cacheId = endpoint;

        cacheId = serviceOverrides.overrideIfEnabled(cacheId);

        if (existsInCache(cacheId)) {
            return getFromCache(cacheId);
        }

        var genericRequest = new Request(cacheId, {
            headers: new Headers({ 'X-Requested-By': 'myCOMPANY' })
        });

        return fetch(genericRequest).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
    }

    return {
        setters: [function (_npmWhatwgFetch0111) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesCache) {
            getFromCache = _COMPANYGithubVoyaDd2cUiMasterLibServicesCache.getFromCache;
            addToCache = _COMPANYGithubVoyaDd2cUiMasterLibServicesCache.addToCache;
            existsInCache = _COMPANYGithubVoyaDd2cUiMasterLibServicesCache.existsInCache;
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesServiceOverrides) {
            ServiceOverrides = _COMPANYGithubVoyaDd2cUiMasterLibServicesServiceOverrides['default'];
        }],
        execute: function () {
            serviceOverrides = new ServiceOverrides();
        }
    };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/ten-k-growth-chart/ten-k-growth-chart', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:whatwg-fetch@0.11.1', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/services', 'COMPANY-github:Voya/dd2c-ui@master/lib/services/generic-service', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/content/en'], function (_export) {
    var _createClass, _classCallCheck, sessionToken, symbolDetails, TOOLTIP_ST_TENK, TOOLTIP_MF_TENK, TOOLTIP_ETF_TENK, validateData, CONTENT, SPX, TEN_K_GROWTH_CHART_URL, breakpoints, TenKGrowthChart;

    return {
        setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
            _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_npmWhatwgFetch0111) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices) {
            sessionToken = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.sessionToken;
            symbolDetails = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.symbolDetails;
            TOOLTIP_ST_TENK = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.TOOLTIP_ST_TENK;
            TOOLTIP_MF_TENK = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.TOOLTIP_MF_TENK;
            TOOLTIP_ETF_TENK = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.TOOLTIP_ETF_TENK;
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesGenericService) {
            validateData = _COMPANYGithubVoyaDd2cUiMasterLibServicesGenericService.validateData;
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonContentEn) {
            CONTENT = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonContentEn.CONTENT;
        }],
        execute: function () {
            'use strict';

            SPX = '111.10.SPX';
            TEN_K_GROWTH_CHART_URL = 'http://quotespeed.morningstar.com/apis/api.jsp?' + 'instid=VOYA&module=imagechart&Chart=tenYears' + '&cfg=ShowLG:1|ChartType:growth10|xlabelText:Year|' + 'yLabelText:Dollars|displayName:0,1|abbvYear:1|LineC:145a7b,73c5e6' + '&internval=m&h=325&qs_wsid=';
            breakpoints = {
                small: { breakpoint: 600, imageChartWidth: 450 },
                medium: { breakpoint: 800, imageChartWidth: 650 },
                large: { breakpoint: 1000, imageChartWidth: 800 },
                xlarge: { breakpoint: 1000, imageChartWidth: 1200 }
            };

            TenKGrowthChart = (function () {
                function TenKGrowthChart() {
                    _classCallCheck(this, TenKGrowthChart);

                    this.sessionID = '';
                    this.symbolValue = '';
                    this.ticker = '';
                    this.secType = '';
                    this.title = '';
                    this.tenKGrowthChartURL = '';
                    this.newTenKGrowthChartURL = '';

                    this.vm = {};
                    this.vm.isDataAvailable = true;
                    this.vm.content = CONTENT;
                    this.vm.responseStatus = '';
                }

                _createClass(TenKGrowthChart, [{
                    key: 'attached',
                    value: function attached() {
                        this.getSessionID();
                        this.getWindowWidth();
                        this.addListeners();
                        this.symbolValue = this.getSymbolFromQueryString();
                    }
                }, {
                    key: 'addListeners',
                    value: function addListeners() {
                        var _this = this;

                        window.onresize = function () {
                            _this.getWindowWidth();
                        };
                    }
                }, {
                    key: 'getSessionID',
                    value: function getSessionID() {
                        var _this2 = this;

                        sessionToken().then(function (token) {
                            _this2.sessionID = token.sessionID;
                            _this2.getSymbolDetails();
                        });
                    }
                }, {
                    key: 'getSymbolFromQueryString',
                    value: function getSymbolFromQueryString() {
                        var getQueryString = function getQueryString(field, url) {
                            var href = url ? url : window.location.href;
                            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
                            var string = reg.exec(href);

                            return string ? string[1] : null;
                        };

                        return getQueryString('symbol') || '';
                    }
                }, {
                    key: 'getSymbolDetails',
                    value: function getSymbolDetails() {
                        var _this3 = this;

                        symbolDetails(this.symbolValue).then(function (details) {
                            _this3.ticker = details[0].ticker;
                            _this3.secType = details[0].secType;

                            _this3.setTitle(_this3.secType);
                            _this3.validateURL();
                        });
                    }
                }, {
                    key: 'setTitle',
                    value: function setTitle(secType) {
                        if (secType === 'ST') {
                            this.title = this.vm.content.tenKGrowthChart.historicalGrowthTitle;
                            this.vm.tooltipUrl = TOOLTIP_ST_TENK;
                        } else if (secType === 'MF') {
                            this.title = this.vm.content.tenKGrowthChart.insightsHistoricalGrowthTitle;
                            this.vm.tooltipUrl = TOOLTIP_MF_TENK;
                        } else if (secType === 'ETF') {
                            this.title = this.vm.content.tenKGrowthChart.insightsHistoricalGrowthTitle;
                            this.vm.tooltipUrl = TOOLTIP_ETF_TENK;
                        }
                    }
                }, {
                    key: 'validateURL',
                    value: function validateURL() {
                        var _this4 = this;

                        this.getWindowWidth();

                        this.vm.responseStatus = fetch(this.tenKGrowthChartURL).then(function (response) {
                            _this4.vm.isDataAvailable = response.status === 200;
                        });
                    }
                }, {
                    key: 'getWindowWidth',
                    value: function getWindowWidth() {
                        var windowWidth = window.innerWidth;
                        this.setChartWidth(windowWidth);
                    }
                }, {
                    key: 'setChartWidth',
                    value: function setChartWidth(windowWidth) {
                        var imageChartWidth = this.getChartWidth(windowWidth);

                        this.tenKGrowthChartURL = TEN_K_GROWTH_CHART_URL + this.sessionID + '&Chart=tenYears&ticker=' + this.ticker + '|' + SPX + '&w=' + imageChartWidth;
                    }
                }, {
                    key: 'getChartWidth',
                    value: function getChartWidth(windowWidth) {
                        switch (true) {
                            case windowWidth <= breakpoints.small.breakpoint:
                                return breakpoints.small.imageChartWidth;
                            case windowWidth > breakpoints.small.breakpoint && windowWidth <= breakpoints.medium.breakpoint:
                                return breakpoints.medium.imageChartWidth;
                            case windowWidth > breakpoints.medium.breakpoint && windowWidth <= breakpoints.large.breakpoint:
                                return breakpoints.large.imageChartWidth;
                            case windowWidth >= breakpoints.xlarge.breakpoint:
                                return breakpoints.xlarge.imageChartWidth;
                            default:
                                return breakpoints.xlarge.imageChartWidth;
                        }
                    }
                }]);

                return TenKGrowthChart;
            })();

            _export('TenKGrowthChart', TenKGrowthChart);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile-stock.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n\n    <require from=\"../value-converters/percent-format\"></require>\n    <require from=\"../../../lib/custom-attributes/endpoint\"></require>\n    <!-- <require from=\"../../../lib/components/COMPANY-tooltip-carousel/COMPANY-tooltip-carousel\"></require> -->\n    <require from=\"../../../lib/components/COMPANY-tooltip-definitions/COMPANY-tooltip-definitions\"></require>\n\n    <div class=\"COMPANY-slick-carousel__layout-size-${layoutSize} COMPANY-slick-carousel security-profile__container security-profile__layout-size-${layoutSize} security-profile-carousel\" if.bind=\"symbolValue\">\n\n        <COMPANY-tooltip-definitions\n            endpoint=${vm.tooltipUrlSlide1}\n            tt-target-selector=\".i-security-profile__st-slide-1 .dd2c-page__tool-tip\"\n            tt-min-width=\"400px\"\n            tt-max-width=\"500px\"\n            tt-position=\"right\"\n            tt-bounding-selector=\"body\"\n        >\n        </COMPANY-tooltip-definitions>\n\n        <COMPANY-tooltip-definitions\n            endpoint=${vm.tooltipUrlSlide2}\n            tt-target-selector=\".i-security-profile__st-slide-2 .dd2c-page__tool-tip\"\n            tt-min-width=\"400px\"\n            tt-max-width=\"500px\"\n            tt-position=\"right\"\n            tt-bounding-selector=\"body\"\n        >\n        </COMPANY-tooltip-definitions>\n\n        <div class=\"slider-nav-container \">\n            <div class=\"i-sec-profile-slider-nav slider-nav\"></div>\n        </div>\n        <div class=\"carousel-items-container\">\n            <div class=\"security-profile__slide i-security-profile__st-slide-1\">\n                <h3 class=\"dd2c-page__section-heading\">${content.stockProfile} <span class=\"dd2c-page__tool-tip\"></span></h3>\n                <div class=\"security-profile__details__section security-profile__details_col__width-wide\">\n                    <div class=\"details__row details__todays-price-range\">\n                        <label for=\"todaysPriceRange\" class=\"security-profile__details_col details__title\">${content.todaysPriceRange}</label>\n                        <div class=\"security-profile__details_col\">\n                            <input type=\"range\" disabled id=\"todaysPriceRange\" class=\"details__price-range\" min=\"${profile.todayLow}\" max=\"${profile.todayHigh}\" value=\"${profile.lastPrice}\">\n                            <div class=\"details__value details__value-low\">\n                                <span class=\"details__price\">$${profile.todayLow}</span>\n                                <span class=\"details__descriptor\">(Low)</span>\n                            </div>\n                            <div class=\"details__value details__value-high\">\n                                <span class=\"details__price\">$${profile.todayHigh}</span>\n                                <span class=\"details__descriptor\">(High)</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"details__row details__price-range details__52-week-price-range\">\n                        <label for=\"fiftyTwoWeekPriceRange\" class=\"security-profile__details_col details__title\">${content.fiftyTwoWeekPriceRange}</label>\n                        <div class=\"security-profile__details_col\">\n                            <input type=\"range\" disabled id=\"fiftyTwoWeekPriceRange\" class=\"details__price-range\" min=\"${profile.fiftyTwoWeekLow}\" max=\"${profile.fiftyTwoWeekHigh}\" value=\"${profile.lastPrice}\">\n                            <div class=\"details__value details__value-low\">\n                                <span class=\"details__price\">$${profile.fiftyTwoWeekLow}</span>\n                                <span class=\"details__descriptor\">(Low)</span>\n                            </div>\n                            <div class=\"details__value details__value-high\">\n                                <span class=\"details__price\">$${profile.fiftyTwoWeekHigh}</span>\n                                <span class=\"details__descriptor\">(High)</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"security-profile__details__section security-profile__details_col__width-narrow security-profile__details__section__sector-table table__col-2\">\n                    <table>\n                        <tr class=\"details__sector\">\n                            <td class=\"details__title\">${content.sector}</td>\n                            <td class=\"details__value\">${profile.sector}</td>\n                        </tr>\n                        <tr class=\"details__industry\">\n                            <td class=\"details__title\">${content.industry}</td>\n                            <td class=\"details__value\">${profile.industry}</td>\n                        </tr>\n                        <tr class=\"details__volume-average\">\n                            <td class=\"details__title\">${layoutSize === 'S' ? content.volumeAvgShort : content.volumeAvg}</td>\n                            <td class=\"details__value\">${profile.avgDailyVolume}</td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <div class=\"security-profile__slide i-security-profile__st-slide-2\">\n                <h3 class=\"dd2c-page__section-heading\">${content.valuation} <span class=\"dd2c-page__tool-tip\"></span></h3>\n                <div class=\"security-profile__details__section security-profile__details_col__width-wide\">\n                    <table class=\"details__valuation-table\" cellpadding=\"8\">\n                        <thead>\n                            <tr>\n                                <th></th>\n                                <th>${content.company}</th>\n                                <th>${content.industry}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td class=\"valuation-table__row-header\">${content.priceEarning}</td>\n                                <td class=\"valuation-table__row-value\">${profile.peRatioCompany}</td>\n                                <td class=\"valuation-table__row-value\">${profile.peRatioIndustry}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"valuation-table__row-header\">${content.priceBook}</td>\n                                <td class=\"valuation-table__row-value\">${profile.pbRatioCompany}</td>\n                                <td class=\"valuation-table__row-value\">${profile.pbRatioIndustry}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"valuation-table__row-header\">${content.priceSales}</td>\n                                <td class=\"valuation-table__row-value\">${profile.psRatioCompany}</td>\n                                <td class=\"valuation-table__row-value\">${profile.psRatioIndustry}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"valuation-table__row-header\">${content.divYield}</td>\n                                <td class=\"valuation-table__row-value\">${profile.dyRatioCompany}%</td>\n                                <td class=\"valuation-table__row-value\">${profile.dyRatioIndustry}%</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"security-profile__details__section security-profile__details_col__width-narrow\">\n                    <table class=\"security-profile__details__section__sector-table table__col-2\">\n                        <tbody>\n                            <tr class=\"details__mkt-capitalization\">\n                                <td class=\"details__title\">${content.mktCapitalization}</td>\n                                <td class=\"details__value\">$${profile.mktCapitalization}</td>\n                            </tr>\n                            <tr class=\"details__investment-style\">\n                                <td class=\"details__title\">${content.investmentStyle}</td>\n                                <td class=\"details__value\">\n                                    <div if.bind=\"profile.investmentStyle\" class=\"details__style-cube cube-${profile.investmentStyle}\"></div>\n                                    <span>${profile.investmentStyleVerbal}</span>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>";
});

_removeDefine();
})();
System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile-stock', ['npm:babel-runtime@5.8.24/helpers/define-decorated-property-descriptor', 'npm:babel-runtime@5.8.24/helpers/create-decorated-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:aurelia-framework@1.0.0-beta.1.2.2', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/services', 'npm:slick-carousel@1.6.0', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/content/en'], function (_export) {
    var _defineDecoratedPropertyDescriptor, _createDecoratedClass, _classCallCheck, bindable, inject, BindingEngine, TOOLTIP_ST_VALUATION, TOOLTIP_ST_PROFILE, CONTENT, SECURITY_PROFILE_STOCK_SELECTOR, CAROUSEL_SELECTOR, CAROUSEL_NAV_SELECTOR, SecurityProfileStock;

    return {
        setters: [function (_npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor) {
            _defineDecoratedPropertyDescriptor = _npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor['default'];
        }, function (_npmBabelRuntime5824HelpersCreateDecoratedClass) {
            _createDecoratedClass = _npmBabelRuntime5824HelpersCreateDecoratedClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_npmAureliaFramework100Beta122) {
            bindable = _npmAureliaFramework100Beta122.bindable;
            inject = _npmAureliaFramework100Beta122.inject;
            BindingEngine = _npmAureliaFramework100Beta122.BindingEngine;
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices) {
            TOOLTIP_ST_VALUATION = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.TOOLTIP_ST_VALUATION;
            TOOLTIP_ST_PROFILE = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.TOOLTIP_ST_PROFILE;
        }, function (_npmSlickCarousel160) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonContentEn) {
            CONTENT = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonContentEn.CONTENT;
        }],
        execute: function () {
            /*globals $ */

            'use strict';

            SECURITY_PROFILE_STOCK_SELECTOR = 'security-profile-stock';
            CAROUSEL_SELECTOR = SECURITY_PROFILE_STOCK_SELECTOR + ' ' + '.security-profile-carousel>.carousel-items-container';
            CAROUSEL_NAV_SELECTOR = SECURITY_PROFILE_STOCK_SELECTOR + ' ' + '.security-profile-carousel>.slider-nav-container>.i-sec-profile-slider-nav';

            SecurityProfileStock = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(SecurityProfileStock, [{
                    key: 'profile',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'symbolValue',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'layoutSize',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function SecurityProfileStock(bindingEngine) {
                    _classCallCheck(this, _SecurityProfileStock);

                    _defineDecoratedPropertyDescriptor(this, 'profile', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'symbolValue', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'layoutSize', _instanceInitializers);

                    this.content = CONTENT.securityProfile;

                    this.vm = {};

                    // console.log('TOOLTIP_ST_VALUATION', TOOLTIP_ST_VALUATION);

                    this.vm.tooltipUrlSlide1 = TOOLTIP_ST_PROFILE;
                    this.vm.tooltipUrlSlide2 = TOOLTIP_ST_VALUATION;
                }

                _createDecoratedClass(SecurityProfileStock, [{
                    key: 'attached',
                    value: function attached() {

                        this.activateSlick();
                    }
                }, {
                    key: 'detached',
                    value: function detached() {
                        // template for removing event handlers
                    }
                }, {
                    key: 'activateSlick',
                    value: function activateSlick() {
                        var el = $(CAROUSEL_SELECTOR);
                        if (el.length && el.slick) {
                            el.slick({
                                dots: true,
                                infinite: true,
                                speed: 500,
                                slidesToScroll: 1,
                                prevArrow: '<span class="slick-prev"></span>',
                                nextArrow: '<span class="slick-next"></span>',
                                appendArrows: $(CAROUSEL_NAV_SELECTOR),
                                appendDots: $(CAROUSEL_NAV_SELECTOR)
                            });
                        }
                    }
                }], null, _instanceInitializers);

                var _SecurityProfileStock = SecurityProfileStock;
                SecurityProfileStock = inject(BindingEngine)(SecurityProfileStock) || SecurityProfileStock;
                return SecurityProfileStock;
            })();

            _export('SecurityProfileStock', SecurityProfileStock);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile-etf.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n\n    <require from=\"../value-converters/percent-format\"></require>\n\n    <require from=\"../../../lib/custom-attributes/endpoint\"></require>\n    <!-- <require from=\"../../../lib/components/COMPANY-tooltip-carousel/COMPANY-tooltip-carousel\"></require> -->\n    <require from=\"../../../lib/components/COMPANY-tooltip-definitions/COMPANY-tooltip-definitions\"></require>\n\n        <COMPANY-tooltip-definitions\n            endpoint=${vm.tooltipUrlSlide1}\n            tt-target-selector=\".i-security-profile__etf-slide-1 .dd2c-page__tool-tip\"\n            tt-min-width=\"400px\"\n            tt-max-width=\"500px\"\n            tt-position=\"right\"\n            tt-bounding-selector=\"body\"\n        >\n        </COMPANY-tooltip-definitions>\n\n        <COMPANY-tooltip-definitions\n            endpoint=${vm.tooltipUrlSlide2}\n            tt-target-selector=\".i-security-profile__etf-slide-2 .dd2c-page__tool-tip\"\n            tt-min-width=\"400px\"\n            tt-max-width=\"500px\"\n            tt-position=\"right\"\n            tt-bounding-selector=\"body\"\n        >\n        </COMPANY-tooltip-definitions>\n\n    <div class=\"COMPANY-slick-carousel__layout-size-${layoutSize} COMPANY-slick-carousel security-profile__container security-profile__layout-size-${layoutSize} security-profile-carousel\" if.bind=\"symbolValue\">\n        <div class=\"slider-nav-container\">\n            <div class=\"i-sec-profile-slider-nav slider-nav\"></div>\n        </div>\n        <div class=\"carousel-items-container\">\n            <div class=\"security-profile__slide i-security-profile__etf-slide-1\">\n                <h3 class=\"dd2c-page__section-heading\">${content.etfProfile} <span class=\"dd2c-page__tool-tip\"></span></h3>\n                <div class=\"security-profile__details__section security-profile__details_col__width-wide\">\n                    <div class=\"details__row details__todays-price-range\">\n                        <label for=\"todaysPriceRange\" class=\"security-profile__details_col details__title\">${content.todaysPriceRange}</label>\n                        <div class=\"security-profile__details_col\">\n                            <input type=\"range\" disabled id=\"todaysPriceRange\" class=\"details__price-range\" min=\"${profile.todayLow}\" max=\"${profile.todayHigh}\" value=\"${profile.lastPrice}\">\n                            <div class=\"details__value details__value-low\">\n                                <span class=\"details__price\">$${profile.todayLow}</span>\n                                <span class=\"details__descriptor\">(Low)</span>\n                            </div>\n                            <div class=\"details__value details__value-high\">\n                                <span class=\"details__price\">$${profile.todayHigh}</span>\n                                <span class=\"details__descriptor\">(High)</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"details__row details__price-range details__52-week-price-range\">\n                        <label for=\"fiftyTwoWeekPriceRange\" class=\"security-profile__details_col details__title\">${content.fiftyTwoWeekPriceRange}</label>\n                        <div class=\"security-profile__details_col\">\n                            <input type=\"range\" disabled id=\"fiftyTwoWeekPriceRange\" class=\"details__price-range\" min=\"${profile.fiftyTwoWeekLow}\" max=\"${profile.fiftyTwoWeekHigh}\" value=\"${profile.lastPrice}\">\n                            <div class=\"details__value details__value-low\">\n                                <span class=\"details__price\">$${profile.fiftyTwoWeekLow}</span>\n                                <span class=\"details__descriptor\">(Low)</span>\n                            </div>\n                            <div class=\"details__value details__value-high\">\n                                <span class=\"details__price\">$${profile.fiftyTwoWeekHigh}</span>\n                                <span class=\"details__descriptor\">(High)</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"security-profile__details__section security-profile__details_col__width-narrow security-profile__details__section__sector-table table__col-2\">\n                    <table>\n                        <tr class=\"details__sector\">\n                            <td class=\"details__title\">${content.expenseRatio }</td>\n                            <td class=\"details__value\">${profile.expenseRatio }%</td>\n                        </tr>\n                        <tr class=\"details__industry\">\n                            <td class=\"details__title\">${content.category}</td>\n                            <td class=\"details__value\">${profile.category}</td>\n                        </tr>\n                        <tr class=\"details__volume-average\">\n                            <td class=\"details__title\">${layoutSize === 'S' ? content.volumeAvgShort : content.volumeAvg}</td>\n                            <td class=\"details__value\">${profile.avgDailyVolume}</td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <div class=\"security-profile__slide  i-security-profile__etf-slide-2\">\n                <h3 class=\"dd2c-page__section-heading\">${content.morningstarStats} <span class=\"dd2c-page__tool-tip\"></span></h3>\n                <div class=\"security-profile__details__section security-profile__details_col\">\n                    <table class=\"security-profile__details__section__sector-table table__col-2\">\n                        <tbody>\n                            <tr class=\"details__mkt-capitalization\">\n                                <td class=\"details__title\">${content.totalAssets}</td>\n                                <td class=\"details__value\">$${profile.totalAssets}</td>\n                            </tr>\n                            <tr class=\"details__investment-style\">\n                                <td class=\"details__title\">${content.investmentStyle}</td>\n                                <td class=\"details__value\">\n                                    <div if.bind=\"profile.investmentStyle\" class=\"details__style-cube cube-${profile.investmentStyle}\"></div>\n                                    <span>${profile.investmentStyleVerbal}</span>\n                                </td>\n                            </tr>\n\n                        </tbody><tr class=\"details__fixed-income-style\">\n                        <td class=\"details__title\">${content.fixedIncomeStyle}</td>\n                        <td class=\"details__value\">\n                            <div if.bind=\"profile.fixedIncomeStyle\" class=\"details__style-cube cube-${profile.fixedIncomeStyle}\"></div>\n                            <span>${profile.fixedIncomeStyleVerbal}</span>\n                        </td>\n                    </tr>\n                    </table>\n                </div>\n                <div class=\"security-profile__details__section security-profile__details_col\">\n                    <table class=\"security-profile__details__section__sector-table table__col-2\">\n                        <tbody>\n                            <tr class=\"details__mkt-capitalization\">\n                                <td class=\"details__title\">${content.riskComparedToCategory}</td>\n                                <td class=\"details__value\">${profile.comparativeRisk}</td>\n                            </tr>\n                            <tr class=\"details__investment-style\">\n                                <td class=\"details__title\">${content.returnComparedToCategory}</td>\n                                <td class=\"details__value\">${profile.comparativeReturn}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>";
});

_removeDefine();
})();
System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile-etf', ['npm:babel-runtime@5.8.24/helpers/define-decorated-property-descriptor', 'npm:babel-runtime@5.8.24/helpers/create-decorated-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:aurelia-framework@1.0.0-beta.1.2.2', 'npm:slick-carousel@1.6.0', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/services', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/content/en'], function (_export) {
    var _defineDecoratedPropertyDescriptor, _createDecoratedClass, _classCallCheck, bindable, inject, BindingEngine, TOOLTIP_ETF_PROFILE, TOOLTIP_ETF_STATS, CONTENT, SECURITY_PROFILE_ETF_SELECTOR, CAROUSEL_SELECTOR, CAROUSEL_NAV_SELECTOR, SecurityProfileEtf;

    return {
        setters: [function (_npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor) {
            _defineDecoratedPropertyDescriptor = _npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor['default'];
        }, function (_npmBabelRuntime5824HelpersCreateDecoratedClass) {
            _createDecoratedClass = _npmBabelRuntime5824HelpersCreateDecoratedClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_npmAureliaFramework100Beta122) {
            bindable = _npmAureliaFramework100Beta122.bindable;
            inject = _npmAureliaFramework100Beta122.inject;
            BindingEngine = _npmAureliaFramework100Beta122.BindingEngine;
        }, function (_npmSlickCarousel160) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices) {
            TOOLTIP_ETF_PROFILE = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.TOOLTIP_ETF_PROFILE;
            TOOLTIP_ETF_STATS = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.TOOLTIP_ETF_STATS;
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonContentEn) {
            CONTENT = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonContentEn.CONTENT;
        }],
        execute: function () {
            'use strict';

            SECURITY_PROFILE_ETF_SELECTOR = 'security-profile-etf';
            CAROUSEL_SELECTOR = '.security-profile-carousel .carousel-items-container';
            CAROUSEL_NAV_SELECTOR = SECURITY_PROFILE_ETF_SELECTOR + ' ' + '.i-sec-profile-slider-nav';

            SecurityProfileEtf = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(SecurityProfileEtf, [{
                    key: 'profile',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'symbolValue',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'layoutSize',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function SecurityProfileEtf(bindingEngine) {
                    _classCallCheck(this, _SecurityProfileEtf);

                    _defineDecoratedPropertyDescriptor(this, 'profile', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'symbolValue', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'layoutSize', _instanceInitializers);

                    this.content = CONTENT.securityProfile;

                    this.vm = {};
                    this.vm.tooltipUrlSlide1 = TOOLTIP_ETF_PROFILE;
                    this.vm.tooltipUrlSlide2 = TOOLTIP_ETF_STATS;
                }

                _createDecoratedClass(SecurityProfileEtf, [{
                    key: 'attached',
                    value: function attached() {
                        this.activateSlick();

                        this.profile.fixedIncomeStyleVerbal = this.profile.fixedIncomeStyleVerbal.length ? this.profile.fixedIncomeStyleVerbal : this.content.notAvailableAbb;
                    }
                }, {
                    key: 'detached',
                    value: function detached() {
                        // template for removing event handlers
                        // this.subscription1()
                    }
                }, {
                    key: 'activateSlick',
                    value: function activateSlick() {
                        var el = $(CAROUSEL_SELECTOR);
                        if (el.length && el.slick) {
                            el.slick({
                                dots: true,
                                infinite: true,
                                speed: 500,
                                slidesToScroll: 1,
                                prevArrow: '<span class="slick-prev"></span>',
                                nextArrow: '<span class="slick-next"></span>',
                                appendArrows: $(CAROUSEL_NAV_SELECTOR),
                                appendDots: $(CAROUSEL_NAV_SELECTOR)
                            });
                        }
                    }
                }], null, _instanceInitializers);

                var _SecurityProfileEtf = SecurityProfileEtf;
                SecurityProfileEtf = inject(BindingEngine)(SecurityProfileEtf) || SecurityProfileEtf;
                return SecurityProfileEtf;
            })();

            _export('SecurityProfileEtf', SecurityProfileEtf);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile-mf.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n\n    <require from=\"../value-converters/percent-format\"></require>\n\n    <require from=\"../../../lib/custom-attributes/endpoint\"></require>\n    <!-- <require from=\"../../../lib/components/COMPANY-tooltip-carousel/COMPANY-tooltip-carousel\"></require> -->\n    <require from=\"../../../lib/components/COMPANY-tooltip-definitions/COMPANY-tooltip-definitions\"></require>\n\n        <COMPANY-tooltip-definitions\n            endpoint=${vm.tooltipUrlSlide1}\n            tt-target-selector=\".i-security-profile__mf-slide-1 .dd2c-page__tool-tip\"\n            tt-min-width=\"400px\"\n            tt-max-width=\"500px\"\n            tt-position=\"right\"\n            tt-bounding-selector=\"body\"\n        >\n        </COMPANY-tooltip-definitions>\n\n        <COMPANY-tooltip-definitions\n            endpoint=${vm.tooltipUrlSlide2}\n            tt-target-selector=\".i-security-profile__mf-slide-2 .dd2c-page__tool-tip\"\n            tt-min-width=\"400px\"\n            tt-max-width=\"500px\"\n            tt-position=\"right\"\n            tt-bounding-selector=\"body\"\n        >\n        </COMPANY-tooltip-definitions>\n\n        <COMPANY-tooltip-definitions\n            endpoint=${vm.tooltipUrlSlide3}\n            tt-target-selector=\".i-security-profile__mf-slide-3 .dd2c-page__tool-tip\"\n            tt-min-width=\"400px\"\n            tt-max-width=\"500px\"\n            tt-position=\"right\"\n            tt-bounding-selector=\"body\"\n        >\n        </COMPANY-tooltip-definitions>\n\n    <div class=\"COMPANY-slick-carousel__layout-size-${layoutSize} COMPANY-slick-carousel security-profile__container security-profile__layout-size-${layoutSize} security-profile-carousel\" if.bind=\"symbolValue\">\n        <div class=\"slider-nav-container\">\n            <div class=\"i-sec-profile-slider-nav slider-nav\"></div>\n        </div>\n        <div class=\"carousel-items-container\">\n            <div class=\"security-profile__slide i-security-profile__mf-slide-1\">\n                <h3 class=\"dd2c-page__section-heading\">${content.mfProfile} <span class=\"dd2c-page__tool-tip\"></span></h3>\n                <div class=\"security-profile__details__section security-profile__details_col__width-wide\">\n                    <div class=\"details__row details__price-range details__52-week-price-range\">\n                        <label for=\"fiftyTwoWeekPriceRange\" class=\"security-profile__details_col details__title\">${content.fiftyTwoWeekPriceRange}</label>\n                        <div class=\"security-profile__details_col\">\n                            <input type=\"range\" disabled id=\"fiftyTwoWeekPriceRange\" class=\"details__price-range\" min=\"${profile.fiftyTwoWeekLow}\" max=\"${profile.fiftyTwoWeekHigh}\" value=\"${profile.lastPrice}\">\n                            <div class=\"details__value details__value-low\">\n                                <span class=\"details__price\">$${profile.fiftyTwoWeekLow}</span>\n                                <span class=\"details__descriptor\">(Low)</span>\n                            </div>\n                            <div class=\"details__value details__value-high\">\n                                <span class=\"details__price\">$${profile.fiftyTwoWeekHigh}</span>\n                                <span class=\"details__descriptor\">(High)</span>\n                            </div>\n                        </div>\n                    </div>\n                    <table class=\"security-profile__details__section__sector-table\">\n                        <tr class=\"\">\n                            <td class=\"details__title\">${content.salesLoad }</td>\n                            <td class=\"details__value\">${profile.salesLoad }</td>\n                        </tr>\n                        <tr class=\"\">\n                            <td class=\"details__title\">${content.portfolioTurnover }</td>\n                            <td class=\"details__value\">${profile.portfolioTurnover }%</td>\n                        </tr>\n                    </table>\n                </div>\n                <div class=\"security-profile__details__section security-profile__details_col__width-narrow security-profile__details__section-no-top-spacing\">\n                    <table class=\"security-profile__details__section__sector-table\">\n                        <tr class=\"\">\n                            <td class=\"details__title\">${content.expenseRatio }</td>\n                            <td class=\"details__value\">${profile.expenseRatio }%</td>\n                        </tr>\n                        <tr class=\"\">\n                            <td class=\"details__title\">${content.category}</td>\n                            <td class=\"details__value\">${profile.category}</td>\n                        </tr>\n                        <tr class=\"\">\n                            <td class=\"details__title\">${content.minimumInvestment}</td>\n                            <td class=\"details__value\">$${profile.minimumInvestment}</td>\n                        </tr>\n                        <tr class=\"\">\n                            <td class=\"details__title\" colspan=\"2\">\n                                <span class=\"${profile.purchaseDetails === 'Open' ? 'text__color-positive' : 'text__color-negative'}\">\n                                    ${profile.purchaseDetails}\n                                </span>\n                                ${content.toNewInvestors}</td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <div class=\"security-profile__slide i-security-profile__mf-slide-2\">\n                <h3 class=\"dd2c-page__section-heading\">${content.morningstarStats} <span class=\"dd2c-page__tool-tip\"></span></h3>\n                <div class=\"security-profile__details__section security-profile__details_col\">\n                    <table class=\"security-profile__details__section__sector-table table__col-2\">\n                        <tbody>\n                            <tr class=\"details__mkt-capitalization\">\n                                <td class=\"details__title\">${content.totalAssets}</td>\n                                <td class=\"details__value\">$${profile.totalAssets}</td>\n                            </tr>\n                            <tr class=\"details__investment-style\">\n                                <td class=\"details__title\">${content.investmentStyle}</td>\n                                <td class=\"details__value\">\n                                    <div if.bind=\"profile.investmentStyle\" class=\"details__style-cube cube-${profile.investmentStyle}\"></div>\n                                    <span>${profile.investmentStyleVerbal}</span>\n                                </td>\n                            </tr>\n                            <tr class=\"details__fixed-income-style\">\n                                <td class=\"details__title\">${content.fixedIncomeStyle}</td>\n                                <td class=\"details__value\">\n                                    <div if.bind=\"profile.fixedIncomeStyle\" class=\"details__style-cube cube-${profile.fixedIncomeStyle}\"></div>\n                                    <span>${profile.fixedIncomeStyleVerbal}</span>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"security-profile__details__section security-profile__details_col security-profile__details__section-no-top-spacing\">\n                    <table class=\"security-profile__details__section__sector-table table__col-2\">\n                        <tbody>\n                            <tr class=\"details__mkt-capitalization\">\n                                <td class=\"details__title\">${content.riskComparedToCategory}</td>\n                                <td class=\"details__value\">${profile.comparativeRisk}</td>\n                            </tr>\n                            <tr class=\"details__investment-style\">\n                                <td class=\"details__title\">${content.returnComparedToCategory}</td>\n                                <td class=\"details__value\">${profile.comparativeReturn}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"security-profile__slide i-security-profile__mf-slide-3\">\n                <h3 class=\"dd2c-page__section-heading\">${content.assetAllocation} <span class=\"dd2c-page__tool-tip\"></span></h3>\n\n                <div class=\"security-profile__details__section security-profile__details_col\">\n                    <table class=\"security-profile__details__section__sector-table table__col-2\">\n                        <tr class=\"\">\n                            <td class=\"details__title\">${content.cash }</td>\n                            <td class=\"details__value\">${profile.cashPercent }%</td>\n                        </tr>\n                        <tr class=\"\">\n                            <td class=\"details__title\">${content.usStock }</td>\n                            <td class=\"details__value\">${profile.usStockPercent }%</td>\n                        </tr>\n                        <tr class=\"\">\n                            <td class=\"details__title\">${content.nonUsStock }</td>\n                            <td class=\"details__value\">${profile.nonUSStockPercent }%</td>\n                        </tr>\n                    </table>\n                </div>\n                <div class=\"security-profile__details__section security-profile__details_col security security-profile__details__section-no-top-spacing\">\n                    <table class=\"security-profile__details__section__sector-table table__col-2\">\n                        <tr class=\"\">\n                            <td class=\"details__title\">${content.bond }</td>\n                            <td class=\"details__value\">${profile.bondPercent }%</td>\n                        </tr>\n                        <tr class=\"\">\n                            <td class=\"details__title\">${content.other}</td>\n                            <td class=\"details__value\">${profile.otherAllocation}%</td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>";
});

_removeDefine();
})();
System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile-mf', ['npm:babel-runtime@5.8.24/helpers/define-decorated-property-descriptor', 'npm:babel-runtime@5.8.24/helpers/create-decorated-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:aurelia-framework@1.0.0-beta.1.2.2', 'npm:slick-carousel@1.6.0', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/services', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/content/en'], function (_export) {
    var _defineDecoratedPropertyDescriptor, _createDecoratedClass, _classCallCheck, bindable, inject, BindingEngine, TOOLTIP_MF_PROFILE, TOOLTIP_MF_STATS, TOOLTIP_MF_ASSETS, CONTENT, SECURITY_PROFILE_MF_SELECTOR, CAROUSEL_SELECTOR, CAROUSEL_NAV_SELECTOR, SecurityProfileMf;

    return {
        setters: [function (_npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor) {
            _defineDecoratedPropertyDescriptor = _npmBabelRuntime5824HelpersDefineDecoratedPropertyDescriptor['default'];
        }, function (_npmBabelRuntime5824HelpersCreateDecoratedClass) {
            _createDecoratedClass = _npmBabelRuntime5824HelpersCreateDecoratedClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_npmAureliaFramework100Beta122) {
            bindable = _npmAureliaFramework100Beta122.bindable;
            inject = _npmAureliaFramework100Beta122.inject;
            BindingEngine = _npmAureliaFramework100Beta122.BindingEngine;
        }, function (_npmSlickCarousel160) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices) {
            TOOLTIP_MF_PROFILE = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.TOOLTIP_MF_PROFILE;
            TOOLTIP_MF_STATS = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.TOOLTIP_MF_STATS;
            TOOLTIP_MF_ASSETS = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.TOOLTIP_MF_ASSETS;
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonContentEn) {
            CONTENT = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonContentEn.CONTENT;
        }],
        execute: function () {
            'use strict';

            SECURITY_PROFILE_MF_SELECTOR = 'security-profile-mf';
            CAROUSEL_SELECTOR = '.security-profile-carousel .carousel-items-container';
            CAROUSEL_NAV_SELECTOR = SECURITY_PROFILE_MF_SELECTOR + ' ' + '.i-sec-profile-slider-nav';

            SecurityProfileMf = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(SecurityProfileMf, [{
                    key: 'profile',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'symbolValue',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'layoutSize',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function SecurityProfileMf(bindingEngine) {
                    _classCallCheck(this, _SecurityProfileMf);

                    _defineDecoratedPropertyDescriptor(this, 'profile', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'symbolValue', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'layoutSize', _instanceInitializers);

                    this.content = CONTENT.securityProfile;

                    this.vm = {};
                    this.vm.tooltipUrlSlide1 = TOOLTIP_MF_PROFILE;
                    this.vm.tooltipUrlSlide2 = TOOLTIP_MF_STATS;
                    this.vm.tooltipUrlSlide3 = TOOLTIP_MF_ASSETS;
                }

                _createDecoratedClass(SecurityProfileMf, [{
                    key: 'attached',
                    value: function attached() {
                        this.activateSlick();

                        this.profile.fixedIncomeStyleVerbal = this.profile.fixedIncomeStyleVerbal.length ? this.profile.fixedIncomeStyleVerbal : this.content.notAvailableAbb;
                    }
                }, {
                    key: 'detached',
                    value: function detached() {
                        // template for removing event handlers
                        // this.subscription1()
                    }
                }, {
                    key: 'activateSlick',
                    value: function activateSlick() {
                        var el = $(CAROUSEL_SELECTOR);
                        if (el.length && el.slick) {
                            el.slick({
                                dots: true,
                                infinite: true,
                                speed: 500,
                                slidesToScroll: 1,
                                prevArrow: '<span class="slick-prev"></span>',
                                nextArrow: '<span class="slick-next"></span>',
                                appendArrows: $(CAROUSEL_NAV_SELECTOR),
                                appendDots: $(CAROUSEL_NAV_SELECTOR)
                            });
                        }
                    }
                }], null, _instanceInitializers);

                var _SecurityProfileMf = SecurityProfileMf;
                SecurityProfileMf = inject(BindingEngine)(SecurityProfileMf) || SecurityProfileMf;
                return SecurityProfileMf;
            })();

            _export('SecurityProfileMf', SecurityProfileMf);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n    <require from=\"./security-profile-stock\"></require>\n    <require from=\"./security-profile-etf\"></require>\n    <require from=\"./security-profile-mf\"></require>\n\n    <div class=\"security-profile-content\">\n\n        <security-profile-stock if.bind=\"secType.stock\" layout-size.bind=\"layoutSize\" symbol-value.bind=\"symbolValue\" profile.bind=\"profile\"></security-profile-stock>\n\n        <security-profile-etf if.bind=\"secType.etf\" layout-size.bind=\"layoutSize\" symbol-value.bind=\"symbolValue\" profile.bind=\"profile\"></security-profile-etf>\n\n        <security-profile-mf if.bind=\"secType.mutualFund\" layout-size.bind=\"layoutSize\" symbol-value.bind=\"symbolValue\" profile.bind=\"profile\"></security-profile-mf>\n\n        <div if.bind=\"secType.notMatched\" class=\"security-profile__details__section details__title\">\n            ${content.secTypeNotUnderstood}\n        </div>\n\n    </div>\n\n</template>";
});

_removeDefine();
})();
System.registerDynamic("npm:slick-carousel@1.6.0/slick/slick", ["src/jquery-shim.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  (function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
      module.exports = factory($__require('src/jquery-shim.js'));
    } else {
      factory(jQuery);
    }
  }(function($) {
    'use strict';
    var Slick = window.Slick || {};
    Slick = (function() {
      var instanceUid = 0;
      function Slick(element, settings) {
        var _ = this,
            dataSettings;
        _.defaults = {
          accessibility: true,
          adaptiveHeight: false,
          appendArrows: $(element),
          appendDots: $(element),
          arrows: true,
          asNavFor: null,
          prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
          nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
          autoplay: false,
          autoplaySpeed: 3000,
          centerMode: false,
          centerPadding: '50px',
          cssEase: 'ease',
          customPaging: function(slider, i) {
            return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
          },
          dots: false,
          dotsClass: 'slick-dots',
          draggable: true,
          easing: 'linear',
          edgeFriction: 0.35,
          fade: false,
          focusOnSelect: false,
          infinite: true,
          initialSlide: 0,
          lazyLoad: 'ondemand',
          mobileFirst: false,
          pauseOnHover: true,
          pauseOnFocus: true,
          pauseOnDotsHover: false,
          respondTo: 'window',
          responsive: null,
          rows: 1,
          rtl: false,
          slide: '',
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: true,
          swipeToSlide: false,
          touchMove: true,
          touchThreshold: 5,
          useCSS: true,
          useTransform: true,
          variableWidth: false,
          vertical: false,
          verticalSwiping: false,
          waitForAnimate: true,
          zIndex: 1000
        };
        _.initials = {
          animating: false,
          dragging: false,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: false,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: false,
          unslicked: false
        };
        $.extend(_, _.initials);
        _.activeBreakpoint = null;
        _.animType = null;
        _.animProp = null;
        _.breakpoints = [];
        _.breakpointSettings = [];
        _.cssTransitions = false;
        _.focussed = false;
        _.interrupted = false;
        _.hidden = 'hidden';
        _.paused = true;
        _.positionProp = null;
        _.respondTo = null;
        _.rowCount = 1;
        _.shouldClick = true;
        _.$slider = $(element);
        _.$slidesCache = null;
        _.transformType = null;
        _.transitionType = null;
        _.visibilityChange = 'visibilitychange';
        _.windowWidth = 0;
        _.windowTimer = null;
        dataSettings = $(element).data('slick') || {};
        _.options = $.extend({}, _.defaults, settings, dataSettings);
        _.currentSlide = _.options.initialSlide;
        _.originalSettings = _.options;
        if (typeof document.mozHidden !== 'undefined') {
          _.hidden = 'mozHidden';
          _.visibilityChange = 'mozvisibilitychange';
        } else if (typeof document.webkitHidden !== 'undefined') {
          _.hidden = 'webkitHidden';
          _.visibilityChange = 'webkitvisibilitychange';
        }
        _.autoPlay = $.proxy(_.autoPlay, _);
        _.autoPlayClear = $.proxy(_.autoPlayClear, _);
        _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
        _.changeSlide = $.proxy(_.changeSlide, _);
        _.clickHandler = $.proxy(_.clickHandler, _);
        _.selectHandler = $.proxy(_.selectHandler, _);
        _.setPosition = $.proxy(_.setPosition, _);
        _.swipeHandler = $.proxy(_.swipeHandler, _);
        _.dragHandler = $.proxy(_.dragHandler, _);
        _.keyHandler = $.proxy(_.keyHandler, _);
        _.instanceUid = instanceUid++;
        _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
        _.registerBreakpoints();
        _.init(true);
      }
      return Slick;
    }());
    Slick.prototype.activateADA = function() {
      var _ = this;
      _.$slideTrack.find('.slick-active').attr({'aria-hidden': 'false'}).find('a, input, button, select').attr({'tabindex': '0'});
    };
    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
      var _ = this;
      if (typeof(index) === 'boolean') {
        addBefore = index;
        index = null;
      } else if (index < 0 || (index >= _.slideCount)) {
        return false;
      }
      _.unload();
      if (typeof(index) === 'number') {
        if (index === 0 && _.$slides.length === 0) {
          $(markup).appendTo(_.$slideTrack);
        } else if (addBefore) {
          $(markup).insertBefore(_.$slides.eq(index));
        } else {
          $(markup).insertAfter(_.$slides.eq(index));
        }
      } else {
        if (addBefore === true) {
          $(markup).prependTo(_.$slideTrack);
        } else {
          $(markup).appendTo(_.$slideTrack);
        }
      }
      _.$slides = _.$slideTrack.children(this.options.slide);
      _.$slideTrack.children(this.options.slide).detach();
      _.$slideTrack.append(_.$slides);
      _.$slides.each(function(index, element) {
        $(element).attr('data-slick-index', index);
      });
      _.$slidesCache = _.$slides;
      _.reinit();
    };
    Slick.prototype.animateHeight = function() {
      var _ = this;
      if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
        var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
        _.$list.animate({height: targetHeight}, _.options.speed);
      }
    };
    Slick.prototype.animateSlide = function(targetLeft, callback) {
      var animProps = {},
          _ = this;
      _.animateHeight();
      if (_.options.rtl === true && _.options.vertical === false) {
        targetLeft = -targetLeft;
      }
      if (_.transformsEnabled === false) {
        if (_.options.vertical === false) {
          _.$slideTrack.animate({left: targetLeft}, _.options.speed, _.options.easing, callback);
        } else {
          _.$slideTrack.animate({top: targetLeft}, _.options.speed, _.options.easing, callback);
        }
      } else {
        if (_.cssTransitions === false) {
          if (_.options.rtl === true) {
            _.currentLeft = -(_.currentLeft);
          }
          $({animStart: _.currentLeft}).animate({animStart: targetLeft}, {
            duration: _.options.speed,
            easing: _.options.easing,
            step: function(now) {
              now = Math.ceil(now);
              if (_.options.vertical === false) {
                animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                _.$slideTrack.css(animProps);
              } else {
                animProps[_.animType] = 'translate(0px,' + now + 'px)';
                _.$slideTrack.css(animProps);
              }
            },
            complete: function() {
              if (callback) {
                callback.call();
              }
            }
          });
        } else {
          _.applyTransition();
          targetLeft = Math.ceil(targetLeft);
          if (_.options.vertical === false) {
            animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
          } else {
            animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
          }
          _.$slideTrack.css(animProps);
          if (callback) {
            setTimeout(function() {
              _.disableTransition();
              callback.call();
            }, _.options.speed);
          }
        }
      }
    };
    Slick.prototype.getNavTarget = function() {
      var _ = this,
          asNavFor = _.options.asNavFor;
      if (asNavFor && asNavFor !== null) {
        asNavFor = $(asNavFor).not(_.$slider);
      }
      return asNavFor;
    };
    Slick.prototype.asNavFor = function(index) {
      var _ = this,
          asNavFor = _.getNavTarget();
      if (asNavFor !== null && typeof asNavFor === 'object') {
        asNavFor.each(function() {
          var target = $(this).slick('getSlick');
          if (!target.unslicked) {
            target.slideHandler(index, true);
          }
        });
      }
    };
    Slick.prototype.applyTransition = function(slide) {
      var _ = this,
          transition = {};
      if (_.options.fade === false) {
        transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
      } else {
        transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
      }
      if (_.options.fade === false) {
        _.$slideTrack.css(transition);
      } else {
        _.$slides.eq(slide).css(transition);
      }
    };
    Slick.prototype.autoPlay = function() {
      var _ = this;
      _.autoPlayClear();
      if (_.slideCount > _.options.slidesToShow) {
        _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
      }
    };
    Slick.prototype.autoPlayClear = function() {
      var _ = this;
      if (_.autoPlayTimer) {
        clearInterval(_.autoPlayTimer);
      }
    };
    Slick.prototype.autoPlayIterator = function() {
      var _ = this,
          slideTo = _.currentSlide + _.options.slidesToScroll;
      if (!_.paused && !_.interrupted && !_.focussed) {
        if (_.options.infinite === false) {
          if (_.direction === 1 && (_.currentSlide + 1) === (_.slideCount - 1)) {
            _.direction = 0;
          } else if (_.direction === 0) {
            slideTo = _.currentSlide - _.options.slidesToScroll;
            if (_.currentSlide - 1 === 0) {
              _.direction = 1;
            }
          }
        }
        _.slideHandler(slideTo);
      }
    };
    Slick.prototype.buildArrows = function() {
      var _ = this;
      if (_.options.arrows === true) {
        _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
        _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
        if (_.slideCount > _.options.slidesToShow) {
          _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
          _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
          if (_.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.prependTo(_.options.appendArrows);
          }
          if (_.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.appendTo(_.options.appendArrows);
          }
          if (_.options.infinite !== true) {
            _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
          }
        } else {
          _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
            'aria-disabled': 'true',
            'tabindex': '-1'
          });
        }
      }
    };
    Slick.prototype.buildDots = function() {
      var _ = this,
          i,
          dot;
      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
        _.$slider.addClass('slick-dotted');
        dot = $('<ul />').addClass(_.options.dotsClass);
        for (i = 0; i <= _.getDotCount(); i += 1) {
          dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
        }
        _.$dots = dot.appendTo(_.options.appendDots);
        _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
      }
    };
    Slick.prototype.buildOut = function() {
      var _ = this;
      _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
      _.slideCount = _.$slides.length;
      _.$slides.each(function(index, element) {
        $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
      });
      _.$slider.addClass('slick-slider');
      _.$slideTrack = (_.slideCount === 0) ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
      _.$list = _.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
      _.$slideTrack.css('opacity', 0);
      if (_.options.centerMode === true || _.options.swipeToSlide === true) {
        _.options.slidesToScroll = 1;
      }
      $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
      _.setupInfinite();
      _.buildArrows();
      _.buildDots();
      _.updateDots();
      _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
      if (_.options.draggable === true) {
        _.$list.addClass('draggable');
      }
    };
    Slick.prototype.buildRows = function() {
      var _ = this,
          a,
          b,
          c,
          newSlides,
          numOfSlides,
          originalSlides,
          slidesPerSection;
      newSlides = document.createDocumentFragment();
      originalSlides = _.$slider.children();
      if (_.options.rows > 1) {
        slidesPerSection = _.options.slidesPerRow * _.options.rows;
        numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
        for (a = 0; a < numOfSlides; a++) {
          var slide = document.createElement('div');
          for (b = 0; b < _.options.rows; b++) {
            var row = document.createElement('div');
            for (c = 0; c < _.options.slidesPerRow; c++) {
              var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
              if (originalSlides.get(target)) {
                row.appendChild(originalSlides.get(target));
              }
            }
            slide.appendChild(row);
          }
          newSlides.appendChild(slide);
        }
        _.$slider.empty().append(newSlides);
        _.$slider.children().children().children().css({
          'width': (100 / _.options.slidesPerRow) + '%',
          'display': 'inline-block'
        });
      }
    };
    Slick.prototype.checkResponsive = function(initial, forceUpdate) {
      var _ = this,
          breakpoint,
          targetBreakpoint,
          respondToWidth,
          triggerBreakpoint = false;
      var sliderWidth = _.$slider.width();
      var windowWidth = window.innerWidth || $(window).width();
      if (_.respondTo === 'window') {
        respondToWidth = windowWidth;
      } else if (_.respondTo === 'slider') {
        respondToWidth = sliderWidth;
      } else if (_.respondTo === 'min') {
        respondToWidth = Math.min(windowWidth, sliderWidth);
      }
      if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
        targetBreakpoint = null;
        for (breakpoint in _.breakpoints) {
          if (_.breakpoints.hasOwnProperty(breakpoint)) {
            if (_.originalSettings.mobileFirst === false) {
              if (respondToWidth < _.breakpoints[breakpoint]) {
                targetBreakpoint = _.breakpoints[breakpoint];
              }
            } else {
              if (respondToWidth > _.breakpoints[breakpoint]) {
                targetBreakpoint = _.breakpoints[breakpoint];
              }
            }
          }
        }
        if (targetBreakpoint !== null) {
          if (_.activeBreakpoint !== null) {
            if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
              _.activeBreakpoint = targetBreakpoint;
              if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                _.unslick(targetBreakpoint);
              } else {
                _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                if (initial === true) {
                  _.currentSlide = _.options.initialSlide;
                }
                _.refresh(initial);
              }
              triggerBreakpoint = targetBreakpoint;
            }
          } else {
            _.activeBreakpoint = targetBreakpoint;
            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }
              _.refresh(initial);
            }
            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          if (_.activeBreakpoint !== null) {
            _.activeBreakpoint = null;
            _.options = _.originalSettings;
            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }
            _.refresh(initial);
            triggerBreakpoint = targetBreakpoint;
          }
        }
        if (!initial && triggerBreakpoint !== false) {
          _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
        }
      }
    };
    Slick.prototype.changeSlide = function(event, dontAnimate) {
      var _ = this,
          $target = $(event.currentTarget),
          indexOffset,
          slideOffset,
          unevenOffset;
      if ($target.is('a')) {
        event.preventDefault();
      }
      if (!$target.is('li')) {
        $target = $target.closest('li');
      }
      unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
      indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
      switch (event.data.message) {
        case 'previous':
          slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
          if (_.slideCount > _.options.slidesToShow) {
            _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
          }
          break;
        case 'next':
          slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
          if (_.slideCount > _.options.slidesToShow) {
            _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
          }
          break;
        case 'index':
          var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
          _.slideHandler(_.checkNavigable(index), false, dontAnimate);
          $target.children().trigger('focus');
          break;
        default:
          return;
      }
    };
    Slick.prototype.checkNavigable = function(index) {
      var _ = this,
          navigables,
          prevNavigable;
      navigables = _.getNavigableIndexes();
      prevNavigable = 0;
      if (index > navigables[navigables.length - 1]) {
        index = navigables[navigables.length - 1];
      } else {
        for (var n in navigables) {
          if (index < navigables[n]) {
            index = prevNavigable;
            break;
          }
          prevNavigable = navigables[n];
        }
      }
      return index;
    };
    Slick.prototype.cleanUpEvents = function() {
      var _ = this;
      if (_.options.dots && _.$dots !== null) {
        $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
      }
      _.$slider.off('focus.slick blur.slick');
      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
        _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
        _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
      }
      _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
      _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
      _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
      _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
      _.$list.off('click.slick', _.clickHandler);
      $(document).off(_.visibilityChange, _.visibility);
      _.cleanUpSlideEvents();
      if (_.options.accessibility === true) {
        _.$list.off('keydown.slick', _.keyHandler);
      }
      if (_.options.focusOnSelect === true) {
        $(_.$slideTrack).children().off('click.slick', _.selectHandler);
      }
      $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
      $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
      $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
      $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
      $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };
    Slick.prototype.cleanUpSlideEvents = function() {
      var _ = this;
      _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
      _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    };
    Slick.prototype.cleanUpRows = function() {
      var _ = this,
          originalSlides;
      if (_.options.rows > 1) {
        originalSlides = _.$slides.children().children();
        originalSlides.removeAttr('style');
        _.$slider.empty().append(originalSlides);
      }
    };
    Slick.prototype.clickHandler = function(event) {
      var _ = this;
      if (_.shouldClick === false) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
      }
    };
    Slick.prototype.destroy = function(refresh) {
      var _ = this;
      _.autoPlayClear();
      _.touchObject = {};
      _.cleanUpEvents();
      $('.slick-cloned', _.$slider).detach();
      if (_.$dots) {
        _.$dots.remove();
      }
      if (_.$prevArrow && _.$prevArrow.length) {
        _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.remove();
        }
      }
      if (_.$nextArrow && _.$nextArrow.length) {
        _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.remove();
        }
      }
      if (_.$slides) {
        _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function() {
          $(this).attr('style', $(this).data('originalStyling'));
        });
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.detach();
        _.$list.detach();
        _.$slider.append(_.$slides);
      }
      _.cleanUpRows();
      _.$slider.removeClass('slick-slider');
      _.$slider.removeClass('slick-initialized');
      _.$slider.removeClass('slick-dotted');
      _.unslicked = true;
      if (!refresh) {
        _.$slider.trigger('destroy', [_]);
      }
    };
    Slick.prototype.disableTransition = function(slide) {
      var _ = this,
          transition = {};
      transition[_.transitionType] = '';
      if (_.options.fade === false) {
        _.$slideTrack.css(transition);
      } else {
        _.$slides.eq(slide).css(transition);
      }
    };
    Slick.prototype.fadeSlide = function(slideIndex, callback) {
      var _ = this;
      if (_.cssTransitions === false) {
        _.$slides.eq(slideIndex).css({zIndex: _.options.zIndex});
        _.$slides.eq(slideIndex).animate({opacity: 1}, _.options.speed, _.options.easing, callback);
      } else {
        _.applyTransition(slideIndex);
        _.$slides.eq(slideIndex).css({
          opacity: 1,
          zIndex: _.options.zIndex
        });
        if (callback) {
          setTimeout(function() {
            _.disableTransition(slideIndex);
            callback.call();
          }, _.options.speed);
        }
      }
    };
    Slick.prototype.fadeSlideOut = function(slideIndex) {
      var _ = this;
      if (_.cssTransitions === false) {
        _.$slides.eq(slideIndex).animate({
          opacity: 0,
          zIndex: _.options.zIndex - 2
        }, _.options.speed, _.options.easing);
      } else {
        _.applyTransition(slideIndex);
        _.$slides.eq(slideIndex).css({
          opacity: 0,
          zIndex: _.options.zIndex - 2
        });
      }
    };
    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
      var _ = this;
      if (filter !== null) {
        _.$slidesCache = _.$slides;
        _.unload();
        _.$slideTrack.children(this.options.slide).detach();
        _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
        _.reinit();
      }
    };
    Slick.prototype.focusHandler = function() {
      var _ = this;
      _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function(event) {
        event.stopImmediatePropagation();
        var $sf = $(this);
        setTimeout(function() {
          if (_.options.pauseOnFocus) {
            _.focussed = $sf.is(':focus');
            _.autoPlay();
          }
        }, 0);
      });
    };
    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
      var _ = this;
      return _.currentSlide;
    };
    Slick.prototype.getDotCount = function() {
      var _ = this;
      var breakPoint = 0;
      var counter = 0;
      var pagerQty = 0;
      if (_.options.infinite === true) {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      } else if (_.options.centerMode === true) {
        pagerQty = _.slideCount;
      } else if (!_.options.asNavFor) {
        pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
      return pagerQty - 1;
    };
    Slick.prototype.getLeft = function(slideIndex) {
      var _ = this,
          targetLeft,
          verticalHeight,
          verticalOffset = 0,
          targetSlide;
      _.slideOffset = 0;
      verticalHeight = _.$slides.first().outerHeight(true);
      if (_.options.infinite === true) {
        if (_.slideCount > _.options.slidesToShow) {
          _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
          verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
        }
        if (_.slideCount % _.options.slidesToScroll !== 0) {
          if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
            if (slideIndex > _.slideCount) {
              _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
              verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
            } else {
              _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
              verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
            }
          }
        }
      } else {
        if (slideIndex + _.options.slidesToShow > _.slideCount) {
          _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
          verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
        }
      }
      if (_.slideCount <= _.options.slidesToShow) {
        _.slideOffset = 0;
        verticalOffset = 0;
      }
      if (_.options.centerMode === true && _.options.infinite === true) {
        _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
      } else if (_.options.centerMode === true) {
        _.slideOffset = 0;
        _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
      }
      if (_.options.vertical === false) {
        targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
      } else {
        targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
      }
      if (_.options.variableWidth === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
        }
        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }
        if (_.options.centerMode === true) {
          if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
            targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
          } else {
            targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
          }
          if (_.options.rtl === true) {
            if (targetSlide[0]) {
              targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
            } else {
              targetLeft = 0;
            }
          } else {
            targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
          }
          targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
        }
      }
      return targetLeft;
    };
    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
      var _ = this;
      return _.options[option];
    };
    Slick.prototype.getNavigableIndexes = function() {
      var _ = this,
          breakPoint = 0,
          counter = 0,
          indexes = [],
          max;
      if (_.options.infinite === false) {
        max = _.slideCount;
      } else {
        breakPoint = _.options.slidesToScroll * -1;
        counter = _.options.slidesToScroll * -1;
        max = _.slideCount * 2;
      }
      while (breakPoint < max) {
        indexes.push(breakPoint);
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
      return indexes;
    };
    Slick.prototype.getSlick = function() {
      return this;
    };
    Slick.prototype.getSlideCount = function() {
      var _ = this,
          slidesTraversed,
          swipedSlide,
          centerOffset;
      centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
      if (_.options.swipeToSlide === true) {
        _.$slideTrack.find('.slick-slide').each(function(index, slide) {
          if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
            swipedSlide = slide;
            return false;
          }
        });
        slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
        return slidesTraversed;
      } else {
        return _.options.slidesToScroll;
      }
    };
    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
      var _ = this;
      _.changeSlide({data: {
          message: 'index',
          index: parseInt(slide)
        }}, dontAnimate);
    };
    Slick.prototype.init = function(creation) {
      var _ = this;
      if (!$(_.$slider).hasClass('slick-initialized')) {
        $(_.$slider).addClass('slick-initialized');
        _.buildRows();
        _.buildOut();
        _.setProps();
        _.startLoad();
        _.loadSlider();
        _.initializeEvents();
        _.updateArrows();
        _.updateDots();
        _.checkResponsive(true);
        _.focusHandler();
      }
      if (creation) {
        _.$slider.trigger('init', [_]);
      }
      if (_.options.accessibility === true) {
        _.initADA();
      }
      if (_.options.autoplay) {
        _.paused = false;
        _.autoPlay();
      }
    };
    Slick.prototype.initADA = function() {
      var _ = this;
      _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
        'aria-hidden': 'true',
        'tabindex': '-1'
      }).find('a, input, button, select').attr({'tabindex': '-1'});
      _.$slideTrack.attr('role', 'listbox');
      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
        $(this).attr({
          'role': 'option',
          'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
        });
      });
      if (_.$dots !== null) {
        _.$dots.attr('role', 'tablist').find('li').each(function(i) {
          $(this).attr({
            'role': 'presentation',
            'aria-selected': 'false',
            'aria-controls': 'navigation' + _.instanceUid + i + '',
            'id': 'slick-slide' + _.instanceUid + i + ''
          });
        }).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar');
      }
      _.activateADA();
    };
    Slick.prototype.initArrowEvents = function() {
      var _ = this;
      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
        _.$prevArrow.off('click.slick').on('click.slick', {message: 'previous'}, _.changeSlide);
        _.$nextArrow.off('click.slick').on('click.slick', {message: 'next'}, _.changeSlide);
      }
    };
    Slick.prototype.initDotEvents = function() {
      var _ = this;
      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
        $('li', _.$dots).on('click.slick', {message: 'index'}, _.changeSlide);
      }
      if (_.options.dots === true && _.options.pauseOnDotsHover === true) {
        $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
      }
    };
    Slick.prototype.initSlideEvents = function() {
      var _ = this;
      if (_.options.pauseOnHover) {
        _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
      }
    };
    Slick.prototype.initializeEvents = function() {
      var _ = this;
      _.initArrowEvents();
      _.initDotEvents();
      _.initSlideEvents();
      _.$list.on('touchstart.slick mousedown.slick', {action: 'start'}, _.swipeHandler);
      _.$list.on('touchmove.slick mousemove.slick', {action: 'move'}, _.swipeHandler);
      _.$list.on('touchend.slick mouseup.slick', {action: 'end'}, _.swipeHandler);
      _.$list.on('touchcancel.slick mouseleave.slick', {action: 'end'}, _.swipeHandler);
      _.$list.on('click.slick', _.clickHandler);
      $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
      if (_.options.accessibility === true) {
        _.$list.on('keydown.slick', _.keyHandler);
      }
      if (_.options.focusOnSelect === true) {
        $(_.$slideTrack).children().on('click.slick', _.selectHandler);
      }
      $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
      $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
      $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
      $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
      $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };
    Slick.prototype.initUI = function() {
      var _ = this;
      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
        _.$prevArrow.show();
        _.$nextArrow.show();
      }
      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
        _.$dots.show();
      }
    };
    Slick.prototype.keyHandler = function(event) {
      var _ = this;
      if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
        if (event.keyCode === 37 && _.options.accessibility === true) {
          _.changeSlide({data: {message: _.options.rtl === true ? 'next' : 'previous'}});
        } else if (event.keyCode === 39 && _.options.accessibility === true) {
          _.changeSlide({data: {message: _.options.rtl === true ? 'previous' : 'next'}});
        }
      }
    };
    Slick.prototype.lazyLoad = function() {
      var _ = this,
          loadRange,
          cloneRange,
          rangeStart,
          rangeEnd;
      function loadImages(imagesScope) {
        $('img[data-lazy]', imagesScope).each(function() {
          var image = $(this),
              imageSource = $(this).attr('data-lazy'),
              imageToLoad = document.createElement('img');
          imageToLoad.onload = function() {
            image.animate({opacity: 0}, 100, function() {
              image.attr('src', imageSource).animate({opacity: 1}, 200, function() {
                image.removeAttr('data-lazy').removeClass('slick-loading');
              });
              _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
            });
          };
          imageToLoad.onerror = function() {
            image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
            _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
          };
          imageToLoad.src = imageSource;
        });
      }
      if (_.options.centerMode === true) {
        if (_.options.infinite === true) {
          rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
          rangeEnd = rangeStart + _.options.slidesToShow + 2;
        } else {
          rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
          rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
        }
      } else {
        rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
        rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
        if (_.options.fade === true) {
          if (rangeStart > 0)
            rangeStart--;
          if (rangeEnd <= _.slideCount)
            rangeEnd++;
        }
      }
      loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
      loadImages(loadRange);
      if (_.slideCount <= _.options.slidesToShow) {
        cloneRange = _.$slider.find('.slick-slide');
        loadImages(cloneRange);
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
        cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
        loadImages(cloneRange);
      } else if (_.currentSlide === 0) {
        cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
        loadImages(cloneRange);
      }
    };
    Slick.prototype.loadSlider = function() {
      var _ = this;
      _.setPosition();
      _.$slideTrack.css({opacity: 1});
      _.$slider.removeClass('slick-loading');
      _.initUI();
      if (_.options.lazyLoad === 'progressive') {
        _.progressiveLazyLoad();
      }
    };
    Slick.prototype.next = Slick.prototype.slickNext = function() {
      var _ = this;
      _.changeSlide({data: {message: 'next'}});
    };
    Slick.prototype.orientationChange = function() {
      var _ = this;
      _.checkResponsive();
      _.setPosition();
    };
    Slick.prototype.pause = Slick.prototype.slickPause = function() {
      var _ = this;
      _.autoPlayClear();
      _.paused = true;
    };
    Slick.prototype.play = Slick.prototype.slickPlay = function() {
      var _ = this;
      _.autoPlay();
      _.options.autoplay = true;
      _.paused = false;
      _.focussed = false;
      _.interrupted = false;
    };
    Slick.prototype.postSlide = function(index) {
      var _ = this;
      if (!_.unslicked) {
        _.$slider.trigger('afterChange', [_, index]);
        _.animating = false;
        _.setPosition();
        _.swipeLeft = null;
        if (_.options.autoplay) {
          _.autoPlay();
        }
        if (_.options.accessibility === true) {
          _.initADA();
        }
      }
    };
    Slick.prototype.prev = Slick.prototype.slickPrev = function() {
      var _ = this;
      _.changeSlide({data: {message: 'previous'}});
    };
    Slick.prototype.preventDefault = function(event) {
      event.preventDefault();
    };
    Slick.prototype.progressiveLazyLoad = function(tryCount) {
      tryCount = tryCount || 1;
      var _ = this,
          $imgsToLoad = $('img[data-lazy]', _.$slider),
          image,
          imageSource,
          imageToLoad;
      if ($imgsToLoad.length) {
        image = $imgsToLoad.first();
        imageSource = image.attr('data-lazy');
        imageToLoad = document.createElement('img');
        imageToLoad.onload = function() {
          image.attr('src', imageSource).removeAttr('data-lazy').removeClass('slick-loading');
          if (_.options.adaptiveHeight === true) {
            _.setPosition();
          }
          _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          _.progressiveLazyLoad();
        };
        imageToLoad.onerror = function() {
          if (tryCount < 3) {
            setTimeout(function() {
              _.progressiveLazyLoad(tryCount + 1);
            }, 500);
          } else {
            image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
            _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
            _.progressiveLazyLoad();
          }
        };
        imageToLoad.src = imageSource;
      } else {
        _.$slider.trigger('allImagesLoaded', [_]);
      }
    };
    Slick.prototype.refresh = function(initializing) {
      var _ = this,
          currentSlide,
          lastVisibleIndex;
      lastVisibleIndex = _.slideCount - _.options.slidesToShow;
      if (!_.options.infinite && (_.currentSlide > lastVisibleIndex)) {
        _.currentSlide = lastVisibleIndex;
      }
      if (_.slideCount <= _.options.slidesToShow) {
        _.currentSlide = 0;
      }
      currentSlide = _.currentSlide;
      _.destroy(true);
      $.extend(_, _.initials, {currentSlide: currentSlide});
      _.init();
      if (!initializing) {
        _.changeSlide({data: {
            message: 'index',
            index: currentSlide
          }}, false);
      }
    };
    Slick.prototype.registerBreakpoints = function() {
      var _ = this,
          breakpoint,
          currentBreakpoint,
          l,
          responsiveSettings = _.options.responsive || null;
      if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
        _.respondTo = _.options.respondTo || 'window';
        for (breakpoint in responsiveSettings) {
          l = _.breakpoints.length - 1;
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
          if (responsiveSettings.hasOwnProperty(breakpoint)) {
            while (l >= 0) {
              if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                _.breakpoints.splice(l, 1);
              }
              l--;
            }
            _.breakpoints.push(currentBreakpoint);
            _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
          }
        }
        _.breakpoints.sort(function(a, b) {
          return (_.options.mobileFirst) ? a - b : b - a;
        });
      }
    };
    Slick.prototype.reinit = function() {
      var _ = this;
      _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
      _.slideCount = _.$slides.length;
      if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
        _.currentSlide = _.currentSlide - _.options.slidesToScroll;
      }
      if (_.slideCount <= _.options.slidesToShow) {
        _.currentSlide = 0;
      }
      _.registerBreakpoints();
      _.setProps();
      _.setupInfinite();
      _.buildArrows();
      _.updateArrows();
      _.initArrowEvents();
      _.buildDots();
      _.updateDots();
      _.initDotEvents();
      _.cleanUpSlideEvents();
      _.initSlideEvents();
      _.checkResponsive(false, true);
      if (_.options.focusOnSelect === true) {
        $(_.$slideTrack).children().on('click.slick', _.selectHandler);
      }
      _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
      _.setPosition();
      _.focusHandler();
      _.paused = !_.options.autoplay;
      _.autoPlay();
      _.$slider.trigger('reInit', [_]);
    };
    Slick.prototype.resize = function() {
      var _ = this;
      if ($(window).width() !== _.windowWidth) {
        clearTimeout(_.windowDelay);
        _.windowDelay = window.setTimeout(function() {
          _.windowWidth = $(window).width();
          _.checkResponsive();
          if (!_.unslicked) {
            _.setPosition();
          }
        }, 50);
      }
    };
    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
      var _ = this;
      if (typeof(index) === 'boolean') {
        removeBefore = index;
        index = removeBefore === true ? 0 : _.slideCount - 1;
      } else {
        index = removeBefore === true ? --index : index;
      }
      if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
        return false;
      }
      _.unload();
      if (removeAll === true) {
        _.$slideTrack.children().remove();
      } else {
        _.$slideTrack.children(this.options.slide).eq(index).remove();
      }
      _.$slides = _.$slideTrack.children(this.options.slide);
      _.$slideTrack.children(this.options.slide).detach();
      _.$slideTrack.append(_.$slides);
      _.$slidesCache = _.$slides;
      _.reinit();
    };
    Slick.prototype.setCSS = function(position) {
      var _ = this,
          positionProps = {},
          x,
          y;
      if (_.options.rtl === true) {
        position = -position;
      }
      x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
      y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
      positionProps[_.positionProp] = position;
      if (_.transformsEnabled === false) {
        _.$slideTrack.css(positionProps);
      } else {
        positionProps = {};
        if (_.cssTransitions === false) {
          positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
          _.$slideTrack.css(positionProps);
        } else {
          positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
          _.$slideTrack.css(positionProps);
        }
      }
    };
    Slick.prototype.setDimensions = function() {
      var _ = this;
      if (_.options.vertical === false) {
        if (_.options.centerMode === true) {
          _.$list.css({padding: ('0px ' + _.options.centerPadding)});
        }
      } else {
        _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
        if (_.options.centerMode === true) {
          _.$list.css({padding: (_.options.centerPadding + ' 0px')});
        }
      }
      _.listWidth = _.$list.width();
      _.listHeight = _.$list.height();
      if (_.options.vertical === false && _.options.variableWidth === false) {
        _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
        _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
      } else if (_.options.variableWidth === true) {
        _.$slideTrack.width(5000 * _.slideCount);
      } else {
        _.slideWidth = Math.ceil(_.listWidth);
        _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
      }
      var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
      if (_.options.variableWidth === false)
        _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    };
    Slick.prototype.setFade = function() {
      var _ = this,
          targetLeft;
      _.$slides.each(function(index, element) {
        targetLeft = (_.slideWidth * index) * -1;
        if (_.options.rtl === true) {
          $(element).css({
            position: 'relative',
            right: targetLeft,
            top: 0,
            zIndex: _.options.zIndex - 2,
            opacity: 0
          });
        } else {
          $(element).css({
            position: 'relative',
            left: targetLeft,
            top: 0,
            zIndex: _.options.zIndex - 2,
            opacity: 0
          });
        }
      });
      _.$slides.eq(_.currentSlide).css({
        zIndex: _.options.zIndex - 1,
        opacity: 1
      });
    };
    Slick.prototype.setHeight = function() {
      var _ = this;
      if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
        var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
        _.$list.css('height', targetHeight);
      }
    };
    Slick.prototype.setOption = Slick.prototype.slickSetOption = function() {
      var _ = this,
          l,
          item,
          option,
          value,
          refresh = false,
          type;
      if ($.type(arguments[0]) === 'object') {
        option = arguments[0];
        refresh = arguments[1];
        type = 'multiple';
      } else if ($.type(arguments[0]) === 'string') {
        option = arguments[0];
        value = arguments[1];
        refresh = arguments[2];
        if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
          type = 'responsive';
        } else if (typeof arguments[1] !== 'undefined') {
          type = 'single';
        }
      }
      if (type === 'single') {
        _.options[option] = value;
      } else if (type === 'multiple') {
        $.each(option, function(opt, val) {
          _.options[opt] = val;
        });
      } else if (type === 'responsive') {
        for (item in value) {
          if ($.type(_.options.responsive) !== 'array') {
            _.options.responsive = [value[item]];
          } else {
            l = _.options.responsive.length - 1;
            while (l >= 0) {
              if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
                _.options.responsive.splice(l, 1);
              }
              l--;
            }
            _.options.responsive.push(value[item]);
          }
        }
      }
      if (refresh) {
        _.unload();
        _.reinit();
      }
    };
    Slick.prototype.setPosition = function() {
      var _ = this;
      _.setDimensions();
      _.setHeight();
      if (_.options.fade === false) {
        _.setCSS(_.getLeft(_.currentSlide));
      } else {
        _.setFade();
      }
      _.$slider.trigger('setPosition', [_]);
    };
    Slick.prototype.setProps = function() {
      var _ = this,
          bodyStyle = document.body.style;
      _.positionProp = _.options.vertical === true ? 'top' : 'left';
      if (_.positionProp === 'top') {
        _.$slider.addClass('slick-vertical');
      } else {
        _.$slider.removeClass('slick-vertical');
      }
      if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
        if (_.options.useCSS === true) {
          _.cssTransitions = true;
        }
      }
      if (_.options.fade) {
        if (typeof _.options.zIndex === 'number') {
          if (_.options.zIndex < 3) {
            _.options.zIndex = 3;
          }
        } else {
          _.options.zIndex = _.defaults.zIndex;
        }
      }
      if (bodyStyle.OTransform !== undefined) {
        _.animType = 'OTransform';
        _.transformType = '-o-transform';
        _.transitionType = 'OTransition';
        if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined)
          _.animType = false;
      }
      if (bodyStyle.MozTransform !== undefined) {
        _.animType = 'MozTransform';
        _.transformType = '-moz-transform';
        _.transitionType = 'MozTransition';
        if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined)
          _.animType = false;
      }
      if (bodyStyle.webkitTransform !== undefined) {
        _.animType = 'webkitTransform';
        _.transformType = '-webkit-transform';
        _.transitionType = 'webkitTransition';
        if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined)
          _.animType = false;
      }
      if (bodyStyle.msTransform !== undefined) {
        _.animType = 'msTransform';
        _.transformType = '-ms-transform';
        _.transitionType = 'msTransition';
        if (bodyStyle.msTransform === undefined)
          _.animType = false;
      }
      if (bodyStyle.transform !== undefined && _.animType !== false) {
        _.animType = 'transform';
        _.transformType = 'transform';
        _.transitionType = 'transition';
      }
      _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };
    Slick.prototype.setSlideClasses = function(index) {
      var _ = this,
          centerOffset,
          allSlides,
          indexOffset,
          remainder;
      allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');
      _.$slides.eq(index).addClass('slick-current');
      if (_.options.centerMode === true) {
        centerOffset = Math.floor(_.options.slidesToShow / 2);
        if (_.options.infinite === true) {
          if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
            _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
          } else {
            indexOffset = _.options.slidesToShow + index;
            allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
          }
          if (index === 0) {
            allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
          } else if (index === _.slideCount - 1) {
            allSlides.eq(_.options.slidesToShow).addClass('slick-center');
          }
        }
        _.$slides.eq(index).addClass('slick-center');
      } else {
        if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
          _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        } else if (allSlides.length <= _.options.slidesToShow) {
          allSlides.addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          remainder = _.slideCount % _.options.slidesToShow;
          indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
          if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
            allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
          } else {
            allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
          }
        }
      }
      if (_.options.lazyLoad === 'ondemand') {
        _.lazyLoad();
      }
    };
    Slick.prototype.setupInfinite = function() {
      var _ = this,
          i,
          slideIndex,
          infiniteCount;
      if (_.options.fade === true) {
        _.options.centerMode = false;
      }
      if (_.options.infinite === true && _.options.fade === false) {
        slideIndex = null;
        if (_.slideCount > _.options.slidesToShow) {
          if (_.options.centerMode === true) {
            infiniteCount = _.options.slidesToShow + 1;
          } else {
            infiniteCount = _.options.slidesToShow;
          }
          for (i = _.slideCount; i > (_.slideCount - infiniteCount); i -= 1) {
            slideIndex = i - 1;
            $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
          }
          for (i = 0; i < infiniteCount; i += 1) {
            slideIndex = i;
            $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
          }
          _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
            $(this).attr('id', '');
          });
        }
      }
    };
    Slick.prototype.interrupt = function(toggle) {
      var _ = this;
      if (!toggle) {
        _.autoPlay();
      }
      _.interrupted = toggle;
    };
    Slick.prototype.selectHandler = function(event) {
      var _ = this;
      var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
      var index = parseInt(targetElement.attr('data-slick-index'));
      if (!index)
        index = 0;
      if (_.slideCount <= _.options.slidesToShow) {
        _.setSlideClasses(index);
        _.asNavFor(index);
        return;
      }
      _.slideHandler(index);
    };
    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
      var targetSlide,
          animSlide,
          oldSlide,
          slideLeft,
          targetLeft = null,
          _ = this,
          navTarget;
      sync = sync || false;
      if (_.animating === true && _.options.waitForAnimate === true) {
        return;
      }
      if (_.options.fade === true && _.currentSlide === index) {
        return;
      }
      if (_.slideCount <= _.options.slidesToShow) {
        return;
      }
      if (sync === false) {
        _.asNavFor(index);
      }
      targetSlide = index;
      targetLeft = _.getLeft(targetSlide);
      slideLeft = _.getLeft(_.currentSlide);
      _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
      if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
        if (_.options.fade === false) {
          targetSlide = _.currentSlide;
          if (dontAnimate !== true) {
            _.animateSlide(slideLeft, function() {
              _.postSlide(targetSlide);
            });
          } else {
            _.postSlide(targetSlide);
          }
        }
        return;
      } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
        if (_.options.fade === false) {
          targetSlide = _.currentSlide;
          if (dontAnimate !== true) {
            _.animateSlide(slideLeft, function() {
              _.postSlide(targetSlide);
            });
          } else {
            _.postSlide(targetSlide);
          }
        }
        return;
      }
      if (_.options.autoplay) {
        clearInterval(_.autoPlayTimer);
      }
      if (targetSlide < 0) {
        if (_.slideCount % _.options.slidesToScroll !== 0) {
          animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
        } else {
          animSlide = _.slideCount + targetSlide;
        }
      } else if (targetSlide >= _.slideCount) {
        if (_.slideCount % _.options.slidesToScroll !== 0) {
          animSlide = 0;
        } else {
          animSlide = targetSlide - _.slideCount;
        }
      } else {
        animSlide = targetSlide;
      }
      _.animating = true;
      _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
      oldSlide = _.currentSlide;
      _.currentSlide = animSlide;
      _.setSlideClasses(_.currentSlide);
      if (_.options.asNavFor) {
        navTarget = _.getNavTarget();
        navTarget = navTarget.slick('getSlick');
        if (navTarget.slideCount <= navTarget.options.slidesToShow) {
          navTarget.setSlideClasses(_.currentSlide);
        }
      }
      _.updateDots();
      _.updateArrows();
      if (_.options.fade === true) {
        if (dontAnimate !== true) {
          _.fadeSlideOut(oldSlide);
          _.fadeSlide(animSlide, function() {
            _.postSlide(animSlide);
          });
        } else {
          _.postSlide(animSlide);
        }
        _.animateHeight();
        return;
      }
      if (dontAnimate !== true) {
        _.animateSlide(targetLeft, function() {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }
    };
    Slick.prototype.startLoad = function() {
      var _ = this;
      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
        _.$prevArrow.hide();
        _.$nextArrow.hide();
      }
      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
        _.$dots.hide();
      }
      _.$slider.addClass('slick-loading');
    };
    Slick.prototype.swipeDirection = function() {
      var xDist,
          yDist,
          r,
          swipeAngle,
          _ = this;
      xDist = _.touchObject.startX - _.touchObject.curX;
      yDist = _.touchObject.startY - _.touchObject.curY;
      r = Math.atan2(yDist, xDist);
      swipeAngle = Math.round(r * 180 / Math.PI);
      if (swipeAngle < 0) {
        swipeAngle = 360 - Math.abs(swipeAngle);
      }
      if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
        return (_.options.rtl === false ? 'left' : 'right');
      }
      if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
        return (_.options.rtl === false ? 'left' : 'right');
      }
      if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
        return (_.options.rtl === false ? 'right' : 'left');
      }
      if (_.options.verticalSwiping === true) {
        if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
          return 'down';
        } else {
          return 'up';
        }
      }
      return 'vertical';
    };
    Slick.prototype.swipeEnd = function(event) {
      var _ = this,
          slideCount,
          direction;
      _.dragging = false;
      _.interrupted = false;
      _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;
      if (_.touchObject.curX === undefined) {
        return false;
      }
      if (_.touchObject.edgeHit === true) {
        _.$slider.trigger('edge', [_, _.swipeDirection()]);
      }
      if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
        direction = _.swipeDirection();
        switch (direction) {
          case 'left':
          case 'down':
            slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
            _.currentDirection = 0;
            break;
          case 'right':
          case 'up':
            slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
            _.currentDirection = 1;
            break;
          default:
        }
        if (direction != 'vertical') {
          _.slideHandler(slideCount);
          _.touchObject = {};
          _.$slider.trigger('swipe', [_, direction]);
        }
      } else {
        if (_.touchObject.startX !== _.touchObject.curX) {
          _.slideHandler(_.currentSlide);
          _.touchObject = {};
        }
      }
    };
    Slick.prototype.swipeHandler = function(event) {
      var _ = this;
      if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
        return;
      } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
        return;
      }
      _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
      _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
      if (_.options.verticalSwiping === true) {
        _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
      }
      switch (event.data.action) {
        case 'start':
          _.swipeStart(event);
          break;
        case 'move':
          _.swipeMove(event);
          break;
        case 'end':
          _.swipeEnd(event);
          break;
      }
    };
    Slick.prototype.swipeMove = function(event) {
      var _ = this,
          edgeWasHit = false,
          curLeft,
          swipeDirection,
          swipeLength,
          positionOffset,
          touches;
      touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
      if (!_.dragging || touches && touches.length !== 1) {
        return false;
      }
      curLeft = _.getLeft(_.currentSlide);
      _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
      _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
      _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
      if (_.options.verticalSwiping === true) {
        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
      }
      swipeDirection = _.swipeDirection();
      if (swipeDirection === 'vertical') {
        return;
      }
      if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
        event.preventDefault();
      }
      positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
      if (_.options.verticalSwiping === true) {
        positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
      }
      swipeLength = _.touchObject.swipeLength;
      _.touchObject.edgeHit = false;
      if (_.options.infinite === false) {
        if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
          swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
          _.touchObject.edgeHit = true;
        }
      }
      if (_.options.vertical === false) {
        _.swipeLeft = curLeft + swipeLength * positionOffset;
      } else {
        _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
      }
      if (_.options.verticalSwiping === true) {
        _.swipeLeft = curLeft + swipeLength * positionOffset;
      }
      if (_.options.fade === true || _.options.touchMove === false) {
        return false;
      }
      if (_.animating === true) {
        _.swipeLeft = null;
        return false;
      }
      _.setCSS(_.swipeLeft);
    };
    Slick.prototype.swipeStart = function(event) {
      var _ = this,
          touches;
      _.interrupted = true;
      if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
        _.touchObject = {};
        return false;
      }
      if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
        touches = event.originalEvent.touches[0];
      }
      _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
      _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
      _.dragging = true;
    };
    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
      var _ = this;
      if (_.$slidesCache !== null) {
        _.unload();
        _.$slideTrack.children(this.options.slide).detach();
        _.$slidesCache.appendTo(_.$slideTrack);
        _.reinit();
      }
    };
    Slick.prototype.unload = function() {
      var _ = this;
      $('.slick-cloned', _.$slider).remove();
      if (_.$dots) {
        _.$dots.remove();
      }
      if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
      if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
      _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
    };
    Slick.prototype.unslick = function(fromBreakpoint) {
      var _ = this;
      _.$slider.trigger('unslick', [_, fromBreakpoint]);
      _.destroy();
    };
    Slick.prototype.updateArrows = function() {
      var _ = this,
          centerOffset;
      centerOffset = Math.floor(_.options.slidesToShow / 2);
      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
        if (_.currentSlide === 0) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
          _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
          _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
          _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
        } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
          _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
          _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
        }
      }
    };
    Slick.prototype.updateDots = function() {
      var _ = this;
      if (_.$dots !== null) {
        _.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');
        _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false');
      }
    };
    Slick.prototype.visibility = function() {
      var _ = this;
      if (_.options.autoplay) {
        if (document[_.hidden]) {
          _.interrupted = true;
        } else {
          _.interrupted = false;
        }
      }
    };
    $.fn.slick = function() {
      var _ = this,
          opt = arguments[0],
          args = Array.prototype.slice.call(arguments, 1),
          l = _.length,
          i,
          ret;
      for (i = 0; i < l; i++) {
        if (typeof opt == 'object' || typeof opt == 'undefined')
          _[i].slick = new Slick(_[i], opt);
        else
          ret = _[i].slick[opt].apply(_[i].slick, args);
        if (typeof ret != 'undefined')
          return ret;
      }
      return _;
    };
  }));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:slick-carousel@1.6.0", ["npm:slick-carousel@1.6.0/slick/slick"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('npm:slick-carousel@1.6.0/slick/slick');
  global.define = __define;
  return module.exports;
});

System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:slick-carousel@1.6.0', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/page-resize/page-resize', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/services', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/content/en'], function (_export) {
    var _createClass, _classCallCheck, addEventListeners, securityProfile, CONTENT, SecurityProfile;

    return {
        setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
            _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_npmSlickCarousel160) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsPageResizePageResize) {
            addEventListeners = _COMPANYGithubVoyaDd2cUiMasterLibComponentsPageResizePageResize.addEventListeners;
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices) {
            securityProfile = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.securityProfile;
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonContentEn) {
            CONTENT = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonContentEn.CONTENT;
        }],
        execute: function () {
            'use strict';

            SecurityProfile = (function () {
                function SecurityProfile() {
                    _classCallCheck(this, SecurityProfile);

                    this.symbolValue = '';
                    this.profile = [];
                    this.content = CONTENT.securityProfile;

                    this.symbolValue = this.getSymbolFromQueryString();
                }

                _createClass(SecurityProfile, [{
                    key: 'attached',
                    value: function attached() {
                        var _this = this;

                        this.getSecurityProfileDetails();

                        addEventListeners(document.querySelector('.overview__security-profile'), function (event, size) {
                            _this.setLayoutSize(size);
                        });

                        var elSize = document.querySelector('.overview__security-profile').getBoundingClientRect();

                        this.setLayoutSize({ el: elSize });
                    }
                }, {
                    key: 'setLayoutSize',
                    value: function setLayoutSize(size) {

                        if (size.el.width < 525) {
                            this.layoutSize = 'S';
                        } else {
                            this.layoutSize = 'M';
                        }
                    }
                }, {
                    key: 'getSymbolFromQueryString',
                    value: function getSymbolFromQueryString() {
                        var getQueryString = function getQueryString(field, url) {
                            var href = url ? url : window.location.href;
                            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
                            var string = reg.exec(href);

                            return string ? string[1] : null;
                        };

                        return getQueryString('symbol') || '';
                    }
                }, {
                    key: 'getSecurityProfileDetails',
                    value: function getSecurityProfileDetails() {
                        var _this2 = this;

                        securityProfile(this.symbolValue).then(function (details) {
                            _this2.setSecurityProfileDetails(details[0]);
                        });
                    }
                }, {
                    key: 'setSecurityProfileDetails',
                    value: function setSecurityProfileDetails(details) {

                        this.secType = {
                            stock: details.secType === 'ST',
                            etf: details.secType === 'ETF',
                            mutualFund: details.secType === 'MF'
                        };
                        // if none are true, then not matched
                        this.secType.notMatched = !(this.secType.stock || this.secType.etf || this.secType.mutualFund);

                        // TODO: remove this once endpoint works
                        // this.secType = {
                        //     stock: false,
                        //     etf: true,
                        //     mutualFund: false
                        // }

                        this.profile = details;
                    }
                }]);

                return SecurityProfile;
            })();

            _export('SecurityProfile', SecurityProfile);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/interactive-chart/interactive-chart.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "\n<template>\n    <div class=\"interactive-chart__container\" if.bind=\"symbolValue\"></div>\n</template>";
});

_removeDefine();
})();
System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/interactive-chart/interactive-chart', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/services', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/page-resize/page-resize'], function (_export) {
    var _createClass, _classCallCheck, sessionToken, symbolDetails, addEventListeners, InteractiveChart;

    return {
        setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
            _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices) {
            sessionToken = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.sessionToken;
            symbolDetails = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.symbolDetails;
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsPageResizePageResize) {
            addEventListeners = _COMPANYGithubVoyaDd2cUiMasterLibComponentsPageResizePageResize.addEventListeners;
        }],
        execute: function () {
            'use strict';

            InteractiveChart = (function () {
                function InteractiveChart() {
                    _classCallCheck(this, InteractiveChart);

                    this.sessionID = '';
                    this.symbolValue = '';
                    this.secType = '';
                    this.ticker = '';

                    this.symbolValue = this.getSymbolFromQueryString();

                    this.morningstar = {
                        // TODO: remove callback if not needed
                        // core: this.load()
                        // marketsComponentsCore: window.morningstar.components['markets-components-core'],
                        // marketsComponetsSvgChart: window.morningstar.components['markets-components-svgchart']
                    };
                }

                _createClass(InteractiveChart, [{
                    key: 'attached',
                    value: function attached() {
                        this.getSessionID();

                        var self = this;

                        addEventListeners(document.querySelector('.interactive-chart__container'), function (event, size) {
                            self.chartLayoutResize(size);
                        });

                        // this.morningstar.core = this.load();

                        // this.morningstar.core.then( () => {

                        //     debugger

                        //     let elSize = document.querySelector('.interactive-chart__container').getBoundingClientRect();
                        //     this.chartLayoutResize({el: elSize});
                        // });
                    }
                }, {
                    key: 'load',

                    // load chart
                    value: function load() {
                        var chartConfig = {
                            container: ".interactive-chart__container",
                            lang: "en_us",
                            hideMenu: true,
                            hideVolume: true,
                            hideSlider: true,
                            // hideCross: true,
                            yAxisOrient: "left",
                            cursorType: "crosshair",
                            compareClose: true,
                            legendChange: true,
                            mainTicker: this.ticker,
                            fixHeight: true, // this is new
                            legendDot: true,
                            SMode: "zoomIn",
                            charts: {
                                mainChart: {
                                    chartType: "mountainChart",
                                    height: 250 // TODO: ensure this is correct
                                },
                                volumeChart: {
                                    show: false
                                }
                            },
                            "5D": false,
                            "15D": false,
                            "1M": false,
                            "6M": false,
                            "YTD": false,
                            "5Y": false,
                            "10Y": false
                        };

                        // console.log(chartConfig);
                        morningstar.components['markets-components-core'].init("VOYA", {
                            env: "stage",
                            sessionKey: this.sessionID
                        }, function (result) {
                            if (result.errorCode == 0) {
                                // debugger
                                //if no errors, load the chart component with configuration you set
                                morningstar.components['markets-components-svgchart'].init(chartConfig);
                            } else {
                                //Let us know if you face any errors
                                console.log('Error:' + result.errorMsg);
                            }
                        });
                    }

                    //Sample code to make sure that the chart accomodates height and width changes
                }, {
                    key: 'chartLayoutResize',
                    value: function chartLayoutResize(size) {

                        // console.log('resized size', size);

                        // debugger;

                        // changeSize is not a valid method
                        morningstar.components['markets-components-svgchart'].changeSize(size.el.width, size.el.height);
                    }
                }, {
                    key: 'getSessionID',
                    value: function getSessionID() {
                        var self = this;

                        sessionToken().then(function (token) {
                            self.sessionID = token.sessionID;

                            self.getSymbolDetails();
                        });
                    }
                }, {
                    key: 'getSymbolFromQueryString',
                    value: function getSymbolFromQueryString() {
                        var getQueryString = function getQueryString(field, url) {
                            var href = url ? url : window.location.href;
                            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
                            var string = reg.exec(href);

                            return string ? string[1] : null;
                        };

                        return getQueryString('symbol') || '';
                    }
                }, {
                    key: 'getSymbolDetails',
                    value: function getSymbolDetails() {
                        var _this = this;

                        symbolDetails(this.symbolValue).then(function (details) {
                            _this.symbolValue = details[0].symbol;
                            _this.ticker = details[0].ticker;

                            _this.load();
                        });
                    }
                }, {
                    key: 'sessionID',
                    get: function get() {
                        return this._sessionID;
                    },
                    set: function set(value) {
                        this._sessionID = value;
                    }
                }]);

                return InteractiveChart;
            })();

            _export('InteractiveChart', InteractiveChart);
        }
    };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/industry-peers/industry-peers.html!github:systemjs/plugin-text@0.0.7", [], function() {
  return "<template>\n    <require from=\"../custom-attributes/sec-type\"></require>\n\n    <h3 class=\"dd2c-page__section-heading\">${title}</h3>\n\n    <ul class=\"i-industry-peer-list b-industry-peers-list\">\n        <li class=\"dd2c-page__symbol-list__item\" if.bind=\"secType === 'ST'\" repeat.for='industryPeer of symbolList'>\n            <COMPANY-search-symbol-result class=\"i-industry-peer-item\" case=\"default\" ignore-url layout=\"${quoteLayoutSize}\"></COMPANY-search-symbol-result>\n        </li>\n        <li class=\"dd2c-page__symbol-list__item\" if.bind=\"secType !== 'ST'\" repeat.for='industryPeer of symbolList'>\n            <COMPANY-search-symbol-result class=\"i-industry-peer-item\" case=\"top-holdings\" ignore-url layout=\"${quoteLayoutSize}\"></COMPANY-search-symbol-result>\n        </li>\n        <li if.bind=\"symbolList.length === 0\" class=\"industry-peers__not-available\">${vm.content.notAvailable}</li>\n    </ul>\n</template>";
});

_removeDefine();
})();
System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/content/en', [], function (_export) {
    'use strict';

    var CONTENT;
    return {
        setters: [],
        execute: function () {
            CONTENT = {
                // -------------------------------
                // NOTES
                // * Use CSS for all caps
                // -------------------------------
                timestamp: "Quotes and content updated as of",
                topHoldings: 'Top Holdings',
                industryPeers: 'Industry Peers',
                notAvailable: "Not Available",
                securityProfile: {
                    assetAllocation: "Asset Allocation",
                    bond: "Bond",
                    cash: "Cash",
                    category: "Category",
                    company: "Company",
                    divYield: "Dividend Yield",
                    etfProfile: "ETF Profile",
                    expenseRatio: "Expense Ratio",
                    fiftyTwoWeekPriceRange: "52 Week Price Range",
                    fixedIncomeStyle: "Fixed Income Style",
                    industry: "Industry",
                    investmentStyle: "Investment Style",
                    mfProfile: "Mutual Fund Profile",
                    minimumInvestment: "Minimum Investment",
                    mktCapitalization: "Market Capitalization",
                    morningstarStats: "Morningstar Stats",
                    nonUsStock: "Non-US Stock",
                    notAvailable: 'Not Available',
                    notAvailableAbb: "N/A",
                    other: "Other",
                    portfolioTurnover: "Portfolio Turnover",
                    priceBook: "Price / Book",
                    priceEarning: "Price / Earnings",
                    priceSales: "Price / Sales",
                    returnComparedToCategory: "Return Compared to Category",
                    riskComparedToCategory: "Risk Compared to Category",
                    salesLoad: "Sales Load",
                    sector: "Sector",
                    secTypeNotUnderstood: "Security type not understood from server response",
                    stockProfile: "Stock Profile",
                    todaysPriceRange: "Today's Price Range",
                    toNewInvestors: "to New Investors",
                    totalAssets: "Total Assets",
                    usStock: "US Stock",
                    valuation: "Valuation",
                    volumeAvg: "Volume/Average",
                    volumeAvgShort: "Vol./Avg."
                },
                tenKGrowthChart: {
                    historicalGrowthTitle: "Historical Growth of a 10K Investment",
                    insightsHistoricalGrowthTitle: "Insights: Historical Growth of a 10K Investment",
                    notAvailable: "Not Available"
                }
            };

            _export('CONTENT', CONTENT);
        }
    };
});

System.register("COMPANY-github:Voya/dd2c-ui@master/lib/services-cache", ["npm:babel-runtime@5.8.24/core-js/promise"], function (_export) {
    var _Promise, cache;

    function existsInCache(id) {
        return cache[id] ? true : false;
    }

    function getFromCache(id) {
        return new _Promise(function (resolve, reject) {
            if (cache[id]) {
                resolve(cache[id]);
            } else {
                reject();
            }
        });
    }

    function addToCache(id, results) {
        cache[id] = results;
    }

    function clearCache() {
        cache = {};
    }

    return {
        setters: [function (_npmBabelRuntime5824CoreJsPromise) {
            _Promise = _npmBabelRuntime5824CoreJsPromise["default"];
        }],
        execute: function () {
            "use strict";

            _export("existsInCache", existsInCache);

            _export("getFromCache", getFromCache);

            _export("addToCache", addToCache);

            _export("clearCache", clearCache);

            cache = {};
        }
    };
});

System.register("COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/stub/morningstar-insights-secure-stub", [], function (_export) {
    "use strict";

    var MORNINGSTAR_INSIGHTS_SECURE_STUB;
    return {
        setters: [],
        execute: function () {
            MORNINGSTAR_INSIGHTS_SECURE_STUB = {
                analystOpinion: {
                    buy: "7",
                    sell: "0",
                    hold: "2"
                },
                valuation: {
                    assessment: "Undervalued",
                    fairValue: "94.20",
                    isDataAvailable: "true"
                },
                analystTake: {
                    isDataAvailable: "true",
                    expertCommentary: {
                        "Risk": "Apple faces several key risks as competitors attack the firm from all angles. Smartphone and tablet competition is rising, both from upstart Chinese OEMs on the low- and midrange, and tech titans like Samsung and Huawei all have the size and scale to build large smartphone portfolios to suit customers at every price point. As a premium phone supplier, Apple runs the risk that, as wireless carriers in the U.S. have eliminated phone subsidies and two-year contracts, customers may hold on to their phones longer, in turn weighing on future sales. Finally, some competitors like Xiaomi and Amazon are more than willing to sell hardware at close to cost in order to drive other revenue streams. If any of these devices offer a similar user experience to iOS products, Apple may be unable to capture an adequate premium on future hardware sales. All the while, the low end of the smartphone market (where Apple does not participate) will likely be the faster growing portion of the smartphone market for years to come.In addition to continual innovation on the hardware front, Apple must also deliver immaculate software and services in order to generate premiums on hardware sales. Recent mistakes like the early launch of Apple Maps and a buggy iOS 8.0.1 release show the difficulty in flawlessly staying on the cutting edge. Any severe slip up could be damaging to Apple’s brand and customer loyalty. Further, Apple still relies on a robust app-developer base and strong partnerships with third parties, yet these companies will likely focus on the operating system that provides the best return on investment and could turn their attention to Android if Apple’s iOS user base were to slip. If Apple were to falter and its exceptional brand be diminished as customers departed iOS in droves, we’re not even sure that Apple’s mighty cash cushion could help the firm buy its way out of any problem.",
                        "Management": "We view Apple as a good steward of shareholder capital. Tim Cook became CEO in August 2011 after cofounder, longtime CEO, and visionary Steve Jobs stepped down from the CEO role before passing away in October 2011. Cook was considered to be Jobs' right-hand man and served in various operations roles with Apple before becoming COO in 2005. We believe Jobs' passing was a blow to the firm, as he was a one-of-a-kind leader and creative mind. Arthur Levinson, former chairman and CEO of Genentech, is chairman of Apple's board of directors. Jeff Williams serves as COO of Apple and would be our best bet to replace Cook if he were to ever leave the CEO role.We’re comfortable with Apple’s level of technological innovation over the past couple of years after Jobs’ passing. Much of this innovation has come from new software and services within iOS like Apple Pay, rather than brand-new smash-hit products. That said, we still have high hopes that the Apple Watch will deliver incremental earnings growth to Apple, and the firm’s ability to execute and deliver another premium product will likely be viewed by many as a sign that Tim Cook’s Apple can, or cannot, deliver successful new products over time. We are not concerned by the relatively slow start for the Apple Watch, as both the iPod and iPhone had similarly tepid launches, at least in terms of unit sales. We think the firm still has a ways to go in areas like voice recognition and artificial intelligence to stay ahead of other tech titans like Google, Facebook, and Microsoft, but by no means would we call Apple a laggard in these areas just yet.Although Apple maintains sterling brand recognition and has hundreds of millions of loyal followers, the company has made a couple of missteps under Cook that, some skeptics would argue, would have never happened under Steve Jobs. Apple executed poorly when it decided to part ways with Google Maps in iOS 6 and launch Apple Maps with a variety of bugs and errors, leading to a formal apology. Also, Apple was relatively slow to recognize demand for larger-screen iPhones, and although the firm rectified this issue with its iPhone 6 product lineup, Samsung and other Android-based competitors had a two-year head start and were able to steal away some iOS customers who sought out a larger-screen device.More recently, Apple launched an iOS 8.0.1 update that was quickly recalled after it rendered some users' phones useless. Further, several prominent tech analysts and developers have questioned Apple’s cadence of updating iOS and OS X annually without fully fixing the bugs and problems with current software versions. These types of missteps could potentially leave the door open for any frustrated customers to try another platform like Android. At the very least, Apple may find it more difficult to quickly push its iOS user base onto the latest version of its operating system in future releases, which we see as a key positive differentiator for Apple over Android as apps developers don’t need to build and test their apps for a wide variety of operating system versions.In terms of capital allocation, we applaud Cook’s decision to initiate dividend and stock buyback programs, as well as take on debt in order to fund such programs. We recognize that many high-profile investors have called for larger buyback programs, but we think that Apple’s current plan of $175 billion is more than satisfactory as long as buybacks (and the debt issuances needed to fund these buybacks) are made in a prudent manner.Perhaps more importantly, we think Apple’s frugality in terms of acquisitions is quite admirable. Apple's strategy of focusing on smaller, tuck-in deals and developing products in-house, rather than splashy but questionable deals like Microsoft's purchase of Skype or Google's foray into hardware by acquiring Motorola Mobility and Nest, appears to have served investors quite well in recent years. Even Apple's $3.0 billion acquisition of Beats Music and Beats Electronics represented only a tiny portion of the firm's total cash balance, and we suspect that solid revenue growth and gross margins on headphone hardware sales may have justified the valuation.Apple has also done a good job of attracting topnotch talent to the company, such as former Burberry CEO Angela Ahrendts to run Apple’s retail and online stores. We are comfortable that these hires have strengthened Apple’s bench in the unlikely event of Cook departing the company, and each hire likely has aided in Apple’s efforts to build and deliver Apple Watch, and perhaps future products as well. All the while, Apple’s ongoing operations continue to generate operating margins and cash flow well above its peers in various hardware industries, which bodes well for future free cash flow for investors.",
                        "Valuation": "Our fair value estimate for Apple is $133 per share, which implies fiscal 2016 (ending September 2016) price/earnings of 16 times (and only 12.5 times after excluding Apple’s net cash balance on hand). Apple’s tremendous iPhone 6 and 6 Plus enabled the firm to grow fiscal 2015 revenue by 28% or $51 billion dollars, more than total revenue earned by almost 90% of the Fortune 500. Due to this amazingly high revenue bar, as well as currency headwinds and macroeconomic softness, we project that Apple’s revenue in fiscal 2016 will fall by 5%.We foresee a bounceback in revenue with 6% growth in fiscal 2017 along with the launch of the iPhone 7. Longer term, we foresee Apple returning to growth and achieving modest iPhone revenue growth in the low-single-digit range, with unit sales growing at a mid-single-digit pace. We envision Apple’s iPhone unit sales growing at a similar pace to the high-end of a maturing smartphone market. While we’re not overly bullish on long-term iPhone growth, we think that Apple’s moat will help the firm retain most of its current customers, thus making iPhone revenue more resilient than the ups and downs witnessed by other hardware-only smartphone makers. Longer-term, we model average revenue growth for Apple as a whole in the 3% range. We expect strong growth from Other Products (including the Watch and TV) and Services, but slower growth from larger businesses like iPhone, iPad, and Mac will serve to offset this healthy growth.Based on Apple’s premium pricing strategy and services becoming a slightly bigger part of Apple’s revenue mix, we model only modest gross margin deterioration for Apple from 40% in fiscal 2015 to 38% by fiscal 2020. We expect Apple to aggressively spend on research and development in order to fund new product categories (perhaps an Apple car), so that operating margins deteriorate from 30.5% in fiscal 2020 to the mid-20% range in the long-run.",
                        "Financial Health": "Apple maintains a conservative capital structure, with large cash reserves. As of March 2016, the firm held a whopping $233 billion in gross cash. However, a majority of cash and investments is held overseas, and Apple cannot efficiently repatriate it to the United States to use it for dividends, stock repurchases, or domestic acquisitions without paying additional taxes. To use this massive overseas cash balance during the past two years, Apple has taken on $80 billion of incremental debt at extremely low rates. We continue to believe that Apple's appetite for leverage is largely driven by highly favorable bond market pricing relative to the market valuation of Apple's earnings, as well as current U.S. corporate tax policies that make it difficult to tap overseas cash.In fiscal 2015, Apple produced $81.3 billion of free cash flow, paid $11.6 billion in dividends, and completed net share repurchases of $35.3 billion. After an update to its capital allocation policy, the firm has a commitment to return $250 billion to shareholders through March 2018, with $58 billion left in a share repurchase program. U.S.-based cash as of March 2016 was $23 billion, up slightly from a year ago. As long as interest rates remain low, we expect Apple to take on additional debt to fund buybacks rather than repatriate overseas cash and pay additional taxes. We continue to expect acquisitions to remain a lower priority for cash flow, with transactions focused on intriguing startups, from which Apple is able to capture unique engineering and development talent to help improve the firm's product offerings while fitting in seamlessly with Apple's corporate culture. We do not believe that Apple is likely to pursue a high-profile, high-priced acquisition that risks destroying value for shareholders.",
                        "Profile": "Apple designs consumer electronic devices, including smartphones (iPhone), tablets (iPad), PCs (Mac), smartwatches (Watch) and portable music players (iPod), as well as a variety of services like Apple Music, iCloud, and Apple Pay. Apple's products run internally developed software, and we believe this integration of hardware, software, and services often allows the firm to maintain premium pricing for its devices. Apple's products are distributed online as well as through company-owned stores and third-party retailers.",
                        "Summary": "."
                    }
                },
                secType: "ST"
            };

            _export("default", MORNINGSTAR_INSIGHTS_SECURE_STUB);
        }
    };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/services/service-overrides', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check'], function (_export) {
    var _createClass, _classCallCheck, BASE_URL_MAP, OVERRIDE_BASE_PARAM, SERVICE_STUB_PARAM, OVERRIDE_QUERY_PARAMS, ServiceOverrides;

    return {
        setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
            _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }],
        execute: function () {
            'use strict';

            BASE_URL_MAP = {
                COMPANY: 'http://sandbox5.COMPANY.com/',
                myVoya: 'https://my4.intg.COMPANY.com/'
            };
            OVERRIDE_BASE_PARAM = 'overridebase';
            SERVICE_STUB_PARAM = 'usestub';
            OVERRIDE_QUERY_PARAMS = [OVERRIDE_BASE_PARAM, SERVICE_STUB_PARAM];

            // TODO: switch this up for a factory implementation

            ServiceOverrides = (function () {
                function ServiceOverrides() {
                    _classCallCheck(this, ServiceOverrides);

                    this.locationObj = this.getNormalizedLocationObject(window.location);

                    // check if any query string props are set
                    this.stubEnabled = this.isStubEnabled(this.locationObj);
                    this.overrideBaseEnabled = this.isOverrideBaseEnabled(this.locationObj);
                }

                _createClass(ServiceOverrides, [{
                    key: 'getBaseUrl',
                    value: function getBaseUrl(baseKey) {
                        // TODO: only redo this on a page change
                        this.locationObj = this.getNormalizedLocationObject(window.location);

                        // set base to one from location
                        if (this.overrideBaseEnabled) {

                            if (baseKey === 'myVoya' && this.locationObj.query[OVERRIDE_BASE_PARAM] && this.locationObj.query[OVERRIDE_BASE_PARAM].length) {

                                // console.log('----OVERRIDE_BASE_PARAM', OVERRIDE_BASE_PARAM);
                                return this.locationObj.query[OVERRIDE_BASE_PARAM];
                            } else {

                                // console.log('----BASE_URL_MAP[ baseKey ]', BASE_URL_MAP[ baseKey ]);
                                return BASE_URL_MAP[baseKey] || 'overide base url not found';
                            }
                        } else {
                            return 'overide base url not found';
                        }
                    }

                    // stubServices(url, true || false)
                }, {
                    key: 'overrideIfEnabled',
                    value: function overrideIfEnabled(url, overrideEnable) {
                        if (overrideEnable === false || overrideEnable === false && this.stubEnabled === false) {
                            return url;
                        } else {
                            var urlObj = this.getNormalizedLocationObject(url);

                            // add to query params
                            urlObj.query[SERVICE_STUB_PARAM] = overrideEnable !== undefined ? overrideEnable : this.stubEnabled;

                            if (overrideEnable === false || overrideEnable === undefined && this.stubEnabled === false) {
                                delete urlObj.query[SERVICE_STUB_PARAM];
                            }
                            // get new string url
                            // TODO: set this up as a class-based approach
                            return this.getUrlObjAsString(urlObj);
                        }
                    }
                }, {
                    key: 'isStubEnabled',
                    value: function isStubEnabled(locationObj) {
                        // console.log('----SERVICE_STUB_PARAM',
                        //     locationObj.query[ SERVICE_STUB_PARAM ] !== undefined ? true : false
                        // );
                        return locationObj.query[SERVICE_STUB_PARAM] !== undefined ? true : false;
                    }
                }, {
                    key: 'isOverrideBaseEnabled',
                    value: function isOverrideBaseEnabled(locationObj) {
                        // console.log('----OVERRIDE_BASE_PARAM',
                        //     locationObj.query[ OVERRIDE_BASE_PARAM ] !== undefined ? true : false
                        // );
                        return locationObj.query[OVERRIDE_BASE_PARAM] !== undefined ? true : false;
                    }
                }, {
                    key: 'getNormalizedLocationObject',
                    value: function getNormalizedLocationObject(url) {
                        // ensure casting to string
                        url = url.href || url + "";

                        var base = url.match(/http[s]?:\/\/.*?\//) ? url.match(/http[s]?:\/\/.*?\//)[0] : '';
                        var path = url.indexOf('?') > -1 ? url.substr(base.length, url.indexOf('?') - base.length) : url.substr(base.length);
                        var query = this.getUrlParameters(url);

                        return {
                            original: url,
                            base: base,
                            path: path,
                            query: query
                        };
                    }
                }, {
                    key: 'getUrlParameters',
                    value: function getUrlParameters(url) {
                        url = url.indexOf('?') > -1 ? url.substr(url.indexOf('?') + 1) : '';

                        if (url == '') {
                            return {};
                        }

                        url = url.split('&');

                        var b = {};
                        for (var i = 0; i < url.length; ++i) {
                            var p = url[i].split('=', 2);
                            if (p.length == 1) {
                                b[p[0]] = '';
                            } else {
                                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '));
                            }
                        }
                        return b;
                    }
                }, {
                    key: 'getUrlObjAsString',
                    value: function getUrlObjAsString(urlObj) {

                        var queryString = '';

                        if (urlObj.query) {

                            for (var key in urlObj.query) {
                                // console.log('key, OVERRIDE_BASE_PARAM', key, OVERRIDE_BASE_PARAM)
                                if (key !== OVERRIDE_BASE_PARAM) {
                                    queryString += encodeURIComponent(key) + '=' + encodeURIComponent(urlObj.query[key]) + '&';
                                }
                            }

                            // remove trailing '&'
                            queryString = queryString.substr(-1) === '&' ? queryString.substr(0, queryString.length - 1) : queryString;

                            // show null if no props
                            queryString = queryString.length > 0 ? '?' + queryString : '';
                        }

                        // console.log('----urlObj.base + urlObj.path + queryString', urlObj.base + urlObj.path + queryString)

                        return urlObj.base + urlObj.path + queryString;
                    }
                }]);

                return ServiceOverrides;
            })();

            _export('default', ServiceOverrides);

            ;
        }
    };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/services/base-url', ['COMPANY-github:Voya/dd2c-ui@master/lib/services/service-overrides'], function (_export) {
    // assumes window.COMPANY.baseUrls is set before any of these files are loaded

    'use strict';

    var ServiceOverrides, serviceOverrides, BASE_URL;
    return {
        setters: [function (_COMPANYGithubVoyaDd2cUiMasterLibServicesServiceOverrides) {
            ServiceOverrides = _COMPANYGithubVoyaDd2cUiMasterLibServicesServiceOverrides['default'];
        }],
        execute: function () {
            serviceOverrides = new ServiceOverrides();

            // console.log('---serviceOverrides.overrideBaseEnabled', serviceOverrides.overrideBaseEnabled);
            // console.log('---serviceOverrides.getBaseUrl(COMPANY)', serviceOverrides.getBaseUrl('COMPANY'))

            BASE_URL = {
                COMPANY: serviceOverrides.overrideBaseEnabled ? serviceOverrides.getBaseUrl('COMPANY') : window.COMPANY.baseUrls.COMPANY, // => "http://sandbox5.COMPANY.com/"
                myVoya: serviceOverrides.overrideBaseEnabled ? serviceOverrides.getBaseUrl('myVoya') : window.COMPANY.baseUrls.myVoya // => "https://my4.intg.COMPANY.com/"
            };

            _export('BASE_URL', BASE_URL);
        }
    };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/services', ['npm:whatwg-fetch@0.11.1', 'COMPANY-github:Voya/dd2c-ui@master/lib/services-cache', 'COMPANY-github:Voya/dd2c-ui@master/lib/services/service-overrides', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/stub/morningstar-insights-secure-stub', 'COMPANY-github:Voya/dd2c-ui@master/lib/services/base-url'], function (_export) {
    /* globals Request, Headers */

    'use strict';

    // if BASE_URLs are needed, use /lib/services/base-url
    var getFromCache, addToCache, existsInCache, ServiceOverrides, MORNINGSTAR_INSIGHTS_SECURE_STUB, BASE_URL, serviceOverrides, MY_VOYA_BASE, SESSION_TOKEN_URL, SYMBOL_DETAILS_URL, SECURITY_PROFILE_URL, SESSION_INDUSTRY_PEERS_URL, PRESS_RELEASES_URL, PRESS_RELEASE_DETAILS_URL, HEADLINES_URL, HEADLINES_DETAILS_URL, INSIGHTS_PUBLIC_URL, INSIGHTS_SECURE_URL, PING_SESSION_URL, SSO_LOGIN_URL, SSO_SIGNUP_URL, SIGN_UP_LIGHTBOX_URL, TOOLTIP_ST_VALUATION, TOOLTIP_ST_PROFILE, TOOLTIP_MF_PROFILE, TOOLTIP_MF_STATS, TOOLTIP_MF_ASSETS, TOOLTIP_ETF_PROFILE, TOOLTIP_ETF_STATS, TOOLTIP_ST_INSIGHTS, TOOLTIP_ST_TENK, TOOLTIP_MF_TENK, TOOLTIP_ETF_TENK;

    _export('sessionToken', sessionToken);

    _export('newsHeadlines', newsHeadlines);

    _export('newsArticle', newsArticle);

    _export('pressReleases', pressReleases);

    _export('pressReleaseDetails', pressReleaseDetails);

    _export('symbolDetails', symbolDetails);

    _export('securityProfile', securityProfile);

    _export('industryPeersService', industryPeersService);

    _export('publicInsights', publicInsights);

    _export('secureInsights', secureInsights);

    _export('signUpLightbox', signUpLightbox);

    // function checkStatus(response) {
    //   if (response.status >= 200 && response.status < 300) {
    //     return response;
    //   } else {
    //     var error = new Error(response.statusText);
    //     error.response = response;
    //     throw error;
    //   }
    // }

    // function parseJSON(response) {
    //   return response.json();
    // }

    function sessionToken() {

        var sessionTokenUrl = serviceOverrides.overrideIfEnabled(SESSION_TOKEN_URL);

        return fetch(sessionTokenUrl, {
            headers: new Headers({ 'X-Requested-By': 'myCOMPANY' })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
    }

    function newsHeadlines(symbolString) {
        var cacheId = HEADLINES_URL.replace(/\{id\}/g, symbolString);

        cacheId = serviceOverrides.overrideIfEnabled(cacheId);

        if (existsInCache(cacheId)) {
            return getFromCache(cacheId);
        }

        var newsHeadlinesRequest = new Request(cacheId, {
            headers: new Headers({ 'X-Requested-By': 'myCOMPANY' })
        });

        return fetch(newsHeadlinesRequest).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
    }

    function newsArticle(symbolString) {
        var cacheId = HEADLINES_DETAILS_URL.replace(/\{id\}/g, symbolString);

        cacheId = serviceOverrides.overrideIfEnabled(cacheId);

        if (existsInCache(cacheId)) {
            return getFromCache(cacheId);
        }

        var newsArticleRequest = new Request(cacheId, {
            headers: new Headers({ 'X-Requested-By': 'myCOMPANY' })
        });

        return fetch(newsArticleRequest).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
    }

    function pressReleases(symbolString) {
        var cacheId = PRESS_RELEASES_URL.replace(/\{id\}/g, symbolString);

        cacheId = serviceOverrides.overrideIfEnabled(cacheId);

        if (existsInCache(cacheId)) {
            return getFromCache(cacheId);
        }
        var pressReleasesRequest = new Request(cacheId, {
            headers: new Headers({ 'X-Requested-By': 'myCOMPANY' })
        });

        return fetch(pressReleasesRequest).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
    }

    function pressReleaseDetails(symbolString) {
        var cacheId = PRESS_RELEASE_DETAILS_URL.replace(/\{id\}/g, symbolString);

        cacheId = serviceOverrides.overrideIfEnabled(cacheId);

        if (existsInCache(cacheId)) {
            return getFromCache(cacheId);
        }
        var pressReleaseDetailsRequest = new Request(cacheId, {
            headers: new Headers({ 'X-Requested-By': 'myCOMPANY' })
        });

        return fetch(pressReleaseDetailsRequest).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
    }

    function symbolDetails(symbolString) {
        var cacheId = SYMBOL_DETAILS_URL.replace(/\{id\}/g, symbolString);

        cacheId = serviceOverrides.overrideIfEnabled(cacheId);

        if (existsInCache(cacheId)) {
            return getFromCache(cacheId);
        }

        return fetch(cacheId, {
            headers: new Headers({ 'X-Requested-By': 'myCOMPANY' })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
    }

    function securityProfile(symbolString) {
        var cacheId = SECURITY_PROFILE_URL.replace(/\{id\}/g, symbolString);

        cacheId = serviceOverrides.overrideIfEnabled(cacheId);

        if (existsInCache(cacheId)) {
            return getFromCache(cacheId);
        }

        return fetch(cacheId, {
            headers: new Headers({ 'X-Requested-By': 'myCOMPANY' })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
    }

    function industryPeersService(symbolString) {
        var cacheId = SESSION_INDUSTRY_PEERS_URL.replace(/\{id\}/g, symbolString);

        cacheId = serviceOverrides.overrideIfEnabled(cacheId);

        if (existsInCache(cacheId)) {
            return getFromCache(cacheId);
        }

        return fetch(cacheId, {
            headers: new Headers({ 'X-Requested-By': 'myCOMPANY' })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
    }

    function publicInsights(symbolString) {
        var cacheId = INSIGHTS_PUBLIC_URL.replace(/\{id\}/g, symbolString);

        cacheId = serviceOverrides.overrideIfEnabled(cacheId);

        if (existsInCache(cacheId)) {
            return getFromCache(cacheId);
        }
        var publicInsightsRequest = new Request(cacheId, {
            headers: new Headers({ 'X-Requested-By': 'myCOMPANY' })
        });

        return fetch(publicInsightsRequest).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
    }

    function secureInsights(symbolString) {
        var cacheId = INSIGHTS_SECURE_URL.replace(/\{id\}/g, symbolString);

        cacheId = serviceOverrides.overrideIfEnabled(cacheId);
        // let cacheId = INSIGHTS_PUBLIC_URL.replace(/\{id\}/g, symbolString);

        if (existsInCache(cacheId)) {
            return getFromCache(cacheId);
        }

        return fetch(cacheId, {
            headers: new Headers({ 'X-Requested-By': 'myCOMPANY' }),
            credentials: 'include'
        }).then(function (response) {
            // return MORNINGSTAR_INSIGHTS_SECURE_STUB;
            return response.json();
        }).then(function (data) {
            return data;
        });
    }

    function signUpLightbox() {
        var cacheId = SIGN_UP_LIGHTBOX_URL;

        cacheId = serviceOverrides.overrideIfEnabled(cacheId);

        if (existsInCache(cacheId)) {
            return getFromCache(cacheId);
        }

        return fetch(cacheId, {
            headers: new Headers({
                'X-Requested-By': "myCOMPANY"
            }),
            credentials: 'include'
        }).then(function (data) {
            return data.json();
        });
    }

    return {
        setters: [function (_npmWhatwgFetch0111) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesCache) {
            getFromCache = _COMPANYGithubVoyaDd2cUiMasterLibServicesCache.getFromCache;
            addToCache = _COMPANYGithubVoyaDd2cUiMasterLibServicesCache.addToCache;
            existsInCache = _COMPANYGithubVoyaDd2cUiMasterLibServicesCache.existsInCache;
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesServiceOverrides) {
            ServiceOverrides = _COMPANYGithubVoyaDd2cUiMasterLibServicesServiceOverrides['default'];
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonStubMorningstarInsightsSecureStub) {
            MORNINGSTAR_INSIGHTS_SECURE_STUB = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonStubMorningstarInsightsSecureStub['default'];
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesBaseUrl) {
            BASE_URL = _COMPANYGithubVoyaDd2cUiMasterLibServicesBaseUrl.BASE_URL;
        }],
        execute: function () {
            serviceOverrides = new ServiceOverrides();
            MY_VOYA_BASE = BASE_URL.myVoya;
            SESSION_TOKEN_URL = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/token';
            SYMBOL_DETAILS_URL = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/symbol/{id}/data';
            SECURITY_PROFILE_URL = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/symbol/{id}/profile';
            SESSION_INDUSTRY_PEERS_URL = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/symbol/{id}/industry-peers';
            PRESS_RELEASES_URL = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/symbol/{id}/press-releases';
            PRESS_RELEASE_DETAILS_URL = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/symbol/press-releases/{id}/detail';
            HEADLINES_URL = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/symbol/{id}/news?itemCount=8';
            HEADLINES_DETAILS_URL = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/symbol/news/{id}/detail';
            INSIGHTS_PUBLIC_URL = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/symbol/{id}/insights';
            INSIGHTS_SECURE_URL = MY_VOYA_BASE + 'myCOMPANY/ws/ers/external/service/marketdata/symbol/{id}/insights';
            PING_SESSION_URL = MY_VOYA_BASE + 'COMPANYsso/ws/ers/public/pingSession';
            SSO_LOGIN_URL = MY_VOYA_BASE + 'COMPANYsso/logon';
            SSO_SIGNUP_URL = MY_VOYA_BASE + 'COMPANYsso/logon';

            //lightbox urls
            SIGN_UP_LIGHTBOX_URL = MY_VOYA_BASE + 'myCOMPANY/ws/ers/external/service/marketdata/content/loginmodal?section=insights';

            // security profile - stock
            TOOLTIP_ST_VALUATION = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/content/tooltip?secType=ST&section=valuation';

            _export('TOOLTIP_ST_VALUATION', TOOLTIP_ST_VALUATION);

            TOOLTIP_ST_PROFILE = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/content/tooltip?secType=ST&section=profile';

            _export('TOOLTIP_ST_PROFILE', TOOLTIP_ST_PROFILE);

            // security profile - mf
            TOOLTIP_MF_PROFILE = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/content/tooltip?secType=MF&section=profile';

            _export('TOOLTIP_MF_PROFILE', TOOLTIP_MF_PROFILE);

            TOOLTIP_MF_STATS = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/content/tooltip?secType=MF&section=stats';

            _export('TOOLTIP_MF_STATS', TOOLTIP_MF_STATS);

            TOOLTIP_MF_ASSETS = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/content/tooltip?secType=MF&section=assets';

            _export('TOOLTIP_MF_ASSETS', TOOLTIP_MF_ASSETS);

            // security profile - etf
            TOOLTIP_ETF_PROFILE = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/content/tooltip?secType=ETF&section=profile';

            _export('TOOLTIP_ETF_PROFILE', TOOLTIP_ETF_PROFILE);

            TOOLTIP_ETF_STATS = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/content/tooltip?secType=ETF&section=stats';

            _export('TOOLTIP_ETF_STATS', TOOLTIP_ETF_STATS);

            // morningstar insights
            TOOLTIP_ST_INSIGHTS = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/content/tooltip?secType=ST&section=insights';

            _export('TOOLTIP_ST_INSIGHTS', TOOLTIP_ST_INSIGHTS);

            // morningstar insights - 10k
            TOOLTIP_ST_TENK = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/content/tooltip?secType=ST&section=tenk';

            _export('TOOLTIP_ST_TENK', TOOLTIP_ST_TENK);

            TOOLTIP_MF_TENK = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/content/tooltip?secType=MF&section=tenk';

            _export('TOOLTIP_MF_TENK', TOOLTIP_MF_TENK);

            TOOLTIP_ETF_TENK = MY_VOYA_BASE + 'myCOMPANY/ws/ers/public/service/marketdata/content/tooltip?secType=ETF&section=tenk';

            _export('TOOLTIP_ETF_TENK', TOOLTIP_ETF_TENK);
        }
    };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/industry-peers/industry-peers-stub', [], function (_export) {
    'use strict';

    var SERVER_STUBBED_RESPONSE;
    return {
        setters: [],
        execute: function () {
            SERVER_STUBBED_RESPONSE = {
                inputSecType: 'ST ',
                symbols: [{
                    timezone: 'EDT',
                    rating: '3',
                    symbol: 'IBM',
                    companyName: 'International Business Machines Corp',
                    lastPrice: '145.54',
                    lastPriceDate: '23-03-2016',
                    lastPriceTime: '15:26:31.000',
                    netChange: '-2.56',
                    percentChange: '-1.7286',
                    secType: 'Stock'
                }, {
                    timezone: 'EDT',
                    rating: '3',
                    symbol: 'AAPL',
                    companyName: 'International Business Machines Corp',
                    lastPrice: '145.54',
                    lastPriceDate: '23-03-2016',
                    lastPriceTime: '15:26:31.000',
                    netChange: '-2.56',
                    percentChange: '-1.7286',
                    secType: 'Stock'
                }, {
                    timezone: 'EDT',
                    rating: '3',
                    symbol: 'AAPL',
                    companyName: 'International Business Machines Corp',
                    lastPrice: '145.54',
                    lastPriceDate: '23-03-2016',
                    lastPriceTime: '15:26:31.000',
                    netChange: '-2.56',
                    percentChange: '-1.7286',
                    secType: 'Stock'
                }, {
                    timezone: 'EDT',
                    rating: '3',
                    symbol: 'AAPL',
                    companyName: 'International Business Machines Corp',
                    lastPrice: '145.54',
                    lastPriceDate: '23-03-2016',
                    lastPriceTime: '15:26:31.000',
                    netChange: '-2.56',
                    percentChange: '-1.7286',
                    secType: 'Stock'
                }, {
                    timezone: 'EDT',
                    rating: '3',
                    symbol: 'AAPL',
                    companyName: 'International Business Machines Corp',
                    lastPrice: '145.54',
                    lastPriceDate: '23-03-2016',
                    lastPriceTime: '15:26:31.000',
                    netChange: '-2.56',
                    percentChange: '-1.7286',
                    secType: 'Stock'
                }, {
                    timezone: 'EDT',
                    rating: '3',
                    symbol: 'AAPL',
                    companyName: 'International Business Machines Corp',
                    lastPrice: '145.54',
                    lastPriceDate: '23-03-2016',
                    lastPriceTime: '15:26:31.000',
                    netChange: '-2.56',
                    percentChange: '-1.7286',
                    secType: 'Stock'
                }]
            };

            _export('SERVER_STUBBED_RESPONSE', SERVER_STUBBED_RESPONSE);
        }
    };
});

System.registerDynamic("npm:eventlistener@0.0.1/eventlistener", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      define(factory);
    } else if (typeof exports === 'object') {
      module.exports = factory();
    } else {
      root.eventListener = factory();
    }
  }(this, function() {
    function wrap(standard, fallback) {
      return function(el, evtName, listener, useCapture) {
        if (el[standard]) {
          el[standard](evtName, listener, useCapture);
        } else if (el[fallback]) {
          el[fallback]('on' + evtName, listener);
        }
      };
    }
    return {
      add: wrap('addEventListener', 'attachEvent'),
      remove: wrap('removeEventListener', 'detachEvent')
    };
  }));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:eventlistener@0.0.1", ["npm:eventlistener@0.0.1/eventlistener"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('npm:eventlistener@0.0.1/eventlistener');
  global.define = __define;
  return module.exports;
});

System.register('COMPANY-github:Voya/dd2c-ui@master/lib/components/page-resize/page-resize', ['npm:debounce@1.0.0', 'npm:eventlistener@0.0.1'], function (_export) {

    // el used for add/remove anchor
    'use strict';

    var debounce, eventListener;

    _export('addEventListeners', addEventListeners);

    _export('removeEventListeners', removeEventListeners);

    _export('checkSizing', checkSizing);

    function addEventListeners(el, onResizeCallback) {
        var _arguments = arguments;

        el._windowEventListener = debounce(function () {
            checkSizing(_arguments[0], onResizeCallback);
        }, 200);
        eventListener.add(window, 'resize', el._windowEventListener);
    }

    function removeEventListeners(el) {
        eventListener.remove(window, 'resize', el._windowEventListener);
    }

    function checkSizing(el, onResizeCallback) {
        onResizeCallback(el, {
            viewport: {
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            },
            el: el.getBoundingClientRect()
        });
    }

    return {
        setters: [function (_npmDebounce100) {
            debounce = _npmDebounce100['default'];
        }, function (_npmEventlistener001) {
            eventListener = _npmEventlistener001['default'];
        }],
        execute: function () {}
    };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/industry-peers/industry-peers', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:babel-runtime@5.8.24/core-js/array/from', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/content/en', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/services', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/industry-peers/industry-peers-stub', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/page-resize/page-resize'], function (_export) {
    var _createClass, _classCallCheck, _Array$from, CONTENT, industryPeersService, SERVER_STUBBED_RESPONSE, addEventListeners, COUNT_MAX_ITEMS, SEC_TYPE_STOCK, SEC_TYPE_ETF, SEC_TYPE_MUTUAL_FUND, SERVICE_PROP_SYMBOLS, SERVICE_PROP_INPUT_SEC_TYPE, SIZE_M, SIZE_S, SIZE_XS, INDUSTRY_PEERS_ITEM, breakpoints, IndustryPeers;

    return {
        setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
            _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_npmBabelRuntime5824CoreJsArrayFrom) {
            _Array$from = _npmBabelRuntime5824CoreJsArrayFrom['default'];
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonContentEn) {
            CONTENT = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonContentEn.CONTENT;
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices) {
            industryPeersService = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.industryPeersService;
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonIndustryPeersIndustryPeersStub) {
            SERVER_STUBBED_RESPONSE = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonIndustryPeersIndustryPeersStub.SERVER_STUBBED_RESPONSE;
        }, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsPageResizePageResize) {
            addEventListeners = _COMPANYGithubVoyaDd2cUiMasterLibComponentsPageResizePageResize.addEventListeners;
        }],
        execute: function () {

            // TODO: set max number of items
            'use strict';

            COUNT_MAX_ITEMS = 5;
            SEC_TYPE_STOCK = 'ST';
            SEC_TYPE_ETF = 'ETF';
            SEC_TYPE_MUTUAL_FUND = 'MF';
            SERVICE_PROP_SYMBOLS = 'symbols';
            SERVICE_PROP_INPUT_SEC_TYPE = 'inputSymbolSecType';
            SIZE_M = 'M';
            SIZE_S = 'S';
            SIZE_XS = 'XS';
            INDUSTRY_PEERS_ITEM = '.i-industry-peer-item';
            breakpoints = {};

            breakpoints.medium = {
                min: 450
            };
            breakpoints.small = {
                max: breakpoints.medium.min - 1,
                min: 300
            };
            breakpoints.extrasmall = {
                max: breakpoints.small.min - 1
            };

            IndustryPeers = (function () {
                function IndustryPeers() {
                    _classCallCheck(this, IndustryPeers);
                }

                _createClass(IndustryPeers, [{
                    key: 'created',
                    value: function created() {
                        // future-proofing for passing in an attribute
                        this.primarySymbol = this.symbol;
                        this.quoteLayoutSize = '';
                        this.title = '';
                        this.secType = '';
                        this.symbolList = [];

                        this.vm = {};
                        this.vm.content = CONTENT;

                        if (!this.primarySymbol) {
                            this.primarySymbol = this.getSymbolFromQueryString();
                        }
                    }
                }, {
                    key: 'attached',
                    value: function attached() {
                        this.getData();

                        var self = this;

                        addEventListeners(document.querySelector('.overview__industry-peers'), function (event, size) {
                            self.setLayoutSize(size);
                        });

                        var elSize = document.querySelector('.overview__industry-peers').getBoundingClientRect();

                        self.setLayoutSize({ el: elSize });
                    }
                }, {
                    key: 'setLayoutSize',
                    value: function setLayoutSize(size) {

                        if (size.el.width >= breakpoints.medium.min) {
                            this.quoteLayoutSize = SIZE_M;
                        } else if (size.el.width <= breakpoints.small.max && size.el.width >= breakpoints.small.min) {
                            this.quoteLayoutSize = SIZE_S;
                        } else {
                            this.quoteLayoutSize = SIZE_XS;
                        }
                    }
                }, {
                    key: 'getData',
                    value: function getData() {
                        var _this = this;

                        industryPeersService(this.primarySymbol).then(function (details) {

                            _this.setData(details);
                        });
                    }
                }, {
                    key: 'getSymbolFromQueryString',
                    value: function getSymbolFromQueryString() {
                        var getQueryString = function getQueryString(field, url) {
                            var href = url ? url : window.location.href;
                            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
                            var string = reg.exec(href);

                            return string ? string[1] : null;
                        };

                        return getQueryString('symbol') || '';
                    }
                }, {
                    key: 'setData',
                    value: function setData(details) {
                        var _this2 = this;

                        // START STUB ----------
                        // details = SERVER_STUBBED_RESPONSE;
                        // END STUB ------------

                        details = details[SERVICE_PROP_SYMBOLS] ? details : { symbols: [] };

                        // cap max number of items
                        if (details[SERVICE_PROP_SYMBOLS].length > 0 && details.symbols.length > COUNT_MAX_ITEMS) {
                            // TODO: create test scenario for this
                            details[SERVICE_PROP_SYMBOLS] = details[SERVICE_PROP_SYMBOLS].slice(0, COUNT_MAX_ITEMS);
                        }

                        this.setTitle(details[SERVICE_PROP_INPUT_SEC_TYPE]);

                        this.secType = details[SERVICE_PROP_INPUT_SEC_TYPE];

                        this.symbolList = details[SERVICE_PROP_SYMBOLS] || [];

                        // TODO: find another way around this!
                        // this is currently a fix for the fact that the elements are not "compiled" at this point
                        // an "afterCompile()" hook would be an ideal solution, but even then,
                        //   we only want to take this step after a compile following fresh data
                        setTimeout(function () {
                            // TODO: fix - the list of symbols isn't populated in time for this to work properly by this.symbols.length
                            var listEls = document.querySelectorAll('.i-industry-peer-list .i-industry-peer-item');

                            //this.setCaseAttribute(details[SERVICE_PROP_INPUT_SEC_TYPE]);

                            //this.vm.isDataAvailable = !!this.symbolList.length;

                            _Array$from(listEls).forEach(function (el, i) {
                                // TODO: refactor here and in template to not use "i"
                                if (_this2.symbolList[i]) {
                                    el.setSymbolDetails(_this2.symbolList[i]);
                                }
                            });
                        }, 0);
                    }
                }, {
                    key: 'setTitle',
                    value: function setTitle(securityType) {

                        securityType = securityType || '';

                        // ensure security type is passed
                        if (securityType.length) {
                            switch (securityType.trim().toUpperCase()) {
                                case SEC_TYPE_STOCK:
                                    this.title = this.vm.content.industryPeers;
                                    break;
                                case SEC_TYPE_ETF:
                                    this.title = this.vm.content.topHoldings;
                                    break;
                                case SEC_TYPE_MUTUAL_FUND:
                                    this.title = this.vm.content.topHoldings;
                                    break;
                                default:
                                    // reset title to blank
                                    this.title = '';
                            }
                        }
                    }

                    /*setCaseAttribute(securityType) {
                        securityType = securityType || '';
                         // ensure security type is passed
                        if (securityType.length) {
                            switch(securityType.trim().toUpperCase()) {
                                case SEC_TYPE_STOCK:
                                    this.setCaseToDefault();
                                    break;
                                case SEC_TYPE_ETF:
                                    this.setCaseToTopHoldings();
                                    break;
                                case SEC_TYPE_MUTUAL_FUND:
                                    this.setCaseToTopHoldings();
                                    break;
                                default:
                                    // reset case to default
                                    this.setCaseToDefault();
                            }
                        }
                    }
                     setCaseToDefault() {
                        let industryPeersItems = document.querySelectorAll(INDUSTRY_PEERS_ITEM);
                         Array.from(industryPeersItems).forEach( (industryPeer) => {
                            industryPeer.setAttribute("case", "default");
                        } );
                    }
                     setCaseToTopHoldings() {
                        let industryPeersItems = document.querySelectorAll(INDUSTRY_PEERS_ITEM);
                         Array.from(industryPeersItems).forEach( (industryPeer) => {
                            industryPeer.setAttribute("case", "top-holdings");
                        } );
                    }*/

                }, {
                    key: 'afterCompile',
                    value: function afterCompile(data) {}
                }]);

                return IndustryPeers;
            })();

            _export('IndustryPeers', IndustryPeers);
        }
    };
});

System.register('COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/stock-symbol-details', ['npm:babel-runtime@5.8.24/helpers/create-class', 'npm:babel-runtime@5.8.24/helpers/class-call-check', 'npm:babel-runtime@5.8.24/helpers/get', 'npm:babel-runtime@5.8.24/helpers/inherits', 'npm:babel-runtime@5.8.24/core-js/object/assign', 'COMPANY-github:Voya/deep-ui-COMPANY-component-utils@3.3.2', 'COMPANY-github:Voya/deep-ui-COMPANY-aurelia@1.1.0', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/services', 'COMPANY-github:Voya/deep-ui-COMPANY-search@enterprise-master/COMPANY-search-symbol-result/COMPANY-search-symbol-result', 'github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/news', 'COMPANY-github:Voya/deep-ui-COMPANY-tooltip@2.5.0', 'COMPANY-github:Voya/deep-ui-COMPANY-button@5.0.1/COMPANY-button', 'COMPANY-github:Voya/deep-ui-COMPANY-section-nav@develop/COMPANY-section-nav', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/stock-symbol-details.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/overview/overview.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/overview/overview', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/insights/insights.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/insights/insights', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/insights/morningstar-insights/morningstar-insights.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/insights/morningstar-insights/morningstar-insights', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/news.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/twitter/twitter.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/twitter/twitter', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/headlines/headlines.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/headlines/headlines', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/press-releases/press-releases.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/news/press-releases/press-releases', 'COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/endpoint', 'COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/target-selector', 'COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/bounding-selector', 'COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/min-width', 'COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/max-width', 'COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/position', 'COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/heading', 'COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/type', 'COMPANY-github:Voya/dd2c-ui@master/lib/custom-attributes/body-html', 'COMPANY-github:Voya/dd2c-ui@master/lib/services/base-url', 'COMPANY-github:Voya/dd2c-ui@master/lib/services/generic-service', 'COMPANY-github:Voya/dd2c-ui@master/lib/services/service-overrides', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/modal/modal.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/modal/modal', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/tooltip-contents/tooltip-contents', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/tooltip-contents/tooltip-contents.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/page-timestamp/page-timestamp', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/page-timestamp/page-timestamp.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/disclosure/disclosure', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/disclosure/disclosure.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/COMPANY-lightbox/COMPANY-lightbox', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/COMPANY-lightbox/COMPANY-lightbox.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/tooltip-definitions-content/tooltip-definitions-content', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/tooltip-definitions-content/tooltip-definitions-content.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/COMPANY-tooltip-definitions/COMPANY-tooltip-definitions', 'COMPANY-github:Voya/dd2c-ui@master/lib/components/COMPANY-tooltip-definitions/COMPANY-tooltip-definitions.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/value-converters/index', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/value-converters/dollars-billion-format', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/value-converters/percent-format', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/custom-attributes/sec-type', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/ten-k-growth-chart/ten-k-growth-chart.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/ten-k-growth-chart/ten-k-growth-chart', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile-stock.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile-stock', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile-etf.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile-etf', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile-mf.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile-mf', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/security-profile/security-profile', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/interactive-chart/interactive-chart.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/interactive-chart/interactive-chart', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/industry-peers/industry-peers.html!github:systemjs/plugin-text@0.0.7', 'COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/common/industry-peers/industry-peers'], function (_export) {
    var _createClass, _classCallCheck, _get, _inherits, _Object$assign, COMPANYComponentUtils, NativeHTMLElement, enhance, LogManager, Router, symbolDetails, SIGN_UP_LIGHTBOX_URL, VoyaSymbolDetails, VoyaSymbolDetailsElement;

    return {
        setters: [function (_npmBabelRuntime5824HelpersCreateClass) {
            _createClass = _npmBabelRuntime5824HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5824HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5824HelpersClassCallCheck['default'];
        }, function (_npmBabelRuntime5824HelpersGet) {
            _get = _npmBabelRuntime5824HelpersGet['default'];
        }, function (_npmBabelRuntime5824HelpersInherits) {
            _inherits = _npmBabelRuntime5824HelpersInherits['default'];
        }, function (_npmBabelRuntime5824CoreJsObjectAssign) {
            _Object$assign = _npmBabelRuntime5824CoreJsObjectAssign['default'];
        }, function (_COMPANYGithubVoyaDeepUiVoyaComponentUtils332) {
            COMPANYComponentUtils = _COMPANYGithubVoyaDeepUiVoyaComponentUtils332.COMPANYComponentUtils;
            NativeHTMLElement = _COMPANYGithubVoyaDeepUiVoyaComponentUtils332.NativeHTMLElement;
        }, function (_COMPANYGithubVoyaDeepUiVoyaAurelia110) {
            enhance = _COMPANYGithubVoyaDeepUiVoyaAurelia110.enhance;
            LogManager = _COMPANYGithubVoyaDeepUiVoyaAurelia110.LogManager;
            Router = _COMPANYGithubVoyaDeepUiVoyaAurelia110.Router;
        }, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices) {
            symbolDetails = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.symbolDetails;
            SIGN_UP_LIGHTBOX_URL = _COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonServices.SIGN_UP_LIGHTBOX_URL;
        }, function (_COMPANYGithubVoyaDeepUiVoyaSearchEnterpriseMasterVoyaSearchSymbolResultVoyaSearchSymbolResult) {}, function (_githubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsNews) {}, function (_COMPANYGithubVoyaDeepUiVoyaTooltip250) {}, function (_COMPANYGithubVoyaDeepUiVoyaButton501VoyaButton) {}, function (_COMPANYGithubVoyaDeepUiVoyaSectionNavDevelopVoyaSectionNav) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsVoyaSymbolDetailsHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsOverviewOverviewHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsOverviewOverview) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsInsightsInsightsHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsInsightsInsights) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsInsightsMorningstarInsightsMorningstarInsightsHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsInsightsMorningstarInsightsMorningstarInsights) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsNewsHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsTwitterTwitterHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsTwitterTwitter) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsHeadlinesHeadlinesHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsHeadlinesHeadlines) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsPressReleasesPressReleasesHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsNewsPressReleasesPressReleases) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibCustomAttributesEndpoint) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibCustomAttributesTargetSelector) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibCustomAttributesBoundingSelector) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibCustomAttributesMinWidth) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibCustomAttributesMaxWidth) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibCustomAttributesPosition) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibCustomAttributesHeading) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibCustomAttributesType) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibCustomAttributesBodyHtml) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesBaseUrl) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesGenericService) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibServicesServiceOverrides) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsModalModalHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsModalModal) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsTooltipContentsTooltipContents) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsTooltipContentsTooltipContentsHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsPageTimestampPageTimestamp) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsPageTimestampPageTimestampHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsDisclosureDisclosure) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsDisclosureDisclosureHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsVoyaLightboxVoyaLightbox) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsVoyaLightboxVoyaLightboxHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsTooltipDefinitionsContentTooltipDefinitionsContent) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsTooltipDefinitionsContentTooltipDefinitionsContentHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsVoyaTooltipDefinitionsVoyaTooltipDefinitions) {}, function (_COMPANYGithubVoyaDd2cUiMasterLibComponentsVoyaTooltipDefinitionsVoyaTooltipDefinitionsHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonValueConvertersIndex) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonValueConvertersDollarsBillionFormat) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonValueConvertersPercentFormat) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonCustomAttributesSecType) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonTenKGrowthChartTenKGrowthChartHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonTenKGrowthChartTenKGrowthChart) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonSecurityProfileSecurityProfileStockHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonSecurityProfileSecurityProfileStock) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonSecurityProfileSecurityProfileEtfHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonSecurityProfileSecurityProfileEtf) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonSecurityProfileSecurityProfileMfHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonSecurityProfileSecurityProfileMf) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonSecurityProfileSecurityProfileHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonSecurityProfileSecurityProfile) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonInteractiveChartInteractiveChartHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonInteractiveChartInteractiveChart) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonIndustryPeersIndustryPeersHtmlGithubSystemjsPluginText007) {}, function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsCommonIndustryPeersIndustryPeers) {}],
        execute: function () {

            //import { }

            'use strict';

            //import componentUtils from 'COMPANY-component-utils';

            //end manual import

            VoyaSymbolDetails = (function () {
                function VoyaSymbolDetails() {
                    _classCallCheck(this, VoyaSymbolDetails);

                    this.vm = {};
                }

                // This minimal standard custom element declaration serves as a way for this
                // aurelia component to be used in other applications that aren't based on aurelia.
                // It is very likely that when https://github.com/aurelia/web-components is ready, we
                // can use that instead, which will be good, because this approach has more overhead than is ideal

                _createClass(VoyaSymbolDetails, [{
                    key: 'attached',
                    value: function attached() {
                        this.vm.signUpLightboxURL = SIGN_UP_LIGHTBOX_URL;
                    }
                }]);

                return VoyaSymbolDetails;
            })();

            _export('VoyaSymbolDetails', VoyaSymbolDetails);

            VoyaSymbolDetailsElement = (function (_NativeHTMLElement) {
                _inherits(VoyaSymbolDetailsElement, _NativeHTMLElement);

                function VoyaSymbolDetailsElement() {
                    _classCallCheck(this, VoyaSymbolDetailsElement);

                    _get(Object.getPrototypeOf(VoyaSymbolDetailsElement.prototype), 'constructor', this).apply(this, arguments);
                }

                _createClass(VoyaSymbolDetailsElement, [{
                    key: 'createdCallback',
                    value: function createdCallback() {
                        enhance({
                            resources: 'dd2c-ui/stock-symbol-details/stock-symbol-details',
                            element: this
                        });

                        this.symbolValue = this.getSymbolFromQueryString();

                        this.getData(this.symbolValue);
                    }
                }, {
                    key: 'getData',
                    value: function getData(symbol) {
                        var _this = this;

                        symbolDetails(symbol).then(function (details) {

                            _this.setData(details[0]);
                        });
                    }
                }, {
                    key: 'setData',
                    value: function setData(symbolDetails) {
                        // console.log('symbolDetails', symbolDetails)

                        symbolDetails = symbolDetails || {};

                        var secType = {
                            stock: symbolDetails.secType === 'ST',
                            etf: symbolDetails.secType === 'ETF',
                            mutualFund: symbolDetails.secType === 'MF'
                        };

                        this.updateSymbolDetailsProps({
                            mainSymbolDetails: symbolDetails,
                            secType: secType
                        });
                    }
                }, {
                    key: 'updateSymbolDetailsProps',
                    value: function updateSymbolDetailsProps(viewModelUpdateObject) {
                        this.au['stock-symbol-details'].viewModel = _Object$assign(this.au['stock-symbol-details'].viewModel, viewModelUpdateObject);
                    }
                }, {
                    key: 'getSymbolFromQueryString',
                    value: function getSymbolFromQueryString() {
                        var getQueryString = function getQueryString(field, url) {
                            var href = url ? url : window.location.href;
                            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
                            var string = reg.exec(href);

                            return string ? string[1] : null;
                        };

                        return getQueryString('symbol') || '';
                    }
                }]);

                return VoyaSymbolDetailsElement;
            })(NativeHTMLElement);

            document.registerElement('stock-symbol-details', VoyaSymbolDetailsElement);
        }
    };
});

//import './COMPANY-ten-k-growth-chart/COMPANY-ten-k-growth-chart';

// TODO: apply css reset

// let logger = LogManager.getLogger('stock-symbol-details');
//start manual import of all files needed when this modules is bundled into an outer app

/*import '../lib/components/COMPANY-tooltip-carousel/COMPANY-tooltip-carousel';
import '../lib/components/COMPANY-tooltip-carousel/COMPANY-tooltip-carousel.html!text';*/

System.register('src/stock-symbol-details.js', ['COMPANY-github:Voya/dd2c-ui@master/stock-symbol-details/stock-symbol-details'], function (_export) {
  'use strict';

  return {
    setters: [function (_COMPANYGithubVoyaDd2cUiMasterVoyaSymbolDetailsVoyaSymbolDetails) {}],
    execute: function () {}
  };
});
