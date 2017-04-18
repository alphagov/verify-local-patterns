# Contribution guidelines

## Raising issues

If you think something should be different in either of the patterns, [first check someone else hasn't already spotted it](https://github.com/alphagov/verify-local-patterns/issues?utf8=%E2%9C%93&q=is%3Aissue%20). If they haven't, feel free to [open an issue](https://github.com/alphagov/verify-local-patterns/issues/new) and we can discuss it.

Please make sure you are **describing problems not suggesting solutions** in your issue.

This ensures changes are discussed properly before any time is spent on them.

## Raising bugs with the project

Bugs are reported as issues, but with the #bug tag. Please explain the issue in good detail and if neccesary, provide a guide to how to replicate it.
When describing the bug it's useful to follow the format:

- what you did
- what you expected to happen
- what happened

## Submitting pull requests

If you have fixed an issue which is already open, please feel free to submit a pull request.

Unsolicited pull requests which do not refer to open issues might not be merged.

## Contact the team

You can contact us via email if you have our emails, or via the Verify Local Slack if you are part of that.

## GOV.UK Elements

The project contains code taken from [GOV.UK Elements](https://github.com/alphagov/govuk_elements/) as well as the GOV.UK [Prototype kit](https://github.com/alphagov/govuk_prototype_kit) project.
Please check that any issues related to GOV.UK patterns, or the prototype kit, are raised with those projects, not this one.

## Contributing code

If you want to contribute to this project directly, please make sure you're working on an issue which is open. Pull requests which do not refer to issues that have been discussed will be rejected.

### Indentation and whitespace

Your JavaScript code should pass [linting](docs/linting.md).

For anything else, maintain 2-space, soft-tabs only indentation. No trailing whitespace.

### Versioning

Follow the guidelines on [semver.org](http://semver.org/) for assigning version
numbers.

Versions should only be changed in a commit of their own, in a pull request of
their own. This alerts team members to the new version and allows for
last-minute scrutiny before the new version is released. Also, by raising a
separate pull request, we avoid version number conflicts between feature
branches.

### Commit hygiene

Please see our [git style guide](https://github.com/alphagov/styleguides/blob/master/git.md)
which describes how we prefer git history and commit messages to read.
