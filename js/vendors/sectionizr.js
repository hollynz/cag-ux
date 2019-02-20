if (typeof module != "undefined" && module.exports) {
    var domtoimage = require("dom-to-image");
    module.exports = {}
}
$.fn.sectionize = $.fn.sectionizr = function() {
    let i = [];
    $(this).each((e, s) => {
        if (s.sectionizr) {
            s.sectionizr.refresh();
            i.push(s.sectionizr);
            return
        }
        s.sectionizr = new function() {
            let i = this;
            let e = false;
            let t = false;
            i.el = s;
            i.sections = [];
            i.position = 1;
            i.next = (() => {
                if (!i.hasNext()) return false;
                return o()
            });
            i.prev = (() => {
                if (!i.hasPrev()) return false;
                return o(false)
            });
            i.step = (e => {
                i.position += e;
                i.position = i.position < 1 ? 1 : i.position > i.sections.length ? i.sections.length : i.position;
                o(null)
            });
            i.go = (e => {
                i.position = e;
                i.position = i.position < 1 ? 1 : i.position > i.sections.length ? i.sections.length : i.position;
                o(null)
            });
            i.first = (() => {
                i.position = 1;
                o(null)
            });
            i.last = (() => {
                i.position = i.sections.length;
                o(null)
            });
            i.hasNext = (() => i.position < i.sections.length);
            i.hasPrev = (() => i.position > 1);
            i.refresh = (() => l(true));
            i.orientation = (() => e ? "vertical" : "horizontal");

            function o(s = true) {
                s === true ? i.position++ : s === false ? i.position-- : null;
                let o = e ? "marginTop" : "marginLeft";
                let l = `-${(i.position-1)*(e?i.sections[0].clientHeight:100)}${e?"px":"%"}`;
                $(i.sections[0]).css({
                    [o]: l
                });
                $(".snzr").removeClass("snzr");
                $(".snzr-visible").removeClass("snzr-visible");
                n(() => {
                    if (t) $("dom-image").remove();
                    $(i.sections[i.position - 1]).addClass("snzr-visible");
                    $(i.sections).addClass("snzr");
                    if (t) {
                        let e = [];
                        i.position > 1 ? e.push(i.sections[i.position - 2]) : null;
                        i.position < i.sections.length ? e.push(i.sections[i.position]) : null;
                        $(e).each((i, e) => {
                            $(e).removeClass("snzr");
                            domtoimage.toPng(e, {
                                quality: .1
                            }).then(i => {
                                $(e).addClass("snzr");
                                $img = $("<dom-image></dom-image>");
                                $img.css({
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    top: "0",
                                    left: "0",
                                    opacity: "0.3",
                                    backgroundImage: `url(${i})`,
                                    backgroundRepeat: "no-repeat"
                                });
                                $(e).append($img)
                            })
                        })
                    }
                }, 500);
                return true
            }

            function n(i, e) {
                setTimeout(i, e)
            }

            function l(s = false) {
                e = $(i.el).hasClass("vertical") || $(i.el).is("[data-vertical]");
                t = typeof domtoimage != "undefined" && $(i.el).is("[data-peek]");
                i.sections.length = 0;
                $(">section", $(i.el)).each((e, s) => i.sections.push(s));
                if (!s) $(i.sections).css({
                    marginLeft: 0,
                    marginTop: 0
                });
                i.go(i.position)
            }
            l()
        };
        i.push(s.sectionizr)
    });
    return i.length == 1 ? i[0] : i
};