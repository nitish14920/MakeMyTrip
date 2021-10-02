import {ContactForm} from "../Components/TravelAddOn/Contact"
import { Form } from "../Components/TravelAddOn/ContactForm";
import { BookingDetails } from "../Components/TravelAddOn/BookingDetails";
import { TravelAndAddOnn } from "../Components/TravelAddOn/TravelAndAddonn";
import { Popup } from "../Components/TravelAddOn/PopupReview";

export const AfterBookingPage = () => {
  return (
    <div>
      <TravelAndAddOnn />
      <ContactForm />
      <Form/>
      <BookingDetails/>
      <Popup/>
     {" "}
    </div>
  );
};
