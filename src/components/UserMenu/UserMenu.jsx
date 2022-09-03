import { useSelector } from 'react-redux';
import defaultAvatar from '../../images/avatar.png';

const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  return (
    <>
      {name}
      <img src={defaultAvatar} width="40" alt="user avatar" />
      <button type="button">Log out</button>
    </>
  );
};

export default UserMenu;
