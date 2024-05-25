"use client";
import React from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "../../utils/cn";
import { useFormContext } from "react-hook-form";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import { HotelFormData } from "./ManageHotelForm";
import { Area } from "../../components/ui/area";

// export type RegisterFormData = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };

export default function DetailsSection() {
  const {
    register,

    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="max-w-full mt-10 mb-10 border-2 border-blue-200 shadow-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
        Add a new Hotel room
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        create an account
      </p>

      <div className="my-8">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="projectmayhem@fc.com"
            type="text"
            {...register("name", { required: "This field is required" })}
          />{" "}
          {errors.name && (
            <span className=" text-red-600">{errors.name.message}</span>
          )}
        </LabelInputContainer>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="Tyler"
              type="text"
              {...register("city", { required: "This field is required" })}
            />
            {errors.city && (
              <span className=" text-red-600">{errors.city.message}</span>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              placeholder="Durden"
              type="text"
              {...register("country", { required: "This field is required" })}
            />
            {errors.country && (
              <span className=" text-red-600">{errors.country.message}</span>
            )}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="description">Description</Label>
          <Area
            id="description"
            type="text"
            {...register("description", {
              required: "This field is required",
            })}
          />{" "}
          {errors.description && (
            <span className=" text-red-600">{errors.description.message}</span>
          )}
        </LabelInputContainer>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="pricePerNight"> Price/Night</Label>
            <Input
              id="pricePerNight"
              type="number"
              min={1}
              {...register("pricePerNight", {
                validate: (val) => {
                  if (!val) {
                    return "This field is required";
                  }
                },
              })}
            />{" "}
            {errors.pricePerNight && (
              <span className=" text-red-600">
                {errors.pricePerNight.message}
              </span>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="starRating"> Star Rating</Label>
            <Input
              id="starRating"
              type="number"
              min={1}
              max={5}
              {...register("starRating", {
                validate: (val) => {
                  if (val < 1 || val > 5) {
                    return "Must be between 1 and 5";
                  }
                },
              })}
            />{" "}
            {errors.starRating && (
              <span className=" text-red-600">{errors.starRating.message}</span>
            )}
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-8 max-w-[50%]">
          <Label htmlFor="starRating"> Stars</Label>
          <Input
            id="starRating"
            type="number"
            min={1}
            max={5}
            {...register("starRating", {
              validate: (val) => {
                if (val < 1 || val > 5) {
                  return "Must be between 1 and 5";
                }
              },
            })}
          />{" "}
          {errors.starRating && (
            <span className=" text-red-600">{errors.starRating.message}</span>
          )}
        </LabelInputContainer>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
