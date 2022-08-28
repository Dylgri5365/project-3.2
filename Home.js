import React, { Component } from "react";
import rendering from './rendering.jpg';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Works</h2>
<p>The CAVS Special Collection has undergone preservation and digitization since 2012. This web-based repository project is funded in part by the National Endowment for the Arts under the Art Works program. The project is also a collaborative partnership between ACT and the MIT Museum, which also holds objects and documentation of CAVS work.
The digitized items from the collection are available for research upon request (see Policies). However, ACT is currently cataloging materials for inclusion on this interface and will continue to grow the amount of collection items available through this site regularly.</p>

        <p>Rendering</p>

<p>
                <div className="Foximage">
                <img alt="two" src={rendering} />
                    

                </div>
                </p>
                

      </div>
    );
  }
}
 
export default Home;