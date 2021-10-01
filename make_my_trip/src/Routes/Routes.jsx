import { Route } from "react-router-dom";

import { Switch } from "react-router-dom";
import { BookingPage } from "./BookingPage";
import { flightSelection } from "./FlightSelection";
import { Home } from "./Home";
import { ReviewBooking } from "./ReviewPage";

export const Routes = () => {
  return (
    <Switch>
      <Route path="./">
        <Home />
      </Route>

      <Route path="/flightselection">
        <flightSelection />
      </Route>

      <Route path="/review"><ReviewBooking/></Route>

      <Route path="/booking"><BookingPage/></Route>

      <Route>Error Page Not Found</Route>
    </Switch>
  );
};
