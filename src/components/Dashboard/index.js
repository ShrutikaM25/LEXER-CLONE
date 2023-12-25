import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo  from '../images/LEX.webp'; 
import card1_image from '../images/Piechart1.png';
import usdc from '../images/sXLP.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => <div style={{ margin: '0' }}></div>; // Removed top margin
const MigrateV1Assets = () => <div style={{ margin: '10px 0' }}>Migrate V1 Assets Content</div>;
const LexStake = () => <div style={{ margin: '10px 0' }}>LexStake Content</div>;
const Liquidity = () => <div style={{ margin: '10px 0' }}>Liquidity Content</div>;
const Trade = () => <div style={{ margin: '10px 0' }}>Trade Content</div>;
const Leaderboard = () => <div style={{ margin: '10px 0' }}>Leaderboard Content</div>;
const V2Launch = () => <div style={{ margin: '10px 0' }}>V2 Launch Content</div>;

const FirstCard = () => (
  <div style={{ margin: '10px 0', backgroundColor: 'rgba(240, 240, 240, 0.2)', color: '#ffff', border: '2px solid grey', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
    <h3>Total Trading Volume</h3>
    <p style={{color:'#50C878'}}>$298,994.16</p>
  </div>
);

const SecondCard = () => (
  <div style={{ margin: '10px 0', backgroundColor: 'rgba(240, 240, 240, 0.2)', color: '#ffff', border: '2px solid grey', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
    <h3>Total Fees</h3>
    <p style={{color:'#50C878'}}>$492.56</p>
  </div>
);

const ThirdCard = () => (
  <div style={{ margin: '10px 0', backgroundColor: 'rgba(240, 240, 240, 0.2)', color: '#ffff', border: '2px solid grey', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
    <h3>Total Value Locked</h3>
    <p style={{color:'#50C878'}}>$70,701.53</p>
  </div>
);

const Card = ({ cardType }) => {
  if (cardType === 1) {
    return <FirstCard />;
  } else if (cardType === 2) {
    return <SecondCard />;
  } else if (cardType === 3) {
    return <ThirdCard />;
  } else if (cardType === 4) {
    // First new card information
    return (
      <div style={{ margin: '10px 0', backgroundColor: 'rgba(240, 240, 240, 0.2)', borderRadius: '10px', border: '2px solid grey', padding: '20px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ textAlign: 'left' , color: '#ffff' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px' }}>
            <img src={usdc} alt="Circular Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h2>mXLP</h2>
        </div>
            <p>Price: $0.897</p>
            <p>TVL: $1800.32</p>
            <p>APR: 13.53%</p>
            <p>Stables percentages: 100%</p>
          </div>
          <img src={card1_image} alt="First Card Image" style={{ width: '40vh', height: '40vh' }} />
        </div>
      </div>
    );
  } else if (cardType === 5) {
    // Second new card information with image on the right
    return (
      <div style={{ margin: '10px 0', backgroundColor: 'rgba(240, 240, 240, 0.2)', borderRadius: '10px', border: '2px solid grey', padding: '20px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ textAlign: 'left' , color: '#ffff' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px' }}>
            <img src={usdc} alt="Circular Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h2>sXLP</h2>
        </div>
            <p>Price: $0.897</p>
            <p>TVL: $1800.32</p>
            <p>APR: 13.53%</p>
            <p>Stables percentages: 100%</p>
          </div>
          <img src={card1_image} alt="Second Card Image" style={{ width: '40vh', height: '40vh' }} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ backgroundColor: 'darkblue', color: 'white', padding: '10px', borderRadius: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px' }}>
            <img src={Logo} alt="Circular Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3>Lexer</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px', fontSize: '20px' }}>$0.0050</span>
          <button onClick={toggleAccordion} style={{ backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'pointer', marginRight: '10px' }}>
            {isOpen ? <FontAwesomeIcon icon={faChevronUp}  size='1.7x'/> : <FontAwesomeIcon icon={faChevronDown} size='1.7x'/>}
          </button>
        </div>
      </div>
      {isOpen && (
       <div>
       <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
         <div>
           <p>APR</p>
           <p>Total Staked</p>
         </div>
         <div style={{ textAlign: 'right', marginRight: '20px'}}>
           <p>59.37%</p>
           <p>13,338,405.23 LEX ($66,892.10)</p>
         </div>
       </div>
     </div>
      )}
    </div>
  );
};


const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


  return (
    <Router>
      <div style={{
        background: 'linear-gradient(-45deg, blue, black, black, blue, white)',
        height: '100%', 
        overflow: 'hidden', }}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)', color: '#ffff', padding: '10px' }}>
        <button onClick={toggleSidebar} style={{ marginRight: '10px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', fontSize: '24px'}}
>            &#9776; </button>

          <h2 style={{ margin: 0 }}>LEXER</h2>
          <button style={{ marginLeft: 'auto', padding: '8px 16px', borderRadius: '4px', backgroundColor: 'rgba(240, 240, 240, 0.2)', color: '#fff', border: '2px solid grey'}}>
            Connect
          </button>
        </div>

        <div style={{ display: 'flex' }}>
          <div ref={sidebarRef}
            style={{
              width: sidebarOpen ? '200px' : '0',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              transition: 'width 0.3s ease',
              overflow: 'hidden',
              paddingLeft: sidebarOpen ? '20px' : '0',
            }}
          >
            <ul style={{ listStyleType: 'none', padding: 0, marginLeft: '10px' }}>
              <li style={{ margin: '20px 10px' }}>
                <Link to="/trade" style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>LEXER</Link>
                {sidebarOpen && (
          <button
            onClick={closeSidebar}
            style={{
              position: 'absolute',
              top: '60px',
              left: '170px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              fontSize: '24px',
              padding: '10px',
            }}
          >
            &#10006;
          </button>
        )}
              </li>
              <li style={{ margin: '20px 10px' }}>
                    <Link to="/dashboard" style={{ textDecoration: 'none', color: '#D3D3D3' }}>Dashboard</Link>
                </li>
                <li style={{ margin: '20px 10px' }}>
                    <Link to="/migrate-v1-assets" style={{ textDecoration: 'none', color: '#D3D3D3' }}>Migrate V1 Assets</Link>
                </li>
                <li style={{ margin: '20px 10px' }}>
                    <Link to="/lex-stake" style={{ textDecoration: 'none', color: '#D3D3D3'}}>LexStake</Link>
                </li>
                <li style={{ margin: '20px 10px' }}>
                    <Link to="/liquidity" style={{ textDecoration: 'none', color: '#D3D3D3'}}>Liquidity</Link>
                </li>
                <li style={{ margin: '20px 10px' }}>
                    <Link to="/trade" style={{ textDecoration: 'none', color: '#D3D3D3'}}>Trade</Link>
                </li>
                <li style={{ margin: '20px 10px' }}>
                    <Link to="/leaderboard" style={{ textDecoration: 'none', color:'#D3D3D3' }}>Leaderboard</Link>
                </li>
                <li style={{ margin: '20px 10px' }}>
                    <Link to="/v2-launch" style={{ textDecoration: 'none', color: '#D3D3D3' }}>V2 Launch</Link>
                </li>
            </ul>
          </div>  

          <div style={{ flex: 1, padding: '20px', marginTop: '10px' }}> 
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/migrate-v1-assets" element={<MigrateV1Assets />} />
              <Route path="/lex-stake" element={<LexStake />} />
              <Route path="/liquidity" element={<Liquidity />} />
              <Route path="/trade" element={<Trade />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/v2-launch" element={<V2Launch />} />
            </Routes>

            <div style={{ display: 'flex', marginTop: '20px' }}>
            <div style={{ flex: 1, padding: '10px' }}>
              <FirstCard />
            </div>
            <div style={{ flex: 1, padding: '10px' }}>
              <SecondCard />
            </div>
            <div style={{ flex: 1, padding: '10px' }}>
              <ThirdCard />
            </div>
          </div>

          <div style={{ display: 'flex', marginTop: '20px' }}>
            <div style={{ flex: 1, padding: '10px' }}>
              <Card cardType={4} />
            </div>
            <div style={{ flex: 1, padding: '10px' }}>
              <Card cardType={5} />
            </div>
          </div>
          <div style={{ flex: 1, padding: '15px', marginTop: '10px' }}>
            <Accordion />
          </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;
