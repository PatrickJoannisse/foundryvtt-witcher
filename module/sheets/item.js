export default class WitcherItemSheet extends ItemSheet{

    get template() {
        return `systems/witcher/templates/sheets/items/${this.item.data.type}-sheet.html`;
    }

    getData(){
        const data = super.getData();

        data.config = CONFIG.witcher; 
        return data;
    }
}