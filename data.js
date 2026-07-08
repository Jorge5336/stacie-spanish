/******************************************************************
 * stacie — sentence expansion pack
 * Drop each block into the matching array inside SENTENCES_BASE.
 * IDs continue from where each track currently ends.
 * Gender note: Stacie self-reference uses [fem|neutral] e.g.
 * [orgullosa|orgullose]; Mia-facing lines avoid gendered adjectives.
 ******************************************************************/

// ---- add to work: [ ... ] (continues after w20) ----
  { id:'w21', lvl:0, es:'¿Encontraste bien el edificio?', hint:'did you find the building okay', tags:['work','tours'] },
  { id:'w22', lvl:0, es:'El baño está al fondo del pasillo.', hint:'the bathroom is at the end of the hall', tags:['work'] },
  { id:'w23', lvl:1, es:'Si necesitas platicar, aquí estoy.', hint:'if you need to talk, I am here', tags:['support'] },
  { id:'w24', lvl:1, es:'El centro de salud está abierto hasta las cinco.', hint:'the health center is open until five', tags:['work','resources'] },
  { id:'w25', lvl:1, es:'Tus paquetes llegan a la oficina de correo.', hint:'your packages arrive at the mail office', tags:['work'] },
  { id:'w26', lvl:1, es:'¿Ya te instalaste bien?', hint:'are you all settled in', tags:['checkin'] },
  { id:'w27', lvl:1, es:'La biblioteca es buen lugar para estudiar.', hint:'the library is a good place to study', tags:['work','carleton'] },
  { id:'w28', lvl:2, es:'Si tienes problemas con tu roomie, podemos hablarlo.', hint:'if you have problems with your roommate, we can talk it through', tags:['work','boundaries'] },
  { id:'w29', lvl:2, es:'Guarda mi número por si hay una emergencia.', hint:'save my number in case of an emergency', tags:['work','safety'] },
  { id:'w30', lvl:2, es:'Extrañar tu casa es normal al principio.', hint:'missing home is normal at first', tags:['support'] },
  { id:'w31', lvl:1, es:'En invierno, abrígate bien para ir a clases.', hint:'in winter, bundle up to go to class', tags:['work','minnesota'] },
  { id:'w32', lvl:2, es:'Recuerda que hay consejería si la necesitas.', hint:'remember there is counseling if you need it', tags:['work','resources'] },

// ---- add to mia: [ ... ] (continues after m20) ----
  { id:'m21', lvl:0, es:'¿Vemos algo de la boda hoy?', hint:'shall we look at wedding stuff today', tags:['wedding','plans'] },
  { id:'m22', lvl:1, es:'Me emociona mucho casarme contigo.', hint:'I am so excited to marry you', tags:['wedding','love'] },
  { id:'m23', lvl:1, es:'¿Ya alimentaste a los gatos?', hint:'did you feed the cats yet', tags:['cats','home'] },
  { id:'m24', lvl:0, es:'Doom otra vez durmió encima de mí.', hint:'Doom slept on top of me again', tags:['cats'] },
  { id:'m25', lvl:2, es:'Perdón por lo de anoche. No fue mi intención.', hint:'sorry about last night, I did not mean it', tags:['repair'] },
  { id:'m26', lvl:2, es:'Hablemos con calma cuando llegues.', hint:'let us talk calmly when you get home', tags:['communication'] },
  { id:'m27', lvl:1, es:'Estoy muy [orgullosa|orgullose] de ti.', hint:'I am so proud of you', tags:['appreciation'] },
  { id:'m28', lvl:1, es:'¿Qué sueñas para nuestra casa algún día?', hint:'what do you dream for our house someday', tags:['future','plans'] },
  { id:'m29', lvl:0, es:'Descansa, yo me encargo de la cena.', hint:'rest, I will take care of dinner', tags:['care'] },
  { id:'m30', lvl:1, es:'Gracias por apoyarme siempre.', hint:'thank you for always supporting me', tags:['appreciation'] },
  { id:'m31', lvl:2, es:'Estés como estés hoy, aquí estoy contigo.', hint:'however you are feeling today, I am here with you', tags:['support'] },
  { id:'m32', lvl:1, es:'Te preparé tu café favorito.', hint:'I made you your favorite coffee', tags:['sweet'] },

// ---- add to family: [ ... ] (continues after f18) ----
  { id:'f19', lvl:0, es:'¿Les traigo algo la próxima vez?', hint:'can I bring you something next time', tags:['warmth'] },
  { id:'f20', lvl:1, es:'Me encantaría aprender esta tradición.', hint:'I would love to learn this tradition', tags:['learning'] },
  { id:'f21', lvl:1, es:'¿Cómo se llama este platillo?', hint:'what is this dish called', tags:['food','learning'] },
  { id:'f22', lvl:0, es:'Gracias por todo. Ya nos vamos.', hint:'thanks for everything, we are heading out', tags:['goodbye'] },
  { id:'f23', lvl:1, es:'Perdón si me equivoco con el español.', hint:'sorry if I make mistakes in Spanish', tags:['effort'] },
  { id:'f24', lvl:1, es:'¿Me repiten sus nombres, por favor?', hint:'could you repeat your names, please', tags:['clarification'] },
  { id:'f25', lvl:2, es:'Cuéntenme cómo se conocieron ustedes.', hint:'tell me how you two met', tags:['conversation'] },
  { id:'f26', lvl:1, es:'¡Qué grandes están los niños!', hint:'the kids have gotten so big', tags:['extended'] },
  { id:'f27', lvl:2, es:'Nos encantaría pasar las fiestas con ustedes.', hint:'we would love to spend the holidays with you', tags:['future'] },
  { id:'f28', lvl:0, es:'¿Nos tomamos una foto todos?', hint:'shall we all take a photo', tags:['social'] },
  { id:'f29', lvl:1, es:'La receta me la tienen que enseñar.', hint:'you have to teach me the recipe', tags:['food','learning'] },
  { id:'f30', lvl:2, es:'Me hacen sentir como en casa.', hint:'you make me feel at home', tags:['warmth'] },

// ---- add to suegros: [ ... ] (continues after s20, formal usted) ----
  { id:'s21', lvl:1, es:'Muchas gracias por recibirnos en su casa.', hint:'thank you for having us in your home (formal)', tags:['gratitude','formal'] },
  { id:'s22', lvl:2, es:'Nos encantaría que nos visitaran en Minnesota.', hint:'we would love for you to visit us in Minnesota (formal)', tags:['future','formal'] },
  { id:'s23', lvl:1, es:'¿Cómo va todo por allá, señor?', hint:'how is everything over there, sir', tags:['formal'] },
  { id:'s24', lvl:2, es:'Le traje un pequeño detalle de nuestra parte.', hint:'I brought you a small gift from us (formal)', tags:['gift','formal'] },
  { id:'s25', lvl:1, es:'Cuídense mucho, por favor.', hint:'please take good care of yourselves', tags:['warmth'] },
  { id:'s26', lvl:2, es:'Para mí es un honor ser parte de su familia.', hint:'it is an honor for me to be part of your family (formal)', tags:['relationship','formal'] },
  { id:'s27', lvl:1, es:'¿Cómo ha estado de salud, señora?', hint:'how has your health been, ma\'am (formal)', tags:['formal','health'] },
  { id:'s28', lvl:2, es:'Si necesitan algo, aquí estamos para ustedes.', hint:'if you need anything, we are here for you (formal)', tags:['support','formal'] },
  { id:'s29', lvl:1, es:'Discúlpeme, todavía estoy aprendiendo español.', hint:'forgive me, I am still learning Spanish (formal)', tags:['effort','formal'] },
  { id:'s30', lvl:2, es:'Ha sido un gusto enorme conocerlos por fin.', hint:'it has been a huge pleasure to finally meet you', tags:['first_meeting','formal'] },
  { id:'s31', lvl:1, es:'Gracias por todo. Fue una tarde muy linda.', hint:'thank you for everything, it was a lovely afternoon', tags:['gratitude'] },
  { id:'s32', lvl:2, es:'Con gusto les llamamos la próxima semana.', hint:'we will gladly call you next week (formal)', tags:['future','formal'] },

// ---- add to vida: [ ... ] (continues after v30) ----
  { id:'v31', lvl:0, es:'Otis quiere su desayuno otra vez.', hint:'Otis wants his breakfast again', tags:['cats','morning'] },
  { id:'v32', lvl:1, es:'Jules se escondió abajo de la cama.', hint:'Jules hid under the bed', tags:['cats'] },
  { id:'v33', lvl:1, es:'Hay que limpiar el arenero de los gatos.', hint:'we need to clean the cats\' litter box', tags:['chores','cats'] },
  { id:'v34', lvl:0, es:'¿Cocinamos algo rico hoy?', hint:'shall we cook something good today', tags:['food','plans'] },
  { id:'v35', lvl:1, es:'¿Vamos a pescar el sábado?', hint:'shall we go fishing on Saturday', tags:['weekend','hobby'] },
  { id:'v36', lvl:1, es:'Pon un disco mientras hago la cena.', hint:'put on a record while I make dinner', tags:['music','evening'] },
  { id:'v37', lvl:2, es:'Baja un poco el volumen, porfa, ya es tarde.', hint:'turn the volume down a bit please, it is late', tags:['evening','home'] },
  { id:'v38', lvl:0, es:'Está nevando otra vez. Qué bonito.', hint:'it is snowing again, how pretty', tags:['winter','minnesota'] },
  { id:'v39', lvl:1, es:'Prendamos una velita y quedémonos en casa.', hint:'let us light a candle and stay home', tags:['cozy','evening'] },
  { id:'v40', lvl:1, es:'Tenemos que pagar la renta esta semana.', hint:'we have to pay rent this week', tags:['errands','planning'] },
  { id:'v41', lvl:2, es:'Doblo la ropa si tú lavas los platos.', hint:'I will fold the laundry if you wash the dishes', tags:['chores'] },
  { id:'v42', lvl:0, es:'Buenas noches. Que descanses.', hint:'good night, sleep well', tags:['evening'] },

// ---- add to health: [ ... ] (continues after h20) ----
  { id:'h21', lvl:0, es:'Necesito ir a la farmacia.', hint:'I need to go to the pharmacy', tags:['medication'] },
  { id:'h22', lvl:1, es:'¿Me acompañas al dentista?', hint:'will you come with me to the dentist', tags:['medical','support'] },
  { id:'h23', lvl:1, es:'Voy a salir a caminar para despejarme.', hint:'I am going for a walk to clear my head', tags:['emotions','recovery'] },
  { id:'h24', lvl:2, es:'Hoy no tengo mucho ánimo.', hint:'I do not have much energy today', tags:['emotions','negative'] },
  { id:'h25', lvl:1, es:'Me tomo la medicina en la mañana.', hint:'I take my medicine in the morning', tags:['medication'] },
  { id:'h26', lvl:1, es:'Me duele la panza.', hint:'my stomach hurts', tags:['pain'] },
  { id:'h27', lvl:2, es:'¿Cómo te sientes? Me preocupas.', hint:'how are you feeling? I am worried about you', tags:['support','care'] },
  { id:'h28', lvl:0, es:'Ya me siento mejor, gracias.', hint:'I feel better now, thank you', tags:['positive','recovery'] },
  { id:'h29', lvl:1, es:'Necesito dormir más esta semana.', hint:'I need more sleep this week', tags:['sleep'] },
  { id:'h30', lvl:2, es:'Respira. Vamos a estar bien.', hint:'breathe, we are going to be okay', tags:['emotions','support'] },

// ---- add to food: [ ... ] (continues after fo19) ----
  { id:'fo20', lvl:0, es:'Un pan dulce y un café, por favor.', hint:'a sweet bread and a coffee, please', tags:['coffee','order'] },
  { id:'fo21', lvl:1, es:'¿Me da una concha de chocolate?', hint:'can I get a chocolate concha', tags:['mexican','order'] },
  { id:'fo22', lvl:1, es:'Un agua de jamaica, porfa.', hint:'a hibiscus water, please', tags:['mexican','order'] },
  { id:'fo23', lvl:0, es:'¿Me pasa la salsa, por favor?', hint:'can you pass the salsa, please', tags:['food'] },
  { id:'fo24', lvl:1, es:'Esto está para chuparse los dedos.', hint:'this is finger-licking good', tags:['compliment'] },
  { id:'fo25', lvl:2, es:'¿Me da la receta? Quiero hacerlo en casa.', hint:'can I have the recipe? I want to make it at home', tags:['food','learning'] },
  { id:'fo26', lvl:1, es:'A mí no me gusta muy picoso.', hint:'I do not like it too spicy', tags:['spice','preference'] },
  { id:'fo27', lvl:0, es:'¿Nos trae la carta, por favor?', hint:'can you bring us the menu, please', tags:['restaurant'] },
  { id:'fo28', lvl:1, es:'Nos empacamos lo que sobró para llevar.', hint:'let us box up the leftovers to go', tags:['restaurant'] },
  { id:'fo29', lvl:2, es:'¿Este platillo lleva algo de lácteos?', hint:'does this dish have any dairy in it', tags:['restaurant','dietary'] },
  { id:'fo30', lvl:1, es:'Yo invito esta vez.', hint:'my treat this time', tags:['restaurant'] },
