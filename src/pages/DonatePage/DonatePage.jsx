import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import DonateList from '../../components/DonateList/DontateList';
import './DonatePage.css'

export default function DonatePage({ user, setUser, DonationLocations}) {
  return (
    <main className="DonatePage">
      <div className="DonatePageContainer">
        <div><img className="DonatePageImg col" src="https://i.imgur.com/EfCCOKc.jpg"></img></div>
        <div className="col">
          <div className="Content">
            <h3>HELP REDUCE YOUR ENVIRONMENTAL IMPACT AND DONATE TO YOUR LOCAL SHELTERS</h3>
            <p> Our company's mission is to reduce the harmful effects of clothing pollution. Did you know that majority of landfills are filled with clothing. The dyes in most clothing can contaminate our drinking water. Reduce, Reuse, Recycle for a better planet.</p>
          </div>
        </div>
      </div>
      <div className="DonateCardContainer"><DonateList DonationLocations={DonationLocations}/></div>
    </main>
  );
}