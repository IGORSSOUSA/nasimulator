const missions = [
    {
        "name": "The Adored Elder Sister",
        "img": "https://i.imgur.com/SG8qAug.png",
        "requirements": "Use Hyuuga Neji's \"Gentle Fist\" 8 times. (8/8) Use Hyuuga Hinata's \"Gentle Fist\" 8 times. (8/8)",
        "reward_text": "Mission \"The Adored Elder Sister\" completion.Hyuuga Hanabi",
        "reward_img": "https://i.imgur.com/ovkEczm.jpg"
    },
    {
        "name": "The Yellow Flash",
        "img": "https://i.imgur.com/NWWHZNz.jpg",
        "requirements": "Win 20 battles with any Ninja of the Team Minato. (20/20) Win 5 battles in a row with Young Kakashi. (0/5) Win 5 battles in a row with Uchiha Obito. (0/5) Win 5 battles in a row with Nohara Rin. (0/5)",
        "reward_text": "Mission \"The Yellow Flash\" completion.Namikaze Minato",
        "reward_img": "https://i.imgur.com/PSc47fS.png"
    },
    {
        "name": "The Fourth",
        "img": "https://i.imgur.com/k5q2NIp.png",
        "requirements": "Win 5 battles in a row with Uzumaki Naruto. (0/5) Win 5 battles in a row with Uzumaki Kushina. (0/5) Win 5 battles in a row with Namikaze Minato. (0/5) Win 5 battles in a row with Sandaime Hokage. (0/5) Win 5 battles in a row with Jiraiya. (0/5) Use Uzumaki Kushina's \"Adamantine Sealing Chains\" 20 times. (0/20)",
        "reward_text": "Mission \"The Fourth\" completion.Yondaime Hokage",
        "reward_img": "https://i.imgur.com/JD6Ftin.png"
    },
    {
        "name": "Konoha",
        "img": "https://i.imgur.com/sJnF2s5.png",
        "requirements": "Win 6 battles in a row with Shodai Hokage. (0/6) Win 24 battles with Shodai Hokage. (0/24)",
        "reward_text": "Mission \"Konoha\" completion.Senju Hashirama",
        "reward_img": "https://i.imgur.com/bOIy76f.png"
    },
    {
        "name": "Uchiha Eternity",
        "img": "https://i.imgur.com/UbZPv1Z.png",
        "requirements": "Win 6 battles in a row with any Ninja of the Uchiha Clan. (0/6) Win 24 battles with any Ninja of the Uchiha Clan. (7/24)",
        "reward_text": "Mission \"Uchiha Eternity\" completion.Uchiha Madara",
        "reward_img": "https://i.imgur.com/uNZqC39.png"
    },
    {
        "name": "Eternal Devotion",
        "img": "https://i.imgur.com/nlHXRxj.png",
        "requirements": "Win 30 battles with any Ninja of the Uchiha Clan. (7/30) Win 4 battles in a row with Shimura Danzo (S). (0/4)",
        "reward_text": "Mission \"Eternal Devotion\" completion.Uchiha Shisui (S)",
        "reward_img": "https://i.imgur.com/1VX4Blm.png"
    },
    {
        "name": "The Elusive Six-Tails",
        "img": "https://i.imgur.com/HASuKW8.png",
        "requirements": "Win 30 battles with a Jinchuuriki. (30/30) Win 5 battles in a row with a Jinchuuriki. (5/5)",
        "reward_text": "Mission \"The Elusive Six-Tails\" completion.Utakata (S)",
        "reward_img": "https://i.imgur.com/aJd17zi.png"
    },
    {
        "name": "The Bloody Mizukage",
        "img": "https://i.imgur.com/edioIzT.png",
        "requirements": "Win 25 battles with Uchiha Itachi. (0/25) Win 30 battles with any Ninja of the Mist Village. (4/30) Win 4 battles in a row with any Ninja of the Mist Village. (2/4)",
        "reward_text": "Mission \"The Bloody Mizukage\" completion.Karatachi Yagura",
        "reward_img": "https://i.imgur.com/uuIzkk0.png"
    },
    {
        "name": "Red-Hot Habanero",
        "img": "https://i.imgur.com/mLhJD4S.png",
        "requirements": "Win 25 battles with Uzumaki Kushina. (0/25) Win 5 battles in a row with Uzumaki Kushina. (0/5) Use Uzumaki Kushina's \"Life Transfer\" 50 times. (0/50)",
        "reward_text": "Mission \"Red-Hot Habanero\" completion.Young Kushina",
        "reward_img": "https://i.imgur.com/OVQz2LC.png"
    },
    {
        "name": "Sasukes Quest for Power",
        "img": "https://i.imgur.com/vzVbRv0.png",
        "requirements": "Use Uchiha Sasuke's \"Chidori\" on an enemy affected by \"Sharingan\" 5 times. (5/5)",
        "reward_text": "Mission \"Sasukes Quest for Power\" completion.UNLOCKED BORDER: ID - 04",
        "reward_img": "https://i.imgur.com/CQYJRRJ.png"
    },
    {
        "name": "The Search for Jiroubou",
        "img": "https://i.imgur.com/ReKFPdG.jpg",
        "requirements": "Win 3 battles in a row with Akimichi Chouji. (0/3)",
        "reward_text": "Mission \"The Search for Jiroubou\" completion.Jiroubou",
        "reward_img": "https://i.imgur.com/MuepMwr.png"
    },
    {
        "name": "The Search for Kidoumaru",
        "img": "https://i.imgur.com/PlgonF6.jpg",
        "requirements": "Win 3 battles in a row with Hyuuga Neji. (0/3)",
        "reward_text": "Mission \"The Search for Kidoumaru\" completion.Kidoumaru",
        "reward_img": "https://i.imgur.com/ZSWwJiY.png"
    },
    {
        "name": "The Search for Tayuya",
        "img": "https://i.imgur.com/RAREgJy.jpg",
        "requirements": "Win 3 battles in a row with Nara Shikamaru or Temari. (0/3)",
        "reward_text": "Mission \"The Search for Tayuya\" completion.Tayuya",
        "reward_img": "https://i.imgur.com/ZkTTfAq.png"
    },
    {
        "name": "The Search for Sakon",
        "img": "https://i.imgur.com/yYoByVg.jpg",
        "requirements": "Win 3 battles in a row with Inuzuka Kiba or Kankuro. (0/3)",
        "reward_text": "Mission \"The Search for Sakon\" completion.Sakon",
        "reward_img": "https://i.imgur.com/fXMOzMv.png"
    },
    {
        "name": "A New-Found Skin",
        "img": "https://i.imgur.com/U4wMean.png",
        "requirements": "Win 15 battles with Kinuta Dosu. (0/15) Win 15 battles with Abumi Zaku. (6/15) Win 15 battles with Tsuchi Kin. (5/15)",
        "reward_text": "Mission \"A New-Found Skin\" completion.Shiore Orochimaru",
        "reward_img": "https://i.imgur.com/AzUvWCt.png"
    },
    {
        "name": "The Sounds Amongst the Leaves",
        "img": "https://i.imgur.com/utvYcfq.jpg",
        "requirements": "Win 3 battles in a row with any Ninja of the Sound Genin (Dosu, Kin, Zaku). (0/3)",
        "reward_text": "Mission \"The Sounds Amongst the Leaves\" completion.Akadou Yoroi",
        "reward_img": "https://i.imgur.com/ZqpOP0D.png"
    },
    {
        "name": "Twisting Sound",
        "img": "https://i.imgur.com/TRERBfs.jpeg",
        "requirements": "Win 3 battles in a row with Kankuro. (0/3)",
        "reward_text": "Mission \"Twisting Sound\" completion.Tsurugi Misumi",
        "reward_img": "https://i.imgur.com/M8EPY4F.png"
    },
    {
        "name": "Devotion",
        "img": "https://i.imgur.com/VxfyjZy.jpg",
        "requirements": "Win 8 battles with Haku. (4/8)",
        "reward_text": "Mission \"Devotion\" completion.Momochi Zabuza",
        "reward_img": "https://i.imgur.com/OzHvYsF.png"
    },
    {
        "name": "Survival",
        "img": "https://i.imgur.com/CyXcyCy.jpg",
        "requirements": "Win 5 battles with Uzumaki Naruto, Uchiha Sasuke and Haruno Sakura on the same team.(2/5)",
        "reward_text": "Mission \"Survival\" completion.Yakushi Kabuto",
        "reward_img": "https://i.imgur.com/ZIyW33w.png"
    },
    {
        "name": "The Beast Inside",
        "img": "https://i.imgur.com/xQNpJsZ.jpeg",
        "requirements": "Win 12 battles with Gaara Rehabilitated. (0/12) Win 4 battles in a row with Gaara Rehabilitated. (0/4) Use Gaara Rehabilitated's \"Quicksand Waterfall\" 10 times. (0/10)",
        "reward_text": "Mission \"The Beast Inside\" completion.Shukaku Gaara",
        "reward_img": "https://i.imgur.com/bJHNRJ2.png"
    },
    {
        "name": "Duty of a Sensei",
        "img": "https://i.imgur.com/ZYvPX2L.jpg",
        "requirements": "Win 2 battles with Uzumaki Naruto. (2/2) Win 2 battles with Uchiha Sasuke. (2/2) Win 2 battles with Haruno Sakura. (2/2) Win 2 battles with Hyuuga Hinata. (2/2) Win 2 battles with Aburame Shino. (2/2) Win 2 battles with Inuzuka Kiba. (2/2) Win 2 battles with Nara Shikamaru. (2/2) Win 2 battles with Akimichi Chouji. (2/2) Win 2 battles with Yamanaka Ino. (2/2)",
        "reward_text": "Mission \"Duty of a Sensei\" completion.Umino Iruka",
        "reward_img": "https://i.imgur.com/VFwEl8B.png"
    },
    {
        "name": "A Dishonored Shinobi",
        "img": "https://i.imgur.com/9GlXiaR.jpg",
        "requirements": "Win 8 battles with Uzumaki Naruto. (0/8) Win 3 battles in a row with Umino Iruka. (0/3)",
        "reward_text": "Mission \"A Dishonored Shinobi\" completion.Touji Mizuki",
        "reward_img": "https://i.imgur.com/56OlIhi.png"
    },
    {
        "name": "Team 7 Fights as a Team",
        "img": "https://i.imgur.com/ZeoV0b7.jpg",
        "requirements": "Win 15 battles with any Ninja of the Team 7. (15/15)",
        "reward_text": "Mission \"Team 7 Fights as a Team\" completion.Hatake Kakashi",
        "reward_img": "https://i.imgur.com/EiPfRpg.png"
    },
    {
        "name": "Team 8 Scouting at its Best",
        "img": "https://i.imgur.com/pC8K83K.jpg",
        "requirements": "Win 15 battles with any Ninja of the Team 8. (15/15)",
        "reward_text": "Mission \"Team 8 Scouting at its Best\" completion.Yuhi Kurenai",
        "reward_img": "https://i.imgur.com/L1IWoqb.png"
    },
    {
        "name": "Team 9 the Best Taijustu Team",
        "img": "https://i.imgur.com/Nyei6JT.jpg",
        "requirements": "Win 15 battles with any Ninja of the Team 9. (4/15)",
        "reward_text": "Mission \"Team 9 the Best Taijustu Team\" completion.Maito Gai",
        "reward_img": "https://i.imgur.com/mZzzuP2.png"
    },
    {
        "name": "Team 10 Fights vs the Sound",
        "img": "https://i.imgur.com/HmMvRu1.jpg",
        "requirements": "Win 15 battles with any Ninja of the Team 10. (15/15)",
        "reward_text": "Mission \"Team 10 Fights vs the Sound\" completion.Sarutobi Asuma",
        "reward_img": "https://i.imgur.com/N4ZFINr.png"
    },
    {
        "name": "Sand Siblings at War",
        "img": "https://i.imgur.com/I0vyzSJ.jpg",
        "requirements": "Win 15 battles with any Ninja of the Sand Genin (Gaara/Gaara Rehabilitated, Kankuro, Temari). (0/15)",
        "reward_text": "Mission \"Sand Siblings at War\" completion.Baki",
        "reward_img": "https://i.imgur.com/f0YWgRx.png"
    },
    {
        "name": "S-Rank Criminal Kisame!",
        "img": "https://i.imgur.com/fSB99BW.jpg",
        "requirements": "Win 5 battles in a row with Maito Gai or Sarutobi Asuma. (0/5)",
        "reward_text": "Mission \"S-Rank Criminal Kisame!\" completion.Hoshigaki Kisame",
        "reward_img": "https://i.imgur.com/M8xGMby.png"
    },
    {
        "name": "S-Rank Criminal Itachi!",
        "img": "https://i.imgur.com/0jLYeW9.jpg",
        "requirements": "Win 5 battles in a row with Hatake Kakashi or Yuhi Kurenai. (0/5)",
        "reward_text": "Mission \"S-Rank Criminal Itachi!\" completion.Uchiha Itachi",
        "reward_img": "https://i.imgur.com/DXGV0Uz.png"
    },
    {
        "name": "Disciples of the Toad",
        "img": "https://i.imgur.com/Lm7tyYj.jpg",
        "requirements": "Win 5 battles in a row with Uzumaki Naruto. (0/5) Win 5 battles in a row with Namikaze Minato. (0/5) Win 20 battles with Uzumaki Naruto or Namikaze Minato. (16/20)",
        "reward_text": "Mission \"Disciples of the Toad\" completion.Jiraiya",
        "reward_img": "https://i.imgur.com/tZpyvBQ.png"
    },
    {
        "name": "Disciples of the Slug",
        "img": "https://i.imgur.com/pPBd4vH.jpg",
        "requirements": "Win 5 battles in a row with Haruno Sakura. (0/5) Win 5 battles in a row with Shizune. (0/5) Win 20 battles with Haruno Sakura or Shizune. (20/20)",
        "reward_text": "Mission \"Disciples of the Slug\" completion.Tsunade",
        "reward_img": "https://i.imgur.com/LGztynU.png"
    },
    {
        "name": "Disciples of the Snake",
        "img": "https://i.imgur.com/nHnmL4p.jpg",
        "requirements": "Win 5 battles in a row with Uchiha Sasuke. (0/5) Win 5 battles in a row with Yakushi Kabuto. (0/5) Win 20 battles with Uchiha Sasuke or Yakushi Kabuto. (7/20)",
        "reward_text": "Mission \"Disciples of the Snake\" completion.Orochimaru",
        "reward_img": "https://i.imgur.com/SujZWa4.png"
    },
    {
        "name": "The Prodigal Son Returns",
        "img": "https://i.imgur.com/jgOMFXH.jpg",
        "requirements": "Win 2 battles in a row with Uzumaki Naruto. (2/2) Win 6 battles with Uzumaki Naruto. (6/6)",
        "reward_text": "Mission \"The Prodigal Son Returns\" completion.Uzumaki Naruto (S)",
        "reward_img": "https://i.imgur.com/ksOuPJi.png"
    },
    {
        "name": "A Girl Grown Up",
        "img": "https://i.imgur.com/p622DKI.jpeg",
        "requirements": "Win 3 battles in a row with Haruno Sakura. (0/3) Win 10 battles with Haruno Sakura. (10/10)",
        "reward_text": "Mission \"A Girl Grown Up\" completion.Haruno Sakura (S)",
        "reward_img": "https://i.imgur.com/5iC4YJR.png"
    },
    {
        "name": "A Genius of Hard Work",
        "img": "https://i.imgur.com/L8EEhnY.jpg",
        "requirements": "Win 3 battles in a row with Rock Lee. (0/3) Win 10 battles with Rock Lee. (0/10)",
        "reward_text": "Mission \"A Genius of Hard Work\" completion.Rock Lee (S)",
        "reward_img": "https://i.imgur.com/DTqDmu4.png"
    },
    {
        "name": "A Genius of Ranged Combat",
        "img": "https://i.imgur.com/CGoSy5u.jpg",
        "requirements": "Win 3 battles in a row with Tenten. (2/3) Win 10 battles with Tenten. (4/10)",
        "reward_text": "Mission \"A Genius of Ranged Combat\" completion.Tenten (S)",
        "reward_img": "https://i.imgur.com/lFtTPeQ.png"
    },
    {
        "name": "Pride of the Hyuuga",
        "img": "https://i.imgur.com/pvw1p4Q.jpg",
        "requirements": "Win 3 battles in a row with Hyuuga Neji. (0/3) Win 13 battles with Hyuuga Neji. (0/13)",
        "reward_text": "Mission \"Pride of the Hyuuga\" completion.Hyuuga Neji (S)",
        "reward_img": "https://i.imgur.com/L3PYgA9.png"
    },
    {
        "name": "The Green Beast",
        "img": "https://i.imgur.com/iKXcldS.jpg",
        "requirements": "Win 3 battles in a row with Rock Lee. (0/3) Win 3 battles in a row with Tenten. (2/3) Win 3 battles in a row with Neji. (0/3) Win 10 battles with Maito Gai. (0/10)",
        "reward_text": "Mission \"The Green Beast\" completion.Maito Gai (S)",
        "reward_img": "https://i.imgur.com/QNaZDbW.png"
    },
    {
        "name": "A Double Agent",
        "img": "https://i.imgur.com/FU7sZfm.png",
        "requirements": "Win 20 battles with Yakushi Kabuto. (0/20)",
        "reward_text": "Mission \"A Double Agent\" completion.Yakushi Kabuto (S)",
        "reward_img": "https://i.imgur.com/lBkxaOw.png"
    },
    {
        "name": "A Portly but Steadfast Ninja",
        "img": "https://i.imgur.com/jQ93K50.jpg",
        "requirements": "Win 3 battles in a row with Akimichi Chouji. (0/3) Win 10 battles with Akimichi Chouji. (10/10)",
        "reward_text": "Mission \"A Portly but Steadfast Ninja\" completion.Akimichi Chouji (S)",
        "reward_img": "https://i.imgur.com/yOkMa5x.png"
    },
    {
        "name": "Blondes Have All the Fun",
        "img": "https://i.imgur.com/C9ECnHg.jpg",
        "requirements": "Win 3 battles in a row with Yamanaka Ino. (3/3) Win 10 battles with Yamanaka Ino. (10/10)",
        "reward_text": "Mission \"Blondes Have All the Fun\" completion.Yamanaka Ino (S)",
        "reward_img": "https://i.imgur.com/zA72t3a.png"
    },
    {
        "name": "A Lovestruck Girl",
        "img": "https://i.imgur.com/ylXTBAY.jpg",
        "requirements": "Win 4 battles in a row with Hyuuga Hinata. (0/4) Win 10 battles with Hyuuga Hinata. (6/10)",
        "reward_text": "Mission \"A Lovestruck Girl\" completion.Hyuuga Hinata (S)",
        "reward_img": "https://i.imgur.com/IvkdaCw.png"
    },
    {
        "name": "A True Artist",
        "img": "https://i.imgur.com/9om0BiG.jpg",
        "requirements": "Win 12 battles with any Akatsuki Member. (0/12)",
        "reward_text": "Mission \"A True Artist\" completion.Deidara (S)",
        "reward_img": "https://i.imgur.com/iAgnmxk.png"
    },
    {
        "name": "Coming Out of Retirement",
        "img": "https://i.imgur.com/G1nzf3k.jpg",
        "requirements": "Win 22 battles with any Ninja of the Sand Village. (0/22)",
        "reward_text": "Mission \"Coming Out of Retirement\" completion.Chiyo (S)",
        "reward_img": "https://i.imgur.com/Xwi4eLx.png"
    },
    {
        "name": "The Mental Genius",
        "img": "https://i.imgur.com/0aYVdsf.jpg",
        "requirements": "Win 5 battles in a row with Yamanaka Ino (S). (0/5) Use Yamanaka Ino (S)' \"Mind Body Switch\" 15 times. (0/15)",
        "reward_text": "Mission \"The Mental Genius\" completion.Yamanaka Inoichi (S)",
        "reward_img": "https://i.imgur.com/D5wMgU4.png"
    },
    {
        "name": "The Aburame Shadow",
        "img": "https://i.imgur.com/WsAY7gK.jpeg",
        "requirements": "Win 5 battles in a row with any Aburame ninja. (0/5) Win 15 battles with any Aburame ninja. (15/15)",
        "reward_text": "Mission \"The Aburame Shadow\" completion.Aburame Torune (S)",
        "reward_img": "https://i.imgur.com/A4wlANH.png"
    },
    {
        "name": "The Veteran of The Mist",
        "img": "https://i.imgur.com/UlKIUM1.jpeg",
        "requirements": "Win 5 battles in a row with Haku or Momochi Zabuza. (2/5) Win 15 battles with Haku or Momochi Zabuza. (4/15)",
        "reward_text": "Mission \"The Veteran of The Mist\" completion.Ao (S)",
        "reward_img": "https://i.imgur.com/8eZpgiw.jpg"
    },
    {
        "name": "The Lone Swordsman",
        "img": "https://i.imgur.com/F1laEXr.jpeg",
        "requirements": "Win 4 battles in a row with Momochi Zabuza or Hoshigaki Kisame. (0/4) Win 15 battles with any Ninja of the Mist Village. (4/15)",
        "reward_text": "Mission \"The Lone Swordsman\" completion.Chojuro (S)",
        "reward_img": "https://i.imgur.com/WMSVj5I.jpg"
    },
    {
        "name": "A Respected Cloud Ninja",
        "img": "https://i.imgur.com/TqLQPTZ.jpeg",
        "requirements": "Win 20 battles with Killer Bee (S). (0/20)",
        "reward_text": "Mission \"A Respected Cloud Ninja\" completion.Shee (S)",
        "reward_img": "https://i.imgur.com/lBS7djv.png"
    },
    {
        "name": "The Rock of the Rock Village",
        "img": "https://i.imgur.com/B9MEmj4.jpeg",
        "requirements": "Win 5 battles in a row with Deidara (S). (0/5) Win 16 battles with Deidara (S). (0/16)",
        "reward_text": "Mission \"The Rock of the Rock Village\" completion.Akatsuchi (S)",
        "reward_img": "https://i.imgur.com/Fu0lus7.png"
    },
    {
        "name": "The Shrewd Kunoichi",
        "img": "https://i.imgur.com/9zCBfJz.png",
        "requirements": "Win 3 battles in a row with Akatsuchi (S). (0/3) Win 20 battles with Akatsuchi (S). (0/20)",
        "reward_text": "Mission \"The Shrewd Kunoichi\" completion.Kurotsuchi (S)",
        "reward_img": "https://i.imgur.com/Gwr8OgN.png"
    },
    {
        "name": "The Rocks Second in Command",
        "img": "https://i.imgur.com/9NxDMvu.png",
        "requirements": "Win 3 battles in a row with Ittan (S). (0/3) Win 20 battles with Ittan (S). (0/20)",
        "reward_text": "Mission \"The Rocks Second in Command\" completion.Kitsuchi (S)",
        "reward_img": "https://i.imgur.com/UIvCvlp.png"
    },
    {
        "name": "Maki of the Sand",
        "img": "https://i.imgur.com/oxZwdxe.png",
        "requirements": "Win 4 battles in a row with any Ninja of the Sand Village. (0/4) Win 20 battles with any Ninja of the Sand Village. (0/20)",
        "reward_text": "Mission \"Maki of the Sand\" completion.Maki (S)",
        "reward_img": "https://i.imgur.com/7Aokrcx.png"
    },
    {
        "name": "A New Power",
        "img": "https://i.imgur.com/SiloTN6.png",
        "requirements": "Win 6 battles in a row with Kyuubi Naruto. (0/6) Win 5 battles in a row with Four Tail Kyuubi Naruto (S). (0/5) Win 4 battles in a row with Uzumaki Kushina. (0/4) Win 3 battles in a row with Killer Bee (S). (0/3) Win 20 battles with Uzumaki Naruto (S). (20/20) Use Uzumaki Kushina's \"Adamantine Sealing Chains\" 15 times. (0/15)",
        "reward_text": "Mission \"A New Power\" completion.Shinobi Alliance Naruto (S)",
        "reward_img": "https://i.imgur.com/VlK9BfK.png"
    },
    {
        "name": "The Will of the Senju",
        "img": "https://i.imgur.com/T9o9u1J.png",
        "requirements": "Win 6 battles in a row with Tsunade. (0/6) Win 24 battles with Tsunade. (0/24)",
        "reward_text": "Mission \"The Will of the Senju\" completion.Tsunade (S)",
        "reward_img": "https://i.imgur.com/TgVKWQY.png"
    },
    {
        "name": "The Child of Rain",
        "img": "https://i.imgur.com/2PeA5Uw.png",
        "requirements": "Win 15 battles with Uzumaki Naruto. (15/15) Win 3 battles in a row with Uzumaki Naruto. (0/3) Win 15 battles with Haruno Sakura. (15/15) Win 3 battles in a row with Haruno Sakura. (0/3) Win 15 battles with Nara Shikamaru. (15/15) Win 3 battles in a row with Nara Shikamaru. (0/3) Win 15 battles with Akimichi Chouji. (15/15) Win 3 battles in a row with Akimichi Chouji. (0/3) Win 15 battles with Yamanaka Ino. (15/15) Win 3 battles in a row with Yamanaka Ino. (3/3) Win 15 battles with Inuzuka Kiba. (6/15) Win 3 battles in a row with Inuzuka Kiba. (0/3)",
        "reward_text": "Mission \"The Child of Rain\" completion.Edo Tensei Yota (S)",
        "reward_img": "https://i.imgur.com/CgXEKRN.png"
    }
];
