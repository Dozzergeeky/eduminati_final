# Development Configuration

This directory contains development-specific configuration and utilities.

## Development Branch Usage

The `develop` branch is intended for:
- Feature development and integration
- Testing new features before merging to main
- Collaborative development work
- Staging environment deployments

## Branch Strategy

```
main (production)
 ↑
develop (development - this branch)
 ↑
feature/your-feature (feature branches)
```

## Getting Started with Development

1. Always create feature branches from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. When ready, merge feature branches back to `develop`:
   ```bash
   git checkout develop
   git merge feature/your-feature-name
   ```

3. Periodically, `develop` gets merged to `main` for releases.