# birt-jquery-plugin
Info
===
This is a JQuery plugin for the Actuate JSAPI.  It's still being developed and not all features have been implemented.  Read the usage example below to see how to visualize a BIRT report using this plugin.

Usage
===
<html>

<head>
	<script src="./js/jquery-2.1.3.js"></script>
	<script src="http://actuateone.localdomain:8700/iportal/jsapi"></script>
	<script src="./js/jquery.actuate.js"></script>

	<script>
		$(document).ready(function() {
			$("#test").birtViewer()
				.setReportName("/Report Designs/ActualvsTarget.rptdesign")
				.setUsername("Administrator")
				.setPassword("")
				.setIPortal("http://actuateone.localdomain:8700/iportal/")
				.setParameterValues({
						pMeasure: "After Call Work",
            			pLocation: "Conversys",
            			pScorecardDB: "",
            			SLADemo: "",
            			pViewID: "692094617",
            			cookieValue: "someValue1"
				})
				.setVolumeName('Default Volume')
				.setUIOptions(null)
				.setEnterpriseMode(false)
				.setCustomParameters({
					myParam: "myValue"
				})
				.visualize();
		});
	</script>
</head>

<body>

<div id="test">test</div>

</body>

</html>
