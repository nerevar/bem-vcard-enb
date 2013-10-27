({
    block: 'b-page',
    title: 'Роман Рыбальченко — nerevar@yandex-team.ru',
    favicon: '//yandex.st/morda-logo/i/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css' },
        { elem: 'js', url: 'http://yandex.st/jquery/1.9.1/jquery.min.js' },
        { elem: 'js', url: '_index.js' },
        {
            elem: 'meta',
            attrs: {
                name: 'viewport',
                content: 'width=600, initial-scale=1.0'
            }
        }
    ],
    content: [
    {
        block: 'card',
        cards: [
            {
                lang: 'ru',
                i18n: {
                    tel: 'тел.: ',
                    fax: 'факс: ',
                    cellular: 'моб.: ',
                    phoneAdd: ', доб. '
                },
                data: {
                    name: 'Роман Рыбальченко',
                    position: 'Руководитель группы разработки интерфейсов поиска картинок',
                    contact: {
                        country: 'Россия',
                        locality: 'Москва',
                        zip: '119021',
                        address: 'ул. Льва Толстого, д. 16',
                        phone: '+7 (495) 739-70-00',
                        phoneAdd: '6941',
                        cellular: '+7 (926) 982-55-08',
                        site: 'www.yandex.ru'
                    },
                    extra: {
                        email: 'nerevar@yandex-team.ru',
                        skype: 'r.nerevar',
                        github: 'nerevar'
                    }
                }
            },
            {
                lang: 'en',
                i18n: {
                    tel: 'tel. ',
                    fax: 'fax ',
                    cellular: 'cel. ',
                    phoneAdd: ' ext. '
                },
                data: {
                    name: 'Roman Rybalchenko',
                    position: 'Team leader of images search interfaces',
                    contact: {
                        country: 'Russia',
                        locality: 'Moscow',
                        zip: '119021',
                        address: '16, Leo Tolstoy St.',
                        phone: '+7 (495) 739-70-00',
                        phoneAdd: '6941',
                        cellular: '+7 (926) 982-55-08',
                        site: 'www.yandex.ru'
                    },
                    extra: {
                        email: 'nerevar@yandex-team.ru',
                        skype: 'r.nerevar',
                        github: 'nerevar'
                    }
                }
            }
        ]
    },
    {
        cls: 'metrika',
        bem: false,
        content: '<!-- Yandex.Metrika counter --><script type="text/javascript">(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter22708219 = new Ya.Metrika({id:22708219, accurateTrackBounce:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/22708219" style="position:absolute; left:-9999px;" alt="" /></div></noscript><!-- /Yandex.Metrika counter -->'
    }
    ]
})
