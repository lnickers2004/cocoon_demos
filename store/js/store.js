CocoonJS.App.proxifyConsole();

var deviceInfo = CocoonJS.App.getDeviceInfo();

var BUNDLE_ID = "com.ideateca.cocoonjslauncher";
if (deviceInfo.os == "ios")
	BUNDLE_ID = "com.ideateca.jscocoon";
var API_VERSION = "API Version";
var DEVELOPMENT_SERVER_URL = 'http://www.yourdomain.com';
var BACKEND_URL = DEVELOPMENT_SERVER_URL;
var STORE_TYPE = CocoonJS.Store.getStoreType();
var MANAGED = false;
var SANDBOX = true;

var isStoreAvailable=false;

var products = new Array();
var purchases = new Array();

function onRestorePurchasesStarted() 
{
	setLogText("Purchases restoration started");
}

function onRestorePurchasesCompleted() 
{
	setLogText("Purchases restoration completed");
}

function onRestorePurchasesFailed(error) 
{
	setLogText("Purchases restoration failed: " + error);
}

function onProductPurchaseStarted(productId) 
{
	setLogText("Starting product " + productId + " purchase...");
}

function onProductPurchaseFailed(productId, error) 
{
	setLogText("Purchase of product " + productId + " failed: " + error);
}

function onProductPurchaseVerificationRequestReceived(productId, data) 
{
	setLogText('Verifying purchase against CocoonJS Cloud backend server...');

	var verifyPurchaseRequestBody = {
		os: STORE_TYPE,
		api_key: API_VERSION,
		debug: SANDBOX,
		bundleId: BUNDLE_ID,
		data: data
	};

	/* Remember to set in your server the following options:
	 * 		- Access-Control-Allow-Origin: *
	 *		- Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept
	 * Otherwise XHR will fail because crossdomain security.
	 */
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function (event)
	{
		if (xmlhttp.readyState==4)
		{
			if (xmlhttp.status==200) {
				var response = JSON.parse(xmlhttp.responseText);
		  		if (response.status  !== undefined && response.status == 0)
		  		{
		  			setLogText('Purchase verification against backend server succeeded');

		  			var purchases = response.orders;
		  			for (var i=0; i<purchases.length; i++)
		  			{
		  				var purchase = purchases[i];

		  				CocoonJS.Store.finishPurchase(purchase.transactionId);
		  				CocoonJS.Store.addPurchase(purchase);

		  				refreshPurchases();
						refreshPurchaseInfo();
		  			}
				}
				else
				{
					setLogText('Purchase verification against backend server failed. Response: ' + JSON.stringify(response));
				}
			}
			else
			{
				setLogText('Purchase verification against backend server failed. XHR status: ' + xmlhttp.status);
			}
		}
	};
	xmlhttp.open("POST", BACKEND_URL + '/verify-purchases/', true);
	xmlhttp.setRequestHeader("Content-Type","application/json");
	xmlhttp.send(JSON.stringify(verifyPurchaseRequestBody));
}

function onProductPurchaseCompleted(purchase)
{
	setLogText("Purchase of product " + purchase.productId + " completed");
	switch(purchase.purchaseState)
	{
		case CocoonJS.Store.PurchaseState.PURCHASED:
			refreshPurchases();
			break;

		case CocoonJS.Store.PurchaseState.CANCELED:
			refreshPurchases();
			break;

		case CocoonJS.Store.PurchaseState.REFUNDED:
			refreshPurchases();
			break;

		case CocoonJS.Store.PurchaseState.EXPIRED:
			refreshPurchases();
			break;
	}

	/**
		We store the purchase in the local encrypted purchases database. You can use the local encrypted database to store your purchases or any other method you prefer.
	 */
	CocoonJS.Store.addPurchase(purchase);

	/**
		We must call finish purchase when the purchase has finished successfully and the related purchase assets have been downloaded. 
		Calling finishPurchase will remove the purchase transaction from the transactions queue and the purchase is then considered as finished successfully,
		otherwise it won't be remove from the purchases queue and you'll get purchase callbacks after starting the service or at any point.
	 */
	CocoonJS.Store.finishPurchase(purchase.transactionId);

	refreshPurchases();
	refreshPurchaseInfo();
}

function onProductsFetchStarted() 
{
	setLogText("Store products fetch started");
}

function onProductsFetchFailed(error) 
{
	setLogText("Store products fetch failed: " + error);
}

function onProductsFetchCompleted(products) 
{
	setLogText("Store products fetch completed");

	refreshProducts();
	refreshProductInfo();
}

function onConsumePurchaseStarted(transactionId) 
{
	setLogText("Consume purchase started");
}

function onConsumePurchaseFailed(transactionId, error) 
{
	setLogText("Consume purchase failed: " + error);
}

function onConsumePurchaseCompleted(transactionId) 
{
	setLogText("Consume purchase completed: " + transactionId);

	var isRemoved = CocoonJS.Store.removePurchase(transactionId);
	if (isRemoved)
		setLogText("Purchase with transactionId: " + purchase.transactionId + " successfully removed.");
	else
		setLogText("Error removing purchase with transactionId: " + purchase.transactionId);

	refreshPurchases();
	refreshPurchaseInfo();
}

/**
 * Helper functions
 **/

function setLogText(msg) 
{
	var logText = document.getElementById('log');
	logText.innerHTML = msg + "<br>" + logText.innerHTML;
}

function purchaseProduct() 
{
	if (isStoreAvailable) 
	{
		var index = document.getElementById('products').selectedIndex;
		var product = products[index];
		CocoonJS.Store.purchaseProduct(product.productId);
	}
	else
	{
		setLogText("Sorry, no Store Service available in this platform");
	}
}

function purchaseProductModal()
{
	if (isStoreAvailable) 
	{
		var index = document.getElementById('products').selectedIndex;
		var product = products[index];
		CocoonJS.Store.puchaseProductModal(product.productId);
	}
	else
	{
		setLogText("Sorry, no Store Service available in this platform");
	}
}

function purchaseProductModalWithPreview()
{
	if (isStoreAvailable) 
	{
		var index = document.getElementById('products').selectedIndex;
		var product = products[index];
		CocoonJS.Store.purchaseProductModalWithPreview(product.productId);
	}
	else
	{
		setLogText("Sorry, no Store Service available in this platform");
	}
}

function refreshProducts() 
{
	if (isStoreAvailable) 
	{
		products = CocoonJS.Store.getProducts();
		if (products) 
		{
			var select = document.getElementById("products");
			select.innerHTML = "";
			select.length = products.length;
			for (var i=0; i<products.length; i++)
				select.options[i] = new Option(products[i].title);

			refreshProductInfo();
		}
	}
	else
	{
		setLogText("Sorry, no Store Service available in this platform");
	}
}

function refreshProductInfo() 
{
	if (isStoreAvailable) 
	{
		var productIndex = document.getElementById("products").options.selectedIndex;
		if (productIndex >= 0)
		{
			var product = products[productIndex];
			document.getElementById("productAlias").value = product.productAlias;
			document.getElementById("productId").value = product.productId;
			document.getElementById("productType").selectedIndex = product.productType;
			document.getElementById("productTitle").value = product.title;
			document.getElementById("productDescription").value = product.description;
			document.getElementById("productPrice").value = product.price;
			document.getElementById("productLocalizedPrice").value = product.localizedPrice;
			document.getElementById("productURL").value = product.downloadURL;
		}
		else
		{
			document.getElementById("productAlias").value = "";
			document.getElementById("productId").value = "";
			document.getElementById("productType").value = 0;
			document.getElementById("productTitle").value = "";
			document.getElementById("productDescription").value = "";
			document.getElementById("productPrice").value = 0;
			document.getElementById("productLocalizedPrice").value = "";
			document.getElementById("productURL").value = "";
		}
	}
	else
	{
		setLogText("Sorry, no Store Service available in this platform");
	}
}

function removeProduct() 
{
	if (isStoreAvailable) 
	{
		var index = document.getElementById('products').selectedIndex;
		var product = products[index];
		CocoonJS.Store.removeProduct(product.productId);

		refreshProducts();
	}
	else
	{
		setLogText("Sorry, no Store Service available in this platform");
	}
}

function addProduct() 
{
	if (isStoreAvailable) 
	{
		var product = new CocoonJS.Store.ProductInfo(
			document.getElementById("productAlias").value,
			document.getElementById("productId").value,
			document.getElementById('productType').selectedIndex,
			document.getElementById("productTitle").value,
			document.getElementById("productDescription").value,
			parseFloat(document.getElementById("productPrice").value),
			document.getElementById("productLocalizedPrice").value,
			document.getElementById("productURL").value
		);

		CocoonJS.Store.addProduct(product);

		refreshProducts();
	}
	else
	{
		setLogText("Sorry, no Store Service available in this platform");
	}
}

function refreshPurchases()
{
	if (isStoreAvailable) 
	{
		purchases = CocoonJS.Store.getPurchases();

		if (purchases)
		{
			var select = document.getElementById("purchases");
			select.innerHTML = "";
			select.length = purchases.length;
			for (var i=0; i<purchases.length; i++)
				select.options[i] = new Option(purchases[i].productId);

			refreshPurchaseInfo();
		}
	}
	else
	{
		setLogText("Sorry, no Store Service available in this platform");
	}
}

function refreshPurchaseInfo() 
{
	if (isStoreAvailable) 
	{
		var info = document.getElementById("purchase_info");
		var purchaseIndex = document.getElementById("purchases").options.selectedIndex;

		if (purchaseIndex >= 0)
		{
			var purchase = purchases[purchaseIndex];
			var state = "Purchased";
			switch (purchase.purchaseState) 
			{
				case CocoonJS.Store.PurchaseState.PURCHASED:
					state = "Purchased";
					break;
				case CocoonJS.Store.PurchaseState.CANCELED:
					state = "Canceled";
					break;
				case CocoonJS.Store.PurchaseState.REFUNDED:
					state = "Refunded";
					break;
				case CocoonJS.Store.PurchaseState.EXPIRED:
					state = "Expired";
					break;
			}
			var date = new Date();
			var epoch = purchase.purchaseTime; 
			if(epoch<10000000000) 
				epoch *= 1000; // convert to milliseconds (Epoch is usually expressed in seconds, but Javascript uses Milliseconds)
			date.setTime(epoch)
			info.innerHTML = "Transaction Id: " + purchase.transactionId + "<br>" + 
				"Product Id: " + purchase.productId + "<br>" + 
				"Purchase time: " + date + "<br>" + 
				"State: " + state + "<br>" + 
				"Quantity: " + purchase.quantity;
		}
		else
		{
			info.innerHTML = "No Info";
		}
	}
	else
	{
		setLogText("Sorry, no Store Service available in this platform");
	}
}

function removePurchase()
{
	if (isStoreAvailable) 
	{
		var index = document.getElementById('purchases').selectedIndex;
		if (index >= 0)
		{
			var purchase = purchases[index];
			var isRemoved = CocoonJS.Store.removePurchase(purchase.transactionId);
			if (isRemoved)
				setLogText("Purchase with transactionId: " + purchase.transactionId + " successfully removed.");
			else
				setLogText("Error removing purchase with transactionId: " + purchase.transactionId);

			refreshPurchases();
			refreshPurchaseInfo();
		}
	}
	else
	{
		setLogText("Sorry, no Store Service available in this platform");
	}
}

function consumePurchase()
{
	if (isStoreAvailable) 
	{
		var index = document.getElementById('purchases').selectedIndex;
		if (index >= 0)
		{
			var purchase = purchases[index];

			/**
				We must consume the purchase when the user has consumed that item and you want it to be available for purchase again.
			 */
			CocoonJS.Store.consumePurchase(purchase.transactionId, purchase.productId);
		}
	}
	else
	{
		setLogText("Sorry, no Store Service available in this platform");
	}
}

function restorePurchases()
{
	if (isStoreAvailable) 
	{
		CocoonJS.Store.restorePurchases();
	}
	else
	{
		setLogText("Sorry, no Store Service available in this platform");
	}
}

function restorePurchasesModal()
{
	if (isStoreAvailable) 
	{
		CocoonJS.Store.restorePurchasesModal();
	}
	else
	{
		setLogText("Sorry, no Store Service available in this platform");
	}
}

function fetchProductsFromServer()
{
	if (CocoonJS.Store.getStoreType() === CocoonJS.Store.StoreType.MOCK_STORE)
	{
		setLogText('Error: Fetching products for a mock store not supported');
	}
	else
	{
		setLogText('Retrieving products from backend server...');

		if (isStoreAvailable) 
		{
			var getProductsRequestBody = {
				os: STORE_TYPE,
				api_key: API_VERSION,
				debug: SANDBOX,
				bundleId: BUNDLE_ID
			};

			/* Remember to set in your server the following options:
			 * 		- Access-Control-Allow-Origin: *
			 *		- Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept
			 * Otherwise XHR will fail because crossdomain security.
			 */
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function (event)
			{
				if (xmlhttp.readyState==4)
				{
					if (xmlhttp.status==200) {
						var response = JSON.parse(xmlhttp.responseText);
				  		if (response.status !== undefined && response.status == 0)
				  		{
				  			setLogText('Product retrieval from backend server succeeded');

				  			var products = response.products;
				  			var productIds = new Array();
				  			for (var i=0; i<products.length; i++) 
				  			{
				  				setLogText('Backend product id: ' + i + ': ' + JSON.stringify(products[i].productId));
				  				productIds.push(products[i].productId);
				  			}

				  			/**
				  				We make an arrayl with the product ids and send the verification request. This will verify this products against the platform store service
				  				and return an array with those products information through the onProductsFetchCompleted callback.
				  			 */
				  			CocoonJS.Store.fetchProductsFromStore(productIds);
						}
						else
						{
							setLogText('Product retrieval from backend server failed. Response: ' + JSON.stringify(response));
						}
					}
					else
					{
						setLogText('Product retrieval from backend server failed. XHR status: ' + xmlhttp.status);
					}
				}
			};
			xmlhttp.open("POST", BACKEND_URL + '/get-products/', true);
			xmlhttp.setRequestHeader("Content-Type","application/json");
			xmlhttp.send(JSON.stringify(getProductsRequestBody));
		}
		else
		{
			setLogText("Sorry, no Store Service available in this platform");
		}
	}
}

/* We check that the native exension is present. It won't be present if the code is being run in
 * non CocoonJS enabled devices like the browser.
 */
if (CocoonJS.Store.nativeExtensionObjectAvailable)
{
	/*
	 * We must also check that the platform Store service is ready to make purchases.
	 */
	if (CocoonJS.Store.canPurchase())
	{
		isStoreAvailable = true;

		/**
			First thing to do is place our callbacks as we may get some callbacks right after calling CocoonJS.Store.start().

			Ie. We have made apurchase in the previous game session but as the game quit unexpectedly or the user closed the app, the purchase didn't complete.
			In that case, in some platforms you'll get purchase related callbacks (onProductPurchaseVerificationRequestReceived, onProductPurchaseCompleted,... ) after calling start.

			So make sure that at least you have placed the purchases related callbacks before calling CocoonJS.Store.start().
		 */
		CocoonJS.Store.onProductsFetchStarted.addEventListener(onProductsFetchStarted);
		CocoonJS.Store.onProductsFetchFailed.addEventListener(onProductsFetchFailed);
		CocoonJS.Store.onProductsFetchCompleted.addEventListener(onProductsFetchCompleted);

		CocoonJS.Store.onRestorePurchasesStarted.addEventListener(onRestorePurchasesStarted);
		CocoonJS.Store.onRestorePurchasesCompleted.addEventListener(onRestorePurchasesCompleted);
		CocoonJS.Store.onRestorePurchasesFailed.addEventListener(onRestorePurchasesFailed);

		CocoonJS.Store.onProductPurchaseStarted.addEventListener(onProductPurchaseStarted);
		CocoonJS.Store.onProductPurchaseFailed.addEventListener(onProductPurchaseFailed);
		CocoonJS.Store.onProductPurchaseVerificationRequestReceived.addEventListener(onProductPurchaseVerificationRequestReceived);
		CocoonJS.Store.onProductPurchaseCompleted.addEventListener(onProductPurchaseCompleted);

		CocoonJS.Store.onConsumePurchaseStarted.addEventListener(onConsumePurchaseStarted);
		CocoonJS.Store.onConsumePurchaseCompleted.addEventListener(onConsumePurchaseCompleted);
		CocoonJS.Store.onConsumePurchaseFailed.addEventListener(onConsumePurchaseFailed);

		/**
		 	This initializes the store service with the following parameters.
			sandbox: The platform store purchases verifications will happen in sandbox mode, this applies only if managed mode is enabled. 
		 			Ie: If you are testing your iOS application in debug mode, you must enable the sandbox mode, otherwise the verification will fail as it's not a release build and
		 			the Apple verification environments are different.
		 	managed: The verification is going to be done using the CocoonJS cloud service. Be sure to have the Store section of your project correctly configured.
		 */
		CocoonJS.Store.requestInitialization({"sandbox": SANDBOX, "managed": MANAGED});

		/**
			We start the store service. We will start getting callbacks from this point on.
		 */
		CocoonJS.Store.start();

		/**
			In this case we have stored the products and the purchases in the local products and purchases databases so we can get them to see what products has purchased
			the user and unlock that content.
		 */
		products = CocoonJS.Store.getProducts();
		purchases = CocoonJS.Store.getPurchases();
	}
}