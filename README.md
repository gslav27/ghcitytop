# ghcitytop
React App with GitHub GraphQL API. 

### Source code directory
- `./src`

### Bootstrapping

1. clone this repo – `$ git clone https://github.com/gslav27/ghcitytop.git`
2. Go to './ghcitytop/src' folder and setup *npm* dependencies `$ cd ghcitytop/src && npm install`
3. Run `yarn start` with GitHub token set to environment variable REACT_APP_GH_CITY_TOP_TKN_GSLAV:
- _Linux, macOS (Bash):_ `$ REACT_APP_GH_CITY_TOP_TKN_GSLAV=%your_github_token% yarn start`
- _Windows (cmd.exe):_ `$ set "REACT_APP_GH_CITY_TOP_TKN_GSLAV=%your_github_token%" && yarn start`
- _Windows (Powershell):_ `$ ($env:REACT_APP_GH_CITY_TOP_TKN_GSLAV = %your_github_token%) -and (yarn start)`  
4. Go to "http://localhost:3000/" in Web browser
5. That's all
