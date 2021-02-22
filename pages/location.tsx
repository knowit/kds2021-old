import { Layout, Pin } from "../components";

import "../styling/locationStyles.scss";

const Location = () => {
  return (
    <div className="location page">
      <Layout>
        <div className="map-container">
          <h1 className="title">Location</h1>
          <div className="location-name">
            <div>
              <Pin small={true} color="red"></Pin>
            </div>
            <p className="location-name-text">
              Radisson Blu Royal Hotel, Bergen
            </p>
          </div>
          <iframe
            id="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.8674655042814!2d5.32062831651584!3d60.39786683193086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfea794f3e3f3%3A0xb51c2d400a34fa45!2sRadisson%20Blu%20Royal%20Hotel%2C%20Bergen!5e0!3m2!1sno!2sno!4v1568630813943!5m2!1sno!2sno"
          />
        </div>
      </Layout>
    </div>
  );
};

export default Location;
