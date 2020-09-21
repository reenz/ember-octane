import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

const AUTH_KEY = 'test-id';

export default class AuthService extends Service {
    @service router;
    @service cookies;

    get currentUserId() {
        return this.cookies.read(AUTH_KEY);
    }

    loginUserWithId(userId) {
        this.cookies.write(AUTH_KEY, userId);
        this.router.transitionTo('teams');
    }

    @action
    logout() {
        this.cookies.write(AUTH_KEY, null);
        this.router.transitionTo('login');        
    }
}
