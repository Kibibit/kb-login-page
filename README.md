<p align="center">
  <a href="https://github.com/Kibibit/kb-login-page" target="blank"><img src="http://kibibit.io/kibibit-assets/login.svg" width="150" ></a>
  <h2 align="center">
    @kibibit/kb-login-page
  </h2>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@kibibit/kb-login-page"><img src="https://img.shields.io/npm/v/@kibibit/kb-login-page/latest.svg?style=for-the-badge&logo=npm&color=CB3837"></a>
</p>
<p align="center">
  <a href="https://salt.bountysource.com/teams/kibibit"><img src="https://img.shields.io/endpoint.svg?url=https://monthly-salt.now.sh/kibibit&style=flat-square"></a>
</p>
<p align="center">
  A simple GitHub login page for deployments and containers
</p>
<hr>

This library **requires** two parameters: `kbLoginUrl` & `kbApp`.

You can also pass the following optional parameters:
- `kbIcon`
- `kbCustomBg` - replace the particles default background
- `kbHelpUrl` - if this parameter is found, a "Having trouble?" url is added
- `kbHideKibibit` - in order to use in **non-kibibit** projects, this will hide the kibibit logo

You can pass them either with environment variables or with passing it as cli arguments:

### ENVIRONMENT
```
KB_LOGIN_URL=https://achievibit.kibibit.io
KB_APP=example app
KB_ICON=<url to icon>
KB_CUSTOM_BG=<url to bg>
KB_HELP_URL=<url to help>
KB_HIDE_KIBIBIT=true|false
```

### CLI
```
node server.js --kbLoginUrl https://achievibit.kibibit.io --kbApp kb-coding-server --kbIcon https://image.flaticon.com/icons/svg/119/119595.svg --kbCustomBg http://hdwpro.com/wp-content/uploads/2017/03/Art-Background-Image.png --kbHelpUrl https://github.com/kibibit/ --kbHideKibibit false
```

You can use whatever case you like, the application will convert it internally to camel case using lodash.

## Examples

- default background
- hide kibibit logo
- no help url

<img src="https://github.com/Kibibit/kb-login-page/blob/master/screenshots/particles.gif?raw=true" style="max-width: 100%;">

- custom background
- help url set
- show kibibit logo

<img src="https://github.com/Kibibit/kb-login-page/blob/master/screenshots//custom-bg.png?raw=true" style="max-width: 100%;">

## Contributors

Thanks goes to our contributors! ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

----

<div>Library logo is made by <a href="https://www.flaticon.com/authors/linector" title="Linector">Linector</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
