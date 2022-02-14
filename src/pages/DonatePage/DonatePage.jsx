import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import DonateList from '../../components/DonateList/DontateList';
import './DonatePage.css'

export default function DonatePage({ user, setUser, DonationLocations}) {
  return (
    <main className="DonatePage">
      <div className="DonatePageContainer">
        <div className="DonatePageImgContainter"><img className="DonatePageImg col" src="https://i.imgur.com/EfCCOKc.jpg"></img></div>
        <div className="col">
          <div className="DonatePageContent">
            <h1>REDUCE YOUR ENVIRONMENTAL IMPACT </h1>
            <hr/>
            <p> Our company's mission is to reduce the harmful effects of clothing pollution. Did you know that majority of landfills are filled with clothing? Yes, clothing makes up <strong>60%</strong> of our landfills! The dyes in most clothing can contaminate our drinking water. Most clothing take over 100 years to degrade. We are on a mission to Reduce, Reuse, Recycle for a better planet. </p>
              <li><h6>Reduce</h6> Our clothing is made up of 100% recycled cotton </li>
              <li><h6>Reuse</h6> Our company offers free repairs from wear and tear for the lifetime of the garment.</li>
              <li><h6>Recycle</h6> Bring in any Look Good Do Good item and we will recycle the material and offer a discount for a new purchase</li>
          </div>
        </div>
      </div>
      <div className="DonateCardContainer"><DonateList DonationLocations={DonationLocations}/></div>
    </main>
  );
}