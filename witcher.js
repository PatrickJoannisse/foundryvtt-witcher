import {witcher} from "./module/config.js";
import WitcherItemSheet from "./module/sheets/item.js";
import WitcherActorSheet from "./module/sheets/actor.js";

Hooks.once("init", function(){
    console.log('Witcher | Initializing Witcher Pen and Paper RPG');

    CONFIG.witcher = witcher;
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("witcher", WitcherItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("witcher", WitcherActorSheet, { makeDefault: true });
});