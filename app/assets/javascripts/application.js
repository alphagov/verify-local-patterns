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
						window.location.href = 'loading-new-postal-poa';
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
            window.location.href = 'document-accepted';
        }, 2000)
    }
		if (window.location.href.indexOf("loading-new-postal-poa") > -1) {
				setTimeout(function() {
						window.location.href = 'document-accepted-new-postal';
				}, 2000)
		}
    if (window.location.href.indexOf("loading-poage") > -1) {
        setTimeout(function() {
            window.location.href = 'eligible-nonverify';
        }, 2000)
    }
    if (window.location.href.indexOf("loading") > -1) {
        setTimeout(function() {
            window.location.href = 'good-photo';
        }, 3000)
    }
    if (window.location.href.indexOf("loading-webcam-photo") > -1) {
        setTimeout(function() {
            window.location.href = 'webcam-photo-accepted';
        }, 3000)
    }

})
