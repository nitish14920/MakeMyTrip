import { Route } from "react-router-dom";
import { Flight } from "../Components/Flight/Flight";
import { Switch } from "react-router-dom";

import { BookingPage } from "./BookingPage";

import { Home } from "./Home";
import { ReviewBooking } from "./ReviewPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/flight">
        <Flight />
      </Route>

      <Route path="/review">
        <ReviewBooking />
      </Route>

      <Route path="/booking">
        <BookingPage />
      </Route>

      <Route>Error Page Not Found</Route>
    </Switch>
  );
};
