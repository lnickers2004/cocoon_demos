(function()
{
    // The CocoonJS must exist before creating the extension.
    if (typeof window.CocoonJS === 'undefined' || window.CocoonJS === null) throw("The CocoonJS object must exist and be valid before creating any extension object.");

	/**
	* This type represents the access to a native MultiplayerChallenge extension API. As there can be more than
	* one service of this type, more than one instance can be created.
	* @namespace
	* @constructor
	* @param {string} nativeExtensionName The name of the native ext object extension property name.
	* @param {string} extensionName The name of the CocoonJS object extension property name.
	*/
	CocoonJS.MultiplayerChallenge = function(nativeExtensionName, extensionName)
	{
		if (typeof nativeExtensionName !== 'string') throw "The given native extension name '" + nativeExtensionName + "' is not a string.";
		if (typeof extensionName !== 'string') throw "The given extension name '" + extensionName + "' is not a string.";

		this.nativeExtensionName = nativeExtensionName;
		this.extensionName = extensionName;
	    this.nativeExtensionObjectAvailable = CocoonJS.nativeExtensionObjectAvailable && typeof window.ext[nativeExtensionName] !== 'undefined';

	    /**
	     * FOR DOCUMENTATION PURPOSE ONLY! The documentation of the function callback for the {@link CocoonJS.MultiplayerChallenge.onRequestInitializationSucceeded} event calls.
	     * @name OnRequestInitializationSucceededListener
	     * @function
	     * @static
	     * @memberOf CocoonJS.MultiplayerChallenge
	     * @param {object} initializationData The data passed in the request initialization call.
	     */
	    /**
	    * This {@link CocoonJS.EventHandler} object allows listening to events called when the extension initialization request has been successful.
	    * The callback function's documentation is represented by {@link CocoonJS.MultiplayerChallenge.OnRequestInitializationSucceededListener}
	    * @static
	    * @event
	    * @memberOf CocoonJS.MultiplayerChallenge
	    */
	    this.onRequestInitializationSucceeded = new CocoonJS.EventHandler(this.nativeExtensionName, this.extensionName, "onRequestInitializationSucceeded");

	    /**
	     * FOR DOCUMENTATION PURPOSE ONLY! The documentation of the function callback for the {@link CocoonJS.MultiplayerChallenge.onRequestInitializationFailed} event calls.
	     * @name OnRequestInitializationFailedListener
	     * @function
	     * @static
	     * @memberOf CocoonJS.MultiplayerChallenge
	     * @param {string} errorMessage The message that describes why the initialization request failed.
	     */
	    /**
	    * This {@link CocoonJS.EventHandler} object allows listening to events called when the extension initialization equest has failed.
	    * The callback function's documentation is represented by {@link CocoonJS.MultiplayerChallenge.OnRequestInitializationFailedListener}
	    * @static
	    * @event
	    * @memberOf CocoonJS.MultiplayerChallenge
	    */
	    this.onRequestInitializationFailed = new CocoonJS.EventHandler(this.nativeExtensionName, this.extensionName, "onRequestInitializationFailed");

	    /**
	     * FOR DOCUMENTATION PURPOSE ONLY! The documentation of the function callback for the {@link CocoonJS.MultiplayerChallenge.onChallengeLaunched} event calls.
	     * @name OnChallengeLaunchedListener
	     * @function
	     * @static
	     * @memberOf CocoonJS.MultiplayerChallenge
	     * @param {string} challengeId The id that represents the challenge that has been launched. Store this id for lated score submission.
	     */
	    /**
	    * This {@link CocoonJS.EventHandler} object allows listening to events called when a challenge has been launcher.
	    * The callback function's documentation is represented by {@link CocoonJS.MultiplayerChallenge.OnChallengeLaunchedListener}
	    * @static
	    * @event
	    * @memberOf CocoonJS.MultiplayerChallenge
	    */
	    this.onChallengeLaunched = new CocoonJS.EventHandler(this.nativeExtensionName, this.extensionName, "onChallengeLaunched");

	    /**
	     * FOR DOCUMENTATION PURPOSE ONLY! The documentation of the function callback for the {@link CocoonJS.MultiplayerChallenge.onChallengeLaunchFailed} event calls.
	     * @name OnChallengeLaunchFailedListener
	     * @function
	     * @static
	     * @memberOf CocoonJS.MultiplayerChallenge
	     * @param {string} errorMessage The message that describes why the launch failed.
	     */
	    /**
	    * This {@link CocoonJS.EventHandler} object allows listening to events called when the challenge launch has failed.
	    * The callback function's documentation is represented by {@link CocoonJS.MultiplayerChallenge.OnChallengeLaunchFailedListener}
	    * @event
	    * @memberOf CocoonJS.MultiplayerChallenge
	    */
	    this.onChallengeLaunchFailed = new CocoonJS.EventHandler(this.nativeExtensionName, this.extensionName, "onChallengeLaunchFailed");

	    /**
	    * This {@link CocoonJS.EventHandler} object allows listening to events called when the launched challenge has been cancelled.
	    * The callback function does not receive any parameter.
	    * @static
	    * @event
	    * @memberOf CocoonJS.MultiplayerChallenge
	    */
	    this.onChallengeLaunchCancelled = new CocoonJS.EventHandler(this.nativeExtensionName, this.extensionName, "onChallengeLaunchCancelled");

	    /**
	     * FOR DOCUMENTATION PURPOSE ONLY! The documentation of the function callback for the {@link CocoonJS.MultiplayerChallenge.onRequestAvailableChallengeCountSucceeded} event calls.
	     * @name OnRequestAvailableChallengeCountSucceededListener
	     * @function
	     * @static
	     * @memberOf CocoonJS.MultiplayerChallenge
	     * @param {number} availableChallengeCount The number of challenges that are available.
	     */
	    /**
	    * This {@link CocoonJS.EventHandler} object allows listening to events called when a request for available challenge count is successful.
	    * The callback function's documentation is represented by {@link CocoonJS.MultiplayerChallenge.OnRequestAvailableChallengeCountSucceededListener}
	    * @static
	    * @event
	    * @memberOf CocoonJS.MultiplayerChallenge
	    */
	    this.onRequestAvailableChallengeCountSucceeded = new CocoonJS.EventHandler(this.nativeExtensionName, this.extensionName, "onRequestAvailableChallengeCountSucceeded");

	    /**
	     * FOR DOCUMENTATION PURPOSE ONLY! The documentation of the function callback for the {@link CocoonJS.MultiplayerChallenge.onRequestAvailableChallengeCountFailed} event calls.
	     * @name OnRequestAvailableChallengeCountFailedListener
	     * @function
	     * @static
	     * @memberOf CocoonJS.MultiplayerChallenge
	     * @param {string} errorMessage The message that describes why the request failed.
	     */
	    /**
	    * This {@link CocoonJS.EventHandler} object allows listening to events called when a request for available challenge count failed.
	    * The callback function's documentation is represented by {@link CocoonJS.MultiplayerChallenge.OnRequestAvailableChallengeCountFailedListener}
	    * @static
	    * @event
	    * @memberOf CocoonJS.MultiplayerChallenge
	    */
	    this.onRequestAvailableChallengeCountFailed = new CocoonJS.EventHandler(this.nativeExtensionName, this.extensionName, "onRequestAvailableChallengeCountFailed");

	    return this;
	};

	CocoonJS.MultiplayerChallenge.prototype = {

		/**
		* Requests the initialization of the service.
		* @param {object} initializationData The structure with the information to initialize the service. This structure may vary depending on the service.
		* @see CocoonJS.MultiplayerChallenge.onRequestInitializationSucceeded
		* @see CocoonJS.MultiplayerChallenge.onRequestInitializationFailed
        */
		requestInitialization : function(initializationData)
		{
			if (this.nativeExtensionObjectAvailable)
			{
				return CocoonJS.makeNativeExtensionObjectFunctionCall(this.nativeExtensionName, "requestInitialization", arguments);
			}
			else
			{
				this.onRequestInitializationFailed.notifyEventListeners();
			}
		},

		/**
		* Launches a challenge. The result will be notified using event handlers.
		* @see CocoonJS.MultiplayerChallenge.onChallengeLaunched
		* @see CocoonJS.MultiplayerChallenge.onChallengeLaunchFailed
		* @see CocoonJS.MultiplayerChallenge.onChallengeLaunchCancelled
        */
		launchChallenge : function()
		{
			if (this.nativeExtensionObjectAvailable)
			{
				return CocoonJS.makeNativeExtensionObjectFunctionCall(this.nativeExtensionName, "launchChallenge", arguments);
			}
			else
			{
				this.onChallengeLaunchFailed.notifyEventListeners("The multiplayer challenge extension is not available.");
			}
		},

		/**
		* Submit the score for a challenge.
		* @param {string} challengeId The id of the challenge to submit the score for. This id should have been provided when a challenge was launched.
		* @param {number} score The score to be submitted.
		*/
		submitScoreForChallenge : function(challengeId, score)
		{
			if (this.nativeExtensionObjectAvailable)
			{
				return CocoonJS.makeNativeExtensionObjectFunctionCall(this.nativeExtensionName, "submitScoreForChallenge", arguments);
			}
		},

		/**
		* Request how many challenges are available.
		* @see CocoonJS.MultiplayerChallenge.onRequestAvailableChallengeCountSucceeded
		* @see CocoonJS.MultiplayerChallenge.onRequestAvailableChallengeCountFailed
		*/
		requestAvailableChallengeCount : function()
		{
			if (this.nativeExtensionObjectAvailable)
			{
				return CocoonJS.makeNativeExtensionObjectFunctionCall(this.nativeExtensionName, "requestAvailableChallengeCount", arguments);
			}
			else
			{
				this.onRequestAvailableChallengeCountFailed.notifyEventListeners("The multiplayer challenge extension is not available.");
			}
		},

	};

})();