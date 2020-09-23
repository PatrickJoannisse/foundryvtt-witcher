


/**
 * Extend the base Actor class to implement additional system-specific logic
 */

export default class ActorWitcher extends Actor {

    /**
     * @override
     * TODO: This becomes unnecessary after 0.7.x is released
     */
    initialize() {
        try {
            this.prepareData();
        } catch (err) {
            console.error(`Failed to initialize data for ${this.constructor.name} ${this.id}:`);
            console.error(err);
        }
    }

    /* -------------------------------------------- */

    /**
     * @override
     * TODO: This becomes unnecessary after 0.7.x is released
     */
    prepareData() {
        console.log("Hello world");
    }

}