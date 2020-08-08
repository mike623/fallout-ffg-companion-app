const baseDeck = [
  {
    id: 1,
    location: "Wasteland",
    title: "",
    text: "Someone has uncovered markings left by some organization. Following them leads you to a large and well-hidden cache.",
    options: [
      {
        optionText: "This clearly belongs to someone else. Leave it for them and find your own loot.",
        result: "You find some salvage nearby. And you are sure someone will appreciate their cache not being stolen.",
        aftermath: "Become <em>Idolized</em> &bull; [Loot] x [Wasteland]",
        trash: false,
        add: false
      },{
        optionText: "Take it all for yourself!",
        result: "Finders Keepers. Right?",
        aftermath: "[Wasteland] Caps &bull; [Loot] x [Wasteland]",
        trash: true,
        add: false
      },{
        optionText: "Donating this could earn you some influence",
        result: "You take what you can carry and bring it to someone who can really put it to good use.",
        aftermath: "[Agenda Card]",
        trash: true,
        add: false
      }
    ]
  },{
    id: 2,
    location: "Wasteland",
    title: "",
    text: "With swift and practiced collaboration, a patrol of regulators surrounds you. 'Say there, partner,' the leader drawls, 'heard there have been killings in these parts. You wouldn't know anything about that, right?'",
    options: [
      {
        optionText: "FORCED if you are <em>Vilified</em>",
        result: "The gully erupts with gunfire. A minute later, only you and the leader remain...",
        aftermath: "Suffer [Wasteland] damage &bull; Draw and fight [Human]",
        trash: false,
        add: false
      },{
        optionText: "Give directions &bull; Choose a <em>Vilified</em> survivor",
        result: "You know who they're hunting and where they should look.  They tip their hats to you and head off in that direction.",
        aftermath: "That survivor draws and fight [Human] &bull; [Wasteland] Caps",
        trash: true,
        add: false
      },{
        optionText: "You don't know nothin', send 'em along.",
        result: "You tell them you haven't heard about anyone like that. You wish them better luck next time.",
        aftermath: "[Loot] x [Wasteland]",
        trash: true,
        add: [2]
      }
    ]
  },{
    id: 3,
    location: "Wasteland",
    title: "",
    text: "Two other scavengers approach you with a nervous smile. 'We've heard about a good samaritan around these parts.'",
    options: [
      {
        optionText: "Offer to help them &bull; <em>Idolized</em>",
        result: "They thank you for your offer but correct you. They do not need help, they are here to pay you back for the kindness you bring.",
        aftermath: "[Loot] x [Wasteland] &bull; [Wasteland] Caps",
        trash: false,
        add: false
      },{
        optionText: "Give directions &bull; Choose an <em>Idolized</em> survivor",
        result: "They thank you for pointing them in the right direction. They beam at you, clearly impressed by your generosity.",
        aftermath: "Become <em>Idolized</em> &bull; That survivor gets [Loot] x [Wasteland] and [Wasteland] Caps",
        trash: false,
        add: false
      },{
        optionText: "Laugh as you attack the naive fools",
        result: "They drop their belongings in horror as you turn your weapon upon them.",
        aftermath: "Draw and fight [Human] &bull; Become <em>Vilified</em> &bull; [Loot] x [Wasteland]",
        trash: true,
        add: false
      }
    ]
  },{
    id: 4,
    location: "Wasteland",
    title: "",
    text: "You hear nothing but your own footsteps as you walk through the ruins. It's calm and quiet.",
    options: [
      {
        optionText: "FORCED if you are <em>Idolized</em>",
        result: "Jackpot! This place is filled with stuff. Maybe good deeds really do come around!",
        aftermath: "[Loot] x [Wasteland] &bull; [Wasteland] + 1 Caps",
        trash: false,
        add: false
      },{
        optionText: "FORCED if you are <em>Vilified</em>",
        result: "You turn the corner and come face to face with a nasty-looking individual. Just your luck.",
        aftermath: "Draw and fight [Human]",
        trash: false,
        add: false
      },{
        optionText: "Search for useful equipment &bull; [P] [L] 4",
        result: [
          {
            result: "<strong>Succeed:</strong>You find some items, but you feel like you're missing something.",
            aftermath: "[Loot] x [Wasteland]",
            trash: false,
            add: false
          },{
            result: "<strong>Fail:</strong>You hear voices drifting through the ruins as you search. There's someone here!",
            aftermath: "[Loot] &bull; Draw and fight [Human]",
            trash: false,
            add: false
          }
        ]
      }
    ]
  },{
    id: 5,
    location: "Settlement",
    title: "",
    text: "As you pass through the crowd, you see a familiar face. She's far older, but there's no mistaking her; she has to be Margaret, the girl from the photograph found in the wasteland.",
    options: [
      {
        optionText: "Approach Margaret and tell her about the dead man in the wasteland &bull; [C] 3",
        result: [
          {
            result: "<strong>Succeed:</strong>As you tell Margaret about the man, you can see she has been expecting this news for some time. 'That's my brother. We came out here to search for our father. When my brother didn't return, I feared the worst. I suppose my father likely met the same fate out there somewhere.' She thanks you for the information as she idly grasps a bird pendant around her neck.",
            aftermath: "3 Caps &bull; 3 XP",
            trash: true,
            add: [6]
          },{
            result: "<strong>Fail:</strong>Margaret wants nothing to do with you. She disappears into the crowd",
            aftermath: "Shop once",
            trash: false,
            add: false
          }
        ]
      },{
        optionText: "Leave her alone, and go shopping.",
        result: "She likely has enough problems without hearing about some corpse. Besides, you have stuff to sell!",
        aftermath: "Shop [Settlement]",
        trash: false,
        add: false
      }
    ]
  },{
    id: 6,
    location: "Wasteland",
    title: "",
    text: "As you pick through the ruins, you see someone has scratched the symbol of a bird into the surface of a wall.",
    options: [
      {
        optionText: "That symbol looks familiar; follow it &bull; [P] [I] 4",
        result: [
          {
            result: "<strong>Succeed:</strong>Following the trail from the symbol, you uncover a skeleton in combat gear. It looks like Margaret's father died a long time ago. His arm rests against an old minigun.",
            aftermath: "Gain the 'Minigun' unique asset",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong>You search for a while but find only some scraps.",
            aftermath: "[Loot]",
            trash: false,
            add: false
          }
        ]
      },{
        optionText: "Ignore the symbol and scavenge &bull; [P] 3",
        result: [
          {
            result: "<strong>Succeed:</strong>No time for a scavener hunt. You need useful gear, now.",
            aftermath: "[Loot] x [Wasteland]",
            trash: false,
            add: false
          },{
            result: "<strong>Fail:</strong>As you search you hear the metallic chunk of robotic feet.",
            aftermath: "Draw and fight [Robot]",
            trash: false,
            add: false
          }
        ]
      }
    ]
  },{
    id: 7,
    location: "Settlement",
    title: "",
    text: "A recent explosion has morphed this thriving market into charred ground and waste. The few merchants too poor to move on have set up their stalls nearby.",
    options: [
      {
        optionText: "FORCED if you are <em>Vilified</em>",
        result: "The merchants glare at you as you pass. 'You have a lot of nerve coming back here.' One decides that she's had enough and attacks.",
        aftermath: "Draw and fight [Human]",
        trash: false,
        add: false
      },{
        optionText: "Make do with the remaining stand",
        result: "It is difficult to shop properly when they are so few with so little, but you try.",
        aftermath: "Shop once",
        trash: false,
        add: false
      },{
        optionText: "Reinvest in the community &bull; Spend 3 Caps",
        result: "With no pride left to hinder them, the survivors gladly accept your gift. With stern expressions, they get to work rebuilding their settlement.",
        aftermath: "Become <em>Idolized</em> &bull; Shop [Settlement]",
        trash: true,
        add: false
      }
    ]
  },{
    id: 8,
    location: "Settlement",
    title: "",
    text: "There is a small gathering around the various traders and mercenaries here, but more guards than usual. Recent events have people on edge.",
    options: [
      {
        optionText: "FORCED if you are <em>Idolized</em>",
        result: "The traders seem to recognize you and give you a discount for your 'good deeds.'",
        aftermath: "Shop [Settlement]; buy items for 1 less",
        trash: false,
        add: false
      },{
        optionText: "Go shopping as normal",
        result: "The crowd is smaller today, and you manage to get in more shopping than normal.",
        aftermath: "Shop [Settlement]",
        trash: false,
        add: false
      },{
        optionText: "Try to steal an item from a display &bull; [A] [L] 5",
        result: [
          {
            result: "<strong>Succeed:</strong>Despite the tighter security, you manage to grab something without notice.",
            aftermath: "Choose 1 item from the shop",
            trash: false,
            add: false
          },{
            result: "<strong>Fail:</strong>The guards leap on you in seconds. They rough you up before kicking you out.",
            aftermath: "Suffer 4 damage &bull; Move 1 space",
            trash: false,
            add: false
          }
        ]
      }
    ]
  },{
    id: 9,
    location: "Settlement",
    title: "",
    text: "A large, scarred man who draws open stares from the guards approaches you in the crowd. He looks you up and down in a way you don't like...",
    options: [
      {
        optionText: "FORCED if you are <em>Idolized</em>",
        result: "'Looks like we've got a do-gooder here. The boss doesn't want you messing with her organization.' He grabs you and drags you away.",
        aftermath: "Suffer 3 damage &bull; Move 1 space",
        trash: false,
        add: false
      },{
        optionText: "Ask if he's got any contraband &bull; <em>Vilified</em>",
        result: "Luckily, your reputation precedes you. The man ushers you to a well-hidden booth.",
        aftermath: "Draw and add 2 cards to the shop &bull; Shop [Settlement]; buy <em>Weapons</em> and <em>Drugs</em> for 2 less",
        trash: false,
        add: false
      },{
        optionText: "Brush past him and go back to shopping",
        result: "You keep your cool as you converse with the merchants and traders.",
        aftermath: "Shop [Settlement]",
        trash: false,
        add: false
      }
    ]
  },{
    id: 10,
    location: "Settlement",
    title: "",
    text: "As you enter the settlement, you see a grisly sight - the strung-up body of a man. A sign reading 'synth' hangs from his chest.",
    options: [
      {
        optionText: "Exact vengeance on these animals! &bull; <em>Synth</em>",
        result: "You overhear a nearby man bragging about his role in killing the synth. Looks like you've found your target.",
        aftermath: "Draw and fight [Human]",
        trash: true,
        add: false
      },{
        optionText: "Ignore the body and go about shopping",
        result: "You avert your eyes from the body as you do your trading",
        aftermath: "Shop [Settlement]",
        trash: false,
        add: false
      }
    ]
  },{
    id: 11,
    location: "Settlement",
    title: "",
    text: "There is a small gathering around the various traders and mercenaries here, and you shoulder your way through the other wastelanders to get a look at the goods.",
    options: [
      {
        optionText: "FORCED if you are <em>Vilified</em> or <em>Synth</em>",
        result: "'Psst, over here!' A young man gestures at you from the shadows. 'I've set up a shop back here for people like you who support my kind. Follow Me!'",
        aftermath: "Shop [Settlement] + 1; but items for 2 less",
        trash: false,
        add: false
      },{
        optionText: "Go shopping as normal",
        result: "The traders and mercenaries are more than happy to do business with you.",
        aftermath: "Shop [Settlement]",
        trash: false,
        add: false
      }
    ]
  },{
    id: 12,
    location: "Wasteland",
    title: "",
    text: "You've just found an old footlocker filled with stuff when a shadow falls across you. 'Mine,' says a deep rough voice behind you. Is that... a super mutant?",
    options: [
      {
        optionText: "Make a deal and share &bull; <em>Super Mutant</em>",
        result: "Seeing a fellow super mutant, he is happy to make a deal and split the contents of the locker.",
        aftermath: "[Loot] x [Wasteland] + 1",
        trash: true,
        add: false
      },{
        optionText: "Fight him for the loot",
        result: "",
        aftermath: "Draw and fight [Super Mutant] &bull; [Loot] x [Wasteland]",
        trash: true,
        add: false
      },{
        optionText: "Grab something and run! &bull; [E] [A] 4",
        result: [
          {
            result: "<strong>Succeed:</strong>You get away, clutching several items",
            aftermath: "[Loot] x [Wasteland]",
            trash: false,
            add: false
          },{
            result: "<strong>Fail:</strong>Just as you think you've gotten away, a giant hand closes around your shoulder like a vice.",
            aftermath: "Draw and fight [Super Mutant]",
            trash: true,
            add: false
          }
        ]
      }
    ]
  },{
    id: 13,
    location: "Settlement",
    title: "",
    text: "A whimpering dog wanders from person to person in the crowd.",
    options: [
      {
        optionText: "FORCED if you are <em>Idolized</em>",
        result: "The dog approaches you and seems to trust you instinctively. He follows at your heels.",
        aftermath: "Gain the 'Dogmeat' unique asset",
        trash: true,
        add: false
      },{
        optionText: "Attempt to befriend the dog &bull; [C] 4",
        result: [
          {
            result: "<strong>Succeed:</strong>While timid at first, the dog warms to you and begins following closely at your heels.",
            aftermath: "Gain the 'Dogmeat' unique asset",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong>After chasing the dog around the crowd for a while, you lose him, and most of your opportunity to shop.",
            aftermath: "Shop once",
            trash: true,
            add: [13]
          }
        ]
      },{
        optionText: "Ignore the dog and go shopping",
        result: "The poor dog continues wandering from person to person",
        aftermath: "Shop [Settlement]",
        trash: false,
        add: false
      }
    ]
  },{
    id: 14,
    location: "Quest",
    title: "Welcome to the Commonwealth",
    text: "Many dangers lurk in this new wasteland ahead of you, but the one you have heard the most about is the dreaded 'synth.' Said to look, sound, and smell just like humans, they are robots who have infiltrated the very society of the Commonwealth.",
    options: [
      {
        optionText: "Kill a suspected synth that no one will miss to find out the truth.<br><br><strong>Kill any [Human]</strong>",
        result: "",
        aftermath: "[Shield] +<br>[Loot] x 2",
        trash: true,
        add: [15,134,135]
      },{
        optionText: "This all sounds a bit overblown. Head to Diamon City to discreetly dig up some information.<br><br><strong>[Quest] Diamond City</strong>",
        result: "",
        aftermath: "[Star] +<br>[Loot] x 2",
        trash: true,
        add: [17]
      }
    ]
  },{
    id: 15,
    location: "Quest",
    title: "Resonance",
    text: "You tear the person apart, but they look to be flesh and blood. Messy. Among their effects, however, is a transponder marked with the Vitruvian man, the words 'The Institute,' and coordinates to the old ruins of the Commonwealth Institute of Technology.",
    options: [
      {
        optionText: "Follow the coordinates and explore the C.I.T. ruins to find the Institute.<br><br><strong>[Quest] C.I.T. Ruins &bull; [E] [I] 4</strong>",
        result: "",
        aftermath: "[Shield] +<br>3 Caps",
        trash: true,
        add: [18,67]
      },{
        optionText: "You have heard only bad things about the Institute. At Diamond City, Caps may quickly get you the information you need.<br><br><strong>[Quest] Diamond City &bull; Spend 4 Caps</strong>",
        result: "",
        aftermath: "[Star] +<br>[Loot] x 2",
        trash: true,
        add: [19,67]
      }
    ]
  },{
    id: 16,
    location: "Quest",
    title: "All Aboard!",
    text: "After asking around in Diamond City, you are approached by a man calling himself 'Drummer Boy.' He explains that the synths are actually the work of an organization known as 'The Institute,' and he asks for your help in freeing them.<br><br><strong>Place [Shield] on Downtown Boston</strong>",
    options: [
      {
        optionText: "Warn The Institute about these Railroad agents and get them to deploy more synth soldiers (contact the Institute at [Wasteland] locations).<br><br><strong>Place the third [Shield] on the map</strong>",
        result: "",
        aftermath: "[Shield] +<br>3 Caps",
        trash: true,
        add: [19,94]
      },{
        optionText: "Locate and Convince them to cast off their bonds.<br><br><strong>[Quest] Adjacent to a [Shield]</strong>",
        result: "",
        aftermath: "[Star] +<br>3 Caps",
        trash: true,
        add: [20,134,135]
      }
    ]
  },{
    id: 17,
    location: "Wasteland",
    title: "",
    text: "<strong>If 'All Aboard!' is no longer staged, trash this card and encounter the next card.</strong><br><br>You see a figure moving through the ruins wearing a black trench coat and sunglasses.",
    options: [
      {
        optionText: "FORCED if you are a <em>Synth</em>",
        result: "'I've got one,' he says into a microphone before a synth soldier appears out of thin air in front of you!",
        aftermath: "Place [Shield] on your space and fight it",
        trash: true,
        add: [17]
      },{
        optionText: "Could that be one of the Institute's rumored Coursers? Approach him with information",
        result: "He thanks you and calls in more soldiers",
        aftermath: "Place [Shield] on your space",
        trash: true,
        add: [17]
      },{
        optionText: "Sounds like bad news. Hide from him and go about searching &bull; [P] [A] 4",
        result: [
          {
            result: "<strong>Succeed:</strong>No way he'd spot you through sunglasses.",
            aftermath: "[Loot] x [Wasteland]",
            trash: true,
            add: [17]
          },{
            result: "<strong>Fail:</strong>'Take this one out,' he says into a microphone. A synth soldier appears out of thin air!",
            aftermath: "Place [Shield] on your space and fight it",
            trash: true,
            add: [17]
          }
        ]
      },{
        optionText: "'All Aboard!' is no longer staged.",
        result: "",
        aftermath: "",
        trash: true,
        add: false
      }
    ]
  },{
    id: 18,
    location: "Quest",
    title: "Uncover The Railroad",
    text: "Impressed by your resourcefulness and persistence, the Institute brings you into their trust. They are developing the most advanced technology ever conceived but are threatened by criminals calling themselves the 'Railroad.'",
    options: [
      {
        optionText: "Hunt down and eliminate these criminal Railroad agents.<br><br><strong>Kill the last [Star] on the map</strong>",
        result: "",
        aftermath: "[Shield] +<br>3 XP",
        trash: true,
        add: [24,130]
      },{
        optionText: "Locate the Railroad headquarters to give them support<br><br><strong>[Quest] The Railroad</strong>",
        result: "",
        aftermath: "[Star] + +<br>3 XP",
        trash: true,
        add: [21,125]
      }
    ]
  },{
    id: 19,
    location: "Quest",
    title: "All Hell",
    text: "Chaos erupts in the Commonwealth! Stirred up by newcomers asking too many questions, the Institute accelerates their mysterious plans, and the Railroad responds in kind, Fights break out across the wasteland!<br><br><strong>Place [Star] equal to survivors. Each on [Settlement], 1 per [Settlement], starting with the highest level. Place [Shield] at each [Star].</strong>",
    options: [
      {
        optionText: "Wipe out the Railroad's agents in the wasteland.<br><br><strong>Kill the last [Star] on the map</strong>",
        result: "",
        aftermath: "[Shield] + +<br>3 XP",
        trash: true,
        add: [21,22,150]
      },{
        optionText: "Eliminate all the militarized synths; you have no other choice.<br><br><strong>Kill the last [Shield] on the map</strong>",
        result: "",
        aftermath: "[Star] + +<br>3 XP",
        trash: true,
        add: [23,150]
      }
    ]
  },{
    id: 20,
    location: "Quest",
    title: "Institutionalized",
    text: "From the freed synths, you learn all about the Institute's hidden, underground factory where they develop the synths. The only way you are going to be able to get in there is by posing as a member.",
    options: [
      {
        optionText: "Warn the Institute of the infiltrators. You'll need circuitry to build a radio capable of reaching them.<br><br><strong>Kill any [Robot]</strong>",
        result: "",
        aftermath: "[Shield] + +<br>3 XP",
        trash: true,
        add: [23,107]
      },{
        optionText: "The Railroad headquarters will have everything you'd need to pose as an Institute scientist.<br><br><strong>[Quest] The Railroad &bull; [P] [E] [A] 4</strong>",
        result: "",
        aftermath: "[Star] +<br>3 XP",
        trash: true,
        add: [28,148]
      }
    ]
  },{
    id: 21,
    location: "Quest",
    title: "Bunker Hill",
    text: "With the Institute's agents hunting Railroad members in the field, the Railroad has managed to free a large group of synths, and they are looking for a way out of the Commonwealth.",
    options: [
      {
        optionText: "Locate the synth's safe house before they escape.<br><br><strong>Encounter level-3 or higher [Wasteland] until you locate the synths</strong>",
        result: "",
        aftermath: "[Shield] + +",
        trash: true,
        add: [24,157]
      },{
        optionText: "Find the synths and get them to safety.<br><br><strong>Encounter level-3 or higher [Wasteland] until you save the synths</strong>",
        result: "",
        aftermath: "[Star] + +",
        trash: true,
        add: [25,26,27,148]
      }
    ]
  },{
    id: 22,
    location: "Wasteland",
    title: "",
    text: "<strong>If at a level-2 or lower [Wasteland], encounter the next card. Then, add this card.</strong><br><br>You are caught in the middle of a firefight! Synth soldiers are systematically advancing on a small band of Railroad members defending a group of huddling people.",
    options: [
      {
        optionText: "Help the Institute &bull; Draw and fight [Star]",
        result: [
          {
            result: "<strong>Succeed:</strong>You easily eliminate the rebels and 'decommission' the escaped synths.",
            aftermath: "Complete objective 1 of 'Bunker Hill'",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong>You fall back, but the fight rages on.",
            aftermath: "",
            trash: true,
            add: [22]
          }
        ]
      },{
        optionText: "Help the Railroad &bull; Draw and fight [Shield]",
        result: [
          {
            result: "<strong>Succeed:</strong>You repel the Institute soldiers!",
            aftermath: "Complete objective 2 of 'Bunker Hill'",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong>You fall back, but the fight rages on.",
            aftermath: "",
            trash: true,
            add: [22]
          }
        ]
      },{
        optionText: "You can't afford to be caught in a battle right now. Run the other direction.",
        result: "The sound of combat fade behind you.",
        aftermath: "",
        trash: true,
        add: [22]
      },{
        optionText: "You are at a level-2 or lower [Wasteland].",
        result: "",
        aftermath: "Encounter the next card.",
        trash: true,
        add: [22]
      }
    ]
  },{
    id: 23,
    location: "Quest",
    title: "The Molecular Level",
    text: "With the Institute fully aware of their actions, the Railroad's only hope of getting to the Institute is by using their own technology against them. The Railroad has begun work on a signal interceptor to teleport themselves into the Institute.<br><br><strong>Place a quest marker 3 spaces away from your current space. This is the Signal Interceptor.</strong>",
    options: [
      {
        optionText: "Destroy the interceptor before it's complete<br><br><strong>[Quest] Signal Interceptor &bull; [S] [I] [A] 5</strong>",
        result: "",
        aftermath: "[Shield] + + +",
        trash: true,
        add: [25,26,27,130]
      },{
        optionText: "Acquire the needed circuitry to finish the interceptor<br><br>When a [Robot] is killed, place 1 Cap on this card.<br><br><strong>Place the third Cap on this card</strong>",
        result: "",
        aftermath: "[Star]+ +",
        trash: true,
        add: [28,157]
      }
    ]
  },{
    id: 24,
    location: "Quest",
    title: "Derailed",
    text: "With the Railroad weakened by it's recent defeat, the Institute has deployed one of its dreaded Coursers to deal with them once and for all.<br><br><strong>Place a quest marker at C.I.T. Ruins. This is an Institute Courser. [Star] move toward the Courser instead of survivors.<br><br>At the end of each round, remove [Star] from the Courser's space. If there are no [Star] in the Courser's space, move it 1 space toward the Railroad instead.</strong>",
    options: [
      {
        optionText: "Lead the Courser straight to the Railroad headquarters.<br><br><strong>The Courser is at the Railroad</strong>",
        result: "",
        aftermath: "[Shield] + + + +",
        trash: true,
        add: false
      },{
        optionText: "Things are falling apart. Pay to smuggle out as many synths as you can before the end.<br><br><strong>[Quest] Any [Settlement] &bull; Spend 8 Caps</strong>",
        result: "",
        aftermath: "[Star] +<br>Place [Star] in your space",
        trash: false,
        add: false
      }
    ]
  },{
    id: 25,
    location: "Quest",
    title: "The Minutemen",
    text: "The conflict has thrown the Commonwealth into chaos and attracted the attention of its self appointed defenders: the Minutemen.<br><br><strong>Place a quest marker at Diamond City. This is the Minutement militia.<br><br>Survivors in the same space as the Minutemen can perform the follwing action:</strong> Test [C] [I] 2 &bull; Move the Minutemen a number of spaces equal to the number of [Hits] by which you exceeded the test.",
    options: [
      {
        optionText: "Manipulate the Minutemen forces into attacking the Railroad<br><br><strong>The Minutemen are at the Railroad</strong>",
        result: "",
        aftermath: "[Shield] + + +",
        trash: true,
        add: false
      },{
        optionText: "Convince the Minutemen to attack the Institute.<br><br><strong>The Minutemen are at the C.I.T. Ruins</strong>",
        result: "",
        aftermath: "[Star] + + +",
        trash: true,
        add: false
      }
    ]
  },{
    id: 26,
    location: "Settlement",
    title: "",
    text: "A group of Minutemen struts through the settlement. They smile and tip their hats, but nevertheless, people seem to give them a wide berth.",
    options: [
      {
        optionText: "FORCED if you are <em>Idolized</em>",
        result: "They smile and approach you. 'We've heard about your deeds around the wasteland and would like to offer you a membership.'",
        aftermath: "<strong>Keep this card; when testing to move the Minutemen, add 2 [Hits]",
        trash: false,
        add: false
      },{
        optionText: "FORCED if you are <em>Vilified</em>",
        result: "Ugh, the boy scouts came up behind you and turn you around as you are talking to a trader. 'I think it's time for you to leave, criminal.'",
        aftermath: "Suffer 3 damage &bull; Move 1 space",
        trash: false,
        add: false
      },{
        optionText: "They don't notice you, so go shopping",
        result: "",
        aftermath: "Shop [Settlement]",
        trash: true,
        add: [26]
      }
    ]
  },{
    id: 27,
    location: "Wasteland",
    title: "",
    text: "You spot a group of Minutemen spread out across the ruined area.",
    options: [
      {
        optionText: "FORCED if you are <em>Idolized</em>",
        result: "They smile and approach you. 'We've heard about your deeds around the wasteland and would like to offer you a membership.'",
        aftermath: "<strong>Keep this card; when testing to move the Minutemen, add 2 [Hits]",
        trash: false,
        add: false
      },{
        optionText: "FORCED if you are <em>Vilified</em>",
        result: "Those bullies spot you immediately and head in your direction. 'Let's deal with this one now.'",
        aftermath: "Draw and fight [Human]",
        trash: false,
        add: false
      },{
        optionText: "They don't notice you, so continue searching.",
        result: "",
        aftermath: "[Loot] x [Wasteland]",
        trash: true,
        add: [27]
      }
    ]
  },{
    id: 28,
    location: "Quest",
    title: "The Nuclear Option",
    text: "The Railroad has infiltrated the Institute and has incited a mass revolt! They now plan to finish off the Institute once and for all.<br><br><strong>Place [Star] and a quest marker at the Railroad. This quest marker is the reactor blueprint.<br><br>A survivor in the same space as the blueprint can move the blueprint with his or her figure. When doing this, treat all spaces as difficult terrain.</strong>",
    options: [
      {
        optionText: "Take out as many of the rebels as possible; synths and Railroad alike.<br><br><strong>Kill any [Star] or [Shield]</strong>",
        result: "",
        aftermath: "[Shield] +<br>Place a [Star] at the blueprint",
        trash: false,
        add: false
      },{
        optionText: "The Railroad has blueprints of the Institute's reactor. If they can get the blueprints there, they can set it to blow and end this forever.<br><br><strong>The blueprint is at the C.I.T. Ruins</strong>",
        result: "",
        aftermath: "[Star] + + + +",
        trash: true,
        add: false
      }
    ]
  },{
    id: 29,
    location: "Quest",
    title: "Welcome to Far Harbor",
    text: "A sickly-green fog has spread across much of this island. Every structure you pass has been abandoned, but you see dangerous-looking shapes moving in the mists.",
    options: [
      {
        optionText: "The fog calls to you. Travel into the mists, let it embrace you.<br><br><strong>Suffer 2 [Radiation] during the same turn</strong>",
        result: "",
        aftermath: "[Shield] +<br>[Loot] x 2",
        trash: true,
        add: [32,94]
      },{
        optionText: "The strange machines are the only sign of civilization left on this island. Investigate them.<br><br><strong>Place a [Star]</strong>",
        result: "",
        aftermath: "[Star] +<br>[Loot] x 2",
        trash: true,
        add: [33,67]
      }
    ]
  },{
    id: 30,
    location: "Quest",
    title: "Stranger Machines",
    text: "Bizarre devices dot the terrain around certain locations on the island. Most seem broken from wear or sabotage, but look easy enough to fix.",
    options: [
      {
        optionText: "Once running, these machines stop Atom's fog! Unacceptable! Smash them.<br><br><stron>[Quest] Any [Star] &bull; [S] 3</strong>",
        result: "",
        aftermath: "2 XP &bull; Discard this [Star]",
        trash: false,
        add: false
      },{
        optionText: "Attempt to communicate with the aliens and make a deal.<br><br><strong>[Quest] any [Wasteland] or [Settlement] without [Star] &bull; [E] [I] 4</strong>",
        result: "",
        aftermath: "2 XP &bull; Place [Star] in this space",
        trash: false,
        add: false
      }
    ]
  },{
    id: 31,
    location: "Settlement",
    title: "",
    text: "<strong>If there is [Star] on this space, encounter the next card. Then, add this card</strong><br><br>Without the protection of the fog condensers, the people in this settlement have fled the concoming fog. You walk through a ghost town.",
    options: [
      {
        optionText: "Fix up the fog condensor &bull; [E] [I] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> The machine whirs to life.",
            aftermath: "Place [Star] in this space",
            trash: true,
            add: [31]
          },{
            result: "<strong>Fail:</strong> You manage only to frustrate yourself banging away on the machine.",
            aftermath: "",
            trash: true,
            add: [31]
          }
        ]
      },{
        optionText: "Praise Atom! Await the fog",
        result: "You watch as the fog swirls around the buildings.",
        aftermath: "If there is no [Shield] in this space, place [Shield]",
        trash: true,
        add: [31]
      },{
        optionText: "Steal some stuff. No one is here to stop you",
        result: "The traders took their wares with them, but you find some odds and ends.",
        aftermath: "[Loot] x [Settlement]",
        trash: true,
        add: [31]
      },{
        optionText: "There is a [Star] on this space.",
        result: "",
        aftermath: "Encounter the next card.",
        trash: true,
        add: [31]
      }
    ]
  },{
    id: 32,
    location: "Quest",
    title: "Embrace the Glow",
    text: "As you camp in the fog, you are approached by a robed figure. She is from the Church of the Children of Atom, and they want help spreading the fog.",
    options: [
      {
        optionText: "Time for some missionary work! Spread Atom's love to more of the island.<br><br><strong>When a [Shield] is placed on the map when there is already at least 1 [Shield] on the map</strong>",
        result: "",
        aftermath: "[Shield] +<br>3 XP",
        trash: true,
        add: [34,67]
      },{
        optionText: "Warn the local town of Far Harbor of the fanatical cult's plans.<br><br><strong>[Quest] Far Harbor</strong>",
        result: "",
        aftermath: "3 XP",
        trash: true,
        add: [34,67]
      }
    ]
  },{
    id: 33,
    location: "Quest",
    title: "The Last Bastion",
    text: "You find a break in the fog and people still alive on this island! They say that there are several pockets of civiliation left in the fog, but most people are either members of the Church of the Children of the Atom or holed up at the port town of Far Harbor",
    options: [
      {
        optionText: "Still the fog calls. Help it spread its tendrils out into the island.<br><br><strong>When a [Shield] is placed on the map</strong>",
        result: "",
        aftermath: "[Shield] +<br>3 XP",
        trash: true,
        add: [34,117]
      },{
        optionText: "Reach Far Harbor to find out what is really happening on the island.<br><br><strong>[Quest] Far Harbor</strong>",
        result: "",
        aftermath: "[Star] +<br>3 XP",
        trash: true,
        add: [34,101]
      }
    ]
  },{
    id: 34,
    location: "Quest",
    title: "Choking Fog",
    text: "As the fog continues to consume the island, Far Harbor has begun to erect mechanical devices called 'Fog Condensers' that stop the fog from consuming certain areas.",
    options: [
      {
        optionText: "Continue to help the church bring Atom's grace to the island.<br><br><strong>When a [Shield] is placed on the map when there are already at least 3 [Shield] on the map</strong>",
        result: "",
        aftermath: "[Shield] +<br>3 XP",
        trash: true,
        add: [38,35,37,141]
      },{
        optionText: "Help erect condensers to help slow the spread of fog.<br><br><strong>When a [Star] is placed on the map when there is already at least 1 [Star] on the map</strong>",
        result: "",
        aftermath: "[Star] +<br>3 XP",
        trash: true,
        add: [38,36,37,134,135]
      }
    ]
  },{
    id: 35,
    location: "Quest",
    title: "Initiation",
    text: "The fog that now covers much of the island has mutated and enraged the creatures, and now they threaten Far Harbor! Meanwhile, the Church is safe in its cave base at the Nucleus.",
    options: [
      {
        optionText: "Go to the Nucleus to join the Children of Atom<br><br><strong>[Quest] The Nucleus</strong>",
        result: "",
        aftermath: "[Shield] +<br>3 XP",
        trash: true,
        add: [39,150]
      },{
        optionText: "Kill the creature that threatens Far Harbor<br><br><strong>Kill any [Monster]</strong>",
        result: "",
        aftermath: "[Star] + +<br>3 XP",
        trash: true,
        add: [40,112]
      }
    ]
  },{
    id: 36,
    location: "Quest",
    title: "Infiltration",
    text: "With some condensers up and running, Far Harbor has earned enough breathing room to figure out what is really going on here.",
    options: [
      {
        optionText: "You need the proper knowledge of how these condensers work. Study similar technology.<br><br><strong>Kill any [Robot]</strong>",
        result: "",
        aftermath: "[Shield] + +<br>3 XP",
        trash: true,
        add: [39,112]
      },{
        optionText: "Head to the Nucleus to infiltrate the Children of Atom for information<br><br><strong>[Quest] The Nucleus</strong>",
        result: "",
        aftermath: "[Star] +<br>3 XP",
        trash: true,
        add: [40,150]
      }
    ]
  },{
    id: 37,
    location: "Quest",
    title: "Acadia In Need",
    text: "Caught in the middle of everything involving the fog is the hideout of Acadia, run by the synth DiMa. Ambivalent to the conflict between Far Harbor or the Church, he has one goal: to help as many escaped synths as possible.",
    options: [
      {
        optionText: "Convince the synths to avoid Acadia and stay to help the island.<br><br><strong>Encounter any [Settlement] until you locate the synth</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [157]
      },{
        optionText: "Guide the synths to the refuge of Acadia<br><br><strong>Encounter any [Settlement] until you locate the synth</strong>",
        result: "",
        aftermath: "5 Caps",
        trash: true,
        add: [41]
      }
    ]
  },{
    id: 38,
    location: "Settlement",
    title: "",
    text: "As you pass through the people gathered to trade, you spot someone who matches he description of the synth DiMa was looking for.",
    options: [
      {
        optionText: "Leverage your knowledge of the synth to get her to help you &bull; [S] [C] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> Angered that you know her secret, she nevertheless agrees to help.",
            aftermath: "Complete objective 1 of 'Acadia in Need'",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> Outraged by your threat, she hits you and flees into the crowd.",
            aftermath: "Suffer 2 damage",
            trash: true,
            add: [38]
          }
        ]
      },{
        optionText: "Quietly tell the synth about Acadia",
        result: "She thanks you and heads off in the direction of Acadia, promising that she won't forget this.",
        aftermath: "Complete objective 2 of 'Acadia in Need'<br>Become <em>Idolized</em>",
        trash: true,
        add: false
      },{
        optionText: "Ignore the synth and go shopping",
        result: "The synth continues about her day none the wiser",
        aftermath: "Shop [Settlement]",
        trash: true,
        add: [38]
      }
    ]
  },{
    id: 39,
    location: "Quest",
    title: "Converts to the Church",
    text: "Even with its recent gains, the Church still needs more members to fill its ranks.",
    options: [
      {
        optionText: "Perhaps the synths of Acadia can be convinced to see the light of Atom's glow.<br><br><strong>[Quest] Acadia &bull; Any companion &bull; [E] [C] 4</strong>",
        result: "",
        aftermath: "[Shield] + +",
        trash: true,
        add: [42,148]
      },{
        optionText: "Use the church's need of members to infiltrate their organization.<br><br><strong>[Quest] Nucleus &bull; [C] [A] [L] 4</strong>",
        result: "",
        aftermath: "[Star] + +",
        trash: true,
        add: [43]
      }
    ]
  },{
    id: 40,
    location: "Quest",
    title: "Rebuild",
    text: "Far Harbor can now breathe a bit easier, but the wider danger of the fog still looms on the island. They suspect the church will continue to try to sabotage the condensers, and they need a supply of circuitry to ensure they can fix them.",
    options: [
      {
        optionText: "Go to the Nucleus to join the Church.<br><br><strong>[Quest] Nucleus &bull; [S] [C] 4</strong>",
        result: "",
        aftermath: "[Shield] + +",
        trash: true,
        add: [42]
      },{
        optionText: "Scavenge circuitry to ensure enough condensers to keep Far Harbor safe.<br><br><strong>[Quest] Robco Factory &bull; [S] [P] [I] 4</strong>",
        result: "",
        aftermath: "[Star] + +",
        trash: true,
        add: [43,148]
      }
    ]
  },{
    id: 41,
    location: "Quest",
    title: "Pulling the Strings",
    text: "With everything you have done for Acadia, you have earned the trust of DiMa. He has revealed that he has the ability to replace one of the faction leaders with a synth.<br><br><strong>Place a quest marker at Arcadia. This is the replacement synth.<br><br>A survivor in the same space as the replacement can move it with his or her figure. When doing this, treat all spaces as difficult terrain.</strong>",
    options: [
      {
        optionText: "Replace Captain Avery with a synth.<br><br><strong>Replacement at Far Harbor</strong>",
        result: "",
        aftermath: "[Shield] + +",
        trash: true,
        add: [130]
      },{
        optionText: "Replace High Confessor Tektus with a synth<br><br><strong>Replacement at The Nucleus</strong>",
        result: "",
        aftermath: "[Star] + +",
        trash: true,
        add: [130]
      }
    ]
  },{
    id: 42,
    location: "Quest",
    title: "The Last Defense",
    text: "With its new members, the Church now has the strength to bring Atom's grace to Far Harbor and finally claim all of this island.",
    options: [
      {
        optionText: "Smash the remaining condensers near Far Harbor and let the fog consume them.<br><br><strong>When a [Shield] is placed on the map when there are no [Star] within 4 spaces of Far Harbor</strong>",
        result: "",
        aftermath: "[Shield] + + +",
        trash: true,
        add: false
      },{
        optionText: "Evacuate as many people as possible to safety before the fog overtakes the island.<br><br><strong>[Quest] Far Harbor &bull; Discard a companion</strong>",
        result: "",
        aftermath: "[Star] +",
        trash: false,
        add: false
      }
    ]
  },{
    id: 43,
    location: "Quest",
    title: "Embrace This!",
    text: "It's time to take the fight back to the Church. Their base at the Nucleus is an old nuclear submarine. You could overload its reactor... if you can get inside, that is.",
    options: [
      {
        optionText: "Smash as many of the condensers as possible.<br><br><strong>Discard 1 [Star]</strong>",
        result: "",
        aftermath: "[Shield] +",
        trash: false,
        add: false
      },{
        optionText: "They will let only the truly devout that deep into their inner sanctum. Show your devotion, then blow them sky high!<br><br><strong>[Quest] The Nucleus &bull; Have 6 or fewer remaining HP &bull; [C] [I] [L] 5</strong>",
        result: "",
        aftermath: "[Star] + + +",
        trash: true,
        add: false
      }
    ]
  },{
    id: 44,
    location: "Quest",
    title: "Welcome to Capital Wasteland",
    text: "The mountains around you shake suddenly, fire and rubble spewing violently into the sky. Eyes wide, you watch as a fleet of vertibirds scrambles from its peak to clear the violent blasts. The straggler of the group begins to emit a trail of smoke as the rest disappear over the eastern horizon, then abruptly drops out of sight with a dull explosion that echoes up from the capital wasteland.",
    options: [
      {
        optionText: "Look for survivors.<br><br><strong>[Quest] The wreck</strong>",
        result: "",
        aftermath: "[Shield] +<br>Place [Shield] on Project Purity<br>[Loot] x 2",
        trash: true,
        add: [45,101,46]
      },{
        optionText: "Find someone who knows what the hell just happened.<br><br><strong>[Quest] Megaton</strong>",
        result: "",
        aftermath: "[Star] +<br>Place [Shield] on Project Purity<br>[Loot] x 2",
        trash: true,
        add: [48,67]
      }
    ]
  },{
    id: 45,
    location: "Quest",
    title: "National Treasures",
    text: "Most of the crew has survived, but all are injured, many severely. Unwilling to trust a stranger, they require proof of your loyalty. They disclose the locations of some nearby caches, in which are supplies and protocols for this kind of situation.",
    options: [
      {
        optionText: "Locate the survival gear for the wounded.<br><br><strong>Encounter any [Wasteland] until you locate the cache</strong>",
        result: "",
        aftermath: "[Shield] +<br>3 XP",
        trash: true,
        add: [49,67]
      },{
        optionText: "Demand an explanation in exchange for the contents of the caches.<br><br><strong>Encounter any [Wasteland] until you locate the cache</strong>",
        result: "",
        aftermath: "[Star] +<br>3 XP",
        trash: true,
        add: [49,67]
      }
    ]
  },{
    id: 46,
    location: "Wasteland",
    title: "",
    text: "A few faint scratches on an old wall indicate an Enclave cache. Pushing a rusted cabinet aside, you expose the hole in the floor and drop down. Inside, a hooded figure dozes.",
    options: [
      {
        optionText: "Back out and look elsewhere",
        result: "You slide the cabinet back into place.",
        aftermath: "[Loot] x [Wasteland]",
        trash: true,
        add: [46]
      },{
        optionText: "Drive her off",
        result: "After a scuffle, she runs back up through the hole. The cache is empty, and outside, she waits.",
        aftermath: "Draw and fight [Human]",
        trash: true,
        add: [47]
      },{
        optionText: "Ask what happened here &bull; [C] 3",
        result: [
          {
            result: "<strong>Succeed:</strong> She explains that this cache was empty when found it and points you toward another.",
            aftermath: "Encounter the next card",
            trash: true,
            add: [47]
          },{
            result: "<strong>Fail:</strong> She flees. After a long chase, you emerge in the daylight, but she is gone.",
            aftermath: "Move 1 space",
            trash: true,
            add: [47]
          }
        ]
      }
    ]
  },{
    id: 47,
    location: "Wasteland",
    title: "",
    text: "More scratches on the wall indicate a second cache. Inside, it is clear that almost everything is still in place here. This is what the survivors are looking for.",
    options: [
      {
        optionText: "Gather what they need, but hide the rest for yourself to retrieve later &bull; [P] [I] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> You return for the haul later.",
            aftermath: "Complete either 'National Treasures' objective<br>[Loot] x [Wasteland]",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> When you return, everything is gone except for a single armed land mine.",
            aftermath: "Complete either 'National Treasueres' objective<br>Suffer 3 damage",
            trash: true,
            add: false
          }
        ]
      },{
        optionText: "Gather it and return to the crash site",
        result: "You deliver more than they need, and they are quite thankful.",
        aftermath: "Complete either 'National Treasures' objective<br>Become <em>Idolized</em>",
        trash: true,
        add: false
      },{
        optionText: "Forget them, and take it all for yourself",
        result: "Unfortunately, only a few items prove useful.",
        aftermath: "[Loot] x [Wasteland]",
        trash: true,
        add: [47]
      }
    ]
  },{
    id: 48,
    location: "Quest",
    title: "A Shaky Lead",
    text: "The Enclave was long believed to be dead and gone, so their vertibirds soaring over the capital wasteland has set Megaton abuzz. You get a lead, but it's shaky: an intelligent super mutant appeared in the city around the same time. He spoke of a personal quest to ensure the safety and survival of all, then disappeared into the hills.",
    options: [
      {
        optionText: "A super mutant? Nope. Go help any Enclave survivors instead.<br><br><strong>[Quest] The wreck</strong>",
        result: "",
        aftermath: "[Shield] +<br>Place [Shield] at Project Purity<br>3 XP",
        trash: true,
        add: [49,112]
      },{
        optionText: "Track down and assist this super mutant.<br><br><strong>[Quest] Vault 84</strong>",
        result: "",
        aftermath: "[Star] +<br>",
        trash: true,
        add: [50,117]
      }
    ]
  },{
    id: 49,
    location: "Quest",
    title: "One More Silver Dollar",
    text: "The survivors explain that they are mostly scientists critical to the Enclave's current mission: retake the wasteland for humankind. In order to continue their work, they need someone to make contact with the Enclave to request a medevac.",
    options: [
      {
        optionText: "Report their location to Enclave soldiers.<br><br><strong>[Quest] Project Purity or space with [Shield] &bull; [P]] [I] 4</strong>",
        result: "",
        aftermath: "[Shield] +<br>Place [Shield] at Project Purity<br>3 XP",
        trash: true,
        add: [51,94]
      },{
        optionText: "Report the Enclave's emergence and this looming threat to the Brotherhood of Steel.<br><br><strong>[Quest] The Tower</strong>",
        result: "",
        aftermath: "[Star] +<br>Place [Shield] at Project Purity<br>Place [Star] at Megaton and the Tower<br>3 XP",
        trash: true,
        add: [52,141,53]
      }
    ]
  },{
    id: 50,
    location: "Quest",
    title: "What The Fawkes?",
    text: "The rumored super mutant can talk! His name is Fawkes, and you find him fruitlessly searching outside Vault 84 on some personal mission. He'll give you the information on the Brotherhood and Enclave if you help him locate the next vault on his list.",
    options: [
      {
        optionText: "This Fawkes is everything the Enclave has been working against. Plant the right evidence to get some local super mutants to deal with their 'brother.'<br><br><strong>[Quest] Super Mutant Camp &bull; [S] [E] [C] 5</strong>",
        result: "",
        aftermath: "[Shield] + +<br>3 XP",
        trash: true,
        add: [51,141]
      },{
        optionText: "Locate the next vault Fawkes wants to research.<br><br><strong>[Quest] Vault 109 &bull; [P] [I] [L] 5</strong>",
        result: "",
        aftermath: "[Star] +<br>3 XP",
        trash: true,
        add: [52,94,53]
      }
    ]
  },{
    id: 51,
    location: "Quest",
    title: "Give Me Liberty",
    text: "The Brotherhood of Steel is working on a secret weapon to take on the Enclave. Meanwhile, the Enclave continues to build up its forces at what used to be the Jefferson Memorial.",
    options: [
      {
        optionText: "Pay off some local criminals to sabotage the Brotherhood's project.<br><br><strong>[Quest] The Tower &bull; [P] [C] 5 &bull; Spend 4 Caps</strong>",
        result: "",
        aftermath: "[Shield] +",
        trash: true,
        add: [54,157]
      },{
        optionText: "The Brotherhood is recovering equipment from the old Robco junkyard. Bring them some more supplies.<br><br><strong>[Quest] Robco Factory &bull; Discard <em>Robot</em> companion</strong>",
        result: "",
        aftermath: "[Star] + +<br>Place 2 [Shield] at Project Purity",
        trash: true,
        add: [55,148]
      }
    ]
  },{
    id: 52,
    location: "Quest",
    title: "The Sleeping Giant",
    text: "The Enclave has a big plan for Project Purity, and no one is exactly sure what that is. But first they have to clear out the super mutants that have cropped up. Meanwhile, the Brotherhood hunts for an answer.",
    options: [
      {
        optionText: "Deal with the super mutants that continue to threaten Project Purity.<br><br><strong>[Quest] The Mall &bull; Draw and fight [Super Mutant]</strong>",
        result: "",
        aftermath: "[Shield] + +",
        trash: true,
        add: [54,148]
      },{
        optionText: "Help the Brotherhood find the solution they've been searching for.<br><br><strong>Encounter at Robco Factory until you locate the prototype</strong>",
        result: "",
        aftermath: "[Star] +",
        trash: true,
        add: [55,130]
      }
    ]
  },{
    id: 53,
    location: "Wasteland",
    title: "",
    text: "<strong>If not at Robco Factory, encounter the next card. Then add this card.</strong><br><br>'Threat analysis: green,' three mechanical voices boom in unison. You duck out of the doorway.",
    options: [
      {
        optionText: "Grab a little loot and leave",
        result: "Despite your haste, you find something.",
        aftermath: "[Loot]",
        trash: true,
        add: [53]
      },{
        optionText: "Search the room for more loot &bull; [P] [A] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> The room is a treasure trove!",
            aftermath: "2 Caps &bull; [Loot] x [Wasteland]",
            trash: true,
            add: [53]
          },{
            result: "<strong>Fail:</strong> All hell breaks loose.",
            aftermath: "Suffer 3 damage",
            trash: true,
            add: [53]
          }
        ]
      },{
        optionText: "Retrieve the energy source for the Brotherhood of Steel &bull; [P] [I] [L] 5",
        result: [
          {
            result: "<strong>Succeed:</strong> Through a combination of hacking, stealth, and timing, you succeed.",
            aftermath: "Complete 'The Sleeping Giant'",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> 'Hostile detected!' the security bots boom. One of them pursues you out of the factory.",
            aftermath: "Draw and fight [Robot]",
            trash: true,
            add: [53]
          }
        ]
      },{
        optionText: "You are not at Robco Facility",
        result: "",
        aftermath: "Encounter the next card.",
        trash: true,
        add: [53]
      }
    ]
  },{
    id: 54,
    location: "Quest",
    title: "...Or Give Me Death",
    text: "The Enclave has begun their work on Project Purity. Their intention, however, is quite dissimilar to the original intention of the water purifier. Soon, they will introduce a solution into the water that will cleanse every mutation from the capital wasteland, making room for a new age for mankind.",
    options: [
      {
        optionText: "Recruit help from the wasteland for the Enclave's work at Project Purity<br><br><strong>[Quest] any [Settlement] &bull; Spend 10 Caps</strong>",
        result: "",
        aftermath: "[Shield] +<br>Place [Shield] in your space",
        trash: false,
        add: false
      },{
        optionText: "The Brotherhood is close to activating their weapon and taking the war directly to the Enclave!<br><br><strong>[Quest] The Tower &bull; Discard <em>Robot</em> companion</strong>",
        result: "",
        aftermath: "[Star] + +",
        trash: true,
        add: [55]
      }
    ]
  },{
    id: 55,
    location: "Quest",
    title: "...And Justice For All",
    text: "'BETTER RED THAN DEAD,' a mechanical voice booms across the wastelands as the Brotherhood gets Liberty Prime back online.<br><br><strong>Place a quest marker on the Tower; this is Liberty Prime. [Shield] move toward Liberty Prime instead of survivors.<br><br>At the end of the round, remove [Shield] from Liberty Prime's space. If there are no [Shield] in its space, it moves 1 space toward Project Purity instead.</strong>",
    options: [
      {
        optionText: "Recruit help from the wasteland for the Enclave's work at Project Purity.<br><br><strong>[Quest] Any [Settlement] &bull; Spend 10 or more Caps</strong>",
        result: "",
        aftermath: "[Shield] + per 10 Caps spent<br>Place [Shield] in your space",
        trash: false,
        add: false
      },{
        optionText: "End this.<br><br><strong>Liberty Prime is at Project Purity</strong>",
        result: "",
        aftermath: "[Star] + + + +",
        trash: true,
        add: false
      }
    ]
  },{
    id: 56,
    location: "Quest",
    title: "Into The Pitt",
    text: "You happen upon a man fleeing this new wasteland. 'Please,' he says, 'if you see my friends, tell them I made it -- that there is a way out. And whatever you do, don't let the slavers know I've come this way.'",
    options: [
      {
        optionText: "Report the escaped slave.<br><br><strong>[Quest] any [Settlement]</strong>",
        result: "",
        aftermath: "[Shield] +<br>Place [Shield] in your space<br>[Loot] x 2",
        trash: true,
        add: [57,67]
      },{
        optionText: "Infrom the man's friends.<br><br><strong>[Quest] any [Wasteland]</strong>",
        result: "",
        aftermath: "[Star] +<br>Place [Star] in your space<br>[Loot] x 2",
        trash: true,
        add: [58,67]
      }
    ]
  },{
    id: 57,
    location: "Quest",
    title: "On The Trail",
    text: "You report the escaped slave, but no one seems to care. 'He carrying a child? No? Then forget it! Ashur's kid is missing, find a lead on her, that'll be worthy news. Who's Asher? The boss, of course! What ruck you been sleeping under?'",
    options: [
      {
        optionText: "Investigate where the child was last seen.<br><br><strong>[Quest] Red Rocket Station &bull; [P] [C] 4</strong>",
        result: "",
        aftermath: "[Shield] +<br>3 XP",
        trash: true,
        add: [59,101]
      },{
        optionText: "Fight off those who are in pursuit of the child.<br><br><strong>[Quest] any [Wasteland] &bull; Draw and fight [Human]</strong>",
        result: "",
        aftermath: "[Star] +<br>3 XP",
        trash: true,
        add: [60,112]
      }
    ]
  },{
    id: 58,
    location: "Quest",
    title: "On The Eve Of War",
    text: "It turns out that the slave who escaped was part of a resistance group. Without his aid in Ashbury, their upcoming assault on Haven will need to be scrapped.",
    options: [
      {
        optionText: "Gather intelligence on this resistance.<br><br><strong>[Quest] any [Settlement] &bull; [C] 3</strong>",
        result: "",
        aftermath: "[Shield] +<br>3 XP",
        trash: true,
        add: [60,141]
      },{
        optionText: "Provide another individual to take the place of the deserter.<br><br><strong>[Quest] Ashbury Road &bull; Any companion</strong>",
        result: "",
        aftermath: "[Star] +<br>3 XP",
        trash: true,
        add: [61,117]
      }
    ]
  },{
    id: 59,
    location: "Quest",
    title: "Up The Chain",
    text: "A small group of slaves is hiding out in Red Rocket Station, defending Ashur's kidnapped child. If this information makes it back to Haven, a larger force will be sent to break the defenses and recover the child.",
    options: [
      {
        optionText: "Report the baby's location to Ashur.<br><br><strong>[Quest] Haven</strong>",
        result: "",
        aftermath: "[Shield] +<br>Place 2 [Shield] at The Bridge<br>Place [Star] at the Red Rocket Station<br>3 XP",
        trash: true,
        add: [62,94,63]
      },{
        optionText: "Incite an uprising and capture the bridge, cutting off the slavers from the wasteland.<br><br><strong>[Quest] The Bridge</strong>",
        result: "",
        aftermath: "[Star] + +<br>Place 2 [Shield] at Haven<br>Place 2 [Star] at The Bridge<br>3 XP",
        trash: true,
        add: [65,157]
      }
    ]
  },{
    id: 60,
    location: "Quest",
    title: "Fires Of Revolution",
    text: "Recent killings have caused a backlash, and the wasteland is on the verge of war. Regardless of the outcome, many lives will be lost, and those who do not prepare now will surely be among the dead.",
    options: [
      {
        optionText: "Assist the construction of Haven's fortifications.<br><br><strong>[Quest] The Bridge &bull; [I] [L] 4</strong>",
        result: "",
        aftermath: "[Shield] + +<br>Place [Shield] at The Bridge<br>Place 2 [Star] at The Mill<br>3 XP",
        trash: true,
        add: [65,107]
      },{
        optionText: "Reinforce the slaves at their stronghold.<br><br><strong>[Quest] The Mill</strong>",
        result: "",
        aftermath: "[Star] + +<br>Place [Shield] at The Mill<br>Place 2 [Star] at Haven<br>3 XP",
        trash: true,
        add: [65,125]
      }
    ]
  },{
    id: 61,
    location: "Quest",
    title: "Break The Chains",
    text: "Ashur is living on borrowed time. His lieutenants are missing and his compound is compromised. There is little hope remaining for the slaver overlord.",
    options: [
      {
        optionText: "Join the watch and try to spot the assassins.<br><br><strong>[Quest] Haven &bull; [P] [E] [L] 5</strong>",
        result: "",
        aftermath: "[Shield] + +<br>Place [Shield] at The Mill<br>3 XP",
        trash: true,
        add: [65,150]
      },{
        optionText: "Ensure the job is completed.<br><br><strong>[Quest] Haven &bull; Draw and fight [Human];<br>apply +1 to its level</strong>",
        result: "",
        aftermath: "[Star] +<br>Place [Shield] at The Bridge<br>3 XP",
        trash: true,
        add: [64,157]
      }
    ]
  },{
    id: 62,
    location: "Quest",
    title: "Child Of The Pitt",
    text: "Midea, unofficial matriarch of the rebels, discloses that she has the baby. Until the slaves are freed, whe will keep the child as leverage, moving to a new, secret location each day. Even so, it is only a matter of time.",
    options: [
      {
        optionText: "Intercept Midea and take the child.<br><br><strong>Encounter any [Wasteland] until you locate Midea</strong>",
        result: "",
        aftermath: "[Shield] +<br>Choose 1 [Item] from the discard pile",
        trash: true,
        add: [65,148]
      },{
        optionText: "Ensure that Ashur is no longer a threat.<br><br><strong>[Quest] Haven &bull; Draw and fight [Human];<br>apply +1 to its level</strong>",
        result: "",
        aftermath: "[Star] + +<br>Choose 1 item from the shop",
        trash: true,
        add: [64,150]
      }
    ]
  },{
    id: 63,
    location: "Wasteland",
    title: "",
    text: "You open the door to a musty basement -- the dark eyes of a cloaked figure stare back at you. A small bundle is in her arms. You have stumbled upon Midea, the kidnapper!",
    options: [
      {
        optionText: "Ignore them and walk away",
        result: "You close the door and walk away",
        aftermath: "[Loot] x [Wasteland]",
        trash: true,
        add: [63]
      },{
        optionText: "Fight the guardian to return the child<br><em style='font-weight:400;'>She sets the child down before hurling herself at you.</em><br>Draw and fight [Human]; apply +1 to its level",
        result: [
          {
            result: "<strong>Succeed:</strong> Withing the hour, your return the child.",
            aftermath: "Complete the 'Child of the Pitt' quest",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> She spits on you as she walks away",
            aftermath: "",
            trash: true,
            add: [63]
          }
        ]
      },{
        optionText: "Convince her that you can help &bull; [C] 4",
        result: [
          {
            result: "<strong>Succeed:</strong>You take them both to a safe house.",
            aftermath: "2 Caps &bull; Move 3 spaces",
            trash: false,
            add: false
          },{
            result: "<strong>Fail:</strong> She flees as soon as your back is turned.",
            aftermath: "",
            trash: true,
            add: [63]
          }
        ]
      }
    ]
  },{
    id: 64,
    location: "Quest",
    title: "Bear With Me",
    text: "The price of teddy bears is on the rise -- yes, you heard that right. Despite Ashur's death, the slavers have not disbanded. At their head, Sandra, a scientist of some repute, is offering competitive price for bears. For some reason, this has rallied the slavers.",
    options: [
      {
        optionText: "Bring a collection of bears to Sandra<br><br><strong>[Quest] Haven &bull; Discard 2 Junk cards</strong>",
        result: "",
        aftermath: "[Shield] + +<br>6 Caps",
        trash: true,
        add: [66,130]
      },{
        optionText: "Whatever she's looking for, you can't let her find it -- purchase and hide several teddy bears.<br><br><strong>[Quest] any [Settlement] &bull; Spend any number of Caps and place them on this card<br><br>Place the tenth Cap on this card</strong>",
        result: "",
        aftermath: "[Star] +",
        trash: true,
        add: [66,148]
      }
    ]
  },{
    id: 65,
    location: "Quest",
    title: "War!",
    text: "The system is collapsing. The peace and security that the slavers have enjoyed for years is crumbling. Everywhere, the oppressed are rising up.<br><br><strong>Each survivor takes 1 [Shield] and 1 [Star]. Starting with the first player, place a [Shield] at a [Settlement] and the [Star] at a [Wasteland]. No two survivors can be placed in the same space.</strong>",
    options: [
      {
        optionText: "Squash the rebellion.<br><br><strong>Kill the last [Star]</strong>",
        result: "",
        aftermath: "[Shield] + + +",
        trash: true,
        add: false
      },{
        optionText: "Secure freedom fo all.<<br><br><strong>Kill the last [Shield]</strong>",
        result: "",
        aftermath: "[Star] + + +",
        trash: true,
        add: false
      }
    ]
  },{
    id: 66,
    location: "Quest",
    title: "Painful Solutions",
    text: "Despite the efforts of those who oppose her, Sandra has located the bear she was looking for and the disk that was hidden with in it. Testing has begun to cure the plague that haunts the Pitt -- unfortunately, there are a few slighty deadly side effects...",
    options: [
      {
        optionText: "Administer the new vaccine.<br><br><strong>[Quest] any [Settlement] without a Cap &bull; [I] 3</strong>",
        result: "",
        aftermath: "Place 1 Cap on that [Settlement]<Br>If all [Settlement] have Caps: [Shield] + + +",
        trash: true,
        add: false
      },{
        optionText: "Destroy the harmful research.<br><br><strong>[Quest] Haven &bull; [P] [I] 5</strong>",
        result: "",
        aftermath: "[Star] + + + +<br>Discard all Caps from the map",
        trash: true,
        add: false
      }
    ]
  },{
    id: 67,
    location: "Quest",
    title: "Vault Rumors",
    text: "Every year, new unfortunates appear out of the wasteland, claiming to have been banished from an underground bunker made before the war by a company called 'Vault-Tec.' Perhaps it is worth investigating.",
    options: [
      {
        optionText: "Many of the vault exiles are caught by raiders. You might be able to get something off of one of them.<br><br><strong>Kill any [Human]</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [68]
      },{
        optionText: "See if you can find an old exile who will sell you information.<br><br><strong>[Quest] any [Settlement] &bull; Spend 4 Caps</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [69]
      }
    ]
  },{
    id: 68,
    location: "Quest",
    title: "Signs Of Life",
    text: "The raiders had one of the vault dwellers' wrist mounted computers on them. With this, you should be able to contact the people on the inside of the vault or interact with its computer.",
    options: [
      {
        optionText: "There are some supposed exiles from the vault around town. One of them might be able to show you how to use the Pip-Boy.<br><br><strong>[Quest] any [Settlement] &bull; [I] [L] 4</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [71]
      },{
        optionText: "The Pip-Boy should be able to interface directly with the vault enterance, but you'll need an extra set of hands there.<br><br><strong>[Quest] Vault 84 &bull; Any companion</strong>",
        result: "",
        aftermath: "4 XP",
        trash: true,
        add: [71]
      }
    ]
  },{
    id: 69,
    location: "Quest",
    title: "Crack It Open!",
    text: "The information around town says that there are people locked away inside the vault, but they are somewhat (very) hostile to outsiders. Perhaps you can break in?",
    options: [
      {
        optionText: "Crack open the giant metal door in the mountains.<br><br><strong>[Quest] Vault 84 &bull; [S] [E] 4</strong>",
        result: "",
        aftermath: "4 XP",
        trash: true,
        add: [70]
      },{
        optionText: "Overload a nearby substation to force the door open.<br><br><strong>[Quest] Red Rocket Station &bull; [P] [I] 4</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [70]
      }
    ]
  },{
    id: 70,
    location: "Vault84",
    title: "",
    text: "A line of armed guards stands behind the vault enterance that was forced open. 'What is the meaning of this!? If you think you are just going to force your way into this factory, you are sorely mistaken.'",
    options: [
      {
        optionText: "Convince them you are friendly &bull; [C] [L] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> After a lengthy conversation, you earn the trust of the captain, and he introduces you to the overseer. She agrees to give you access to the vault but warns you that you will be watched every step of the way and that 'the vote is coming.' Whatever that means.",
            aftermath: "Shuffle cards 072-079 and randomly add a number of them equal to survivors, and then trash the rest",
            trash: true,
            add: [72,73,74,75,76,77,78,79]
          },{
            result: "<strong>Fail:</strong> You are violently led away.",
            aftermath: "Suffer 3 damage",
            trash: true,
            add: [70]
          }
        ]
      },{
        optionText: "Walk away",
        result: "This seems like a bad idea. You turn around and walk away, leaving them in the broken doorway.",
        aftermath: "",
        trash: true,
        add: [70]
      }
    ]
  },{
    id: 71,
    location: "Vault84",
    title: "",
    text: "A figure stands with open arms, and flanking guards, behind the door. 'Welcome to Vault 84. I'm Overseer Hayes, the leader of this vault. We haven't let in outsiders in over 100 years, so I hope you realize how exceptional this is. But after certain recent events... well, let's just say, when your stolen Pip-Boy connected, I saw an opportunity.'",
    options: [
      {
        optionText: "Thank her and ask about the rules of this vault.",
        result: "'Don't start any trouble and you should be fine. However... we have an annual vote to exile dangerous people from the vault. Even with my blessing, you're not immune.'",
        aftermath: "Shuffle cards 072-079 and randomly add a number of them equal to survivors, and then trash the rest.",
        trash: true,
        add: [72,73,74,75,76,77,78,79]
      },{
        optionText: "Walk away",
        result: "This seems like a bad idea. You turn around and walk away, leaving the overseer with a confused expression.",
        aftermath: "",
        trash: true,
        add: [71]
      }
    ]
  },{
    id: 72,
    "if/then": ["Vault84.length===0","add=[80]"],
    location: "Vault84",
    title: "",
    text: "A woman in a labcoat inspects you as you enter the vault lab. 'I heard outsiders had been let in. And so soon before the vote!' She sees you eying her Pip-Boy. 'You can have one if you let me run some tests on you. You will be exposed to very little radiation...relatively.'",
    options: [
      {
        optionText: "Agree to the tests",
        result: "Dr. Merkins straps you in with obvious glee. After she finishes, she gives you a Pip-Boy.",
        aftermath: "Gain the 'Pip-Boy' unique asset",
        trash: true,
        add: false
      },{
        optionText: "Ask about the technicalities of the annual 'vote' &bull; [I] [I] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> 'Once per year, we poll the entire vault for who they think is a 'traiter.' The person with the most votes is exiled, though getting any votes can leave you ostracized. For what it's worth, I think you're alright.'",
            aftermath: "Keep this card; it is an endorsement",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> She looks over her glasses at you. 'I'm not sure I should trust you with that information.'",
            aftermath: "",
            trash: true,
            add: false
          }
        ]
      }
    ]
  },{
    id: 73,
    "if/then": ["Vault84.length===0","add=[80]"],
    location: "Vault84",
    title: "",
    text: "You pass a mechanic as you walk through the confined halls of the vault. He grumbles as he works on a section of the wall. 'If you ask me, the damn overseer is the traitor for bringing these outsiders in here. We should vote her out! We don't want to meet the same fate as Vault 109.'",
    options: [
      {
        optionText: "What was that about Vault 109",
        result: "'Don't know exactly, but the maintenance records whow we used to swap supplies. They had some serious hardware before we lost contact.'",
        aftermath: "4 XP",
        trash: true,
        add: [83]
      },{
        optionText: "Show him he has nothing to fear by helping him with his work &bull; [E] [E] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> He warms to you as you help and promises he won't be voting for you",
            aftermath: "Keep this card; it is an endorsement",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> You only make things worse. 'If I didn't know better, I would think you were trying to sabotage us,' he says with a glare.",
            aftermath: "",
            trash: true,
            add: false
          }
        ]
      }
    ]
  },{
    id: 74,
    "if/then": ["Vault84.length===0","add=[80]"],
    location: "Vault84",
    title: "",
    text: "A middle-aged woman in a vault jumpsuit greets you. 'Again, welcome to Vault 84. Your arrival was timely, otherwise you would have never been allowed inside. We need some fresh perspectives around here.'",
    options: [
      {
        optionText: "Wait until she's distracted and sneak a peek at her computer",
        result: "Log: 'The concept of 'the traitor' is a pre-war fabrication perpetuated for psychological study. I thought this tradition harmless until this year when suspicion fell on me. Perhaps some fresh blood would help.'",
        aftermath: "4 XP &bull; Keep this card. If 080 would be added, or was added by this card), add 081 instead.",
        trash: true,
        add: false
      },{
        optionText: "Convince her to back you in the coming vote &bull [C] [C] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> She happily claps her hand on your back. 'Don't worry, you have my endorsement!'",
            aftermath: "Keep this card; it is an endorsement",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> 'I'll do what I can, but you're on your own.'",
            aftermath: "",
            trash: true,
            add: false
          }
        ]
      }
    ]
  },{
    id: 75,
    "if/then": ["Vault84.length===0","add=[80]"],
    location: "Vault84",
    title: "",
    text: "A rough-looking man in security gear approaches you. 'I'm not sure what your goal is, outsider, but I don't like you being here, especially so soon before the vote. This feels like a plot.'",
    options: [
      {
        optionText: "Ask him about all the gear he has",
        result: "'Oh yeah, our vault is actually fairly well supplied. As an honorary resident, you have access to the supply stock. Though we'll be watching.'",
        aftermath: "Choose 1 item from the shop",
        trash: true,
        add: false
      },{
        optionText: "Offer to help with security &bull; [S] [S} 4",
        result: [
          {
            result: "<strong>Succeed:</strong> He looks you up and down. 'Alright, you look the type, and I wouldn't mind keeping you outsiders close to make sure you don't try to pull anything.'",
            aftermath: "Keep this card; it is an endorsement",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> He scoffs. 'Like I'd trust an outsider!'",
            aftermath: "",
            trash: true,
            add: false
          }
        ]
      }
    ]
  },{
    id: 76,
    "if/then": ["Vault84.length===0","add=[80]"],
    location: "Vault84",
    title: "",
    text: "You are stopped in the hallway by a well-dressed woman. She eyes you up and down. 'Goodness, you're a frightful sight! I run a charity here that helps the exiles we send out each year. It looks like you could use the help yourself!'",
    options: [
      {
        optionText: "Accept her charity",
        result: "'Here you go darling. Hopefully you can at least get started cleaning yourself up!'",
        aftermath: "6 Caps",
        trash: true,
        add: false
      },{
        optionText: "Make a donation to her fund &bull; Spend 4 Caps",
        result: "'Oh, looks can be deceiving! Thank you for your generous gift. I will remember this.'",
        aftermath: "Keep this card; it is an endorsement",
        trash: true,
        add: false
      }
    ]
  },{
    id: 77,
    "if/then": ["Vault84.length===0","add=[80]"],
    location: "Vault84",
    title: "",
    text: "You step into a room filled with computers, microphones, and broadcasting equipment. A weedy man shakes your hand vigorously. 'You have no idea how exciting it is to meet you! My only interaction with the outside world is through these machines, and the other vault fell silent long before I was born!'",
    options: [
      {
        optionText: "Ask him about this 'other vault.'",
        result: "'That was long before my time, but we used to be in contact with another vault. There's still a signal, but it's just broadcasting garbage these days.'",
        aftermath: "4 XP",
        trash: true,
        add: [85]
      },{
        optionText: "You notice something on his instruments &bull; [P] [P] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> You isolate a frequency it seems he was missing. A new signal breaks through the static. 'How did you do that? This is fantastic! You are welcome here any time!'",
            aftermath: "Keep this card; it is an endorsement",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> 'What the hell are you doing?! Get out!'",
            aftermath: "",
            trash: true,
            add: false
          }
        ]
      }
    ]
  },{
    id: 78,
    "if/then": ["Vault84.length===0","add=[80]"],
    location: "Vault84",
    title: "",
    text: "You enter what is clearly a medical bay and jump at the sight of a multi-limbed robot wielding syringes, scalpels, and other medical implements. The robot tuts at the sight of you. 'You have taken such poor care of your body! I can fix that for you!'",
    options: [
      {
        optionText: "Let the robot fix you up",
        result: "As it works on you, it makes small talk. 'Your radiation damage reminds me of the case data sent over from the other location...'",
        aftermath: "Recover all HP and [Radiation]",
        trash: true,
        add: [84]
      },{
        optionText: "Ask the robot if it is involved in this whole 'vote' thing &bull; [L] [L] 4",
        result: [
          {
            result: "'Yes, I get a vote. But don't you worry! After this full analysis of your physiology, I have decided you do not have the biology of a traitor.'",
            aftermath: "Keep this card; it is an endorsement",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong>'Oh heavens, no.'",
            aftermath: "",
            trash: true,
            add: false
          }
        ]
      }
    ]
  },{
    id: 79,
    "if/then": ["Vault84.length===0","add=[80]"],
    location: "Vault84",
    title: "",
    text: "You round a corner, and a small kid slams into you at full sprint, which knocks a book out of her hands. 'Hey! Watch where you're going!' You pick the book up and hand it to her. It looks like it was once some kind of manual with '109' on the front, but now it's covered in drawings.",
    options: [
      {
        optionText: "Ask her if you can see her book.",
        result: "She gives you a defiant look. 'Okay, but don't ruin any of my pictures!'",
        aftermath: "4 XP",
        trash: true,
        add: [82]
      },{
        optionText: "Offer to play with her &bull; [A] [A] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> You keep up with her even as she weaves through the confines of the vault. 'You're fun! I'm gonna tell Mommy all about the fun we had!'",
            aftermath: "Keep this card; it is an endorsement",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> 'If you can keep up!'... you can't.",
            aftermath: "",
            trash: true,
            add: false
          }
        ]
      },{
        optionText: "",
        result: "",
        aftermath: "",
        trash: false,
        add: false
      },{
        optionText: "",
        result: "",
        aftermath: "",
        trash: false,
        add: false
      }
    ]
  },{
    id: 80,
    location: "Vault84",
    title: "",
    text: "The time for the vote has come! Everyone in Vault 84 gathers in the main hall and begins casting votes into a large metal box. Many people glare at the outsiders present. This is not looking good for you...",
    options: [
      {
        optionText: "Participate in the vote",
        result: "",
        aftermath: "The survivor on Vault 84 with the most endorsements draws [Agenda Card] x 2<br><br>Each survivor on Vault 84 with the fewest endorsements suffers 3 damage and moves 1 space<br><br>If more than one survivor on Vault 84 is tied for the most endorsements, each draws [Agenda Card]",
        trash: true,
        add: false
      }
    ]
  },{
    id: 81,
    location: "Vault84",
    title: "",
    text: "The time for the vote has come! But as everyone in Vault 84 gathers in the main hall, a projector flickers on, displaying the Overseer's documentation. The traitor, the vote, the exiles, it has all been a lie all this time. They have been sending innocent people out to their doom! The crowd turns angrily to Overseer Hayes.<br><br>In the end, she is given the same fate to which she doomed all the others: she is exiled to the wasteland with nothing but the vault suit on her back. All of the vault is grateful to you for exposing the truth.",
    options: [
      {
        optionText: "Accept the vault's thanks",
        result: "",
        aftermath: "The survivor with card 074 draws [Agenda Card] x 2<br><br>All other survivors on Vault 84 draw [Agenda Card]<br><br>All survivors discard all endorsements",
        trash: true,
        add: false
      }
    ]
  },{
    id: 82,
    location: "Quest",
    title: "Boom!!!",
    text: "A little girl at Vault 84 had a manual from Vault 109. One page stood out: the one that warned residents about use of the 'Fat Man' (accompanied by the girl's drawing of a large explosion with the word 'BOOM!')",
    options: [
      {
        optionText: "Do some research on this 'Fat Man' first.<br><br><strong>[Quest] Robco Factory &bull; [P] [I] [L] 5</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [86,87]
      },{
        optionText: "Go right to Vault 109 and start digging around.<br><br><strong>[Quest] Vault 109 &bull; Suffer 2 [Radiation]</strong>",
        result: "",
        aftermath: "[Loot] x 3 &bull; 3 XP",
        trash: true,
        add: [86,87]
      }
    ]
  },{
    id: 83,
    location: "Quest",
    title: "Serious Hardware",
    text: "The mechanic mentioned that Vault 109 had some 'serious hardware.' If you can risk the radiation of the vault, maybe some of it is still down there?",
    options: [
      {
        optionText: "The super mutants have been seen down there. Maybe some of them have already brought it up?<br><br><strong>Kill a Super Mutant Brute</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [88,89]
      },{
        optionText: "A few rads have never scared you.<br><br><strong>[Quest] Vault 109 &bull; Suffer 2 [Radiation]</strong>",
        result: "",
        aftermath: "[Loot] x 3 &bull; 3 XP",
        trash: true,
        add: [88,89]
      }
    ]
  },{
    id: 84,
    location: "Quest",
    title: "Hippocratic Oath",
    text: "The medical robot at Vault 84 let something slip about radiation cases at the 'other location.' Was it referring to Vault 109? And if so, this wasn't new case data, right?",
    options: [
      {
        optionText: "If anyone would know about Vault 109 still being used for secret experiments, it would be some of those underground 'doctors' at the Tower.<br><br><strong>[Quest] The Tower &bull; [S] [C] [L] 5</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [92,93]
      },{
        optionText: "Check it out directly.<br><br><strong>[Quest] Vault 109 &bull; Suffer 2 [Radiation]</strong>",
        result: "",
        aftermath: "[Loot] x 3 &bull; 3 XP",
        trash: true,
        add: [92,93]
      }
    ]
  },{
    id: 85,
    location: "Quest",
    title: "Chasing Static",
    text: "You have a frequency from the Vault 84 radio tech that's supposedly from Vault 109. If you had the equipment to triangulate it, you could locate its radio equipment.",
    options: [
      {
        optionText: "Extract the necessary equipment from a robot.<br><br><strong>Kill a Protectron</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [90,91]
      },{
        optionText: "Just go directly to Vault 109 and look around.<br><br><strong>[Quest] Vault 109 &bull; Suffer 2 [Radiation]</strong>",
        result: "",
        aftermath: "[Loot] x 3 &bull; 3 XP",
        trash: true,
        add: [90,91]
      }
    ]
  },{
    id: 86,
    location: "Vault109",
    title: "",
    text: "You enter a cavernous room. It is too dark to see, and you fumble around for some way to get more light. You find a panel and flip on the lights using the vault's reserve power. Only several of the old lights flicker on, but it is enough to see a... fashion runway? What was going on in this vault?<br><br>As the last light flickers on, it casts a long, monstrous shadow across the room. Looks like there is something living here!",
    options: [
      {
        optionText: "Fight the creature &bull; Draw and fight [Monster]",
        result: [
          {
            result: "<strong>Succeed:</strong> You snatch a victory from the jaws of defeat... and the jaws of the creature.",
            aftermath: "You may encouter the next card<br>At the end of your turn, add this card",
            trash: true,
            add: [86]
          },{
            result: "<strong>Fail:</strong> It gets away before you can defeat it. You leave the vault, angry with your failure.",
            aftermath: "",
            trash: true,
            add: [86]
          }
        ]
      },{
        optionText: "Sneak way before it notices you",
        result: "You step quickly and quietly toward the nearest door, fervently hoping you don't attract attention",
        aftermath: "",
        trash: true,
        add: [86]
      }
    ]
  },{
    id: 87,
    location: "Vault109",
    title: "",
    text: "You enter a large room. Shelves loom around you in the haze. You realize with excitement that this used to be the vault's armory! The super mutants have made off with most of the weaponry, but there might be some things that were too small for their big, meaty fingers. There also looks to be a display case on the wall that they never managed to break open. Inside is what looks like some kind of oversized missile launcher.",
    options: [
      {
        optionText: "Spend your time breaking into the display case",
        result: "It takes some time, but you get into the case. The missile launcher is massive!",
        aftermath: "Gain the 'Fat Man' unique asset",
        trash: true,
        add: false
      },{
        optionText: "Ignor the case. There are organizations that could use all this firepower.",
        result: "You manage to carry out a large amount of useful weapons and armor.",
        aftermath: "[Agenda Card]",
        trash: true,
        add: false
      }
    ]
  },{
    id: 88,
    location: "Vault109",
    title: "",
    text: "This hallway is mostly still intact. The various rooms along it have been made up like high-end fashion stores. You see signs for Mary Mary, Ticknor and Fields, Fallon's, and many others.<br><br>As you are looking at some of the merchandise, which has aged nearly to tatters, you hear someone! You see a super mutant working its way through one of the stores. Is it... wearing a vest? What the hell?<br><br>Either way, it's blocking your way forward.",
    options: [
      {
        optionText: "Fight the oddly stylish super mutant &bull; Draw and fight [Super Mutant]",
        result: [
          {
            result: "<strong>Succeed:</strong> You defeat the well-dressed super mutant with a triumphant shout!",
            aftermath: "You may encounter the next card<br>At the end of your turn, add this card",
            trash: true,
            add: [88]
          },{
            result: "<strong>Fail:</strong> It gets away before you can defeat it. You leave to salvage your wounded pride.",
            aftermath: "",
            trash: true,
            add: [88]
          }
        ]
      },{
        optionText: "Sneak out of the vault",
        result: "This is all too weird. You'be had enough of this vault for now.",
        aftermath: "",
        trash: true,
        add: [88]
      }
    ]
  },{
    id: 89,
    location: "Vault109",
    title: "",
    text: "You come upon a large lift that likely leads back to the surface. It is even independently powered by a fusion core and is still functional! But then you spot a looming shape in the back of this room -- a suit of power armor!",
    options: [
      {
        optionText: "Take the fusion core from the lift to power the armor",
        result: "The armor comes online as you slide the fusion core into the socket.",
        aftermath: "Gain the 'T-60 Power Armor' unique asset",
        trash: true,
        add: false
      },{
        optionText: "Leave the fusion core in the lift to bypass the threats of the vault",
        result: "",
        aftermath: "Search the [Vault 109] deck and trash 086, 088, 090, 092 if they are in it",
        trash: [86,88,89,90,92],
        add: false
      }
    ]
  },{
    id: 90,
    location: "Vault109",
    title: "",
    text: "This area seems to have suffered a decent amount of structural damage from whatever destroyed this vault long ago. Charred fashion posters line the walls.<br><br>The floor creaks as you step forward. You're not sure it will hold your weight.",
    options: [
      {
        optionText: "Risk the hallway to push onward &bull; [A] [L] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> The hallway wrenches apart as you cross. You deftly climb and make it to safety before you can be pulled down with the wreckage.",
            aftermath: "3 XP &bull; You may encounter the next card<br>At the end of your turn, add this card",
            trash: true,
            add: [90]
          },{
            result: "<strong>Fail:</strong> The hallway wrenches apart as you cross, and you are pulled down with the wreckage. You awaken in a cavern beneath the vault. After some wandering, you find your way back out into the wasteland.",
            aftermath: "Suffer 4 damage &bull; Move 1 space",
            trash: true,
            add: [90]
          }
        ]
      },{
        optionText: "Turn back and leave the vault",
        result: "You don't feel like dying today.",
        aftermath: "",
        trash: true,
        add: [90]
      }
    ]
  },{
    id: 91,
    location: "Vault109",
    title: "",
    text: "Jackpot! Up ahead you see a sign leading you to the overseer's office. There's got to be some good loot or information in there. To your surprise, the computer boots up on reserve power. This computer hooks into all sorts of communication and surveillance systems. This could be of massive use. The contents of this computer are invaluable!",
    options: [
      {
        optionText: "Take all the information you can",
        result: "Loaded with decades of data you can put to good use, you head back to the wasteland",
        aftermath: "[Agenda Card] x 2",
        trash: true,
        add: false
      },{
        optionText: "Smash the computer",
        result: "Why would you do that?!?",
        aftermath: "",
        trash: true,
        add: false
      }
    ]
  },{
    id: 92,
    location: "Vault109",
    title: "",
    text: "You open one of the heavy metal doors and are greeted by a blast of scalding green air. Your eyes and lungs burn as you back away from the billowing cloud.<br><strong>Suffer 2 damage and 1 [Radiation]</strong>",
    options: [
      {
        optionText: "Take more radiation to push onward",
        result: "Well, that was just awful. You continue deeper into the vault.",
        aftermath: "Suffer 3 [Radiation]<br>3 XP &bull; You may encounter the next card<br>At the end of your turn, add this card",
        trash: true,
        add: [92]
      },{
        optionText: "Turn back and leave the vault",
        result: "Whatever happened here, it was pretty bad. You're getting out of this place.",
        aftermath: "",
        trash: true,
        add: [92]
      }
    ]
  },{
    id: 93,
    location: "Vault109",
    title: "",
    text: "You walk down a hallway lined with multiple small cells, each with a window looking into it. To your surprise, there are people inside! They are... very well dressed. They all wear elegant (if tattered) clothing. Many of them are even wearing make-up. They jump with excitement when they see you. 'Help us! Please!'",
    options: [
      {
        optionText: "Releasing them all would likely attract attention",
        result: "They thank you as they flee, but soon after, you hear loud footsteps.",
        aftermath: "Draw and fight [Super Mutant]<br>Become <em>Idolized</em> &bull; [Agenda Card]",
        trash: true,
        add: false
      },{
        optionText: "Releasing just one would be safer",
        result: "Going through, you choose the person that would look the most useful and leave the rest.",
        aftermath: "Reveal [Item] cards until you find a companion; take that card, ignoring its requirements; discard the rest",
        trash: true,
        add: [93]
      }
    ]
  },{
    id: 94,
    location: "Quest",
    title: "The Children of Atom",
    text: "A missionary stands in the street, preaching a new religion called the Children of Atom. Many followers gather at Hofmann farm, inviting all to 'embrace Atom's glow.'",
    options: [
      {
        optionText: "Bring a new recruit for their favor.<br><br><strong>[Quest] Hofmann Farm &bull; Discard a companion</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [95]
      },{
        optionText: "The word of Atom calls you. Embrace the glow.<br><br><strong>[Quest] Irradiated space &bull; [E] 3</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>Suffer 2 [Radiation]",
        trash: true,
        add: [96]
      }
    ]
  },{
    id: 95,
    location: "Quest",
    title: "A Growing Following",
    text: "Under the command of a singular new recruit, the Church of the Children of Atom has gone from a couple meager missionaries to an entire organization in a very short time. Everywhere you go, you can hear the word of Atom being preached under their leadership of the Confessor.",
    options: [
      {
        optionText: "Gather recruits to your side.<br><br><strong>[Quest] any [Settlement] &bull; Suffer 2 [Radiation]</strong>",
        result: "",
        aftermath: "Reveal [Item] cards until you find a companion; take that card, ignoring its requirements; discard the rest.",
        trash: true,
        add: [97]
      },{
        optionText: "Local bounty hunters are too afraid to take bounties on the Confessor, but you have more convincing ways to get someone to agree to do the job...<br><br><strong>Kill a Bounty Hunter</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [98]
      }
    ]
  },{
    id: 96,
    location: "Quest",
    title: "Joinnnn Usssssss!",
    text: "You see the light of Atom's glow. The only salvation for this forsaken wastelad is to spread the light to non-believers.",
    options: [
      {
        optionText: "Convince everyone to band together under Atom's glow.<br><br><strong>[Quest] Irradiated space &bull; More than half of all survivors must be on irradiated spaces</strong>",
        result: "",
        aftermath: "Each survivor on and irradiated space: [Agenda Card]",
        trash: true,
        add: [97]
      },{
        optionText: "Stop the cult before it gets completely out of hand.<br><br><strong>[Quest] Hofmann Farm &bull; Draw and fight [Human]; appy +1 to its level</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [98]
      }
    ]
  },{
    id: 97,
    location: "Quest",
    title: "The Wasteland Glows",
    text: "The Church of the Children of Atom has grown to a huge size. The Confessor at its head leads his flock from one of the most opulent estates still left in the wasteland.<br><br><strong>At the end of the round, each survivor rolls 1 VATS die for each companion he or she has. For each [Body+Limbs 2 Hits], suffer 1 [Radiation]</strong>",
    options: [
      {
        optionText: "Bring new devout to the Confessor.<br><br><strong>[Quest] Pendleton Estate &Bull; Discard a companion</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: false,
        add: false
      },{
        optionText: "End the Confessor's reign.<br><br><strong>[Quest] Pendleton Estate &bull; Draw and fight [Human]; apply +1 to its level</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>Gain the 'Shishkebab' unique asset",
        trash: true,
        add: [99]
      }
    ]
  },{
    id: 98,
    location: "Quest",
    title: "The Last Fanatics",
    text: "The Children of Atom begin to dwindle, but several members make a final stand with one of their warheads.<br><br><strong>Place a quest marker at the highest-level [Settlement]<br>At the end of each round, place 1 Cap on this card. When there are 3 Caps on this card, automatically resolve objective 2 (no one gets [Agenda Card]</strong>",
    options: [
      {
        optionText: "Approach the bom to defuse it.<br><br><strong>[Quest] The bomb &bull; [P] [I] [A] [L] 5</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [99]
      },{
        optionText: "Embrace Atom's glow: detonate the bomb!<br><br><strong>[Quest] The bomb</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>Each survivor adn enemy withing 2 spaces of the bomb is killed",
        trash: true,
        add: false
      }
    ]
  },{
    id: 99,
    location: "Quest",
    title: "Remnants Of The Cult",
    text: "There is an ongoing bounty on remaining members of the Children of the Atom. Many of them have fled to the irradiated corners of the wasteland.",
    options: [
      {
        optionText: "Explore areas to which they might have fled.<br><br><strong>Explore an unexplored tile</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>Suffer 2 [Radiation]",
        trash: false,
        add: false
      }
    ]
  },{
    id: 100,
    location: "Random",
    title: "",
    text: "The gravel crunches under your feet as you enter the... hey, what are you doing reading this card?! You know you're spoiling your own fun by reading stuff in the card library right?",
    options: [
      {
        optionText: "Choose to keep spoiling everything",
        result: "Fine, I see there's no stopping you. Go on then.",
        aftermath: "Continue reading spoilers",
        trash: false,
        add: false
      },{
        optionText: "Stop reading the card library",
        result: "Good choice! If you can't wait, there are some solo-play rules to play the game by yourself. Then you can read all these cards as you play through the game!",
        aftermath: "Put down the card library",
        trash: false,
        add: false
      }
    ]
  },{
    id: 101,
    location: "Quest",
    title: "I'm Not Saying It Was Aliens...",
    text: "Brahmin habe been disappearing from Hoffman farm. Stories have circulated about strange lights in the sky on nights of the disappearances, but you know it's probably just a Deathclaw or other predator... right?",
    options: [
      {
        optionText: "Defend the brahmin pens at night.<br><br><strong>[Quest] Hofmann Farm &bull; Draw and fight [Human]; it gains the [Radiation] icon</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; [Loot]",
        trash: true,
        add: [102,103]
      },{
        optionText: "Activate an old radio to monitor signals at night.<br><br><strong>[Quest] HWY 74 &bull; [E] [I] 3</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>Stage 104 and place your figure on that card",
        trash: true,
        add: [104,105]
      }
    ]
  },{
    id: 102,
    location: "Quest",
    title: "...But It Was Aliens",
    text: "Creatures come for the brahmin in the night, but you take them down. These are no Deathclaws. They are small, grey humanoids wearing high-tech suits. Some new kind of mutant? There's no way they could be...",
    options: [
      {
        optionText: "The local Brotherhood of Steel chapter would pay handsomely for this information.<br><br><strong>Encounter any [Settlement] until you find the Brotherhood of Steel</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [107]
      },{
        optionText: "This will bring unwanted attention. Pay to cover it up.<br><br><strong>[Quest] Any level-3 or higher [Wasteland]<br>Spend 5 Caps</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [125]
      }
    ]
  },{
    id: 103,
    location: "Settlement",
    title: "",
    text: "Many people around the settlement are whispering about a small group of Brotherhood of Steel representatives who arrived recently.",
    options: [
      {
        optionText: "Avoid the Brotherhood and go shopping",
        result: "You're here for supplies, not conversation.",
        aftermath: "Shop [Settlement]",
        trash: true,
        add: [103]
      },{
        optionText: "Tell the Brotherhood members about the aliens &bull; [C] 3",
        result: [
          {
            result: "<strong>Succeed:</strong> After some convincing, the scribe in the group becomes interested in your information. The Brotherhood is grateful for the information.",
            aftermath: "Complete the 'Alien Autopsy' quest<br>2 Caps",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> The scribe in the group laughs off your claims of aliens as 'wastelander foolishness.'",
            aftermath: "",
            trash: true,
            add: [103]
          }
        ]
      }
    ]
  },{
    id: 104,
    location: "Quest",
    title: "The Mothership",
    text: "The radio gets a response. You accidentally contacted an alien ship!<br><br><strong>Survivors that are on 'The Mothership' can perform only the actions on this card:</strong>",
    options: [
      {
        optionText: "Fight your way to the bridge and bring the ship down to escape.<br><br><strong>Draw and fight [Human]; it gains the [Radiation] icon<br>Then, test [I] 4</strong>",
        result: [
          {
            result: "<strong>Succeed:</strong> ",
            aftermath: "3 XP<br>place your figure on an empty space",
            trash: true,
            add: [106,107]
          },{
            result: "<strong>Fail:</strong>",
            aftermath: "Remove a Cap from this card",
            trash: false,
            add: false
          }
        ]
      },{
        optionText: "Attempt to communicate with the aliens and make a deal.<br><br><strong>[Quest] [C] 3 &bull; place a Cap on this card.<br><br>Place the third Cap on this card</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>Place your figure on any empty space",
        trash: true,
        add: false
      }
    ]
  },{
    id: 105,
    "if/then": ["!104", "trash=true"],
    location: "Wasteland",
    title: "",
    text: "<strong>If 'The Mothership' is no longer staged, trash this card and encounter the next card.</strong><br><br>You approach the structure just as the last light of the sun is waning. Suddenly, a bright light flashes from the sky, illuminating your surroundings. You feel yourself lifting off the ground. Are you floating?!",
    options: [
      {
        optionText: "Resist the forces pulling you up &bull; [E] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> You resist the pull of the invisible force and flee to shelter to continue searching.",
            aftermath: "[Loot] x [Wasteland]",
            trash: false,
            add: false
          },{
            result: "<strong>Fail:</strong> You struggle to no avail. You are lifted high into the air by an invisible force, and you soon find yourself in a sterile, metal environment.",
            aftermath: "Place your figure on 'The Mothership'",
            trash: false,
            add: false
          }
        ]
      },{
        optionText: "Let it take you; this should be interesting",
        result: "You are lifted high into the air by an invisible force, and you soon find yourself in a sterile, metal environment.",
        aftermath: "Place your figure on 'The Mothership'",
        trash: false,
        add: false
      },{
        optionText: "'The Mothership' is no longer staged",
        result: "",
        aftermath: "Encounter the next card.",
        trash: true,
        add: false
      }
    ]
  },{
    id: 106,
    location: "Wasteland",
    title: "",
    text: "A pillar of smoke rises near the site you were planning to explore. You approach the source of the smoke and see a large, sleek, metal craft smoldering in a crater. A green liquid leaks from the craft. It could be dangerous.",
    options: [
      {
        optionText: "Brave the radiation to explore &bull; [E] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> You make your way past the leaking radiation and into the massive craft. Bodies of strange, gray creatures litter the inside. You take a strange-looking weapon from one of them.",
            aftermath: "Gain the 'Alien Blaster' unique asset",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong>The heat and radiation emanating from the craft prove too much for you.",
            aftermath: "Suffer 2 [Radiation]",
            trash: true,
            add: false
          }
        ]
      },{
        optionText: "Leave the crash site alone",
        result: "Yeah... that radiation looks pretty nasty. You leave the crash site to someone else and go about your normal looting.",
        aftermath: "[Loot] x [Wasteland]",
        trash: true,
        add: [106]
      }
    ]
  },{
    id: 107,
    location: "Quest",
    title: "Brotherhood Airship Arrives",
    text: "Having received information about strange occurrences, the Brotherhood has sent one of their airships to the wasteland.<br><br><strong>Place a quest marker on any space of the starting tile. This is the Brotherhood ship.<br><br>At the end of each round, the airship moves 1 space toward the highest-level [Robot] on the map.</strong>",
    options: [
      {
        optionText: "Help gather local technology for analysis.",
        result: "Kill any [Robot]",
        aftermath: "[Agenda Card]",
        trash: true,
        add: false
      },{
        optionText: "That airship looks like it has some pretty fancy gear on board. Maybe you could 'borrow' some.",
        result: "[Quest] Airship &bull; [C] [A] [L] 5",
        aftermath: "Gain the 'T-60e Power Armor' unique asset",
        trash: true,
        add: [109,110]
      }
    ]
  },{
    id: 108,
    location: "Quest",
    title: "Research And Development",
    text: "Intrigued by the samples presented to them, the Brotherhood is now offering membership and a set of their power armor for more.<br><br><strong>Do not discard the airship.<br><br>At the end of each round, the airship moves 1 space toward the highest-level [Wasteland] on the map.</strong>",
    options: [
      {
        optionText: "Take out one of the more advanced Robco prototypes still running.<br><br><strong>Kill a Sentry Bot</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>Gaine the 'T-60e Pwer Armor' unique asset",
        trash: true,
        add: [111]
      },{
        optionText: "That sounds like a lot of work. You bet someone on board would be willing to bend the rules for some Caps.<br><br><strong>[Quest] Airship &bull; Spend 7 Caps</strong>",
        result: "",
        aftermath: "Gain the 'T-60e Power Armor' unique asset",
        trash: true,
        add: [111]
      }
    ]
  },{
    id: 109,
    location: "Quest",
    title: "Brotherhood Control",
    text: "Enraged by the theft of their power armor, the Brotherhood has put the wasteland on total lockdown!<br><br><strong>Do not discard the airship.<br><br>At the end of each round, the airship moves 1 space toward the highest-level [Settlement] on the map.<br><br>To encounter any [Wasteland], you must first draw and fight [Human]; apply +1 to its level.</strong>",
    options: [
      {
        optionText: "Get the airship to leave once and for all<br><br><strong>Encounter any [Wasteland] until you locate the Brotherhood vertibird.</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: false
      },{
        optionText: "Lay down your arms in front of the Brotherhood.<br><br><strong>[Quest] Airship &bull; Discard a weapon</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [111]
      }
    ]
  },{
    id: 110,
    location: "Wasteland",
    title: "",
    text: "You hear the loud whine of an engine as a Brotherhood vertibird appears over the horizon. Dust swirls and bites your face as it lands nearby.",
    options: [
      {
        optionText: "Take them out &bull; Draw and fight [Human]; apply +1 to its level",
        result: [
          {
            result: "<strong>Succeed:</strong> You step over their corpses into the vertibird. That should keep them away",
            aftermath: "Complete objective 1 of 'Brotherhood Control'<br>Place your figure in any empty space",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> You are forced to flee into the wasteland",
            aftermath: "Move 1 space",
            trash: true,
            add: [110]
          }
        ]
      },{
        optionText: "Talk them into leaving the wasteland &bull; [S] [C] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> They respect your strength and promise to bring word back to the airship",
            aftermath: "Complete objective 1 of 'Brotherhood Control'<br>Place your figure in any empty space",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> They tell you to run along.",
            aftermath: "Move 1 space",
            trash: true,
            add: [110]
          }
        ]
      },{
        optionText: "Head the other direction",
        result: "You get out of there before an altercation starts.",
        aftermath: "Move 1 space",
        trash: true,
        add: [110]
      }
    ]
  },{
    id: 111,
    location: "Quest",
    title: "Sticking Around",
    text: "With their main mission completed, it looks like the airship will continue hanging around the wasteland until it is given another mission.<br><br><strong>Do not discard the airship.<br><br>At the end of each round, the airship moves 1 space toward the survivor with the highest number of SPECIAL tokens.</strong>",
    options: [
      {
        optionText: "The Brotherhood is always grateful for more pre-war technology.<br><br><strong>Kill any [Robot]</strong>",
        result: "",
        aftermath: "4 Caps &bull; 2 XP",
        trash: false,
        add: false
      },{
        optionText: "Bring a still-functioning sample.<br><br><strong>[Quest] Airship &bull; Discard a <em>Robot</em> companion</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: false,
        add: false
      }
    ]
  },{
    id: 112,
    location: "Quest",
    title: "Growing Pains",
    text: "A recent group of raiders have started to hunt the local game for sport, leaving little food for a fledgling settlement in some nearby hills. They ask for whatever assistance you can spare.",
    options: [
      {
        optionText: "Dispose of the raider's leader.<br><br><strong>Kill a level-2 or higher [Human]</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; [Loot] x 2",
        trash: true,
        add: [114]
      },{
        optionText: "Provide some food for the settlement.<br><br><strong>Kill a level-2 or higher [Critter]</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; 3 Caps",
        trash: true,
        add: [113]
      }
    ]
  },{
    id: 113,
    location: "Quest",
    title: "Teach A Man To Fish...",
    text: "The fledgling settlement in the hills has enough food to hold them over, but they are eager to learn to hunt themselves. They are looking for hunters to prove themselves ready for the task.",
    options: [
      {
        optionText: "Gear up and meet the hunting party.<br><br><strong>[Quest] any [Wastelend] &bull; Have [Apparel] and [Weapon] equipped</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; 2 Caps",
        trash: true,
        add: [115]
      },{
        optionText: "Show them that you have no fear.<br><br><strong>Camp in a space adjacent to a level-3 enemy</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; 2 XP",
        trash: true,
        add: [115]
      }
    ]
  },{
    id: 114,
    location: "Quest",
    title: "Blood For Blood",
    text: "Although the inhabitants at the fledgling settlement are grateful that the raiders have been driven off, a new problem has arisen. The raiders will respect the borders set by the settlement, but only if the raider that was killed is replaced by another.",
    options: [
      {
        optionText: "Offer another to take his place.<br><br><strong>[Quest] Raider Camp &bull; Discard a companion</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: 113
      },{
        optionText: "Offer your services.<br><br><strong>[Quest] Raider Camp &bull; [S] [E] [A] 4</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; Become <em>Vilified</em>",
        trash: true,
        add: [116]
      }
    ]
  },{
    id: 115,
    location: "Quest",
    title: "The Hunt",
    text: "Many young men and women have volunteered to become hunters for the fledgling village in the hills, but few are adequately equipped. Nonetheless, they have named their quarry: the Yao Guai.",
    options: [
      {
        optionText: "Track and defeat the Yao Guai.<br><br><strong>Kill a Yao Guai</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>Become <em>Idolized</em>",
        trash: true,
        add: false
      },{
        optionText: "Call off the hunt and set up a trade agreement for these people -- no one needs to get killed.<br><br><strong>[Quest] Pendleton Estate &bull; [P] [C] [I] 5</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>Become <em>Idolized</em>",
        trash: true,
        add: false
      }
    ]
  },{
    id: 116,
    location: "Quest",
    title: "Collection Day",
    text: "An aggressive mutant has driven the raiders from their lair, so they need someone to convince the nearby settlements that collection day has come early this month.",
    options: [
      {
        optionText: "Collect the necessary funds.<br><br><strong>[Quest] any [Settlement] &bull; <em>Vilified</em> &bull; [S] [E] [C] 5</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>[Loot] x 3",
        trash: true,
        add: false
      },{
        optionText: "Clear out the raider's lair.<br><br><strong>[Quest] Raider Camp &bull; Draw and fight [Super Mutant]</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>4 Caps",
        trash: true,
        add: false
      }
    ]
  },{
    id: 117,
    location: "Quest",
    title: "I've Got A 'FEV'er",
    text: "A 'Doctor Diehl' has surfaced in one of the local settlements. No one knows exactly where she came from, but she is paying good Caps for a sample of a chemical she calls 'FEV'.",
    options: [
      {
        optionText: "You have a lead on a looter who stole something matching that description.<br><br><strong>Kill any enemy with a [Loot] icon</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [118]
      },{
        optionText: "You don't trust this doctor. Pay for some information on her.<br><br><strong>[Quest] Raider Camp &bull; Spend 3 Caps</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; [Loot] x 2",
        trash: true,
        add: [119]
      }
    ]
  },{
    id: 118,
    location: "Quest",
    title: "This Won't Hurt... Much",
    text: "Doctor Diehl's eyes twinkle with glee as she receives the chemical. Now she needs test subjects. WHoever can provide them the fastest. She'd rather not know the details.",
    options: [
      {
        optionText: "How bad could it be? Test the serum on yourself.<br><br><strong>[Quest] 2 or more spaces away from a named location &bull; Suffer 8 damage</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; Become a <em>Super Mutant</em>",
        trash: true,
        add: [120]
      },{
        optionText: "You could sneak it into the drinking water of the local populace. It'll probably turn out to be harmless, right?<br><br><strong>[Quest] any level-3 or higher [Settlement]</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [121,122,123,124]
      }
    ]
  },{
    id: 119,
    location: "Quest",
    title: "Mad Science",
    text: "Shocking no one, the information on Doctor Diehl reveals that she is practicing dangerous science. She had to flee east after she was run out of town for her experiments, some of which she brought with her.",
    options: [
      {
        optionText: "Elimintate this dangerous megalomaniac, though it means you'll risk exposure to her experiments.<br><br><strong>[Quest] any level-3 or higher [Settlement]<br>Draw and fight [Human]</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; If you suffer damage, become a <em>Super Mutant</em>",
        trash: true,
        add: [120]
      },{
        optionText: "Her work could be quite profitable. Kill one of her past experiments to sell on the black market.<br><br><strong>Kill any [Monster]</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; 5 Caps",
        trash: true,
        add: [125]
      }
    ]
  },{
    id: 120,
    location: "Quest",
    title: "I'm A Monster",
    text: "A blinding pain courses through you as the serum wracks and mutates your body. You've become a monster!<br><br>Doctor Diehl does not seem surprised by this. After taking her readings and doing some work, she outlines her plan for some kind of cure to this condition. It requires a sample from a 'prime specimen.'",
    options: [
      {
        optionText: "Acquire the sample to cure yourself.<br><br><strong><em>Super Mutant</em> &bull; Kill a Super Mutant Overlord</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>Lose the <em>Super Mutant</em> trait",
        trash: true,
        add: false
      },{
        optionText: "Screw curing mutants! That serum could sell well.<br><br><strong>Kill a Super Mutant Overlord</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; 5 Caps",
        trash: true,
        add: [125]
      }
    ]
  },{
    id: 121,
    location: "Quest",
    title: "Well, What Did You Think Would Happen?",
    text: "The populace is hideously transformed by the FEV, and the roving mob of grotesque super mutants quickly destroys a section of the settlement and makes its way into the wasteland.",
    options: [
      {
        optionText: "Eliminate the super mutants before they hurt people, or help them find a place to live peacefully.<br><br><strong>Encounter [Wasteland] until you find the super mutants</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; Place a Cap on this card",
        trash: false,
        add: false
      },{
        optionText: "Place third Cap on this card",
        result: "",
        aftermath: "",
        trash: true,
        add: [107]
      }
    ]
  },{
    id: 122,
    location: "Wasteland",
    title: "",
    text: "You hear loud noises echoing through the ruined areas. There are several super mutants in freshly ripped clothes running around and yelling with rage.",
    options: [
      {
        optionText: "Risk the raging mutants and try to calm them &bull; [S] [C] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> You calm them down and use hand signs to convince them to let you help them.",
            aftermath: "Complete 'Well, What Did You THink Would Happen?'",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> They aren't calming down! Uh oh...",
            aftermath: "Resolve option 2 on this card",
            trash: false,
            add: false
          }
        ]
      },{
        optionText: "Take them out! &bull; Draw and fight [Super Mutant]",
        result: [
          {
            result: "<strong>Succeed:</strong> They won't be threatening anyone.",
            aftermath: "Complete 'Well, What Did You THink Would Happen?'",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> They leave you for dead",
            aftermath: "",
            trash: true,
            add: [122]
          }
        ]
      },{
        optionText: "Leave them, you're here for loot",
        result: "You don't find as much as you try to avoid them.",
        aftermath: "[Loot] x [Wasteland] - 1",
        trash: true,
        add: [122]
      }
    ]
  },{
    id: 123,
    location: "Wasteland",
    title: "",
    text: "From afar you spot several hulking figures leaning over a pile of scrap. They are super mutants, trying to build a fire. Odd.",
    options: [
      {
        optionText: "Approach slowly and attempt to help them with their fire &bull; [I] [A] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> You help with the fire, and they seem to trust you. You help guide them.",
            aftermath: "Complete 'Well, What Did You THink Would Happen?'",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> Turns out they aren't big fans of sneaking.",
            aftermath: "Resolve option 2 on this card",
            trash: false,
            add: false
          }
        ]
      },{
        optionText: "Take them out! &bull; Draw and fight [Super Mutant]",
        result: [
          {
            result: "<strong>Succeed:</strong> They won't be threatening anyone.",
            aftermath: "Complete 'Well, What Did You THink Would Happen?'",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> They leave you for dead",
            aftermath: "",
            trash: true,
            add: [123]
          }
        ]
      },{
        optionText: "Leave them; you're here for loot",
        result: "You don't find as much as you try to avoid them.",
        aftermath: "[Loot] x [Wasteland] - 1",
        trash: true,
        add: [123]
      }
    ]
  },{
    id: 124,
    location: "Wasteland",
    title: "",
    text: "Something large is moving around out of sight. You sneak up to see a super mutant rummaging through the ruins. Is it looking for something?",
    options: [
      {
        optionText: "Help it search &bull; [P] [L] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> You find an old Grognak comic, and the mutant's face lights up. A remnant of its past life?",
            aftermath: "Complete 'Well, What Did You THink Would Happen?'",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> It attacks you on sight!",
            aftermath: "Resolve option 2 on this card",
            trash: false,
            add: false
          }
        ]
      },{
        optionText: "Take it out! &bull; Draw and fight [Super Mutant]",
        result: [
          {
            result: "<strong>Succeed:</strong> They won't be threatening anyone.",
            aftermath: "Complete 'Well, What Did You THink Would Happen?'",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> They leave you for dead.",
            aftermath: "",
            trash: true,
            add: [124]
          }
        ]
      },{
        optionText: "Leave it; you're here for loot",
        result: "You don't find as much as you try to avoid them.",
        aftermath: "[Loot] x [Wasteland] - 1",
        trash: true,
        add: [124]
      }
    ]
  },{
    id: 125,
    location: "Quest",
    title: "Disorganized Crime",
    text: "Emboldened by recent events, crime has begun to grow rapidly. Fueled by a drug trade along secret routes, this shadowy organization is becoming powerful quickly.",
    options: [
      {
        optionText: "One of the old, patrolling Protectrons along their routes may have records to expose them.<br><br><strong>Kill a Protectron</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; Become <em>Idolized</em>",
        trash: true,
        add: [126,127]
      },{
        optionText: "With the right investment, you can show them you're serious about joining their organization.<br><br><strong>[Quest] Raider Camp &bull; Spend 6 Caps</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; Become <em>Vilified</em>",
        trash: true,
        add: [128,129]
      }
    ]
  },{
    id: 126,
    location: "Quest",
    title: "In The Shadows",
    text: "Driven back into the shadows by information uncovered on their drug trade, the criminals are on the run but more dangerous than ever. In the dark corners of the wastes, they lurk just out of sight.",
    options: [
      {
        optionText: "Hunt down these remaining criminals and bring them to justice.",
        result: "Ecounter [Wasteland] until you locate the criminals",
        aftermath: "[Agenda Card]",
        trash: false,
        add: false
      }
    ]
  },{
    id: 127,
    location: "Wasteland",
    title: "",
    text: "You hear voices as you approach the site. It looks like some criminal remnants are still at work here, selling jet to some kids from the nearby settlement.",
    options: [
      {
        optionText: "Bring the criminals to justice &bull; <em>Idolized</em>",
        result: "You rush in and interrupt the sale of the drugs. They are not to happy and aren't going to come with you peacefully.",
        aftermath: "Complete 'In The Shadows'<br>Draw and fight [Human]",
        trash: true,
        add: [127]
      },{
        optionText: "Help them &bull; <em>Vilified</em> &bull; [C] [L] 5",
        result: "You make a deal with the criminals and agree to find customers and keep them hidden. As you walk away, you see a figure following you in the shadows. Someone has taken interest in your strange actions.",
        aftermath: "Gain the 'Mysterious Stranger' unique asset",
        trash: false,
        add: false
      },{
        optionText: "Leave them be and search",
        result: "You head to a different area and, as you scavenge, see the kids run by, jet in hand.",
        aftermath: "[Loot] x [Wasteland]",
        trash: true,
        add: [127]
      }
    ]
  },{
    id: 128,
    location: "Quest",
    title: "Join The Family",
    text: "With their new support, the crime organization has stretched its influence to every corner of the wasteland. They are the real authority now. No settlement is outside their influence.",
    options: [
      {
        optionText: "Complete favors for agents to get in their good graces.<br><br><strong>Encounter [Settlement] until you locate the agents</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: false,
        add: false
      }
    ]
  },{
    id: 129,
    location: "Settlement",
    title: "",
    text: "Multiple mob enforcers can be seen around the settlement, making sure everyone pays their dues and stays in line. You pass a group of people talking in hushed voices. Sounds like they're planning something.",
    options: [
      {
        optionText: "Turn them into the mob &bull; <em>Vilified</em>",
        result: "The enforcers are grateful for the information and ask you to come along and help apprehend the rebels.",
        aftermath: "Complete 'Join The Family'<br>Draw and fight [Human]",
        trash: true,
        add: [129]
      },{
        optionText: "Get in on their plan &bull; <em>Idolized</em> &bull; [C] [L] 5",
        result: "You convince them to let you in on their plot. As you walk away, you see a figure following you in the shadows. Someone has taken interest in your strange actions.",
        aftermath: "Gain the 'Mysterious Stranger' unique asset",
        trash: false,
        add: false
      },{
        optionText: "Leave them be and shop",
        result: "You head to a different area and, as you scavenge, see the kids run by, jet in hand.",
        aftermath: "Shop [Settlement]",
        trash: true,
        add: [129]
      }
    ]
  },{
    id: 130,
    location: "Quest",
    title: "Good News, Everyone!",
    text: "Everyone is talking about an eccentric inventor working on something outside of town. He has a few different projects and is looking for whatever help he can get.",
    options: [
      {
        optionText: "He claims his research into mutation could help heal injuries.<br><br><strong>Kill a Super Mutant Overlord</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [131]
      },{
        optionText: "He has ambitions to control a robot workforce using wireless signals.<br><br><strong>Kill a Sentry Bot</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [132]
      },{
        optionText: "Most ridiculously of all, he supposedly is nearing completion of a device that could teleport people great distances.<br><br><strong>Kill a Glowing One</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [133]
      }
    ]
  },{
    id: 131,
    location: "Quest",
    title: "Poer Overwhelming",
    text: "Bubbles slowly drift up through the viscous green liquid in the machine the inventor expects you to hook yourself into. 'It will fully cure you! The side effects are... minimial.'<br><br><strong>Place a quest marker in your space. This is the machine.</strong>",
    options: [
      {
        optionText: "Use the machine<br><br><strong>[Quest] The machine</strong>",
        result: "",
        aftermath: "Rcover all of your HP.<br>Then, suffer 2 [Radiation]",
        trash: false,
        add: false
      }
    ]
  },{
    id: 132,
    location: "Quest",
    title: "Cloudnet",
    text: "The inventor stands before a massive tangle of cables, circuitry, and antennas. On a small, blinking terminal, you can see a map of the wasteland, with little dots moving around. 'It's not perfect control, but you can give them commands!'<br><br><strong>Place a quest marker on your space.<br>This is the machine.</strong>",
    options: [
      {
        optionText: "Use the machine<br><br><strong>[Quest] The machine</strong>",
        result: "",
        aftermath: "Move each [Robot] 1 space in a direction of your choice.",
        trash: false,
        add: false
      }
    ]
  },{
    id: 133,
    location: "Quest",
    title: "Ship of Theseus",
    text: "The inventor steps into the device he's created, and with a manic grin, a sharp 'crack,' and the smell of sulfur, he is gone! Do you follow him in?<br><br><strong>Place a quest marker in your space.<br>This is your machine.</strong>",
    options: [
      {
        optionText: "Use the machine<br><br><strong>[Quest] The machine</strong>",
        result: "",
        aftermath: "Place your figure in any empty space.<br>Then, suffer 3 damage.",
        trash: false,
        add: false
      }
    ]
  },{
    id: 134,
    location: "Quest",
    title: "Flesh And Bone",
    text: "The locals are in an uproar. A young girl named Olivia has been run out of her home for being a synth. She says that if someone could just find her sister, she could prove false these ridiculous claims that she is some kind of robot.",
    options: [
      {
        optionText: "There is something fishy here.<br> Interrogate Olivia.<br><br><strong>[Quest] Any [Settlement] &bull; [S] [C] 3</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [137]
      },{
        optionText: "Go looking for her missing sister.<br><br><strong>Encounter any [Wasteland] until you find Olivia's sister.</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [136]
      }
    ]
  },{
    id: 135,
    location: "Wasteland",
    title: "",
    text: "<strong>If 'Flesh and Bone' is no longer staged, trash this card and encounter the next card.</strong><br>A couple of landmarks catch your eye as you approach the area. This is the place where that girl Olivia said her sister was last seen. Looks dangerous, but you could go poking around to see if there's any truth to it.",
    options: [
      {
        optionText: "Look for Olivia's sister",
        result: "You see the body of a girl lying under an overhang. When you turn it over, you see the body doesn't just have a familial resemblance to Olivia, it is Olivia! The girl you spoke to was a synth who replaced her. Suddenly, you see movement... she sent you here as a trap!",
        aftermath: "Complete the 'Flesh and Bone' quest<br>Draw and fight [Critter]",
        trash: true,
        add: false
      },{
        optionText: "Ignore it and search for loot &bull; [P] 3",
        result: [
          {
            result: "<strong>Succeed:</strong> You see some critters crawling over near the landmarks. You made the right choice in avoiding that area.",
            aftermath: "[Loot] x [Wasteland]",
            trash: true,
            add: [135]
          },{
            result: "<strong>Fail:</strong> This area doesn't have much.",
            aftermath: "[Loot]",
            trash: true,
            add: [135]
          }
        ]
      },{
        optionText: "'Flesh and Bone' is no longer staged.",
        result: "",
        aftermath: "Encounter the next card.",
        trash: true,
        add: false
      }
    ]
  },{
    id: 136,
    location: "Quest",
    title: "Duped!",
    text: "It turns out the people were right. Olivia has been replaced by a murderous synth. They say she was last seen passing through the Ashbury neighborhood on her way out into the wasteland. Time to track her down.",
    options: [
      {
        optionText: "Ask around Ashbury and try to talk to her.<br><br><strong>[Quest] Ashbury Rd &bull; [E] [C] 4</strong>",
        result: "",
        aftermath: "3 XP",
        trash: true,
        add: [137]
      },{
        optionText: "Track her through the wasteland... and take her out!<br><br><strong>[Raider Camp] &bull; Draw and fight [Human]</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: false
      }
    ]
  },{
    id: 137,
    location: "Quest",
    title: "Edge Of A Knife",
    text: "Olivia confides that yes, she is in fact a synth, but she regrets what she did under the Institute that made her, and she wants to escape to a new life. She has heard of an organization known as the Railroad that can help her do just that.",
    options: [
      {
        optionText: "Pay to get in contact with agents of the Railroad.<br><br><strong>[Quest] Pendleton Estate &bull; 6 Caps</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [138]
      },{
        optionText: "With a tranceiver from a robot you can contact the Institute.<br><br><strong>Kill any [Robot]</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [139]
      }
    ]
  },{
    id: 138,
    location: "Quest",
    title: "Conducted To Safety",
    text: "The Railroad want to get Olivia as far from here as possible. If you can lead her to the outskirts of the wasteland, they can pick her up and get her out.<br><br><strong>Place a quest marker in your space.<br>This is Olivia.<br><br>Survivors in the same space as Olivia gain:<br>Action:</strong> Test [C] 1 &bull; Move Olivia a number of spaces equal to the amount of [Hits] by which you exceeded the test.",
    options: [
      {
        optionText: "Lead Olivia to a place safe enough for extraction.<br><br><strong>Olivia in any [Wasteland]</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [140]
      },{
        optionText: "Why are people helping this robot?! Looks like you'll have to lure her to her death.<br><br><strong>Olivia in a space with [Monster]</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [140]
      }
    ]
  },{
    id: 139,
    location: "Quest",
    title: "On The Hunt",
    text: "The Institute has sent one of its elite Coursers to the wasteland to recover its property. They would be eternally grateful (and pay well) if you would help secure it.<br><br><strong>Place a quest marker in your space.<br>This is Olivia.<br><br>Survivors in the same space as Olivia gain:<br>Action:</strong> Test [C] 1 &bull; Move Olivia a number of spaces equal to the amount of [Hits] by which you exceeded the test.",
    options: [
      {
        optionText: "Lead Olivia to the Courser.<br><br><strong>Olivia in the Super Mutant Camp</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [140]
      },{
        optionText: "Kill the Courser.<br><br><strong>[Quest] Super Mutant Camp &bull; Draw and fight [Human]</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [140]
      }
    ]
  },{
    id: 140,
    location: "Wasteland",
    title: "",
    text: "You see a figure in a long, black trench coat and sunglasses. This must be the agent the Institute sent to find Olivia. As you approach, he looks at you. 'Ah. Hello there, 41b.' Then, he just walks away... what was that about?",
    options: [
      {
        optionText: "Are you... a synth?",
        result: "What's he talking about? You're not a synth! You had a childhood! You remember growi... wait, do you? What's the last thing you remember? Why can't you remember anything before a year ago?!",
        aftermath: "Gain the <em>Synth</em> trait",
        trash: true,
        add: false
      },{
        optionText: "It's probably nothing, just search for loot &bull; [P] [I] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> You push it out of your mind and loot.",
            aftermath: "[Loot] x [Wasteland]",
            trash: false,
            add: false
          },{
            result: "<strong>Fail:</strong> You can't push what he said out of your mind. But you're not a synth! You had a childhood! You remember growi... wait, do you? What's the last thing you remember? Why can't you remember anything before a year ago?!",
            aftermath: "Gain the <em>Synth</em> trait",
            trash: true,
            add: false
          }
        ]
      },{
        optionText: "",
        result: "",
        aftermath: "",
        trash: false,
        add: false
      },{
        optionText: "",
        result: "",
        aftermath: "",
        trash: false,
        add: false
      }
    ]
  },{
    id: 141,
    location: "Quest",
    title: "Wasteland Survival Guide",
    text: "'Hi!' says a chipper-looking woman. 'My name is Moira, and I'm trying to write a guide to surviving the wasteland. But I don't have a lot of experience out there. Will you help me? I need some food from the Super Duper Mart.'",
    options: [
      {
        optionText: "Pick up some food at the Super Duper Mart<br><br><strong>[Quest] Super Duper Mart &bull; [P] [I] 4</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>Keep this card; it is a WSG contribution",
        trash: true,
        add: [142]
      },{
        optionText: "She just wants food, right? Who cares where it comes from?<br><br><strong>[Quest] any [Wasteland] &bull; [L] 3</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [142]
      }
    ]
  },{
    id: 142,
    location: "Quest",
    title: "Totally Rad",
    text: "'Interesting...' Moira muses as she takes the sample of food. 'This will do. Next, I need to test a specimen that has survived, and even thrived, in radiation: the radroach.'",
    options: [
      {
        optionText: "Shouldn't take too long to find one of the nasty bugs...<br><br><strong>Kill a Radroach</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>Keep this card; it is a WSG contribution",
        trash: true,
        add: [143]
      },{
        optionText: "A specimen filled with rads? Surely there's an easier way.<br><br><strong>Suffer 2 [Radiation] during one turn</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [143]
      }
    ]
  },{
    id: 143,
    location: "Quest",
    title: "Ouch!",
    text: "Moira finishes her examination. 'Your dedication to this cause is... inspiring,' she says while washing her hands thoroughly. 'For the next section, I think we should continue with the theme of physical endurance. Rapid recovery following excessive trauma seems like an effective experiment.'",
    options: [
      {
        optionText: "Sheesh. The things you do for the greater good.<br><br><strong>Suffer 6 damage during one fight</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>Keep this card; it is a WSG contribution",
        trash: true,
        add: [144,146]
      },{
        optionText: "You're too smart to be someone else's lab rat -- you'll take your own notes, thanks.<br><br><strong>[Quest] Any [Wasteland] &bull; Discard a companion</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [145,146]
      }
    ]
  },{
    id: 144,
    location: "Wasteland",
    title: "",
    text: "You see another figure working his way through the ruins. He is clutching a small book in his hands and has a slight skip in his step. 'Hello friend! Have you read this book? It has helped me so much!'",
    options: [
      {
        optionText: "'Yes, I helped write it.' &bull; WSG contribution",
        result: "'No way!' he gushes over the book for several excruciating minutes, then gives you gifts.",
        aftermath: "[Loot] x [Wasteland] &bull; [Wasteland] Caps",
        trash: false,
        add: false
      }
    ]
  },{
    id: 145,
    location: "Wasteland",
    title: "",
    text: "You come across an emaciated corpse. Its hands are clutched tight around a small book. You prise it out of the corpse's grip and see that it is a 'Wasteland Survival Guide.' Oops.",
    options: [
      {
        optionText: "Well, this guy doesn't need his stuff. Loot his corpse.",
        result: "It's a little grim, but hey, he's got a decent amount of stuff.",
        aftermath: "[Loot] x [Wasteland]",
        trash: false,
        add: false
      },{
        optionText: "You feel bad about his death.<br>Go search elsewhere. &bull; [P] [L] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> It looks like the guide gave bad tips about finding salvage too, because he left all sorts of good stuff here.",
            aftermath: "[Loot] x [Wasteland]",
            trash: false,
            add: false
          },{
            result: "<strong>Fail:</strong> You don't find much. He must have picked this place clean before getting himself killed.",
            aftermath: "[Loot]",
            trash: false,
            add: false
          }
        ]
      },{
        optionText: "",
        result: "",
        aftermath: "",
        trash: false,
        add: false
      },{
        optionText: "",
        result: "",
        aftermath: "",
        trash: false,
        add: false
      }
    ]
  },{
    id: 146,
    location: "Quest",
    title: "Beep Boop",
    text: "'I can't help but believe that our unconventional methods are producing... unconventional results.' She disposes of the last bloody rag. 'Nevertheless, excelsior, as they say. I've filled in most of the other sections, but the 'Post-Future Tech in a Dying World' finale is still lacking. I need a robot, preferably functional.'",
    options: [
      {
        optionText: "It just so happens you know the perfect robot for the job. This guide will be so totally great!<br><br><strong>[Quest] Robco Factory &bull; <em>Robot</em> companion</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>Keep this card; it is a WSG contribution",
        trash: true,
        add: [147]
      },{
        optionText: "Wait, what'd she say? Something about a dying robot or whatever, right? Hopefully the guide will be more interesting than this endless chain of quests...<br><br><strong>Kill any [Robot]</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [147]
      }
    ]
  },{
    id: 147,
    location: "Quest",
    title: "Hot Off The Presses",
    text: "'That's a wrap!' Moira's excitement is palpable. 'Now, do you actually know how to publish something like this? There has to be someone out in the wasteland with the resources to print it for us.'",
    options: [
      {
        optionText: "One of the affluent individuals living in the Pendleton Estate must have a printing press of some sort.<br><br><strong>[Quest] Pendleton Estate &bull; Spend 2 Caps</strong>",
        result: "",
        aftermath: "Gain the 'Wasteland Survival Guide' unique asset.",
        trash: true,
        add: false
      }
    ]
  },{
    id: 148,
    location: "Quest",
    title: "Rogue Vertibird",
    text: "It's an old rust-bucket, but it still flies! An old engineer named Tully fixed up a Brotherhood of Steel wreck and now flies people around for Caps. You won't ride long with Tully without hearing about how he got his large facial scar fighting off the deathclaw that killed his brother.<br><br><strong>Place a quest marker on the highest-level [Settlement]. This is the Vertibird.</strong>",
    options: [
      {
        optionText: "Pay for a ride.<br><br><strong>[Quest] Vertibird &bull; Spend 4 Caps</strong>",
        result: "",
        aftermath: "Place your figure and the vertibird in any empty space.",
        trash: false,
        add: false
      },{
        optionText: "Avenge Tully's brother.<br><br><strong>Kill a Deathclaw</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [149]
      }
    ]
  },{
    id: 149,
    location: "Quest",
    title: "In Your Debt",
    text: "A broad smile can now always be seen across the cracked and scarred face of old Tully. His vertibird flights have become cheaper than ever after his brother was avenged.<br><br><strong>Do not discard the vertibird</strong>",
    options: [
      {
        optionText: "Buy a discounted ride.<br><br><strong>[Quest] Vertibird &bull; Spend 2 Caps</strong>",
        result: "",
        aftermath: "Place your figure and the vertibird in any empty space.",
        trash: false,
        add: false
      }
    ]
  },{
    id: 150,
    location: "Quest",
    title: "Nowhere To Go",
    text: "The recent war and destruction in the wasteland has left many homeless, but no one has been as affected as the local ghoul populace. Already viewed as pariahs, a bounty has been put out on certain ghouls, which has lead to all of them being shunned.",
    options: [
      {
        optionText: "Kill the bounty hunter.<br><br><strong>Kill a Bounty Hunter</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [151]
      },{
        optionText: "Find a new, uninhabited place for them to settle.<br><br><strong>Explore a [Dangerous] tile</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [152]
      }
    ]
  },{
    id: 151,
    location: "Quest",
    title: "Can't We All Just Get Along?",
    text: "With the bounty on ghouls eliminated, it's just the normal stigmas that stand in the way of their being relocated. Try to find a settlement that would be willing to let them in.",
    options: [
      {
        optionText: "The Tower would be willing to take in the ghouls if you can also supply someone to act as the ambassador to the new district.<br><br><strong>[Quest] The Tower &bull; Discard a companion</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [153,154]
      },{
        optionText: "For enough money, the Pendletons will agree to anything.<br><br><strong>[Quest] Pendleton Estate &bull; Spend 5 Caps</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [153,154]
      }
    ]
  },{
    id: 152,
    location: "Quest",
    title: "Drain The Swamp",
    text: "Many areas in the more dangerous sections of the wasteland have uninhabited places where the ghouls could make their home. But first, said place needs to be made safe for the ghouls to live there.",
    options: [
      {
        optionText: "It's not the prettiest place, but the super mutants have created a large home for themselves in an old substation.<br><br><strong>[Quest] Super Mutant Camp &bull; No enemies within 2 spaces</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [155,156]
      },{
        optionText: "The old Robco Factory could be a suitable home if the last active robots were gone.<br><br><strong>[Quest] Robco Factory&bull; No enemies within 2 spaces</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: [155,156]
      }
    ]
  },{
    id: 153,
    location: "Quest",
    title: "Cohabitation",
    text: "The ghouls have moved in, and so far there have been very little problems. However, the ghouls have very little and live in squalor. Any donations could help them.<br><br><strong>Place a quest marker in your space. This is the ghoul district. Apply +1 to the level of the [Settlement] in the district's space.</strong>",
    options: [
      {
        optionText: "Make a donation to improve the ghouls's quality of life.<br><br><strong>[Quest] District &bull; Spend 8 Caps</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: false,
        add: false
      }
    ]
  },{
    id: 154,
    location: "Settlement",
    title: "",
    text: "You can hear raised voices over the crowd, one of them a scratchy, guttural growl. You see a ghoul in a heated argument with a 'smoothskin' trader. They are yelling foul names at each other; clearly the cohabitation isn't going as well as you'd hope.",
    options: [
      {
        optionText: "Put the ghould in her place",
        result: "You yell at the ghoul and tell her to go back to her district. The trader offers you a deal.",
        aftermath: "Shop [Settlement] +1",
        trash: false,
        add: false
      },{
        optionText: "Tell the 'smoothskin' to back off.",
        result: "The ghouls are here to stay, and everyone is going to have to get used to that. The man turns on his heels and heads off in a huff.",
        aftermath: "Become <em>Idolized</em>",
        trash: true,
        add: false
      },{
        optionText: "Try to mediate carefully &bull; [C] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> You get the two to calm down. By the end you are having a drink toegther in a nearby bar.",
            aftermath: "[Settlement] Caps &bull; [Settlement] XP",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong> You only make things worse! A scuffle starts",
            aftermath: "Suffer 3 damage",
            trash: true,
            add: 154
          }
        ]
      },{
        optionText: "",
        result: [
          {
            result: "<strong>Succeed:</strong>",
            aftermath: "",
            trash: false,
            add: false
          },{
            result: "<strong>Fail:</strong>",
            aftermath: "",
            trash: false,
            add: false
          }
        ]
      },{
        optionText: "",
        result: "",
        aftermath: "",
        trash: false,
        add: false
      }
    ]
  },{
    id: 155,
    location: "Quest",
    title: "Sepulcher",
    text: "It's still not the safest place, but the ghouls have a settlement of their own that they've named Sepulcher. The name is a little morbid, but it fits.<br><br><strong>Place a quest marker in your space.<br>This is Sepulcher. Sepulcher counts as a level-2 [Settlement] in addition to other icons in that space.</strong>",
    options: [
      {
        optionText: "Living this deep in the wasteland is dangerous, and illness is rampant. Provide supplies to help.<br><br><strong>[Quest] Sepulcher &bull; Discard 2 <em>Aid</em> items</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: false,
        add: false
      }
    ]
  },{
    id: 156,
    location: "Wasteland",
    title: "",
    text: "A path runs alonside the ruins, and you see a small caravan ridden by a hunched ghoul from Sepulcher trundling by.",
    options: [
      {
        optionText: "Offer to trade with the ghoul",
        result: "He has a decent amount of supplies in his cart, but Sepulcher is of limited means.",
        aftermath: "Shop [Wilderness] - 1",
        trash: false,
        add: false
      },{
        optionText: "Buy a ride to Sepulcher &bull; Spend 2 Caps",
        result: "The ghoul is incredibly friendly as you roll along. However, there is something glowing in his cart!...",
        aftermath: "Place your figure in Sepulcher<br>Suffer 1 [Radiation]",
        trash: false,
        add: false
      },{
        optionText: "Let him pass and keep searching &bull; [P] 3",
        result: [
          {
            result: "<strong>Succeed:</strong> The ghoul waves kindly as he goes by. You get a decent haul.",
            aftermath: "[Loot] x [Wilderness]",
            trash: false,
            add: false
          },{
            result: "<strong>Fail:</strong> You're distracted by the caravan, so you don't find much.",
            aftermath: "[Loot]",
            trash: false,
            add: false
          }
        ]
      },{
        optionText: "",
        result: [
          {
            result: "<strong>Succeed:</strong>",
            aftermath: "",
            trash: false,
            add: false
          },{
            result: "<strong>Fail:</strong>",
            aftermath: "",
            trash: false,
            add: false
          }
        ]
      }
    ]
  },{
    id: 157,
    location: "Quest",
    title: "Can't Touch This",
    text: "Meitner and Somerville have been rivals for years. What started as a small dispute has escalated to a violent feud. This time, Meitner has crafted an indestructible bunker, and Somerville is fixing up something she found in the wasteland to bust inside that bunker.",
    options: [
      {
        optionText: "Steal the prototype for Meitner<br><br><strong>[Quest] Pendleton Estate &bull; [P] [A] [L] 4</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; 4 Caps",
        trash: true,
        add: [158]
      },{
        optionText: "Help Somerville fix up her device.<br><br><strong>[Quest] Robco Factroy &bull; [S] [E] [I] 4</strong>",
        result: "",
        aftermath: "Gain the 'Super Sledge' unique asset.",
        trash: true,
        add: [159]
      }
    ]
  },{
    id: 158,
    location: "Quest",
    title: "Break It Down",
    text: "Meitner is impressed by Somerville's prototype. 'Is this super-mutant tech? Interesting. We can easily rig this to blow up in her face!'",
    options: [
      {
        optionText: "Help her rig the super sledge to explode and bring it back to Somerville.<br><br><strong>[Quest] The Tower &bull; [S] [I] 4</strong>",
        result: [
          {
            result: "<strong>Succeed:</strong>This thing is going to do major damage when it goes off.",
            aftermath: "[Agenda Card]",
            trash: true,
            add: false
          },{
            result: "<strong>Fail:</strong>It explodes way too early.",
            aftermath: "Suffer 4 damage",
            trash: false,
            add: false
          }
        ]
      },{
        optionText: "Leverage Meitner's respect for Somerville to spark a friendship between the two. They give you the hammer.<br><br><strong>[Quest] The Tower &bull [C] 5</strong>",
        result: "",
        aftermath: "[Agenda Card] &bull; Become <em>Idolized</em><br> Gain the 'Super Sledge' unique asset",
        trash: true,
        add: false
      }
    ]
  },{
    id: 159,
    location: "Quest",
    title: "Hammer Time",
    text: "With Somerville's scavenged super mutant device reconstructed, you can smash into Meitner's bunker!",
    options: [
      {
        optionText: "Use the super sledge to smash the bunker<br><br><strong>[Quest] Pendleton Estate &bull; Equipped Super Sledge unique asset</strong>",
        result: "",
        aftermath: "[Agenda Card]<br>Become <em>Vilified</em>",
        trash: true,
        add: false
      },{
        optionText: "Convince Somerville that this is all ridiculous.<br><br><strong>[Quest] Pendleton Estate &bull; [C] 4</strong>",
        result: "",
        aftermath: "[Agenda Card]",
        trash: true,
        add: false
      }
    ]
  }
]