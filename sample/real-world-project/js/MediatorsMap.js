/**
 * Created by marco.gobbi on 09/12/2014.
 */
define(function (require) {
    "use strict";
    return [
        {
            "id": "search-panel",
            "mediator": "modules/search-panel/Mediator"
        },
        {
            "id": "results-panel",
            "mediator": "modules/results-panel/Mediator"
        },
        {
            "id":"jquery-results-panel",
            "mediator":"modules/jquery-results-panel/Mediator"
        },
        {
            "id":"toggle",
            "mediator":"modules/toggle/ToggleModule"
        }
    ];
});