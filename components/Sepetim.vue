
<template>
  <html lang="tr">
    <head>
      <meta charset="UTF-8" />
      <meta name="theme-color" content="#003177" />
      <meta
        name="viewport"
        content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
      />
      <meta name="content-language" content="tr-TR" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <script src="https://js-agent.newrelic.com/nr-1211.min.js"></script>
      <script
        async=""
        src="https://www.googletagmanager.com/gtm.js?id=GTM-5RJ3235"
      ></script>
      
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Vatan Bilgisayar" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" />
      <title>VATAN BİLGİSAYAR - Teknoloji &amp; Bilgisayar Hiperstore'u</title>
      <meta
        name="Description"
        content="Masaüstü bilgisayar, dizüstü bilgisayar, cep telefonu, televizyon, tablet, fotoğraf makinesi ve binlerce teknoloji ürünü Vatan Bilgisayar' da."
      />
      <meta name="Keywords" content="" />
      <meta
        name="twitter:description"
        content="Masaüstü bilgisayar, dizüstü bilgisayar, cep telefonu, televizyon, tablet, fotoğraf makinesi ve binlerce teknoloji ürünü Vatan Bilgisayar' da."
      />
      <meta
        property="og:description"
        content="Masaüstü bilgisayar, dizüstü bilgisayar, cep telefonu, televizyon, tablet, fotoğraf makinesi ve binlerce teknoloji ürünü Vatan Bilgisayar' da."
      />
      <meta
        property="twitter:title"
        content="Masaüstü bilgisayar, dizüstü bilgisayar, cep telefonu, televizyon, tablet, fotoğraf makinesi ve binlerce teknoloji ürünü Vatan Bilgisayar' da."
      />
      <meta
        property="og:title"
        content="Masaüstü bilgisayar, dizüstü bilgisayar, cep telefonu, televizyon, tablet, fotoğraf makinesi ve binlerce teknoloji ürünü Vatan Bilgisayar' da."
      />
      <meta property="og:keywords" content="" />

      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://www.vatanbilgisayar.com/images/frontend/favicon.ico"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="https://www.vatanbilgisayar.com/images/frontend/favicon.ico"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/iphone5_splash.png"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/iphone6_splash.png"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/iphoneplus_splash.png"
        media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/iphonex_splash.png"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/iphonexr_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/iphonexsmax_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/ipad_splash.png"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/ipadpro1_splash.png"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/ipadpro3_splash.png"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/ipadpro2_splash.png"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/logo_192_white.png"
      />
      <link rel="stylesheet" href="https://www.vatanbilgisayar.com/assets/dist/css/app.css?v=10007957020904" />

      <script>
        var dataLayer = []
        if (window.location.href.indexOf('Completed') <= 0) {
          ;(function (w, d, s, l, i) {
            w[l] = w[l] || []
            w[l].push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js',
            })
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : ''
            j.async = true
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
            f.parentNode.insertBefore(j, f)
          })(window, document, 'script', 'dataLayer', 'GTM-5RJ3235')
        }
      </script>

      <script
        async=""
        src="https://www.googletagmanager.com/gtag/js?id=AW-1029930232"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []
        function gtag() {
          dataLayer.push(arguments)
        }
        gtag('js', new Date())

        gtag('config', 'AW-1029930232')
      </script>

      <script src="/Scripts/GTM.js?v=10007957020904"></script>
      <style type="text/css">
        :root topadblock, :root span[id^="ezoic-pub-ad-placeholder-"], :root input[onclick^="window.open('http://www.FriendlyDuck.com/"], :root img[alt^="Fuckbook"], :root iframe[src*="mellowads.com"], :root div[id^="zergnet-widget"], :root div[id^="traffective-ad-"], :root div[id^="taboola-stream-"], :root div[id^="sticky_ad_"], :root div[id^="rc-widget-"], :root div[id^="q1-adset-"], :root div[id^="proadszone-"], :root div[id^="lazyad-"], :root div[id^="gtm-ad-"], :root div[id^="ezoic-pub-ad-"], :root div[id^="dmRosAdWrapper"], :root div[id^="div-adtech-ad-"], :root div[id^="dfp-slot-"], :root div[id^="dfp-ad-"], :root div[id^="code_ads_"], :root div[id^="block-views-topheader-ad-block-"], :root div[id^="banner-ad-"], :root div[id^="advt-"], :root div[id^="advads_"], :root div[id^="ads300_600-widget"], :root input[onclick^="window.open('http://www.friendlyduck.com/"], :root div[id^="ads300_250-widget"], :root div[id^="ads300_100-widget"], :root div[id^="ads120_600-widget"], :root div[id^="adrotate_widgets-"], :root div[id^="adfox_"], :root div[id^="ad_script_"], :root div[id^="ad_rect_"], :root div[id^="ad_position_"], :root div[id^="ad-server-"], :root div[id^="ad-inserter-"], :root div[id^="ad-cid-"], :root div[id^="acm-ad-tag-"], :root div[id^="YFBMSN"], :root div[id^="ADV-SLOT-"], :root div[data-test-id="AdDisplayWrapper"], :root div[data-spotim-slot], :root div[data-role="sidebarAd"], :root div[data-native_ad], :root div[data-mediatype="advertising"], :root div[data-id-advertdfpconf], :root div[data-content="Advertisement"], :root div[data-adunit], :root div[data-adunit-path], :root div[data-adservice-param-tagid="contentad"], :root div[data-adname], :root div[data-ad-wrapper], :root div[data-ad-underplayer], :root div[data-ad-placeholder], :root div[class^="zn-sponsored-outbrain-"], :root div[class^="sp-adslot-"], :root div[class^="proadszone-"], :root div[class^="pane-google-admanager-"], :root div[class^="native-ad-"], :root div[class^="lifeOnwerAd"], :root div[class^="largeRectangleAd_"], :root div[class^="kiwiad-popup"], :root div[class^="kiwiad-desktop"], :root div[class^="index_adBeforeContent_"], :root div[class^="index_adAfterContent_"], :root div[class^="index__adWrapper"], :root div[class^="block-openx-"], :root div[class^="backfill-taboola-home-slot-"], :root div[class^="articleAdUnitMPU_"], :root div[class^="advertisement-desktop"], :root div[class^="adsbutt_wrapper_"], :root div[class^="ads-partner-"], :root div[class^="adbanner_"], :root div[class^="ad_position_"], :root div[class^="SponsoredAds"], :root div[class^="ResponsiveAd-"], :root div[class^="PreAd_"], :root div[class^="Display_displayAd"], :root div[class^="Directory__footerAds"], :root div[class^="BannerAd_"], :root div[class^="AdhesionAd_"], :root div[class^="Ad__bigBox"], :root div[class^="Ad__adContainer"], :root div[class^="AdSlot__container"], :root div[id^="divAdvAD_"], :root div[class^="ad_border_"], :root div[class^="AdItem-"], :root div[class^="AdEmbeded__AddWrapper"], :root span[data-component-type="s-ads-metrics"], :root div[class^="AdBannerWrapper-"], :root div[class*="_AdInArticle_"], :root div[class*="-storyBodyAd-"], :root div[data-subscript="Advertising"], :root div[class$="dealnews"] > .dealnews, :root div > [class][onclick*=".updateAnalyticsEvents"], :root display-ads, :root display-ad-component, :root bottomadblock, :root aside[id^="tn_ads_widget-"], :root aside[id^="adrotate_widgets-"], :root amp-ad-custom, :root a[target="_blank"][onmousedown="this.href^='http://paid.outbrain.com/network/redir?"], :root a[target="_blank"][href^="http://api.taboola.com/"], :root div[class^="BlockAdvert-"], :root a[src^="https://www.utherverse.com/net/"], :root a[onmousedown^="this.href='http://paid.outbrain.com/network/redir?"][target="_blank"] + .ob_source, :root a[onmousedown^="this.href='http://paid.outbrain.com/network/redir?"][target="_blank"], :root a[onclick*="//m.economictimes.com/etmack/click.htm"], :root a[href^="https://zononi.com/"], :root a[href^="https://www.what-sexdating.com/"], :root a[href^="https://www.vewwrmp.com/"], :root a[href^="https://www.spyoff.com/"], :root a[href^="https://www.sheetmusicplus.com/?aff_id="], :root a[href^="https://www.sheetmusicplus.com/"][href*="?aff_id="], :root a[href^="https://www.share-online.biz/affiliate/"], :root a[href^="https://www.securegfm.com/"], :root a[href^="https://www.rabbits.webcam/?id="], :root a[href^="https://www.purevpn.com/"][href*="&utm_source=aff-"], :root a[href^="https://www.privateinternetaccess.com/"] > img, :root a[href^="https://www.porngamesxxx.com/"][href*="?campaign="], :root a[href^="https://www.passeura.com/"], :root div[id^="amzn-assoc-ad"], :root a[href^="https://www.oboom.com/ref/"], :root div[itemtype="http://schema.org/WPAdBlock"], :root a[href^="https://www.nudeidols.com/cams/"], :root a[href^="https://www.mypornstarcams.com/landing/click/"], :root a[href^="https://www.kingsoffetish.com/tour?partner_id="], :root div[data-adzone], :root a[href^="https://www.iyalc.com/"], :root a[href^="https://www.goldenfrog.com/vyprvpn?offer_id="][href*="&aff_id="], :root a[href^="https://www.get-express-vpn.com/offer/"], :root a[href^="https://www.gambling-affiliation.com/cpc/"], :root a[href^="https://www.dollps.com/?track="], :root a[href^="https://www.clicktraceclick.com/"], :root a[href^="https://www.camsoda.com/enter.php?id="], :root a[href^="https://www.brazzersnetwork.com/landing/"], :root a[href^="https://www.bebi.com"], :root div[class^="pane-adsense-managed-"], :root a[href^="https://www.bang.com/?aff="], :root a[href^="https://www.awin1.com/cread.php?awinaffid="], :root a[href^="https://www.arthrozene.com/"][href*="?tid="], :root a[href^="https://weedzy.co.uk/"][href*="&utm_"], :root a[href^="https://vod09197d7.club/"], :root a[href^="https://vo2.qrlsx.com/"], :root a[href^="https://unreshiramor.com/"], :root div[id^="tms-ad-dfp-"], :root a[href^="http://c43a3cd8f99413891.com/"], :root a[href^="https://trust.zone/go/r.php?RID="], :root a[href^="https://trf.bannerator.com/"], :root a[href^="http://go.247traffic.com/"], :root a[href^="https://bestcond1tions.com/"], :root a[href^="https://trappist-1d.com/"], :root a[href^="https://tracking.truthfinder.com/?a="], :root a[href^="https://tracking.gitads.io/"], :root a[href^="https://go.xxxjmp.com/"], :root a[href^="https://tracking.avapartner.com/"], :root a[href^="https://track.wg-aff.com"], :root a[href^="https://track.ultravpn.com/"], :root a[href^="https://www.adultempire.com/"][href*="?partner_id="], :root a[href^="https://track.healthtrader.com/"], :root a[href^="https://track.clickmoi.xyz/"], :root a[href^="https://control.trafficfabrik.com/"], :root a[href^="https://track.52zxzh.com/"], :root a[href^="https://axdsz.pro/"], :root a[href^="https://tour.mrskin.com/"], :root a[href^="http://www.greenmangaming.com/?tap_a="], :root a[href^="https://tm-offers.gamingadult.com/"], :root a[href^="https://t.hrtyj.com/"], :root a[href^="https://syndication.optimizesrv.com/splash.php?"], :root a[href^="https://squren.com/rotator/?atomid="], :root a[href^="http://cdn3.adexprts.com/"], :root a[href^="https://spygasm.com/track?"], :root div[id^="ad-div-"], :root a[href^="https://secure.eveonline.com/ft/?aid="], :root a[href^="https://secure.bstlnk.com/"], :root div[class^="kiwi-ad-wrapper"], :root a[href^="https://rev.adsession.com/"], :root [href*=".trackmstr.com"], :root a[href^="https://refpasrasw.world/"], :root a[href^="https://mediaserver.entainpartners.com/renderBanner.do?"], :root a[href^="https://refpaexhil.top/"], :root a[href^="https://reachtrgt.com/"], :root AD-SLOT, :root a[href^="https://pubads.g.doubleclick.net/"], :root a[href^="https://prf.hn/click/"][href*="/camref:"] > img, :root a[href^="http://www.my-dirty-hobby.com/?sub="], :root a[href^="https://porndeals.com/?track="], :root a[href^="//go.onclasrv.com/"], :root a[href^="https://pcm.bannerator.com/"], :root a[href^="https://offerforge.net/"], :root a[href^="https://ndt5.net/"], :root div[id^="ad_head_celtra_"], :root a[href^="https://wittered-mainging.com/"], :root a[href^="https://t.grtyi.com/"], :root a[href^="https://myusenet.xyz/"], :root a[href^="https://my-movie.club/"], :root [href^="https://detachedbates.com/"], :root a[href^="https://mk-cdn.net/"], :root a[href^="https://mk-ads.com/"], :root a[href^="https://meet-sex-here.com/?u="], :root a[href^="https://medleyads.com/"], :root a[href^="https://mediaserver.gvcaffiliates.com/renderBanner.do?"], :root iframe[src^="https://tpc.googlesyndication.com/"], :root a[href*=".approvallamp.club/"], :root a[href^="https://a.bestcontentoperation.top/"], :root a[href^="https://landing1.brazzersnetwork.com"], :root a[href^="http://adrunnr.com/"], :root a[href^="https://landing.brazzersplus.com/"], :root a[href^="https://land.rk.com/landing/"], :root a[href^="http://ad.au.doubleclick.net/"], :root a[href^="https://k2s.cc/pr/"], :root a[href^="https://juicyads.in/"], :root a[href^="https://join.virtuallust3d.com/"], :root a[href^="http://www.uniblue.com/cm/"], :root a[href^="https://join.sexworld3d.com/track/"], :root a[href^="https://join.dreamsexworld.com/"], :root a[href^="https://track.effiliation.com/servlet/effi.redir?"], :root a[href^="https://iqoption.com/lp/mobile-partner/"][href*="?aff="], :root [href^="http://join.shemalepornstar.com/"], :root a[href^="https://incisivetrk.cvtr.io/click?"], :root a[href^="https://iactrivago.ampxdirect.com/"], :root [href*="https://www.jmbullion.com/gold/"], :root a[href^="https://iac.ampxdirect.com/"], :root a[href^="https://horny-pussies.com/tds"], :root a[href^="https://graizoah.com/"], :root a[href^="http://feedads.g.doubleclick.net/"], :root a[href^="https://redsittalvetoft.pro/"], :root a[href^="https://googleads.g.doubleclick.net/pcs/click"], :root a[href^="http://cdn.adstract.com/"], :root a[href^="https://gogoman.me/"], :root a[href^="https://go.xtbaffiliates.com/"], :root a[href^="https://go.strpjmp.com/"], :root a[href^="https://go.stripchat.com/"][href*="&campaignId="], :root a[href^="https://go.markets.com/visit/?bta="], :root a[href^="https://go.julrdr.com/"], :root a[href^="https://landing.brazzersnetwork.com/"], :root a[href^="https://go.hpyjmp.com/"], :root a[href^="https://go.goasrv.com/"], :root a[href^="https://adnetwrk.com/"], :root a[href^="https://go.gldrdr.com/"], :root a[href^="https://fleshlight.sjv.io/"], :root a[href^="https://go.etoro.com/"] > img, :root a[href^="https://go.currency.com/"], :root a[href^="https://track.afftck.com/"], :root a[href^="http://guideways.info/"], :root a[href^="https://go.cmrdr.com/"], :root a[href^="http://www.easydownloadnow.com/"], :root a[href^="https://go.alxbgo.com/"], :root a[href*=".inclk.com/"], :root a[href^="https://go.ad2up.com/"], :root a[href^="https://giftsale.co.uk/?utm_"], :root a[href^="https://get.surfshark.net/aff_c?"][href*="&aff_id="] > img, :root a[href^="https://fonts.fontplace9.com/"], :root a[href^="http://clkmon.com/adServe/"], :root a[href^="https://flirtaescopa.com/"], :root a[href^="https://fertilitycommand.com/"], :root a[href^="https://fakelay.com/"], :root a[href^="https://earandmarketing.com/"], :root [lazy-ad="leftthin_banner"], :root a[href^="https://dynamicadx.com/"], :root a[href^="https://djtcollectorclub.org/"][href*="?affiliate_id="], :root a[href^="https://tc.tradetracker.net/"] > img, :root a[href^="//srv.buysellads.com/"], :root a[href^="https://dianches-inchor.com/"], :root a[href^="http://adf.ly/?id="], :root a[href^="https://uncensored3d.com/"], :root a[href^="https://creacdn.top-convert.com/"], :root iframe[src^="https://pagead2.googlesyndication.com/"], :root a[href^="https://retiremely.com/"], :root a[href^="https://cpmspace.com/"], :root a[href^="https://cpartner.bdswiss.com/"], :root a[href^="https://clicks.pipaffiliates.com/"], :root .commercial-unit-mobile-top > .v7hl4d, :root a[href^="https://click.plista.com/pets"], :root a[href^="https://chaturbate.xyz/"], :root a[href^="http://look.djfiln.com/"], :root a[href^="https://chaturbate.jjgirls.com/"][href*="?tour="], :root a[href^="https://chaturbate.com/in/?track="], :root a[href^="https://chaturbate.com/in/?tour="], :root a[href^="https://chaturbate.com/affiliates/"], :root [href*="wap4dollar.com/"], :root a[href^="https://mcdlks.com/"], :root a[href^="https://bs.serving-sys.com"], :root a[href^="https://blackorange.go2cloud.org/"], :root a[href^="https://go.hpyrdr.com/"], :root a[href^="https://billing.purevpn.com/aff.php"] > img, :root a[href^="https://affiliates.bet-at-home.com/processing/"], :root a[href^="https://ads.ad4game.com/"], :root a[href^="https://betway.com/"][href*="&a="], :root a[href^="http://www.linkbucks.com/referral/"], :root a[href^="https://azpresearch.club/"], :root a[href^="https://awptjmp.com/"], :root a[href^="http://www.fleshlight.com/"], :root a[href^="https://aweptjmp.com/"], :root a[href^="https://awentw.com/"], :root a[href^="https://albionsoftwares.com/"], :root a[href^="//postlnk.com/"], :root a[href^="https://affiliate.rusvpn.com/click.php?"], :root a[href^="https://affiliate.geekbuying.com/gkbaffiliate.php?"], :root a[href^="https://adultfriendfinder.com/go/page/landing"], :root a[href*="pussl3.com"], :root a[href^="https://adswick.com/"], :root ADS-RIGHT, :root a[href^="https://tracking.trackcasino.co/"], :root a[href^="https://adserver.adreactor.com/"], :root a[href^="https://land.brazzersnetwork.com/landing/"], :root a[href^="https://ads.leovegas.com/redirect.aspx?"], :root a[href^="https://t.hrtye.com/"], :root a[href^="https://ads.cdn.live/"], :root a[href^="https://ads.betfair.com/redirect.aspx?"], :root a[href^="https://refpaano.host/"], :root a[href^="https://meet-to-fuck.com/tds"], :root a[href^="https://adhealers.com/"], :root a[href^="http://servicegetbook.net/"], :root a[href^="https://bngpt.com/"], :root a[href^="http://clickandjoinyourgirl.com/"], :root a[href^="https://ad13.adfarm1.adition.com/"], :root a[href^="https://misspkl.com/"], :root a[href^="https://ad.zanox.com/ppc/"] > img, :root a[href^="https://static.fleshlight.com/images/banners/"], :root app-advertisement, :root a[href^="https://ad.doubleclick.net/"], :root a[href^="http://zevera.com/afi.html"], :root a[href^="http://go.oclaserver.com/"], :root a[href^="https://ad.atdmt.com/"], :root a[href^="https://cams.imagetwist.com/in/?track="], :root .trc_rbox .syndicatedItem, :root a[href^="https://aaucwbe.com/"], :root a[href^="https://a.bestcontentweb.top/"], :root a[href^="http://hyperlinksecure.com/go/"], :root a[href^="https://track.themadtrcker.com/"], :root a[href^="https://bullads.net/get/"], :root a[href^="http://down1oads.com/"], :root a[href^="http://yads.zedo.com/"], :root a[href^="http://xtgem.com/click?"], :root a[href^="https://ads.trafficpoizon.com/"], :root div[class^="local-feed-banner-ads"], :root a[href^="http://wxdownloadmanager.com/dl/"], :root a[href^="http://www.zergnet.com/i/"], :root a[href*=".clksite.com/"], :root a[href^="http://www.webtrackerplus.com/"], :root a[href^="http://www.usearchmedia.com/signup?"], :root a[href^="http://www.torntv-downloader.com/"], :root a[href^="http://www.tirerack.com/affiliates/"], :root a[href^="http://www.text-link-ads.com/"], :root a[href^="https://gghf.mobi/"], :root a[href^="http://www.terraclicks.com/"], :root a[href^="https://ads-for-free.com/click.php?"], :root a[href^="http://www.socialsex.com/"], :root a[href^="https://join.virtualtaboo.com/track/"], :root a[onmousedown^="this.href='https://paid.outbrain.com/network/redir?"][target="_blank"], :root [href^="https://awbbjmp.com/"], :root a[href^="http://www.sfippa.com/"], :root a[href^="http://www.xmediaserve.com/"], :root a[href^="http://www.sex.com/videos/?utm_"], :root a[href^="https://natour.naughtyamerica.com/track/"], :root a[href^="http://paid.outbrain.com/network/redir?"], :root a[href^="http://www.sex.com/?utm_"], :root a[href^="http://secure.signup-page.com/"], :root a[href^="http://www.quick-torrent.com/download.html?aff"], :root a[href^="http://www.plus500.com/?id="], :root a[href^="http://www.pinkvisualgames.com/?revid="], :root a[href^="https://trklvs.com/"], :root a[href^="http://www.paddypower.com/?AFF_ID="], :root a[href^="https://go.247traffic.com/"], :root a[href^="http://www.freefilesdownloader.com/"], :root a[href^="http://www.mysuperpharm.com/"], :root .trc_rbox_border_elm .syndicatedItem, :root a[href^="http://www.myfreepaysite.com/sfw_int.php?aid"], :root a[href^="http://www.myfreepaysite.com/sfw.php?aid"], :root a[href^="http://www.mrskin.com/tour"], :root a[href^="http://bcntrack.com/"], :root a[href^="http://www.securegfm.com/"], :root a[href^="http://www.liversely.net/"], :root a[href^="https://partners.fxoro.com/click.php?"], :root [href*="//trackmstr.com"], :root [href*="prayuserparka.com/"], :root a[href^="http://www.idownloadplay.com/"], :root a[href^="http://www.hitcpm.com/"], :root a[href^="http://fusionads.net"], :root a[href^="http://www.hibids10.com/"], :root div[class^="awpcp-random-ads"], :root [href*="//securesafemembers.com"], :root a[href^="http://www.graboid.com/affiliates/"], :root a[href^="http://www.gamebookers.com/cgi-bin/intro.cgi?"], :root div[id^="div_openx_ad_"], :root a[href^="http://www.friendlyquacks.com/"], :root a[href^="https://www.financeads.net/tc.php?"], :root a[href*=".tfaln.com/"], :root a[href^="http://www.friendlyduck.com/AF_"], :root a[href^="https://content.oneindia.com/www/delivery/"], :root a[href^="http://www.fpcTraffic2.com/blind/in.cgi?"], :root a[href^="http://www.flashx.tv/downloadthis"], :root .trc_rbox_div a[target="_blank"][href^="http://tab"], :root a[href^="https://americafirstpolls.com/"], :root a[href^="http://clickserv.sitescout.com/"], :root a[href^="http://www.firstload.de/affiliate/"], :root a[href^="http://www.twinplan.com/AF_"], :root a[href^="http://www.fducks.com/"], :root a[href^="http://www.duckssolutions.com/"], :root a[href^="https://torrentsafeguard.com/?aid="], :root a[href^="https://offers.refchamp.com/"], :root a[href^="https://go.trkclick2.com/"], :root a[href^="https://www.mrskin.com/account/"], :root a[href^="http://www.duckcash.eu/"], :root a[href^="http://go.seomojo.com/tracking202/"], :root a[href^="http://www.downloadweb.org/"], :root a[href^="http://www.down1oads.com/"], :root a[href^="http://www.dealcent.com/register.php?affid="], :root a[href^="http://www.clkads.com/adServe/"], :root a[href^="https://track.interactivegf.com/"], :root div[class^="adpubs-"], :root a[href*="deliver.trafficfabrik.com"], :root a[href^="http://www.cash-duck.com/"], :root a[href^="https://aff-ads.stickywilds.com/"], :root a[href^="http://www.bitlord.me/share/"], :root .grid > .container > #aside-promotion, :root a[href^="http://www.babylon.com/welcome/index?affID"], :root a[onmousedown^="this.href='/wp-content/embed-ad-content/"], :root a[href^="http://popup.taboola.com/"], :root a[href^="//adbit.co/?a=Advertise&"], :root a[href^="https://fast-redirecting.com/"], :root a[href^="https://bluedelivery.pro/"], :root [href^="http://join.michelle-austin.com/"], :root a[href^="http://www.sexgangsters.com/?pid="], :root a[href^="http://www.amazon.co.uk/exec/obidos/external-search?"], :root a[href^="http://www.afgr2.com/"], :root a[href^="http://c.jumia.io/"], :root a[href^="http://www.affiliates1128.com/processing/"], :root a[href^="http://go.ad2up.com/"], :root a[href^="https://badoinkvr.com/"], :root a[href*="/adServe/banners?"], :root a[href^="http://www.adxpansion.com"], :root a[href^="http://www.ragazzeinvendita.com/?rcid="], :root a[href^="http://www.adultdvdempire.com/?partner_id="][href*="&utm_"], :root .plistaList > .itemLinkPET, :root a[href^="http://www.adbrite.com/mb/commerce/purchase_form.php?"], :root a[href^="http://www.TwinPlan.com/AF_"], :root a[href^="https://www.googleadservices.com/pagead/aclk?"], :root a[href^="http://www.1clickdownloader.com/"], :root a[href^="http://www.123-reg.co.uk/affiliate2.cgi"], :root div[itemtype="http://www.schema.org/WPAdBlock"], :root a[href^="http://wopertific.info/"], :root a[href^="http://bodelen.com/"], :root a[href^="http://wgpartner.com/"], :root a[href^="http://web.adblade.com/"], :root a[href^="https://go.onclasrv.com/"], :root a[href^="http://wct.link/"], :root a[href^="http://us.marketgid.com"], :root a[href^="http://ul.to/ref/"], :root a[href^="http://ucam.xxx/?utm_"], :root a[href^="http://traffic.tc-clicks.com/"], :root a[href^="http://www.liutilities.com/"], :root a[href^="http://www.dl-provider.com/search/"], :root a[href^="http://tc.tradetracker.net/"] > img, :root a[href^="http://tracking.deltamediallc.com/"], :root div[aria-label="Ads"], :root a[href^="http://axdsz.pro/"], :root a[href^="https://go.ebrokerserve.com/"], :root a[href^="http://galleries.securewebsiteaccess.com/"], :root a[href^="http://stateresolver.link/"], :root a[href^="http://sharesuper.info/"], :root a[href^="https://awecrptjmp.com/"], :root a[href^="http://server.cpmstar.com/click.aspx?poolid="], :root a[href^="http://see.kmisln.com/"], :root a[href^="//db52cc91beabf7e8.com/"], :root a[href^="https://go.nordvpn.net/aff"] > img, :root a[href^="http://secure.vivid.com/track/"], :root a[href^="http://www.downloadthesefiles.com/"], :root a[href^="http://secure.cbdpure.com/aff/"], :root a[href*="?adlivk="][href*="&refer="], :root a[href^="//look.djfiln.com/"], :root a[href^="http://searchtabnew.com/"], :root aside[id^="advads_ad_widget-"], :root a[href^="http://lp.ezdownloadpro.info/"], :root a[href^="http://uploaded.net/ref/"], :root a[href^="https://www.nutaku.net/signup/landing/"], :root a[href^="http://s9kkremkr0.com/"], :root a[href^="http://azmobilestore.co/"], :root a[href^="http://s5prou7ulr.com/"], :root a[href^="http://rs-stripe.wsj.com/stripe/redirect"], :root a[href^="https://easygamepromo.com/ef/custom_affiliate/"], :root a[href^="http://record.betsafe.com/"], :root a[href*="a2g-secure.com"], :root a[href^="https://iqbroker.com/"][href*="?aff="], :root a[href^="http://buysellads.com/"], :root a[href^="http://reallygoodlink.freehookupaffair.com/"], :root a[href^="https://bnsjb1ab1e.com/"], :root a[href^="//oardilin.com/"], :root a[href^="http://pwrads.net/"], :root a[href^="http://promos.bwin.com/"], :root a[data-redirect^="https://paid.outbrain.com/network/redir?"], :root a[href^="http://play4k.co/"], :root a[href*="//ezofferz.com/"], :root a[href^="https://dltags.com/"], :root a[href^="http://onclickads.net/"], :root a[href^="http://mmo123.co/"], :root a[href^="http://media.paddypower.com/redirect.aspx?"], :root a[href^="http://allaptair.club/"], :root [href*=".engine.adglare.net/"], :root a[href^="https://track.trkinator.com/"], :root div[id^="ad-position-"], :root a[data-redirect^="this.href='http://paid.outbrain.com/network/redir?"], :root a[href^="http://liversely.com/"], :root a[href^="http://keep2share.cc/pr/"], :root a[href^="https://gamescarousel.com/"], :root a[href^="http://istri.it/?"], :root a[href^="//awejmp.com/"], :root a[href^="http://mob1ledev1ces.com/"], :root a[href^="http://www.fbooksluts.com/"], :root a[href^="http://www.cdjapan.co.jp/aff/click.cgi/"], :root a[href*="//ridingintractable.com/"], :root a[href^="http://c.actiondesk.com/"], :root a[href^="http://intent.bingads.com/"], :root a[href^="https://intrev.co/"], :root a[href^="http://https://www.get-express-vpn.com/offer/"], :root a[href^="//voyeurhit.com/cs/"], :root [href*=".go2page.net"], :root a[href^="http://hd-plugins.com/download/"], :root a[href^="http://greensmoke.com/"], :root a[href^="https://look.utndln.com/"], :root a[href^="//5e1fcb75b6d662d.com/"], :root a[href^="http://googleads.g.doubleclick.net/pcs/click"], :root .nrelate .nr_partner, :root a[href^="http://go.xtbaffiliates.com/"], :root a[href*=".purple6401.com/"], :root a[href^="https://oackoubs.com/"], :root a[href^="http://install.securewebsiteaccess.com/"], :root a[href^="http://www.revenuehits.com/"], :root a[href^="http://go.mobisla.com/"], :root a[href^="https://ads.planetwin365affiliate.com/redirect.aspx?"], :root a[href^="http://g1.v.fwmrm.net/ad/"], :root a[href^="http://imads.integral-marketing.com/"], :root a[href^="http://freesoftwarelive.com/"], :root a[href^="http://adtrackone.eu/"], :root span[title="Ads by Google"], :root a[href^="http://finaljuyu.com/"], :root a[href^="https://www.im88trk.com/"], :root a[href^="http://ffxitrack.com/"], :root a[href^="http://t.wowtrk.com/"], :root a[href^="//syndication.dynsrvtbg.com/splash.php?"], :root a[href^="http://extra.bet365.com/"][href*="?affiliate="], :root a[href^="http://ethfw0370q.com/"], :root a[href^="https://tracking.comfortclick.eu/"], :root [id^="bunyad_ads_"], :root a[href^="http://elitefuckbook.com/"], :root a[href^="http://eclkmpsa.com/"], :root a[href^="http://earandmarketing.com/"], :root a[href*=".mfroute.com/"], :root #content > #center > .dose > .dosesingle, :root a[href^="http://campaign.bharatmatrimony.com/track/"], :root a[href*="3wr110.xyz/"], :root a[href^="http://d2.zedo.com/"], :root a[href^="http://codec.codecm.com/"], :root a[href^="https://paid.outbrain.com/network/redir?"], :root a[href^="http://www.downloadplayer1.com/"], :root a[href^="http://clicks.binarypromos.com/"], :root a[href^="https://dediseedbox.com/clients/aff.php?"], :root [href^="/ucmini.php"], :root a[href^="http://www.wantstraffic.com/"], :root a[href^="http://track.afcpatrk.com/"], :root a[href^="http://databass.info/"], :root div[data-test-id="AdBannerWrapper"], :root div[class^="AdCard_"], :root a[href^="http://www.urmediazone.com/signup"], :root a[href^="http://click.plista.com/pets"], :root a[href^="http://chaturbate.com/affiliates/"], :root [href^="https://secure.bmtmicro.com/servlets/"], :root a[href^="http://amzn.to/"] > img[src^="data"], :root a[href^="http://bs.serving-sys.com/"], :root a[href^="http://cpaway.afftrack.com/"], :root a[href^="http://cdn.adsrvmedia.net/"], :root [lazy-ad="top_banner"], :root a[href^="http://360ads.go2cloud.org/"], :root a[href^="http://dftrck.com/"], :root a[href^="http://casino-x.com/?partner"], :root a[href^="https://meet-sexhere.com/"], :root a[href^="http://record.sportsbetaffiliates.com.au/"], :root a[href^="http://campeeks.com/"][href*="&utm_"], :root a[href^="http://download-performance.com/"], :root a[href^="http://www.on2url.com/app/adtrack.asp"], :root #\5f _nq__hh[style="display:block!important"], :root [href^="https://affect3dnetwork.com/track/"], :root div[class^="index_displayAd_"], :root a[href^="http://adultgames.xxx/"], :root a[href^="https://s.zlink2.com/"], :root a[href^="http://semi-cod.com/clicks/"], :root a[href*="//bongacams4.com/track?"], :root a[href^="http://campaign.bharatmatrimony.com/cbstrack/"], :root a[href^="https://uncensored.game/"], :root a[href^="http://www.seekbang.com/cs/"], :root a[href^="http://syndication.exoclick.com/"], :root a[href^="http://k2s.cc/pr/"], :root [src*="https://cdn.cloudimagesb.com/"], :root a[href^="http://bluehost.com/track/"], :root div[id^="vuukle-ad-"], :root a[href^="http://betahit.click/"], :root a[href^="https://torguard.net/aff.php"] > img, :root a[href^="http://bestorican.com/"], :root a[href^="http://bcp.crwdcntrl.net/"], :root a[href^="http://bc.vc/?r="], :root a[href^="https://windscribe.com/promo/"], :root a[href^="http://farm.plista.com/pets"], :root a[href^="https://leg.xyz/?track="], :root a[href^="http://affiliate.glbtracker.com/"], :root a[href^="https://transfer.xe.com/signup/track/redirect?"], :root a[href^="http://anonymous-net.com/"], :root aside[itemtype="https://schema.org/WPAdBlock"], :root a[href^="https://watchmygirlfriend.tv/"], :root a[href^="https://ovb.im/"], :root a[href^="http://hotcandyland.com/partner/"], :root a[href^="http://affiliates.thrixxx.com/"], :root #atvcap + #tvcap > .mnr-c > .commercial-unit-mobile-top, :root a[href*="/adrotate-out.php?"], :root a[href^="http://affiliates.lifeselector.com/"], :root a[href^="http://affiliate.coral.co.uk/processing/"], :root a[href^="http://aff.ironsocket.com/"], :root div[id^="drudge-column-ads-"], :root a[href^="http://tour.mrskin.com/"], :root [src^="/Redirect.a2b?"], :root a[href^="http://linksnappy.com/?ref="], :root ad-desktop-sidebar, :root [id*="MGWrap"], :root a[href^="http://9amq5z4y1y.com/"], :root a[href^="http://adtrack123.pl/"], :root a[href^="http://adsrv.keycaptcha.com"], :root a[href^="http://deloplen.com/afu.php?zoneid="], :root div[class^="StickyHeroAdWrapper-"], :root a[href^="http://cwcams.com/landing/click/"], :root a[href^="http://ads.betfair.com/redirect.aspx?"], :root a[href^="https://www.mrskin.com/tour"], :root a[href^="http://adserver.adtech.de/"], :root a[href^="http://adserver.adreactor.com/"], :root a[href^="http://ads.sprintrade.com/"], :root a[data-redirect^="http://click.plista.com/pets"], :root .section-subheader > .section-hotel-prices-header, :root a[href^="http://landingpagegenius.com/"], :root [href^="https://click2cvs.com/"], :root a[href^="http://ads.expekt.com/affiliates/"], :root a[href^="http://reallygoodlink.extremefreegames.com/"], :root a[href^="http://adlev.neodatagroup.com/"], :root [href*="//mclick.net"], :root a[href^="http://adclick.g.doubleclick.net/"], :root a[href^="http://www.sex.com/pics/?utm_"], :root a[href^="http://vo2.qrlsx.com/"], :root [href^="https://stvkr.com/"], :root a[href^="http://engine.newsmaxfeednetwork.com/"], :root a[href^="http://ad.yieldmanager.com/"], :root [href^="http://homemoviestube.com/"], :root a[href^="http://ad.doubleclick.net/"], :root a[href^="http://websitedhoome.com/"], :root a[href^="https://clickadilla.com/"], :root .ob_container .item-container-obpd, :root a[href*=".directtl.xyz/"], :root a[href^="http://www.adskeeper.co.uk/"], :root a[href^="http://ad-emea.doubleclick.net/"], :root a[href^="http://srvpub.com/"], :root [data-dynamic-ads], :root a[href^="http://a.adquantix.com/"], :root a[href^="http://NowDownloadAll.com"], :root a[href^="http://1phads.com/"], :root a[href^="https://ismlks.com/"], :root a[href^="//zenhppyad.com/"], :root a[href^="https://www.sugarinstant.com/?partner_id="], :root a[href^="//z6naousb.com/"], :root a[href^="//www.pd-news.com/"], :root div[id^="ads250_250-widget"], :root [href^="https://go.astutelinks.com/"], :root [href*=".doubleclick-net.com"], :root a[href^="//www.mgid.com/"], :root a[href^="http://lp.ncdownloader.com/"], :root a[href^="//pubads.g.doubleclick.net/"], :root a[href^="http://www.ducksnetwork.com/"], :root a[href^="http://3wr110.net/"], :root #topstuff > #tads, :root a[href*=".bang.com/"][href*="&aff="], :root a[data-widget-outbrain-redirect^="http://paid.outbrain.com/network/redir?"], :root a[href^="http://join3.bannedsextapes.com/track/"], :root [href^="http://join.shemalesfromhell.com/"], :root a[href^="https://www.travelzoo.com/oascampaignclick/"], :root a[href^="https://see.kmisln.com/"], :root [src^="//adtorio.com/"], :root a[href^="http://refer.webhostingbuzz.com/"], :root a[href^="//nlkdom.com/"], :root a[href^="//medleyads.com/spot/"], :root [href^="https://mylead.global/stl/"] > img, :root a[href^="https://ilovemyfreedoms.com/"][href*="?affiliate_id="], :root [href*=".afftracks.online/"], :root div[class^="Component-dfp-"], :root a[href^="//healthaffiliate.center/"], :root [onclick*="content.ad/"], :root a[href^="https://clixtrac.com/"], :root a[href^="//88d7b6aa44fb8eb.com/"], :root a[href^="//4f6b2af479d337cf.com/"], :root a[href^="http://go.fpmarkets.com/"], :root a[href^="//00ae8b5a9c1d597.com/"], :root [href^="http://join.ts-dominopresley.com/"], :root a[href^=".vddfe.club/"], :root [href^="/ucdownloader.php"], :root a[href^="https://awejmp.com/"], :root [href*="//go2page.net"], :root a[href^=" http://www.sex.com/"][href*="&utm_"], :root a[href^="https://fileboom.me/pr/"], :root a[href^="http://marketgid.com"], :root [href^="https://mysbitl.com"], :root a[href*="onclkds."], :root a[href^="https://adclick.g.doubleclick.net/"], :root a[href*=".intab.fun/"], :root a[href*="get-express-vpn.xyz"], :root a[href^="https://prf.hn/click/"][href*="/creativeref:"] > img, :root a[href^="http://www.adultempire.com/unlimited/promo?"][href*="&partner_id="], :root a[href*="=adscript"], :root a[href*="=Adtracker"], :root a[href^="https://trusted-click-host.com/"], :root a[href^="https://members.linkifier.com/public/affiliateLanding?refCode="], :root a[href^="https://jmp.awempire.com/"], :root [href^="https://wct.link/"], :root a[href^="https://track.totalav.com/"], :root a[href^="http://ad-apac.doubleclick.net/"], :root a[href*="/servlet/click/zone?"], :root a[href^="http://track.trkvluum.com/"], :root a[href^="https://www.chngtrack.com/"], :root a[href*="=exoclick"], :root a[href^="http://www.firstclass-download.com/"], :root a[href*="//bongacams7.com/track?"], :root FBS-AD, :root a[href*="//bongacams5.com/track?"], :root a[href^="http://k2s.cc/code/"], :root a[href*="//bongacams2.com/track?"], :root div[id^="advads-"], :root a[href^="http://www.myfreecams.com/?co_id="][href*="&track="], :root a[href^="https://track.afcpatrk.com/"], :root a[href*=".ad-center.com/"], :root a[href*=".udncoeln.com/"], :root a[href^="https://a.bestcontentfood.top/"], :root #ads > .dose > .dosesingle, :root .commercial-unit-mobile-top .jackpot-main-content-container > .UpgKEd + .nZZLFc > div > .vci, :root a[href*="delivery.trafficfabrik.com"], :root .trc_rbox_div .syndicatedItem, :root a[href^="http://www.streamate.com/exports/"], :root [href^="https://traffserve.com/"], :root [href*="maskip.co/"], :root div[class$="_b-ad-main"], :root a[href*=".trck5.com/"], :root a[href*=".qertewrt.com/"], :root .ob-widget > .ob-first.ob-widget-section, :root a[href*=".smartadserver.com"], :root a[href^="http://z1.zedo.com/"], :root a[href*=".irtyc.com/"], :root div[id^="div_ad_stack_"], :root a[href*=".ichlnk.com/"], :root a[href^="https://usenetxs.website/"], :root a[href^="http://pokershibes.com/index.php?ref="], :root a[href^="http://api.content.ad/"], :root a[href*=".clkcln.com/"], :root [data-ad-manager-id], :root div[class^="adUnit_"], :root a[href^="https://deliver.tf2www.com/"], :root a[href^="http://spygasm.com/track?"], :root .ob_dual_right > .ob_ads_header ~ .odb_div, :root [src*="//www.dianomi.com/smartads.epl"], :root a[href*=".adk2x.com/"], :root a[href^="http://www.friendlyadvertisements.com/"], :root a[href^="http://www.firstload.com/affiliate/"], :root a[href^="http://duckcash.eu/"], :root a[href^="http://www.mobileandinternetadvertising.com/"], :root [href^="https://join.playboyplus.com/track/"], :root a[data-url^="http://paid.outbrain.com/network/redir?"] + .author, :root [href^="https://www.reimageplus.com/"], :root a[href^="https://ttf.trmobc.com/"], :root a[href^="http://n.admagnet.net/"], :root div[id^="cns_ads_"], :root a[data-obtrack^="http://paid.outbrain.com/network/redir?"], :root a[href^="https://prf.hn/click/"][href*="/adref:"] > img, :root a[href^="http://enter.anabolic.com/track/"], :root a[data-nvp*="'trafficUrl':'https://paid.outbrain.com/network/redir?"], :root a[href^="http://a63t9o1azf.com/"], :root a[href*=".axdsz.pro/"], :root a[href^="http://www.badoink.com/go.php?"], :root a[class="RBAd"], :root a[href^="http://banners.victor.com/processing/"], :root [href^="http://raboninco.com/"], :root a[href^="http://www.getyourguide.com/?partner_id="], :root [onclick^="window.open('https://www.brazzersnetwork.com/landing/"], :root [href^="http://join.rodneymoore.com/"], :root [id*="MarketGid"], :root a[href^="http://espn.zlbu.net/"], :root a[href^="http://admrotate.iplayer.org/"], :root a[href^="https://scurewall.co/"], :root div[class*="_browserAdOuterContainer_"], :root [name^="google_ads_iframe"], :root a[href^="http://fsoft4down.com/"], :root a[href*="ad2upapp.com/"], :root a[href*=".fwd28.com/"], :root [lazy-ad="leftbottom_banner"], :root dile-cookies-consent, :root [id^="div-gpt-ad"], :root a[href^="https://playuhd.host/"], :root [href^="https://go.affiliatexe.com/"], :root a[href^="http://mgid.com/"], :root a[href*=".adsrv.eacdn.com/"] > img, :root [href^="https://ptwmjmp.com/"], :root [href*="//etracking.pro"], :root a[href^="http://www.fonts.com/BannerScript/"], :root a[href^="http://c.ketads.com/"], :root a[href^="http://6kup12tgxx.com/"], :root [href^="https://freecourseweb.com/"] > .sitefriend, :root [href^="https://www.hostg.xyz/aff_c"] > img, :root [href*="//trackout.business"], :root [href^="https://veepn.g2afse.com/"], :root a[href^="https://syndication.exoclick.com/splash.php?"], :root a[data-oburl^="http://paid.outbrain.com/network/redir?"], :root a[href^="http://refpa.top/"], :root a[href*="//bongacams.com/track?"], :root a[href^="https://servedbyadbutler.com/"], :root a[href^="https://www.bet365.com/"][href*="affiliate="], :root a[href^="https://mob1ledev1ces.com/"], :root a[data-redirect^="http://paid.outbrain.com/network/redir?"], :root a[href^="https://promo-bc.com/"], :root a[href^="https://explore.findanswersnow.net/"], :root [id^="adframe_wrap_"], :root div[jsdata*="CarouselPLA-"][data-id^="CarouselPLA-"], :root a[href^="https://go.trackitalltheway.com/"], :root [href^="https://track.fiverr.com/visit/"] > img, :root a[href^="https://traffic.bannerator.com/"], :root [href^="https://shiftnetwork.infusionsoft.com/go/"] > img, :root a[href^="http://www.roboform.com/php/land.php"], :root div[id^="yandex_ad"], :root a[href^="https://www.pornhat.com/"][rel="nofollow"], :root a[href^="https://www.hotgirls4fuck.com/"], :root a[href*=".frtyl.com/"], :root a[href^="http://y1jxiqds7v.com/"], :root [href^="https://online-protection-now.com/"], :root a[href^="http://refpaano.host/"], :root a[href*="/cmd.php?ad="], :root a[href^="http://online.ladbrokes.com/promoRedirect?"], :root a[href^="//mob1ledev1ces.com/"], :root [href^="https://go.4rabettraff.com/"], :root a[href^="https://delivery.porn.com/"], :root a[href^="https://www.firstload.com/affiliate/"], :root .trc_related_container div[data-item-syndicated="true"], :root a[href^="https://mmwebhandler.aff-online.com/"], :root [href^="https://r.kraken.com/"], :root a[href^="http://www.pinkvisualpad.com/?revid="], :root a[href^="https://www.oneclickroot.com/?tap_a="] > img, :root DFP-AD, :root a[href^="//porngames.adult/?SID="], :root a[href^="https://www.friendlyduck.com/AF_"], :root [href^="http://advertisesimple.info/"], :root [href^="https://join3.bannedsextapes.com"], :root [href^="https://bulletprofitsmartlink.com/"], :root a[href^="http://liversely.net/"], :root a[href^="http://www.coiwqe.site/"], :root iframe[id^="google_ads_frame"], :root a[href^="http://www.bet365.com/"][href*="affiliate="], :root a[href^="http://www.bluehost.com/track/"] > img, :root a[data-url^="http://paid.outbrain.com/network/redir?"], :root a[href^="https://www.popads.net/users/"], :root a[href^="http://www.advcashpro.com/aff/"], :root a[href^="http://adultfriendfinder.com/p/register.cgi?pid="], :root [href*="//doubleclick-net.com"], :root [class*="-slot_ad-placements-"], :root a[href^="https://keep2share.cc/pr/"], :root a[href^="https://msecure117.com/"], :root [href^="http://stvkr.com/"], :root a[href^="https://adsrv4k.com/"], :root a[href^="http://trk.mdrtrck.com/"], :root [href^="https://shrugartisticelder.com"], :root [id*="ScriptRoot"], :root a[href^="http://fileboom.me/pr/"], :root a[href*=".trust.zone"], :root div[class^="hp-ad-rect-"], :root a[href^="http://dwn.pushtraffic.net/"], :root a[href$="/vghd.shtml"], :root div[id^="crt-"][style], :root a[href^="http://igromir.info/"], :root a[href^="http://secure.hostgator.com/~affiliat/"], :root [onclick^="window.open('http://adultfriendfinder.com/search/"], :root [onclick^="window.open('window.open('//delivery.trafficfabrik.com/"], :root [href^="/admdownload.php"], :root iframe[src^="http://ad.yieldmanager.com/"], :root a[href^="http://pubads.g.doubleclick.net/"], :root a[href^="https://porntubemate.com/"], :root a[href^="http://www.gfrevenge.com/landing/"], :root a[href^="http://45eijvhgj2.com/"], :root a[href^="http://hpn.houzz.com/"], :root div[id^="ad_bigbox_"], :root #content > #right > .dose > .dosesingle, :root a[href^="http://9nl.es/"], :root a[href^="https://deliver.ptgncdn.com/"], :root a[href^="http://latestdownloads.net/download.php?"], :root [href^="https://www.targetingpartner.com/"], :root a[href^="http://see-work.info/"], :root a[href*=".orange2258.com/"], :root #taw > .med + div > #tvcap > .mnr-c:not(.qs-ic) > .commercial-unit-mobile-top, :root .plista_widget_belowArticleRelaunch_item[data-type="pet"], :root a[data-oburl^="https://paid.outbrain.com/network/redir?"], :root a[href^="http://affiliates.score-affiliates.com/"], :root a[href^="https://wantopticalfreelance.com/"], :root [href^="/ucdownload.php"], :root [id^="ad-wrap-"], :root div[id^="ad-gpt-"], :root a[href^="http://pan.adraccoon.com?"], :root [href^="http://www.star-clicks.com/"], :root [href^="http://join.hardcoreshemalevideo.com/"], :root a[href^="http://ads2.williamhill.com/redirect.aspx?"], :root a[href*=".xromp.com/landing/click/"], :root a[href^="http://www.download-provider.org/"], :root a[href^="https://10dfkuvbdkfv.club/"], :root AD-TRIPLE-BOX, :root [class^="Ad-adContainer"], :root a[href^="https://freeadult.games/"], :root a[href^="http://adserving.unibet.com/"], :root [href^="https://refpahrwzjlv.top/"], :root a[href^="http://czotra-32.com/"], :root a[href^="http://click.payserve.com/"], :root a[href^="http://serve.williamhill.com/promoRedirect?"], :root [class*="__adspot-title-container"], :root a[href*="n47adshostnet.com/"], :root a[href*=".cfm?fp="][href*="&prvtof="], :root [href*=".mclick.net"], :root [href*=".grtya.com/"], :root a[href^="http://tezfiles.com/pr/"], :root div[class^="Ad__container"], :root a[href^="http://adprovider.adlure.net/"], :root a[id^="ads_banner_"], :root a[href^="http://findersocket.com/"], :root a[href^="https://porngames.adult/?SID="], :root div[id^="adspot-"], :root #\5f _admvnlb_modal_container, :root a[href^="http://www.streamtunerhd.com/signup?"], :root a[href^="https://www.g4mz.com/"], :root a[href^="http://webgirlz.online/landing/"], :root [href*="cadsecs.com/"], :root a[href*=".opskln.com/"], :root a[href^="http://xads.zedo.com/"], :root [class^="div-gpt-ad"], :root [class*="auto-bottom-advertising-"], :root a[href^="https://t.mobtya.com/"], :root a[href^="https://www.adxtro.com/"], :root [class*="__adv-block"], :root a[href^="https://farm.plista.com/pets"], :root a[href*=".red90121.com/"], :root a[href^="http://www.afgr3.com/"], :root [ad-id^="googlead"], :root [href^="https://rapidgator.net/article/premium/ref/"], :root [href^="https://join.girlsoutwest.com/"], :root a[href^="http://taboola-"][href*="/redirect.php?app.type="], :root a[href^="http://www.menaon.com/installs/"], :root a[href^="https://financeads.net/tc.php?"], :root .commercial-unit-mobile-top .jackpot-main-content-container > .UpgKEd + .nZZLFc > .vci, :root [lazy-ad="lefttop_banner"], :root a[href^="https://a.adtng.com/"], :root a[href^="http://static.fleshlight.com/images/banners/"], :root a[href^="https://www.adskeeper.co.uk/"], :root [href^="https://www.highrevenuecpm.com"], :root a[href^="https://secure.cbdpure.com/aff/"], :root AMP-AD, :root a[href^="https://syndication.dynsrvtbg.com/splash.php?"], :root [href^="http://join.trannies-fuck.com/"], :root a[href^="http://aflrm.com/"], :root div[id^="google_dfp_"], :root [href*="get-download.club/"], :root [href^="https://www.xvbelink.com/"], :root a[href^="http://affiliates.pinnaclesports.com/processing/"], :root #header + #content > #left > #rlblock_left, :root a[href^="http://partners.etoro.com/"], :root [id^="google_ads_iframe"], :root .vid-present > .van_vid_carousel__padding, :root a[href^="http://goldmoney.com/?gmrefcode="], :root a[href^="http://papi.mynativeplatform.com:80/pub2/"], :root LEADERBOARD-AD, :root .plistaList > .plista_widget_underArticle_item[data-type="pet"], :root [href^="http://join.shemale.xxx/"], :root a[href^="https://www.oboom.com/ad/"], :root [href*=".adcampo.com/"], :root [href^="https://pulsetrack.biz/"], :root a[href^="https://trackjs.com/?utm_source"], :root AFS-AD, :root a[href^="https://secure.starsaffiliateclub.com/C.ashx?"], :root .trc_rbox_div .syndicatedItemUB, :root [href*=".xiloy.site/"], :root [src^="http://api.lanistaads.com/ServeAd?"], :root a[href^="http://webtrackerplus.com/"], :root [href*=".jetx.info/"], :root [href*=".trackout.business"], :root a[href^="http://get.slickvpn.com/"], :root [data-ad-module], :root a[href*=".allsports4you.club"], :root a[href^="https://track.bruceads.com/"], :root a[href^="https://m.do.co/c/"] > img, :root [href*=".ltroute.com/"], :root div[class*="margin-Advert"], :root a[href^="//jsmptjmp.com/"], :root a[href*=".adform.net/"], :root a[href^="http://www.onwebcam.com/random?t_link="], :root a[href*="//promo-bc.com/track?"], :root a[href^="https://sexsimulator.game/tab/?SID="], :root .rc-cta[data-target], :root a[href^="https://as.sexad.net/"]
        {
          display: none !important;
        }
        :root a[href^="//40ceexln7929.com/"], :root a[href$="/5-"][target="_blank"][rel="nofollow"], :root a[href*=".revimedia.com/"], :root [href*=".securesafemembers.com"], :root a[href^="https://secure.adnxs.com/clktrb?"], :root a[href^="http://adserver.adtechus.com/"], :root a[href^="https://topoffers.com/"][href*="/?pid="], :root a[href^="http://vinfdv6b4j.com/"], :root [href^="https://dooloust.net/"], :root div[id^="div-ads-"], :root a[onmousedown^="this.href='https://paid.outbrain.com/network/redir?"][target="_blank"] + .ob_source, :root a[href^="http://at.atwola.com/"], :root a[href*=".surfmdia.com/"], :root .commercial-unit-mobile-top > div[data-pla="1"], :root [data-freestar-ad], :root [href*=".revrtb.com/"], :root a[href^="https://goraps.com/"], :root [href*=".etracking.pro"]
        {
          display: none !important;
        }
      </style>
      <style>
        body.tablesorter-disableSelection {
          -ms-user-select: none;
          -moz-user-select: -moz-none;
          -khtml-user-select: none;
          -webkit-user-select: none;
          user-select: none;
        }
        .tablesorter-resizable-container {
          position: relative;
          height: 1px;
        }
        .tablesorter-resizable-handle {
          position: absolute;
          display: inline-block;
          width: 8px;
          top: 1px;
          cursor: ew-resize;
          z-index: 3;
          user-select: none;
          -moz-user-select: none;
        }
      </style>
    </head>
    <body class="sticky-wrapper">
      <div id="Visilabs-openclose" data-isvisilabs="False"></div>
      <div id="basketpopup-openclose" data-isbasketpopup="True"></div>
      <form action="/sepet/sepetim" id="__AjaxAntiForgeryForm" method="post">
        <input
          name="__RequestVerificationToken"
          type="hidden"
          value="6-gYHXhuaaCGEeeVPhcpJxQ_gwTTBx5vkfT-BqANqU9jfd2bBSwBBV9mtpBGubHa0Xp4rYJtrrAQCpWpd2eSlwkHSvI1"
        />
      </form>     
      <script>
        dataLayer.push({ PageType: 'BasketPage' })
      </script>
      <script>
        addDataLayer('other', {
          BasketProducts: [
            {
              BasketId: '13905364',
              ProductId: 'MHDA3TU/A',
              Quantity: '1',
              Price: '7999',
              GroupId: '4316',
            },
          ],
        })
      </script>
      <style>
        input[type='number']::-webkit-outer-spin-button,
        input[type='number']::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      </style>
      <input type="hidden" name="basketCount" id="basketCount" value="1" />
      <main class="basket-main-area">
        <div class="basket">
          <div class="basket-process">
            <div class="global-container">
              <div class="row">
                <div class="col-xs-12">
                  <ul class="basket-process__inner">
                    <li class="active">
                      <a href="/sepet/sepetim">
                        <span class="basket-process__icon">
                          <i class="fas fa-shopping-cart"></i>
                        </span>
                        <span class="basket-process__text"> Sepetim </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <span class="basket-process__icon">
                          <i class="fas fa-map-marker-alt"></i>
                        </span>
                        <span class="basket-process__text"> Teslimat </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <span class="basket-process__icon">
                          <i class="far fa-credit-card"></i>
                        </span>
                        <span class="basket-process__text"> Ödeme </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="global-container">
            <div class="row">
              <div class="col-xs-12 col-lg-8">
                <div class="basket-cart">
                  <div class="clearfix basket-cart__header">
                    <a href="/" class="pull-right basket-cart__header-link"
                      ><i class="fas fa-arrow-left"></i> Alışverişe Geri Dön</a
                    >
                  </div>
                  <div></div>
                  <div class="basket-cart__table" id="basketList">
                    <div
                      class="basket-cart__table-row basket-cart__table-header"
                    >
                      <div class="basket-cart__table-column info">
                        Ürünlerim
                      </div>
                      <div
                        class="
                          basket-cart__table-column
                          count
                          hidden-xs hidden-sm
                        "
                      >
                        Adet
                      </div>
                      <div
                        class="
                          basket-cart__table-column
                          price
                          hidden-xs hidden-sm
                        "
                      >
                        Avantajlı Fiyat
                      </div>
                      <div
                        class="
                          basket-cart__table-column
                          warranty
                          hidden-xs hidden-sm
                        "
                      >
                        Garantiyi Uzat
                      </div>
                      <div
                        class="
                          basket-cart__table-column
                          remove
                          hidden-xs hidden-sm
                        "
                      >
                        Sil
                      </div>
                    </div>
                    <div class="basket-cart__table-row">
                      <div class="basket-cart__table-column info">
                        <div class="basket-cart__product-info">
                          <a href="/iphone-11-akilli-telefon.html">
                            <div class="basket-cart__product-image">
                              <img
                                src="https://cdn.vatanbilgisayar.com/Upload//Product/apple/thumb/113155_small.jpg"
                                class=""
                                alt=""
                              />
                            </div>
                            <div class="basket-cart__product-name">
                              iPhone&nbsp;11 64 Gb Siyah
                            </div>
                          </a>
                          <ul
                            class="
                              basket-cart__product-badges
                              hidden-xs hidden-sm
                            "
                          >
                            <li class="discount"></li>
                          </ul>
                        </div>
                      </div>
                      <div class="basket-cart__table-column count">
                        <div class="number-input">
                          <a
                            href="javascript:changeProductCount(113155,0,-1,23197315);"
                            >-</a
                          >
                          <div class="input-wrapper">
                            <form novalidate="novalidate">
                              <input
                                data-limitedstok="False"
                                data-lineid="23197315"
                                data-target="0"
                                data-toggle="113155"
                                data-val="true"
                                data-val-number="The field TQuantityA must be a number."
                                data-val-required="The TQuantityA field is required."
                                id="productCount_23197315"
                                min="1"
                                name="item.BasketItem.TQuantityA"
                                onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
                                type="number"
                                value="1"
                                style="text-align: right"
                              />
                            </form>
                            <span>Adet</span>
                          </div>
                          <a
                            href="javascript:changeProductCount(113155,0,1,23197315);"
                            >+</a
                          >
                        </div>
                      </div>
                      <div class="basket-cart__table-column price">
                        <div class="basket-cart__product-price">
                          <span class="product-list__price">7.999</span
                          ><span class="product-list__decimals">,00</span
                          ><span class="product-list__currency">TL</span>
                        </div>
                      </div>
                      <div
                        class="
                          basket-cart__table-column
                          info
                          badges
                          visible-xs visible-sm
                        "
                      >
                        <ul class="basket-cart__product-badges">
                          <li></li>
                        </ul>
                      </div>
                      <div class="basket-cart__table-column warranty">
                        <span>Garantiyi Uzat</span>
                        <input
                          class="
                            apple-switch
                            basket-cart__product-switch
                            warranty-toggler
                          "
                          checked=""
                          type="checkbox"
                          onchange="warrantyToggler(event)"
                        />
                      </div>
                      <div class="basket-cart__table-column text-center remove">
                        <a
                          href="javascript:void(0)"
                          class="basket-cart__product-remove"
                          onclick="DeleteFromBasket(23197315,13905364)"
                          ><i class="far fa-times-circle"></i>
                        </a>
                      </div>
                      <div class="basket-cart__extrawarranty">
                        <p class="kg-text">
                          <span>
                            Keyifli Garanti Paket Sigortası ile ürününüzü; Yasal
                            garanti süresinden sonra üründe üretici hatasından
                            dolayı meydana gelebilecek zararlara karşı 5 yıla
                            kadar,Fatura tarihinden itibaren 2 yıl boyunca
                            elektrik, rutubet, nem ve tozlanma zararlarına
                            karşı,Fatura tarihinden itibaren 1 yıl boyunca
                            kazaen kırılma, sıvı teması ve çalınmalara karşı
                            koruma altına alabilirsiniz.Sigorta teminatları Gulf
                            Sigorta A.Ş.tarafından sağlanmaktadır.</span
                          >
                        </p>
                        <div
                          class="basket-installment-carousel swiper-container"
                        >
                          <ul class="swiper-wrapper">
                            <li class="swiper-slide active">
                              <label
                                class="wrapper-radio wrapper-radio-product"
                              >
                                <input
                                  type="radio"
                                  name="warranty_bdb9c518-861d-4d95-b631-11428b8da009"
                                  onclick="AddOrRemoveKeyifliGaranti(129268,23197315,'False',0,113155)"
                                />
                                <span class="checkmark"></span>
                                +1 yıl Keyifli garanti sigorta paketi
                              </label>
                              <div class="basket-cart__extrawarranty-price">
                                1.150,00 TL
                              </div>
                            </li>
                            <li class="swiper-slide active">
                              <label
                                class="wrapper-radio wrapper-radio-product"
                              >
                                <input
                                  type="radio"
                                  name="warranty_bdb9c518-861d-4d95-b631-11428b8da009"
                                  onclick="AddOrRemoveKeyifliGaranti(129269,23197315,'False',0,113155)"
                                />
                                <span class="checkmark"></span>
                                +2 yıl Keyifli garanti sigorta paketi
                              </label>
                              <div class="basket-cart__extrawarranty-price">
                                1.450,00 TL
                              </div>
                            </li>
                            <li class="swiper-slide active">
                              <label
                                class="wrapper-radio wrapper-radio-product"
                              >
                                <input
                                  type="radio"
                                  name="warranty_bdb9c518-861d-4d95-b631-11428b8da009"
                                  onclick="AddOrRemoveKeyifliGaranti(129270,23197315,'False',0,113155)"
                                />
                                <span class="checkmark"></span>
                                +3 yıl Keyifli garanti sigorta paketi
                              </label>
                              <div class="basket-cart__extrawarranty-price">
                                1.900,00 TL
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix basket-cart__footer text-center">
                    <a
                      href="javascript:void(0)"
                      class="basket-cart__footer-link"
                      onclick="DeleteBasket()"
                      ><i class="fas fa-trash-alt"></i>
                      <span>SEPETİ BOŞALT</span></a
                    >
                  </div>
                </div>
                <div class="basket-tab-area classic-tab">
                  <ul
                    class="
                      nav nav-tabs nav-justified
                      basket-widget-tabs
                      basketWidgetTabs
                    "
                  >
                    <li class="active">
                      <a data-toggle="tab" data-type="tab1" href="#tab1"
                        >Size Özel İndirimler</a
                      >
                    </li>
                    <li>
                      <a data-toggle="tab" data-type="tab2" href="#tab2"
                        >İhtiyacınız Olabilir</a
                      >
                    </li>
                    <li>
                      <a data-toggle="tab" data-type="tab3" href="#tab3"
                        >Geri Alım Kampanyası</a
                      >
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane fade active in" id="tab1">
                      <div class="basket-promotion">
                        <h4 class="basket-promotion__title">
                          Sepetinize özel indirimler
                        </h4>
                        <div class="clearfix basket_promo_item">
                          <div class="basket-promotion__left-wrapper">
                            <div class="basket-promotion__left">
                              <a
                                href="../s-link-ip-g11m-10-000mah-2-usb-port-tasinabilir-sarj-cihazi-beyaz.html"
                              >
                                <div class="basket-promotion__image">
                                  <img
                                    src="https://cdn.vatanbilgisayar.com/Upload//Product/s-link/thumb/v2-93505_small.jpg"
                                  />
                                </div>
                                <div class="basket-promotion__name">
                                  S-LİNK IP-G11M 10.000mAh 2 USB PORT
                                  TAŞINABİLİR ŞARJ CİHAZI- BEYAZ
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="basket-promotion__right-wrapper">
                            <div class="basket-promotion__subtitle">
                              Size Özel
                            </div>
                            <div class="basket-promotion__right">
                              <div class="basket-promotion__price">
                                <span class="discount">125,00 TL</span>
                                <strong>68,99</strong> TL
                              </div>
                              <a
                                href="javascript:void(0)"
                                class="btn btn-default basket-promotion__button"
                                onclick="AddOfferToBasket(93505,1,true,20250)"
                                id="btnBasket"
                                >HEMEN EKLE</a
                              >
                            </div>
                          </div>
                        </div>
                        <hr
                          style="
                            background: transparent;
                            border-color: transparent;
                          "
                        />
                        <div class="clearfix basket_promo_item">
                          <div class="basket-promotion__left-wrapper">
                            <div class="basket-promotion__left">
                              <a
                                href="../snopy-sn-tws03-mobil-telefon-uyumlu-bluetooth-tws-mikrofonlu-kulaklik-beyaz.html"
                              >
                                <div class="basket-promotion__image">
                                  <img
                                    src="https://cdn.vatanbilgisayar.com/Upload//Product/snopy/thumb/109478_small.jpg"
                                  />
                                </div>
                                <div class="basket-promotion__name">
                                  SNOPY SN-TWS03 MOBİL TELEFON UYUMLU BLUETOOTH
                                  TWS MİKROFONLU KULAKLIK- BEYAZ
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="basket-promotion__right-wrapper">
                            <div class="basket-promotion__subtitle">
                              Size Özel
                            </div>
                            <div class="basket-promotion__right">
                              <div class="basket-promotion__price">
                                <span class="discount">359,00 TL</span>
                                <strong>199,00</strong> TL
                              </div>
                              <a
                                href="javascript:void(0)"
                                class="btn btn-default basket-promotion__button"
                                onclick="AddOfferToBasket(109478,1,true,21713)"
                                id="btnBasket"
                                >HEMEN EKLE</a
                              >
                            </div>
                          </div>
                        </div>
                        <hr
                          style="
                            background: transparent;
                            border-color: transparent;
                          "
                        />
                        <div class="clearfix basket_promo_item">
                          <div class="basket-promotion__left-wrapper">
                            <div class="basket-promotion__left">
                              <a
                                href="../brita-marella-cool-su-aritmali-akilli-surahi.html"
                              >
                                <div class="basket-promotion__image">
                                  <img
                                    src="https://cdn.vatanbilgisayar.com/Upload//Product/brita/thumb/89002-anaaa_small.jpg"
                                  />
                                </div>
                                <div class="basket-promotion__name">
                                  BRITA MARELLA COOL SU ARITMALI AKILLI SÜRAHİ
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="basket-promotion__right-wrapper">
                            <div class="basket-promotion__subtitle">
                              Size Özel
                            </div>
                            <div class="basket-promotion__right">
                              <div class="basket-promotion__price">
                                <span class="discount">129,00 TL</span>
                                <strong>98,99</strong> TL
                              </div>
                              <a
                                href="javascript:void(0)"
                                class="btn btn-default basket-promotion__button"
                                onclick="AddOfferToBasket(89002,1,true,24025)"
                                id="btnBasket"
                                >HEMEN EKLE</a
                              >
                            </div>
                          </div>
                        </div>
                        <hr
                          style="
                            background: transparent;
                            border-color: transparent;
                          "
                        />
                        <div class="clearfix basket_promo_item">
                          <div class="basket-promotion__left-wrapper">
                            <div class="basket-promotion__left">
                              <a
                                href="../silver-crest-sp-15-sarjli-su-pompasi.html"
                              >
                                <div class="basket-promotion__image">
                                  <img
                                    src="https://cdn.vatanbilgisayar.com/Upload//Product/silvercrest/thumb/127670_small.jpg"
                                  />
                                </div>
                                <div class="basket-promotion__name">
                                  SILVER CREST SP-15 ŞARJLI SU POMPASI
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="basket-promotion__right-wrapper">
                            <div class="basket-promotion__subtitle">
                              Size Özel
                            </div>
                            <div class="basket-promotion__right">
                              <div class="basket-promotion__price">
                                <span class="discount">50,00 TL</span>
                                <strong>44,98</strong> TL
                              </div>
                              <a
                                href="javascript:void(0)"
                                class="btn btn-default basket-promotion__button"
                                onclick="AddOfferToBasket(127670,1,true,24990)"
                                id="btnBasket"
                                >HEMEN EKLE</a
                              >
                            </div>
                          </div>
                        </div>
                        <hr
                          style="
                            background: transparent;
                            border-color: transparent;
                          "
                        />
                        <div class="clearfix basket_promo_item">
                          <div class="basket-promotion__left-wrapper">
                            <div class="basket-promotion__left">
                              <a
                                href="../philips-qp6505-20-oneblade-pro-sakali-duzeltin-sekillendirin-ve-tiras-edin.html"
                              >
                                <div class="basket-promotion__image">
                                  <img
                                    src="https://cdn.vatanbilgisayar.com/Upload//Product/philips/thumb/v2-92087_small.jpg"
                                  />
                                </div>
                                <div class="basket-promotion__name">
                                  PHILIPS QP6505/20 ONE BLADE PRO (SAKALI
                                  DÜZELTİN,ŞEKİLLENDİRİN VE TIRAŞ EDİN)
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="basket-promotion__right-wrapper">
                            <div class="basket-promotion__subtitle">
                              Size Özel
                            </div>
                            <div class="basket-promotion__right">
                              <div class="basket-promotion__price">
                                <span class="discount">499,00 TL</span>
                                <strong>329,00</strong> TL
                              </div>
                              <a
                                href="javascript:void(0)"
                                class="btn btn-default basket-promotion__button"
                                onclick="AddOfferToBasket(92087,1,true,26111)"
                                id="btnBasket"
                                >HEMEN EKLE</a
                              >
                            </div>
                          </div>
                        </div>
                        <hr
                          style="
                            background: transparent;
                            border-color: transparent;
                          "
                        />
                        <div class="clearfix basket_promo_item">
                          <div class="basket-promotion__left-wrapper">
                            <div class="basket-promotion__left">
                              <a
                                href="../samsung-galaxy-buds-pro-kablosuz-kulaklik-silver.html"
                              >
                                <div class="basket-promotion__image">
                                  <img
                                    src="https://cdn.vatanbilgisayar.com/Upload//Product/samsung/thumb/118219_small.jpg"
                                  />
                                </div>
                                <div class="basket-promotion__name">
                                  SAMSUNG GALAXY BUDS PRO KABLOSUZ KULAKLIK -
                                  GÜMÜŞ
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="basket-promotion__right-wrapper">
                            <div class="basket-promotion__subtitle">
                              Size Özel
                            </div>
                            <div class="basket-promotion__right">
                              <div class="basket-promotion__price">
                                <span class="discount">1.599,00 TL</span>
                                <strong>1.498,99</strong> TL
                              </div>
                              <a
                                href="javascript:void(0)"
                                class="btn btn-default basket-promotion__button"
                                onclick="AddOfferToBasket(118219,1,true,26263)"
                                id="btnBasket"
                                >HEMEN EKLE</a
                              >
                            </div>
                          </div>
                        </div>
                        <hr
                          style="
                            background: transparent;
                            border-color: transparent;
                          "
                        />
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab2">
                      <div class="basket-promotion-others">
                        <h4 class="basket-promotion-others__title">
                          <i class="icon-arrow-down-percent"></i>
                          Bu ürünlere de ihtiyacınız olabilir
                        </h4>
                        <div class="basket-promotion-others__row">
                          <a href="../apple-mhje3tu-a-20w-usb-c-adapor.html">
                            <div class="basket-promotion-others__image">
                              <img
                                src="https://cdn.vatanbilgisayar.com/Upload//Product/apple/thumb/115410_small.jpg"
                                alt="apple-mhje3tu-a-20w-usb-c-adapor.html"
                                title="apple-mhje3tu-a-20w-usb-c-adapor.html"
                              />
                            </div>
                            <div class="basket-promotion-others__name">
                              <span
                                >APPLE MHJE3TU/A 20W USB-C HIZLI ŞARJ GÜÇ
                                ADAPTÖRÜ</span
                              >
                            </div>
                          </a>
                          <div class="basket-promotion-others__price">
                            <div class="basket-promotion-others__price-wrapper">
                              <strong>199,00</strong> TL
                            </div>
                          </div>
                          <form
                            action="/Basket/AddBundle?ProductId=115410&amp;BundleType=0&amp;MainItemLineId=23197315"
                            class="form-horizontal"
                            data-ajax="true"
                            data-ajax-begin="javascript:locked();"
                            data-ajax-method="POST"
                            data-ajax-success="OnSuccessAddBundle"
                            id="form0"
                            method="post"
                            role="form"
                          >
                            <input
                              name="__RequestVerificationToken"
                              type="hidden"
                              value="b76QKW8ULhBPlsTtGEvxQxYftGqmGSl77ButMgZXLcNGfF_TZRFwcgpCvzvu8nXQ8OOrykCv2IBPzfnNtW_ZEm_VpxU1"
                            />
                            <input
                              type="submit"
                              class="
                                btn btn-primary
                                basket-promotion-others__button
                              "
                              value="EKLE"
                            />
                          </form>
                        </div>
                        <div class="basket-promotion-others__row">
                          <a
                            href="../apple-mwvg2zm-a-iphone-11-telefon-kilifi-seffaf.html"
                          >
                            <div class="basket-promotion-others__image">
                              <img
                                src="https://cdn.vatanbilgisayar.com/Upload//Product/apple/thumb/TeoriV2-104375_small.jpg"
                                alt="apple-mwvg2zm-a-iphone-11-telefon-kilifi-seffaf.html"
                                title="apple-mwvg2zm-a-iphone-11-telefon-kilifi-seffaf.html"
                              />
                            </div>
                            <div class="basket-promotion-others__name">
                              <span
                                >APPLE MWVG2ZM/A IPHONE 11 TELEFON KILIFI -
                                ŞEFFAF</span
                              >
                            </div>
                          </a>
                          <div class="basket-promotion-others__price">
                            <div class="basket-promotion-others__price-wrapper">
                              <strong>399,00</strong> TL
                            </div>
                          </div>
                          <form
                            action="/Basket/AddBundle?ProductId=104375&amp;BundleType=0&amp;MainItemLineId=23197315"
                            class="form-horizontal"
                            data-ajax="true"
                            data-ajax-begin="javascript:locked();"
                            data-ajax-method="POST"
                            data-ajax-success="OnSuccessAddBundle"
                            id="form1"
                            method="post"
                            role="form"
                          >
                            <input
                              name="__RequestVerificationToken"
                              type="hidden"
                              value="Hd2v7dO10L5XxIH7Mjl8YlZmnX5gHwNYIBkHuL9jMeOkTrCjf5F5rBAjJFgd3-J40Sbv_t1aH6aimDqT7qsuJCyzT-U1"
                            />
                            <input
                              type="submit"
                              class="
                                btn btn-primary
                                basket-promotion-others__button
                              "
                              value="EKLE"
                            />
                          </form>
                        </div>
                        <div class="basket-promotion-others__row">
                          <a href="../apple-mhxh3tu-a-magsafe-charger.html">
                            <div class="basket-promotion-others__image">
                              <img
                                src="https://cdn.vatanbilgisayar.com/Upload//Product/apple/thumb/115411-1_small.jpg"
                                alt="apple-mhxh3tu-a-magsafe-charger.html"
                                title="apple-mhxh3tu-a-magsafe-charger.html"
                              />
                            </div>
                            <div class="basket-promotion-others__name">
                              <span
                                >APPLE MHXH3TU/A MAGSAFE KABLOSUZ ŞARJ
                                AYGITI</span
                              >
                            </div>
                          </a>
                          <div class="basket-promotion-others__price">
                            <div class="basket-promotion-others__price-wrapper">
                              <strong>399,00</strong> TL
                            </div>
                          </div>
                          <form
                            action="/Basket/AddBundle?ProductId=115411&amp;BundleType=0&amp;MainItemLineId=23197315"
                            class="form-horizontal"
                            data-ajax="true"
                            data-ajax-begin="javascript:locked();"
                            data-ajax-method="POST"
                            data-ajax-success="OnSuccessAddBundle"
                            id="form2"
                            method="post"
                            role="form"
                          >
                            <input
                              name="__RequestVerificationToken"
                              type="hidden"
                              value="KaL_E367sfPn9mvnab5jTeCwtyu1vzt_8mk9CbG1OAimx9r_7rF8wWp5x_MDdAx8ZJuUIpv5CNLlehAg_T0beGmQyr01"
                            />
                            <input
                              type="submit"
                              class="
                                btn btn-primary
                                basket-promotion-others__button
                              "
                              value="EKLE"
                            />
                          </form>
                        </div>
                        <div class="text-center">
                          <a href="#" id="discount" class="discount-link hide">
                            <div class="discount-up">
                              <span>Daha Fazla Göster</span>
                              <span class="icon-angle-down"></span>
                            </div>
                            <div class="discount-down hide">
                              <span>Daha Az Göster</span>
                              <span class="icon-angle-up"></span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab3">
                      <div class="basket-promotion-others">
                        <h4 class="basket-promotion-others__title">
                          <i class="icon-buyback-1"></i>
                          Geri Alım Kampanyası Süreci
                        </h4>
                        <div class="basket-buyback-list">
                          <ul class="timeline-list">
                            <li>
                              <span>1</span>
                              <p>
                                Yeni bir ürün satın alırken, geri alıma uygun
                                cihazınızı geri alarak en uygun şekilde
                                değerlendirmenizi sağlıyoruz.
                              </p>
                            </li>
                            <li>
                              <span>2</span>
                              <p>
                                Bunun için cihazınızın markası, modeli ve durumu
                                ile ilgili birkaç soruyu yanıtlamanız
                                yeterlidir.
                              </p>
                            </li>
                            <li>
                              <span>3</span>
                              <p>
                                Soruları yanıtladığınızda cihazınızın tahmini
                                takas değerini öğreneceksiniz.
                              </p>
                            </li>
                            <li>
                              <span>4</span>
                              <p>
                                Geri alım teklifimizi kabul ederseniz,
                                cihazınızı bize gönderdiğinizde beyanınıza uygun
                                cihazınız için teklif bedelini banka hesabınıza
                                göndereceğiz.
                              </p>
                            </li>
                            <li>
                              <span>5</span>
                              <p>
                                Yeni bir ürün satın aldığınızda, eski cihazınızı
                                bize güvenli bir şekilde göndermeniz için bir
                                kit göndereceğiz.
                              </p>
                            </li>
                            <li>
                              <span>6</span>
                              <p>
                                Cihazınızı bu kitin içine koyup ücretsiz olarak
                                bize kargolayabilirsiniz.
                              </p>
                            </li>
                            <li>
                              <span>7</span>
                              <p>
                                Cihazınız bize ulaştıktan sonra inceleyeceğiz ve
                                durumunu doğrulayacağız.
                              </p>
                            </li>
                            <li>
                              <span>8</span>
                              <p>
                                Kontrol sonrası her şey beyanınıza uygun ise
                                hesabınıza teklif bedelini havale edeceğiz.
                              </p>
                            </li>
                            <li>
                              <span>9</span>
                              <p>
                                Cihazınızın durumunda beyan ettiğinizden
                                farklılık tespit edersek, yeni bir teklif
                                ileteceğiz.
                              </p>
                            </li>
                            <li>
                              <span>10</span>
                              <p>
                                Yeni teklifi, kabul etme veya reddetme
                                seçeneğiniz olacaktır. Reddederseniz, cihazınız
                                ücretsiz olarak size iade edilecektir.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="
                    wrapper-product wrapper-product--dark
                    visilabs-basket-promoted
                    basket-promoted-products
                    hide
                  "
                >
                  <div class="global-container">
                    <div class="global-component-header clearfix">
                      <h3 class="global-component-header__title">
                        Bunu Alanlar Bunları da Aldı
                      </h3>
                    </div>
                    <div
                      class="
                        owl-carousel
                        basket-owl
                        owl-theme
                        vis-basket-widget
                        owl-loaded owl-drag owl-hidden
                      "
                    >
                      <div class="owl-stage-outer">
                        <div class="owl-stage"></div>
                      </div>
                      <div class="owl-nav disabled">
                        <button
                          type="button"
                          role="presentation"
                          class="owl-prev"
                        >
                          <span
                            class="btn-carousel-controls icon-angle-left"
                          ></span></button
                        ><button
                          type="button"
                          role="presentation"
                          class="owl-next"
                        >
                          <span
                            class="btn-carousel-controls icon-angle-right"
                          ></span>
                        </button>
                      </div>
                      <div class="owl-dots disabled"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-lg-4">
                <div class="basket-ordersummary">
                  <h4 class="basket-ordersummary__title">Sipariş Özeti</h4>
                  <div class="basket-ordersummary__secure-shopping">
                    <img
                      src="https://www.vatanbilgisayar.com/assets/dist/images/secure-shopping-icon.png"
                      alt="#"
                      class="img-responsive"
                    />
                    <div class="basket-ordersummary__secure-shopping-text">
                      <strong>GÜVENLİ</strong>
                      <span>ALIŞVERİŞ</span>
                    </div>
                  </div>
                  <img src="" alt="" />
                  <table class="table basket-ordersummary__list">
                    <tbody>
                      <tr>
                        <td><strong>Ara Toplam</strong></td>
                        <td class="text-right">6.778,81 TL</td>
                      </tr>
                      <tr>
                        <td><strong>KDV</strong></td>
                        <td class="text-right">1.220,19 TL</td>
                      </tr>
                      <tr class="basket-ordersummary__total">
                        <td>TOPLAM</td>
                        <td class="text-right active">
                          <strong> 7.999,00 </strong> TL
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="basket-button-wrapper">
                    <div class="row">
                      <div
                        class="
                          col-xs-5
                          hidden-lg hidden-sm
                          basket-summary-button-left
                        "
                      >
                        <h5>Toplam</h5>
                        <span class="basket-sm-button-price"> 7.999,00 </span>
                        <span class="basket-sm-button-price_rate"> TL </span>
                      </div>
                      <div class="col-sm-12 col-xs-7 basket-summary-button">
                        <form
                          action="/Basket/ToSecondStep?returnUrl=%2Fsepet%2Fsepetim%2F"
                          class="form-horizontal"
                          id="continueForm"
                          method="post"
                          role="form"
                        >
                          <input
                            name="__RequestVerificationToken"
                            type="hidden"
                            value="NTiQJGgIkQCCY-RxnVBPue6vl78H-DErgwNlRJS9q5U6Ydpy2pLbNltEcBltvhtnqSlRy8-o5EUJLz_jqeW8aszfM-k1"
                          />
                          <input
                            type="hidden"
                            id="current"
                            name="current"
                            value="0"
                          />
                          <button
                            class="
                              btn btn-block btn-success
                              input-lg
                              basket-ordersummary__button
                              continuebutton
                              btn-arrow
                            "
                          >
                            Sepeti Onayla <span><i class="fas fa-chevron-right"></i></span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://www.vatanbilgisayar.com/assets/dist/images/signup_logos.png"
                    alt="#"
                    class="basket-ordersummary__logos"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <script>
          gtag('event', 'add_to_cart', {
            send_to: 'AW-1029930232',
            value: '7999',
            items: [
              {
                id: 'MHDA3TU/A',
                google_business_vertical: 'retail',
              },
            ],
          })
        </script>
      </main>
      <span id="emessage"></span>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/jquery/jquery-3.3.1.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/jquery-query-object/jquery.query-object.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/picturefill/picturefill.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/bootstrap/bootstrap.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/bootstrap-datetimepicker/moment.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/inputmask/jquery.inputmask.bundle.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/owl-carousel/owl.carousel.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/owl-carousel/OwlCarousel2Thumbs.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/masonry/jquery.masonry.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/slide-product-images/slide-product-images.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/fancybox/jquery.fancybox.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/jquery-countdown/jquery.countdown.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/intersection-observer-polyfill/intersection-observer-polyfill.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/js-cookie/jquery.cookie.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/jquery-validate/jquery.validate.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/jquery-validate-unobtrusive/jquery.validate.unobtrusive.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/jquery-unobtrusive-ajax/jquery.unobtrusive-ajax.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/zooms/jquery.ez-plus.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/lazyload/lazyload.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/gauage/gauge.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/selectize/selectize.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/swiper/swiper.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/simplebar/simplebar.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/tablesort/jquery.tablesorter.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/tablesort/jquery.tablesorter.widgets.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/images/canli/jquery.touchSwipe.min.js"></script>
      <script src="https://www.vatanbilgisayar.com/images/code/gis/gis.js?v=5454654"></script>
      <script src="/Scripts/mfs-client.min.js"></script>
      <script src="/Scripts/mpass.js"></script>
      <script src="https://www.vatanbilgisayar.com/assets/dist/js/bundle.js?v=10007957020904"></script>
      
      <div class="scroll-top" style="display: none; pointer-events: none">
        <span class="icon-arrow-up"></span>
      </div>
    </body>
  </html>
</template>