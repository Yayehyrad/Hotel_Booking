import { useMutation } from "react-query";
import ManageHotelForm from "../forms/managehotelform/ManageHotelForm";
import toast from "react-hot-toast";
import * as apiClient from "../api-client";

function HotelsForm() {
  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      toast.success("saved");
    },
    onError: () => {
      toast.error("something went wrong");
    },
  });

  const handleSave = (hotelFormData: any) => {
    console.log(hotelFormData);
    mutate(hotelFormData);
  };

  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
}

export default HotelsForm;
