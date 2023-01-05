import './App.css';
import Avartar from './components/Avartar';
import Profile from './components/Profile.jsx';

function AppProfile() {
  return (
    <>
      <button onClick={(event) => {
        console.log(event);
        alert('버튼이 클릭됨!!');
      }}>버툰</button>
      <Avartar image="https://images.unsplash.com/photo-1600880292630-ee8a00403024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
      isNew={true}/>

      <Profile
        image="https://images.unsplash.com/photo-1672646856394-ec0dd6a4ccec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80"
        name="보굥이"
        title="free rich"
      />
      <Profile
        image="https://images.unsplash.com/photo-1600880292630-ee8a00403024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
        name="웅이"
        title="야옹 야옹~~ 야옹"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1596910547037-846b1980329f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        name="알감자"
        title="eggpotato, creamer potato, little potato"
      />
    </>
  );
}

export default AppProfile;
