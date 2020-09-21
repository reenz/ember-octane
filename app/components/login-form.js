import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'
import { inject as service } from '@ember/service';

export default class LoginFormComponent extends Component {

    @service auth;
    @tracked
    userId = null;

    get isDisabled() {
        return !this.userId;
    }
   
    /**
     * @param {Event & {target: HTMLFormElement}} evt
    */
   @action
   onLoginFormSubmit(evt) {
       const { target } = evt;
       const val = target.querySelector('select').value;
       evt.preventDefault();
       this.auth.loginUserWithId(val);
   }

   @action
   onSelectChanged(evt) {
       this.userId = evt.target.value; 
   }

}
