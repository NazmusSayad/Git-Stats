# 📄 Documentation

Setup a GitHub Action which runs periodically and pushes generated images to a repository.

<br />

## 0️. Use this repo

*You can do this by clicking here.*\
![image](https://user-images.githubusercontent.com/87106526/177674661-00d299ab-af43-4704-b831-4dcd8be7b612.png)



<br /><br />
## 1️. Create a GitHub personal token

No scopes are required, but additional one may be required depending on which features will be used. Each plugin documentation enumerates which scopes are required to make it work.

A a general rule, the following scopes may be required:
- `public_repo` for some plugins
- `read:org` for all organizations related metrics
- `repo` for all private repositories related metrics
  - `read:user` for some private repositories related metrics
- `read:packages` for some packages related metrics
- `gist` for publishing renders to gists instead of a repository


<br /><br />
## 2️. Put your GitHub personal token in repository secrets

Go to the `Settings` of your repository and to create a new secret named `ACCESS_TOKEN` and paste your freshly generated GitHub token there.

![image](https://user-images.githubusercontent.com/87106526/177674365-eb43220e-d4c3-4b0b-b58e-9bc33444cbce.png)
