# Codity post-deploy review probe

Acceptance fixture for verifying full PR review completion after scope-pr-review-scans deploy.
Expected: PR Summary, findings, Security, Dependency (introduced), Code Quality, Merge Status.
License must NOT run as part of `@codity review`.
