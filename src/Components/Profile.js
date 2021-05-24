// profile/list of potlucks
import Organize from './Organize';
import Guest from './Guest';

const Profile = () => {
    return(
        <div>
            <h1>Profile Page</h1>
            <button>Start New Potluck</button>
            <Organize />
            <Guest />
        </div>
    )
}

export default Profile;