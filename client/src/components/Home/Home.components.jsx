import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {




  return (
      <div>
    <h1>Welcome to Subject Allotment System</h1>

    <Link to="/labs"><button>Labs</button></Link>
    <Link to="/professors"><button>Professors</button></Link>
    <Link to="/Tas"><button>Teaching Assistants</button></Link>
    <Link to="/theories"><button>Theories</button></Link>
    </div>
  )
}

export default Home;