import { $instance, $instanceForm } from '../instances'

export default {
    register(data: any) {
        return $instance.post(`auth/register`, JSON.stringify(data))
    },

    login(data: any) {
        return $instance.post(`auth/login`, JSON.stringify(data))
    },
}