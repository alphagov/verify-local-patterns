function loadIssues(labels){
	for (var i = 0; i < labels.length; i++) {
		const thisLabel = labels[i];
		const thisLabelClass = thisLabel.replace(/\s+/g, '-').toLowerCase();

		// var container = '<div class="container-'+i+'"></div>';
		// $('.github-issues-list').append(container);
		//
		// var labelTitle = '<h4 class="heading-small">'+thisLabel+'</h4>'
		// $('.container-'+i).append(labelTitle);

		var list = '<ul class="list list-bullet issues-tagged-'+thisLabelClass+'"></ul>';

		$('.container-'+thisLabelClass).append(list);

		$.get( "https://api.github.com/repos/alphagov/verify-local-patterns/issues?state=all&labels=Concessionary%20Travel,"+thisLabel, function( issues ) {
			for (var j = 0; j < issues.length; j++) {
				var issue = '<li><a href="'+issues[j].html_url+'">'+issues[j].title+'</a></li>';
				$('.issues-tagged-'+thisLabelClass).append(issue);
			}

		});
	}
}
