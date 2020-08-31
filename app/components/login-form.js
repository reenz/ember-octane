import Component from '@glimmer/component';
import { action } from '@ember/object'


export default class LoginFormComponent extends Component {
    loginUserWithId(val) {
        console.log(val);
    }
    /**
     * @param {Event & {target: HTMLFormElement}} evt
    */
   @action
   onLoginFormSubmit(evt) {
       const { target } = evt;
       const val = target.querySelector('select').value;
       evt.preventDefault();
       this.loginUserWithId(val);
   }

}
