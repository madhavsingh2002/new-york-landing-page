
import './App.css';

function App() {
  return (
    <div className='home'>
      <div className="header">
        <nav>
          <ul>
            <li style={{color: '#ef4423',fontWeight: 'bold'}} >Logo</li>
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <h1>"Experience the vibrant heart of America in a whirlwind New York City tour, where skyscrapers, culture, and history collide."</h1>
        <p >Explore the iconic sights of the Big Apple on a thrilling New York City tour. Admire the Statue of Liberty, stroll through Central Park, and marvel at the dazzling lights of Times Square. Immerse yourself in diverse neighborhoods, savor world-class cuisine, and feel the energy of this bustling metropolis.</p>
        <button>Explore Now  </button>
      </div>
    </div>
  );
}

export default App;
