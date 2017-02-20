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

$(document).ready(function () {
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

  // code for verify give permission page, should probably be moved elsewhere so doesn't load on every page

  if(window.location.href.indexOf("parking-permit") > -1) {
    $('button').click(function(){
      var checked = $('#confirm_allow_verify').prop('checked');
      if(checked){
        window.location.href = "http://govuk-verify.herokuapp.com/intro?requestId=apply-for-parking-permit-argleton";
      }else{
        $('.error-summary').removeClass('hidden');
      }
    });
  }else if(window.location.href.indexOf("concessionary-travel") > -1){
    $('button').click(function(){
      var checked = $('#confirm_allow_verify').prop('checked');
      if(checked){
        window.location.href = "http://govuk-verify.herokuapp.com/intro?requestId=concessionary-travel-argleton";
      }else{
        $('.error-summary').removeClass('hidden');
      }
    });
  }

  if(window.location.href.indexOf("upload") > -1){
    $('#photo').change(function(e){
      console.log(e);
      console.log(e.currentTarget.value);
      window.location.href = 'loading';
      // $('.photo-status').html('<div class="panel panel-border-wide"><h2 class="heading-medium">Your photo: </h2><p>'+e.currentTarget.value+'</p><img src="'+window.URL.createObjectURL(this.files[0])+'" /></div>')
    });
  }


  if(window.location.href.indexOf("loading") > -1){

    setTimeout(function(){
      window.location.href = 'good-photo';
    }, 3000)
  }

})
