import axios from 'axios'

class ProfileService {
    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5005/api/profile-user',
            withCredentials: true
        })
    }
    getProfile = (id) => this.app.get(`/${id}`)
    getTicketProfile = () => this.app.get(`/UserTickets`)
}

export default ProfileService