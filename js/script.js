$(document).ready(function () {
    var price1 = $(".tile.design .price").data("price");
	var price2 = $(".tile.security .price").data("price");

	var backgroundPosition = [];
	backgroundPosition["design"] = "0px 0";
	backgroundPosition["cms"] = "-64px 0";
	backgroundPosition["development"] = "-128px 0";

	var offerName = [];
	offerName["design"] = "Website design";
	offerName["cms"] = "Basic CMS package";
	offerName["development"] = "Custom app development";

	function updateTotalCost() {
		$(".right .total-cost .amount span").text(price1 + price2);
	}

	function selectOffer(offer) {
		var tile = $(".tile" + "." + offer);

		$(".offer-obligatory .tile").removeClass("selected");
		tile.addClass("selected");

		$(".customer-selection .obligatory .icon").css("background-position", backgroundPosition[offer]);
		$(".customer-selection .obligatory .offer-name").text(offerName[offer]);
        
        tile.find("input[type='radio']").prop("checked", true);
        
		price1 = tile.find(".price").data("price");
		updateTotalCost();
	}
    
    function setSecurity() {
        $(".tile.security").toggleClass("selected");
        $(".customer-selection .ampersand").toggle();
		$(".customer-selection .optional").toggle();
        
        if (price2 == 0) {
            price2 = $(".tile.security .price").data("price");
        }
        else {
            price2 = 0;
        }
        
        updateTotalCost();
    }
    
    $(".offer-obligatory .tile").click(function() {
        var offer = $(this).data("offer");
        
        selectOffer(offer);
    });

	$(".tile.security").click(function(event) {
		event.preventDefault();
        
        var checkbox = $(this).find("input[type='checkbox']");

        if (checkbox.prop("checked")) {
            checkbox.prop("checked", false);
        }
        else {
            checkbox.prop("checked", true);
        }
        
        setSecurity();
	});


	$(".tile input[type='checkbox']").prop("checked", true);
	$(".tile.design input[type='radio']").prop("checked", true);
});