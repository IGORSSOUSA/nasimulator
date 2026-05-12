const characters = [
    {
        "id": 1,
        "name": "Uzumaki Naruto",
        "img": "https://i.imgur.com/B52DL1t.png",
        "lore": "A Genin from Team 7, Naruto is an orphan with the goal to one day become Hokage. Using his signature move, Shadow Clones, Naruto is able to perform powerful moves such as the Uzumaki Naruto Combo and the Rasengan.",
        "skills": [
            {
                "name": "Uzumaki Naruto Combo",
                "img": "https://i.imgur.com/Uy1TKG3.png",
                "description": "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones', this skill will deal 10 additional damage.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Rasengan",
                "img": "https://i.imgur.com/thNhBRH.png",
                "description": "Naruto hits one enemy with a ball of chakra, dealing 45 damage to them and stunning their skills for 1 turn. Requires 'Shadow Clones'.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Shadow Clones",
                "img": "https://i.imgur.com/98c5RRL.png",
                "description": "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 5 turns. During this time, 'Uzumaki Naruto Combo' is improved and will deal an additional 10 damage and 'Rasengan' may be used.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sexy Technique",
                "img": "https://i.imgur.com/Aue7Pce.png",
                "description": "This skill makes Uzumaki Naruto invulnerable for 1 turn. During 'Kyuubi's Chakra Awakening', this skill will be replaced by 'Kyuubi's Presence' and will be classed as Mental.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Passive: Kyuubi's Chakra Awakening",
                "img": "https://i.imgur.com/vU2LIZQ.png",
                "description": "When Naruto reaches 50 health for the first time, Kyuubi's chakra will awaken, healing Naruto for 5 health every turn permanently. During this time, Naruto will deal 5 additional damage and 'Shadow Clones' will grant him 15 unpierceable damage reduction instead. Passives cannot be removed.",
                "cooldown": "None",
                "classes": [
                    "Instant"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 2,
        "name": "Haruno Sakura",
        "img": "https://i.imgur.com/TWShCf2.png",
        "lore": "A Genin from Team 7, Sakura is very intelligent, but self-conscious about herself. Having just recently received training from Tsunade, Sakura is now able to deliver powerful punches and heal her own allies.",
        "skills": [
            {
                "name": "KO Punch",
                "img": "https://i.imgur.com/x0Yqker.png",
                "description": "Sakura punches one enemy with all her strength, dealing 20 damage to them and stunning their physical and mental skills for 1 turn. During 'Inner Sakura', this skill will deal 10 additional damage.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Cure",
                "img": "https://i.imgur.com/M2O5AdG.png",
                "description": "Using basic healing techniques, Sakura heals herself or an ally for 25 health.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Inner Sakura",
                "img": "https://i.imgur.com/03BjSkn.jpg",
                "description": "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction. During this time, Sakura will ignore non-damage effects and 'KO Punch' will deal 10 additional damage.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sakura Replacement Technique",
                "img": "https://i.imgur.com/hGOwcqv.png",
                "description": "This skill makes Haruno Sakura invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 3,
        "name": "Uchiha Sasuke",
        "img": "https://i.imgur.com/Y6S9VsR.png",
        "lore": "A Genin from Team 7, Sasuke is the lone survivor of the Uchiha clan and has sworn vengeance against his brother. Using his sharingan, Sasuke is able to anticipate incoming attacks and is capable of advanced offensive moves.",
        "skills": [
            {
                "name": "Lion Combo",
                "img": "https://i.imgur.com/tEIH5fQ.png",
                "description": "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Chidori",
                "img": "https://i.imgur.com/kQpuuuX.png",
                "description": "Using a lightning element attack jutsu, Sasuke deals 40 piercing damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'. Requires 'Sharingan' to be active on Sasuke.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sharingan",
                "img": "https://i.imgur.com/Sv53VXt.png",
                "description": "Sasuke targets one enemy. For 4 turns, Sasuke will gain 25% damage reduction and 'Chidori' may be used. During this time, that enemy will receive an additional 15 damage from 'Lion Combo' and 'Chidori'.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Swift Block",
                "img": "https://i.imgur.com/F29QZe1.png",
                "description": "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Passive: Cursed Seal Awakening",
                "img": "https://i.imgur.com/wHV5DSC.png",
                "description": "When Sasuke reaches 50 health for the first time, Cursed Seal will awaken, granting Sasuke 25% unpierceable damage reduction permanently. During this time, Sasuke's skills cannot be countered or reflected and 'Sharingan' will also make the enemy unable to reduce damage or become invulnerable.",
                "cooldown": "None",
                "classes": [
                    "Instant"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 4,
        "name": "Inuzuka Kiba",
        "img": "https://i.imgur.com/2RwMXy9.png",
        "lore": "A Genin from Team 8, Kiba is a member of the Inuzuka clan, and is both short-tempered and impulsive. Using his dog, Akamaru, Kiba is capable of powerful taijutsu or fusing with Akamaru to become a deadly double headed dog.",
        "skills": [
            {
                "name": "Garouga",
                "img": "https://i.imgur.com/bDo7cUF.png",
                "description": "Kiba deals 30 damage to one enemy. During 'Double Headed Wolf', this skill is improved and will cost 1 less random chakra.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Double Headed Wolf",
                "img": "https://i.imgur.com/dTMLAr4.png",
                "description": "Kiba and Akamaru turn into a giant beast and attack all enemies, dealing 15 damage to them for 3 turns. The following 3 turns, 'Garouga' is improved and will cost 1 less random chakra. During this time, Kiba gains 50% unpierceable damage reduction.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Dynamic Air Marking",
                "img": "https://i.imgur.com/I6iXYsf.png",
                "description": "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double Headed Wolf' and 'Garouga' will deal 10 additional damage to them. This skill may not be used on an enemy already affected by it.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Smoke Bomb",
                "img": "https://i.imgur.com/SM6uB5m.png",
                "description": "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 5,
        "name": "Aburame Shino",
        "img": "https://i.imgur.com/XSgn9p9.png",
        "lore": "A Genin from Team 8, Shino is the successor of the Aburame clan, and a very reserved and tactical fighter. Using the bugs that live inside his body, Shino is able to leech the chakra off his enemies, or protect his entire team.",
        "skills": [
            {
                "name": "Chakra Leach",
                "img": "https://i.imgur.com/mNTreml.png",
                "description": "Shino directs his chakra draining bugs to one enemy, dealing 20 affliction damage and stealing 1 taijutsu or genjutsu chakra from their chakra pool. If this skill successfully steals a chakra from the opponent, this skill will cost an extra random chakra for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Female Bug",
                "img": "https://i.imgur.com/MRWPHSi.png",
                "description": "Shino directs one of his female bugs to attach itself. For 4 turns, 'Chakra Leach' will deal 5 additional damage to one enemy. During this time, if that enemy uses a new harmful skill, they will deal 5 less non-affliction damage for 1 turn. This skill stacks.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Bug Wall",
                "img": "https://i.imgur.com/Zvu9ydw.png",
                "description": "Shino calls millions of bugs to create a wall protecting himself and his allies and granting them 20 points of permanent destructible defense.",
                "cooldown": "5",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Bug Clone",
                "img": "https://i.imgur.com/MnV2zJn.png",
                "description": "This skill makes Aburame Shino invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 6,
        "name": "Hyuuga Hinata",
        "img": "https://i.imgur.com/e5935Kz.png",
        "lore": "A Genin from Team 8, Hinata is the next in line in the Hyuuga clan, but she is shy and very withdrawn. Using the trademark Byakugan of the Hyuuga, Hinata is able to delicately target an enemy's Chakra Points while defending the team.",
        "skills": [
            {
                "name": "Hinata Gentle Fist",
                "img": "https://i.imgur.com/hiQouXW.png",
                "description": "Using the Hyuuga Clan's style of taijutsu, Hinata deals 20 damage to one enemy. During 'Byakugan', this skill will remove 1 taijutsu or ninjutsu chakra.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Eight Trigrams 64 Palms Protection",
                "img": "https://i.imgur.com/nyci2QP.png",
                "description": "Hinata deals 10 piercing damage to all enemies for 2 turns. For 1 turn, if Hinata or her allies is affected by a new damage skill, they will become invulnerable for 1 turn*. During 'Byakugan', this skill will deal 5 additional damage.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Action",
                    "Unique",
                    "Instant*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Byakugan",
                "img": "https://i.imgur.com/T4KZRDT.png",
                "description": "Hinata activates her Byakugan and gains 50% damage reduction for 4 turns. During this time, 'Hinata Gentle Fist' and 'Eight Trigrams 64 Palms Protection' will be improved and 'Byakugan' will reveal any invisible skills used by the enemy team. This skill cannot be countered and it ends if Hinata dies.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Hinata Block",
                "img": "https://i.imgur.com/GLXR6wv.png",
                "description": "This skill makes Hyuuga Hinata invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 7,
        "name": "Nara Shikamaru",
        "img": "https://i.imgur.com/K2zZmN5.png",
        "lore": "A Genin from Team 10, a member of the Nara clan, Shikamaru is considered to be the smartest Genin of all the Konoha 11. Using his bloodline, Shikamaru can manipulate the shadows in the battlefield to disable and attack his enemies.",
        "skills": [
            {
                "name": "Meditate",
                "img": "https://i.imgur.com/a7S5C5w.png",
                "description": "Shikamaru begins thinking up a strategy against one enemy, marking them for 5 turns. During this time, the initial use of 'Shadow-Neck Bind' and 'Shadow Imitation' will last 1 additional turn on them. This skill cannot be countered or reflected and may not used on an enemy already affected by it.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Shadow-Neck Bind",
                "img": "https://i.imgur.com/CmEudLR.png",
                "description": "Shikamaru chokes all enemies, making them unable to reduce damage and becoming invulnerable* while dealing 15 damage to them for 1 turn. The following turn, this skill can be used again to deal 15 damage to all enemies for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Action",
                    "Instant*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Shadow Imitation",
                "img": "https://i.imgur.com/eC9GWCD.png",
                "description": "Shikamaru captures all enemies in shadows, stunning their non-mental skills for 1 turn.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Control"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Shikamaru Hide",
                "img": "https://i.imgur.com/GhEHgrl.png",
                "description": "This skill makes Nara Shikamaru invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 8,
        "name": "Akimichi Chouji",
        "img": "https://i.imgur.com/NxOq035.png",
        "lore": "A Genin from Team 10, Chouji is a member of the Akimichi clan, a large eater, and a close friend to his allies. While innately strong, Chouji is able to sacrifice his own life using special pills from his clan to become insanely powerful.",
        "skills": [
            {
                "name": "Partial Double Size",
                "img": "https://i.imgur.com/cnZD5Wd.png",
                "description": "Chouji doubles the size of his arms and attacks one enemy, dealing 20 damage to them.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Meat Tank",
                "img": "https://i.imgur.com/sCIWub7.png",
                "description": "Chouji transforms into a meat tank, becoming invulnerable for 2 turns. If targetable, one enemy will be dealt 10 damage for 2 turns.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Action",
                    "Instant*",
                    "Melee"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Akimichi Pills",
                "img": "https://i.imgur.com/mlL0qYo.png",
                "description": "Chouji eats a pill, taking 15 affliction damage*. 'Partial Double Size' will deal 20 additional damage and 'Meat Tank' will deal 10 additional damage permanently. Each use of this skill will deal 5 more affliction damage and will cost 2 additional random chakra. Chouji can only eat three pills.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique",
                    "Affliction*"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Effortless Block",
                "img": "https://i.imgur.com/wVVFj3V.png",
                "description": "This skill makes Akimichi Chouji invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Passive: Butterfly Mode",
                "img": "https://i.imgur.com/cRqzTG1.png",
                "description": "When Chouji eats the three pills, he will activate the Butterfly Mode, gaining 75% unpierceable damage reduction permanently and gaining 1 random chakra every turn.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 9,
        "name": "Yamanaka Ino",
        "img": "https://i.imgur.com/5pxmVTr.png",
        "lore": "A Genin from Team 10, Ino is a member of the Yamanaka clan, and a very confident and vain girl. Ino is able to use a variety of abilities to take over and control her enemies, making it difficult to tell friend from foe.",
        "skills": [
            {
                "name": "Mind Body Disturbance",
                "img": "https://i.imgur.com/rAnVK81.png",
                "description": "Using this skill Ino stuns one enemy's physical and chakra skills for 1 turn. During this time, that enemy will be unable to reduce damage or become invulnerable. One random different enemy will receive 20 damage that ignores invulnerability.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Change of Heart",
                "img": "https://i.imgur.com/r6vPVIR.png",
                "description": "Ino takes over the mind of an enemy. For 3 turns, that enemy cannot reduce damage or become invulnerable and their harmful skills are stunned. The following 2 turns, this skill will be replaced by 'Art of the Valentine'.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Control"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Chakra Hair Strand Trap",
                "img": "https://i.imgur.com/4VxNq83.png",
                "description": "Ino creates a trap for an enemy. For 1 turn, if that enemy uses a new harmful skill, then for 2 turns, 'Change of Heart' will last 1 additional turn on that enemy and 'Mind Body Disturbance' will make that enemy unable to reduce damage or become invulnerable for 2 turns instead. This skill is invisible.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Ino Block",
                "img": "https://i.imgur.com/2o5RnKa.png",
                "description": "This skill makes Yamanaka Ino invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Art of the Valentine",
                "img": "https://i.imgur.com/RfWzT2j.png",
                "description": "Ino deals 25 damage to one enemy. If used on an enemy affected by 'Change of Heart', this skill will deal 30 damage instead.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 10,
        "name": "Tenten",
        "img": "https://i.imgur.com/3RNjwki.png",
        "lore": "A member of team Gai, Tenten is a tomboyish weapon specialist who believes a kunoichi can be as strong as a male ninja. In battle, Tenten surrounds the battlefield in weapons, using them for damage and for disabling her",
        "skills": [
            {
                "name": "Twin Rising Dragons",
                "img": "https://i.imgur.com/9UePPXl.png",
                "description": "Tenten creates numerous weapons from her scroll, dealing 15 damage to all enemies for 2 turns. The following 2 turns, this skill will cost 1 taijutsu and will deal 20 damage to one enemy and 10 to all others.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Twin Rising Dragons Trap",
                "img": "https://i.imgur.com/4XOUAzc.png",
                "description": "Tenten uses multiple projectiles on all enemies, dealing 0 damage to them and an additional 5 damage for every time they were damaged by 'Twin Rising Dragons'. While improved, all enemies will have their harmful non-mental skills stunned for 1 turn.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Twin Rising Dragons Full Release",
                "img": "https://i.imgur.com/HYiz4vX.png",
                "description": "Tenten releases her full potential, becoming invulnerable to non-mental damage skills for 1 turn. The following 4 turns, the initial use of 'Twin Rising Dragons' will last 3 turns instead and 'Twin Rising Dragons Trap' will stun all harmful non-mental skills for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Spiked Boulder Shield",
                "img": "https://i.imgur.com/Wft7mi8.png",
                "description": "This skill makes Tenten invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 11,
        "name": "Hyuuga Neji",
        "img": "https://i.imgur.com/SnXl3u9.jpg",
        "lore": "A member of team Gai; Neji is the most talented member of the Hyuuga clan in both mind and body. Neji can use the most powerful techniques of his clan, shutting down an enemy's chakra or defending with an absolute defense.",
        "skills": [
            {
                "name": "Neji Gentle Fist",
                "img": "https://i.imgur.com/TO1FgCV.png",
                "description": "Using the Hyuuga clan's special form of taijutsu, Neji deals 25 damage to one enemy for 2 turns. Each turn, their non-affliction damage will be reduced to a maximum of 25. The following turn, 'Eight Trigram Sixty-Four Palms' will cost 1 taijutsu and 1 random chakra.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Eight Trigram Heavenly Spin",
                "img": "https://i.imgur.com/SbXg9y7.png",
                "description": "Neji becomes invulnerable for 1 turn while dealing 15 damage to all enemies. The following turn, 'Eight Trigram Sixty-Four Palms' will cost 1 bloodline and 1 random chakra.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Eight Trigram Sixty-Four Palms",
                "img": "https://i.imgur.com/gLzCj5f.png",
                "description": "Neji closes all of one enemy's chakra nodes, dealing 35 piercing damage to them and removing 1 taijutsu or ninjutsu chakra from them for 2 turns.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Neji Byakugan",
                "img": "https://i.imgur.com/8mfr9KF.png",
                "description": "This skill makes Hyuuga Neji invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 12,
        "name": "Rock Lee",
        "img": "https://i.imgur.com/MJVDU1d.png",
        "lore": "A member of team Gai; Lee is a genin with no talent at all in ninjutsu or genjutsu, so he has focused his life all on taijutsu. With his powerful hand to hand techniques, Lee can crush any defense with his immense power.",
        "skills": [
            {
                "name": "High Speed Taijutsu",
                "img": "https://i.imgur.com/QV0sr1f.png",
                "description": "Lee attacks one enemy with amazing speed, dealing 25 piercing damage to them.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Front Lotus",
                "img": "https://i.imgur.com/AfJc8pr.png",
                "description": "Lee launches an enemy into the air and slams them down with a great force, dealing 35 piercing damage to that enemy. This skill will be replaced by 'Final Lotus' for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Fifth Gate Opening",
                "img": "https://i.imgur.com/xT7u5Ik.png",
                "description": "Lee opens five of his chakra gates. Permanently, 'High Speed Taijutsu' and 'Front Lotus' may be used. During this time, Lee will deal 5 additional damage each time he is damaged by a skill. This skill will be replaced by 'Fiery Spirit'.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Evasion",
                "img": "https://i.imgur.com/FzuCWSf.png",
                "description": "This skill makes Rock Lee invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Fiery Spirit",
                "img": "https://i.imgur.com/ppEEGYm.png",
                "description": "Lee hypes himself up, pushing himself to fight harder, gaining 1 taijutsu chakra and healing 10 health and an additional 10 health for each 25 health Lee has lost.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Final Lotus",
                "img": "https://i.imgur.com/TJ6PEz2.png",
                "description": "Lee uses his strongets ability, expending all his chakra and dealing 50 piercing damage to one enemy. Afterwards, Lee takes 5 affliction damage*. This skill cannot be countered.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "*Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            }
        ]
    },
    {
        "id": 13,
        "name": "Gaara of the Desert",
        "img": "https://i.imgur.com/3aOyLr1.png",
        "lore": "A Jinchuuriki from the Village of Sand, Gaara is an unstable ninja with the Shukaku, the one-tailed beast. With the Shukaku, and his own abilities, Gaara can manipulate the sand in his gourd to crush the enemy, or defend himself.",
        "skills": [
            {
                "name": "Desert Graveyard",
                "img": "https://i.imgur.com/xWUrKCM.png",
                "description": "Gaara crushes one enemy with sand, that enemy will be dealt 50 piercing damage and all 'Desert Coffin' stacks will be removed from them. This skill cannot be countered.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Desert Coffin",
                "img": "https://i.imgur.com/Gjak99o.png",
                "description": "Gaara surrounds one enemy with a pile of sand, stunning their non-mental skills for 1 turn. Permanently, that enemy will receive 25 additional damage from 'Desert Graveyard'. This skill stacks.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Third Eye",
                "img": "https://i.imgur.com/nAfddU1.png",
                "description": "Gaara connects the third eye with his optic nerve using chakra. For 1 turn, any enemy that uses a new harmful skill will grant Gaara 15 permanent destructible defense; Any enemy that uses a new helpful skill will grant Gaara 1 random chakra. This skill is invisible.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sand Shield",
                "img": "https://i.imgur.com/VMr3Nwd.png",
                "description": "This skill makes Gaara of the Desert invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 14,
        "name": "Kankuro",
        "img": "https://i.imgur.com/5uxGoSN.png",
        "lore": "The brother of Gaara, and a master puppeeter, Kankuro is one of the three sand siblings. With his puppets, Kankuro is able to use the varied abilities hidden inside them to attack his enemies, or even protect himself.",
        "skills": [
            {
                "name": "Black Secret Machine One Shot",
                "img": "https://i.imgur.com/dHWzRYI.png",
                "description": "Kankuro uses two of his puppets to stab one enemy, dealing 30 piercing damage to them. During 'Puppet Preparation', this skill will deal an additional 5 damage.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Poison Bomb",
                "img": "https://i.imgur.com/vJFqLIY.png",
                "description": "One of Kankuro's puppets creates a cloud of smoke, dealing 10 affliction damage to all enemies. During 'Puppet Preparation', this skill will last 1 additional turn.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Puppet Preparation",
                "img": "https://i.imgur.com/Kya84CC.png",
                "description": "Kankuro prepares his puppets for combat, gaining 10 points of destructible defense for 4 turns. The following 3 turns, Kankuro's skills will be improved.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Puppet Replacement Technique",
                "img": "https://i.imgur.com/mpGOYy6.png",
                "description": "This skill makes Kankuro invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 15,
        "name": "Temari",
        "img": "https://i.imgur.com/kTLEaMP.png",
        "lore": "The elder sister of Gaara and Kankuro, Temari is a somewhat cruel and blunt ninja that fights using the wind at her side. With her fan, Temari can create powerful gusts of wind that she can manipulate at her desire.",
        "skills": [
            {
                "name": "Cutting Whirlwind",
                "img": "https://i.imgur.com/XA5pGTk.png",
                "description": "Temari creates a razor sharp wind, dealing 20 piercing damage to one enemy and 10 piercing damage to all others enemies. For 1 turn, Temari becomes invulnerable to non-mental skills. This skill cannot be countered.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Summoning Quick Beheading Dance",
                "img": "https://i.imgur.com/z6DZR9Q.png",
                "description": "Temari summons the wind weasel Kamatari in the battlefield, dealing 35 damage to all enemies. If used one turn after 'Cutting Whirlwind', this skill will cost 1 less random chakra.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Dust Wind",
                "img": "https://i.imgur.com/JbSunqZ.png",
                "description": "Temari kicks up dust, making her team invulnerable for 1 turn. If targatable, all enemies will deal 20 less non-affliction damage for 1 turn. If used one turn after 'Cutting Whirlwind', this skill will decrease damage for 2 turns instead.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Fan Defence Technique",
                "img": "https://i.imgur.com/UBBy2S7.png",
                "description": "This skill makes Temari invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 16,
        "name": "Tsuchi Kin",
        "img": "https://i.imgur.com/omC0mq2.png",
        "lore": "One of the three sound genin; Kin is a confident ninja that likes to toy with her enemies before finishing them off. Using a set of needles and bells, Kin has a number of different effects she can create to attack her enemies.",
        "skills": [
            {
                "name": "Illusion Bell Needles",
                "img": "https://i.imgur.com/GpC5xdJ.png",
                "description": "One enemy receives 15 damage. If used one turn after 'Needle and Bell Trap', that enemy will receive 15 additional damage. If used one turn after 'Unnerving Bells', that enemy will receive 25 additional damage.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Needle and Bell Trap",
                "img": "https://i.imgur.com/jvEeZjs.png",
                "description": "One enemy will be stunned for 1 turn. If used one turn after 'Illusion Bell Needles', that enemy will be unable to reduce damage or become invulnerbale for 2 turns.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Unnerving Bells",
                "img": "https://i.imgur.com/SDppNlB.png",
                "description": "One enemy loses 1 random chakra. If used one turn after 'Illusion Bell Needles', that enemy will receive 5 additional non-affliction damage from physical skills permanently.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Sharp Analysis",
                "img": "https://i.imgur.com/E4r6BN9.png",
                "description": "This skill makes Tsuchi Kin invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 17,
        "name": "Abumi Zaku",
        "img": "https://i.imgur.com/zCdcIJ8.png",
        "lore": "Abumi Zaku is one of the three sound genin sent to the chuunin exams. He was surgically altered with hollow tubes in his arms, allowing him to create waves of compressed air.",
        "skills": [
            {
                "name": "Air Cutter",
                "img": "https://i.imgur.com/tm12H2k.png",
                "description": "Zaku fires a blast of supersonic air at one enemy, dealing 25 damage to them. The following turn, Zaku can use 'Extreme Air Cutter'.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Wall of Air",
                "img": "https://i.imgur.com/upWnlDl.png",
                "description": "Zaku alters his air wave to protect one ally for 1 turn. The first harmful skill used on that ally will be countered. If successful, Zaku will instantly apply 'Air Cutter' on the countered enemy. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Extreme Air Cutter",
                "img": "https://i.imgur.com/Yo7IQNe.png",
                "description": "Zaku boosts his air waves to a frightening level and deals 45 damage to all enemies. Afterwards, Zaku gains 1 random chakra.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Airwave Deflection",
                "img": "https://i.imgur.com/xssUpbi.png",
                "description": "This skill makes Abumi Zaku invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 18,
        "name": "Kinuta Dosu",
        "img": "https://i.imgur.com/eX7lgm2.png",
        "lore": "Perhaps the strongest of the three sound genin, Kinuta Dosu uses his implanted Melody Arm to amplify sound waves and increase the power of his taijutsu.",
        "skills": [
            {
                "name": "Resonating Echo Drill",
                "img": "https://i.imgur.com/iiBIyJS.png",
                "description": "Dosu attacks with his drill, dealing 20 damage to one enemy. For 1 turn, that enemy will deal 15 less non-affliction damage with their physical and chakra skills. If used after 'Sound Manipulation', this skill will deal an additional 10 damage.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Sound Manipulation",
                "img": "https://i.imgur.com/FsCfPfd.png",
                "description": "Dosu manipulates the sound to directly disorient one enemy, dealing 10 damage to them and stunning their skills for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Melody Arm Tuning",
                "img": "https://i.imgur.com/ONsIZzw.png",
                "description": "Dosu fine-tunes his Melody Arm to produce debilitating sound vibrations. The following 5 turns, 'Resonating Echo Drill' will deal 20 additional damage and 'Sound Manipulation' will deal 10 additional damage.",
                "cooldown": "5",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Dosu Hide",
                "img": "https://i.imgur.com/Jqlym0M.png",
                "description": "This skill makes Kinuta Dosu invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 19,
        "name": "Haku",
        "img": "https://i.imgur.com/xkQrIRT.png",
        "lore": "The sole survivor of the Yuki clan, and the subordinate of Zabuza; Haku, despite being young, holds enough potential strength to surpass almost any ninja. Using his ice based bloodline, and his intelligence, Haku can attack and defend nearly simultaneously.",
        "skills": [
            {
                "name": "Water Needles",
                "img": "https://i.imgur.com/2rG04gY.png",
                "description": "Haku flings a number of water based needles, dealing 30 piercing damage to one enemy. This skill will deal an additional 10 damage to that enemy if they are stunned. While improved, this skill will deal 40 piercing damage to the target instead.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Acupuncture",
                "img": "https://i.imgur.com/UH3730n.png",
                "description": "Haku hits the acupuncture points of one enemy, stunning their skills for 1 turn. While improved, this skill will last 2 turns instead. This skill ignores invulnerability.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Demonic Ice Mirrors",
                "img": "https://i.imgur.com/nV4rFP7.png",
                "description": "Haku creates numerous mirrors, dealing 10 damage to all enemies for 3 turns. The following 3 turns, 'Water Needles' and 'Acupuncture' will be improved. During this time, Haku gains 30 points of destructible defense and ignores stun effects.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Action",
                    "Instant*",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Mirror Transfer",
                "img": "https://i.imgur.com/3DsZLu9.png",
                "description": "This skill makes Haku invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 20,
        "name": "Young Kakashi",
        "img": "https://i.imgur.com/Jgctdrf.png",
        "lore": "A jounin at the age of 13 and the son of the legendary White Fang, Kakashi is a member of Team Minato. Using his early ninjutsu, and borrowed sharingan, Kakashi can fight any adult on an equal level.",
        "skills": [
            {
                "name": "White Fang Slash",
                "img": "https://i.imgur.com/IpdntOA.png",
                "description": "Using his sword, Young Kakashi deals 20 piercing damage to one enemy. For 1 turn, that enemy will deal 5 less non-affliction damage. The following turn, Young Kakashi will deal 10 additional damage with his skills.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Amateur Raikiri",
                "img": "https://i.imgur.com/DFBg2VL.png",
                "description": "Using a weaker form of his signature jutsu, Young Kakashi deals 25 piercing damage to one enemy. For 1 turn, that enemy will deal 5 less non-affliction damage. The following turn, Young Kakashi will deal 10 additional damage with his skills.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Implanted Sharingan",
                "img": "https://i.imgur.com/nBwjX6M.png",
                "description": "For 1 turn, if one enemy uses a skill that removes/steals chakra, Kakashi will gain 1 random chakra; if they use a skill that stuns, Kakashi's skills will stun for 1 turn; if they use a skill that damages, Kakashi will deal additional 10 damage for 1 turn. This skill is invisible. Ends when triggered.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Sword Parry",
                "img": "https://i.imgur.com/2L2GQSA.png",
                "description": "This skill makes Young Kakashi invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 21,
        "name": "Uchiha Obito",
        "img": "https://i.imgur.com/YwerQiX.png",
        "lore": "A minor member of the Uchiha clan and a chuunin, Obito is a member of Team Minato. While Obito does not possess any singular powerful ability, he can use all of what he knows with his developing sharingan to put up a fight.",
        "skills": [
            {
                "name": "Piercing Stab",
                "img": "https://i.imgur.com/aIkGH5N.png",
                "description": "Finding an opening in his enemy's defense, Obito quickly stabs them, dealing 15 damage to the enemy. During 'Obito Sharingan', this skill deals 25 piercing damage while ignoring invulnerability.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Obito Goukakyuu no Jutsu",
                "img": "https://i.imgur.com/GlgVYSz.png",
                "description": "Obito breathes searing fire on one enemy dealing 15 affliction damage to them for 2 turns. During 'Obito Sharigan', this skill will deal 30 affliction damage instantly while ignoring invulnerability.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Obito Sharingan",
                "img": "https://i.imgur.com/uB9HwbX.png",
                "description": "Obito activates his sharingan, gaining 15 points of damage reduction for 4 turns. During this time, if any of Obito's allies use a new skill, the cost of their harmful skills will be decreased by 1 random chakra for 1 turn. This skill cannot trigger twice in a row on the same ally. This skill ends if Obito dies.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sparkling Parry",
                "img": "https://i.imgur.com/6ViiDkX.png",
                "description": "This skill makes Uchiha Obito invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 22,
        "name": "Nohara Rin",
        "img": "https://i.imgur.com/kJ3u53S.png",
        "lore": "A chuunin medical nin assigned to Team Minato, Rin is a quiet and passive girl who focuses on keeping her team mates alive. Using her healing abilities, and her intelligence, Rin is able to heal her allies while trapping her enemies.",
        "skills": [
            {
                "name": "Pit Trap",
                "img": "https://i.imgur.com/k6wzRLL.png",
                "description": "Rin traps one enemy, dealing 20 piercing damage to them. For 1 turn, if that enemy uses a new skill, they will take another 10 piercing damage. This skill ignores invulnerability.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Healing Touch",
                "img": "https://i.imgur.com/zLmVk8s.png",
                "description": "Rin heals herself or an ally for 25 health and removes all harmful affliction skills from them.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Medical Kit",
                "img": "https://i.imgur.com/c4HwOLU.png",
                "description": "Rin gives her medical kit to herself or an ally, granting them 50% damage reduction and healing them 15 health for 3 turns.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Flee",
                "img": "https://i.imgur.com/0XboBBP.png",
                "description": "This skill makes Nohara Rin invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 23,
        "name": "Hyuuga Hanabi",
        "img": "https://i.imgur.com/ovkEczm.jpg",
        "lore": "The younger sister of Hinata, Hanabi is a Hyuuga clan member from the main branch family who trains endlessly to prove her worth. While young, Hanabi's skills surpass her elder sister's, and although unable to utilize her byakugan yet and lacking in physical strength, Hanabi makes up for it with her tenacity and speed.",
        "skills": [
            {
                "name": "Hanabi Gentle Fist",
                "img": "https://i.imgur.com/it1bsDV.png",
                "description": "Hanabi deals 20 damage to one enemy for 1 turn, and 10 damage the following turn. For 1 turn, if that enemy uses a new non-chakra skill, they will lose 1 non-genjutsu chakra.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Hanabi Kaiten",
                "img": "https://i.imgur.com/plUIFd7.png",
                "description": "Hanabi spins at one enemy, dealing 20 damage to them for 1 turn, and 10 damage the following turn. For 1 turn, if that enemy uses a new non-physical skill, their skills will be stunned for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Unyielding Tenacity",
                "img": "https://i.imgur.com/ZKzud8s.jpg",
                "description": "Hanabi fights to the bitter end. For 2 turns, Hanabi will be unable to be killed and will ignore all stun effects. During this time, 'Hanabi Gentle Fist' and 'Hanabi Kaiten' will cost 1 random chakra and Hanabi will deal 5 additional damage.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Byakugan Insight",
                "img": "https://i.imgur.com/To9EsI6.png",
                "description": "This skill makes Hyuuga Hanabi invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 24,
        "name": "Demon Brothers",
        "img": "https://i.imgur.com/rO5gKY6.png",
        "lore": "A duo of Mist Nin who work for Zabuza, the Demon Brothers specialize in assassinating their targets with their shuriken chain.",
        "skills": [
            {
                "name": "Chain Wrap",
                "img": "https://i.imgur.com/Jy3kQlZ.png",
                "description": "Demon Brothers wrap one enemy. The following 3 turns, if Demon Brothers uses a new harmful skill on that enemy, their non-mental skills will be stunned for 1 turn. During this time, Demon Brothers becomes invulnerable to ranged skills and this skill is replaced by 'Chain Shred'.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Bladed Gauntlet",
                "img": "https://i.imgur.com/v9AIQOF.png",
                "description": "Demon Brothers uses their gauntlets shredding, gaining 10 permanent destructible defense and dealing 30 damage to one enemy. This skill will deal an additional 5 damage to the enemy affected by 'Chain Wrap'.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Puddle Illusion",
                "img": "https://i.imgur.com/CSs3png.png",
                "description": "The Demon Brothers hide in water, gaining 20 points of destructible defense and 1 taijutsu chakra.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Demon Brothers Vanish",
                "img": "https://i.imgur.com/Xzic8o5.png",
                "description": "This skill makes Demon Brothers invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Chain Shred",
                "img": "https://i.imgur.com/7Fr4FND.png",
                "description": "Demon Brothers rip apart one enemy affected by 'Chain Wrap', dealing 45 piercing damage to them.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            }
        ]
    },
    {
        "id": 25,
        "name": "Momochi Zabuza",
        "img": "https://i.imgur.com/OzHvYsF.png",
        "lore": "Zabuza is a missing-nin from the Hidden Mist Village. He is a frightening opponent attacking his enemies out of the fog he creates.",
        "skills": [
            {
                "name": "Silent Homicide Technique",
                "img": "https://i.imgur.com/uKEgTlB.png",
                "description": "Using an advanced assasination technique, Zabuza deals 30 piercing damage to one enemy. During 'Hidden Mist Technique', this skill will be improved and will deal 45 piercing damage to one enemy which ignores invulnerability.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Great Waterfall Technique",
                "img": "https://i.imgur.com/Q3i8RGc.png",
                "description": "Zabuza knocks all enemies down with a giant wave of water, dealing 10 damage to them and stunning their physical and ranged skills for 1 turn.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Hidden Mist Technique",
                "img": "https://i.imgur.com/1qbKqeg.png",
                "description": "Zabuza creates a dense fog. For 2 turns, all enemies' physical and mental skills will cost 1 additional random chakra; This effect cannot be ignored. The following 2 turns, Zabuza gains 25% damage reduction and 'Silent Homicide Technique' will be improved. This skill ignores invulnerability.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Water Clone Zabuza",
                "img": "https://i.imgur.com/7qpg9re.png",
                "description": "This skill makes Momochi Zabuza invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 26,
        "name": "Oboro",
        "img": "https://i.imgur.com/XLe6m8K.png",
        "lore": "A Rain Genin in the Chuunin exams, Oboro specializes in distracting his opponents with illusions and attacking when unexpected.",
        "skills": [
            {
                "name": "Underground Ambush",
                "img": "https://i.imgur.com/0mrTugT.png",
                "description": "Hiding in the ground, Oboro attacks one enemy from behind, dealing 20 damage and stunning their physical and mental skills for 1 turn. During 'Haze Clones', this skill is improved and targets all enemies instead.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Exploding Kunai",
                "img": "https://i.imgur.com/LRf4G2h.png",
                "description": "Oboro throws a kunai with an exploding tag on it dealing 15 damage to all enemies. During 'Haze Clones', this skill is improved and deals 20 damage.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Haze Clones",
                "img": "https://i.imgur.com/ByWGkAm.png",
                "description": "Oboro creates illusionary duplicates of himself. The following 3 turns, 'Exploding Kunai' and 'Underground Ambush' will be improved. During this time, Oboro gains 30 points of destructible defense and becomes invulnerable to mental skills.",
                "cooldown": "5",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Fleet of Foot",
                "img": "https://i.imgur.com/A1qWXdJ.png",
                "description": "This skill makes Oboro invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 27,
        "name": "Shigure",
        "img": "https://i.imgur.com/lLYJBpS.png",
        "lore": "A Genin from the Village of Rain, Shigure specializes in using his chakra to control needles hidden in his umbrellas.",
        "skills": [
            {
                "name": "Umbrella Toss",
                "img": "https://i.imgur.com/oo2VNIZ.png",
                "description": "Shigure tosses his umbrellas into the air, gaining 5 points of damage reduction for 3 turns. During this time, any enemy that uses a new skill on Shigure or his allies will be dealt 5 piercing damage. The following 3 turns, 'Sprinkling Needles' may be used. This skill ends when Shigure dies.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Sprinkling Needles",
                "img": "https://i.imgur.com/IiYoFlG.png",
                "description": "Needles rain down from Shigure's umbrellas, dealing 10 piercing damage to all enemies for 3 turns. The following 3 turns, 'Needle Barrage' may be used on enemies affected by this skill. This skill cannot be countered and it requires 'Umbrella Toss' to be used.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Action",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Needle Barrage",
                "img": "https://i.imgur.com/72iKrUX.png",
                "description": "Shigure specifically directs needles at one enemy, dealing 30 damage to them. This skill can only target enemies that are affected by 'Sprinkling Needles'.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Umbrella Block",
                "img": "https://i.imgur.com/SVXZnxK.png",
                "description": "This skill makes Shigure invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 28,
        "name": "Shiore Orochimaru",
        "img": "https://i.imgur.com/AzUvWCt.png",
        "lore": "Originally a genin from the Hidden Grass Village attending the Chuunin Exams, Shiore was killed by Orochimaru shortly before the exams began. Orochimaru then took over Shiore's body and used it as a disguise in order to infiltrate the Chuunin Exams and scout out the potential of Uchiha Sasuke as a future vessel.",
        "skills": [
            {
                "name": "Five Elements Seal",
                "img": "https://i.imgur.com/0c8ekXI.png",
                "description": "Shiore seals one enemy, dealing 10 affliction damage to them for 3 turns. During this time, that enemy will deal 10 less non-affliction damage and their harmful skills will cost 1 additional random chakra.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Giant Snake Bind",
                "img": "https://i.imgur.com/dxhnYwl.png",
                "description": "Shiore summons a giant snake and binds one enemy, dealing 20 damage to them for 2 turns. The first turn, that enemy will be stunned for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Curse Seal",
                "img": "https://i.imgur.com/xj18zrg.png",
                "description": "Shiore places a curse seal on an enemy, stealing 5 health from them for 3 turns. While active, that enemy will be unable to become invulnerable*. During this time, if that enemy is killed, Shiore gains 1 random chakra*.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action",
                    "Affliction",
                    "Instant*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Snake Body Replacement",
                "img": "https://i.imgur.com/Sssep9n.png",
                "description": "This skill makes Shiore Orochimaru invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 29,
        "name": "Jiroubou",
        "img": "https://i.imgur.com/MuepMwr.png",
        "lore": "Jiroubou is the largest member of the Sound four. His fighting style involves powerful physical attacks in combination with manipulation of earth.",
        "skills": [
            {
                "name": "Nirvana Fist Style",
                "img": "https://i.imgur.com/p23bcPf.png",
                "description": "Jiroubou deals 30 damage to one enemy. The following turn, 'Earth Seal Mud Cannonball' will deal 10 additional damage.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Earth Seal Mud Cannonball",
                "img": "https://i.imgur.com/FD9OSvE.png",
                "description": "Jiroubou deals 20 damage to all enemies. The following turn, 'Nirvana Fist Style' will deal 10 additional damage.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Dungeon Chamber of Nothingness",
                "img": "https://i.imgur.com/HN5PgS3.png",
                "description": "Jiroubou captures the enemy team in a prison of earth, stealing 2 random chakra from their pool. Jiroubou and all allies become invulnerable for 1 turn.",
                "cooldown": "5",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Earth Wall Land Flip",
                "img": "https://i.imgur.com/DaSkMHS.png",
                "description": "This skill makes Jiroubou invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 30,
        "name": "Kidoumaru",
        "img": "https://i.imgur.com/ZSWwJiY.png",
        "lore": "Kidoumaru has spider-like skills. He has 6 arms and has the ability to create weapons and traps with a strange golden web-like liquid.",
        "skills": [
            {
                "name": "Golden Arrow",
                "img": "https://i.imgur.com/9FGWta9.png",
                "description": "Kidoumaru fires a special arrow made of enzymes from his mouth at one enemy dealing 50 piercing damage.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Summoning: Kyodaigumo",
                "img": "https://i.imgur.com/TyhkdYM.png",
                "description": "Kidoumaru summons Kyodaigumo, dealing 10 damage to all enemies for 5 turns. The following 5 turns, Kidoumaru will gain 10 permanent destructible defense each turn and any new skill an enemy uses will have its cooldown increased by 1.",
                "cooldown": "5",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Spider Web",
                "img": "https://i.imgur.com/Mcx7Ibu.png",
                "description": "Kidoumaru uses spider web on himself or an ally. For 1 turn, the first enemy to use a new harmful damage skill on that ally will be countered, and will deal 10 less damage for 2 turns. If successful, 'Spider Web' current cooldown will be increased by 1.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Golden Armor",
                "img": "https://i.imgur.com/5h0v2Qd.png",
                "description": "This skill makes Kidoumaru invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 31,
        "name": "Sakon",
        "img": "https://i.imgur.com/fXMOzMv.png",
        "lore": "Sakon usually carries a strange head around on his back. This head turns out to be his brother Ukon, who can also exit Sakon and enter other bodies in order to destroy them.",
        "skills": [
            {
                "name": "Gattling Punch",
                "img": "https://i.imgur.com/uBllXX7.png",
                "description": "Using one body, Sakon and Ukon rapidly punch one enemy, dealing 40 damage to them.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Parasite Demon Technique",
                "img": "https://i.imgur.com/MxZI7Mt.png",
                "description": "Sakon deals 15 affliction damage to one enemy permanently. During this time, Sakon gains 15 points of damage reduction and heals 5 health each turn. This skill cannot be used on the same target. This skill will end if used on a different enemy or if the affected enemy dies.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique",
                    "Melee",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Rest",
                "img": "https://i.imgur.com/5IHOsdy.png",
                "description": "Ukon rests within the body of Sakon, healing him for 30 health. This skill will end 'Parasite Demon Technique' if it's currently active.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Summoning: Rashoumon",
                "img": "https://i.imgur.com/uUrOzuw.png",
                "description": "This skill makes Sakon  invulnerable  for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 32,
        "name": "Tayuya",
        "img": "https://i.imgur.com/ZkTTfAq.png",
        "lore": "Tayuyas only weapon is a flute with which she can cast Genjutsu or control three summoned demons, The Doki.",
        "skills": [
            {
                "name": "Doki Demons",
                "img": "https://i.imgur.com/yzxk31N.png",
                "description": "Tayuya summons the Doki Demons, dealing 15 piercing damage to all enemies for 2 turns. Tayuya gains 10 points of damage reduction for 2 turns. The following turn, 'Doki Ghosts' will be improved and will remove chakra from the enemy.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Action",
                    "Unique",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Doki Ghosts",
                "img": "https://i.imgur.com/1KKY3gs.png",
                "description": "Tayuya deals 15 affliction damage to one enemy. If used after 'Doki Demons', this skill will also remove 1 ninjutsu or genjutsu chakra. If used after 'Demonic Flute Illusion', this skill will also stun the enemy's physical and chakra skills for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant",
                    "Ranged",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Demonic Flute Illusion",
                "img": "https://i.imgur.com/IPdtqHq.png",
                "description": "Playing a genjutsu melody on her flute. For 1 turn, all enemies will have their harmful skills stunned. The following turn, 'Doki Ghosts' will be improved and will stun the enemy's physical and chakra skills for 1 turn. This skill cannot be countered.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Instant",
                    "Ranged",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Tayuya Insight",
                "img": "https://i.imgur.com/XG0Xs1t.png",
                "description": "This skill makes Tayuya invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 33,
        "name": "Kimimaro",
        "img": "https://i.imgur.com/qzCv58M.png",
        "lore": "A member of the Sound Five, Kimimaro was the leader, and the strongest of the team before his illness. Kimimaro's bloodline grants him unstoppable offensive power, however, his illness is slowly killing him, giving him precious little time.",
        "skills": [
            {
                "name": "Dance of the Camellia",
                "img": "https://i.imgur.com/kwWcpw0.png",
                "description": "Kimimaro uses his superior taijutsu and arm bones as a sword dealing 30 damage to one enemy. This skill cannot be countered or reflected. Afterwards, Kimimaro will receive 5 affliction damage.*",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique",
                    "Melee",
                    "Affliction*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Dance of the Clematis",
                "img": "https://i.imgur.com/Q6rE1Ey.png",
                "description": "Kimimaro attacks one enemy with an extremely hard and sharp bone spear, dealing 40 damage to them and stunning them for 1 turn. This skill cannot be countered or reflected. Afterwards, Kimimaro will receive 10 affliction damage.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique",
                    "Melee",
                    "Affliction*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Dance of the Seedling Fern",
                "img": "https://i.imgur.com/hgM78mG.png",
                "description": "Kimimaro creates a forest of sharp bones, dealing 30 damage to all enemies and reducing all enemy physical and chakra non-affliction damage by 20 for 1 turn. This skill cannot be countered or reflected. Afterwards, Kimimaro will receive 15 affliction damage for 2 turns.*",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique",
                    "Ranged",
                    "Affliction*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Bone Defense",
                "img": "https://i.imgur.com/bSUqg3e.png",
                "description": "This skill makes Kimimaro invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 34,
        "name": "Touji Mizuki",
        "img": "https://i.imgur.com/56OlIhi.png",
        "lore": "An instructor for Konoha, Mizuki is a chuunin, and old friend of Iruka that over time grew jealous and petty. While Mizuki doesn't have any special abilities, he knows to instead be patient, and wait until the right time to strike.",
        "skills": [
            {
                "name": "Kunai Assault",
                "img": "https://i.imgur.com/tkAAwlQ.png",
                "description": "Mizuki throws a number of kunai at one enemy, dealing 15 damage to them for 2 turns.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Execution Shuriken",
                "img": "https://i.imgur.com/o617FeR.png",
                "description": "Mizuki throws one of his giant shurikens at one enemy, dealing 20 damage to them, and an additional 10 damage for each 20 health they have lost. Mizuki only carries 2 of these giant shurikens at any time and can only use this skill twice in a game",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Genjutsu Ambush",
                "img": "https://i.imgur.com/I7AmzNA.png",
                "description": "Mizuki uses his ambush tactics with genjutsu. The following 2 turns, if Mizuki uses a new harmful skill, he will become invulnerable for 1 turn. During this time, 'Kunai Assault' will have no cooldown.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Mizuki Dodge",
                "img": "https://i.imgur.com/4sdIwzV.png",
                "description": "This skill makes Touji Mizuki invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 35,
        "name": "Umino Iruka",
        "img": "https://i.imgur.com/VFwEl8B.png",
        "lore": "Iruka is one of the instructors at the Konoha ninja academy. He is a well rounded ninja with diverse abilities and skills.",
        "skills": [
            {
                "name": "Shuriken Throw",
                "img": "https://i.imgur.com/bLYgmz1.png",
                "description": "Iruka throws a couple shurikens at one enemy who takes 20 piercing damage. This skill will deal an additional 10 damage for each 30 health Iruka has lost.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Shield Ally",
                "img": "https://i.imgur.com/NmaAnE6.png",
                "description": "Iruka uses his own body to shield one ally. For 1 turn, that ally will ignore all damage dealt to them. This skill is invisible.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sealed Bombs Square Formation",
                "img": "https://i.imgur.com/tz3UXHq.png",
                "description": "Iruka creates a trap with a set of exploding seals. The following 2 turns, one enemy will take 75% more damage from melee skills. During this time, if that enemy use a new skill, they will take 20 piercing damage and this skill will end.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Kunai Parry",
                "img": "https://i.imgur.com/ZRDdP9S.png",
                "description": "This skill makes Umino Iruka invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 36,
        "name": "Akadou Yoroi",
        "img": "https://i.imgur.com/ZqpOP0D.png",
        "lore": "Part of the three man team of Kabuto during the Chuunin Exams working as spies, Yoroi has a special ability that allows him to absorb his opponents energy.",
        "skills": [
            {
                "name": "Chakra and Life Absorption",
                "img": "https://i.imgur.com/0qvKdhQ.png",
                "description": "Yoroi endows his attacks. The following 3 turns, 'Draining Assault' and 'Energy Drain' may be used.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Energy Drain",
                "img": "https://i.imgur.com/5WXWl5W.png",
                "description": "Yoroi touches one enemy, stealing 20 health from them for 1 turn and lowering their non-affliction damage by 5 until that enemy uses a new damage skill. During 'Draining Assault', this skill will steal 1 bloodline chakra. Requires 'Chakra and Life Absorption' to be used.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Melee",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Draining Assault",
                "img": "https://i.imgur.com/F4ymMEe.png",
                "description": "Yoroi charges at one enemy with multiple energy drains, stealing 12 health from them for 3 turns and stealing 1 bloodline or ninjutsu chakra each turn. During this time, 'Energy Drain' will be improved. Requires 'Chakra and Life Absorption' to be used.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Action",
                    "Melee",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Chakra Block",
                "img": "https://i.imgur.com/MNnA4mF.png",
                "description": "This skill makes Akadou Yoroi invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 37,
        "name": "Tsurugi Misumi",
        "img": "https://i.imgur.com/M8EPY4F.png",
        "lore": "A sound village genin that infiltrated Konoha as a spy, Misumi likes taking the initiative, preferring to be the first to strike in combat. With his unique abilities, Misumi can flex his muscles and bones, twisting them to wrap around his enemies, or even defend his allies.",
        "skills": [
            {
                "name": "Flexible Twisting Joints",
                "img": "https://i.imgur.com/ehKhgIx.jpg",
                "description": "Using his distractingly loose joints, Misumi targets an ally or an enemy. If used on an enemy he will deal 15 damage that ignores invulnerability to them. If used on an ally, that ally will gain 15 points of damage reduction for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Soft Physique Modification",
                "img": "https://i.imgur.com/8kdZEAV.jpg",
                "description": "Misumi wraps around one enemy. For 2 turns all new harmful skills used on Misumi will be reflected to that enemy instead. During this time, that enemy will be unable to reduce damage or become invulnerable.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Melee",
                    "Control"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Tighten Joints",
                "img": "https://i.imgur.com/d1JEFna.jpg",
                "description": "Misumi tightens his joints gaining 15 destructible defense. If 'Soft Physique Modification' is active, the enemy that it is active on will also receive 20 damage and will be stunned for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Misumi Block",
                "img": "https://i.imgur.com/uH3KoI8.jpg",
                "description": "This skill makes Tsurugi Misumi invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 38,
        "name": "Mitarashi Anko",
        "img": "https://i.imgur.com/q0YFcWg.png",
        "lore": "Once a student of Orochimaru and a bearer of the Cursed Seal of Heaven, Anko is now a special Jounin who oversees the second portion of the Chuunin exams.",
        "skills": [
            {
                "name": "Dual Pin",
                "img": "https://i.imgur.com/tjBSEBp.png",
                "description": "Anko deals 5 affliction damage to one enemy permanently. Until that enemy is killed, they will receive an additional 5 damage from all Anko's other skills. During this time, this skill will be replaced by 'Dragon Fire'.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Affliction",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Twin Snakes",
                "img": "https://i.imgur.com/0vzNgam.png",
                "description": "Anko delivers a large dose of poison, dealing 15 affliction damage to one random enemy. For 1 turn, Anko becomes invulnerable to physical skills. The following turn, Anko's skills will cost 1 less random chakra.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Hidden Shadow Snake Hand",
                "img": "https://i.imgur.com/QRV4RTd.png",
                "description": "Anko calls forth snakes from under her jacket which slam into one enemy, dealing 20 damage and *15 affliction damage to them. Afterwards, Anko gains 5 permanent destructible defense.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant",
                    "Melee",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Quick Reflexes",
                "img": "https://i.imgur.com/aLUTqtz.png",
                "description": "This skill makes Mitarashi Anko invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Dragon Fire",
                "img": "https://i.imgur.com/JfRvVaJ.png",
                "description": "Anko scorches the battlefield with fire, dealing 10 affliction damage to one enemy and 5 affliction damage to all others for 2 turns. During this time, they will also receive an additional 5 affliction damage from all other affliction skills. This skill ends when Akon dies.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            }
        ]
    },
    {
        "id": 39,
        "name": "Shizune",
        "img": "https://i.imgur.com/V4ZPeu0.png",
        "lore": "Shizune is the aid of Tsunade. A competent combatant using poisons and needles, she is also a highly skilled medic who is able to heal her allies.",
        "skills": [
            {
                "name": "Prepared Needle Shot",
                "img": "https://i.imgur.com/IXgvJIk.png",
                "description": "Shizune shoots hidden needles at one enemy dealing 15 piercing damage to them. During 'Poison Mist', this skill will be improved and will make an enemy receive 25% more damage from harmful skills for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Poison Mist",
                "img": "https://i.imgur.com/pAf7GAy.png",
                "description": "Shizune breaths a poison cloud on one enemy who takes 12 affliction damage for 3 turns. During this time, 'Prepared Needle Shot' will improved and will make an enemy receive 25% more damage from all harmful skills for 1 turn.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Healing Resuscitation Regeneration",
                "img": "https://i.imgur.com/PXcTQUt.png",
                "description": "Using this advanced healing technique, Shizune heals one ally for 35 health and removes all enemy affliction skills from them.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Shizune Dodge",
                "img": "https://i.imgur.com/ykKkwKV.png",
                "description": "This skill makes Shizune invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 40,
        "name": "Yakushi Kabuto",
        "img": "https://i.imgur.com/ZIyW33w.png",
        "lore": "Kabuto was once found on the battlefield, was taught medical ninjutsu, and now assists Orochimaru. He uses his medical skill for both offence and defense.",
        "skills": [
            {
                "name": "Mystical Palm Technique",
                "img": "https://i.imgur.com/jyPztJT.png",
                "description": "Kabuto custs one enemy through their flesh like a scalpel, dealing 20 piercing damage to them. For 1 turn, that enemy's harmful skills will cost 1 additional random chakra, and they will receive 10 additional damage from melee skills. This additional damage effect may only trigger once per turn.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Melee"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Temple of Nirvana",
                "img": "https://i.imgur.com/6MjweCd.png",
                "description": "Kabuto creates a large scale genjutsu. For 1 turn, any enemy that uses a new skill will have their harmful skills stunned and will receive 5 additional damage from melee skills for 1 turn. This skill is invisible.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Secret Healing Wound Destruction",
                "img": "https://i.imgur.com/nFIj8h6.png",
                "description": "Kabuto removes all enemy affliction skills from himself, gains 50% damage reduction for 1 turn and heals 35 health. This skill will heal 5 less health each time it is used.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Dead Soul Technique",
                "img": "https://i.imgur.com/1DqPb41.png",
                "description": "This skill makes Yakushi Kabuto invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 41,
        "name": "Hatake Kakashi",
        "img": "https://i.imgur.com/EiPfRpg.png",
        "lore": "Kakashi is the sensei of Naruto, Sakura, and Sasuke. With his Sharingan he is able to turn his foes skills back upon themselves and can cause severe damage with his Raikiri and Nin-Dogs skills.",
        "skills": [
            {
                "name": "Raikiri",
                "img": "https://i.imgur.com/IO6GaRr.png",
                "description": "An attack so strong it is said to cut lightning. This skill does 45 piercing damage to one enemy. This skill cannot be countered or reflected.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Melee"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Summoning: Ninja Dogs",
                "img": "https://i.imgur.com/qenftRL.png",
                "description": "Kakashi summons ninja dogs which bite an enemy. That enemy will have their non-mental skills stunned for 1 turn. For 1 turn, that enemy will be receive 5 additional damage from chakra skills.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Kakashi Sharingan",
                "img": "https://i.imgur.com/nqbmD13.png",
                "description": "Kakashi activates his copying sharingan. For 5 turns, Kakashi will every turn imitate a jutsu from a random enemy, copying a random harmful skill from that enemy, while changing the cost of the copied skill to random chakras.",
                "cooldown": "5",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Clever Hiding",
                "img": "https://i.imgur.com/8ICr6G8.png",
                "description": "This skill makes Hatake Kakashi invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 42,
        "name": "Yuhi Kurenai",
        "img": "https://i.imgur.com/L1IWoqb.png",
        "lore": "Yuhi Kurenai is a jounin and team leader of Hinata, Shino and Kiba. She is a genjutsu master who is able to both disable and attack her enemies with illusions.",
        "skills": [
            {
                "name": "Cherry Blossom Suffocation",
                "img": "https://i.imgur.com/IKQQZHC.png",
                "description": "Kurenai suffocates all enemies with illusionary cherry blossoms, dealing 10 damage to them for 3 turns. During this time, if 'Plant-Form Attack' is used on an enemy affected by this skill, they will be stunned for 1 turn.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Action",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Plant Form Attack",
                "img": "https://i.imgur.com/p4ruZfg.png",
                "description": "Kurenai deals 20 damage to one enemy. For 2 turns, that enemy will be unable to reduce damage or become invulnerable; This effect is applied before the damage. If used on an enemy affected by 'Cherry Blossom Suffocation', their physical and ranged skills will be stunned for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant",
                    "Melee"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Tree Bind Death",
                "img": "https://i.imgur.com/t08cNjA.png",
                "description": "Kurenai protects herself or an ally for 1 turn. The first non-affliction damaging skill used on that ally will be countered. The countered enemy will have their chakra and melee skills stunned and will receive double damage from mental skills for 3 turns. This skill is Invisible. Ends when Kurenai dies.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Vanishing Illusion",
                "img": "https://i.imgur.com/j22EpUB.png",
                "description": "This skill makes Yuhi Kurenai invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 43,
        "name": "Sarutobi Asuma",
        "img": "https://i.imgur.com/N4ZFINr.png",
        "lore": "Sarutobi Asuma is the leader of Team 10. He uses trench knives extended by his chakra to fight and protect his teammates.",
        "skills": [
            {
                "name": "Flying Swallow",
                "img": "https://i.imgur.com/Dnwx46P.png",
                "description": "Using blades with wind chakra, Asuma and his allies gain 10 points of damage reduction and all enemies take 10 damage for 3 turns. *While active, each turn this skill will increase its damage and points of damage redution by 5.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action",
                    "*Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Finishing Blow",
                "img": "https://i.imgur.com/gjMSfaG.png",
                "description": "Asuma deals 35 damage to one enemy. During the second turn of 'Flying Swallow', this skill will stun physical and ranged skills for 1 turn. During the third turn of 'Flying Swallow', this skill will deal 5 additional damage and will remove 1 taijutsu or bloodline chakra.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Melee"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Self Sacrifice",
                "img": "https://i.imgur.com/iHE7E8U.png",
                "description": "Sarutobi Asuma protects one ally from harm. For 1 turn, that ally will become invulnerable to harmful skills.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Wind Chakra Blades Block",
                "img": "https://i.imgur.com/vndck21.png",
                "description": "This skill makes Sarutobi Asuma invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 44,
        "name": "Maito Gai",
        "img": "https://i.imgur.com/mZzzuP2.png",
        "lore": "Gai is the sensei of Lee, Tenten and Neji. He and Lee both use the same fighting style, Strong Fist, which involves high-speed attacks and the opening of inner chakra gates.",
        "skills": [
            {
                "name": "Strong Whirlwind",
                "img": "https://i.imgur.com/EEtspTO.png",
                "description": "Gai kicks with a strong whirlwind, dealing 30 piercing damage to one enemy. During 'Sixth Gate Opening', this skill will be improved and will deal 60 piercing damage ignoring invulnerability.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Melee"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sixth Gate Opening",
                "img": "https://i.imgur.com/2tVPi5d.png",
                "description": "Gai opens six chakra gates, taking 40% affliction damage  of his current health and becoming invulnerable for 2 turns. The following 2 turns, 'Strong Whirlwind' will be improved and will deal 60 piercing damage ignoring invulnerability.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Counter Punch",
                "img": "https://i.imgur.com/3rcsOKj.png",
                "description": "Gai singles out one enemy to counter attack. If that enemy uses a new harmful skill, they will be countered and will receive 30 damage. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Gai Dodge",
                "img": "https://i.imgur.com/3X5TEhi.png",
                "description": "This skill makes Maito Gai invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 45,
        "name": "Namikaze Minato",
        "img": "https://i.imgur.com/PSc47fS.png",
        "lore": "Known as Konoha's Yellow Flash, Minato is the leader of Team Minato. His style of combat is unique and he is a highly analytical and caring person.",
        "skills": [
            {
                "name": "Hiraishin no Jutsu",
                "img": "https://i.imgur.com/gWT6r09.png",
                "description": "Minato deals 25 piercing damage to one enemy and gains 75% unpierceable damage reduction for 1 turn. All enemies marked by 'Hiraishin Marking' will take 15 piercing damage. All allies marked by 'Hiraishin Marking'' will become invulnerable for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Hiraishin Marking",
                "img": "https://i.imgur.com/xuWHZFo.png",
                "description": "If used on an enemy, that enemy will be unable to become invulnerable. If used on an ally, that ally gains 5 points of damage reduction. This skill lasts 3 turns, ignores invulnerability and cannot be used on the same target the following turn.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Hiraishin Kunai Scatter",
                "img": "https://i.imgur.com/BreOhEB.png",
                "description": "By scattering hiraishin kunais, Minato applies 'Hiraishin Marking' on all enemies and all allies for 1 turn. Afterwards, Minato gains 1 random chakra. This skill is invisible and ignores invulnerability.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Control",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Seal Sensing",
                "img": "https://i.imgur.com/GjTFYPH.png",
                "description": "This skill makes Namikaze Minato invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 46,
        "name": "Uzumaki Kushina",
        "img": "https://i.imgur.com/Bt4OJMT.jpg",
        "lore": "The mother of Uzumaki Naruto, wife to Minato and once the jinchuuriki to the nine-tailed fox. Kushina specializes in unique sealing and barrier techniques that can hinder and disable even the strongest of enemies.",
        "skills": [
            {
                "name": "Four Symbols Seal",
                "img": "https://i.imgur.com/7MDXZv2.jpg",
                "description": "Kushina attempts to seal an enemy away, destroying their destructible defense, dealing 15 piercing damage to them, stunning their skills for 1 turn, removing 1 bloodline or genjutsu chakra from them and permanently lowering the non-affliction damage they deal by 5.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Life Link",
                "img": "https://i.imgur.com/KeQwfcn.jpg",
                "description": "For 4 turns if either Kushina or one enemy dies, the other will die as well. The following 4 turns, this skill will be replaced by 'Life Transfer'. This skill ignores invulnerability and cannot be countered, reflected, ignored, removed or interact with other skills.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Adamantine Sealing Chains",
                "img": "https://i.imgur.com/kVgbH4G.jpg",
                "description": "Kushina uses an immensely powerful seal, surrounding one enemy with chains, first removing all helpful skills on them and then stunning them and making them invulnerable to all further skills for 2 turns. This skill ignores invulnerability and cannot be countered or reflected.",
                "cooldown": "5",
                "classes": [
                    "Chakra",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Adamantine Covering Chains",
                "img": "https://i.imgur.com/O3yVOUO.jpg",
                "description": "This skill makes Uzumaki Kushina invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Life Transfer",
                "img": "https://i.imgur.com/SnE3AWh.png",
                "description": "Kushina heals an ally for 25 points and deals 25 damage to herself.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Affliction",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 47,
        "name": "Gekko Hayate",
        "img": "https://i.imgur.com/CXtg9Cd.png",
        "lore": "Gekko Hayate is a jounin and one of the instructors of the chuunin exams in Konoha. He is an intelligent Shinobi that distances himself from an enemy to use illusionary techniques.",
        "skills": [
            {
                "name": "Eavesdrop",
                "img": "https://i.imgur.com/hXtcI2H.png",
                "description": "For 1 turn, the first harmful non-mental skill used on Hayate will be countered. This skill is invisible the first turn. Permanently, 'Dance of the Crescent Moon' will deal 10 additional damage when this skill is used. This skill stacks.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Dance of the Crescent Moon",
                "img": "https://i.imgur.com/2HfMnfe.png",
                "description": "Using both his sword and genjutsu, Hayate becomes invulnerable for 1 turn and deals 30 damage to one enemy. Afterwards, all the additional damage from 'Eavesdrop' and 'Crescent Moon Slash' will be removed and converted into permanent damage reduction, in percentage.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Crescent Moon Slash",
                "img": "https://i.imgur.com/84XGL6v.png",
                "description": "Hayate jumps on an enemy from above, dealing 20 piercing damage to them. Permanently, 'Dance of the Crescent Moon' will deal 10 additional damage when this skill is used. This skill stacks.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Determined Retreat",
                "img": "https://i.imgur.com/kaMmauE.png",
                "description": "This skill makes Gekko Hayate invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 48,
        "name": "Baki",
        "img": "https://i.imgur.com/f0YWgRx.png",
        "lore": "Baki is the Jounin team leader of Gaara, Temari, and Kankuro. A mysterious and perhaps devious but loyal man, he specializes in wind element jutsu.",
        "skills": [
            {
                "name": "Wind Blade",
                "img": "https://i.imgur.com/eBHHYKn.png",
                "description": "Baki conjures a maelstrom of blade-like wind and does 40 piercing damage to one enemy.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Sudden Strike",
                "img": "https://i.imgur.com/TvDIanB.png",
                "description": "A simple, blindingly fast attack leaving an illusionary trail to throw off enemies. Baki does 20 piercing damage to one enemy.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Melee"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Flak Jacket",
                "img": "https://i.imgur.com/kaJlaHV.png",
                "description": "Baki puts on a specialized flak jacket from the sand village on himself, or one ally granting that character 50 destructible defense for 4 turns. During this time, that character will ignore all harmful effects except damage until this defense is destroyed.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Baki Teleportation",
                "img": "https://i.imgur.com/ZBwSMFi.png",
                "description": "This skill makes Baki invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 49,
        "name": "Orochimaru",
        "img": "https://i.imgur.com/SujZWa4.png",
        "lore": "Orochimaru is one of the Legendary Sannin. He can increase his teams chakra for a price and summon powerful snakes to beat his enemies.",
        "skills": [
            {
                "name": "Kusanagi",
                "img": "https://i.imgur.com/n1J8CAt.png",
                "description": "Orochimaru pulls the legendary sword Kusanagi and stabs one enemy, dealing 30 damage to them and removing 1 bloodline or genjutsu chakra from that enemy.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Melee",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Cursed Seal Technique",
                "img": "https://i.imgur.com/2AkEZmm.png",
                "description": "Orochimaru places a cursed seal on an ally or an enemy, dealing 15 affliction damage to them and granting them 1 random chakra.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Major Summoning: Manda",
                "img": "https://i.imgur.com/fsxSCxd.png",
                "description": "By summoning Manda in the battlefield, Orochimaru deals 45 damage to one enemy and that enemy will lose 1 bloodline, ninjutsu and genjutsu from their pool.",
                "cooldown": "5",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Earth Clone Technique",
                "img": "https://i.imgur.com/cbN5L9k.png",
                "description": "This skill makes Orochimaru invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 50,
        "name": "Jiraiya",
        "img": "https://i.imgur.com/tZpyvBQ.png",
        "lore": "Jiraiya is one of the Legendary Sannin. With his various frog-based jutsus he is able to both hinder and damage all of his opponents.",
        "skills": [
            {
                "name": "Toad Mouth Bind",
                "img": "https://i.imgur.com/jU6xC6E.png",
                "description": "Jiraiya summons the stomach of a giant toad, placing all characters within it. For 2 turns, enemies will will receive 25% more damage from harmful skills and Jiraiya's team will gain 20% damage reduction.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Major Summoning: Gamabunta",
                "img": "https://i.imgur.com/Jjt22lv.png",
                "description": "Jiraiya summons Gamabunta in the battlefield, dealing 35 damage to all enemies. If targetable, Jiraiya will become invulnerable for 1 turn and will gain 1 random chakra. This skill cannot be countered.",
                "cooldown": "5",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Ranged",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Great Fireball Technique",
                "img": "https://i.imgur.com/NNHCL9Z.png",
                "description": "Jiraiya spits a giant fireball at all enemies, dealing 20 affliction damage to one enemy and 10 affliction damage to all other enemies.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Ranged",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Spiked Buddha",
                "img": "https://i.imgur.com/imwdLV0.png",
                "description": "This skill makes Jiraiya invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 51,
        "name": "Tsunade",
        "img": "https://i.imgur.com/LGztynU.png",
        "lore": "Tsunade is the Godaime Hokage and a Legendary Sannin. Her skill with medical ninjutsu allows her to do significant damage and heal herself and teammates.",
        "skills": [
            {
                "name": "Major Summoning: Katsuyu",
                "img": "https://i.imgur.com/EgdhY9k.png",
                "description": "Tsunade sunmons the slug queen Katsuyu, granting her team 50% damage reduction for 2 turns and healing them 20 health instantly. Katsuyu also spits acid in all enemies dealing 20 affliction damage to them.",
                "cooldown": "6",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Painful Sky Leg",
                "img": "https://i.imgur.com/w5xkFjJ.png",
                "description": "Tsunade performs a drop kick with her insane strength, dealing 30 piercing damage to one enemy and stunning their physical and mental skills for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Melee"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Creation Rebirth",
                "img": "https://i.imgur.com/MVBNqnb.png",
                "description": "Using stored chakra Tsunade regenerates herself, healing 35 health instantly.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Tsunade Replacement Technique",
                "img": "https://i.imgur.com/hGOwcqv.png",
                "description": "This skill makes Tsunade invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 52,
        "name": "Sandaime Hokage",
        "img": "https://i.imgur.com/OUgT0V5.jpg",
        "lore": "Sandaime Hokage, known as the God of Shinobi, was the strongest Kage to ever live. He is able to concentrate on one opponent while his summon, Enma, confronts others. When all else fails he can summon the death god.",
        "skills": [
            {
                "name": "Fire Dragon Flame Missile",
                "img": "https://i.imgur.com/2DC5GaI.png",
                "description": "Sandaime Hokage deals 25 damage to one enemy. This enemy also takes 15 affliction damage the following turn.*",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Ranged",
                    "Affliction*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Major Summoning Enma",
                "img": "https://i.imgur.com/pBFI2qO.png",
                "description": "By summoning Enma, Sandaime and all allies gain 25% damage reduction and cannot be killed by enemies for 2 turns*. If targetable, Sandaime will do 15 damage to all enemies for 2 turns.",
                "cooldown": "5",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Action",
                    "*Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Shiki Fuujin",
                "img": "https://i.imgur.com/Sh5V2xt.png",
                "description": "The death god sucks the life out of one enemy who takes 35 affliction damage, is stunned and cannot reduce damage or become invulnerable every turn.* Sandaime himself takes 20 affliction damage and is stunned every turn. This skill cannot be removed or ignored, may only target one enemy and is cancelled when Sandaime dies.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Affliction",
                    "Melee",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Earth Release Wall",
                "img": "https://i.imgur.com/FCO9qTm.png",
                "description": "This skill makes Sandaime Hokage invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 53,
        "name": "Shodai Hokage",
        "img": "https://i.imgur.com/4Qt9UaS.png",
        "lore": "The First Hokage and the founder of the Hidden Village of Konoha, Shodai Hokage has the ability to create and manipulate trees. This ability to give life shows the extent of his power.",
        "skills": [
            {
                "name": "Birth of the Trees",
                "img": "https://i.imgur.com/ztMMKn0.png",
                "description": "Hashirama summons a giant field of trees. For 3 turns, any enemy that uses a new harmful skill will have the cost of their harmful skills increased by 1 random chakra and their cooldowns increased by 1 for 1 turn. The following 3 turns, if Hashirama uses a new skill his team will gain 5 destructible defense.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Tree Strangulation",
                "img": "https://i.imgur.com/3ghIvfW.png",
                "description": "Hashirama catches and crushes one enemy in giant tree branches, dealing 25 piercing damage to that enemy and stunning their physical and chakra skills for 1 turn. During 'Birth of the Trees', this skill will cost 1 less random chakra.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Branch Manipulation",
                "img": "https://i.imgur.com/2ZW1vwA.png",
                "description": "Hashirama sends out his trees in all directions, dealing 10 affliction damage to all enemies and granting 25% damage reduction to himself and his allies. During 'Birth of the Trees', this skill will have no cooldown.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged",
                    "Affliction",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Deflection",
                "img": "https://i.imgur.com/RyqXqfk.png",
                "description": "This skill makes Shodai Hokage invulnerable for 1 turn. This skill will not grant destructible defense during 'Birth of the Trees'.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 54,
        "name": "Nidaime Hokage",
        "img": "https://i.imgur.com/GyEmocs.png",
        "lore": "Nidaime is the second Hokage and the grand uncle of Tsunade. He is very skilled with water jutsu, requiring no water source to perform them.",
        "skills": [
            {
                "name": "Water Assault",
                "img": "https://i.imgur.com/TzDpZzQ.png",
                "description": "Nidaime encases one enemy in water, dealing 20 damage to them and making them ignore all helpful effects for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Water Collision Destruction",
                "img": "https://i.imgur.com/qfJm4UQ.png",
                "description": "Summoning a giant wave of water, Tobirama deals 10 damage to all enemies for 3 turns. Each turn, all enemies will have all their skills subclassed as Affliction stunned. The following 3 turns, 'Water Assault' will deal 10 additional damage.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Action",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Bringer of Darkness",
                "img": "https://i.imgur.com/9aqZPND.png",
                "description": "Tobirama plunges the battlefield into total darkness. For 1 turn, Tobirama and his allies will become invulnerable to physical and mental skills.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Water Encampment Wall",
                "img": "https://i.imgur.com/bUxeevY.png",
                "description": "This skill makes Nidaime Hokage invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 55,
        "name": "Yondaime Hokage",
        "img": "https://i.imgur.com/JD6Ftin.png",
        "lore": "The fourth Hokage was known as the yellow flash, regarded by all as the fastest shinobi to ever live. He is also the father of Uzumaki Naruto and the one who sealed the Kyuubi in his son.",
        "skills": [
            {
                "name": "Hiraishin Rasengan",
                "img": "https://i.imgur.com/bcnhcBn.png",
                "description": "Yondaime Hokage deals 40 damage to one enemy ignoring invulnerability that cannot be countered or reflected. The following turn, this skill will cost 1 ninjutsu chakra and will deal 35 damage instead.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Space Time Barrier",
                "img": "https://i.imgur.com/NPtZUyI.png",
                "description": "Using his space-time abilities, Yondaime Hokage targets one ally or himself. For 1 turn, all new non-mental skills used on that ally will be reflected onto the enemy. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Dead Demon Consuming Seal",
                "img": "https://i.imgur.com/NbuLkmG.png",
                "description": "Using a partial seal, Yondaime seals part of one enemy away. That enemy will lose 30% of their health and have their physical and ranged skills stunned for 1 turn. If that enemy's health falls to 10 or lower that enemy will be killed. Yondaime Hokage will take 10 affliction damage*.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Ranged",
                    "Affliction",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Kunai Defense",
                "img": "https://i.imgur.com/SUru7Y9.png",
                "description": "This skill makes Yondaime Hokage invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 56,
        "name": "Gaara Rehabilitated",
        "img": "https://i.imgur.com/tV82AF4.png",
        "lore": "After his fateful encounter with Naruto, Gaara has left behind his murderous ways. He has become even more skilled with using sand since Naruto last saw him too.",
        "skills": [
            {
                "name": "Sand Mastery",
                "img": "https://i.imgur.com/wcE2zcH.png",
                "description": "Using sand to both defend and attack, Gaara gains 5 permanent destructible defense. Permanently, Gaara's skills will cost 1 less random chakra.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Desert Imperial Funeral",
                "img": "https://i.imgur.com/KX5LPwj.png",
                "description": "Gaara deals 25 piercing damage to one enemy. For 1 turn, that enemy will be unable to reduce damage or become invulnerable and their skills will cost 1 additional random chakra. If that enemy is affected by 'Quicksand Waterfall', their skills will cost 2 additional random chakra instead.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Quicksand Waterfall",
                "img": "https://i.imgur.com/LsFUhWE.png",
                "description": "Gaara creates massive waves of sand. For 4 turns, Gaara and his allies gain 10 destructible defense and all enemies take 10 damage*. During this time, if Gaara or an ally receives new non-affliction damage, they will gain 5 destructible defense the following turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique",
                    "Action*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Shield of Shukaku",
                "img": "https://i.imgur.com/QVMa2Mh.png",
                "description": "Gaara uses the ultimately hard absolute defense, creating a protective shield in front of his team and granting them 20 points of destructible defense for 3 turns.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 57,
        "name": "Drunken Lee",
        "img": "https://i.imgur.com/QYXQyIZ.png",
        "lore": "Rock Lee has accidentally drunk too much Alcohol and has awakened his natural Drunken Fist Technique which has given him amazing speed and unpredictability.",
        "skills": [
            {
                "name": "Unpredictable Assault",
                "img": "https://i.imgur.com/cMMgVUq.png",
                "description": "Using his drunken master abilities, Lee deals 20 damage to one enemy that cannot be countered. For 1 turn, if that enemy uses a new harmful skill, Lee will instantly heal 10 health. Permanently, Lee will deal 5 additional damage. This effect stacks.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Drunken Fist",
                "img": "https://i.imgur.com/qQsZR3t.png",
                "description": "Lee charges at an enemy and hits them with a knockout blow, dealing 30 damage to that enemy, and for 1 turn, their skills will deal 100% less damage.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Drunken Counter",
                "img": "https://i.imgur.com/56rirZI.png",
                "description": "Lee targets himself or an ally. For 1 turn, the first harmful physical or melee skill used on that ally will be countered. If successfully, the countered enemy will have 'Unpredictable Assault' used on them. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Drunken Leap",
                "img": "https://i.imgur.com/WWza0iI.png",
                "description": "This skill makes Drunken Lee invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 58,
        "name": "Cursed Seal Mizuki",
        "img": "https://i.imgur.com/V6AYlxZ.png",
        "lore": "Touji Mizuki is now a missing nin that has been corrupted by his own dark ambitions and the will of Orochimaru.",
        "skills": [
            {
                "name": "Curse Seal: Tiger",
                "img": "https://i.imgur.com/wZY8Gg2.jpg",
                "description": "By drinking a curse seal potion, Mizuki transforms into a wild tiger. The following 3 turns, Mizuki will gain 35 points of destructible defense and during this time, 'Curse Seal: Tiger Punch' will be >improved< and 'Puppets Genjutsu' will be replaced by its alternate version.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Curse Seal: Tiger Punch",
                "img": "https://i.imgur.com/EEkuwOc.png",
                "description": "Mizuki fiercely punches one enemy, dealing 30 damage to them. For 2 turns, that enemy's skills will deal 15 less non-affliction damage. During 'Curse Seal: Tiger', this skill is improved and will deal 45 damage instead. This skill does not stack.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Puppets Genjutsu",
                "img": "https://i.imgur.com/jHkf7ow.png",
                "description": "Mizuki puts an enemy under a genjutsu. For 2 turns, that enemy will be unable to reduce damage or become invulnerable, and their skills will deal 5 less damage and will cost 1 additional random chakra. During this time, if that enemy does not use a new skill, they will take 10 damage.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Evil Intentions",
                "img": "https://i.imgur.com/eus0S47.png",
                "description": "This skill makes Cursed Seal Mizuki invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Curse Seal: Tiger Bomb",
                "img": "https://i.imgur.com/P7chy1d.png",
                "description": "Mizuki charges like a bomb, dealing 45 damage to one enemy and becoming invulnerable for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 59,
        "name": "Kyuubi Naruto",
        "img": "https://i.imgur.com/g8Hgdw3.png",
        "lore": "Drawing upon the strength of the Kyuubi demon sealed inside him, the power of Naruto explodes, and he becomes a virtual army onto himself.",
        "skills": [
            {
                "name": "Kyuubi Rasengan",
                "img": "https://i.imgur.com/ZVw7pHA.png",
                "description": "Kyuubi Naruto deals 40 damage to one enemy and stuns their non-mental skills. Kyuubi Naruto takes 10 affliction damage*. During 'Kyuubi Rage', this skill will deal 50 damage. During 'Kyuubi Chakra', this skill will deal 30 damage.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Unique",
                    "Affliction*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Kyuubi Rage",
                "img": "https://i.imgur.com/WexhqIW.png",
                "description": "Using the vile Kyuubi chakra surrounding him, Kyuubi Naruto deals 10 damage to all enemies for 3 turns. During this time, 'Kyuubi Rasengan' will be improved*. This skill will cancel 'Kyuubi Chakra' when used.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Action",
                    "Instant*",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Kyuubi Chakra",
                "img": "https://i.imgur.com/rnk8wVi.png",
                "description": "Unknowingly using the Kyuubi Chakra, Naruto gains 50% damage reduction* and heals 15 health each turn for 3 turns. During this time, 'Kyuubi Rasengan' will be worsened.* This skill will cancel 'Kyuubi Rage' when used.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Action",
                    "Instant*",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Chakra Howl",
                "img": "https://i.imgur.com/tFrnFax.png",
                "description": "This skill makes Kyuubi Naruto invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 60,
        "name": "Cursed Seal Sasuke",
        "img": "https://i.imgur.com/r4RPyUj.png",
        "lore": "When Sasuke releases the full power of his cursed seal his body and chakra become a twisted vision of his inner self and his strength is amplified greatly.",
        "skills": [
            {
                "name": "Corrupt Chidori",
                "img": "https://i.imgur.com/2eNeRIl.png",
                "description": "Using a cursed seal chakra corrupted Chidori Sasuke does 45 piercing damage to one enemy and for 2 turns, will reduce their non-affliction damage by 20.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Melee",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Katon: Goukakyuu no Jutsu",
                "img": "https://i.imgur.com/YZZPJg7.png",
                "description": "Sasuke launches a giant fireball, dealing 20 affliction damage to one enemy. For 1 turn, If that enemy uses a skill they will take 10 affliction damage. During 'Cursed Seal', this skill will be improved and will also deal an additional 10 damage.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Ranged",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Cursed Seal",
                "img": "https://i.imgur.com/zdEp3Mv.png",
                "description": "Sasuke taps into the Cursed Seal, growing claw wings from his back. Sasuke takes 20 affliction damage* and becomes invulnerable for 1 turn. The following turn, 'Corrupt Chidori' will cost 1 random chakra and 'Katon: Goukakyuu no Jutsu' will have no cost. This skill will be replaced by 'Dark Void' for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique",
                    "Affliction*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sharingan Evasion",
                "img": "https://i.imgur.com/gcRgFEG.png",
                "description": "This skill makes Cursed Seal Sasuke invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Dark Void",
                "img": "https://i.imgur.com/Gi982SB.png",
                "description": "Expunging the corrupt chakra, Sasuke engulfs one enemy, stunning them for 2 turns, and making them invulnerable to all skills. When this skill ends, that enemy will receive 55 damage. This skill will end if Sasuke dies.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 61,
        "name": "Shukaku Gaara",
        "img": "https://i.imgur.com/bJHNRJ2.png",
        "lore": "Having lived inside him the whole time, Shukaku is one of the nine tailed beasts and is very eager to escape and cause chaos to the world. While Shukaku slowly takes over Gaara, his own power increases, allowing him to demolish his foes with powerful sand attacks.",
        "skills": [
            {
                "name": "Sand Claw",
                "img": "https://i.imgur.com/A4pnLul.jpg",
                "description": "Gaara attacks with a claw of concentrated sand, dealing 30 damage to one enemy and gaining 10 destructible defense.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Constricting Sand Prison",
                "img": "https://i.imgur.com/p2DRexz.jpg",
                "description": "Gaara traps an enemy with sand, dealing 10 damage to them each turn. During this time, the first skill that enemy uses will be countered and this skill will end.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Sand Transformation",
                "img": "https://i.imgur.com/HfgfCr9.jpg",
                "description": "Each turn, for 5 turns, Gaara will gain 10 destructible defense. When this skill ends, Gaara will transform into the Shukaku for 3 turns, reducing the cost of 'Sand Claw' by 1 random and replacing 'Constricting Sand Prison' and 'Sand Transformation'.",
                "cooldown": "6",
                "classes": [
                    "Mental",
                    "Unique",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Thick Sand Coat",
                "img": "https://i.imgur.com/GKm7Zvl.jpg",
                "description": "This skill makes Shukaku Gaara invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Drilling Air Bullet",
                "img": "https://i.imgur.com/ZSMchzk.png",
                "description": "Sending forth a powerful ball of wind, Gaara deals 60 damage to one enemy.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "True Awakening",
                "img": "https://i.imgur.com/kAWDB8g.jpg",
                "description": "Gaara truly lets Shukaku awaken from inside him, letting it take over. The Following turn, 'Sand Claw' and 'Drilling Air Bullet' will deal double damage.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            }
        ]
    },
    {
        "id": 62,
        "name": "Hoshigaki Kisame",
        "img": "https://i.imgur.com/M8xGMby.png",
        "lore": "Formerly one of the Seven Swordsmen of the Mist Village, Kisame is an S-Rank missing nin. He is Itachi's partner and a member of a mysterious organization. Designed with Redxmaverick.",
        "skills": [
            {
                "name": "Samehada Slash",
                "img": "https://i.imgur.com/kyyyNkG.png",
                "description": "Using his sword, Samehada, Kisame slashes one enemy who takes 20 damage and stunning their physical or chakra skills for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant",
                    "Melee"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Samehada Shred",
                "img": "https://i.imgur.com/7ZVF8bP.png",
                "description": "Kisame unwraps Samehada and shreds one enemy. For 3 turns that enemy takes 15 piercing damage and one bloodline or genjutsu chakra is stolen from their pool.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Action",
                    "Melee",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Water Shark Projectile",
                "img": "https://i.imgur.com/5Y5yd7c.png",
                "description": "Using a stream of compressed water Kisame does 20 damage to one enemy and stuns their chakra or ranged skills for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Kisame Replacement Technique",
                "img": "https://i.imgur.com/hGOwcqv.png",
                "description": "This skill makes Hoshigaki Kisame invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 63,
        "name": "Uchiha Itachi",
        "img": "https://i.imgur.com/DXGV0Uz.png",
        "lore": "The only other surviving Uchiha, Itachi is a master of doujutsu, an S-Rank missing nin, and a member of Akatsuki, having been partnered with Hoshigaki Kisame. Despite being powerful, Itachi is slowly going blind, making his abilities weaker, but when Itachi activates his Sharingan he becomes an unstoppable force of pure power.",
        "skills": [
            {
                "name": "Mangekyo Sharingan",
                "img": "https://i.imgur.com/4o5RMUj.png",
                "description": "Itachi becomes invulnerable, enhancing 'Amaterasu' and 'Tsukuyomi', increasing their cooldowns by 2, and doubling their costs. During this time, Itachi will receive 15 affliction damage a turn, that cannot be ignored, and ignores healing effects. This skill can be used again for free to cancel it.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Unique",
                    "Affliction*",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Amaterasu",
                "img": "https://i.imgur.com/Ta3ymyS.png",
                "description": "Itachi burns one enemy with his flames, dealing 15 affliction damage to them and each following turn, they will receive 10 affliction damage a turn. This skill does not stack. During 'Mangekyou Sharingan', this skill will deal 30 initial affliction damage and target all enemies. Ends if Itachi dies.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Ranged",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Tsukuyomi",
                "img": "https://i.imgur.com/Nmdk6oj.png",
                "description": "Itachi mentally tortures one enemy for 3 days and nights in a matter of seconds, dealing 20 damage to them and stunning them for 1 turn. If used during 'Mangekyou Sharingan', this skill will last 3 turns.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Sharingan Insight",
                "img": "https://i.imgur.com/YxNILAJ.png",
                "description": "This skill makes Uchiha Itachi invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 64,
        "name": "Uzumaki Naruto (S)",
        "img": "https://i.imgur.com/ksOuPJi.png",
        "lore": "After nearly three years of secluded training with Jiraiya, Naruto(s) has returned to Konoha with a greatly improved arsenal of ninja skills.",
        "skills": [
            {
                "name": "Oodama Rasengan",
                "img": "https://i.imgur.com/toWCXT5.png",
                "description": "Naruto uses a greater version of Rasengan, dealing 40 piercing damage to one enemy ignoring invulnerability. During 'Kyuubi Boost', this skill will stun that enemy's non-mental skills for 1 turn. Afterwards, Naruto takes 5 affliction damage*. During 'Passive: Three Tails Release', this skill will be replaced.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Affliction*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Shadow Clones: Rasengan",
                "img": "https://i.imgur.com/KdxZzju.png",
                "description": "The following turn, Naruto will deal 20 piercing damage to one enemy. During this time, Naruto will ignore all harmful effects. During 'Passive: Three Tails Release', this skill will be replaced. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Action",
                    "Melee"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Kyuubi Boost",
                "img": "https://i.imgur.com/Mv0n65V.jpg",
                "description": "Naruto loses 10 health and for 3 turns gains 10 points of damage reduction. The following 3 turns, he will ignore stun effects and this skill becomes 'Kyuubi Empowered Rasengan'. Cannot be used during 'Passive: Three Tails Transformation'.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Shadow Clone Save",
                "img": "https://i.imgur.com/8lPJUXh.png",
                "description": "This skill makes Uzumaki Naruto (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Kyuubi Empowered Rasengan",
                "img": "https://i.imgur.com/iqprvFg.png",
                "description": "Naruto uses a Rasengan empowered by the Kyuubi chakra, dealing 25 damage to one enemy and stunning their non-mental skills for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Passive: Three Tails Release",
                "img": "https://i.imgur.com/W4maqPt.png",
                "description": "Each time Naruto uses 'Oodama Rasengan' or 'Kyuubi Empowered Rasengan', he will gain 1 Kyuubi Rage stack. At 4 Kyuubi Rage stacks, kyuubi chakra will be released for 3 turns, removing all harmful skills, granting 50% unpierceable damage reduction, ignoring stun effects and improving his skills.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Three-Tail: Claw Smash",
                "img": "https://i.imgur.com/MOw6ymg.png",
                "description": "Naruto dashes forward and strikes one enemy with a powerful smash, dealing 40 piercing damage and stunning their non-mental for 1 turn. Afterwards, Naruto takes 5 affliction damage. This skill ignores invulnerability.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Three-Tail: Chakra Shockwave",
                "img": "https://i.imgur.com/pd00clo.png",
                "description": "The following turn, Naruto will deal 20 affliction damage to all enemies. During this time, Naruto will ignore all harmful effects. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Action",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 65,
        "name": "Haruno Sakura (S)",
        "img": "https://i.imgur.com/5iC4YJR.png",
        "lore": "With her extensive training under Tsunade, the Godaime, for the last two and a half years, Sakura(s)'s healing and combat abilities have both greatly improved.",
        "skills": [
            {
                "name": "Chakra Enhanced Punch",
                "img": "https://i.imgur.com/hlJj8Px.png",
                "description": "Enhancing her attack with finely controlled chakra, Sakura destroys the destructible defense of one enemy and deals 25 piercing damage to them. This skill will be replaced by 'Blossom's Fury'.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Trained Healing",
                "img": "https://i.imgur.com/Oi5rkOB.png",
                "description": "Using her trained healing skills, Sakura heals an ally for 20 health for 2 turns. Each turn, that ally will have all affliction skills removed from them.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Control"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Self Heal",
                "img": "https://i.imgur.com/aJqXOqH.png",
                "description": "Sakura targets herself permanently, healing 20 health instantly the first time she is damaged by a skill. This skill is invisible and ends when triggered.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Insightful Dodge",
                "img": "https://i.imgur.com/tvBST5g.png",
                "description": "This skill makes Haruno Sakura (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Blossom's Fury",
                "img": "https://i.imgur.com/ALv0zL8.png",
                "description": "Sakura releases a ground breaking punch, destroying the destructible defense of all enemies and dealing 35 piercing damage to one enemy and 20 piercing damage to all others. This skill cannot be reflected and returns to 'Chakra Enhanced Punch' once it's used.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 66,
        "name": "Sai (S)",
        "img": "https://i.imgur.com/A7rJdmI.png",
        "lore": "A current member of the elite ANBU Root, Sai(s) is an unparalleled artist who uses chakra to bring his images to life.",
        "skills": [
            {
                "name": "Great Beast Painting: Lions",
                "img": "https://i.imgur.com/d1ic0UR.png",
                "description": "Sai creates a number of ink lions to attack one enemy dealing 30 damage to them, and for 1 turn, Sai will gain 15 points of destructible defense.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Great Beast Painting: Snake",
                "img": "https://i.imgur.com/fGlKQw8.png",
                "description": "Sai creates a snake made of ink to trap one enemy. stunning their physical and chakra skills for 1 turn. During this time, that enemy will be unable to reduce damage or become invulnerable. This skill ignores invulnerability.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Adaptive Painting",
                "img": "https://i.imgur.com/nB8cFU3.png",
                "description": "For 3 turns, any ally that is stunned will become invulnerable for 1 turn; Any ally that has chakra removed/stolen will gain 1 random ; For each enemy skill that damages Sai or his allies will increase Sai's damage by 10 for 1 turn; Max of 3 stacks. The following 3 turns, 'Great Beast Painting: Snake' will be replaced.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Ink Clone",
                "img": "https://i.imgur.com/AoZJ9Vr.png",
                "description": "This skill makes Sai (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Great Beast Painting: Bird",
                "img": "https://i.imgur.com/QKM5SKP.png",
                "description": "Sai creates a giant ink bird that crashes into one enemy, dealing 25 damage to them and stunning their physical and chakra skills for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            }
        ]
    },
    {
        "id": 67,
        "name": "Inuzuka Kiba (S)",
        "img": "https://i.imgur.com/nHC0h7V.png",
        "lore": "After two years, Kiba finally becomes a chuunin. Now with Akamaru grown up, they become an unbeatable fighting unit, taking the Inuzuka clan's techniques to the next level. Now both have more precision for massive attacks, and an even sharper sense of smell.",
        "skills": [
            {
                "name": "Man Beast Clone",
                "img": "https://i.imgur.com/LHuaKLs.png",
                "description": "Kiba grant himself and one ally 5 damage reduction. If Kiba use a new harmful skill, that ally gains 10 destructible defense for 1 turn. If that ally uses a  new harmful skill , Kiba gains 5 additional damage for 1 turn; Doesn't stack. Becomes 'Enhanced Garouga', cannot be removed.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Piercing Fang",
                "img": "https://i.imgur.com/6nrbRWf.png",
                "description": "Kiba deals 20 piercing damage to one enemy. For 1 turn, Kiba will ignore stun effects and his other skills will cost 1 random chakra less.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Fang Over Fang",
                "img": "https://i.imgur.com/9OjpH9I.png",
                "description": "Kiba deals 20 damage to all enemies this turn. For 2 turns, Kiba will deal 5 more damage on them.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Hide in the Shade",
                "img": "https://i.imgur.com/FYMv2pb.png",
                "description": "This skill makes Inuzuka Kiba (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Enhanced Garouga",
                "img": "https://imgur.com/3tg3QXE.jpg",
                "description": "Kiba deals 30 piercing damage to one enemy and stuns all other enemies Harmful for 1 turn.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 68,
        "name": "Aburame Shino (S)",
        "img": "https://i.imgur.com/tTKpPqk.png",
        "lore": "Still as mysterious and secretive as ever, Shino has improved greatly over the years, learning and practicing with his loyal bugs. With his new found mastery, Shino can disable enemies even harder while slowly waiting for his bugs to erupt from their bodies and destroy them.",
        "skills": [
            {
                "name": "Insect Swarm",
                "img": "https://i.imgur.com/FcaqanX.png",
                "description": "Shino sends out wave of his insect army at one enemy, dealing 15 affliction damage to them for 3 turns. The following 3 turns, that enemy will be invulnerable to all friendly skills each turn and during this time this skill will be replaced by 'Insect Consumption'.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Unique",
                    "Action",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Insect Barricade",
                "img": "https://i.imgur.com/JIRZUb3.png",
                "description": "The following turn, the first new harmful skill used on himself or one ally will be countered, 'Parasitic Giant Beetle Infestation' will be placed on the countered enemy and then activated. If this skill does not counter an enemy, Shino will gain 1 Bloodline chakra. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Unique",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Parasitic Giant Beetle Infestation",
                "img": "https://i.imgur.com/c5NaVkK.png",
                "description": "Shino infects one enemy with a small bug. 3 turns after this skill has been used, the bug bursts out, dealing 30 affliction damage to them and activating all other copies of this skill on that enemy. This skill is invisible.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Melee",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Insect Cocoon",
                "img": "https://i.imgur.com/Ae7nPxG.png",
                "description": "This skill makes Aburame Shino (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Insect Consumption",
                "img": "https://i.imgur.com/w0m7Tt8.png",
                "description": "Shino commands his insects to drain the chakra of one enemy affected by 'Insect Swarm' stealing 1 random chakra from them and increasing the damage that enemy receives from 'Insect Swarm' by 5 that turn.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Unique",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            }
        ]
    },
    {
        "id": 69,
        "name": "Hyuuga Hinata (S)",
        "img": "https://i.imgur.com/IvkdaCw.png",
        "lore": "Hinata(s) has taken the lessons she learned during the chuunin exam, and Naruto's words of support to heart in the last couple years. She has matured greatly as a ninja, the heir to the Hyuuga clan, and as a woman.",
        "skills": [
            {
                "name": "Gentle Step Twin Lions Fist",
                "img": "https://i.imgur.com/RDPoiGZ.png",
                "description": "Hinata creates two chakra lions and attacks an enemy, dealing 30 piercing damage to them and removing 1 taijutsu or ninjutsu chakra from them. The following turn, 'Pressure Point Closure' will stun for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Eight Trigrams Thirty Two Palms",
                "img": "https://i.imgur.com/3igdVzH.png",
                "description": "Hinata uses a lesser form of eight trigram sixty four palms, dealing 30 piercing damage to one enemy and stunning their non-mental skills for 1 turn. The following turn, 'Pressure Point Closure' will remove 1 taijutsu or ninjutsu chakra.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Pressure Point Closure",
                "img": "https://i.imgur.com/rtAhdls.png",
                "description": "Hinata closes an enemy's pressure point, dealing 20 damage to them.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Byakugan Sight",
                "img": "https://i.imgur.com/JikfyqH.png",
                "description": "This skill makes Hyuuga Hinata (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 70,
        "name": "Nara Shikamaru (S)",
        "img": "https://i.imgur.com/DJ6gLqt.png",
        "lore": "Once known to be one of the laziest ninja, Shikamaru has worked tireless to become not only stronger, but a leader too. More than ever before, Shikamaru excels at coming up with long winded and convoluted plans meant to defeat any enemies in his path.",
        "skills": [
            {
                "name": "Shadow Sewing",
                "img": "https://i.imgur.com/1eTGjYh.png",
                "description": "Shikamaru sends several tendrils of shadow to one enemy, dealing 35 damage to them and stunning their Physical and Chakra skills for 1 turn. Afterwards, this skill will be replaced by 'Shadow Sewing - Hold' for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Long-Range Tactics",
                "img": "https://i.imgur.com/SkoW7Eb.png",
                "description": "Shikamaru goes long. For 4 turns, each time Shikamaru uses a new harmful skill, he will become invulnerable for 1 turn. If Shikamaru receives new non-affliction damage, this skill will be ignored for 1 turn. The following 4 turns, this skill will be replaced by 'Final Explosion'.",
                "cooldown": "5",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Expert Analysis",
                "img": "https://i.imgur.com/EeUkfpQ.png",
                "description": "By carefully analyzing one enemy, Shikamaru figures out their weakness. For 3 turns, any time that enemy uses a new skill that enemy will be unable to become invulnerable or reduce damage and all helpful counter and reflect effects on them will be ignored for 1 turn. This skill is invisible",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Panicked Dodge",
                "img": "https://i.imgur.com/tZe7d8i.png",
                "description": "This skill makes Nara Shikamaru (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Shadow Sewing - Hold",
                "img": "https://i.imgur.com/YRBb3D8.png",
                "description": "Shikamaru continues to maintain his technique, stunning the physical and chakra skills of the enemy affected by 'Shadow Sewing' or this skill for 1 turn and dealing 20 damage to them. After that, this skill remains active on the enemy.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Final Explosion",
                "img": "https://i.imgur.com/m4z05zN.png",
                "description": "Using his shadow technique, his analysis and his range, Shikamaru traps one enemy in a pit, and blows them up. One enemy affected by 'Shadow Sewing' or 'Shadow Sewing - Hold' and 'Expert Analysis' while Shikamaru is invulnerable through 'Long-Range Tactics' will receive 100 damage.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 71,
        "name": "Akimichi Chouji (S)",
        "img": "https://i.imgur.com/yOkMa5x.png",
        "lore": "After nearly three years, Chouji has grown into a reliable ninja and is now a chuunin. His appetite has grown and so has his body, but now he is truly mastering the Akimichi clan techniques.",
        "skills": [
            {
                "name": "Mega Palm Thrusts",
                "img": "https://i.imgur.com/Pc3SHDn.png",
                "description": "Expanding his arms for more inertia, Chouji deals 30 damage to one enemy and increase the cost of their harmful skills by 1 random chakra for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Spiked Meat Tank",
                "img": "https://i.imgur.com/EwDVEsS.png",
                "description": "If used on an enemy: That enemy will be dealt 25 damage and Chouji becomes invulnerable for 1 turn. If used on himself or an ally: For 1 turn, all non-mental skills used on that ally will be countered and any countered enemy will be dealt 10 piercing damage*; Invisible. (Cooldown: 2).",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Expansion Technique",
                "img": "https://i.imgur.com/dstCSmJ.png",
                "description": "Chouji grows gigantic, gaining 45 destructible defense for 3 turns. The following 3 turns, 'Mega Palm Thrusts' will target all enemies and 'Spiked Meat Tank' will target all enemies or will target all allies if used on an ally.",
                "cooldown": "5",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Chouji Leap",
                "img": "https://i.imgur.com/7df1cOL.png",
                "description": "This skill makes Akimichi Chouji (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 72,
        "name": "Yamanaka Ino (S)",
        "img": "https://i.imgur.com/zA72t3a.png",
        "lore": "In the past couple years Ino(s) has become a chuunin and improved her ability with her family's mind control techniques. During this time she also began learning rudimentary medical techniques.",
        "skills": [
            {
                "name": "Mind Body Switch",
                "img": "https://i.imgur.com/lSobTDI.pngs",
                "description": "Ino forces her mind into one enemy, dealing 25 piercing damage to them and ending any delayed skill that enemy currently has. Afterwards, that enemy will be stunned for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Proxy Surveillance",
                "img": "https://i.imgur.com/y3bJlyB.png",
                "description": "Ino predicts one enemy's move. For 1 turn, if this character uses a new harmful skill, it will be delayed by 1 turn. This skill is invisible.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Rudimentary Healing",
                "img": "https://i.imgur.com/eTrzRC4.png",
                "description": "Using her healing skills, Ino heals an ally for 20 health. If Ino has used any of her other skills on the previous turn, this skill will heal 10 additional health instead.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Hide",
                "img": "https://i.imgur.com/GYxhrYp.png",
                "description": "This skill makes Yamanaka Ino (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 73,
        "name": "Tenten (S)",
        "img": "https://i.imgur.com/lFtTPeQ.png",
        "lore": "After nearly three years Tenten(s) is now a chuunin. In this time she has improved the diversity and strength of her ranged arsenal.",
        "skills": [
            {
                "name": "Weapon Upgrade",
                "img": "https://i.imgur.com/4gqbQHh.png",
                "description": "By upgrading her weapons, Tenten gains 10 points ofdestructible defense for 1 turn. The following turn, 'Kunai Grenade' and 'Heavenly Chain Disaster' will cost 1 less random chakra. This skill will be replaced by 'Explosive Kunais Wave' for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Kunai Grenade",
                "img": "https://i.imgur.com/g0ZItPe.png",
                "description": "Tenten throws an explosive filled with kunais at the enemy team, dealing 15 damage to one enemy and 10 damage to all other enemies. Any enemy that falls to 35 health or below will also receive 5 affliction damage*.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Heavenly Chain Disaster",
                "img": "https://i.imgur.com/ooQdu9y.png",
                "description": "Tenten rains blindingly fast projectiles upon the battlefield, dealing 30 piercing damage to all enemies.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Leaping Dodge",
                "img": "https://i.imgur.com/9Q9R8e4.png",
                "description": "This skill makes Tenten (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Explosive Kunais Wave",
                "img": "https://i.imgur.com/OPV7YPl.png",
                "description": "Tenten throws a wave of kunais with explosive tag on the enemy team, dealing 10 affliction damage to them. The following 3 turns, these enemies will be dealt 5 affliction damage each turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            }
        ]
    },
    {
        "id": 74,
        "name": "Hyuuga Neji (S)",
        "img": "https://i.imgur.com/L3PYgA9.png",
        "lore": "The only one of the original genins to make it to the level of jounin, Neji(s) has greatly increased his ability with both byakugan and gentle fist taijutsu.",
        "skills": [
            {
                "name": "Eight Trigams Sky Palm",
                "img": "https://i.imgur.com/Vz9AP1d.png",
                "description": "Neji deals 20 damage to one enemy. For 1 turn, if that enemy uses any new skill, they will lose 1 non-taijutsu chakra.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Mountain Crusher Palm",
                "img": "https://i.imgur.com/RjDKqBY.png",
                "description": "Neji destroys all enemy destructible defense and deals them 30 damage to them, and then removes them 1 taijutsu and 1 genjutsu chakra. For 2 turns, 'Eight Trigams Sky Palm' will deal 10 additional damage to that enemy.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Melee",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Reactive Rotation",
                "img": "https://i.imgur.com/OY8Aq78.png",
                "description": "Neji target himself or one ally for 1 turn. The first harmful non-mental skill used on the protected character will be countered, and for 3 turns will take 10 additional damage from Neji's skills. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Neji Insight",
                "img": "https://i.imgur.com/QcbCtD3.png",
                "description": "This skill makes Hyuuga Neji (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 75,
        "name": "Rock Lee (S)",
        "img": "https://i.imgur.com/DTqDmu4.png",
        "lore": "Now a chuunin, Lee has trained endlessly with Gai, and not only learned new abilities, but has learned what it truly means to fight. In battle, Lee now fights for his friends and allies, growing stronger as they fall around him.",
        "skills": [
            {
                "name": "Leaf Rising Wind",
                "img": "https://i.imgur.com/DSfZAbq.png",
                "description": "Lee tries to hinder an enemy, dealing 15 damage to them and lowering all their non-affliction damage by 15 for 2 turns. This skill will deal an additional 10 damage, and the damage reduction effect will last 1 additional turn for each ally that is dead.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Leaf Great Whirlwind",
                "img": "https://i.imgur.com/66wenY8.png",
                "description": "Lee gains momentum, dealing 20 damage to one enemy and gaining 10 points of damage reduction for 1 turn. The following turn this skill will deal an additional 10 damage and grant 10 more damage reduction. This skill will deal an additional 10 damage for every ally that has been killed.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Maximum Force Blast",
                "img": "https://i.imgur.com/1T89JYR.png",
                "description": "Mixing the power of his gates, his allies and everything Lee fights for, he unleashes a powerful attack at one enemy dealing 20 damage to them. This skill will deal an additional 20 damage for each ally",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Jumping Dodge",
                "img": "https://i.imgur.com/Z8QItbi.jpeg",
                "description": "This skill makes Rock Lee (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 76,
        "name": "Hatake Kakashi (S)",
        "img": "https://i.imgur.com/lKc2rbD.png",
        "lore": "Kakashi(s) has used the last couple years to improve upon his sharingan, giving him access to a new deadly but costly ability.",
        "skills": [
            {
                "name": "Lightning Beast Fang",
                "img": "https://i.imgur.com/07efvor.png",
                "description": "Kakashi forms his raikiri into a lightning dog, dealing 25 piercing damage to one enemy and stunning their skills for 1 turn. The following turn, this skill will be replaced by 'Finishing Raikiri'.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Kakashi Kamui",
                "img": "https://i.imgur.com/46CCve7.png",
                "description": "If used on an enemy, they will receive 45 piercing damage and for 1 turn the cost of their skills will be increased by 2 random. If used on an ally, all harmful effects on them will be removed and they will become invulnerable for 1 turn. This skill ignores invulnerability.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Team Tactics",
                "img": "https://i.imgur.com/yPfyM9R.png",
                "description": "For 3 turns, Kakashi and his team will have will have the cooldown of their skills reduced by 1 for 3 turns. The following 3 turns, 'Kakashi Kamui' will be improved and will cost 1 bloodline and 1 random chakra.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Bunshin Stand-in",
                "img": "https://i.imgur.com/ToRKfvb.png",
                "description": "This skill makes Hatake Kakashi (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Finishing Raikiri",
                "img": "https://i.imgur.com/ITGCcaa.png",
                "description": "Kakashi moves to finish off an enemy, dealing 40 piercing damage to one enemy. This skill will deal an additional 10 damage to that enemy if they are stunned or if 'Lightning Beast Fang' was used on them the previous turn.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 77,
        "name": "Yamato (S)",
        "img": "https://i.imgur.com/9H3giit.png",
        "lore": "Yamato(s) is a member of ANBU whose real name is unknown. Given the code name Yamato(s) by Tsunade for this mission, he is tasked to lead Team 7 while Kakashi recovers.",
        "skills": [
            {
                "name": "Sanctuary Enlightenment Enclosing Palm",
                "img": "https://i.imgur.com/DXZh3w1.png",
                "description": "Yamato uses an ancient technique that seals one enemy's power, dealing 30 piercing damage to them. For 1 turn, that enemy will ignore all effects that improve their skills and will be unable to become invulnerable by enemies's skills.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Melee",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Four Column Prison",
                "img": "https://i.imgur.com/B8QtS9K.png",
                "description": "Yamato creates a barrier of wood around one enemy or ally. If used on an enemy, that enemy will have their non-mental skills stunned and will become invulnerable to helpful skills for 2 turns. If used on an ally, that ally will gain 40 destructible defense. This skill ignores invulnerability.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Wood Clone",
                "img": "https://i.imgur.com/Cy9zjvr.png",
                "description": "Yamato protects one ally or himself with a clone of wood for 1 turn, countering the first physical or chakra skill used against them. The countered enemy will take 20 damage* and the protected ally will gain 20 destructible defense. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant",
                    "Melee*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Wood Locking Wall",
                "img": "https://i.imgur.com/m9SiZkn.png",
                "description": "This skill makes Yamato (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 78,
        "name": "Maito Gai (S)",
        "img": "https://i.imgur.com/QNaZDbW.png",
        "lore": "Team 9's Professor is back! Gai improved his techniques and strength much more. And now he will use all possible techniques to defeat Akatsuki. Whether releasing Hachimon Tonkou or using extreme taijutsu techniques.",
        "skills": [
            {
                "name": "Gai Nunchaku Style",
                "img": "https://i.imgur.com/bu9TdIv.png",
                "description": "Gai deals 10 damage to one enemy for 3 turns. Whenever an enemy uses a new physical or melee skill on him, they will take 15 damage. During this time, the target of this skill will receive 10 additional damage from 'Reactive Taijutsu Rampage'.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Reactive Taijutsu Rampage",
                "img": "https://i.imgur.com/pZ2Ry1R.png",
                "description": "Gai deals 25 damage to one enemy. This skill cannot be countered or reflected.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Gate Release",
                "img": "https://i.imgur.com/ruaqxuZ.png",
                "description": "Gai release one gate per turn, gaining 10% unpierceable damage reduction and increasing by 5 the initial damage of his skills each turn for 6 turns. During this time, he will take 5 affliction damage and cannot be healed.This skill becomes 'Asakuujaku' permanently.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant",
                    "Affliction",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Muscle Block",
                "img": "https://i.imgur.com/OpIQEuv.png",
                "description": "This skill makes Maito Gai (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Asakuujaku",
                "img": "https://imgur.com/yy5hWBz.jpg",
                "description": "Gai deals 15 piercing damage and 10 affliction damage to one enemy and stuns their skills for 1 turn. This skill cannot be countered or reflected.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Affliction",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            }
        ]
    },
    {
        "id": 79,
        "name": "Sarutobi Asuma (S)",
        "img": "https://i.imgur.com/PFcN7Rp.png",
        "lore": "Somehow continuing to avoid lung cancer, Asuma has remained the leader of Team 10 through the years. With the secret techniques of the fire temple, Asuma is able to attack and defend while waiting for the opportune moment to slice some heads off.",
        "skills": [
            {
                "name": "Thousand-Armed Murder",
                "img": "https://i.imgur.com/jNKJQur.png",
                "description": "Asuma gains 50 destructible defense and instantly deals 25 damage to one enemy. During this time, he can use this skill again for 1 random chakra to deal 25 damage to one enemy. When this skill ends, Asuma will be unable to use this skill for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Ash Pile Burning",
                "img": "https://i.imgur.com/51JwKbr.png",
                "description": "Asuma exhales a cloud of combustible ash on all enemies, increasing the cooldown of their skills by 1 turn. During this time, this skill will be replaced by 'Ash Pile Burning - Ignite'.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Action",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Decapitate",
                "img": "https://i.imgur.com/QgXg9fS.png",
                "description": "Showing no mercy, Asuma targets one enemy, and if that enemy's health is 25 or less, he will instantly kill that enemy. This skill ignores invulnerability and cannot be countered or reflected.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Asuma Evasion",
                "img": "https://i.imgur.com/K0um1gq.png",
                "description": "This skill makes Sarutobi Asuma (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Ash Pile Burning - Ignite",
                "img": "https://i.imgur.com/hjg9FWz.png",
                "description": "Asuma lights up the ash on the battlefield, dealing 10 affliction damage to all enemies for each stack of 'Ash Pile Cloud' on them. This skill will end 'Ash Pile Cloud' and it cannot be countered or reflected and ignores invulnerability.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            }
        ]
    },
    {
        "id": 80,
        "name": "Yamashiro Aoba (S)",
        "img": "https://i.imgur.com/DSILjJ6.png",
        "lore": "Aoba is one of the special jounins of the Hidden Leaf Village. By summoning crows, he is able to distract enemies, protect allies, and all while disguising himself among them to create openings for stealth attacks. In addition, Aoba is also able to penetrate the minds of his enemies to obtain information.",
        "skills": [
            {
                "name": "Crow Assault",
                "img": "https://i.imgur.com/2VvTqS9.png",
                "description": "Aoba deals 5 damage to all enemies for 4 turns. All Aoba team will also gain 5 damage reduction points for 4 turns.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Crow Convergence",
                "img": "https://i.imgur.com/N4Z04FG.png",
                "description": "Aoba targets one enemy, making them unable to reduce damage or become invulnerable and dealing 30 damage to them for 1 turn. For 3 turns, that enemy will take 5 additional mental damage.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Chakra Imbued Kunai",
                "img": "https://imgur.com/p7dKbjA.jpg",
                "description": "Aoba targets one enemy for 2 turns. If a new skill that has counter, reflect, or invulnerability is used on that enemy, they will ignore helpful effects for 1 turn. While active, that enemy will receive 10 additional damage from Aoba's skills. This skill is invisible and ends when triggered.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Crow Smoke Screen",
                "img": "https://imgur.com/q5wXgcr.jpg",
                "description": "This skill makes Yamashiro Aoba (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 81,
        "name": "Izumo and Kotetsu (S)",
        "img": "https://i.imgur.com/9zd3jpv.jpg",
        "lore": "Part of the Nijuu Shoutai, Izumo and Kotetsu are almost always found together and work together excellently as a combat team.",
        "skills": [
            {
                "name": "Mace Crush",
                "img": "https://i.imgur.com/st09j1g.jpg",
                "description": "Kotetsu summons a giant mace and slams it against one enemy, dealing 30 damage to them. This skill will deal 10 more damage if the enemy has been stunned by the 'Starch Syrup Capturing Field'.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Melee"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Starch Syrup Capturing Field",
                "img": "https://i.imgur.com/I2M3m7i.jpg",
                "description": "Izumo Spits out a field of sticky skyrup making it harder for the enemy team to move around. For 2 turns, any enemy that uses a new non-mental skill, including Affliction as a separated class, will have that specif class of skill stunned for 1 turn.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Devastate",
                "img": "https://i.imgur.com/W5VuH7m.jpg",
                "description": "Izumo moves to hit an enemy from the left. For the next 3 turns, if 'Annihilate' is used on that target, they will take 65 damage.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant",
                    "Melee"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Tag Team",
                "img": "https://i.imgur.com/gDCDUMD.jpg",
                "description": "Izumo swap, exchanging his health points for Kotetsu's. If Izumo or Kotetsu is killed during this time, the other will take permanent control. During this period, 'Devastate' will be replaced by 'Annihilate'. This skill can be used again to exchange health points. This skill cannot be ignored or removed.",
                "cooldown": "None",
                "classes": [
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Annihilate",
                "img": "https://i.imgur.com/gFhN8WU.png",
                "description": "Kotetsu moves to hit an enemy from the right. For the next 3 turns, if 'Devastate' is used on that target, they will take 65 damage.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant",
                    "Melee"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            }
        ]
    },
    {
        "id": 82,
        "name": "Inuzuka Tsume (S)",
        "img": "https://i.imgur.com/IIeGmwW.png",
        "lore": "A Konoha jounin, a member of the Inuzuka clan, and the mother of Kiba, Tsume, much like her son, is a wild and impatient woman with an often odd sense of humor. Like other members of her clan, Tsume fights one with her companion, Kuromaru, while allowing her wild instincts to take over.",
        "skills": [
            {
                "name": "Summon Kuromaru",
                "img": "https://i.imgur.com/BxSvfpG.png",
                "description": "Tsume calls Kuromaru to aid her. The following 4 turns, she will gain 50% points of damage reduction. During this time, this skill will be replaced by 'Fierce Bite' and any enemy that uses a new harmful non-affliction skill on Tsume will receive 10 damage.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Melee",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Passing Fang",
                "img": "https://i.imgur.com/53f8q2Q.png",
                "description": "Tsume spins, dealing 15 piercing damage to one enemy for 2 turns. All stun skills that enemy uses will also be decreased by 2 turns. If 'Summon Kuromaru' is active, this skill will deal 5 additional damage.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Flashbang",
                "img": "https://i.imgur.com/P1Y9n3z.png",
                "description": "Tsume covers herself and her allies, making them invulnerable to all non-affliction skills for 1 turn. Tsume only carries 3 of these grenades with her at all times, so this skill can only be used three times in a game.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Man-Beast Defense",
                "img": "https://i.imgur.com/UmQRaHZ.png",
                "description": "This skill makes Inuzuka Tsume (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Fierce Bite",
                "img": "https://i.imgur.com/sjrxK3l.png",
                "description": "Kuromaru jumps at one enemy dealing 25 damage which ignores invulnerability. If that enemy dies this turn, then for 2 turns Tsume will have her damage increased by 10, will ignore all stun effects and cannot be killed.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            }
        ]
    },
    {
        "id": 83,
        "name": "Yamanaka Inoichi (S)",
        "img": "https://i.imgur.com/D5wMgU4.png",
        "lore": "Yamanaka Inoichi (S) is the father of Ino and the leader of the Yamanaka clan. He is a jounin and a member of the Konoha interrogation squad.",
        "skills": [
            {
                "name": "Mastered Mind Disturbance",
                "img": "https://i.imgur.com/JAS3deU.png",
                "description": "Inoichi invades an enemy's mind, dealing 10 piercing damage to them and stunning their non-mental skills for 1 turn. If used one turn after 'Mind Shatter', this skill will deal 10 additional damage.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Mind Shatter",
                "img": "https://i.imgur.com/KOiB091.png",
                "description": "Inoichi deals 30 piercing damage to one enemy. For 1 turn, that enemy's physical skills will cost 1 additional taijutsu, their chakra skills cost 1 additional ninjutsu, and their mental skills will cost 1 additional genjutsu.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Mental Invasion",
                "img": "https://i.imgur.com/LiPZiOp.png",
                "description": "For 1 turn, if one enemy uses a new harmful skill, that skill will heal instead of dealing damage, and its non-damage effects will be nullified. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Sensing Water Sphere",
                "img": "https://i.imgur.com/jFSF2I3.png",
                "description": "This skill makes Yamanaka Inoichi (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 84,
        "name": "Morino Ibiki (S)",
        "img": "https://i.imgur.com/2SLQHTC.png",
        "lore": "Morino Ibiki (S) is a jounin and the designer of the chuunin exams. He is the leader of the Konoha interrogation squad.",
        "skills": [
            {
                "name": "Payback",
                "img": "https://i.imgur.com/H8ASuee.png",
                "description": "Ibiki deals 5 affliction damage to one enemy permanently. During this time, if that enemy's health drops to 15 or less, they will be instantly killed. While active, Ibiki's other harmful skills will cost 1 less random chakra. This skill ends when Ibiki or the target dies and cannot be used while active.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Melee",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Summoning: Iron Maiden",
                "img": "https://i.imgur.com/dlz9xZH.png",
                "description": "Ibiki summons a giant cat and traps one enemy inside of it, dealing 20 piercing damage to that enemy. For 2 turns, each turn that enemy uses a new harmful skill, they will be dealt 20 piercing damage. Ibiki will also gain 20 destructible defense when this skill is used.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Summoning: Torture Chamber",
                "img": "https://i.imgur.com/hOOexDH.png",
                "description": "Ibiki traps one enemy inside his torture chambers, dealing 20 piercing damage to that enemy. For 2 turns, each turn that enemy does not a new skill, they will be dealt 20 piercing damage. Ibiki will also gain 20 destructible defense when this skill is used.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sliding Evasion",
                "img": "https://i.imgur.com/MU5P2zq.png",
                "description": "This skill makes Morino Ibiki (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 85,
        "name": "Akimichi Chouza (S)",
        "img": "https://i.imgur.com/y0UOx6i.png",
        "lore": "Akimichi Chouza (S) is the leader of the Akimichi clan and the father of Chouji. He is a jounin and he is skilled in all of his clan's secret techniques.",
        "skills": [
            {
                "name": "Chain Bind",
                "img": "https://i.imgur.com/V5Ker5n.png",
                "description": "Chouza slows down an enemy, dealing 10 damage to them and lowering all physical and chakra non-affliction damage they deal by 10 for 1 turn. Chouza's team will also gain 10 destructible defense.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Jounin Meat Tank",
                "img": "https://i.imgur.com/NCr5YOX.png",
                "description": "Chouza begins rolling, dealing 15 damage to all enemies for 2 turns. During this time, his team will gain 15 destructible defense each turn.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Expansion Smash",
                "img": "https://i.imgur.com/WdjJjx5.png",
                "description": "If used on an enemy, for 1 turn, the next non-mental harmful skill they use will be countered. If used on an ally, for 1 turn, the next non-mental harmful skill used on them will be countered. The countered enemy will receive 20 damage. This skill is invisible and ignores invulnerability.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Chouza Block",
                "img": "https://i.imgur.com/1Kzk8rc.png",
                "description": "This skill makes Akimichi Chouza (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 86,
        "name": "Hyuuga Hiashi (S)",
        "img": "https://i.imgur.com/ZqOqt45.jpg",
        "lore": "Head of the Hyuuga clan, and father to both Hinata and Hanabi, Hiashi is a strict, but caring man who would do anything for his clan. In battle, there is no equal when it comes to mastering the Hyuuga clan abilitie",
        "skills": [
            {
                "name": "Master Gentle Fist",
                "img": "https://i.imgur.com/OXOLq9a.jpg",
                "description": "Hiashi slams one enemy with his fists, dealing 20 damage to them and removing 1 taijutsu or ninjutsu chakra from them. The following turn, one other random enemy, will receive 15 damage; the target of this skill is invisible.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Unique",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Master Revolving Heaven",
                "img": "https://i.imgur.com/nXwOyt7.jpg",
                "description": "Hiashi spins, becoming invulnerable to non-mental skills for 2 turns, dealing 15 damage to all enemies each turn.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Unique",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Eight Trigrams Vacuum Wall Palm",
                "img": "https://i.imgur.com/dhKR9Ee.jpg",
                "description": "Hiashi gets ready to blast an enemy's attack back. The next turn, the first enemy to use a new harmful skill on one ally or himself will have that skill reflected back to one random enemy.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Hiashi Byakugan",
                "img": "https://i.imgur.com/81nCkpb.jpg",
                "description": "This skill makes Hyuuga Hiashi (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 87,
        "name": "Nara Shikaku (S)",
        "img": "https://i.imgur.com/zk8rpMS.png",
        "lore": "The father of Nara Shikamaru, and the head of the Nara clan, Shikaku is a cool-headed Jounin of Konoha who will go to any lengths to protect his friends and family. In battle, Shikaku is merciless, combining his impressive shadow imitation skills with his unparalleled intellect to grab victory for his team.",
        "skills": [
            {
                "name": "Master Shadow Imitation",
                "img": "https://i.imgur.com/daGBuKS.png",
                "description": "Shikaku grabs an enemy with his shadow, forcing his body to do as he pleases. That enemy will receive 20 damage and then will have their physical and chakra skills stunned for 2 turns. The following turn, this skill will be replaced by 'Shadow Dispersion'.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Control"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Black Spider Lily",
                "img": "https://i.imgur.com/OTNQw5N.png",
                "description": "Shikaku extends his shadows out to his enemies. For 3 turns, Shikaku's skills will deal an additional 10 damage to them, and each time they use a new stun skill, then for 3 turns the next time Shikaku stuns that enemy, they will be stunned for 1 additional turn.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Problem Analysis",
                "img": "https://i.imgur.com/SrDeUzW.png",
                "description": "Shikaku targets himself or one ally for 1 turn, and the first new harmful non-affliction damage skill that is used on them will deal no damage and that ally will gain destructible defense equal to the original damage of that skill. This skill is invisible.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Human Barricade",
                "img": "https://i.imgur.com/Nyx7LfT.png",
                "description": "This skill makes Nara Shikaku (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Shadow Dispersion",
                "img": "https://i.imgur.com/474zyLo.png",
                "description": "Nara Shikaku targets all enemies not affected by 'Master Shadow Imitation', stunning their physical and chakra skills for 1 turn and dealing 20 damage to them.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            }
        ]
    },
    {
        "id": 88,
        "name": "Aburame Torune (S)",
        "img": "https://i.imgur.com/A4wlANH.png",
        "lore": "A member of the Aburame clan, and a member of Anbu Root, Torune can almost be said to have no personality of his own, other than his undying loyalty to Danzo. Unlike other members of his clan, Torune employs a unique type of bug that lets him outright destroy both flesh and chakra.",
        "skills": [
            {
                "name": "Armor of Venom",
                "img": "https://i.imgur.com/Ax6HkaI.png",
                "description": "Torune applies one 'Venom Beetle' to one enemy and gains 15 destructible defense. During this time, Torune can use this skill again for 1 random to apply a 'Venom Beetle' to one enemy. The enemy that destroys this destructible defense will have a 'Venom Beetle' applied to them.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Melee",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Jar of Poison",
                "img": "https://i.imgur.com/Q7GIpYB.png",
                "description": "Torune applies one 'Venom Beetle' to each enemy and gains 35 destructible defense. During this time, Torune can use this skill again for 1 random to apply a 'Venom Beetle' to each enemy. The enemy that destroys this destructible defense will have a 'Venom Beetle' applied to them.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Melee",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Venom Explosion",
                "img": "https://i.imgur.com/dLD5yj4.jpeg",
                "description": "Torune targets any enemy affected by at least one 'Venom Beetle', removing 1 random chakra from them for each 'Venom Beetle' on them.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Melee",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Super Leap",
                "img": "https://i.imgur.com/2VtvWBR.png",
                "description": "This skill makes Aburame Torune (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Venom Beetle",
                "img": "https://i.imgur.com/z24xy0F.png",
                "description": "This skill deals 5 affliction damage permanently.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 89,
        "name": "Yamanaka Fu (S)",
        "img": "https://i.imgur.com/InnBYnM.png",
        "lore": "Yamanaka Fu (S) is a member of the Yamanaka clan and a member of Anbu Root. Fu is a skilled genjutsu user and the partner of Torune.",
        "skills": [
            {
                "name": "Tanto Slash",
                "img": "https://i.imgur.com/Ivhjle9.png",
                "description": "Fu slashes with his tanto, dealing 25 damage to one enemy. This skill will deal an additional 15 damage to an enemy countered by 'Mind Puppet Switch'.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Quickened Mind Body Switch",
                "img": "https://i.imgur.com/UtGsxRv.png",
                "description": "Fu disrupts one enemy, dealing 20 piercing damage to them. For 1 turn, that enemy will be invulnerable to helpful skills. The following turn, 'Tanto Slash' will deal an additional 15 damage to that enemy.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Mind Puppet Switch",
                "img": "https://i.imgur.com/XWZVLWA.png",
                "description": "Fu sets up a trap using a puppet. For 1 turn, the first enemy that uses a new harmful physical or chakra skill against Fu or one ally will be countered and will have all their skills replaced by 'Mind Puppet Switch - Attack' for 2 turns and this skill will end.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Aggresive Retreat",
                "img": "https://i.imgur.com/bwxSRFa.png",
                "description": "This skill makes Yamanaka Fu (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Mind Puppet Switch - Attack",
                "img": "https://i.imgur.com/F94sK6m.jpeg",
                "description": "This skill deals 15 damage to one enemy.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 90,
        "name": "Shimura Danzo (S)",
        "img": "https://i.imgur.com/q35DAVP.png",
        "lore": "Shimura Danzo (S) is the leader of the hidden root organization in Konoha and one of the village elders. Danzo operates in the shadows dedicated to Konoha no matter the cost.",
        "skills": [
            {
                "name": "Izanagi",
                "img": "https://i.imgur.com/1RJkCc2.png",
                "description": "Danzo consumes 2 \"Izanagi's Sharingan\" to activate Izanagi, ignoring all damage dealt to him permanently. If Danzo is affected by 2 new harmful skills, this skill will end and Danzo will be unable to use it for 1 turn. While 'Izanagi' is activated, this skill will be replaced by 'Stolen Kotoamatsukami'.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Self-Cursing Seal",
                "img": "https://i.imgur.com/mQ9WSFt.png",
                "description": "Danzo places a seal mark on an enemy's body, dealing 10 affliction damage to them for 5 turns. If this skill is removed, that enemy will have their harmful skills stunned for 1 turn. This skill stacks.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Summoning: Baku",
                "img": "https://i.imgur.com/uvk12gs.png",
                "description": "Danzo summons Baku in the battlefield, dealing 25 piercing damage to one enemy. For 2 turns, that enemy's non-affliction skills will deal 50% less damage.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Tree Birth Defense",
                "img": "https://i.imgur.com/NVqN7zo.png",
                "description": "This skill makes Shimura Danzo (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Izanagi's Sharingan",
                "img": "https://i.imgur.com/5r8Voh1.png",
                "description": "Danzo starts the game with 10 Sharingans. Each time Danzo uses 'Izanagi', he will consume 2 Sharingan to ignore all damage dealt to him until 2 new harmful skill are used on him. If Danzo runs out of Sharingans, 'Izanagi' will be replaced by 'Reverse Four Symbols Seal' permanently.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Stolen Kotoamatsukami",
                "img": "https://i.imgur.com/g5uwng1.png",
                "description": "The next time one enemy uses a new harmful skill, they will be countered. The following 2 turns, that enemy will have their harmful skills stunned and this skill will be replaced by the countered skill and will have no cost. This skill cannot be countered, reflected and is invisible.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Reverse Four Symbols Seal",
                "img": "https://i.imgur.com/esli7Zk.png",
                "description": "Danzo releases 4 symbol from his blood and forms a large black sphere around him, sealing all enemies and dealing 20 affliction damage to them. Afterwards, Danzo takes 10 affliction damage.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            }
        ]
    },
    {
        "id": 91,
        "name": "Chiyo (S)",
        "img": "https://i.imgur.com/Xwi4eLx.png",
        "lore": "The grandmother of Sasori(s) and elder ninja of the Sand Village, Chiyo is a well known and accomplished puppet master and builder.",
        "skills": [
            {
                "name": "White Secret Attack Rampage",
                "img": "https://i.imgur.com/6rGUR71.png",
                "description": "Chiyo directs her puppets to devastate the battlefield, dealing 20 damage to a random enemy for 1 turn. The following turn, a second random enemy will also be dealt 20 damage. The second target is invisible. The next use of 'Sanbou Kyuukai' will deal 5 aditional damage. This skill stacks.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Action",
                    "Ranged",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sanbou Kyuukai",
                "img": "https://i.imgur.com/nEG0auz.png",
                "description": "This skill deals 20 piercing damage to one enemy and stuns their non-mental skills for 1 turn. Also for 1 turn, that enemy will receive 5 additional damage from all sources. This skill ignores invulnerability.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Ranged",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Ally Puppetry",
                "img": "https://i.imgur.com/bMu8gne.png",
                "description": "Chiyo controls one ally for 3 turns. Each turn, that ally will nullify the first physical or chakra non-affliction skill used on them. During this time, their melee skills will deal 25% more damage. The following 2 turns, this skill will be replaced. This skill ends if Chiyo is killed.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Chakra Shield",
                "img": "https://i.imgur.com/BdXtVD4.png",
                "description": "This skill makes Chiyo (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "One's Own Life Reincarnation",
                "img": "https://i.imgur.com/8tkBGN3.png",
                "description": "Chiyo selects one ally, giving them all of her current remaining health. Afterwards, Chiyo will instantly die. The chosen ally gains 1 random chakra for the rest of the game. This skill can also be used on dead allies.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 92,
        "name": "Kankuro (S)",
        "img": "https://i.imgur.com/dj3meeB.png",
        "lore": "In the last couple years Kankuro(s) has become a Jounin and has created a new puppet. He is now able to harness three puppets at once and is a more versatile combatant.",
        "skills": [
            {
                "name": "Kuroari Trap",
                "img": "https://i.imgur.com/9FodKEM.png",
                "description": "Kankuro traps one enemy for 1 turn. If that enemy uses a new harmful skill, they will be countered and receive 15 additional damage from 'Karasu Knives'. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Karasu Knives",
                "img": "https://i.imgur.com/jGcSDIK.png",
                "description": "Kankuro assaults one enemy with poisoned knives, dealing 25 damage to them and that enemy will take 10 affliction damage the following turn*. For 1 turn, this skill will be replaced by 'Karasu: Finishing Knive'.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Affliction*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sanshouo Shield",
                "img": "https://i.imgur.com/OXzZKNs.png",
                "description": "Kankuro uses Sanshouo to block enemy attacks. For 3 turns, Kankuro and his allies gain 5 points of damage reduction and are immune to affliction damage. During this time, this skill will be replaced by 'Salamander Puppet'. This skill ends if Kankuro dies.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Puppet Distraction",
                "img": "https://i.imgur.com/eQgxBJo.png",
                "description": "This skill makes Kankuro (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Karasu: Finishing Knive",
                "img": "https://i.imgur.com/zD2TOYL.png",
                "description": "This skill deals 20 piercing damage to one enemy.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Salamander Puppet",
                "img": "https://i.imgur.com/TeoTvDM.png",
                "description": "Kankuro protects himself or an ally for 1 turn, that ally will gain 20 points of unpierceable damage reduction.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 93,
        "name": "Kazekage Gaara (S)",
        "img": "https://i.imgur.com/Osg9lfR.png",
        "lore": "After a few short years and much soul-searching, Gaara(s) has risen to be his village's Kazekage. Rather than destroying others he now protects those he cares about to prove his existence.",
        "skills": [
            {
                "name": "Desert Missile",
                "img": "https://i.imgur.com/etCSgky.png",
                "description": "Using thin ropes of sand Kazekage Gaara hunts down one enemy dealing 10 piercing damage to them. New skills used by the target of this skill will deal 15 less non-affliction damage for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Desert Prison",
                "img": "https://i.imgur.com/qYDrZ1Z.png",
                "description": "Kazekage Gaara entraps and crushes one enemy in a giant maw of sand stunning their physical and chakra skills for 1 turn and dealing 10 piercing damage to them.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sand Summoning",
                "img": "https://i.imgur.com/JkrNwQV.png",
                "description": "Gaara and his allies will gain 5 permanent destructible defense every 3 turns, for the rest of the game. Permanently, 'Desert Missile' will deal 15 additional damage and 'Desert Prison' will deal 20 additional damage. This skill can only be used twice.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Sand Sphere",
                "img": "https://i.imgur.com/0g1o76R.png",
                "description": "This skill makes Kazekage Gaara (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 94,
        "name": "Temari (S)",
        "img": "https://i.imgur.com/jKSd8JS.png",
        "lore": "Temari (S) has grown over the years. She is now a Jounin as well as the sister of Kankuro and Gaara. Temari is also the Hidden Sand Village's ambassador to the Hidden Leaf Village.",
        "skills": [
            {
                "name": "Fan Increase Moon",
                "img": "https://i.imgur.com/1wTEObW.png",
                "description": "Temari opens her fan and reveals a moon. Temari gains 5 points of damage reduction and increase her damage by 5 permanently. This skill stacks and can only be used 3 times.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Wind Scythe",
                "img": "https://i.imgur.com/1Dw5I8M.png",
                "description": "Using Wind Scythe Temari (S) deals 20 piercing damage to one enemy.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Immense Cutting Whirlwind",
                "img": "https://i.imgur.com/Lwfgjry.png",
                "description": "Temari creates an immense whirlwind in the battlefield, dealing 20 damage to all enemies and lowering their non-affliction damage by 10 for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Fan Barrier",
                "img": "https://i.imgur.com/dIOxpHr.png",
                "description": "This skill makes Temari (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 95,
        "name": "Maki (S)",
        "img": "https://i.imgur.com/7Aokrcx.png",
        "lore": "Maki is a kunoichi of the Hidden Sand Village and the student of Pakura. Maki is also a member of the Allied Shinobi Forces' Sealing Squad. Original Pics by: Pain_Alagoano",
        "skills": [
            {
                "name": "Cloth Binding",
                "img": "https://i.imgur.com/WKp753c.png",
                "description": "Maki deals 20 piercing damage to one enemy and stuns their harmful skills. During 'Cloth Sealing', this skill will deal an additional 20 damage. During 'Weighted Net Scroll', this skill will deal an additional 10 damage.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Cloth Sealing",
                "img": "https://i.imgur.com/xCx3O1v.png",
                "description": "Maki uses a giant roll of cloth to seal one enemy, stunning their physical and chakra skills for 1 turn. This skill ignores invulnerability.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Weighted Net Scroll",
                "img": "https://i.imgur.com/ZDcqtWH.png",
                "description": "Maki grants herself 50% damage reduction for 1 turn. During this time, if an enemy uses a new harmful skill on her, they will have the damage of their skills reduced by 50% for 1 turn. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Cloth Shelter",
                "img": "https://i.imgur.com/QQ3JUKI.png",
                "description": "This skill makes Maki (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 96,
        "name": "Uzuki Yugao",
        "img": "https://i.imgur.com/mCMFKuP.png",
        "lore": "A member of Konoha's Anbu faction, Yugao was the lover of Gekkou Hayate before his untimely death, and is a hard-working, dedicated, and tender person. Yugao fights using powerful genjutsu-enhanced swordsmanship, and is also proficient in the use of sealing techniques to disable her enemies.",
        "skills": [
            {
                "name": "Hazy Moon Night",
                "img": "https://i.imgur.com/IHUyz1z.png",
                "description": "Yugao covers herself in a haze, and strikes one enemy, dealing 20 piercing damage to them. For 1 turn, if Yugao or an ally uses a new skill on the target of 'Hazy Moon Night', they will become invulnerable for 1 turn. This skill triggers once per ally.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Crescent Moon Strike",
                "img": "https://i.imgur.com/qJupUm4.png",
                "description": "Yugao performs a graceful sword slash, dealing 15 piercing damage to one enemy. This skill will deal 15 additional damage if 'Hazy Moon Night' was used on the previous turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sealing Technique",
                "img": "https://i.imgur.com/bBuPuWp.png",
                "description": "Yugao negates one enemy's abilities, dealing 10 affliction damage to them. For 2 turns, that enemy will be invulnerable to helpful skills and their harmful skills will be stunned. During this time, they will receive 5 additional damage from non-affliction skills.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Yugao Hide",
                "img": "https://i.imgur.com/83oXFJy.png",
                "description": "This skill makes Uzuki Yugao invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 97,
        "name": "Akatsuchi (S)",
        "img": "https://i.imgur.com/Fu0lus7.png",
        "lore": "Akatsuchi (S) is a shinobi of the Hidden Rock Village. Akatsuchi is a powerful shinobi who uses brute strength and earth style jutsus in combat.",
        "skills": [
            {
                "name": "High Speed Assault",
                "img": "https://i.imgur.com/CAcVNir.png",
                "description": "Using High Speed Assault Akatsuchi (S) deals 25 damage to 1 enemy. The following 3 turns, this skill will cost 1 additional random chakra and will deal 15 additional damage.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Golem",
                "img": "https://i.imgur.com/Z8IavyU.png",
                "description": "Akatsuchi (S) uses Golem on all enemies dealing 15 damage to them. The following 3 turns, this skill will cost 1 additional random chakra and will deal 10 additional damage.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Golem Chakra Devour",
                "img": "https://i.imgur.com/9pO0uU2.png",
                "description": "Akatsuchi's Golem devours one enemy's chakra, removing all destructible defense from them, dealing 10 piercing damage to that enemy and stunning their harmful skills for 1 turn. The following 2 turns, Akatsuchi's skills will cost 1 less random chakra.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Akatsuchi Retreat",
                "img": "https://i.imgur.com/VY4Ti0Q.png",
                "description": "This skill makes Akatsuchi (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 98,
        "name": "Kurotsuchi (S)",
        "img": "https://i.imgur.com/Gwr8OgN.png",
        "lore": "Kurotsuchi (S) is a shinobi of the Hidden Rock Village and the Partner of Akatsuchi. She is also the granddaughter of the third Tsuchikage.",
        "skills": [
            {
                "name": "Lava Quicklime",
                "img": "https://i.imgur.com/wDq63BJ.png",
                "description": "Kurotsuchi uses Lava Release to create a quicklime to attack one enemy, dealing 25 damage to them. For 1 turn, Kurotsuchi gains 50% unpierceable damage reduction and 'Water Trumpet' will stun non-mental skills for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Water Trumpet",
                "img": "https://i.imgur.com/HKzjDtx.png",
                "description": "Using Water Release technique, Kurotsuchi deals 20 piercing damage to one enemy. For 1 turn, 'Lava Quicklime' will deal 5 additional damage.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Control"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Earth Spears",
                "img": "https://i.imgur.com/tSJ4MhL.png",
                "description": "Kurotsuchi uses Earth Spears, dealing 20 damage to all enemies. For 1 turn, all enemies affected by this skill will be invulnerable to friendly skills.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Evasiveness",
                "img": "https://i.imgur.com/uqUVoJG.png",
                "description": "This skill makes Kurotsuchi (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 99,
        "name": "Nii Yugito (S)",
        "img": "https://i.imgur.com/ISPJbcs.png",
        "lore": "A kunoichi from Kumogakure, Nii Yugito holds within her the two-tailed beast. She has full control over the bijuu Nibi, and is able to transform into it and use its powers to fight.",
        "skills": [
            {
                "name": "Nibi Transformation",
                "img": "https://i.imgur.com/ehIzoqE.png",
                "description": "Yugito gains 5 points of damage reduction and targets all enemies. Every time an enemy uses a new harmful skill, Yugito will deal 5 additional damage for 1 turn. While active, this skill can be used to heal 20 health and grant 50% unpierceable damage reduction for 1 turn. This skill ignores invulnerability.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Claw Swipe",
                "img": "https://i.imgur.com/s7vWIeS.png",
                "description": "Yugito takes a huge swipe of her claw, dealing 15 damage to one enemy for 2 turns. During this time, that enemy's helpful skills will cost 1 additional random chakra. Requires 'Nibi Transformation'.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Spectral Fireball",
                "img": "https://i.imgur.com/8xEGIsC.png",
                "description": "Yugito fires a large fireball from her mouth, dealing 30 piercing damage to one enemy. For 1 turn, that enemy's non-affliction damage will be reduced to a maximum of 25. Requires 'Nibi Transformation'.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Rage",
                "img": "https://i.imgur.com/akLKyX0.png",
                "description": "This skill makes Nii Yugito (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 100,
        "name": "Killer Bee (S)",
        "img": "https://i.imgur.com/w7d55NW.png",
        "lore": "Killer Bee (S) is the jinchuriki from Kumogakure. Bee (S) is referred to as the hero of Kumogakure and possess immense physical strength as well as being an expert swordsmen.",
        "skills": [
            {
                "name": "Kenjutsu",
                "img": "https://i.imgur.com/rRqiVre.png",
                "description": "Bee creates an offensive defense using his seven swords. For 4 turns, if an enemy uses a new harmful non-mental damaging skill on Bee, they will take 10 piercing damage. During this time, 'Buzz Saw' will deal 20 additional damage, and this skill is replaced by 'Final Kenjutsu'.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Buzz Saw",
                "img": "https://i.imgur.com/TJrai76.png",
                "description": "Using his seven swords, Bee deals 20 piercing damage to one enemy. During 'Kenjutsu', this skill will deal an additional 10 damage.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Chakra Stream",
                "img": "https://i.imgur.com/xW7QlkR.png",
                "description": "Bee protects himself or an ally. For 1 turn, the first enemy that uses a new skill on the protected ally will be countered and will take 15 piercing damage. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Strong Defense",
                "img": "https://i.imgur.com/JkuN3d1.png",
                "description": "This skill makes Killer Bee (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Final Kenjutsu",
                "img": "https://i.imgur.com/5cPNd9Q.png",
                "description": "Bee executes an enemy with a final attack, dealing 35 piercing damage to them. If that enemy's health drops to 5 or less, they will be instantly killed. This skill ignores invulnerability and can only be used on an enemy that took damage from Killer Bee's other skills on the last turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 101,
        "name": "Hachibi Bee (S)",
        "img": "https://i.imgur.com/B1cuEbq.png",
        "lore": "Having fully bonded with and gained control of the Eight-Tails, Gyuuki, and thus having become what is known as a perfect jinchuuriki, Killer Bee is able to use its abilities to their fullest extent. Using the Eight-Tails' protective chakra to gradually become much stronger, Bee can run a rampage on the battlefield.",
        "skills": [
            {
                "name": "Hachibi Chakra Bones",
                "img": "https://i.imgur.com/SKBAxY8.png",
                "description": "Hachibi Bee enables his skills and gains 1 Hachibe Stack. At 1 Hachibi Stack, he gains 5 points of unpierceable damage reduction. At 2 Hachibi Stacks, he gains 30% unpierceable damage reduction. At 3 Hachibi Stacks, he gains 50% unpierceable damage reduction and heals 5 health.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Lariat",
                "img": "https://i.imgur.com/LIy6FVP.png",
                "description": "Bee decapitates an enemy, healing 10 health and dealing 30 damage to that enemy. At 2 Hachibi Stacks, this skill will instead deal 40 damage to one enemy and stuns the harmful skills of all other enemies for 1 turn; At 3 Hachibi Stacks, deals 65 piercing damage to one enemy ignoring invulnerability.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Hachibi Tailed Beast Bomb",
                "img": "https://i.imgur.com/HI57mTr.png",
                "description": "Bee fires a concentrated energy bomb, healing 10 health and then dealing 20 damage to all enemies; At 2 Hachibi Stacks, this skill will instead deal 20 affliction damage to all enemies for 2 turns (Action classed); At 3 Hachibi Stacks, this skill will instead deal 40 damage to all enemies.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Hachibi Tails Block",
                "img": "https://i.imgur.com/9IKr5u2.png",
                "description": "This skill makes Hachibi Bee (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 102,
        "name": "Darui (S)",
        "img": "https://i.imgur.com/4zQxemJ.png",
        "lore": "Darui (S) is a jounin of the Hidden Cloud Village and the right hand of the Yondaime Raikage. Despite his appearance Darui (S) is a formidable shinobi.",
        "skills": [
            {
                "name": "Laser Circus",
                "img": "https://i.imgur.com/gnwtJrI.png",
                "description": "Darui creates several beams and shoots his opponents, stunning one enemy's harmful skills for 1 turn. Afterwards, the main target takes 5 piercing damage and all other enemies take 15 piercing damage.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Electric Water Encampment Wall",
                "img": "https://i.imgur.com/arWmbIl.png",
                "description": "Darui targets all enemies for 1 turn, any enemy that uses a new harmful skill will take 5 affliction damage. The following turn, all enemies affected by this skill will recelve 5 additional damage from 'Laser Circus' and 'Black Panther Lightning'. This skill cannot be countered.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Black Panther Lightning",
                "img": "https://i.imgur.com/lbXhosJ.png",
                "description": "Darui generates a black panther lightning from his body and releases it at one enemy, dealing 35 piercing damage to them. For 1 turn, that enemy's skills will have 2 additional cooldown. This skill ignores invulnerability.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Cleaver Sword Defense",
                "img": "https://i.imgur.com/GoWroAB.png",
                "description": "This skill makes Darui (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 103,
        "name": "Omoi (S)",
        "img": "https://i.imgur.com/C3s2jdh.png",
        "lore": "One of the ninjas in the cloud village, and one of the biggest swordsmen in the village. Omoi is usually concerned, but at the same time, skilled and apprehensive. In addition to good fencing, Omoi is able to execute strikes with the lightning element.",
        "skills": [
            {
                "name": "Crescent Moon Beheading",
                "img": "https://imgur.com/NSp1GYk.jpg",
                "description": "By using his sword to strike the enemy and liberate his allies, Omoi deals 20 piercing damage to one enemy and makes them unable to become invulnerable for 1 turn. Afterwards, all Omoi allies will have all harmful skills removed from them.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Lightning Chakra Stab",
                "img": "https://imgur.com/NekhgvG.jpg",
                "description": "Omoi imbues lightning chakra in his sword to immobilize one enemy just in one stab, dealing them 20 piercing damage and stunning their helpful skills. For 1 turn that enemy is also invulnerable to new helpful skills.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Crescent Moon Reverse Beheading",
                "img": "https://imgur.com/kHt1Ptt.jpg",
                "description": "Omoi uses his reactive kenjutsu to counterattack one enemy. If that enemy uses a new harmful damaging skill, they will be countered, will take 20 piercing damage and will have their physical and ranged skills stunned. The target of this skill is invisible.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Guard Position",
                "img": "https://imgur.com/pRn7sNb.jpg",
                "description": "This skill makes Omoi (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 104,
        "name": "Shee (S)",
        "img": "https://i.imgur.com/lBS7djv.png",
        "lore": "Shee (S) is a jounin of the Hidden Cloud Village and a sensor. Shee is one of the Raikage's most reliable shinobi.",
        "skills": [
            {
                "name": "Sensor Awareness",
                "img": "https://i.imgur.com/4mYooCj.png",
                "description": "Shee uses his sensor to detect one enemy's move. For 1 turn, if that enemy uses a new harmful skill, it will be delayed for 1 turn and they will take 20 piercing damage. During this time, if a new skill is used on Shee, he will become invulnerable for 1 turn. This skill is invisible.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Ally Heal",
                "img": "https://i.imgur.com/oRKPqvn.png",
                "description": "Using Ally Heal Shee (S) heals an ally for 25 health.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Lightning Illusion Flash",
                "img": "https://i.imgur.com/U3MPxDG.png",
                "description": "Shee (S) uses Lighting Illusion Flash on 1 enemy dealing 35 damage. That enemy will be invulnerable to new friendly skills for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Defensive Reaction",
                "img": "https://i.imgur.com/4XC8A04.png",
                "description": "This skill makes Shee (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 105,
        "name": "Ao (S)",
        "img": "https://i.imgur.com/8eZpgiw.jpg",
        "lore": "Ao (S) is a hunter-nin of the Hidden Mist Village and a skilled sensor. Ao is a veteran shinobi who has been in many battles, one of his spoils of war is the byakugan he possesses.",
        "skills": [
            {
                "name": "Stolen Byakugan",
                "img": "https://i.imgur.com/SE4MQCu.jpg",
                "description": "Ao uses his Byakugan on an enemy. For 3 turns, any new invisible skill used by that enemy will be visible and each time they use a new skill they will take 50% more damage from Ranged skills for 1 turn. This skill is invisible and cannot be countered or reflected.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sensing Barrier",
                "img": "https://i.imgur.com/ij8B1SF.jpg",
                "description": "Ao uses his sensing barrier on an enemy, making them unable to reduce damage or become invulnerable and dealing 20 damage to them for 1 turn. The following turn, that enemy will receive an additional 5 damage from 'Sensing Barrier'.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Byakugan Seal",
                "img": "https://i.imgur.com/XNSUxsF.jpg",
                "description": "For 1 turn, the first non mental skill used on Ao (S) will be countered. This skill is invisible the first time it is used and may only be used once. After the following 2 turns, this skill will be re-applied. During this time, if 'Sensing Barrier' is used this skill will be instantly re-applied.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Reactionary Defense",
                "img": "https://i.imgur.com/UQa0dlh.jpg",
                "description": "This skill makes Ao (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 106,
        "name": "Chojuro (S)",
        "img": "https://i.imgur.com/WMSVj5I.jpg",
        "lore": "Chojuro (S) confidence is building as the war rages one. The longer it lasts the stronger Chojuro (S) becomes.",
        "skills": [
            {
                "name": "Hiramekarei Strider",
                "img": "https://i.imgur.com/Nh30zKh.jpg",
                "description": "Using Hiramekarei Strider, Chojuro destroys all enemies' destructible defense and damage reduction and then deals 10 piercing damage to them. The following 2 turns, this skill will cost 1 ninjutsu chakra and may be used to deal 20 piercing damage to one enemy.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Hiramekarei Hammer",
                "img": "https://i.imgur.com/CSZCwGo.jpg",
                "description": "Chojuro (S) creates a hammer of chakra to attack one enemy, dealing 40 piercing damage to them. If that enemy has any destructible defense or damage reduction, this skill will apply 'Hiramekarei Strider' on them before dealing damage.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Hiramekarei Kenjutsu",
                "img": "https://i.imgur.com/Xei0Rhg.jpg",
                "description": "For 1 turn, all enemy physical or mental skills used on Chojuro (S) will be countered. Any countered enemy will permanently take 10 additional damage from Chojuro (S)'s skills.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Hiramekarei Defense",
                "img": "https://i.imgur.com/by7vCiX.jpg",
                "description": "This skill makes Chojuro (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 107,
        "name": "Four Tail Kyuubi Naruto (S)",
        "img": "https://i.imgur.com/D0nPc8R.png",
        "lore": "After completely giving into his anger and manifesting a fourth tail, Naruto ceases to be himself. In this state, Naruto's own body is completely overtaken by a deep, dense Nine-Tails chakra cloak, and at the cost of huge internal damage, Naruto becomes a mindless monster; a being of pure rage and destruction.",
        "skills": [
            {
                "name": "Four Tails Transformation",
                "img": "https://i.imgur.com/EDgE6DD.png",
                "description": "Naruto gains 15 points of damage reduction and 20 points of destructible defense permanently. During this time, he cannot be stunned. Each turn Naruto uses a new harmful skill, he loses 10 health that cannot kill him. This skill will be replaced by 'Kyuubi Chakra Gather'.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Affliction",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Shockwave Smash",
                "img": "https://i.imgur.com/YHEn0la.png",
                "description": "Naruto smahes the ground, generating a violent shockwave and dealing 15 piercing damage to all enemies. The following turn, 'Four Tailed Beast Bomb' will cost 1 less random chakra. Requires 'Four Tails Transformation'.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Four Tailed Beast Bomb",
                "img": "https://i.imgur.com/lZjOpvA.png",
                "description": "Naruto releases a massive tailed beast bomb, dealing 50 piercing damage to one enemy. The following turn, 'Shockwave Smash' will deal 5 additional damage. Requires 'Four Tails Transformation'.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Kyuubi Chakra Skin",
                "img": "https://i.imgur.com/HaNdcQd.png",
                "description": "This skill makes Four Tail Kyuubi Naruto (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Kyuubi Chakra Gather",
                "img": "https://i.imgur.com/X7aIup4.png",
                "description": "Naruto concentrates an immense amount of chakra in his mouth, gaining 10 permanent destructible defense and increasing 'Four Tailed Beast Bomb' damage by 5 permanently. This skill will end when Naruto uses his next new harmful skill. This skill may only stacks 3 times.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 108,
        "name": "Jiraiya (S)",
        "img": "https://i.imgur.com/ZpGGXKN.png",
        "lore": "Jiraiya (S) is one of the legendary Sannin that were trained by the third Hokage. Also known as the toad sage, he has been Uzumaki Naruto's teacher for the past few years.",
        "skills": [
            {
                "name": "Toad Oil Projectile",
                "img": "https://i.imgur.com/sHIiYby.png",
                "description": "Jiraiya spits a very dense oil at all enemies, dealing 10 affliction damage to them. Permanently, all enemies will receive 10 additional damage from 'Katon Endan'. Enemies marked by 'Wild Lion Mane' will have their action and control skills ended. This skill is replaced by 'Katon Endan' after being used.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Affliction",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Jiraya's Rasengan",
                "img": "https://i.imgur.com/fMlBx5F.png",
                "description": "Jiraya hits an opponent with his Rasengan, dealing 30 damage to them. For 1 turn, that enemy will deal 10 less non-affliction damage. If Used on an enemy marked by 'Wild Lion Mane', that enemy will take 10 additional damage.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Wild Lion Mane",
                "img": "https://i.imgur.com/yQaCntC.png",
                "description": "Jiraiya will protect himself or an ally for 2 turns. If an enemy uses a new skill on that ally, they will take 10 piercing damage and will deal 15 less non-affliction damage for 1 turn. This skill is invisible.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Summoning Gamaken",
                "img": "https://i.imgur.com/IJBZdur.png",
                "description": "This skill makes Jiraiya invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Katon Endan",
                "img": "https://i.imgur.com/GDxz2bn.png",
                "description": "Jiraiya emits a jet of fire from his mouth, dealing 20 damage to one enemy. This skill is replaced by 'Toad Oil Projectile' after being used.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 109,
        "name": "Sennin Jiraiya (S)",
        "img": "https://i.imgur.com/0AZFUyS.jpg",
        "lore": "Sennin Jiraiya (S) uses sage chakra to improve his speed, strength, and skills. The only downfall is that it alters his appearance similar to that of a toad and makes him unappealing to women, which makes it a last resort for the pervy sage.",
        "skills": [
            {
                "name": "Bath of Burning Oil",
                "img": "https://i.imgur.com/DkpKWQU.jpg",
                "description": "Using a mixture of wind, oil, and fire, Jiraiya deals 20 piercing damage and 15 damage to one enemy. For 1 turn, counter skills used by that enemy will last 1 turn less. The following turn, 'Chou Oodama Rasengan' will cost 1 ninjutsu and 1 random chakra.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Kebari Senbon",
                "img": "https://i.imgur.com/zrgHWDZ.jpg",
                "description": "Jiraiya turns his hair into needles, dealing 15 piercing damage to all enemies. For 1 turn, Jiraiya becomes invulnerable to harmful non-mental damage skills. The following turn, 'Chou Oodama Rasengan' will cost 1 taijutsu and 1 random chakra.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Chou Oodama Rasengan",
                "img": "https://i.imgur.com/KCTS7DZ.jpg",
                "description": "Creating a massive rasengan, Jiraiya makes one enemy unable to reduce damage or become ivnulnerable, then deals 45 damage to them for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Arm Block",
                "img": "https://i.imgur.com/LMkh8Pe.jpg",
                "description": "This skill makes Sennin Jiraiya (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 110,
        "name": "Fukasaku and Shima (S)",
        "img": "https://i.imgur.com/oXOirA4.jpg",
        "lore": "Fukasaku and Shima (S) are known as the two great sage toads of Mount Myoboku. They taught both Jiraiya and Naruto sage jutsu and are each skilled in elemental techniques as well as genjutsu techniques.",
        "skills": [
            {
                "name": "Frog Song",
                "img": "https://i.imgur.com/NZKucJD.jpg",
                "description": "Fukasaku and Shima (S) use their pattened genjustu to use Frog Song. They target 1 enemy and deal 15 affliction damage for 2 turns. During Toad Confrontation Singing this skill will cost 1 random chakra instead.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Action",
                    "Ranged",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Sand Dust",
                "img": "https://i.imgur.com/tvcevTA.jpg",
                "description": "Fukasaku and Shima (S) use Sand Dust. All allies will be invulnerable to enemy ranged skills for 1 turn.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Toad Confrontation Singing",
                "img": "https://i.imgur.com/A0eWnDM.jpg",
                "description": "Fukasaku and Shima (S) use Toad Confrontation Singing on all enemies dealing 15 damage for 2 turns. If any enemy uses a new skill during Toad Confrontation Singing they will have their mental and ranged skills stunned for 1 turn.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Control",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Frogs Tag Team",
                "img": "https://i.imgur.com/iaBGOtU.png",
                "description": "This skill makes Fukasaku and Shima (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 111,
        "name": "Sennin Naruto (S)",
        "img": "https://i.imgur.com/AMLeB3e.jpg",
        "lore": "Sennin Naruto (S) has trained on Mount Myoboku with Fukasaku and Shima. Naruto has become one of the most powerful individuals in the ninja world.",
        "skills": [
            {
                "name": "Frog Kata Kick",
                "img": "https://i.imgur.com/bZvNJMc.jpeg",
                "description": "Sennin Naruto (S) uses Frog Kata Kick on 1 enemy. That enemy will take 25 damage and have their physical and chakra skills stunned for 1 turn. The following turn this skill becomes 'Rasenshuriken'.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Sage Revitalization",
                "img": "https://i.imgur.com/z4vnCGt.jpeg",
                "description": "Using Sage Revitalization Sennin Naruto (S) replenishes his sage chakra. Sennin Naruto (S) removes all harmful skills from him and heals for 25 health.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Natural Energy Assault",
                "img": "https://i.imgur.com/9PtPAgm.jpeg",
                "description": "Sennin Naruto (S) uses 'Natural Energy Assault' on all enemies. For 1 turn all enemies will be unable to use stun skills or removing/stealing chakra skills. This is a stun effect. This skill becomes 'Rasengan Barrage' for 2 turns.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Kunai Deflection",
                "img": "https://i.imgur.com/wj3Fdw1.jpeg",
                "description": "This skill makes Sennin Naruto (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Rasenshuriken",
                "img": "https://i.imgur.com/gM2lgk5.jpeg",
                "description": "Sennin Naruto (S) uses his final attack on 1 enemy. Sennin Naruto (S) destroys their destructible defense and deals 50 piercing damage to that enemy. This skill ignores invulnerability and cannot be countered or reflected.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Rasengan Barrage",
                "img": "https://i.imgur.com/KJl5Mjy.jpeg",
                "description": "Sennin Naruto (S) uses 'Rasengan Barrage'. The following turn one enemy will be dealt 30 damage. During this time, the first enemy to use a new skill on Sennin Naruto will be countered. This is skill is invisible. Becomes 'Natural Energy Assault' when used.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 112,
        "name": "Orochimaru (S)",
        "img": "https://imgur.com/gokjDPg.jpg",
        "lore": "Orochimaru is in the last year of his current body's useful life, so he rushes to take over Sasuke's body. His combat skills remain incredible. He is able to generate and control immense hordes of snakes and also regenerate easily.",
        "skills": [
            {
                "name": "Extensive Kusanagi",
                "img": "https://imgur.com/b0jRASm.jpg",
                "description": "Orochimaru first stuns one enemy non-mental skills for 1 turn, and then steals 10 health from them each turn for 3 turns. During this time, that enemy will receive 5 additional damage from all other affliction skills. This skill cannot stack.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Control",
                    "Ranged",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Snake Horde",
                "img": "https://imgur.com/I6RvVdD.jpg",
                "description": "Orochimaru deals 20 affliction damage to one enemy, and makes their stunning effects last 1 less turn for 1 turn. During this time, if that enemy uses a new harmful skill, 'Wave of Swords' will be applied on them.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Melee",
                    "Affliction",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Shadow Snake Ultimate",
                "img": "https://imgur.com/PtIp1f0.jpg",
                "description": "Orochimaru targets one enemy, applying both 'Extensive Kusanagi' and 'Snakes Horde' on them. After that, 'Triple Rashoumon' will also be applied on Orochimaru. This skill cannot be countered.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant",
                    "Melee",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Fast Skin Replacement",
                "img": "https://imgur.com/JtGgONH.jpg",
                "description": "This skill makes Orochimaru (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Triple Rashoumon",
                "img": "https://imgur.com/l2tstMX.jpg",
                "description": "When Orochimaru use 'Shadow Snake Ultimate', he gains 20 points of destructible defense that lasts for 3 turns and also ignore stun effects until that defense ends. This skill ignores invulnerability.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Wave of Swords",
                "img": "https://imgur.com/Zvn5wtC.jpg",
                "description": "The enemy affected by this skill will receive 5 affliction damage for 3 turns. During this time, that enemy will be unable to be healed.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged",
                    "Affliction"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 113,
        "name": "Yakushi Kabuto (S)",
        "img": "https://i.imgur.com/lBkxaOw.png",
        "lore": "After two years, Kabuto remains Orochimaru's subordinate and Sasori's spy. His medical skills continue to improve, in addition to being able to use his current chakra to attack, Kabuto can use the chakra to heal himself instantly.",
        "skills": [
            {
                "name": "Charged Mystical Palm",
                "img": "https://i.imgur.com/qGHoQYR.png",
                "description": "If used on an enemy: Kabuto heals 5 health, deals 20 piercing damage to one enemy and stuns their stunning skills for 1 turn.  If used on himself or an ally: They will heal 20 health, remove all affliction skills from themselves, and ignore stun effects for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Dead Soul Jutsu",
                "img": "https://i.imgur.com/3LOLnbG.png",
                "description": "Kabuto deals 25 damage to one enemy. For 2 turns, all other enemies will have their healing skills stunned. Permanently, 'Charged Mystical Palm' will increase its damage and heal by 10. This skill cannot be countered.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Orochimaru Cells Takeover",
                "img": "https://i.imgur.com/OzDQTw0.png",
                "description": "Kabuto target himself for 2 turns. During this time, if his health reaches 0, it will be set to 35 and he will gain 2 random chakras and then this skill will end. This skill is invisible until triggered.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Kabuto Dodge",
                "img": "https://i.imgur.com/SzVzU5l.png",
                "description": "This skill makes Yakushi Kabuto (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 114,
        "name": "Uchiha Sasuke (S)",
        "img": "https://i.imgur.com/bQ57WbY.png",
        "lore": "Uchiha Sasuke (S) has spent the last 2 years training under Orochimaru. He is now an expert swordsman and has immensely developed his lightning element techniques. His demeanor has also grown very cold and he is one of the most dangerous individuals in the ninja world.",
        "skills": [
            {
                "name": "Chidori Nagashi",
                "img": "https://i.imgur.com/xB2eYQs.png",
                "description": "Sasuke activates Chidori Nagashi, starting with 0 Lightning stacks. He will gain 1 Lightning stack each turn on the following turns. Sasuke may use his skills to consume all Lightning stacks, dealing 10 piercing damage per stack. Any enemy that uses a new skill on Sasuke will take 10 piercing damage; Cannot be triggered if Sasuke has no Lightning stack; If triggered, Sasuke will lose 1 Lightning stack once that turn.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Lightning Shockwave",
                "img": "https://i.imgur.com/rhEeID9.png",
                "description": "Sasuke deals 15 piercing damage to one enemy and 5 piercing damage to all others. For 1 turn, Sasuke will ignore affliction damage.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Lightning Blade",
                "img": "https://i.imgur.com/ZmP3GaM.png",
                "description": "Sasuke deals 20 piercing damage to one enemy. For 1 turn, that enemy will deal 10 less non-affliction damage and their active cooldowns will be paralyzed.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Protective Summoning",
                "img": "https://i.imgur.com/BGGf705.png",
                "description": "This skill makes Uchiha Sasuke (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Passive: Cursed Seal Protection",
                "img": "https://i.imgur.com/KnfrzVt.png",
                "description": "When Sasuke reaches 50 health or less, all harmful affliction skills will be removed from him and Sasuke will gain 30 points of destructible defense for 3 turns. The following 3 turns, 'Lightning Shockwave' and 'Lightning Blade' will be replaced by their alternative version.",
                "cooldown": "None",
                "classes": [
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Great Dragon Flame Jutsu",
                "img": "https://i.imgur.com/XPFh76O.png",
                "description": "Sasuke deals 25 affliction damage to one enemy and 15 affliction damage to all others. For 1 turn, Sasuke will ignore affliction damage.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Flying Corrupt Chidori",
                "img": "https://i.imgur.com/E8pioPB.png",
                "description": "Sasuke deals 35 piercing damage to one enemy. For 1 turn, that enemy will deal 20 less non-affliction damage and their active cooldowns will be paralyzed.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 115,
        "name": "Hozuki Suigetsu (S)",
        "img": "https://i.imgur.com/F6oZeRo.png",
        "lore": "Hozuki Suigetsu (S) is a native of Kirigakure who was once a captive of Orochimaru. He is a dangerous individual with unique abilities and now follows Uchiha Sasuke.",
        "skills": [
            {
                "name": "Muscle Expansion",
                "img": "https://i.imgur.com/uptTk0X.jpeg",
                "description": "Suigetsu attacks with his sword, dealing 20 damage to one enemy and gaining 10 permanent destructible defense and 5 points of destructible defense for 1 turn. Afterwards, the next use of 'Hydro Taijutsu' will deal 5 additional damage; This effect stacks.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Hydro Taijutsu",
                "img": "https://i.imgur.com/xbUlXVC.jpeg",
                "description": "Suigetsu launches an extreme taijutsu attack, dealing 40 piercing damage to one enemy. For 1 turn, Suigetsu will ignore physical skills.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Rehydration",
                "img": "https://i.imgur.com/LoaarYd.jpeg",
                "description": "Suigetsu replenishes his body with water. For 2 turns he is invulnerable to physical skills*, and each turn gains 1 random chakra and 10 permanent destructible defense.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Action",
                    "Unique",
                    "Instant*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Zanbato Deflection",
                "img": "https://i.imgur.com/BbXa1kC.jpeg",
                "description": "This skill makes Hozuki Suigetsu (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 116,
        "name": "Karin (S)",
        "img": "https://i.imgur.com/IiLO959.png",
        "lore": "Karin is a former subordinate of Orochimaru who oversaw one of his secret laboratories. She is a skilled sensor and master of chakra control who now follows Uchiha Sasuke.",
        "skills": [
            {
                "name": "Minds Eye of Kagura",
                "img": "https://i.imgur.com/Wii6lUN.jpg",
                "description": "Karin predicts one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered and will have their harmful skills stunned for 1 turn; If that enemy uses a helpful skill, the cost of their skills will increase by 1 random chakra for 2 turns. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Raging Punch",
                "img": "https://i.imgur.com/OlX4UNQ.jpg",
                "description": "Karin deals 30 damage to 1 enemy. For 2 turn, that enemy will be unable to use stun skills (this is a stun effect); Does not stack. This skill ignores invulnerability.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Chakra Transfer",
                "img": "https://i.imgur.com/L836ND0.jpg",
                "description": "Karin allows one ally to bite her, transferring her chakra to them. That ally will be healed for 35 health and Karin will take 5 affliction damage*.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Affliction*",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Precipitous Retreat",
                "img": "https://i.imgur.com/NVluVlD.jpg",
                "description": "This skill makes Karin (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 117,
        "name": "Juugo (S)",
        "img": "https://i.imgur.com/6ZUMNbR.jpg",
        "lore": "Juugo (S) is the origin of the cursed seal and now follows Sasuke. He can either be a calm natured person or a psychotic lunatic.",
        "skills": [
            {
                "name": "Compression Blast",
                "img": "https://i.imgur.com/QefoNP1.jpg",
                "description": "Juugo (S) deals 30 piercing damage to 1 enemy and stuns their physical and chakra skills for 1 turn. During Killer Impulse this skill will be improved and will cost 2 random chakra.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Killer Impulse",
                "img": "https://i.imgur.com/Ys6y9Ie.jpg",
                "description": "Juugo (S) enters a killing rage. He gains 75% damage reduction for 3 turns. Three random enemies will take 25 piercing damage each turn once the following 3 turns and 'Compression Blast' will be improved during this time. The selected enemies are invisible. This skill ignores invulnerability.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Fusion",
                "img": "https://i.imgur.com/Ipa5vkc.jpg",
                "description": "Juugo (S) heals 1 ally for 25 health and that ally gains 20 destructible defense permanently. Each time this skill is used Juugo (S)'s cooldowns will increase by 1 turn for 4 turns.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Isolation",
                "img": "https://i.imgur.com/VGPEiRn.jpg",
                "description": "This skill makes Juugo (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 118,
        "name": "Cursed Seal Juugo (S)",
        "img": "https://i.imgur.com/lUw2QGb.png",
        "lore": "Cursed Seal Juugo (S) is fully transformed and no longer recognizable. Becoming a psychotic lunatic Juugo is able to maintain absurd amounts of chakra making him nearly impossible to defeat.",
        "skills": [
            {
                "name": "Psychotic Break",
                "img": "https://i.imgur.com/Dhbvf2b.png",
                "description": "Juugo loses his mind and assaults one enemy, stealing 10 health from them for 3 turns. During this time, if that enemy uses a new harmful skill, Jugoo's skills will be improved and will cost random chakra for 1 turn.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Chakra Cannons",
                "img": "https://i.imgur.com/CUZX7Z0.png",
                "description": "Juugo uses his jet booster-like appendages to charge chakra and blast a powerful chakra blast, dealing 45 damage to one enemy. While improved, this skill will cost 2 random chakra.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Body Absorption",
                "img": "https://i.imgur.com/SXRkXSo.png",
                "description": "Juugo absorbs one enemy's body, stealing 15 health from them and making that enemy unable to reduce damage or become invulnerable for 2 turns. For 1 turn, Juugo will ignore all harmful effects except damage. While improved, this skill will cost 1 random chakra.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Juugo Block",
                "img": "https://i.imgur.com/lt2qMck.png",
                "description": "This skill makes Cursed Seal Juugo (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 119,
        "name": "Mangekyou Sasuke (S)",
        "img": "https://i.imgur.com/Q3IFFH5.png",
        "lore": "Mangekyou Sasuke (S), Sasuke after defeating his older brother Itachi has gained the mangekyou sharingan. Sasuke is now a member of the Akatsuki, and also the leader of the newly created Team Taka, whose goal is to destroy the Hidden Leaf.",
        "skills": [
            {
                "name": "Amaterasu Wave",
                "img": "https://i.imgur.com/EQO9Xwr.png",
                "description": "Using his Amaterasu in the battlefield, Sasuke deals 12 affliction damage to all enemies for 2 turns. While active, any enemy that does not use a new skill will make 'Amaterasu Wave' last 1 turn longer on them. This skill cannot be used on enemies already affected by it and it cannot be removed.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Action",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Enton Amaterasu",
                "img": "https://i.imgur.com/ZOECvbm.png",
                "description": "Sasuke uses his Amaterasu as a shield on himself for 4 turns, granting him 15 points of destructible defense. During this time, any enemy that uses a new non-mental skill on Sasuke will *receive 5 affliction damage permanently. This skill stacks.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Dark Genjutsu",
                "img": "https://i.imgur.com/WvskJD1.png",
                "description": "Mangekyou Sasuke (S) deals 25 piercing damage to one enemy. That enemy's physical and chakra skills will be stunned for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Hawk Summoning",
                "img": "https://i.imgur.com/TRvpMVO.jpg",
                "description": "This skill makes Mangekyou Sasuke (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 120,
        "name": "Susanoo Sasuke (S)",
        "img": "https://i.imgur.com/8EyNW0H.png",
        "lore": "Sasuke takes control of the powerful Susano'o, achieving a high level of strength with an unimaginable impenetrable defense. He can also still use other techniques of his Mangekyo Sharingan.",
        "skills": [
            {
                "name": "Sasuke Susano'o",
                "img": "https://i.imgur.com/IvPeIEb.png",
                "description": "Using his Susanoo, Sasuke gains 50 points of destructible defense permanent and may use his skills. During this time, this skill is replaced and Sasuke will ignore any effects that destroy destructible defense. When this defense is destroyed, Sasuke will be stunned for 2 turns.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Susano'o Arrow",
                "img": "https://i.imgur.com/ts2DJlr.png",
                "description": "Using his Susano'o bow, Sasuke destroys all destructible defense of one enemy and deals 20 piercing damage and an additional 5 damage for each 10 points of destructible defense that 'Sasuke Susano'o' currently has. This skill requires 'Sasuke Susano'o'.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Spreading Amaterasu",
                "img": "https://i.imgur.com/CrxZrrj.png",
                "description": "Susanoo Sasuke deals 2 affliction damage to one enemy permanently. This skill will double its damage everytime that enemy uses a new skill. This skill cannot be removed and it requires 'Sasuke Susano'o'. This skill will have its cooldown reset if the enemy target is killed.",
                "cooldown": "5",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Mangekyo Insight",
                "img": "https://i.imgur.com/f9ZJ3KY.png",
                "description": "This skill makes Susanoo Sasuke (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sasuke Mangekyo Sharingan",
                "img": "https://i.imgur.com/aoX9e2o.png",
                "description": "Sasuke activates his Mangekyou Sharingan and gains 25% unpierceable damage reduction until 'Sasuke Susano'o' destructible defense is destroyed. When this skill is used, the cooldown of 'Spreading Amaterasu' is reset.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 121,
        "name": "Raikage (S)",
        "img": "https://i.imgur.com/NwtJF5J.png",
        "lore": "Ay is the fourth Raikage of Hidden Cloud Ninja and supreme leader of the Shinobi Alliance. Son of the Third Raikage, he is also Killer Bee's older brother.",
        "skills": [
            {
                "name": "Lightning Release Boost",
                "img": "https://i.imgur.com/2We4Iaj.png",
                "description": "Using Lightning Release to boost his speed and strenght, Ay improves the damage of his attacks by 20 until he uses any of them. During this time Ay gains 10 points of damage reduction. This skill May not be used while in effect, and damage improvement is increased by 5 each time it is used.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Liger Bomb",
                "img": "https://i.imgur.com/jKeuupD.png",
                "description": "Ay lifts one enemy in the air and then brutaly smashes their head fist into ground, dealing 30 damage to them and lowering their damage by 10 for 1 turn. The following turn that enemy's physical or chakra skills will be stunned.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Lightning Oppression Horizontal",
                "img": "https://i.imgur.com/6Tl1X1K.png",
                "description": "Ay performs a backhanded horizontal chop againts one enemy, destroying all destructible defense and dealing 20 piercing damage.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Lightnin Speed",
                "img": "https://i.imgur.com/OcYwaIA.png",
                "description": "This skill makes Raikage (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 122,
        "name": "Mizukage (S)",
        "img": "https://i.imgur.com/1WgnEmN.png",
        "lore": "Terumi Mei is the Fifth Mizukage, after the dreadful reign of Yagura Karatachi ended, she became Mizukage and worked tirelessly to reform internal policies and recreate diplomatic relations with other villages",
        "skills": [
            {
                "name": "Lava Wall",
                "img": "https://i.imgur.com/q55j0xl.png",
                "description": "Terumi Mei Uses lava wall dealing 25 affliction damage to one enemy and stuns their mental and ranged skills for 1 turn. This skill cannot be countered or reflected. During 'Prision Lava Wall' this skill will deal 35 affliction damage and cost one more random chakra.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Unique",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Prision Lava Wall",
                "img": "https://i.imgur.com/yxgf33E.png",
                "description": "Terumi Mei creates a Prision of Lava dealing 5 affliction damage for 3 turns to all enemies. During this time, each turn a random enemy will become invulnerable to friendly skills. 'Lava Wall' and 'Skilled Mist' is improved during this skill*.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Unique",
                    "Action",
                    "Affliction",
                    "Instant*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Skilled Mist",
                "img": "https://i.imgur.com/LJbscdA.png",
                "description": "Terumi Mei uses Skilled Mist to destroy all enemies destructible defense and dealing 15 affliction damage to them for 2 turns. This skill cannot be countered, reflected or removed. During 'Prision Lava Wall' this skill will deals 5 more affliction damage.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Action",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Fast Evade",
                "img": "https://i.imgur.com/UZ6Erok.png",
                "description": "This skill makes Mizukage (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 123,
        "name": "Tsuchikage (S)",
        "img": "https://i.imgur.com/2TGh48c.png",
        "lore": "The Third Tsuchikage of the Hidden Rock Village, Oonoki is an intensely proud and headstrong man, despite his advanced age. An expert in a variety of jutsu, and notably able to fly, Oonoki is renowned for his unique nature transformation, the Dust Release kekkei tota, with which he can outright vaporize his enemies.",
        "skills": [
            {
                "name": "Detachment of Primitive World",
                "img": "https://i.imgur.com/IRQ1VBv.png",
                "description": "Ohnoki isolates an enemy with his dust release, dealing 10 affliction damage to them. For 1 turn, that enemy will be invulnerable to helpful skills and their harmful skills will be stunned. The following turn, this skill will be replaced by 'Dust Implode'.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Super-Weighted Boulder Technique",
                "img": "https://i.imgur.com/sq51r2K.png",
                "description": "Onhoki touches an enemy and makes them much heavier. For 2 turns, the cost of their harmful skills will be increased by 1 random. This skill ends if that enemy uses a new harmful skill.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Rock Fist",
                "img": "https://i.imgur.com/IubtdOZ.png",
                "description": "Increasing his striking power with Rock Fist, Ohnoki deals 30 damage to one enemy. Afterwards, Ohnoki gains 15 permanent destructible defense.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Effortless Flight",
                "img": "https://i.imgur.com/5ctULD8.png",
                "description": "This skill makes Tsuchikage (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Dust Implode",
                "img": "https://i.imgur.com/L9B79qi.png",
                "description": "Ohnoki incinerates an enemey trapped by 'Detachment of Primitive World' into mere particles, removing all helpful skills from that enemy and dealing 40 damage to them. This skill cannot be ignored or countered.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 124,
        "name": "Tsunade (S)",
        "img": "https://i.imgur.com/TgVKWQY.png",
        "lore": "No longer just a Sannin, Tsunade is the new Kage of Konoha, and has taken a large amount of responsibility on her shoulders. Knowing that holding back is no longer an option, Tsunade taps into her seal to gain an impressive power over her foes.",
        "skills": [
            {
                "name": "Heavenly Spear Kick",
                "img": "https://i.imgur.com/FYabOjw.png",
                "description": "Tsunade spears one enemy with her foot, destroying all their destructible defense and dealing 20 piercing damage to them. For 1 turn, that enemy's melee skills will deal 50% less damage. While empowered, this skill will deal 40 piercing damage instead.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Enhanced Healing Wave",
                "img": "https://i.imgur.com/uh03Dqh.png",
                "description": "Tsunade pours chakra into one ally, healing them for 30 health. Additionally, that character will heal an additional 10 health for 2 turns. If empowered, this skill will heal 40 health and the secondary effect will last an additional 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Tsunade: Strength of a Hundred Seal",
                "img": "https://i.imgur.com/MWbYl7o.png",
                "description": "Tsunade taps into her seal. If Tsunade has 75 health or less, she will instantly heal 15 health. The next time Tsunade uses a skill, it will be empowered. If this skill is used while empowered, it will heal Tsunade 50 health and grant her 2 random chakra.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Tsunade Protection",
                "img": "https://i.imgur.com/7SbfiJG.png",
                "description": "This skill makes Tsunade (S) invulnerable for 1 turn. This skill is not affected by 'Tsunade: Strength of a Hundred Seal'.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 125,
        "name": "Mifune (S)",
        "img": "https://i.imgur.com/dU6F330.png",
        "lore": "Mifune is a samurai and leader of the Land of Iron, and now in the war he is the commander of the fourth division. His unmatched swordsmanship makes him capable of attacking and counterattacking any enemy regardless of how fast their movements are.",
        "skills": [
            {
                "name": "Samurai Troops",
                "img": "https://i.imgur.com/BTOiy9P.png",
                "description": "By commanding his samurai troops, Mifune deals 5 piercing damage to all enemies and makes them deal 5 less non-affliction damage for 1 turn. Also for 1 turn, all Mifune team will deal 5 more damage from melee skills. This skill becomes 'Flash' with a bloodline cost.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Iaito",
                "img": "https://i.imgur.com/N9z93nK.png",
                "description": "Reacting one enemy move, Mifune deals them 15 piercing damage and becomes invulnerable from physical skills for 1 turn. This skill becomes 'Flash' with a taijutsu cost.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Raiton Pierce",
                "img": "https://i.imgur.com/0jU2BHv.png",
                "description": "Mifuse uses a fast lightning chakra stab to one enemy, dealing them 15 piercing damage and makes them invulnerable from new helpful skills. This skill becomes 'Flash' with a genjutsu cost.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Samurai Guard",
                "img": "https://i.imgur.com/fXaEM5k.png",
                "description": "This skill makes Mifune (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Flash",
                "img": "https://i.imgur.com/g2hH8Tr.png",
                "description": "With his more powerful cut, Mifune deals 30 piercing damage to one enemy and stuns their physical and chakra skills. This skill costs a specific chakra depending on the skill that is replaced by it.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 126,
        "name": "Senju Hashirama",
        "img": "https://i.imgur.com/bOIy76f.png",
        "lore": "A member of the Senju clan, and one of the greatest warriors during the Warring States Period who went on to create Konoha. Even before becoming the Hokage, Hashirama proved his power and ability with his unmatched Wood Release jutsus.",
        "skills": [
            {
                "name": "Wood Release: Wood Dragon",
                "img": "https://i.imgur.com/2n7tPEC.png",
                "description": "Hashirama creates a wooden dragon that drains chakra. For 2 turns, Hashirama will become invulnerable to all chakra skills* and for 2 turns, Hashirama will steal 1 taijutsu or ninjutsu chakra from one enemy.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Action",
                    "Unique",
                    "Instant*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Wood Release: Wood Human",
                "img": "https://i.imgur.com/888TgIS.png",
                "description": "Creating a giant statue of a human, for 2 turns, Hashirama will become invulnerable to all physical skills* and for 2 turns, Hashirama will deal 20 damage to one enemy.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action",
                    "Unique",
                    "Instant*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Wood Release: True Thousand Hands",
                "img": "https://i.imgur.com/8b5cPgT.png",
                "description": "Hashirama summons a giant buddha that grants 30 destructible defense to Hashirama and his allies and for 3 turns, if used, 'Wood Release: Wood Dragon' and 'Wood Release: Wood Human' will last 1 additional turn and cost 1 less random chakra.",
                "cooldown": "5",
                "classes": [
                    "Physical",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Sage Knowledge",
                "img": "https://i.imgur.com/ab83NlH.png",
                "description": "This skill makes Senju Hashirama invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 127,
        "name": "Uchiha Madara",
        "img": "https://i.imgur.com/uNZqC39.png",
        "lore": "The once leader of the Uchiha clan during the founding of Konoha who unfortunately disagreed with Konoha's kage on how to achieve peace. Madara was one of the few ninjas capable of matching Hashirama's power, with the use of his Mangekyou and Susanoo.",
        "skills": [
            {
                "name": "Eternal Mangekyou",
                "img": "https://i.imgur.com/qEYeI3g.png",
                "description": "Madara uses his Eternal Mangekyou Sharingan. For 4 turns, all non-affliction damage used against him will be reduced to a maximum of 25. During this time, Madara can use this skill again for no cost to ignore all harmful effects except damage for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Great Fire Annihilation",
                "img": "https://i.imgur.com/7EHfwj5.png",
                "description": "Madara immolates the entire battlefield, dealing 10 affliction damage to one enemy and 5 to all others for 3 turns. During this time, if an enemy uses a new helpful skill, they will receive 10 affliction damage. While 'Eternal Mangekyou' is active, this skill is improved and will have no cooldown.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Action",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Madara: Susanoo",
                "img": "https://i.imgur.com/X7bSGDC.png",
                "description": "Madara encases himself in his Susanoo, gaining 70 destructible defense. During this time, this skill will be replaced by 'Armored Susanoo Assault'. Using this skill will reset the stacks of 'Armored Susanoo Assault'.",
                "cooldown": "5",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Emergency Susanoo Defense",
                "img": "https://i.imgur.com/hsPr2mq.png",
                "description": "This skill makes Uchiha Madara invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Armored Susanoo Assault",
                "img": "https://i.imgur.com/hVpzmJO.png",
                "description": "Madara's Susanoo armors up and attacks one enemy with its sword, dealing 30 damage to them and an additional 5 damage for each turn that 'Madara: Susanoo' has been active. This skill cannot be countered.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 128,
        "name": "Uchiha Shisui (S)",
        "img": "https://i.imgur.com/1VX4Blm.png",
        "lore": "A member of the prestigious Uchiha clan, and the best friend of Uchiha Itachi; Shisui is a highly trained ninja that is utterly devoted to Konoha. Shisui is one of the few known ninjas capable of using one the most powerful genjutsu: Koto Amatsukami.",
        "skills": [
            {
                "name": "Shisui: Susanoo",
                "img": "https://i.imgur.com/QxRwz1E.png",
                "description": "Shisui activates his still immature Susanoo, gaining 45 destructible defense. During this time, this skill will be replaced by 'Tsukumo'. Using this skill will reset the stacks of 'Tsukumo'.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Body Flicker",
                "img": "https://i.imgur.com/5gNbKHY.png",
                "description": "For 2 turns, if a new harmful skill is used on Shisui, he will become invulnerable to all other skills for the rest of that turn and will deal 15 damage to the enemy that used the harmful skill. This skill is invisible.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Kotoamatsukami",
                "img": "https://i.imgur.com/9I5NyG6.png",
                "description": "Shisui activates one of the most powerful genjutsu and targets one enemy. For 1 turn, the first harmful skill used by that enemy will also be applied on a random member of that enemy's team. The following turn, the target will be dealt 25 piercing damage. This skill is invisible and ignores invulnerability.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Shisui Intercept",
                "img": "https://i.imgur.com/yRilqsE.png",
                "description": "This skill makes Uchiha Shisui (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Tsukumo",
                "img": "https://i.imgur.com/uDo2Jec.png",
                "description": "Shisui activates his Susanoo's power, sending out a barrage of chakra needles dealing 15 damage to all enemies and reducing their non-affliction damage by 5. For each turn that 'Shisui: Susanoo' is activated, the damage reducing effect will last 1 additional turn.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            }
        ]
    },
    {
        "id": 129,
        "name": "Utakata (S)",
        "img": "https://i.imgur.com/aJd17zi.png",
        "lore": "A missing-nin from the Hidden Mist Village, Utakata is the jinchuuriki host of the Six-Tailed Beast, Saiken, and a kind person, though fairly distant most of the time. In battle, Utakata uses the powers of the Six-Tails to create chakra-based soap bubbles in which he can trap his enemies and slowly asphyxiate them.",
        "skills": [
            {
                "name": "Soap Bubble",
                "img": "https://i.imgur.com/6V5wX9J.png",
                "description": "Utakata deals 10 piercing damage to one enemy and applies 'Bubble Prision' on them. 'Bubble Prision' deals 5 unremovable affliction damage to one enemy, and the first time that enemy uses a new harmful skill, Utaka will gain 1 ninjutsu chakra.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction*",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Drowning Bubble Jutsu",
                "img": "https://i.imgur.com/qOH6hYH.png",
                "description": "Utakata targets all enemies affected by 'Bubble Prision' and stuns their non-mental skills for 1 turn. These enemies will also receive 5 additional damage from 'Bubble Prision' and will lose 1 random chakra for each stack of 'Bubble Prision' on them. Cannot be countered, reflected and ignores invulnerability.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Rokubi Transformation",
                "img": "https://i.imgur.com/cqKvfBc.png",
                "description": "Utakata heals 10 health for each time 'Soap Bubble' was used. Afterwards, he becomes invulnerable to Physical and Chakra skills for 2 turns. This skill removes all stacks from 'Soap Bubble'.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Bubble Dome",
                "img": "https://i.imgur.com/C4cV4rh.png",
                "description": "This skill makes Utakata (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Bubble Prision",
                "img": "https://i.imgur.com/dpO1t3r.png",
                "description": "This skill deals 5 unremovable affliction damage to a target permanently. The first time that enemy uses a new harmful skill, Utakata will gain 1 ninjutsu chakra and that condition will end.",
                "cooldown": "None",
                "classes": [
                    "Affliction",
                    "Instant"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 130,
        "name": "Karatachi Yagura",
        "img": "https://i.imgur.com/uuIzkk0.png",
        "lore": "The Fourth Mizukage of the Hidden Mist Village, Yagura is also the jinchuuriki host of the Three-Tailed Beast, Isobu. A tragic character manipulated by \"Uchiha Madara\" throughout his infamously bloody reign, Yagura uses the Three-Tails' unique mist and coral-based abilities in battle to efficiently hinder his enemies.",
        "skills": [
            {
                "name": "Isobu: Tailed Beast Bomb",
                "img": "https://i.imgur.com/ha118sW.png",
                "description": "Yagura heals 5 health and deals 20 damage to one enemy. This skill  deals 10 additional damage  for every 15 extra health it heals.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Bloodshed",
                "img": "https://i.imgur.com/CqRgmjv.png",
                "description": "Yagura deals 10 piercing damage to all enemies. For 2 turns, if an enemy does not use a new skill, their skills will have 1 additional cooldown for 1 turn, otherwise, 'Isobu: Tailed Beast Bomb' will heal 5 additional health permanently. This skill stacks and cannot be countered.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Isobu Transformation",
                "img": "https://i.imgur.com/6j3AzPS.png",
                "description": "For 1 turn, Yagura will ignore stun effects and 'Bloodshed' will cost 1 random chakra. Permanently, everytime Yagura uses a new skill, he will ignore all stun effects for 1 turn. During this time, this skill can be used to make 'Bloodshed'  cost 1 random chakra for 1 turn. This skill cannot be removed.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Isobu: Chakra Skin",
                "img": "https://i.imgur.com/CQCO65m.png",
                "description": "This skill makes Yagura invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 131,
        "name": "Deidara (S)",
        "img": "https://i.imgur.com/iAgnmxk.png",
        "lore": "An akatsuki former rock ninja partner and apprentice of Sasori. Deidara is quite eccentric when it comes to art. His skill with clay allows him to create explosive sculptures, whether large, medium or small.",
        "skills": [
            {
                "name": "Clay Molds",
                "img": "https://i.imgur.com/16zRKq5.png",
                "description": "For 3 turns, Deidara gains 5 permanent destructible defense and activates \"C2\" first turn. Second turn he activates \"C3\". Third turn he activates \"C4\". Afterwards, this skill is restarted and Deidara gains 1 random chakra.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "C3 - Giant Doll",
                "img": "https://i.imgur.com/3KPFyYt.png",
                "description": "Deidara deals 15 piercing damage to all enemies. During \"C2\", this skill deals 5 additional damage. During \"C3\", this skill deals 10 additional damage and stuns one random enemy's harmful skills for 1 turn. During \"C4\", this skill stuns all enemies' harmful skills for 1 turn. Requires 'Clay Mold'.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "C2 - Clay Centipede",
                "img": "https://i.imgur.com/QSRpbul.png",
                "description": "Deidara deals 10 damage to one enemy for 2 turns. The target's draining chakra effects will not be applied. If used during \"C2\", this skill lasts 3 turns. If used during \"C3\", Deidara becomes invulnerable to non-mental skills for 1 turn. During \"C4\", this skill lasts 1 turn and deals 30 piercing damage. Requires 'Clay Mold'.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Aerial Retreat",
                "img": "https://imgur.com/Hno70ML.jpg",
                "description": "This skill makes Deidara (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 132,
        "name": "Hiruko Sasori (S)",
        "img": "https://i.imgur.com/T1Da57N.png",
        "lore": "Hiruko is a puppet used by the Akatsuki shinobi, Sasori. Serving as a 'puppet armor', it allowed Sasori to hide inside of it. Hiruko is a human puppet made from the corpse of a renowned shinobi - this puppet is also Sasori's favorite.",
        "skills": [
            {
                "name": "Poisonous Tail Stab",
                "img": "https://i.imgur.com/vgia8DM.png",
                "description": "Deal 15 Affliction damage to one enemy and apply 'Venom Stack'. This skill will cost 1 random chakra for 1 turn after being used. If the target already has a 'Venom Stack', deal an additional 5 damage per stack and place a 'Venom Stack' on all other enemies.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Affliction",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Sand Clone Trap",
                "img": "https://i.imgur.com/yPSTj0V.png",
                "description": "For 1 turn, Hiruko or an ally ignores all damage dealt. During this turn, each enemy that uses a new skill on them takes 10 affliction damage* and gains 1 'Venom Stack'. This skill is Invisible. This skill ends if Hiruko Dies.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Affliction*",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Puppet Reveal",
                "img": "https://i.imgur.com/KbDm1wc.png",
                "description": "Sasori activates 'Puppet Reveal'. The next time his health reaches 50 or less, he will gain 20 points of destructible defense for 3 turns. During this time, 'Sand Close Trap' and 'Puppet Reveal' will be replaced. This skill is invisible and can only be used once.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Tail Deflection",
                "img": "https://i.imgur.com/RJ3tOJE.png",
                "description": "This skill makes Hiruko Sasori (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Eight Waves of Needles",
                "img": "https://i.imgur.com/8XJIxiX.png",
                "description": "Apply 2 'Needle Marks' to all enemies for 2 turns. When an enemy with 'Needle Marks' receive damage from Hiruko or his allies, remove 1 Mark to deal 10 Affliction damage.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Affliction",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Prosthetic Arm Senbon",
                "img": "https://i.imgur.com/6OODdlz.png",
                "description": "Consume all Needle Marks on all enemies: for each Mark removed, that enemy takes 15 Affliction damage and If at-least 5 Marks are consumed in total, Sasori becomes Invulnerable for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Affliction",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Poison Stack",
                "img": "https://i.imgur.com/tYO3SDh.png",
                "description": "Venom Stack: The following turn, this enemy receives 5 Affliction damage for 2 turns.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Instant"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 133,
        "name": "Kisame Body Double (S)",
        "img": "https://i.imgur.com/bqqAtVc.jpeg",
        "lore": "By using one of Pein's techniques a Sand Nin spy for Akatsuki is changed to look like Kisame. The body double is controlled by Kisame but only has a third of his chakra.",
        "skills": [
            {
                "name": "Explosive Water Shock Wave",
                "img": "https://i.imgur.com/zVJTGma.jpeg",
                "description": "Kisame Body Double (S) fills the battlefield with water. For 3 turns, all allies including Kisame will lose one less chakra if a chakra removal or stealing skill is used on them. For 3 turns, all enemies who use a skill will have the cooldown of that skill increased by 1 turn.*",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Water Prison Technique",
                "img": "https://i.imgur.com/gmuc252.jpeg",
                "description": "Using a bubble of water, Kisame stuns the physical or ranged skills of one enemy for 1 turn. During this time the enemy takes 15 affliction damage* and becomes invulnerable to friendly skills, and Kisame gains 15 points of damage reduction. During Explosive Water Shock Wave this skill costs 1 random chakra.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Instant",
                    "Melee"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Five Man-Eating Sharks",
                "img": "https://i.imgur.com/csZyWj6.jpeg",
                "description": "Kisame Body Double summons five sharks of water who attack one enemy dealing 25 damage for 2 turns. During Explosive Water Shock Wave this skill costs 1 ninjutsu chakra.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Action",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Kisame Body Double (S) Water Clone",
                "img": "https://i.imgur.com/lRyljhc.jpeg",
                "description": "This skill makes Kisame Body Double (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 134,
        "name": "Itachi Body Double (S)",
        "img": "https://i.imgur.com/U1zO7L5.jpg",
        "lore": "By using one of Pein's techniques a Sand Nin spy for Akatsuki is changed to look like Itachi. The body double is controlled by Itachi but only has a third of his chakra.",
        "skills": [
            {
                "name": "Finger Genjutsu",
                "img": "https://i.imgur.com/9kA7uYQ.jpg",
                "description": "Itachi affects one enemy with Finger Genjutsu for 1 turn. If the affected enemy uses any skill on Itachi Body Double (S) or his allies that skill will be countered and that enemy will take 10 damage and Itachi Body Double (S) will gain 1 genjutsu chakra. The target of this skill is invisible.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Genjutsu Reversal",
                "img": "https://i.imgur.com/oif8mlK.jpg",
                "description": "For 2 turns if any enemy uses a skill which is non-unique on Itachi Body Double (S), he will reflect that skill onto the enemy who used it. This skill is invisible.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Goukakyuu no Jutsu",
                "img": "https://i.imgur.com/HUCVDhp.jpg",
                "description": "Itachi Body Double (S) creates a large fireball that scorches the battlefield. One enemy takes 20 damage. The following turn all enemies take an additional 10 affliction damage.*",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Ranged",
                    "Affliction*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Illusionary Raven Bunshin",
                "img": "https://i.imgur.com/oyzXfwY.jpg",
                "description": "This skill makes Itachi Body Double (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 135,
        "name": "Sasori of the Red Sand (S)",
        "img": "https://i.imgur.com/zosLJnp.png",
        "lore": "Sasori is a senior Akatsuki member and a legendary puppet master. He is even rumored to have defeated an entire nation with puppets alone. ORIGINAL DESIGN: Pavera",
        "skills": [
            {
                "name": "Thousand Hands",
                "img": "https://i.imgur.com/uH3QQ4A.png",
                "description": "Using this skill, Sasori deals 10 damage to an enemy for 2 turns and gains 5 points of destructible defense each turn. If 'Poison Gas' is used on the target in the following turn, it will last 1 additional turn on them.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Poison Gas",
                "img": "https://i.imgur.com/rO92pL5.png",
                "description": "Sasori deals 5 affliction damage to all enemies for 5 turns. During this time, Sasori gains 5 points of destructible defense and any enemy that uses a new harmful skill will be dealt 5 affliction damage. This skill lasts one additional turn on an enemy affected by 'Thousand Hands'. This skill cannot be countered and ends when Sasori is killed.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Iron Sand",
                "img": "https://i.imgur.com/S86HOEG.png",
                "description": "Sasori summons the third kazekage's puppet for 3 turns. Each turn, Sasori gains 10 permanent destructible defense and any enemy that uses a new harmful skill on Sasori will take 5 piercing damage. During this time, this skill becomes 'Satetsu Kaiho' and 'Thousand Hands' becomes 'Satetsu Kesshu'.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Puppet Protection",
                "img": "https://i.imgur.com/DOMTlX3.png",
                "description": "This skill makes Sasori invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Satetsu Kaiho",
                "img": "https://i.imgur.com/pjprSct.png",
                "description": "Sasori gathers a great volume of iron san. This skill deals 30 piercing damage to one enemy. For 2 turns, that enemy will be unable to reduce damage or become invulnerable. Afterwards, Sasori gains 15 points of destructible defense for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Satetsu Kesshu",
                "img": "https://i.imgur.com/XM4Cwb1.png",
                "description": "Sasori creates a giant sphere of branching spikes. This skill deals 25 piercing damage to all enemies. If an enemy's health drops to 10 or lower, they will be killed. This skill cannot be countered or reflected.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 136,
        "name": "True Form Sasori",
        "img": "https://i.imgur.com/MohdeE7.png",
        "lore": "Pushed to his limit, Sasori reveals the secret of his eternally young body: he has turned himself into a puppet with a living \"core\" that now makes up the entirety of his being. Using his own body as a weapon, Sasori also pulls out Chikamatsu's legendary Hundred Puppets, rumored to be able to bring down an entire nation.",
        "skills": [
            {
                "name": "Puppet Flamethrower",
                "img": "https://i.imgur.com/CH3tTNq.png",
                "description": "Sasori deals 10 affliction damage to one enemy. The following turn, that enemy will be dealt 5 affliction damage permanently. If used on an enemy affected by 'Water Stream Shooters', this skill will have a different effect, dealing 20 affliction damage and stunning harmful skills for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Water Stream Shooters",
                "img": "https://i.ibb.co/t8VQn6p/cmCK08m.png",
                "description": "Sasori deals 10 affliction damage to one enemy. The following turn, that enemy will be dealt 5 affliction damage permanently. If used on an enemy affected by 'Puppet Flamethrower', this skill will have a different effect, dealing 30 affliction damage and stunning helpful skills for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Red Secret Technique: 100 Puppets",
                "img": "https://i.imgur.com/7xw6S3R.png",
                "description": "Sasori uses the Red Secret Technique, summoning hundred puppets and gaining 50 points of destructible defense. Permanently, all enemies will be dealt 15 piercing damage each turn. This skill will end if Sasori successfully receives damage.",
                "cooldown": "5",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Magnificent Pose",
                "img": "https://i.imgur.com/WXfmN2D.png",
                "description": "This skill makes True Form Sasori invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 137,
        "name": "Hidan (S)",
        "img": "https://i.imgur.com/BsRLXW8.jpg",
        "lore": "Hidan(s) is a member of Akatsuki and a worshiper of the obscure god Jashin. He is apparently immortal and has perhaps the foulest mouth of the entire criminal organization.",
        "skills": [
            {
                "name": "Reaping Scythe",
                "img": "https://i.imgur.com/MjUnVzm.jpg",
                "description": "Hidan (S) attacks one enemy with his scythe dealing 15 damage to them and he gains 10 permanent destructible defense. 'Curse of Jashin' may be used on the targeted enemy the following turn. This skill cannot be used on an enemy affected by 'Curse of Jashin'.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Curse of Jashin",
                "img": "https://i.imgur.com/xXLYmTW.jpg",
                "description": "Hidan curses an enemy. For 2 turns, all harmful skills used on Hidan will be reflected upon the cursed enemy. During this time, 'Impale' may be used. This skill ignores invulnerability and cannot be countered or reflected.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Impale",
                "img": "https://i.imgur.com/k9okawc.jpg",
                "description": "Hidan (S) impales himself with a large metal spike dealing 40 piercing damage to one enemy currently the target of 'Curse of Jashin' and removes 1 bloodline or ninjutsu chakra from them. This skill ignores invulnerability.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Immortality",
                "img": "https://i.imgur.com/t2PRUAx.jpg",
                "description": "This skill makes Hidan (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 138,
        "name": "Kakuzu (S)",
        "img": "https://i.imgur.com/d6ivMCI.png",
        "lore": "A missing-nin of mysterious talents and a member of Akatsuki, Kakuzu(s) is certainly older than he appears. He seems to only be concerned with money and the bounties which provide him with it.",
        "skills": [
            {
                "name": "Fuuton Atsugai",
                "img": "https://i.imgur.com/i3xXppy.png",
                "description": "Fuuton Atsugai deals 30 damage to one enemy and stuns their non-affliction skills for 1 turn. The following turn, this skill will be replaced by 'Katon Zukokku'.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Raiton Gian",
                "img": "https://i.imgur.com/OivT97g.png",
                "description": "Raiton Gian deals 30 piercing damage to one enemy. The following turn, this skill will be replaced by 'Inferno Gust'.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Heart Steal",
                "img": "https://i.imgur.com/JpEWApN.png",
                "description": "Using his tendrils, Kakuzu rips the heart out of one enemy and makes it his own. Kakuzu instantly kills that enemy and heals 35 health. This skill can only be used on an enemy at or below 35 health. This skill ignores invulnerability.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Iron Skin Technique",
                "img": "https://i.imgur.com/eIVn7u8.png",
                "description": "This skill makes Kakuzu (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Katon Zukokku",
                "img": "https://i.imgur.com/V13PHjh.png",
                "description": "Katon Zukokku deals 15 affliction damage to all enemies.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Inferno Gust",
                "img": "https://i.imgur.com/6EuPRrK.png",
                "description": "Inferno gust deal 40 damage to one enemy and 15 to all other enemies.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 139,
        "name": "Hoshigaki Kisame (S)",
        "img": "https://i.imgur.com/bjUbTdZ.png",
        "lore": "Hoshigake Kisame (S) is the partner of Uchiha Itachi in Akatsuki. He is an expert swordsman and missing nin from the Hidden Mist Village.",
        "skills": [
            {
                "name": "Hungry Sharks",
                "img": "https://i.imgur.com/HpnDSZs.png",
                "description": "Kisame summons one hungry shark for each enemy alive, dealing 5 piercing damage to all of them permanently. Each turn, the first enemy to use a new harmful skill will be marked, causing all other hungry sharks to attack only the marked enemy next turn. This skill cannot be removed; Ends if Kisame dies.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Shark Bomb",
                "img": "https://i.imgur.com/SekpWvV.png",
                "description": "Kisame blasts an enemy with his shark bomb, dealing 25 piercing damage and removing 1 bloodline or ninjutsu from them. For this turn, that enemy will receive 5 additional damage from 'Hungry Sharks'.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Samehada Guard",
                "img": "https://i.imgur.com/qgg1luS.png",
                "description": "Samehada protects Kisame with his spikes. For 1 turn, the first enemy to use a new skill on Kisame will be countered. If sucessfully, Kisame will steal 20 health and 1 bloodline or ninjutsu chakra from that enemy. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Water Isolation",
                "img": "https://i.imgur.com/yXzkEad.png",
                "description": "This skill makes Hoshigaki Kisame (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 140,
        "name": "Samehada Fusion Kisame (S)",
        "img": "https://i.imgur.com/HP3pmdA.png",
        "lore": "After merging with the sentient blade Samehada, Kisame transforms into a monstrous shark-like being. In this form, he reigns supreme underwater, draining chakra upon contact and relentlessly hunting his prey within a vast, moving prison of water.",
        "skills": [
            {
                "name": "Water Prison Shark Dance",
                "img": "https://i.imgur.com/TWeVlfV.png",
                "description": "Kisame creates a battlefield completely submerged in water, targeting all enemies and his allies. All targets will have the cost of their harmful skills increased by 1 random chakra for 2 turnos. During this time, any target that uses a new harmful skill will ignore 'Water Prison Shark Dance' for 1 turn. This skill ends when Kisame dies.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Non-Stop Hunting",
                "img": "https://i.imgur.com/edOwJ9I.png",
                "description": "Kisame relentlessly hunts an enemy from underwater. For 2 turns, Kisame will deal 20 piercing damage to that enemy and remove 1 bloodline or ninjutsu chakra from them. During this time, Kisame will gain 5 points of destructible defense each turn.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Great Water Shark Missile",
                "img": "https://i.imgur.com/WLcRFZx.png",
                "description": "This skill deals 20 piercing damage to all enemies and removes 1 taijutsu or genjutsu chakra from a random enemy. Afterwards, Kisame gains 15 points of destructible defense. This skill cannot be countered.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Shark Skin",
                "img": "https://i.imgur.com/1Qa5p92.png",
                "description": "This skill makes Samehada Fusion Kisame (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 141,
        "name": "Uchiha Itachi (S)",
        "img": "https://i.imgur.com/YKP5Zef.jpg",
        "lore": "Uchiha Itachi (S) is a member of Akatsuki, and the brother of Uchiha Sasuke. He has mastered the sharingan completely.",
        "skills": [
            {
                "name": "Amaterasu Field",
                "img": "https://i.imgur.com/2AS9EMK.png",
                "description": "Itachi creates a field around his team using Amaterasu. For 1 turn, any enemy that uses a new skill on Itachi (S) or his allies will be dealt 5 affliction damage permanently*. This skill is invisible.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Affliction",
                    "Ranged*",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Crow Genjutsu",
                "img": "https://i.imgur.com/elSVDBR.png",
                "description": "Itachi places a genjutsu on one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered. If successfully, the countered enemy's skills will cost 1 additional random chakra until they use a new skill. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Mastered Mangekyou Sharingan",
                "img": "https://i.imgur.com/0Pgy8yM.png",
                "description": "Itachi uses his mastered mangekyou sharingan to deceive an enemy. For 1 turn, the first new skill used by that enemy will be reflected to a random different enemy. This skill is invisible and ignores invulnerability.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Instant",
                    "Ranged",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Clone Genjutsu",
                "img": "https://i.imgur.com/hQfYhTZ.png",
                "description": "This skill makes Uchiha Itachi (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 142,
        "name": "Susanoo Itachi (S)",
        "img": "https://i.imgur.com/aAWBnUX.png",
        "lore": "After using Amaterasu and Tsukuyomi, Itachi awakened his triumph, Susanoo, and became even stronger, both defensively with his Yata Mirror and offensively with his Totsuka Sword capable of sealing an opponent.",
        "skills": [
            {
                "name": "Susanoo Activation",
                "img": "https://i.imgur.com/CCYvnwu.png",
                "description": "Uchiha Itachi activates Susanoo, and he takes 20 affliction damage*. Each turn he gains 5 permanent stacking destructible defense and his skills become usable for the rest of the game. This skill cannot be used while it's active.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Affliction*",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Totsuka Sword",
                "img": "https://i.imgur.com/Fsm5S2F.png",
                "description": "Itachi uses the legendary blade of Susanoo, dealing 25 piercing damage to one enemy and removing 1 genjutsu or bloodline chakra from them. This skill requires 'Susanoo Activation'.'",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Yata Mirror",
                "img": "https://i.imgur.com/4BpmN0l.png",
                "description": "Using the legendary shield of Susanoo, Itachi (S) ignores all harmful effects used on him for 1 turn. Any enemy that uses a new skill on him will have the cost of their skills increased by 1 random chakra for 1 turn. This skill is invisible and requires 'Susanoo Activation'.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Susanoo Defense",
                "img": "https://i.imgur.com/KZFSkLv.png",
                "description": "This skill makes Susanoo Itachi (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 143,
        "name": "Konan (S)",
        "img": "https://i.imgur.com/V7BSQFp.jpg",
        "lore": "Konan (S) is a member of Akatsuki and a master of origami ninjutsu, earning her the title God's Angel in Amegakure. Able to turn her body into thick sheets of paper, she is capable of multiple forms of attack.",
        "skills": [
            {
                "name": "Sword of Paper",
                "img": "https://i.imgur.com/VdkYoFg.jpg",
                "description": "Using a sword made of paper, Konan (S) deals 25 piercing damage to 1 enemy.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Origami Blanket",
                "img": "https://i.imgur.com/MIliKrv.jpg",
                "description": "Konan (S) covers one enemy in paper. For 2 turns that enemy has their harmful skills stunned, will be invulnerable to all new helpful skills, and takes 15 damage each turn. During this time, 'Sword of Paper' will deal an additional 10 damage to that enemy.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Dance Of The Shikigami",
                "img": "https://i.imgur.com/mBWvj54.jpg",
                "description": "Konan (S) uses Dance Of The Shikigami dealing 25 damage to one enemy and 25 damage to a random different enemy.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Onmyoji Dodge",
                "img": "https://i.imgur.com/grDDbcd.jpg",
                "description": "This skill makes Konan (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 144,
        "name": "Nagato (S)",
        "img": "https://i.imgur.com/PEZ7ucJ.jpg",
        "lore": "Nagato is the leader of Akatsuki and is also known as Pein. He is in control of the six paths of Pein and was a former student of Jiraiya. Nagato possess the rinnegan and may be the strongest ninja in the shinobi world.",
        "skills": [
            {
                "name": "Demonic Statue Summoning",
                "img": "https://i.imgur.com/x9FTMms.jpg",
                "description": "Nagato (S) targets all enemies and deals 20 damage to them. Nagato will gain 10 permanent destructible defense. The following turn, 'Etheral Dragon' will deal an additional 10 damage to enemies affected by this skill.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Etheral Dragon",
                "img": "https://i.imgur.com/frO4zbf.jpg",
                "description": "Using Etheral Dragon, Nagato deals 25 damage to one enemy. The following turn, 'Demonic Statue Summoning' will be improved and will cost 2 random chakra instead.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Samsara of Heavenly Life",
                "img": "https://i.imgur.com/WRssnUP.jpg",
                "description": "Nagato (S) uses Samsara of Heavenly Life to heal all allies for 30 health. Any dead ally on Nagato's team will be revived back to 30 health and will become invulnerable for 1 turn. Nagato will lose 50 health* for each ally revived by this skill.",
                "cooldown": "9",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique",
                    "Affliction*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Bansho Block",
                "img": "https://i.imgur.com/ZvysjIj.jpg",
                "description": "This skill makes Nagato (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 145,
        "name": "Animal Path Pein (S)",
        "img": "https://i.imgur.com/1RJgcYj.png",
        "lore": "Animal Path Pein (S) is one of the six paths of Pein. This Path is able to summon a variety of different beasts for different purposes.",
        "skills": [
            {
                "name": "Cerberus Hydra",
                "img": "https://i.imgur.com/Wo05Giy.jpg",
                "description": "Animal Path Pein summons a giant multiple headed dog, dealing 20 damage to all enemies. For 2 turns, any enemy that uses a skill will be dealt 15 piercing damage.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Drill Bird",
                "img": "https://i.imgur.com/0utvW5A.jpg",
                "description": "Animal Path Pein summons a giant drill-beaked bird, dealing 20 damage to one enemy and 20 damage to another random enemy for 2 turns. The following turn, 'Cerberus Hydra' will cost 1 ninjutsu and 1 random chakra instead.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Invisible Chameleon",
                "img": "https://i.imgur.com/1JrdMnL.jpg",
                "description": "Animal Path Pein summons his chameleon, protecting himself or an ally. For 4 turns, that ally will ignore stun effects and gains 50% damage reduction. This skill is invisible.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Panda Defense",
                "img": "https://i.imgur.com/FR1oFXS.jpg",
                "description": "This skill can be used on himself or an ally, making himself or that ally invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 146,
        "name": "Female Animal Path Pein (S)",
        "img": "https://i.imgur.com/KctmoJL.png",
        "lore": "One of Nagato's Six Paths of Pain, the Female Animal Path is a relentless and tactical combatant who overwhelms her enemies through the summoning of massive, destructive creatures. Calm and emotionless, she specializes in battlefield control, using her summons to pressure multiple opponents at once while remaining difficult to pin down.",
        "skills": [
            {
                "name": "Animal Path Summoning",
                "img": "https://i.imgur.com/CL8frm9.png",
                "description": "Female Animal Path summons all pre-selected animals to the battlefield. For each animal summoned, Female Animal Path gains 10 destructible defense. Animals, when summoned, may not be pre-selected for the following 2 turn.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Rampaging Buffalo",
                "img": "https://i.imgur.com/CWeyhMz.png",
                "description": "Pre-selects this animal for the next use of 'Animal Path Summoning'. When active, deals 10 damage to all enemies for 3 turns. During this time, any enemy that does not use a new skill will take another 10 damage. This skill will be replaced by 'Stampeding Rhino'.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Venomous Centipede",
                "img": "https://i.imgur.com/oWVPAx6.png",
                "description": "Pre-selects this animal for the next use of 'Animal Path Summoning'. When active, grants Female Animal Path's team 20 points of destructible defense and 5% damage reduction.",
                "cooldown": "5",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Affliction",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Giant Crab",
                "img": "https://i.imgur.com/8H6I6Cq.png",
                "description": "Pre-selects this animal for the next use of 'Animal Path Summoning'. When actived, Female Animal Path and her allies become invulnerable for 1 turn.",
                "cooldown": "5",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Stampeding Rhino",
                "img": "https://i.imgur.com/FnrAebv.png",
                "description": "Pre-selects this animal for the next use of 'Animal Path Summoning'. For 3 turns, each turn a random enemy will take 20 damage and will have their non-affliction damage reduced by 10 for 1 turn. This skill will be relaced to 'Rampaging Buffalo' after use.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 147,
        "name": "Asura Path Pein (S)",
        "img": "https://i.imgur.com/aVbEBLw.png",
        "lore": "Asura Path Pein (S) is one of the six paths of Pein. His body style is similar to a puppet filled with hidden weapons.",
        "skills": [
            {
                "name": "Chakra Burst",
                "img": "https://i.imgur.com/zEudeFK.png",
                "description": "Asura prevents one enemy from becoming invulnerable or reducing damage, then deals 20 damage for 1 turn. During this time, any enemy that uses a new skill on him will take 10 damage. This skill will be replaced permanently.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Cluster Bombs",
                "img": "https://i.imgur.com/6OwwejZ.png",
                "description": "Asura Path bombs all enemies, dealing 20 piercing damage to them. For 1 turn, any enemy that uses a new harmful physical or chakra skill will be dealt 10 piercing damage.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Heat Seeker",
                "img": "https://i.imgur.com/n61eNZT.png",
                "description": "Asura Path uses Heat Seeker on one enemy. After 3 turns, that enemy will take 25 piercing damage. This skill is invisible until triggered. This skill stacks.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Rinnegan Evasion",
                "img": "https://i.imgur.com/pS3OQal.png",
                "description": "This skill makes Asura Path Pein (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Crown Shockwave",
                "img": "https://i.imgur.com/cclxprX.png",
                "description": "Asura Path deals 20 damage to all enemies. The following turn, they will be dealt 5 affliction damage. This skill becomes 'Chakra Burst' after being used.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 148,
        "name": "Human Path Pein (S)",
        "img": "https://i.imgur.com/xTKMxAC.png",
        "lore": "Human Path Pein (S) is one of the six paths of Pein. This path is a mind reader and gathers intel for the other paths.",
        "skills": [
            {
                "name": "Mind Invasion",
                "img": "https://i.imgur.com/6xhap33.png",
                "description": "Human Path deals 20 piercing damage to one enemy and stuns their harmful skills for 1 turn. The following turn, this skill becomes 'Soul Steal'.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Instant",
                    "Melee",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Brain Plunder",
                "img": "https://i.imgur.com/mrdaBde.png",
                "description": "Human Path steals 10 HP from one enemy, makes them unable to reduce damage or become invulnerable for 1 turn, and reveals their invisible skills for 3 turns. Next turn, if Human uses a new harmful skill, that enemy will have their helpful skills stunned for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Melee",
                    "Instant",
                    "Affliction",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sneak Attack",
                "img": "https://i.imgur.com/Dj31tST.png",
                "description": "Human Path Pein (S) launches a sneak attack dealing 25 piercing damage to one enemy. This skill ignores invulnerability.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Rinnegan Awareness",
                "img": "https://i.imgur.com/yaN7Bbk.png",
                "description": "This skill makes Human Path Pein (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Soul Steal",
                "img": "https://i.imgur.com/Vutl4fY.png",
                "description": "Human Path rips the soul of an enemy affected by 'Mind Invasion', stealing 20 HP from them and dealing 15 affliction damage. If that enemy's health drops to 5 or less health, they will be instantly killed. This skill ignores invulnerability.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant",
                    "Melee",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            }
        ]
    },
    {
        "id": 149,
        "name": "Preta Path Pein (S)",
        "img": "https://i.imgur.com/kvUIdzR.jpg",
        "lore": "Preta Path Pein (S) is one of the six paths of Pein. This path is able to nulify jutsus and is used mostly for defensive tactics.",
        "skills": [
            {
                "name": "Energy Shield",
                "img": "https://i.imgur.com/aSF7Q2O.jpg",
                "description": "Preta Path (S) uses Energy Shield on one enemy removing 1 bloodline or Genjutsu chakra. That enemy will be dealt 25 piercing damage.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Ranged",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Rinnegan Absorption",
                "img": "https://i.imgur.com/n1Rd3Tt.jpg",
                "description": "Preta Path Pein (S) uses Rinnegan Absorption to protect himself. All damage dealt on Preta Path Pein (S) will be ignored and any enemy that uses a new damaging harmful skill on him will lose chakra equal the chakra cost of the skill used (except Random Chakra). This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Chakra Pin",
                "img": "https://i.imgur.com/RyzGOhN.jpg",
                "description": "Using Chakra Pin Preta Path Pein (S) stuns one enemy's harmful skills. Preta Path Pein (S) will steal 1 bloodline or genjutsu chakra.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Agile Dodge",
                "img": "https://i.imgur.com/9RZKQtI.jpg",
                "description": "This skill makes Preta Path Pein (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 150,
        "name": "Naraka Path Pein (S)",
        "img": "https://i.imgur.com/mkVVxYO.png",
        "lore": "Naraka Path Pein (S) is one of the six paths of Pein. This path is able to interrogate it's enemies at will. Naraka Path Pein (S) can also give life as well as take it.",
        "skills": [
            {
                "name": "Outer Path",
                "img": "https://i.imgur.com/4aboIoQ.png",
                "description": "Naraka Path summons the Outer Path, dealing 10 affliction damage to all enemies for 3 turns. During this time, 'Judgement' can be used.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Action",
                    "Ranged",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Judgement",
                "img": "https://i.imgur.com/xf6e75f.png",
                "description": "Naraka executes an enemy affected by 'Outer Path', stealing 35 health from them. For 1 turn, that enemy will ignore healing effects.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant",
                    "Melee",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Rejuvenation",
                "img": "https://i.imgur.com/zaX6YtB.png",
                "description": "Naraka Path uses Rejuvination on himself or an ally, healing them for 25 health and removing all affliction skills from them. This skill can be used on dead allies. If used on a dead ally, 'Rejuvination' will have its cost increased by 1 genjutsu chakra and heal increased by 15 permanently.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Chakra Rod Deflection",
                "img": "https://i.imgur.com/Ry4Xmau.png",
                "description": "This skill makes Naraka Path Pein (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 151,
        "name": "Deva Path Pein (S)",
        "img": "https://i.imgur.com/FwxsVNS.jpg",
        "lore": "Deva Path Pein (S) is one of the six paths of Pein. This path is able to use itself as the epicenter of magnetism to attract or repel all objects. This path holds the most power and is the main force in battle for Pein.",
        "skills": [
            {
                "name": "Chakra Rod",
                "img": "https://i.imgur.com/1GjmoKo.jpg",
                "description": "Deva Path Pein (S) targets one enemy and uses Chakra Rod. When that enemy uses a new skill they will be dealt 15 piercing damage and Deva will steal 1 bloodline or ninjutsu chakra from them. This skill is invisible until triggered. This skill stacks.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Violent Water Wave",
                "img": "https://i.imgur.com/s02MnAZ.jpg",
                "description": "Deva Path Pein (S) uses Violent Water Wave on all enemies. For 1 turn all enemies chakra or ranged skills will cost 1 additional random chakra. Deva Path Pein (S) gains 50% damage reduction during this skill. This skill becomes 'Chibaku Tensei' for 2 turns.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Ranged"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Universal Pull",
                "img": "https://i.imgur.com/9wvswDP.jpg",
                "description": "Deva Path Pein (S) uses Universal Pull on one enemy for 1 turn. If that enemy uses a new harmful phsyical or chakra skill they will be countered, will take 20 damage and will deal 10 less non-affliction damage for 1 turn. This skill is invisible and becomes 'Shinra Tensei' for 2 turns.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Rinnegan Pressure",
                "img": "https://i.imgur.com/WrmDvAJ.png",
                "description": "This skill makes Deva Path Pein (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Shinra Tensei",
                "img": "https://i.imgur.com/kUlhI9a.jpg",
                "description": "Deva Path Pein (S) uses 'Shinra Tensei' to deal 30 damage to all enemies. For 1 turn Deva Path Pein (S) will become invulnerable. This skill becomes 'Universal Pull' when used.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Chibaku Tensei",
                "img": "https://i.imgur.com/DlrmdJ2.jpg",
                "description": "Using his ultimate jutsu Deva Path Pein (S) deals 30 damage to all enemies. For 1 turn damage dealt by the enemy team will be reduced by 5. This skill cannot be countered and becomes 'Violent Water Wave' when used.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            }
        ]
    },
    {
        "id": 152,
        "name": "Zetsu (S)",
        "img": "https://i.imgur.com/daklazj.png",
        "lore": "Zetsu (S) is intent to follow Tobi's orders. With his abilities he will be trouble for anyone that comes across him.",
        "skills": [
            {
                "name": "Spore Technique",
                "img": "https://i.imgur.com/NvIcUVB.png",
                "description": "Zetsu plants spore clones into an ally, granting them 10 permanent destructible defense and making them ignore all harmful non-damage effects until this destructible defense is destroyed. When it's destroyed, that ally will gain 1 random chakra. This skill is invisible.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Wood Release Roots",
                "img": "https://i.imgur.com/aErdKWP.png",
                "description": "Zetsu manipulates wood roots and attacks an enemy from below, dealing 30 piercing damage and stunning that enemy's physical and chakra skills for 1 turn. This skill ignores invulnerability.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Parasite Clone Trap",
                "img": "https://i.imgur.com/NmLDNO3.png",
                "description": "Zetsu targets one enemy, reducing their non-affliction damage by 10 permanently. If that enemy uses a new skill, that skill will be copied and 'Parasite Clone Trap' will end. This skill will be replaced by the copied skill for 1 turn. This skill is invisible.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Zetsu Split",
                "img": "https://i.imgur.com/5G2uYVn.png",
                "description": "This skill makes Zetsu (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 153,
        "name": "White Zetsu (S)",
        "img": "https://i.imgur.com/p9n6C0W.png",
        "lore": "A countless army born from Hashirama's cells—harmless in appearance, deadly in numbers. Character submited by: Akats.",
        "skills": [
            {
                "name": "White Zetsu Host",
                "img": "https://imgur.com/Eq2B2IB.jpg",
                "description": "White Zetsu cannot go invulnerable permanently. Each turn he stacks 3 clones, and if stunned will gain 15 unpiearceable damage the following turn. At 3 Clones stacks he gains 15 damage reduction. At 6, he gains 15 destructible defens. At 9, he ignores affliction damage. Each skill he use consumes 3 clones.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Clones Assault",
                "img": "https://imgur.com/JD95N1j.jpg",
                "description": "At 3/6/9 clones, this skill cost an additional random chakra and deals 20/40/60 piercing damage to one enemy. This skill cannot be countered.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Mass Reproduction",
                "img": "https://imgur.com/fp698ah.jpg",
                "description": "White Zetsu Clones will mass produce all over the battlefield for 4 turns, dealing 10 damage to one random enemy at the same time one random ally will gain 10 damage reduction. During this time this turns into Parasitic Grab.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "White Assimilation: Poison Mist",
                "img": "https://imgur.com/VVo9M1W.jpg",
                "description": "White Zetsu will target all enemies on the battlefield for 2 turns. All enemies will become invulnerable to friendly skills and take 5 more damage from White Zetsu skills.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Control"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Parasitic Grab",
                "img": "https://i.imgur.com/Kko8ZaJ.png",
                "description": "White Zetsu will make one enemy unable to target anyone else but White Zetsu for 1 turn. They will take 50% more damage from White Zetsu skills for 2 turns.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 154,
        "name": "Tobi (S)",
        "img": "https://i.imgur.com/P4fDYJB.png",
        "lore": "Tobi is the leader of Akatsuki, as well as an Uchiha. He possesses dimensional skills, being able to suck his targets into his dimension or use the Uchihas' forbidden techniques.",
        "skills": [
            {
                "name": "Kamui",
                "img": "https://i.imgur.com/NOk9oxN.png",
                "description": "If used on an ally: That ally will become invulnerable for 1 turn. If used on an enemy: deals 20 piercing damage to them and Tobi becomes invulnerable to that enemy for 1 turn. If they are invulnerable, deals 10 additional damage. Ignores invulnerability.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Kamui Snare",
                "img": "https://i.imgur.com/NY0SoPG.png",
                "description": "Tobi deals 10 piercing damage to an enemy, making them invulnerable to helpful skills and nullifying the non-damage effects of their next harmful skill for 1 turn. During 'Tobi Sharingan', this skill will deal 15 piercing damage and will nullify non-damage effects for 2 turns.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Tobi Sharingan",
                "img": "https://i.imgur.com/eKymPHu.png",
                "description": "For 4 turns, Tobi gains 10 points of unpierceable damage reduction. During this time, 'Kamui' deals 15 additional damage, and removes all harmful effects when used on an ally. This skill will be replaced. When used, 100% of Tobi's current health is stored.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Uchiha Perception",
                "img": "https://i.imgur.com/8nVf4Gc.png",
                "description": "This skill makes Tobi (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Hidden Izanagi",
                "img": "https://i.imgur.com/0a4phiY.png",
                "description": "Tobi uses Hidden Izanagi. After 2 turns Tobi's health will return to the health value stored by 'Tobi Sharingan'. This skill is invisible and can only be used once. This skill will be activated even if Tobi is killed.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Unique",
                    "Ranged*",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            }
        ]
    },
    {
        "id": 155,
        "name": "Masked Man",
        "img": "https://i.imgur.com/zp0TERK.png",
        "lore": "Not much is known about the Masked Man, other than his uncontrollable hatred for the Leaf Village. After extracting the Kyuubi from Kushina, Masked Man is able to summon the Nine Tails Beast into the battlefield, while also being able to use his other unknown techniques.",
        "skills": [
            {
                "name": "Strange Jutsu",
                "img": "https://i.imgur.com/pTLohi4.png",
                "description": "Masked Man isolates himself and one enemy from the battlefield, *making them both invulnerable to every characters except each other for 3 turns; This effect cannot be ignored. During this time, that enemy will take 15 piercing damage each turn.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Action",
                    "Unique",
                    "*Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Chain Assault",
                "img": "https://i.imgur.com/5N1uOWp.png",
                "description": "Producing chains from his wrists, Masked Man gains 10 destructible defense for 1 turn and deals 25 damage to one enemy, reducing their non-affliction damage by 10 for 1 turn. This skill deals 35 damage and reduces 15  points of damage to the enemy affected by 'Strange Jutsu'.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Summoning: Kyuubi",
                "img": "https://i.imgur.com/lfO8e0S.png",
                "description": "Masked Man may summons Kyuubi if he has 50 health or less, granting himself 55 points of destructible defense permanent. While he has this destructible defense, all of his skills will be replaced by 'Summoned Kyuubi: Bijuudama'.",
                "cooldown": "9",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Masked Man Block",
                "img": "https://i.imgur.com/BLdXQ3T.png",
                "description": "This skill makes Masked Man invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Summoned Kyuubi: Bijuudama",
                "img": "https://i.imgur.com/G5lZyNP.png",
                "description": "Kyuubi gathers a massive sphere of chakra and fires it at all enemies dealing 35 piercing damage to them.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 156,
        "name": "Konan of the Rain (S)",
        "img": "https://i.imgur.com/7rPLcCd.png",
        "lore": "Konan of the Rain (S) has returned to the Hidden Rain village. Now that Uzumaki Nagato is dead she is aligned with Uzumaki Naruto and his quest for peace.",
        "skills": [
            {
                "name": "Paper Chakram",
                "img": "https://i.imgur.com/moOl9NJ.png",
                "description": "Konan forms and fires a paper chakram towards an enemy, dealing 35 piercing damage to them. For 1 turn, Konan's skills will cost 1 less random chakra.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Paper Ocean: Chasm Trap",
                "img": "https://i.imgur.com/o4eBv3L.png",
                "description": "Konan traps all enemies in a chasm of the ocean made of a million papers. For 3 turns, all non-affliction damage will be reduced to a maximum of 25. During this time, this skill will be replaced and each time it successfully reduces an enemy's non-affliction damage, Konan will gain 1 random charka.",
                "cooldown": "5",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Explosive Papers Barrage",
                "img": "https://i.imgur.com/pD2zBl1.png",
                "description": "Konan rushes toward an enemy and ambushes them with multiple explosive papers, stunning their skills for 3 turns and dealing 15 damage to them each turn.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "The Bridge to the Peace",
                "img": "https://i.imgur.com/fvd160N.jpg",
                "description": "This skill makes Konan of the Rain (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Paper Ocean: Explosive Papers Detonate",
                "img": "https://i.imgur.com/GKnsQUx.png",
                "description": "Konan detonates all the millions of explosive papers, crushing all enemies trapped by 'Paper Ocean: Chasm Trap', and dealing 20 damage to them and stunning their skills for 2 turns.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 157,
        "name": "Shinobi Alliance Naruto (S)",
        "img": "https://i.imgur.com/VlK9BfK.png",
        "lore": "Having gained complete control of all of the kyuubi's chakra, Naruto will be sure to rampage over every battlefield he comes across.",
        "skills": [
            {
                "name": "Rasengan Riot",
                "img": "https://i.imgur.com/JYezdNf.png",
                "description": "By forming multiple Rasengan over his head, Naruto deals 30 damage to one enemy. A random teammate of that enemy will also be dealt 10 damage. The following turn, this skill will be replaced by 'Planetary Rasengan'.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Rasenkyugan",
                "img": "https://i.imgur.com/VVSwYL8.png",
                "description": "Naruto grabs multiple enemies and smashes them into a giant Rasengan, dealing 15 damage to all enemies for 1 turn. This skill will deal an additional 5 damage when it's used. The following turn, this skill will be replaced by 'Mini-Bijuudama'.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Summoning: Mayhem",
                "img": "https://i.imgur.com/Z3CcFWD.png",
                "description": "Naruto summons Mayhem in the battlefield. For 1 turn, the first harmful skill used on Naruto will be countered. The countered enemy will receive 15 additional damage from 'Mini Rasenshuriken'. The following turn, this skill will be replaced by 'Mini-Rasenshuriken'. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Supersonic Speed",
                "img": "https://i.imgur.com/9y1zBGg.png",
                "description": "This skill makes Shinobi Alliance Naruto (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Planetary Rasengan",
                "img": "https://i.imgur.com/wV3yPye.png",
                "description": "Naruto forms a big Rasengan surrounded by other Rasengans, targeting one enemy and dealing 35 damage to them. If this skill kills that enemy, Naruto will deal 10 additional damage for 2 turns and will be unable to be killed during this time.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Mini-Bijuudama",
                "img": "https://i.imgur.com/YsfPSVu.png",
                "description": "By compressing chakra, Naruto creates a miniature of Bijuudama and deals 35 affliction damage to one enemy. For 1 turn, that enemy's skills will deal 10 less non-affliction damage and the cost of their skills will be increased by 1 random chakra.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Mini-Rasenshuriken",
                "img": "https://i.imgur.com/yAY1DDM.png",
                "description": "Naruto targets one enemy, destroying their destructible defense and dealing 15 piercing damage to them. This skill cannot be countered or reflected.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 158,
        "name": "Shinobi Alliance Sakura (S)",
        "img": "https://i.imgur.com/jvCtfmp.png",
        "lore": "With her extensive training under Tsunade for the last two and a half years, Sakura has gained a greater understanding of healing and the human body. While Sakura's physical strength and healing prowess have both increased, her greatest ability is a powerful chakra storing seal taught to her by Tsunade.",
        "skills": [
            {
                "name": "Empowered Devasting Punch",
                "img": "https://i.imgur.com/MvwbbW5.png",
                "description": "Amplifying her strength, Sakura deals 20 damage to one enemy and 5 damage to all others. While 'Strength of a Hundred Seal' is active, this skill will deal 35 damage to one enemy, and 10 to all others.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Superior Healing",
                "img": "https://i.imgur.com/G5ldCer.png",
                "description": "With her superior healing skills, Sakura heals half of one ally's missing health, rounded down, and removes all enemy affliction effects from them. While 'Strength of a Hundred Seal' is active, this skill will cost 1 random and have no cooldown.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Strength of a Hundred Seal",
                "img": "https://i.imgur.com/TBI5NVw.png",
                "description": "Sakura gains 3 Seals. During this time, each time Sakura uses a skill other than her invulnerability, she will use up 1 Seal. While 'Strength of a Hundred Seal' is active, Sakura can use this skill again for no cost to restore 25 health and remove all harmful effects on her.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Summoning: Katsuyu",
                "img": "https://i.imgur.com/LTqSBP2.png",
                "description": "This skill makes Shinobi Alliance Sakura (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 159,
        "name": "Shinobi Alliance Sai (S)",
        "img": "https://i.imgur.com/pDe8wDr.png",
        "lore": "Sai became capable of using a wider variety of techniques after improving his skills with his animal paintings. Besides that, Sai carries with him his powerful Sealing Technique.",
        "skills": [
            {
                "name": "Tiger Vision Staring Bullet",
                "img": "https://i.imgur.com/rlHMnoA.png",
                "description": "By using this sealing technique, Sai stuns one enemy's harmful skills permanently and deals 25 damage to them each turn. If that enemy uses a new skill, this skill will end and Sai gains 1 genjutsu chakra. This skill ends if Sai is killed.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Great Beast Painting: Kamikaze Birds",
                "img": "https://i.imgur.com/rhBP4y8.png",
                "description": "Sai makes one enemy receive 5 additional damage from non-affliction skills* and deals them 10 piercing damage to them each turn permanently. If that enemy uses a new skill, they will take 20 piercing damage and then this skill will end. This skil ends if Sai is killed.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Action",
                    "Unique",
                    "Instant*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Great Beast Painting: Ink Warriors",
                "img": "https://i.imgur.com/EIXhkHV.png",
                "description": "Sai grants one ally and himself 20 points of destructible defense. If that ally's destructible defense is destroyed, 'Great Beast Painting: Kamikaze Birds' will have no cost for 1 turn. If Sai destructible defense is destroyed, 'Tiger Vision Staring Bullet' will cost 1 random chakra for 1 turn.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sai Kunai Parry",
                "img": "https://i.imgur.com/8dtdZfr.png",
                "description": "This skill makes Shinobi Alliance Sai (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 160,
        "name": "Shinobi Alliance Kakashi (S)",
        "img": "https://i.imgur.com/VnUySet.png",
        "lore": "Kakashi, as one of the squad leaders, goes to war alongside all the ninjas. Now, he uses everything at his disposal to win. Besides himself, Kakashi can rely on his allies.",
        "skills": [
            {
                "name": "Kubikiribouchou: Heavy Attack",
                "img": "https://i.imgur.com/FORwVtl.png",
                "description": "Using Zabuza's sword, Kakashi destroys one enemy's destructible defense and deals 15 piercing damage to them. Afterwards, Kakashi will also steal 5 health from that enemy. The following turn, 'Lightning-Infused Kunai' will cost 1 ninjutsu and 1 random chakra.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Lightning-Infused Kunai",
                "img": "https://i.imgur.com/BW5EaAT.png",
                "description": "Kakashi deals 40 piercing damage to one enemy ignoring counters and reflects. If this skill successfully kills the target, it will have its cooldown reset, its chakra cost changed to 2 random chakra, and its damage increased by 10 for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Lightning Transmission Cable",
                "img": "https://i.imgur.com/mEcxUs6.png",
                "description": "For 3 turns, Kakashi gains 15 points of damage reduction and any enemy that uses a new non-mental skill on him will take 10 piercing damage. During this time, all enemies will be marked and if they use a new harmful damaging skill, Kakashi's other skills will permanently steal 5 health from them; Dealt as new source of damage; This effect stacks.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Earth Release: Earth-Style Wall",
                "img": "https://i.imgur.com/5fKpuCR.png",
                "description": "This skill makes Shinobi Alliance Kakashi (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 161,
        "name": "Shinobi Alliance Shikamaru (S)",
        "img": "https://i.imgur.com/fVgHpUK.png",
        "lore": "Shikamaru, now in the war. He remains a good and talented ninja, using his shadows more effectively, in addition to using the help of his allies very well, and forcing his enemies to help him too.",
        "skills": [
            {
                "name": "Continuous Shadow Sewing",
                "img": "https://i.imgur.com/aLnt17m.png",
                "description": "Shikamaru deals 30 piercing damage to one enemy, stuns their physical and ranged skills. If that enemy doesn't use any new skill, they will take more 15 piercing damage. During 'Tatical Range Increase' this skill deal 15 more damage.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Tatical Range Increase",
                "img": "https://i.imgur.com/PNq9tnn.png",
                "description": "For 1 turn, Shikamaru will ignore all damage dealt and will target all enemies. During this time, the enemies that use a new skill will be able to be target of 'Tatical Shadow Bind' for 1 turn. This skill becomes 'Tatical Shadow Bind' for 1 turn and is invisible.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Ally Shadow Control",
                "img": "https://i.imgur.com/73Vhlng.png",
                "description": "Shikamaru target one ally for 3 turns, making their skills have 1 cooldown decreased, and if Shikamaru uses a new skill that ally will become invulnerable to damage skills for 1 turn.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Hide and Thinking",
                "img": "https://i.imgur.com/pPAXCWL.png",
                "description": "This skill makes Shinobi Alliance Shikamaru (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Tatical Shadow Bind",
                "img": "https://i.imgur.com/vnSogry.png",
                "description": "Shikamaru deals 30 damage to all enemies affected by 'Tatical Range Increase', and for 2 turns stuns their physical and chakra skills.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Control"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 162,
        "name": "Shinobi Alliance Chouji (S)",
        "img": "https://i.imgur.com/ZnJky3h.png",
        "lore": "After nearly three years, Chouji has developed in both strength and size, mastering the Akimichi clan techniques. No longer does Chouji need the Akimichi pills to tap into his true strength, instead, he merely needs to control his chakra and become a force to reckon with.",
        "skills": [
            {
                "name": "Butterfly Bullet Bombing",
                "img": "https://i.imgur.com/HTFxUzW.png",
                "description": "Chouji slams his fist into an enemy's face, first ignoring all harmful effects other than chakra cost changes for 1 turn and then dealing 30 damage to one enemy. This skill cannot be countered or reflected and Chouji's skills will cost 2 additional random chakra afterwards.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Human Bullet Tank",
                "img": "https://i.imgur.com/M6ojTSg.png",
                "description": "Chouji rolls over one enemy for 2 turns, dealing 15 damage to them. During this time, Chouji will counter all new physical and chakra skills used on him.* This skill will increase the cost of Chouji's skills by 1 random chakra each turn.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action",
                    "Instant*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Butterfly Control",
                "img": "https://i.imgur.com/80bFCaV.png",
                "description": "Using his new found control, Chouji taps into even more power. This skill will be replaced by 'Super-Punch'. Each turn, the existing cost of Chouji's skills will be decreased by 1 random chakra.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Butterfly Block",
                "img": "https://i.imgur.com/88638R1.png",
                "description": "This skill makes Shinobi Alliance Chouji (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Super-Punch",
                "img": "https://i.imgur.com/CZimKdS.png",
                "description": "Chouji punches an enemy down with a fistful of chakra, removing all Harmfull effects on him and then dealing 30 damage to one enemy, this skill cannot be countered or reflected and chouji skills cost 2 additional random chakras afterwards.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 163,
        "name": "Shinobi Alliance Ino (S)",
        "img": "https://i.imgur.com/QO2cH82.png",
        "lore": "Not one to be left behind, Ino has trained non-stop to improve her abilities and teamwork. With her improved techniques, Ino can not only control her enemies, but her allies too all while seeing everything on the battlefield.",
        "skills": [
            {
                "name": "Mind Body Switch Interference",
                "img": "https://i.imgur.com/TMRliKS.png",
                "description": "Ino prepares to interfere with one enemy for 1 turn. The following turn, that enemy will receive 15 damage and if that enemy uses a new harmful skill, they will be countered and this skill will be replaced by the countered skill for 1 turn. This skill is invisible and can copy all skills.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Enhanced Proxy Surveillance",
                "img": "https://i.imgur.com/3PFyj5Q.png",
                "description": "For 3 turns all damage reduction and destructible defense effects all enemies use will be reduced by 15, percentage damage reduction will be reduced by 50% and Ino will know when and where any skill is used. This skill can't be countered, reflected and is invisible.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Mind Clone Switch",
                "img": "https://i.imgur.com/XG8euoA.png",
                "description": "Ino enters the mind of both of her allies, making their bodies fight on regardless of their state. For 3 turns, both of Ino's allies will ignore all harmful effects other than damage and chakra cost changes. This skill is invisible and will end if Ino dies.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Ino Dodge",
                "img": "https://i.imgur.com/tvbIXcC.png",
                "description": "This skill makes Shinobi Alliance Ino (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 164,
        "name": "Shinobi Alliance Shino (S)",
        "img": "https://i.imgur.com/7Dh50WS.png",
        "lore": "Shino evolves, enhancing his intellect and his Aburame clan abilities. Shino remains calm and, at the same time, cold. His parasites can now destroy any layer, enemy, or defense, and he can also use them as a defense at any moment.",
        "skills": [
            {
                "name": "Insect Assault",
                "img": "https://i.imgur.com/bhP59yW.png",
                "description": "Shino deals 15 affliction damage to one enemy. That enemy will lose 1 taijutsu or genjutsu chakra if they're being currently affected by an affliction damage skill. The following 2 turns, this skill will deal 20 affliction damage and will cost 1 bloodline chakra; This improvement doesn't stack.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Insect Coffin",
                "img": "https://i.imgur.com/nyuyOdq.png",
                "description": "Shino surrounds one enemy with insects, dealing 15 affliction damage to them for 3 turns. During this time, that enemy will be unable to reduce damage or become invulnerable* and if Shino or an ally uses a new skill on that enemy, they will heal 15 health*.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Action",
                    "Instant*",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Bug Barrier",
                "img": "https://i.imgur.com/IZreCOO.png",
                "description": "Shino creates a massive barrier of bugs to defend his team. For 1 turn, Shino and his allies will heal 15 health and will gain 15 points of destructible defense.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Hidden Insects",
                "img": "https://i.imgur.com/pRM7rEi.png",
                "description": "This skill makes Shinobi Alliance Shino (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 165,
        "name": "Shinobi Alliance Hinata (S)",
        "img": "https://i.imgur.com/Dnxsrpq.png",
        "lore": "Hinata will also take part in the war. Together with her allies, she will destroy any enemy that tries to attack using her new technique, Gentle Step Twin Lion Fists, along with her Byakugan.",
        "skills": [
            {
                "name": "Sixty-Four Palms",
                "img": "https://i.imgur.com/CLqNirF.png",
                "description": "Hinata delivers a series of attacks to one enemy, dealing 10 affliction damage to them and removing all stacks of 'Byakugan: Enhanced Vision' from them. During 'Byakugan: Enhanced Vision', if the target uses a new harmful skill, 'Chakra Lion Attack' will be applied on them.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Affliction",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Gentle Step Twin Lion Fists",
                "img": "https://i.imgur.com/tOKsmOK.png",
                "description": "Hinata creates 2 lions. The next 2 times any enemy uses a new harmful skill, 'Chakra Lion Attack' will be applied on them dealing 30 damage instead and Hinata will lose 1 lion. During 'Byakugan: Enhanced Vision' this skill will create 3 lions. This skill cannot be used while active and will end if Hinata is killed.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Byakugan: Enhanced Vision",
                "img": "https://i.imgur.com/gCtDlPI.png",
                "description": "Hinata takes advantage of her Byakugan and its enhanced vision, improving her skills for 3 turns. During this time, any enemy that uses a new harmful skill will receive 5 additional damage from 'Sixty-Four Palms' permanently. This skill cannot be countered and it ends if Hinata is killed.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Byakugan: Focus",
                "img": "https://i.imgur.com/h0HY5xh.png",
                "description": "This skill makes Shinobi Alliance Hinata (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Chakra Lion Attack",
                "img": "https://i.imgur.com/YRF47Yp.png",
                "description": "The target of this skill will recelve 20 damage and will lose 1 non-bloodline chakra. If this skill is triggered by 'Gentle Step Twin Lion Fists', the target will be dealt 30 damage instead.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 166,
        "name": "Shinobi Alliance Kiba (S)",
        "img": "https://i.imgur.com/qjdViGn.png",
        "lore": "Now in the war, Kiba is one of the most powerful close-range combatants. Utilizing the vast arsenal of the Inuzuka clan, Kiba can combat even colossal enemies with Akamaru and their tornado fang.",
        "skills": [
            {
                "name": "Tornado Fang",
                "img": "https://i.imgur.com/MI5CB8Q.png",
                "description": "Kiba deals 30 piercing damage to one enemy and makes them deal 10 less non-affliction damage for 1 turn. During 'Three Headed Wolf' this skill deal 10 additional damage.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Three Headed Wolf",
                "img": "https://i.imgur.com/8gU92l0.png",
                "description": "Kiba removes all physical and chakra harmful skills on his team, and for 3 turns, targets all enemies. During this time, the enemies that use a new harmful skill will take 5 piercing damage and will receive 5 additional damage from physical melee skills permanently. This skill is replaced by 'Tail Rotating Fang'.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Man Animal Tatics",
                "img": "https://i.imgur.com/atgU87q.png",
                "description": "Kiba and one ally will deal 5 additional damage from non-affliction skills for 2 turns. During this time, everytime a new enemy harmful skill is used on them, their skills will cost one random chakra less for 1 turn.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Kiba Block",
                "img": "https://i.imgur.com/HV9AzM6.png",
                "description": "This skill makes Shinobi War Kiba (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Tail Rotating Fang",
                "img": "https://i.imgur.com/STBBoKZ.png",
                "description": "Kiba deals 45 piercing damage to one enemy and becomes invulnerable to physical skills. Permanently, both Kiba and that enemy will deal 5 less physical damage.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 167,
        "name": "Shinobi Alliance Gaara (S)",
        "img": "https://i.imgur.com/LgN8ClX.png",
        "lore": "Despite his youth and inexperience, the young Kazekage is made Commander-in-Chief of the Shinobi Alliance at the outbreak of the Fourth Shinobi World War. Fearlessly carrying this great responsibility, Gaara is ready to prove himself to the world, empowered by the loving spirit of his mother hidden within his sand.",
        "skills": [
            {
                "name": "Sand Binding Prison",
                "img": "https://i.imgur.com/uF7Wicm.png",
                "description": "Gaara deals 30 piercing damage to one enemy and stuns their non-mental skills for 1 turn. During 'Desert Layered Imperial Funeral Seal', this skill will deal 10 additional damage. During 'Mother's Absolute Defense', this skill's stunning effect will last 1 additional turn.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Desert Layered Imperial Funeral Seal",
                "img": "https://i.imgur.com/JchmOml.png",
                "description": "Gaara deals 15 piercing damage to all enemies. For 2 turns, any enemy that uses a new harmful skill will be dealt 5 piercing damage. This skill ends if 'Mother's Absolute Defense' is used.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Mother's Absolute Defense",
                "img": "https://i.imgur.com/ul7CqtD.png",
                "description": "Gaara grants his team 15 permanent destructible defense. For 2 turns, if Gaara or an ally is targeted by a new harmful skill, they will gain 5 permanent destructible defense. This skill ends if 'Desert Layered Imperial Funeral Seal' is used.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Sand Wall",
                "img": "https://i.imgur.com/FFiJvY1.png",
                "description": "This skill makes Shinobi Alliance Gaara (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 168,
        "name": "Shinobi Alliance Temari (S)",
        "img": "https://i.imgur.com/gCW8OWG.png",
        "lore": "At the outset of the Fourth Shinobi World War, Temari is placed in the Fourth Division. Although Gaara is officially in command of the division and Shikamaru is in Gaara's proxy, Temari is the one who leads the division on the battlefield, including personally commanding the division's Wind Release combat unit.",
        "skills": [
            {
                "name": "Third Moon Unleash",
                "img": "https://i.imgur.com/pkik6W0.png",
                "description": "Temari unleashes her fan with all three moons revealed. For 4 turns, Temari's skilLs will cost 1 less random chakra. During this time, any enemy that uses a new skill on Temari will receive 5 additional damage from her permanently.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Temari Air Slash",
                "img": "https://i.imgur.com/Dg0om1m.png",
                "description": "Temari sweeps her fan to create a slicing current of wind. For 1 turn, Temari deals 15 piercing damage to one enemy and stuns their skills. The following turn, that enemy will be dealt 15 damage.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Summoning: Kamatari",
                "img": "https://i.imgur.com/BPoMd3i.png",
                "description": "Summoning Kamatari, Temari deals 40 piercing damage to one enemy. After used, if the target of this skill is killed, Temari gains 1 random chakra.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Fan Heavy Block",
                "img": "https://i.imgur.com/BZkHN4g.png",
                "description": "This skill makes Shinobi Alliance Temari (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 169,
        "name": "Shinobi Alliance Kankuro (S)",
        "img": "https://i.imgur.com/mwNUU2i.png",
        "lore": "During the Fourth Shinobi World War, Kankurou is put in charge of the Surprise Attack Division, leading his squad as a guerrilla unit. Heading into the war, Kankurou greatly expanded his arsenal, adding the puppets of Sasori and his parents, and will fight using all his weapons in perfect tandem with each other.",
        "skills": [
            {
                "name": "Kankuro: Puppet Mastery",
                "img": "https://i.imgur.com/P8xtAYw.png",
                "description": "Kankuro prepares his puppets, gaining 25 unpierceable damager reduction. If Kankuro is targeted by a new harmful non-affliction damaging skill, he will lose 5 points of damage reduction from this skill. If used while active, it will be re-aplied.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Puppet Manipulation: Sasori",
                "img": "https://i.imgur.com/TzVDSc7.png",
                "description": "Kankuro targets all enemies, dealing damage to them equal the amount of damage reduction points that 'Kankuro: Puppet Mastery' currently has. If 'Kankuro: Puppet Mastery' has 15 points of damage reduction or less, this skill will cost 1 less random chakra.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Puppet Manipulation: Father and Mother",
                "img": "https://i.imgur.com/m4YyqL8.png",
                "description": "Kankuro protects himself or an ally, granting them 10 destructible defense for each 5 points of damage reduction that 'Kankuro: Puppet Mastery' currently has. If 'Kankuro: Puppet Mastery' has 15 points of damage reduction or less, this skill will cost 1 less random chakra.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Kankuro Sealing Technique",
                "img": "https://i.imgur.com/tp9rMsp.png",
                "description": "This skill makes Shinobi Alliance Kankuro (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 170,
        "name": "Edo Tensei Deidara (S)",
        "img": "https://i.imgur.com/7aBMAQ1.jpg",
        "lore": "Edo Tensei Deidara (S) has been revived and is immediately sent out to battle. Fighting on the front lines is nothing new to this old soul.",
        "skills": [
            {
                "name": "Katsu!",
                "img": "https://i.imgur.com/FxYBog1.png",
                "description": "Deidara detonates all his bombs creating a great explosion, first becoming invulnerable for 1 turn and after dealing 5 piercing damage to all enemies. Afterwards, all stacks from Deidara's skills will be removed. This skill cannot be countered.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Bat Bombs",
                "img": "https://i.imgur.com/uUJNeJC.png",
                "description": "Deidara deals 10 affliction damage to all enemies. Permanently, 'Katsu!' will deal 5 additional damage to them. For 1 turn, any enemy that uses a new skill will receive 15 additional damage instead from 'Katsu!'. The following turn, 'Jellyfish Explosives' will deal 5 additional damage.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Jellyfish Explosives",
                "img": "https://i.imgur.com/jLHzVyh.png",
                "description": "Deidara deals 20 piercing damage to one enemy. Permanently, 'Katsu!' will deal 10 additional damage to that enemy. For 1 turn, any enemy that uses a new skill will permanently receive 10 additional damage from 'Katsu!'. The following turn, 'Bat Bombs' will deal 5 additional damage.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Chakra Clay Trap",
                "img": "https://i.imgur.com/x8ZtRYB.png",
                "description": "Deidara creates a trap to one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered and will take 20 piercing damage. Permanently, the countered enemy will receive 10 additional damage from 'Katsu!'. The target of this skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 171,
        "name": "Edo Tensei Pakura (S)",
        "img": "https://i.imgur.com/Zj6R1e2.png",
        "lore": "Edo Tensei Pakura (S) was a revered shinobi of the Hidden Sand in the past. So much so that she was revived against her will to participate in the fourth shinobi world war.",
        "skills": [
            {
                "name": "Scorch Release",
                "img": "https://i.imgur.com/9Zxln8E.png",
                "description": "Pakura deals 20 affliction damage to one enemy and makes them unable to be healed for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Searing Combat",
                "img": "https://i.imgur.com/EN0ePFo.png",
                "description": "Pakura deals 5 affliction damage to all enemies for 3 turns. During this time, all enemies that use a new harmful skill will take 5 affliction damage and 'Scorch Release' will deal 10 additional damage on them.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action",
                    "Affliction",
                    "*Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Steaming Murder",
                "img": "https://i.imgur.com/wNevSbP.png",
                "description": "Pakura deals 35 affliction damage to one enemy and stuns their helpful skills. The following turn, all other Pakura's harmful skills will cost random chakras instead.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Affliction",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Experienced Defense",
                "img": "https://i.imgur.com/MJxeXU7.png",
                "description": "This skill makes Edo Tensei Pakura (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 172,
        "name": "Edo Tensei Sasori (S)",
        "img": "https://i.imgur.com/Bt9kHE5.png",
        "lore": "Edo Tensei Sasori (S) has been resurrected in the ageless body that he had always wanted during his life. He is sent out to the battlefield in Akatsuki's ambush squad.",
        "skills": [
            {
                "name": "Chakra Threads",
                "img": "https://i.imgur.com/mqcph2e.png",
                "description": "Sasori manipulates his puppets, gaining 10 points of destructible defense for 3 turns. During this time, 'Puppet Manipulation' deals 5 additional damage and 'Chakra Threads: Puppet Trap' will reflect all harmful skills instead.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Puppet Manipulation",
                "img": "https://i.imgur.com/fAirmNS.png",
                "description": "Edo Tensei Sasori deals 15 damage to one enemy. For 1 turn, that enemy will deal 10 less non-affliction damage. If the health of that enemy drops to 35 or below, their physical and chakra skills will be stunned for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Chakra Threads: Puppet Trap",
                "img": "https://i.imgur.com/rzc7HRf.png",
                "description": "Edo Tensei Sasori targets one ally for 1 turn. The first harmful skill used on that ally will be reflected upon the enemy. This skill is invisible.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Falling Guard",
                "img": "https://i.imgur.com/g0bcv0N.png",
                "description": "This skill makes Edo Tensei Sasori (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 173,
        "name": "Edo Tensei Haku (S)",
        "img": "https://i.imgur.com/KEsUR4g.png",
        "lore": "Edo Tensei Haku (S) is not sure why he is among the living again but his dream of protecting Zabuza pushes him to go all out.",
        "skills": [
            {
                "name": "Silent Piercing Murder",
                "img": "https://i.imgur.com/nAjrelw.png",
                "description": "Haku deals 20 piercing damage to one enemy for 2 turns. For 1 turn, that enemy will lose 1 bloodline or ninjutsu chakra.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Action",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Cristal Ice Mirrors Execution",
                "img": "https://i.imgur.com/T49eIJw.png",
                "description": "Haku deals 20 damage to one enemy. For 1 turn, if this enemy uses a new harmful non-mental skill, that skill will be reflected onto another random enemy. If no skill is reflected, Haku will steal 1 bloodline chakra from that enemy.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Low Temperature Enhancement",
                "img": "https://i.imgur.com/qrBbo3F.png",
                "description": "Haku grants himself 15 destructible defense for 2 turns. The following 2 turns, he will deal 5 additional damage and each turn that he does not use a new skill, he will gain 1 random chakra.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "ET Haku Block",
                "img": "https://i.imgur.com/7B9yDd4.png",
                "description": "This skill makes Edo Tensei Haku (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 174,
        "name": "Edo Tensei Zabuza (S)",
        "img": "https://i.imgur.com/SaKz2Cx.png",
        "lore": "Edo Tensei Zabuza (S) has been summoned from the dead against his will. His unique abilities will surely be put to use on the battlefield. Pics by: Pain_Alagoano",
        "skills": [
            {
                "name": "Demon Shroud",
                "img": "https://i.imgur.com/8mcKt3L.png",
                "description": "Zabuza emantes shroud putting pressure in the battlefield. For 1 turn, all enemies will have the cost of their harmful skills increased by 1 random chakra. Afterwards, any enemy affected by this skill will receive 5 additional damage from Zabuza's skills permanently. This effect stacks.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Executioner Strike",
                "img": "https://i.imgur.com/TvRUgQZ.png",
                "description": "Zabuza executes one enemy dealing 20 piercing damage to them. For 1 turn, that enemy's skills will have 1 additional cooldown.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Executioner Blade Absorption",
                "img": "https://i.imgur.com/3qGEtxx.png",
                "description": "Zabuza steals 10 health from one enemy and for 1 turn, that enemy's harmful skills will cost 1 additional bloodline chakra.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Demon Insight",
                "img": "https://i.imgur.com/maezWad.png",
                "description": "This skill makes Edo Tensei Zabuza (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 175,
        "name": "Edo Tensei Mangetsu (S)",
        "img": "https://i.imgur.com/4QcN9uF.png",
        "lore": "Reanimated by Kabuto during the Fourth Shinobi World War as one of the Seven Swordsmen of the Mist, Mangetsu was widely feared as the 'Second Coming of the Demon'. The older brother of Suigetsu, Mangetsu primarily used the Twin Sword, Hiramekarei, though he was famously a master of all seven blades.",
        "skills": [
            {
                "name": "Hydrification Technique",
                "img": "https://i.imgur.com/71NAFSG.png",
                "description": "ET Mangetsu steals 20 health points from one enemy. For 1 turn, a random skill class will be chosen, and ET Mangetsu will ignore all enemy skills of that class, or none if no class is chosen.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Impure World Regeneration",
                "img": "https://i.imgur.com/TqVLDTW.png",
                "description": "When this skill is used, ET Mangetsu will heal 2 health every turn for the rest of the game. This skill stacks and may only be used 5 times.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Mist Sword Summoning",
                "img": "https://i.imgur.com/vU96NVd.png",
                "description": "Mangetsu randomly summons one of the Seven Swords, granting 'Hydrification Technique' a random unique effect every turn. Hiramekarei: Steals 10 additional health. / Kubikiribocho: Grants 10 permanent destructible defense. / Sameheada: Steals 1 random chakra from the target. / Nuibari: Stuns non-mental skills for 1 turn. / Shibuki: Deals 5 permanent affliction damage. / Kabutowari: Destroys destructible defense and deals 15 piercing damage. / Kiba: Deals 20 affliction damage to all other enemies.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Mangetsu Block",
                "img": "https://i.imgur.com/8CTkW7A.png",
                "description": "This skill makes Edo Tensei Mangetsu (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 176,
        "name": "Edo Tensei Jinpachi (S)",
        "img": "https://i.imgur.com/ljV9Yzu.png",
        "lore": "Edo Tensei Jinpachi (S) is one of the previous Seven Swordsmen of the Mist and a particularly cruel individual.",
        "skills": [
            {
                "name": "Explosive Tag Primer",
                "img": "https://i.imgur.com/Ko68Yvv.png",
                "description": "ET Jinpachi gains 10 permanent destructible defense. The next use of 'Silent Explosion' will deal 15 chakra piercing damage* to the target. If an enemy destroys the defense of this skill, they will take 15 piercing damage* and this skill will end.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Melee*"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Silent Explosion",
                "img": "https://i.imgur.com/RKv7ubV.png",
                "description": "Jinpachi deals 20 piercing damage to one enemy and reduces their non-affliction damage by 5 for 1 turn. If 'Explosive Tag Primer' is used on the last turn, this skill will cost 1 additional random chakra for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Shibuki Explosion Chain",
                "img": "https://i.imgur.com/DdGU68F.png",
                "description": "ET Jinpachi gains 10 permanent destructible defense. The next use of 'Silent Explosion' will deal 10 permanent affliction damage* to the target. If an enemy destroys the defense of this skill, they will take 10 affliction damage* permanently and this skill will end.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Melee*",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Shibuki Defense",
                "img": "https://i.imgur.com/rmCtifZ.png",
                "description": "This skill makes Edo Tensei Jinpachi (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 177,
        "name": "Edo Tensei Jinin (S)",
        "img": "https://i.imgur.com/e8llxor.png",
        "lore": "Edo Tensei Jinin (S) is a former member of the seven swordsman of the mist. Using his sword Kabutowari he will demonstrate the power of the previous generation on the battttle.",
        "skills": [
            {
                "name": "Silent Killing Axe",
                "img": "https://i.imgur.com/lPSrqRk.png",
                "description": "ET Jinin deals 20 piercing damage to one enemy and marks them for 2 turns. While marked, they will be unable to reduce damage or become invulnerable. If the target is marked by 'Silent Killing Hammer', it's duration is extended by 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Silent Killing Hammer",
                "img": "https://i.imgur.com/vGy1eyq.png",
                "description": "ET Jinin deals 20 damage to one enemy, stuns their non-mental skills and markes them for 1 turn. While marked, they will receive 5 additional non-affliction damage and will ignore counters and reflects. If the target is marked by 'Silent Killing Axe', it's duration is extended by 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Axe & Hammer Smash",
                "img": "https://i.imgur.com/DzoBZvG.png",
                "description": "ET Jinin deals 30 damage to one enemy. Before dealing damage, if they are marked by 'Silent Killing Axe', this will destroy destructible defense. If marked by 'Silent Killing Hammer', this will convert any damage reduction into additional non-affliction damage received instead. If marked by both, this deals an additional 10 damage and stuns them for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Skilled Evasion",
                "img": "https://i.imgur.com/URUFtuo.png",
                "description": "This skill makes Edo Tensei Jinin (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 178,
        "name": "Edo Tensei Ameyuri (S)",
        "img": "https://i.imgur.com/XegsPjQ.png",
        "lore": "Edo Tensei Ameyuri (S) has been summoned from the dead to participate in the fourth ninja war. She wields the dual sharpest swords ever made.",
        "skills": [
            {
                "name": "Silent Dual Sword Rampage",
                "img": "https://i.imgur.com/JLk9lyT.png",
                "description": "Imbuing her swords with lightining, Ameyuri deals 20 piercing damage to one enemy. For 2 turns, that enemy's cooldown will be paralyzed. This effect doesn't stack.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Lightning Rain",
                "img": "https://i.imgur.com/AMoKcaC.png",
                "description": "Ameyuri sends bolts of lightning to electrocute her targets, dealing 35 piercing damage to one enemy and 15 to all others. For 1 turn, all enemies will have their skills cooldown increased by 1. This skill deals 10 additional damage to enemies with their cooldowns paralyzed.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Lightning Flow Trap",
                "img": "https://i.imgur.com/w2tQkSk.png",
                "description": "Ameyuri surrounds each of her enemies with lightning. For 1 turns, all enemies will have their cooldowns increased by 1 and any enemy that does not use a new skill will receive 10 additional damage from Ameyuri's skills for 1 turn. This skill will last 1 additional turn permanently.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Ameyuri Block",
                "img": "https://i.imgur.com/761Gsef.png",
                "description": "This skill makes Edo Tensei Ameyuri (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 179,
        "name": "Edo Tensei Fuguki (S)",
        "img": "https://i.imgur.com/5QPz0DC.png",
        "lore": "Reanimated by Kabuto during the Fourth Shinobi World War as one of the Seven Swordsmen of the Mist, Fuguki used to wield the Shark-Skin Blade, Samehada. A merciless man of few morals, Fuguki uniquely fights using his magnificent mane of red hair as a weapon, dynamically manipulating it to dominate his enemies.",
        "skills": [
            {
                "name": "Hair Needle Senbon",
                "img": "https://i.imgur.com/QWVYyRL.png",
                "description": "ET Fuguki deals 20 piercing damage to one enemy. For 1 turn, any enemy that uses a new skill on ET Fuguki or his allies will gain a stack of 'Hair Spikes'; This skill may only grant 1 stack to an enemy per turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Hardened Spikes",
                "img": "https://i.imgur.com/I0vV2sI.png",
                "description": "ET Fuguki instantly applies a stack of 'Hair Spikes' to the enemy team, and his team gains 15 points of destructible defense for 2 turns. During this time, any enemy that destroys this destructible defense will gain a stack of 'Hair Spikes'.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Ranged Supression",
                "img": "https://i.imgur.com/Km3oKEK.png",
                "description": "For 3 turns, one enemy will be dealt 5 piercing damage, granting them a stack of 'Hair Spikes' each turn, and the other enemies will be dealt 5 piercing damage every turn. During this time, any enemy that uses a new harmful skill will gain a stack of 'Hair Spikes'. This skill ends if Fuguki dies.",
                "cooldown": "5",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Spiked Hair Defense",
                "img": "https://i.imgur.com/YCfhpVw.png",
                "description": "This skill makes Edo Tensei Fuguki (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Hair Spikes",
                "img": "https://i.imgur.com/B29O0L1.png",
                "description": "An enemy affected by this skill will be dealt 2 piercing damage every turn for the rest of the game. During this time, that enemy will receive 5 additional damage from 'Hair Needle Senbon'. This skill stacks.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 180,
        "name": "Edo Tensei Chiyo (S)",
        "img": "https://i.imgur.com/Mh9GsDq.png",
        "lore": "Edo Tensei Chiyo (S) has been summoned back from the afterlife. She may not like it but she will do her best to help her opponents out with information while she is forced to fight.",
        "skills": [
            {
                "name": "White Secret Technique Ten Puppets",
                "img": "https://i.imgur.com/y4LZSrI.png",
                "description": "Chiyo assaults her enemies using the ten puppets, stunning one enemy's physical and ranged skills for 1 turn. Afterwards, one random enemy will be dealt 20 damage for 2 turns.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Unique",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Possum",
                "img": "https://i.imgur.com/DouGpB2.png",
                "description": "Chiyo plays possum on one enemy and targets them. For 1 turn, if that enemy uses a new harmful skill, they will be countered. If successfully, that enemy will be dealt 20 damage and will have their physical and melee skills stunned for 1 turn. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "White Secret Art Illusion",
                "img": "https://i.imgur.com/R9UxzZB.png",
                "description": "Edo Tensei Chiyo (S) targets one enemy dealing 25 damage to them. For 1 turn, Edo Tensei Chiyo (S) will ignore harmful non-ranged skills.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Chiyo Evade",
                "img": "https://i.imgur.com/t7wpJ7e.png",
                "description": "This skill makes Edo Tensei Chiyo (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 181,
        "name": "Edo Tensei Hanzo (S)",
        "img": "https://i.imgur.com/LyOKYz1.png",
        "lore": "Edo Tensei Hanzo (S) has been summoned back from the dead in the middle of a battlefield and he is not happy about it. Edo Hanzo (S) will engage anyone that crosses his path as he did when he was alive.",
        "skills": [
            {
                "name": "Poison Sickle",
                "img": "https://i.imgur.com/VGTBWCW.png",
                "description": "Hanzo deals 10 physical damage and 10 affliction damage to one enemy. For 1 turn, if that enemy uses a new harmful skill, they take 10 damage.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Affliction",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Salamander Swallow",
                "img": "https://i.imgur.com/hKnUMec.png",
                "description": "Hanzo targets one enemy for 1 turn. The next harmful non-mental skill used by that enemy will have its non-damage effects nullified and the duration of the skill reduced by 1 turn. If triggered, the target takes 20 affliction damage. This skill is invisible.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Affliction",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Venom Sac",
                "img": "https://i.imgur.com/dgvAeZf.png",
                "description": "For 1 turn, Hanzo gains 50% unpierceable damage reduction and ignores affliction damage. During this time, any enemy that uses a new skill on him will be *dealt 5 affliction damage for 3 turns. This skill is invisible until first triggered.",
                "cooldown": "3",
                "classes": [
                    "Physical",
                    "Instant",
                    "*Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Ibuse Guard",
                "img": "https://i.imgur.com/sPSjHBW.png",
                "description": "This skill makes Hanzo invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Passive: Contaminated Battlefield",
                "img": "https://i.imgur.com/IzfrdBG.png",
                "description": "At the start of the game, the battlefield becomes Toxic for all characters until Hanzo dies. While Toxic is active: Healing effects and destructible defense will be ignored by all characters. Any character that becomes invulnerable takes 3 permanent affliction damage. This passive cannot be ignored",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Affliction",
                    "Unique"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 182,
        "name": "Edo Tensei Kinkaku (S)",
        "img": "https://i.imgur.com/Mg7REVh.png",
        "lore": "Edo Tensei Kinkaku (S) is one half of the Gold and Silver brothers, said to have been swallowed by Kyuubi and gaining its' Chakra, Kinkaku uses his chakra and legendary tools to fight.",
        "skills": [
            {
                "name": "Bashousen: Assault",
                "img": "https://i.imgur.com/XFIN1tA.png",
                "description": "Kinaku assaults an enemy with his treasured tool, dealing 25 affliction damage to them. For 1 turn, any enemy that uses a new non-mental skill on Kinkaku will take 10 affliction damage.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Bashousen: Coil of Fire",
                "img": "https://i.imgur.com/05rP4A2.png",
                "description": "Kinkaku uses his treasured tool to generate a wave of flames, dealing 15 affliction damage to all enemies permanently. During this time, they will have the cooldown of their skills increased by 2 turns. This skill will end on an enemy when they use any new skill.",
                "cooldown": "3",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Koukinjou Counter",
                "img": "https://i.imgur.com/ZCti0Ev.png",
                "description": "Kinkaku targets an enemy for 1 turn. If that enemy uses a new harmful skill, they will be countered and will be dealt 25 damage. If successful, that enemy will also receive 10 additional damage from 'Bashousen: Assault' for 1 turn. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Koukinjou Block",
                "img": "https://i.imgur.com/dLU9yWo.png",
                "description": "This skill makes Edo Tensei Kinkaku (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Silver Brothers: Kyuubi Passive",
                "img": "https://i.imgur.com/cbbzdTH.png",
                "description": "After dealing a total of 100 damage during the game, Kinkaku will transform into his Tailed Beast Mode, healing 25 health instantly, then gaining 10 points of pierceable damage reduction and healing 5 health permanently.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 183,
        "name": "Edo Tensei Ginkaku (S)",
        "img": "https://i.imgur.com/KCSEBsR.png",
        "lore": "Edo Tensei Ginkaku (S) is one half of the legendary gold and silver brothers of the Hidden Cloud Village. They were the most notorious criminals in the history of the Hidden Cloud.",
        "skills": [
            {
                "name": "Shichiseiken Slash",
                "img": "https://i.imgur.com/NwtZWJW.png",
                "description": "Ginkaku deals 20 piercing damage to one enemy. For this turn, any new stun effects used on that enemy will last 1 additional turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Silence is Golden",
                "img": "https://i.imgur.com/kM5gxCn.png",
                "description": "Ginkaku politely approaches an enemy, dealing 10 piercing damage to that enemy and stunning their skills for 1 turn. During this time, that enemy will become invulnerable to helpful skills and will receive 5 additional melee damage.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Benihisago",
                "img": "https://i.imgur.com/cv4JVMX.png",
                "description": "Ginkaku targets one enemy, selecting one random skill from that enemy for 3 turns. The next time that enemy uses the selected skill, they will be countered and Shichiseiken Slash will deal 5 additional damage to the countered enemy permanently. The selected skill is invisible.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Shichiseiken Defense",
                "img": "https://i.imgur.com/xjsL8vq.png",
                "description": "This skill makes Edo Tensei Ginkaku (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 184,
        "name": "Edo Tensei Nagato (S)",
        "img": "https://i.imgur.com/OHrOGRY.png",
        "lore": "Edo Tensei Nagato (S) has been summoned to do battle. He is fully aware of the fact that he is being controlled again as he was while he was living.",
        "skills": [
            {
                "name": "Human Path",
                "img": "https://i.imgur.com/fxmFmAZ.png",
                "description": "Nagato draws out the lifeforce of an enemy, stealing 10 health and dealing 20 damage. That enemy will be stunned for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Melee",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Preta Path",
                "img": "https://i.imgur.com/VFpdMPm.png",
                "description": "Nagato drains an enemy's energy, stealing 10 health points and removing 1 taijutsu or ninjutsu chakra from their chakra pool.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Unique",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Animal Path",
                "img": "https://i.imgur.com/bEnVUtF.png",
                "description": "Nagato summons various animals and creatures, dealing 10 damage to all enemies for 2 turns. The following 2 turns, any enemy that uses a new skill on Edo Tensei Nagato will be *dealt 10 piercing damage.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Unique",
                    "Action",
                    "*Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Naraka Path",
                "img": "https://i.imgur.com/dZTXSyj.png",
                "description": "This skill makes Edo Tensei Nagato (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 185,
        "name": "ET Sandaime Raikage (S)",
        "img": "https://i.imgur.com/D5phctx.png",
        "lore": "Edo Tensei Sandaime Raikage (S) is not pleased to be back among the living and forced to do battle. He does however have faith that the new generation of shinobi can defeat him and his peers.",
        "skills": [
            {
                "name": "Four Finger Nukite",
                "img": "https://i.imgur.com/WSNxhnV.png",
                "description": "Edo Tensei Sandaime Raikage (S) uses Four Finger Nukite on one enemy dealing 25 piercing damage*. Edo Tensei Sandaime Raikage (S) gains 25% damage reduction permanently when this skill is used. This skill becomes 'Three Finger Nukite' permanently when used.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Lightning Release Shockwave",
                "img": "https://i.imgur.com/fLVG8pR.png",
                "description": "Using Lightning Release Shockwave Edo Tensei Sandaime Raikage (S) targets one enemy dealing 30 damage. One random enemy will be dealt 30 damage that ignores invulnerability.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "One Finger Nukite Spear",
                "img": "https://i.imgur.com/3ZbkkbG.png",
                "description": "Edo Tensei Sandaime Raikage (S) uses One Finger Nukite Spear on one enemy dealing 50 piercing damage. This skill cannot be countered or reflected.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Immense Speed",
                "img": "https://i.imgur.com/ceyfxM4.png",
                "description": "This skill makes ET Sandaime Raikage (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Three Finger Nukite",
                "img": "https://i.imgur.com/PU4qYK7.jpeg",
                "description": "Using Three Finger Nukite Edo Tensei Sandaime Raikage (S) gains 50% damage reduction permanently. 'One Finger Nukite Spear' can be used on all enemies permanently when this skill is used. This skill can only be used once and cannot be removed.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 186,
        "name": "Edo Tensei Muu (S)",
        "img": "https://i.imgur.com/Ms96j1y.png",
        "lore": "Muu, the Second Tsuchikage, was revived against his will to fight. He is a skilled spy, capable of infiltrating the battlefield undetected, in addition to his Kekkei Touta, the atomic detachment, capable of turning enemies into dust in a matter of moments.",
        "skills": [
            {
                "name": "Fission",
                "img": "https://i.imgur.com/IDYuApM.png",
                "description": "ET Muu grant himself or one ally 50% of unpierceable damage reduction points for 1 turn. During this turn, any enemy that uses a new skill on that ally will receive 5 additional damage from non-affliction skills permanently. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Atomic Detachment",
                "img": "https://i.imgur.com/rUORWDd.png",
                "description": "ET Muu deals 20 damage to one enemy and an additional 15 piercing damage the first turn and 10 piercing damage the following turn. During this time, that enemy's skills will cost 1 additional random chakra. This skill ends if that enemy uses a new skill.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Chameleon Covering",
                "img": "https://i.imgur.com/ssBY4vX.png",
                "description": "ET Muu makes himself or one ally ignore all harmful effects except damage for 1 turn. If the protected character receive a new harmful skill, 'Atomic Detachment1 will cost 2 random chakra for 1 turn. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Sensorial Awareness",
                "img": "https://imgur.com/tFwLc31.jpg",
                "description": "This skill makes Edo Tensei Muu (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 187,
        "name": "ET Nidaime Mizukage (S)",
        "img": "https://i.imgur.com/cvp50Gp.png",
        "lore": "Edo Tensei Nidaime Mizukage (S) has been resurrected against his will to do battle. He does not want to hurt anyone but he is interested in the potential of the new generation. He will test their limits with his own skill.",
        "skills": [
            {
                "name": "Major Summoning: Giant Clam",
                "img": "https://i.imgur.com/2NRqFoY.png",
                "description": "Gengetsu summons a huge clam that exudes illsory mist, granting his team 30 points of destructible defense for 3 turns. Each turn, a random member of his team becoms a mirage, nullyfing the first harmful skill used on them for 1 turn; The target is invisible. This skill ends if Gengetsu is killed.",
                "cooldown": "5",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Hozuki Water Gun",
                "img": "https://i.imgur.com/bUL5aby.png",
                "description": "Gengetsu fires a drop of water like a bullet at one enemy, dealing 20 piercing damage to them. If that enemy's health drops to 10 or less, they will be killed. During 'Major Summoning: Giant Clam', this skill will deal 5 additional damage and wll kill enemy if they health drop 15 or less.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Unique",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Steam Imp",
                "img": "https://i.imgur.com/72ocNVF.png",
                "description": "For 1 turn, Gengetsu makes his team ignore all stun effects. If targetable, all enemies will be dealt 10 affliction damage. During 'Major Summoning: Giant Clam', this skill will last 1 additional turn.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Unique",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Genjutsu Defense",
                "img": "https://i.imgur.com/LDH7bxz.png",
                "description": "This skill makes ET Nidaime Mizukage (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Mirage",
                "img": "https://i.imgur.com/8qD6CUW.png",
                "description": "While 'Major Summoning: Giant Clam' is active, this skill will be applied to a random member of Gengetsu's team. For 1 turn, the target will ignore the first harmful skill used on them. This skill is invisible.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 188,
        "name": "Edo Tensei Itachi (S)",
        "img": "https://i.imgur.com/LtXAnD3.png",
        "lore": "One of the five past Akatsuki members reanimated by Kabuto during the Fourth Shinobi World War, Itachi sees this as an opportunity to pursue his true goals and set things right with Naruto and Sasuke. Freeing himself from Kabuto's shackles, Itachi unleashes the full power of the Uchiha with his deathless body.",
        "skills": [
            {
                "name": "Phoenix Flower Shuriken",
                "img": "https://i.imgur.com/8NnsH3z.png",
                "description": "Itachi unleashes a volley of fire-infused shuriken, dealing 10 affliction damage to all enemies. For 1 turn, if they use a new harmful skill, they will have 'Phoenix Flower Shuriken' re-applied on them.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Demonic Illusion: Mirage Crow",
                "img": "https://i.imgur.com/t9WmNqD.png",
                "description": "For 2 turns, one enemy will be unable to reduce damage or become invulnerable and will take 15 damage each turn. During this time, Itachi will become invulnerable to that enemy's skills.",
                "cooldown": "2",
                "classes": [
                    "Mental",
                    "Melee",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Passive: Edo Tensei Sharingan",
                "img": "https://i.imgur.com/zQmLQIZ.png",
                "description": "Each turn, this skill will randomly switch between 'Izanami', 'Itachi Mangekyou Sharingan', and 'Itachi Kotoamatsukami'. Each of these skills can only be used once per game. This passive is invisible.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Itachi Block",
                "img": "https://i.imgur.com/dRzvq1D.png",
                "description": "This skill makes Edo Tensei Itachi (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Edo Tensei Mangekyou Sharingan",
                "img": "https://i.imgur.com/ULhIp3y.png",
                "description": "This skill can only be used once to apply both 'Amaterasu' and 'Tsukuyomi' on an enemy; This skill ends when Itachi killed. Amaterasu: Deals 15 affliction damage instantly, and 5 affliction permanently. Tsukuyomi: Fully stuns the enemy's skills for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Edo Tensei Kotoamatsukami",
                "img": "https://i.imgur.com/X23a3RH.png",
                "description": "This skill can only be used once to target Itachi or an ally permanently. The next time the marked target's health drops to 5 or less, they will instantly heal to 35 health, and then heal 5 health for the following 3 turns. This skill is invisible until triggered.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Izanami",
                "img": "https://i.imgur.com/tFHZSah.png",
                "description": "This skill can only be used once to target an enemy permanently. The next time that enemy uses a new skill, they will be countered and this skill will end. If successful, the countered skill will be stunned for 3 turns; This duration is increased by the skill's current cooldown. This skill is invisible until triggered.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            }
        ]
    },
    {
        "id": 189,
        "name": "ET Susanoo Itachi (S)",
        "img": "https://i.imgur.com/BpmSm85.png",
        "lore": "Having been reanimated once more, Itachi now manifests the full power of his Susanoo in battle. Shielded by the Yata Mirror and wielding the sealing Totsuka Blade, he becomes a relentless force that blends absolute defense with lethal precision.",
        "skills": [
            {
                "name": "Totsuka Blade Sealing",
                "img": "https://i.imgur.com/W9fEiJG.png",
                "description": "Itachi seals one enemy with his Susanoo's legendary blade, dealing 35 affliction damage to them, removing 1 random chakra and stunning their skills for 1 turn. This skill cannot be countered or reflected. This skill requires 'Edo Tensei Susanoo'.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Interrupting Slice",
                "img": "https://i.imgur.com/W93tUcS.png",
                "description": "Itachi deals 15 piercing damage to one enemy. Permanently, that enemy will deal 5 less non-affliction damage. This skill requires 'Edo Tensei Susanoo'.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Skeletal Blade",
                "img": "https://i.imgur.com/G3fcX2N.png",
                "description": "Using his Susanoo's skeletal blade, Itachi deals 20 piercing damage to them. Permanently, that enemy will receive 5 additional damage from harmful skills. This skill requires 'Edo Tensei Susanoo'.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Edo Tensei Susanoo",
                "img": "https://i.imgur.com/H8rOOB1.png",
                "description": "After this skill is used, the next time Itachi's health drops to 50 or less, Itachi's Susanoo will evolve to the next stage, improving his skills for the following 3 turns. During this time, Itachi's skills will steal health instead. During this time, this skill will be replaced by 'Yasaka Magatama'. Itachi cannot be killed until this skill is triggered.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Yasaka Magatama",
                "img": "https://i.imgur.com/egbsnab.png",
                "description": "Itachi unleashes his strongest long-range technique, dealing 40 piercing damage to all enemies. This skill cannot be countered.",
                "cooldown": "9",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            }
        ]
    },
    {
        "id": 190,
        "name": "Edo Tensei Yota (S)",
        "img": "https://i.imgur.com/CgXEKRN.png",
        "lore": "A young child from a nomadic clan, Yota died at an early age, but was revived through Edo Tensei by Orochimaru and kept alive for years as a test subject. A curious, naïve, and sensitive boy, Yota can manipulate the weather around himself, and is deployed by Kabuto to fight in the Fourth Shinobi World War.",
        "skills": [
            {
                "name": "Weather Manipulation Rain: Water Wave",
                "img": "https://i.imgur.com/DfmBvYh.png",
                "description": "Yota cries, and a sudden wave crashes down on a random enemy, dealing 15 damage to them, and after targets 0 random enemies, dealing 15 damage to each one of them. This skill will target 1 additional random enemy for each 'Rain Stack' that Yota has. Afterwards, Yota gains 1 'Rain Stack'.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Weather Manipulation Rain: Water Spheres",
                "img": "https://i.imgur.com/yxaP0DL.png",
                "description": "Yota gains 15 points of damage reduction* and deals 10 damage to all enemies for 2 turns. Each turn, Yota cries and gains 1 'Rain Stack'. During this time, If Yota is stunned, he will cry even more, gaining 1 additional 'Rain Stack' and healing 10 health.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Action",
                    "Instant*"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Wather Manipulation Lightning",
                "img": "https://i.imgur.com/QsFoxa8.png",
                "description": "Yota sends a devastating lightning strike to obliterate all enemies, dealing 10 affliction damage to them for each 'Rain Stack' Yota currently has.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Yota is happy don't bother him",
                "img": "https://i.imgur.com/YgrzO7k.png",
                "description": "This skill makes Edo Tensei Yota (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Rain Stack",
                "img": "https://i.imgur.com/BjIbSuX.png",
                "description": "Each time Yota cries, he intensifies the rain on the battlefield, gaining 1 Rain Stack and enhancing her skills.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 191,
        "name": "Edo Tensei Jiroubou (S)",
        "img": "https://i.imgur.com/sGSYprG.png",
        "lore": "Reanimated by Kabuto during the Fourth Shinobi World War along with his Sound Four teammates, Jiroubou is back on the battlefield, and is out for blood. With immense brute force through his mastery of the Cursed Seal, as well as his Earth Release and chakra absorption techniques, Jiroubou is a threat to anyone.",
        "skills": [
            {
                "name": "Flying Strike",
                "img": "https://i.imgur.com/Icil0Pf.png",
                "description": "Jiroubou strikes an enemy dealing 25 damage to them and giving them 1 stack of 'Dark Chakra Unseal'.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Boulder Throw",
                "img": "https://i.imgur.com/B07iATg.png",
                "description": "Jiroubou throws a giant rock at the enemy team, dealing 10 damage to them and giving them 1 stack of 'Dark Chakra Unseal'. Aftewards, Jiroubou gains 10 points of permanent destructible defense.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Hostage Kidnapping",
                "img": "https://i.imgur.com/acpc5Qo.png",
                "description": "For 2 turns, Jiroubou kidnaps an enemy, making them ignore all helpful effects and this skill will be replaced by 'Hostage Drain'. This skill will consume all stacks of 'Dark Chakra Unseal' from that enemy to last 1 additional turn per stack consumed.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Jiroubou Bare Hands Block",
                "img": "https://i.imgur.com/UmOZbdx.png",
                "description": "This skill makes Jiroubou invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Hostage Drain",
                "img": "https://i.imgur.com/1NXt95u.png",
                "description": "Jiroubou targets an enemy affected by 'Hostage Kidnapping', stealing 10 health from them and 1 bloodline ou genjutsu chakra, and granting them 1 stack of 'Dark Chakra Unseal'.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Dark Chakra Unseal",
                "img": "https://i.imgur.com/Vao2mMf.png",
                "description": "Enemies affected by 'Dark Chakra Unseal' will receive 5 additional damge from Jiroubou's skills.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 192,
        "name": "Edo Tensei Kidoumaru (S)",
        "img": "https://i.imgur.com/O8NAB9C.png",
        "lore": "Reanimated by Kabuto during the Fourth Shinobi World War along with his Sound Four teammates, Kidoumaru is happy to be back in action and wreaking havoc once again. Terrorizing the battlefield with his many spider-based jutsu, enhanced by his Cursed Seal, Kidoumaru is a menace to all who cross his path.",
        "skills": [
            {
                "name": "The Spider's Web",
                "img": "https://i.imgur.com/3VccTII.png",
                "description": "Kidoumaru enables his skills and targets all enemies permanently. Every time they use a new skill, they will gain 1 'Web Stack'. This skill ignores invulnerability. This skill will be replaced by 'Sticky Golden Arrow'.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sticky Gold Kunai",
                "img": "https://i.imgur.com/fD6raNX.png",
                "description": "Kidoumaru deals 20 piercing damage to one enemy and stuns their non-mental skills for 1 turn. Afterwards, all enemies will be dealt 5 piercing damage for each 'Web Stack' they have.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Giant Spider Web",
                "img": "https://i.imgur.com/nx2XBI9.png",
                "description": "Kidoumaru traps all enemies in a giant web, granting them 1 additional 'Web Stack' and then making them deal 10 less non-affliction damage for 1 turn. This skill cannot be countered.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant",
                    "Ranged",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Curse Mark Third Eye",
                "img": "https://i.imgur.com/32dxZfA.png",
                "description": "Kidoumaru activates his Curse Mark, becoming invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sticky Golden Arrow",
                "img": "https://i.imgur.com/ZdOhLy0.png",
                "description": "Using the Sticky Golden Arrow, Kidoumaru destroys all destructible defense one enemy has and deals 25 piercing damage to them, consuming all 'Web Stack' they have to deal 10 additional damage per stack.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 193,
        "name": "Edo Tensei Sakon (S)",
        "img": "https://i.imgur.com/SZvKvma.png",
        "lore": "Reanimated by Kabuto during the Fourth Shinobi World War along with their Sound Four teammates, Sakon and Ukon relish being on the battlefield once again. Dynamically splitting and merging their bodies through the use of their Cursed Seal, the twins fight as a powerful unit, showing no mercy to anyone.",
        "skills": [
            {
                "name": "Enhanced Gatling Punch",
                "img": "https://i.imgur.com/ZR38u95.png",
                "description": "Sakon rapidly punches one enemy, dealing 20 damage and 15 piercing damage to them. For 1 turn, that enemy deal 15 less non-affliction damage and will be unable to become invulnerable. The following turn, 'Parasite Demon' will be improved and deal 20 affliction damage instead.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Parasite Demon",
                "img": "https://i.imgur.com/gYjh7DV.png",
                "description": "Sakon enters an enemy's body, dealing 20 damage to them and stunning their harmful skills for 1 turn. This skill cannot be used on the same target next turn. The following turn, 'Enhanced Gatling Punch' will deal 5 additional damage.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Summoning: Triple Rashoman",
                "img": "https://i.imgur.com/myrNy2w.png",
                "description": "Sakon summons the walls of triple Rashoman, removing all harmful skills from him and gaining 15 points of destructible defense for every skill he has used in the game. This skill will increase its current cooldown by 1 for every 15 destructible defense granted. These stacks reset when used.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Sakon: Chakra Unseal",
                "img": "https://i.imgur.com/KxXqw14.png",
                "description": "This skill makes Sakon invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 194,
        "name": "Edo Tensei Tayuya (S)",
        "img": "https://i.imgur.com/R7lKGuL.png",
        "lore": "Edo Tensei Tayuya was resurrected by Kabuto as a cruel battlefield conductor, her malice and arrogance undimmed by death. She uses her cursed flute to summon demonic warriors and unravel enemies through sound-based genjutsu and mental pressure. As the fight drags on, her control tightens, turning chaos into a carefully orchestrated nightmare.",
        "skills": [
            {
                "name": "Demonic Melody",
                "img": "https://i.imgur.com/hEktiW3.png",
                "description": "Tayuya deals 10 affliction damage to all enemies for 3 turns. During this time, if they use a new harmful damage skill, Tayuya will steal 5 health from them. The following 3 turns, 'Doki Ghost' will be improved.",
                "cooldown": "3",
                "classes": [
                    "Mental",
                    "Affliction",
                    "Ranged",
                    "Action"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Doki Ghost",
                "img": "https://i.imgur.com/JoDd9Jj.png",
                "description": "Tayuya summons her doki ghosts, dealing 20 affliction damage to one enemy. While improved, this skill will also steal 1 ninjutsu or bloodline chakra.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Affliction",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Summoning: Doki Demons",
                "img": "https://i.imgur.com/3cRtXCn.png",
                "description": "For 1 turn, the first harmful damage skill used on her, or an ally, will be countered. If successful, the countered enemy will be dealt 5 damage and will have their harmfull skills stunned for 1 turn. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Tayuya: Chakra Unseal",
                "img": "https://i.imgur.com/fgDn2Ku.png",
                "description": "This skill makes Edo Tensei Tayuya (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    },
    {
        "id": 195,
        "name": "Edo Tensei Kimimaro (S)",
        "img": "https://i.imgur.com/RsnAqle.png",
        "lore": "Edo Tensei Kimimaro was resurrected by Kabuto as an unfeeling weapon of war, his loyalty and discipline preserved even beyond death. He wields the Shikotsumyaku Kekkei Genkai to turn his own skeleton into blades and armor, growing stronger the longer he remains unbroken. Every strike hardens his defenses, and every moment of restraint builds toward an inevitable, bone-shattering end.",
        "skills": [
            {
                "name": "Bone Rush",
                "img": "https://i.imgur.com/R99hVji.png",
                "description": "Kimimaro rushes one enemy, dealing 20 damage to them and gaining 1 stack of 'Bone Spikes'. This skill will deal 10 additional damage for every 2 stacks of 'Bone Spikes'.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Skeleton Splinters",
                "img": "https://i.imgur.com/zAM5MKp.png",
                "description": "Kimimaro unleashes sharpened bone shards at all enemies, dealing 15 piercing damage to them and gaining 1 stack of 'Bones Spikes'. This skill will deal 5 additional damage for every 2 stacks of 'Bone Spikes'.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Dead Man's Skewer",
                "img": "https://i.imgur.com/Ndsk2qL.png",
                "description": "Kimimaro impales his opponents, dealing 40 piercing damage to one enemy and 15 piercing damage to all other enemies. This skill cannot be countered, and requires at least 4 stacks of 'Bone Spikes' to be used, and all stacks are removed afterwards.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif",
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Shikotsumyaku Guard",
                "img": "https://i.imgur.com/A7hIwUT.png",
                "description": "For 1 turn, he gains 30 points of destructible defense. During this time, any enemy that uses a new non-mental skill on Kimimaro will be dealt 5 piercing damage and Kimimaro will gain 1 stack of 'Bone Spikes'.",
                "cooldown": "2",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Bone Spikes",
                "img": "https://i.imgur.com/Mua5XgZ.png",
                "description": "Every time Kimimaro gains 1 stack of 'Bone Spikes', he will gain 5% unpierceable damage reduction permanently. During this time, any enemy that uses a new non-mental skill on Kimimaro will take 3 piercing damage*. This skill stacks, and cannot be removed.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Instant",
                    "Melee*"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 196,
        "name": "White Snake Kabuto (S)",
        "img": "https://i.imgur.com/5BT5OxV.png",
        "lore": "Following Orochimaru's death at the hands of Sasuke, Kabuto got access to his master's DNA, implanting it in his body and eventually gaining many freakish, snake-like features. In his new form, Kabuto allies himself with Tobi to wage war on the shinobi world, controlling the Edo Tensei forces from the shadows.",
        "skills": [
            {
                "name": "Snake Coil",
                "img": "https://i.imgur.com/RpxvvTS.png",
                "description": "Kabuto uses his snake to coil around an enemy's body, dealing 10 affliction damage to them permanently. During this time, if that enemy uses a new harmful skill, Kabuto will heal 10 health. This skill stacks but will end if used on a different enemy or if Kabuto is killed.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "Edo Tensei Technique",
                "img": "https://i.imgur.com/ZGjSk8L.png",
                "description": "Kabuto deals 25 affliction damage to one enemy and stuns their harmful skills for 1 turn. If that enemy is killed in this turn, they will become an Edo Tensei and will replace one of Kabuto's allies if they die or if they are currently dead, returning them to 35 health. This effect triggers once per game.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant",
                    "Unique",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Edo Tensei Summoning: Akatsuki",
                "img": "https://i.imgur.com/MthPEc2.png",
                "description": "Kabuto gains 60 points of destructible defense, and replaces his skills by the alternate version until it is destroyed.",
                "cooldown": "6",
                "classes": [
                    "Mental",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            },
            {
                "name": "White Snake Awakening",
                "img": "https://i.imgur.com/VsAnPho.png",
                "description": "This skill makes White Snake Kabuto (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Edo Tensei: Clay Clone",
                "img": "https://i.imgur.com/Qxicvxf.png",
                "description": "Kabuto targets one enemy for 1 turn. If that enemy uses a new harmful skill, they will be countered and will be dealt 20 piercing damage. This skill is invisible.",
                "cooldown": "2",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Edo Tensei: Totsuka Blade",
                "img": "https://i.imgur.com/26upARf.png",
                "description": "Kabuto deals 20 piercing damage to one enemy and removes 1 bloodline or genjutsu from them.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Edo Tensei: Flame Mask",
                "img": "https://i.imgur.com/8bGrQGJ.png",
                "description": "Kabuto deals 20 affliction damage to one enemy and stuns their helpful skills for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png"
                ]
            },
            {
                "name": "Edo Tensei: Human Path",
                "img": "https://i.imgur.com/P0LmdlZ.png",
                "description": "Kabuto steals 20 health from one enemy and stuns their harmful skills for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Mental",
                    "Melee",
                    "Instant",
                    "Affliction"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/SJuy2eN.png"
                ]
            }
        ]
    },
    {
        "id": 197,
        "name": "Edo Tensei Fuu (S)",
        "img": "https://i.imgur.com/wHgj9Re.png",
        "lore": "Reanimated by Kabuto during the Fourth Shinobi World War, Fuu has had the Seven-Tails, Choumei, sealed back inside her. Having been made into one of Tobi's new Six Paths of Pain along with the other fallen jinchuuriki, Fuu is under his full control, skillfully utilizing the Seven-Tails' various insect abilities.",
        "skills": [
            {
                "name": "Majestic Sting",
                "img": "https://i.imgur.com/JrP4P5i.png",
                "description": "Fuu deals 15 damage to one enemy. The following turn, that enemy will receive 10 additional damage from Fuu's skills.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Nanabi: Flying Assault",
                "img": "https://i.imgur.com/VsbR0Ol.png",
                "description": "Fuu becomes invulnerable for 1 turn and deals 30 damage to one enemy ignoring invulnerability.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/U4UQ3nb.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Scale Powder Blinding Attack",
                "img": "https://i.imgur.com/Mjx7mLO.png",
                "description": "Fuu deals 10 piercing damage to one enemy and makes them unable to reduce damage or become invulnerable for 1 turn. The following turn, that enemy will take another 10 damage and will be stunned for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Control",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Fuu: Rinnegan Awareness",
                "img": "https://i.imgur.com/wT5hUPK.png",
                "description": "This skill may be used to cast the last skill used by Fuu, costing random chakra and dealing 5 additional damage. Afterwards, the original version of the casted skill will be unable to be used by Fuu for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 198,
        "name": "Edo Tensei Yugito (S)",
        "img": "https://i.imgur.com/MhobEGS.png",
        "lore": "Reanimated by Kabuto during the Fourth Shinobi World War, Yugito has had the Two-Tails, Matatabi, sealed back inside her. Having been made into one of Tobi's new Six Paths of Pain along with the other fallen jinchuuriki, Yugito is under his full control, fighting her foes using the Two-Tails' fiery feline powers.",
        "skills": [
            {
                "name": "Cat Claws",
                "img": "https://i.imgur.com/ryp6AZy.png",
                "description": "Yugito deals 15 damage to one enemy and stuns their non-mental skills for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Fiery Mouse Hairball",
                "img": "https://i.imgur.com/P2Ija8U.png",
                "description": "Yugito deals 15 damage to one enemy and removes 1 taijutsu chakra from them.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Nibi: Rage Punch",
                "img": "https://i.imgur.com/im9yIgr.png",
                "description": "Yugito destroys all destructible defense of one enemy, deals 15 piercing damage to them and kills them if their health drops to 10 or less.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Yugito: Rinnegan Awareness",
                "img": "https://i.imgur.com/72rXM4t.png",
                "description": "This skill makes Edo Tensei Yugito (S) invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Passive: Nibi Awakening",
                "img": "https://i.imgur.com/KvEkWpM.png",
                "description": "Every time Yugito uses a new harmful skill, she gains 10 additional damage, stacking until she stops using new harmful skills. If Yugito passes 2 turns without using a new harmful skill, her skills will cost 1 random chakra for 1 turn. The bonus damage may only stack up to a maximum of 30.",
                "cooldown": "None",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 199,
        "name": "Edo Tensei Yagura (S)",
        "img": "https://i.imgur.com/WE9tSWg.png",
        "lore": "Resurrected through Edo Tensei, Yagura retains perfect control over the Three-Tails' power. His Water Mirror techniques allow him to capture, store, and return enemy techniques with deadly precision, turning an opponent’s own strength against them while remaining nearly untouchable.",
        "skills": [
            {
                "name": "Water Mirror",
                "img": "https://i.imgur.com/fNU1grL.png",
                "description": "Yagura targets an enemy for 3 turns. If that enemy uses a new harmful skill, that skill will be permanently stored by 'Water Mirror' and they will deal 5 non-affliction less damage for 1 turn. This skill is invisiblle, ignores invulnerability and cannot be used on the same target.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Hook Staff Tilt",
                "img": "https://i.imgur.com/Ng9YIrw.png",
                "description": "Yagura casts a random skill stored by 'Water Mirror' on an enemy. The stored skill is removed. This skill may only be used if 'Water Mirror' has at least one skill stored.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png"
                ]
            },
            {
                "name": "Mirror Image",
                "img": "https://i.imgur.com/Iop97co.png",
                "description": "Yagura uses Mirror Image on an enemy, dealing 30 damage to them. For 1 turn, they will deal 5 less non-affliction damage and a random harmful skill from that enemy will be stored by 'Water Mirror'. The following turn, 'Hook Staff Tilt' will cast 2 random skills stored by 'Water Mirror' at once.",
                "cooldown": "1",
                "classes": [
                    "Chakra",
                    "Ranged",
                    "Instant",
                    "Unique"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/oXjj5c8.png",
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Yagura Partial Tailed Beast Mode",
                "img": "https://i.imgur.com/yuakIBi.png",
                "description": "This skill makes Edo Tensei Yagura (S) invulnerable for 1 turn. The following turn, 'Hook Staff Tilt' will be improved and will cost 1 random chakra instead.",
                "cooldown": "5",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            },
            {
                "name": "Reflective Mirror",
                "img": "https://i.imgur.com/hJBCFwa.png",
                "description": "This skill will be activated every time Yagura uses 'Hook Staff Tilt' or 'Mirror Image'. For 1 turn, Yagura will ignore the first harmful physical or chakra skill used on him. If successfully triggered, the ignored skill will be stored by 'Water Mirror'. This skill will be disabled for 2 turns when it's activated.",
                "cooldown": "None",
                "classes": [
                    "Chakra",
                    "Instant"
                ],
                "chakra_cost_images": []
            }
        ]
    },
    {
        "id": 200,
        "name": "Young Kushina",
        "img": "https://i.imgur.com/OVQz2LC.png",
        "lore": "Kushina is a survivor of the Hidden Whirlpool Village's famed Uzumaki clan, and an immigrant into the Hidden Leaf Village after her own village's downfall. Due to her tomboyish and violent nature, and her bright red colored hair, Kushina is known as the \"Red-Hot Habanero\" as she constantly gets into trouble.",
        "skills": [
            {
                "name": "Red-Hot Habanero",
                "img": "https://i.imgur.com/VtqqsxP.png",
                "description": "Kushina uses her strength to protect an ally. The following 4 turns, if Kushina uses 'Fierce Punch' or 'Dropping Kick', the protected ally will heal 10 health and their new harmful skills will deal 5 additional damage for 1 turn. While active, when 'Dropping Kick' is used, Kushina will ignore stun effects for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Mental",
                    "Instant"
                ],
                "chakra_cost_images": []
            },
            {
                "name": "Fierce Punch",
                "img": "https://i.imgur.com/YzbP1gt.png",
                "description": "Kushina deals 20 damage to one enemy. For this turn, if any of Kushina's allies uses a new harmful skill on that enemy, that ally will heal 15 health and that enemy will deal 10 less non-affliction damage for 1 turn.",
                "cooldown": "None",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Dropping Kick",
                "img": "https://i.imgur.com/PUppWRN.png",
                "description": "Kushina deals 10 piercing damage to one enemy. For this turn, if any of Kushina's allies uses a new harmful skill on that enemy, that ally will ignore stun effects and that enemy will be stunned for 1 turn.",
                "cooldown": "1",
                "classes": [
                    "Physical",
                    "Melee",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/vQPPFNB.gif"
                ]
            },
            {
                "name": "Skilled Landing",
                "img": "https://i.imgur.com/HBkwB2B.png",
                "description": "This skill makes Young Kushina invulnerable for 1 turn.",
                "cooldown": "4",
                "classes": [
                    "Physical",
                    "Instant"
                ],
                "chakra_cost_images": [
                    "https://i.imgur.com/nyuJ6Jb.png"
                ]
            }
        ]
    }
];