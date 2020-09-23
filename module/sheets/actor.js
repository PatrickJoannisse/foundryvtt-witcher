export default class WitcherActorSheet extends ActorSheet {

    get template() {
        return `systems/witcher/templates/sheets/actor/${this.actor.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.witcher;
        return data;
    }

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            tabs: [{ navSelector: ".tabs", contentSelector: ".sheet-body", initial: "description" }]
        });
    }

}