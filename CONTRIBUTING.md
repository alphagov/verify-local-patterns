# Contribution guidelines

Please do add any issues with these services patterns to this project.

## Contact the team

You can contact us via email if you have our emails, or via the Verify Local Slack if you are part of that.

## Suggesting features or changes

If you think something should be different in either of the patterns, [first check someone else hasn't already spotted it](https://github.com/alphagov/verify-local-patterns/issues?utf8=%E2%9C%93&q=is%3Aissue%20). If they haven't, feel free to [open an issue](https://github.com/alphagov/verify-local-patterns/issues/new) and we can discuss it.

This ensures they are discussed properly before any time is spent on them.

Before opening

## Raising bugs with the project

When raising bugs please explain the issue in good detail and if neccesary, provide a guide to how to replicate it.
When describing the bug it's useful to follow the format:

- what you did
- what you expected to happen
- what happened

## GOV.UK Elements

The project contains code taken from [GOV.UK Elements](https://github.com/alphagov/govuk_elements/) as well as the GOV.UK [Prototype kit](https://github.com/alphagov/govuk_prototype_kit) project.
Please check that any issues related to that code are raised with those projects, not this one.

## Contributing code

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
