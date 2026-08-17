const _0x15878f = _0x5cb9;
(function(_0x5e221c, _0x206536) {
    const _0x57f2a2 = _0x5cb9,
        _0x3dd0ef = _0x5e221c();
    while (!![]) {
        try {
            const _0x10caa3 = -parseInt("2415tjIbZo") / 0x1 * (parseInt("250yasGgM") / 0x2) + parseInt("603681MZlpuu") / 0x3 + parseInt("960460mFIvQl") / 0x4 + -parseInt("5eEuAbV") / 0x5 * (-parseInt("1055556SUMABy") / 0x6) + parseInt("14Xwxcho") / 0x7 * (parseInt("1148352LdpOwZ") / 0x8) + -parseInt("27MDpQTA") / 0x9 * (-parseInt("610UTnLfD") / 0xa) + -parseInt("231QWKtlw") / 0xb * (parseInt("234660IjRikF") / 0xc);
            if (_0x10caa3 === _0x206536) break;
            else _0x3dd0ef['push'](_0x3dd0ef['shift']());
        } catch (_0x5858e6) {
            _0x3dd0ef['push'](_0x3dd0ef['shift']());
        }
    }
}(_0x12cd, 0x2ee09));
const _0x19f96e = (function() {
        let _0xdf1992 = !![];
        return function(_0xd6f5bb, _0x48fa75) {
            const _0x55a4c8 = _0xdf1992 ? function() {
                if (_0x48fa75) {
                    const _0x42353c = _0x48fa75['apply'](_0xd6f5bb, arguments);
                    return _0x48fa75 = null, _0x42353c;
                }
            } : function() {};
            return _0xdf1992 = ![], _0x55a4c8;
        };
    }()),
    _0x2a658d = _0x19f96e(this, function() {
        const _0x409b17 = _0x5cb9;
        if (_0x2a658d['bind']()["toString"]()['indexOf']('\x0a') !== -0x1) return;
        return _0x2a658d['toString']()["search"]("(((.+)+)+)+$")['toString']()['constructor'](_0x2a658d)["search"]("(((.+)+)+)+$");
    });
_0x2a658d(), require("dotenv")['config']();
const {
    Client,
    GatewayIntentBits,
    Partials,
    PermissionFlagsBits,
    ChannelType,
    EmbedBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    AttachmentBuilder,
    MessageFlags,
    Options
} = require("discord.js"), {
    encode,
    decode,
    detect
} = require("3y3"), TOKEN = process.env.DISCORD_TOKEN;
if (!TOKEN) throw new Error('DISCORD_TOKEN\x20manquant\x20dans\x20.env');
const client = new Client({
        'intents': [GatewayIntentBits["Guilds"], GatewayIntentBits['GuildMembers'], GatewayIntentBits['GuildMessages'], GatewayIntentBits["MessageContent"], GatewayIntentBits['GuildVoiceStates'], GatewayIntentBits["GuildMessageReactions"]],
        'partials': [Partials["Message"], Partials["Channel"], Partials["Reaction"]],
        'makeCache': Options['cacheWithLimits']({
            'ApplicationCommandManager': 0x0,
            'BaseGuildEmojiManager': 0x0,
            'GuildBanManager': 0x0,
            'GuildEmojiManager': 0x0,
            'GuildForumThreadManager': 0x0,
            'GuildInviteManager': 0x0,
            'GuildMemberManager': 0x64,
            'GuildMessageManager': 0xa,
            'GuildPresenceManager': 0x0,
            'GuildScheduledEventManager': 0x0,
            'GuildStickerManager': 0x0,
            'GuildTextThreadManager': 0x0,
            'MessageManager': 0xa,
            'PresenceManager': 0x0,
            'ReactionManager': 0x0,
            'ReactionUserManager': 0x0,
            'StageInstanceManager': 0x0,
            'ThreadManager': 0x0,
            'ThreadMemberManager': 0x0,
            'UserManager': 0x64,
            'VoiceStateManager': 0x14
        }),
        'sweepers': {
            'messages': {
                'interval': 0x78,
                'lifetime': 0x12c
            }
        }
    }),
    DATA_CHANNEL_ID = process.env.DATA_CHANNEL_ID;
if (!DATA_CHANNEL_ID) throw new Error("DATA_CHANNEL_ID manquant dans .env");
const SUPPORT_URL = 'https://discord.gg/56nyYJUkJd';
const settingsCache = new Map(),
    economyCache = new Map(),
    levelsCache = new Map(),
    reportCache = new Map(),
    reminderCache = new Map(),
    birthdayCache = new Map(),
    warnCache = new Map();
let saveTimer = null;
const pendingSaves = new Set(),
    econSaves = new Set(),
    lvlSaves = new Set(),
    remSaves = new Set(),
    bdaySaves = new Set(),
    warnSaves = new Set(),
    DEFAULTS = {
        'language': 'fr',
        'prefix': '!',
        'welcome': {
            'enabled': ![],
            'channelId': '',
            'leaveChannelId': '',
            'roleId': '',
            'welcomeText': "Bienvenue {user} sur **{server}** !",
            'leaveText': "{user} a quitté **{server}** .",
            'welcomeImage': '',
            'welcomeDM': '',
            'enableDM': ![],
            'leaveEnabled': ![]
        },
        'rules': {
            'enabled': ![],
            'channelId': '',
            'text': 'Respecte\x20les\x20membres,\x20le\x20règlement\x20et\x20les\x20conditions\x20de\x20Discord.',
            'roleId': '',
            'blockAccess': ![]
        },
        'moderation': {
            'enabled': ![],
            'muteRoleId': '',
            'logChannelId': ''
        },
        'autoMod': {
            'enabled': ![],
            'spam': {
                'enabled': ![],
                'maxMessages': 0x5,
                'intervalSeconds': 0x6
            },
            'mentions': {
                'enabled': ![],
                'maxMentions': 0x5
            },
            'links': {
                'enabled': ![]
            },
            'invites': {
                'enabled': ![]
            },
            'insults': {
                'enabled': ![],
                'words': []
            },
            'wordBlacklist': {
                'enabled': ![],
                'words': []
            },
            'raid': {
                'enabled': ![],
                'maxJoins': 0xa,
                'intervalMinutes': 0x5
            },
            'recentAccounts': {
                'enabled': ![],
                'maxDays': 0x7
            },
            'botProtection': {
                'enabled': ![]
            },
            'actions': {
                'spam': "delete",
                'mentions': 'delete',
                'links': 'delete',
                'invites': 'delete',
                'insults': 'delete',
                'wordBlacklist': 'delete',
                'raid': "kick",
                'recentAccounts': 'kick',
                'botProtection': 'kick'
            },
            'autoWarn': !![],
            'exemptRoles': [],
            'exemptChannels': [],
            'exemptMembers': []
        },
        'security': {
            'enabled': ![],
            'antiLinks': ![],
            'antiInvites': ![],
            'antiSpam': ![],
            'maxMessages': 0x5,
            'intervalSeconds': 0x6,
            'mentionLimit': 0x5,
            'logChannelId': ''
        },
        'roles': {
            'enabled': ![],
            'panels': []
        },
        'tempVoices': {
            'enabled': ![],
            'lobbyId': '',
            'nameFormat': "Salon de {user}",
            'userLimit': 0x0,
            'bitrate': 0xfa00
        },
        'autoRole': {
            'enabled': ![],
            'roleId': '',
            'assignOnJoin': !![],
            'conditions': ''
        },
        'economy': {
            'enabled': ![],
            'rankChannel': '',
            'dailyAmount': 0x64,
            'dailyCooldown': 0x18,
            'xpPerMsg': 0xf,
            'coinPerMsg': 0x5,
            'rewards': []
        },
        'levels': {
            'enabled': ![],
            'channelId': '',
            'xpPerMessage': 0xf,
            'scalingFactor': 0x1,
            'rewards': [],
            'message': ''
        },
        'wordReactions': {
            'enabled': ![],
            'items': []
        },
        'recurringMessages': {
            'enabled': ![],
            'items': []
        },
        'announcements': {
            'enabled': ![],
            'channelId': '',
            'message': '',
            'pingRoleId': "1528409629493690398"
        },
        'socialNotifs': {
            'enabled': ![],
            'channelId': ''
        },
        'calendar': {
            'enabled': ![],
            'items': []
        },
        'shop': {
            'enabled': ![],
            'items': []
        },
        'giveaways': {
            'enabled': ![],
            'channelId': '',
            'items': []
        },
        'birthdays': {
            'enabled': ![],
            'roleId': '',
            'channelId': ''
        },
        'polls': {
            'enabled': ![],
            'channelId': ''
        },
        'logs': {
            'enabled': ![],
            'channelId': ''
        },
        'ticket': {
            'enabled': ![],
            'channelId': '',
            'categoryId': '',
            'supportRoleIds': [],
            'reasons': []
        },
        'recruitment': {
            'enabled': ![],
            'channelId': '',
            'categoryId': '',
            'supportRoleIds': [],
            'reasons': [],
            'recruitMessage': ''
        },
        'captcha': {
            'enabled': ![],
            'channelId': '',
            'categoryId': '',
            'unverifiedRoleId': '',
            'verifiedRoleId': '',
            'logChannelId': '',
            'rulesChannelId': ''
        },
        'serverCreator': {
            'template': {
                'categories': []
            }
        },
        'maintenance': {
            'enabled': ![],
            'channelIds': []
        },
        'permissions': {
            'enabled': ![]
        },
        'customization': {
            'enabled': ![]
        },
        'database': {
            'enabled': ![]
        },
        'autoSanctions': {
            'enabled': ![],
            'warningsBeforeTimeout': 0x3,
            'timeoutMinutes': 0xa,
            'warningsBeforeKick': 0x5,
            'warningsBeforeBan': 0x7,
            'resetOnAction': !![]
        },
        'antiRaid': {
            'enabled': ![]
        },
        'antiBot': {
            'enabled': ![]
        },
        'antiRecentAccounts': {
            'enabled': ![],
            'maxDays': 0x7
        },
        'antiMentions': {
            'enabled': ![],
            'maxMentions': 0x5
        },
        'antiInsults': {
            'enabled': ![]
        },
        'whitelist': {
            'enabled': ![],
            'channels': []
        },
        'blacklist': {
            'enabled': ![],
            'words': []
        },
        'tempRoles': {
            'enabled': ![],
            'items': []
        },
        'suggestions': {
            'enabled': ![],
            'channelId': ''
        },
        'leaderboard': {
            'enabled': ![],
            'channelId': ''
        },
        'rewards': {
            'enabled': ![],
            'items': []
        },
        'inventory': {
            'enabled': ![]
        },
        'maintenanceConfig': {
            'enabled': ![]
        }
    },
    copy = _0x3a47b7 => JSON["parse"](JSON['stringify'](_0x3a47b7));

function settings(_0x23209f) {
    const _0x360d5c = _0x15878f,
        _0x475ac1 = String(_0x23209f),
        _0x2de431 = settingsCache['get'](_0x475ac1),
        _0x33071b = _0x2de431 ? _0x2de431["data"] : {};
    _0x33071b["tickets"] && !_0x33071b['ticket'] && (_0x33071b["ticket"] = _0x33071b["tickets"], delete _0x33071b["tickets"]);
    _0x33071b['modLogs'] && (!_0x33071b["logs"] || !_0x33071b["logs"]['channelId']) && (_0x33071b["logs"] = {
        'enabled': _0x33071b['modLogs']['enabled'],
        'channelId': _0x33071b["modLogs"]['channelId'] || ''
    });
    if (_0x33071b['modLogs']) delete _0x33071b["modLogs"];
    if (_0x33071b["autoMod"] && _0x33071b['security']) {
        const _0x4c170f = _0x33071b["security"];
        if (!_0x33071b['autoMod']['spam']) _0x33071b['autoMod']['spam'] = {
            'enabled': !!_0x4c170f['antiSpam'],
            'maxMessages': _0x4c170f['maxMessages'] || 0x5,
            'intervalSeconds': _0x4c170f["intervalSeconds"] || 0x6
        };
        if (!_0x33071b["autoMod"]['mentions']) _0x33071b['autoMod']["mentions"] = {
            'enabled': !!(_0x33071b['antiMentions'] && _0x33071b["antiMentions"]['enabled']),
            'maxMentions': _0x33071b['antiMentions'] && _0x33071b['antiMentions']["maxMentions"] || 0x5
        };
        if (!_0x33071b["autoMod"]["links"]) _0x33071b["autoMod"]["links"] = {
            'enabled': !!_0x4c170f['antiLinks']
        };
        if (!_0x33071b['autoMod']['invites']) _0x33071b['autoMod']["invites"] = {
            'enabled': !!_0x4c170f["antiInvites"]
        };
        if (!_0x33071b["autoMod"]['insults'] && _0x33071b["antiInsults"]) _0x33071b['autoMod']['insults'] = {
            'enabled': !!_0x33071b['antiInsults']['enabled'],
            'words': []
        };
        if (!_0x33071b['autoMod']['raid'] && _0x33071b["antiRaid"]) _0x33071b['autoMod']["raid"] = {
            'enabled': !!_0x33071b['antiRaid']["enabled"],
            'maxJoins': 0xa,
            'intervalMinutes': 0x5
        };
        if (!_0x33071b['autoMod']['recentAccounts'] && _0x33071b["antiRecentAccounts"]) _0x33071b["autoMod"]['recentAccounts'] = {
            'enabled': !!_0x33071b['antiRecentAccounts']["enabled"],
            'maxDays': _0x33071b["antiRecentAccounts"]["maxDays"] || 0x7
        };
        if (!_0x33071b["autoMod"]["botProtection"] && _0x33071b['antiBot']) _0x33071b['autoMod']['botProtection'] = {
            'enabled': !!_0x33071b["antiBot"]["enabled"]
        };
        if (!_0x33071b["autoMod"]["wordBlacklist"] && _0x33071b["blacklist"]) _0x33071b['autoMod']["wordBlacklist"] = {
            'enabled': !!_0x33071b['blacklist']['enabled'],
            'words': Array["isArray"](_0x33071b["blacklist"]["words"]) ? _0x33071b["blacklist"]["words"] : []
        };
        if (_0x4c170f['enabled'] && !_0x33071b['autoMod']['enabled']) _0x33071b['autoMod']["enabled"] = !![];
    }
    for (const _0x3c1608 of ['antiRaid', "antiBot", "antiRecentAccounts", 'antiMentions', 'antiInsults', 'whitelist', "blacklist"]) delete _0x33071b[_0x3c1608];
    if (_0x2de431 && _0x2de431["_merged"] !== undefined) return _0x2de431["_lastAccess"] = Date["now"](), _0x2de431["_merged"];
    const _0x20ad98 = merge(copy(DEFAULTS), _0x33071b);
    return _0x2de431 && (_0x2de431['_merged'] = _0x20ad98, _0x2de431["_lastAccess"] = Date['now']()), _0x20ad98;
}

function merge(_0x51b2da, _0x36d5b9) {
    const _0xbee79d = _0x15878f;
    for (const [_0x13a63a, _0x3b8de9] of Object["entries"](_0x36d5b9 || {})) {
        if (_0x3b8de9 && typeof _0x3b8de9 === "object" && !Array["isArray"](_0x3b8de9) && _0x51b2da[_0x13a63a] && typeof _0x51b2da[_0x13a63a] === "object") merge(_0x51b2da[_0x13a63a], _0x3b8de9);
        else _0x51b2da[_0x13a63a] = _0x3b8de9;
    }
    return _0x51b2da;
}

function save(_0x4153ae, _0x218ecc) {
    const _0x3f4e5a = _0x15878f,
        _0x4a4964 = String(_0x4153ae),
        _0x1a37cd = settingsCache['get'](_0x4a4964) || {};
    delete _0x1a37cd['_merged'], _0x1a37cd["data"] = _0x218ecc, settingsCache['set'](_0x4a4964, _0x1a37cd), pendingSaves['add'](_0x4a4964);
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(flushSaves, 0x7d0);
}
async function flushSaves() {
    const _0x13ea7e = _0x15878f,
        _0x2bd137 = [...pendingSaves];
    pendingSaves["clear"](), saveTimer = null;
    try {
        const _0x301f1f = await client['channels']["fetch"](DATA_CHANNEL_ID)['catch'](() => null);
        if (!_0x301f1f) return;
        for (const _0x3b38fb of _0x2bd137) {
            const _0xb83a90 = settingsCache['get'](_0x3b38fb);
            if (!_0xb83a90) continue;
            const _0x4e410a = _0x3b38fb + '\x20' + encode(JSON['stringify'](_0xb83a90["data"]));
            if (_0xb83a90["messageId"]) {
                const _0x151ba4 = await _0x301f1f['messages']["fetch"](_0xb83a90["messageId"])['catch'](() => null);
                if (_0x151ba4) await _0x151ba4['edit'](_0x4e410a)["catch"](() => {});
                else {
                    const _0x1107f3 = await _0x301f1f['send'](_0x4e410a);
                    _0xb83a90['messageId'] = _0x1107f3['id'];
                }
            } else {
                const _0x320f2b = await _0x301f1f['send'](_0x4e410a);
                _0xb83a90["messageId"] = _0x320f2b['id'];
            }
        }
    } catch (_0x27bfaf) {
        console['error']('[save-error]', _0x27bfaf['message']);
    }
}
async function loadAllSettings() {
    const _0x5521a2 = _0x15878f,
        _0x1ca50b = await client["channels"]["fetch"](DATA_CHANNEL_ID)["catch"](() => null);
    if (!_0x1ca50b) {
        console['error']('[load]\x20DATA_CHANNEL\x20introuvable');
        return;
    }
    let _0x1cce81 = [],
        _0x55a542;
    while (!![]) {
        const _0x2402c9 = {
            'limit': 0x64
        };
        if (_0x55a542) _0x2402c9["before"] = _0x55a542;
        const _0x4e152e = await _0x1ca50b['messages']["fetch"](_0x2402c9)["catch"](() => null);
        if (!_0x4e152e || !_0x4e152e['size']) break;
        _0x1cce81["push"](..._0x4e152e["values"]());
        if (_0x4e152e['size'] < 0x64) break;
        _0x55a542 = _0x4e152e['last']()['id'];
    }
    for (const _0x52b86d of _0x1cce81) {
        const _0x512bb = _0x52b86d["content"]['indexOf']('\x20');
        if (_0x512bb === -0x1) continue;
        const _0x49cbc8 = _0x52b86d["content"]['slice'](0x0, _0x512bb),
            _0x3fdbd1 = _0x52b86d['content']["slice"](_0x512bb + 0x1);
        if (detect(_0x3fdbd1)) try {
            settingsCache['set'](_0x49cbc8, {
                'messageId': _0x52b86d['id'],
                'data': JSON["parse"](decode(_0x3fdbd1))
            });
        } catch (_0x52b05c) {
            console["error"]("[load] Erreur guild", _0x49cbc8, _0x52b05c['message']);
        }
    }
    console["log"]("[DashBot] " + settingsCache["size"] + '\x20configuration(s)\x20chargées\x20depuis\x20Discord');
}
async function loadEconLevels() {
    const _0x1a9b3b = _0x15878f,
        _0x124547 = await client["channels"]['fetch'](DATA_CHANNEL_ID)['catch'](() => null);
    if (!_0x124547) return;
    let _0x4bf330;
    while (!![]) {
        const _0x3661cf = {
            'limit': 0x64
        };
        if (_0x4bf330) _0x3661cf["before"] = _0x4bf330;
        const _0x1206b1 = await _0x124547['messages']["fetch"](_0x3661cf)['catch'](() => null);
        if (!_0x1206b1 || !_0x1206b1["size"]) break;
        for (const _0x52a328 of _0x1206b1["values"]()) {
            const _0x253b40 = _0x52a328["content"]["indexOf"]('\x20');
            if (_0x253b40 === -0x1) continue;
            const _0x26d6b4 = _0x52a328["content"]['slice'](0x0, _0x253b40),
                _0x6c30f6 = _0x52a328["content"]["slice"](_0x253b40 + 0x1);
            if (!detect(_0x6c30f6)) continue;
            try {
                const _0x25e0c8 = JSON['parse'](decode(_0x6c30f6));
                if (_0x26d6b4['startsWith']("econ:")) economyCache['set'](_0x26d6b4['slice'](0x5), {
                    'messageId': _0x52a328['id'],
                    'data': _0x25e0c8
                });
                if (_0x26d6b4["startsWith"]("lvl:")) levelsCache['set'](_0x26d6b4["slice"](0x4), {
                    'messageId': _0x52a328['id'],
                    'data': _0x25e0c8
                });
                if (_0x26d6b4["startsWith"]('rem:')) {
                    const _0xa36cb1 = _0x26d6b4["slice"](0x4);
                    if (_0xa36cb1) reminderCache["set"](_0xa36cb1, {
                        'messageId': _0x52a328['id'],
                        'data': Array["isArray"](_0x25e0c8) ? _0x25e0c8 : []
                    });
                }
                if (_0x26d6b4['startsWith']("bday:")) {
                    const _0x2f0c2d = _0x26d6b4["slice"](0x5);
                    if (_0x2f0c2d) birthdayCache['set'](_0x2f0c2d, {
                        'messageId': _0x52a328['id'],
                        'data': _0x25e0c8
                    });
                }
                if (_0x26d6b4['startsWith']("warn:")) {
                    const _0x46f66a = _0x26d6b4["slice"](0x5);
                    if (_0x46f66a) warnCache['set'](_0x46f66a, {
                        'messageId': _0x52a328['id'],
                        'data': _0x25e0c8
                    });
                }
            } catch (_0x3c1ddc) {}
        }
        if (_0x1206b1["size"] < 0x64) break;
        _0x4bf330 = _0x1206b1["last"]()['id'];
    }
}
async function flushEcon() {
    const _0x194af1 = _0x15878f,
        _0x3a2e0b = [...econSaves];
    econSaves["clear"]();
    const _0x48240d = await client['channels']["fetch"](DATA_CHANNEL_ID)['catch'](() => null);
    if (!_0x48240d) return;
    for (const _0x5960af of _0x3a2e0b) {
        const _0xa3511 = economyCache['get'](_0x5960af);
        if (!_0xa3511) continue;
        const _0x58b7d5 = "econ:" + _0x5960af + '\x20' + encode(JSON["stringify"](_0xa3511['data']));
        if (_0xa3511['messageId']) {
            const _0x3a5f5f = await _0x48240d['messages']["fetch"](_0xa3511['messageId'])["catch"](() => null);
            if (_0x3a5f5f) await _0x3a5f5f["edit"](_0x58b7d5)["catch"](() => {});
            else {
                const _0xc68d2a = await _0x48240d['send'](_0x58b7d5);
                _0xa3511["messageId"] = _0xc68d2a['id'];
            }
        } else {
            const _0x5bff66 = await _0x48240d["send"](_0x58b7d5);
            _0xa3511['messageId'] = _0x5bff66['id'];
        }
    }
}
async function flushLevels() {
    const _0x20a58a = _0x15878f,
        _0x5e362b = [...lvlSaves];
    lvlSaves['clear']();
    const _0x4808a3 = await client["channels"]['fetch'](DATA_CHANNEL_ID)["catch"](() => null);
    if (!_0x4808a3) return;
    for (const _0x29400b of _0x5e362b) {
        const _0x5b5702 = levelsCache["get"](_0x29400b);
        if (!_0x5b5702) continue;
        const _0x4c34fb = "lvl:" + _0x29400b + '\x20' + encode(JSON["stringify"](_0x5b5702['data']));
        if (_0x5b5702['messageId']) {
            const _0xba9dd1 = await _0x4808a3["messages"]["fetch"](_0x5b5702['messageId'])["catch"](() => null);
            if (_0xba9dd1) await _0xba9dd1["edit"](_0x4c34fb)['catch'](() => {});
            else {
                const _0x3dc6c = await _0x4808a3["send"](_0x4c34fb);
                _0x5b5702['messageId'] = _0x3dc6c['id'];
            }
        } else {
            const _0x380018 = await _0x4808a3['send'](_0x4c34fb);
            _0x5b5702['messageId'] = _0x380018['id'];
        }
    }
}
async function flushReminders() {
    const _0x2a62d1 = _0x15878f,
        _0xa398ac = [...remSaves];
    remSaves['clear']();
    const _0x1e9d1a = await client["channels"]["fetch"](DATA_CHANNEL_ID)['catch'](() => null);
    if (!_0x1e9d1a) return;
    for (const _0x5881a6 of _0xa398ac) {
        const _0x557212 = reminderCache['get'](_0x5881a6);
        if (!_0x557212) continue;
        const _0x14e012 = 'rem:' + _0x5881a6 + '\x20' + encode(JSON["stringify"](_0x557212['data']));
        if (_0x557212["messageId"]) {
            const _0x292a9a = await _0x1e9d1a["messages"]['fetch'](_0x557212["messageId"])["catch"](() => null);
            if (_0x292a9a) await _0x292a9a['edit'](_0x14e012)['catch'](() => {});
            else {
                const _0x225095 = await _0x1e9d1a['send'](_0x14e012);
                _0x557212['messageId'] = _0x225095['id'];
            }
        } else {
            const _0x431ba2 = await _0x1e9d1a["send"](_0x14e012);
            _0x557212['messageId'] = _0x431ba2['id'];
        }
    }
}
async function flushBirthdays() {
    const _0x5ed53e = _0x15878f,
        _0x43791c = [...bdaySaves];
    bdaySaves['clear']();
    const _0x15ec3d = await client["channels"]['fetch'](DATA_CHANNEL_ID)["catch"](() => null);
    if (!_0x15ec3d) return;
    for (const _0x2373a4 of _0x43791c) {
        const _0x3d3a3e = birthdayCache["get"](_0x2373a4);
        if (!_0x3d3a3e) continue;
        const _0x59f815 = 'bday:' + _0x2373a4 + '\x20' + encode(JSON["stringify"](_0x3d3a3e["data"]));
        if (_0x3d3a3e["messageId"]) {
            const _0x5244d2 = await _0x15ec3d['messages']["fetch"](_0x3d3a3e['messageId'])['catch'](() => null);
            if (_0x5244d2) await _0x5244d2['edit'](_0x59f815)['catch'](() => {});
            else {
                const _0x408740 = await _0x15ec3d["send"](_0x59f815);
                _0x3d3a3e["messageId"] = _0x408740['id'];
            }
        } else {
            const _0x3dd6ff = await _0x15ec3d['send'](_0x59f815);
            _0x3d3a3e['messageId'] = _0x3dd6ff['id'];
        }
    }
}
async function flushWarns() {
    const _0x35c2c6 = _0x15878f,
        _0x3cc059 = [...warnSaves];
    warnSaves['clear']();
    const _0x4bcf2e = await client['channels']["fetch"](DATA_CHANNEL_ID)["catch"](() => null);
    if (!_0x4bcf2e) return;
    for (const _0x458a67 of _0x3cc059) {
        const _0x3560c0 = warnCache["get"](_0x458a67);
        if (!_0x3560c0) continue;
        const _0x43af7d = "warn:" + _0x458a67 + '\x20' + encode(JSON["stringify"](_0x3560c0["data"]));
        if (_0x3560c0['messageId']) {
            const _0x1d4e0f = await _0x4bcf2e["messages"]["fetch"](_0x3560c0["messageId"])["catch"](() => null);
            if (_0x1d4e0f) await _0x1d4e0f['edit'](_0x43af7d)["catch"](() => {});
            else {
                const _0x4d318b = await _0x4bcf2e["send"](_0x43af7d);
                _0x3560c0['messageId'] = _0x4d318b['id'];
            }
        } else {
            const _0x5b17b9 = await _0x4bcf2e['send'](_0x43af7d);
            _0x3560c0["messageId"] = _0x5b17b9['id'];
        }
    }
}

function getEcon(_0x58ffc8) {
    const _0x159fd9 = _0x15878f,
        _0x4ac687 = String(_0x58ffc8);
    let _0xeb3b8e = economyCache['get'](_0x4ac687);
    return !_0xeb3b8e && (_0xeb3b8e = {
        'data': {}
    }, economyCache["set"](_0x4ac687, _0xeb3b8e)), _0xeb3b8e["data"];
}

function getLevels(_0x3b46cc) {
    const _0x26a230 = _0x15878f,
        _0xb6db6d = String(_0x3b46cc);
    let _0x500312 = levelsCache['get'](_0xb6db6d);
    return !_0x500312 && (_0x500312 = {
        'data': {}
    }, levelsCache["set"](_0xb6db6d, _0x500312)), _0x500312["data"];
}

function saveEcon(_0xdc4c7c) {
    const _0x2c58c4 = _0x15878f;
    econSaves["add"](String(_0xdc4c7c));
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
        flushEcon();
    }, 0xbb8);
}

function saveLevels(_0x45f73f) {
    const _0x4a5ef1 = _0x15878f;
    lvlSaves["add"](String(_0x45f73f));
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
        flushLevels();
    }, 0xbb8);
}

function getReminders(_0x25d40b) {
    const _0xce942d = _0x15878f,
        _0x483770 = String(_0x25d40b);
    let _0x5f041c = reminderCache['get'](_0x483770);
    return !_0x5f041c && (_0x5f041c = {
        'data': []
    }, reminderCache["set"](_0x483770, _0x5f041c)), _0x5f041c["data"];
}

function saveReminders(_0x354f7c) {
    remSaves['add'](String(_0x354f7c));
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(flushReminders, 0xbb8);
}

function getBirthdays(_0x5573f4) {
    const _0x341d5b = _0x15878f,
        _0x55dee8 = String(_0x5573f4);
    let _0x29ec3c = birthdayCache["get"](_0x55dee8);
    return !_0x29ec3c && (_0x29ec3c = {
        'data': {}
    }, birthdayCache['set'](_0x55dee8, _0x29ec3c)), _0x29ec3c['data'];
}

function saveBirthdays(_0x50a15e) {
    const _0x2a4822 = _0x15878f;
    bdaySaves["add"](String(_0x50a15e));
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(flushBirthdays, 0xbb8);
}

function getWarns(_0x2c29a8) {
    const _0x312456 = _0x15878f,
        _0x244140 = String(_0x2c29a8);
    let _0xd1f1d4 = warnCache['get'](_0x244140);
    return !_0xd1f1d4 && (_0xd1f1d4 = {
        'data': {}
    }, warnCache['set'](_0x244140, _0xd1f1d4)), _0xd1f1d4["data"];
}

function saveWarns(_0x15db92) {
    const _0x1091ac = _0x15878f;
    warnSaves["add"](String(_0x15db92));
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(flushWarns, 0xbb8);
}

function tr(_0x263535, _0x4b0f92) {
    const _0x5c93cc = _0x15878f,
        _0x339bea = {
            'home': "Configuration DashBot",
            'choose': 'Choisis\x20un\x20module\x20à\x20configurer',
            'general': 'Général',
            'moderation': "Modération",
            'welcome': "Processus d'accueils",
            'rules': "Règlement",
            'security': "Sécurité",
            'welcomeArrival': 'Arrivée',
            'welcomeDeparture': "Départ",
            'welcomeRules': "Règlement",
            'welcomeCaptcha': 'Captcha',
            'welcomeAutorole': "Rôle automatique",
            'roles': 'Rôles\x20réaction',
            'voices': 'Vocaux\x20temporaires',
            'logs': 'Logs',
            'permissions': "Permissions",
            'customization': 'Personnalisation',
            'database': "Base de données",
            'autoSanctions': "Sanctions automatiques",
            'warningsBeforeTimeout': 'Avertissements\x20avant\x20timeout',
            'timeoutMinutes': "Durée du timeout (min)",
            'warningsBeforeKick': "Avertissements avant expulsion",
            'warningsBeforeBan': 'Avertissements\x20avant\x20bannissement',
            'logBans': "Bannissements",
            'logKicks': 'Expulsions',
            'logTimeouts': 'Timeouts',
            'logWarns': 'Avertissements',
            'logMsgDelete': "Suppressions de messages",
            'logMsgEdit': 'Modifications\x20de\x20messages',
            'logChannelUpdate': 'Modifications\x20de\x20salons',
            'antiSpam': "Anti-spam",
            'antiLinks': 'Anti-liens',
            'antiInvites': 'Anti-invitations',
            'antiRaid': "Anti-raid",
            'antiBot': 'Anti-bot',
            'antiRecentAccounts': 'Anti-comptes\x20récents',
            'antiMentions': 'Anti-mentions',
            'antiInsults': "Anti-insultes",
            'antiBlacklist': "Anti-mots interdits",
            'whitelist': 'Whitelist',
            'blacklist': 'Blacklist',
            'maintenanceConfig': 'Mode\x20maintenance',
            'modLogs': 'Logs\x20de\x20modération',
            'protectionFiltres': 'Filtres\x20de\x20protection',
            'autoMod': 'AutoModération',
            'autoModDesc': 'Système\x20de\x20protection\x20automatique\x20configurable.\x20Détecte\x20les\x20comportements\x20abusifs\x20et\x20applique\x20des\x20sanctions\x20progressives.',
            'autoWarn': 'Auto-avertir',
            'exceptions': 'Exceptions',
            'exemptRoles': "Rôles exemptés",
            'exemptChannels': "Salons exemptés",
            'exemptMembers': "Membres exemptés",
            'maxJoins': 'Arrivées\x20max',
            'intervalMinutes': "Intervalle (min)",
            'maxDays': 'Jours\x20max',
            'wordList': 'Mots',
            'enableAll': 'Tout\x20activer',
            'disableAll': 'Tout\x20désactiver',
            'tempRoles': 'Rôles\x20temporaires',
            'suggestions': 'Suggestions',
            'leaderboard': 'Classement',
            'rewards': 'Récompenses',
            'inventory': "Inventaire",
            'enabled': "Activé",
            'disabled': "Désactivé",
            'back': 'Retour',
            'language': 'Langue',
            'prefix': 'Préfixe',
            'edit': 'Modifier',
            'channel': 'Salon',
            'create': 'Créer',
            'send': 'Envoyer',
            'setup': "Installer",
            'noChannel': "Non défini",
            'saved': "Configuration enregistrée.",
            'admin': 'Administrateur\x20requis.',
            'dashboard': '⚙️\x20DashBot\x20—\x20Tableau\x20de\x20bord',
            'dashboardDesc': "Bienvenue dans le centre de gestion de **{server}**.\n{choose}",
            'botLabel': "🤖 Bot",
            'botStatus': 'En\x20ligne\x20et\x20prêt\x20à\x20gérer\x20le\x20serveur.',
            'settingsLabel': '🌐\x20Réglages',
            'langLabel': 'Langue',
            'prefixLabel': 'Préfixe',
            'serverLabel': "👥 Serveur",
            'members': 'Membres',
            'idLabel': 'ID',
            'modulesLabel': '🛡️\x20Modules',
            'serverConfig': "DashBot • Configuration du serveur",
            'prefixDesc': 'Le\x20préfixe\x20donne\x20accès\x20à\x20`{prefix}config`,\x20`{prefix}help`,\x20`{prefix}warn`,\x20`{prefix}clear`.',
            'titleLabel': "Titre",
            'descLabel': "Description",
            'colorLabel': 'Couleur',
            'thumbnailLabel': "Miniature",
            'configured': 'Configurée',
            'imageLabel': "Image / bannière",
            'modLogs': "Logs de modération",
            'muteRole': 'Rôle\x20muet',
            'commandsLabel': 'Commandes',
            'createLogsBtn': 'Créer\x20les\x20logs',
            'muteRoleBtn': "Rôle muet",
            'arrivals': "Arrivées",
            'departures': 'Départs',
            'autoRole': "Rôle automatique",
            'variables': "Variables",
            'auto': 'Auto',
            'antiLinks': "Anti-liens",
            'antiInvites': 'Anti-invitations',
            'antiSpamLabel': "Anti-spam",
            'maxMentions': "Mentions max",
            'secLogs': 'Logs\x20sécurité',
            'createPanel': 'Créer\x20un\x20panneau',
            'noPanels': "Aucun panneau.",
            'addRole': 'Ajouter\x20un\x20rôle',
            'addChannel': 'Ajouter\x20un\x20salon',
            'addMember': "Ajouter un membre",
            'panel': "Panneau",
            'panels': 'Panneaux',
            'selectPanel': 'Sélectionner\x20un\x20panneau',
            'listBtn': 'Liste',
            'lobbyChannel': "Salon public de création",
            'createdCategory': 'Catégorie\x20des\x20salons\x20créés',
            'name': "Nom",
            'limit': 'Limite',
            'unlimited': "Illimitée",
            'lobby': "Salon public",
            'category': 'Catégorie',
            'voiceSetup': 'Configurer\x20automatiquement',
            'voiceSetupDone': 'Vocaux\x20temporaires\x20configurés.',
            'logsCount': "salons de logs configurés dans",
            'logsCat': "la catégorie DashBot Logs",
            'logsAuto': "Tous les événements (modération, arrivées, départs, messages, vocaux, rôles, salons, tickets, sécurité, etc.) sont envoyés dans un seul salon de logs.",
            'completeLogs': 'Compléter\x20les\x20logs',
            'deactivate': "Désactiver",
            'activate': "Activer",
            'noChannelCompat': 'Aucun\x20salon\x20compatible.',
            'noRoles': "Aucun rôle.",
            'chooseChannel': "Choisis un salon :",
            'selectChannel': "Sélectionner un salon",
            'noRoleCompat': 'Aucun\x20rôle\x20compatible.',
            'chooseRole': "Choisis un rôle :",
            'selectRole': 'Sélectionner\x20un\x20rôle',
            'serverOnly': "Cette commande est disponible uniquement sur un serveur.",
            'interactionOnly': 'Cette\x20interaction\x20est\x20disponible\x20uniquement\x20sur\x20un\x20serveur.',
            'helpDesc': "Utilise `/config` pour administrer le serveur.",
            'logsCreated': "Logs créés automatiquement. Le module utilise désormais",
            'setupLogsDone': 'Catégorie\x20et\x2010\x20salons\x20de\x20logs\x20distincts\x20créés.',
            'prefixError': "Le préfixe doit faire entre 1 et 5 caractères.",
            'titleField': 'Titre',
            'descriptionField': "Description",
            'colorHex': 'Couleur\x20hex\x20(#5865F2)',
            'thumbnailUrl': 'URL\x20miniature',
            'imageUrl': "URL image / bannière",
            'welcomeMsg': 'Message\x20d\x27arrivée',
            'leaveMsg': 'Message\x20de\x20départ',
            'rulesText': "Texte du règlement",
            'maxMessages': 'Messages\x20maximum',
            'spamWindow': "Fenêtre anti-spam (secondes)",
            'maxMentionsField': "Mentions maximum",
            'antiLinksField': "Anti-liens (oui/non)",
            'antiInvitesField': 'Anti-invitations\x20(oui/non)',
            'nameFormat': "Nom ({user})",
            'limitField': "Limite (0 = illimitée)",
            'configureRulesChannel': 'Configure\x20un\x20salon\x20textuel\x20pour\x20le\x20règlement.',
            'rulesSent': 'Règlement\x20envoyé.',
            'serverRules': "Règlement du serveur",
            'prefixUse': 'Utilise',
            'usage': 'Utilisation\x20:',
            'warned': 'a\x20été\x20averti.',
            'noReason': 'Sans\x20raison',
            'mutedFor': 'mute\x20pour',
            'minutes': 'minute(s)',
            'notMuted': "n'est plus mute.",
            'welcomeTitle': "👋 Bienvenue !",
            'goodbyeTitle': '🚪\x20Au\x20revoir',
            'welcomeImageField': 'Image\x20de\x20bienvenue',
            'dmMessage': "Message privé (DM)",
            'enableDM': "DM activé",
            'blockAccess': "Bloquer l'accès sans validation",
            'assignOnJoin': "Attribuer à l'arrivée",
            'conditions': "Conditions d'attribution",
            'none': "Aucune",
            'test': "Tester",
            'autoRoleLog': 'Rôle\x20automatique\x20DashBot',
            'logsInstalled': "✅ Système de logs DashBot installé et activé.",
            'anError': "Une erreur est survenue.",
            'logSecDelete': "🔒 Message supprimé de <@{user}> (filtre sécurité).",
            'logMemberJoin': '👋\x20<@{user}>\x20a\x20rejoint\x20le\x20serveur.\x20Membres\x20:\x20**{count}**.',
            'logMemberLeave': '🚪\x20**{tag}**\x20a\x20quitté\x20le\x20serveur.\x20Membres\x20:\x20**{count}**.',
            'logModClear': '🧹\x20{amount}\x20messages\x20supprimés\x20par\x20<@{user}>.',
            'logModWarn': '⚠️\x20<@{target}>\x20averti\x20par\x20<@{user}>\x20—\x20{reason}',
            'logModMute': '🔇\x20<@{target}>\x20mute\x20{minutes}\x20min\x20par\x20<@{user}>.',
            'logVoiceCreate': '🔊\x20Salon\x20temporaire\x20créé\x20pour\x20<@{user}>.',
            'logMsgDelete': '🗑️\x20Message\x20supprimé\x20dans\x20<#{channel}>{author}.',
            'logRoleCreate': '➕\x20Rôle\x20créé\x20:\x20**{name}**.',
            'logRoleDelete': "➖ Rôle supprimé : **{name}**.",
            'logRoleUpdate': "🎭 Rôles modifiés pour <@{user}>.",
            'logChannelCreate': "➕ Salon créé : **{name}**.",
            'logChannelDelete': '➖\x20Salon\x20supprimé\x20:\x20**{name}**.',
            'logChannelRename': '✏️\x20Salon\x20renommé\x20:\x20**{before}**\x20→\x20**{after}**.',
            'tickets': 'Tickets',
            'recruitment': 'Recrutement',
            'captcha': "Captcha",
            'serverCreator': "Création de serveur",
            'panelChannel': 'Salon\x20du\x20panneau',
            'supportRoles': "Rôles support",
            'candidatureCat': "Catégorie des candidatures",
            'recruitCat': 'Catégorie\x20des\x20recrutements',
            'reasons': "Raisons",
            'addReason': "Ajouter une raison",
            'removeReason': 'Retirer\x20une\x20raison',
            'addSupportRole': 'Ajouter\x20un\x20rôle',
            'removeSupportRole': 'Retirer\x20un\x20rôle',
            'listSupportRoles': 'Liste\x20des\x20rôles',
            'listReasons': "Liste des raisons",
            'sendPanel': 'Envoyer\x20le\x20panneau',
            'editRecruitMsg': 'Modifier\x20le\x20message',
            'noReasons': "Aucune raison configurée.",
            'panelSent': "✅ Panneau envoyé dans",
            'enableFirst': 'Active\x20le\x20module\x20d\x27abord.',
            'configureChannelFirst': "Configure un salon d'abord.",
            'addReasonFirst': 'Ajoute\x20au\x20least\x20une\x20raison.',
            'channelNotExist': "Le salon configuré n'existe pas.",
            'noPermission': "Tu n'as pas la permission.",
            'ticketCreated': '✅\x20Ticket\x20créé\x20dans',
            'recruitCreated': '✅\x20Candidature\x20créée\x20dans',
            'claimMsg': "Pris en charge par",
            'archiveMsg': "✅ Archivé. Le salon va être supprimé.",
            'deleteCountdown': '🗑️\x20Ce\x20salon\x20sera\x20supprimé\x20dans\x208\x20secondes...',
            'logTicketCreate': "🎫 Ticket créé par <@{user}> — Raison : **{reason}**",
            'logTicketArchive': '📋\x20Ticket\x20archivé\x20par\x20<@{user}>\x20—\x20Salon\x20:\x20**{channel}**',
            'logTicketClaim': '✅\x20Ticket\x20pris\x20en\x20charge\x20par\x20<@{user}>\x20—\x20Salon\x20:\x20**{channel}**',
            'logTicketDelete': '🗑️\x20Ticket\x20supprimé\x20par\x20<@{user}>\x20—\x20Salon\x20:\x20**{channel}**',
            'logRecruitCreate': "📝 Candidature par <@{user}> — Poste : **{reason}**",
            'logRecruitArchive': '📋\x20Candidature\x20archivée\x20par\x20<@{user}>\x20—\x20Salon\x20:\x20**{channel}**',
            'logRecruitClaim': '✅\x20Candidature\x20prise\x20en\x20charge\x20par\x20<@{user}>\x20—\x20Salon\x20:\x20**{channel}**',
            'logRecruitDelete': "🗑️ Candidature supprimée par <@{user}> — Salon : **{channel}**",
            'captchaWelcome': 'Bienvenue\x20sur\x20**{server}**\x20!\x0aRésous\x20le\x20captcha\x20ci-dessous\x20pour\x20accéder\x20au\x20serveur.',
            'captchaQuestion': '❓\x20Quel\x20est\x20le\x20résultat\x20de\x20{a}\x20{op}\x20{b}\x20/',
            'captchaSuccess': '✅\x20Captcha\x20résolu\x20!\x20Tu\x20as\x20accès\x20au\x20règlement.',
            'captchaFail': '❌\x20Mauvaise\x20réponse.\x20Réessaie.',
            'captchaRole': 'Non\x20vérifié',
            'captchaVerifiedRole': "Vérifié",
            'captchaLog': '🔐\x20Captcha\x20résolu\x20par\x20<@{user}>.',
            'captchaLogFail': '❌\x20Tentative\x20échouée\x20par\x20<@{user}>\x20—\x20Réponse\x20:\x20`{answer}`',
            'captchaAlreadyVerified': 'Tu\x20es\x20déjà\x20vérifié\x20!',
            'unverifiedRole': "Rôle non vérifié",
            'verifiedRole': 'Rôle\x20vérifié',
            'captchaDesc': 'Quand\x20activé,\x20un\x20salon\x20captcha\x20est\x20créé.\x20Les\x20nouveaux\x20membres\x20doivent\x20résoudre\x20un\x20calcul\x20mathématique.\x20Ensuite\x20ils\x20voient\x20le\x20règlement\x20et\x20acceptent\x20avec\x20une\x20réaction.',
            'rulesAccept': 'Réagis\x20avec\x20✅\x20pour\x20accepter\x20le\x20règlement\x20et\x20accéder\x20au\x20serveur.',
            'rulesAccepted': '✅\x20Tu\x20as\x20accepté\x20le\x20règlement.\x20Bienvenue\x20!',
            'serverCreatorTitle': "🔨 Créateur de serveur",
            'serverCreatorDesc': "Configure le template puis clique « Créer » pour générer le serveur.",
            'createServer': 'Créer\x20le\x20serveur',
            'serverCreated': "✅ Serveur créé avec succès !",
            'addCategory': 'Ajouter\x20une\x20catégorie',
            'addChannelToCat': "Ajouter un salon",
            'categoryName': 'Nom\x20de\x20la\x20catégorie',
            'channelName': 'Nom\x20du\x20salon',
            'privateCategory': "Privée (staff uniquement)",
            'publicCategory': "Publique",
            'economy': "Économie",
            'levels': "Niveaux",
            'autoRole': 'Rôle\x20automatique',
            'wordReactions': 'Réactions\x20de\x20mots',
            'recurringMessages': 'Messages\x20récurrents',
            'announcements': 'Annonces',
            'socialNotifs': 'Notifications\x20sociales',
            'calendar': "Calendrier",
            'balance': 'Solde',
            'daily': 'Daily',
            'rank': "Rang",
            'leaderboard': "Classement",
            'xpLabel': 'XP',
            'levelLabel': "Niveau",
            'addWord': "Ajouter un mot",
            'word': "Mot",
            'reaction': "Réaction",
            'addMessage': "Ajouter un message",
            'channelLabel': "Salon",
            'interval': 'Intervalle\x20(min)',
            'createAnnouncement': 'Créer\x20une\x20annonce',
            'announceChannel': "Salon d'annonces",
            'socialChannel': 'Salon\x20notifications',
            'calendarRewards': "Récompenses du calendrier",
            'economyDesc': 'Gagne\x20des\x20{coins}\x20en\x20discutant\x20et\x20avec\x20la\x20commande\x20`/journalier`.',
            'levelsDesc': 'Gagne\x20de\x20l\x27XP\x20en\x20discutant\x20et\x20monte\x20de\x20niveau.',
            'autoRoleDesc': 'Attribue\x20un\x20rôle\x20automatiquement\x20aux\x20nouveaux\x20membres.',
            'wordReactionsDesc': 'Configurez\x20les\x20réactions\x20automatiques\x20déclenchées\x20lorsqu\x27un\x20mot\x20ou\x20une\x20expression\x20est\x20détecté\x20dans\x20un\x20message.\x20Vous\x20pouvez\x20créer\x20des\x20réponses\x20personnalisées,\x20ajouter\x20des\x20réactions,\x20supprimer\x20un\x20message\x20ou\x20appliquer\x20une\x20action\x20spécifique\x20selon\x20le\x20mot\x20détecté.',
            'recurringDesc': 'Envoie\x20des\x20messages\x20programmés\x20dans\x20un\x20salon.',
            'announcementDesc': 'Permet\x20aux\x20utilisateurs\x20de\x20créer\x20des\x20annonces.',
            'socialDesc': 'Suit\x20les\x20membres\x20et\x20notifie\x20quand\x20ils\x20sont\x20actifs.',
            'calendarDesc': 'Calendrier\x20de\x20fin\x20d\x27année\x20avec\x20XP\x20et\x20rôles\x20à\x20gagner.',
            'moderationDesc': 'Configurez\x20les\x20outils\x20de\x20modération\x20de\x20DashBot.\x20Ce\x20module\x20permet\x20de\x20gérer\x20les\x20commandes\x20de\x20modération\x20(ban,\x20kick,\x20timeout,\x20avertissements,\x20purge…),\x20les\x20permissions\x20des\x20modérateurs\x20ainsi\x20que\x20les\x20paramètres\x20liés\x20aux\x20sanctions\x20manuelles.',
            'autoSanctionsDesc': "Configurez les sanctions appliquées automatiquement lorsqu'un membre enfreint les règles du serveur. Définissez le nombre d'avertissements avant un timeout, un kick ou un bannissement, ainsi que les différentes actions automatiques de DashBot.",
            'protectionFiltresDesc': 'Configurez\x20les\x20systèmes\x20de\x20protection\x20automatique\x20de\x20DashBot.\x20Ce\x20module\x20permet\x20d\x27activer\x20et\x20de\x20personnaliser\x20l\x27anti-spam,\x20l\x27anti-liens,\x20l\x27anti-invitations\x20Discord,\x20l\x27anti-raid,\x20l\x27anti-bot,\x20l\x27anti-comptes\x20récents,\x20l\x27anti-mentions\x20et\x20l\x27anti-insultes.',
            'modLogsDesc': 'Configurez\x20les\x20journaux\x20de\x20modération\x20de\x20votre\x20serveur.\x20Choisissez\x20le\x20salon\x20où\x20seront\x20envoyés\x20les\x20logs\x20et\x20sélectionnez\x20les\x20événements\x20à\x20enregistrer,\x20comme\x20les\x20bans,\x20kicks,\x20timeouts,\x20avertissements,\x20suppressions\x20de\x20messages,\x20modifications\x20et\x20autres\x20actions\x20de\x20modération.',
            'dailyClaimed': "Daily déjà réclamé ! Réessaie dans {time}.",
            'dailyReward': '✅\x20Daily\x20réclamé\x20:\x20**{amount}**\x20{coins}\x20!',
            'notEnoughMoney': "Solde insuffisant.",
            'levelUp': "🎉 Félicitations <@{user}>, tu es passé niveau **{level}** !",
            'xpGain': "+{xp} XP",
            'shop': 'Boutique',
            'shopDesc': 'Achète\x20des\x20rôles\x20avec\x20tes\x20{coins}.',
            'giveaways': 'Giveaways',
            'giveawaysDesc': "Lance des concours avec tirage au sort.",
            'birthdays': 'Anniversaires',
            'birthdaysDesc': 'Attribue\x20un\x20rôle\x20le\x20jour\x20de\x20l\x27anniversaire.',
            'polls': "Sondages / Suggestions",
            'pollsDesc': "Crée des sondages avec réactions.",
            'reminders': "Rappels",
            'remindmeUsage': 'Utilisation\x20:\x20`{prefix}remindme\x2030min\x20<message>`',
            'remindmeSet': '✅\x20Rappel\x20programmé\x20dans\x20**{time}**.',
            'remindmeDone': '⏰\x20Rappel\x20:\x20{message}',
            'remindmeInvalid': 'Format\x20invalide.\x20Ex:\x20`!remindme\x2030min\x20mon\x20message`',
            'shopTitle': "🏪 Boutique",
            'shopEmpty': 'Aucun\x20article\x20en\x20boutique.',
            'shopItem': "**{name}** — {price} 🪙",
            'buySuccess': "✅ Tu as acheté **{item}** pour {price} 🪙 !",
            'buyFail': '❌\x20Solde\x20insuffisant.\x20Il\x20te\x20manque\x20**{missing}**\x20🪙.',
            'buyNotFound': "❌ Article introuvable.",
            'giveawaySetup': "🎉 **Giveaway : {prize}**\nClique sur le bouton pour participer !\nFin dans : **{time}**",
            'giveawayEnter': 'Participer',
            'giveawayEnded': '🎉\x20Giveaway\x20terminé\x20!',
            'giveawayWinners': 'Gagnant(s)\x20:\x20{winners}',
            'giveawayNoParticipants': "Aucun participant.",
            'pollTitle': '📊\x20Sondage',
            'pollDesc': '{question}\x0a\x0aRéagis\x20avec\x20✅\x20ou\x20❌\x20pour\x20voter.',
            'suggestTitle': "💡 Suggestion",
            'suggestBy': "Suggestion par {user}",
            'pollSent': '✅\x20Sondage\x20créé\x20dans',
            'setbirthdayDone': '✅\x20Anniversaire\x20enregistré\x20:\x20**{date}**',
            'setbirthdayInvalid': "Format invalide. Utilise `!setbirthday JJ/MM`.",
            'birthdayRoleGiven': "🎂 Joyeux anniversaire <@{user}> ! Rôle attribué.",
            'addShopItem': "Ajouter un article",
            'shopRole': 'Rôle',
            'shopPrice': "Prix",
            'shopChannel': 'Salon\x20boutique',
            'catGeneral': "Général",
            'catProtection': 'Protection',
            'catWelcome': "Processus d'accueil",
            'catRoles': "Rôles",
            'catCommunity': "Communauté",
            'catProgression': "Progression",
            'catCommunication': 'Communication',
            'catEvents': 'Événements',
            'catVoice': "Salons vocaux temporaires",
            'catGeneralDesc': "Configurez les paramètres principaux de DashBot pour votre serveur. Cette catégorie permet de gérer la langue du bot, les logs, les permissions générales et les paramètres globaux.",
            'catProtectionDesc': 'Renforcez\x20la\x20sécurité\x20de\x20votre\x20serveur\x20grâce\x20aux\x20outils\x20de\x20protection\x20de\x20DashBot.\x20Vous\x20pouvez\x20configurer\x20la\x20modération,\x20les\x20filtres\x20automatiques,\x20les\x20sanctions,\x20les\x20systèmes\x20anti-spam,\x20anti-liens,\x20anti-raid\x20et\x20les\x20réactions\x20automatiques\x20aux\x20mots.',
            'catWelcomeDesc': 'Personnalisez\x20l\x27arrivée\x20des\x20nouveaux\x20membres\x20et\x20leur\x20intégration.\x20Cette\x20catégorie\x20regroupe\x20les\x20messages\x20de\x20bienvenue\x20et\x20de\x20départ,\x20le\x20règlement,\x20le\x20captcha\x20ainsi\x20que\x20l\x27attribution\x20automatique\x20des\x20rôles.',
            'catRolesDesc': "Gérez facilement tous les rôles de votre serveur. Configurez les rôles automatiques, les rôles à réaction, les menus de rôles et les différentes méthodes d'attribution.",
            'catCommunityDesc': 'Centralisez\x20les\x20outils\x20destinés\x20à\x20votre\x20communauté.\x20Cette\x20catégorie\x20comprend\x20les\x20tickets,\x20les\x20recrutements,\x20les\x20suggestions,\x20les\x20sondages\x20et\x20les\x20anniversaires\x20afin\x20de\x20faciliter\x20les\x20échanges\x20entre\x20les\x20membres\x20et\x20le\x20staff.',
            'catProgressionDesc': 'Encouragez\x20l\x27activité\x20de\x20votre\x20communauté\x20grâce\x20aux\x20systèmes\x20de\x20progression.\x20Configurez\x20les\x20niveaux,\x20l\x27économie\x20du\x20serveur,\x20la\x20boutique\x20ainsi\x20que\x20les\x20récompenses\x20associées.',
            'catCommunicationDesc': "Automatisez la communication de votre serveur. Configurez les annonces, les messages récurrents et les notifications sociales pour informer vos membres efficacement.",
            'catEventsDesc': 'Animez\x20votre\x20communauté\x20grâce\x20aux\x20différents\x20événements\x20proposés\x20par\x20DashBot.\x20Cette\x20catégorie\x20regroupe\x20les\x20giveaways\x20et\x20le\x20calendrier\x20des\x20événements.',
            'catVoiceDesc': 'Permettez\x20à\x20vos\x20membres\x20de\x20créer\x20et\x20gérer\x20leurs\x20propres\x20salons\x20vocaux\x20temporaires.\x20Configurez\x20les\x20permissions,\x20les\x20options\x20de\x20création\x20et\x20les\x20paramètres\x20de\x20fonctionnement\x20de\x20ces\x20salons.',
            'resetModule': 'Réinitialiser\x20le\x20module',
            'comingSoon': "Fonctionnalité à venir. Configuration détaillée bientôt disponible.",
            'maintenanceEnabled': '🔧\x20Mode\x20maintenance\x20activé.\x0a\x0aLe\x20serveur\x20est\x20actuellement\x20en\x20maintenance.\x20Seul\x20le\x20staff\x20peut\x20accéder\x20aux\x20salons\x20pendant\x20cette\x20période.',
            'maintenanceDisabled': "✅ Mode maintenance désactivé.\n\nLe serveur est de nouveau accessible aux membres.",
            'maintenanceAlreadyOn': '⚠️\x20Le\x20mode\x20maintenance\x20est\x20déjà\x20activé.',
            'maintenanceAlreadyOff': "⚠️ Le mode maintenance est déjà désactivé.",
            'maintenanceLogOn': '🔧\x20Maintenance\x20activée\x20par\x20<@{user}>.',
            'maintenanceLogOff': '✅\x20Maintenance\x20désactivée\x20par\x20<@{user}>.'
        },
        _0x477b18 = {
            'home': "DashBot Configuration",
            'choose': "Choose a module to configure",
            'general': "General",
            'moderation': "Moderation",
            'welcome': 'Welcome\x20/\x20Leave',
            'rules': 'Rules',
            'security': 'Security',
            'welcomeArrival': "Arrival",
            'welcomeDeparture': "Departure",
            'welcomeRules': 'Rules',
            'welcomeCaptcha': 'Captcha',
            'welcomeAutorole': 'Auto\x20Role',
            'roles': 'Reaction\x20Roles',
            'voices': 'Temporary\x20Voice\x20Channels',
            'logs': 'Logs',
            'permissions': "Permissions",
            'customization': "Customization",
            'database': "Database",
            'autoSanctions': "Auto Sanctions",
            'warningsBeforeTimeout': 'Warnings\x20before\x20timeout',
            'timeoutMinutes': 'Timeout\x20duration\x20(min)',
            'warningsBeforeKick': "Warnings before kick",
            'warningsBeforeBan': "Warnings before ban",
            'logBans': 'Bans',
            'logKicks': "Kicks",
            'logTimeouts': "Timeouts",
            'logWarns': "Warnings",
            'logMsgDelete': 'Message\x20Deletions',
            'logMsgEdit': 'Message\x20Edits',
            'logChannelUpdate': 'Channel\x20Updates',
            'antiSpam': 'Anti-Spam',
            'antiLinks': "Anti-Links",
            'antiInvites': 'Anti-Invites',
            'antiRaid': 'Anti-Raid',
            'antiBot': "Anti-Bot",
            'antiRecentAccounts': 'Anti-New\x20Accounts',
            'antiMentions': 'Anti-Mentions',
            'antiInsults': 'Anti-Insults',
            'antiBlacklist': "Anti-Blacklist",
            'whitelist': "Whitelist",
            'blacklist': 'Blacklist',
            'maintenanceConfig': 'Maintenance\x20Mode',
            'modLogs': "Moderation Logs",
            'protectionFiltres': "Protection Filters",
            'autoMod': 'AutoModeration',
            'autoModDesc': "Configurable automatic protection system. Detects abusive behavior and applies progressive sanctions.",
            'autoWarn': 'Auto-warn',
            'exceptions': 'Exceptions',
            'exemptRoles': "Exempted Roles",
            'exemptChannels': 'Exempted\x20Channels',
            'exemptMembers': "Exempted Members",
            'maxJoins': 'Max\x20joins',
            'intervalMinutes': 'Interval\x20(min)',
            'maxDays': 'Max\x20days',
            'wordList': "Words",
            'enableAll': "Enable all",
            'disableAll': 'Disable\x20all',
            'tempRoles': 'Temporary\x20Roles',
            'suggestions': 'Suggestions',
            'leaderboard': "Leaderboard",
            'rewards': 'Rewards',
            'inventory': 'Inventory',
            'enabled': "Enabled",
            'disabled': "Disabled",
            'back': 'Back',
            'language': 'Language',
            'prefix': 'Prefix',
            'edit': 'Edit',
            'channel': "Channel",
            'create': 'Create',
            'send': "Send",
            'setup': 'Set\x20up',
            'noChannel': 'Not\x20configured',
            'saved': 'Configuration\x20saved.',
            'admin': "Administrator permission required.",
            'dashboard': "⚙️ DashBot — Dashboard",
            'dashboardDesc': "Welcome to the management center of **{server}**.\n{choose}",
            'botLabel': '🤖\x20Bot',
            'botStatus': 'Online\x20and\x20ready\x20to\x20manage\x20the\x20server.',
            'settingsLabel': "🌐 Settings",
            'langLabel': 'Language',
            'prefixLabel': 'Prefix',
            'serverLabel': "👥 Server",
            'members': "Members",
            'idLabel': 'ID',
            'modulesLabel': '🛡️\x20Modules',
            'serverConfig': 'DashBot\x20•\x20Server\x20Configuration',
            'prefixDesc': "The prefix gives access to `{prefix}config`, `{prefix}help`, `{prefix}warn`, `{prefix}clear`.",
            'titleLabel': "Title",
            'descLabel': "Description",
            'colorLabel': 'Color',
            'thumbnailLabel': "Thumbnail",
            'configured': 'Configured',
            'imageLabel': 'Image\x20/\x20Banner',
            'modLogs': 'Moderation\x20Logs',
            'muteRole': "Mute Role",
            'commandsLabel': 'Commands',
            'createLogsBtn': "Create Logs",
            'muteRoleBtn': "Mute Role",
            'arrivals': "Arrivals",
            'departures': "Departures",
            'autoRole': 'Auto\x20Role',
            'variables': "Variables",
            'auto': 'Auto',
            'antiLinks': "Anti-links",
            'antiInvites': 'Anti-invites',
            'antiSpamLabel': 'Anti-spam',
            'maxMentions': 'Max\x20Mentions',
            'secLogs': 'Security\x20Logs',
            'createPanel': "Create panel",
            'noPanels': 'No\x20panels.',
            'addRole': "Add a role",
            'addChannel': 'Add\x20a\x20channel',
            'addMember': "Add a member",
            'panel': "Panel",
            'panels': "Panels",
            'selectPanel': "Select a panel",
            'listBtn': 'List',
            'lobbyChannel': 'Public\x20creation\x20channel',
            'createdCategory': 'Category\x20for\x20created\x20channels',
            'name': "Name",
            'limit': "Limit",
            'unlimited': "Unlimited",
            'lobby': 'Public\x20channel',
            'category': "Category",
            'voiceSetup': "Set up automatically",
            'voiceSetupDone': 'Temporary\x20voice\x20channels\x20configured.',
            'logsCount': 'log\x20channels\x20configured\x20in',
            'logsCat': "the DashBot Logs category",
            'logsAuto': 'All\x20events\x20(moderation,\x20arrivals,\x20departures,\x20messages,\x20voice,\x20roles,\x20channels,\x20tickets,\x20security,\x20etc.)\x20are\x20sent\x20to\x20a\x20single\x20log\x20channel.',
            'completeLogs': "Complete Logs",
            'deactivate': 'Deactivate',
            'activate': "Activate",
            'noChannelCompat': "No compatible channel.",
            'noRoles': "No roles.",
            'chooseChannel': "Choose a channel:",
            'selectChannel': "Select a channel",
            'noRoleCompat': "No compatible role.",
            'chooseRole': "Choose a role:",
            'selectRole': 'Select\x20a\x20role',
            'serverOnly': "This command is only available on a server.",
            'interactionOnly': 'This\x20interaction\x20is\x20only\x20available\x20on\x20a\x20server.',
            'helpDesc': "Use `/config` to manage the server.",
            'logsCreated': "Logs created automatically. The module now uses",
            'setupLogsDone': "Category and 10 distinct log channels created.",
            'prefixError': "The prefix must be between 1 and 5 characters.",
            'titleField': "Title",
            'descriptionField': 'Description',
            'colorHex': 'Hex\x20color\x20(#5865F2)',
            'thumbnailUrl': "Thumbnail URL",
            'imageUrl': 'Image\x20/\x20Banner\x20URL',
            'welcomeMsg': 'Welcome\x20message',
            'leaveMsg': "Leave message",
            'rulesText': "Rules text",
            'maxMessages': "Maximum messages",
            'spamWindow': "Anti-spam window (seconds)",
            'maxMentionsField': "Maximum mentions",
            'antiLinksField': "Anti-links (yes/no)",
            'antiInvitesField': "Anti-invites (yes/no)",
            'nameFormat': 'Name\x20({user})',
            'limitField': "Limit (0 = unlimited)",
            'configureRulesChannel': 'Set\x20up\x20a\x20text\x20channel\x20for\x20the\x20rules.',
            'rulesSent': "Rules sent.",
            'serverRules': "Server Rules",
            'prefixUse': 'Use',
            'usage': 'Usage:',
            'warned': "has been warned.",
            'noReason': "No reason",
            'mutedFor': 'muted\x20for',
            'minutes': "minute(s)",
            'notMuted': "is no longer muted.",
            'welcomeTitle': '👋\x20Welcome!',
            'goodbyeTitle': '🚪\x20Goodbye',
            'welcomeImageField': "Welcome image",
            'dmMessage': 'Private\x20message\x20(DM)',
            'enableDM': 'DM\x20enabled',
            'blockAccess': "Block access without validation",
            'assignOnJoin': 'Assign\x20on\x20join',
            'conditions': 'Assignment\x20conditions',
            'none': "None",
            'test': 'Test',
            'autoRoleLog': 'DashBot\x20Auto\x20Role',
            'logsInstalled': "✅ DashBot logs system installed and activated.",
            'anError': 'An\x20error\x20occurred.',
            'logSecDelete': "🔒 Message deleted from <@{user}> (security filter).",
            'logMemberJoin': "👋 <@{user}> joined the server. Members: **{count}**.",
            'logMemberLeave': '🚪\x20**{tag}**\x20left\x20the\x20server.\x20Members:\x20**{count}**.',
            'logModClear': "🧹 {amount} messages deleted by <@{user}>.",
            'logModWarn': "⚠️ <@{target}> warned by <@{user}> — {reason}",
            'logModMute': "🔇 <@{target}> muted {minutes} min by <@{user}>.",
            'logVoiceCreate': '🔊\x20Temporary\x20channel\x20created\x20for\x20<@{user}>.',
            'logMsgDelete': '🗑️\x20Message\x20deleted\x20in\x20<#{channel}>{author}.',
            'logRoleCreate': "➕ Role created: **{name}**.",
            'logRoleDelete': '➖\x20Role\x20deleted:\x20**{name}**.',
            'logRoleUpdate': "🎭 Roles updated for <@{user}>.",
            'logChannelCreate': "➕ Channel created: **{name}**.",
            'logChannelDelete': "➖ Channel deleted: **{name}**.",
            'logChannelRename': '✏️\x20Channel\x20renamed:\x20**{before}**\x20→\x20**{after}**.',
            'tickets': "Tickets",
            'recruitment': 'Recruitment',
            'captcha': "Captcha",
            'serverCreator': 'Server\x20Creator',
            'panelChannel': 'Panel\x20Channel',
            'supportRoles': 'Support\x20Roles',
            'ticketCat': "Ticket Category",
            'recruitCat': "Recruitment Category",
            'reasons': 'Reasons',
            'addReason': "Add a reason",
            'removeReason': 'Remove\x20a\x20reason',
            'addSupportRole': 'Add\x20a\x20role',
            'removeSupportRole': 'Remove\x20a\x20role',
            'listSupportRoles': 'List\x20roles',
            'listReasons': "List reasons",
            'sendPanel': 'Send\x20Panel',
            'editRecruitMsg': 'Edit\x20message',
            'noReasons': 'No\x20reasons\x20configured.',
            'panelSent': "✅ Panel sent to",
            'enableFirst': "Enable the module first.",
            'configureChannelFirst': "Configure a channel first.",
            'addReasonFirst': 'Add\x20at\x20least\x20one\x20reason.',
            'channelNotExist': "The configured channel does not exist.",
            'noPermission': 'You\x20don\x27t\x20have\x20permission.',
            'ticketCreated': "✅ Ticket created in",
            'recruitCreated': "✅ Application created in",
            'claimMsg': "Claimed by",
            'archiveMsg': "✅ Archived. Channel will be deleted.",
            'deleteCountdown': '🗑️\x20This\x20channel\x20will\x20be\x20deleted\x20in\x208\x20seconds...',
            'logTicketCreate': '🎫\x20Ticket\x20created\x20by\x20<@{user}>\x20—\x20Reason:\x20**{reason}**',
            'logTicketArchive': '📋\x20Ticket\x20archived\x20by\x20<@{user}>\x20—\x20Channel:\x20**{channel}**',
            'logTicketClaim': '✅\x20Ticket\x20claimed\x20by\x20<@{user}>\x20—\x20Channel:\x20**{channel}**',
            'logTicketDelete': '🗑️\x20Ticket\x20deleted\x20by\x20<@{user}>\x20—\x20Channel:\x20**{channel}**',
            'logRecruitCreate': "📝 Application by <@{user}> — Position: **{reason}**",
            'logRecruitArchive': '📋\x20Application\x20archived\x20by\x20<@{user}>\x20—\x20Channel:\x20**{channel}**',
            'logRecruitClaim': '✅\x20Application\x20claimed\x20by\x20<@{user}>\x20—\x20Channel:\x20**{channel}**',
            'logRecruitDelete': "🗑️ Application deleted by <@{user}> — Channel: **{channel}**",
            'captchaWelcome': 'Welcome\x20to\x20**{server}**!\x0aSolve\x20the\x20captcha\x20below\x20to\x20access\x20the\x20server.',
            'captchaQuestion': '❓\x20What\x20is\x20{a}\x20{op}\x20{b}/',
            'captchaSuccess': '✅\x20Captcha\x20solved!\x20You\x20can\x20now\x20access\x20the\x20rules.',
            'captchaFail': "❌ Wrong answer. Try again.",
            'captchaRole': 'Unverified',
            'captchaVerifiedRole': 'Verified',
            'captchaLog': "🔐 Captcha solved by <@{user}>.",
            'captchaLogFail': "❌ Failed attempt by <@{user}> — Answer: `{answer}`",
            'captchaAlreadyVerified': "You are already verified!",
            'unverifiedRole': "Unverified role",
            'verifiedRole': 'Verified\x20role',
            'captchaDesc': "When enabled, a captcha channel is created. New members must solve a math problem. Then they see the rules and accept with a reaction.",
            'rulesAccept': "React with ✅ to accept the rules and access the server.",
            'rulesAccepted': "✅ You accepted the rules. Welcome!",
            'serverCreatorTitle': "🔨 Server Creator",
            'serverCreatorDesc': 'Configure\x20the\x20template\x20then\x20click\x20\x22Create\x22\x20to\x20generate\x20the\x20server.',
            'createServer': 'Create\x20Server',
            'serverCreated': "✅ Server created successfully!",
            'addCategory': "Add a category",
            'addChannelToCat': 'Add\x20a\x20channel',
            'categoryName': 'Category\x20name',
            'channelName': 'Channel\x20name',
            'privateCategory': "Private (staff only)",
            'publicCategory': 'Public',
            'economy': 'Economy',
            'levels': "Levels",
            'autoRole': 'Auto\x20Role',
            'wordReactions': "Word Reactions",
            'recurringMessages': "Recurring Messages",
            'announcements': 'Announcements',
            'socialNotifs': 'Social\x20Notifications',
            'calendar': 'Calendar',
            'balance': "Balance",
            'daily': "Daily",
            'rank': 'Rank',
            'leaderboard': 'Leaderboard',
            'xpLabel': 'XP',
            'levelLabel': 'Level',
            'addWord': "Add a word",
            'word': "Word",
            'reaction': "Reaction",
            'addMessage': 'Add\x20a\x20message',
            'channelLabel': 'Channel',
            'interval': "Interval (min)",
            'createAnnouncement': 'Create\x20announcement',
            'announceChannel': 'Announcement\x20channel',
            'socialChannel': "Notification channel",
            'calendarRewards': 'Calendar\x20rewards',
            'economyDesc': "Earn {coins} by chatting and using `{prefix}daily`.",
            'levelsDesc': "Earn XP by chatting and level up.",
            'autoRoleDesc': 'Automatically\x20assign\x20a\x20role\x20to\x20new\x20members.',
            'wordReactionsDesc': 'Configure\x20automatic\x20reactions\x20triggered\x20when\x20a\x20word\x20or\x20expression\x20is\x20detected\x20in\x20a\x20message.\x20You\x20can\x20create\x20custom\x20responses,\x20add\x20reactions,\x20delete\x20a\x20message\x20or\x20apply\x20a\x20specific\x20action\x20based\x20on\x20the\x20detected\x20word.',
            'recurringDesc': 'Send\x20scheduled\x20messages\x20in\x20a\x20channel.',
            'announcementDesc': "Let users create announcements.",
            'socialDesc': 'Track\x20members\x20and\x20notify\x20when\x20they\x20are\x20active.',
            'calendarDesc': "End of year calendar with XP and roles to earn.",
            'moderationDesc': "Configure DashBot's moderation tools. This module allows you to manage moderation commands (ban, kick, timeout, warnings, purge…), moderator permissions and manual sanction settings.",
            'autoSanctionsDesc': 'Configure\x20the\x20automatic\x20sanctions\x20applied\x20when\x20a\x20member\x20violates\x20server\x20rules.\x20Set\x20the\x20number\x20of\x20warnings\x20before\x20a\x20timeout,\x20kick\x20or\x20ban,\x20as\x20well\x20as\x20DashBot\x27s\x20different\x20automatic\x20actions.',
            'protectionFiltresDesc': 'Configure\x20DashBot\x27s\x20automatic\x20protection\x20systems.\x20This\x20module\x20allows\x20you\x20to\x20enable\x20and\x20customize\x20anti-spam,\x20anti-links,\x20anti-Discord\x20invites,\x20anti-raid,\x20anti-bot,\x20anti-new\x20accounts,\x20anti-mentions\x20and\x20anti-insults.',
            'modLogsDesc': "Configure your server's moderation logs. Choose the channel where logs will be sent and select the events to record, such as bans, kicks, timeouts, warnings, message deletions, edits and other moderation actions.",
            'dailyClaimed': "Daily already claimed! Try again in {time}.",
            'dailyReward': "✅ Daily claimed: **{amount}** {coins}!",
            'notEnoughMoney': 'Insufficient\x20balance.',
            'levelUp': "🎉 Congratulations <@{user}>, you reached level **{level}**!",
            'xpGain': '+{xp}\x20XP',
            'shop': 'Shop',
            'shopDesc': 'Buy\x20roles\x20with\x20your\x20{coins}.',
            'giveaways': 'Giveaways',
            'giveawaysDesc': "Run giveaways with random draws.",
            'birthdays': 'Birthdays',
            'birthdaysDesc': "Assign a role on birthdays.",
            'polls': 'Polls\x20/\x20Suggestions',
            'pollsDesc': 'Create\x20polls\x20with\x20reactions.',
            'reminders': "Reminders",
            'remindmeUsage': "Usage: `{prefix}remindme 30min <message>`",
            'remindmeSet': "✅ Reminder set for **{time}**.",
            'remindmeDone': "⏰ Reminder: {message}",
            'remindmeInvalid': "Invalid format. Ex: `!remindme 30min my message`",
            'shopTitle': "🏪 Shop",
            'shopEmpty': "No items in the shop.",
            'shopItem': "**{name}** — {price} 🪙",
            'buySuccess': "✅ You bought **{item}** for {price} 🪙!",
            'buyFail': "❌ Insufficient balance. You need **{missing}** 🪙 more.",
            'buyNotFound': "❌ Item not found.",
            'giveawaySetup': '🎉\x20**Giveaway:\x20{prize}**\x0aClick\x20the\x20button\x20to\x20enter!\x0aEnds\x20in:\x20**{time}**',
            'giveawayEnter': "Enter",
            'giveawayEnded': "🎉 Giveaway ended!",
            'giveawayWinners': "Winner(s): {winners}",
            'giveawayNoParticipants': "No participants.",
            'pollTitle': "📊 Poll",
            'pollDesc': '{question}\x0a\x0aReact\x20with\x20✅\x20or\x20❌\x20to\x20vote.',
            'suggestTitle': "💡 Suggestion",
            'suggestBy': 'Suggestion\x20by\x20{user}',
            'pollSent': '✅\x20Poll\x20created\x20in',
            'setbirthdayDone': "✅ Birthday saved: **{date}**",
            'setbirthdayInvalid': 'Invalid\x20format.\x20Use\x20`!setbirthday\x20DD/MM`.',
            'birthdayRoleGiven': "🎂 Happy birthday <@{user}>! Role assigned.",
            'addShopItem': "Add item",
            'shopRole': "Role",
            'shopPrice': "Price",
            'shopChannel': 'Shop\x20channel',
            'catGeneral': "General",
            'catProtection': "Protection",
            'catWelcome': 'Welcome\x20Process',
            'catRoles': "Roles",
            'catCommunity': 'Community',
            'catProgression': "Progression",
            'catCommunication': "Communication",
            'catEvents': 'Events',
            'catVoice': 'Temporary\x20Voice\x20Channels',
            'catGeneralDesc': "Configure the main DashBot settings for your server. This category allows you to manage the bot language, logs, general permissions, and global settings.",
            'catProtectionDesc': "Strengthen your server security with DashBot's protection tools. You can configure moderation, automatic filters, sanctions, anti-spam, anti-link, anti-raid systems, and automatic word reactions.",
            'catWelcomeDesc': 'Customize\x20the\x20arrival\x20and\x20integration\x20of\x20new\x20members.\x20This\x20category\x20includes\x20welcome\x20and\x20goodbye\x20messages,\x20rules,\x20captcha,\x20and\x20automatic\x20role\x20assignment.',
            'catRolesDesc': 'Easily\x20manage\x20all\x20roles\x20on\x20your\x20server.\x20Configure\x20automatic\x20roles,\x20reaction\x20roles,\x20role\x20menus,\x20and\x20various\x20assignment\x20methods.',
            'catCommunityDesc': "Centralize tools designed for your community. This category includes tickets, recruitment, suggestions, polls, and birthdays to facilitate exchanges between members and staff.",
            'catProgressionDesc': 'Encourage\x20your\x20community\x27s\x20activity\x20through\x20progression\x20systems.\x20Configure\x20levels,\x20server\x20economy,\x20the\x20shop,\x20and\x20associated\x20rewards.',
            'catCommunicationDesc': "Automate your server's communication. Configure announcements, recurring messages, and social notifications to inform your members effectively.",
            'catEventsDesc': 'Liven\x20up\x20your\x20community\x20with\x20various\x20events\x20offered\x20by\x20DashBot.\x20This\x20category\x20includes\x20giveaways\x20and\x20the\x20event\x20calendar.',
            'catVoiceDesc': "Allow your members to create and manage their own temporary voice channels. Configure permissions, creation options, and operating parameters for these channels.",
            'resetModule': 'Reset\x20module',
            'comingSoon': 'Feature\x20coming\x20soon.\x20Detailed\x20configuration\x20will\x20be\x20available\x20shortly.',
            'maintenanceEnabled': '🔧\x20Maintenance\x20mode\x20enabled.\x0a\x0aThe\x20server\x20is\x20currently\x20under\x20maintenance.\x20Only\x20staff\x20can\x20access\x20channels\x20during\x20this\x20period.',
            'maintenanceDisabled': "✅ Maintenance mode disabled.\n\nThe server is now accessible to members again.",
            'maintenanceAlreadyOn': "⚠️ Maintenance mode is already enabled.",
            'maintenanceAlreadyOff': "⚠️ Maintenance mode is already disabled.",
            'maintenanceLogOn': "🔧 Maintenance enabled by <@{user}>.",
            'maintenanceLogOff': '✅\x20Maintenance\x20disabled\x20by\x20<@{user}>.'
        },
        _0x12f72a = {
            'home': "Configuración DashBot",
            'choose': "Elige un módulo para configurar",
            'general': 'General',
            'moderation': 'Moderación',
            'security': "Seguridad",
            'welcome': 'Bienvenida\x20/\x20Salida',
            'rules': 'Reglas',
            'welcomeArrival': "Llegada",
            'welcomeDeparture': 'Salida',
            'welcomeRules': "Reglas",
            'welcomeCaptcha': "Captcha",
            'welcomeAutorole': "Rol automático",
            'roles': 'Roles\x20por\x20reacción',
            'voices': 'Canales\x20de\x20voz\x20temporales',
            'logs': 'Registros',
            'permissions': 'Permisos',
            'customization': 'Personalización',
            'database': "Base de datos",
            'autoSanctions': 'Sanciones\x20automáticas',
            'warningsBeforeTimeout': 'Advertencias\x20antes\x20de\x20timeout',
            'timeoutMinutes': 'Duración\x20del\x20timeout\x20(min)',
            'warningsBeforeKick': 'Advertencias\x20antes\x20de\x20expulsión',
            'warningsBeforeBan': "Advertencias antes de baneo",
            'logBans': 'Baneos',
            'logKicks': 'Expulsiones',
            'logTimeouts': 'Timeouts',
            'logWarns': "Advertencias",
            'logMsgDelete': 'Eliminaciones\x20de\x20mensajes',
            'logMsgEdit': 'Ediciones\x20de\x20mensajes',
            'logChannelUpdate': 'Modificaciones\x20de\x20canales',
            'antiSpam': "Anti-Spam",
            'antiLinks': 'Anti-enlaces',
            'antiInvites': 'Anti-invitaciones',
            'antiRaid': 'Anti-Raid',
            'antiBot': 'Anti-Bot',
            'antiRecentAccounts': "Anti-cuentas nuevas",
            'antiMentions': "Anti-Menciones",
            'antiInsults': 'Anti-Insultos',
            'antiBlacklist': "Anti-palabras prohibidas",
            'whitelist': 'Lista\x20blanca',
            'blacklist': "Lista negra",
            'maintenanceConfig': 'Modo\x20mantenimiento',
            'modLogs': "Registros de moderación",
            'protectionFiltres': "Filtros de protección",
            'autoMod': "AutoModeración",
            'autoModDesc': 'Sistema\x20de\x20protección\x20automática\x20configurable.\x20Detecta\x20comportamientos\x20abusivos\x20y\x20aplica\x20sanciones\x20progresivas.',
            'autoWarn': "Auto-advertir",
            'exceptions': 'Excepciones',
            'exemptRoles': 'Roles\x20exentos',
            'exemptChannels': "Canales exentos",
            'exemptMembers': 'Miembros\x20exentos',
            'maxJoins': 'Llegadas\x20máx',
            'intervalMinutes': "Intervalo (min)",
            'maxDays': "Días máx",
            'wordList': 'Palabras',
            'enableAll': 'Activar\x20todo',
            'disableAll': 'Desactivar\x20todo',
            'tempRoles': "Roles temporales",
            'suggestions': "Sugerencias",
            'leaderboard': "Clasificación",
            'rewards': 'Recompensas',
            'inventory': 'Inventario',
            'enabled': 'Activado',
            'disabled': "Desactivado",
            'back': 'Volver',
            'language': "Idioma",
            'prefix': 'Prefijo',
            'edit': "Editar",
            'channel': "Canal",
            'create': "Crear",
            'send': 'Enviar',
            'setup': "Configurar",
            'noChannel': 'No\x20definido',
            'saved': "Configuración guardada.",
            'admin': 'Se\x20requiere\x20administrador.',
            'dashboard': '⚙️\x20DashBot\x20—\x20Panel\x20de\x20control',
            'dashboardDesc': 'Bienvenido\x20al\x20centro\x20de\x20gestión\x20de\x20**{server}**.\x0a{choose}',
            'botLabel': '🤖\x20Bot',
            'botStatus': "En línea y listo para gestionar el servidor.",
            'settingsLabel': "🌐 Ajustes",
            'langLabel': 'Idioma',
            'prefixLabel': "Prefijo",
            'serverLabel': '👥\x20Servidor',
            'members': "Miembros",
            'idLabel': 'ID',
            'modulesLabel': '🛡️\x20Módulos',
            'serverConfig': 'DashBot\x20•\x20Configuración\x20del\x20servidor',
            'prefixDesc': "El prefijo da acceso a `{prefix}config`, `{prefix}help`, `{prefix}warn`, `{prefix}clear`.",
            'titleLabel': "Título",
            'descLabel': "Descripción",
            'colorLabel': 'Color',
            'thumbnailLabel': "Miniatura",
            'configured': 'Configurado',
            'imageLabel': 'Imagen\x20/\x20Banner',
            'modLogs': 'Registros\x20de\x20moderación',
            'muteRole': "Rol silenciado",
            'commandsLabel': "Comandos",
            'createLogsBtn': 'Crear\x20registros',
            'muteRoleBtn': "Rol silenciado",
            'arrivals': 'Llegadas',
            'departures': "Salidas",
            'autoRole': 'Rol\x20automático',
            'variables': "Variables",
            'auto': 'Auto',
            'antiLinks': "Anti-enlaces",
            'antiInvites': 'Anti-invitaciones',
            'antiSpamLabel': 'Anti-spam',
            'maxMentions': "Menciones máx",
            'secLogs': "Registros de seguridad",
            'createPanel': 'Crear\x20panel',
            'noPanels': "Sin paneles.",
            'addRole': 'Añadir\x20rol',
            'addChannel': "Añadir canal",
            'addMember': 'Añadir\x20miembro',
            'panel': 'Panel',
            'panels': 'Paneles',
            'selectPanel': 'Seleccionar\x20un\x20panel',
            'listBtn': 'Lista',
            'lobbyChannel': "Canal público de creación",
            'createdCategory': 'Categoría\x20de\x20canales\x20creados',
            'name': 'Nombre',
            'limit': "Límite",
            'unlimited': 'Ilimitado',
            'lobby': 'Canal\x20público',
            'category': 'Categoría',
            'voiceSetup': "Configurar automáticamente",
            'voiceSetupDone': "Canales de voz temporales configurados.",
            'logsCount': 'canales\x20de\x20registro\x20configurados\x20en',
            'logsCat': "la categoría DashBot Logs",
            'logsAuto': 'Todos\x20los\x20eventos\x20(moderación,\x20llegadas,\x20salidas,\x20mensajes,\x20voz,\x20roles,\x20canales,\x20tickets,\x20seguridad,\x20etc.)\x20se\x20envían\x20a\x20un\x20único\x20canal\x20de\x20registros.',
            'completeLogs': 'Completar\x20registros',
            'deactivate': "Desactivar",
            'activate': "Activar",
            'noChannelCompat': 'Ningún\x20canal\x20compatible.',
            'noRoles': 'Ningún\x20rol.',
            'chooseChannel': 'Elige\x20un\x20canal:',
            'selectChannel': "Seleccionar un canal",
            'noRoleCompat': 'Ningún\x20rol\x20compatible.',
            'chooseRole': "Elige un rol:",
            'selectRole': 'Seleccionar\x20un\x20rol',
            'serverOnly': 'Este\x20comando\x20solo\x20está\x20disponible\x20en\x20un\x20servidor.',
            'interactionOnly': 'Esta\x20interacción\x20solo\x20está\x20disponible\x20en\x20un\x20servidor.',
            'helpDesc': "Usa `/config` para administrar el servidor.",
            'logsCreated': 'Registros\x20creados\x20automáticamente.\x20El\x20módulo\x20ahora\x20usa',
            'setupLogsDone': 'Categoría\x20y\x2010\x20canales\x20de\x20registro\x20distintos\x20creados.',
            'prefixError': "El prefijo debe tener entre 1 y 5 caracteres.",
            'titleField': 'Título',
            'descriptionField': "Descripción",
            'colorHex': 'Color\x20hex\x20(#5865F2)',
            'thumbnailUrl': "URL miniatura",
            'imageUrl': 'URL\x20imagen\x20/\x20Banner',
            'welcomeMsg': "Mensaje de bienvenida",
            'leaveMsg': 'Mensaje\x20de\x20despedida',
            'rulesText': "Texto de reglas",
            'maxMessages': "Máximo de mensajes",
            'spamWindow': "Ventana anti-spam (segundos)",
            'maxMentionsField': 'Máximo\x20de\x20menciones',
            'antiLinksField': 'Anti-enlaces\x20(sí/no)',
            'antiInvitesField': "Anti-invitaciones (sí/no)",
            'nameFormat': 'Nombre\x20({user})',
            'limitField': 'Límite\x20(0\x20=\x20ilimitado)',
            'configureRulesChannel': 'Configura\x20un\x20canal\x20de\x20texto\x20para\x20las\x20reglas.',
            'rulesSent': "Reglas enviadas.",
            'serverRules': "Reglas del servidor",
            'prefixUse': 'Usa',
            'usage': 'Uso:',
            'warned': 'ha\x20sido\x20advertido.',
            'noReason': 'Sin\x20razón',
            'mutedFor': 'silenciado\x20por',
            'minutes': 'minuto(s)',
            'notMuted': 'ya\x20no\x20está\x20silenciado.',
            'welcomeTitle': '👋\x20¡Bienvenido!',
            'goodbyeTitle': '🚪\x20Adiós',
            'welcomeImageField': 'Imagen\x20de\x20bienvenida',
            'dmMessage': "Mensaje privado (MD)",
            'enableDM': "MD activado",
            'blockAccess': "Bloquear acceso sin validación",
            'assignOnJoin': 'Asignar\x20al\x20llegar',
            'conditions': 'Condiciones\x20de\x20asignación',
            'none': 'Ninguna',
            'test': 'Probar',
            'autoRoleLog': 'Rol\x20automático\x20DashBot',
            'logsInstalled': "✅ Sistema de registros DashBot instalado y activado.",
            'anError': 'Ha\x20ocurrido\x20un\x20error.',
            'logSecDelete': '🔒\x20Mensaje\x20eliminado\x20de\x20<@{user}>\x20(filtro\x20de\x20seguridad).',
            'logMemberJoin': '👋\x20<@{user}>\x20se\x20unió\x20al\x20servidor.\x20Miembros:\x20**{count}**.',
            'logMemberLeave': '🚪\x20**{tag}**\x20salió\x20del\x20servidor.\x20Miembros:\x20**{count}**.',
            'logModClear': "🧹 {amount} mensajes eliminados por <@{user}>.",
            'logModWarn': '⚠️\x20<@{target}>\x20advertido\x20por\x20<@{user}>\x20—\x20{reason}',
            'logModMute': "🔇 <@{target}> silenciado {minutes} min por <@{user}>.",
            'logVoiceCreate': '🔊\x20Canal\x20temporal\x20creado\x20para\x20<@{user}>.',
            'logMsgDelete': "🗑️ Mensaje eliminado en <#{channel}>{author}.",
            'logRoleCreate': "➕ Rol creado: **{name}**.",
            'logRoleDelete': "➖ Rol eliminado: **{name}**.",
            'logRoleUpdate': "🎭 Roles modificados para <@{user}>.",
            'logChannelCreate': '➕\x20Canal\x20creado:\x20**{name}**.',
            'logChannelDelete': "➖ Canal eliminado: **{name}**.",
            'logChannelRename': "✏️ Canal renombrado: **{before}** → **{after}**.",
            'tickets': "Tickets",
            'recruitment': "Reclutamiento",
            'captcha': "Captcha",
            'serverCreator': 'Creador\x20de\x20servidor',
            'panelChannel': "Canal del panel",
            'supportRoles': 'Roles\x20de\x20soporte',
            'ticketCat': 'Categoría\x20de\x20tickets',
            'recruitCat': 'Categoría\x20de\x20reclutamiento',
            'reasons': 'Razones',
            'addReason': "Añadir razón",
            'removeReason': "Quitar razón",
            'addSupportRole': "Añadir rol",
            'removeSupportRole': 'Quitar\x20rol',
            'listSupportRoles': 'Lista\x20de\x20roles',
            'listReasons': "Lista de razones",
            'sendPanel': "Enviar panel",
            'editRecruitMsg': 'Editar\x20mensaje',
            'noReasons': 'No\x20hay\x20razones\x20configuradas.',
            'panelSent': "✅ Panel enviado a",
            'enableFirst': "Activa el módulo primero.",
            'configureChannelFirst': "Configura un canal primero.",
            'addReasonFirst': 'Añade\x20al\x20menos\x20una\x20razón.',
            'channelNotExist': 'El\x20canal\x20configurado\x20no\x20existe.',
            'noPermission': "No tienes permiso.",
            'ticketCreated': "✅ Ticket creado en",
            'recruitCreated': '✅\x20Solicitud\x20creada\x20en',
            'claimMsg': "Tomado por",
            'archiveMsg': "✅ Archivado. El canal será eliminado.",
            'deleteCountdown': "🗑️ Este canal será eliminado en 8 segundos...",
            'logTicketCreate': "🎫 Ticket creado por <@{user}> — Razón: **{reason}**",
            'logTicketArchive': "📋 Ticket archivado por <@{user}> — Canal: **{channel}**",
            'logTicketClaim': "✅ Ticket tomado por <@{user}> — Canal: **{channel}**",
            'logTicketDelete': "🗑️ Ticket eliminado por <@{user}> — Canal: **{channel}**",
            'logRecruitCreate': '📝\x20Solicitud\x20por\x20<@{user}>\x20—\x20Puesto:\x20**{reason}**',
            'logRecruitArchive': "📋 Solicitud archivada por <@{user}> — Canal: **{channel}**",
            'logRecruitClaim': '✅\x20Solicitud\x20tomada\x20por\x20<@{user}>\x20—\x20Canal:\x20**{channel}**',
            'logRecruitDelete': '🗑️\x20Solicitud\x20eliminada\x20por\x20<@{user}>\x20—\x20Canal:\x20**{channel}**',
            'captchaWelcome': "¡Bienvenido a **{server}**!\nResuelve el captcha para acceder al servidor.",
            'captchaQuestion': '❓\x20¿Cuál\x20es\x20el\x20resultado\x20de\x20{a}\x20{op}\x20{b}/',
            'captchaSuccess': "✅ Captcha resuelto. Ahora puedes ver las reglas.",
            'captchaFail': '❌\x20Respuesta\x20incorrecta.\x20Intenta\x20de\x20nuevo.',
            'captchaRole': "No verificado",
            'captchaVerifiedRole': 'Verificado',
            'captchaLog': '🔐\x20Captcha\x20resuelto\x20por\x20<@{user}>.',
            'captchaLogFail': "❌ Intento fallido de <@{user}> — Respuesta: `{answer}`",
            'captchaAlreadyVerified': '¡Ya\x20estás\x20verificado!',
            'unverifiedRole': "Rol no verificado",
            'verifiedRole': 'Rol\x20verificado',
            'captchaDesc': "Cuando está activado, se crea un canal captcha. Los nuevos miembros deben resolver un problema matemático. Luego ven las reglas y aceptan con una reacción.",
            'rulesAccept': 'Reacciona\x20con\x20✅\x20para\x20aceptar\x20las\x20reglas\x20y\x20acceder\x20al\x20servidor.',
            'rulesAccepted': "✅ Has aceptado las reglas. ¡Bienvenido!",
            'serverCreatorTitle': "🔨 Creador de servidor",
            'serverCreatorDesc': 'Configura\x20la\x20plantilla\x20y\x20haz\x20clic\x20en\x20\x22Crear\x22\x20para\x20generar\x20el\x20servidor.',
            'createServer': "Crear servidor",
            'serverCreated': "✅ ¡Servidor creado con éxito!",
            'addCategory': 'Añadir\x20categoría',
            'addChannelToCat': 'Añadir\x20canal',
            'categoryName': 'Nombre\x20de\x20categoría',
            'channelName': 'Nombre\x20del\x20canal',
            'privateCategory': "Privada (solo staff)",
            'publicCategory': 'Pública',
            'economy': 'Economía',
            'levels': "Niveles",
            'autoRole': "Rol automático",
            'wordReactions': "Reacciones de palabras",
            'recurringMessages': "Mensajes recurrentes",
            'announcements': "Anuncios",
            'socialNotifs': 'Notificaciones\x20sociales',
            'calendar': "Calendario",
            'balance': 'Saldo',
            'daily': "Diario",
            'rank': 'Rango',
            'leaderboard': "Clasificación",
            'xpLabel': 'XP',
            'levelLabel': 'Nivel',
            'addWord': 'Añadir\x20palabra',
            'word': 'Palabra',
            'reaction': "Reacción",
            'addMessage': "Añadir mensaje",
            'channelLabel': 'Canal',
            'interval': "Intervalo (min)",
            'createAnnouncement': 'Crear\x20anuncio',
            'announceChannel': "Canal de anuncios",
            'socialChannel': 'Canal\x20de\x20notificaciones',
            'calendarRewards': 'Recompensas\x20del\x20calendario',
            'economyDesc': 'Gana\x20{coins}\x20hablando\x20y\x20con\x20el\x20comando\x20`{prefix}daily`.',
            'levelsDesc': "Gana XP hablando y sube de nivel.",
            'autoRoleDesc': "Asigna un rol automáticamente a los nuevos miembros.",
            'wordReactionsDesc': 'Configure\x20las\x20reacciones\x20automáticas\x20activadas\x20cuando\x20se\x20detecta\x20una\x20palabra\x20o\x20expresión\x20en\x20un\x20mensaje.\x20Puede\x20crear\x20respuestas\x20personalizadas,\x20añadir\x20reacciones,\x20eliminar\x20un\x20mensaje\x20o\x20aplicar\x20una\x20acción\x20específica\x20según\x20la\x20palabra\x20detectada.',
            'recurringDesc': 'Envía\x20mensajes\x20programados\x20en\x20un\x20canal.',
            'announcementDesc': 'Permite\x20a\x20los\x20usuarios\x20crear\x20anuncios.',
            'socialDesc': 'Sigue\x20a\x20los\x20miembros\x20y\x20notifica\x20cuando\x20están\x20activos.',
            'calendarDesc': 'Calendario\x20de\x20fin\x20de\x20año\x20con\x20XP\x20y\x20roles\x20para\x20ganar.',
            'moderationDesc': 'Configure\x20las\x20herramientas\x20de\x20moderación\x20de\x20DashBot.\x20Este\x20módulo\x20permite\x20gestionar\x20los\x20comandos\x20de\x20moderación\x20(ban,\x20kick,\x20timeout,\x20advertencias,\x20purge…),\x20los\x20permisos\x20de\x20los\x20moderadores\x20y\x20los\x20parámetros\x20relacionados\x20con\x20las\x20sanciones\x20manuales.',
            'autoSanctionsDesc': "Configure las sanciones aplicadas automáticamente cuando un miembro infringe las reglas del servidor. Defina el número de advertencias antes de un timeout, kick o baneo, así como las diferentes acciones automáticas de DashBot.",
            'protectionFiltresDesc': "Configure los sistemas de protección automática de DashBot. Este módulo permite activar y personalizar el anti-spam, anti-enlaces, anti-invitaciones de Discord, anti-raid, anti-bot, anti-cuentas recientes, anti-menciones y anti-insultos.",
            'modLogsDesc': "Configure los registros de moderación de su servidor. Elija el canal donde se enviarán los registros y seleccione los eventos a registrar, como baneos, kicks, timeouts, advertencias, eliminaciones de mensajes, ediciones y otras acciones de moderación.",
            'dailyClaimed': "¡Diario ya reclamado! Intenta de nuevo en {time}.",
            'dailyReward': '✅\x20Diario\x20reclamado:\x20**{amount}**\x20{coins}!',
            'notEnoughMoney': "Saldo insuficiente.",
            'levelUp': '🎉\x20¡Felicidades\x20<@{user}>,\x20has\x20subido\x20al\x20nivel\x20**{level}**!',
            'xpGain': "+{xp} XP",
            'shop': "Tienda",
            'shopDesc': "Compra roles con tus {coins}.",
            'giveaways': 'Sorteos',
            'giveawaysDesc': "Organiza sorteos con sorteo aleatorio.",
            'birthdays': "Cumpleaños",
            'birthdaysDesc': "Asigna un rol en los cumpleaños.",
            'polls': "Encuestas / Sugerencias",
            'pollsDesc': 'Crea\x20encuestas\x20con\x20reacciones.',
            'reminders': "Recordatorios",
            'remindmeUsage': 'Uso:\x20`{prefix}remindme\x2030min\x20<mensaje>`',
            'remindmeSet': '✅\x20Recordatorio\x20programado\x20para\x20**{time}**.',
            'remindmeDone': '⏰\x20Recordatorio:\x20{message}',
            'remindmeInvalid': 'Formato\x20inválido.\x20Ej:\x20`!remindme\x2030min\x20mi\x20mensaje`',
            'shopTitle': "🏪 Tienda",
            'shopEmpty': 'No\x20hay\x20artículos\x20en\x20la\x20tienda.',
            'shopItem': '**{name}**\x20—\x20{price}\x20🪙',
            'buySuccess': '✅\x20Has\x20comprado\x20**{item}**\x20por\x20{price}\x20🪙!',
            'buyFail': "❌ Saldo insuficiente. Necesitas **{missing}** 🪙 más.",
            'buyNotFound': '❌\x20Artículo\x20no\x20encontrado.',
            'giveawaySetup': "🎉 **Sorteo: {prize}**\n¡Haz clic en el botón para participar!\nTermina en: **{time}**",
            'giveawayEnter': "Participar",
            'giveawayEnded': "🎉 ¡Sorteo terminado!",
            'giveawayWinners': "Ganador(es): {winners}",
            'giveawayNoParticipants': "Sin participantes.",
            'pollTitle': '📊\x20Encuesta',
            'pollDesc': "{question}\n\nReacciona con ✅ o ❌ para votar.",
            'suggestTitle': '💡\x20Sugerencia',
            'suggestBy': "Sugerencia de {user}",
            'pollSent': "✅ Encuesta creada en",
            'setbirthdayDone': "✅ Cumpleaños guardado: **{date}**",
            'setbirthdayInvalid': 'Formato\x20inválido.\x20Usa\x20`!setbirthday\x20DD/MM`.',
            'birthdayRoleGiven': '🎂\x20¡Feliz\x20cumpleaños\x20<@{user}>!\x20Rol\x20asignado.',
            'addShopItem': "Añadir artículo",
            'shopRole': "Rol",
            'shopPrice': "Precio",
            'shopChannel': "Canal de tienda",
            'catGeneral': 'General',
            'catProtection': 'Protección',
            'catWelcome': "Proceso de bienvenida",
            'catRoles': 'Roles',
            'catCommunity': "Comunidad",
            'catProgression': 'Progresión',
            'catCommunication': 'Comunicación',
            'catEvents': 'Eventos',
            'catVoice': "Canales de voz temporales",
            'catGeneralDesc': 'Configure\x20los\x20ajustes\x20principales\x20de\x20DashBot\x20para\x20su\x20servidor.\x20Esta\x20categoría\x20permite\x20gestionar\x20el\x20idioma\x20del\x20bot,\x20los\x20registros,\x20los\x20permisos\x20generales\x20y\x20los\x20parámetros\x20globales.',
            'catProtectionDesc': "Refuerce la seguridad de su servidor con las herramientas de protección de DashBot. Puede configurar la moderación, los filtros automáticos, las sanciones, los sistemas anti-spam, anti-enlaces, anti-raid y las reacciones automáticas a palabras.",
            'catWelcomeDesc': 'Personalice\x20la\x20llegada\x20e\x20integración\x20de\x20los\x20nuevos\x20miembros.\x20Esta\x20categoría\x20incluye\x20mensajes\x20de\x20bienvenida\x20y\x20despedida,\x20reglas,\x20captcha\x20y\x20asignación\x20automática\x20de\x20roles.',
            'catRolesDesc': 'Gestione\x20fácilmente\x20todos\x20los\x20roles\x20de\x20su\x20servidor.\x20Configure\x20roles\x20automáticos,\x20roles\x20por\x20reacción,\x20menús\x20de\x20roles\x20y\x20diferentes\x20métodos\x20de\x20asignación.',
            'catCommunityDesc': "Centralice las herramientas destinadas a su comunidad. Esta categoría incluye tickets, reclutamiento, sugerencias, encuestas y cumpleaños para facilitar el intercambio entre miembros y el staff.",
            'catProgressionDesc': 'Fomente\x20la\x20actividad\x20de\x20su\x20comunidad\x20mediante\x20los\x20sistemas\x20de\x20progresión.\x20Configure\x20niveles,\x20economía\x20del\x20servidor,\x20la\x20tienda\x20y\x20las\x20recompensas\x20asociadas.',
            'catCommunicationDesc': 'Automatice\x20la\x20comunicación\x20de\x20su\x20servidor.\x20Configure\x20anuncios,\x20mensajes\x20recurrentes\x20y\x20notificaciones\x20sociales\x20para\x20informar\x20a\x20sus\x20miembros\x20de\x20manera\x20eficaz.',
            'catEventsDesc': "Anime a su comunidad con los diferentes eventos ofrecidos por DashBot. Esta categoría incluye sorteos y el calendario de eventos.",
            'catVoiceDesc': 'Permita\x20que\x20sus\x20miembros\x20creen\x20y\x20gestionen\x20sus\x20propios\x20canales\x20de\x20voz\x20temporales.\x20Configure\x20los\x20permisos,\x20las\x20opciones\x20de\x20creación\x20y\x20los\x20parámetros\x20de\x20funcionamiento\x20de\x20estos\x20canales.',
            'resetModule': "Restablecer módulo",
            'comingSoon': "Función próximamente. Configuración detallada disponible pronto.",
            'maintenanceEnabled': '🔧\x20Modo\x20mantenimiento\x20activado.\x0a\x0aEl\x20servidor\x20está\x20actualmente\x20en\x20mantenimiento.\x20Solo\x20el\x20personal\x20puede\x20acceder\x20a\x20los\x20canales\x20durante\x20este\x20período.',
            'maintenanceDisabled': "✅ Modo mantenimiento desactivado.\n\nEl servidor ya está accesible para los miembros.",
            'maintenanceAlreadyOn': "⚠️ El modo mantenimiento ya está activado.",
            'maintenanceAlreadyOff': '⚠️\x20El\x20modo\x20mantenimiento\x20ya\x20está\x20desactivado.',
            'maintenanceLogOn': '🔧\x20Mantenimiento\x20activado\x20por\x20<@{user}>.',
            'maintenanceLogOff': '✅\x20Mantenimiento\x20desactivado\x20por\x20<@{user}>.'
        };
    return (_0x263535['language'] === 'es' ? _0x12f72a : _0x263535["language"] === 'en' ? _0x477b18 : _0x339bea)[_0x4b0f92] || _0x4b0f92;
}

function t(_0x56eb47, _0x4106cf, _0x3b2424) {
    const _0xb688f5 = _0x15878f;
    let _0x3f484a = tr(_0x56eb47, _0x4106cf);
    if (_0x3b2424) {
        for (const [_0x38b496, _0x19944d] of Object["entries"](_0x3b2424)) _0x3f484a = _0x3f484a['replaceAll']('{' + _0x38b496 + '}', String(_0x19944d));
    }
    return _0x3f484a;
}
const categories = {
    'general': {
        'key': 'catGeneral',
        'descKey': "catGeneralDesc",
        'emoji': '⚙️',
        'modules': ["general", "logs"]
    },
    'protection': {
        'key': 'catProtection',
        'descKey': 'catProtectionDesc',
        'emoji': "🛡️",
        'modules': ['moderation', 'autoSanctions', 'protectionFiltres', "wordReactions"]
    },
    'welcome': {
        'key': "catWelcome",
        'descKey': "catWelcomeDesc",
        'emoji': '👋',
        'modules': ['welcome-arrival', 'welcome-departure', "welcome-rules", "welcome-captcha", 'welcome-autorole']
    },
    'roles': {
        'key': 'catRoles',
        'descKey': "catRolesDesc",
        'emoji': '🎭',
        'modules': ["roles"]
    },
    'community': {
        'key': 'catCommunity',
        'descKey': "catCommunityDesc",
        'emoji': '🎫',
        'modules': ["ticket", 'recruitment', 'birthdays', 'giveaways']
    },
    'progression': {
        'key': "catProgression",
        'descKey': "catProgressionDesc",
        'emoji': '📈',
        'modules': ["levels", 'leaderboard', "economy", 'shop']
    },
    'communication': {
        'key': 'catCommunication',
        'descKey': "catCommunicationDesc",
        'emoji': '📢',
        'modules': ['socialNotifs', 'announcements']
    },
    'events': {
        'key': "catEvents",
        'descKey': 'catEventsDesc',
        'emoji': '🎉',
        'modules': ["calendar"]
    },
    'voice': {
        'key': 'catVoice',
        'descKey': "catVoiceDesc",
        'emoji': '🔊',
        'modules': ['voices']
    }
};

function categoryForModule(_0x49594c) {
    const _0x587e51 = _0x15878f;
    for (const [_0x4fdfc2, _0x4c4221] of Object["entries"](categories))
        if (_0x4c4221['modules']['includes'](_0x49594c)) return _0x4fdfc2;
    return null;
}

function status(_0x187254, _0x2f1f76) {
    const _0x5f0001 = _0x15878f;
    return _0x2f1f76 ? '🟢\x20' + tr(_0x187254, "enabled") : '🔴\x20' + tr(_0x187254, 'disabled');
}

function toggleButton(_0x382234, _0x3c1f4d, _0x45da9c) {
    const _0x2f7575 = _0x15878f;
    return button(_0x3c1f4d, _0x45da9c ? tr(_0x382234, 'deactivate') : tr(_0x382234, "activate"), _0x45da9c ? ButtonStyle['Danger'] : ButtonStyle["Success"], _0x45da9c ? '🔴' : '🟢');
}

function isAdmin(_0x52cb2a) {
    const _0x8397e5 = _0x15878f;
    return _0x52cb2a["memberPermissions"]?.["has"](PermissionFlagsBits['Administrator']);
}

function isSupport(_0x425758, _0x45c990, _0x2e4c63) {
    const _0x2cf5b2 = _0x15878f;
    if (isAdmin(_0x425758)) return !![];
    const _0x33d4f2 = _0x45c990[_0x2e4c63]?.['supportRoleIds'] || [];
    return _0x425758['member']?.["roles"]?.['cache']?.["some"](_0x17480f => _0x33d4f2['includes'](_0x17480f['id']));
}

function mention(_0x2851f8, _0x379c91) {
    return _0x2851f8 ? '<#' + _0x2851f8 + '>' : _0x379c91;
}

function role(_0x370dd6, _0x3bb39f) {
    const _0x17f6a8 = _0x15878f;
    return _0x370dd6 ? "<@&" + _0x370dd6 + '>' : _0x3bb39f;
}

function isSendable(_0x4c9326) {
    const _0x214c70 = _0x15878f;
    return typeof _0x4c9326?.["send"] === 'function';
}

function button(_0x14d535, _0x3a0c8b, _0x2e7e0b = ButtonStyle["Secondary"], _0x292e8e) {
    const _0x246a49 = _0x15878f,
        _0x346a5c = new ButtonBuilder()['setCustomId'](_0x14d535)["setLabel"](_0x3a0c8b)['setStyle'](_0x2e7e0b);
    if (_0x292e8e) _0x346a5c["setEmoji"](_0x292e8e);
    return _0x346a5c;
}

function row(..._0x8f088d) {
    const _0xd1dc7f = _0x15878f;
    return new ActionRowBuilder()["addComponents"](_0x8f088d);
}

function configMenu(_0x54d592) {
    const _0x3f7fd8 = _0x15878f;
    return row(new StringSelectMenuBuilder()['setCustomId']('cfg:page')['setPlaceholder'](tr(_0x54d592, "choose"))["addOptions"](Object['entries'](categories)['map'](([_0x152784, _0x29b2ce]) => ({
        'label': tr(_0x54d592, _0x29b2ce["key"]),
        'value': 'cat:' + _0x152784,
        'emoji': _0x29b2ce['emoji']
    }))));
}

function parseDuration(_0x5af2) {
    const _0x1a33 = _0x5af2['match'](/^(\d+)(s|m|h|j|d)$/i);
    if (!_0x1a33) return null;
    const _0x45b2 = parseInt(_0x1a33[0x1]),
        _0x6b35 = _0x1a33[0x2]['toLowerCase'](),
        _0x9c21 = _0x6b35 === 's' ? 0x3e8 : _0x6b35 === 'm' ? 0xea60 : _0x6b35 === 'h' ? 0x36ee80 : 0x5265c00;
    return _0x45b2 * _0x9c21;
}

function giveawayEmbed(_0x54c1, _0x5f2a, _0x7d4b) {
    const _0xaabb = Date['now'](),
        _0xleft = Math['max'](0x0, (_0x5f2a['endTime'] || _0xaabb) - _0xaabb);
    let _0xrem = '';
    if (_0x5f2a['ended']) _0xrem = 'Terminé';
    else if (_0xleft >= 0x5265c00) {
        const _0xdd = Math['ceil'](_0xleft / 0x5265c00);
        _0xrem = _0xdd + ' jour' + (_0xdd > 1 ? 's' : '');
    } else if (_0xleft >= 0x36ee80) {
        const _0xhh = Math['ceil'](_0xleft / 0x36ee80);
        _0xrem = _0xhh + ' heure' + (_0xhh > 1 ? 's' : '');
    } else if (_0xleft >= 0xea60) {
        const _0xmm = Math['ceil'](_0xleft / 0xea60);
        _0xrem = _0xmm + ' minute' + (_0xmm > 1 ? 's' : '');
    } else _0xrem = Math['max'](0x1, Math['ceil'](_0xleft / 0x3e8)) + ' seconde' + (Math['max'](0x1, Math['ceil'](_0xleft / 0x3e8)) > 1 ? 's' : '');
    const _0xcond = [];
    if (_0x5f2a['requiredRoleId']) _0xcond['push']('**Rôle\x20requis\x20:**\x20<@&' + _0x5f2a['requiredRoleId'] + '>');
    if (_0x5f2a['minMembers'] > 0x0) _0xcond['push']('**Membres\x20min\x20:**\x20' + _0x5f2a['minMembers']);
    if (_0x5f2a['description']) _0xcond['push']('**Description\x20:**\x20' + _0x5f2a['description']);
    const _0xents = _0x5f2a['entrants'] || [],
        _0xgwWins = _0x5f2a['winners'] || [],
        _0xwinnerStr = _0xgwWins['length'] ? ('\x0a\x0a**Gagnants\x20:**\x0a' + _0xgwWins['map'](_0x2e8c => '<@' + _0x2e8c + '>')['join']('\x0a')) : '';
    return new EmbedBuilder()['setColor'](_0x5f2a['ended'] ? '#ED4245' : '#FEE75C')['setTitle']('🎉\x20Giveaway')['setDescription']('**Lot\x20:\x20**\x0a' + _0x5f2a['prize'] + '\x0a\x0a**Gagnants\x20:\x20**\x0a' + (_0x5f2a['winnersCount'] || 0x1) + '\x0a\x0a**Fin\x20:\x20**\x0a' + _0xrem + '\x0a\x0a**Organisé\x20par\x20:**\x0a' + (_0x5f2a['creatorId'] ? ('<@' + _0x5f2a['creatorId'] + '>') : 'Inconnu') + (_0xcond['length'] ? ('\x0a\x0a' + _0xcond['join']('\x0a')) : '') + '\x0a\x0a**Participants\x20:\x20**\x0a' + _0xents['length'] + _0xwinnerStr)['setFooter']({
        'text': _0x7d4b['name']
    })['setTimestamp']();
}

function pickGiveawayWinners(_0x5f2a, _0xexc) {
    let _0xpool = [...(_0x5f2a['entrants'] || [])];
    if (_0xexc && _0xexc['length'])
        for (const _0x2e8c of _0xexc) _0xpool = _0xpool['filter'](_0x3b6f => _0x3b6f !== _0x2e8c);
    const _0xw = [],
        _0x1f4e = Math['min']((_0x5f2a['winnersCount'] || 0x1), _0xpool['length']);
    for (let _0x6a2b = 0x0; _0x6a2b < _0x1f4e; _0x6a2b++) {
        const _0x9d8f = Math['floor'](Math['random']() * _0xpool['length']);
        _0xw['push'](_0xpool['splice'](_0x9d8f, 0x1)[0x0]);
    }
    return _0xw;
}

function pagePayload(_0x28dd35, _0x338fe5) {
    const _0x10e876 = _0x15878f,
        _0x350d57 = settings(_0x28dd35['id']),
        _0x37b2b2 = tr(_0x350d57, 'noChannel'),
        _0x533ffc = new EmbedBuilder()['setColor']("#5865F2")['setFooter']({
            'text': 'DashBot\x20•\x20' + _0x28dd35['name']
        })['setTimestamp'](),
        _0x2a5782 = [configMenu(_0x350d57)];
    if (_0x338fe5 === "home") {
        const _0x901146 = _0x28dd35['client']['user'];
        _0x533ffc['setTitle'](tr(_0x350d57, 'dashboard'))['setDescription']('Bienvenue\x20dans\x20le\x20centre\x20de\x20configuration\x20de\x20DashBot.\x20Personnalisez\x20les\x20différentes\x20fonctionnalités\x20du\x20bot\x20grâce\x20aux\x20modules\x20disponibles\x20ci-dessous\x20et\x20adaptez-les\x20aux\x20besoins\x20de\x20votre\x20communauté.\x20Sélectionnez\x20un\x20module\x20pour\x20commencer.\x0a\x0a**Discord\x20Support**\x0a' + SUPPORT_URL + '\x0a')["addFields"]({
            'name': tr(_0x350d57, "botLabel"),
            'value': (_0x901146?.['tag'] || "DashBot") + '\x0a' + tr(_0x350d57, 'botStatus'),
            'inline': !![]
        }, {
            'name': tr(_0x350d57, 'settingsLabel'),
            'value': tr(_0x350d57, "langLabel") + " : **" + (_0x350d57['language'] === 'fr' ? 'Français' : _0x350d57['language'] === 'en' ? 'English' : 'Español') + "**\n" + tr(_0x350d57, 'prefixLabel') + " : `" + _0x350d57["prefix"] + '`',
            'inline': !![]
        }, {
            'name': tr(_0x350d57, "serverLabel"),
            'value': tr(_0x350d57, "members") + '\x20:\x20**' + _0x28dd35['memberCount'] + "**\n" + tr(_0x350d57, "idLabel") + '\x20:\x20`' + _0x28dd35['id'] + '`',
            'inline': !![]
        });
        if (_0x901146) _0x533ffc['setAuthor']({
            'name': tr(_0x350d57, 'serverConfig'),
            'iconURL': _0x901146["displayAvatarURL"]()
        });
        if (_0x28dd35["iconURL"]()) _0x533ffc["setThumbnail"](_0x28dd35["iconURL"]());
        _0x2a5782["push"](row(new ButtonBuilder()['setLabel']('Discord\x20Support')['setStyle'](ButtonStyle['Link'])['setURL'](SUPPORT_URL)));
    } else {
        if (_0x338fe5['startsWith']('cat:')) {
            const _0x53af63 = _0x338fe5['slice'](0x4),
                _0x1d83be = categories[_0x53af63];
            if (_0x1d83be) {
                _0x533ffc["setTitle"](_0x1d83be["emoji"] + '\x20' + tr(_0x350d57, _0x1d83be['key']))['setDescription'](tr(_0x350d57, _0x1d83be['descKey']));
                if (_0x53af63 === 'welcome') _0x2a5782['push'](row(button("cfg:page:welcome-arrival", tr(_0x350d57, 'welcomeArrival'), ButtonStyle["Primary"]), button('cfg:page:welcome-departure', tr(_0x350d57, "welcomeDeparture"), ButtonStyle["Primary"]), button('cfg:page:welcome-rules', tr(_0x350d57, "welcomeRules"), ButtonStyle['Primary'])), row(button('cfg:page:welcome-captcha', tr(_0x350d57, 'welcomeCaptcha'), ButtonStyle['Primary']), button('cfg:page:welcome-autorole', tr(_0x350d57, 'welcomeAutorole'), ButtonStyle["Primary"])));
                else {
                    let _0xc0f811 = [];
                    for (const _0x277524 of _0x1d83be["modules"]) {
                        _0xc0f811["push"](button('cfg:page:' + _0x277524, tr(_0x350d57, _0x277524), ButtonStyle['Primary'])), _0xc0f811['length'] === 0x5 && (_0x2a5782["push"](row(..._0xc0f811)), _0xc0f811 = []);
                    }
                    if (_0xc0f811["length"]) _0x2a5782['push'](row(..._0xc0f811));
                }
            }
        } else {
            if (_0x338fe5 === "general") _0x533ffc["setTitle"]("⚙️ " + tr(_0x350d57, "general"))['setDescription']("🌐 **" + tr(_0x350d57, "langLabel") + "** : " + (_0x350d57["language"] === 'fr' ? 'Français' : _0x350d57['language'] === 'en' ? "English" : "Español") + "\n⌨️ **" + tr(_0x350d57, 'prefixLabel') + "** : `" + _0x350d57['prefix'] + "`\n\n" + t(_0x350d57, 'prefixDesc', {
                'prefix': _0x350d57["prefix"]
            })), _0x2a5782['push'](row(button("cfg:language", tr(_0x350d57, "language"), ButtonStyle['Primary'], '🌐'), button('cfg:prefix', tr(_0x350d57, "prefix"), ButtonStyle['Primary'], '⌨️')));
            else {
                if (_0x338fe5 === 'moderation') {
                    const _0x4f597f = _0x350d57['moderation'];
                    _0x533ffc['setTitle']("🛡️ " + tr(_0x350d57, "moderation"))["setDescription"](tr(_0x350d57, 'moderationDesc') + '\x0a\x0a**' + tr(_0x350d57, 'muteRole') + "** : " + role(_0x4f597f['muteRoleId'], _0x37b2b2) + '\x0a\x0a' + tr(_0x350d57, "commandsLabel") + '\x20:\x20`/avertir`,\x20`/nettoyer`,\x20`/rendre-muet`,\x20`/retirer-muet`.');
                } else {
                    if (_0x338fe5 === "security") {
                        const _0x1d4c04 = _0x350d57["security"];
                        _0x533ffc["setTitle"]("🔒 " + tr(_0x350d57, 'security'))["setDescription"]('**' + status(_0x350d57, _0x1d4c04["enabled"]) + "**\n\n" + tr(_0x350d57, "antiLinks") + " : " + (_0x1d4c04["antiLinks"] ? '✅' : '❌') + " · " + tr(_0x350d57, "antiInvites") + " : " + (_0x1d4c04["antiInvites"] ? '✅' : '❌') + '\x0a' + tr(_0x350d57, 'antiSpamLabel') + '\x20:\x20' + (_0x1d4c04['antiSpam'] ? "✅ (" + _0x1d4c04["maxMessages"] + " / " + _0x1d4c04["intervalSeconds"] + 's)' : '❌') + '\x20·\x20' + tr(_0x350d57, 'maxMentions') + " : " + _0x1d4c04['mentionLimit']), _0x2a5782['push'](row(toggleButton(_0x350d57, 'cfg:toggle:security', _0x1d4c04["enabled"]), button('cfg:edit-security', tr(_0x350d57, "edit"), ButtonStyle["Primary"])));
                    } else {
                        if (_0x338fe5 === 'welcome-arrival') {
                            const _0x4f6584 = _0x350d57["welcome"];
                            _0x533ffc['setTitle']("👋 " + tr(_0x350d57, 'welcomeArrival'))['setDescription']('**' + status(_0x350d57, _0x4f6584['enabled']) + "**\n\n**" + tr(_0x350d57, 'welcomeMsg') + '**\x20:\x20' + (_0x4f6584['welcomeText'] || '—')["slice"](0x0, 0xc8) + '\x0a**' + tr(_0x350d57, 'channel') + "** : " + mention(_0x4f6584['channelId'], _0x37b2b2) + '\x0a**' + tr(_0x350d57, "welcomeImageField") + '**\x20:\x20' + (_0x4f6584["welcomeImage"] ? '✅' : '❌') + "\n**" + tr(_0x350d57, "dmMessage") + "** : " + (_0x4f6584["enableDM"] ? '✅' : '❌') + '\x0a\x0a' + tr(_0x350d57, "variables") + " : `{user}`, `{server}`, `{memberCount}`"), _0x2a5782["push"](row(toggleButton(_0x350d57, 'cfg:toggle:welcome', _0x4f6584["enabled"]), button("cfg:channel:welcome:channelId", tr(_0x350d57, "channel"), ButtonStyle["Primary"])), row(button("cfg:edit-welcome", tr(_0x350d57, "edit"), ButtonStyle["Secondary"], '✏️'), button('cfg:test-welcome', tr(_0x350d57, 'test'), ButtonStyle["Success"], '🧪')));
                        } else {
                            if (_0x338fe5 === "welcome-departure") {
                                const _0x103d4f = _0x350d57["welcome"];
                                _0x533ffc["setTitle"]("🚪 " + tr(_0x350d57, "welcomeDeparture"))['setDescription']('**' + status(_0x350d57, _0x103d4f["leaveEnabled"]) + "**\n\n**" + tr(_0x350d57, "leaveMsg") + '**\x20:\x20' + (_0x103d4f['leaveText'] || '—')['slice'](0x0, 0xc8) + '\x0a**' + tr(_0x350d57, "channel") + '**\x20:\x20' + mention(_0x103d4f['leaveChannelId'], _0x37b2b2) + '\x0a\x0a' + tr(_0x350d57, "variables") + '\x20:\x20`{user}`,\x20`{server}`,\x20`{memberCount}`'), _0x2a5782["push"](row(toggleButton(_0x350d57, 'cfg:toggle:welcome:leave', _0x103d4f["leaveEnabled"]), button("cfg:channel:welcome:leaveChannelId", tr(_0x350d57, "channel"), ButtonStyle['Primary'])), row(button('cfg:edit-welcome-leave', tr(_0x350d57, "edit"), ButtonStyle["Secondary"], '✏️'), button("cfg:test-welcome-leave", tr(_0x350d57, "test"), ButtonStyle["Success"], '🧪')));
                            } else {
                                if (_0x338fe5 === "welcome-rules") {
                                    const _0x2be627 = _0x350d57["rules"];
                                    _0x533ffc["setTitle"]('📜\x20' + tr(_0x350d57, 'welcomeRules'))["setDescription"]('**' + status(_0x350d57, _0x2be627['enabled']) + '**\x0a\x0a**' + tr(_0x350d57, 'channel') + "** : " + mention(_0x2be627["channelId"], _0x37b2b2) + '\x0a**' + tr(_0x350d57, "auto") + '**\x20:\x20' + role(_0x2be627['roleId'], _0x37b2b2) + "\n**" + tr(_0x350d57, 'blockAccess') + '**\x20:\x20' + (_0x2be627['blockAccess'] ? '✅' : '❌') + '\x0a\x0a' + (_0x2be627['text'] || '—')["slice"](0x0, 0x320)), _0x2a5782["push"](row(toggleButton(_0x350d57, "cfg:toggle:rules", _0x2be627["enabled"]), button("cfg:channel:rules:channelId", tr(_0x350d57, 'channel'), ButtonStyle["Primary"]), button("cfg:role:rules:roleId", tr(_0x350d57, "auto"), ButtonStyle["Primary"])), row(button('cfg:edit-rules', tr(_0x350d57, 'edit'), ButtonStyle['Secondary']), button("cfg:send-rules", tr(_0x350d57, "send"), ButtonStyle["Success"]), button("cfg:toggle:rules:blockAccess", "🔒 " + tr(_0x350d57, "blockAccess"), ButtonStyle['Secondary'])));
                                } else {
                                    if (_0x338fe5 === 'welcome-captcha') {
                                        const _0x42af4b = _0x350d57["captcha"];
                                        _0x533ffc['setTitle']("🤖 " + tr(_0x350d57, "welcomeCaptcha"))["setDescription"]('**' + status(_0x350d57, _0x42af4b['enabled']) + '**\x0a\x0a**' + tr(_0x350d57, "channel") + '**\x20:\x20' + mention(_0x42af4b["channelId"], _0x37b2b2) + "\n**" + tr(_0x350d57, "category") + '**\x20:\x20' + mention(_0x42af4b["categoryId"], _0x37b2b2) + "\n**" + tr(_0x350d57, "unverifiedRole") + "** : " + role(_0x42af4b["unverifiedRoleId"], _0x37b2b2) + "\n**" + tr(_0x350d57, 'verifiedRole') + "** : " + role(_0x42af4b["verifiedRoleId"], _0x37b2b2) + '\x0a\x0a' + tr(_0x350d57, 'captchaDesc')), _0x2a5782['push'](row(toggleButton(_0x350d57, 'cfg:toggle:captcha', _0x42af4b['enabled'])), row(button('cfg:setup-captcha', tr(_0x350d57, 'create'), ButtonStyle["Primary"], '🤖')));
                                    } else {
                                        if (_0x338fe5 === "welcome-autorole") {
                                            const _0x4a08c3 = _0x350d57['autoRole'];
                                            _0x533ffc["setTitle"]('🎭\x20' + tr(_0x350d57, 'welcomeAutorole'))['setDescription']('**' + status(_0x350d57, _0x4a08c3['enabled']) + "**\n\n" + tr(_0x350d57, "autoRoleDesc") + "\n\n**" + tr(_0x350d57, 'auto') + '**\x20:\x20' + role(_0x4a08c3['roleId'], _0x37b2b2) + "\n**" + tr(_0x350d57, 'assignOnJoin') + "** : " + (_0x4a08c3['assignOnJoin'] !== ![] ? '✅' : '❌') + "\n**" + tr(_0x350d57, "conditions") + '**\x20:\x20' + (_0x4a08c3["conditions"] || tr(_0x350d57, 'none'))), _0x2a5782["push"](row(toggleButton(_0x350d57, 'cfg:toggle:autoRole', _0x4a08c3["enabled"]), button("cfg:role:autoRole:roleId", tr(_0x350d57, 'auto'), ButtonStyle['Primary'])));
                                        } else {
                                            if (_0x338fe5 === 'welcome') {
                                                const _0x361139 = _0x350d57["welcome"];
                                                _0x533ffc['setTitle']('👋\x20' + tr(_0x350d57, "welcome"))["setDescription"]('**' + status(_0x350d57, _0x361139['enabled']) + "**\n\n**" + tr(_0x350d57, 'arrivals') + '**\x20:\x20' + mention(_0x361139['channelId'], _0x37b2b2) + '\x0a**' + tr(_0x350d57, 'departures') + '**\x20:\x20' + mention(_0x361139['leaveChannelId'], _0x37b2b2) + '\x0a**' + tr(_0x350d57, "autoRole") + "** : " + role(_0x361139["roleId"], _0x37b2b2) + '\x0a\x0a' + tr(_0x350d57, "variables") + '\x20:\x20`{user}`,\x20`{server}`,\x20`{memberCount}`.'), _0x2a5782['push'](row(toggleButton(_0x350d57, "cfg:toggle:welcome", _0x361139["enabled"]), button('cfg:channel:welcome:channelId', tr(_0x350d57, 'arrivals'), ButtonStyle['Primary']), button('cfg:channel:welcome:leaveChannelId', tr(_0x350d57, "departures"), ButtonStyle['Primary']), button("cfg:role:welcome:roleId", tr(_0x350d57, 'auto'), ButtonStyle['Primary'])), row(button("cfg:edit-welcome", tr(_0x350d57, "edit"), ButtonStyle["Secondary"], '✏️')));
                                            } else {
                                                if (_0x338fe5 === 'rules') {
                                                    const _0x381e64 = _0x350d57["rules"];
                                                    _0x533ffc['setTitle']("📜 " + tr(_0x350d57, 'rules'))["setDescription"]('**' + status(_0x350d57, _0x381e64["enabled"]) + "**\n\n**" + tr(_0x350d57, "channel") + "** : " + mention(_0x381e64["channelId"], _0x37b2b2) + '\x0a\x0a' + (_0x381e64['text'] || '—')["slice"](0x0, 0x320)), _0x2a5782['push'](row(toggleButton(_0x350d57, 'cfg:toggle:rules', _0x381e64["enabled"]), button('cfg:channel:rules:channelId', tr(_0x350d57, "channel"), ButtonStyle['Primary']), button("cfg:edit-rules", tr(_0x350d57, 'edit'), ButtonStyle['Secondary']), button("cfg:send-rules", tr(_0x350d57, "send"), ButtonStyle["Success"])));
                                                } else {
                                                    if (_0x338fe5 === 'roles') {
                                                        const _0x5b6c98 = _0x350d57["roles"],
                                                            _0x2e5d12 = _0x5b6c98["panels"] || [];
                                                        _0x533ffc['setTitle']("🎭 " + tr(_0x350d57, 'roles'))['setDescription']('**' + status(_0x350d57, _0x5b6c98['enabled']) + "**\n\n" + tr(_0x350d57, "panels") + " : **" + _0x2e5d12["length"] + '**');
                                                        const _0x126c79 = [toggleButton(_0x350d57, 'cfg:toggle:roles', _0x5b6c98["enabled"])];
                                                        if (_0x2e5d12['length'] > 0x0) {
                                                            const _0x590830 = _0x2e5d12["map"]((_0x3acba6, _0x34d7c0) => ({
                                                                'label': _0x3acba6['title'] || tr(_0x350d57, 'panel') + '\x20#' + (_0x34d7c0 + 0x1),
                                                                'description': (_0x3acba6["roles"]?.['length'] || 0x0) + " rôles — " + (_0x3acba6["channelId"] ? '<#' + _0x3acba6["channelId"] + '>' : '?'),
                                                                'value': "roles-panel:" + _0x34d7c0
                                                            }));
                                                            _0x2a5782['push'](row(new StringSelectMenuBuilder()['setCustomId']("cfg:select-panel")['setPlaceholder'](tr(_0x350d57, "selectPanel"))['addOptions'](_0x590830)));
                                                        } else _0x533ffc["setDescription"]('**' + status(_0x350d57, _0x5b6c98['enabled']) + '**\x0a\x0a' + tr(_0x350d57, 'noPanels'));
                                                        _0x126c79["push"](button('cfg:panel-create', tr(_0x350d57, 'createPanel'), ButtonStyle["Success"], '➕')), _0x2a5782["push"](row(..._0x126c79));
                                                    } else {
                                                        if (_0x338fe5["startsWith"]('roles-panel:')) {
                                                            const _0x3a2b09 = Number(_0x338fe5['slice'](0xc)),
                                                                _0xc85bd5 = _0x350d57['roles']["panels"] || [],
                                                                _0x176bbd = _0xc85bd5[_0x3a2b09];
                                                            if (!_0x176bbd) _0x533ffc['setTitle']('🎭\x20' + tr(_0x350d57, "roles"))['setDescription'](tr(_0x350d57, 'noPanels'));
                                                            else {
                                                                const _0x3421b2 = (_0x176bbd["roles"] || [])["map"]((_0x52e132, _0xe9aa17) => (_0x52e132["emoji"] || '') + '\x20<@&' + _0x52e132['roleId'] + '>\x20—\x20*' + _0x52e132['label'] + '*')['join']('\x0a') || "Aucun rôle.",
                                                                    _0x431d87 = _0x176bbd['channelId'] ? '<#' + _0x176bbd["channelId"] + '>' : '?';
                                                                _0x533ffc["setTitle"]('🎭\x20' + (_0x176bbd['title'] || tr(_0x350d57, "panel") + '\x20#' + (_0x3a2b09 + 0x1)))['setDescription']('**' + tr(_0x350d57, "channel") + "** : " + _0x431d87 + "\n**" + tr(_0x350d57, 'descLabel') + '**\x20:\x20' + (_0x176bbd['description'] || '') + "\n\n**Rôles :**\n" + _0x3421b2), _0x2a5782['push'](row(button("cfg:panel-add-role:" + _0x3a2b09, tr(_0x350d57, 'addRole'), ButtonStyle['Success'], '➕'), button("cfg:panel-send:" + _0x3a2b09, tr(_0x350d57, 'send'), ButtonStyle['Primary'], '📨'), button("cfg:panel-edit:" + _0x3a2b09, tr(_0x350d57, 'edit'), ButtonStyle['Secondary'], '✏️'), button("cfg:panel-delete:" + _0x3a2b09, "Supprimer", ButtonStyle["Danger"], "🗑️")), row(button("cfg:page:roles", tr(_0x350d57, "back"), ButtonStyle['Secondary'], '🔙')));
                                                            }
                                                        } else {
                                                            if (_0x338fe5 === "voices") {
                                                                const _0x45b9fc = _0x350d57["tempVoices"];
                                                                _0x533ffc["setTitle"]('🔊\x20' + tr(_0x350d57, "voices"))["setDescription"]('**' + status(_0x350d57, _0x45b9fc["enabled"]) + '**\x0a\x0a' + tr(_0x350d57, 'catVoiceDesc') + '\x0a\x0a**' + tr(_0x350d57, 'lobbyChannel') + '**\x20:\x20' + (_0x45b9fc['lobbyId'] ? '<#' + _0x45b9fc['lobbyId'] + '>' : tr(_0x350d57, 'none')) + '\x0a**Catégorie** : ' + ((_0x45b9fc['lobbyId'] && _0x28dd35['channels']['cache']['get'](_0x45b9fc['lobbyId'])?.['parent']) ? _0x28dd35['channels']['cache']['get'](_0x28dd35['channels']['cache']['get'](_0x45b9fc['lobbyId'])?.['parent'])?.['name'] || tr(_0x350d57, 'none') : '') + '\x0a**' + tr(_0x350d57, "name") + '**\x20:\x20' + _0x45b9fc['nameFormat'] + '\x0a**' + tr(_0x350d57, 'limit') + '**\x20:\x20' + (_0x45b9fc['userLimit'] || tr(_0x350d57, 'unlimited')) + '\x0a**Débit**\x20:\x20' + (_0x45b9fc['bitrate'] / 0x3e8 || 0x40) + '\x20kbps'), _0x2a5782["push"](row(toggleButton(_0x350d57, "cfg:toggle:voices", _0x45b9fc["enabled"])), row(button('cfg:tempVoices:create', tr(_0x350d57, 'channel'), ButtonStyle['Primary'])), row(button('cfg:tempVoices:config', tr(_0x350d57, 'edit'), ButtonStyle['Secondary'])));
                                                            } else {
                                                                if (_0x338fe5 === "logs") {
                                                                    const _0x53d523 = _0x350d57['logs'];
                                                                    _0x533ffc['setTitle']("📋 " + tr(_0x350d57, 'logs'))['setDescription']('**' + status(_0x350d57, _0x53d523["enabled"]) + '**\x0a\x0a**Salon**\x20:\x20' + (_0x53d523["channelId"] ? '<#' + _0x53d523["channelId"] + '>' : 'Aucun') + '\x0a\x0a' + tr(_0x350d57, "logsAuto")), _0x2a5782['push'](row(toggleButton(_0x350d57, "cfg:toggle:logs", _0x53d523["enabled"])), row(button("cfg:channel:logs:channelId", tr(_0x350d57, 'channel'), ButtonStyle['Primary'])));
                                                                } else {
                                                                    if (_0x338fe5 === 'ticket' || _0x338fe5 === "recruitment") {
                                                                        const _0x5b5554 = _0x350d57[_0x338fe5],
                                                                            _0x4b6a25 = _0x338fe5 === 'ticket' ? '🎫' : '📝';
                                                                        _0x533ffc["setTitle"](_0x4b6a25 + '\x20' + tr(_0x350d57, _0x338fe5))["setDescription"]('**' + status(_0x350d57, _0x5b5554['enabled']) + "**\n\n**" + tr(_0x350d57, 'panelChannel') + '**\x20:\x20' + mention(_0x5b5554["channelId"], _0x37b2b2) + '\x0a**' + (_0x338fe5 === "ticket" ? 'Catégorie' : tr(_0x350d57, "recruitCat")) + '**\x20:\x20' + mention(_0x5b5554['categoryId'], _0x37b2b2) + "\n**" + tr(_0x350d57, 'supportRoles') + '**\x20:\x20' + (_0x5b5554['supportRoleIds']["length"] ? _0x5b5554["supportRoleIds"]['map'](_0x2a228d => "<@&" + _0x2a228d + '>')["join"](',\x20') : _0x37b2b2)), _0x2a5782["push"](row(toggleButton(_0x350d57, "cfg:toggle:" + _0x338fe5, _0x5b5554["enabled"]), button('cfg:channel:' + _0x338fe5 + ":channelId", tr(_0x350d57, "panelChannel"), ButtonStyle["Primary"]), button('cfg:category:' + _0x338fe5 + ':categoryId', _0x338fe5 === "ticket" ? "Catégorie" : tr(_0x350d57, 'recruitCat'), ButtonStyle["Primary"])), row(button('cfg:add-role:' + _0x338fe5 + ":support", tr(_0x350d57, "addSupportRole"), ButtonStyle["Success"], '➕'), button('cfg:list-role:' + _0x338fe5 + ':support', tr(_0x350d57, 'listSupportRoles'), ButtonStyle["Secondary"], '📋')), row(button('cfg:add-reason:' + _0x338fe5, tr(_0x350d57, 'addReason'), ButtonStyle["Success"], '➕'), button('cfg:list-reason:' + _0x338fe5, tr(_0x350d57, 'listReasons'), ButtonStyle["Secondary"], '📋')), row(...(_0x338fe5 === 'recruitment' ? [button('cfg:edit-recruit-msg', tr(_0x350d57, 'editRecruitMsg'), ButtonStyle['Primary'], '✏️')] : []), button("cfg:send-panel:" + _0x338fe5, tr(_0x350d57, "sendPanel"), ButtonStyle['Primary'], '📨')));
                                                                    } else {
                                                                        if (_0x338fe5 === "captcha") {
                                                                            const _0x47def9 = _0x350d57["captcha"];
                                                                            _0x533ffc["setTitle"]("🤖 " + tr(_0x350d57, "captcha"))["setDescription"]('**' + status(_0x350d57, _0x47def9['enabled']) + '**\x0a\x0a**' + tr(_0x350d57, 'channel') + "** : " + mention(_0x47def9["channelId"], _0x37b2b2) + "\n**" + tr(_0x350d57, 'category') + '**\x20:\x20' + mention(_0x47def9["categoryId"], _0x37b2b2) + "\n**" + tr(_0x350d57, "unverifiedRole") + "** : " + role(_0x47def9['unverifiedRoleId'], _0x37b2b2) + "\n**" + tr(_0x350d57, 'verifiedRole') + '**\x20:\x20' + role(_0x47def9["verifiedRoleId"], _0x37b2b2) + '\x0a\x0a' + tr(_0x350d57, 'captchaDesc')), _0x2a5782["push"](row(toggleButton(_0x350d57, 'cfg:toggle:captcha', _0x47def9["enabled"])), row(button('cfg:setup-captcha', tr(_0x350d57, 'create'), ButtonStyle["Primary"], '🤖')));
                                                                        } else {
                                                                            if (_0x338fe5 === "economy") {
                                                                                const _0x687f54 = _0x350d57["economy"];
                                                                                _0x533ffc['setTitle']('💰\x20' + tr(_0x350d57, 'economy'))['setDescription']('**' + status(_0x350d57, _0x687f54['enabled']) + "**\n\n" + t(_0x350d57, 'economyDesc', {
                                                                                    'coins': '🪙',
                                                                                    'prefix': _0x350d57['prefix']
                                                                                })), _0x2a5782["push"](row(toggleButton(_0x350d57, 'cfg:toggle:economy', _0x687f54['enabled'])), row(button('cfg:edit-economy', tr(_0x350d57, "edit"), ButtonStyle['Primary'])));
                                                                            } else {
                                                                                if (_0x338fe5 === 'levels') {
                                                                                    const _0x37b8f3 = _0x350d57["levels"];
                                                                                    _0x533ffc['setTitle']("📊 " + tr(_0x350d57, "levels"))["setDescription"]('**' + status(_0x350d57, _0x37b8f3["enabled"]) + '**\x0a\x0a' + tr(_0x350d57, "levelsDesc") + "\n\n**Salon** : " + (_0x37b8f3['channelId'] ? '<#' + _0x37b8f3['channelId'] + '>' : 'Aucun') + '\x0a**' + tr(_0x350d57, 'xpPerMsg') + "** : **" + _0x37b8f3['xpPerMessage'] + '**\x0a**Message**\x20:\x20' + (_0x37b8f3["message"] || tr(_0x350d57, "levelUp"))), _0x2a5782["push"](row(toggleButton(_0x350d57, "cfg:toggle:levels", _0x37b8f3["enabled"])), row(button('cfg:channel:levels:channelId', "Salon", ButtonStyle['Primary']), button('cfg:edit-levels', tr(_0x350d57, "edit"), ButtonStyle["Primary"])));
                                                                                } else {
                                                                                    if (_0x338fe5 === 'autoRole') {
                                                                                        const _0x5e4a75 = _0x350d57['autoRole'];
                                                                                        _0x533ffc["setTitle"]('🤖\x20' + tr(_0x350d57, "autoRole"))['setDescription']('**' + status(_0x350d57, _0x5e4a75["enabled"]) + "**\n\n" + tr(_0x350d57, "autoRoleDesc") + '\x0a\x0a**Rôle**\x20:\x20' + role(_0x5e4a75['roleId'], _0x37b2b2)), _0x2a5782['push'](row(toggleButton(_0x350d57, "cfg:toggle:autoRole", _0x5e4a75['enabled'])), row(button('cfg:role:autoRole:roleId', tr(_0x350d57, "auto"), ButtonStyle['Primary'])));
                                                                                    } else {
                                                                                        if (_0x338fe5 === "wordReactions") {
                                                                                            const _0x57e183 = _0x350d57["wordReactions"];
                                                                                            _0x533ffc['setTitle']("💬 " + tr(_0x350d57, "wordReactions"))['setDescription']('**' + status(_0x350d57, _0x57e183['enabled']) + "**\n\n" + tr(_0x350d57, "wordReactionsDesc") + '\x0a\x0a**' + _0x57e183["items"]['length'] + '**\x20mot(s)\x20configuré(s).'), _0x2a5782["push"](row(toggleButton(_0x350d57, "cfg:toggle:wordReactions", _0x57e183['enabled'])), row(button("cfg:add-word", tr(_0x350d57, "addWord"), ButtonStyle['Success'], '➕'), button("cfg:list-words", tr(_0x350d57, "listBtn"), ButtonStyle['Primary'], '📋')));
                                                                                        } else {
                                                                                            if (_0x338fe5 === "announcements") {
                                                                                                const _0x6b1429 = _0x350d57["announcements"];
                                                                                                _0x533ffc['setTitle']('📢\x20' + tr(_0x350d57, "announcements"))['setDescription']('**' + status(_0x350d57, _0x6b1429["enabled"]) + '**\x0a\x0a' + tr(_0x350d57, "announcementDesc") + "\n\n**" + tr(_0x350d57, "announceChannel") + "** : " + mention(_0x6b1429["channelId"], _0x37b2b2) + '\x0a\x0a**Message**\x20:\x0a' + (_0x6b1429['message'] || tr(_0x350d57, 'aucun'))), _0x2a5782["push"](row(toggleButton(_0x350d57, 'cfg:toggle:announcements', _0x6b1429['enabled'])), row(button("cfg:channel:announcements:channelId", tr(_0x350d57, "announceChannel"), ButtonStyle['Primary'])), row(button('cfg:announcements:edit-message', tr(_0x350d57, 'edit'), ButtonStyle['Secondary']), button('cfg:announcements:send', 'Envoyer\x20le\x20message', ButtonStyle['Success'])));
                                                                                            } else {
                                                                                                if (_0x338fe5 === "recurringMessages") {
                                                                                                    const _0xbd566 = _0x350d57["recurringMessages"];
                                                                                                    _0x533ffc['setTitle']('🔄\x20' + tr(_0x350d57, 'recurringMessages'))['setDescription']('**' + status(_0x350d57, _0xbd566['enabled']) + '**\x0a\x0a' + tr(_0x350d57, "recurringDesc") + "\n\n**" + _0xbd566['items']['length'] + '**\x20message(s)\x20programmé(s).'), _0x2a5782['push'](row(toggleButton(_0x350d57, "cfg:toggle:recurringMessages", _0xbd566["enabled"])), row(button('cfg:add-recurring', tr(_0x350d57, 'addMessage'), ButtonStyle['Success'], '➕'), button('cfg:list-recurring', tr(_0x350d57, "listBtn"), ButtonStyle["Primary"], '📋')));
                                                                                                } else {
                                                                                                    if (_0x338fe5 === 'socialNotifs') {
                                                                                                        _0x533ffc["setTitle"]('🔔\x20' + tr(_0x350d57, 'socialNotifs'))["setDescription"]('🚧\x20**Système\x20à\x20venir**\x20-\x20Cette\x20fonctionnalité\x20sera\x20disponible\x20prochainement.');
                                                                                                    } else {
                                                                                                        if (_0x338fe5 === "calendar") {
                                                                                                            _0x533ffc["setTitle"]("📅 " + tr(_0x350d57, 'calendar'))["setDescription"]('🚧\x20**Système\x20à\x20venir**\x20-\x20Cette\x20fonctionnalité\x20sera\x20disponible\x20prochainement.');
                                                                                                        } else {
                                                                                                            if (_0x338fe5 === 'shop') {
                                                                                                                const _0x3af022 = _0x350d57["shop"];
                                                                                                                _0x533ffc["setTitle"]('🏪\x20' + tr(_0x350d57, 'shop'))["setDescription"]('**' + status(_0x350d57, _0x3af022["enabled"]) + "**\n\n" + t(_0x350d57, 'shopDesc', {
                                                                                                                    'coins': '🪙'
                                                                                                                }) + "\n\n**" + _0x3af022["items"]['length'] + '**\x20article(s).'), _0x2a5782['push'](row(toggleButton(_0x350d57, "cfg:toggle:shop", _0x3af022["enabled"])), row(button('cfg:add-shop-item', tr(_0x350d57, 'addShopItem'), ButtonStyle["Success"], '➕'), button('cfg:list-shop', tr(_0x350d57, "listBtn"), ButtonStyle["Primary"], '📋')));
                                                                                                            } else {
                                                                                                                if (_0x338fe5 === 'giveaways') {
                                                                                                                    const _0x3f1c92 = _0x350d57['giveaways'],
                                                                                                                        _0x7b4e2d = (_0x3f1c92['items'] || [])['filter'](_0x5e3d0c => !_0x5e3d0c['ended'] && _0x5e3d0c['endTime'] > Date['now']())['length'];
                                                                                                                    _0x533ffc['setTitle']('🎉\x20Giveaway')['setDescription']('**' + status(_0x350d57, _0x3f1c92['enabled']) + '**\x0a\x0a' + 'Configurez\x20vos\x20concours\x20avec\x20tirage\x20au\x20sort\x20automatique\x20et\x20multi-gagnants.\x0a\x0a**Salon\x20:\x20**' + mention(_0x3f1c92['channelId'], _0x37b2b2) + '\x0a**Giveaways\x20en\x20cours\x20:\x20**' + _0x7b4e2d), _0x2a5782['push'](row(toggleButton(_0x350d57, 'cfg:toggle:giveaways', _0x3f1c92['enabled'])), row(button('cfg:channel:giveaways:channelId', tr(_0x350d57, 'channel'), ButtonStyle['Primary'])), row(button('cfg:create-giveaway', 'Créer\x20un\x20Giveaway', ButtonStyle['Success'], '➕'), button('cfg:list-giveaways', 'Gérer\x20les\x20Giveaways', ButtonStyle['Primary'], '📋')));
                                                                                                                } else {
                                                                                                                    if (_0x338fe5 === "birthdays") {
                                                                                                                        const _0x1b076b = _0x350d57['birthdays'];
                                                                                                                        _0x533ffc["setTitle"]("🎂 " + tr(_0x350d57, "birthdays"))["setDescription"]('**' + status(_0x350d57, _0x1b076b['enabled']) + '**\x0a\x0a' + tr(_0x350d57, 'birthdaysDesc') + '\x0a\x0a**Rôle**\x20:\x20' + role(_0x1b076b["roleId"], _0x37b2b2) + "\n**Salon** : " + mention(_0x1b076b["channelId"], _0x37b2b2)), _0x2a5782['push'](row(toggleButton(_0x350d57, "cfg:toggle:birthdays", _0x1b076b['enabled'])), row(button("cfg:role:birthdays:roleId", tr(_0x350d57, 'auto'), ButtonStyle['Primary']), button("cfg:channel:birthdays:channelId", tr(_0x350d57, 'channel'), ButtonStyle['Primary']), button('cfg:test-birthdays', tr(_0x350d57, 'test'), ButtonStyle["Success"], '🧪')));
                                                                                                                    } else {
                                                                                                                        if (_0x338fe5 === 'polls') {
                                                                                                                            const _0x44778b = _0x350d57['polls'];
                                                                                                                            _0x533ffc['setTitle']('📊\x20' + tr(_0x350d57, "polls"))["setDescription"]('**' + status(_0x350d57, _0x44778b['enabled']) + '**\x0a\x0a' + tr(_0x350d57, "pollsDesc") + '\x0a\x0a**' + tr(_0x350d57, "channel") + '**\x20:\x20' + mention(_0x44778b["channelId"], _0x37b2b2)), _0x2a5782["push"](row(toggleButton(_0x350d57, "cfg:toggle:polls", _0x44778b["enabled"])), row(button("cfg:channel:polls:channelId", tr(_0x350d57, "channel"), ButtonStyle['Primary'])));
                                                                                                                        } else {
                                                                                                                            if (_0x338fe5 === "protectionFiltres") {
                                                                                                                                const _0x248346 = _0x350d57['security'];
                                                                                                                                _0x533ffc['setTitle']('🛡️\x20' + tr(_0x350d57, 'protectionFiltres'))["setDescription"]('**' + status(_0x350d57, _0x248346['enabled']) + "**\n\n" + tr(_0x350d57, "protectionFiltresDesc") + '\x0a\x0a' + (tr(_0x350d57, "antiSpam") + " : " + (_0x248346['antiSpam'] ? '✅\x20(' + _0x248346['maxMessages'] + '/' + _0x248346["intervalSeconds"] + 's)' : '❌') + '\x20·\x20' + tr(_0x350d57, 'antiLinks') + '\x20:\x20' + (_0x248346["antiLinks"] ? '✅' : '❌') + '\x20·\x20' + tr(_0x350d57, 'antiInvites') + " : " + (_0x248346["antiInvites"] ? '✅' : '❌') + '\x0a') + (tr(_0x350d57, "antiRaid") + '\x20:\x20' + (_0x350d57['antiRaid']['enabled'] ? '✅' : '❌') + '\x20·\x20' + tr(_0x350d57, "antiBot") + " : " + (_0x350d57['antiBot']['enabled'] ? '✅' : '❌') + " · " + tr(_0x350d57, 'antiRecentAccounts') + " : " + (_0x350d57["antiRecentAccounts"]['enabled'] ? '✅' : '❌') + '\x0a') + (tr(_0x350d57, 'antiMentions') + '\x20:\x20' + (_0x350d57['antiMentions']['enabled'] ? "✅ (" + _0x350d57['antiMentions']["maxMentions"] + ')' : '❌') + " · " + tr(_0x350d57, 'antiInsults') + '\x20:\x20' + (_0x350d57['antiInsults']["enabled"] ? '✅' : '❌'))), _0x2a5782['push'](row(button("cfg:protectionFiltres:enableAll", tr(_0x350d57, 'enableAll'), ButtonStyle['Success'], '✅'), button("cfg:protectionFiltres:disableAll", tr(_0x350d57, 'disableAll'), ButtonStyle['Danger'], '❌')), row(button('cfg:edit-security', tr(_0x350d57, "edit"), ButtonStyle['Primary'])));
                                                                                                                            } else {
                                                                                                                                if (_0x338fe5 === "autoSanctions") {
                                                                                                                                    const _0x5453b8 = _0x350d57['autoSanctions'];
                                                                                                                                    _0x533ffc["setTitle"]("⚖️ " + tr(_0x350d57, 'autoSanctions'))['setDescription'](tr(_0x350d57, "autoSanctionsDesc") + '\x0a\x0a' + ('**' + tr(_0x350d57, 'warningsBeforeTimeout') + "** : " + _0x5453b8['warningsBeforeTimeout'] + "\n**" + tr(_0x350d57, "timeoutMinutes") + '**\x20:\x20' + _0x5453b8["timeoutMinutes"] + "\n**" + tr(_0x350d57, 'warningsBeforeKick') + '**\x20:\x20' + _0x5453b8['warningsBeforeKick'] + '\x0a**' + tr(_0x350d57, "warningsBeforeBan") + '**\x20:\x20' + _0x5453b8["warningsBeforeBan"] + '\x0a**Réinitialiser\x20après\x20action**\x20:\x20' + (_0x5453b8['resetOnAction'] ? '✅' : '❌'))), _0x2a5782["push"](row(toggleButton(_0x350d57, 'cfg:toggle:autoSanctions', _0x5453b8['enabled']), button("cfg:edit-autoSanctions", tr(_0x350d57, "edit"), ButtonStyle["Primary"])), row(button("cfg:toggle:autoSanctions:resetOnAction", '🔄\x20Réinitialiser\x20:\x20' + (_0x5453b8["resetOnAction"] ? 'Oui' : 'Non'), _0x5453b8['resetOnAction'] ? ButtonStyle["Success"] : ButtonStyle["Danger"])));
                                                                                                                                } else {
                                                                                                                                    if (_0x338fe5 === "autoMod") {
                                                                                                                                        const _0x531b66 = _0x350d57["autoMod"],
                                                                                                                                            _0x4dbffe = ['spam', 'mentions', "links", "invites", "insults", 'wordBlacklist', "raid", "recentAccounts", "botProtection"],
                                                                                                                                            _0x15edcb = {
                                                                                                                                                'spam': '⏩',
                                                                                                                                                'mentions': '📢',
                                                                                                                                                'links': '🔗',
                                                                                                                                                'invites': '📨',
                                                                                                                                                'insults': '🤬',
                                                                                                                                                'wordBlacklist': '🚫',
                                                                                                                                                'raid': '⚔️',
                                                                                                                                                'recentAccounts': '🆕',
                                                                                                                                                'botProtection': '🤖'
                                                                                                                                            },
                                                                                                                                            _0x5672ba = {
                                                                                                                                                'spam': "antiSpam",
                                                                                                                                                'mentions': "antiMentions",
                                                                                                                                                'links': "antiLinks",
                                                                                                                                                'invites': 'antiInvites',
                                                                                                                                                'insults': 'antiInsults',
                                                                                                                                                'wordBlacklist': 'antiBlacklist',
                                                                                                                                                'raid': "antiRaid",
                                                                                                                                                'recentAccounts': "antiRecentAccounts",
                                                                                                                                                'botProtection': 'antiBot'
                                                                                                                                            };
                                                                                                                                        let _0x380da9 = '**' + status(_0x350d57, _0x531b66['enabled']) + "**\n\n" + tr(_0x350d57, 'autoModDesc') + '\x0a\x0a';
                                                                                                                                        for (const _0x1a5dbd of _0x4dbffe) {
                                                                                                                                            const _0x2ca65e = _0x531b66[_0x1a5dbd];
                                                                                                                                            _0x380da9 += _0x15edcb[_0x1a5dbd] + '\x20**' + tr(_0x350d57, _0x5672ba[_0x1a5dbd]) + '**\x20:\x20' + (_0x2ca65e && _0x2ca65e['enabled'] ? '✅' : '❌') + '\x0a';
                                                                                                                                        }
                                                                                                                                        _0x380da9 += '\x0a**🔄\x20Auto-avertir**\x20:\x20' + (_0x531b66['autoWarn'] ? '✅' : '❌') + " · **👥 Exceptions** : " + (_0x531b66['exemptRoles']["length"] + _0x531b66['exemptChannels']["length"] + _0x531b66["exemptMembers"]['length']) + '\x20entité(s)', _0x533ffc['setDescription'](_0x380da9);
                                                                                                                                        const _0x3ac26e = _0x4dbffe["map"](_0x14040e => button("cfg:page:autoMod-" + _0x14040e, tr(_0x350d57, _0x5672ba[_0x14040e]), ButtonStyle["Secondary"], _0x15edcb[_0x14040e]));
                                                                                                                                        _0x2a5782["push"](row(toggleButton(_0x350d57, 'cfg:toggle:autoMod', _0x531b66['enabled']), button('cfg:autoMod:enableAll', tr(_0x350d57, "enableAll"), ButtonStyle['Success'], '✅'), button("cfg:autoMod:disableAll", tr(_0x350d57, "disableAll"), ButtonStyle['Danger'], '❌')), row(button("cfg:autoMod:toggleWarn", "🔄 Auto-avertir : " + (_0x531b66['autoWarn'] ? 'Oui' : 'Non'), _0x531b66["autoWarn"] ? ButtonStyle['Success'] : ButtonStyle["Danger"]), button("cfg:page:autoMod-exceptions", '👥\x20Exceptions', ButtonStyle["Primary"])), row(..._0x3ac26e['slice'](0x0, 0x3)), row(..._0x3ac26e['slice'](0x3, 0x6)), row(..._0x3ac26e["slice"](0x6)));
                                                                                                                                    } else {
                                                                                                                                        if (_0x338fe5["startsWith"]('autoMod-')) {
                                                                                                                                            const _0x2d12fe = _0x338fe5["slice"](0x8),
                                                                                                                                                _0x44e425 = _0x350d57["autoMod"][_0x2d12fe];
                                                                                                                                            if (!_0x44e425) _0x533ffc["setDescription"]('❌\x20Type\x20de\x20protection\x20inconnu.');
                                                                                                                                            else {
                                                                                                                                                const _0x55e38a = {
                                                                                                                                                        'spam': "antiSpam",
                                                                                                                                                        'mentions': "antiMentions",
                                                                                                                                                        'links': "antiLinks",
                                                                                                                                                        'invites': "antiInvites",
                                                                                                                                                        'insults': 'antiInsults',
                                                                                                                                                        'wordBlacklist': "antiBlacklist",
                                                                                                                                                        'raid': "antiRaid",
                                                                                                                                                        'recentAccounts': 'antiRecentAccounts',
                                                                                                                                                        'botProtection': 'antiBot'
                                                                                                                                                    } [_0x2d12fe] || _0x2d12fe,
                                                                                                                                                    _0x5700c2 = [];
                                                                                                                                                if (_0x44e425["maxMessages"] !== undefined) _0x5700c2["push"]('**' + tr(_0x350d57, "maxMessages") + "** : " + _0x44e425["maxMessages"]);
                                                                                                                                                if (_0x44e425['intervalSeconds'] !== undefined) _0x5700c2["push"]('**' + tr(_0x350d57, 'spamWindow') + '**\x20:\x20' + _0x44e425['intervalSeconds'] + 's');
                                                                                                                                                if (_0x44e425['maxMentions'] !== undefined) _0x5700c2["push"]('**' + tr(_0x350d57, "maxMentions") + "** : " + _0x44e425['maxMentions']);
                                                                                                                                                if (_0x44e425["maxDays"] !== undefined) _0x5700c2["push"]('**' + tr(_0x350d57, 'maxDays') + "** : " + _0x44e425['maxDays']);
                                                                                                                                                if (_0x44e425["maxJoins"] !== undefined) _0x5700c2["push"]('**' + tr(_0x350d57, "maxJoins") + '**\x20:\x20' + _0x44e425["maxJoins"] + '\x20/\x20**' + tr(_0x350d57, 'intervalMinutes') + '**\x20:\x20' + _0x44e425['intervalMinutes'] + 'min');
                                                                                                                                                if (_0x44e425['words'] !== undefined) _0x5700c2['push']('**' + tr(_0x350d57, 'wordList') + '**\x20:\x20' + (_0x44e425['words']["length"] ? _0x44e425['words']['join'](',\x20') : tr(_0x350d57, 'none')));
                                                                                                                                                const _0x1be622 = _0x350d57["autoMod"]["actions"][_0x2d12fe] || "delete";
                                                                                                                                                _0x533ffc['setTitle']('' + tr(_0x350d57, _0x55e38a))['setDescription']('**' + status(_0x350d57, _0x44e425["enabled"]) + "**\n\n" + _0x5700c2['join'](" · ") + "\n\n**⚡ Action** : `" + _0x1be622 + '`');
                                                                                                                                                const _0x157b56 = [toggleButton(_0x350d57, "cfg:toggle:autoMod:" + _0x2d12fe, _0x44e425["enabled"])];
                                                                                                                                                if (_0x44e425['words'] !== undefined) _0x157b56['push'](button("cfg:autoMod:addWord:" + _0x2d12fe, tr(_0x350d57, "addWord"), ButtonStyle["Success"], '➕'), button('cfg:autoMod:listWords:' + _0x2d12fe, tr(_0x350d57, 'listBtn'), ButtonStyle["Primary"], '📋'));
                                                                                                                                                if (_0x44e425["maxMessages"] !== undefined) _0x157b56["push"](button("cfg:edit-autoMod:" + _0x2d12fe, tr(_0x350d57, 'edit'), ButtonStyle['Primary']));
                                                                                                                                                if (_0x44e425["maxMentions"] !== undefined) _0x157b56["push"](button('cfg:edit-autoMod:' + _0x2d12fe, tr(_0x350d57, "edit"), ButtonStyle["Primary"]));
                                                                                                                                                if (_0x44e425["maxDays"] !== undefined) _0x157b56['push'](button("cfg:edit-autoMod:" + _0x2d12fe, tr(_0x350d57, 'edit'), ButtonStyle["Primary"]));
                                                                                                                                                if (_0x44e425['maxJoins'] !== undefined) _0x157b56["push"](button('cfg:edit-autoMod:' + _0x2d12fe, tr(_0x350d57, 'edit'), ButtonStyle['Primary']));
                                                                                                                                                _0x2a5782['push'](row(..._0x157b56));
                                                                                                                                            }
                                                                                                                                        } else {
                                                                                                                                            if (_0x338fe5 === 'autoMod-exceptions') {
                                                                                                                                                const _0x39e50c = _0x350d57['autoMod'];
                                                                                                                                                _0x533ffc['setTitle']("👥 " + tr(_0x350d57, 'exceptions'))["setDescription"]('**' + tr(_0x350d57, "exemptRoles") + '**\x20:\x20' + (_0x39e50c['exemptRoles']["length"] ? _0x39e50c["exemptRoles"]['map'](_0x568bfa => "<@&" + _0x568bfa + '>')['join']('\x20') : tr(_0x350d57, 'none')) + '\x0a' + ('**' + tr(_0x350d57, "exemptChannels") + "** : " + (_0x39e50c['exemptChannels']['length'] ? _0x39e50c["exemptChannels"]["map"](_0x1d08f2 => '<#' + _0x1d08f2 + '>')['join']('\x20') : tr(_0x350d57, "none")) + '\x0a') + ('**' + tr(_0x350d57, "exemptMembers") + '**\x20:\x20' + (_0x39e50c["exemptMembers"]["length"] ? _0x39e50c['exemptMembers']["map"](_0x4af062 => '<@' + _0x4af062 + '>')['join']('\x20') : tr(_0x350d57, "none")))), _0x2a5782['push'](row(button("cfg:autoMod:exemptRole", tr(_0x350d57, 'addRole'), ButtonStyle["Primary"], '➕'), button('cfg:autoMod:exemptChannel', tr(_0x350d57, 'addChannel'), ButtonStyle["Primary"], '➕')), row(button('cfg:autoMod:exemptMember', tr(_0x350d57, 'addMember'), ButtonStyle["Primary"], '➕'), button('cfg:autoMod:clearExemptions', tr(_0x350d57, "resetModule"), ButtonStyle['Danger'], '🗑️')));
                                                                                                                                            } else {
                                                                                                                                                if (_0x338fe5 === 'permissions' || _0x338fe5 === 'customization' || _0x338fe5 === "database" || _0x338fe5 === 'whitelist' || _0x338fe5 === "blacklist" || _0x338fe5 === "maintenanceConfig" || _0x338fe5 === 'tempRoles' || _0x338fe5 === "inventory") {
                                                                                                                                                    const _0x185bb5 = _0x350d57[_0x338fe5] || {};
                                                                                                                                                    _0x533ffc["setTitle"]('' + tr(_0x350d57, _0x338fe5))['setDescription']('**' + status(_0x350d57, _0x185bb5["enabled"]) + '**\x0a\x0a' + tr(_0x350d57, "comingSoon")), _0x2a5782['push'](row(toggleButton(_0x350d57, "cfg:toggle:" + _0x338fe5, _0x185bb5["enabled"])));
                                                                                                                                                } else {
                                                                                                                                                    if (_0x338fe5 === "leaderboard") {
                                                                                                                                                        const _0x2beaca = _0x350d57["leaderboard"];
                                                                                                                                                        _0x533ffc["setTitle"]("🏆 " + tr(_0x350d57, 'leaderboard'))["setDescription"]('**' + status(_0x350d57, _0x2beaca["enabled"]) + '**\x0a\x0a**' + tr(_0x350d57, 'channel') + "** : " + mention(_0x2beaca['channelId'], _0x37b2b2)), _0x2a5782['push'](row(toggleButton(_0x350d57, 'cfg:toggle:leaderboard', _0x2beaca['enabled'])), row(button('cfg:channel:leaderboard:channelId', tr(_0x350d57, "channel"), ButtonStyle["Primary"])));
                                                                                                                                                    } else {
                                                                                                                                                        if (_0x338fe5 === 'suggestions') {
                                                                                                                                                            const _0x42091d = _0x350d57["suggestions"];
                                                                                                                                                            _0x533ffc['setTitle']("💡 " + tr(_0x350d57, 'suggestions'))["setDescription"]('**' + status(_0x350d57, _0x42091d['enabled']) + '**\x0a\x0a**' + tr(_0x350d57, 'channel') + "** : " + mention(_0x42091d["channelId"], _0x37b2b2)), _0x2a5782['push'](row(toggleButton(_0x350d57, 'cfg:toggle:suggestions', _0x42091d['enabled'])), row(button("cfg:channel:suggestions:channelId", tr(_0x350d57, "channel"), ButtonStyle["Primary"])));
                                                                                                                                                        } else {
                                                                                                                                                            if (_0x338fe5 === 'rewards') {
                                                                                                                                                                const _0x587682 = _0x350d57["rewards"];
                                                                                                                                                                _0x533ffc['setTitle']('🎁\x20' + tr(_0x350d57, "rewards"))["setDescription"]('**' + status(_0x350d57, _0x587682["enabled"]) + "**\n\n**" + _0x587682["items"]['length'] + "** récompense(s) configurée(s)."), _0x2a5782["push"](row(toggleButton(_0x350d57, "cfg:toggle:rewards", _0x587682['enabled'])));
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (_0x338fe5 !== "home" && !_0x338fe5["startsWith"]("cat:")) {
        const _0x589b4e = ["logs"];
        if (_0x589b4e["includes"](_0x338fe5)) {} else {
            const _0x188ec8 = {
                    'voices': "tempVoices",
                    'welcome-arrival': "welcome",
                    'welcome-departure': "welcome",
                    'welcome-rules': "rules",
                    'welcome-captcha': 'captcha',
                    'welcome-autorole': 'autoRole',
                    'protectionFiltres': "security"
                },
                _0x2ce4a9 = _0x188ec8[_0x338fe5] || _0x338fe5;
            if (_0x338fe5 !== 'moderation' && DEFAULTS[_0x2ce4a9]) {
                const _0x34466d = _0x2a5782[_0x2a5782['length'] - 0x1],
                    _0x43fe2f = button('cfg:reset:' + _0x338fe5, tr(_0x350d57, 'resetModule'), ButtonStyle["Danger"], '⚠️');
                if (_0x34466d && _0x34466d['components']['length'] < 0x5) _0x34466d["addComponents"](_0x43fe2f);
                else _0x2a5782['push'](row(_0x43fe2f));
            }
        }
    }
    if (_0x338fe5 !== 'home') {
        const _0x55e238 = _0x2a5782[_0x2a5782["length"] - 0x1],
            _0x17f3c8 = !_0x338fe5["startsWith"]("cat:"),
            _0x543ce7 = _0x17f3c8 ? 'cat:' + (categoryForModule(_0x338fe5) || 'home') : 'home',
            _0x587516 = button('cfg:back:' + _0x543ce7, '◀\x20Retour', ButtonStyle['Secondary']),
            _0x359d72 = _0x55e238 && _0x55e238['components']["length"] === 0x1 && _0x55e238["components"][0x0]?.["constructor"]?.['name'] === "StringSelectMenuBuilder";
        if (_0x55e238 && !_0x359d72 && _0x55e238['components']["length"] < 0x5) _0x55e238['addComponents'](_0x587516);
        else _0x2a5782["push"](row(_0x587516));
    }
    return {
        'embeds': [_0x533ffc],
        'components': _0x2a5782
    };
}

function replyPage(_0x1e0a47, _0x3f28a4) {
    const _0x5dc89a = _0x15878f;
    return _0x1e0a47["update"](pagePayload(_0x1e0a47['guild'], _0x3f28a4));
}

function modal(_0x2552ee, _0xf77bc, _0x5aa6a2) {
    const _0x35061b = _0x15878f;
    return new ModalBuilder()["setCustomId"](_0x2552ee)['setTitle'](_0xf77bc)["addComponents"](..._0x5aa6a2['map'](([_0x13f34b, _0x40630c, _0x54bdbb, _0xa61067 = TextInputStyle["Short"], _0x4b05f9 = ![]]) => row(new TextInputBuilder()["setCustomId"](_0x13f34b)["setLabel"](_0x40630c)["setStyle"](_0xa61067)["setValue"](String(_0x54bdbb || ''))['setRequired'](_0x4b05f9))));
}

function text(_0x3e68ff, _0x35dd49) {
    const _0x58a5f8 = _0x15878f;
    return sanitize(_0x3e68ff["fields"]['getTextInputValue'](_0x35dd49)['trim'](), 0x7d0);
}
async function chooseChannel(_0x320163, _0x4bfa05, _0xb88926 = "text") {
    const _0x42d689 = _0x15878f,
        _0x4e4e74 = _0x320163["guild"]['channels']["cache"]["filter"](_0x883ea3 => _0xb88926 === 'category' ? _0x883ea3["type"] === ChannelType["GuildCategory"] : _0xb88926 === 'voice' ? _0x883ea3['type'] === ChannelType["GuildVoice"] : isSendable(_0x883ea3)),
        _0x3859a5 = [..._0x4e4e74["values"]()]["slice"](0x0, 0x19),
        _0xdc430b = settings(_0x320163['guild']['id']);
    if (!_0x3859a5['length']) return _0x320163["reply"]({
        'content': tr(_0xdc430b, "noChannelCompat"),
        'flags': MessageFlags['Ephemeral']
    });
    return _0x320163["reply"]({
        'content': tr(_0xdc430b, 'chooseChannel'),
        'components': [row(new StringSelectMenuBuilder()['setCustomId']("cfg:choose-channel:" + _0x4bfa05)["setPlaceholder"](tr(_0xdc430b, "selectChannel"))["addOptions"](_0x3859a5["map"](_0x2475a6 => ({
            'label': _0x2475a6["name"]['slice'](0x0, 0x64),
            'value': _0x2475a6['id']
        }))))],
        'flags': MessageFlags["Ephemeral"]
    });
}
async function chooseRole(_0x37f31f, _0x42e1a2) {
    const _0x4be651 = _0x15878f,
        _0x48d11b = [..._0x37f31f['guild']['roles']['cache']["values"]()]['filter'](_0x5bebc5 => _0x5bebc5["name"] !== "@everyone" && !_0x5bebc5['managed'])["slice"](0x0, 0x19),
        _0x4f3618 = settings(_0x37f31f["guild"]['id']);
    if (!_0x48d11b["length"]) return _0x37f31f['reply']({
        'content': tr(_0x4f3618, 'noRoleCompat'),
        'flags': MessageFlags['Ephemeral']
    });
    return _0x37f31f['reply']({
        'content': tr(_0x4f3618, 'chooseRole'),
        'components': [row(new StringSelectMenuBuilder()["setCustomId"]("cfg:choose-role:" + _0x42e1a2)['setPlaceholder'](tr(_0x4f3618, "selectRole"))['addOptions'](_0x48d11b["map"](_0xce1202 => ({
            'label': _0xce1202['name']['slice'](0x0, 0x64),
            'value': _0xce1202['id']
        }))))],
        'flags': MessageFlags['Ephemeral']
    });
}

function setPath(_0x1a7260, _0x2f3aa6, _0x96d374) {
    const _0x1f9083 = _0x15878f,
        _0x1b7614 = _0x2f3aa6['split'](':');
    let _0x1362c6 = _0x1a7260;
    while (_0x1b7614["length"] > 0x1) _0x1362c6 = _0x1362c6[_0x1b7614['shift']()];
    _0x1362c6[_0x1b7614[0x0]] = _0x96d374;
}

function pathToPage(_0x5f4cd7) {
    const _0x22292d = _0x15878f,
        _0x5a3dc1 = _0x5f4cd7["split"](':')[0x0],
        _0x2cbe3f = _0x5f4cd7["slice"](_0x5a3dc1['length'] + 0x1);
    if (_0x5a3dc1 === 'welcome') return _0x2cbe3f === "leaveChannelId" ? 'welcome-departure' : "welcome-arrival";
    if (_0x5a3dc1 === "rules") return 'welcome-rules';
    if (_0x5a3dc1 === 'autoRole') return "welcome-autorole";
    return _0x5a3dc1 === "tempVoices" ? "voices" : _0x5a3dc1;
}
async function checkAutoSanctions(_0x10ad88, _0xd725bb, _0x5c4d15, _0xc025d6) {
    const _0x1af394 = _0x15878f,
        _0x10e78b = settings(_0x10ad88['id']),
        _0xa81f92 = _0x10e78b['autoSanctions'];
    if (!_0xa81f92['enabled'] || !_0xd725bb['moderatable']) return null;
    const _0xac3e8d = getWarns(_0x10ad88['id']),
        _0x50fb14 = _0xac3e8d[_0xd725bb['id']] && _0xac3e8d[_0xd725bb['id']]["count"] || 0x0;
    let _0x3f34c0 = null;
    if (_0x50fb14 >= _0xa81f92['warningsBeforeBan']) await _0xd725bb["ban"]({
        'reason': "Auto-sanction : " + _0x50fb14 + " avertissements (" + _0xc025d6 + ')'
    })['catch'](() => {}), _0x3f34c0 = 'banni\x20(' + _0x50fb14 + '\x20avertissements)';
    else {
        if (_0x50fb14 >= _0xa81f92["warningsBeforeKick"]) await _0xd725bb['kick']("Auto-sanction : " + _0x50fb14 + " avertissements (" + _0xc025d6 + ')')["catch"](() => {}), _0x3f34c0 = 'expulsé\x20(' + _0x50fb14 + '\x20avertissements)';
        else _0x50fb14 >= _0xa81f92["warningsBeforeTimeout"] && (await _0xd725bb['timeout'](_0xa81f92['timeoutMinutes'] * 0xea60, "Auto-sanction : " + _0x50fb14 + " avertissements (" + _0xc025d6 + ')')['catch'](() => {}), _0x3f34c0 = "rendu muet " + _0xa81f92['timeoutMinutes'] + 'min\x20(' + _0x50fb14 + " avertissements)");
    }
    return _0x3f34c0 && _0xa81f92['resetOnAction'] && _0xac3e8d[_0xd725bb['id']] && (_0xac3e8d[_0xd725bb['id']]['count'] = 0x0, saveWarns(_0x10ad88['id'])), _0x3f34c0;
}
async function sendLog(_0x5ea193, _0xeed19a, _0x57ed8c) {
    const _0x49a915 = _0x15878f,
        _0x32fec0 = settings(_0x5ea193['id']),
        _0x57e324 = _0x32fec0['logs']['enabled'] && _0x32fec0["logs"]["channelId"],
        _0x3f81de = _0x57e324 && _0x5ea193["channels"]['cache']['get'](_0x57e324);
    if (isSendable(_0x3f81de)) await _0x3f81de["send"]({
        'embeds': [new EmbedBuilder()["setColor"]('#5865F2')['setDescription'](_0x57ed8c)["setTimestamp"]()]
    })['catch'](() => {});
}
async function sendRichLog(_0x42cefb, _0x53c777, _0x10f703) {
    const _0x2dc65d = _0x15878f,
        _0xe52ab7 = settings(_0x42cefb['id']),
        _0x37169d = _0xe52ab7['logs']["enabled"] && _0xe52ab7["logs"]['channelId'],
        _0x5480e2 = _0x37169d && _0x42cefb["channels"]["cache"]["get"](_0x37169d);
    if (isSendable(_0x5480e2)) await _0x5480e2['send']({
        'embeds': [_0x10f703]
    })['catch'](() => {});
}

function logT(_0x2fc20c, _0x10187d, _0x520515) {
    return t(settings(_0x2fc20c['id']), _0x10187d, _0x520515);
}
async function setupTemporaryVoices(_0x27c2e5, _0x4352ba) {
    const _0x3ef494 = _0x15878f,
        _0x195a43 = _0x4352ba['tempVoices'];
    let _0x45d5bb = _0x195a43["lobbyId"] && _0x27c2e5['channels']['cache']['get'](_0x195a43['lobbyId']);
    return (!_0x45d5bb || _0x45d5bb['type'] !== ChannelType['GuildVoice']) && (_0x45d5bb = await _0x27c2e5["channels"]["create"]({
        'name': '➕・crée-votre-vocal',
        'type': ChannelType["GuildVoice"],
        'reason': "Salon de création de vocaux temporaires DashBot"
    }), _0x195a43['lobbyId'] = _0x45d5bb['id']), _0x195a43['enabled'] = !![], save(_0x27c2e5['id'], _0x4352ba), {
        'lobby': _0x45d5bb
    };
}
async function createDefaultServer(_0xd42317, _0xfb5a3f) {
    const _0x4e5b09 = _0x15878f,
        _0x1ca204 = [{
            'name': 'Membres',
            'color': '#57F287',
            'permissions': [PermissionFlagsBits["ViewChannel"], PermissionFlagsBits['SendMessages'], PermissionFlagsBits["ReadMessageHistory"], PermissionFlagsBits['Connect'], PermissionFlagsBits["Speak"]]
        }, {
            'name': 'Modérateur\x20test',
            'permissions': [PermissionFlagsBits["ViewChannel"], PermissionFlagsBits["SendMessages"], PermissionFlagsBits['ReadMessageHistory'], PermissionFlagsBits["Connect"], PermissionFlagsBits['Speak']]
        }, {
            'name': "Modérateur",
            'color': '#FEE75C',
            'permissions': [PermissionFlagsBits["ViewChannel"], PermissionFlagsBits["SendMessages"], PermissionFlagsBits["ReadMessageHistory"], PermissionFlagsBits['ManageMessages'], PermissionFlagsBits["MuteMembers"], PermissionFlagsBits['DeafenMembers'], PermissionFlagsBits["MoveMembers"], PermissionFlagsBits['Connect'], PermissionFlagsBits["Speak"], PermissionFlagsBits["PrioritySpeaker"]]
        }, {
            'name': "Staff",
            'color': "#5865F2",
            'permissions': [PermissionFlagsBits["ViewChannel"], PermissionFlagsBits['SendMessages'], PermissionFlagsBits["ReadMessageHistory"], PermissionFlagsBits["ManageMessages"], PermissionFlagsBits["KickMembers"], PermissionFlagsBits['BanMembers'], PermissionFlagsBits["MuteMembers"], PermissionFlagsBits["DeafenMembers"], PermissionFlagsBits["MoveMembers"], PermissionFlagsBits["Connect"], PermissionFlagsBits["Speak"], PermissionFlagsBits["PrioritySpeaker"]]
        }, {
            'name': 'Responsable\x20staff',
            'color': '#9B59B6',
            'permissions': [PermissionFlagsBits["ViewChannel"], PermissionFlagsBits["SendMessages"], PermissionFlagsBits['ReadMessageHistory'], PermissionFlagsBits["ManageMessages"], PermissionFlagsBits['KickMembers'], PermissionFlagsBits["BanMembers"], PermissionFlagsBits["MuteMembers"], PermissionFlagsBits['DeafenMembers'], PermissionFlagsBits["MoveMembers"], PermissionFlagsBits["Connect"], PermissionFlagsBits['Speak'], PermissionFlagsBits["PrioritySpeaker"], PermissionFlagsBits['ManageChannels'], PermissionFlagsBits["ManageRoles"]]
        }, {
            'name': 'Administrateur',
            'color': "#ED4245",
            'permissions': [PermissionFlagsBits["Administrator"]]
        }],
        _0xed2abf = {};
    for (const _0xe4d779 of _0x1ca204) {
        const _0x1888ab = await _0xd42317["roles"]['create']({
            'name': _0xe4d779['name'],
            'color': _0xe4d779['color'],
            'permissions': _0xe4d779['permissions'],
            'hoist': !![],
            'reason': "DashBot Setup"
        })['catch'](() => null);
        if (_0x1888ab) _0xed2abf[_0xe4d779["name"]] = _0x1888ab['id'];
    }
    const _0x2c3c3f = [{
            'name': "📢・annonces",
            'channels': ["📢・annonces", "📣・mises-à-jour"]
        }, {
            'name': '📜・règlement',
            'channels': ["📜・règlement"]
        }, {
            'name': '💬・général',
            'channels': ["💬・général", "🎮・jeux", '📸・partage']
        }, {
            'name': "🔊・vocaux",
            'textChannels': [],
            'voiceChannels': ['🔊\x20Général', "🔊 Jeux", "🔊 Musique"]
        }, {
            'name': '🎫・tickets',
            'private': !![],
            'channels': ['🎫・créer-ticket', '📋・logs-tickets', '📝・candidature']
        }, {
            'name': '🛡️・staff',
            'private': !![],
            'channels': ["💬・staff", "📋・logs", '📊・statistiques'],
            'voiceChannels': ['🔊\x20Entretien'],
            'restrictedChannels': ["📋・logs", "📊・statistiques"]
        }],
        _0x418a27 = _0xed2abf['Membres'],
        _0x323582 = _0xed2abf["Modérateur test"],
        _0x487220 = _0xed2abf["Modérateur"],
        _0x43b4a5 = _0xed2abf["Staff"],
        _0xb28359 = _0xed2abf["Responsable staff"],
        _0x4bd907 = _0xed2abf["Administrateur"],
        _0x127560 = [PermissionFlagsBits["ViewChannel"], PermissionFlagsBits['SendMessages'], PermissionFlagsBits["ReadMessageHistory"]];
    let _0x3128a1 = 0x0,
        _0x590ade = 0x0;
    for (const _0x1276a7 of _0x2c3c3f) {
        const _0x49d5af = [{
            'id': _0xd42317['members']['me']['id'],
            'allow': [PermissionFlagsBits["ViewChannel"], PermissionFlagsBits["ManageChannels"], PermissionFlagsBits['SendMessages']]
        }];
        if (_0x1276a7['private']) {
            _0x49d5af['push']({
                'id': _0xd42317['id'],
                'deny': [PermissionFlagsBits['ViewChannel']]
            });
            for (const _0x20cffb of [_0x43b4a5, _0x487220, _0xb28359, _0x4bd907])
                if (_0x20cffb) _0x49d5af['push']({
                    'id': _0x20cffb,
                    'allow': _0x127560
                });
        } else {
            _0x49d5af["push"]({
                'id': _0xd42317['id'],
                'allow': [PermissionFlagsBits['ViewChannel']]
            });
            for (const _0x19deb4 of [_0x418a27, _0x323582, _0x487220, _0x43b4a5, _0xb28359, _0x4bd907])
                if (_0x19deb4) _0x49d5af['push']({
                    'id': _0x19deb4,
                    'allow': _0x127560
                });
        }
        const _0x21a352 = await _0xd42317['channels']["create"]({
            'name': _0x1276a7["name"],
            'type': ChannelType['GuildCategory'],
            'permissionOverwrites': _0x49d5af,
            'reason': "DashBot Setup"
        })["catch"](() => null);
        if (!_0x21a352) continue;
        _0x3128a1++;
        for (const _0x4fab8f of [..._0x1276a7['channels'] || [], ..._0x1276a7['textChannels'] || []]) {
            const _0x1fbdcc = await _0xd42317['channels']["create"]({
                'name': _0x4fab8f,
                'type': ChannelType['GuildText'],
                'parent': _0x21a352['id'],
                'reason': 'DashBot\x20Setup'
            })['catch'](() => null);
            if (_0x1fbdcc && _0x1276a7["restrictedChannels"]?.['includes'](_0x4fab8f) && _0x323582) await _0x1fbdcc["permissionOverwrites"]['edit'](_0x323582, {
                'ViewChannel': ![]
            })["catch"](() => {});
            if (_0x1fbdcc && _0x4fab8f === "📋・logs-tickets") _0xfb5a3f["logs"]["channelId"] = _0x1fbdcc['id'];
            if (_0x1fbdcc) _0x590ade++;
        }
        for (const _0x40d8cc of _0x1276a7["voiceChannels"] || []) {
            const _0x2fbb4f = await _0xd42317['channels']['create']({
                'name': _0x40d8cc,
                'type': ChannelType['GuildVoice'],
                'parent': _0x21a352['id'],
                'reason': 'DashBot\x20Setup'
            })["catch"](() => null);
            if (_0x2fbb4f && _0x1276a7["restrictedChannels"]?.['includes'](_0x40d8cc) && _0x323582) await _0x2fbb4f['permissionOverwrites']['edit'](_0x323582, {
                'ViewChannel': ![]
            })["catch"](() => {});
            if (_0x2fbb4f) _0x590ade++;
        }
    }
    const _0xa8b3b4 = Boolean(_0xfb5a3f['tempVoices']["lobbyId"] && _0xd42317["channels"]['cache']["has"](_0xfb5a3f['tempVoices']['lobbyId'])),
        _0x51eb6b = await setupTemporaryVoices(_0xd42317, _0xfb5a3f)["catch"](() => null);
    if (_0x51eb6b) {
        if (!_0xa8b3b4) _0x590ade++;
    }
    return save(_0xd42317['id'], _0xfb5a3f), "✅ Structure créée : **" + Object['keys'](_0xed2abf)["length"] + '**\x20rôle(s),\x20**' + _0x3128a1 + "** catégorie(s), **" + _0x590ade + "** salon(s).";
}
async function generateTranscript(_0x50070f) {
    const _0x25554b = _0x15878f,
        _0x7e18c8 = [];
    let _0x118de4;
    while (!![]) {
        const _0x25d68f = {
            'limit': 0x64
        };
        if (_0x118de4) _0x25d68f["before"] = _0x118de4;
        const _0x26e4ce = await _0x50070f['messages']["fetch"](_0x25d68f)["catch"](() => new Map());
        if (!_0x26e4ce['size']) break;
        _0x7e18c8["push"](..._0x26e4ce['values']());
        if (_0x26e4ce['size'] < 0x64) break;
        _0x118de4 = _0x26e4ce['last']()['id'];
    }
    _0x7e18c8['reverse']();
    const _0x187421 = _0x40c044 => String(_0x40c044)["replace"](/&/g, "&amp;")['replace'](/</g, "&lt;")['replace'](/>/g, "&gt;")["replace"](/"/g, '&quot;'),
        _0x562504 = _0x7e18c8['map'](_0x65d815 => {
            const _0xf5e422 = _0x25554b,
                _0x4ed72e = _0x65d815['attachments']["size"] ? '\x20[' + _0x65d815["attachments"]['size'] + " fichier(s)]" : '';
            return '<div\x20class=\x22m\x22><div\x20class=\x22h\x22><span\x20class=\x22a\x22>' + _0x187421(_0x65d815['author']["tag"]) + '</span>\x20<span\x20class=\x22t\x22>' + _0x65d815['createdAt']["toLocaleString"]('fr-FR') + '</span></div><div\x20class=\x22ct\x22>' + _0x187421(_0x65d815["content"] || '') + _0x4ed72e + "</div></div>";
        })["join"]('\x0a'),
        _0x477243 = "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Transcript " + _0x187421(_0x50070f["name"]) + "</title><style>body{font-family:sans-serif;background:#2c2f33;color:#dcddde;padding:20px}.c{max-width:800px;margin:0 auto}h1{color:#5865F2;border-bottom:2px solid #5865F2;padding-bottom:10px}.m{margin:8px 0;padding:10px;background:#36393f;border-radius:8px;border-left:3px solid #5865F2}.a{font-weight:bold;color:#5865F2}.t{color:#72767d;font-size:.8em}.ct{margin-top:4px;white-space:pre-wrap}.ft{text-align:center;color:#72767d;margin-top:20px;border-top:1px solid #4f545c;padding-top:10px}</style></head><body><div class=\"c\"><h1>Transcript " + _0x187421(_0x50070f['name']) + "</h1><p>" + _0x7e18c8["length"] + '\x20messages\x20|\x20' + new Date()["toLocaleString"]('fr-FR') + '</p>' + _0x562504 + "<div class=\"ft\">DashBot Transcript</div></div></body></html>";
    return Buffer["from"](_0x477243, 'utf-8');
}

function getPanelEmbed(_0xe999a8, _0x41c961, _0x4c3a9e) {
    const _0xc0005b = _0x15878f,
        _0x3026ce = _0x4c3a9e === 'ticket',
        _0xf1be4b = _0x3026ce ? "🎫 Ticket" : '📝\x20Candidatures',
        _0x38c46a = _0x3026ce ? 'Clique\x20sur\x20le\x20bouton\x20pour\x20créer\x20un\x20ticket.' : 'Clique\x20sur\x20le\x20bouton\x20pour\x20envoyer\x20ta\x20candidature.',
        _0x1d6e1e = new EmbedBuilder()["setColor"]("#5865F2")['setTitle'](_0xf1be4b)["setDescription"](_0x38c46a)['setFooter']({
            'text': "DashBot • " + _0xe999a8['name']
        })['setTimestamp'](),
        _0x4c1200 = new ButtonBuilder()['setCustomId'](_0x4c3a9e + ':panel')['setLabel'](_0x3026ce ? '🎫\x20Créer\x20un\x20ticket' : '📝\x20Postuler')['setStyle'](_0x3026ce ? ButtonStyle['Primary'] : ButtonStyle['Success']);
    return {
        'embeds': [_0x1d6e1e],
        'components': [row(_0x4c1200)]
    };
}

function generateEconHTML(_0x2d67eb, _0x5575a9) {
    const _0x43012f = _0x15878f,
        _0x1286e4 = _0x5575a9['map'](([_0x706d01, _0x12c2d7], _0x5a39ed) => "<tr><td>" + (_0x5a39ed + 0x1) + '</td><td>' + _0x706d01 + "</td><td>" + (_0x12c2d7['balance'] || 0x0)["toLocaleString"]() + '</td><td>' + (_0x12c2d7['lastDaily'] ? new Date(_0x12c2d7["lastDaily"])['toLocaleDateString']() : "Jamais") + '</td></tr>')["join"]('\x0a');
    return "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Économie - " + _0x2d67eb["name"] + "</title><style>body{font-family:sans-serif;background:#2c2f33;color:#dcddde;padding:20px}h1{color:#5865F2;border-bottom:2px solid #5865F2}table{width:100%;border-collapse:collapse;margin-top:20px}th,td{padding:10px;text-align:left;border-bottom:1px solid #4f545c}th{background:#36393f;color:#5865F2}tr:hover{background:#36393f}.ft{text-align:center;color:#72767d;margin-top:20px;padding-top:10px;border-top:1px solid #4f545c}</style></head><body><h1>💰 Économie - " + _0x2d67eb["name"] + "</h1><p>" + _0x5575a9['length'] + '\x20membre(s)\x20—\x20Généré\x20le\x20' + new Date()['toLocaleString']("fr-FR") + '</p><table><thead><tr><th>#</th><th>ID</th><th>Solde\x20🪙</th><th>Dernier\x20daily</th></tr></thead><tbody>' + _0x1286e4 + "</tbody></table><div class=\"ft\">DashBot • Économie</div></body></html>";
}

function generateLevelsHTML(_0x32263c, _0x545f2d, _0x436af0) {
    const _0x103872 = _0x15878f,
        _0x8c9fc9 = _0x545f2d["map"](([_0x5c9e9e, _0x174919], _0x12b07e) => {
            const _0x576ca9 = _0x103872,
                _0x536e11 = (_0x174919['level'] || 0x0) * 0x32 + 0x64,
                _0x22c6b5 = _0x174919['level'] > 0x0 ? Math["round"]((_0x174919['xp'] || 0x0) / _0x536e11 * 0x64) : 0x0;
            return "<tr><td>" + (_0x12b07e + 0x1) + "</td><td>" + _0x5c9e9e + "</td><td>" + (_0x174919["level"] || 0x0) + '</td><td>' + (_0x174919['xp'] || 0x0) + '/' + _0x536e11 + '</td><td>' + _0x22c6b5 + '%</td><td>' + (_0x174919["messages"] || 0x0) + "</td></tr>";
        })["join"]('\x0a');
    return "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Niveaux - " + _0x32263c["name"] + "</title><style>body{font-family:sans-serif;background:#2c2f33;color:#dcddde;padding:20px}h1{color:#57F287;border-bottom:2px solid #57F287}table{width:100%;border-collapse:collapse;margin-top:20px}th,td{padding:10px;text-align:left;border-bottom:1px solid #4f545c}th{background:#36393f;color:#57F287}tr:hover{background:#36393f}.ft{text-align:center;color:#72767d;margin-top:20px;padding-top:10px;border-top:1px solid #4f545c}</style></head><body><h1>📊 Niveaux - " + _0x32263c['name'] + '</h1><p>' + _0x545f2d['length'] + '\x20membre(s)\x20—\x20XP/msg\x20:\x20' + (_0x436af0['xpPerMessage'] || 0xf) + " — Généré le " + new Date()["toLocaleString"]('fr-FR') + '</p><table><thead><tr><th>#</th><th>Membre</th><th>Niveau</th><th>XP</th><th>Progression</th><th>Messages</th></tr></thead><tbody>' + _0x8c9fc9 + '</tbody></table><div\x20class=\x22ft\x22>DashBot\x20•\x20Niveaux</div></body></html>';
}
async function createTicketChannel(_0x54e48f, _0x4aaa9b, _0x2b71d5, _0x15618f, _0x2d95e9) {
    const _0x4f5d0e = _0x15878f,
        _0x1fa149 = _0x4aaa9b[_0x2d95e9],
        _0x2a5417 = _0x54e48f["channels"]['cache']["get"](_0x1fa149["categoryId"]);
    if (!_0x2a5417 || _0x2a5417["type"] !== ChannelType["GuildCategory"]) return null;
    const _0x4e78d8 = _0x2d95e9 === 'ticket' ? "ticket-" + _0x2b71d5['username'] : "recrutement-" + _0x2b71d5["username"],
        _0x2d6e4c = [{
            'id': _0x54e48f['id'],
            'deny': [PermissionFlagsBits["ViewChannel"]]
        }, {
            'id': _0x2b71d5['id'],
            'allow': [PermissionFlagsBits['ViewChannel'], PermissionFlagsBits["SendMessages"], PermissionFlagsBits["ReadMessageHistory"]]
        }, {
            'id': _0x54e48f["members"]['me']['id'],
            'allow': [PermissionFlagsBits['ViewChannel'], PermissionFlagsBits["SendMessages"], PermissionFlagsBits["ReadMessageHistory"], PermissionFlagsBits['ManageChannels']]
        }, ...(_0x1fa149['supportRoleIds'] || [])["map"](_0xc2aa3a => ({
            'id': _0xc2aa3a,
            'allow': [PermissionFlagsBits["ViewChannel"], PermissionFlagsBits["SendMessages"], PermissionFlagsBits["ReadMessageHistory"]]
        }))];
    return _0x54e48f['channels']['create']({
        'name': _0x4e78d8,
        'type': ChannelType['GuildText'],
        'parent': _0x2a5417['id'],
        'permissionOverwrites': _0x2d6e4c,
        'reason': _0x2d95e9 + " for " + _0x2b71d5["tag"]
    })['catch'](() => null);
}
async function setupCaptcha(_0x3939b9, _0x79d1fd) {
    const _0x1415f5 = _0x15878f,
        {
            categoryId: _0x10d42a,
            channelId: _0xa100fd,
            unverifiedRoleId: _0xf1180a,
            verifiedRoleId: _0x5ba556
        } = _0x79d1fd["captcha"];
    let _0x3e6903 = _0x10d42a && _0x3939b9['channels']["cache"]["get"](_0x10d42a);
    (!_0x3e6903 || _0x3e6903['type'] !== ChannelType['GuildCategory']) && (_0x3e6903 = await _0x3939b9["channels"]['create']({
        'name': '🤖・vérification',
        'type': ChannelType["GuildCategory"],
        'reason': 'DashBot\x20Captcha',
        'permissionOverwrites': [{
            'id': _0x3939b9['id'],
            'deny': [PermissionFlagsBits["ViewChannel"]]
        }, {
            'id': _0x3939b9['roles']["botRoleFor"](client['user']),
            'allow': [PermissionFlagsBits['ViewChannel'], PermissionFlagsBits["SendMessages"]]
        }]
    }), _0x79d1fd["captcha"]['categoryId'] = _0x3e6903['id']);
    let _0x520a9a = _0xf1180a && _0x3939b9['roles']["cache"]["get"](_0xf1180a);
    !_0x520a9a && (_0x520a9a = await _0x3939b9['roles']['create']({
        'name': 'Non\x20vérifié',
        'color': '#ED4245',
        'reason': 'DashBot\x20Captcha'
    }), _0x79d1fd["captcha"]["unverifiedRoleId"] = _0x520a9a['id']);
    for (const _0x53c16d of _0x3939b9['channels']['cache']['values']()) {
        _0x53c16d['parentId'] !== _0x3e6903['id'] && !_0x53c16d["permissionOverwrites"]["cache"]['has'](_0x520a9a['id']) && await _0x53c16d['permissionOverwrites']["edit"](_0x520a9a['id'], {
            'ViewChannel': ![]
        })["catch"](() => {});
    }
    let _0x58305a = _0x5ba556 && _0x3939b9['roles']['cache']["get"](_0x5ba556);
    !_0x58305a && (_0x58305a = await _0x3939b9["roles"]["create"]({
        'name': "Vérifié",
        'color': '#57F287',
        'reason': "DashBot Captcha"
    }), _0x79d1fd["captcha"]["verifiedRoleId"] = _0x58305a['id']);
    let _0x4cda6b = _0xa100fd && _0x3939b9["channels"]['cache']['get'](_0xa100fd);
    (!_0x4cda6b || !isSendable(_0x4cda6b)) && (_0x4cda6b = await _0x3939b9['channels']['create']({
        'name': "captcha",
        'type': ChannelType["GuildText"],
        'parent': _0x3e6903['id'],
        'reason': 'DashBot\x20Captcha',
        'permissionOverwrites': [{
            'id': _0x3939b9['id'],
            'deny': [PermissionFlagsBits['ViewChannel']]
        }, {
            'id': _0x520a9a['id'],
            'allow': [PermissionFlagsBits['ViewChannel'], PermissionFlagsBits['SendMessages'], PermissionFlagsBits["ReadMessageHistory"]]
        }, {
            'id': _0x3939b9["members"]['me']['id'],
            'allow': [PermissionFlagsBits["ViewChannel"], PermissionFlagsBits['SendMessages'], PermissionFlagsBits['ReadMessageHistory'], PermissionFlagsBits['ManageChannels']]
        }]
    }), _0x79d1fd['captcha']['channelId'] = _0x4cda6b['id']);
    let _0x13670d = _0x79d1fd['captcha']['rulesChannelId'] && _0x3939b9['channels']['cache']["get"](_0x79d1fd['captcha']['rulesChannelId']);
    (!_0x13670d || !isSendable(_0x13670d)) && (_0x13670d = await _0x3939b9['channels']["create"]({
        'name': "📜・règlement",
        'type': ChannelType["GuildText"],
        'parent': _0x3e6903['id'],
        'reason': "DashBot Captcha",
        'permissionOverwrites': [{
            'id': _0x3939b9['id'],
            'deny': [PermissionFlagsBits['ViewChannel']]
        }, {
            'id': _0x58305a['id'],
            'allow': [PermissionFlagsBits["ViewChannel"], PermissionFlagsBits['ReadMessageHistory'], PermissionFlagsBits['AddReactions']]
        }, {
            'id': _0x3939b9["members"]['me']['id'],
            'allow': [PermissionFlagsBits['ViewChannel'], PermissionFlagsBits["SendMessages"], PermissionFlagsBits['ReadMessageHistory'], PermissionFlagsBits['ManageChannels']]
        }]
    }), _0x79d1fd["captcha"]['rulesChannelId'] = _0x13670d['id']);
    _0x79d1fd["rules"]["channelId"] = _0x13670d['id'], _0x79d1fd["rules"]['enabled'] = !![];
    const _0x58abfb = Math["floor"](Math['random']() * 0x14) + 0x1,
        _0x51a39f = Math['floor'](Math["random"]() * 0x14) + 0x1,
        _0x43e20e = ['+', '-', '*'],
        _0x52651b = _0x43e20e[Math['floor'](Math["random"]() * _0x43e20e['length'])];
    let _0x1d1ea7;
    if (_0x52651b === '+') _0x1d1ea7 = _0x58abfb + _0x51a39f;
    else {
        if (_0x52651b === '-') _0x1d1ea7 = _0x58abfb - _0x51a39f;
        else _0x1d1ea7 = _0x58abfb * _0x51a39f;
    }
    return await _0x4cda6b["send"]({
        'embeds': [new EmbedBuilder()['setColor']("#5865F2")["setTitle"]("🤖 Vérification Captcha")['setDescription']("Résous ce calcul pour prouver que tu n'es pas un bot.\n\n**" + _0x58abfb + '\x20' + _0x52651b + '\x20' + _0x51a39f + " = /**\n\nTape le résultat dans ce salon.")['setFooter']({
            'text': "DashBot • Captcha"
        })['setTimestamp']()]
    }), _0x3939b9["_captchaAnswers"] = _0x3939b9["_captchaAnswers"] || new Map(), _0x3939b9["_captchaAnswers"]["set"]("current", {
        'a': _0x58abfb,
        'op': _0x52651b,
        'b': _0x51a39f,
        'answer': _0x1d1ea7
    }), save(_0x3939b9['id'], _0x79d1fd), {
        'unverifiedRole': _0x520a9a,
        'verifiedRole': _0x58305a,
        'captchaChannel': _0x4cda6b
    };
}
async function createBackup(_0x49d9ca) {
    const _0x2ddfef = _0x15878f,
        _0x5ac321 = {
            'name': _0x49d9ca["name"],
            'id': _0x49d9ca['id'],
            'createdAt': new Date()["toISOString"](),
            'roles': [],
            'categories': []
        },
        _0x38cc74 = _0x49d9ca["roles"]['everyone'];
    for (const _0x29a0ff of [..._0x49d9ca["roles"]['cache']['values']()]["filter"](_0x318c13 => _0x318c13['id'] !== _0x38cc74['id'] && !_0x318c13['managed'])['sort']((_0x1d1303, _0x177ccb) => _0x177ccb["position"] - _0x1d1303['position'])) {
        _0x5ac321["roles"]['push']({
            'name': _0x29a0ff['name'],
            'color': _0x29a0ff["hexColor"],
            'permissions': _0x29a0ff["permissions"]['bitfield']['toString'](),
            'hoist': _0x29a0ff['hoist'],
            'mentionable': _0x29a0ff['mentionable']
        });
    }
    const _0x3bc9ca = _0x49d9ca['channels']['cache']['filter'](_0x1c4521 => _0x1c4521["type"] === ChannelType["GuildCategory"])["sort"]((_0x10be4d, _0x3ebe4a) => _0x10be4d["position"] - _0x3ebe4a['position']);
    for (const _0x1cae0a of _0x3bc9ca['values']()) {
        const _0x2a0d8f = {
                'name': _0x1cae0a['name'],
                'position': _0x1cae0a['position'],
                'overwrites': serializeOverwrites(_0x1cae0a),
                'channels': []
            },
            _0x4d6bf2 = [..._0x49d9ca['channels']['cache']["filter"](_0x4a4ac8 => _0x4a4ac8["parentId"] === _0x1cae0a['id'])["values"]()]['sort']((_0x2ffb0b, _0x2e4a55) => _0x2ffb0b['position'] - _0x2e4a55['position']);
        for (const _0x11bf07 of _0x4d6bf2) {
            const _0x36ae0e = {
                'name': _0x11bf07["name"],
                'type': _0x11bf07["type"],
                'position': _0x11bf07['position'],
                'topic': _0x11bf07["topic"] || '',
                'nsfw': _0x11bf07["nsfw"] || ![],
                'bitrate': _0x11bf07["bitrate"] || null,
                'userLimit': _0x11bf07['userLimit'] || null,
                'overwrites': serializeOverwrites(_0x11bf07),
                'messages': []
            };
            if (_0x11bf07['isTextBased'] && _0x11bf07['messages'] && _0x11bf07['type'] !== ChannelType['GuildVoice']) {
                const _0x1ee791 = await _0x11bf07['messages']["fetch"]({
                    'limit': 0x32
                })["catch"](() => null);
                if (_0x1ee791)
                    for (const _0x4d7738 of [..._0x1ee791['values']()]['reverse']()) {
                        _0x36ae0e['messages']['push']({
                            'content': _0x4d7738["content"] || '',
                            'author': _0x4d7738["author"]['tag'],
                            'authorId': _0x4d7738["author"]['id'],
                            'timestamp': _0x4d7738["createdAt"]['toISOString'](),
                            'attachments': _0x4d7738["attachments"]['map'](_0x189c61 => ({
                                'name': _0x189c61['name'],
                                'url': _0x189c61["url"],
                                'proxyURL': _0x189c61['proxyURL']
                            }))
                        });
                    }
            }
            _0x2a0d8f['channels']["push"](_0x36ae0e);
        }
        _0x5ac321["categories"]['push'](_0x2a0d8f);
    }
    return _0x5ac321;
}

function serializeOverwrites(_0x34d971) {
    const _0x5db592 = _0x15878f;
    return [..._0x34d971["permissionOverwrites"]['cache']['values']()]['map'](_0x300576 => ({
        'id': _0x300576['id'],
        'type': _0x300576["type"],
        'allow': _0x300576['allow']["bitfield"]['toString'](),
        'deny': _0x300576["deny"]['bitfield']['toString']()
    }));
}
async function restoreBackup(_0x54dc54, _0x5b4f69) {
    const _0x2cf8ad = _0x15878f;
    let _0x53ac33 = 0x0,
        _0x971237 = 0x0,
        _0x981dc7 = 0x0,
        _0x94eeef = 0x0;
    const _0x63b518 = {};
    for (const _0xf750f4 of _0x5b4f69['roles']) {
        const _0x509460 = await _0x54dc54['roles']['create']({
            'name': _0xf750f4['name'],
            'color': _0xf750f4["color"],
            'permissions': BigInt(_0xf750f4['permissions']),
            'hoist': _0xf750f4["hoist"],
            'mentionable': _0xf750f4["mentionable"],
            'reason': "DashBot Restore"
        })['catch'](() => null);
        _0x509460 && (_0x63b518[_0xf750f4['name']] = _0x509460['id'], _0x53ac33++);
    }
    for (const _0x1e0a1a of _0x5b4f69["categories"]) {
        const _0x1feee3 = deserializeOverwrites(_0x1e0a1a["overwrites"], _0x63b518, _0x54dc54),
            _0xdedb10 = await _0x54dc54['channels']['create']({
                'name': _0x1e0a1a["name"],
                'type': ChannelType['GuildCategory'],
                'permissionOverwrites': _0x1feee3,
                'reason': "DashBot Restore"
            })["catch"](() => null);
        if (!_0xdedb10) continue;
        _0x971237++;
        for (const _0x34398f of _0x1e0a1a['channels']) {
            const _0x4fa3a2 = deserializeOverwrites(_0x34398f["overwrites"], _0x63b518, _0x54dc54),
                _0x13a91 = await _0x54dc54['channels']['create']({
                    'name': _0x34398f['name'],
                    'type': _0x34398f["type"],
                    'parent': _0xdedb10['id'],
                    'topic': _0x34398f["topic"] || undefined,
                    'nsfw': _0x34398f['nsfw'],
                    'bitrate': _0x34398f['bitrate'] || undefined,
                    'userLimit': _0x34398f['userLimit'] || undefined,
                    'permissionOverwrites': _0x4fa3a2,
                    'reason': "DashBot Restore"
                })['catch'](() => null);
            if (!_0x13a91) continue;
            _0x981dc7++;
            if (_0x34398f["messages"]['length'] && _0x13a91['isTextBased']) {
                const _0x377c7a = _0x34398f['messages']["map"](_0x12c708 => '**[' + _0x12c708["author"] + ']**\x20' + _0x12c708['timestamp'] + '\x0a' + _0x12c708['content'] + (_0x12c708['attachments']['length'] ? '\x0a' + _0x12c708["attachments"]["map"](_0x596744 => _0x596744['url'])["join"]('\x0a') : ''))['join']("\n\n---\n\n");
                await _0x13a91['send']({
                    'content': "📦 Messages restaurés (" + _0x34398f['messages']['length'] + ")\n\n" + _0x377c7a['slice'](0x0, 0x76c)
                })['catch'](() => {}), _0x94eeef += _0x34398f['messages']['length'];
            }
        }
    }
    return {
        'roles': _0x53ac33,
        'categories': _0x971237,
        'channels': _0x981dc7,
        'messages': _0x94eeef
    };
}

function deserializeOverwrites(_0xd8744e, _0x155a87, _0x1f001e) {
    const _0x41d534 = _0x15878f;
    return _0xd8744e["map"](_0x58498a => ({
        'id': _0x155a87[_0x1f001e["roles"]['cache']['get'](_0x58498a['id'])?.['name']] || _0x58498a['id'],
        'type': _0x58498a["type"],
        'allow': BigInt(_0x58498a['allow']),
        'deny': BigInt(_0x58498a["deny"])
    }));
}
const {
    REST,
    Routes,
    SlashCommandBuilder
} = require("discord.js"), loc = _0x3fde04 => ({
    'en-US': _0x3fde04
}), slashCmdDefs = [new SlashCommandBuilder()["setName"]('config')["setDescription"]('Ouvre\x20la\x20configuration\x20DashBot')["setDescriptionLocalizations"](loc('Open\x20DashBot\x20configuration'))['toJSON'](), new SlashCommandBuilder()["setName"]('création-serveur')["setDescription"]("Crée la structure complète du serveur")['setDescriptionLocalizations'](loc('Create\x20the\x20complete\x20server\x20structure'))['toJSON'](), new SlashCommandBuilder()["setName"]('aide')['setDescription']("Affiche les commandes du bot")["setDescriptionLocalizations"](loc("Show bot commands"))['toJSON'](), new SlashCommandBuilder()["setName"]('sauvegarde')["setDescription"]('Sauvegarde\x20la\x20structure\x20du\x20serveur')['setDescriptionLocalizations'](loc("Backup server structure"))["toJSON"](), new SlashCommandBuilder()["setName"]('restauration')['setDescription']("Restaure une sauvegarde")["setDescriptionLocalizations"](loc("Restore a backup"))['addStringOption'](_0x4b4dba => _0x4b4dba["setName"]('id')['setDescription']("ID de la sauvegarde")["setDescriptionLocalizations"](loc('Backup\x20ID'))['setRequired'](!![]))['toJSON'](), new SlashCommandBuilder()['setName']("maintenance")['setDescription']("Gère le mode maintenance")["setDescriptionLocalizations"](loc('Manage\x20maintenance\x20mode'))["addSubcommand"](_0x1631cc => _0x1631cc['setName']("activé")['setDescription']("Active le mode maintenance")["setDescriptionLocalizations"](loc('Enable\x20maintenance\x20mode')))["addSubcommand"](_0x5392bc => _0x5392bc['setName']("désactivé")['setDescription']('Désactive\x20le\x20mode\x20maintenance')['setDescriptionLocalizations'](loc("Disable maintenance mode")))['toJSON'](), new SlashCommandBuilder()["setName"]("journalier")['setDescription']('Réclame\x20ta\x20récompense\x20quotidienne')['setDescriptionLocalizations'](loc('Claim\x20your\x20daily\x20reward'))['toJSON'](), new SlashCommandBuilder()['setName']('solde')['setDescription']("Affiche ton solde ou celui d'un membre")['setDescriptionLocalizations'](loc("Show your balance or a member's"))['addUserOption'](_0x3cab26 => _0x3cab26['setName']('membre')["setDescription"]("Membre à consulter")["setDescriptionLocalizations"](loc("Member to check"))['setRequired'](![]))["toJSON"](), new SlashCommandBuilder()['setName']("rang")['setDescription']('Affiche\x20ton\x20rang\x20ou\x20celui\x20d\x27un\x20membre')['setDescriptionLocalizations'](loc("Show your rank or a member's"))["addUserOption"](_0x18df39 => _0x18df39["setName"]('membre')["setDescription"]("Membre à consulter")['setDescriptionLocalizations'](loc("Member to check"))['setRequired'](![]))["toJSON"](), new SlashCommandBuilder()['setName']("classement")['setDescription']("Affiche le classement du serveur")['setDescriptionLocalizations'](loc("Show server leaderboard"))['toJSON'](), new SlashCommandBuilder()['setName']("boutique")['setDescription']("Affiche la boutique du serveur")['setDescriptionLocalizations'](loc('Show\x20server\x20shop'))['toJSON'](), new SlashCommandBuilder()['setName']("acheter")['setDescription']('Achète\x20un\x20article\x20de\x20la\x20boutique')['setDescriptionLocalizations'](loc("Buy a shop item"))['addStringOption'](_0x5519f1 => _0x5519f1['setName']('article')['setDescription']("Nom ou numéro de l'article")['setDescriptionLocalizations'](loc("Item name or number"))['setRequired'](!![]))['toJSON'](), new SlashCommandBuilder()["setName"]('sondage')["setDescription"]("Crée un sondage")["setDescriptionLocalizations"](loc('Create\x20a\x20poll'))['addStringOption'](_0x228454 => _0x228454['setName']('question')['setDescription']("Question du sondage")["setDescriptionLocalizations"](loc('Poll\x20question'))['setRequired'](!![]))['toJSON'](), new SlashCommandBuilder()["setName"]('suggestion')['setDescription']("Fais une suggestion")["setDescriptionLocalizations"](loc('Make\x20a\x20suggestion'))['addStringOption'](_0x455b39 => _0x455b39['setName']("texte")['setDescription']('Texte\x20de\x20la\x20suggestion')['setDescriptionLocalizations'](loc('Suggestion\x20text'))['setRequired'](!![]))["toJSON"](), new SlashCommandBuilder()['setName']('concours')['setDescription']('Lance\x20un\x20concours\x20(staff)')['setDescriptionLocalizations'](loc('Start\x20a\x20giveaway\x20(staff)'))['addStringOption'](_0x3cca9e => _0x3cca9e['setName']('temps')['setDescription']('Durée\x20(ex:\x2030min,\x202h,\x201d)')['setDescriptionLocalizations'](loc("Duration (e.g. 30min, 2h, 1d)"))['setRequired'](!![]))['addStringOption'](_0xa1b54a => _0xa1b54a['setName']('lots')['setDescription']("Lot à gagner")['setDescriptionLocalizations'](loc("Prize to win"))['setRequired'](!![]))['addIntegerOption'](_0x9c3d => _0x9c3d['setName']('gagnants')['setDescription']('Nombre\x20de\x20gagnants\x20(défaut:\x201)')['setMinValue'](0x1)['setMaxValue'](0x32))['addChannelOption'](_0x9c3d => _0x9c3d['setName']('salon')['setDescription']('Salon\x20de\x20diffusion\x20(défaut:\x20actuel)'))['addStringOption'](_0x9c3d => _0x9c3d['setName']('description')['setDescription']('Description\x20du\x20giveaway'))['addRoleOption'](_0x9c3d => _0x9c3d['setName']('role')['setDescription']('Rôle\x20requis\x20pour\x20participer'))['addIntegerOption'](_0x9c3d => _0x9c3d['setName']('membres')['setDescription']('Membres\x20minimum\x20du\x20serveur')['setMinValue'](0x1))['toJSON'](), new SlashCommandBuilder()['setName']('giveaway')['setDescription']('Gestion\x20des\x20giveaways\x20(staff)')['setDescriptionLocalizations'](loc('Giveaway\x20management\x20(staff)'))['addSubcommand'](_0x9c3d => _0x9c3d['setName']('creer')['setDescription']('Créer\x20un\x20giveaway')['addStringOption'](_0x9c3d => _0x9c3d['setName']('temps')['setDescription']('Durée')['setRequired'](!![])['addChoices']({
    'name': '1\x20minute',
    'value': '1m'
}, {
    'name': '5\x20minutes',
    'value': '5m'
}, {
    'name': '10\x20minutes',
    'value': '10m'
}, {
    'name': '30\x20minutes',
    'value': '30m'
}, {
    'name': '2\x20heures',
    'value': '2h'
}, {
    'name': '1\x20jour',
    'value': '1d'
}))['addStringOption'](_0x9c3d => _0x9c3d['setName']('lots')['setDescription']('Lot\x20à\x20gagner')['setRequired'](!![]))['addIntegerOption'](_0x9c3d => _0x9c3d['setName']('gagnants')['setDescription']('Nombre\x20de\x20gagnants\x20(défaut:\x201)')['setMinValue'](0x1)['setMaxValue'](0x32))['addChannelOption'](_0x9c3d => _0x9c3d['setName']('salon')['setDescription']('Salon\x20de\x20diffusion\x20(défaut:\x20actuel)'))['addStringOption'](_0x9c3d => _0x9c3d['setName']('description')['setDescription']('Description'))['addRoleOption'](_0x9c3d => _0x9c3d['setName']('role')['setDescription']('Rôle\x20requis'))['addIntegerOption'](_0x9c3d => _0x9c3d['setName']('membres')['setDescription']('Membres\x20minimum\x20du\x20serveur')['setMinValue'](0x1)))['addSubcommand'](_0x9c3d => _0x9c3d['setName']('liste')['setDescription']('Lister\x20les\x20giveaways\x20en\x20cours'))['addSubcommand'](_0x9c3d => _0x9c3d['setName']('arreter')['setDescription']('Arrêter\x20un\x20giveaway\x20et\x20tirer\x20les\x20gagnants')['addStringOption'](_0x9c3d => _0x9c3d['setName']('message')['setDescription']('ID\x20du\x20message\x20du\x20giveaway'))['addChannelOption'](_0x9c3d => _0x9c3d['setName']('salon')['setDescription']('Salon\x20(défaut:\x20actuel)')))['addSubcommand'](_0x9c3d => _0x9c3d['setName']('relancer')['setDescription']('Refaire\x20le\x20tirage\x20en\x20excluant\x20les\x20anciens\x20gagnants')['addStringOption'](_0x9c3d => _0x9c3d['setName']('message')['setDescription']('ID\x20du\x20message\x20du\x20giveaway'))['addChannelOption'](_0x9c3d => _0x9c3d['setName']('salon')['setDescription']('Salon\x20(défaut:\x20actuel)')))['addSubcommand'](_0x9c3d => _0x9c3d['setName']('participants')['setDescription']('Voir\x20les\x20participants\x20d\x27un\x20giveaway')['addStringOption'](_0x9c3d => _0x9c3d['setName']('message')['setDescription']('ID\x20du\x20message\x20du\x20giveaway'))['addChannelOption'](_0x9c3d => _0x9c3d['setName']('salon')['setDescription']('Salon\x20(défaut:\x20actuel)')))['addSubcommand'](_0x9c3d => _0x9c3d['setName']('supprimer')['setDescription']('Supprimer\x20un\x20giveaway')['addStringOption'](_0x9c3d => _0x9c3d['setName']('message')['setDescription']('ID\x20du\x20message\x20du\x20giveaway'))['addChannelOption'](_0x9c3d => _0x9c3d['setName']('salon')['setDescription']('Salon\x20(défaut:\x20actuel)')))['toJSON'](), new SlashCommandBuilder()['setName']("panneau-rôle")['setDescription']('Crée\x20un\x20panneau\x20de\x20rôles\x20réaction')['setDescriptionLocalizations'](loc('Create\x20a\x20reaction\x20role\x20panel'))['addChannelOption'](_0x1b5473 => _0x1b5473["setName"]('salon')['setDescription']("Salon où envoyer le panneau")["setDescriptionLocalizations"](loc("Channel to send the panel"))["setRequired"](!![]))["addStringOption"](_0x5be287 => _0x5be287["setName"]('titre')["setDescription"]('Titre\x20du\x20panneau')['setDescriptionLocalizations'](loc('Panel\x20title'))["setRequired"](![]))['addStringOption'](_0x169835 => _0x169835["setName"]("description")["setDescription"]('Description\x20du\x20panneau')["setDescriptionLocalizations"](loc('Panel\x20description'))["setRequired"](![]))['toJSON'](), new SlashCommandBuilder()["setName"]('annonce')['setDescription']("Envoie une annonce")['setDescriptionLocalizations'](loc('Send\x20an\x20announcement'))["addStringOption"](_0x1ac112 => _0x1ac112['setName']("message")["setDescription"]('Texte\x20de\x20l\x27annonce')['setDescriptionLocalizations'](loc('Announcement\x20text'))['setRequired'](!![]))['toJSON'](), new SlashCommandBuilder()["setName"]('rappel')["setDescription"]("Programme un rappel")['setDescriptionLocalizations'](loc("Schedule a reminder"))["addStringOption"](_0x11bb2a => _0x11bb2a["setName"]('temps')['setDescription']("Délai (ex: 30min, 2h, 1d)")['setDescriptionLocalizations'](loc("Delay (e.g. 30min, 2h, 1d)"))["setRequired"](!![]))['addStringOption'](_0x5bf6ab => _0x5bf6ab["setName"]("message")["setDescription"]("Message du rappel")['setDescriptionLocalizations'](loc("Reminder message"))['setRequired'](!![]))["toJSON"](), new SlashCommandBuilder()["setName"]("anniversaire")['setDescription']("Enregistre ta date d'anniversaire")["setDescriptionLocalizations"](loc("Set your birthday"))["addStringOption"](_0x5d15db => _0x5d15db['setName']("date")["setDescription"]('Date\x20au\x20format\x20JJ/MM')["setDescriptionLocalizations"](loc('Date\x20in\x20DD/MM\x20format'))["setRequired"](!![]))["toJSON"](), new SlashCommandBuilder()["setName"]("nettoyer")['setDescription']('Supprime\x20des\x20messages\x20(staff)')["setDescriptionLocalizations"](loc("Delete messages (staff)"))['addIntegerOption'](_0x30396e => _0x30396e["setName"]('nombre')['setDescription']("Nombre de messages (max 100)")["setDescriptionLocalizations"](loc("Number of messages (max 100)"))['setRequired'](!![]))["toJSON"](), new SlashCommandBuilder()['setName']("avertir")['setDescription']('Avertit\x20un\x20membre\x20(staff)')['setDescriptionLocalizations'](loc('Warn\x20a\x20member\x20(staff)'))['addUserOption'](_0x2231c3 => _0x2231c3["setName"]('membre')["setDescription"]('Membre\x20à\x20avertir')['setDescriptionLocalizations'](loc("Member to warn"))["setRequired"](!![]))["addStringOption"](_0x530b6e => _0x530b6e['setName']("raison")['setDescription']("Raison de l'avertissement")['setDescriptionLocalizations'](loc('Warning\x20reason'))["setRequired"](![]))["toJSON"](), new SlashCommandBuilder()['setName']("rendre-muet")["setDescription"]('Rend\x20muet\x20un\x20membre\x20(staff)')['setDescriptionLocalizations'](loc("Mute a member (staff)"))["addUserOption"](_0xb8e6bc => _0xb8e6bc['setName']("membre")["setDescription"]('Membre\x20à\x20rendre\x20muet')["setDescriptionLocalizations"](loc("Member to mute"))["setRequired"](!![]))["addIntegerOption"](_0xd52196 => _0xd52196["setName"]("minutes")['setDescription']('Durée\x20en\x20minutes\x20(max\x2040320)')['setDescriptionLocalizations'](loc('Duration\x20in\x20minutes\x20(max\x2040320)'))['setRequired'](![]))["addStringOption"](_0x747d4c => _0x747d4c["setName"]("raison")["setDescription"]("Raison du mute")['setDescriptionLocalizations'](loc('Mute\x20reason'))["setRequired"](![]))['toJSON'](), new SlashCommandBuilder()['setName']("retirer-muet")["setDescription"]('Réactive\x20un\x20membre\x20(staff)')['setDescriptionLocalizations'](loc('Unmute\x20a\x20member\x20(staff)'))["addUserOption"](_0x49dcfc => _0x49dcfc['setName']("membre")["setDescription"]("Membre à réactiver")['setDescriptionLocalizations'](loc("Member to unmute"))["setRequired"](!![]))['toJSON'](), new SlashCommandBuilder()["setName"]("avertissements")['setDescription']('Affiche\x20les\x20avertissements\x20d\x27un\x20membre\x20(staff)')["setDescriptionLocalizations"](loc('Show\x20a\x20member\x27s\x20warnings\x20(staff)'))['addUserOption'](_0x3cb593 => _0x3cb593["setName"]('membre')["setDescription"]("Membre à consulter")['setDescriptionLocalizations'](loc('Member\x20to\x20check'))["setRequired"](!![]))['toJSON'](), new SlashCommandBuilder()['setName']('citer')['setDescription']('Citer\x20un\x20message')['setDescriptionLocalizations'](loc('Quote\x20a\x20message'))['addStringOption'](_0x9c3d => _0x9c3d['setName']('message')['setDescription']('Lien\x20du\x20message\x20à\x20citer')['setRequired'](!![]))['addChannelOption'](_0x9c3d => _0x9c3d['setName']('salon')['setDescription']('Salon\x20du\x20message\x20(si\x20ID\x20seul)')['setRequired'](![]))['toJSON']()];

function _0x12cd() {
    const _0xdad61b = ['🗑️\x20Candidature\x20supprimée\x20par\x20<@{user}>\x20—\x20Salon\x20:\x20**{channel}**', 'Créateur', '`\x20ajouté.', '✅\x20Server\x20created\x20successfully!', 'Mute\x20a\x20member\x20(staff)', '✅\x20Serveur\x20créé\x20avec\x20succès\x20!', 'Débit', 'Moderation', 'find', 'MuteMembers', 'Anuncios', 'pollsDesc', 'setbirthdayDone', 'cfg:edit-autoMod:', 'minutes', 'journalier', 'Fil', 'voices', 'Variables', 'Añadir\x20mensaje', 'Rôles', 'Fonctionnalité\x20à\x20venir.\x20Configuration\x20détaillée\x20bientôt\x20disponible.', 'Limit\x20(0\x20=\x20unlimited)', 'Limite\x20utilisateurs', '✅\x20Structure\x20créée\x20:\x20**', '>\x20(`', 'Privada\x20(solo\x20staff)', '➖\x20Channel\x20deleted:\x20**{name}**.', 'Non', 'Timeouts', 'Set\x20up\x20automatically', 'cfg:role:birthdays:roleId', '❌\x20Item\x20not\x20found.', 'avatar', 'Elige\x20un\x20módulo\x20para\x20configurar', 'article', 'Niveles', 'Limit', 'username', '❌\x20Rôles\x20retirés\x20(', 'ownerId', 'Anti-invitaciones\x20(sí/no)', '\x20arrivées\x20en\x20', 'Envoie\x20une\x20annonce', 'Début', 'Sugerencia\x20de\x20{user}', 'ticket-', 'Usa\x20`/config`\x20para\x20administrar\x20el\x20servidor.', 'Tomado\x20por', 'Compra\x20roles\x20con\x20tus\x20{coins}.', 'Configure\x20DashBot\x27s\x20moderation\x20tools.\x20This\x20module\x20allows\x20you\x20to\x20manage\x20moderation\x20commands\x20(ban,\x20kick,\x20timeout,\x20warnings,\x20purge…),\x20moderator\x20permissions\x20and\x20manual\x20sanction\x20settings.', '.html', 'cfg:page:roles', 'add', 'Category', 'toLowerCase', 'Anti-invites\x20(yes/no)', 'economy', 'tempVoices', '❌\x20Salon\x20de\x20données\x20introuvable.', '🔒\x20Message\x20deleted\x20from\x20<@{user}>\x20(security\x20filter).', 'DashBot\x20Configuration', '👢\x20Membre\x20expulsé', 'cfg:modal-autoSanctions', 'parentId', 'Canales\x20de\x20voz\x20temporales\x20configurados.', 'Ajouter\x20une\x20catégorie', 'Registros\x20de\x20moderación', 'test', 'rewards', 'Salidas', 'recruitment:archive:', '📣・mises-à-jour', 'catProgressionDesc', 'systemChannel', 'Show\x20your\x20balance\x20or\x20a\x20member\x27s', ':support', '🎉\x20Giveaway', 'set', 'description', '🔧\x20Maintenance\x20désactivée', 'No\x20verificado', 'tempVoices:', 'Reglas', 'DeafenMembers', 'Usage\x20:\x20`/clear\x20<nombre>`', 'No\x20tienes\x20permiso.', '🖼️\x20Avatar\x20modifié', 'rang', 'Configura\x20un\x20canal\x20primero.', '📋\x20Serveur\x20modifié', 'cfg:choose-channel:', '🎭\x20', '\x20—\x20<@', 'Run\x20giveaways\x20with\x20random\x20draws.', 'indexOf', '✅\x20Annonce\x20envoyée\x20!', 'question', 'avertissements', 'Mentions\x20maximum', 'cfg:reset:', 'Enter', 'antiInsults', 'Configure\x20las\x20sanciones\x20aplicadas\x20automáticamente\x20cuando\x20un\x20miembro\x20infringe\x20las\x20reglas\x20del\x20servidor.\x20Defina\x20el\x20número\x20de\x20advertencias\x20antes\x20de\x20un\x20timeout,\x20kick\x20o\x20baneo,\x20así\x20como\x20las\x20diferentes\x20acciones\x20automáticas\x20de\x20DashBot.', 'pingRoleId', '🔨\x20Créateur\x20de\x20serveur', 'Choose\x20a\x20channel:', 'createdAt', 'Annonce', 'bitfield', 'setPlaceholder', 'admin', 'warningsBeforeTimeout', 'cfg:toggle:', 'Message\x20du\x20rappel', 'level', '📋\x20Solicitud\x20archivada\x20por\x20<@{user}>\x20—\x20Canal:\x20**{channel}**', '🎉\x20**Sorteo:\x20{prize}**\x0a¡Haz\x20clic\x20en\x20el\x20botón\x20para\x20participar!\x0aTermina\x20en:\x20**{time}**', 'cfg:test-welcome-leave', 'reasons', 'length', 'avertissement\x20manuel', '💬・staff', 'Aucun\x20panneau.', 'commandName', 'soc_', '`/journalier`\x20—\x20Récompense\x20quotidienne', 'Récompenses\x20du\x20calendrier', 'welcomeRules', 'Seleccionar\x20un\x20canal', '➕\x20Emoji\x20créé', 'Restore\x20a\x20backup', '960460mFIvQl', 'Montant\x20du\x20daily', 'clear', 'from', 'Salon\x20public', 'random', 'Reglas\x20del\x20servidor', 'Warnings\x20before\x20ban', 'cfg:modal-recurring', 'botRoleFor', 'catWelcome', '**\x20:\x20`', 'now', 'Configurez\x20les\x20paramètres\x20principaux\x20de\x20DashBot\x20pour\x20votre\x20serveur.\x20Cette\x20catégorie\x20permet\x20de\x20gérer\x20la\x20langue\x20du\x20bot,\x20les\x20logs,\x20les\x20permissions\x20générales\x20et\x20les\x20paramètres\x20globaux.', 'blockAccess', '📦\x20Messages\x20restaurés\x20(', '🔊\x20Musique', 'delete', 'warningsBeforeKick', 'general', '1148352LdpOwZ', 'comingSoon', '231QWKtlw', 'setTitle', 'getUser', '{user}\x20a\x20quitté\x20**{server}**\x20.', 'moderatable', 'trim', 'Primary', 'fetch', 'Add\x20a\x20role', '✅\x20Panneau\x20créé\x20dans\x20<#', 'cfg:panel-add-role:', 'cfg:autoMod:toggleWarn', 'Cette\x20commande\x20est\x20disponible\x20uniquement\x20sur\x20un\x20serveur.', 'guildScheduledEventCreate', 'suggestBy', 'cfg:autoMod:disableAll', 'welcome-departure', '\x20→\x20Nouveau:\x20', '[DashBot]\x20Interruption,\x20sauvegarde...', 'Balance', '🎫\x20Ticket\x20creado\x20por\x20<@{user}>\x20—\x20Razón:\x20**{reason}**', 'parent', 'Seguridad', 'cfg:back:', 'Descripción', '100', 'Word', 'emojiCreate', 'Clasificación', 'Añadir\x20artículo', 'English', '🎭\x20Roles\x20modificados\x20para\x20<@{user}>.', 'fr-FR', 'Link', 'cfg:add-reason:', 'n\x27est\x20plus\x20mute.', '📋\x20Commandes\x20DashBot', 'reaction', 'Add\x20item', '🔧\x20Maintenance\x20enabled\x20by\x20<@{user}>.', 'Allow\x20your\x20members\x20to\x20create\x20and\x20manage\x20their\x20own\x20temporary\x20voice\x20channels.\x20Configure\x20permissions,\x20creation\x20options,\x20and\x20operating\x20parameters\x20for\x20these\x20channels.', 'En\x20línea\x20y\x20listo\x20para\x20gestionar\x20el\x20servidor.', 'maintenance', 'isArray', '⏳\x20Trop\x20de\x20requêtes.\x20Réessaie\x20dans\x20quelques\x20secondes.', 'threadDelete', 'addFields', 'Ancien\x20nom', '📅\x20', 'Bienvenue\x20{user}\x20sur\x20**{server}**\x20!', 'Configure\x20a\x20channel\x20first.', 'antiLinks', 'voiceSetup', '📊\x20**', 'General', 'Salon\x20panneau', 'Économie', 'Base\x20de\x20données', 'stringify', 'Anti-mots\x20interdits', 'welcomeImage', 'Proceso\x20de\x20bienvenida', 'DM\x20activé', 'autoMod-exceptions', 'deferred', '❌\x20Insufficient\x20balance.\x20You\x20need\x20**{missing}**\x20🪙\x20more.', 'Rol\x20automático', 'Mot', 'Sin\x20participantes.', 'Crée\x20un\x20sondage', 'Welcome\x20image', 'Publique', 'Anti-links', 'startsWith', 'Anti-liens', 'Règlement\x20du\x20serveur', 'text', 'buySuccess', 'archiveMsg', 'autoMod:exemptRoles', 'restrictedChannels', 'catProgression', 'isThread', 'resetOnAction', '🎂\x20Joyeux\x20anniversaire\x20<@{user}>\x20!\x20Rôle\x20attribué.', 'React\x20with\x20✅\x20to\x20accept\x20the\x20rules\x20and\x20access\x20the\x20server.', 'Maximum\x20mentions', 'titleField', '❌\x20Impossible\x20de\x20rendre\x20muet\x20ce\x20membre.', 'cfg:modal-addWord:', 'maxMentions', 'cfg:toggle:rewards', 'enableDM', 'welcome-arrival', 'timeoutMinutes', 'discord.js', 'cfg:', '_raidJoins', '❌\x20Salon\x20invalide.', 'cfg:modal-levels', 'deferUpdate', 'uncaughtException', 'Ajouter\x20un\x20message', '✅\x20Ticket\x20created\x20in', 'Add\x20a\x20category', 'key', 'lastSent', 'Configure\x20le\x20template\x20puis\x20clique\x20«\x20Créer\x20»\x20pour\x20générer\x20le\x20serveur.', 'lvlMsgId', 'answer', 'cfg:modal-word', 'aide', '🔇\x20<@{target}>\x20muted\x20{minutes}\x20min\x20by\x20<@{user}>.', '💬・général', 'setName', 'The\x20prefix\x20must\x20be\x20between\x201\x20and\x205\x20characters.', 'Menciones\x20máx', 'Members', '✅\x20Message\x20d\x27anniversaire\x20envoyé.', 'Interval\x20(min)', '234660IjRikF', '➖\x20Rôle\x20supprimé', 'Intervalle\x20(min)', '<tr><td>', 'Membre\x20à\x20consulter', 'Giveaway\x20terminé.', '🔊\x20Changement\x20de\x20salon\x20vocal', 'words', '👋\x20Bienvenue\x20!', 'When\x20enabled,\x20a\x20captcha\x20channel\x20is\x20created.\x20New\x20members\x20must\x20solve\x20a\x20math\x20problem.\x20Then\x20they\x20see\x20the\x20rules\x20and\x20accept\x20with\x20a\x20reaction.', '3y3', 'includes', 'Administrateur', 'raid', 'Délai\x20(ex:\x2030min,\x202h,\x201d)', 'Anti-Bot', 'ticket:', 'Inconnu', 'Unverified\x20role', 'components', 'activé', 'Miniatura', 'El\x20prefijo\x20da\x20acceso\x20a\x20`{prefix}config`,\x20`{prefix}help`,\x20`{prefix}warn`,\x20`{prefix}clear`.', '✅\x20Tu\x20as\x20acheté\x20**{item}**\x20pour\x20{price}\x20🪙\x20!', '🗑️\x20Este\x20canal\x20será\x20eliminado\x20en\x208\x20segundos...', 'buyFail', '⏩\x20Anti-spam', 'Image\x20/\x20bannière', 'configureRulesChannel', '`/classement`\x20—\x20Classement\x20du\x20serveur', '**\x20—\x20', '**\x20catégorie(s),\x20**', '🌐\x20Settings', 'Message', '🎂\x20', 'mentions', '**\x20message(s)\x20restaurés.', 'position', '\x20:\x20`', 'Server\x20Rules', '❌\x20Salon\x20de\x20suggestions\x20invalide.', 'Channel\x20to\x20send\x20the\x20panel', 'Connect', 'cfg:autoMod:addWord:', 'lots', 'wordBlacklist', '\x20avertissements\x20(', 'cfg:page:autoMod-', 'Niveaux', 'Canal\x20público\x20de\x20creación', '⚠️\x20Maintenance\x20mode\x20is\x20already\x20enabled.', '❌\x20Saldo\x20insuficiente.\x20Necesitas\x20**{missing}**\x20🪙\x20más.', '**\x20:\x20**', 'désactivé', 'history', 'Utilise\x20`/config`\x20pour\x20administrer\x20le\x20serveur.', 'userId', 'Choisis\x20un\x20rôle\x20support\x20:', '`/sondage`\x20—\x20Créer\x20un\x20sondage', 'rappel', 'Prize\x20to\x20win', '250yasGgM', 'The\x20prefix\x20gives\x20access\x20to\x20`{prefix}config`,\x20`{prefix}help`,\x20`{prefix}warn`,\x20`{prefix}clear`.', 'Arrivals', 'Sanctions\x20automatiques', 'bitrate', 'Affiche\x20les\x20commandes\x20du\x20bot', 'Moderation\x20Logs', '✅\x20Message\x20de\x20départ\x20envoyé.', 'createdCategory', 'Configure\x20un\x20salon\x20d\x27abord.', 'Sélectionner...', 'cfg:edit-welcome', '➕\x20Rol\x20creado:\x20**{name}**.', 'Reminder\x20message', 'Anti-liens\x20(oui/non)', 'getMember', 'Departures', 'cfg:setup-voices', '❌\x20Failed\x20attempt\x20by\x20<@{user}>\x20—\x20Answer:\x20`{answer}`', '❌\x20Erreur\x20lors\x20de\x20la\x20désactivation\x20de\x20la\x20maintenance\x20:\x20', 'Member\x20to\x20check', 'Gérez\x20facilement\x20tous\x20les\x20rôles\x20de\x20votre\x20serveur.\x20Configurez\x20les\x20rôles\x20automatiques,\x20les\x20rôles\x20à\x20réaction,\x20les\x20menus\x20de\x20rôles\x20et\x20les\x20différentes\x20méthodes\x20d\x27attribution.', '✅\x20Panneau\x20envoyé\x20dans', 'Schedule\x20a\x20reminder', 'Anti-cuentas\x20nuevas', 'date', 'Aucun\x20participant.', 'Niveau', 'shopTitle', 'deleteCountdown', 'deferReply', 'fetchAuditLogs', 'autoMod', 'End\x20of\x20year\x20calendar\x20with\x20XP\x20and\x20roles\x20to\x20earn.', 'modLogs', 'partial', 'Calendario', 'Nombre\x20de\x20messages\x20(max\x20100)', 'cfg:toggle:welcome', '✅\x20(', 'texte', 'Leave\x20message', 'kbps', '`/sauvegarde`\x20—\x20Sauvegarder\x20le\x20serveur', 'Règlement', '\x20avertissements)', '\x20(<@', 'send', 'addWord', 'rendre-muet', 'Lance\x20des\x20concours\x20avec\x20tirage\x20au\x20sort.', '➖\x20Rol\x20eliminado:\x20**{name}**.', '❌\x20Action\x20impossible\x20dans\x20ce\x20salon.', 'logs', 'warningsBeforeBan', 'Saldo\x20insuficiente.', 'Jamais', 'type', 'welcomeCaptcha', 'setDescriptionLocalizations', 'addSupportRole', 'channelId', '🎫・créer-ticket', 'Rôles\x20exemptés', 'Responsable\x20staff', '✅\x20Restauration\x20terminée\x20:\x20**', '✏️\x20Nom\x20affiché\x20modifié', 'messageUpdate', 'Días\x20máx', 'guildCreate', 'the\x20DashBot\x20Logs\x20category', 'modules', 'role', 'error', 'addUserOption', 'Désactiver', 'Contenu', 'autoMod-', '[Unhandled\x20rejection]', 'cfg:list-words', '✅\x20Reminder\x20set\x20for\x20**{time}**.', 'cfg:modal-economy', '\x20XP\x20pour\x20tous\x20!', 'cfg:role:rules:roleId', '📋\x20', 'cfg:add-word', 'attachments', 'Invalid\x20format.\x20Ex:\x20`!remindme\x2030min\x20my\x20message`', 'Ajouter\x20un\x20article', 'Salon\x20parent', 'Illimitée', 'cfg:channel:logs:channelId', 'cache', '\x0a\x0a*Aucun\x20rôle\x20configuré.\x20Ajoutes-en\x20dans\x20`/config`\x20→\x20Rôles\x20réaction.*', 'Sélectionner\x20un\x20salon', 'Le\x20salon\x20configuré\x20n\x27existe\x20pas.', '➕\x20Salon\x20créé\x20:\x20**{name}**.', 'cfg:role:', 'Advertencias\x20antes\x20de\x20baneo', 'cfg:page:welcome-arrival', 'Enabled', 'database', 'ticket:panel', 'guildScheduledEventUpdate', 'Privée\x20/\x20(oui/non)', 'AutoMod\x20:\x20raid\x20détecté\x20(', 'El\x20prefijo\x20debe\x20tener\x20entre\x201\x20y\x205\x20caracteres.', 'roleDelete', 'Number\x20of\x20messages\x20(max\x20100)', 'Block\x20access\x20without\x20validation', '`\x0a\x0a', 'cfg:autoMod:clearExemptions', '&amp;', '❌\x20→\x20✅', 'Short', 'Precio', 'Guilds', 'getMonth', 'Tickets', 'This\x20command\x20is\x20only\x20available\x20on\x20a\x20server.', 'retirer-muet', 'Rôle\x20supprimé\x20sur\x20le\x20serveur.', 'Membre', '\x20rôles\x20—\x20', 'textChannels', 'announcements', '❌\x20Module\x20non\x20configuré\x20:\x20**', 'shopEmpty', '+{xp}\x20XP', 'assign', 'Roles\x20temporales', 'guildMemberRemove', 'Sécurité', '\x20:\x20`{user}`,\x20`{server}`,\x20`{memberCount}`', 'deny', 'rateLimitPerUser', 'welcome-rules', 'cat:', 'cfg:channel:welcome:leaveChannelId', 'sort', 'rulesAccept', '🛡️・staff', '\x20fichier(s)]', 'noRoles', '🧹\x20{amount}\x20messages\x20deleted\x20by\x20<@{user}>.', 'guildScheduledEventDelete', 'No\x20compatible\x20channel.', 'Quitar\x20razón', 'giveawaySetup', 'cfg:autoMod:exemptMember', 'announcementDesc', 'Editar', '🔇\x20', '🎫\x20Ticket', '✅\x20You\x20bought\x20**{item}**\x20for\x20{price}\x20🪙!', 'ID\x20de\x20la\x20sauvegarde', 'cfg:send-rules', 'Configuration\x20enregistrée.', 'cfg:test-birthdays', 'home', 'entrants', 'userLimit', 'cfg:toggle:wordReactions', 'permissionOverwrites', '🔨\x20Creador\x20de\x20servidor', '[DashBot]\x20', 'tickets', 'Suggestion\x20par\x20{user}', 'Organiza\x20sorteos\x20con\x20sorteo\x20aleatorio.', 'Intervalo\x20(min)', 'getChannel', '#5865F2', '_lastAccess', 'noReason', '📸・partage', 'inventory', '**Administration**', 'Rôle\x20muet', 'exemptMembers', 'catch', 'guildBanAdd', 'ManageMessages', 'Create\x20Logs', 'Tienda', 'private', 'catCommunityDesc', 'choose', 'setChannel', '➖\x20Canal\x20eliminado:\x20**{name}**.', '🎉\x20Congratulations\x20<@{user}>,\x20you\x20reached\x20level\x20**{level}**!', 'invites', 'muteRoleBtn', 'Vérifié', 'setEmoji', 'cfg:modal-welcome-leave', 'leaveMsg', '<div\x20class=\x22ft\x22>DashBot\x20Transcript</div></div></body></html>', '🔇\x20Casque\x20coupé', 'Idioma', 'Auto-advertir', 'Raisons', 'vanityURLCode', 'You\x20are\x20already\x20verified!', 'SendMessages', 'Nouveau\x20sujet', 'Désactivé', '🔒\x20', 'Support', 'Show\x20bot\x20commands', 'GuildCategory', '📜\x20Règlement\x20accepté', 'Aller\x20au\x20salon', 'ModerateMembers', 'create', 'Kicks', '</tbody></table><div\x20class=\x22ft\x22>DashBot\x20•\x20Économie</div></body></html>', 'giveawayEnded', 'Choisis\x20un\x20salon\x20:', 'cfg:build-server', '🛡️\x20', '🎫\x20Ticket\x20créé', '🎭\x20Roles\x20updated\x20for\x20<@{user}>.', 'descLabel', 'isTextBased', 'Enviar\x20panel', 'dmMessage', 'antiRecentAccounts', 'security', 'unverifiedRole', 'timeout', '✏️\x20Canal\x20renombrado:\x20**{before}**\x20→\x20**{after}**.', 'Words', '⚠️\x20**', '#57F287', 'Poste', 'before', '❌\x20Suggestions\x20désactivées.', '[load]\x20Erreur\x20guild', 'Suppressions\x20de\x20messages', 'autoWarn', 'Salon\x20où\x20envoyer\x20le\x20panneau', '_lastBirthdayCheck', 'Forum', 'threadUpdate', '**\x20', 'cfg:modal-rules', 'Rol\x20silenciado', '✅\x20Cumpleaños\x20guardado:\x20**{date}**', 'leaderboard', '🆕\x20AutoMod\x20:\x20Compte\x20récent', 'panel', 'Warnings', 'dotenv', 'Anti-Menciones', 'giveaways', 'welcome', 'addStringOption', 'selfDeaf', 'recruitment:', '📨\x20Invitation\x20créée', '**Autres**', '💡\x20', 'catCommunicationDesc', 'entries', '✅\x20Système\x20de\x20logs\x20DashBot\x20installé\x20et\x20activé.', 'Protection', '⚙️\x20DashBot\x20—\x20Dashboard', 'nickname', 'shop', 'noPermission', 'cfg:toggle:recurringMessages', 'cfg:toggle:shop', 'toLocaleString', 'noChannelCompat', 'Avertissements\x20avant\x20expulsion', 'Warnings\x20before\x20kick', 'Lista\x20de\x20razones', 'then', 'Cumpleaños', 'cfg:modal-autoMod:', 'log', '5eEuAbV', 'Reminders', 'Add\x20a\x20reason', 'Membres', 'filter', 'remindmeSet', '🎫・tickets', 'goodbyeTitle', 'cfg:toggle:voices', '<!DOCTYPE\x20html><html><head><meta\x20charset=\x22utf-8\x22><title>Niveaux\x20-\x20', '**Économie\x20&\x20Niveaux**', 'remindmeDone', 'Añadir\x20canal', '.\x20`', '📝\x20Candidature\x20par\x20<@{user}>\x20—\x20Poste\x20:\x20**{reason}**', 'enableAll', 'Description', 'antiLinksField', 'Llegada', 'users', '✅\x20Panel\x20sent\x20to', 'addOptions', 'Attribuer\x20à\x20l\x27arrivée', '🗑️\x20Message\x20supprimé', 'cfg:choose-role-arr:', '`/acheter`\x20—\x20Acheter\x20un\x20article', '**\x0a', '\x0a\x0a**Salon**\x20:\x20', 'Recurring\x20Messages', 'Durée\x20du\x20timeout\x20(min)', 'setbirthdayInvalid', 'Progression', '<@&', 'Membre\x20à\x20réactiver', 'sendPanel', 'Réaction', 'cfg:toggle:autoMod:', '❌\x20Tu\x20ne\x20peux\x20pas\x20t\x27avertir\x20toi-même.', 'Name', 'enabled', 'Erreur\x20de\x20création\x20(catégorie\x20invalide\x20ou\x20permissions\x20manquantes).', 'Le\x20préfixe\x20doit\x20faire\x20entre\x201\x20et\x205\x20caractères.', 'raison', 'SIGTERM', 'Action', 'cfg:edit-voices', '❌\x20Permission\x20modération\x20requise.', 'ID\x20du\x20salon', 'toISOString', 'ticket:archive:', 'Desactivado', 'applicationGuildCommands', '✅\x20Archived.\x20Channel\x20will\x20be\x20deleted.', 'setValue', 'backup:', 'Anti-links\x20(yes/no)', 'cfg:protectionFiltres:disableAll', '`/annonce`\x20—\x20Envoyer\x20une\x20annonce', '{question}\x0a\x0aReacciona\x20con\x20✅\x20o\x20❌\x20para\x20votar.', '🛡️', 'permissions', '.json', 'unhandledRejection', 'tag', 'cfg:channel:welcome:channelId', 'blacklist', 'Aucune', 'Enable\x20all', 'Configuración\x20DashBot', 'Disable\x20maintenance\x20mode', 'Daily', 'recentAccounts', 'AutoMod\x20:\x20compte\x20créé\x20il\x20y\x20a\x20', '\x0a\x0aUtilise\x20`/buy\x20<numéro|nom>`', 'showModal', 'back', 'floor', 'socialDesc', 'guildUpdate', '❌\x20Boutique\x20désactivée.', 'put', 'Activer', '🎉\x20Félicitations\x20<@{user}>,\x20tu\x20es\x20passé\x20niveau\x20**{level}**\x20!', 'AutoModeración', 'guilds', 'Registros\x20de\x20seguridad', 'links', 'Category\x20and\x2010\x20distinct\x20log\x20channels\x20created.', 'intervalSeconds', 'Question\x20du\x20sondage', 'Raison\x20du\x20mute', 'Ephemeral', 'Aucun\x20mot\x20configuré.', 'items', '⚖️\x20', 'reminders', 'Backup\x20server\x20structure', 'topic', 'displayName', 'DashBot', 'channelUpdate', 'actions', 'GuildVoice', 'notMuted', 'Delete\x20messages\x20(staff)', 'welcome-autorole', 'Configure\x20los\x20sistemas\x20de\x20protección\x20automática\x20de\x20DashBot.\x20Este\x20módulo\x20permite\x20activar\x20y\x20personalizar\x20el\x20anti-spam,\x20anti-enlaces,\x20anti-invitaciones\x20de\x20Discord,\x20anti-raid,\x20anti-bot,\x20anti-cuentas\x20recientes,\x20anti-menciones\x20y\x20anti-insultos.', 'Ajoute\x20au\x20moins\x20un\x20rôle.', '❌\x20Impossible\x20d\x27envoyer\x20le\x20message.', 'voice', 'createdTimestamp', 'react', 'search', 'suggestions', 'lvl:', 'max', 'Crée\x20la\x20structure\x20complète\x20du\x20serveur', 'Oui', 'getDate', 'solde', 'Asigna\x20un\x20rol\x20en\x20los\x20cumpleaños.', 'Comunidad', 'cfg:add-recurring', 'Salons\x20vocaux\x20temporaires', 'category', '🏪\x20Boutique', 'isButton', 'Nouveau', '</h1><p>', '❌\x20Membre\x20introuvable.', 'serverLabel', 'parse', 'activate', 'maintenanceConfig', '🔊\x20Jeux', 'Anti-insultes', '\x20XP)', 'setStyle', ':channelId', 'List\x20reasons', 'Titre', 'hoist', 'Configuración\x20guardada.', 'Raison\x20de\x20l\x27avertissement', '</td></tr>', '🗑️\x20Candidature\x20supprimée', 'Límite', 'catGeneralDesc', 'Añadir\x20razón', '🗑️\x20Ticket\x20eliminado\x20por\x20<@{user}>\x20—\x20Canal:\x20**{channel}**', 'Strengthen\x20your\x20server\x20security\x20with\x20DashBot\x27s\x20protection\x20tools.\x20You\x20can\x20configure\x20moderation,\x20automatic\x20filters,\x20sanctions,\x20anti-spam,\x20anti-link,\x20anti-raid\x20systems,\x20and\x20automatic\x20word\x20reactions.', 'fields', 'Español', 'channelDelete', 'min`', 'catVoiceDesc', 'captcha', 'size', 'spam', 'Desactivar', '\x20·\x20', 'addReason', '</title><style>body{font-family:sans-serif;background:#2c2f33;color:#dcddde;padding:20px}h1{color:#5865F2;border-bottom:2px\x20solid\x20#5865F2}table{width:100%;border-collapse:collapse;margin-top:20px}th,td{padding:10px;text-align:left;border-bottom:1px\x20solid\x20#4f545c}th{background:#36393f;color:#5865F2}tr:hover{background:#36393f}.ft{text-align:center;color:#72767d;margin-top:20px;padding-top:10px;border-top:1px\x20solid\x20#4f545c}</style></head><body><h1>💰\x20Économie\x20-\x20', '2415tjIbZo', '👥\x20', 'none', '🔐\x20Captcha\x20solved\x20by\x20<@{user}>.', 'AutoMod\x20:\x20bot\x20non\x20autorisé\x20(', 'edit', 'object', 'cfg:channel:birthdays:channelId', 'isModalSubmit', 'Panel', 'Programme\x20un\x20rappel', '📋・logs', 'Ancien:\x20', 'Rang', 'Une\x20erreur\x20est\x20survenue.', 'cfg:page:autoMod-exceptions', 'options', 'botProtection', 'Après', 'hexColor', 'messageDeleteBulk', 'setTimestamp', 'cfg:protectionFiltres:enableAll', '`/avertissements`\x20—\x20Avertissements\x20d\x27un\x20membre', 'Leaderboard', 'Ancien\x20sujet', 'Départ', 'Thumbnail', 'panneau-rôle', 'reason', 'avertir', '❌\x20Giveaways\x20désactivés.', 'Aucun\x20message\x20programmé.', 'Activar', 'Comandos', 'Rôle\x20introuvable.', '<t:', 'Daily\x20déjà\x20réclamé\x20!\x20Réessaie\x20dans\x20{time}.', '\x20🪙', 'Anti-enlaces', 'setDescription', 'Code', 'inviter', 'recruitment', 'split', 'cfg:voice-channel:', 'cfg:send-panel:', 'cfg:category:', 'interval', 'Show\x20your\x20rank\x20or\x20a\x20member\x27s', 'string', '\x20—\x20Généré\x20le\x20', '📝\x20Candidature\x20créée', 'cfg:choose-role:', '&lt;', 'cfg:panel-edit:', 'Supprimer', 'la\x20catégorie\x20DashBot\x20Logs', '*Aucun\x20contenu*', 'rp:', 'Général', 'Título', 'balance', 'author', 'Raison', 'memberCount', 'Choisis\x20un\x20rôle\x20:', '➕\x20Salon\x20créé', 'members', 'setFooter', 'conditions', '✅\x20Candidature\x20prise\x20en\x20charge', '⚠️\x20Le\x20mode\x20maintenance\x20est\x20déjà\x20désactivé.', 'Staff', 'bday:', 'cfg:toggle:rules', 'toJSON', 'titre', 'bot', '🎉\x20¡Sorteo\x20terminado!', 'Fenêtre\x20anti-spam\x20(secondes)', '.**\x20<#', 'birthdays', 'Salon\x20d\x27annonces', 'Calendrier', '👋\x20', 'Automate\x20your\x20server\x27s\x20communication.\x20Configure\x20announcements,\x20recurring\x20messages,\x20and\x20social\x20notifications\x20to\x20inform\x20your\x20members\x20effectively.', '**\x20salon(s).', 'shopRoleId', '\x0a\x0a---\x0a\x0a', '🔒\x20Message\x20supprimé\x20de\x20<@{user}>\x20(filtre\x20sécurité).', 'commandsLabel', 'membre', 'Reglas\x20enviadas.', '🔇\x20<@{target}>\x20silenciado\x20{minutes}\x20min\x20por\x20<@{user}>.', '📢・annonces', 'Bienvenue\x20dans\x20le\x20centre\x20de\x20gestion\x20de\x20**{server}**.\x0a{choose}', 'Canal\x20de\x20anuncios', '❌\x20Tu\x20ne\x20peux\x20pas\x20rendre\x20muet\x20ce\x20membre\x20(hiérarchie).', 'limitField', 'Recordatorios', '\x20:\x20**', 'language', '✅\x20DashBot\x20logs\x20system\x20installed\x20and\x20activated.', 'Auto-sanction\x20:\x20', 'shopRole', '🚪\x20', '🏆\x20', 'setThumbnail', '`/restauration`\x20—\x20Restaurer\x20une\x20sauvegarde', 'Salons\x20exemptés', 'Aucun\x20rôle.', 'time', 'departures', 'Choose\x20a\x20role:', 'cfg:edit-economy', '{user}', 'editReply', 'toLocaleDateString', '📢\x20Mentions\x20excessives\x20', 'DashBot\x20Captcha', '👥\x20Serveur', 'isStringSelectMenu', '`/nettoyer`\x20—\x20Supprimer\x20des\x20messages', 'Nouveau\x20nom', 'StringSelectMenuBuilder', 'round', '❌\x20Intento\x20fallido\x20de\x20<@{user}>\x20—\x20Respuesta:\x20`{answer}`', 'Show\x20server\x20leaderboard', 'nsfw', 'getInteger', 'guildMemberAdd', '`\x20→\x20', 'MD\x20activado', 'get', '✅\x20Modo\x20mantenimiento\x20desactivado.\x0a\x0aEl\x20servidor\x20ya\x20está\x20accesible\x20para\x20los\x20miembros.', 'Résous\x20ce\x20calcul\x20pour\x20prouver\x20que\x20tu\x20n\x27es\x20pas\x20un\x20bot.\x0a\x0a**', 'Select\x20a\x20panel', 'Send', 'constructor', 'Protection\x20Filters', 'Rappel', '\x20→\x20', 'Rôle\x20automatique', 'cfg:select-panel', '🗑️\x20Mensaje\x20eliminado\x20en\x20<#{channel}>{author}.', 'cfg:channel:rules:channelId', 'Panels', 'cfg:list-cats', '💬\x20', '⚠️\x20<@{target}>\x20warned\x20by\x20<@{user}>\x20—\x20{reason}', 'Aucune\x20raison\x20configurée.', 'verifiedRoleId', '\x0a⌨️\x20**', 'MessageContent', '📜\x20', 'mentionLimit', 'Captcha', 'Configurez\x20les\x20sanctions\x20appliquées\x20automatiquement\x20lorsqu\x27un\x20membre\x20enfreint\x20les\x20règles\x20du\x20serveur.\x20Définissez\x20le\x20nombre\x20d\x27avertissements\x20avant\x20un\x20timeout,\x20un\x20kick\x20ou\x20un\x20bannissement,\x20ainsi\x20que\x20les\x20différentes\x20actions\x20automatiques\x20de\x20DashBot.', 'socialChannel', 'Maintenance\x20disable\x20error:', 'Création\x20de\x20serveur', 'Rol\x20no\x20verificado', 'Price', 'salons\x20de\x20logs\x20configurés\x20dans', 'Advertencias', 'slice', '¡Bienvenido\x20a\x20**{server}**!\x0aResuelve\x20el\x20captcha\x20para\x20acceder\x20al\x20servidor.', 'Title', 'roles', 'Limite\x20(0\x20=\x20illimitée)', 'Tu\x20participes\x20déjà\x20!', '</title><style>body{font-family:sans-serif;background:#2c2f33;color:#dcddde;padding:20px}h1{color:#57F287;border-bottom:2px\x20solid\x20#57F287}table{width:100%;border-collapse:collapse;margin-top:20px}th,td{padding:10px;text-align:left;border-bottom:1px\x20solid\x20#4f545c}th{background:#36393f;color:#57F287}tr:hover{background:#36393f}.ft{text-align:center;color:#72767d;margin-top:20px;padding-top:10px;border-top:1px\x20solid\x20#4f545c}</style></head><body><h1>📊\x20Niveaux\x20-\x20', 'spamWindow', 'cfg:modal-voices', '\x20<#', 'url', 'econ:', 'recurringDesc', 'Anti-raid', '**\x20récompense(s)\x20configurée(s).', 'oui', '🔊・vocaux', '\x0a\x0a**Rôles\x20:**\x0a', 'cfg:panel-send:', 'addSubcommand', '🔇\x20Membre\x20rendu\x20muet', '📊・statistiques', 'announceChannel', '<!DOCTYPE\x20html><html><head><meta\x20charset=\x22utf-8\x22><title>Transcript\x20', 'antiBlacklist', 'cfg:language', 'Choose\x20a\x20module\x20to\x20configure', 'setURL', 'cfg:list-cat-sc', 'Centralize\x20tools\x20designed\x20for\x20your\x20community.\x20This\x20category\x20includes\x20tickets,\x20recruitment,\x20suggestions,\x20polls,\x20and\x20birthdays\x20to\x20facilitate\x20exchanges\x20between\x20members\x20and\x20staff.', '🤬\x20Insulte', 'prefix', 'Rôle\x20non\x20vérifié', 'exit', 'setRequired', 'URL\x20image\x20/\x20bannière', 'anniversaire', 'leave', 'lastSeen', 'Private\x20(staff\x20only)', 'Ticket\x20Category', 'catEvents', '➖\x20Salon\x20supprimé', '**Communauté**', 'Paragraph', 'Rôle', '\x20for\x20', 'Añadir\x20rol', 'cfg:channel:polls:channelId', 'cfg:panel-delete:', 'variables', '✅\x20Mode\x20maintenance\x20désactivé.\x0a\x0aLe\x20serveur\x20est\x20de\x20nouveau\x20accessible\x20aux\x20membres.', 'cfg:modal-prefix', 'DashBot\x20Restore', '&gt;', 'has', '</td><td>', 'cfg:toggle:calendar', 'animated', 'map', 'Add\x20a\x20word', 'lobbyId', 'Ancien', 'Danger', 'rendu\x20muet\x20', 'Prefijo', '❌\x20Wrong\x20answer.\x20Try\x20again.', 'Permissions', 'Gère\x20le\x20mode\x20maintenance', 'Customization', 'memberPermissions', 'No\x20reason', 'messageCreate', 'No\x20roles.', 'leaveChannelId', 'warn:', 'Complete\x20Logs', 'cfg:role:autoRole:roleId', '🤖\x20Bot', 'configureChannelFirst', 'Auto\x20Sanctions', 'word', '✅\x20¡Servidor\x20creado\x20con\x20éxito!', '❌\x20Tu\x20ne\x20peux\x20pas\x20avertir\x20ce\x20membre\x20(hiérarchie).', 'Ajouter\x20un\x20salon', 'Conditions\x20d\x27attribution', 'pollDesc', 'channel', 'Configuration\x20des\x20vocaux\x20temporaires\x20DashBot', 'autoSanctionsDesc', 'cfg:toggle:moderation', '👋\x20<@{user}>\x20joined\x20the\x20server.\x20Members:\x20**{count}**.', 'Miembros', 'count', 'la\x20categoría\x20DashBot\x20Logs', 'nettoyer', 'price', 'Configurar', 'Enregistre\x20ta\x20date\x20d\x27anniversaire', '➖\x20Rôle\x20supprimé\x20:\x20**{name}**.', 'content', 'cfg:toggle:birthdays', 'exemptRoles', '\x20XP)\x20—\x20**', 'selectChannel', '❌\x20Texte\x20vide\x20ou\x20trop\x20long.', '✅\x20Ticket\x20creado\x20en', 'No\x20items\x20in\x20the\x20shop.', 'levels', 'XP\x20par\x20message', '🔊\x20Membre\x20démuté', 'cfg:page:', 'Rôles\x20support', '**\x0a\x0a', 'Member\x20to\x20warn', 'cfg:create-server', 'message', 'Ventana\x20anti-spam\x20(segundos)', '👋\x20Membre\x20arrivé', '🎭\x20Rôles\x20modifiés\x20pour\x20<@{user}>.', 'BanMembers', '✅\x20Encuesta\x20creada\x20en', 'Mensajes\x20recurrentes', '❌\x20Tu\x20ne\x20peux\x20pas\x20te\x20rendre\x20muet\x20toi-même.', 'roles-panel:', '📢\x20Mentions\x20excessives', '🎂\x20Happy\x20birthday\x20<@{user}>!\x20Role\x20assigned.', 'polls', 'Catégorie', 'Whitelist', 'noRoleCompat', 'overwrites', 'cfg:toggle:autoSanctions:resetOnAction', '📋\x20Ticket\x20archivado\x20por\x20<@{user}>\x20—\x20Canal:\x20**{channel}**', 'Restablecer\x20módulo', '>\x20est\x20de\x20retour\x20après\x20**', 'Texte\x20du\x20règlement', '`/config`\x20—\x20Configuration\x20du\x20serveur', 'Catégorie\x20des\x20candidatures', 'Activate', '`/solde`\x20—\x20Voir\x20le\x20solde', 'min', 'Departure', 'cfg:role:welcome:roleId', 'logsAuto', 'ManageChannels', 'Claimed\x20by', 'Asigna\x20un\x20rol\x20automáticamente\x20a\x20los\x20nuevos\x20miembros.', '🧹\x20{amount}\x20mensajes\x20eliminados\x20por\x20<@{user}>.', 'shopRoleName', 'Use\x20`/config`\x20to\x20manage\x20the\x20server.', 'pollSent', 'Anime\x20a\x20su\x20comunidad\x20con\x20los\x20diferentes\x20eventos\x20ofrecidos\x20por\x20DashBot.\x20Esta\x20categoría\x20incluye\x20sorteos\x20y\x20el\x20calendario\x20de\x20eventos.', 'Couleur', 'inviteCreate', 'cfg:toggle:levels', 'suggestion', 'No\x20participants.', '🏪\x20Shop', 'Anti-spam\x20window\x20(seconds)', 'has\x20been\x20warned.', '🌐\x20**', 'Modérateur', 'Maximum\x20messages', '🔐\x20Captcha\x20réussi', 'catRolesDesc', 'Réponse', 'Member\x20to\x20unmute', 'cfg:toggle:rules:blockAccess', '>\x20(', 'location', 'No\x20compatible\x20role.', 'DashBot\x20•\x20', 'Reclutamiento', 'Channel', '#FEE75C', 'antiRaid', 'Recruitment\x20Category', 'Processus\x20d\x27accueils', '✅\x20Application\x20created\x20in', 'Notification\x20channel', 'Affiche\x20le\x20classement\x20du\x20serveur', '✅\x20Maintenance\x20mode\x20disabled.\x0a\x0aThe\x20server\x20is\x20now\x20accessible\x20to\x20members\x20again.', '🗑️', 'Configure\x20the\x20main\x20DashBot\x20settings\x20for\x20your\x20server.\x20This\x20category\x20allows\x20you\x20to\x20manage\x20the\x20bot\x20language,\x20logs,\x20general\x20permissions,\x20and\x20global\x20settings.', 'customId', 'archived', 'Configurar\x20automáticamente', 'member', 'Winner(s):\x20{winners}', 'Fais\x20une\x20suggestion', 'Máximo\x20de\x20mensajes', '⏰\x20Reminder:\x20{message}', 'classement', 'Mentions\x20max', 'Success', 'Nom\x20ou\x20numéro\x20de\x20l\x27article', '#ED4245', 'Filtros\x20de\x20protección', 'insults', 'cfg:modal-welcome', 'Disabled', 'Anti-Spam', 'protectionFiltres', 'padStart', 'levelUp', 'Refuerce\x20la\x20seguridad\x20de\x20su\x20servidor\x20con\x20las\x20herramientas\x20de\x20protección\x20de\x20DashBot.\x20Puede\x20configurar\x20la\x20moderación,\x20los\x20filtros\x20automáticos,\x20las\x20sanciones,\x20los\x20sistemas\x20anti-spam,\x20anti-enlaces,\x20anti-raid\x20y\x20las\x20reacciones\x20automáticas\x20a\x20palabras.', 'antiInvites', 'Rappels', 'Item\x20name\x20or\x20number', 'disableAll', '🌐\x20Ajustes', '27MDpQTA', 'getString', '❌\x20Maximum\x2090\x20jours.', 'DashBot\x20•\x20Captcha', 'Rules\x20text', '[Uncaught\x20exception]', '\x0a**Salon**\x20:\x20', 'setCustomId', 'Sugerencias', '\x20=\x20/**\x0a\x0aTape\x20le\x20résultat\x20dans\x20ce\x20salon.', 'Set\x20your\x20birthday', '📊\x20Poll', 'xpPerMessage', 'emoji', 'cfg:page', '❌\x20Question\x20vide\x20ou\x20trop\x20longue.', 'Canal\x20del\x20panel', 'dailyAmount', 'ManageRoles', 'Role', 'cfg:modal-cat-sc', 'Nouveau\x20salon', 'autoSanctions', 'Word\x20Reactions', 'Let\x20users\x20create\x20announcements.', 'Format\x20invalide.\x20Utilise\x20`!setbirthday\x20JJ/MM`.', 'recruitCat', 'Reaction', '📋・logs-tickets', 'Crear\x20servidor', 'rulesText', 'Reacciones\x20de\x20palabras', 'cfg:channel:announcements:channelId', 'ticket', '{server}', 'Sin\x20paneles.', 'splice', 'Anti-Blacklist', '⚠️\x20El\x20modo\x20mantenimiento\x20ya\x20está\x20activado.', 'Administrator\x20permission\x20required.', 'langLabel', 'Bloquear\x20acceso\x20sin\x20validación', 'ViewChannel', 'match', 'KickMembers', '\x20jours)', '➕\x20Channel\x20created:\x20**{name}**.', 'levelsDesc', '❌\x20Article\x20introuvable.', ')\x0a\x0a', '📷\x20Caméra\x20activée', 'user', '`/retirer-muet`\x20—\x20Réactiver\x20un\x20membre', 'Configurable\x20automatic\x20protection\x20system.\x20Detects\x20abusive\x20behavior\x20and\x20applies\x20progressive\x20sanctions.', 'Configuration\x20DashBot', '⚠️\x20Maintenance\x20mode\x20is\x20already\x20disabled.', 'Captcha\x20résolu', 'title', '**\x20a\x20**', '✅\x20Panel\x20enviado\x20a', 'is\x20no\x20longer\x20muted.', '❌\x20Salon\x20de\x20sondages\x20invalide.', 'label', 'leaveText', 'replaceAll', 'Total', '🤖\x20AutoMod\x20:\x20Bot\x20non\x20autorisé', 'recurringMessages', 'rules', '**Modération**', 'Prix', 'Miniature', 'messageId', '\x20jour(s)\x20(<\x20', '📜・règlement', 'Diario', 'guild', '💡\x20Suggestion', '.\x20<@', 'Encuestas\x20/\x20Sugerencias', 'isVoiceBased', 'Database', 'Inventaire', 'Affiche\x20ton\x20solde\x20ou\x20celui\x20d\x27un\x20membre', 'birthdayRoleGiven', 'catWelcomeDesc', '.**\x20', '`/avertir`\x20—\x20Avertir\x20un\x20membre', 'endTime', 'entityType', 'Installer', 'Canales\x20exentos', 'roleId', 'Configure\x20los\x20registros\x20de\x20moderación\x20de\x20su\x20servidor.\x20Elija\x20el\x20canal\x20donde\x20se\x20enviarán\x20los\x20registros\x20y\x20seleccione\x20los\x20eventos\x20a\x20registrar,\x20como\x20baneos,\x20kicks,\x20timeouts,\x20advertencias,\x20eliminaciones\x20de\x20mensajes,\x20ediciones\x20y\x20otras\x20acciones\x20de\x20moderación.', 'Activa\x20el\x20módulo\x20primero.', ':archive:', '@everyone', 'ban', 'reply', 'acheter', 'addComponents', 'minute(s)', 'leaveEnabled', 'antiMentions', '✅\x20Captcha\x20resuelto.\x20Ahora\x20puedes\x20ver\x20las\x20reglas.', 'Message\x20privé\x20(DM)', 'Create\x20panel', '*aucune*', 'concours', '✅\x20You\x20accepted\x20the\x20rules.\x20Welcome!', '✅\x20Daily\x20claimed:\x20**{amount}**\x20{coins}!', '📊\x20', 'cfg:edit-autoSanctions', '1055556SUMABy', 'Reacción', 'Activé', 'giveaway:enter', 'URL\x20miniatura', 'welcomeText', '\x0a\x0a**', 'unverifiedRoleId', '❌\x20Module\x20inconnu.', 'supportRoleIds', 'Modérateur\x20test', 'Arrival', 'calendar', '{memberCount}', 'Privée\x20(staff\x20uniquement)', 'cfg:autoMod:exemptChannel', 'cfg:edit-rules', 'Sélectionner\x20un\x20rôle', 'Automatisez\x20la\x20communication\x20de\x20votre\x20serveur.\x20Configurez\x20les\x20annonces,\x20les\x20messages\x20récurrents\x20et\x20les\x20notifications\x20sociales\x20pour\x20informer\x20vos\x20membres\x20efficacement.', 'Assign\x20a\x20role\x20on\x20birthdays.', '**\x20:\x20', 'displayAvatarURL', 'GuildMessageReactions', 'Bloquer\x20l\x27accès\x20sans\x20validation', 'Mensaje\x20de\x20bienvenida', '❌\x20Minimum\x2010\x20secondes.', 'PrioritySpeaker', 'autoMod:exemptChannels', '🎮・jeux', '✅\x20Ticket\x20tomado\x20por\x20<@{user}>\x20—\x20Canal:\x20**{channel}**', 'Anti-Links', 'panelChannel', 'cfg:modal-shop', 'Salon', 'Delay\x20(e.g.\x2030min,\x202h,\x201d)', 'welcomeDM', '`/création-serveur`\x20—\x20Structure\x20complète', '14Xwxcho', 'Canal\x20de\x20tienda', '¡Diario\x20ya\x20reclamado!\x20Intenta\x20de\x20nuevo\x20en\x20{time}.', 'Modifier\x20le\x20panneau', 'Raison\x20invalide.', 'once', 'welcomeDeparture', '🎫\x20Ticket\x20créé\x20par\x20<@{user}>\x20—\x20Raison\x20:\x20**{reason}**', '📝\x20Application\x20by\x20<@{user}>\x20—\x20Position:\x20**{reason}**', 'Restaure\x20une\x20sauvegarde', '🤖\x20Vérification\x20Captcha', 'current', '✅\x20Archivé.\x20Le\x20salon\x20va\x20être\x20supprimé.', 'color', 'values', 'Prendre\x20en\x20charge', 'Lieu', 'Aucune\x20donnée.', 'Crear', 'iconURL', '🧵\x20Fil\x20créé', 'Gana\x20XP\x20hablando\x20y\x20sube\x20de\x20nivel.', 'welcomeImageField', 'exemptChannels', 'Logs\x20created\x20automatically.\x20The\x20module\x20now\x20uses', 'cfg:channel:suggestions:channelId', '✅\x20Birthday\x20saved:\x20**{date}**', 'cfg:toggle:giveaways', '603681MZlpuu', 'SIGINT', 'welcome-captcha', 'moderation', 'cfg:edit-security', 'Levels', 'name', 'Sondages\x20/\x20Suggestions', 'Member\x20to\x20mute', 'push', '\x20minutes', '🔊・vocaux-temporaires', 'Anti-palabras\x20prohibidas', 'boutique', '🏪\x20Tienda', 'categoryId', 'addIntegerOption', 'listReasons', 'GuildText', 'Sélectionne\x20une\x20raison\x20pour\x20créer\x20un\x20ticket.', '🤖\x20', '**\x20(', 'Canal', 'Configure\x20d\x27abord\x20un\x20salon.', 'toString', '🎉\x20**Giveaway\x20:\x20{prize}**\x0aClique\x20sur\x20le\x20bouton\x20pour\x20participer\x20!\x0aFin\x20dans\x20:\x20**{time}**', 'DashBot\x20Setup', 'Affiche\x20la\x20boutique\x20du\x20serveur', 'everyone', 'resetModule', '_merged', 'Ajouter\x20un\x20membre', 'Tous\x20les\x20événements\x20(modération,\x20arrivées,\x20départs,\x20messages,\x20vocaux,\x20rôles,\x20salons,\x20tickets,\x20sécurité,\x20etc.)\x20sont\x20envoyés\x20dans\x20un\x20seul\x20salon\x20de\x20logs.', 'Cuando\x20está\x20activado,\x20se\x20crea\x20un\x20canal\x20captcha.\x20Los\x20nuevos\x20miembros\x20deben\x20resolver\x20un\x20problema\x20matemático.\x20Luego\x20ven\x20las\x20reglas\x20y\x20aceptan\x20con\x20una\x20reacción.', 'Rules\x20sent.', 'noReasons', '</title><style>body{font-family:sans-serif;background:#2c2f33;color:#dcddde;padding:20px}.c{max-width:800px;margin:0\x20auto}h1{color:#5865F2;border-bottom:2px\x20solid\x20#5865F2;padding-bottom:10px}.m{margin:8px\x200;padding:10px;background:#36393f;border-radius:8px;border-left:3px\x20solid\x20#5865F2}.a{font-weight:bold;color:#5865F2}.t{color:#72767d;font-size:.8em}.ct{margin-top:4px;white-space:pre-wrap}.ft{text-align:center;color:#72767d;margin-top:20px;border-top:1px\x20solid\x20#4f545c;padding-top:10px}</style></head><body><div\x20class=\x22c\x22><h1>Transcript\x20', 'Pris\x20en\x20charge\x20par', 'Add\x20a\x20member', 'getTime', '</div></div>', '👥\x20Server', 'Active\x20le\x20mode\x20maintenance', 'Canales\x20de\x20voz\x20temporales', '_captchaAnswers', 'non', 'giveawayNoParticipants', 'intervalMinutes', 'sondage', 'Salon\x20public\x20de\x20création', 'last', 'Nom\x20({user})', 'logTicketDelete', 'channels', 'Welcome\x20to\x20the\x20management\x20center\x20of\x20**{server}**.\x0a{choose}', 'autoRole', 'Panneau', '1528409629493690398', 'setColor', 'Membres\x20exemptés', 'Logs\x20de\x20modération', '@​here', 'maxAge', 'MoveMembers', 'Elige\x20un\x20rol:', '⚙️\x20', 'serverCreator', '\x0a\x0a**⚡\x20Action**\x20:\x20`', 'Texto\x20de\x20reglas', 'Arrivées', 'Unlimited', 'Select\x20a\x20channel', 'antiSpam', 'autoRoleLog', '**\x0a\x0a**', 'cfg:add-cat', 'data', 'setLabel', 'levels-', 'Mensaje\x20privado\x20(MD)', 'update', 'Duration\x20(e.g.\x2030min,\x202h,\x201d)', 'Daily\x20already\x20claimed!\x20Try\x20again\x20in\x20{time}.', 'Base\x20de\x20datos', 'Enable\x20the\x20module\x20first.', 'Liste\x20des\x20raisons', 'some', '🔊\x20Entretien', 'Communication', 'Secondary', '<!DOCTYPE\x20html><html><head><meta\x20charset=\x22utf-8\x22><title>Économie\x20-\x20', 'selfVideo', 'econ-report:', 'Mute\x20Role', 'Ajouter\x20un\x20mot', 'Speak', 'Processus\x20d\x27accueil', 'Nom', 'Exempted\x20Roles', 'Modération', '🔊\x20Casque\x20activé', '[econ-report]', 'Anti-spam', 'DATA_CHANNEL_ID\x20manquant\x20dans\x20.env', 'Exempted\x20Members', 'join', 'Roles', 'remindmeInvalid', 'Earn\x20XP\x20by\x20chatting\x20and\x20level\x20up.', 'Salon\x20de\x20création\x20de\x20vocaux\x20temporaires\x20DashBot', '\x20:\x20', 'messages', 'econMsgId', 'Ganador(es):\x20{winners}', 'protectionFiltresDesc', 'Nombre', 'listBtn', 'Bannissements', 'Classement', 'panels', 'Ajouter\x20une\x20raison', 'Type', 'cfg:toggle:logs', 'Earn\x20{coins}\x20by\x20chatting\x20and\x20using\x20`{prefix}daily`.', 'maxMessages', '\x20·\x20**👥\x20Exceptions**\x20:\x20', 'auto', 'Lista\x20negra', 'The\x20configured\x20channel\x20does\x20not\x20exist.', '610UTnLfD', 'replace', 'Función\x20próximamente.\x20Configuración\x20detallada\x20disponible\x20pronto.', 'Tester', 'Administrator', '✅\x20Has\x20aceptado\x20las\x20reglas.\x20¡Bienvenido!', '✅\x20Tu\x20participes\x20au\x20giveaway\x20!', 'kick', 'cfg:modal-reason:', 'selectRole', 'cfg:toggle:autoRole', 'Participar', 'mentionable', 'Non\x20défini', 'antiBot', 'cfg:modal-panel-create', 'Solde\x20insuffisant.', '@​everyone', 'Crée\x20des\x20sondages\x20avec\x20réactions.', '**{name}**\x20—\x20{price}\x20🪙', '🎉\x20Giveaway\x20ended!', '\x0a**', 'Archiver', 'interactionCreate', '`/suggestion`\x20—\x20Faire\x20une\x20suggestion', 'Logs\x20créés\x20automatiquement.\x20Le\x20module\x20utilise\x20désormais', 'cfg:autoMod:exemptRole', 'wordReactionsDesc', '🗑️\x20Application\x20deleted\x20by\x20<@{user}>\x20—\x20Channel:\x20**{channel}**', 'cfg:test-welcome', '*vide*', 'maxJoins', 'voiceChannels', '❌\x20Sondages\x20désactivés.', '\x20/\x20', 'None', 'Tu\x20n\x27as\x20pas\x20la\x20permission.', 'DashBot\x20•\x20Configuration\x20du\x20serveur', 'ReadMessageHistory', '✅\x20Sistema\x20de\x20registros\x20DashBot\x20instalado\x20y\x20activado.', 'maxDays', '🔄\x20Auto-avertir\x20:\x20', '\x20message(s)\x20supprimés.', '❌\x20Aucune\x20sauvegarde\x20trouvée\x20avec\x20cet\x20ID.', 'suggestTitle', 'recrutement-', 'Lot\x20à\x20gagner', 'Usage:\x20`{prefix}remindme\x2030min\x20<message>`', '(((.+)+)+)+$', 'lastDaily', 'Buy\x20a\x20shop\x20item', 'Thumbnail\x20URL', 'Rol', 'autoRoleDesc', 'enableFirst', 'selectPanel', 'Communauté', 'idLabel', 'botLabel', '✅\x20Archivado.\x20El\x20canal\x20será\x20eliminado.', 'cfg:toggle:polls', 'highest', 'Configure\x20your\x20server\x27s\x20moderation\x20logs.\x20Choose\x20the\x20channel\x20where\x20logs\x20will\x20be\x20sent\x20and\x20select\x20the\x20events\x20to\x20record,\x20such\x20as\x20bans,\x20kicks,\x20timeouts,\x20warnings,\x20message\x20deletions,\x20edits\x20and\x20other\x20moderation\x20actions.', 'wordReactions', 'Salon\x20de\x20{user}', 'Développeur', '🔨\x20Server\x20Creator', '➕\x20Role\x20created:\x20**{name}**.', 'selfMute', 'Centralice\x20las\x20herramientas\x20destinadas\x20a\x20su\x20comunidad.\x20Esta\x20categoría\x20incluye\x20tickets,\x20reclutamiento,\x20sugerencias,\x20encuestas\x20y\x20cumpleaños\x20para\x20facilitar\x20el\x20intercambio\x20entre\x20miembros\x20y\x20el\x20staff.', 'categories', 'code', 'Panneau\x20introuvable.'];
    _0x12cd = function() {
        return _0xdad61b;
    };
    return _0x12cd();
}
client["once"]('clientReady', async () => {
    const _0x35cca2 = _0x15878f;
    console['log']('[DashBot]\x20Connecté\x20:\x20' + client['user']['tag']), await loadAllSettings(), await loadEconLevels(), setInterval(async () => {
        const _0x25beb8 = _0x5cb9,
            _0x3a81d4 = new Date()['toISOString']()['slice'](0x0, 0xa);
        for (const [_0x57871f, _0x194c72] of settingsCache) {
            const _0x2c4542 = _0x194c72["data"],
                _0x21bb87 = client["guilds"]["cache"]["get"](_0x57871f);
            if (_0x21bb87) {
                if (_0x2c4542["recurringMessages"]?.["enabled"])
                    for (const _0x4ad4bf of _0x2c4542["recurringMessages"]["items"] || []) {
                        const _0x10f93e = _0x4ad4bf["lastSent"] ? new Date(_0x4ad4bf["lastSent"])["getTime"]() : 0x0;
                        if (Date['now']() - _0x10f93e >= _0x4ad4bf["interval"] * 0xea60) {
                            const _0x36826b = _0x21bb87['channels']["cache"]['get'](_0x4ad4bf["channelId"]);
                            isSendable(_0x36826b) && (await _0x36826b["send"](_0x4ad4bf['message'])['catch'](() => {}), _0x4ad4bf['lastSent'] = Date["now"](), save(_0x57871f, _0x2c4542));
                        }
                    }
                if (_0x2c4542['calendar']?.['enabled'])
                    for (const _0x5d790b of _0x2c4542["calendar"]["items"] || []) {
                        if (_0x5d790b["date"] === _0x3a81d4) {
                            const _0x22dcba = _0x5d790b["roleId"] && _0x21bb87["roles"]['cache']['get'](_0x5d790b['roleId']),
                                _0x4e1ff6 = _0x21bb87["systemChannel"] || _0x21bb87['channels']['cache']['find'](_0x18145a => isSendable(_0x18145a));
                            if (_0x22dcba)
                                for (const _0xb53a26 of _0x21bb87["members"]['cache']['values']()) {
                                    if (!_0xb53a26['user']['bot']) await _0xb53a26['roles']['add'](_0x22dcba)['catch'](() => {});
                                }
                            _0x4e1ff6 && _0x5d790b['xp'] && _0x4e1ff6['send']('📅\x20**' + _0x5d790b['name'] + '**\x20—\x20+' + _0x5d790b['xp'] + " XP pour tous !")['catch'](() => {});
                        }
                    }
                if (_0x2c4542["reminders"] !== ![]) {
                    const _0x92c42 = getReminders(_0x57871f),
                        _0x481436 = Date['now'](),
                        _0x414eef = _0x92c42["filter"](_0x199334 => _0x199334["time"] <= _0x481436);
                    if (_0x414eef["length"]) {
                        _0x92c42["splice"](0x0, _0x92c42["length"], ..._0x92c42["filter"](_0x14799d => _0x14799d["time"] > _0x481436)), saveReminders(_0x57871f);
                        for (const _0x564365 of _0x414eef) {
                            const _0x8e5efe = await _0x21bb87["members"]['fetch'](_0x564365["userId"])["catch"](() => null);
                            if (_0x8e5efe) {
                                _0x8e5efe["send"](t(_0x2c4542, 'remindmeDone', {
                                    'message': _0x564365["text"]
                                }))['catch'](() => {});
                                const _0x28ecb0 = _0x21bb87['channels']['cache']["get"](_0x564365['channelId']);
                                if (isSendable(_0x28ecb0)) _0x28ecb0["send"]('<@' + _0x564365['userId'] + '>\x20' + t(_0x2c4542, "remindmeDone", {
                                    'message': _0x564365["text"]
                                }))["catch"](() => {});
                            }
                        }
                    }
                }
                if (_0x2c4542['giveaways']?.['enabled']) {
                    const _0x1cd071 = Date['now']();
                    for (const _0x3d0dc0 of (_0x2c4542['giveaways']['items'] || [])) {
                        if (_0x3d0dc0['ended'] || _0x3d0dc0['endTime'] > _0x1cd071) continue;
                        _0x3d0dc0['ended'] = !![], _0x3d0dc0['winners'] = pickGiveawayWinners(_0x3d0dc0, []);
                        const _0x654efb = _0x21bb87['channels']['cache']['get'](_0x3d0dc0['channelId']);
                        if (isSendable(_0x654efb)) {
                            const _0x1151a0 = await _0x654efb['messages']['fetch'](_0x3d0dc0['messageId'])['catch'](() => null);
                            if (_0x1151a0) await _0x1151a0['edit']({
                                'embeds': [giveawayEmbed(_0x2c4542, _0x3d0dc0, _0x21bb87)],
                                'components': []
                            })['catch'](() => {});
                            await _0x654efb['send']({
                                'embeds': [new EmbedBuilder()['setColor']('#ED4245')['setTitle']('🎉\x20Giveaway\x20terminé')['setDescription']('**Lot\x20:\x20**\x0a' + _0x3d0dc0['prize'] + '\x0a\x0a' + (_0x3d0dc0['winners']['length'] ? '**Gagnants\x20:\x20**\x0a' + _0x3d0dc0['winners']['map'](_0x2e8c => '<@' + _0x2e8c + '>')['join']('\x0a') : 'Aucun\x20participant,\x20le\x20lot\x20n\x27est\x20pas\x20attribué.') + '\x0a\x0a**Participants\x20:\x20**\x0a' + (_0x3d0dc0['entrants'] || [])['length'])['setFooter']({
                                    'text': 'Giveaway'
                                })['setTimestamp']()]
                            })['catch'](() => {});
                        }
                        await sendRichLog(_0x21bb87, 'moderation', new EmbedBuilder()['setColor']('#ED4245')['setTitle']('🎉\x20Giveaway\x20terminé')['setTimestamp']()['addFields']({
                            'name': 'Lot',
                            'value': _0x3d0dc0['prize'],
                            'inline': !![]
                        }, {
                            'name': 'Gagnants',
                            'value': (_0x3d0dc0['winners'] || [])['length'] ? _0x3d0dc0['winners']['map'](_0x2e8c => '<@' + _0x2e8c + '>')['join']('\x20') : 'Aucun',
                            'inline': !![]
                        }));
                    }
                    const _0x3eccf5 = _0x1cd071 - 0x2408c400;
                    _0x2c4542['giveaways']['items'] = (_0x2c4542['giveaways']['items'] || [])['filter'](_0x4e2fdf => !_0x4e2fdf['ended'] || _0x4e2fdf['endTime'] > _0x3eccf5), save(_0x57871f, _0x2c4542);
                }
                if (_0x2c4542["birthdays"]?.["enabled"] && _0x2c4542["birthdays"]["roleId"]) {
                    const _0x249ed0 = new Date(),
                        _0x31c0a8 = String(_0x249ed0["getDate"]())['padStart'](0x2, '0') + '/' + String(_0x249ed0["getMonth"]() + 0x1)["padStart"](0x2, '0');
                    if (_0x21bb87["_lastBirthdayCheck"] !== _0x31c0a8) {
                        _0x21bb87["_lastBirthdayCheck"] = _0x31c0a8;
                        const _0x2b93f3 = getBirthdays(_0x57871f),
                            _0x245ce9 = _0x21bb87['roles']['cache']['get'](_0x2c4542['birthdays']['roleId']);
                        if (_0x245ce9)
                            for (const [_0x1ad3e2, _0x21cb68] of Object['entries'](_0x2b93f3)) {
                                const _0x2428fc = String(_0x21cb68['day'])['padStart'](0x2, '0') + '/' + String(_0x21cb68['month'])["padStart"](0x2, '0');
                                if (_0x2428fc === _0x31c0a8) {
                                    const _0x1c8ba7 = await _0x21bb87['members']['fetch'](_0x1ad3e2)["catch"](() => null);
                                    if (_0x1c8ba7) {
                                        await _0x1c8ba7["roles"]['add'](_0x245ce9, 'Anniversaire\x20DashBot')['catch'](() => {});
                                        const _0x44d962 = _0x2c4542["birthdays"]['channelId'] ? _0x21bb87['channels']["cache"]['get'](_0x2c4542["birthdays"]['channelId']) : _0x21bb87['systemChannel'] || _0x21bb87['channels']['cache']["find"](_0x4ac40b => isSendable(_0x4ac40b));
                                        if (isSendable(_0x44d962)) _0x44d962['send'](t(_0x2c4542, 'birthdayRoleGiven', {
                                            'user': _0x1ad3e2
                                        }))['catch'](() => {});
                                    }
                                }
                            }
                    }
                }
            }
        }
    }, 0xea60), setInterval(async () => {
        const _0x15f332 = _0x5cb9,
            _0xab3d90 = await client['channels']["fetch"](DATA_CHANNEL_ID)["catch"](() => null);
        if (!_0xab3d90) return;
        for (const [_0x1f395c, _0x110cb6] of settingsCache) {
            const _0x4ba467 = _0x110cb6['data'];
            if (!_0x4ba467['economy']?.['enabled'] && !_0x4ba467['levels']?.['enabled']) continue;
            const _0x419019 = client["guilds"]['cache']["get"](_0x1f395c);
            if (!_0x419019) continue;
            const _0x2e063b = reportCache['get'](_0x1f395c) || {};
            try {
                if (_0x4ba467['economy']?.['enabled']) {
                    const _0xc22a21 = getEcon(_0x1f395c),
                        _0x2ddb4a = Object['entries'](_0xc22a21)["sort"]((_0x378746, _0x256599) => (_0x256599[0x1]['balance'] || 0x0) - (_0x378746[0x1]['balance'] || 0x0)),
                        _0x2528f9 = generateEconHTML(_0x419019, _0x2ddb4a),
                        _0x5a8591 = new AttachmentBuilder(Buffer['from'](_0x2528f9), {
                            'name': 'economy-' + _0x1f395c + ".html"
                        });
                    if (_0x2e063b["econMsgId"]) {
                        const _0x15c8ba = await _0xab3d90['messages']['fetch'](_0x2e063b['econMsgId'])['catch'](() => null);
                        if (_0x15c8ba) {
                            await _0x15c8ba['edit']({
                                'files': [_0x5a8591]
                            })['catch'](() => {});
                            continue;
                        }
                    }
                    const _0x2f3cff = await _0xab3d90["send"]({
                        'content': "econ-report:" + _0x1f395c,
                        'files': [_0x5a8591]
                    });
                    _0x2e063b['econMsgId'] = _0x2f3cff['id'];
                }
            } catch (_0x32be63) {
                console['error']("[econ-report]", _0x32be63["message"]);
            }
            try {
                if (_0x4ba467['levels']?.['enabled']) {
                    const _0x173d32 = getLevels(_0x1f395c),
                        _0x52df49 = Object['entries'](_0x173d32)['sort']((_0x2eeb7e, _0x4e52a5) => _0x4e52a5[0x1]['level'] * 0x2710 + _0x4e52a5[0x1]['xp'] - (_0x2eeb7e[0x1]['level'] * 0x2710 + _0x2eeb7e[0x1]['xp'])),
                        _0x104755 = generateLevelsHTML(_0x419019, _0x52df49, _0x4ba467['levels']),
                        _0x3ac660 = new AttachmentBuilder(Buffer['from'](_0x104755), {
                            'name': "levels-" + _0x1f395c + '.html'
                        });
                    if (_0x2e063b['lvlMsgId']) {
                        const _0x5e3cee = await _0xab3d90['messages']["fetch"](_0x2e063b["lvlMsgId"])["catch"](() => null);
                        if (_0x5e3cee) {
                            await _0x5e3cee['edit']({
                                'files': [_0x3ac660]
                            })['catch'](() => {});
                            continue;
                        }
                    }
                    const _0x46c363 = await _0xab3d90['send']({
                        'content': 'lvl-report:' + _0x1f395c,
                        'files': [_0x3ac660]
                    });
                    _0x2e063b["lvlMsgId"] = _0x46c363['id'];
                }
            } catch (_0x149ee3) {
                console['error']('[lvl-report]', _0x149ee3["message"]);
            }
            reportCache['set'](_0x1f395c, _0x2e063b);
        }
    }, 0x493e0);
    const _0x48d012 = new REST({
        'version': '10'
    })['setToken'](TOKEN);
    await Promise['all'](client["guilds"]["cache"]["map"](_0x1acdcd => _0x48d012["put"](Routes['applicationGuildCommands'](client['user']['id'], _0x1acdcd['id']), {
        'body': slashCmdDefs
    })["catch"](console['error'])));
}), client['on']("guildCreate", async _0x46926a => {
    const _0x522a14 = _0x15878f,
        _0x4e7e05 = new REST({
            'version': '10'
        })['setToken'](TOKEN);
    await _0x4e7e05['put'](Routes["applicationGuildCommands"](client['user']['id'], _0x46926a['id']), {
        'body': slashCmdDefs
    })['catch'](console["error"]);
}), client['on']("interactionCreate", async _0x26841a => {
    const _0x18d57c = _0x15878f;
    try {
        if (_0x26841a['isChatInputCommand']()) {
            if (!_0x26841a['guild']) return _0x26841a['reply']({
                'content': "Cette commande est disponible uniquement sur un serveur.",
                'flags': MessageFlags["Ephemeral"]
            });
            if (!checkRateLimit(_0x26841a["user"]['id'], 0xa, 0x2710)) return _0x26841a["reply"]({
                'content': "⏳ Trop de requêtes. Réessaie dans quelques secondes.",
                'flags': MessageFlags['Ephemeral']
            });
            if (_0x26841a['commandName'] === 'config') {
                if (!isAdmin(_0x26841a)) return _0x26841a["reply"]({
                    'content': tr(settings(_0x26841a['guild']['id']), 'admin'),
                    'flags': MessageFlags['Ephemeral']
                });
                return _0x26841a['reply']({
                    ...pagePayload(_0x26841a['guild'], 'home'),
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0x26841a["commandName"] === 'création-serveur') {
                if (!isAdmin(_0x26841a)) return _0x26841a['reply']({
                    'content': tr(settings(_0x26841a['guild']['id']), "admin"),
                    'flags': MessageFlags['Ephemeral']
                });
                return await _0x26841a["deferReply"]({
                    'flags': MessageFlags["Ephemeral"]
                }), _0x26841a['editReply'](await createDefaultServer(_0x26841a['guild'], settings(_0x26841a['guild']['id'])));
            }
            if (_0x26841a['commandName'] === "aide") {
                const _0x53f792 = ["**Administration**", "`/config` — Configuration du serveur", "`/création-serveur` — Structure complète", "`/sauvegarde` — Sauvegarder le serveur", "`/restauration` — Restaurer une sauvegarde", '`/maintenance`\x20—\x20Mode\x20maintenance', "**Modération**", "`/avertir` — Avertir un membre", "`/avertissements` — Avertissements d'un membre", '`/rendre-muet`\x20—\x20Rendre\x20muet\x20un\x20membre', "`/retirer-muet` — Réactiver un membre", "`/nettoyer` — Supprimer des messages", "**Économie & Niveaux**", "`/journalier` — Récompense quotidienne", "`/solde` — Voir le solde", '`/rang`\x20—\x20Voir\x20le\x20rang', "`/classement` — Classement du serveur", '`/boutique`\x20—\x20Voir\x20la\x20boutique', "`/acheter` — Acheter un article", "**Communauté**", "`/sondage` — Créer un sondage", "`/suggestion` — Faire une suggestion", '`/concours`\x20—\x20Lancer\x20un\x20concours', '**Communication**', "`/annonce` — Envoyer une annonce", '`/rappel`\x20—\x20Programmer\x20un\x20rappel', "**Autres**", '`/anniversaire`\x20—\x20Enregistrer\x20son\x20anniversaire', '`/panneau-rôle`\x20—\x20Créer\x20un\x20panneau\x20de\x20rôles\x20réaction', '`/citer`\x20—\x20Citer\x20un\x20message']["join"]('\x0a');
                return _0x26841a['reply']({
                    'embeds': [new EmbedBuilder()['setColor']("#5865F2")['setTitle']("📋 Commandes DashBot")["setDescription"]('Utilise\x20`/config`\x20pour\x20administrer\x20le\x20serveur.\x0a\x0a' + _0x53f792)],
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0x26841a['commandName'] === 'sauvegarde') {
                if (!isAdmin(_0x26841a)) return _0x26841a["reply"]({
                    'content': tr(settings(_0x26841a["guild"]['id']), "admin"),
                    'flags': MessageFlags["Ephemeral"]
                });
                await _0x26841a['deferReply']({
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x1a3809 = await createBackup(_0x26841a["guild"]),
                    _0x492949 = await client['channels']["fetch"](DATA_CHANNEL_ID)['catch'](() => null);
                if (!_0x492949) return _0x26841a['editReply']("❌ Salon de données introuvable.");
                const _0x6dc09a = encode(JSON["stringify"]({
                        'guildId': _0x26841a["guild"]['id'],
                        'createdAt': new Date()['toISOString']()
                    })),
                    _0x34796c = await _0x492949['send']({
                        'content': "backup:" + _0x26841a["guild"]['id'] + '\x20' + _0x6dc09a,
                        'files': [new AttachmentBuilder(Buffer["from"](JSON["stringify"](_0x1a3809, null, 0x2)), {
                            'name': 'backup-' + Date['now']() + ".json"
                        })]
                    });
                return _0x26841a['editReply']({
                    'content': '✅\x20Sauvegarde\x20créée\x20(ID:\x20`' + _0x34796c['id'] + '`).\x0aPour\x20restaurer\x20:\x20`/restore\x20id:' + _0x34796c['id'] + '`'
                });
            }
            if (_0x26841a["commandName"] === 'maintenance') {
                const _0xb91063 = settings(_0x26841a['guild']['id']);
                if (_0x26841a['user']['id'] !== _0x26841a["guild"]["ownerId"]) return _0x26841a["reply"]({
                    'content': '⚠️\x20Seul\x20le\x20fondateur\x20du\x20serveur\x20peut\x20gérer\x20le\x20mode\x20maintenance.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x198ea7 = _0x26841a['options']['getSubcommand']();
                if (_0x198ea7 === 'activé') {
                    if (_0xb91063['maintenance']['enabled']) return _0x26841a["reply"]({
                        'content': tr(_0xb91063, 'maintenanceAlreadyOn'),
                        'flags': MessageFlags["Ephemeral"]
                    });
                    await _0x26841a['deferReply']({
                        'flags': MessageFlags["Ephemeral"]
                    });
                    try {
                        const _0x5b66f9 = _0x26841a['guild']["channels"]["cache"]['filter'](_0x32d184 => (_0x32d184['isTextBased']() || _0x32d184["isVoiceBased"]()) && !_0x32d184["isThread"]()),
                            _0x57aa4b = [];
                        for (const _0x3193d7 of _0x5b66f9["values"]()) {
                            await _0x3193d7['permissionOverwrites']['edit'](_0x26841a['guild']['roles']["everyone"], {
                                'ViewChannel': ![]
                            })['catch'](() => {}), _0x57aa4b['push'](_0x3193d7['id']);
                        }
                        return _0xb91063['maintenance']['enabled'] = !![], _0xb91063['maintenance']['channelIds'] = _0x57aa4b, save(_0x26841a["guild"]['id'], _0xb91063), await sendRichLog(_0x26841a["guild"], 'moderation', new EmbedBuilder()["setColor"]('#ED4245')['setTitle']('🔧\x20Maintenance\x20activée')["setTimestamp"]()['addFields']({
                            'name': "Administrateur",
                            'value': '<@' + _0x26841a["user"]['id'] + '>',
                            'inline': !![]
                        })["addFields"]({
                            'name': 'Salons\x20masqués',
                            'value': String(_0x57aa4b['length']),
                            'inline': !![]
                        })), _0x26841a["editReply"]({
                            'content': tr(_0xb91063, 'maintenanceEnabled')
                        });
                    } catch (_0x2e876e) {
                        return console["error"]('Maintenance\x20enable\x20error:', _0x2e876e), _0x26841a['editReply']({
                            'content': '❌\x20Erreur\x20lors\x20de\x20l\x27activation\x20de\x20la\x20maintenance\x20:\x20' + _0x2e876e["message"]
                        });
                    }
                }
                if (_0x198ea7 === 'désactivé') {
                    if (!_0xb91063['maintenance']["enabled"]) return _0x26841a['reply']({
                        'content': tr(_0xb91063, 'maintenanceAlreadyOff'),
                        'flags': MessageFlags['Ephemeral']
                    });
                    await _0x26841a['deferReply']({
                        'flags': MessageFlags["Ephemeral"]
                    });
                    try {
                        const _0x2385ec = _0xb91063['maintenance']['channelIds'] || [];
                        for (const _0x1b2fe6 of _0x2385ec) {
                            const _0x1d9610 = _0x26841a['guild']["channels"]['cache']['get'](_0x1b2fe6);
                            if (!_0x1d9610) continue;
                            await _0x1d9610["permissionOverwrites"]['cache']["get"](_0x26841a["guild"]["roles"]["everyone"]['id'])?.["delete"]()['catch'](() => {});
                        }
                        return _0xb91063['maintenance']['enabled'] = ![], _0xb91063["maintenance"]['channelIds'] = [], save(_0x26841a["guild"]['id'], _0xb91063), await sendRichLog(_0x26841a['guild'], 'moderation', new EmbedBuilder()['setColor']("#57F287")['setTitle']("🔧 Maintenance désactivée")['setTimestamp']()['addFields']({
                            'name': 'Administrateur',
                            'value': '<@' + _0x26841a['user']['id'] + '>'
                        })), _0x26841a["editReply"]({
                            'content': tr(_0xb91063, 'maintenanceDisabled')
                        });
                    } catch (_0x45d578) {
                        return console["error"]("Maintenance disable error:", _0x45d578), _0x26841a['editReply']({
                            'content': "❌ Erreur lors de la désactivation de la maintenance : " + _0x45d578['message']
                        });
                    }
                }
            }
            if (_0x26841a['commandName'] === "journalier") {
                const _0x55ed5c = settings(_0x26841a['guild']['id']);
                if (!_0x55ed5c['economy']?.['enabled']) return _0x26841a["reply"]({
                    'content': '❌\x20Économie\x20désactivée.',
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x2ff854 = getEcon(String(_0x26841a['guild']['id'])),
                    _0x1a569a = _0x26841a['user']['id'];
                if (!_0x2ff854[_0x1a569a]) _0x2ff854[_0x1a569a] = {
                    'balance': 0x0,
                    'lastDaily': 0x0
                };
                const _0x117b9d = Date['now']();
                if (_0x117b9d - _0x2ff854[_0x1a569a]['lastDaily'] < 0x5265c00) {
                    const _0x130114 = Math['ceil']((0x5265c00 - (_0x117b9d - _0x2ff854[_0x1a569a]["lastDaily"])) / 0x36ee80);
                    return _0x26841a["reply"]({
                        'content': t(settings(_0x26841a['guild']['id']), 'dailyClaimed', {
                            'time': _0x130114 + 'h'
                        }),
                        'flags': MessageFlags['Ephemeral']
                    });
                }
                return _0x2ff854[_0x1a569a]["balance"] += _0x55ed5c["economy"]["dailyAmount"], _0x2ff854[_0x1a569a]['lastDaily'] = _0x117b9d, saveEcon(_0x26841a['guild']['id']), _0x26841a["reply"]({
                    'content': t(settings(_0x26841a["guild"]['id']), 'dailyReward', {
                        'amount': _0x55ed5c['economy']["dailyAmount"],
                        'coins': '🪙'
                    }),
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0x26841a["commandName"] === "solde") {
                const _0x2dd590 = settings(_0x26841a['guild']['id']),
                    _0x13c479 = getEcon(String(_0x26841a["guild"]['id'])),
                    _0x531c7a = _0x26841a["options"]['getUser']('membre') || _0x26841a['user'],
                    _0x5845a2 = _0x13c479[_0x531c7a['id']]?.["balance"] || 0x0;
                return _0x26841a["reply"]({
                    'content': '💰\x20**' + _0x531c7a['tag'] + '**\x20:\x20**' + _0x5845a2 + '**\x20🪙',
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0x26841a['commandName'] === "rang") {
                const _0x171ace = settings(_0x26841a['guild']['id']),
                    _0x31f374 = getLevels(String(_0x26841a["guild"]['id'])),
                    _0x32de32 = _0x26841a["options"]["getUser"]('membre') || _0x26841a["user"],
                    _0xf371fb = _0x31f374[_0x32de32['id']] || {
                        'xp': 0x0,
                        'level': 0x0,
                        'messages': 0x0
                    },
                    _0x406892 = _0xf371fb['level'] * 0x32 + 0x64;
                return _0x26841a['reply']({
                    'content': "📊 **" + _0x32de32['tag'] + '**\x20→\x20Niveau\x20**' + _0xf371fb["level"] + "** (" + _0xf371fb['xp'] + '/' + _0x406892 + " XP) — **" + _0xf371fb['messages'] + '**\x20messages',
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0x26841a['commandName'] === 'classement') {
                const _0x193b0f = settings(_0x26841a["guild"]['id']),
                    _0x47c94d = getLevels(String(_0x26841a["guild"]['id'])),
                    _0x47905f = Object['entries'](_0x47c94d)['sort']((_0x42b41d, _0x27226a) => _0x27226a[0x1]["level"] * 0x2710 + _0x27226a[0x1]['xp'] - (_0x42b41d[0x1]["level"] * 0x2710 + _0x42b41d[0x1]['xp']))["slice"](0x0, 0xa);
                if (!_0x47905f['length']) return _0x26841a['reply']({
                    'content': "Aucune donnée.",
                    'flags': MessageFlags["Ephemeral"]
                });
                return _0x26841a['reply']({
                    'content': '🏆\x20**Classement**\x0a' + _0x47905f['map'](([_0x3b2a28, _0x3f919b], _0x26c69d) => _0x26c69d + 0x1 + ". <@" + _0x3b2a28 + '>\x20→\x20Niveau\x20**' + _0x3f919b["level"] + '**\x20(' + _0x3f919b['xp'] + " XP)")["join"]('\x0a'),
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0x26841a["commandName"] === 'boutique') {
                const _0x56c760 = settings(_0x26841a["guild"]['id']);
                if (!_0x56c760["shop"]?.['enabled'] || !_0x56c760["shop"]['items']["length"]) return _0x26841a['reply']({
                    'content': tr(_0x56c760, "shopEmpty"),
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x965aea = _0x56c760["shop"]['items']["map"]((_0x1ec5e1, _0x395ebd) => _0x395ebd + 0x1 + '.\x20**' + _0x1ec5e1["name"] + "** — " + _0x1ec5e1["price"] + " 🪙")['join']('\x0a');
                return _0x26841a["reply"]({
                    'content': '**' + tr(_0x56c760, "shopTitle") + "**\n" + _0x965aea + "\n\nUtilise `/buy <numéro|nom>`",
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0x26841a["commandName"] === 'acheter') {
                const _0x5887e7 = settings(_0x26841a['guild']['id']);
                if (!_0x5887e7["shop"]?.["enabled"]) return _0x26841a['reply']({
                    'content': "❌ Boutique désactivée.",
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x10ad99 = _0x26841a['options']["getString"]("article")['toLowerCase'](),
                    _0x484bf1 = _0x5887e7['shop']["items"]['find']((_0x59c5aa, _0x3437ed) => _0x59c5aa["name"]["toLowerCase"]() === _0x10ad99 || String(_0x3437ed + 0x1) === _0x10ad99);
                if (!_0x484bf1) return _0x26841a['reply']({
                    'content': tr(_0x5887e7, 'buyNotFound'),
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x31745a = getEcon(String(_0x26841a['guild']['id'])),
                    _0x104a64 = _0x31745a[_0x26841a['user']['id']]?.['balance'] || 0x0;
                if (_0x104a64 < _0x484bf1['price']) return _0x26841a["reply"]({
                    'content': t(_0x5887e7, "buyFail", {
                        'missing': _0x484bf1["price"] - _0x104a64
                    }),
                    'flags': MessageFlags['Ephemeral']
                });
                _0x31745a[_0x26841a['user']['id']] = _0x31745a[_0x26841a["user"]['id']] || {
                    'balance': 0x0,
                    'lastDaily': 0x0
                }, _0x31745a[_0x26841a["user"]['id']]["balance"] -= _0x484bf1['price'], saveEcon(_0x26841a['guild']['id']);
                const _0x208bf6 = _0x26841a["guild"]['roles']['cache']['get'](_0x484bf1["roleId"]);
                if (_0x208bf6 && _0x26841a["member"]) await _0x26841a['member']["roles"]["add"](_0x208bf6, 'Achat\x20boutique\x20DashBot')['catch'](() => {});
                return _0x26841a['reply']({
                    'content': t(_0x5887e7, "buySuccess", {
                        'item': _0x484bf1['name'],
                        'price': _0x484bf1['price']
                    }),
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0x26841a["commandName"] === "sondage") {
                const _0x370136 = settings(_0x26841a['guild']['id']);
                if (!_0x370136['polls']?.["enabled"]) return _0x26841a["reply"]({
                    'content': "❌ Sondages désactivés.",
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x4652b7 = _0x26841a["options"]['getString']("question");
                if (!_0x4652b7 || _0x4652b7['length'] > 0x3e8) return _0x26841a["reply"]({
                    'content': "❌ Question vide ou trop longue.",
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x557761 = new EmbedBuilder()['setColor']('#5865F2')["setTitle"](tr(_0x370136, 'pollTitle'))['setDescription'](t(_0x370136, "pollDesc", {
                        'question': _0x4652b7
                    }))['setFooter']({
                        'text': 'DashBot\x20•\x20' + _0x26841a['guild']["name"]
                    })["setTimestamp"](),
                    _0x3cebb5 = _0x370136['polls']["channelId"] ? _0x26841a['guild']['channels']["cache"]["get"](_0x370136["polls"]['channelId']) : _0x26841a["channel"];
                if (!isSendable(_0x3cebb5)) return _0x26841a["reply"]({
                    'content': "❌ Salon de sondages invalide.",
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x5502e8 = await _0x3cebb5["send"]({
                    'embeds': [_0x557761]
                })["catch"](() => null);
                return _0x5502e8 && (await _0x5502e8["react"]('✅')["catch"](() => {}), await _0x5502e8["react"]('❌')["catch"](() => {})), _0x26841a['reply']({
                    'content': tr(_0x370136, "pollSent") + '\x20<#' + _0x3cebb5['id'] + '>',
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0x26841a["commandName"] === "suggestion") {
                const _0x46ad91 = settings(_0x26841a['guild']['id']);
                if (!_0x46ad91['polls']?.['enabled']) return _0x26841a['reply']({
                    'content': "❌ Suggestions désactivées.",
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x188b68 = _0x26841a['options']['getString']('texte');
                if (!_0x188b68 || _0x188b68["length"] > 0x7d0) return _0x26841a["reply"]({
                    'content': "❌ Texte vide ou trop long.",
                    'flags': MessageFlags['Ephemeral']
                });
                const _0xf5c677 = new EmbedBuilder()['setColor']("#FEE75C")["setTitle"](tr(_0x46ad91, "suggestTitle"))['setDescription'](sanitize(_0x188b68, 0x7d0))['setFooter']({
                        'text': t(_0x46ad91, "suggestBy", {
                            'user': sanitize(_0x26841a["user"]["tag"], 0x50)
                        })
                    })['setTimestamp'](),
                    _0x33f290 = _0x46ad91['polls']["channelId"] ? _0x26841a['guild']['channels']["cache"]["get"](_0x46ad91['polls']['channelId']) : _0x26841a["channel"];
                if (!isSendable(_0x33f290)) return _0x26841a['reply']({
                    'content': "❌ Salon de suggestions invalide.",
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x16af52 = await _0x33f290['send']({
                    'embeds': [_0xf5c677]
                })["catch"](() => null);
                return _0x16af52 && (await _0x16af52['react']('✅')["catch"](() => {}), await _0x16af52["react"]('❌')['catch'](() => {})), _0x26841a['reply']({
                    'content': tr(_0x46ad91, 'pollSent') + '\x20<#' + _0x33f290['id'] + '>',
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0x26841a['commandName'] === 'concours') {
                const _0x205d74 = settings(_0x26841a['guild']['id']);
                if (!_0x205d74['giveaways']?.['enabled']) return _0x26841a['reply']({
                    'content': 'Giveaway\x20désactivé.',
                    'flags': MessageFlags['Ephemeral']
                });
                if (!_0x26841a['member']?.['permissions']['has'](PermissionFlagsBits['ModerateMembers'])) return _0x26841a['reply']({
                    'content': 'Permissions\x20insuffisantes.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x5ce5c2 = _0x26841a['options']['getString']('temps'),
                    _0x4a24d9 = parseDuration(_0x5ce5c2);
                if (!_0x4a24d9) return _0x26841a['reply']({
                    'content': 'Format\x20invalide.\x20Ex:\x20`30min`,\x20`2h`,\x20`1d`',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x446937 = _0x26841a['options']['getString']('lots'),
                    _0x35aa22 = _0x26841a['options']['getInteger']('gagnants') || 0x1,
                    _0x2e9f01 = _0x26841a['options']['getString']('description') || '',
                    _0x6d2f4b = _0x26841a['options']['getChannel']('salon') || _0x26841a['channel'],
                    _0x2f3c7d = _0x26841a['options']['getRole']('role') || null,
                    _0x8a1b60 = _0x26841a['options']['getInteger']('membres') || 0x0,
                    _0x3f75c6 = {
                        'messageId': '',
                        'channelId': _0x6d2f4b['id'],
                        'prize': _0x446937,
                        'description': _0x2e9f01,
                        'endTime': Date['now']() + _0x4a24d9,
                        'winnersCount': _0x35aa22,
                        'requiredRoleId': _0x2f3c7d ? _0x2f3c7d['id'] : null,
                        'minMembers': _0x8a1b60,
                        'creatorId': _0x26841a['user']['id'],
                        'entrants': [],
                        'winners': [],
                        'ended': ![],
                        'endedAt': 0x0
                    };
                const _0x4f4ead = await _0x6d2f4b['send']({
                    'embeds': [giveawayEmbed(_0x205d74, _0x3f75c6, _0x26841a['guild'])],
                    'components': [row(new ButtonBuilder()['setCustomId']('giveaway:enter')['setLabel'](tr(_0x205d74, 'giveawayEnter'))['setStyle'](ButtonStyle['Success'])['setEmoji']('🎉'))]
                })['catch'](() => null);
                if (!_0x4f4ead) return _0x26841a['reply']({
                    'content': '❌\x20Impossible\x20d\x27envoyer\x20le\x20message.',
                    'flags': MessageFlags['Ephemeral']
                });
                _0x3f75c6['messageId'] = _0x4f4ead['id'], _0x205d74['giveaways']['items'] = _0x205d74['giveaways']['items'] || [], _0x205d74['giveaways']['items']['push'](_0x3f75c6), save(_0x26841a['guild']['id'], _0x205d74), await sendRichLog(_0x26841a['guild'], 'moderation', new EmbedBuilder()['setColor']('#FEE75C')['setTitle']('🎉\x20Giveaway\x20créé')['setTimestamp']()['addFields']({
                    'name': 'Lot',
                    'value': _0x446937,
                    'inline': !![]
                }, {
                    'name': 'Gagnants',
                    'value': '' + _0x35aa22,
                    'inline': !![]
                }, {
                    'name': 'Fin',
                    'value': '<t:' + Math['floor'](_0x3f75c6['endTime'] / 0x3e8) + ':R>',
                    'inline': !![]
                }));
                return _0x26841a['reply']({
                    'content': '✅\x20Giveaway\x20lancé\x20!',
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0x26841a['commandName'] === 'citer') {
                const _0xctMsg = _0x26841a['options']['getString']('message') || '',
                    _0xctChOpt = _0x26841a['options']['getChannel']('salon') || null;
                let _0xctChId = null,
                    _0xctMsgId = null;
                const _0xctM = _0xctMsg['match'](/^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/(\d+)\/(\d+)\/(\d+)(?:\?.*)?$/);
                if (_0xctM) {
                    if (_0xctM[0x1] !== _0x26841a['guild']['id']) return _0x26841a['reply']({
                        'content': 'Ce\x20message\x20provient\x20d\x27un\x20autre\x20serveur.',
                        'flags': MessageFlags['Ephemeral']
                    });
                    _0xctChId = _0xctM[0x2];
                    _0xctMsgId = _0xctM[0x3];
                } else if (/^\d{17,20}$/ ['test'](_0xctMsg)) {
                    _0xctChId = (_0xctChOpt || _0x26841a['channel'])['id'];
                    _0xctMsgId = _0xctMsg;
                } else return _0x26841a['reply']({
                    'content': 'Lien\x20de\x20message\x20invalide.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0xctCh = await _0x26841a['guild']['channels']['fetch'](_0xctChId)['catch'](() => null);
                if (!_0xctCh || typeof _0xctCh['messages'] === 'undefined') return _0x26841a['reply']({
                    'content': 'Salon\x20introuvable\x20ou\x20inaccessible.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0xctTarget = await _0xctCh['messages']['fetch'](_0xctMsgId)['catch'](() => null);
                if (!_0xctTarget) return _0x26841a['reply']({
                    'content': 'Message\x20introuvable\x20ou\x20supprimé.',
                    'flags': MessageFlags['Ephemeral']
                });
                let _0xctQuote = _0xctTarget['content'] || '';
                if (!_0xctQuote && _0xctTarget['embeds'] && _0xctTarget['embeds'][0x0]) {
                    const _0xctE = _0xctTarget['embeds'][0x0];
                    _0xctQuote = [_0xctE['title'], _0xctE['description'], ...(_0xctE['fields'] || [])['map'](_0xctF => _0xctF['name'] + ':\x20' + _0xctF['value'])]['filter'](_0xctV => _0xctV)['join']('\x0a');
                }
                if (!_0xctQuote && _0xctTarget['attachments'] && _0xctTarget['attachments']['size']) _0xctQuote = '(pièce\x20jointe)';
                const _0xctEmb = new EmbedBuilder()['setColor']('#5865F2')['setAuthor']({
                    'name': _0xctTarget['author']['tag'],
                    'iconURL': _0xctTarget['author']['displayAvatarURL']()
                })['setDescription']('«\x20' + sanitize(_0xctQuote, 0x7d0) + '\x20»')['addFields']({
                    'name': 'Salon',
                    'value': '<#' + _0xctTarget['channelId'] + '>',
                    'inline': !![]
                }, {
                    'name': 'Original',
                    'value': '[Voir\x20le\x20message](' + _0xctTarget['url'] + ')',
                    'inline': !![]
                })['setFooter']({
                    'text': 'Cité\x20par\x20' + _0x26841a['user']['tag']
                })['setTimestamp'](_0xctTarget['createdAt']);
                return _0x26841a['reply']({
                    'embeds': [_0xctEmb]
                });
            }
            if (_0x26841a['commandName'] === 'giveaway') {
                if (!_0x26841a['member']?.['permissions']['has'](PermissionFlagsBits['ModerateMembers'])) return _0x26841a['reply']({
                    'content': 'Permissions\x20insuffisantes.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x205d74 = settings(_0x26841a['guild']['id']),
                    _0x6b2f3b = _0x26841a['options']['getSubcommand'](),
                    _0xgwItems = _0x205d74['giveaways']['items'] || [];
                if (_0x6b2f3b === 'creer') {
                    const _0x5ce5c2 = _0x26841a['options']['getString']('temps'),
                        _0x4a24d9 = parseDuration(_0x5ce5c2);
                    if (!_0x4a24d9) return _0x26841a['reply']({
                        'content': 'Format\x20invalide.\x20Ex:\x20`30min`,\x20`2h`,\x20`1d`',
                        'flags': MessageFlags['Ephemeral']
                    });
                    const _0x446937 = _0x26841a['options']['getString']('lots'),
                        _0x35aa22 = _0x26841a['options']['getInteger']('gagnants') || 0x1,
                        _0x2e9f01 = _0x26841a['options']['getString']('description') || '',
                        _0x6d2f4b = _0x26841a['options']['getChannel']('salon') || _0x26841a['channel'],
                        _0x2f3c7d = _0x26841a['options']['getRole']('role') || null,
                        _0x8a1b60 = _0x26841a['options']['getInteger']('membres') || 0x0,
                        _0x3f75c6 = {
                            'messageId': '',
                            'channelId': _0x6d2f4b['id'],
                            'prize': _0x446937,
                            'description': _0x2e9f01,
                            'endTime': Date['now']() + _0x4a24d9,
                            'winnersCount': _0x35aa22,
                            'requiredRoleId': _0x2f3c7d ? _0x2f3c7d['id'] : null,
                            'minMembers': _0x8a1b60,
                            'creatorId': _0x26841a['user']['id'],
                            'entrants': [],
                            'winners': [],
                            'ended': ![],
                            'endedAt': 0x0
                        };
                    const _0x4f4ead = await _0x6d2f4b['send']({
                        'embeds': [giveawayEmbed(_0x205d74, _0x3f75c6, _0x26841a['guild'])],
                        'components': [row(new ButtonBuilder()['setCustomId']('giveaway:enter')['setLabel'](tr(_0x205d74, 'giveawayEnter'))['setStyle'](ButtonStyle['Success'])['setEmoji']('🎉'))]
                    })['catch'](() => null);
                    if (!_0x4f4ead) return _0x26841a['reply']({
                        'content': '❌\x20Impossible\x20d\x27envoyer\x20le\x20message.',
                        'flags': MessageFlags['Ephemeral']
                    });
                    _0x3f75c6['messageId'] = _0x4f4ead['id'], _0xgwItems['push'](_0x3f75c6), _0x205d74['giveaways']['items'] = _0xgwItems, save(_0x26841a['guild']['id'], _0x205d74), await sendRichLog(_0x26841a['guild'], 'moderation', new EmbedBuilder()['setColor']('#FEE75C')['setTitle']('🎉\x20Giveaway\x20créé')['setTimestamp']()['addFields']({
                        'name': 'Lot',
                        'value': _0x446937,
                        'inline': !![]
                    }, {
                        'name': 'Salon',
                        'value': '' + _0x6d2f4b['id'],
                        'inline': !![]
                    }, {
                        'name': 'Fin',
                        'value': '<t:' + Math['floor'](_0x3f75c6['endTime'] / 0x3e8) + ':R>',
                        'inline': !![]
                    }));
                    return _0x26841a['reply']({
                        'content': '✅\x20Giveaway\x20lancé\x20!',
                        'flags': MessageFlags['Ephemeral']
                    });
                }
                if (_0x6b2f3b === 'liste') {
                    const _0xgwActive = _0xgwItems['filter'](_0x2e4a => !_0x2e4a['ended'] && _0x2e4a['endTime'] > Date['now']());
                    if (!_0xgwActive['length']) return _0x26841a['reply']({
                        'content': 'Aucun\x20giveaway\x20en\x20cours.',
                        'flags': MessageFlags['Ephemeral']
                    });
                    return _0x26841a['reply']({
                        'embeds': [new EmbedBuilder()['setColor']('#FEE75C')['setTitle']('🎉\x20Giveaways\x20en\x20cours')['setDescription'](_0xgwActive['map']((_0x2e4a, _0x2e8d) => (_0x2e8d + 0x1) + '. <#' + _0x2e4a['channelId'] + '>\x20–\x20' + _0x2e4a['prize'] + '\x20(' + (_0x2e4a['entrants'] || [])['length'] + ' participants)')['join']('\x0a'))['setFooter']({
                            'text': 'Utilisez\x20/giveaway\x20pour\x20gérer'
                        })],
                        'flags': MessageFlags['Ephemeral']
                    });
                }
                const _0xgwId = _0x26841a['options']['getString']('message') || '',
                    _0xgwChan = _0x26841a['options']['getChannel']('salon') || _0x26841a['channel'],
                    _0xgwTarget = _0xgwId ? _0xgwItems['find'](_0x2e4a => _0x2e4a['messageId'] === _0xgwId) : [..._0xgwItems]['reverse']()['find'](_0x2e4a => _0x2e4a['channelId'] === _0xgwChan['id']);
                if (!_0xgwTarget) return _0x26841a['reply']({
                    'content': 'Giveaway\x20introuvable.',
                    'flags': MessageFlags['Ephemeral']
                });
                if (_0x6b2f3b === 'participants') {
                    const _0xgwEnts = _0xgwTarget['entrants'] || [];
                    if (!_0xgwEnts['length']) return _0x26841a['reply']({
                        'content': 'Aucun\x20participant\x20pour\x20ce\x20giveaway.',
                        'flags': MessageFlags['Ephemeral']
                    });
                    return _0x26841a['reply']({
                        'embeds': [new EmbedBuilder()['setColor']('#FEE75C')['setTitle']('👥\x20Participants\x20–\x20' + _0xgwTarget['prize'])['setDescription'](_0xgwEnts['map']((_0x2e8c, _0x2e8d) => (_0x2e8d + 0x1) + '. <@' + _0x2e8c + '>')['join']('\x0a')['slice'](0x0, 0xfa0))['setFooter']({
                            'text': 'Total\x20:\x20' + _0xgwEnts['length']
                        })],
                        'flags': MessageFlags['Ephemeral']
                    });
                }
                if (_0x6b2f3b === 'arreter') {
                    if (_0xgwTarget['ended']) return _0x26841a['reply']({
                        'content': 'Ce\x20giveaway\x20est\x20déjà\x20terminé.',
                        'flags': MessageFlags['Ephemeral']
                    });
                    _0xgwTarget['ended'] = !![], _0xgwTarget['endTime'] = Date['now'](), _0xgwTarget['winners'] = pickGiveawayWinners(_0xgwTarget, []), save(_0x26841a['guild']['id'], _0x205d74);
                    const _0xgwCh1 = _0x26841a['guild']['channels']['cache']['get'](_0xgwTarget['channelId']);
                    if (isSendable(_0xgwCh1)) {
                        const _0xgwM1 = await _0xgwCh1['messages']['fetch'](_0xgwTarget['messageId'])['catch'](() => null);
                        if (_0xgwM1) await _0xgwM1['edit']({
                            'embeds': [giveawayEmbed(_0x205d74, _0xgwTarget, _0x26841a['guild'])],
                            'components': []
                        })['catch'](() => {});
                        await _0xgwCh1['send']({
                            'embeds': [new EmbedBuilder()['setColor']('#ED4245')['setTitle']('🎉\x20Giveaway\x20arrêté')['setDescription']('**Lot\x20:\x20**\x0a' + _0xgwTarget['prize'] + '\x0a\x0a' + (_0xgwTarget['winners']['length'] ? '**Gagnants\x20:\x20**\x0a' + _0xgwTarget['winners']['map'](_0x2e8c => '<@' + _0x2e8c + '>')['join']('\x0a') : 'Aucun\x20gagnant') + '\x0a\x0aArrêté\x20par\x20<@' + _0x26841a['user']['id'] + '>.')]
                        })['catch'](() => {});
                    }
                    return _0x26841a['reply']({
                        'content': '✅\x20Giveaway\x20arrêté\x20!',
                        'flags': MessageFlags['Ephemeral']
                    });
                }
                if (_0x6b2f3b === 'relancer') {
                    if (!_0xgwTarget['ended']) return _0x26841a['reply']({
                        'content': 'Ce\x20giveaway\x20est\x20toujours\x20en\x20cours.',
                        'flags': MessageFlags['Ephemeral']
                    });
                    _0xgwTarget['winners'] = pickGiveawayWinners(_0xgwTarget, _0xgwTarget['winners'] || []), save(_0x26841a['guild']['id'], _0x205d74);
                    const _0xgwCh2 = _0x26841a['guild']['channels']['cache']['get'](_0xgwTarget['channelId']);
                    if (isSendable(_0xgwCh2)) {
                        const _0xgwM2 = await _0xgwCh2['messages']['fetch'](_0xgwTarget['messageId'])['catch'](() => null);
                        if (_0xgwM2) await _0xgwM2['edit']({
                            'embeds': [giveawayEmbed(_0x205d74, _0xgwTarget, _0x26841a['guild'])],
                            'components': []
                        })['catch'](() => {});
                        await _0xgwCh2['send']({
                            'embeds': [new EmbedBuilder()['setColor']('#ED4245')['setTitle']('🎉\x20Reroll\x20du\x20tirage')['setDescription']('**Lot\x20:\x20**\x0a' + _0xgwTarget['prize'] + '\x0a\x0a**Nouveaux\x20gagnants\x20:\x20**\x0a' + (_0xgwTarget['winners']['length'] ? _0xgwTarget['winners']['map'](_0x2e8c => '<@' + _0x2e8c + '>')['join']('\x0a') : 'Aucun') + '\x0a\x0aReroll\x20par\x20<@' + _0x26841a['user']['id'] + '>.')]
                        })['catch'](() => {});
                    }
                    return _0x26841a['reply']({
                        'content': '✅\x20Tirage\x20refait\x20!',
                        'flags': MessageFlags['Ephemeral']
                    });
                }
                if (_0x6b2f3b === 'supprimer') {
                    _0x205d74['giveaways']['items'] = _0xgwItems['filter'](_0x2e4a => _0x2e4a['messageId'] !== _0xgwTarget['messageId']), save(_0x26841a['guild']['id'], _0x205d74);
                    const _0xgwCh3 = _0x26841a['guild']['channels']['cache']['get'](_0xgwTarget['channelId']);
                    if (isSendable(_0xgwCh3)) {
                        const _0xgwM3 = await _0xgwCh3['messages']['fetch'](_0xgwTarget['messageId'])['catch'](() => null);
                        if (_0xgwM3) await _0xgwM3['edit']({
                            'content': '~~Giveaway\x20supprimé~~',
                            'embeds': [],
                            'components': []
                        })['catch'](() => {});
                    }
                    return _0x26841a['reply']({
                        'content': '🗑\uFE0F\x20Giveaway\x20supprimé.',
                        'flags': MessageFlags['Ephemeral']
                    });
                }
                return _0x26841a['reply']({
                    'content': 'Sous-commande\x20inconnue.',
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0x26841a["commandName"] === 'panneau-r\u00f4le') {
                if (!_0x26841a['member']?.['permissions']['has'](PermissionFlagsBits['ManageRoles'])) return _0x26841a['reply']({
                    'content': '❌\x20Permission\x20`Gérer\x20les\x20rôles`\x20requise.',
                    'flags': MessageFlags['Ephemeral']
                });
                await _0x26841a['deferReply']({
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x3d047d = settings(_0x26841a["guild"]['id']),
                    _0x4d501b = _0x26841a["options"]["getChannel"]('salon');
                if (!_0x4d501b || !isSendable(_0x4d501b)) return _0x26841a['editReply']({
                    'content': "❌ Salon invalide."
                });
                const _0x38bddd = _0x26841a["options"]['getString']("titre") || 'Rôles\x20réaction',
                    _0x537690 = _0x26841a['options']["getString"]("description") || 'Clique\x20sur\x20les\x20boutons\x20pour\x20obtenir\x20ou\x20retirer\x20un\x20rôle.',
                    _0x545a84 = {
                        'channelId': _0x4d501b['id'],
                        'messageId': '',
                        'title': _0x38bddd,
                        'description': _0x537690,
                        'color': "#5865F2",
                        'roles': []
                    };
                if (!_0x3d047d['roles']['panels']) _0x3d047d["roles"]['panels'] = [];
                const _0x22952a = _0x3d047d["roles"]["panels"]['length'];
                _0x3d047d['roles']["panels"]["push"](_0x545a84), save(_0x26841a['guild']['id'], _0x3d047d);
                const _0x526614 = new EmbedBuilder()["setColor"]("#5865F2")["setTitle"](_0x38bddd)["setDescription"](_0x537690 + "\n\n*Aucun rôle configuré. Ajoutes-en dans `/config` → Rôles réaction.*"),
                    _0x5a6e7d = await _0x4d501b['send']({
                        'embeds': [_0x526614],
                        'components': []
                    })['catch'](() => null);
                if (!_0x5a6e7d) return _0x3d047d["roles"]['panels']['pop'](), save(_0x26841a["guild"]['id'], _0x3d047d), _0x26841a['editReply']({
                    'content': "❌ Impossible d'envoyer le message."
                });
                return _0x545a84["messageId"] = _0x5a6e7d['id'], save(_0x26841a['guild']['id'], _0x3d047d), _0x26841a['editReply']({
                    'content': "✅ Panneau créé dans <#" + _0x4d501b['id'] + '>\x20!\x20Ajoute\x20des\x20rôles\x20depuis\x20`/config`\x20→\x20Rôles\x20réaction.'
                });
            }
            if (_0x26841a["commandName"] === 'annonce') {
                const _0x2c4919 = settings(_0x26841a['guild']['id']);
                if (!_0x2c4919["announcements"]?.['enabled'] || !_0x2c4919["announcements"]["channelId"]) return _0x26841a['reply']({
                    'content': '❌\x20Annonces\x20non\x20configurées.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x510cbf = _0x26841a["options"]["getString"]("message");
                if (!_0x510cbf || _0x510cbf["length"] > 0x7d0) return _0x26841a["reply"]({
                    'content': '❌\x20Message\x20vide\x20ou\x20trop\x20long\x20(2000\x20max).',
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x3070ab = _0x26841a["guild"]["channels"]['cache']["get"](_0x2c4919['announcements']['channelId']);
                if (!isSendable(_0x3070ab)) return _0x26841a["reply"]({
                    'content': '❌\x20Salon\x20d\x27annonces\x20invalide.',
                    'flags': MessageFlags['Ephemeral']
                });
                return await _0x3070ab['send']({
                    'embeds': [new EmbedBuilder()['setColor']('#5865F2')['setAuthor']({
                        'name': sanitize(_0x26841a["user"]['tag'], 0x50),
                        'iconURL': _0x26841a["user"]["displayAvatarURL"]()
                    })['setDescription'](sanitize(_0x510cbf, 0x7d0))['setTimestamp']()]
                })['catch'](() => {}), _0x26841a["reply"]({
                    'content': "✅ Annonce envoyée !",
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0x26841a["commandName"] === "rappel") {
                if (!_0x26841a["channel"]?.["isTextBased"]()) return _0x26841a["reply"]({
                    'content': '❌\x20Action\x20impossible\x20dans\x20ce\x20salon.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x136574 = settings(_0x26841a['guild']['id']),
                    _0x10f31f = _0x26841a['options']["getString"]('temps'),
                    _0x595a52 = _0x10f31f["match"](/^(\d+)(s|m|h|j|d)$/i);
                if (!_0x595a52) return _0x26841a["reply"]({
                    'content': t(_0x136574, "remindmeInvalid", {
                        'prefix': '/'
                    }),
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x1ebbba = parseInt(_0x595a52[0x1]),
                    _0x43f4c1 = _0x595a52[0x2]['toLowerCase'](),
                    _0xdc2837 = _0x43f4c1 === 's' ? 0x3e8 : _0x43f4c1 === 'm' ? 0xea60 : _0x43f4c1 === 'h' ? 0x36ee80 : 0x5265c00,
                    _0x1d6da9 = _0x1ebbba * _0xdc2837;
                if (_0x1d6da9 < 0x2710) return _0x26841a["reply"]({
                    'content': "❌ Minimum 10 secondes.",
                    'flags': MessageFlags["Ephemeral"]
                });
                if (_0x1d6da9 > 0x1cf7c5800) return _0x26841a['reply']({
                    'content': "❌ Maximum 90 jours.",
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x1dcc25 = _0x26841a['options']['getString']('message')?.["slice"](0x0, 0x3e8) || "Rappel",
                    _0x5decf2 = getReminders(_0x26841a["guild"]['id']);
                _0x5decf2["push"]({
                    'userId': _0x26841a['user']['id'],
                    'channelId': _0x26841a['channel']['id'],
                    'time': Date['now']() + _0x1d6da9,
                    'text': _0x1dcc25
                }), saveReminders(_0x26841a["guild"]['id']);
                const _0xb8285f = _0x1ebbba + (_0x43f4c1 === 's' ? 's' : _0x43f4c1 === 'm' ? 'min' : _0x43f4c1 === 'h' ? 'h' : 'j');
                return _0x26841a['reply']({
                    'content': t(_0x136574, "remindmeSet", {
                        'time': _0xb8285f
                    }),
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0x26841a["commandName"] === 'anniversaire') {
                const _0x1bcc94 = settings(_0x26841a["guild"]['id']),
                    _0x49ff43 = _0x26841a['options']["getString"]("date"),
                    _0x43e6b8 = _0x49ff43['match'](/^(\d{1,2})\/(\d{1,2})$/);
                if (!_0x43e6b8) return _0x26841a['reply']({
                    'content': tr(_0x1bcc94, 'setbirthdayInvalid'),
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x16775c = parseInt(_0x43e6b8[0x1]),
                    _0xf60d48 = parseInt(_0x43e6b8[0x2]);
                if (_0x16775c < 0x1 || _0x16775c > 0x1f || _0xf60d48 < 0x1 || _0xf60d48 > 0xc) return _0x26841a['reply']({
                    'content': tr(_0x1bcc94, "setbirthdayInvalid"),
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x525f68 = getBirthdays(_0x26841a['guild']['id']);
                return _0x525f68[_0x26841a['user']['id']] = {
                    'day': _0x16775c,
                    'month': _0xf60d48
                }, saveBirthdays(_0x26841a['guild']['id']), _0x26841a['reply']({
                    'content': t(_0x1bcc94, "setbirthdayDone", {
                        'date': _0x16775c + '/' + _0xf60d48
                    }),
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0x26841a['commandName'] === 'nettoyer') {
                if (!_0x26841a['member']?.["permissions"]['has'](PermissionFlagsBits["ModerateMembers"])) return _0x26841a["reply"]({
                    'content': '❌\x20Permission\x20modération\x20requise.',
                    'flags': MessageFlags["Ephemeral"]
                });
                if (!_0x26841a["channel"]?.['isTextBased']()) return _0x26841a["reply"]({
                    'content': "❌ Action impossible dans ce salon.",
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x9c46d2 = Math['min'](0x64, Math["max"](0x1, _0x26841a["options"]["getInteger"]('nombre')));
                if (!_0x9c46d2) return _0x26841a["reply"]({
                    'content': "Usage : `/clear <nombre>`",
                    'flags': MessageFlags["Ephemeral"]
                });
                return await _0x26841a['channel']['bulkDelete'](_0x9c46d2, !![])["catch"](() => {}), await sendRichLog(_0x26841a["guild"], 'moderation', new EmbedBuilder()['setColor']('#FEE75C')['setTitle']('🧹\x20Messages\x20supprimés')['setTimestamp']()['addFields']({
                    'name': "Modérateur",
                    'value': '<@' + _0x26841a['user']['id'] + '>',
                    'inline': !![]
                })["addFields"]({
                    'name': "Salon",
                    'value': '<#' + _0x26841a['channelId'] + '>',
                    'inline': !![]
                })["addFields"]({
                    'name': "Nombre",
                    'value': String(_0x9c46d2),
                    'inline': !![]
                })), _0x26841a['reply']({
                    'content': '🧹\x20' + _0x9c46d2 + " message(s) supprimés.",
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0x26841a['commandName'] === "avertir") {
                if (!_0x26841a["member"]?.['permissions']['has'](PermissionFlagsBits["ModerateMembers"])) return _0x26841a["reply"]({
                    'content': '❌\x20Permission\x20modération\x20requise.',
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x503083 = settings(_0x26841a["guild"]['id']),
                    _0x76ba11 = _0x26841a["options"]["getMember"]('membre');
                if (!_0x76ba11) return _0x26841a['reply']({
                    'content': '❌\x20Membre\x20introuvable.',
                    'flags': MessageFlags['Ephemeral']
                });
                if (_0x76ba11['id'] === _0x26841a['user']['id']) return _0x26841a['reply']({
                    'content': "❌ Tu ne peux pas t'avertir toi-même.",
                    'flags': MessageFlags['Ephemeral']
                });
                if (_0x76ba11['id'] === _0x26841a["guild"]["ownerId"]) return _0x26841a['reply']({
                    'content': '❌\x20Tu\x20ne\x20peux\x20pas\x20avertir\x20le\x20fondateur.',
                    'flags': MessageFlags['Ephemeral']
                });
                if (_0x76ba11["roles"]?.["highest"]?.["position"] >= _0x26841a['member']['roles']['highest']['position'] && _0x26841a['user']['id'] !== _0x26841a['guild']['ownerId']) return _0x26841a['reply']({
                    'content': "❌ Tu ne peux pas avertir ce membre (hiérarchie).",
                    'flags': MessageFlags['Ephemeral']
                });
                if (!_0x76ba11["moderatable"]) return _0x26841a['reply']({
                    'content': '❌\x20Le\x20bot\x20ne\x20peut\x20pas\x20agir\x20sur\x20ce\x20membre.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x4307cc = _0x26841a['options']["getString"]('raison') || tr(_0x503083, "noReason"),
                    _0x4520a2 = getWarns(_0x26841a["guild"]['id']);
                if (!_0x4520a2[_0x76ba11['id']]) _0x4520a2[_0x76ba11['id']] = {
                    'count': 0x0,
                    'history': []
                };
                _0x4520a2[_0x76ba11['id']]["count"]++, _0x4520a2[_0x76ba11['id']]['history']["push"]({
                    'reason': _0x4307cc,
                    'moderatorId': _0x26841a['user']['id'],
                    'date': Date["now"]()
                }), saveWarns(_0x26841a["guild"]['id']);
                const _0x1a63a6 = await checkAutoSanctions(_0x26841a['guild'], _0x76ba11, _0x4307cc, "avertissement manuel");
                if (_0x1a63a6) return await sendRichLog(_0x26841a['guild'], "moderation", new EmbedBuilder()['setColor']("#ED4245")['setTitle']('⚠️\x20Avertissement\x20+\x20Auto-sanction')['setTimestamp']()['addFields']({
                    'name': 'Membre',
                    'value': '<@' + _0x76ba11['id'] + '>',
                    'inline': !![]
                })['addFields']({
                    'name': 'Modérateur',
                    'value': '<@' + _0x26841a["user"]['id'] + '>',
                    'inline': !![]
                })["addFields"]({
                    'name': "Raison",
                    'value': _0x4307cc["slice"](0x0, 0x400)
                })['addFields']({
                    'name': 'Auto-sanction',
                    'value': _0x1a63a6
                })), _0x26841a["reply"]({
                    'content': '⚠️\x20' + _0x76ba11 + '\x20' + tr(_0x503083, 'warned') + '\x0a🔨\x20Auto-sanction\x20:\x20**' + _0x1a63a6 + '**',
                    'flags': MessageFlags["Ephemeral"]
                });
                return await sendRichLog(_0x26841a['guild'], 'moderation', new EmbedBuilder()['setColor']('#FEE75C')['setTitle']('⚠️\x20Avertissement')['setTimestamp']()['addFields']({
                    'name': "Membre",
                    'value': '<@' + _0x76ba11['id'] + '>',
                    'inline': !![]
                })['addFields']({
                    'name': "Modérateur",
                    'value': '<@' + _0x26841a['user']['id'] + '>',
                    'inline': !![]
                })['addFields']({
                    'name': 'Raison',
                    'value': _0x4307cc["slice"](0x0, 0x400)
                })["addFields"]({
                    'name': "Total",
                    'value': _0x4520a2[_0x76ba11['id']]['count'] + '\x20avertissement(s)',
                    'inline': !![]
                })), _0x26841a['reply']({
                    'content': '⚠️\x20' + _0x76ba11 + '\x20' + tr(_0x503083, 'warned') + '\x20(' + _0x4520a2[_0x76ba11['id']]["count"] + '\x20avertissement(s))',
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0x26841a["commandName"] === "rendre-muet") {
                if (!_0x26841a['member']?.['permissions']["has"](PermissionFlagsBits["ModerateMembers"])) return _0x26841a['reply']({
                    'content': '❌\x20Permission\x20modération\x20requise.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x2f8949 = settings(_0x26841a["guild"]['id']),
                    _0x5bd5da = _0x26841a['options']["getMember"]('membre');
                if (!_0x5bd5da) return _0x26841a['reply']({
                    'content': "❌ Membre introuvable.",
                    'flags': MessageFlags['Ephemeral']
                });
                if (_0x5bd5da['id'] === _0x26841a["user"]['id']) return _0x26841a["reply"]({
                    'content': "❌ Tu ne peux pas te rendre muet toi-même.",
                    'flags': MessageFlags['Ephemeral']
                });
                if (_0x5bd5da["roles"]?.["highest"]?.["position"] >= _0x26841a['member']["roles"]["highest"]["position"] && _0x26841a["user"]['id'] !== _0x26841a["guild"]["ownerId"]) return _0x26841a["reply"]({
                    'content': "❌ Tu ne peux pas rendre muet ce membre (hiérarchie).",
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x14842b = Math["min"](0x9d80, Math['max'](0x1, _0x26841a["options"]["getInteger"]('minutes') || 0xa)),
                    _0xfb8aea = _0x26841a["options"]['getString']("raison") || 'Mute\x20DashBot';
                await _0x5bd5da["timeout"](_0x14842b * 0xea60, _0xfb8aea)['catch'](() => {});
                if (!_0x5bd5da['communicationDisabledUntilTimestamp']) return _0x26841a["reply"]({
                    'content': "❌ Impossible de rendre muet ce membre.",
                    'flags': MessageFlags['Ephemeral']
                });
                return await sendRichLog(_0x26841a['guild'], 'moderation', new EmbedBuilder()["setColor"]('#ED4245')['setTitle']("🔇 Membre rendu muet")["setTimestamp"]()['addFields']({
                    'name': 'Membre',
                    'value': '<@' + _0x5bd5da['id'] + '>',
                    'inline': !![]
                })["addFields"]({
                    'name': "Modérateur",
                    'value': '<@' + _0x26841a['user']['id'] + '>',
                    'inline': !![]
                })["addFields"]({
                    'name': 'Durée',
                    'value': _0x14842b + " minutes",
                    'inline': !![]
                })['addFields']({
                    'name': "Raison",
                    'value': _0xfb8aea['slice'](0x0, 0x400)
                })), _0x26841a["reply"]({
                    'content': "🔇 " + _0x5bd5da + '\x20' + tr(_0x2f8949, 'mutedFor') + '\x20' + _0x14842b + '\x20' + tr(_0x2f8949, 'minutes') + '.',
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0x26841a['commandName'] === 'retirer-muet') {
                if (!_0x26841a["member"]?.["permissions"]['has'](PermissionFlagsBits["ModerateMembers"])) return _0x26841a['reply']({
                    'content': "❌ Permission modération requise.",
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x52fa4d = _0x26841a["options"]["getMember"]("membre");
                if (!_0x52fa4d) return _0x26841a["reply"]({
                    'content': '❌\x20Membre\x20introuvable.',
                    'flags': MessageFlags['Ephemeral']
                });
                return await _0x52fa4d['timeout'](null)['catch'](() => {}), await sendRichLog(_0x26841a['guild'], "moderation", new EmbedBuilder()['setColor']("#57F287")["setTitle"]("🔊 Membre démuté")["setTimestamp"]()["addFields"]({
                    'name': "Membre",
                    'value': '<@' + _0x52fa4d['id'] + '>',
                    'inline': !![]
                })['addFields']({
                    'name': 'Modérateur',
                    'value': '<@' + _0x26841a['user']['id'] + '>',
                    'inline': !![]
                })), _0x26841a["reply"]({
                    'content': '✅\x20' + _0x52fa4d + '\x20' + tr(settings(_0x26841a['guild']['id']), "notMuted"),
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0x26841a['commandName'] === 'avertissements') {
                if (!_0x26841a["member"]?.['permissions']['has'](PermissionFlagsBits["ModerateMembers"])) return _0x26841a['reply']({
                    'content': "❌ Permission modération requise.",
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x406298 = _0x26841a['options']['getMember']("membre");
                if (!_0x406298) return _0x26841a["reply"]({
                    'content': "❌ Membre introuvable.",
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x4111fa = getWarns(_0x26841a["guild"]['id'])[_0x406298['id']];
                if (!_0x4111fa || !_0x4111fa['count']) return _0x26841a["reply"]({
                    'content': '✅\x20**' + _0x406298['user']["tag"] + '**\x20n\x27a\x20aucun\x20avertissement.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0xfefb58 = _0x4111fa["history"]["slice"](-0x5)["map"]((_0x5a042b, _0x121429) => '**' + (_0x121429 + 0x1) + ".** " + _0x5a042b['reason'] + " — <@" + _0x5a042b['moderatorId'] + "> (" + new Date(_0x5a042b["date"])["toLocaleDateString"]("fr-FR") + ')')["join"]('\x0a');
                return _0x26841a["reply"]({
                    'content': "⚠️ **" + _0x406298["user"]["tag"] + "** a **" + _0x4111fa['count'] + '**\x20avertissement(s).\x0a\x0a' + _0xfefb58,
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0x26841a["commandName"] === 'restauration') {
                await _0x26841a['deferReply']({
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x2c83e0 = _0x26841a['options']['getString']('id'),
                    _0x5e8855 = await client['channels']['fetch'](DATA_CHANNEL_ID)['catch'](() => null);
                if (!_0x5e8855) return _0x26841a['editReply']("❌ Salon de données introuvable.");
                const _0x271a80 = await _0x5e8855['messages']['fetch'](_0x2c83e0)["catch"](() => null);
                if (!_0x271a80 || !_0x271a80["attachments"]['size']) return _0x26841a['editReply']("❌ Aucune sauvegarde trouvée avec cet ID.");
                const _0x591698 = await fetch(_0x271a80["attachments"]['first']()['url']),
                    _0x1cef8f = await _0x591698['json'](),
                    _0xee4d5d = await restoreBackup(_0x26841a["guild"], _0x1cef8f);
                return _0x26841a['editReply']("✅ Restauration terminée : **" + _0xee4d5d['roles'] + '**\x20rôle(s),\x20**' + _0xee4d5d["categories"] + '**\x20catégorie(s),\x20**' + _0xee4d5d["channels"] + '**\x20salon(s),\x20**' + _0xee4d5d['messages'] + "** message(s) restaurés.");
            }
        }
        if (!_0x26841a["guild"]) return _0x26841a['reply']({
            'content': 'Cette\x20interaction\x20est\x20disponible\x20uniquement\x20sur\x20un\x20serveur.',
            'flags': MessageFlags["Ephemeral"]
        });
        if (!checkRateLimit(_0x26841a["user"]['id'], 0xf, 0x2710)) return _0x26841a['reply']({
            'content': '⏳\x20Trop\x20de\x20requêtes.\x20Réessaie\x20dans\x20quelques\x20secondes.',
            'flags': MessageFlags["Ephemeral"]
        });
        if (_0x26841a['isButton']() && (_0x26841a['customId'] || '')['startsWith']('rp:')) {
            const _0x2ef999 = (_0x26841a["customId"] || '')['split'](':'),
                _0x45a0e0 = Number(_0x2ef999[0x1]),
                _0x342bb7 = Number(_0x2ef999[0x2]),
                _0x494611 = settings(_0x26841a['guild']['id']),
                _0x15dacc = _0x494611["roles"]['panels']?.[_0x45a0e0],
                _0x39e21c = _0x15dacc?.['roles']?.[_0x342bb7];
            if (!_0x15dacc || !_0x39e21c) return _0x26841a["reply"]({
                'content': "Rôle introuvable.",
                'flags': MessageFlags["Ephemeral"]
            });
            const _0x273432 = _0x26841a["guild"]['roles']["cache"]["get"](_0x39e21c['roleId']);
            if (!_0x273432) return _0x26841a['reply']({
                'content': "Rôle supprimé sur le serveur.",
                'flags': MessageFlags['Ephemeral']
            });
            const _0x26508d = await _0x26841a['guild']['members']['fetch'](_0x26841a['user']['id'])['catch'](() => null);
            if (!_0x26508d) return _0x26841a['reply']({
                'content': 'Membre\x20introuvable.',
                'flags': MessageFlags["Ephemeral"]
            });
            return _0x26508d["roles"]['cache']["has"](_0x273432['id']) ? (await _0x26508d['roles']['remove'](_0x273432, 'Rôle\x20réaction\x20retiré')["catch"](() => {}), _0x26841a["reply"]({
                'content': '❌\x20Rôle\x20`' + _0x39e21c['label'] + '`\x20retiré.',
                'flags': MessageFlags["Ephemeral"]
            })) : (await _0x26508d["roles"]["add"](_0x273432, 'Rôle\x20réaction\x20ajouté')["catch"](() => {}), _0x26841a["reply"]({
                'content': '✅\x20Rôle\x20`' + _0x39e21c['label'] + "` ajouté.",
                'flags': MessageFlags['Ephemeral']
            }));
        }
        if (!isAdmin(_0x26841a) && (_0x26841a['customId'] || '')['startsWith']('cfg:')) return _0x26841a['reply']({
            'content': tr(settings(_0x26841a["guild"]['id']), "admin"),
            'flags': MessageFlags["Ephemeral"]
        });
        const _0xfef653 = _0x26841a["isButton"]() && ['cfg:rules', "cfg:send-rules", 'cfg:setup-captcha', "cfg:list-cats", "cfg:build-server", "cfg:add-cat"]['some'](_0x3b1cdb => (_0x26841a['customId'] || '')['startsWith'](_0x3b1cdb));
        if (_0xfef653) await _0x26841a["deferReply"]({
            'flags': MessageFlags["Ephemeral"]
        })['catch'](() => {});
        const _0xb8fe56 = _0x26841a['customId'] || '',
            _0x5885c5 = settings(_0x26841a["guild"]['id']);
        if (_0x26841a['isButton']() && _0xb8fe56['startsWith']('tv:')) {
            const _0xtv = _0xb8fe56.split(':'),
                _0xtvAct = _0xtv[1],
                _0xtvCh = _0xtv[2],
                _0xtvChan = _0x26841a['guild']['channels']['cache']['get'](_0xtvCh);
            if (_0xtvChan) {
                const _0xtvTop = _0xtvChan['topic'] || '';
                if (_0xtvTop['startsWith']('tv:') && _0xtvTop['slice'](3) === _0x26841a['user']['id']) {
                    if (_0xtvAct === 'rename') _0x26841a['showModal'](modal('tv:modal:' + _0xtvCh, 'Renommer\x20le\x20salon', [
                        ['name', 'Nouveau\x20nom', _0xtvChan['name'], TextInputStyle['Short'], true]
                    ]));
                    else if (_0xtvAct === 'limit') _0x26841a['showModal'](modal('tv:modal:' + _0xtvCh, 'Limite\x20de\x20membres', [
                        ['limit', 'Limite\x20(max\x200)', String(_0xtvChan['userLimit'] || ''), TextInputStyle['Short'], false]
                    ]));
                    else if (_0xtvAct === 'lock' || _0xtvAct === 'unlock') {
                        const _0xtvLock = _0xtvAct === 'lock';
                        _0xtvChan['permissionOverwrites']['edit'](_0x26841a['guild']['id'], {
                            'Connect': !_0xtvLock
                        })['then'](() => _0x26841a['reply']({
                            'content': _0xtvLock ? 'Salon\x20verrouill.' : 'Salon\x20d.verrouill.',
                            'flags': MessageFlags['Ephemeral']
                        })).catch(() => {});
                    } else if (_0xtvAct === 'hide' || _0xtvAct === 'show') {
                        const _0xtvHide = _0xtvAct === 'hide';
                        _0xtvChan['permissionOverwrites']['edit'](_0x26841a['guild']['id'], {
                            'ViewChannel': !_0xtvHide
                        })['then'](() => _0x26841a['reply']({
                            'content': _0xtvHide ? 'Salon\x20masqu.' : 'Salon\x20affich.',
                            'flags': MessageFlags['Ephemeral']
                        })).catch(() => {});
                    } else if (_0xtvAct === 'permit') _0x26841a['showModal'](modal('tv:modal-permit:' + _0xtvCh, 'Autoriser\x20un\x20membre', [
                        ['user', 'ID\x20du\x20membre', '', TextInputStyle['Short'], true]
                    ]));
                    else if (_0xtvAct === 'kick') _0x26841a['showModal'](modal('tv:modal-kick:' + _0xtvCh, 'Expulser\x20un\x20membre', [
                        ['user', 'ID\x20du\x20membre', '', TextInputStyle['Short'], true]
                    ]));
                    else if (_0xtvAct === 'transfer') _0x26841a['showModal'](modal('tv:modal-transfer:' + _0xtvCh, 'Transf\xe9rer\x20la\x20propri\xe9t\xe9', [
                        ['user', 'ID\x20du\x20nouveau\x20propri\xe9taire', '', TextInputStyle['Short'], true]
                    ]));
                }
            }
            return _0x26841a['reply']({
                'content': 'Action\x20impossible.',
                'flags': MessageFlags['Ephemeral']
            })['catch'](() => {});
        }
        if (_0x26841a["isButton"]() && _0xb8fe56["startsWith"]("cfg:back:")) return replyPage(_0x26841a, _0xb8fe56['slice'](0x9));
        if (_0x26841a['isButton']() && _0xb8fe56['startsWith']("cfg:reset:")) {
            const _0x28066c = _0xb8fe56["slice"](0xa),
                _0x226c58 = ['logs'];
            if (_0x226c58['includes'](_0x28066c)) return replyPage(_0x26841a, _0x28066c);
            const _0x1c5506 = {
                'voices': "tempVoices",
                'welcome-arrival': 'welcome',
                'welcome-departure': "welcome",
                'welcome-rules': 'rules',
                'welcome-captcha': "captcha",
                'welcome-autorole': "autoRole",
                'protectionFiltres': 'security'
            };
            if (_0x28066c["startsWith"]('autoMod-')) return _0x5885c5['autoMod'][_0x28066c["slice"](0x8)] = JSON["parse"](JSON['stringify'](DEFAULTS['autoMod'][_0x28066c['slice'](0x8)])), save(_0x26841a["guild"]['id'], _0x5885c5), replyPage(_0x26841a, _0x28066c);
            const _0x3cf8f6 = _0x1c5506[_0x28066c] || _0x28066c;
            return DEFAULTS[_0x3cf8f6] && (_0x5885c5[_0x3cf8f6] = JSON["parse"](JSON['stringify'](DEFAULTS[_0x3cf8f6])), save(_0x26841a["guild"]['id'], _0x5885c5)), replyPage(_0x26841a, _0x28066c);
        }
        if (_0x26841a['isButton']() && _0xb8fe56['startsWith']("cfg:page:")) {
            const _0x2c7531 = _0xb8fe56["slice"](0x9);
            if (_0x2c7531 === "captcha") {
                await _0x26841a["deferUpdate"]();
                if (_0x5885c5['captcha']["enabled"]) await setupCaptcha(_0x26841a["guild"], _0x5885c5);
                return _0x26841a['editReply'](pagePayload(_0x26841a["guild"], _0x2c7531));
            }
            return replyPage(_0x26841a, _0x2c7531);
        }
        if (_0x26841a['isStringSelectMenu']() && (_0xb8fe56 === "cfg:page" || _0xb8fe56 === 'cfg:page2')) return replyPage(_0x26841a, _0x26841a['values'][0x0]);
        if (_0x26841a["isStringSelectMenu"]() && _0xb8fe56 === "cfg:select-panel") return replyPage(_0x26841a, _0x26841a['values'][0x0]);
        if (_0x26841a['isButton']() && (_0xb8fe56 === "ticket:panel" || _0xb8fe56 === 'recruitment:panel')) {
            const _0x184e5b = _0xb8fe56 === 'ticket:panel' ? "ticket" : 'recruitment',
                _0xe5b7b8 = _0x5885c5[_0x184e5b];
            if (!_0xe5b7b8['enabled'] || !_0xe5b7b8["channelId"] || !_0xe5b7b8["categoryId"]) {
                const _0x44ed40 = [];
                if (!_0xe5b7b8["enabled"]) _0x44ed40["push"]("Activé");
                if (!_0xe5b7b8["channelId"]) _0x44ed40["push"]("Salon panneau");
                if (!_0xe5b7b8["categoryId"]) _0x44ed40["push"]("Catégorie");
                return _0x26841a["reply"]({
                    'content': "❌ Module non configuré : **" + _0x44ed40["join"](',\x20') + '**\x20manquant(s).\x20Configure\x20d\x27abord\x20dans\x20`/config`.',
                    'flags': MessageFlags['Ephemeral']
                });
            }
            await _0x26841a["deferReply"]({
                'flags': MessageFlags["Ephemeral"]
            });
            const _0x395a84 = await createTicketChannel(_0x26841a["guild"], _0x5885c5, _0x26841a["user"], '', _0x184e5b);
            if (!_0x395a84) return _0x26841a["editReply"]({
                'content': "Erreur de création (catégorie invalide ou permissions manquantes)."
            });
            const _0x515f74 = _0x184e5b === 'ticket' ? '🎫' : '📝',
                _0xd4a1 = new Date(),
                _0xf2b3 = (_0xd4a1['getDate']()['toString']()['padStart'](0x2, '0')) + '/' + ((_0xd4a1['getMonth']() + 0x1)['toString']()['padStart'](0x2, '0')) + '/' + _0xd4a1['getFullYear']() + '\x20à\x20' + (_0xd4a1['getHours']()['toString']()['padStart'](0x2, '0')) + ':' + (_0xd4a1['getMinutes']()['toString']()['padStart'](0x2, '0')),
                _0x88ffa8 = new EmbedBuilder()['setColor']('#5865F2')['setTitle'](_0x515f74 + '\x20' + (_0x184e5b === 'ticket' ? 'Nouveau\x20ticket' : 'Nouvelle\x20candidature'))['setDescription']('Une\x20nouvelle\x20demande\x20vient\x20d\x27être\x20ouverte\x20par\x20<@' + _0x26841a["user"]['id'] + '>.')['addFields']({
                    'name': 'Date\x20de\x20création',
                    'value': _0xf2b3
                })['setFooter']({
                    'text': 'Un\x20membre\x20du\x20staff\x20peut\x20maintenant\x20prendre\x20en\x20charge\x20cette\x20demande.'
                }),
                _0x38070c = row(button(_0x184e5b + ':claim:' + _0x395a84['id'], "Prendre en charge", ButtonStyle["Success"], '✅'), button(_0x184e5b + ":archive:" + _0x395a84['id'], "Archiver", ButtonStyle["Secondary"], '📋'), button(_0x184e5b + ':delete:' + _0x395a84['id'], 'Supprimer', ButtonStyle['Danger'], '🗑️'));
            await _0x395a84["send"]({
                'content': '<@' + _0x26841a["user"]['id'] + '\x20<@&1528409629493690398>',
                'embeds': [_0x88ffa8],
                'components': [_0x38070c]
            })['catch'](() => {});
            if (_0x184e5b === 'recruitment' && _0x5885c5['recruitment']['recruitMessage']) await _0x395a84['send']({
                'content': _0x5885c5['recruitment']['recruitMessage']
            })['catch'](() => {});
            const _0x15acfd = _0x5885c5["logs"]['channelId'],
                _0x347b60 = _0x15acfd && _0x26841a['guild']["channels"]["cache"]["get"](_0x15acfd);
            if (isSendable(_0x347b60)) {
                const _0x26eb80 = _0x184e5b === "ticket" ? "🎫 Ticket créé" : "📝 Candidature créée";
                await _0x347b60["send"]({
                    'embeds': [new EmbedBuilder()["setColor"]("#5865F2")['setTitle'](_0x26eb80)["setTimestamp"]()["addFields"]({
                        'name': 'Utilisateur',
                        'value': '<@' + _0x26841a["user"]['id'] + '>',
                        'inline': !![]
                    })['addFields']({
                        'name': 'Salon',
                        'value': '<#' + _0x395a84['id'] + '>',
                        'inline': !![]
                    })],
                    'components': [new ActionRowBuilder()['addComponents'](new ButtonBuilder()["setURL"]('https://discord.com/channels/' + _0x26841a['guild']['id'] + '/' + _0x395a84['id'])["setLabel"]("Aller au salon")["setStyle"](ButtonStyle["Link"]))]
                })["catch"](() => {});
            }
            return _0x26841a["editReply"]({
                'content': t(_0x5885c5, _0x184e5b === "ticket" ? 'ticketCreated' : 'recruitCreated') + '\x20<#' + _0x395a84['id'] + '>'
            });
        }
        if (_0x26841a['isStringSelectMenu']() && _0xb8fe56['startsWith']("cfg:choose-channel:")) {
            const _0x56d169 = _0xb8fe56['slice'](0x13);
            if (_0x56d169 === "autoMod:exemptChannels") return _0x5885c5["autoMod"]["exemptChannels"]["push"](_0x26841a['values'][0x0]), save(_0x26841a["guild"]['id'], _0x5885c5), _0x26841a["update"](pagePayload(_0x26841a["guild"], 'autoMod-exceptions'));
            setPath(_0x5885c5, _0x56d169, _0x26841a['values'][0x0]), save(_0x26841a["guild"]['id'], _0x5885c5);
            const _0x49d031 = pathToPage(_0x56d169);
            return _0x26841a["update"](pagePayload(_0x26841a["guild"], _0x49d031));
        }
        if (_0x26841a['isStringSelectMenu']() && _0xb8fe56["startsWith"]('cfg:choose-role:')) {
            const _0x1f8ae5 = _0xb8fe56['slice'](0x10);
            if (_0x1f8ae5 === "autoMod:exemptRoles") return _0x5885c5['autoMod']['exemptRoles']["push"](_0x26841a["values"][0x0]), save(_0x26841a['guild']['id'], _0x5885c5), _0x26841a['update'](pagePayload(_0x26841a['guild'], "autoMod-exceptions"));
            setPath(_0x5885c5, _0x1f8ae5, _0x26841a['values'][0x0]), save(_0x26841a['guild']['id'], _0x5885c5);
            const _0x7f8a36 = pathToPage(_0x1f8ae5);
            return _0x26841a['update'](pagePayload(_0x26841a["guild"], _0x7f8a36));
        }
        if (_0x26841a["isButton"]()) {
            if (_0xb8fe56 === 'cfg:toggle:welcome:leave') return _0x5885c5['welcome']['leaveEnabled'] = !_0x5885c5['welcome']["leaveEnabled"], save(_0x26841a['guild']['id'], _0x5885c5), replyPage(_0x26841a, "welcome-departure");
            if (_0xb8fe56['startsWith']('cfg:toggle:autoMod:')) {
                const _0x291b1c = _0xb8fe56["slice"](0x12),
                    _0x5a84cc = _0x5885c5['autoMod'][_0x291b1c];
                return _0x5a84cc && (_0x5a84cc["enabled"] = !_0x5a84cc["enabled"], save(_0x26841a["guild"]['id'], _0x5885c5)), replyPage(_0x26841a, "autoMod-" + _0x291b1c);
            }
            if (_0xb8fe56 === 'cfg:protectionFiltres:enableAll') return _0x5885c5['security']['antiSpam'] = !![], _0x5885c5['security']['antiLinks'] = !![], _0x5885c5['security']['antiInvites'] = !![], _0x5885c5["antiRaid"]['enabled'] = !![], _0x5885c5['antiBot']["enabled"] = !![], _0x5885c5['antiRecentAccounts']['enabled'] = !![], _0x5885c5["antiMentions"]['enabled'] = !![], _0x5885c5["antiInsults"]['enabled'] = !![], save(_0x26841a['guild']['id'], _0x5885c5), replyPage(_0x26841a, "protectionFiltres");
            if (_0xb8fe56 === "cfg:protectionFiltres:disableAll") return _0x5885c5["security"]["antiSpam"] = ![], _0x5885c5["security"]['antiLinks'] = ![], _0x5885c5["security"]['antiInvites'] = ![], _0x5885c5["antiRaid"]['enabled'] = ![], _0x5885c5['antiBot']['enabled'] = ![], _0x5885c5["antiRecentAccounts"]["enabled"] = ![], _0x5885c5["antiMentions"]['enabled'] = ![], _0x5885c5['antiInsults']["enabled"] = ![], save(_0x26841a['guild']['id'], _0x5885c5), replyPage(_0x26841a, "protectionFiltres");
            if (_0xb8fe56 === 'cfg:autoMod:enableAll') {
                const _0x385b56 = _0x5885c5['autoMod'];
                for (const _0xb4ab3e of ["spam", 'mentions', 'links', "invites", "insults", 'wordBlacklist', 'raid', "recentAccounts", "botProtection"])
                    if (_0x385b56[_0xb4ab3e]) _0x385b56[_0xb4ab3e]['enabled'] = !![];
                return save(_0x26841a['guild']['id'], _0x5885c5), replyPage(_0x26841a, 'autoMod');
            }
            if (_0xb8fe56 === 'cfg:autoMod:disableAll') {
                const _0x33b49a = _0x5885c5['autoMod'];
                for (const _0x1734da of ['spam', 'mentions', "links", 'invites', "insults", 'wordBlacklist', 'raid', 'recentAccounts', 'botProtection'])
                    if (_0x33b49a[_0x1734da]) _0x33b49a[_0x1734da]['enabled'] = ![];
                return save(_0x26841a['guild']['id'], _0x5885c5), replyPage(_0x26841a, 'autoMod');
            }
            if (_0xb8fe56 === "cfg:autoMod:toggleWarn") return _0x5885c5["autoMod"]["autoWarn"] = !_0x5885c5["autoMod"]["autoWarn"], save(_0x26841a['guild']['id'], _0x5885c5), replyPage(_0x26841a, 'autoMod');
            if (_0xb8fe56 === "cfg:autoMod:clearExemptions") return _0x5885c5['autoMod']["exemptRoles"] = [], _0x5885c5['autoMod']["exemptChannels"] = [], _0x5885c5["autoMod"]["exemptMembers"] = [], save(_0x26841a['guild']['id'], _0x5885c5), replyPage(_0x26841a, 'autoMod-exceptions');
            if (_0xb8fe56 === 'cfg:autoMod:exemptRole') return chooseRole(_0x26841a, "autoMod:exemptRoles");
            if (_0xb8fe56 === "cfg:autoMod:exemptChannel") return chooseChannel(_0x26841a, 'autoMod:exemptChannels', "text");
            if (_0xb8fe56 === "cfg:autoMod:exemptMember") return _0x26841a['reply']({
                'content': 'Utilise\x20l\x27ID\x20du\x20membre\x20(clic\x20droit\x20→\x20ID).',
                'flags': MessageFlags["Ephemeral"]
            })["then"](() => {});
            if (_0xb8fe56["startsWith"]('cfg:autoMod:addWord:')) {
                const _0x52cee2 = _0xb8fe56['slice'](0x12);
                return _0x26841a["showModal"](modal("cfg:modal-addWord:" + _0x52cee2, tr(_0x5885c5, 'addWord'), [
                    ['word', tr(_0x5885c5, 'word'), '', TextInputStyle['Short'], !![]]
                ]));
            }
            if (_0xb8fe56['startsWith']('cfg:autoMod:listWords:')) {
                const _0xc8709 = _0xb8fe56["slice"](0x13),
                    _0x46a0b1 = _0x5885c5["autoMod"][_0xc8709]?.["words"];
                return _0x26841a["reply"]({
                    'content': _0x46a0b1 && _0x46a0b1["length"] ? _0x46a0b1["map"]((_0x2b49ba, _0x42f625) => _0x42f625 + 0x1 + ". `" + _0x2b49ba + '`')["join"]('\x0a') : tr(_0x5885c5, "none"),
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0xb8fe56["startsWith"]("cfg:edit-autoMod:")) {
                const _0x546346 = _0xb8fe56["slice"](0x10),
                    _0x5ca04f = _0x5885c5["autoMod"][_0x546346];
                if (!_0x5ca04f) return;
                const _0x1a4263 = [];
                if (_0x5ca04f['maxMessages'] !== undefined) _0x1a4263['push'](["maxMessages", tr(_0x5885c5, "maxMessages"), _0x5ca04f["maxMessages"], TextInputStyle["Short"], !![]]);
                if (_0x5ca04f['intervalSeconds'] !== undefined) _0x1a4263["push"](["intervalSeconds", tr(_0x5885c5, 'spamWindow'), _0x5ca04f["intervalSeconds"], TextInputStyle['Short'], !![]]);
                if (_0x5ca04f['maxMentions'] !== undefined) _0x1a4263['push'](["maxMentions", tr(_0x5885c5, "maxMentions"), _0x5ca04f["maxMentions"], TextInputStyle["Short"], !![]]);
                if (_0x5ca04f['maxDays'] !== undefined) _0x1a4263['push'](["maxDays", tr(_0x5885c5, 'maxDays'), _0x5ca04f['maxDays'], TextInputStyle["Short"], !![]]);
                if (_0x5ca04f["maxJoins"] !== undefined) _0x1a4263['push'](["maxJoins", tr(_0x5885c5, 'maxJoins'), _0x5ca04f["maxJoins"], TextInputStyle["Short"], !![]]);
                if (_0x5ca04f['intervalMinutes'] !== undefined) _0x1a4263["push"](['intervalMinutes', tr(_0x5885c5, "intervalMinutes"), _0x5ca04f["intervalMinutes"], TextInputStyle['Short'], !![]]);
                if (_0x1a4263['length']) return _0x26841a['showModal'](modal('cfg:modal-autoMod:' + _0x546346, tr(_0x5885c5, 'edit'), _0x1a4263));
            }
            if (_0xb8fe56 === "cfg:toggle:autoSanctions:resetOnAction") return _0x5885c5['autoSanctions']['resetOnAction'] = !_0x5885c5["autoSanctions"]["resetOnAction"], save(_0x26841a["guild"]['id'], _0x5885c5), replyPage(_0x26841a, 'autoSanctions');
            if (_0xb8fe56 === 'cfg:toggle:rules:blockAccess') return _0x5885c5['rules']['blockAccess'] = !_0x5885c5["rules"]['blockAccess'], save(_0x26841a["guild"]['id'], _0x5885c5), replyPage(_0x26841a, "welcome-rules");
            if (_0xb8fe56 === 'cfg:edit-autoSanctions') {
                const _0x51c7c4 = _0x5885c5["autoSanctions"];
                return _0x26841a['showModal'](modal('cfg:modal-autoSanctions', tr(_0x5885c5, 'autoSanctions'), [
                    ["warningsBeforeTimeout", tr(_0x5885c5, 'warningsBeforeTimeout'), _0x51c7c4['warningsBeforeTimeout'], TextInputStyle["Short"], !![]],
                    ["timeoutMinutes", tr(_0x5885c5, 'timeoutMinutes'), _0x51c7c4['timeoutMinutes'], TextInputStyle['Short'], !![]],
                    ['warningsBeforeKick', tr(_0x5885c5, 'warningsBeforeKick'), _0x51c7c4["warningsBeforeKick"], TextInputStyle['Short'], !![]],
                    ['warningsBeforeBan', tr(_0x5885c5, "warningsBeforeBan"), _0x51c7c4['warningsBeforeBan'], TextInputStyle['Short'], !![]]
                ]));
            }
            if (_0xb8fe56["startsWith"]('cfg:toggle:')) {
                const _0x4e2c25 = _0xb8fe56['slice'](0xb);
                if (_0x4e2c25 === 'autoMod') return _0x5885c5["autoMod"]['enabled'] = !_0x5885c5['autoMod']['enabled'], save(_0x26841a["guild"]['id'], _0x5885c5), replyPage(_0x26841a, "autoMod");
                if (_0x4e2c25 === 'tempVoices') return _0x5885c5['tempVoices']['enabled'] = !_0x5885c5['tempVoices']['enabled'], save(_0x26841a['guild']['id'], _0x5885c5), replyPage(_0x26841a, 'voices');
                const _0x1d286d = _0x4e2c25 === "voices" ? _0x5885c5["tempVoices"] : _0x5885c5[_0x4e2c25];
                if (!_0x1d286d) return _0x26841a['reply']({
                    'content': "❌ Module inconnu.",
                    'flags': MessageFlags["Ephemeral"]
                });
                _0x1d286d['enabled'] = !_0x1d286d["enabled"], save(_0x26841a["guild"]['id'], _0x5885c5);
                const _0x27d547 = {
                    'rules': 'welcome-rules',
                    'captcha': "welcome-captcha",
                    'autoRole': "welcome-autorole",
                    'welcome': 'welcome-arrival',
                    'security': 'protectionFiltres',
                    'moderation': "moderation"
                };
                if (_0x4e2c25 === 'captcha' && _0x1d286d["enabled"]) return await _0x26841a["deferUpdate"](), await setupCaptcha(_0x26841a['guild'], _0x5885c5), _0x26841a['editReply'](pagePayload(_0x26841a['guild'], _0x27d547[_0x4e2c25] || _0x4e2c25));
                return replyPage(_0x26841a, _0x27d547[_0x4e2c25] || _0x4e2c25);
            }
            if (_0xb8fe56 === 'cfg:setup-captcha') return await setupCaptcha(_0x26841a["guild"], _0x5885c5), _0x26841a['editReply']('✅\x20Captcha\x20configuré.');
            if (_0xb8fe56 === "cfg:setup-voices") return await _0x26841a["deferUpdate"](), await setupTemporaryVoices(_0x26841a["guild"], _0x5885c5), _0x26841a['editReply'](pagePayload(_0x26841a["guild"], 'voices'));
            if (_0xb8fe56['startsWith']('cfg:add-role:') && _0xb8fe56['endsWith'](":support")) {
                const _0x57cbc3 = _0xb8fe56['slice'](0xd, -0x8),
                    _0x563634 = [..._0x26841a['guild']["roles"]["cache"]["values"]()]["filter"](_0x59b1cb => _0x59b1cb['name'] !== '@everyone' && !_0x59b1cb['managed'])['slice'](0x0, 0x19);
                if (!_0x563634["length"]) return _0x26841a["reply"]({
                    'content': tr(_0x5885c5, "noRoleCompat"),
                    'flags': MessageFlags['Ephemeral']
                });
                return _0x26841a["reply"]({
                    'content': "Choisis un rôle support :",
                    'components': [row(new StringSelectMenuBuilder()['setCustomId']("cfg:choose-role-arr:" + _0x57cbc3 + ':supportRoleIds')['setPlaceholder']("Sélectionner un rôle")['addOptions'](_0x563634['map'](_0x2bd883 => ({
                        'label': _0x2bd883["name"]['slice'](0x0, 0x64),
                        'value': _0x2bd883['id']
                    }))))],
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0xb8fe56['startsWith']('cfg:list-role:') && _0xb8fe56['endsWith'](':support')) {
                const _0x350bb = _0xb8fe56["slice"](0xe, -0x8),
                    _0x52d558 = _0x5885c5[_0x350bb]["supportRoleIds"] || [];
                return _0x26841a['reply']({
                    'content': _0x52d558["length"] ? _0x52d558['map'](_0x1ede2c => "<@&" + _0x1ede2c + '>')["join"](',\x20') : tr(_0x5885c5, "noRoles"),
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0xb8fe56 === 'cfg:edit-recruit-msg') return _0x26841a['showModal'](modal('cfg:modal-recruit-msg', 'Modifier\x20le\x20message\x20de\x20candidature', [
                ['message', 'Message', _0x5885c5['recruitment']['recruitMessage'], TextInputStyle['Paragraph'], ![]]
            ]));
            if (_0xb8fe56['startsWith']("cfg:add-reason:")) {
                const _0x37f86a = _0xb8fe56['slice'](0xf);
                return _0x26841a["showModal"](modal("cfg:modal-reason:" + _0x37f86a, "Ajouter une raison", [
                    ["reason", 'Raison', '', TextInputStyle["Short"], !![]]
                ]));
            }
            if (_0xb8fe56["startsWith"]('cfg:list-reason:')) {
                const _0x1e176e = _0xb8fe56['slice'](0x10);
                return _0x26841a["reply"]({
                    'content': _0x5885c5[_0x1e176e]['reasons']['length'] ? _0x5885c5[_0x1e176e]['reasons']["join"]('\x20·\x20') : tr(_0x5885c5, "noReasons"),
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0xb8fe56["startsWith"]('cfg:send-panel:')) {
                const _0x17608b = _0xb8fe56["slice"](0xf);
                if (!_0x5885c5[_0x17608b]['enabled']) return _0x26841a['reply']({
                    'content': tr(_0x5885c5, "enableFirst"),
                    'flags': MessageFlags["Ephemeral"]
                });
                if (!_0x5885c5[_0x17608b]["channelId"]) return _0x26841a['reply']({
                    'content': tr(_0x5885c5, "configureChannelFirst"),
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x2e56a5 = _0x26841a['guild']['channels']["cache"]['get'](_0x5885c5[_0x17608b]["channelId"]);
                if (!isSendable(_0x2e56a5)) return _0x26841a['reply']({
                    'content': tr(_0x5885c5, 'channelNotExist'),
                    'flags': MessageFlags["Ephemeral"]
                });
                return await _0x2e56a5['send'](getPanelEmbed(_0x26841a['guild'], _0x5885c5, _0x17608b)), _0x26841a["reply"]({
                    'content': tr(_0x5885c5, 'panelSent') + " <#" + _0x5885c5[_0x17608b]["channelId"] + '>',
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0xb8fe56['startsWith']('ticket:claim:') || _0xb8fe56["startsWith"]('recruitment:claim:')) {
                const _0x3f264c = _0xb8fe56['startsWith']('ticket:') ? "ticket" : 'recruitment';
                if (!isSupport(_0x26841a, _0x5885c5, _0x3f264c)) return _0x26841a["reply"]({
                    'content': tr(_0x5885c5, 'noPermission'),
                    'flags': MessageFlags['Ephemeral']
                });
                await _0x26841a['reply']('✅\x20' + tr(_0x5885c5, 'claimMsg') + '\x20<@' + _0x26841a['user']['id'] + '>');
                const _0x2eb0fb = _0x5885c5["logs"]["channelId"],
                    _0x338de9 = _0x2eb0fb && _0x26841a['guild']['channels']['cache']['get'](_0x2eb0fb);
                if (isSendable(_0x338de9)) await _0x338de9['send']({
                    'embeds': [new EmbedBuilder()["setColor"]("#57F287")["setTitle"](_0x3f264c === 'ticket' ? '✅\x20Ticket\x20pris\x20en\x20charge' : "✅ Candidature prise en charge")['setTimestamp']()['addFields']({
                        'name': 'Modérateur',
                        'value': '<@' + _0x26841a["user"]['id'] + '>',
                        'inline': !![]
                    })["addFields"]({
                        'name': "Salon",
                        'value': '#' + _0x26841a['channel']['name'],
                        'inline': !![]
                    })]
                })['catch'](() => {});
            }
            if (_0xb8fe56['startsWith']("ticket:archive:") || _0xb8fe56['startsWith']("recruitment:archive:")) {
                const _0x1372a8 = _0xb8fe56["startsWith"]("ticket:") ? "ticket" : "recruitment";
                if (!isSupport(_0x26841a, _0x5885c5, _0x1372a8)) return _0x26841a['reply']({
                    'content': tr(_0x5885c5, 'noPermission'),
                    'flags': MessageFlags["Ephemeral"]
                });
                await _0x26841a['deferReply']();
                const _0x2ec803 = await generateTranscript(_0x26841a["channel"]),
                    _0x166d0e = new AttachmentBuilder(_0x2ec803, {
                        'name': 'transcript-' + _0x26841a['channel']["name"] + '.html'
                    }),
                    _0x3522fd = _0x1372a8 === "ticket" ? 'logTicketArchive' : 'logRecruitArchive';
                let _0x4b2228 = _0x5885c5['logs']["channelId"],
                    _0x4351b1 = _0x4b2228 && _0x26841a['guild']['channels']["cache"]["get"](_0x4b2228);
                isSendable(_0x4351b1) && await _0x4351b1['send']({
                    'embeds': [new EmbedBuilder()["setColor"]('#F1C40F')["setTitle"](_0x1372a8 === 'ticket' ? '📋\x20Ticket\x20archivé' : '📋\x20Candidature\x20archivée')['setTimestamp']()["addFields"]({
                        'name': "Modérateur",
                        'value': '<@' + _0x26841a["user"]['id'] + '>',
                        'inline': !![]
                    })['addFields']({
                        'name': 'Salon',
                        'value': '#' + _0x26841a["channel"]["name"],
                        'inline': !![]
                    })],
                    'files': [_0x166d0e]
                })["catch"](() => {}), await _0x26841a["editReply"](tr(_0x5885c5, "archiveMsg")), setTimeout(() => _0x26841a['channel']['delete']('Ticket\x20archivé')["catch"](() => {}), 0xbb8);
            }
            if (_0xb8fe56["startsWith"]('ticket:delete:') || _0xb8fe56["startsWith"]('recruitment:delete:')) {
                const _0x1ada5f = _0xb8fe56['startsWith']("ticket:") ? 'ticket' : "recruitment";
                if (!isSupport(_0x26841a, _0x5885c5, _0x1ada5f)) return _0x26841a['reply']({
                    'content': tr(_0x5885c5, "noPermission"),
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x48eeaf = _0x1ada5f === "ticket" ? "logTicketDelete" : 'logRecruitDelete';
                await _0x26841a['reply'](tr(_0x5885c5, "deleteCountdown"));
                const _0x2d4546 = _0x5885c5["logs"]['channelId'],
                    _0x482550 = _0x2d4546 && _0x26841a['guild']['channels']["cache"]["get"](_0x2d4546);
                if (isSendable(_0x482550)) await _0x482550["send"]({
                    'embeds': [new EmbedBuilder()["setColor"]("#ED4245")['setTitle'](_0x1ada5f === "ticket" ? '🗑️\x20Ticket\x20supprimé' : "🗑️ Candidature supprimée")["setTimestamp"]()["addFields"]({
                        'name': 'Modérateur',
                        'value': '<@' + _0x26841a["user"]['id'] + '>',
                        'inline': !![]
                    })["addFields"]({
                        'name': 'Salon',
                        'value': '#' + _0x26841a['channel']['name'],
                        'inline': !![]
                    })]
                })["catch"](() => {});
                setTimeout(() => _0x26841a["channel"]["delete"]('Ticket\x20supprimé')["catch"](() => {}), 0x1f40);
            }
            if (_0xb8fe56 === 'cfg:add-cat-sc') return _0x26841a["showModal"](modal('cfg:modal-cat-sc', "Ajouter une catégorie", [
                ["name", 'Nom\x20de\x20la\x20catégorie', '', TextInputStyle['Short'], !![]],
                ["private", "Privée / (oui/non)", "non", TextInputStyle['Short'], !![]]
            ]));
            if (_0xb8fe56 === "cfg:list-cat-sc") {
                const _0x2e508f = _0x5885c5["serverCreator"]['template']["categories"];
                return _0x26841a['reply']({
                    'content': _0x2e508f["length"] ? _0x2e508f["map"]((_0xdd528c, _0x252f67) => _0x252f67 + 0x1 + '.\x20**' + _0xdd528c['name'] + "** " + (_0xdd528c['private'] ? '🔒' : '🌐') + '\x20(' + _0xdd528c["channels"]["length"] + '\x20salon(s))')['join']('\x0a') : 'Aucune\x20catégorie.',
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0xb8fe56 === "cfg:create-server") {
                await _0x26841a['deferReply']({
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x31cfc0 = [{
                        'name': "Membres",
                        'color': '#57F287',
                        'permissions': [PermissionFlagsBits['ViewChannel'], PermissionFlagsBits["SendMessages"], PermissionFlagsBits['ReadMessageHistory'], PermissionFlagsBits["Connect"], PermissionFlagsBits['Speak']]
                    }, {
                        'name': "Modérateur test",
                        'permissions': [PermissionFlagsBits["ViewChannel"], PermissionFlagsBits['SendMessages'], PermissionFlagsBits['ReadMessageHistory'], PermissionFlagsBits['Connect'], PermissionFlagsBits["Speak"]]
                    }, {
                        'name': 'Modérateur',
                        'color': '#FEE75C',
                        'permissions': [PermissionFlagsBits['ViewChannel'], PermissionFlagsBits['SendMessages'], PermissionFlagsBits['ReadMessageHistory'], PermissionFlagsBits["ManageMessages"], PermissionFlagsBits['MuteMembers'], PermissionFlagsBits["DeafenMembers"], PermissionFlagsBits['MoveMembers'], PermissionFlagsBits["Connect"], PermissionFlagsBits["Speak"], PermissionFlagsBits["PrioritySpeaker"]]
                    }, {
                        'name': "Staff",
                        'color': "#5865F2",
                        'permissions': [PermissionFlagsBits['ViewChannel'], PermissionFlagsBits["SendMessages"], PermissionFlagsBits["ReadMessageHistory"], PermissionFlagsBits["ManageMessages"], PermissionFlagsBits["KickMembers"], PermissionFlagsBits["BanMembers"], PermissionFlagsBits['MuteMembers'], PermissionFlagsBits['DeafenMembers'], PermissionFlagsBits['MoveMembers'], PermissionFlagsBits['Connect'], PermissionFlagsBits["Speak"], PermissionFlagsBits["PrioritySpeaker"]]
                    }, {
                        'name': 'Responsable\x20staff',
                        'color': '#9B59B6',
                        'permissions': [PermissionFlagsBits['ViewChannel'], PermissionFlagsBits['SendMessages'], PermissionFlagsBits["ReadMessageHistory"], PermissionFlagsBits["ManageMessages"], PermissionFlagsBits['KickMembers'], PermissionFlagsBits['BanMembers'], PermissionFlagsBits["MuteMembers"], PermissionFlagsBits["DeafenMembers"], PermissionFlagsBits["MoveMembers"], PermissionFlagsBits["Connect"], PermissionFlagsBits['Speak'], PermissionFlagsBits['PrioritySpeaker'], PermissionFlagsBits['ManageChannels'], PermissionFlagsBits["ManageRoles"]]
                    }, {
                        'name': 'Administrateur',
                        'color': '#ED4245',
                        'permissions': [PermissionFlagsBits['Administrator']]
                    }],
                    _0x5935ef = {};
                for (const _0x11f3da of _0x31cfc0) {
                    const _0x433f57 = await _0x26841a["guild"]["roles"]['create']({
                        'name': _0x11f3da['name'],
                        'color': _0x11f3da['color'],
                        'permissions': _0x11f3da["permissions"],
                        'hoist': !![],
                        'reason': 'DashBot\x20Server\x20Creator'
                    })["catch"](() => null);
                    if (_0x433f57) _0x5935ef[_0x11f3da['name']] = _0x433f57['id'];
                }
                const _0x2cbe04 = [{
                        'name': '📢・annonces',
                        'channels': ['📢・annonces', '📣・mises-à-jour']
                    }, {
                        'name': "📜・règlement",
                        'channels': ["📜・règlement"]
                    }, {
                        'name': '💬・général',
                        'channels': ['💬・général', '🎮・jeux', "📸・partage"]
                    }, {
                        'name': "🔊・vocaux",
                        'textChannels': [],
                        'voiceChannels': ['🔊\x20Général', "🔊 Jeux", '🔊\x20Musique']
                    }, {
                        'name': "🎫・tickets",
                        'private': !![],
                        'channels': ["🎫・créer-ticket", '📋・logs-tickets', '📝・candidature']
                    }, {
                        'name': "🛡️・staff",
                        'private': !![],
                        'channels': ["💬・staff", '📋・logs', '📊・statistiques'],
                        'voiceChannels': ["🔊 Entretien"],
                        'restrictedChannels': ['📋・logs', '📊・statistiques']
                    }],
                    _0x100e66 = _0x5935ef['Membres'],
                    _0x119c0a = _0x5935ef["Modérateur test"],
                    _0xf6a7f5 = _0x5935ef["Modérateur"],
                    _0x109db8 = _0x5935ef["Staff"],
                    _0x159b03 = _0x5935ef['Responsable\x20staff'],
                    _0x265a44 = _0x5935ef['Administrateur'],
                    _0x2eedff = [PermissionFlagsBits['ViewChannel'], PermissionFlagsBits['SendMessages'], PermissionFlagsBits['ReadMessageHistory']];
                let _0x525a94 = 0x0,
                    _0x1236d8 = 0x0;
                for (const _0x5011bf of _0x2cbe04) {
                    const _0x45a00e = [{
                        'id': _0x26841a["guild"]['members']['me']['id'],
                        'allow': [PermissionFlagsBits["ViewChannel"], PermissionFlagsBits["ManageChannels"], PermissionFlagsBits["SendMessages"]]
                    }];
                    if (_0x5011bf['private']) {
                        _0x45a00e["push"]({
                            'id': _0x26841a["guild"]['id'],
                            'deny': [PermissionFlagsBits['ViewChannel']]
                        });
                        for (const _0x62285d of [_0x109db8, _0xf6a7f5, _0x159b03, _0x265a44]) {
                            if (_0x62285d) _0x45a00e["push"]({
                                'id': _0x62285d,
                                'allow': _0x2eedff
                            });
                        }
                    } else {
                        _0x45a00e['push']({
                            'id': _0x26841a["guild"]['id'],
                            'allow': [PermissionFlagsBits['ViewChannel']]
                        });
                        for (const _0x51231d of [_0x100e66, _0x119c0a, _0xf6a7f5, _0x109db8, _0x159b03, _0x265a44]) {
                            if (_0x51231d) _0x45a00e["push"]({
                                'id': _0x51231d,
                                'allow': _0x2eedff
                            });
                        }
                    }
                    const _0x5a35e1 = await _0x26841a['guild']["channels"]['create']({
                        'name': _0x5011bf["name"],
                        'type': ChannelType['GuildCategory'],
                        'permissionOverwrites': _0x45a00e,
                        'reason': 'DashBot\x20Server\x20Creator'
                    })['catch'](() => null);
                    if (!_0x5a35e1) continue;
                    _0x525a94++;
                    for (const _0x4a0ccf of [..._0x5011bf["channels"] || [], ..._0x5011bf["textChannels"] || []]) {
                        const _0x307188 = await _0x26841a["guild"]["channels"]['create']({
                            'name': _0x4a0ccf,
                            'type': ChannelType['GuildText'],
                            'parent': _0x5a35e1['id'],
                            'reason': 'DashBot\x20Server\x20Creator'
                        })["catch"](() => null);
                        _0x307188 && _0x5011bf["restrictedChannels"]?.["includes"](_0x4a0ccf) && _0x119c0a && await _0x307188["permissionOverwrites"]["edit"](_0x119c0a, {
                            'ViewChannel': ![]
                        })['catch'](() => {});
                        if (_0x307188) _0x1236d8++;
                    }
                    for (const _0x111051 of _0x5011bf['voiceChannels'] || []) {
                        const _0x5ea0d2 = await _0x26841a["guild"]["channels"]['create']({
                            'name': _0x111051,
                            'type': ChannelType['GuildVoice'],
                            'parent': _0x5a35e1['id'],
                            'reason': 'DashBot\x20Server\x20Creator'
                        })["catch"](() => null);
                        _0x5ea0d2 && _0x5011bf["restrictedChannels"]?.['includes'](_0x111051) && _0x119c0a && await _0x5ea0d2["permissionOverwrites"]["edit"](_0x119c0a, {
                            'ViewChannel': ![]
                        })['catch'](() => {});
                        if (_0x5ea0d2) _0x1236d8++;
                    }
                }
                const _0x52b5a7 = Boolean(_0x5885c5['tempVoices']['lobbyId'] && _0x26841a['guild']['channels']["cache"]['has'](_0x5885c5["tempVoices"]['lobbyId'])),
                    _0x17cdbc = await setupTemporaryVoices(_0x26841a["guild"], _0x5885c5)['catch'](() => null);
                if (_0x17cdbc) {
                    if (!_0x52b5a7) _0x1236d8++;
                }
                return _0x26841a["editReply"]('✅\x20Structure\x20créée\x20:\x20**' + Object['keys'](_0x5935ef)["length"] + '**\x20rôle(s),\x20**' + _0x525a94 + '**\x20catégorie(s),\x20**' + _0x1236d8 + "** salon(s).");
            }
            if (_0xb8fe56 === 'cfg:language') return _0x5885c5['language'] = _0x5885c5['language'] === 'fr' ? 'en' : _0x5885c5["language"] === 'en' ? 'es' : 'fr', save(_0x26841a["guild"]['id'], _0x5885c5), replyPage(_0x26841a, "general");
            if (_0xb8fe56 === 'cfg:prefix') return _0x26841a["showModal"](modal('cfg:modal-prefix', tr(_0x5885c5, "prefix"), [
                ["prefix", tr(_0x5885c5, 'prefix'), _0x5885c5['prefix'], TextInputStyle["Short"], !![]]
            ]));
            if (_0xb8fe56 === 'cfg:edit-welcome') return _0x26841a['showModal'](modal('cfg:modal-welcome', tr(_0x5885c5, "welcome"), [
                ["welcomeText", tr(_0x5885c5, 'welcomeMsg'), _0x5885c5['welcome']["welcomeText"], TextInputStyle["Paragraph"]],
                ['welcomeImage', tr(_0x5885c5, "welcomeImageField"), _0x5885c5["welcome"]["welcomeImage"], TextInputStyle["Short"]],
                ["welcomeDM", tr(_0x5885c5, "dmMessage"), _0x5885c5["welcome"]['welcomeDM'], TextInputStyle['Paragraph']]
            ]));
            if (_0xb8fe56 === 'cfg:edit-welcome-leave') return _0x26841a['showModal'](modal('cfg:modal-welcome-leave', tr(_0x5885c5, 'welcomeDeparture'), [
                ['leaveText', tr(_0x5885c5, "leaveMsg"), _0x5885c5['welcome']['leaveText'], TextInputStyle["Paragraph"]]
            ]));
            if (_0xb8fe56 === 'cfg:edit-rules') return _0x26841a["showModal"](modal("cfg:modal-rules", tr(_0x5885c5, 'rules'), [
                ['text', tr(_0x5885c5, "rulesText"), _0x5885c5["rules"]["text"], TextInputStyle["Paragraph"], !![]]
            ]));
            if (_0xb8fe56 === 'cfg:announcements:edit-message') return _0x26841a['showModal'](modal('cfg:modal-announcements', tr(_0x5885c5, 'announcements'), [
                ['message', 'Message', _0x5885c5['announcements']['message'] || '', TextInputStyle['Paragraph'], true]
            ]));
            if (_0xb8fe56 === 'cfg:announcements:send') {
                const _0xasnd = _0x5885c5['announcements'];
                if (!_0xasnd['enabled'] || !_0xasnd['channelId']) return _0x26841a['reply']({
                    'content': '\u274c\x20Annonces\x20non\x20configur\xe9es.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0xasndCh = _0x26841a['guild']['channels']['cache']['get'](_0xasnd['channelId']);
                if (!isSendable(_0xasndCh)) return _0x26841a['reply']({
                    'content': '\u274c\x20Salon\x20d\x27annonces\x20invalide.',
                    'flags': MessageFlags['Ephemeral']
                });
                return await _0xasndCh['send']({
                    'embeds': [new EmbedBuilder()['setColor']('#5865F2')['setAuthor']({
                        'name': sanitize(_0x26841a['user']['tag'], 0x50),
                        'iconURL': _0x26841a['user']['displayAvatarURL']()
                    })['setDescription'](sanitize(_0xasnd['message'] || 'Annonce', 0x7d0))['setTimestamp']()]
                })['catch'](() => {}), _0x26841a['reply']({
                    'content': '\u2705\x20Annonce\x20envoy\xe9e\x20!',
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0xb8fe56 === 'cfg:create-giveaway') return _0x26841a['showModal'](modal('cfg:modal-giveaway', '🎉\x20Créer\x20un\x20Giveaway', [
                ['lot', 'Lot\x20à\x20gagner', 'Ex:\x20Nitro', TextInputStyle['Short'], !![]],
                ['winners', 'Nombre\x20de\x20gagnants', '1', TextInputStyle['Short'], ![]],
                ['description', 'Description', '', TextInputStyle['Paragraph'], ![]]
            ])['addComponents'](row(new StringSelectMenuBuilder()['setCustomId']('duration')['setPlaceholder']('Durée')['addOptions']({
                'label': '1\x20minute',
                'value': '1m'
            }, {
                'label': '5\x20minutes',
                'value': '5m'
            }, {
                'label': '10\x20minutes',
                'value': '10m'
            }, {
                'label': '30\x20minutes',
                'value': '30m'
            }, {
                'label': '2\x20heures',
                'value': '2h'
            }, {
                'label': '1\x20jour',
                'value': '1d'
            }))));
            if (_0xb8fe56 === 'cfg:list-giveaways') {
                const _0xgwItems = (_0x5885c5['giveaways']['items'] || [])['filter'](_0x2e4a => !_0x2e4a['ended'] && _0x2e4a['endTime'] > Date['now']());
                if (!_0xgwItems['length']) return _0x26841a['reply']({
                    'content': 'Aucun\x20giveaway\x20en\x20cours.',
                    'flags': MessageFlags['Ephemeral']
                });
                return _0x26841a['reply']({
                    'embeds': [new EmbedBuilder()['setColor']('#FEE75C')['setTitle']('🎉\x20Giveaways\x20en\x20cours')['setDescription'](_0xgwItems['map']((_0x2e4a, _0x2e8d) => (_0x2e8d + 0x1) + '. <#' + _0x2e4a['channelId'] + '>\x20–\x20' + _0x2e4a['prize'] + '\x20(' + (_0x2e4a['entrants'] || [])['length'] + ' participants)')['join']('\x0a'))['setFooter']({
                        'text': 'Utilisez\x20/giveaway\x20pour\x20les\x20gérer'
                    })],
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0xb8fe56 === 'cfg:tempVoices:config') return _0x26841a['showModal'](modal('cfg:modal-tempVoices', tr(_0x5885c5, 'tempVoices'), [
                ['nameFormat', 'Format\x20du\x20nom', _0x5885c5['tempVoices']['nameFormat'], TextInputStyle['Short'], true],
                ['userLimit', 'Limite', String(_0x5885c5['tempVoices']['userLimit'] || ''), TextInputStyle['Short'], false],
                ['bitrate', 'Débit\x20(kbps)', String(_0x5885c5['tempVoices']['bitrate'] || ''), TextInputStyle['Short'], false]
            ]));
            if (_0xb8fe56 === 'cfg:send-rules') {
                const _0x482e39 = _0x26841a['guild']['channels']["cache"]['get'](_0x5885c5["rules"]["channelId"]);
                if (!isSendable(_0x482e39)) return _0x26841a["reply"]({
                    'content': tr(_0x5885c5, "configureRulesChannel"),
                    'flags': MessageFlags["Ephemeral"]
                });
                return await _0x482e39['send']({
                    'embeds': [new EmbedBuilder()["setColor"]('#F1C40F')['setTitle']('📜\x20' + tr(_0x5885c5, 'serverRules'))["setDescription"](_0x5885c5['rules']["text"])["setFooter"]({
                        'text': 'DashBot\x20•\x20' + _0x26841a["guild"]['name']
                    })['setTimestamp']()]
                }), _0x26841a['reply']({
                    'content': '✅\x20' + tr(_0x5885c5, 'rulesSent'),
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0xb8fe56 === "cfg:test-welcome") {
                const _0x580396 = _0x5885c5["welcome"],
                    _0xcc520d = _0x26841a["guild"]["channels"]["cache"]["get"](_0x580396["channelId"]);
                if (!isSendable(_0xcc520d)) return _0x26841a['reply']({
                    'content': 'Configure\x20d\x27abord\x20un\x20salon\x20de\x20bienvenue.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x5ecc14 = (_0x580396["welcomeText"] || '')['replaceAll']("{user}", '<@' + _0x26841a['user']['id'] + '>')['replaceAll']('{server}', _0x26841a['guild']['name'])["replaceAll"]('{memberCount}', String(_0x26841a["guild"]['memberCount']));
                return await _0xcc520d['send']({
                    'embeds': [new EmbedBuilder()['setColor']("#57F287")['setTitle'](tr(_0x5885c5, 'welcomeTitle'))["setDescription"](_0x5ecc14)["setThumbnail"](_0x26841a["user"]['displayAvatarURL']())["setTimestamp"]()]
                })['catch'](() => {}), _0x26841a['reply']({
                    'content': '✅\x20Message\x20de\x20bienvenue\x20envoyé.',
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0xb8fe56 === "cfg:test-welcome-leave") {
                const _0x20e0a3 = _0x5885c5['welcome'],
                    _0xb5b62f = _0x26841a['guild']['channels']['cache']["get"](_0x20e0a3["leaveChannelId"]);
                if (!isSendable(_0xb5b62f)) return _0x26841a["reply"]({
                    'content': 'Configure\x20d\x27abord\x20un\x20salon\x20de\x20départ.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x56f1ec = (_0x20e0a3["leaveText"] || '')["replaceAll"]('{user}', '<@' + _0x26841a["user"]['id'] + '>')["replaceAll"]('{server}', _0x26841a["guild"]["name"])['replaceAll']("{memberCount}", String(_0x26841a["guild"]['memberCount']));
                return await _0xb5b62f["send"]({
                    'embeds': [new EmbedBuilder()['setColor']('#ED4245')['setTitle'](tr(_0x5885c5, 'goodbyeTitle'))["setDescription"](_0x56f1ec)['setThumbnail'](_0x26841a["user"]["displayAvatarURL"]())['setTimestamp']()]
                })['catch'](() => {}), _0x26841a['reply']({
                    'content': "✅ Message de départ envoyé.",
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0xb8fe56 === "cfg:test-birthdays") {
                const _0x29b28f = _0x26841a['guild']['channels']["cache"]['get'](_0x5885c5['birthdays']["channelId"]);
                if (!isSendable(_0x29b28f)) return _0x26841a["reply"]({
                    'content': 'Configure\x20d\x27abord\x20un\x20salon\x20pour\x20les\x20anniversaires.',
                    'flags': MessageFlags['Ephemeral']
                });
                return await _0x29b28f['send']({
                    'content': t(_0x5885c5, "birthdayRoleGiven", {
                        'user': _0x26841a['user']['id']
                    })
                })["catch"](() => {}), _0x26841a['reply']({
                    'content': "✅ Message d'anniversaire envoyé.",
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0xb8fe56 === "cfg:edit-security") return _0x26841a["showModal"](modal('cfg:modal-security', tr(_0x5885c5, "security"), [
                ["maxMessages", tr(_0x5885c5, "maxMessages"), _0x5885c5["security"]['maxMessages']],
                ["intervalSeconds", tr(_0x5885c5, "spamWindow"), _0x5885c5['security']['intervalSeconds']],
                ["mentionLimit", tr(_0x5885c5, 'maxMentionsField'), _0x5885c5['security']['mentionLimit']],
                ["antiLinks", tr(_0x5885c5, "antiLinksField"), _0x5885c5['security']["antiLinks"] ? "oui" : "non"],
                ["antiInvites", tr(_0x5885c5, 'antiInvitesField'), _0x5885c5['security']['antiInvites'] ? 'oui' : "non"],
                ["antiSpam", tr(_0x5885c5, 'antiSpamLabel'), _0x5885c5["security"]["antiSpam"] ? "oui" : "non"]
            ]));
            if (_0xb8fe56 === "cfg:edit-voices") return _0x26841a['showModal'](modal("cfg:modal-voices", tr(_0x5885c5, "voices"), [
                ['nameFormat', tr(_0x5885c5, 'nameFormat'), _0x5885c5['tempVoices']['nameFormat']],
                ["userLimit", tr(_0x5885c5, "limitField"), _0x5885c5['tempVoices']["userLimit"]]
            ]));
            if (_0xb8fe56 === "cfg:edit-economy") return _0x26841a["showModal"](modal("cfg:modal-economy", tr(_0x5885c5, "economy"), [
                ['dailyAmount', "Montant du daily", _0x5885c5['economy']['dailyAmount']]
            ]));
            if (_0xb8fe56 === 'cfg:edit-levels') return _0x26841a['showModal'](modal('cfg:modal-levels', tr(_0x5885c5, "levels"), [
                ["xpPerMessage", "XP par message", _0x5885c5["levels"]['xpPerMessage']],
                ["message", 'Message', _0x5885c5["levels"]['message'] || tr(_0x5885c5, 'levelUp'), TextInputStyle["Paragraph"]]
            ]));
            if (_0xb8fe56 === "cfg:add-word") return _0x26841a["showModal"](modal("cfg:modal-word", tr(_0x5885c5, 'addWord'), [
                ["word", tr(_0x5885c5, 'word'), '', TextInputStyle["Short"], !![]],
                ["reaction", tr(_0x5885c5, 'reaction'), '', TextInputStyle['Short'], !![]]
            ]));
            if (_0xb8fe56 === 'cfg:list-words') return _0x26841a["reply"]({
                'content': _0x5885c5["wordReactions"]['items']['length'] ? _0x5885c5["wordReactions"]["items"]['map'](_0x4eca30 => '`' + _0x4eca30['word'] + "` → " + _0x4eca30['reaction'])["join"]('\x0a') : "Aucun mot configuré.",
                'flags': MessageFlags["Ephemeral"]
            });
            if (_0xb8fe56 === "cfg:add-recurring") return _0x26841a['showModal'](modal("cfg:modal-recurring", tr(_0x5885c5, 'addMessage'), [
                ["channelId", tr(_0x5885c5, 'channelLabel'), '', TextInputStyle["Short"], !![]],
                ['message', 'Message', '', TextInputStyle["Paragraph"], !![]],
                ["interval", tr(_0x5885c5, 'interval'), '60', TextInputStyle["Short"], !![]]
            ]));
            if (_0xb8fe56 === 'cfg:list-recurring') return _0x26841a['reply']({
                'content': _0x5885c5['recurringMessages']['items']['length'] ? _0x5885c5["recurringMessages"]["items"]["map"]((_0x4399f6, _0x5b96cf) => '**' + (_0x5b96cf + 0x1) + ".** <#" + _0x4399f6["channelId"] + '>\x20|\x20`' + _0x4399f6["interval"] + "min`")['join']('\x0a') : "Aucun message programmé.",
                'flags': MessageFlags["Ephemeral"]
            });
            if (_0xb8fe56 === 'cfg:panel-create') return _0x26841a['showModal'](modal('cfg:modal-panel-create', tr(_0x5885c5, 'createPanel'), [
                ["channelId", "ID du salon", '', TextInputStyle['Short'], !![]],
                ['title', tr(_0x5885c5, 'titleField') || 'Titre', "Rôles", TextInputStyle['Short'], !![]],
                ["description", tr(_0x5885c5, "descLabel") || 'Description', 'Clique\x20sur\x20les\x20boutons\x20pour\x20obtenir\x20tes\x20rôles\x20!', TextInputStyle['Paragraph'], ![]]
            ]));
            if (_0xb8fe56['startsWith']("cfg:panel-add-role:")) {
                const _0x3db0d5 = Number(_0xb8fe56["slice"](0x13));
                return _0x26841a['showModal'](modal('cfg:modal-panel-add-role:' + _0x3db0d5, tr(_0x5885c5, 'addRole'), [
                    ["roleId", 'ID\x20du\x20rôle', '', TextInputStyle["Short"], !![]],
                    ["label", tr(_0x5885c5, 'titleField'), '', TextInputStyle['Short'], !![]],
                    ["emoji", 'Emoji', '✅', TextInputStyle["Short"], ![]]
                ]));
            }
            if (_0xb8fe56['startsWith']('cfg:panel-send:')) {
                const _0x2f0e37 = Number(_0xb8fe56["slice"](0xf)),
                    _0x314c6d = _0x5885c5['roles']["panels"]?.[_0x2f0e37];
                if (!_0x314c6d) return _0x26841a['reply']({
                    'content': 'Panneau\x20introuvable.',
                    'flags': MessageFlags["Ephemeral"]
                });
                if (!_0x314c6d['channelId']) return _0x26841a['reply']({
                    'content': "Configure d'abord un salon.",
                    'flags': MessageFlags['Ephemeral']
                });
                if (!_0x314c6d['roles']?.["length"]) return _0x26841a["reply"]({
                    'content': "Ajoute au moins un rôle.",
                    'flags': MessageFlags['Ephemeral']
                });
                await _0x26841a["deferUpdate"]();
                const _0x275bb6 = _0x26841a["guild"]["channels"]["cache"]['get'](_0x314c6d["channelId"]);
                if (!isSendable(_0x275bb6)) return _0x26841a['editReply']({
                    'content': 'Salon\x20invalide.',
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x34f9f6 = new EmbedBuilder()["setColor"](_0x314c6d["color"] || "#5865F2")["setTitle"](_0x314c6d['title'] || 'Rôles')["setDescription"](_0x314c6d['description'] || '')["setFooter"]({
                        'text': _0x26841a['guild']["name"],
                        'iconURL': _0x26841a['guild']["iconURL"]() || undefined
                    })["setTimestamp"](),
                    _0xb13d81 = _0x314c6d["roles"]['map']((_0x4a1a7b, _0x1c6df0) => button("rp:" + _0x2f0e37 + ':' + _0x1c6df0, (_0x4a1a7b["emoji"] || '') + '\x20' + _0x4a1a7b["label"], ButtonStyle['Primary'])),
                    _0x515710 = [];
                while (_0xb13d81["length"]) _0x515710["push"](row(..._0xb13d81['splice'](0x0, 0x5)));
                if (_0x314c6d['messageId']) {
                    const _0x3835d9 = await _0x275bb6["messages"]['fetch'](_0x314c6d["messageId"])["catch"](() => null);
                    if (_0x3835d9) await _0x3835d9['edit']({
                        'embeds': [_0x34f9f6],
                        'components': _0x515710
                    })['catch'](() => {});
                    else {
                        const _0xcfb6e = await _0x275bb6["send"]({
                            'embeds': [_0x34f9f6],
                            'components': _0x515710
                        });
                        _0x314c6d["messageId"] = _0xcfb6e['id'];
                    }
                } else {
                    const _0x21c18e = await _0x275bb6['send']({
                        'embeds': [_0x34f9f6],
                        'components': _0x515710
                    });
                    _0x314c6d['messageId'] = _0x21c18e['id'];
                }
                return save(_0x26841a['guild']['id'], _0x5885c5), _0x26841a["editReply"](pagePayload(_0x26841a["guild"], 'roles-panel:' + _0x2f0e37));
            }
            if (_0xb8fe56["startsWith"]("cfg:panel-edit:")) {
                const _0x575445 = Number(_0xb8fe56['slice'](0xf)),
                    _0x9511ea = _0x5885c5["roles"]['panels']?.[_0x575445];
                if (!_0x9511ea) return _0x26841a['reply']({
                    'content': 'Panneau\x20introuvable.',
                    'flags': MessageFlags["Ephemeral"]
                });
                return _0x26841a['showModal'](modal('cfg:modal-panel-edit:' + _0x575445, "Modifier le panneau", [
                    ['title', tr(_0x5885c5, "titleField") || "Titre", _0x9511ea["title"] || '', TextInputStyle['Short'], !![]],
                    ['description', tr(_0x5885c5, "descLabel") || "Description", _0x9511ea["description"] || '', TextInputStyle['Paragraph'], ![]],
                    ['color', "Couleur", _0x9511ea["color"] || "#5865F2", TextInputStyle["Short"], ![]]
                ]));
            }
            if (_0xb8fe56["startsWith"]('cfg:panel-delete:')) {
                const _0x1ead42 = Number(_0xb8fe56["slice"](0x11)),
                    _0x1116b2 = _0x5885c5["roles"]["panels"] || [];
                return _0x1116b2[_0x1ead42] && (_0x1116b2['splice'](_0x1ead42, 0x1), _0x5885c5["roles"]['panels'] = _0x1116b2, save(_0x26841a['guild']['id'], _0x5885c5)), replyPage(_0x26841a, "roles");
            }
            if (_0xb8fe56 === 'giveaway:enter') {
                if (!_0x5885c5['giveaways']?.['enabled']) return _0x26841a['reply']({
                    'content': 'Giveaway\x20désactivé.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x3ad124 = (_0x5885c5['giveaways']['items'] || [])['find'](_0x2a1847 => _0x2a1847['messageId'] === _0x26841a['message']['id']);
                if (!_0x3ad124) return _0x26841a['reply']({
                    'content': 'Giveaway\x20terminé.',
                    'flags': MessageFlags['Ephemeral']
                });
                if (_0x3ad124['ended'] || Date['now']() > _0x3ad124['endTime']) return _0x26841a['reply']({
                    'content': 'Giveaway\x20terminé.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0x3bb0f0 = _0x26841a['member'];
                if (_0x3ad124['minMembers'] > 0x0 && _0x26841a['guild']['memberCount'] < _0x3ad124['minMembers']) return _0x26841a['reply']({
                    'content': 'Le\x20serveur\x20doit\x20compter\x20au\x20moins\x20' + _0x3ad124['minMembers'] + ' membres\x20pour\x20participer.',
                    'flags': MessageFlags['Ephemeral']
                });
                if (_0x3ad124['requiredRoleId'] && (!_0x3bb0f0 || !_0x3bb0f0['roles']['cache']['has'](_0x3ad124['requiredRoleId']))) return _0x26841a['reply']({
                    'content': 'Tu\x20ne\x20remplis\x20pas\x20les\x20conditions\x20pour\x20participer.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0xgwE = (_0x3ad124['entrants'] = _0x3ad124['entrants'] || []);
                if (_0xgwE['includes'](_0x26841a['user']['id'])) {
                    _0x3ad124['entrants'] = _0xgwE['filter'](_0x2e8c => _0x2e8c !== _0x26841a['user']['id']), save(_0x26841a['guild']['id'], _0x5885c5), await _0x26841a['message']['edit']({
                        'embeds': [giveawayEmbed(_0x5885c5, _0x3ad124, _0x26841a['guild'])]
                    })['catch'](() => {});
                    return _0x26841a['reply']({
                        'content': 'Tu\x20t\x27es\x20retiré\x20du\x20giveaway.',
                        'flags': MessageFlags['Ephemeral']
                    });
                }
                return _0xgwE['push'](_0x26841a['user']['id']), save(_0x26841a['guild']['id'], _0x5885c5), await _0x26841a['message']['edit']({
                    'embeds': [giveawayEmbed(_0x5885c5, _0x3ad124, _0x26841a['guild'])]
                })['catch'](() => {}), _0x26841a['reply']({
                    'content': '✅\x20Tu\x20participes\x20au\x20giveaway\x20!',
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0xb8fe56 === 'cfg:add-shop-item') return _0x26841a['showModal'](modal('cfg:modal-shop', tr(_0x5885c5, 'addShopItem'), [
                ["shopRoleName", tr(_0x5885c5, "shopRole"), '', TextInputStyle["Short"], !![]],
                ["shopRoleId", 'ID\x20du\x20rôle', '', TextInputStyle['Short'], !![]],
                ['shopPrice', tr(_0x5885c5, 'shopPrice'), "100", TextInputStyle['Short'], !![]]
            ]));
            if (_0xb8fe56 === 'cfg:list-shop') return _0x26841a['reply']({
                'content': _0x5885c5['shop']["items"]["length"] ? _0x5885c5['shop']['items']["map"]((_0x3fd21c, _0x4bda37) => _0x4bda37 + 0x1 + '.\x20**' + _0x3fd21c['name'] + '**\x20—\x20' + _0x3fd21c["price"] + '\x20🪙\x20→\x20<@&' + _0x3fd21c['roleId'] + '>')["join"]('\x0a') : tr(_0x5885c5, 'shopEmpty'),
                'flags': MessageFlags['Ephemeral']
            });
            if (_0xb8fe56 === 'cfg:tempVoices:create') {
                const _0xcats = _0x26841a['guild']['channels']['cache']['filter'](_0xch => _0xch['type'] === ChannelType['GuildCategory']);
                const _0xc = _0xcats['first']();
                if (!_0xc) return _0x26841a['reply']({
                    'content': 'Aucune catégorie disponible.',
                    'flags': MessageFlags['Ephemeral']
                });
                _0x26841a['deferReply']({
                    'flags': MessageFlags['Ephemeral']
                })['then'](() => _0x26841a['guild']['channels']['create']({
                    'name': 'Créez votre vocal',
                    'type': ChannelType['GuildVoice'],
                    'parent': _0xc['id'],
                    'reason': 'Création du salon créateur'
                })['then'](_0xch => {
                    _0x5885c5['tempVoices']['lobbyId'] = _0xch['id'];
                    _0x5885c5['tempVoices']['enabled'] = true;
                    save(_0x26841a['guild']['id'], _0x5885c5);
                    _0x26841a['editReply']({
                        'content': 'Salon créé: ' + _0xch['toString']()
                    })
                }));
                return;
            }
            if (_0xb8fe56['startsWith']('cfg:channel:')) return chooseChannel(_0x26841a, _0xb8fe56["slice"](0xc), 'text');
            if (_0xb8fe56['startsWith']("cfg:role:")) return chooseRole(_0x26841a, _0xb8fe56['slice'](0x9));
            if (_0xb8fe56['startsWith']("cfg:voice-channel:")) return chooseChannel(_0x26841a, "tempVoices:" + _0xb8fe56['slice'](0x12), 'voice');
            if (_0xb8fe56["startsWith"]("cfg:category:")) {
                const _0x3b050e = _0xb8fe56["slice"](0xd),
                    _0x14bb4c = _0x3b050e["split"](':');
                if (_0x14bb4c['length'] > 0x1) return chooseChannel(_0x26841a, _0x3b050e, 'category');
                return chooseChannel(_0x26841a, 'tempVoices:' + _0x3b050e, "category");
            }
        }
        if (_0x26841a['isStringSelectMenu']() && _0xb8fe56["startsWith"]("cfg:choose-role-arr:")) {
            const _0x532b5b = _0xb8fe56["slice"](0x14),
                _0x57f753 = _0x532b5b['split'](':');
            let _0x5d96cf = _0x5885c5;
            for (let _0x4116c5 = 0x0; _0x4116c5 < _0x57f753['length'] - 0x1; _0x4116c5++) _0x5d96cf = _0x5d96cf[_0x57f753[_0x4116c5]];
            const _0x812bb0 = _0x5d96cf[_0x57f753[_0x57f753["length"] - 0x1]];
            if (!Array['isArray'](_0x812bb0)) return _0x26841a['update']({
                'content': 'Erreur.',
                'components': []
            });
            if (!_0x812bb0["includes"](_0x26841a['values'][0x0])) _0x812bb0['push'](_0x26841a['values'][0x0]);
            save(_0x26841a['guild']['id'], _0x5885c5);
            const _0x5ea7e6 = pathToPage(_0x532b5b);
            return _0x26841a["update"](pagePayload(_0x26841a['guild'], _0x5ea7e6));
        }
        if (_0x26841a["isModalSubmit"]()) {
            const _0x3b30ff = _0x17fbb6 => {
                const _0xde298b = _0x18d57c;
                if (_0x17fbb6 === 'cfg:modal-autoSanctions') return 'autoSanctions';
                if (_0x17fbb6['startsWith']('cfg:modal-reason:')) return _0x17fbb6['slice'](0x11);
                if (_0x17fbb6 === 'cfg:modal-prefix') return "general";
                if (_0x17fbb6 === 'cfg:modal-cat-sc') return 'serverCreator';
                const _0x2c76a5 = {
                    'welcome': "welcome-arrival",
                    'welcome-leave': "welcome-departure",
                    'rules': "welcome-rules",
                    'security': "security",
                    'voices': 'voices',
                    'economy': 'economy',
                    'word': 'wordReactions',
                    'shop': 'shop',
                    'recurring': 'recurringMessages',
                    'announcements': 'announcements',
                    'tempVoices': 'tempVoices'
                };
                for (const [_0x2ebacc, _0x445b82] of Object['entries'](_0x2c76a5)) {
                    if (_0x17fbb6 === 'cfg:modal-' + _0x2ebacc) return _0x445b82;
                }
                return null;
            };
            if (_0xb8fe56['startsWith']('tv:modal-permit:')) {
                const _0xtvSP = _0xb8fe56['split'](':'),
                    _0xtvCP = _0xtvSP[2],
                    _0xtvChanP = _0x26841a['guild']['channels']['cache']['get'](_0xtvCP);
                if (_0xtvChanP) {
                    const _0xtvTopP = _0xtvChanP['topic'] || '';
                    if (_0xtvTopP['startsWith']('tv:') && _0xtvTopP['slice'](3) === _0x26841a['user']['id']) {
                        const _0xtvUserP = text(_0x26841a, 'user');
                        if (_0xtvUserP) await _0xtvChanP['permissionOverwrites']['edit'](_0xtvUserP, {
                            'Connect': true
                        })['catch'](() => {});
                    }
                }
                return _0x26841a['reply']({
                    'content': 'Membre\x20autoris\xe9.',
                    'flags': MessageFlags['Ephemeral']
                })['catch'](() => {});
            }
            if (_0xb8fe56['startsWith']('tv:modal-kick:')) {
                const _0xtvSK = _0xb8fe56['split'](':'),
                    _0xtvCK = _0xtvSK[2],
                    _0xtvChanK = _0x26841a['guild']['channels']['cache']['get'](_0xtvCK);
                if (_0xtvChanK) {
                    const _0xtvTopK = _0xtvChanK['topic'] || '';
                    if (_0xtvTopK['startsWith']('tv:') && _0xtvTopK['slice'](3) === _0x26841a['user']['id']) {
                        const _0xtvUserK = text(_0x26841a, 'user');
                        if (_0xtvUserK) {
                            const _0xtvMemK = await _0x26841a['guild']['members']['fetch'](_0xtvUserK)['catch'](() => null);
                            if (_0xtvMemK && _0xtvMemK['voice']?.['channelId'] === _0xtvCK) await _0xtvMemK['voice']['disconnect']()['catch'](() => {});
                            await _0xtvChanK['permissionOverwrites']['edit'](_0xtvUserK, {
                                'Connect': false
                            })['catch'](() => {});
                        }
                    }
                    return _0x26841a['reply']({
                        'content': 'Membre\x20expuls\xe9.',
                        'flags': MessageFlags['Ephemeral']
                    })['catch'](() => {});
                }
            }
            if (_0xb8fe56['startsWith']('tv:modal-transfer:')) {
                const _0xtvST = _0xb8fe56['split'](':'),
                    _0xtvCT = _0xtvST[2],
                    _0xtvChanT = _0x26841a['guild']['channels']['cache']['get'](_0xtvCT);
                if (_0xtvChanT) {
                    const _0xtvTopT = _0xtvChanT['topic'] || '';
                    if (_0xtvTopT['startsWith']('tv:') && _0xtvTopT['slice'](3) === _0x26841a['user']['id']) {
                        const _0xtvUserT = text(_0x26841a, 'user');
                        if (_0xtvUserT) await _0xtvChanT['setTopic']('tv:' + _0xtvUserT)['catch'](() => {});
                    }
                    return _0x26841a['reply']({
                        'content': 'Propri\xe9t\xe9\x20transf\xe9r\xe9e.',
                        'flags': MessageFlags['Ephemeral']
                    })['catch'](() => {});
                }
            }
            if (_0xb8fe56['startsWith']('tv:modal:')) {
                const _0xtvM = _0xb8fe56['slice'](0x9);
                const _0xtvChM = _0x26841a['guild']['channels']['cache']['get'](_0xtvM);
                if (_0xtvChM) {
                    const _0xtvTopM = _0xtvChM['topic'] || '';
                    if (_0xtvTopM['startsWith']('tv:') && _0xtvTopM['slice'](3) === _0x26841a['user']['id']) {
                        const _0xtvName = text(_0x26841a, 'name');
                        if (_0xtvName) _0xtvChM['setName'](_0xtvName)['catch'](() => {});
                        const _0xtvLimit = text(_0x26841a, 'limit');
                        if (_0xtvLimit) _0xtvChM['setUserLimit'](Math['max'](0, parseInt(_0xtvLimit) || 0))['catch'](() => {});
                    }
                }
                return _0x26841a['reply']({
                    'content': 'Salon\x20mis\x20à\x20jour.',
                    'flags': MessageFlags['Ephemeral']
                })['catch'](() => {});
            }
            if (_0xb8fe56 === "cfg:modal-prefix") {
                const _0x22f14d = text(_0x26841a, "prefix");
                if (!_0x22f14d || _0x22f14d["length"] > 0x5) return _0x26841a['reply']({
                    'content': tr(_0x5885c5, 'prefixError'),
                    'flags': MessageFlags['Ephemeral']
                });
                _0x5885c5['prefix'] = _0x22f14d;
            }
            if (_0xb8fe56 === "cfg:modal-welcome") Object["assign"](_0x5885c5['welcome'], {
                'welcomeText': text(_0x26841a, 'welcomeText'),
                'welcomeImage': text(_0x26841a, "welcomeImage"),
                'welcomeDM': text(_0x26841a, 'welcomeDM'),
                'enableDM': !!text(_0x26841a, "welcomeDM")
            });
            if (_0xb8fe56 === "cfg:modal-welcome-leave") _0x5885c5['welcome']['leaveText'] = text(_0x26841a, 'leaveText');
            if (_0xb8fe56 === 'cfg:modal-rules') _0x5885c5['rules']['text'] = text(_0x26841a, "text");
            if (_0xb8fe56 === 'cfg:modal-announcements') _0x5885c5['announcements']['message'] = text(_0x26841a, 'message');
            if (_0xb8fe56 === 'cfg:modal-tempVoices') {
                _0x5885c5['tempVoices']['nameFormat'] = text(_0x26841a, 'nameFormat') || "Salon de {user}";
                _0x5885c5['tempVoices']['userLimit'] = Math['max'](0, Number(text(_0x26841a, 'userLimit')) || 0x0);
                _0x5885c5['tempVoices']['bitrate'] = Math['max'](0xfa00, Number(text(_0x26841a, 'bitrate')) || 0xfa00);
            }
            if (_0xb8fe56 === 'cfg:modal-giveaway') {
                const _0xgwmod = _0x5885c5['giveaways'];
                if (!_0xgwmod['enabled']) return _0x26841a['reply']({
                    'content': 'Giveaway\x20désactivé.',
                    'flags': MessageFlags['Ephemeral']
                });
                if (!_0xgwmod['channelId']) return _0x26841a['reply']({
                    'content': 'Aucun\x20salon\x20de\x20giveaway\x20configuré.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0xgwprize = text(_0x26841a, 'lot'),
                    _0xgwdu = (_0x26841a['fields']['getSelectMenuValues']('duration') || [])[0x0] || '30m',
                    _0xgwms = parseDuration(_0xgwdu);
                if (!_0xgwms) return _0x26841a['reply']({
                    'content': 'Format\x20de\x20durée\x20invalide.\x20Ex:\x2030min,\x202h,\x201d',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0xgww = parseInt(text(_0x26841a, 'winners') || '1') || 0x1,
                    _0xgwch = _0x26841a['guild']['channels']['cache']['get'](_0xgwmod['channelId']);
                if (!isSendable(_0xgwch)) return _0x26841a['reply']({
                    'content': 'Salon\x20de\x20giveaway\x20invalide.',
                    'flags': MessageFlags['Ephemeral']
                });
                const _0xgwitem = {
                    'messageId': '',
                    'channelId': _0xgwch['id'],
                    'prize': _0xgwprize,
                    'description': text(_0x26841a, 'description'),
                    'endTime': Date['now']() + _0xgwms,
                    'winnersCount': _0xgww,
                    'requiredRoleId': _0xgwmod['requiredRoleId'] || null,
                    'minMembers': _0xgwmod['minMembers'] || 0x0,
                    'creatorId': _0x26841a['user']['id'],
                    'entrants': [],
                    'winners': [],
                    'ended': ![],
                    'endedAt': 0x0
                };
                const _0xgwmsg = await _0xgwch['send']({
                    'embeds': [giveawayEmbed(_0x5885c5, _0xgwitem, _0x26841a['guild'])],
                    'components': [row(new ButtonBuilder()['setCustomId']('giveaway:enter')['setLabel'](tr(_0x5885c5, 'giveawayEnter'))['setStyle'](ButtonStyle['Success'])['setEmoji']('🎉'))]
                })['catch'](() => null);
                if (!_0xgwmsg) return _0x26841a['reply']({
                    'content': '❌\x20Impossible\x20d\x27envoyer\x20le\x20giveaway.',
                    'flags': MessageFlags['Ephemeral']
                });
                _0xgwitem['messageId'] = _0xgwmsg['id'], _0xgwmod['items'] = _0xgwmod['items'] || [], _0xgwmod['items']['push'](_0xgwitem), save(_0x26841a['guild']['id'], _0x5885c5);
                await sendRichLog(_0x26841a['guild'], 'moderation', new EmbedBuilder()['setColor']('#FEE75C')['setTitle']('🎉\x20Giveaway\x20créé')['setTimestamp']()['addFields']({
                    'name': 'Lot',
                    'value': _0xgwprize,
                    'inline': !![]
                }, {
                    'name': 'Gagnants',
                    'value': '' + _0xgww,
                    'inline': !![]
                }, {
                    'name': 'Fin',
                    'value': '<t:' + Math['floor'](_0xgwitem['endTime'] / 0x3e8) + ':R>',
                    'inline': !![]
                }));
                return _0x26841a['reply']({
                    'content': '✅\x20Giveaway\x20créé\x20!',
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0xb8fe56 === 'cfg:reset:tempVoices') {
                _0x5885c5['tempVoices'] = {
                    'enabled': ![],
                    'lobbyId': '',
                    'nameFormat': "Salon de {user}",
                    'userLimit': 0x0,
                    'bitrate': 0xfa00
                };
                save(_0x26841a['guild']['id'], _0x5885c5);
                return _0x26841a['reply']({
                    ...pagePayload(_0x26841a['guild'], 'voices'),
                    'flags': MessageFlags['Ephemeral']
                })
            }
            if (_0xb8fe56 === "cfg:modal-autoSanctions") Object['assign'](_0x5885c5["autoSanctions"], {
                'warningsBeforeTimeout': Math['max'](0x1, Number(text(_0x26841a, 'warningsBeforeTimeout')) || 0x3),
                'timeoutMinutes': Math["max"](0x1, Number(text(_0x26841a, "timeoutMinutes")) || 0xa),
                'warningsBeforeKick': Math['max'](0x1, Number(text(_0x26841a, 'warningsBeforeKick')) || 0x5),
                'warningsBeforeBan': Math['max'](0x1, Number(text(_0x26841a, 'warningsBeforeBan')) || 0x7)
            });
            if (_0xb8fe56 === 'cfg:modal-security') Object['assign'](_0x5885c5['security'], {
                'maxMessages': Math['max'](0x2, Number(text(_0x26841a, "maxMessages")) || 0x5),
                'intervalSeconds': Math['max'](0x1, Number(text(_0x26841a, "intervalSeconds")) || 0x6),
                'mentionLimit': Math['max'](0x1, Number(text(_0x26841a, 'mentionLimit')) || 0x5),
                'antiLinks': /^oui|yes|true|1$/i ['test'](text(_0x26841a, 'antiLinks')),
                'antiInvites': /^oui|yes|true|1$/i ['test'](text(_0x26841a, 'antiInvites')),
                'antiSpam': /^oui|yes|true|1$/i ['test'](text(_0x26841a, "antiSpam") || 'oui')
            });
            if (_0xb8fe56 === 'cfg:modal-voices') Object["assign"](_0x5885c5["tempVoices"], {
                'nameFormat': text(_0x26841a, 'nameFormat') || "Salon de {user}",
                'userLimit': Math['max'](0x0, Number(text(_0x26841a, "userLimit")) || 0x0)
            });
            if (_0xb8fe56['startsWith']('cfg:modal-addWord:')) {
                const _0x41b007 = _0xb8fe56['slice'](0x11),
                    _0x4f6da2 = text(_0x26841a, 'word')["toLowerCase"]()['trim']();
                if (_0x4f6da2 && _0x5885c5['autoMod'][_0x41b007]) {
                    if (!_0x5885c5['autoMod'][_0x41b007]["words"]) _0x5885c5["autoMod"][_0x41b007]['words'] = [];
                    _0x5885c5["autoMod"][_0x41b007]["words"]["push"](_0x4f6da2), save(_0x26841a['guild']['id'], _0x5885c5);
                }
                return _0x26841a['reply']({
                    ...pagePayload(_0x26841a["guild"], 'autoMod-' + _0x41b007),
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0xb8fe56['startsWith']("cfg:modal-autoMod:")) {
                const _0x18cad4 = _0xb8fe56['slice'](0x12),
                    _0x2b298a = _0x5885c5["autoMod"][_0x18cad4];
                if (_0x2b298a) {
                    if (_0x2b298a['maxMessages'] !== undefined) _0x2b298a["maxMessages"] = Math['max'](0x2, Number(text(_0x26841a, "maxMessages")) || 0x5);
                    if (_0x2b298a['intervalSeconds'] !== undefined) _0x2b298a["intervalSeconds"] = Math["max"](0x1, Number(text(_0x26841a, 'intervalSeconds')) || 0x6);
                    if (_0x2b298a['maxMentions'] !== undefined) _0x2b298a['maxMentions'] = Math['max'](0x1, Number(text(_0x26841a, 'maxMentions')) || 0x5);
                    if (_0x2b298a['maxDays'] !== undefined) _0x2b298a["maxDays"] = Math['max'](0x1, Number(text(_0x26841a, 'maxDays')) || 0x7);
                    if (_0x2b298a["maxJoins"] !== undefined) _0x2b298a["maxJoins"] = Math['max'](0x2, Number(text(_0x26841a, 'maxJoins')) || 0xa);
                    if (_0x2b298a["intervalMinutes"] !== undefined) _0x2b298a["intervalMinutes"] = Math["max"](0x1, Number(text(_0x26841a, 'intervalMinutes')) || 0x5);
                    save(_0x26841a["guild"]['id'], _0x5885c5);
                }
                return _0x26841a['reply']({
                    ...pagePayload(_0x26841a['guild'], "autoMod-" + _0x18cad4),
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0xb8fe56 === 'cfg:modal-economy') _0x5885c5['economy']["dailyAmount"] = Math["max"](0xa, Number(text(_0x26841a, 'dailyAmount')) || 0x64);
            _0xb8fe56 === "cfg:modal-levels" && (_0x5885c5["levels"]['xpPerMessage'] = Math['max'](0x1, Number(text(_0x26841a, "xpPerMessage")) || 0xf), _0x5885c5["levels"]['message'] = text(_0x26841a, 'message')['slice'](0x0, 0x1f4));
            _0xb8fe56 === "cfg:modal-word" && _0x5885c5["wordReactions"]["items"]['push']({
                'word': text(_0x26841a, 'word')['toLowerCase'](),
                'reaction': text(_0x26841a, 'reaction')
            });
            if (_0xb8fe56 === "cfg:modal-shop") {
                const _0x1cda9f = text(_0x26841a, "shopRoleName"),
                    _0x56e467 = text(_0x26841a, 'shopRoleId'),
                    _0x1395db = Math["max"](0x1, Number(text(_0x26841a, 'shopPrice')) || 0x64);
                if (_0x56e467 && _0x1cda9f) _0x5885c5['shop']["items"]['push']({
                    'name': _0x1cda9f,
                    'roleId': _0x56e467,
                    'price': _0x1395db
                });
            }
            if (_0xb8fe56 === 'cfg:modal-recurring') {
                const _0x1440fa = Math["max"](0x5, Number(text(_0x26841a, "interval")) || 0x3c);
                _0x5885c5['recurringMessages']['items']['push']({
                    'channelId': text(_0x26841a, "channelId"),
                    'message': text(_0x26841a, 'message'),
                    'interval': _0x1440fa,
                    'lastSent': null
                });
            }
            if (_0xb8fe56 === 'cfg:modal-recruit-msg') {
                _0x5885c5['recruitment']['recruitMessage'] = text(_0x26841a, 'message');
                save(_0x26841a['guild']['id'], _0x5885c5);
                return _0x26841a['reply']({
                    ...pagePayload(_0x26841a['guild'], 'recruitment'),
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0xb8fe56['startsWith']('cfg:modal-reason:')) {
                const _0x317b8c = _0xb8fe56["slice"](0x11),
                    _0x46d5cd = text(_0x26841a, "reason");
                if (!_0x46d5cd || _0x46d5cd['length'] > 0x64) return _0x26841a['reply']({
                    'content': "Raison invalide.",
                    'flags': MessageFlags['Ephemeral']
                });
                return _0x5885c5[_0x317b8c]["reasons"]['push'](_0x46d5cd), save(_0x26841a['guild']['id'], _0x5885c5), _0x26841a['reply']({
                    ...pagePayload(_0x26841a["guild"], _0x317b8c),
                    'flags': MessageFlags['Ephemeral']
                });
            }
            if (_0xb8fe56 === "cfg:modal-cat-sc") {
                const _0x5ba7f7 = text(_0x26841a, "name")["slice"](0x0, 0x64);
                if (!_0x5ba7f7) return _0x26841a['reply']({
                    'content': 'Nom\x20invalide.',
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x582a44 = /^oui|yes|true|1$/i ["test"](text(_0x26841a, 'private'));
                return _0x5885c5['serverCreator']['template']["categories"]["push"]({
                    'name': _0x5ba7f7,
                    'private': _0x582a44,
                    'channels': []
                }), save(_0x26841a["guild"]['id'], _0x5885c5), _0x26841a["reply"]({
                    ...pagePayload(_0x26841a["guild"], 'serverCreator'),
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0xb8fe56 === "cfg:modal-panel-create") {
                const _0x3b7c8a = text(_0x26841a, "channelId");
                if (!/^\d+$/ ['test'](_0x3b7c8a)) return _0x26841a["reply"]({
                    'content': 'ID\x20de\x20salon\x20invalide.',
                    'flags': MessageFlags['Ephemeral']
                });
                if (!_0x5885c5["roles"]["panels"]) _0x5885c5['roles']['panels'] = [];
                _0x5885c5['roles']["panels"]['push']({
                    'channelId': _0x3b7c8a,
                    'title': text(_0x26841a, "title") || 'Rôles',
                    'description': text(_0x26841a, 'description') || '',
                    'color': '#5865F2',
                    'roles': [],
                    'messageId': ''
                }), save(_0x26841a['guild']['id'], _0x5885c5);
                const _0x11b137 = _0x5885c5['roles']["panels"]['length'] - 0x1;
                return _0x26841a['reply']({
                    ...pagePayload(_0x26841a['guild'], "roles-panel:" + _0x11b137),
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0xb8fe56["startsWith"]('cfg:modal-panel-add-role:')) {
                const _0xf0e134 = Number(_0xb8fe56["slice"](0x19)),
                    _0x3989ba = _0x5885c5["roles"]['panels'] || [],
                    _0xc13baf = _0x3989ba[_0xf0e134];
                if (!_0xc13baf) return _0x26841a["reply"]({
                    'content': "Panneau introuvable.",
                    'flags': MessageFlags["Ephemeral"]
                });
                const _0x180eca = text(_0x26841a, "roleId");
                if (!/^\d+$/ ["test"](_0x180eca)) return _0x26841a['reply']({
                    'content': 'ID\x20de\x20rôle\x20invalide.',
                    'flags': MessageFlags["Ephemeral"]
                });
                if (!_0xc13baf["roles"]) _0xc13baf["roles"] = [];
                return _0xc13baf["roles"]['push']({
                    'roleId': _0x180eca,
                    'label': text(_0x26841a, "label") || "Rôle",
                    'emoji': text(_0x26841a, "emoji") || ''
                }), save(_0x26841a["guild"]['id'], _0x5885c5), _0x26841a["reply"]({
                    ...pagePayload(_0x26841a["guild"], "roles-panel:" + _0xf0e134),
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            if (_0xb8fe56["startsWith"]('cfg:modal-panel-edit:')) {
                const _0x37c9b9 = Number(_0xb8fe56['slice'](0x15)),
                    _0x1b6406 = _0x5885c5['roles']['panels'] || [],
                    _0x4c9ba9 = _0x1b6406[_0x37c9b9];
                if (!_0x4c9ba9) return _0x26841a['reply']({
                    'content': "Panneau introuvable.",
                    'flags': MessageFlags["Ephemeral"]
                });
                return _0x4c9ba9['title'] = text(_0x26841a, 'title') || _0x4c9ba9["title"], _0x4c9ba9["description"] = text(_0x26841a, "description") || '', _0x4c9ba9['color'] = text(_0x26841a, 'color') || "#5865F2", save(_0x26841a['guild']['id'], _0x5885c5), _0x26841a["reply"]({
                    ...pagePayload(_0x26841a['guild'], 'roles-panel:' + _0x37c9b9),
                    'flags': MessageFlags["Ephemeral"]
                });
            }
            save(_0x26841a['guild']['id'], _0x5885c5);
            const _0x38ea05 = _0x3b30ff(_0xb8fe56);
            return _0x26841a['reply'](_0x38ea05 ? {
                ...pagePayload(_0x26841a["guild"], _0x38ea05),
                'flags': MessageFlags['Ephemeral']
            } : {
                'content': '✅\x20' + tr(_0x5885c5, 'saved'),
                'flags': MessageFlags['Ephemeral']
            });
        }
    } catch (_0x2e5102) {
        console["error"](_0x2e5102);
        if (_0x26841a["deferred"]) return _0x26841a["editReply"](tr(settings(_0x26841a['guild']?.['id'] || ''), 'anError'));
        if (!_0x26841a['replied']) return _0x26841a["reply"]({
            'content': tr(settings(_0x26841a['guild']?.['id'] || ''), 'anError'),
            'flags': MessageFlags['Ephemeral']
        });
    }
});
const spam = new Map();
setInterval(() => {
    const _0xd6bd28 = _0x15878f,
        _0x1348cf = 0x7530,
        _0x4f4ff5 = Date['now']();
    for (const [_0x42f245, _0x1755a3] of spam) {
        const _0x1d9efa = _0x1755a3['filter'](_0x415b98 => _0x4f4ff5 - _0x415b98 < _0x1348cf);
        if (_0x1d9efa['length']) spam["set"](_0x42f245, _0x1d9efa);
        else spam["delete"](_0x42f245);
    }
}, 0x7530), setInterval(() => {
    const _0x5e8e7f = _0x15878f,
        _0x186b98 = 0x493e0,
        _0x534a17 = Date["now"]();
    for (const [_0x531b58, _0x910bec] of settingsCache) {
        if (_0x910bec["_merged"] && _0x910bec['_lastAccess'] && _0x534a17 - _0x910bec["_lastAccess"] > _0x186b98) delete _0x910bec['_merged'];
    }
}, 0xea60), client['on']("messageCreate", async _0x3a1ef0 => {
    const _0x44adc2 = _0x15878f;
    if (!_0x3a1ef0["guild"] || _0x3a1ef0['author']["bot"]) return;
    const _0x4c2a30 = settings(_0x3a1ef0['guild']['id']),
        _0x3ecfdb = sanitize(_0x3a1ef0["content"], 0x7d0);
    if (_0x4c2a30['captcha']["enabled"] && _0x4c2a30['captcha']["channelId"] && _0x3a1ef0["channel"]['id'] === _0x4c2a30['captcha']['channelId']) {
        const _0x378e53 = _0x3a1ef0['member'];
        if (!_0x378e53) return;
        if (_0x4c2a30["captcha"]["verifiedRoleId"] && _0x378e53["roles"]["cache"]['has'](_0x4c2a30["captcha"]['verifiedRoleId'])) return _0x3a1ef0["delete"]()["catch"](() => {});
        const _0x606791 = _0x3a1ef0["guild"]['_captchaAnswers'] && _0x3a1ef0['guild']['_captchaAnswers']["get"]('current');
        if (!_0x606791) return;
        const _0x3cc13f = Number(_0x3ecfdb["trim"]());
        if (isNaN(_0x3cc13f)) return;
        if (_0x3cc13f === _0x606791["answer"]) {
            await _0x3a1ef0["delete"]()['catch'](() => {});
            if (_0x4c2a30["captcha"]["unverifiedRoleId"]) await _0x378e53['roles']['remove'](_0x4c2a30["captcha"]["unverifiedRoleId"])['catch'](() => {});
            if (_0x4c2a30["captcha"]['verifiedRoleId']) await _0x378e53['roles']["add"](_0x4c2a30["captcha"]['verifiedRoleId'], "Captcha résolu")["catch"](() => {});
            await sendRichLog(_0x3a1ef0["guild"], "security", new EmbedBuilder()['setColor']("#57F287")["setTitle"]("🔐 Captcha réussi")['setTimestamp']()["addFields"]({
                'name': 'Membre',
                'value': '<@' + _0x378e53['id'] + '>',
                'inline': !![]
            })["addFields"]({
                'name': 'ID',
                'value': _0x378e53['id'],
                'inline': !![]
            }));
            if (_0x4c2a30["rules"]['channelId']) {
                const _0x5c4189 = _0x3a1ef0['guild']['channels']["cache"]["get"](_0x4c2a30['rules']["channelId"]);
                if (isSendable(_0x5c4189)) {
                    const _0x2d1c95 = await _0x5c4189['send']({
                        'embeds': [new EmbedBuilder()["setColor"]('#5865F2')["setTitle"]('📜\x20Règlement')["setDescription"](_0x4c2a30["rules"]['text'] + '\x0a\x0a' + tr(_0x4c2a30, "rulesAccept"))['setFooter']({
                            'text': "DashBot • " + _0x3a1ef0['guild']["name"]
                        })["setTimestamp"]()]
                    });
                    await _0x2d1c95["react"]('✅');
                }
            }
        } else {
            await _0x3a1ef0["delete"]()["catch"](() => {}), await sendRichLog(_0x3a1ef0["guild"], "security", new EmbedBuilder()['setColor']('#ED4245')['setTitle']('❌\x20Captcha\x20échoué')["setTimestamp"]()['addFields']({
                'name': 'Membre',
                'value': '<@' + _0x378e53['id'] + '>',
                'inline': !![]
            })["addFields"]({
                'name': 'ID',
                'value': _0x378e53['id'],
                'inline': !![]
            })["addFields"]({
                'name': "Réponse",
                'value': _0x3ecfdb['slice'](0x0, 0x400)
            }));
            const _0x1b66e2 = Math['floor'](Math['random']() * 0x14) + 0x1,
                _0x2f9aa0 = Math['floor'](Math["random"]() * 0x14) + 0x1,
                _0x53130e = ['+', '-', '*'],
                _0x201a6a = _0x53130e[Math['floor'](Math["random"]() * _0x53130e['length'])];
            let _0x5e95c4;
            if (_0x201a6a === '+') _0x5e95c4 = _0x1b66e2 + _0x2f9aa0;
            else {
                if (_0x201a6a === '-') _0x5e95c4 = _0x1b66e2 - _0x2f9aa0;
                else _0x5e95c4 = _0x1b66e2 * _0x2f9aa0;
            }
            _0x3a1ef0["guild"]["_captchaAnswers"]["set"]("current", {
                'a': _0x1b66e2,
                'op': _0x201a6a,
                'b': _0x2f9aa0,
                'answer': _0x5e95c4
            }), await _0x3a1ef0["channel"]["send"]({
                'embeds': [new EmbedBuilder()['setColor']('#ED4245')['setTitle']('❌\x20Mauvaise\x20réponse')['setDescription']('**' + _0x1b66e2 + '\x20' + _0x201a6a + '\x20' + _0x2f9aa0 + '\x20=\x20/**\x0a\x0aRéessaie.')['setTimestamp']()]
            })["then"](_0x9830d8 => setTimeout(() => _0x9830d8["delete"]()["catch"](() => {}), 0x1388));
        }
        return;
    }
    if (_0x4c2a30['autoMod']['enabled']) {
        const _0x47b735 = _0x4c2a30["autoMod"],
            _0x56dc06 = _0x47b735["exemptRoles"]['some'](_0x1ffe72 => member["roles"]["cache"]["has"](_0x1ffe72)),
            _0x542ca5 = _0x47b735['exemptChannels']["includes"](_0x3a1ef0["channelId"]),
            _0x445088 = _0x47b735['exemptMembers']['includes'](_0x3a1ef0["author"]['id']);
        if (!_0x56dc06 && !_0x542ca5 && !_0x445088) {
            let _0x429777 = [];
            if (_0x47b735["spam"]['enabled']) {
                const _0x545f26 = _0x3a1ef0['guild']['id'] + ':' + _0x3a1ef0['author']['id'],
                    _0x5825fc = Date["now"](),
                    _0x1fef5e = (spam["get"](_0x545f26) || [])['filter'](_0x2c25cb => _0x5825fc - _0x2c25cb < _0x47b735["spam"]['intervalSeconds'] * 0x3e8);
                _0x1fef5e["push"](_0x5825fc), spam['set'](_0x545f26, _0x1fef5e);
                if (_0x1fef5e['length'] > _0x47b735["spam"]['maxMessages']) _0x429777['push']("spam");
            }
            if (_0x47b735['mentions']["enabled"] && _0x3a1ef0["mentions"]["users"]['size'] + _0x3a1ef0["mentions"]['roles']["size"] >= _0x47b735["mentions"]['maxMentions']) _0x429777['push']('mentions');
            if (_0x47b735["links"]["enabled"] && /https?:\/\/\S+/i ['test'](_0x3ecfdb)) _0x429777["push"]("links");
            if (_0x47b735['invites']['enabled'] && /discord(?:\.gg|\.com\/invite)\/\S+/i ["test"](_0x3ecfdb)) _0x429777['push']('invites');
            if (_0x47b735['insults']["enabled"] && _0x47b735['insults']['words'] && _0x47b735["insults"]['words']["some"](_0x37d48c => _0x3ecfdb['toLowerCase']()['includes'](_0x37d48c))) _0x429777["push"]("insults");
            if (_0x47b735["wordBlacklist"]["enabled"] && _0x47b735['wordBlacklist']['words'] && _0x47b735["wordBlacklist"]['words']['some'](_0x5d9449 => _0x3ecfdb["toLowerCase"]()['includes'](_0x5d9449))) _0x429777['push']("wordBlacklist");
            if (_0x429777["length"]) {
                const _0x20b7d2 = _0x429777[0x0],
                    _0x368e46 = _0x47b735['actions'][_0x20b7d2] || "delete",
                    _0x1f128c = _0x429777['map'](_0x330085 => tr(_0x4c2a30, {
                        'spam': "⏩ Anti-spam",
                        'mentions': "📢 Mentions excessives",
                        'links': '🔗\x20Lien\x20bloqué',
                        'invites': '📨\x20Invitation\x20bloquée',
                        'insults': "🤬 Insulte",
                        'wordBlacklist': '🚫\x20Mot\x20interdit'
                    } [_0x330085] || _0x330085))["join"](',\x20');
                ["spam", "mentions", "links", 'invites', "insults", "wordBlacklist"]["includes"](_0x20b7d2) && await _0x3a1ef0["delete"]()["catch"](() => {});
                if (_0x47b735["autoWarn"] && !_0x3a1ef0['author']["bot"]) {
                    const _0x5c54d0 = getWarns(_0x3a1ef0['guild']['id']);
                    if (!_0x5c54d0[_0x3a1ef0["author"]['id']]) _0x5c54d0[_0x3a1ef0['author']['id']] = {
                        'count': 0x0,
                        'history': []
                    };
                    _0x5c54d0[_0x3a1ef0["author"]['id']]['count']++, _0x5c54d0[_0x3a1ef0["author"]['id']]['history']["push"]({
                        'reason': '[AutoMod]\x20' + _0x1f128c,
                        'moderatorId': client['user']['id'],
                        'date': Date["now"]()
                    }), saveWarns(_0x3a1ef0["guild"]['id']), await checkAutoSanctions(_0x3a1ef0["guild"], member, 'AutoMod\x20:\x20' + _0x1f128c, _0x20b7d2);
                }
                await sendRichLog(_0x3a1ef0["guild"], "security", new EmbedBuilder()["setColor"]('#ED4245')["setTitle"]('🔒\x20AutoMod\x20:\x20Message\x20supprimé')['setTimestamp']()['addFields']({
                    'name': 'Auteur',
                    'value': '<@' + _0x3a1ef0["author"]['id'] + '>',
                    'inline': !![]
                })['addFields']({
                    'name': 'Salon',
                    'value': '<#' + _0x3a1ef0["channelId"] + '>',
                    'inline': !![]
                })["addFields"]({
                    'name': 'Raison',
                    'value': _0x1f128c['slice'](0x0, 0x400)
                })["addFields"]({
                    'name': 'Action',
                    'value': _0x368e46,
                    'inline': !![]
                })["addFields"]({
                    'name': 'Contenu',
                    'value': _0x3a1ef0["content"]['slice'](0x0, 0x400) || "*Aucun contenu*"
                }));
                return;
            }
        }
    }
    if (_0x4c2a30["security"]['enabled']) {
        const _0x21b814 = _0x4c2a30['security']["antiLinks"] && /https?:\/\/\S+/i ["test"](_0x3ecfdb),
            _0x3465f1 = _0x4c2a30['security']["antiInvites"] && /discord(?:\.gg|\.com\/invite)\/\S+/i ['test'](_0x3ecfdb),
            _0x39e566 = _0x3a1ef0['mentions']["users"]["size"] + _0x3a1ef0['mentions']['roles']["size"] >= _0x4c2a30["security"]["mentionLimit"],
            _0x1c71c7 = _0x3a1ef0["guild"]['id'] + ':' + _0x3a1ef0["author"]['id'],
            _0x4a9dbb = Date['now'](),
            _0x5d8e11 = (spam['get'](_0x1c71c7) || [])["filter"](_0xecbf18 => _0x4a9dbb - _0xecbf18 < _0x4c2a30['security']["intervalSeconds"] * 0x3e8);
        _0x5d8e11["push"](_0x4a9dbb), spam["set"](_0x1c71c7, _0x5d8e11);
        if (_0x21b814 || _0x3465f1 || _0x39e566 || _0x4c2a30["security"]["antiSpam"] && _0x5d8e11["length"] > _0x4c2a30['security']["maxMessages"]) {
            await _0x3a1ef0["delete"]()["catch"](() => {}), await sendRichLog(_0x3a1ef0["guild"], "security", new EmbedBuilder()['setColor']("#ED4245")['setTitle']('🔒\x20Message\x20supprimé\x20(filtre\x20sécurité)')['setTimestamp']()['addFields']({
                'name': 'Auteur',
                'value': '<@' + _0x3a1ef0["author"]['id'] + '>',
                'inline': !![]
            })["addFields"]({
                'name': "Salon",
                'value': '<#' + _0x3a1ef0['channelId'] + '>',
                'inline': !![]
            })['addFields']({
                'name': "Raison",
                'value': '' + (_0x21b814 ? '🔗\x20Lien\x20bloqué\x20' : '') + (_0x3465f1 ? '📨\x20Invitation\x20bloquée\x20' : '') + (_0x39e566 ? "📢 Mentions excessives " : '') + (_0x4c2a30["security"]['antiSpam'] && _0x5d8e11['length'] > _0x4c2a30['security']['maxMessages'] ? '⏩\x20Anti-spam' : '')
            })['addFields']({
                'name': "Contenu",
                'value': _0x3a1ef0["content"]['slice'](0x0, 0x400) || '*Aucun\x20contenu*'
            }));
            return;
        }
    }
    if (_0x4c2a30['announcements']?.['enabled'] && _0x4c2a30["announcements"]["channelId"] && _0x3a1ef0['channel']['id'] === _0x4c2a30['announcements']["channelId"] && _0x4c2a30["announcements"]['pingRoleId']) {
        if (!_0x3a1ef0['author']["bot"]) await _0x3a1ef0['reply']('<@&' + _0x4c2a30["announcements"]["pingRoleId"] + '>')["catch"](() => {});
    }
    if (_0x4c2a30['socialNotifs']?.['enabled'] && _0x4c2a30['socialNotifs']["channelId"]) {
        const _0x2696ac = String(_0x3a1ef0["guild"]['id']),
            _0x5cb306 = getEcon('soc_' + _0x2696ac);
        if (!_0x5cb306[_0x3a1ef0['author']['id']]) _0x5cb306[_0x3a1ef0["author"]['id']] = {
            'lastSeen': Date['now']()
        }, saveEcon("soc_" + _0x2696ac);
        else {
            const _0x452dbd = (Date['now']() - _0x5cb306[_0x3a1ef0['author']['id']]["lastSeen"]) / 0x5265c00;
            if (_0x452dbd > 0x7) {
                const _0xf2608a = _0x3a1ef0['guild']["channels"]["cache"]["get"](_0x4c2a30['socialNotifs']["channelId"]);
                if (isSendable(_0xf2608a)) _0xf2608a['send']('🔔\x20<@' + _0x3a1ef0["author"]['id'] + "> est de retour après **" + Math['floor'](_0x452dbd) + '\x20jours**\x20!')["catch"](() => {});
            }
            _0x5cb306[_0x3a1ef0["author"]['id']]["lastSeen"] = Date['now'](), saveEcon("soc_" + _0x2696ac);
        }
    }
    if (_0x4c2a30['wordReactions']?.['enabled'])
        for (const _0x5bd561 of _0x4c2a30['wordReactions']['items'] || []) {
            _0x3ecfdb["toLowerCase"]()['includes'](_0x5bd561['word']) && await _0x3a1ef0["react"](_0x5bd561['reaction'])["catch"](() => {});
        }
    if (_0x4c2a30['levels']?.['enabled'] || _0x4c2a30["economy"]?.['enabled']) {
        const _0x1cea05 = String(_0x3a1ef0["guild"]['id']),
            _0xe0e112 = _0x3a1ef0['author']['id'];
        if (_0x4c2a30['levels']?.["enabled"]) {
            const _0x1134e7 = getLevels(_0x1cea05);
            if (!_0x1134e7[_0xe0e112]) _0x1134e7[_0xe0e112] = {
                'xp': 0x0,
                'level': 0x0,
                'messages': 0x0
            };
            _0x1134e7[_0xe0e112]['xp'] += _0x4c2a30["levels"]["xpPerMessage"] || 0xf, _0x1134e7[_0xe0e112]['messages']++;
            const _0x1af6bb = _0x1134e7[_0xe0e112]["level"] * 0x32 + 0x64;
            if (_0x1134e7[_0xe0e112]['xp'] >= _0x1af6bb) {
                _0x1134e7[_0xe0e112]['level']++, _0x1134e7[_0xe0e112]['xp'] = 0x0;
                const _0x3dbe81 = (_0x4c2a30["levels"]["message"] || t(_0x4c2a30, 'levelUp', {
                        'user': _0xe0e112,
                        'level': _0x1134e7[_0xe0e112]['level']
                    }))['replace']("{user}", '<@' + _0xe0e112 + '>')['replace']('{level}', _0x1134e7[_0xe0e112]['level']),
                    _0x5e26d2 = _0x4c2a30["levels"]["channelId"] ? await _0x3a1ef0['guild']['channels']['fetch'](_0x4c2a30["levels"]["channelId"])["catch"](() => null) : null;
                (_0x5e26d2 || _0x3a1ef0['channel'])["send"](_0x3dbe81)["catch"](() => {});
            }
            saveLevels(_0x1cea05);
        }
        if (_0x4c2a30["economy"]?.['enabled']) {
            const _0x4a0ee8 = getEcon(_0x1cea05);
            if (!_0x4a0ee8[_0xe0e112]) _0x4a0ee8[_0xe0e112] = {
                'balance': 0x0,
                'lastDaily': 0x0
            };
            _0x4a0ee8[_0xe0e112]["balance"] += Math['floor'](Math["random"]() * 0x3) + 0x1, saveEcon(_0x1cea05);
        }
    }
}), client['on']("guildMemberAdd", async _0x4e28ba => {
    const _0x5786d7 = _0x15878f,
        _0x3cf0df = settings(_0x4e28ba['guild']['id']);
    if (_0x3cf0df['autoMod']['enabled']) {
        const _0x5e7bd1 = _0x3cf0df["autoMod"],
            _0x2fe337 = _0x5e7bd1['exemptMembers']['includes'](_0x4e28ba['id']);
        if (!_0x2fe337 && !_0x4e28ba["user"]['bot']) {
            if (_0x5e7bd1["recentAccounts"]['enabled']) {
                const _0x503da5 = _0x5e7bd1["recentAccounts"]['maxDays'] || 0x7,
                    _0x1bd021 = (Date['now']() - _0x4e28ba['user']["createdTimestamp"]) / 0x5265c00;
                if (_0x1bd021 < _0x503da5) {
                    const _0xd8af2c = _0x5e7bd1["actions"]["recentAccounts"] || "kick",
                        _0x410933 = "AutoMod : compte créé il y a " + Math["floor"](_0x1bd021) + " jour(s) (< " + _0x503da5 + " jours)";
                    try {
                        if (_0xd8af2c === 'ban') await _0x4e28ba['ban']({
                            'reason': _0x410933
                        })["catch"](() => {});
                        else await _0x4e28ba['kick'](_0x410933)["catch"](() => {});
                    } catch {}
                    await sendRichLog(_0x4e28ba["guild"], "security", new EmbedBuilder()['setColor']("#ED4245")['setTitle']("🆕 AutoMod : Compte récent")["setTimestamp"]()["addFields"]({
                        'name': "Membre",
                        'value': '<@' + _0x4e28ba['id'] + '>',
                        'inline': !![]
                    })["addFields"]({
                        'name': 'Âge',
                        'value': Math["floor"](_0x1bd021) + '\x20jour(s)',
                        'inline': !![]
                    })["addFields"]({
                        'name': 'Action',
                        'value': _0xd8af2c,
                        'inline': !![]
                    }));
                    return;
                }
            }
            if (_0x5e7bd1['raid']['enabled']) {
                const _0x6ee7a6 = Date["now"](),
                    _0x1cf8ee = (_0x5e7bd1["raid"]["intervalMinutes"] || 0x5) * 0xea60;
                if (!_0x4e28ba["guild"]['_raidJoins']) _0x4e28ba['guild']["_raidJoins"] = [];
                _0x4e28ba["guild"]['_raidJoins']['push'](_0x6ee7a6), _0x4e28ba['guild']["_raidJoins"] = _0x4e28ba["guild"]['_raidJoins']["filter"](_0x16e691 => _0x6ee7a6 - _0x16e691 < _0x1cf8ee);
                if (_0x4e28ba["guild"]['_raidJoins']['length'] >= (_0x5e7bd1["raid"]['maxJoins'] || 0xa)) {
                    const _0x1e21ae = _0x5e7bd1['actions']["raid"] || "kick",
                        _0x1f9781 = "AutoMod : raid détecté (" + _0x4e28ba['guild']["_raidJoins"]['length'] + " arrivées en " + (_0x5e7bd1["raid"]["intervalMinutes"] || 0x5) + 'min)';
                    try {
                        if (_0x1e21ae === 'ban') await _0x4e28ba['ban']({
                            'reason': _0x1f9781
                        })['catch'](() => {});
                        else await _0x4e28ba["kick"](_0x1f9781)['catch'](() => {});
                    } catch {}
                    await sendRichLog(_0x4e28ba["guild"], 'security', new EmbedBuilder()["setColor"]("#ED4245")['setTitle']('⚔️\x20AutoMod\x20:\x20Anti-raid')["setTimestamp"]()['addFields']({
                        'name': 'Membre',
                        'value': '<@' + _0x4e28ba['id'] + '>',
                        'inline': !![]
                    })["addFields"]({
                        'name': "Arrivées",
                        'value': _0x4e28ba["guild"]["_raidJoins"]['length'] + '\x20en\x20' + (_0x5e7bd1['raid']['intervalMinutes'] || 0x5) + 'min',
                        'inline': !![]
                    })['addFields']({
                        'name': 'Action',
                        'value': _0x1e21ae,
                        'inline': !![]
                    }));
                    return;
                }
            }
        }
        if (_0x5e7bd1["botProtection"]['enabled'] && _0x4e28ba["user"]["bot"]) {
            const _0x14835f = _0x5e7bd1['exemptRoles']["some"](_0x5d3685 => _0x4e28ba["roles"]["cache"]['has'](_0x5d3685));
            if (!_0x14835f) {
                const _0x52d4bd = _0x5e7bd1["actions"]['botProtection'] || "kick",
                    _0x182389 = "AutoMod : bot non autorisé (" + _0x4e28ba['user']['tag'] + ')';
                try {
                    if (_0x52d4bd === 'ban') await _0x4e28ba["ban"]({
                        'reason': _0x182389
                    })['catch'](() => {});
                    else await _0x4e28ba["kick"](_0x182389)['catch'](() => {});
                } catch {}
                await sendRichLog(_0x4e28ba["guild"], "security", new EmbedBuilder()['setColor']('#ED4245')['setTitle']("🤖 AutoMod : Bot non autorisé")["setTimestamp"]()["addFields"]({
                    'name': 'Bot',
                    'value': '<@' + _0x4e28ba['id'] + '>',
                    'inline': !![]
                })["addFields"]({
                    'name': "Action",
                    'value': _0x52d4bd,
                    'inline': !![]
                }));
                return;
            }
        }
    }
    _0x3cf0df['captcha']['enabled'] && _0x3cf0df["captcha"]['unverifiedRoleId'] && await _0x4e28ba['roles']['add'](_0x3cf0df["captcha"]['unverifiedRoleId'], 'Captcha\x20non\x20résolu')["catch"](() => {});
    _0x3cf0df["autoRole"]?.['enabled'] && _0x3cf0df['autoRole']['roleId'] && !_0x3cf0df['captcha']['enabled'] && await _0x4e28ba['roles']["add"](_0x3cf0df["autoRole"]['roleId'], 'Rôle\x20auto\x20DashBot')['catch'](() => {});
    const _0x1374fc = _0x3cf0df['welcome'];
    if (_0x1374fc["enabled"]) {
        const _0x44c992 = _0x4e28ba["guild"]["channels"]['cache']["get"](_0x1374fc["channelId"]);
        if (isSendable(_0x44c992)) {
            const _0x4e517e = _0x1374fc['welcomeText']["replaceAll"]('{user}', '<@' + _0x4e28ba['id'] + '>')["replaceAll"]("{server}", _0x4e28ba["guild"]['name'])["replaceAll"]('{memberCount}', String(_0x4e28ba['guild']['memberCount']));
            await _0x44c992["send"]({
                'embeds': [new EmbedBuilder()['setColor']('#57F287')["setTitle"](tr(_0x3cf0df, 'welcomeTitle'))['setDescription'](_0x4e517e)["setThumbnail"](_0x4e28ba["user"]["displayAvatarURL"]())['setTimestamp']()]
            })["catch"](console["error"]);
        }
        if (_0x1374fc["roleId"]) await _0x4e28ba['roles']['add'](_0x1374fc['roleId'], tr(_0x3cf0df, "autoRoleLog"))['catch'](console["error"]);
    }
    await sendRichLog(_0x4e28ba["guild"], "member", new EmbedBuilder()['setColor']("#57F287")['setTitle']("👋 Membre arrivé")["setTimestamp"]()['setThumbnail'](_0x4e28ba["user"]['displayAvatarURL']())['addFields']({
        'name': "Membre",
        'value': _0x4e28ba["user"]['tag'] + " (<@" + _0x4e28ba['id'] + '>)',
        'inline': !![]
    })['addFields']({
        'name': 'ID',
        'value': _0x4e28ba['id'],
        'inline': !![]
    })['addFields']({
        'name': 'Compte\x20créé',
        'value': '<t:' + Math["floor"](_0x4e28ba['user']['createdTimestamp'] / 0x3e8) + ':R>',
        'inline': !![]
    })['addFields']({
        'name': "Membres",
        'value': String(_0x4e28ba['guild']['memberCount']),
        'inline': !![]
    }));
}), client['on']("guildMemberRemove", async _0x2cd762 => {
    const _0x407ca4 = _0x15878f,
        _0x3515c0 = settings(_0x2cd762['guild']['id']),
        _0x2a6f52 = _0x3515c0["welcome"];
    if (_0x2a6f52["leaveEnabled"]) {
        const _0x5d6fe5 = _0x2cd762['guild']["channels"]["cache"]["get"](_0x2a6f52["leaveChannelId"]);
        if (isSendable(_0x5d6fe5)) {
            const _0x1a6eaf = _0x2a6f52["leaveText"]['replaceAll']("{user}", _0x2cd762["user"]['tag'])["replaceAll"]("{server}", _0x2cd762['guild']["name"]);
            await _0x5d6fe5["send"]({
                'embeds': [new EmbedBuilder()["setColor"]('#ED4245')['setTitle'](tr(_0x3515c0, "goodbyeTitle"))["setDescription"](_0x1a6eaf)['setThumbnail'](_0x2cd762['user']["displayAvatarURL"]())['setTimestamp']()]
            })['catch'](console["error"]);
        }
    }
    let _0x398420 = '';
    try {
        const _0x1d1e62 = await _0x2cd762['guild']["fetchAuditLogs"]({
            'type': 0x14,
            'limit': 0x5
        })['catch'](() => null);
        if (_0x1d1e62) {
            const _0xcb3a42 = _0x1d1e62["entries"]['find'](_0x2749a3 => _0x2749a3['target']?.['id'] === _0x2cd762['id'] && Date["now"]() - _0x2749a3['createdTimestamp'] < 0x1388);
            if (_0xcb3a42) _0x398420 = '\x0aExpulsé\x20par\x20:\x20<@' + _0xcb3a42['executor']?.['id'] + '>';
        }
    } catch {}
    await sendRichLog(_0x2cd762['guild'], "leave", new EmbedBuilder()["setColor"]('#ED4245')["setTitle"](_0x398420 ? "👢 Membre expulsé" : '🚪\x20Membre\x20parti')['setTimestamp']()["setThumbnail"](_0x2cd762["user"]["displayAvatarURL"]())['addFields']({
        'name': "Membre",
        'value': _0x2cd762["user"]["tag"] + '\x20(<@' + _0x2cd762['id'] + '>)',
        'inline': !![]
    })['addFields']({
        'name': 'ID',
        'value': _0x2cd762['id'],
        'inline': !![]
    })["addFields"]({
        'name': 'Membres',
        'value': String(_0x2cd762["guild"]["memberCount"]),
        'inline': !![]
    }));
}), client['on']('messageReactionAdd', async (_0x39d577, _0x39a77f) => {
    const _0x165782 = _0x15878f;
    if (_0x39a77f['bot']) return;
    if (_0x39d577['partial']) await _0x39d577['fetch']()["catch"](() => {});
    const _0x38a844 = _0x39d577["message"]['guild'];
    if (!_0x38a844) return;
    const _0x2a5cf8 = settings(_0x38a844['id']);
    if (_0x2a5cf8['captcha']["enabled"] && _0x2a5cf8["rules"]['channelId'] && _0x39d577['message']["channel"]['id'] === _0x2a5cf8["rules"]['channelId'] && (_0x39d577['emoji']["name"] === '✅' || _0x39d577['emoji']['id'] === '✅')) {
        const _0x16f0c5 = await _0x38a844['members']["fetch"](_0x39a77f['id'])['catch'](() => null);
        if (_0x16f0c5 && _0x2a5cf8['captcha']['verifiedRoleId'] && _0x16f0c5["roles"]["cache"]["has"](_0x2a5cf8["captcha"]["verifiedRoleId"])) {
            if (_0x2a5cf8["welcome"]['roleId']) await _0x16f0c5['roles']["add"](_0x2a5cf8["welcome"]['roleId'], 'Règlement\x20accepté')['catch'](() => {});
            await sendRichLog(_0x38a844, 'security', new EmbedBuilder()["setColor"]("#57F287")["setTitle"]("📜 Règlement accepté")["setTimestamp"]()['addFields']({
                'name': 'Membre',
                'value': '<@' + _0x16f0c5['id'] + '>',
                'inline': !![]
            })["addFields"]({
                'name': 'ID',
                'value': _0x16f0c5['id'],
                'inline': !![]
            }));
        }
    }
}), client['on']('messageReactionRemove', async (_0x4624e7, _0x248ab6) => {
    const _0x4c34ee = _0x15878f;
    if (_0x248ab6["bot"]) return;
    if (_0x4624e7["partial"]) await _0x4624e7["fetch"]()['catch'](() => {});
}), client['on']('messageDelete', _0x2d89b6 => {
    const _0x5af14b = _0x15878f;
    if (!_0x2d89b6["guild"] || _0x2d89b6['author']?.["bot"]) return;
    const _0x7819ee = new EmbedBuilder()['setColor']('#ED4245')['setTitle']("🗑️ Message supprimé")["setTimestamp"]()["addFields"]({
        'name': 'Auteur',
        'value': '<@' + _0x2d89b6["author"]['id'] + "> (`" + _0x2d89b6["author"]['id'] + '`)',
        'inline': !![]
    })["addFields"]({
        'name': 'Salon',
        'value': '<#' + _0x2d89b6["channelId"] + '>',
        'inline': !![]
    });
    if (_0x2d89b6["content"]) _0x7819ee['addFields']({
        'name': 'Contenu',
        'value': _0x2d89b6['content']['slice'](0x0, 0x400)
    });
    if (_0x2d89b6['attachments']["size"]) _0x7819ee["addFields"]({
        'name': 'Pièces\x20jointes\x20(' + _0x2d89b6['attachments']["size"] + ')',
        'value': [..._0x2d89b6['attachments']["values"]()]['map'](_0x1f2ca0 => '[' + _0x1f2ca0["name"] + '](' + _0x1f2ca0['url'] + ')')['join']('\x0a')['slice'](0x0, 0x400)
    });
    sendRichLog(_0x2d89b6["guild"], "message", _0x7819ee);
}), client['on']('roleCreate', _0x5e84f2 => {
    const _0x503b1d = _0x15878f,
        _0xfce365 = new EmbedBuilder()["setColor"]("#57F287")["setTitle"]('➕\x20Rôle\x20créé')['setTimestamp']()['addFields']({
            'name': 'Nom',
            'value': _0x5e84f2['name'],
            'inline': !![]
        })["addFields"]({
            'name': 'ID',
            'value': _0x5e84f2['id'],
            'inline': !![]
        })['addFields']({
            'name': 'Couleur',
            'value': _0x5e84f2['hexColor'],
            'inline': !![]
        })["addFields"]({
            'name': 'Mentionnable',
            'value': _0x5e84f2['mentionable'] ? "Oui" : "Non",
            'inline': !![]
        });
    sendRichLog(_0x5e84f2['guild'], "role", _0xfce365);
}), client['on']("roleDelete", _0x2396fe => {
    const _0x360179 = _0x15878f,
        _0x316783 = new EmbedBuilder()["setColor"]("#ED4245")["setTitle"]("➖ Rôle supprimé")['setTimestamp']()["addFields"]({
            'name': "Nom",
            'value': _0x2396fe['name'],
            'inline': !![]
        })['addFields']({
            'name': 'ID',
            'value': _0x2396fe['id'],
            'inline': !![]
        })['addFields']({
            'name': "Couleur",
            'value': _0x2396fe["hexColor"],
            'inline': !![]
        });
    sendRichLog(_0x2396fe['guild'], "role", _0x316783);
}), client['on']('guildMemberUpdate', (_0x14c068, _0x4120f1) => {
    const _0x2a1ffc = _0x15878f,
        _0x433e54 = new EmbedBuilder()['setColor']('#FEE75C')["setTimestamp"]()["addFields"]({
            'name': "Membre",
            'value': '<@' + _0x4120f1['id'] + '>\x20(`' + _0x4120f1['id'] + '`)'
        });
    let _0x59896f = ![];
    _0x14c068['nickname'] !== _0x4120f1['nickname'] && (_0x433e54['setTitle']('✏️\x20Pseudo\x20modifié'), _0x59896f = !![], _0x433e54['addFields']({
        'name': 'Ancien\x20pseudo',
        'value': _0x14c068["nickname"] || _0x4120f1['user']['username'],
        'inline': !![]
    }), _0x433e54['addFields']({
        'name': 'Nouveau\x20pseudo',
        'value': _0x4120f1["nickname"] || _0x4120f1["user"]["username"],
        'inline': !![]
    }));
    _0x14c068["displayName"] !== _0x4120f1["displayName"] && (_0x433e54["setTitle"]("✏️ Nom affiché modifié"), _0x59896f = !![], _0x433e54['addFields']({
        'name': "Ancien",
        'value': _0x14c068['displayName'],
        'inline': !![]
    }), _0x433e54['addFields']({
        'name': "Nouveau",
        'value': _0x4120f1['displayName'],
        'inline': !![]
    }));
    _0x14c068["avatar"] !== _0x4120f1['avatar'] && (_0x433e54["setTitle"]("🖼️ Avatar modifié"), _0x59896f = !![], _0x433e54['setThumbnail'](_0x4120f1["displayAvatarURL"]()));
    if (_0x14c068['roles']["cache"]['size'] !== _0x4120f1["roles"]["cache"]['size']) {
        _0x433e54['setTitle']('🎭\x20Rôles\x20modifiés'), _0x59896f = !![];
        const _0x24d978 = _0x4120f1["roles"]['cache']["filter"](_0x5bc900 => !_0x14c068["roles"]["cache"]['has'](_0x5bc900['id'])),
            _0x4b7e8d = _0x14c068['roles']["cache"]["filter"](_0x228f93 => !_0x4120f1["roles"]["cache"]['has'](_0x228f93['id']));
        if (_0x24d978['size']) _0x433e54['addFields']({
            'name': '✅\x20Rôles\x20ajoutés\x20(' + _0x24d978['size'] + ')',
            'value': _0x24d978['map'](_0x289ad2 => _0x289ad2["toString"]())["join"](',\x20')["slice"](0x0, 0x400)
        });
        if (_0x4b7e8d['size']) _0x433e54["addFields"]({
            'name': "❌ Rôles retirés (" + _0x4b7e8d["size"] + ')',
            'value': _0x4b7e8d["map"](_0x807e2 => _0x807e2['toString']())["join"](',\x20')['slice'](0x0, 0x400)
        });
    }
    if (_0x59896f) sendRichLog(_0x4120f1['guild'], 'role', _0x433e54);
}), client['on']('channelCreate', _0x265e77 => {
    const _0x599e4b = _0x15878f;
    if (!_0x265e77["guild"]) return;
    const _0x17448e = {
            0x0: 'Texte',
            0x2: 'Vocal',
            0x4: "Catégorie",
            0x5: "Annonce",
            0xd: "Fil",
            0xf: "Forum"
        },
        _0x14f7af = new EmbedBuilder()["setColor"]('#57F287')['setTitle']("➕ Salon créé")['setTimestamp']()["addFields"]({
            'name': 'Nom',
            'value': _0x265e77['name'],
            'inline': !![]
        })['addFields']({
            'name': "Type",
            'value': _0x17448e[_0x265e77['type']] || 'Inconnu',
            'inline': !![]
        })['addFields']({
            'name': 'ID',
            'value': _0x265e77['id'],
            'inline': !![]
        });
    if (_0x265e77['parent']) _0x14f7af['addFields']({
        'name': 'Catégorie',
        'value': _0x265e77["parent"]["name"],
        'inline': !![]
    });
    sendRichLog(_0x265e77["guild"], 'channel', _0x14f7af);
}), client['on']("channelDelete", _0x1d41db => {
    const _0x55ba36 = _0x15878f;
    if (!_0x1d41db["guild"]) return;
    const _0x3c2ec0 = {
            0x0: 'Texte',
            0x2: 'Vocal',
            0x4: 'Catégorie',
            0x5: 'Annonce',
            0xd: "Fil",
            0xf: "Forum"
        },
        _0x48ea23 = new EmbedBuilder()['setColor']("#ED4245")['setTitle']("➖ Salon supprimé")['setTimestamp']()["addFields"]({
            'name': "Nom",
            'value': _0x1d41db['name'],
            'inline': !![]
        })['addFields']({
            'name': "Type",
            'value': _0x3c2ec0[_0x1d41db["type"]] || "Inconnu",
            'inline': !![]
        })["addFields"]({
            'name': 'ID',
            'value': _0x1d41db['id'],
            'inline': !![]
        });
    if (_0x1d41db['parent']) _0x48ea23['addFields']({
        'name': "Catégorie",
        'value': _0x1d41db["parent"]["name"],
        'inline': !![]
    });
    sendRichLog(_0x1d41db["guild"], 'channel', _0x48ea23);
}), client['on']("channelUpdate", (_0x4206b4, _0x476948) => {
    const _0x34c5c8 = _0x15878f;
    if (!_0x476948['guild']) return;
    const _0x2716a8 = new EmbedBuilder()['setColor']('#FEE75C')["setTitle"]('✏️\x20Salon\x20modifié')['setTimestamp']()['addFields']({
        'name': 'Salon',
        'value': '<#' + _0x476948['id'] + '>',
        'inline': !![]
    })["addFields"]({
        'name': 'ID',
        'value': _0x476948['id'],
        'inline': !![]
    });
    let _0x3274e6 = ![];
    _0x4206b4["name"] !== _0x476948["name"] && (_0x2716a8["addFields"]({
        'name': "Ancien nom",
        'value': _0x4206b4["name"],
        'inline': !![]
    })["addFields"]({
        'name': "Nouveau nom",
        'value': _0x476948['name'],
        'inline': !![]
    }), _0x3274e6 = !![]);
    _0x4206b4['parentId'] !== _0x476948["parentId"] && _0x476948["parent"] && (_0x2716a8["addFields"]({
        'name': 'Catégorie',
        'value': _0x476948['parent']["name"]
    }), _0x3274e6 = !![]);
    _0x4206b4["type"] !== _0x476948['type'] && (_0x2716a8['addFields']({
        'name': "Type",
        'value': "Ancien: " + _0x4206b4["type"] + " → Nouveau: " + _0x476948['type']
    }), _0x3274e6 = !![]);
    _0x4206b4['topic'] !== _0x476948['topic'] && (_0x2716a8['addFields']({
        'name': "Ancien sujet",
        'value': (_0x4206b4['topic'] || '*vide*')['slice'](0x0, 0x400)
    })["addFields"]({
        'name': "Nouveau sujet",
        'value': (_0x476948['topic'] || "*vide*")["slice"](0x0, 0x400)
    }), _0x3274e6 = !![]);
    _0x4206b4["rateLimitPerUser"] !== _0x476948['rateLimitPerUser'] && (_0x2716a8['addFields']({
        'name': 'Slowmode',
        'value': (_0x4206b4['rateLimitPerUser'] || 0x0) + 's\x20→\x20' + (_0x476948['rateLimitPerUser'] || 0x0) + 's',
        'inline': !![]
    }), _0x3274e6 = !![]);
    _0x4206b4['nsfw'] !== _0x476948['nsfw'] && (_0x2716a8['addFields']({
        'name': 'NSFW',
        'value': _0x4206b4['nsfw'] ? '✅\x20→\x20❌' : "❌ → ✅",
        'inline': !![]
    }), _0x3274e6 = !![]);
    _0x4206b4["bitrate"] !== _0x476948['bitrate'] && (_0x2716a8["addFields"]({
        'name': "Débit",
        'value': (_0x4206b4['bitrate'] || 0x0) / 0x3e8 + 'kbps\x20→\x20' + (_0x476948['bitrate'] || 0x0) / 0x3e8 + "kbps",
        'inline': !![]
    }), _0x3274e6 = !![]);
    _0x4206b4['userLimit'] !== _0x476948["userLimit"] && (_0x2716a8['addFields']({
        'name': "Limite utilisateurs",
        'value': (_0x4206b4["userLimit"] || '∞') + '\x20→\x20' + (_0x476948["userLimit"] || '∞'),
        'inline': !![]
    }), _0x3274e6 = !![]);
    if (_0x3274e6) sendRichLog(_0x476948['guild'], 'channel', _0x2716a8);
}), client['on']("messageUpdate", (_0x300418, _0x10baac) => {
    const _0x2b3686 = _0x15878f;
    if (!_0x10baac['guild'] || _0x10baac["author"]?.['bot'] || !_0x300418["content"] || !_0x10baac['content'] || _0x300418['content'] === _0x10baac["content"]) return;
    sendRichLog(_0x10baac['guild'], 'message', new EmbedBuilder()['setColor']("#FEE75C")['setTitle']('✏️\x20Message\x20modifié')['setTimestamp']()["addFields"]({
        'name': 'Auteur',
        'value': '<@' + _0x10baac["author"]['id'] + '>',
        'inline': !![]
    })['addFields']({
        'name': 'Salon',
        'value': '<#' + _0x10baac['channelId'] + '>',
        'inline': !![]
    })["addFields"]({
        'name': 'Avant',
        'value': _0x300418["content"]['slice'](0x0, 0x400)
    })["addFields"]({
        'name': "Après",
        'value': _0x10baac["content"]["slice"](0x0, 0x400)
    }));
}), client['on']("messageDeleteBulk", _0x508391 => {
    const _0xc1c057 = _0x15878f,
        _0x11871b = _0x508391['first']();
    if (!_0x11871b?.["guild"]) return;
    sendRichLog(_0x11871b['guild'], 'message', new EmbedBuilder()["setColor"]("#ED4245")['setTitle']('🗑️\x20Suppression\x20en\x20masse')["setTimestamp"]()['addFields']({
        'name': 'Salon',
        'value': '<#' + _0x11871b["channelId"] + '>',
        'inline': !![]
    })['addFields']({
        'name': 'Messages',
        'value': String(_0x508391["size"]),
        'inline': !![]
    }));
}), client['on']("guildBanAdd", _0x2b72ea => {
    const _0x34b6d6 = _0x15878f;
    sendRichLog(_0x2b72ea['guild'], "moderation", new EmbedBuilder()["setColor"]("#ED4245")['setTitle']('🔨\x20Membre\x20banni')["setTimestamp"]()['setThumbnail'](_0x2b72ea['user']["displayAvatarURL"]())["addFields"]({
        'name': 'Membre',
        'value': _0x2b72ea["user"]["tag"] + " (<@" + _0x2b72ea['user']['id'] + '>)',
        'inline': !![]
    })['addFields']({
        'name': 'ID',
        'value': _0x2b72ea['user']['id'],
        'inline': !![]
    }));
}), client['on']('guildBanRemove', _0x247b9e => {
    const _0x332fe4 = _0x15878f;
    sendRichLog(_0x247b9e['guild'], 'moderation', new EmbedBuilder()['setColor']("#57F287")["setTitle"]('✅\x20Membre\x20débanni')['setTimestamp']()["setThumbnail"](_0x247b9e['user']["displayAvatarURL"]())['addFields']({
        'name': 'Membre',
        'value': _0x247b9e['user']["tag"] + '\x20(<@' + _0x247b9e["user"]['id'] + '>)',
        'inline': !![]
    })["addFields"]({
        'name': 'ID',
        'value': _0x247b9e['user']['id'],
        'inline': !![]
    }));
}), client['on']("guildUpdate", (_0x429405, _0x45adb1) => {
    const _0x4d20fe = _0x15878f,
        _0x14e872 = new EmbedBuilder()['setColor']("#FEE75C")["setTitle"]("📋 Serveur modifié")["setTimestamp"]();
    if (_0x429405["name"] !== _0x45adb1["name"]) _0x14e872['addFields']({
        'name': "Nom",
        'value': _0x429405["name"] + '\x20→\x20' + _0x45adb1['name']
    });
    if (_0x429405["description"] !== _0x45adb1['description']) _0x14e872['addFields']({
        'name': "Description",
        'value': (_0x429405['description'] || "*aucune*") + '\x20→\x20' + (_0x45adb1["description"] || '*aucune*')
    });
    if (_0x429405["vanityURLCode"] !== _0x45adb1['vanityURLCode']) _0x14e872['addFields']({
        'name': 'URL\x20personnalisée',
        'value': (_0x429405['vanityURLCode'] || '*aucune*') + " → " + (_0x45adb1['vanityURLCode'] || "*aucune*")
    });
    if (_0x14e872['data']['fields']?.['length']) sendRichLog(_0x45adb1, 'channel', _0x14e872);
}), client['on']("emojiCreate", _0x457d82 => {
    const _0x524af9 = _0x15878f;
    sendRichLog(_0x457d82["guild"], 'role', new EmbedBuilder()['setColor']('#57F287')["setTitle"]("➕ Emoji créé")["setTimestamp"]()['addFields']({
        'name': 'Nom',
        'value': _0x457d82["name"],
        'inline': !![]
    })['addFields']({
        'name': 'ID',
        'value': _0x457d82['id'],
        'inline': !![]
    })['addFields']({
        'name': 'Animé',
        'value': _0x457d82["animated"] ? 'Oui' : 'Non',
        'inline': !![]
    }));
}), client['on']('emojiDelete', _0x4a059c => {
    const _0x8f3572 = _0x15878f;
    sendRichLog(_0x4a059c['guild'], "role", new EmbedBuilder()['setColor']("#ED4245")['setTitle']('➖\x20Emoji\x20supprimé')['setTimestamp']()['addFields']({
        'name': 'Nom',
        'value': _0x4a059c['name'],
        'inline': !![]
    })["addFields"]({
        'name': 'ID',
        'value': _0x4a059c['id'],
        'inline': !![]
    }));
}), client['on']('emojiUpdate', (_0x44aa10, _0x49434c) => {
    const _0x486107 = _0x15878f;
    if (_0x44aa10["name"] === _0x49434c['name']) return;
    sendRichLog(_0x49434c['guild'], "role", new EmbedBuilder()["setColor"]('#FEE75C')["setTitle"]('✏️\x20Emoji\x20renommé')['setTimestamp']()["addFields"]({
        'name': 'ID',
        'value': _0x49434c['id'],
        'inline': !![]
    })['addFields']({
        'name': "Ancien nom",
        'value': _0x44aa10["name"],
        'inline': !![]
    })['addFields']({
        'name': "Nouveau nom",
        'value': _0x49434c["name"],
        'inline': !![]
    }));
}), client['on']('voiceStateUpdate', async (_0x32777d, _0x3d39ff) => {
    const _0x5566e2 = _0x15878f,
        _0x46629d = _0x3d39ff["member"] || _0x32777d['member'];
    if (!_0x46629d) return;
    const _0x6fbe55 = settings(_0x46629d["guild"]['id']),
        _0x5d1c5e = _0x6fbe55['tempVoices'];
    if (_0x5d1c5e['enabled'] && _0x5d1c5e["lobbyId"] && _0x3d39ff["channelId"] === _0x5d1c5e["lobbyId"]) {
        const _0x4184f2 = _0x46629d["guild"]['channels']["cache"]["get"](_0x5d1c5e['lobbyId']);
        if (!_0x4184f2 || _0x4184f2['type'] !== ChannelType['GuildVoice']) return;
        const _0x3627f1 = _0x4184f2['parentId'];
        const _0x4005f9 = await _0x46629d["guild"]["channels"]['create']({
            'name': _0x5d1c5e['nameFormat']['replaceAll']("{user}", _0x46629d['displayName'])["slice"](0x0, 0x64),
            'type': ChannelType['GuildVoice'],
            'parent': _0x3627f1,
            'topic': 'tv:' + _0x46629d['id'],
            'userLimit': _0x5d1c5e["userLimit"] || 0x0,
            'bitrate': _0x5d1c5e['bitrate'] || 0xfa00,
            'permissionOverwrites': [{
                'id': _0x46629d['guild']['id'],
                'allow': [PermissionFlagsBits['Connect']]
            }, {
                'id': _0x46629d['id'],
                'allow': [PermissionFlagsBits["ManageChannels"], PermissionFlagsBits["MoveMembers"], PermissionFlagsBits["Connect"]]
            }]
        })['catch'](() => null);
        _0x4005f9 && (await _0x46629d['voice']['disconnect']()['catch'](() => {}), await new Promise(_0x222e29 => setTimeout(_0x222e29, 0x3e8)), await _0x46629d['voice']["setChannel"](_0x4005f9)["catch"](() => {}), _0x46629d['send']({
            'embeds': [{
                'color': 0x57F287,
                'title': '🎧\x20Panneau\x20de\x20contrôle',
                'description': 'Gérez\x20votre\x20salon\x20vocal\x20temporaire\x20**' + _0x4005f9['name'] + '**'
            }],
            'components': [row(button('tv:rename:' + _0x4005f9['id'], 'Renommer', ButtonStyle['Secondary']), button('tv:limit:' + _0x4005f9['id'], 'Limite', ButtonStyle['Secondary']), button('tv:lock:' + _0x4005f9['id'], '🔒\x20Verrouiller', ButtonStyle['Secondary'])), row(button('tv:hide:' + _0x4005f9['id'], '👻\x20Masquer', ButtonStyle['Secondary']), button('tv:permit:' + _0x4005f9['id'], '✅\x20Permettre', ButtonStyle['Secondary']), button('tv:kick:' + _0x4005f9['id'], '❌\x20Expulser', ButtonStyle['Secondary']), button('tv:transfer:' + _0x4005f9['id'], '🔄\x20Transférer', ButtonStyle['Secondary']))]
        })['catch'](() => {}), sendRichLog(_0x46629d['guild'], "voice", new EmbedBuilder()['setColor']('#57F287')['setTitle']('🔊\x20Salon\x20vocal\x20créé')["setTimestamp"]()["addFields"]({
            'name': "Membre",
            'value': '<@' + _0x46629d['id'] + '>',
            'inline': !![]
        })["addFields"]({
            'name': 'Salon',
            'value': _0x4005f9["name"],
            'inline': !![]
        })));
    }
    if (_0x32777d['channelId'] !== _0x5d1c5e['lobbyId'] && _0x32777d['channel'] && _0x32777d['channel']['parentId'] === _0x32777d['guild']['channels']['cache']['get'](_0x5d1c5e['lobbyId'])?.['parentId'] && _0x32777d['channel']['members']['size'] === 0x0) {
        const _0x5324d7 = _0x32777d['channel']["name"];
        await _0x32777d['channel']['delete']('Salon\x20vocal\x20temporaire\x20vide')["catch"](() => {}), sendRichLog(_0x46629d["guild"], 'voice', new EmbedBuilder()["setColor"]("#ED4245")["setTitle"]('🔊\x20Salon\x20vocal\x20supprimé')["setTimestamp"]()["addFields"]({
            'name': "Salon",
            'value': _0x5324d7
        }));
        if (!_0x46629d['guild']['channels']["cache"]["has"](_0x5d1c5e["lobbyId"])) await setupTemporaryVoices(_0x46629d['guild'], _0x6fbe55)["catch"](() => {});
    }
    if (!_0x5d1c5e["enabled"] || !_0x5d1c5e["lobbyId"] || _0x3d39ff["channelId"] !== _0x5d1c5e['lobbyId']) {
        if (_0x3d39ff["channelId"] && !_0x32777d["channelId"]) sendRichLog(_0x46629d['guild'], "voice", new EmbedBuilder()['setColor']('#57F287')["setTitle"]('🔊\x20Connexion\x20vocale')['setTimestamp']()['addFields']({
            'name': "Membre",
            'value': '<@' + _0x46629d['id'] + '>',
            'inline': !![]
        })['addFields']({
            'name': 'Salon',
            'value': '<#' + _0x3d39ff['channelId'] + '>',
            'inline': !![]
        }));
        else {
            if (!_0x3d39ff["channelId"] && _0x32777d["channelId"]) sendRichLog(_0x46629d['guild'], 'voice', new EmbedBuilder()["setColor"]("#ED4245")["setTitle"]('🔊\x20Déconnexion\x20vocale')['setTimestamp']()['addFields']({
                'name': 'Membre',
                'value': '<@' + _0x46629d['id'] + '>',
                'inline': !![]
            })["addFields"]({
                'name': "Salon",
                'value': '<#' + _0x32777d['channelId'] + '>',
                'inline': !![]
            }));
            else _0x3d39ff["channelId"] && _0x32777d["channelId"] && _0x3d39ff['channelId'] !== _0x32777d["channelId"] && sendRichLog(_0x46629d['guild'], "voice", new EmbedBuilder()['setColor']('#FEE75C')['setTitle']("🔊 Changement de salon vocal")['setTimestamp']()['addFields']({
                'name': "Membre",
                'value': '<@' + _0x46629d['id'] + '>',
                'inline': !![]
            })['addFields']({
                'name': 'Ancien\x20salon',
                'value': '<#' + _0x32777d['channelId'] + '>',
                'inline': !![]
            })['addFields']({
                'name': "Nouveau salon",
                'value': '<#' + _0x3d39ff["channelId"] + '>',
                'inline': !![]
            }));
        }
        if (_0x32777d['channelId'] || _0x3d39ff["channelId"]) {
            if (_0x32777d["selfMute"] !== _0x3d39ff["selfMute"]) sendRichLog(_0x46629d["guild"], "voice", new EmbedBuilder()['setColor']('#FEE75C')['setTitle'](_0x3d39ff['selfMute'] ? '🔇\x20Micro\x20coupé' : '🔊\x20Micro\x20activé')['setTimestamp']()['addFields']({
                'name': 'Membre',
                'value': '<@' + _0x46629d['id'] + '>',
                'inline': !![]
            }));
            if (_0x32777d["selfDeaf"] !== _0x3d39ff['selfDeaf']) sendRichLog(_0x46629d['guild'], 'voice', new EmbedBuilder()['setColor']("#FEE75C")["setTitle"](_0x3d39ff["selfDeaf"] ? "🔇 Casque coupé" : "🔊 Casque activé")['setTimestamp']()['addFields']({
                'name': "Membre",
                'value': '<@' + _0x46629d['id'] + '>',
                'inline': !![]
            }));
            if (_0x32777d["selfVideo"] !== _0x3d39ff["selfVideo"]) sendRichLog(_0x46629d['guild'], 'voice', new EmbedBuilder()["setColor"]('#57F287')["setTitle"](_0x3d39ff['selfVideo'] ? "📷 Caméra activée" : '📷\x20Caméra\x20désactivée')['setTimestamp']()['addFields']({
                'name': "Membre",
                'value': '<@' + _0x46629d['id'] + '>',
                'inline': !![]
            }));
            if (_0x32777d['selfStream'] !== _0x3d39ff['selfStream']) sendRichLog(_0x46629d["guild"], 'voice', new EmbedBuilder()["setColor"]("#57F287")['setTitle'](_0x3d39ff['selfStream'] ? '🖥️\x20Partage\x20d\x27écran\x20activé' : '🖥️\x20Partage\x20d\x27écran\x20désactivé')["setTimestamp"]()["addFields"]({
                'name': "Membre",
                'value': '<@' + _0x46629d['id'] + '>',
                'inline': !![]
            }));
        }
    }
}), client['on']("inviteCreate", _0x5f599b => {
    const _0xadde7f = _0x15878f;
    if (!_0x5f599b["guild"]) return;
    sendRichLog(_0x5f599b['guild'], 'channel', new EmbedBuilder()['setColor']("#57F287")["setTitle"]("📨 Invitation créée")['setTimestamp']()["addFields"]({
        'name': 'Code',
        'value': _0x5f599b['code'],
        'inline': !![]
    })["addFields"]({
        'name': 'Salon',
        'value': '<#' + _0x5f599b["channelId"] + '>',
        'inline': !![]
    })['addFields']({
        'name': "Créateur",
        'value': '<@' + _0x5f599b["inviter"]?.['id'] + '>',
        'inline': !![]
    })["addFields"]({
        'name': 'Expire',
        'value': _0x5f599b['maxAge'] ? 'Dans\x20' + Math["round"](_0x5f599b["maxAge"] / 0x3c) + "min" : "Jamais",
        'inline': !![]
    })["addFields"]({
        'name': 'Utilisations\x20max',
        'value': String(_0x5f599b['maxUses'] || 'Illimité'),
        'inline': !![]
    }));
}), client['on']('inviteDelete', _0x216136 => {
    const _0x428eb5 = _0x15878f;
    if (!_0x216136['guild']) return;
    sendRichLog(_0x216136['guild'], 'channel', new EmbedBuilder()['setColor']("#ED4245")["setTitle"]('📨\x20Invitation\x20supprimée')["setTimestamp"]()["addFields"]({
        'name': "Code",
        'value': _0x216136["code"],
        'inline': !![]
    })["addFields"]({
        'name': "Salon",
        'value': '<#' + _0x216136["channelId"] + '>',
        'inline': !![]
    }));
}), client['on']('threadCreate', _0x2279e8 => {
    const _0x5556b6 = _0x15878f;
    if (!_0x2279e8['guild']) return;
    sendRichLog(_0x2279e8["guild"], 'channel', new EmbedBuilder()['setColor']('#57F287')['setTitle']("🧵 Fil créé")["setTimestamp"]()["addFields"]({
        'name': "Nom",
        'value': _0x2279e8['name'],
        'inline': !![]
    })["addFields"]({
        'name': 'ID',
        'value': _0x2279e8['id'],
        'inline': !![]
    })["addFields"]({
        'name': 'Salon\x20parent',
        'value': '<#' + _0x2279e8['parentId'] + '>',
        'inline': !![]
    })["addFields"]({
        'name': 'Type',
        'value': _0x2279e8['type'] === ChannelType['PrivateThread'] ? 'Privé' : 'Public',
        'inline': !![]
    }));
}), client['on']("threadDelete", _0x300891 => {
    const _0x585e23 = _0x15878f;
    if (!_0x300891['guild']) return;
    sendRichLog(_0x300891['guild'], 'channel', new EmbedBuilder()['setColor']('#ED4245')["setTitle"]('🧵\x20Fil\x20supprimé')["setTimestamp"]()["addFields"]({
        'name': 'Nom',
        'value': _0x300891["name"],
        'inline': !![]
    })["addFields"]({
        'name': 'ID',
        'value': _0x300891['id'],
        'inline': !![]
    })["addFields"]({
        'name': "Salon parent",
        'value': '<#' + _0x300891['parentId'] + '>',
        'inline': !![]
    }));
}), client['on']("threadUpdate", (_0x3a33b5, _0xfb7d38) => {
    const _0x47434d = _0x15878f;
    if (!_0xfb7d38["guild"]) return;
    const _0x17c3cd = new EmbedBuilder()["setColor"]('#FEE75C')["setTitle"]('🧵\x20Fil\x20modifié')['setTimestamp']()["addFields"]({
        'name': 'ID',
        'value': _0xfb7d38['id'],
        'inline': !![]
    });
    if (_0x3a33b5['name'] !== _0xfb7d38["name"]) _0x17c3cd["addFields"]({
        'name': "Ancien nom",
        'value': _0x3a33b5['name'],
        'inline': !![]
    })['addFields']({
        'name': "Nouveau nom",
        'value': _0xfb7d38['name'],
        'inline': !![]
    });
    if (!_0x3a33b5['archived'] && _0xfb7d38['archived']) _0x17c3cd["addFields"]({
        'name': 'Action',
        'value': 'Fil\x20archivé'
    });
    if (_0x3a33b5["archived"] && !_0xfb7d38["archived"]) _0x17c3cd["addFields"]({
        'name': 'Action',
        'value': 'Fil\x20désarchivé'
    });
    if (_0x17c3cd["data"]["fields"]?.["length"] > 0x1) sendRichLog(_0xfb7d38['guild'], "channel", _0x17c3cd);
}), client['on']("guildScheduledEventCreate", _0x97f878 => {
    const _0x15d62d = _0x15878f;
    sendRichLog(_0x97f878['guild'], "channel", new EmbedBuilder()["setColor"]('#57F287')["setTitle"]('📅\x20Événement\x20créé')['setTimestamp']()["addFields"]({
        'name': 'Nom',
        'value': _0x97f878["name"],
        'inline': !![]
    })["addFields"]({
        'name': "Description",
        'value': (_0x97f878["description"] || "*aucune*")["slice"](0x0, 0x400)
    })["addFields"]({
        'name': "Début",
        'value': "<t:" + Math['floor'](_0x97f878['scheduledStartTimestamp'] / 0x3e8) + ':F>',
        'inline': !![]
    })['addFields']({
        'name': "Lieu",
        'value': _0x97f878["entityType"] === 0x3 ? _0x97f878['entityMetadata']?.["location"] || 'En\x20ligne' : '<#' + _0x97f878["channelId"] + '>',
        'inline': !![]
    }));
}), client['on']("guildScheduledEventDelete", _0x53ab96 => {
    const _0xaa5108 = _0x15878f;
    sendRichLog(_0x53ab96["guild"], 'channel', new EmbedBuilder()['setColor']("#ED4245")["setTitle"]('📅\x20Événement\x20supprimé')['setTimestamp']()['addFields']({
        'name': "Nom",
        'value': _0x53ab96['name']
    }));
}), client['on']("guildScheduledEventUpdate", (_0x7015, _0x2e89fd) => {
    const _0x632160 = _0x15878f;
    if (!_0x2e89fd['guild']) return;
    const _0x5b59e1 = new EmbedBuilder()["setColor"]('#FEE75C')["setTitle"]('📅\x20Événement\x20modifié')['setTimestamp']()['addFields']({
        'name': 'ID',
        'value': _0x2e89fd['id'],
        'inline': !![]
    });
    if (_0x7015['name'] !== _0x2e89fd["name"]) _0x5b59e1["addFields"]({
        'name': 'Ancien\x20nom',
        'value': _0x7015["name"],
        'inline': !![]
    })["addFields"]({
        'name': "Nouveau nom",
        'value': _0x2e89fd["name"],
        'inline': !![]
    });
    if (_0x5b59e1['data']['fields']?.["length"] > 0x1) sendRichLog(_0x2e89fd["guild"], 'channel', _0x5b59e1);
});
const rateLimit = new Map();

function checkRateLimit(_0x42b80f, _0x59271d = 0x5, _0x185333 = 0x2710) {
    const _0x1be5ea = _0x15878f,
        _0x2726fe = Date['now'](),
        _0x2fce0b = _0x42b80f,
        _0x408c66 = (rateLimit['get'](_0x2fce0b) || [])["filter"](_0x462c5a => _0x2726fe - _0x462c5a < _0x185333);
    return _0x408c66['push'](_0x2726fe), rateLimit["set"](_0x2fce0b, _0x408c66), _0x408c66["length"] <= _0x59271d;
}

function _0x5cb9(_0x789653, _0xd7c193) {
    _0x789653 = _0x789653 - 0xd5;
    const _0x553331 = _0x12cd();
    let _0x2a658d = _0x553331[_0x789653];
    return _0x2a658d;
}
setInterval(() => {
    const _0x335fc0 = _0x15878f,
        _0x16163f = Date["now"]();
    for (const [_0x388dd9, _0x128a81] of rateLimit) {
        const _0x8cbdfd = _0x128a81['filter'](_0xba7238 => _0x16163f - _0xba7238 < 0x7530);
        if (_0x8cbdfd['length'] === 0x0) rateLimit["delete"](_0x388dd9);
        else rateLimit["set"](_0x388dd9, _0x8cbdfd);
    }
}, 0xea60);

function sanitize(_0x3483eb, _0x7b1a0a = 0x7d0) {
    const _0x23b16c = _0x15878f;
    return String(_0x3483eb)['slice'](0x0, _0x7b1a0a)["replace"](/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '')['replace'](/@everyone/g, "@​everyone")["replace"](/@here/g, "@​here");
}
const VALID_ID_PREFIXES = ["cfg:", "ticket:", "recruitment:", 'giveaway:', 'rp:'];

function isValidCustomId(_0x1767d0) {
    const _0x1cc7c0 = _0x15878f;
    if (!_0x1767d0 || typeof _0x1767d0 !== "string" || _0x1767d0["length"] > 0x64) return ![];
    return VALID_ID_PREFIXES['some'](_0x3f319a => _0x1767d0["startsWith"](_0x3f319a));
}
const originalLog = console['log'];
console['log'] = (..._0x5abec5) => originalLog(..._0x5abec5['map'](_0x298ca9 => typeof _0x298ca9 === "string" ? _0x298ca9["replace"](TOKEN, '[REDACTED]') : _0x298ca9)), process['on']("unhandledRejection", (_0x742e18, _0x2b8c05) => {
    const _0x202ead = _0x15878f;
    if (_0x742e18?.["code"] === 0x274e || _0x742e18?.["code"] === 0xc351 || _0x742e18?.['code'] === 0xc35d) return;
    console["error"]("[Unhandled rejection]", _0x742e18?.["message"] || _0x742e18);
}), process['on']("uncaughtException", _0x1ff0b6 => {
    const _0x149c1f = _0x15878f;
    if (_0x1ff0b6?.["code"] === 0x274e || _0x1ff0b6?.['code'] === 0xc351 || _0x1ff0b6?.['code'] === 0xc35d) return;
    console['error']("[Uncaught exception]", _0x1ff0b6?.['message'] || _0x1ff0b6);
}), process['on']("SIGINT", async () => {
    const _0x22605a = _0x15878f;
    console["log"]("[DashBot] Interruption, sauvegarde..."), await flushSaves(), process["exit"](0x0);
}), process['on']("SIGTERM", async () => {
    console['log']('[DashBot]\x20Terminaison,\x20sauvegarde...'), await flushSaves(), process['exit'](0x0);
}), setInterval(async () => {
    for (const [, g] of client['guilds']['cache']) try {
        const s = settings(g['id'])['tempVoices'];
        if (!s['enabled'] || !s['lobbyId']) continue;
        const _0xcleanLobby = g['channels']['cache']['get'](s['lobbyId']);
        const _0xcleanCat = _0xcleanLobby?.['parentId'];
        if (!_0xcleanCat) continue;
        for (const c of g['channels']['cache']['filter'](ch => ch['type'] === ChannelType['GuildVoice'] && ch['parentId'] === _0xcleanCat && ch['id'] !== s['lobbyId'] && ch['members']['size'] === 0)['values']()) await c['delete']('Nettoyage\x20vocaux\x20temporaires\x20vides')['catch'](() => {});
    } catch (e) {}
}, 0xea60), client['login'](TOKEN);