$( document ).ready(function() {
	$( "#1_ex" ).on( "click", function() {
		$("#modalbutton").click();
		$(".modal-title").html("VND Wealth Managers Pvt Ltd Experience");
		$(".modal-body").html("<img src='images/vnd.jpg' class='img-circle img-thumbnail img-responsive experienceImage'><hr>Prepared data for exploratory analysis, and intelligent data products and improve our internal dashboard product."+
		"Collaborated with Data Engineers to develop and implement an ETL system rapidly growing data store.<br><br>"+
		"Build critical working relationships with the business and users communities through gathering a thorough understanding of the business models and processes employed");
		$(".modal-footer").html("<a href='https://www.linkedin.com/in/ayushidesai/' target='_blank'><i class='fa fa-linkedin'></i> My LinkedIn</a>");
	});

	$( "#2_ex" ).on( "click", function() {
		$("#modalbutton").click();
		$(".modal-title").html("Innovent Experience");
		$(".modal-body").html("<img src='images/innovent.jpg' class='img-circle img-thumbnail img-responsive experienceImage'><hr>Provided support to the business analysis team in preparing business plans and strategies. Designing website on Drupal, Modifying Data Warehouses & creating detailed reports on research to provide ideas.");
		$(".modal-footer").html("<a href='https://www.linkedin.com/in/ayushidesai/' target='_blank'><i class='fa fa-linkedin'></i> My LinkedIn</a>");
	});

	$( "#3_ex").on( "click", function() {
		$("#modalbutton").click();
		$(".modal-title").html("Oscar Mobitech Experience");
		$(".modal-body").html("<img src='images/oscarmobitech.png' class='img-circle img-thumbnail img-responsive experienceImage'><hr>Led the cloud platform maintenance of a product which gathered, transformed & performed Analytics data. Resolved and analyzed use cases, business process models, configuring and troubleshooting Windows Server issues, Site Workflows and Handled SSL exporting, FTP setup, Escalate critical issues to escalation engineers and product team.");
		$(".modal-footer").html("<a href='https://www.linkedin.com/in/ayushidesai/' target='_blank'><i class='fa fa-linkedin'></i> My LinkedIn</a>");
	});
});