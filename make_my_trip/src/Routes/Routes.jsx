import { Route } from "react-router-dom";
import { Flight } from "../Components/Flight/Flight";
import { Switch } from "react-router-dom";

import { BookingPage } from "./BookingPage";

import { Home } from "./Home";
import { ReviewBooking } from "./ReviewPage";
import { AfterBookingPage } from "./AfterBookingReview";
import { Payment } from "./PaymentPage";
import { Confirm } from "./PaymentConfirmation";

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
      <Route path="/afterbooking">
        <AfterBookingPage />
      </Route>

      <Route path="/payment">
        <Payment/>
      </Route>
      <Route path="/afterpayment">
    <Confirm/>
      </Route>
      <Route>Error Page Not Found</Route>
    </Switch>
  );
};
