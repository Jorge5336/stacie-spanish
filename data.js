/******************************************************************
 * stacie — content data
 * Everything Stacie practices lives in this file: sentences,
 * conversations, lunch cards, encouragements, tips, badges.
 * Edit here to add content; index.html holds the app code.
 ******************************************************************/

// ---------------- CAT PERSONALITIES ----------------
const CATS = {
  otis: { name: 'Otis', emoji: '🐱', color: '#f59e0b', game: 'Speed Challenge', personality: 'competitive' },
  doom: { name: 'DOOM', emoji: '🐈', color: '#8b5cf6', game: 'Memory Match', personality: 'affectionate' },
  jules: { name: 'Jules', emoji: '🐾', color: '#ec4899', game: 'Truth Meter', personality: 'independent' },
  lassie: { name: 'Lassie', emoji: '😸', color: '#10b981', game: 'Phrase Collector', personality: 'protective' },
  mia: { name: 'Mia', emoji: '💙', color: '#3b82f6', personality: 'supportive' }
};

// ---------------- TRACKS ----------------
const TRACKS = [
  { key:'work', name:'Mi trabajo', icon:'🏠', color:'bg-blossom-600' },
  { key:'mia', name:'Mia & yo', icon:'💕', color:'bg-blue-600' },
  { key:'family', name:'Familia', icon:'👨‍👩‍👧', color:'bg-brand-800' },
  { key:'suegros', name:'Los suegros', icon:'👴👵', color:'bg-purple-600' },
  { key:'vida', name:'Día a día', icon:'🌮', color:'bg-brand-700' },
  { key:'health', name:'Salud', icon:'💊', color:'bg-emerald-600' },
  { key:'food', name:'Comida', icon:'🌶️', color:'bg-orange-600' }
];

// ---------------- EXPANDED CONTENT LIBRARY (FIXED) ----------------
const SENTENCES_BASE = {
  work: [
    // Residence Hall Basics
    { id:'w1', lvl:0, es:'Hola, bienvenido. ¿Cómo te llamas?', hint:'welcome what is your name', tags:['greeting'] },
    { id:'w2', lvl:0, es:'¿Cómo va todo en tu cuarto?', hint:'how is everything in your room', tags:['checkin'] },
    { id:'w3', lvl:0, es:'Estoy aquí para ayudar.', hint:'here to help', tags:['support'] },
    { id:'w4', lvl:1, es:'¿Necesitas algo? Avísame porfa.', hint:'need anything let me know', tags:['support'] },
    { id:'w5', lvl:1, es:'Hay un evento esta noche en el salón.', hint:'event tonight in lounge', tags:['events'] },
    { id:'w6', lvl:1, es:'¿Cómo te va con las clases?', hint:'how are classes', tags:['rapport'] },
    { id:'w7', lvl:2, es:'Si hay problema, comunícate conmigo.', hint:'if problem communicate with me', tags:['boundaries'] },
    { id:'w8', lvl:2, es:'Respeten las horas de silencio porfa.', hint:'respect quiet hours please', tags:['rules'] },
    // Carleton-specific
    { id:'w9', lvl:0, es:'¿Te fue bien en el tour hoy?', hint:'tour go well today', tags:['work','carleton'] },
    { id:'w10', lvl:1, es:'Las familias siempre preguntan sobre el clima.', hint:'families always ask about weather', tags:['work','minnesota'] },
    { id:'w11', lvl:1, es:'El Arb es mi parte favorita del campus.', hint:'arb is my favorite part', tags:['work','carleton'] },
    { id:'w12', lvl:2, es:'Cuéntales sobre las opciones de comida.', hint:'tell them about food options', tags:['work','tours'] },
    { id:'w13', lvl:0, es:'Pásale, la puerta está abierta.', hint:'come in, the door is open', tags:['support'] },
    { id:'w14', lvl:0, es:'¿En qué te puedo ayudar?', hint:'how can I help you', tags:['support'] },
    { id:'w15', lvl:1, es:'La lavandería está en el sótano.', hint:'the laundry is in the basement', tags:['work'] },
    { id:'w16', lvl:1, es:'¿Ya conociste a tu compañera de cuarto?', hint:'have you met your roommate', tags:['rapport'] },
    { id:'w17', lvl:1, es:'Si necesitas algo, mi puerta está abierta.', hint:'if you need anything my door is open', tags:['support'] },
    { id:'w18', lvl:2, es:'Voy a reportar eso a mantenimiento.', hint:'I will report that to maintenance', tags:['work'] },
    { id:'w19', lvl:2, es:'Hay una reunión de piso el jueves.', hint:'there is a floor meeting on Thursday', tags:['events'] },
    { id:'w20', lvl:2, es:'Cualquier cosa, mándame un mensaje.', hint:'anything at all, send me a message', tags:['support'] },
  ],
  
  mia: [
    // Daily Check-ins
    { id:'m1', lvl:0, es:'¿Cómo te fue hoy?', hint:'how was your day', tags:['checkin'] },
    { id:'m2', lvl:0, es:'Cuéntame de tu día en Carleton.', hint:'tell me about your day at Carleton', tags:['interest'] },
    { id:'m3', lvl:0, es:'¿Quieres cocinar juntos esta noche?', hint:'cook together tonight', tags:['plans'] },
    { id:'m4', lvl:1, es:'¿Hubo tours interesantes hoy?', hint:'interesting tours today', tags:['work'] },
    { id:'m5', lvl:1, es:'Te guardé la última concha.', hint:'saved you the last pastry', tags:['sweet'] },
    { id:'m6', lvl:1, es:'¿Quieres que hagamos algo especial este finde?', hint:'do something special weekend', tags:['plans'] },
    { id:'m7', lvl:1, es:'Eres increíble. Gracias por todo.', hint:'you are amazing thanks for everything', tags:['appreciation'] },
    { id:'m8', lvl:2, es:'Te ves [cansada|cansado]. ¿Necesitas descansar?', hint:'you look tired need to rest', tags:['care'] },
    // Emotional Support
    { id:'m9', lvl:0, es:'Te extraño cuando no estás.', hint:'miss you when not here', tags:['love'] },
    { id:'m10', lvl:1, es:'Me encanta cómo te ríes.', hint:'love how you laugh', tags:['compliment'] },
    { id:'m11', lvl:1, es:'Eres mi persona favorita.', hint:'you are my favorite person', tags:['love'] },
    { id:'m12', lvl:2, es:'Platícame qué te preocupa.', hint:'tell me what worries you', tags:['support'] },
    { id:'m13', lvl:0, es:'¿Ya comiste, mi amor?', hint:'have you eaten, my love', tags:['checkin','care'] },
    { id:'m14', lvl:0, es:'Te amo mucho.', hint:'I love you a lot', tags:['love'] },
    { id:'m15', lvl:1, es:'¿Cómo dormiste anoche?', hint:'how did you sleep last night', tags:['checkin','morning'] },
    { id:'m16', lvl:1, es:'Hoy te toca escoger la película.', hint:'today it is your turn to pick the movie', tags:['plans','evening'] },
    { id:'m17', lvl:1, es:'Gracias por tener paciencia conmigo.', hint:'thank you for being patient with me', tags:['appreciation'] },
    { id:'m18', lvl:1, es:'¿Te ayudo con algo de la casa?', hint:'can I help you with something around the house', tags:['helping'] },
    { id:'m19', lvl:2, es:'Cuando hables con tu mamá, salúdala de mi parte.', hint:'when you talk to your mom, say hi for me', tags:['family'] },
    { id:'m20', lvl:2, es:'Me haces muy feliz, ¿lo sabías?', hint:'you make me very happy, did you know', tags:['love'] },
  ],
  
  family: [
    // Basic Greetings
    { id:'f1', lvl:0, es:'Buenos días. ¿Cómo están?', hint:'good morning how are you', tags:['greeting'] },
    { id:'f2', lvl:0, es:'La comida está deliciosa.', hint:'food is delicious', tags:['compliment'] },
    { id:'f3', lvl:0, es:'Disculpe, ¿mande? No entendí.', hint:'pardon what did not understand', tags:['clarification'] },
    { id:'f4', lvl:1, es:'Me da mucho gusto verlos.', hint:'happy to see you', tags:['warmth'] },
    { id:'f5', lvl:1, es:'Gracias por recibirnos.', hint:'thanks for having us', tags:['gratitude'] },
    { id:'f6', lvl:1, es:'Practico mi español cada día.', hint:'practice Spanish every day', tags:['effort'] },
    { id:'f7', lvl:2, es:'Cuéntennos de su semana.', hint:'tell us about your week', tags:['conversation'] },
    { id:'f8', lvl:2, es:'Déjennos ayudar con los platos.', hint:'let us help with dishes', tags:['helping'] },
    // Extended Family
    { id:'f9', lvl:1, es:'¿Cómo está la familia en México?', hint:'how is family in Mexico', tags:['extended'] },
    { id:'f10', lvl:1, es:'Me gustaría conocer a todos.', hint:'would like to meet everyone', tags:['interest'] },
    { id:'f11', lvl:2, es:'Espero que podamos visitarlos pronto.', hint:'hope we can visit soon', tags:['future'] },
    { id:'f12', lvl:0, es:'¡Salud!', hint:'cheers! (also said after a sneeze)', tags:['social'] },
    { id:'f13', lvl:0, es:'Con permiso.', hint:'excuse me (when passing by or leaving)', tags:['manners'] },
    { id:'f14', lvl:1, es:'Estuvo todo riquísimo, gracias.', hint:'everything was delicious, thank you', tags:['compliment'] },
    { id:'f15', lvl:1, es:'¿Me pasa las tortillas, por favor?', hint:'would you pass the tortillas please (formal)', tags:['food'] },
    { id:'f16', lvl:1, es:'Saludos a todos por allá.', hint:'greetings to everyone over there', tags:['extended'] },
    { id:'f17', lvl:2, es:'¿Me enseña a hacer esta receta?', hint:'will you teach me this recipe (formal)', tags:['food','learning'] },
    { id:'f18', lvl:2, es:'Cada vez entiendo un poco más.', hint:'I understand a little more each time', tags:['effort'] },
  ],
  
  suegros: [
    // Meeting Parents
    { id:'s1', lvl:0, es:'Mucho gusto en conocerlos.', hint:'nice to meet you', tags:['first_meeting'] },
    { id:'s2', lvl:0, es:'Jorge me ha hablado mucho de ustedes.', hint:'Jorge told me a lot about you', tags:['connection'] },
    { id:'s3', lvl:0, es:'Su casa es muy bonita.', hint:'your house is very pretty', tags:['compliment'] },
    { id:'s4', lvl:1, es:'¿Puedo ayudar con algo?', hint:'can I help with something', tags:['helpful'] },
    { id:'s5', lvl:1, es:'Me encanta la comida mexicana.', hint:'love Mexican food', tags:['food'] },
    { id:'s6', lvl:1, es:'Jorge y yo estamos muy contentos.', hint:'Jorge and I are very happy', tags:['relationship'] },
    { id:'s7', lvl:2, es:'Trabajo en una residencia universitaria.', hint:'work in university residence', tags:['job'] },
    { id:'s8', lvl:2, es:'Aprecio mucho su hospitalidad.', hint:'appreciate your hospitality', tags:['formal'] },
    // Cultural Bridge
    { id:'s9', lvl:1, es:'En Minnesota hace mucho frío.', hint:'Minnesota very cold', tags:['minnesota'] },
    { id:'s10', lvl:1, es:'Me enseñan mucho sobre México.', hint:'you teach me about Mexico', tags:['learning'] },
    { id:'s11', lvl:2, es:'Es importante para mí hablar español.', hint:'important for me to speak Spanish', tags:['commitment'] },
    { id:'s12', lvl:2, es:'Quiero que nuestros hijos sean bilingües.', hint:'want our children bilingual', tags:['future'] },
    { id:'s13', lvl:0, es:'Gracias por invitarme.', hint:'thank you for inviting me', tags:['gratitude'] },
    { id:'s14', lvl:0, es:'¿Cómo ha estado, señora?', hint:'how have you been, ma\'am (formal)', tags:['formal'] },
    { id:'s15', lvl:1, es:'Todo estuvo delicioso, de verdad.', hint:'everything was truly delicious', tags:['compliment'] },
    { id:'s16', lvl:1, es:'¿Les ayudo a poner la mesa?', hint:'can I help you set the table', tags:['helpful'] },
    { id:'s17', lvl:1, es:'El mole le quedó increíble.', hint:'your mole came out incredible (formal)', tags:['food'] },
    { id:'s18', lvl:2, es:'Cuénteme de su familia.', hint:'tell me about your family (formal)', tags:['conversation'] },
    { id:'s19', lvl:2, es:'Para mí es muy importante conocerlos bien.', hint:'it is very important to me to know you well', tags:['connection'] },
    { id:'s20', lvl:2, es:'Espero verlos otra vez muy pronto.', hint:'I hope to see you again very soon', tags:['future'] },
  ],
  
  vida: [
    // Morning Routines
    { id:'v1', lvl:0, es:'Buenos días, mi amor. ¿Dormiste bien?', hint:'good morning sleep well', tags:['morning','mia'] },
    { id:'v2', lvl:0, es:'Voy a hacer café. ¿Quieres?', hint:'making coffee want some', tags:['morning','coffee'] },
    { id:'v3', lvl:0, es:'¿A qué hora sales hoy?', hint:'what time leave today', tags:['morning','schedule'] },
    { id:'v4', lvl:1, es:'Tengo que salir tempranito para el trabajo.', hint:'leave early for work', tags:['morning','work'] },
    { id:'v5', lvl:1, es:'¿Desayunamos juntos?', hint:'breakfast together', tags:['morning','meal'] },
    // Evening Routines
    { id:'v6', lvl:0, es:'¿Qué se te antoja para cenar?', hint:'what want for dinner', tags:['evening','food'] },
    { id:'v7', lvl:0, es:'Ya llegué. ¿Cómo estás?', hint:'arrived how are you', tags:['evening','arrival'] },
    { id:'v8', lvl:1, es:'Estoy cansado. ¿Pedimos comida?', hint:'tired order food', tags:['evening','tired'] },
    { id:'v9', lvl:1, es:'Vamos a ver algo en Netflix y descansar.', hint:'watch Netflix and rest', tags:['evening','relax'] },
    { id:'v10', lvl:2, es:'Prepara tú la cena mientras yo lavo.', hint:'you make dinner while I wash', tags:['evening','chores'] },
    // Weekend
    { id:'v11', lvl:0, es:'Es sábado. Podemos dormir tantito más.', hint:'Saturday sleep more', tags:['weekend','sleep'] },
    { id:'v12', lvl:1, es:'Vamos al Arb si hace buen clima.', hint:'go to Arb if good weather', tags:['weekend','minnesota'] },
    { id:'v13', lvl:1, es:'¿Qué tal un brunch y luego el mercado?', hint:'brunch then market', tags:['weekend','plans'] },
    { id:'v14', lvl:2, es:'Invitemos a amigos a cenar.', hint:'invite friends for dinner', tags:['weekend','social'] },
    // Minnesota Life
    { id:'v15', lvl:0, es:'Hace mucho frío afuera.', hint:'freezing cold outside', tags:['winter','minnesota'] },
    { id:'v16', lvl:1, es:'Si hace frío, hacemos té y nos quedamos.', hint:'if cold make tea and stay', tags:['winter','cozy'] },
    { id:'v17', lvl:1, es:'¿Traes tu chamarra buena? Hace frío.', hint:'have good jacket cold', tags:['winter','care'] },
    { id:'v18', lvl:1, es:'La nieve está bonita pero qué flojera.', hint:'snow pretty but what laziness', tags:['winter','minnesota'] },
    // Errands & Shopping
    { id:'v19', lvl:0, es:'Necesitamos ir al súper.', hint:'need to go to store', tags:['errands','shopping'] },
    { id:'v20', lvl:1, es:'¿Me acompañas a Target?', hint:'come with me to Target', tags:['errands','shopping'] },
    { id:'v21', lvl:1, es:'Hay que comprar papel de baño.', hint:'need to buy toilet paper', tags:['errands','necessities'] },
    { id:'v22', lvl:2, es:'Revisa qué hace falta en la cocina.', hint:'check what needed in kitchen', tags:['errands','planning'] },
    { id:'v23', lvl:0, es:'¿Dónde dejé mis llaves?', hint:'where did I leave my keys', tags:['errands'] },
    { id:'v24', lvl:0, es:'Ya casi es fin de semana.', hint:'it is almost the weekend', tags:['weekend'] },
    { id:'v25', lvl:1, es:'Voy a sacar la basura.', hint:'I am going to take out the trash', tags:['evening','chores'] },
    { id:'v26', lvl:1, es:'Se está acabando el café.', hint:'we are running out of coffee', tags:['morning','coffee'] },
    { id:'v27', lvl:1, es:'Manejar con nieve me da miedo.', hint:'driving in snow scares me', tags:['winter','minnesota'] },
    { id:'v28', lvl:1, es:'Los gatos ya quieren cenar.', hint:'the cats want their dinner already', tags:['evening'] },
    { id:'v29', lvl:2, es:'Hay que hacer cita con el dentista.', hint:'we need to make a dentist appointment', tags:['errands','planning'] },
    { id:'v30', lvl:2, es:'Ponte algo calientito, vamos a salir.', hint:'put on something warm, we are going out', tags:['winter','care'] },
  ],
  
  health: [
    // Basic Health
    { id:'h1', lvl:0, es:'Me duele la cabeza.', hint:'head hurts', tags:['pain'] },
    { id:'h2', lvl:0, es:'¿Tienes medicina?', hint:'have medicine', tags:['medication'] },
    { id:'h3', lvl:0, es:'Me siento mal.', hint:'feel bad', tags:['sick'] },
    { id:'h4', lvl:1, es:'Creo que tengo fiebre.', hint:'think I have fever', tags:['symptoms'] },
    { id:'h5', lvl:1, es:'Necesito descansar.', hint:'need to rest', tags:['recovery'] },
    // Emotions
    { id:'h6', lvl:0, es:'Estoy feliz.', hint:'I am happy', tags:['emotions','positive'] },
    { id:'h7', lvl:0, es:'Me siento triste.', hint:'feel sad', tags:['emotions','negative'] },
    { id:'h8', lvl:1, es:'Estoy [estresada|estresade] por el trabajo.', hint:'stressed about work', tags:['emotions','stress'] },
    { id:'h9', lvl:1, es:'Me siento [orgullosa|orgullose] de ti.', hint:'feel proud of you', tags:['emotions','pride'] },
    { id:'h10', lvl:2, es:'Necesito hablar de algo que me molesta.', hint:'need to talk about something bothering', tags:['emotions','communication'] },
    // More emotions & wellbeing
    { id:'h11', lvl:0, es:'Necesito un descanso.', hint:'need a break', tags:['recovery','rest'] },
    { id:'h12', lvl:1, es:'Me siento mucho mejor hoy.', hint:'feeling much better today', tags:['emotions','positive'] },
    { id:'h13', lvl:1, es:'Dormí muy mal anoche.', hint:'slept very badly last night', tags:['health','sleep'] },
    { id:'h14', lvl:2, es:'¿Puedes venir? No me siento bien.', hint:'can you come I don\'t feel well', tags:['health','support'] },
    { id:'h15', lvl:0, es:'Estoy muy [cansada|cansade].', hint:'I am very tired', tags:['tired'] },
    { id:'h16', lvl:1, es:'Me duele la garganta.', hint:'my throat hurts', tags:['pain'] },
    { id:'h17', lvl:1, es:'Creo que me estoy enfermando.', hint:'I think I am getting sick', tags:['sick'] },
    { id:'h18', lvl:1, es:'Hoy me siento con mucha energía.', hint:'today I feel full of energy', tags:['emotions','positive'] },
    { id:'h19', lvl:2, es:'Necesito una cita con el doctor.', hint:'I need a doctor\'s appointment', tags:['medical'] },
    { id:'h20', lvl:2, es:'Estoy [nerviosa|nerviose] por la cena de mañana.', hint:'I am nervous about tomorrow\'s dinner', tags:['emotions','stress'] },
  ],
  
  food: [
    // Coffee Orders
    { id:'fo1', lvl:0, es:'Un café, por favor.', hint:'coffee please', tags:['coffee','order'] },
    { id:'fo2', lvl:0, es:'Un oat milk latte, no muy caliente.', hint:'oat milk latte not too hot', tags:['coffee','specific'] },
    { id:'fo3', lvl:1, es:'¿Tienen descafeinado?', hint:'have decaf', tags:['coffee','question'] },
    // Restaurant
    { id:'fo4', lvl:0, es:'Mesa para dos, por favor.', hint:'table for two please', tags:['restaurant'] },
    { id:'fo5', lvl:0, es:'La cuenta, por favor.', hint:'check please', tags:['restaurant'] },
    { id:'fo6', lvl:1, es:'Para llevar, por favor. Sin cilantro.', hint:'to go no cilantro', tags:['takeout'] },
    { id:'fo7', lvl:1, es:'¿Qué me recomienda?', hint:'what do you recommend', tags:['restaurant','question'] },
    { id:'fo8', lvl:2, es:'¿Tienen opciones vegetarianas?', hint:'have vegetarian options', tags:['restaurant','dietary'] },
    // Mexican Food
    { id:'fo9', lvl:0, es:'Dos tacos de carnitas, porfa.', hint:'two carnitas tacos please', tags:['mexican'] },
    { id:'fo10', lvl:1, es:'Con todo menos cebolla.', hint:'with everything except onion', tags:['mexican','preference'] },
    { id:'fo11', lvl:1, es:'¿Pica mucho?', hint:'is it very spicy', tags:['mexican','spice'] },
    { id:'fo12', lvl:2, es:'Me gustan las tortillas de maíz más.', hint:'prefer corn tortillas', tags:['mexican','preference'] },
    { id:'fo13', lvl:0, es:'Sin picante, por favor.', hint:'not spicy, please', tags:['preference'] },
    { id:'fo14', lvl:0, es:'¿Qué lleva este platillo?', hint:'what is in this dish', tags:['restaurant','question'] },
    { id:'fo15', lvl:1, es:'Un agua de horchata, porfa.', hint:'a horchata, please', tags:['mexican','order'] },
    { id:'fo16', lvl:1, es:'¿Me da una quesadilla con todo?', hint:'can I get a quesadilla with everything', tags:['mexican','order'] },
    { id:'fo17', lvl:1, es:'Tengo antojo de tacos al pastor.', hint:'I am craving tacos al pastor', tags:['mexican'] },
    { id:'fo18', lvl:2, es:'¿Cuál es la especialidad de la casa?', hint:'what is the house specialty', tags:['restaurant','question'] },
    { id:'fo19', lvl:2, es:'La próxima vez pido algo más picoso.', hint:'next time I will order something spicier', tags:['mexican','spice'] },
  ]
};

// Every sentence is hand-curated — no auto-generated variants.
const SENTENCES = SENTENCES_BASE;
const ALL_SENTENCES = Object.values(SENTENCES).flat();

// ---------------- LUNCH CARDS ----------------
const LUNCH_CARDS = [
  { id:'lc1', es:'Cuéntale a Mia sobre tu día en español.', en:'Tell Mia about your day in Spanish.' },
  { id:'lc2', es:'Pregúntale qué se le antoja para cenar.', en:'Ask what she craves for dinner.' },
  { id:'lc3', es:'Dile algo bonito usando "me encanta..."', en:'Say something nice using "me encanta..."' },
  { id:'lc4', es:'Invítala a cocinar [juntas|juntes] esta noche.', en:'Invite her to cook together tonight.' },
  { id:'lc5', es:'Pregunta: "¿Cómo te sientes hoy?"', en:'Ask: "How do you feel today?"' },
  { id:'lc6', es:'Practica: "Estoy [orgullosa|orgullose] de ti."', en:'Practice: "I\'m proud of you."' },
  { id:'lc7', es:'Sugiere planes para el fin de semana.', en:'Suggest weekend plans.' },
  { id:'lc8', es:'Habla del clima en español.', en:'Talk about the weather in Spanish.' },
  { id:'lc9', es:'Pide ayuda con algo usando "¿Me ayudas...?"', en:'Ask for help using "¿Me ayudas...?"' },
  { id:'lc10', es:'Comparte qué aprendiste hoy.', en:'Share what you learned today.' },
  { id:'lc11', es:'Pregunta sobre su familia en México.', en:'Ask about her family in Mexico.' },
  { id:'lc12', es:'Dile tres cosas por las que estás [agradecida|agradecide].', en:'Tell three things you\'re grateful for.' },
  { id:'lc13', es:'Practica ordenar café en español.', en:'Practice ordering coffee in Spanish.' },
  { id:'lc14', es:'Describe tu comida favorita mexicana.', en:'Describe your favorite Mexican food.' },
  { id:'lc15', es:'Habla de tus metas en español.', en:'Talk about your goals in Spanish.' },
  { id:'lc16', es:'Cuéntale una cosa buena de tu semana.', en:'Tell her one good thing from your week.' },
  { id:'lc17', es:'Pregunta: "¿Hay algo en que te pueda ayudar?"', en:'Ask: "Is there anything I can help with?"' },
  { id:'lc18', es:'Dile en español por qué la admiras.', en:'Tell her in Spanish why you admire her.' },
];

// ---------------- ENCOURAGEMENTS ----------------
const ENCOURAGEMENTS = [
  // Otis (competitive)
  { cat: 'otis', text: 'MIAU MIAU... digo, excelente. Aunque yo lo hubiera hecho mejor. 😼' },
  { cat: 'otis', text: '*se estira todo lo largo* Sí sí, bien. ¿Ya terminaste? 🐱' },
  { cat: 'otis', text: 'Aceptable. Para ser humana. *bosteza* 🐱' },
  { cat: 'otis', text: 'Ese nivel... me recuerda cuando tenía 3 semanas. Sigue. 🐱' },
  { cat: 'otis', text: '*interrumpe el baño para aplaudir* Bien. *regresa al baño* 😼' },
  // Doom (affectionate)
  { cat: 'doom', text: 'Eso estuvo de lujo. Te mando un abrazo grande (como yo). 🐈💕' },
  { cat: 'doom', text: 'Le echaste salsita. Pica rico. 🌶️🐈' },
  { cat: 'doom', text: '*ronroneo intenso* Bien hecho, Stacie. 🐈' },
  { cat: 'doom', text: 'Sabía que podías. Doom nunca duda de ti. 🐈💜' },
  { cat: 'doom', text: '*se sube a tu regazo en señal de aprobación* 🐈' },
  // Jules (independent)
  { cat: 'jules', text: 'Quedó chido. Ahora déjame en paz, necesito mi espacio. 🐾' },
  { cat: 'jules', text: 'Respeto. Hoy te ganaste tu espacio. 👏🐾' },
  { cat: 'jules', text: 'No está mal. *se va a su rincón* 🐾' },
  { cat: 'jules', text: 'Jules aprueba. No lo digo seguido, así que guárdalo. 🐾' },
  { cat: 'jules', text: 'Bien. Ya puedes continuar con tu día. *voltea la cara* 🐾' },
  // Lassie (protective)
  { cat: 'lassie', text: 'Te cuido siempre. Poquito a poquito es camino. 😸' },
  { cat: 'lassie', text: 'Estoy [orgullosa|orgullose]. Yo vigilo. 🛡️😸' },
  { cat: 'lassie', text: 'Bien, Stacie. Aquí estoy si necesitas. 😸' },
  { cat: 'lassie', text: 'Cada frase te acerca más a la familia. Lo veo, yo vigilo. 😸' },
  { cat: 'lassie', text: '*movimiento de cola de aprobación* Vas muy bien. 😸' },
  // Mia (supportive)
  { cat: 'mia', text: 'Mi amor, qué [orgullosa|orgullose] estoy. Eres increíble. 💙' },
  { cat: 'mia', text: 'Te amo. Cada día mejor. 💙' },
  { cat: 'mia', text: 'Eso es, mi vida. Sigue así. 💙' },
  { cat: 'mia', text: 'Mi familia te va a adorar. Ya lo veo. 💙' },
  { cat: 'mia', text: 'Este esfuerzo que haces... significa todo para mí. 💙' },
];

// ---------------- CONVERSATIONS ----------------
const CONVERSATIONS = {
  suegros_dinner: {
    name: 'Cena con los suegros',
    start: {
them: 'Buenas noches, Stacie. ¿Cómo estás?',
responses: [
  { text: 'Muy bien, gracias. ¿Y ustedes?', confidence: 5, next: 'good_response' },
  { text: 'Bien, gracias.', confidence: 3, next: 'short_response' },
  { text: 'Estoy bien. La comida huele deliciosa.', confidence: 4, next: 'food_compliment' }
]
    },
    good_response: {
them: 'Muy bien también. ¿Cómo te fue en el trabajo?',
responses: [
  { text: 'Bien, tuve muchos tours hoy.', confidence: 4, next: 'work_talk' },
  { text: 'Un poco cansada, pero bien.', confidence: 3, next: 'tired' },
  { text: 'Muy bien. Los estudiantes están emocionados.', confidence: 5, next: 'students' }
]
    },
    short_response: {
them: 'Qué bueno. Pásale, ya casi está la cena.',
responses: [
  { text: 'Gracias. ¿Puedo ayudar con algo?', confidence: 5, next: 'helpful' },
  { text: 'Gracias, huele muy rico.', confidence: 4, next: 'food_compliment' }
]
    },
    food_compliment: {
them: 'Gracias, es mole de la abuela. ¿Te gusta la comida mexicana?',
responses: [
  { text: 'Me encanta. Mia me ha enseñado mucho.', confidence: 5, next: 'end_good' },
  { text: 'Sí, mucho. Especialmente el mole.', confidence: 4, next: 'end_good' },
  { text: 'Sí, pero todavía estoy aprendiendo sobre los picantes.', confidence: 4, next: 'end_good' }
]
    },
    work_talk: {
them: 'Qué bueno. Mia nos cuenta que trabajas muy duro.',
responses: [
  { text: 'Me gusta mucho mi trabajo.', confidence: 4, next: 'end_good' },
  { text: 'Sí, pero vale la pena. Me encanta Carleton.', confidence: 5, next: 'end_good' }
]
    },
    tired: {
them: 'Descansa. La cena te va a dar energía.',
responses: [
  { text: 'Gracias, son muy amables.', confidence: 5, next: 'end_good' },
  { text: 'Sí, necesito la comida de casa.', confidence: 4, next: 'end_good' }
]
    },
    students: {
them: '¡Qué padre! ¿De dónde vienen los estudiantes?',
responses: [
  { text: 'De todo el país, y algunos internacionales.', confidence: 5, next: 'end_good' },
  { text: 'De muchos lugares. Es muy diverso.', confidence: 4, next: 'end_good' }
]
    },
    helpful: {
them: 'No te preocupes, ya está todo. Mejor platícanos de tu semana.',
responses: [
  { text: 'Fue buena. Mia y yo fuimos al Arb el sábado.', confidence: 5, next: 'end_good' },
  { text: 'Muy ocupada, pero productiva.', confidence: 4, next: 'end_good' }
]
    },
    end_good: {
them: '¡Qué bien! Vamos a cenar.',
complete: true,
feedback: '¡Excelente conversación! Los suegros están impresionados.'
    }
  },
  
  morning_routine: {
    name: 'Rutina de la mañana',
    start: {
them: 'Buenos días, mi amor.',
responses: [
  { text: 'Buenos días. ¿Dormiste bien?', confidence: 5, next: 'sleep_well' },
  { text: 'Hola, mi vida. ¿Café?', confidence: 4, next: 'coffee' },
  { text: 'Buenos días. ¿Qué hora es?', confidence: 3, next: 'time' }
]
    },
    sleep_well: {
them: 'Sí, muy bien. ¿Y tú?',
responses: [
  { text: 'También. Soñé contigo.', confidence: 5, next: 'sweet' },
  { text: 'Más o menos. Los gatos me despertaron.', confidence: 4, next: 'cats' },
  { text: 'Bien, pero necesito café.', confidence: 3, next: 'coffee' }
]
    },
    coffee: {
them: 'Yo hago el café. ¿El de siempre?',
responses: [
  { text: 'Sí, porfa. Oat milk latte.', confidence: 5, next: 'breakfast' },
  { text: 'Sí, gracias mi amor.', confidence: 4, next: 'breakfast' },
  { text: 'Mejor té hoy, gracias.', confidence: 3, next: 'breakfast' }
]
    },
    time: {
them: 'Las siete y media. ¿Tienes que salir temprano?',
responses: [
  { text: 'Sí, tengo tours a las nueve.', confidence: 4, next: 'work' },
  { text: 'No, hoy empiezo tarde.', confidence: 4, next: 'late_start' },
  { text: 'Un poco. ¿Desayunamos juntes?', confidence: 5, next: 'breakfast' }
]
    },
    sweet: {
them: 'Ay, qué linde. Te amo.',
responses: [
  { text: 'Y yo a ti. ¿Qué haces hoy?', confidence: 5, next: 'day_plans' },
  { text: 'Te amo más. ¿Desayunamos?', confidence: 5, next: 'breakfast' }
]
    },
    cats: {
them: 'Jaja, Otis seguro. Es un despertador peludo.',
responses: [
  { text: 'Necesita su desayuno a las 6 AM exactas.', confidence: 5, next: 'breakfast' },
  { text: 'Sí, muy puntual el señor.', confidence: 4, next: 'breakfast' }
]
    },
    work: {
them: '¿Cuántos tours tienes hoy?',
responses: [
  { text: 'Tres, y una reunión después.', confidence: 5, next: 'end_good' },
  { text: 'Varios. Va a ser un día largo.', confidence: 4, next: 'end_good' }
]
    },
    late_start: {
them: 'Qué bueno. Entonces podemos desayunar con calma.',
responses: [
  { text: 'Sí, me encanta. ¿Qué hacemos?', confidence: 5, next: 'end_good' },
  { text: 'Perfecto. Hagamos pancakes.', confidence: 5, next: 'end_good' }
]
    },
    breakfast: {
them: '¿Qué se te antoja?',
responses: [
  { text: 'Lo que sea está bien. ¿Hay fruta?', confidence: 4, next: 'end_good' },
  { text: 'Huevitos con tortilla.', confidence: 5, next: 'end_good' },
  { text: 'Algo rápido, tengo que salir.', confidence: 3, next: 'end_good' }
]
    },
    day_plans: {
them: 'Trabajo desde casa hoy. ¿Nos vemos para almorzar?',
responses: [
  { text: 'Sí, ¿a la una está bien?', confidence: 5, next: 'end_good' },
  { text: 'Me encantaría. Te texto cuando salga.', confidence: 5, next: 'end_good' }
]
    },
    end_good: {
them: 'Perfecto. Ten un buen día, mi amor.',
complete: true,
feedback: '¡Conversación natural y fluida! Mia está feliz.'
    }
  },
  
  panic_situations: {
    name: 'Situaciones de pánico',
    start: {
them: '[Hablan muy rápido y no entiendes nada]',
responses: [
  { text: 'Disculpe, ¿puede repetir más despacio?', confidence: 5, next: 'slower' },
  { text: 'Perdón, no entendí. ¿Mande?', confidence: 4, next: 'repeat' },
  { text: 'Lo siento, mi español no es perfecto.', confidence: 3, next: 'understanding' }
]
    },
    slower: {
them: '[Repiten más lento]',
responses: [
  { text: 'Ah, sí. Entiendo. Gracias.', confidence: 4, next: 'end_good' },
  { text: 'Gracias por su paciencia.', confidence: 5, next: 'end_good' },
  { text: 'Creo que sí. ¿Es sobre [topic]?', confidence: 3, next: 'clarify' }
]
    },
    repeat: {
them: '[Repiten la pregunta]',
responses: [
  { text: 'Ah, ya. Déjeme pensar...', confidence: 4, next: 'thinking' },
  { text: 'Gracias. Sí, entiendo.', confidence: 4, next: 'end_good' },
  { text: 'Una vez más, por favor.', confidence: 3, next: 'third_time' }
]
    },
    understanding: {
them: 'No te preocupes, está bien.',
responses: [
  { text: 'Gracias. Estoy aprendiendo.', confidence: 5, next: 'end_good' },
  { text: 'Practico todos los días.', confidence: 4, next: 'end_good' }
]
    },
    clarify: {
them: '[Confirman o corrigen]',
responses: [
  { text: 'Ah, okay. Entiendo ahora.', confidence: 4, next: 'end_good' },
  { text: 'Gracias por explicar.', confidence: 5, next: 'end_good' }
]
    },
    thinking: {
them: '[Esperan tu respuesta]',
responses: [
  { text: '[Das tu mejor respuesta]', confidence: 3, next: 'end_okay' },
  { text: 'No estoy segura, pero creo que...', confidence: 4, next: 'end_okay' }
]
    },
    third_time: {
them: '[Repiten muy despacio]',
responses: [
  { text: 'Ya, gracias. Muy amable.', confidence: 4, next: 'end_good' },
  { text: 'Sí, ahora sí entendí.', confidence: 4, next: 'end_good' }
]
    },
    end_good: {
them: '[Continúa la conversación normal]',
complete: true,
feedback: '¡Bien manejado! Pediste ayuda con confianza.'
    },
    end_okay: {
them: '[Aceptan tu respuesta]',
complete: true,
feedback: 'Lo resolviste. Con práctica será más fácil.'
    }
  },

  cafe_order: {
    name: 'Pidiendo en la cafetería',
    start: {
them: 'Hola, ¿qué vas a querer?',
responses: [
  { text: 'Un oat milk latte, por favor.', confidence: 5, next: 'size' },
  { text: 'Hmm, ¿qué me recomienda?', confidence: 4, next: 'recommend' },
  { text: 'Un café negro, porfa.', confidence: 4, next: 'black_coffee' }
]
    },
    size: {
them: '¿Grande o chico?',
responses: [
  { text: 'Grande, por favor.', confidence: 5, next: 'pay' },
  { text: 'Chico está bien, gracias.', confidence: 4, next: 'pay' }
]
    },
    recommend: {
them: 'El mocha está muy rico hoy.',
responses: [
  { text: 'Perfecto, uno de eso.', confidence: 5, next: 'pay' },
  { text: '¿Tiene leche de avena?', confidence: 4, next: 'oat_milk' }
]
    },
    black_coffee: {
them: 'Aquí tienes. Son tres cincuenta.',
responses: [
  { text: 'Gracias. Aquí tiene.', confidence: 5, next: 'end_good' },
  { text: '¿Acepta tarjeta?', confidence: 4, next: 'card' }
]
    },
    oat_milk: {
them: 'Claro, con mucho gusto.',
responses: [
  { text: 'Perfecto, uno de eso entonces.', confidence: 5, next: 'pay' }
]
    },
    pay: {
them: '¿Para aquí o para llevar?',
responses: [
  { text: 'Para llevar, por favor.', confidence: 5, next: 'end_good' },
  { text: 'Para aquí, gracias.', confidence: 4, next: 'end_good' }
]
    },
    card: {
them: 'Sí, claro. Aquí la terminal.',
responses: [
  { text: 'Perfecto, gracias.', confidence: 5, next: 'end_good' }
]
    },
    end_good: {
them: '¡Que lo disfrutes!',
complete: true,
feedback: '¡Pediste tu café sin problema! Como una local.'
    }
  },

  weekend_plans: {
    name: 'Planes para el fin de semana',
    start: {
them: '¿Qué quieres hacer este fin de semana?',
responses: [
  { text: 'Me gustaría ir al Arb contigo.', confidence: 5, next: 'arb' },
  { text: 'No sé, ¿qué quieres tú?', confidence: 3, next: 'ask_back' },
  { text: 'Invitemos a amigos a cenar.', confidence: 5, next: 'friends' }
]
    },
    arb: {
them: '¡Me encanta! ¿Y después?',
responses: [
  { text: 'Brunch primero y luego caminamos.', confidence: 5, next: 'end_good' },
  { text: 'Algo de comer en el mercado.', confidence: 4, next: 'end_good' }
]
    },
    ask_back: {
them: 'Tengo ganas de cocinar algo especial.',
responses: [
  { text: '¡Sí! Yo ayudo con lo que necesites.', confidence: 4, next: 'cooking' },
  { text: '¿Enchiladas? Las haces riquísimo.', confidence: 5, next: 'end_good' }
]
    },
    friends: {
them: '¡Qué buena idea! ¿El sábado o domingo?',
responses: [
  { text: 'El sábado en la noche.', confidence: 5, next: 'end_good' },
  { text: 'El domingo si están libres.', confidence: 4, next: 'end_good' }
]
    },
    cooking: {
them: '¿Qué se te antoja hacer?',
responses: [
  { text: 'Algo mexicano, me encanta aprender.', confidence: 5, next: 'end_good' },
  { text: 'Lo que quieras, tú decides.', confidence: 4, next: 'end_good' }
]
    },
    end_good: {
them: 'Perfecto. Va a ser un fin de semana increíble.',
complete: true,
feedback: '¡Planeaste un fin de semana perfecto en español!'
    }
  },

  mercado: {
    name: 'En el mercado',
    start: {
them: '¿Qué le damos, güerita? Pásele.',
responses: [
  { text: '¿A cómo está el aguacate?', confidence: 5, next: 'price' },
  { text: 'Un kilo de jitomate, por favor.', confidence: 4, next: 'kilo' },
  { text: 'Solo estoy viendo, gracias.', confidence: 3, next: 'looking' }
]
    },
    price: {
them: 'A treinta el kilo, pero se lo dejo en veinticinco.',
responses: [
  { text: 'Va, deme dos kilos entonces.', confidence: 5, next: 'more' },
  { text: 'Está bien, un kilo por favor.', confidence: 4, next: 'more' }
]
    },
    kilo: {
them: '¿Algo más? Tengo mango muy dulce hoy.',
responses: [
  { text: 'A ver, ¿me da una probadita?', confidence: 5, next: 'taste' },
  { text: 'No, gracias. ¿Cuánto le debo?', confidence: 4, next: 'pay' }
]
    },
    looking: {
them: 'Ándele, sin compromiso. Pregunte lo que quiera.',
responses: [
  { text: 'Gracias. ¿Qué está bueno hoy?', confidence: 5, next: 'recommend' },
  { text: 'Bueno, deme un kilo de jitomate.', confidence: 4, next: 'kilo' }
]
    },
    recommend: {
them: 'La fresa está en su punto, mire nada más.',
responses: [
  { text: 'Se ve muy bien. Medio kilo, porfa.', confidence: 5, next: 'pay' },
  { text: 'Mejor llevo aguacate. ¿A cómo está?', confidence: 4, next: 'price' }
]
    },
    taste: {
them: 'Claro, pruebe. ¿Verdad que está dulce?',
responses: [
  { text: '¡Riquísimo! Deme un kilo.', confidence: 5, next: 'pay' },
  { text: 'Sí, muy rico. Solo el jitomate hoy.', confidence: 4, next: 'pay' }
]
    },
    more: {
them: 'Aquí tiene. ¿Algo más?',
responses: [
  { text: 'No, es todo. ¿Cuánto es?', confidence: 5, next: 'pay' },
  { text: 'Sí, ¿tiene limones?', confidence: 4, next: 'pay' }
]
    },
    pay: {
them: 'Son cincuenta pesos, güerita.',
responses: [
  { text: 'Aquí tiene. ¡Gracias!', confidence: 5, next: 'end_good' },
  { text: '¿Me acepta tarjeta o solo efectivo?', confidence: 4, next: 'end_good' }
]
    },
    end_good: {
them: '¡Gracias a usted! Que le vaya bien.',
complete: true,
feedback: '¡Compraste en el mercado como una local!'
    }
  },

  llamada_suegra: {
    name: 'Llamada con la suegra',
    start: {
them: '¿Bueno? ¡Stacie! Qué gusto escucharte.',
responses: [
  { text: '¡Hola! ¿Cómo está, señora?', confidence: 5, next: 'como_esta' },
  { text: 'Hola, buenas tardes.', confidence: 3, next: 'como_esta' },
  { text: '¡Igualmente! La estaba pensando.', confidence: 4, next: 'thinking' }
]
    },
    como_esta: {
them: 'Muy bien, mija. ¿Y ustedes? ¿Cómo va todo por allá?',
responses: [
  { text: 'Bien, gracias. Trabajando mucho.', confidence: 4, next: 'weather' },
  { text: 'Todo bien. Aquí con mucho frío, como siempre.', confidence: 5, next: 'weather' }
]
    },
    thinking: {
them: 'Ay, qué linda. ¿Cuándo vienen a visitarnos?',
responses: [
  { text: 'Ojalá pronto. Extrañamos la comida de casa.', confidence: 5, next: 'visit' },
  { text: 'Estamos viendo fechas.', confidence: 4, next: 'visit' }
]
    },
    weather: {
them: 'Ay, ese frío. Cuídense mucho. ¿Están comiendo bien?',
responses: [
  { text: 'Sí, hasta hice enchiladas ayer.', confidence: 5, next: 'enchiladas' },
  { text: 'Sí, no se preocupe.', confidence: 3, next: 'visit' }
]
    },
    enchiladas: {
them: '¿En serio? ¡Ya eres toda una mexicana!',
responses: [
  { text: 'Me salieron casi como las suyas.', confidence: 5, next: 'end_good' },
  { text: 'Jaja, me falta práctica todavía.', confidence: 4, next: 'end_good' }
]
    },
    visit: {
them: 'Aquí los esperamos con los brazos abiertos.',
responses: [
  { text: 'Gracias. Salúdeme a todos, por favor.', confidence: 5, next: 'end_good' },
  { text: 'Gracias, igualmente.', confidence: 4, next: 'end_good' }
]
    },
    end_good: {
them: 'Cuídate mucho, mija. Te mandamos besos.',
complete: true,
feedback: '¡Una llamada completa en español! La suegra está encantada.'
    }
  },

  direcciones: {
    name: 'Pidiendo direcciones',
    start: {
them: '[Estás perdida y paras a alguien en la calle]',
responses: [
  { text: 'Disculpe, ¿dónde queda la farmacia?', confidence: 5, next: 'farmacia' },
  { text: 'Perdón, ¿me puede ayudar? Ando perdida.', confidence: 4, next: 'help' }
]
    },
    farmacia: {
them: 'Siga derecho dos cuadras y voltee a la izquierda.',
responses: [
  { text: '¿Dos cuadras y a la izquierda? Gracias.', confidence: 5, next: 'confirm' },
  { text: '¿Me lo repite más despacio, por favor?', confidence: 4, next: 'slow' }
]
    },
    help: {
them: 'Claro, ¿qué busca?',
responses: [
  { text: 'Busco la parada del camión.', confidence: 5, next: 'camion' },
  { text: 'Un cajero automático.', confidence: 4, next: 'cajero' }
]
    },
    slow: {
them: 'Sí, mire: derecho... dos cuadras... y a la izquierda.',
responses: [
  { text: 'Ah, ya entendí. Muy amable.', confidence: 5, next: 'end_good' },
  { text: 'Gracias por su paciencia.', confidence: 4, next: 'end_good' }
]
    },
    confirm: {
them: 'Exacto. Está junto a una tienda grande, no tiene pierde.',
responses: [
  { text: 'Perfecto, mil gracias.', confidence: 5, next: 'end_good' }
]
    },
    camion: {
them: 'Está aquí a la vuelta, donde está la gente esperando.',
responses: [
  { text: 'Ah, ya la vi. ¡Gracias!', confidence: 5, next: 'end_good' }
]
    },
    cajero: {
them: 'Hay uno dentro del súper, cruzando la calle.',
responses: [
  { text: 'Gracias, que tenga buen día.', confidence: 5, next: 'end_good' }
]
    },
    end_good: {
them: 'De nada. ¡Que le vaya bien!',
complete: true,
feedback: '¡Te orientaste en español sin problema!'
    }
  },

  fiesta_familiar: {
    name: 'Fiesta con la familia',
    start: {
them: '¡Stacie! Ven, te presento a la tía Carmen.',
responses: [
  { text: '¡Mucho gusto! He oído mucho de usted.', confidence: 5, next: 'tia' },
  { text: 'Hola, mucho gusto.', confidence: 3, next: 'tia' }
]
    },
    tia: {
them: '¡El gusto es mío! ¿Ya probaste el pozole?',
responses: [
  { text: 'Todavía no, pero huele delicioso.', confidence: 5, next: 'pozole' },
  { text: 'Sí, está riquísimo.', confidence: 4, next: 'receta' }
]
    },
    pozole: {
them: 'Ven, te sirvo. ¿Con todo?',
responses: [
  { text: 'Sí, con todo, porfa.', confidence: 5, next: 'baile' },
  { text: 'Sin cebolla, por favor.', confidence: 4, next: 'baile' }
]
    },
    receta: {
them: 'Es la receta de la abuela. ¿Te gusta cocinar?',
responses: [
  { text: 'Sí, estoy aprendiendo comida mexicana.', confidence: 5, next: 'baile' },
  { text: 'Un poco. En casa cocinamos juntos.', confidence: 4, next: 'baile' }
]
    },
    baile: {
them: '[Empieza la música] ¡Vente a bailar!',
responses: [
  { text: '¡Va! Pero no bailo muy bien, eh.', confidence: 5, next: 'end_good' },
  { text: 'Ahorita, primero termino de comer.', confidence: 4, next: 'end_good' }
]
    },
    end_good: {
them: '¡Ya eres parte de la familia!',
complete: true,
feedback: '¡Sobreviviste una fiesta familiar completa en español!'
    }
  }
};

// ---------------- PANIC PHRASES ----------------
const PANIC_PHRASES = [
  { es: 'Disculpe, no entendí.', hint: 'Sorry, I didn\'t understand' },
  { es: '¿Puede repetir, por favor?', hint: 'Can you repeat please?' },
  { es: '¿Puede hablar más despacio?', hint: 'Can you speak slower?' },
  { es: 'Mi español está mejorando.', hint: 'My Spanish is improving' },
  { es: '¿Mande? (polite "what?")', hint: 'Pardon? (polite)' },
  { es: 'Un momento, por favor.', hint: 'One moment please' },
  { es: '¿Cómo se dice...?', hint: 'How do you say...?' },
  { es: 'Gracias por su paciencia.', hint: 'Thanks for your patience' },
  { es: 'Estoy aprendiendo.', hint: 'I\'m learning' },
  { es: '¿Me puede ayudar?', hint: 'Can you help me?' }
];

// ---------------- BADGES ----------------
const BADGES = [
  // Original food-based
  { id: 'b1', name: 'Tamal sin pasita', emoji: '🫔', desc: '10 correctas seguidas', req: 'streak_correct', count: 10 },
  { id: 'b2', name: 'Taquere de confianza', emoji: '🌮', desc: '7 días consecutivos', req: 'streak', count: 7 },
  { id: 'b3', name: 'Cafecite perfect', emoji: '☕', desc: '20 prácticas', req: 'practices', count: 20 },
  { id: 'b4', name: 'Conchera', emoji: '🥐', desc: '30 días streak', req: 'streak', count: 30 },
  { id: 'b5', name: 'Masa que reposa', emoji: '🫓', desc: '10 diarios', req: 'journals', count: 10 },
  // Cat-based
  { id: 'b6', name: 'Gato favorito', emoji: '😻', desc: 'Juega con cada gato', req: 'cat_games', count: 4 },
  { id: 'b7', name: 'Ronroneo constante', emoji: '🐈', desc: '50 frases dominadas', req: 'mastered', count: 50 },
  // Confidence-based (NEW)
  { id: 'b8', name: 'Voz segura', emoji: '🎤', desc: 'Confidence promedio > 4', req: 'confidence', count: 4 },
  { id: 'b9', name: 'Sin miedo', emoji: '💪', desc: '10 conversaciones completas', req: 'conversations', count: 10 },
  { id: 'b10', name: 'Bilingüe en proceso', emoji: '🌟', desc: '100 recordings', req: 'recordings', count: 100 },
];



const JOURNAL_PROMPTS = [
  { es: '¿Cómo te fue en la residencia hoy?', en: 'How was the residence today?' },
  { es: '¿Qué fue lo mejor de tu día?', en: 'What was the best part of your day?' },
  { es: 'Cuéntale a Mia algo nuevo que aprendiste', en: 'Tell Mia something new you learned' },
  { es: '¿Cómo te sientes en este momento?', en: 'How are you feeling right now?' },
  { es: 'Describe tu comida favorita mexicana', en: 'Describe your favorite Mexican food' },
  { es: '¿Qué planes tienes para el fin de semana?', en: 'What are your weekend plans?' },
  { es: '¿Qué extrañas de casa?', en: 'What do you miss from home?' },
  { es: 'Habla de tu gato favorito y por qué', en: 'Talk about your favorite cat and why' },
  { es: '¿Qué quieres hacer con Mia mañana?', en: 'What do you want to do with Mia tomorrow?' },
  { es: 'Practica presentarte a los suegros', en: 'Practice introducing yourself to in-laws' }
];


const CULTURAL_TIPS = [
  { title: '¿Mande?', text: 'Forma cortés de "¿qué?" muy común en México. Los suegros lo apreciarán.' },
  { title: 'Jitomate vs. Tomate', text: 'En México: jitomate = rojo (lo normal), tomate = verde (para salsa verde).' },
  { title: 'Diminutivos con cariño', text: 'Poquito, ratito, ahorita, tantito = no es vago, es cariñoso.' },
  { title: 'Usted con los suegros', text: 'Al principio usa "usted" con los papás de Mia. Ellos te dirán cuándo tutear.' },
  { title: 'La sobremesa', text: 'Después de comer, se platica. No te levantes rápido de la mesa.' },
  { title: 'El "ahorita"', text: 'Ahorita = en un rato. Ahora mismo = right now. Ahorita no es urgente.' },
  { title: 'Comida = almuerzo', text: 'Desayuno (morning), comida (lunch/main meal), cena (dinner).' },
  { title: 'No digas "no" directo', text: 'Mejor "déjame ver", "a ver si puedo", "tal vez" que un "no" seco.' }
];

