import _ from 'lodash';
                        //SCSS Compilation folder stylesheets
//Base
// import "./stylesheets/base/_reset.scss"
// import "./stylesheets/themes/_typography.scss"
import"./stylesheets/base/animation.scss"
//Components
import "./stylesheets/components/_buttons.scss"
// import "./stylesheets/themes/_carousel.scss"
// import "./stylesheets/themes/_cover.scss"
// import "./stylesheets/themes/_dropdown.scss"
// import "./stylesheets/themes/_navigation.scss"
import "./stylesheets/components/_card.scss"
//Helpers
// import "./stylesheets/themes/_functions.scss"
// import "./stylesheets/themes/_helpers.scss"
// import "./stylesheets/themes/_mixins.scss"
// import "./stylesheets/themes/_variables.scss"
//Layout
// import "./stylesheets/themes/_footer.scss"
// import "./stylesheets/themes/_forms.scss"
import "./stylesheets/layout/_grid.scss"
// import "./stylesheets/themes/_header.scss"
import "./stylesheets/layout/_sidebar.scss"
//Pages
import "./stylesheets/pages/_home.scss"
// import "./stylesheets/themes/_contact.scss"
//Themes
// import "./stylesheets/themes/_admin.scss"
// import "./stylesheets/themes/_theme.scss"

//PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}
                                        //Pour activé les DATA
// import Icon from './icons/icon.png';
// import Data from './data/data.xml';
// import Notes from './data/data.csv';
// import toml from './data/data.toml';
// import yaml from './data/data.yaml';
// import json from './data/data.json5';

// console.log(toml.title); // output `TOML Example`
// console.log(toml.owner.name); // output `Tom Preston-Werner`
//
// console.log(yaml.title); // output `YAML Example`
// console.log(yaml.owner.name); // output `Tom Preston-Werner`
//
// console.log(json.title); // output `JSON5 Example`
// console.log(json.owner.name); // output `Tom Preston-Werner`


