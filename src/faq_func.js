module.exports ={

    goToFaqMyths: function(tg, callbackQuery){

        let text ='<b>❣️ Мифы и правда об озоновой косметике: \n</b>'


        let Button1 = {
            text: 'МИФ №1. Озоновый запах.',
            callback_data: 'myth1Cmd'
        }

        let Button2 = {
            text: 'МИФ №2. Я пробовала – она не работает.',
            callback_data: 'myth2Cmd'
        }
        let Button3 = {
            text: 'Реальность: наши комплексы ',
            callback_data: 'myth3Cmd'
        }

        let Button4 = {
            text: "🔙",
            callback_data: 'FAQCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1],
                            [Button2],
                            [Button3],
                            [Button4]

                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )
        tg.editMessageText(text, options)



    },

    goTo1Myth : function(tg, callbackQuery){

        let text = "<b>МИФ №1. Озоновые крема имеют ярко выраженный специфический запах.\n</b>"+
            'Собственно говоря, и отрицать тут нечего – все верно! Озоновая косметика пахнет озоном. А чем другим она должна пахнуть? Скажем больше: хорошая озоновая косметика ДОЛЖНА пахнуть озоном! Если озоновый крем не имеет характерного запаха – это должно вас насторожить, т.к. возникает резонный вопрос: а есть ли там вообще озон? За что Вы платите деньги? За пустой крем с отдушкой лаванды? Приятный носу, но пустой для кожи?\n' +
            '\n' +
            'Теперь по поводу специфичности этого самого запаха: где в природе мы можем слышать запах озона? Правильно, летом после грозы.Большинству людей этот запах нравится, так как он ассоциируется у них со свежестью. Все относительно. Кто-то сочтет запах озона специфично-отталкивающим, а для кого-то он приятен. Ведь и парфюм мы приобретаем, полагаясь исключительно на своё обоняние: нет универсального аромата, который боготворят все.\n' +
            '\n' +
            'Таким образом, итог: настоящая озонсодержащая косметика пахнет и должна пахнуть озоном! Этот запах – свидетельство неподдельной продукции. Каждый человек воспринимает запах озона по-разному, равно как и любые другие запахи – это нормально!\n' +
            '\n'

        let Button1 = {
            text: '🔙',
            callback_data: 'faqMythsCmd'
        }


        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1]

                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )
        tg.editMessageText(text, options)

    },

    goTo2Myth : function(tg, callbackQuery){

        let text ='<b>МИФ №2. Я пробовал (-ла) озоновую косметику – она не работает.\n</b>' +
            'Иногда к нам обращаются с такими комментариями.' +
            ' Например, был случай: девушка, будучи в положении, испытывала проблему с внезапным появлением прыщиков. Очень важно понимать причину явления, и тогда бороться с ним будет гораздо проще. В данном конкретном случае озоновый крем сделал свое дело насколько смог: кожа стала ровнее, здоровее, нормализовался цвет лица, прыщики стали меньше в размерах и сократилось их количество. Но (!) прыщики не ушли до конца, из-за чего девушка сделала вывод: «косметика не работает». Это не правильный вывод. Появление акне было обусловлено гормональными причинами, которые и лечить-то не нужно было – нужно было просто родить. Природа умнее нас, она все предусмотрела. Использование озонового крема помогло, это очевидно. Но не стоить играть с природой и пытаться её переиграть. Будьте здоровы!\n' +
            '\n'+
            '\n'
        let Button1 = {
            text: '🔙',
            callback_data: 'faqMythsCmd'
        }


        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1]

                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )
        tg.editMessageText(text, options)

    },

    goTo3Myth : function(tg, callbackQuery){

        let text = '<b>Не миф – реальность: наши комплексы и личная жизнь.\n</b>'+
            'Любить – это хотеть прикасаться. Согласны? Неукротимое желание постоянно трогать и обнимать объект своего вожделения, а уж покопаться в волосах любимой и «занырнуть» в них – это обычное дело. А теперь представьте, что у Вас на голове не полный порядок. При этом в самой голове все ок! Потому что Вы понимаете, перхоть на голове или случайно нащупанная болячка вашим любимым не доставят эстетического удовольствия ни вам, ни ему. Это понимание рождает комплексы, зажатое поведение, когда вы не можете полностью расслабиться.\n' +
            '\n' +
            'Беда усугубляется тем, что иногда мы и вовсе не знаем о том, в каком состоянии, например, наш затылок (я еще не встречала ни одного человека, у которого был бы там третий глаз!). А если проблема только начинается? Ответ очевиден: не запускать себя. Ибо профилактика – лучшее, что мы можем сделать для себя сами, без обращения к врачу.\n' +
            '\n' +
            'Позаботьтесь о своих волосах, любите себя и будьте в себе уверены.\n'+
            'P.S.: Тоже самое относится к коже лица, рук и тела.\n' +
            'Любите себя и будьте любимыми ❤️'
        let Button1 = {
            text: '🔙',
            callback_data: 'faqMythsCmd'
        }


        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1]

                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )
        tg.editMessageText(text, options)

    },

    goToFaqQuestions: function (tg, callbackQuery) {
        let text = '❣️ А здесь перечислены наиболее часто встречающиеся вопросы про нашу продукцию <b>Ozone Box</b>: \n'
        +'\n'

        let Button1 = {
            text: 'Формула озона',
            callback_data: 'faq1Cmd'
        }

        let Button2 = {
            text: 'Озонированное оливковое масло',
            callback_data: 'faq2Cmd'
        }
        let Button3 = {
            text: 'Технология производства',
            callback_data: 'faq3Cmd'
        }
        let Button4 = {
            text: 'Влияние масла на поры кожи',
            callback_data: 'faq4Cmd'
        }
        let Button5 = {
            text: 'Средства при псориазе и дерматите',
            callback_data: 'faq5Cmd'
        }
        let Button6 = {
            text: 'Помощь при стоматите',
            callback_data: 'faq6Cmd'
        }
        let Button7 = {
            text: 'Помощь при конъюктивите',
            callback_data: 'faq7Cmd'
        }
        let Button8 = {
            text: '🔙',
            callback_data: 'FAQCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1],
                            [Button2],
                            [Button3],
                            [Button4],
                            [Button5],
                            [Button6],
                            [Button7],
                            [Button8]

                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )


        tg.editMessageText(text, options)

    },

    goTo7Faq: function(tg, callbackQuery){
     let text = '<b>Можно ли применять озонированное масло при конъюнктивите? Не будет ли больно глазам?</b>>\n' +
         '\n' +
         'При конъюнктивите следует применять специальное слабоозонированное масло, с низкими кислотными и пероксидными числами. ОТРИ 6000 и ОТРИ 12000 для этих целей не подходят.\n'

        let Button1 = {
            text: '🔙',
            callback_data: 'faqQuestionsCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1]

                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )


        tg.editMessageText(text, options)
    },

    goTo1Faq: function(tg, callbackQuery){
        let text = '<b> У озона формула О3, а у вас в описании О2, а это уже кислород.</b>\n' +
            '\n' +
            'Кратко.\n' +
            'Действующее вещество озоновой косметики – озониды. Их получают, пропуская озон через благородное оливковое масло. Для успешного применения нужно знать, сколько озонидов содержит косметика. Количество озонидов определяется методом титрования и измеряется в миллиграммах активного кислорода (или активных форм кислорода). Записывается так : мг О2. Кстати, лечебное действие и озона, и озонидов, связывают, в основном, с действием активных форм кислорода.'

        let Button1 = {
            text: '🔙',
            callback_data: 'faqQuestionsCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1]

                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )


        tg.editMessageText(text, options)
    },

    goTo2Faq: function(tg, callbackQuery){
        let text = '<b> Вы знаете что при окислении масла получается очень нехорошее вещество? А озонирование – это и есть окисление! Может газификация? Может вы совсем запутались…\n</b>' +
            '\n' +
            'Кратко.\n' +
            '\n' +
            'Да, действительно, в результате длительного хранения на свету, да ещё при повышенной температуре, растительные масла окисляются, портятся, проще говоря - прогоркают. При этом они приобретают неприятный запах и вкус, который им сообщается продуктами окисления: альдегидами, кетонами, гидроксикислотами и пр. И Вы правы, эти продукты окисления, мягко говоря, неполезны при употреблении в пищу.\n' +
            '\n' +
            'То, что происходит при озонировании, окислением можно назвать лишь с большой натяжкой. При озонировании в оливковом масле происходит целый ряд химических реакций и связанных с ними изменений, которые обуславливают совершенно другие свойства конечного продукта. Проозонированное оливковое масло содержит контролируемое количество полезных соединений (озонидов) и «неполезных» веществ (см. выше), что совершенно не снижает общей ценности продукта, тем более что он не предназначен для употребления в пищу.'

        let Button1 = {
            text: '🔙',
            callback_data: 'faqQuestionsCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1]

                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )


        tg.editMessageText(text, options)
    },

    goTo3Faq: function(tg, callbackQuery){
        let text = '<b> Насколько известно из уроков химии, озон не подлежит ни транспортировке, ни тем более хранению. Также известно, что озон относится к высокому классу опасности и ядовит. Кроме того, озон является не стабильной молекулой, способной за несколько минут превращаться в кислород с выделением тепла при нормальных условиях. В связи с этим, интересен процесс производства, так как не понятно, как стабильно озон может держаться во флаконах с кремом...И получается в итоге, что не озоновая косметика, а кислородная.</b>\n' +
            '\n' +
            'Всё верно, озон это газ, время его жизни исчисляется минутами, он распадается под воздействием ультрафиолета. Не удивительно, что лечение с помощью озона (озонотерапия) выполняется около озонатора, сразу после получения озона.\n' +
            '\n' +
            'Но, активное вещество нашей озоновой косметики не короткоживущий озон, а озониды - устойчивые соединения озона с ненасыщенными жирными кислотами, содержащимися в оливковом масле. Проще говоря, мы сначала получаем озонированное оливковое масло с высоким содержанием озонидов (ОТРИ 20000), а потом, в процессе производства, добавляем его в продукцию. Озониды сохраняют целебные свойства озона в течение нескольких лет, это своеобразные «аккумуляторы» энергии озона, высвобождающие её при нанесении на кожу.\n' +
            '\n' +
            'Почему косметика называется озоновая, а не кислородная? Потому что косметика с озонидами относится к озонотерапии, к озоновому лечению.\n' +
            '\n' +
            'И Вы правы, газ озон вдыхать нельзя, он ядовит, но в нашей косметике озон «связан», «аккумулирован» в креме и поэтому не опасен.'

        let Button1 = {
            text: '🔙',
            callback_data: 'faqQuestionsCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1]

                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )


        tg.editMessageText(text, options)
    },

    goTo4Faq: function(tg, callbackQuery){
        let text = '<b> Как озонированное масло влияет на поры кожи? Бытует мнение, что при использовании любых косметических масел поры на коже сильно забиваются. Большинство косметологов запрещают пользоваться маслом. Кроме того, в масле могут размножаться бактерии...</b>\n' +
            '\n' +
            'Озонированное масло по лицу используют ограниченно, локально, как правило, с лечебными целями. Для ухода за лицом следует использовать озоновые крема. Занести бактерии с озоновой косметикой (и озонированным маслом) невозможно, в ней они не выживут, поскольку такая ' +
            'косметика быстро подавляет любые вирусы и бактерии за счет того, что кислород является губительной средой для них. Более того, озоновую косметику успешно применяют для борьбы с бактериальной и вирусной инфекцией на коже и слизистых.'

        let Button1 = {
            text: '🔙',
            callback_data: 'faqQuestionsCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1]

                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )


        tg.editMessageText(text, options)
    },

    goTo5Faq: function(tg, callbackQuery){
        let text = '<b> Какое средство лучше взять при псориазе и дерматите?</b>\n' +
            '\n' +
            'Озоновые крема или озонированное масло необходимо применять в зависимости от проблемы и места нанесения.'

        let Button1 = {
            text: '🔙',
            callback_data: 'faqQuestionsCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1]

                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )


        tg.editMessageText(text, options)
    },

    goTo6Faq: function(tg, callbackQuery){
        let text = '<b>Может ли озонированное масло помочь от стоматита? Необходимо ли промывать полость рта? </b>\n' +
            '\n' +
           'При стоматитах (включая герпетический стоматит) необходимо наносить на язвочки озонированное масло ОТРИ 6000 или ОТРИ 12000 апликационно от 2 до 5 раз в день (масло подбирается таким образом, чтобы не вызывало жжения при нанесении)'

        let Button1 = {
            text: '🔙',
            callback_data: 'faqQuestionsCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1]

                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )


        tg.editMessageText(text, options)
    }


}