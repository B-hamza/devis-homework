import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import CardList from './pages/CardList';
import { useDevis, TypeDevis, byLocation } from './services/DevisService';;

const App =() => {
  
  const [type, setType] = useState<TypeDevis>(TypeDevis.METIER);
  const devis = useDevis();

  const { Sider } = Layout;
  return (
    <Layout className="App">
      <Sider>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick = {() => setType(TypeDevis.METIER)}>
            <span className="nav-text">Devis vue Métiérs</span>
          </Menu.Item>
          <Menu.Item key="2" onClick = {() => setType(TypeDevis.PIECE)}>
            <span className="nav-text">Devis vue Piéces</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <div style={{ flexGrow: 1 }}>
        {devis !== null ? CardList(type === TypeDevis.METIER ? devis : byLocation(devis)) : null}
      </div>
    </Layout>
  );
}
export default App;
