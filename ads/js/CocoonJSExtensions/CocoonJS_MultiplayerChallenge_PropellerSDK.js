(function()
{
    // The CocoonJS must exist before creating the extension.
    if (typeof window.CocoonJS === 'undefined' || window.CocoonJS === null) throw("The CocoonJS object must exist and be valid before creating any extension object.");
    if (typeof window.CocoonJS.MultiplayerChallenge === 'undefined' || window.CocoonJS === null) throw("The CocoonJS.MultiplayerChallenge object must exist and be valid before creating a PropellerSDK extension object.");

	/**
	* This instance represents the extension object to access PropellerSDK related native functionalities.
	* The data structure for initialization: 
	{
		gameId : "",
		gameSecret : "",
		gameIsSandbox : true/false
	}
	* @see CocoonJS.MultiplayerChallenge
	* @see CocoonJS.MultiplayerChallenge.requestInitialization
	*/
	CocoonJS.MultiplayerChallenge.PropellerSDK = new CocoonJS.MultiplayerChallenge("IDTK_SRV_MULTIPLAYER_CHALLENGE_PROPELLERSDK", "MultiplayerChallenge.PropellerSDK");
})();