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

<!-- GENERAL DESCRIPTION IF NEEDED -->

This library **requires** two parameters: `kbLoginUrl` & `kbApp`.

You can also pass an optional parameter to set the library logo: `kbIcon`

You can pass them either with environment variables or with passing it as cli arguments:

### ENVIRONMENT
```
KB_LOGIN_URL=https://achievibit.kibibit.io
KB_APP=example app
KB_ICON=<url to icon>
```

### CLI
```
node server.js --kbLoginUrl https://achievibit.kibibit.io --kbApp kb-coding-server --kbIcon https://image.flaticon.com/icons/svg/119/119595.svg
```

You can use whatever case you like, the application will convert it internally to camel case using lodash.

## Contributors

Thanks goes to our contributors! ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

----

<div>Library logo is made by <a href="https://www.flaticon.com/authors/linector" title="Linector">Linector</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
