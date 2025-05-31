# Air Traffic Management System

A lightweight Python project that models airlines, airplanes, flights, and airports. You can schedule one flight per airplane per day, simulate takeoffs/landings, and track locations.

---

## File Structure

air_traffic/
├── airline.py # Airline class (id, name, list of planes)
├── airport.py # Airport class (city, parked planes, scheduled departures/arrivals)
├── flight.py # Flight class (date, origin, destination, plane; take_off/land methods)
├── airplane.py # Airplane class (id, current_location, company; fly, availability)
└── main.py # Demo: creates objects, schedules flights, simulates day-by-day

markdown
Copier
Modifier

---

## Quick Overview of Classes

- **Airline (`airline.py`)**  
  - Attributes:  
    - `id` (str): Two-letter code (e.g., `"SP"`)  
    - `name` (str)  
    - `planes` (list of Airplane)  
  - No extra methods: each Airplane registers itself with its Airline.

- **Airport (`airport.py`)**  
  - Attributes:  
    - `city` (str): Airport code (e.g., `"PAR"`, `"NYC"`)  
    - `planes` (list of Airplane) currently parked  
    - `scheduled_departures` & `scheduled_arrivals` (lists of `(date, Flight)`, kept sorted)  
  - Methods:  
    - `schedule_flight(destination, flight_date)`:  
      1. Finds a plane at this airport that’s available on `flight_date` (using `Airplane.available_on_date`).  
      2. Creates a `Flight` object and inserts it into:  
         - the plane’s `next_flights` (sorted)  
         - this airport’s `scheduled_departures`  
         - destination’s `scheduled_arrivals`  
    - `info(start_date, end_date)`: Prints all departing flights between those dates.

- **Flight (`flight.py`)**  
  - Attributes:  
    - `date` (date)  
    - `origin` (Airport)  
    - `destination` (Airport)  
    - `plane` (Airplane)  
    - `id` (str): Auto-generated as `DEST-COMPANYCODE-DDMMYYYY`  
  - Methods:  
    - `take_off()`: Removes the plane from `origin.planes`.  
    - `land()`: Sets `plane.current_location` to `destination` and adds it to `destination.planes`.

- **Airplane (`airplane.py`)**  
  - Attributes:  
    - `id` (int)  
    - `current_location` (Airport)  
    - `company` (Airline)  
    - `next_flights` (list of `(date, Flight)`, sorted)  
  - Methods:  
    - `fly(destination)`: If there’s a `Flight` scheduled for **today** to `destination`, calls its `take_off()`/`land()` and removes it from `next_flights`.  
    - `location_on_date(date_query)`: Walks through `next_flights` in date order to find where the plane will be on `date_query`.  
    - `available_on_date(date_query, location_query)`: Returns `True` if the plane is at `location_query` on `date_query` and has no flight that day.

---

## How to Run

1. Make sure you have **Python 3.7+** installed (no extra packages needed).  
2. Clone or copy this folder (`air_traffic/`).  
3. In a terminal, run:
   ```bash
   cd air_traffic
   python main.py
You’ll see:

Initial locations of the two demo planes (one in PAR, one in NYC).

Scheduled flights for “tomorrow” and “day after tomorrow.”

Console messages for takeoffs/landings when you call .fly(...).

Final plane locations at the end of the demo.

Tools & Technologies
Python Standard Library Only

datetime for date and timedelta.

bisect.insort to keep flight lists sorted by date.

No external dependencies—runs out of the box.

Notes for Future Improvements
Add route restrictions (only certain airports allowed per airline).

Replace date with datetime.datetime to handle hours/minutes.

Implement flight cancellation/rescheduling.

Build a CLI or simple GUI for interactive scheduling.

Persist data to JSON or a lightweight database.

Add unit tests (pytest or unittest) to verify behavior.