import draw2d from 'packages'

/**
 * @class
 * A HybridPort can work as Input and as Output port in the same way for a {@link draw2d.Connection}.
 *
 * @author Andreas Herz
 * @extends draw2d.Port
 */
draw2d.HybridPort = draw2d.Port.extend(
    /** @lends draw2d.HybridPort.prototype */
    {
    NAME: "draw2d.HybridPort",

    /**
     * Create a new HybridPort element
     *
     * @param {Object} [attr] the configuration of the shape
     */
    init: function(attr, setter, getter)
    {
        this._super(attr, setter, getter);

        // responsive for the arrangement of the port
        // calculates the x/y coordinates in relation to the parent node
        this.locator=new draw2d.layout.locator.InputPortLocator();

        // a Hybrid port has fanIn and fanOut connections. All of them can be handeled 
        // differently. 
        this.maxFanIn = Number.MAX_SAFE_INTEGER
    },


    /**
     *
     * set the maximal possible count of incomming connections for this port.<br>
     * A "incomming" connection has always either a hybrid or output source port.
     * 
     * This method didn't delete any connection if you reduce the number and a bunch of
     * connection are bounded already.
     *
     * @param {Number} count the maximal number of connection related to this port
     * @returns {this}
     */
    setMaxFanIn: function (count) {
      this.maxFanIn = Math.max(1, count)
      this.fireEvent("change:maxFanIn", {value: this.maxFanIn})

      return this
    },

    /**
     *
     * return the maximal possible connections (in+out) for this port.
     *
     * @returns {Number}
     */
    getMaxFanIn: function () 
    {
      return this.maxFanIn
    },

    /**
     * @param {draw2d.command.CommandType} request The requested operation to perform on the object
     * @returns {draw2d.command.Command} The matching command to the requested operation.
     */
    createCommand: function(request)
    {
       // Connect request between two ports
       //
       if(request.getPolicy() === draw2d.command.CommandType.CONNECT) {

         if(request.source.getParent().getId() === request.target.getParent().getId()){
            return null;
         }

         if (request.source instanceof draw2d.InputPort) {
            // This is the difference to the InputPort implementation of createCommand.
            return new draw2d.command.CommandConnect(request.target, request.source, request.source);
         }
         else if (request.source instanceof draw2d.OutputPort) {
            // This is the different to the OutputPort implementation of createCommand
            return new draw2d.command.CommandConnect(request.source, request.target, request.source);
         }
         else if (request.source instanceof draw2d.HybridPort) {
            // This is the different to the OutputPort implementation of createCommand
            return new draw2d.command.CommandConnect(request.target,request.source, request.source);
         }

         return null;
       }

       // ...else call the base class
       return this._super(request);
    }
});
