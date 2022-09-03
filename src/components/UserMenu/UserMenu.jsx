import { useSelector } from 'react-redux';
import defaultAvatar from '../../images/avatar.png';
import { useDispatch } from 'react-redux';
import authOperation from 'redux/auth/auth-operation';

const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();
  return (
    <>
      {name}
      <img src={defaultAvatar} width="40" alt="user avatar" />
      <button type="button" onClick={() => dispatch(authOperation.logOut())}>
        Log out
      </button>
    </>
  );
};

export default UserMenu;
