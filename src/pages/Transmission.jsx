import { useRef, useEffect } from "react";
import bgImage from "../assets/background.jpeg";
import FracturedMeteore from "../components/FracturedMeteore";
import { Link } from "react-router-dom";
import home from "../assets/home.png";

export default function Transmission() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const handleScroll = () => {
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight);
      el.style.setProperty("--scroll-pct", pct);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* <FracturedTitle /> */}

      <div className="flicker-wrapper transmission-text" ref={textRef}>
        <p>
          <b>entry 001 — feb 9 2026</b>
        </p>
        <p>something was received here. we are still decoding.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <p>
          <pre>
            <code>
              Querying NASA JPL Horizons for target ID 99942... === TELESCOPE{" "}
              <br />
              TARGETING INSTRUCTIONS === Observation Time (UTC): 2026-02-09
              {"  "}
              <br />
              04:25:12.481 Target Distance: 224381042.18 km Pointing Direction:{" "}
              <br />- Azimuth (Compass): 284.1194° - Altitude (Up/Down):
              -42.8815° <br />
            </code>
          </pre>
          <br />
          <br />
          <pre>
            <code>
              {`import numpy as np
from astropy.time import Time
from astropy.coordinates import EarthLocation, AltAz
from astropy import units as u
from astroquery.jplhorizons import Horizons

# 1. Define location on Earth (Mauna Kea, Hawaii)
hawaii_loc = EarthLocation(lat=19.8206*u.deg, lon=-155.4681*u.deg, height=4205*u.m)

# 2. Set the observation time: October 2026
# The Draconids are unique because they are best viewed in the early evening hours!
observation_time = Time('2026-10-08T22:00:00')

# 3. Define the target object: 21P/Giacobini-Zinner (Parent of the Draconids)
target_id = '21P' 

print(f"Querying NASA JPL Horizons for Draconid parent body {target_id}...")

# 4. Query NASA's JPL Horizons database for ephemeris data on the target date
query = Horizons(
    id=target_id, 
    location={
        'lon': hawaii_loc.lon.value, 
        'lat': hawaii_loc.lat.value, 
        'elevation': hawaii_loc.height.to(u.km).value
    },
    epochs=observation_time.jd
)
ephemeris = query.ephemerides()[0]

# 5. Extract the coordinates of the comet
ra = ephemeris['RA'] * u.deg
dec = ephemeris['DEC'] * u.deg
distance = ephemeris['delta'] * u.au  # Distance from Earth in Astronomical Units

# 6. Extract the precise drift tracking rates
ra_rate = ephemeris['RA_rate'] * (u.arcsec / u.hour)
dec_rate = ephemeris['DEC_rate'] * (u.arcsec / u.hour)

# 7. Convert RA/Dec to Alt/Az for physical telescope alignment
alt_az_frame = AltAz(obstime=observation_time, location=hawaii_loc)
sky_coord = AltAz(alt=ephemeris['EL']*u.deg, az=ephemeris['AZ']*u.deg)

# 8. Output the precise targeting instructions for the telescope hardware
print("\n=== DRACONID COMET TARGETING INSTRUCTIONS ===")
print(f"Target Object:          Comet 21P/Giacobini-Zinner")
print(f"Observation Time (UTC): {observation_time.iso}")
print(f"Target Distance:        {distance.to(u.km):.2f}")
print(f"Pointing Direction:")
print(f"  - Azimuth (Compass):  {ephemeris['AZ']:.4f}°")
print(f"  - Altitude (Up/Down): {ephemeris['EL']:.4f}°")
print(f"Required Non-Siderial Tracking Rates (To track the comet, not the stars):")
print(f"  - RA Pan Rate:        {ra_rate:.3f}")
print(f"  - Dec Tilt Rate:      {dec_rate:.3f}")

if ephemeris['EL'] < 0:
    print("\n[WARNING] Target is currently below the horizon at this location.")
else:
    print("\n[SUCCESS] Target is visible. Send coordinates to mount controller.")`}
            </code>
          </pre>
        </p>
        <br />
      </div>
      <FracturedMeteore />
      <Link to="/" className="logo-link">
        <img src={home} alt="home" className="logo-icon" />
      </Link>
    </div>
  );
}
