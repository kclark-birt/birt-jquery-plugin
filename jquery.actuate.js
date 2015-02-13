$.fn.birtViewer = function() {
	actuate.load('viewer');
	actuate.load('parameter');
	actuate.load('dashboard');

	var viewerContainer = this;

	var viewer = {
		reportDesignName: 	null,
		dashboardName:   	null,
		requestOptions: 	new actuate.RequestOptions(),
		username: 			null, 
		password: 			null,
		enterpriseMode:     null, 
		volumeName:         null,
		iPortal:            null,
		parameterValueMap:  null,
		uioptions:          null, 
		customParameters:   null,
		toolbarkey: 		true,
		
		reportInitDone:     function() {
			actuateViewer = new actuate.Viewer(viewerContainer[0].id);
			actuateViewer.setReportName(viewer.reportDesignName);

			// Check to see if there are any parameter values to set
			if(viewer.parameterValueMap != null) {
				// Set the parameter values
				var parameterValues = [];

				for(var key in viewer.parameterValues) {
					var param = new actuate.viewer.impl.ParameterValue();

					param.setName(key);

					if(viewer.parameterValues[key] != null) {
						param.setValue(viewer.parameterValues[key]);
					}else{
						param.setValueIsNull(true);
					}
				
					parameterValues.push(param);
				}

				actuateViewer.setParameterValues(parameterValues);
			}

			// Set any UI Options
			var options = new actuate.viewer.UIOptions(viewer.uioptions);
			actuateViewer.setUIOptions(options);

			viewer.requestOptions.setCustomParameters(viewer.customParameters); // Set the custom parameters
			viewer.requestOptions.setVolume(viewer.volumeName);					// Set the volume name

			if(viewer.enterpriseMode) {
				viewer.requestOptions.setRepositoryType('enterprise');
			}else{
				viewer.requestOptions.setRepositoryType('workgroup');
			}


			actuateViewer.submit();
		}
	}

	$.fn.visualize = function() {
		actuate.initialize(viewer.iPortal,
						   viewer.reqOps == undefined ? null : viewer.requestOptions, 
						   viewer.username, 
						   viewer.password,
						   viewer.reportInitDone);

		return this;
	}

	$.fn.setReportName = function(reportDesignName) {
		viewer.reportDesignName = reportDesignName;

		return this;	
	}

	$.fn.setDashboardName = function(dashboardName) {
		viewer.dashboardName = dashboardName;

		return this;
	}

	$.fn.setRequestOptions = function(requestOptions) {
		viewer.requestOptions = requestOptions;

		return this;
	}

	$.fn.setUsername = function(username) {
		viewer.username = username;

		return this;
	}

	$.fn.setPassword = function(password) {
		viewer.password = password;

		return this;
	}

	$.fn.setIPortal = function(iPortal) {
		viewer.iPortal = iPortal;

		return this;
	}

	$.fn.setParameterValues = function(parameterValues) {
		viewer.parameterValueMap = parameterValues;

		return this;
	}

	$.fn.setUIOptions = function(UIOptions) {
		viewer.uioptions = UIOptions;

		return this;
	}

	$.fn.setCustomParameters = function(customParameters) {
		viewer.customParameters = customParameters;

		return this;
	}

	$.fn.setEnterpriseMode = function(enterpriseMode) {
		viewer.enterpriseMode = enterpriseMode;

		return this;
	}

	$.fn.setVolumeName = function(volumeName) {
		viewer.volumeName = volumeName;

		return this;
	}

	//******************************************************
	// Actuate class implementations

	// TODO: Implement
	$.fn.authenticate = function() {
		return this;
	}

	// TODO: Implement
	$.fn.getDefaultUportalUrl = function() {
		return this;
	}

	// TODO: Implement
	$.fn.getDefaultRequestOptions = function() {
		return this;
	}

	// TODO: Implement
	$.fn.getVersion = function() {
		return this;
	}

	// TODO: Implement
	$.fn.Viewer = function() {
		return this;
	}

	// TODO: Implement
	$.fn.isConnected = function() {
		return this;
	}

	// TODO: Implement
	$.fn.isInitalized = function() {
		return this;
	}

	// TODO: Implement
	$.fn.load = function() {
		return this;
	}

	// TODO: Implement
	$.fn.logout = function() {
		return this;
	}
	//************************************************

	//************************************************
	// Actuate.AuthenticationException implementation
	// TODO: Implement
	$.fn.getIportalUrl = function() {
		return this;
	}


	$.fn.getRequestOptions = function() {
		return this;
	}

	$.fn.getUserID = function() {
		return this;
	}
	//************************************************

	//************************************************
	// Actuate.Dashboard implementation
	
	$.fn.downloadDashboard = function() {
		return this;
	}

	$.fn.embedTemplate = function() {
		return this;
	}

	$.fn.getActiveTab = function() {
		return this;
	}


	$.fn.isAutoSaveEnabled = function() {
		return this;
	}

	$.fn.isSavingNeeded = function() {
		return this;
	}

	$.fn.isUsingPersonalDashboard = function() {
		return this;
	}

	$.fn.onUnload = function() {
		return this;
	}

	$.fn.registerEventHandler = function() {
		return this;
	}

	$.fn.removeEventHandler = function() {
		return this;
	}

	$.fn.renderContent = function() {
		return this;
	}

	$.fn.save = function() {
		return this;
	}

	$.fn.saveAs = function() {
		return this;
	}

	$.fn.setActiveTab = function() {
		return this;
	}

	$.fn.setAutoSaveDelay = function() {
		return this;
	}

	$.fn.setContainer = function() {
		return this;
	}

	$.fn.setDashboardName = function() {
		return this;
	}

	$.fn.setHeight = function() {
		return this;
	}

	$.fn.setWidth = function() {
		return this;
	}

	$.fn.setService = function() {
		return this;
	}

	$.fn.setSize = function() {
		return this;
	}

	$.fn.setTemplate = function() {
		return this;
	}

	$.fn.showGallery = function() {
		return this;
	}

	$.fn.showTabNavigation = function() {
		return this;
	}

	$.fn.usePersonalDashboard = function() {
		return this;
	}
	//************************************************

	//************************************************
	// Actuate.Dashboard.GasgetScript implementation
	$.fn.getCurrentReportParameters = function() {
		return this;
	}

	$.fn.getGadgetName = function() {
		return this;
	}

	$.fn.getGadgetTitle = function() {
		return this;
	}

	$.fn.getGadgetType = function() {
		return this;
	}

	$.fn.getTabName = function() {
		return this;
	}

	$.fn.getTabTitle = function() {
		return this;
	}
	//************************************************

	// TODO: Implement
	$.fn.enableScrollbar = function(scrollBar) {
		return this;
	}

	// TODO: Implement
	$.fn.setVolumeProfile = function(volumeProfile) {
		return this;
	}

	return this;
};