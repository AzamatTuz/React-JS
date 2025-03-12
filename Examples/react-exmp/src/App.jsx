import Products from './components/Products'
import UserArray from './components/User/UserArray'
import './App.css'


export default function App() {
  return (
    <div>

      <UserArray className="userCard" />
      
      <div className='cont'>
        <Products src='https://object.pscloud.io/cms/cms/Photo/img_0_62_2067_0_1.jpg' price='500 000' title="Ноутбук" />
        <Products src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrjpj6932pZs1WLmyt_5VDOGASew8rBEIow&s' price='600 000' title="iPhone 16" />
        <Products src='https://ih1.redbubble.net/image.1665104440.1004/st,small,507x507-pad,600x600,f8f8f8.jpg' price='3 000 000 000' title="Ope Ope no mi" />
        <Products src='https://object.pscloud.io/cms/cms/Photo/img_0_62_2067_0_1.jpg' price='500 000' title="Ноутбук" />
      
      </div>
    </div>
  );
}
