define(["../events/Signal"], function (Signal) {
    /*
     <h2>DisplayList</h2>

     *
     */
    function DisplayList() {
        this.onAdded = new Signal();
        this.onRemoved = new Signal();
        /*
         * <h3>MutationObserver</h3>
         * <p>provides developers a way to react to changes in a DOM.<br/>
         * It is designed as a replacement for Mutation Events defined in the DOM3 Events specification.</p>
         * <a href="https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver">docs!</a>
         * */
        var observer = new MutationObserver(this.handleMutations.bind(this));

        /* <h3>Configuration of the observer.</h3>
         <p>Registers the MutationObserver instance to receive notifications of DOM mutations on the specified node.</p>
         */
        observer.observe(document.body, {
            attributes: false,
            childList: true,
            characterData: false,
            subtree: true
        });
    }

    DisplayList.prototype = {
        handleMutations: function (mutations) {
            var response = mutations.reduce(function (result, mutation, index) {
                result.addedNodes = result.addedNodes.concat(Array.prototype.slice.call(mutation.addedNodes));
                result.removedNodes = result.removedNodes.concat(Array.prototype.slice.call(mutation.removedNodes));
                return result;
            }, {addedNodes: [], removedNodes: []});

            response.addedNodes.length && this.onAdded.emit(response.addedNodes);
            response.removedNodes.length && this.onRemoved.emit(response.removedNodes);
        }
    };
    return DisplayList;
});