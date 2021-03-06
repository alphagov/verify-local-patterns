/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (
    window.sessionStorage && window.sessionStorage.getItem('prototypeWarning') !== 'false' &&
    window.console && window.console.info
) {
    window.console.info('GOV.UK Prototype Kit - do not use for production')
    window.sessionStorage.setItem('prototypeWarning', true)
}

$(document).ready(function() {
    // Use GOV.UK selection-buttons.js to set selected
    // and focused states for block labels
    var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']")
    new GOVUK.SelectionButtons($blockLabels) // eslint-disable-line

    // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
    // with role="button" when the space key is pressed.
    GOVUK.shimLinksWithButtonRole.init()

    // Show and hide toggled content
    // Where .block-label uses the data-target attribute
    // to toggle hidden content
    var showHideContent = new GOVUK.ShowHideContent()
    showHideContent.init()


    // Company car upload
    if (window.location.href.indexOf("company-car-upload") > -1) {
        $('#file').change(function(e) {
            // todo: check that file is actually chosen!!
            window.location.href = 'loading-company-car-upload';
        });
    }
    if (window.location.href.indexOf("loading-company-car-upload") > -1) {
        setTimeout(function() {
            window.location.href = 'company-car-upload-accepted';
        }, 2000)
    }

    // Vehicle ownership document upload
    if (window.location.href.indexOf("vehicle-ownership-document-upload") > -1) {
        $('#file').change(function(e) {
            // todo: check that file is actually chosen!!
            window.location.href = 'l-vehicle-ownership-document-upload';
        });
    }
    if (window.location.href.indexOf("l-vehicle-ownership-document-upload") > -1) {
        setTimeout(function() {
            window.location.href = 'vehicle-ownership-document-accepted';
        }, 2000)
    }


    if (window.location.href.indexOf("employer-letter-from-upload") > -1) {
        $('#file').change(function(e) {
            // todo: check that file is actually chosen!!
            window.location.href = 'l-employer-letter-from-upload';
        });
    }
    if (window.location.href.indexOf("l-employer-letter-from-upload") > -1) {
        setTimeout(function() {
            window.location.href = 'employer-letter-from-accepted';
        }, 2000)
    }


    if (window.location.href.indexOf("rented-vehicle-document-upload") > -1) {
        $('#file').change(function(e) {
            // todo: check that file is actually chosen!!
            window.location.href = 'l-rented-vehicle-document-upload';
        });
    }
    if (window.location.href.indexOf("l-rented-vehicle-document-upload") > -1) {
        setTimeout(function() {
            window.location.href = 'rented-vehicle-document-accepted';
        }, 2000)
    }


    if (window.location.href.indexOf("new-vehicle-document-upload") > -1) {
        $('#file').change(function(e) {
            // todo: check that file is actually chosen!!
            window.location.href = 'l-new-vehicle-document-upload';
        });
    }
    if (window.location.href.indexOf("l-new-vehicle-document-upload") > -1) {
        setTimeout(function() {
            window.location.href = 'new-vehicle-document-accepted';
        }, 2000)
    }


    if (window.location.href.indexOf("upload") > -1) {
        $('.in-progress').click(function(e) {
            e.preventDefault();
            window.alert("This feature is currently in progress.");
        });
        $('#photo').change(function(e) {
            // todo: check that file is actually chosen!!
            window.location.href = 'loading';
        });
    }
    if (window.location.href.indexOf("prove-address") > -1) {
        $('#file').change(function(e) {
            // todo: check that file is actually chosen!!
            window.location.href = 'loading-poa';
        });
    }
		if (window.location.href.indexOf("new-postal-address-proof") > -1) {
				$('#file').change(function(e) {
						// todo: check that file is actually chosen!!
						window.location.href = 'loading-postal-address-proof';
				});
		}
    if (window.location.href.indexOf("prove-age") > -1) {
        $('#file').change(function(e) {
            // todo: check that file is actually chosen!!
            window.location.href = 'loading-poage';
        });
    }
    if (window.location.href.indexOf("v5c-upload") > -1) {
        $('#file').change(function(e) {
            // todo: check that file is actually chosen!!
            window.location.href = 'loading-v5c';
        });
    }
    if (window.location.href.indexOf("loading-v5c") > -1) {
        setTimeout(function() {
            window.location.href = 'v5c-accepted';
        }, 2000)
    }
    if (window.location.href.indexOf("loading-poa") > -1) {
        setTimeout(function() {
            window.location.href = 'doc-uploaded';
        }, 2000)
    }
		if (window.location.href.indexOf("loading-postal-address-proof") > -1) {
				setTimeout(function() {
						window.location.href = 'document-accepted-new-postal';
				}, 2000)
		}
    if (window.location.href.indexOf("loading-poage") > -1) {
        setTimeout(function() {
            window.location.href = 'upload-complete';
        }, 2000)
    }
    if (window.location.href.indexOf("loading") > -1) {
        setTimeout(function() {
            window.location.href = 'confirm-photo';
        }, 3000)
    }
    if (window.location.href.indexOf("loading-webcam-photo") > -1) {
        setTimeout(function() {
            window.location.href = 'webcam-photo-accepted';
        }, 3000)
    }



})